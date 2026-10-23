import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { randomBytes, createHash, randomInt } from 'node:crypto';
import { db, all, one, run, json, hash, verify, audit, initialize, transaction, createBackup } from './lib/db.mjs';
import { askAI, aiConfigured } from './lib/ai.mjs';

initialize();
const root = fileURLToPath(new URL('.', import.meta.url));
const now = () => Date.now();
const fail = (message,status=400) => {const e=new Error(message);e.status=status;throw e;};
const cleanUser = u => ({id:u.id,name:u.name,username:u.username,role:u.role,class_name:u.class_name,must_change:!!u.must_change,locked:!!u.locked});
const text = (value,label,max=500) => {if(typeof value!=='string'||!value.trim()||value.trim().length>max)fail(`${label} không hợp lệ (tối đa ${max} ký tự).`);return value.trim();};
const integer = (v,min,max) => {const n=Number(v);if(!Number.isInteger(n)||n<min||n>max)fail('Số lượng hoặc thời gian không hợp lệ.');return n;};
const teacher = u => {if(u.role!=='teacher')fail('Chỉ giáo viên có quyền thực hiện.',403);};
const student = u => {if(u.role!=='student')fail('Chỉ học sinh có quyền thực hiện.',403);};
function scopedStudent(u,id) {teacher(u);const s=one("SELECT * FROM users WHERE id=? AND owner_id=? AND role='student'",Number(id),u.id);if(!s)fail('Không tìm thấy học sinh.',404);return s;}
function scopedQuestion(u,id) {teacher(u);const q=one('SELECT * FROM questions WHERE id=? AND teacher_id=?',Number(id),u.id);if(!q)fail('Không tìm thấy câu hỏi.',404);return q;}
function scopedDocument(u,id) {teacher(u);const d=one('SELECT * FROM documents WHERE id=? AND teacher_id=?',Number(id),u.id);if(!d)fail('Không tìm thấy tài liệu.',404);return d;}
function parseQuestion(q) {return {...q,options:json(q.options),hints:json(q.hints),sources:json(q.sources)};}
function publicQuestion(q, hints=[]) {return {id:q.id,subject:q.subject,lesson:q.lesson,type:q.type,difficulty:q.difficulty,prompt:q.prompt,kind:q.kind,options:json(q.options),hints,totalHints:json(q.hints).length};}
const shuffle = list => {const a=[...list];for(let i=a.length-1;i>0;i--){const j=randomInt(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;};
function validateQuestion(b, owner) {
 const q={};
 for(const key of ['subject','lesson','type','prompt','answer','solution']) q[key]=text(b[key],key,key==='solution'?12000:key==='prompt'?8000:1000);
 if(!['easy','medium','hard'].includes(b.difficulty))fail('Độ khó không hợp lệ.');q.difficulty=b.difficulty;
 if(!['choice','number','text'].includes(b.kind))fail('Kiểu đáp án không hợp lệ.');q.kind=b.kind;
 q.options=Array.isArray(b.options)?b.options.map(x=>text(x,'Lựa chọn',2000)):[];
 if(q.kind==='choice'&&(q.options.length<2||q.options.length>8||!q.options.includes(q.answer)))fail('Trắc nghiệm cần 2–8 lựa chọn và đáp án phải thuộc các lựa chọn.');
 q.tolerance=Number(b.tolerance||0);if(!Number.isFinite(q.tolerance)||q.tolerance<0||q.tolerance>100)fail('Sai số không hợp lệ.');
 if(q.kind==='number'&&!Number.isFinite(Number(q.answer.replace(',','.'))))fail('Đáp án phải là số.');
 if(!Array.isArray(b.hints)||!b.hints.length||b.hints.length>10)fail('Cần 1–10 bước gợi ý.');q.hints=b.hints.map(h=>text(h,'Gợi ý',3000));
 q.sources=Array.isArray(b.sources)?b.sources:[];
 if(!q.sources.length)fail('Cần ít nhất một nguồn tài liệu.');
 q.sources=q.sources.map(s=>{const d=one('SELECT id,content FROM documents WHERE id=? AND teacher_id=?',Number(s.documentId),owner);if(!d)fail('Nguồn không thuộc quyền quản lý.');const quote=text(s.quote,'Trích dẫn',3000);if(!d.content.includes(quote))fail('Trích dẫn không khớp tài liệu nguồn.');return {documentId:d.id,location:text(s.location||'Nội dung tài liệu','Vị trí',200),quote};});
 return q;
}
function insertQuestion(u,b,family=randomBytes(12).toString('hex'),version=1) {
 const q=validateQuestion(b,u.id);
 const r=run(`INSERT INTO questions(teacher_id,family,version,subject,lesson,type,difficulty,prompt,kind,options,answer,tolerance,solution,hints,sources)
 VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,u.id,family,version,q.subject,q.lesson,q.type,q.difficulty,q.prompt,q.kind,JSON.stringify(q.options),q.answer,q.tolerance,q.solution,JSON.stringify(q.hints),JSON.stringify(q.sources));
 return Number(r.lastInsertRowid);
}
function duplicates(u,prompt,exclude=0) {
 const normalize = s=>s.toLocaleLowerCase('vi').normalize('NFC').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
 const a=normalize(prompt),setA=new Set(a.split(' '));
 return all('SELECT id,prompt,family FROM questions WHERE teacher_id=? AND id!=?',u.id,exclude).map(q=>{
  const b=normalize(q.prompt),setB=new Set(b.split(' '));const intersection=[...setA].filter(v=>setB.has(v)).length;const score=a===b?1:intersection/new Set([...setA,...setB]).size;
  return {id:q.id,prompt:q.prompt,score:Math.round(score*100)};
 }).filter(q=>q.score>=78).slice(0,10);
}
function getAttempt(u,id) {
 const a=one(`SELECT a.*,s.question_ids,s.assignment_id,x.teacher_id,x.mode,x.title,x.minutes,x.allow_hints,x.release,x.closes_at
 FROM attempts a JOIN student_assignments s ON s.id=a.student_assignment_id JOIN assignments x ON x.id=s.assignment_id WHERE a.id=?`,Number(id));
 if(!a || (u.role==='student'?a.student_id!==u.id:a.teacher_id!==u.id))fail('Không tìm thấy lượt làm.',404);
 return a;
}
function score(question,response) {
 if(question.kind==='text')return null;
 if(question.kind==='number') {
  const value=String(response).trim().replace(',','.');
  if(!value||!Number.isFinite(Number(value)))return 0;
  return Math.abs(Number(value)-Number(question.answer.replace(',','.'))) <= question.tolerance ? 1:0;
 }
 return response.trim()===question.answer.trim()?1:0;
}
function gradeAnswer(a,q,response) {
 const correct=score(q,response);
 const feedback=correct===1?'Chính xác. Em đã làm tốt!':correct===0?'Kết quả chưa đúng. Hãy kiểm tra dữ kiện và các bước trong lời giải.':'Câu tự luận đang chờ giáo viên kiểm tra.';
 run(`INSERT INTO answers(attempt_id,question_id,draft,response,correct,feedback,graded_at) VALUES(?,?,?,?,?,?,CURRENT_TIMESTAMP)
 ON CONFLICT(attempt_id,question_id) DO UPDATE SET draft=excluded.draft,response=excluded.response,correct=excluded.correct,feedback=excluded.feedback,graded_at=CURRENT_TIMESTAMP`,a.id,q.id,response,response,correct,feedback);
}
function finishAttempt(a) {
 if(a.status!=='active')return;
 transaction(()=>{
  for(const id of json(a.question_ids)) {
   const q=one('SELECT * FROM questions WHERE id=?',id);const ans=one('SELECT * FROM answers WHERE attempt_id=? AND question_id=?',a.id,id);
   if(ans?.response===null||!ans)gradeAnswer(a,q,ans?.draft||'');
  }
  run("UPDATE attempts SET status='submitted',submitted_at=? WHERE id=? AND status='active'",a.deadline&&now()>a.deadline?a.deadline:now(),a.id);
 });
}
function expire(a) {if(a.status==='active'&&a.deadline&&now()>=a.deadline){finishAttempt(a);a.status='submitted';}}
function visibleResults(a) {return a.mode==='practice'||(a.status==='submitted'&&(a.release==='immediate'||(a.closes_at&&now()>=Date.parse(a.closes_at))));}
function attemptView(u,a) {
 expire(a);const reveal=u.role==='teacher'||visibleResults(a);
 const questions=json(a.question_ids).map(id=>{
  const q=one('SELECT * FROM questions WHERE id=?',id);
  const events=all('SELECT step FROM hint_events WHERE attempt_id=? AND question_id=? ORDER BY step',a.id,id);
  const hints=events.map(e=>json(q.hints)[e.step]);
  let answer=one('SELECT draft,response,correct,feedback FROM answers WHERE attempt_id=? AND question_id=?',a.id,id)||null;
  if(answer&&!reveal)answer={draft:answer.draft,response:answer.response};
  return {...publicQuestion(q,hints),answer,...(reveal&&answer?.response!==null&&answer?{solution:q.solution,expected:q.answer}:{})};
 });
 return {id:a.id,title:a.title,mode:a.mode,status:a.status,started_at:a.started_at,deadline:a.deadline,serverTime:now(),allow_hints:!!a.allow_hints,reveal,questions};
}
function analytics(u) {
 const owner=u.role==='teacher'?u.id:u.owner_id;
 const students=u.role==='teacher'?all("SELECT id,name,class_name FROM users WHERE owner_id=? AND role='student'",owner):[{id:u.id,name:u.name,class_name:u.class_name}];
 let rows=all(`SELECT n.id,n.attempt_id,n.question_id,n.response,n.correct,n.graded_at,a.student_id,a.started_at,a.submitted_at,a.status,
 q.lesson,q.type,q.difficulty,q.subject,x.mode,x.release,x.closes_at,
 (SELECT count(*) FROM hint_events h WHERE h.attempt_id=a.id AND h.question_id=q.id) AS hints
 FROM answers n JOIN attempts a ON a.id=n.attempt_id JOIN questions q ON q.id=n.question_id
 JOIN student_assignments s ON s.id=a.student_assignment_id JOIN assignments x ON x.id=s.assignment_id
 WHERE q.teacher_id=? AND n.response IS NOT NULL ORDER BY a.started_at,n.id`,owner);
 if(u.role==='student')rows=rows.filter(r=>r.student_id===u.id&&visibleResults(r));
 const groups=new Map();
 for(const s of students)for(const r of rows.filter(r=>r.student_id===s.id)) {
  const key=`${s.id}|${r.subject}|${r.lesson}|${r.type}`;
  const g=groups.get(key)||{studentId:s.id,student:s.name,subject:r.subject,lesson:r.lesson,type:r.type,total:0,right:0,wrong:0,pending:0,hints:0,recent:[]};
  g.total++;if(r.correct===null)g.pending++;else if(r.correct)g.right++;else g.wrong++;g.hints+=r.hints;g.recent.push(r.correct);groups.set(key,g);
 }
 const summary=[...groups.values()].map(g=>{const n=g.right+g.wrong;const rate=n?Math.round(g.right/n*100):null;const known=g.recent.filter(v=>v!==null);const recent=known.slice(-5);return {...g,rate,risk:n>=5&&recent.length>=5&&recent.filter(Boolean).length/recent.length<0.5,level:n<5?'medium':rate>=80&&g.hints/n<0.5?'hard':rate<50?'easy':'medium',reason:n<5?'Chưa đủ 5 câu đã chấm để kết luận.':rate<60?'Ưu tiên ôn lại dạng bài này.':'Tiếp tục luyện tập để củng cố.'};});
 const timeline=Object.values(rows.reduce((acc,r)=>{const date=new Date(r.started_at).toISOString().slice(0,10);const g=acc[date]||{date,total:0,right:0,pending:0,hints:0,easy:0,medium:0,hard:0,seconds:0,attempts:[]};g.total++;if(r.correct===null)g.pending++;if(r.correct===1)g.right++;g.hints+=r.hints;g[r.difficulty]++;if(r.submitted_at&&!g.attempts.includes(r.attempt_id)){g.seconds+=Math.round((r.submitted_at-r.started_at)/1000);g.attempts.push(r.attempt_id);}acc[date]=g;return acc;},{})).map(({attempts,...g})=>g);
 return {students,groups:summary,rows,timeline,ruleVersion:'mastery-v1-min5'};
}
async function extractFile(b) {
 const extension=String(b.filename||'').split('.').pop().toLowerCase();
 if(!['pdf','docx','txt'].includes(extension))fail('Chỉ nhận PDF, DOCX hoặc TXT.');
 if(typeof b.base64!=='string'||! /^[A-Za-z0-9+/]*={0,2}$/.test(b.base64)||b.base64.length>42*1024*1024)fail('Tệp không hợp lệ hoặc vượt 30 MB.');
 const raw=Buffer.from(b.base64,'base64');
 if(raw.length>30*1024*1024)fail('Tối đa 30 MB.');
 if(extension==='pdf'&&!raw.subarray(0,5).equals(Buffer.from('%PDF-')))fail('Nội dung không phải PDF.');
 if(extension==='docx'&&raw.subarray(0,2).toString()!=='PK')fail('Nội dung không phải DOCX.');
 if(extension==='txt')return raw.toString('utf8').replace(/^\uFEFF/,'');
 return await new Promise((res,rej)=>{
  const child=spawn(process.env.PYTHON||'python',[join(root,'scripts/extract.py')],{stdio:['pipe','pipe','pipe'],windowsHide:true});let output='';
  const timer=setTimeout(()=>{child.kill();rej(Object.assign(new Error('Xử lý tệp quá thời gian cho phép.'),{status:400}));},30000);
  child.stdout.on('data',chunk=>{output+=chunk;if(output.length>1500000)child.kill();});child.stderr.resume();
  child.on('error',()=>{clearTimeout(timer);rej(Object.assign(new Error('Cần cài Python và requirements.txt để đọc PDF/Word.'),{status:400}));});
  child.on('close',()=>{clearTimeout(timer);try{const result=JSON.parse(output);if(result.error)rej(Object.assign(new Error(result.error),{status:400}));else res(result.text);}catch{rej(Object.assign(new Error('Không đọc được tệp. Kiểm tra Python và thư viện trích xuất.'),{status:400}));}});
  child.stdin.on('error',()=>{});child.stdin.end(JSON.stringify({extension,base64:b.base64}));
 });
}
const rateLimits=new Map();
function rate(key,max,windowMs) {const v=rateLimits.get(key)||{count:0,until:now()+windowMs};if(v.until<now()){v.count=0;v.until=now()+windowMs;}v.count++;rateLimits.set(key,v);if(v.count>max)fail('Quá nhiều yêu cầu. Hãy thử lại sau.',429);}
async function body(req) {let size=0;const chunks=[];for await(const chunk of req){size+=chunk.length;if(size>43*1024*1024)fail('Yêu cầu vượt giới hạn.',413);chunks.push(chunk);}try{return JSON.parse(Buffer.concat(chunks).toString()||'{}');}catch{fail('JSON không hợp lệ.');}}
const sessionKey = token=>createHash('sha256').update(token).digest('hex');
function auth(req) {
 const raw=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith('btvn='))?.slice(5);
 if(!raw)return null;
 return one('SELECT u.*,s.csrf,s.token AS session_token FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires>? AND u.locked=0',sessionKey(raw),now());
}
async function api(req,res,url) {
 const p=url.pathname,method=req.method;
 if(method==='GET'&&p==='/api/health')return {ok:true};
 const u=auth(req);
 if(method!=='GET') {
  const site=req.headers['sec-fetch-site'];if(site==='cross-site')fail('Yêu cầu không cùng nguồn.',403);
  if(!String(req.headers['content-type']||'').startsWith('application/json'))fail('Yêu cầu phải là JSON.',415);
  if(u&&req.headers['x-csrf-token']!==u.csrf)fail('Phiên bảo mật không hợp lệ. Hãy tải lại trang.',403);
 }
 if(method==='POST'&&p==='/api/login') {
  rate('login:'+req.socket.remoteAddress,12,15*60*1000);const b=await body(req);
  const username=text(b.username,'Tên đăng nhập',80).toLowerCase();const password=text(b.password,'Mật khẩu',200);
  const found=one('SELECT * FROM users WHERE username=?',username);
  const dummy='00000000000000000000000000000000:'+ '00'.repeat(64);
  const valid=verify(password,found?.password||dummy);
  if(!found||!valid||found.locked)fail('Tên đăng nhập hoặc mật khẩu không đúng, hoặc tài khoản đã bị khóa.',401);
  const token=randomBytes(32).toString('hex'),csrf=randomBytes(24).toString('hex');
  run('INSERT INTO sessions(token,user_id,csrf,expires) VALUES(?,?,?,?)',sessionKey(token),found.id,csrf,now()+12*60*60*1000);
  res.setHeader('Set-Cookie',`btvn=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=43200${process.env.COOKIE_SECURE==='true'?'; Secure':''}`);audit(found.id,'login',found.id);
  return {user:cleanUser(found),csrf,aiConfigured:aiConfigured()};
 }
 if(!u)fail('Vui lòng đăng nhập.',401);
 if(method==='GET'&&p==='/api/me')return {user:cleanUser(u),csrf:u.csrf,aiConfigured:aiConfigured()};
 if(method==='POST'&&p==='/api/logout'){run('DELETE FROM sessions WHERE token=?',u.session_token);res.setHeader('Set-Cookie','btvn=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');return {ok:true};}
 if(method==='POST'&&p==='/api/password') {
  const b=await body(req);const password=text(b.password,'Mật khẩu mới',200);
  rate('password:'+u.id,10,15*60*1000);
  if(!verify(String(b.current||''),u.password))fail('Mật khẩu hiện tại không đúng.');
  if(password.length<10||password===b.current)fail('Mật khẩu mới cần ít nhất 10 ký tự và khác mật khẩu cũ.');
  transaction(()=>{run('UPDATE users SET password=?,must_change=0 WHERE id=?',hash(password),u.id);run('DELETE FROM sessions WHERE user_id=? AND token!=?',u.id,u.session_token);audit(u.id,'password_changed',u.id);});return {ok:true};
 }
 if(u.must_change)fail('Bạn cần đổi mật khẩu tạm thời trước khi tiếp tục.',403);
 if(method==='GET'&&p==='/api/students'){teacher(u);return all("SELECT id,username,name,class_name,locked,must_change FROM users WHERE owner_id=? AND role='student' ORDER BY name",u.id);}
 if(method==='POST'&&p==='/api/students') {
  teacher(u);const b=await body(req);const username=text(b.username,'Tên đăng nhập',60).toLowerCase();if(!/^[a-z0-9._-]+$/.test(username))fail('Tên đăng nhập chỉ gồm chữ thường không dấu, số, dấu chấm, gạch dưới, gạch ngang.');
  const password=text(b.password,'Mật khẩu tạm',200);if(password.length<10)fail('Mật khẩu tạm cần ít nhất 10 ký tự.');
  if(one('SELECT id FROM users WHERE username=?',username))fail('Tên đăng nhập đã tồn tại.');
  const r=run("INSERT INTO users(username,name,password,role,owner_id,class_name,must_change) VALUES(?,?,?,'student',?,?,1)",username,text(b.name,'Họ tên',120),hash(password),u.id,text(b.class_name||'Lớp học','Lớp',80));audit(u.id,'student_created',r.lastInsertRowid);return {id:Number(r.lastInsertRowid)};
 }
 if(method==='POST'&&/^\/api\/students\/\d+$/.test(p)) {
  const s=scopedStudent(u,p.split('/').pop());const b=await body(req);
  transaction(()=>{
   if(b.action==='reset'){const password=text(b.password,'Mật khẩu tạm',200);if(password.length<10)fail('Cần ít nhất 10 ký tự.');run('UPDATE users SET password=?,must_change=1 WHERE id=?',hash(password),s.id);run('DELETE FROM sessions WHERE user_id=?',s.id);}
   else if(b.action==='lock'){run('UPDATE users SET locked=? WHERE id=?',s.locked?0:1,s.id);run('DELETE FROM sessions WHERE user_id=?',s.id);}
   else if(b.action==='edit')run('UPDATE users SET name=?,class_name=? WHERE id=?',text(b.name,'Họ tên',120),text(b.class_name,'Lớp',80),s.id);
   else fail('Thao tác không hợp lệ.');audit(u.id,'student_'+b.action,s.id);
  });return {ok:true};
 }
 if(method==='GET'&&p==='/api/documents'){teacher(u);return all('SELECT id,title,filename,status,analysis,created_at FROM documents WHERE teacher_id=? ORDER BY id DESC',u.id).map(d=>({...d,analysis:json(d.analysis,{})}));}
 if(method==='GET'&&/^\/api\/documents\/\d+$/.test(p)){const d=scopedDocument(u,p.split('/').pop());delete d.file_base64;return {...d,analysis:json(d.analysis,{})};}
 if(method==='POST'&&p==='/api/documents') {
  teacher(u);rate('upload:'+u.id,20,60000);const b=await body(req);let content=b.base64?await extractFile(b):b.content;
  content=text(content,'Nội dung tài liệu',300000);const r=run('INSERT INTO documents(teacher_id,title,filename,file_base64,content) VALUES(?,?,?,?,?)',u.id,text(b.title,'Tên tài liệu',200),b.filename?text(b.filename,'Tên tệp',200):null,b.base64||null,content);audit(u.id,'document_uploaded',r.lastInsertRowid);return {id:Number(r.lastInsertRowid)};
 }
 if(method==='POST'&&/^\/api\/documents\/\d+\/analyze$/.test(p)) {
  const d=scopedDocument(u,p.split('/')[3]);rate('ai:'+u.id,10,60000);
  const result=await askAI(u.id,'analyze',[d],'Phân tích nguồn. Trả {theory:string,types:string[],steps:string[],conflicts:string[],locations:string[]}. Không thêm kiến thức không có trong tài liệu.');
  if(typeof result.theory!=='string'||!Array.isArray(result.types)||!Array.isArray(result.steps))fail('AI trả cấu trúc không hợp lệ. Hãy thử lại.',502);
  run("UPDATE documents SET analysis=?,status='analyzed' WHERE id=?",JSON.stringify(result),d.id);return result;
 }
 if(method==='POST'&&/^\/api\/documents\/\d+\/confirm$/.test(p)) {
  const d=scopedDocument(u,p.split('/')[3]);const b=await body(req);
  const result={theory:text(b.theory,'Lý thuyết',18000),types:(b.types||[]).map(v=>text(v,'Dạng bài',500)),steps:(b.steps||[]).map(v=>text(v,'Bước giải',2000))};
  run("UPDATE documents SET analysis=?,status='confirmed' WHERE id=?",JSON.stringify(result),d.id);audit(u.id,'document_confirmed',d.id);return {ok:true};
 }
 if(method==='GET'&&p==='/api/questions') {
  teacher(u);let qs=all('SELECT * FROM questions WHERE teacher_id=? ORDER BY id DESC',u.id);
  const search=url.searchParams.get('q')?.toLowerCase();if(search)qs=qs.filter(q=>(q.prompt+' '+q.lesson+' '+q.type).toLowerCase().includes(search));
  for(const key of ['subject','lesson','type','difficulty','status']){const value=url.searchParams.get(key);if(value)qs=qs.filter(q=>q[key]===value);}
  return qs.map(q=>({...parseQuestion(q),duplicates:duplicates(u,q.prompt,q.id)}));
 }
 if(method==='POST'&&p==='/api/questions'){teacher(u);const b=await body(req);const id=insertQuestion(u,b);audit(u.id,'question_created',id);return {id,duplicates:duplicates(u,b.prompt,id)};}
 if(method==='POST'&&p==='/api/generate') {
  teacher(u);rate('ai:'+u.id,10,60000);const b=await body(req);const count=integer(b.count,1,20);
  if(!Array.isArray(b.documentIds)||!b.documentIds.length||b.documentIds.length>5)fail('Chọn 1–5 tài liệu.');
  const docs=b.documentIds.map(id=>scopedDocument(u,id));if(docs.some(d=>d.status!=='confirmed'))fail('Xác nhận phân tích của tất cả tài liệu trước khi tạo bài.');
  const constraints={subject:text(b.subject,'Môn',100),lesson:text(b.lesson,'Bài học',200),type:text(b.type,'Dạng bài',200),difficulty:b.difficulty};
  if(!['easy','medium','hard'].includes(constraints.difficulty))fail('Độ khó không hợp lệ.');
  const result=await askAI(u.id,'generate',docs,`Tạo chính xác ${count} câu theo ${JSON.stringify(constraints)}. Giữ phương pháp giáo viên. Nếu nguồn mâu thuẫn trả conflicts và questions:[]. Trả {conflicts:string[],questions:[{prompt,kind:"number"|"choice"|"text",options:string[],answer:string,tolerance:number,solution:string,hints:string[],sources:[{documentId:number,location:string,quote:string}]}]}. quote phải trích nguyên văn từ content nguồn. Đáp án choice phải là nội dung lựa chọn. Không tạo câu thiếu dữ kiện.`);
  if(result.conflicts?.length) return {ids:[],conflicts:result.conflicts};
  if(!Array.isArray(result.questions)||result.questions.length>count)fail('AI trả số câu hoặc cấu trúc không hợp lệ.',502);
  const ids=transaction(()=>result.questions.map(q=>insertQuestion(u,{...q,...constraints})));
  audit(u.id,'ai_questions_generated',ids.join(','));return {ids,requested:count,created:ids.length,conflicts:[]};
 }
 if(method==='POST'&&/^\/api\/questions\/\d+$/.test(p)) {
  const q=scopedQuestion(u,p.split('/').pop());const b=await body(req);
  if(b.action==='edit'){const version=one('SELECT max(version) AS v FROM questions WHERE family=? AND teacher_id=?',q.family,u.id).v+1;const id=insertQuestion(u,b,q.family,version);audit(u.id,'question_version_created',id);return {id};}
  if(b.action==='approve'){if(q.status!=='draft')fail('Chỉ duyệt bản nháp.');validateQuestion(parseQuestion(q),u.id);if(duplicates(u,q.prompt,q.id).length&&!b.acknowledgeDuplicates)fail('Có câu tương tự. Hãy xác nhận đã kiểm tra trùng lặp.');run("UPDATE questions SET status='approved',approved_by=?,approved_at=CURRENT_TIMESTAMP WHERE id=?",u.id,q.id);}
  else if(b.action==='publish'){if(q.status!=='approved')fail('Cần phê duyệt trước khi xuất bản.');transaction(()=>{run("UPDATE questions SET status='retired' WHERE teacher_id=? AND family=? AND status='published'",u.id,q.family);run("UPDATE questions SET status='published' WHERE id=?",q.id);});}
  else if(b.action==='retire')run("UPDATE questions SET status='retired' WHERE id=?",q.id);
  else fail('Thao tác không hợp lệ.');audit(u.id,'question_'+b.action,q.id);return {ok:true};
 }
 if(method==='GET'&&p==='/api/catalog') {
  student(u);let qs=all("SELECT * FROM questions WHERE teacher_id=? AND status='published' ORDER BY subject,lesson,type,id",u.owner_id);
  const search=url.searchParams.get('q')?.toLowerCase();if(search)qs=qs.filter(q=>(q.prompt+' '+q.subject+' '+q.lesson+' '+q.type).toLowerCase().includes(search));
  for(const key of ['subject','lesson','type','difficulty']){const value=url.searchParams.get(key);if(value)qs=qs.filter(q=>q[key]===value);}
  return qs.map(q=>publicQuestion(q));
 }
 if(method==='GET'&&p==='/api/assignments') {
  if(u.role==='teacher')return all('SELECT x.*,(SELECT count(*) FROM student_assignments s WHERE s.assignment_id=x.id) AS student_count FROM assignments x WHERE teacher_id=? ORDER BY id DESC',u.id);
  return all(`SELECT x.*,s.id AS student_assignment_id,s.question_ids,a.id AS attempt_id,a.status AS attempt_status
   FROM student_assignments s JOIN assignments x ON x.id=s.assignment_id LEFT JOIN attempts a ON a.student_assignment_id=s.id
   WHERE s.student_id=? ORDER BY x.id DESC`,u.id).map(x=>({...x,count:json(x.question_ids).length,question_ids:undefined}));
 }
 if(method==='POST'&&p==='/api/assignments') {
  teacher(u);const b=await body(req);if(!['practice','exam'].includes(b.mode))fail('Loại đề không hợp lệ.');
  const students=[...new Set((b.studentIds||[]).map(Number))];if(!students.length)fail('Chọn học sinh.');students.forEach(id=>scopedStudent(u,id));
  let pool=all("SELECT * FROM questions WHERE teacher_id=? AND status='published'",u.id);
  if(b.questionIds?.length)pool=pool.filter(q=>b.questionIds.includes(q.id));
  for(const key of ['subject','lesson','type','difficulty'])if(b[key])pool=pool.filter(q=>q[key]===b[key]);
  const count=integer(b.count,1,100);if(pool.length<count)fail(`Chỉ có ${pool.length} câu hợp lệ, không đủ ${count} câu.`);
  const minutes=b.mode==='exam'?integer(b.minutes,1,240):0;
  const parseDate=v=>{if(!v)return null;const t=Date.parse(v);if(!Number.isFinite(t))fail('Ngày giờ không hợp lệ.');return new Date(t).toISOString();};
  const opens=parseDate(b.opens_at),closes=parseDate(b.closes_at);if(opens&&closes&&opens>=closes)fail('Thời gian đóng phải sau thời gian mở.');
  const release=b.release==='after_close'?'after_close':'immediate';if(release==='after_close'&&!closes)fail('Cần thời gian đóng để công bố sau khi kết thúc.');
  return transaction(()=>{
   const r=run('INSERT INTO assignments(teacher_id,title,mode,minutes,allow_hints,release,opens_at,closes_at) VALUES(?,?,?,?,?,?,?,?)',u.id,text(b.title,'Tên đề',200),b.mode,minutes,b.mode==='practice'||b.allow_hints?1:0,release,opens,closes);
   const id=Number(r.lastInsertRowid);const fixed=shuffle(pool).slice(0,count).map(q=>q.id);
   const blueprint=fixed.map(qid=>pool.find(q=>q.id===qid));
   for(const sid of students){
    let ids=fixed;
    if(b.variants){const used=new Set();ids=shuffle(blueprint.map(original=>{
     const candidates=pool.filter(q=>!used.has(q.id)&&q.subject===original.subject&&q.lesson===original.lesson&&q.type===original.type&&q.difficulty===original.difficulty);
     const chosen=shuffle(candidates)[0];used.add(chosen.id);return chosen.id;
    }));}
    run('INSERT INTO student_assignments(assignment_id,student_id,question_ids) VALUES(?,?,?)',id,sid,JSON.stringify(ids));
   }
   audit(u.id,'assignment_created',id);return {id};
  });
 }
 if(method==='POST'&&p==='/api/practice') {
  student(u);const b=await body(req);let pool=all("SELECT * FROM questions WHERE teacher_id=? AND status='published'",u.owner_id);
  if(b.type)pool=pool.filter(q=>q.type===b.type);if(b.lesson)pool=pool.filter(q=>q.lesson===b.lesson);if(b.subject)pool=pool.filter(q=>q.subject===b.subject);
  if(b.questionId)pool=pool.filter(q=>q.id===Number(b.questionId));
  if(b.review){const wrong=analytics(u).rows.filter(r=>r.correct===0).map(r=>r.question_id);pool=pool.filter(q=>wrong.includes(q.id));}
  if(b.adaptive){const groups=analytics(u).groups;const target=groups.find(g=>g.type===b.type&&g.lesson===b.lesson&&g.subject===b.subject)?.level||'medium';const suitable=pool.filter(q=>q.difficulty===target);if(suitable.length)pool=suitable;}
  if(!pool.length)fail('Chưa có bài tập phù hợp đã được xuất bản.');
  const ids=shuffle(pool).slice(0,Math.min(Number(b.count)||5,20)).map(q=>q.id);
  return transaction(()=>{const r=run("INSERT INTO assignments(teacher_id,title,mode,allow_hints) VALUES(?,?,'practice',1)",u.owner_id,b.review?'Ôn tập từ câu đã sai':b.adaptive?'Luyện tập theo năng lực':'Luyện tập tự chọn');const s=run('INSERT INTO student_assignments(assignment_id,student_id,question_ids) VALUES(?,?,?)',r.lastInsertRowid,u.id,JSON.stringify(ids));return {studentAssignmentId:Number(s.lastInsertRowid)};});
 }
 if(method==='POST'&&p==='/api/start') {
  student(u);const b=await body(req);const s=one('SELECT s.*,x.minutes,x.opens_at,x.closes_at FROM student_assignments s JOIN assignments x ON x.id=s.assignment_id WHERE s.id=? AND s.student_id=?',Number(b.studentAssignmentId),u.id);
  if(!s)fail('Không tìm thấy đề.',404);const existing=one('SELECT id FROM attempts WHERE student_assignment_id=?',s.id);if(existing)return {attemptId:existing.id};
  if(s.opens_at&&now()<Date.parse(s.opens_at))fail('Chưa đến thời gian làm bài.');if(s.closes_at&&now()>=Date.parse(s.closes_at))fail('Đề đã hết hạn.');
  const deadline=s.minutes?Math.min(now()+s.minutes*60000,s.closes_at?Date.parse(s.closes_at):Infinity):(s.closes_at?Date.parse(s.closes_at):null);
  const r=run('INSERT INTO attempts(student_assignment_id,student_id,started_at,deadline) VALUES(?,?,?,?)',s.id,u.id,now(),deadline);return {attemptId:Number(r.lastInsertRowid)};
 }
 if(method==='GET'&&/^\/api\/attempts\/\d+$/.test(p))return attemptView(u,getAttempt(u,p.split('/').pop()));
 if(method==='POST'&&/^\/api\/attempts\/\d+\/(save|answer|hint|finish|explain)$/.test(p)) {
  student(u);const a=getAttempt(u,p.split('/')[3]);expire(a);const action=p.split('/')[4];const b=await body(req);
  if(action==='finish'){finishAttempt(a);return attemptView(u,getAttempt(u,a.id));}
  if(a.status!=='active'&&action!=='explain')fail('Lượt làm đã kết thúc.',409);
  const qid=Number(b.questionId);if(!json(a.question_ids).includes(qid))fail('Câu hỏi không thuộc đề.',404);const q=one('SELECT * FROM questions WHERE id=?',qid);
  if(action==='save'||action==='answer') {
   const response=typeof b.response==='string'?b.response.slice(0,10000):'';
   const existing=one('SELECT * FROM answers WHERE attempt_id=? AND question_id=?',a.id,qid);
   if(existing?.response!==null&&existing) return attemptView(u,a);
   if(action==='save')run('INSERT INTO answers(attempt_id,question_id,draft) VALUES(?,?,?) ON CONFLICT(attempt_id,question_id) DO UPDATE SET draft=excluded.draft,saved_at=CURRENT_TIMESTAMP',a.id,qid,response);
   else gradeAnswer(a,q,response);
   return attemptView(u,a);
  }
  if(action==='hint') {
   if(!a.allow_hints)fail('Đề này không cho phép gợi ý.',403);const steps=json(q.hints),opened=all('SELECT step FROM hint_events WHERE attempt_id=? AND question_id=?',a.id,qid).length;
   if(opened<steps.length)run('INSERT OR IGNORE INTO hint_events(attempt_id,student_id,question_id,step) VALUES(?,?,?,?)',a.id,u.id,qid,opened);
   return attemptView(u,a);
  }
  if(action==='explain') {
   if(!visibleResults(a))fail('Chưa đến thời điểm xem phản hồi.',403);const ans=one('SELECT * FROM answers WHERE attempt_id=? AND question_id=?',a.id,qid);if(!ans||ans.correct!==0)fail('Chỉ giải thích câu đã được chấm sai.');
   rate('explain:'+u.id,10,60000);
   const result=await askAI(u.owner_id,'explain',[{id:q.id,title:'Câu hỏi và lời giải đã duyệt',content:JSON.stringify({prompt:q.prompt,expected:q.answer,response:ans.response,solution:q.solution,hints:json(q.hints)})}],'Trả {explanation:string}. Giải thích vì sao kết quả chưa đúng, bám lời giải đã duyệt. Nếu chỉ có đáp án cuối thì không khẳng định lỗi trung gian. Không thay đổi điểm.');
   const explanation=text(result.explanation,'Giải thích',6000);run('UPDATE answers SET feedback=? WHERE id=?',explanation,ans.id);return {explanation};
  }
 }
 if(method==='GET'&&p==='/api/analytics')return analytics(u);
 if(method==='GET'&&p==='/api/recommendations') {
  student(u);const record=one('SELECT content,created_at FROM recommendations WHERE student_id=? ORDER BY id DESC LIMIT 1',u.id);
  return record?{items:json(record.content),created_at:record.created_at}:{items:[]};
 }
 if(method==='POST'&&p==='/api/recommendations') {
  student(u);rate('recommend:'+u.id,5,60000);
  const groups=analytics(u).groups.filter(g=>g.right+g.wrong>=5).map((g,id)=>({id,subject:g.subject,lesson:g.lesson,type:g.type,right:g.right,wrong:g.wrong,hints:g.hints,rate:g.rate,level:g.level}));
  if(!groups.length)return {items:[],message:'Cần ít nhất 5 câu đã chấm trong một dạng bài để AI đề xuất có căn cứ.'};
  const result=await askAI(u.owner_id,'recommend',[{id:0,title:'Thống kê ẩn danh của một học sinh',content:JSON.stringify(groups)}],'Đề xuất tối đa 3 dạng cần ôn, ưu tiên tỷ lệ đúng thấp hoặc phụ thuộc gợi ý. Chỉ chọn từ nhóm có sẵn; không suy diễn tính cách hoặc kết luận năng lực cố định. Trả {recommendations:[{groupId:number,reason:string}]}. Lý do phải viện dẫn số liệu được cấp.');
  if(!Array.isArray(result.recommendations)||result.recommendations.length>3)fail('AI trả đề xuất không hợp lệ.',502);
  const seen=new Set();const items=result.recommendations.map(item=>{const g=groups.find(g=>g.id===item.groupId);if(!g||seen.has(g.id))fail('AI đề xuất ngoài phạm vi dữ liệu.',502);seen.add(g.id);return {...g,reason:text(item.reason,'Lý do',2000)};});
  run('INSERT INTO recommendations(student_id,content) VALUES(?,?)',u.id,JSON.stringify(items));return {items};
 }
 if(method==='GET'&&p==='/api/history') {
  const rows=all(`SELECT a.*,x.title,x.mode,x.teacher_id,x.release,x.closes_at,u.name AS student,
   (SELECT count(*) FROM answers n WHERE n.attempt_id=a.id AND n.correct=1) AS right_count,
   (SELECT count(*) FROM answers n WHERE n.attempt_id=a.id AND n.correct IS NOT NULL) AS graded_count,
   (SELECT count(*) FROM answers n WHERE n.attempt_id=a.id AND n.response IS NOT NULL AND n.correct IS NULL) AS pending_count
   FROM attempts a JOIN student_assignments s ON s.id=a.student_assignment_id JOIN assignments x ON x.id=s.assignment_id JOIN users u ON u.id=a.student_id
   WHERE ${u.role==='teacher'?'x.teacher_id':'a.student_id'}=? ORDER BY a.id DESC`,u.id);
  for(const a of rows){expire(a);if(u.role==='student'&&!visibleResults(a)){a.right_count=null;a.graded_count=null;a.pending_count=null;}}
  return rows;
 }
 if(method==='POST'&&p==='/api/grade') {
  teacher(u);const b=await body(req);const a=getAttempt(u,b.attemptId);const ans=one('SELECT * FROM answers WHERE attempt_id=? AND question_id=?',a.id,Number(b.questionId));if(!ans||ans.response===null)fail('Chưa có đáp án để chấm.');const q=one('SELECT kind FROM questions WHERE id=?',Number(b.questionId));if(q.kind!=='text')fail('Chỉ chấm thủ công câu tự luận.');
  run('UPDATE answers SET correct=?,feedback=?,graded_at=CURRENT_TIMESTAMP WHERE id=?',b.correct?1:0,text(b.feedback,'Nhận xét',6000),ans.id);audit(u.id,'manual_grade',ans.id);return {ok:true};
 }
 if(method==='GET'&&p==='/api/audit'){teacher(u);return all('SELECT action,target,created_at FROM audit_logs WHERE actor_id=? ORDER BY id DESC LIMIT 100',u.id);}
 fail('Không tìm thấy chức năng.',404);
}

const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');
 res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
 if(process.env.COOKIE_SECURE==='true')res.setHeader('Strict-Transport-Security','max-age=31536000');
 try {
  const url=new URL(req.url,'http://localhost');
  if(url.pathname.startsWith('/api/')){res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');const result=await api(req,res,url);res.end(JSON.stringify(result));return;}
  if(req.method!=='GET'&&req.method!=='HEAD')fail('Phương thức không hợp lệ.',405);
  const paths={'/':'index.html','/app.js':'app.js','/styles.css':'styles.css','/favicon.svg':'favicon.svg'};const path=paths[url.pathname];if(!path)fail('Không tìm thấy trang.',404);
  const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
  res.setHeader('Content-Type',mime[extname(path)]);res.setHeader('Cache-Control','no-cache');res.end(await readFile(join(root,'public',path)));
 } catch(e) {
  const status=e.status||500;res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');
  if(status===500)console.error('Request failure:',e.code||e.name);
  res.end(JSON.stringify({error:status===500?'Có lỗi hệ thống. Vui lòng thử lại.':e.message}));
 }
});
server.requestTimeout=120000;
const host=process.env.HOST||'127.0.0.1',port=Number(process.env.PORT||3000);
server.listen(port,host,()=>console.log(`BTVN đang chạy tại http://${host}:${server.address().port}`));
const expiryTimer=setInterval(()=>{
 for(const row of all("SELECT id,student_id FROM attempts WHERE status='active' AND deadline IS NOT NULL AND deadline<=?",now())) {
  try {expire(getAttempt({id:row.student_id,role:'student'},row.id));}catch{console.error('Không thể kết thúc lượt làm',row.id);}
 }
 run('DELETE FROM sessions WHERE expires<?',now());
 for(const [key,v] of rateLimits)if(v.until<now())rateLimits.delete(key);
},10000);expiryTimer.unref();
let backingUp=false;
const backupTimer=setInterval(async()=>{if(backingUp)return;backingUp=true;try{await createBackup();console.log('Sao lưu định kỳ thành công.');}catch{console.error('Sao lưu thất bại. Kiểm tra dung lượng và quyền ghi.');}finally{backingUp=false;}},24*60*60*1000);backupTimer.unref();
function shutdown(){clearInterval(expiryTimer);clearInterval(backupTimer);server.close(()=>{db.close();process.exit(0);});}
process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
