import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import http from 'node:http';

let processHandle,base,temp,admin,alice,bob,db,provider,providerBase,source,question,assignment,attempt;
let aiBad=false, aiFailure=false;
async function request(path,data,session) {
 const res=await fetch(base+'/api/'+path,{method:data===undefined?'GET':'POST',headers:{...(data===undefined?{}:{'Content-Type':'application/json','X-CSRF-Token':session?.csrf||''}),...(session?{Cookie:session.cookie}:{})},body:data===undefined?undefined:JSON.stringify(data)});
 const value=await res.json();return {status:res.status,data:value,cookie:res.headers.get('set-cookie')?.split(';')[0]};
}
async function login(username,password){const r=await request('login',{username,password});assert.equal(r.status,200,JSON.stringify(r.data));return {cookie:r.cookie,csrf:r.data.csrf,user:r.data.user};}
const post=async(path,data,session=admin)=>{const r=await request(path,data,session);assert.equal(r.status,200,JSON.stringify(r.data));return r.data;};
const get=async(path,session=admin)=>{const r=await request(path,undefined,session);assert.equal(r.status,200,JSON.stringify(r.data));return r.data;};
before(async()=>{
 temp=await mkdtemp(join(tmpdir(),'btvn-test-'));
 provider=http.createServer(async(req,res)=>{let raw='';for await(const chunk of req)raw+=chunk;if(aiFailure){res.statusCode=503;res.end('{}');return;}const task=JSON.parse(JSON.parse(raw).messages[1].content);let result;
  if(task.task.startsWith('Phân tích'))result={theory:'Quy tắc chuyển vế.',types:['Phương trình'],steps:['Chuyển vế','Chia hệ số']};
  else if(task.task.startsWith('Tạo'))result={conflicts:[],questions:Array.from({length:2},(_,i)=>({prompt:`Tìm x: x + ${i+1} = ${i+3}`,kind:'number',answer:'2',solution:'Chuyển vế để tìm x = 2.',hints:['Chuyển số tự do sang vế phải.'],sources:[{documentId:task.sources[0].id,location:'Đoạn 1',quote:aiBad?'KHÔNG CÓ TRONG NGUỒN':task.sources[0].content.slice(0,30)}]}))};
  else if(task.task.startsWith('Đề xuất'))result={recommendations:[{groupId:0,reason:'Tỷ lệ đúng thấp trong 5 lượt đã chấm; nên ôn chuyển vế trước khi tăng độ khó.'}]};
  else result={explanation:'Chỉ biết đáp án cuối nên chưa xác định được bước sai. Hãy chuyển vế và kiểm tra lại bằng lời giải đã duyệt.'};
  res.setHeader('Content-Type','application/json');res.end(JSON.stringify({choices:[{message:{content:JSON.stringify(result)}}]}));
 });
 await new Promise(r=>provider.listen(0,'127.0.0.1',r));providerBase='http://127.0.0.1:'+provider.address().port;
 processHandle=spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'0',HOST:'127.0.0.1',DATA_DIR:join(temp,'data'),BACKUP_DIR:join(temp,'backups'),ADMIN_USERNAME:'teacher',ADMIN_PASSWORD:'Teacher-Testing-2026!',SEED_DEMO:'true',AI_BASE_URL:providerBase,AI_API_KEY:'test-only',AI_MODEL:'mock'},stdio:['ignore','pipe','pipe'],windowsHide:true});
 base=await new Promise((resolve,reject)=>{let output='';const timer=setTimeout(()=>reject(new Error('Server startup timeout: '+output)),15000);processHandle.stdout.on('data',chunk=>{output+=chunk;const match=output.match(/http:\/\/127\.0\.0\.1:\d+/);if(match){clearTimeout(timer);resolve(match[0]);}});processHandle.stderr.on('data',c=>output+=c);processHandle.on('exit',code=>{if(!base)reject(new Error('Server exit '+code+': '+output));});});
 db=new DatabaseSync(join(temp,'data','btvn.sqlite'));db.exec('PRAGMA busy_timeout=5000');
 admin=await login('teacher','Teacher-Testing-2026!');
});
after(async()=>{db?.close();if(processHandle){const exited=new Promise(r=>processHandle.once('exit',r));processHandle.kill();await exited;}if(provider)await new Promise(r=>provider.close(r));await rm(temp,{recursive:true,force:true});});

test('01 · Trang chính, bảo mật HTTP và yêu cầu đăng nhập',async()=>{
 const res=await fetch(base);assert.equal(res.status,200);assert.match(await res.text(),/BTVN/);assert.match(res.headers.get('content-security-policy'),/frame-ancestors 'none'/);
 assert.equal((await request('questions')).status,401);
});
test('02 · Chặn yêu cầu thay đổi dữ liệu thiếu CSRF',async()=>{const r=await request('students',{}, {...admin,csrf:'wrong'});assert.equal(r.status,403);});
test('03 · Giáo viên tạo tài khoản; bắt buộc đổi mật khẩu',async()=>{
 const a=await post('students',{username:'alice',name:'Học sinh A',class_name:'8A',password:'Alice-Temporary-2026!'});
 const b=await post('students',{username:'bob',name:'Học sinh B',class_name:'8A',password:'Bob-Temporary-2026!'});
 alice=await login('alice','Alice-Temporary-2026!');bob=await login('bob','Bob-Temporary-2026!');
 assert.equal(alice.user.id,a.id);assert.equal(bob.user.id,b.id);assert.equal((await request('catalog',undefined,alice)).status,403);
 await post('password',{current:'Alice-Temporary-2026!',password:'Alice-New-Password-2026!'},alice);
 await post('password',{current:'Bob-Temporary-2026!',password:'Bob-New-Password-2026!'},bob);
 assert.ok((await get('catalog',alice)).length===12);
 assert.equal((await request('students',{},alice)).status,403);
});
test('04 · Tải tài liệu, chặn tệp giả, phân tích và xác nhận',async()=>{
 assert.equal((await request('documents',{title:'Tệp giả',filename:'fake.pdf',base64:Buffer.from('invalid').toString('base64')},admin)).status,400);
 source=await post('documents',{title:'Tài liệu thử',content:'Phương trình x + b = c. Chuyển b sang vế phải, đổi dấu. Kiểm tra nghiệm.'});
 const analysis=await post(`documents/${source.id}/analyze`,{});assert.ok(analysis.steps.length===2);
 await post(`documents/${source.id}/confirm`,{theory:'Phương trình bậc nhất.',types:['Chuyển vế'],steps:['Chuyển vế','Kiểm tra']});
 assert.equal((await request('documents/'+source.id,undefined,alice)).status,403);
});
test('05 · Bản nháp không hiện cho học sinh, trích dẫn phải đúng nguồn',async()=>{
 const payload={subject:'Toán',lesson:'Bài thử',type:'Chuyển vế',difficulty:'easy',prompt:'Tìm x: x + 2 = 6',kind:'number',answer:'4',solution:'x = 6 − 2 = 4.',hints:['Chuyển 2 sang vế phải.','Lấy 6 trừ 2.'],sources:[{documentId:source.id,location:'Đoạn 1',quote:'Chuyển b sang vế phải, đổi dấu.'}]};
 assert.equal((await request('questions',{...payload,sources:[{...payload.sources[0],quote:'Không có thật'}]},admin)).status,400);
 question=await post('questions',payload);assert.ok(!(await get('catalog',alice)).some(q=>q.id===question.id));
 assert.equal((await request('questions/'+question.id,{action:'publish'},admin)).status,400);
 await post('questions/'+question.id,{action:'approve',acknowledgeDuplicates:true});await post('questions/'+question.id,{action:'publish'});
 const publicQ=(await get('catalog',alice)).find(q=>q.id===question.id);assert.ok(publicQ);for(const hidden of ['answer','solution','sources'])assert.equal(publicQ[hidden],undefined);assert.deepEqual(publicQ.hints,[]);
});
test('06 · AI tạo bản nháp; không chấp nhận trích dẫn bịa',async()=>{
 const payload={documentIds:[source.id],subject:'Toán',lesson:'Bài AI',type:'Chuyển vế',difficulty:'medium',count:2};
 const result=await post('generate',payload);assert.equal(result.created,2);assert.equal((await get('questions')).find(q=>q.id===result.ids[0]).status,'draft');
 aiBad=true;assert.equal((await request('generate',payload,admin)).status,400);aiBad=false;
});
test('07 · Kiểm tra gần trùng và giữ lịch sử phiên bản',async()=>{
 const original=(await get('questions')).find(q=>q.id===question.id);
 const next=await post('questions/'+question.id,{...original,action:'edit',prompt:original.prompt+' '});
 const q=(await get('questions')).find(q=>q.id===next.id);assert.equal(q.version,2);assert.ok(q.duplicates.some(d=>d.id===question.id));
 assert.equal((await request('questions/'+next.id,{action:'approve'},admin)).status,400);
 assert.ok((await get('catalog',alice)).some(q=>q.id===question.id));
});
test('08 · Đề riêng ổn định; báo thiếu câu; phân bố tương đương',async()=>{
 assert.equal((await request('assignments',{title:'Không đủ',mode:'practice',count:100,studentIds:[alice.user.id]},admin)).status,400);
 assignment=await post('assignments',{title:'Kiểm tra 15 phút',mode:'exam',minutes:15,count:6,studentIds:[alice.user.id,bob.user.id],variants:true,release:'after_close',closes_at:new Date(Date.now()+60*60*1000).toISOString()});
 const rows=db.prepare('SELECT * FROM student_assignments WHERE assignment_id=? ORDER BY student_id').all(assignment.id);
 const distribution=row=>JSON.parse(row.question_ids).map(id=>db.prepare('SELECT difficulty,subject,lesson,type FROM questions WHERE id=?').get(id)).map(q=>JSON.stringify(q)).sort();
 assert.deepEqual(distribution(rows[0]),distribution(rows[1]));
 const begun=await post('start',{studentAssignmentId:rows[0].id},alice);attempt=begun.attemptId;
 const again=await post('start',{studentAssignmentId:rows[0].id},alice);assert.equal(again.attemptId,attempt);
 assert.equal((await request('start',{studentAssignmentId:rows[0].id},bob)).status,404);
});
test('09 · Không lộ đáp án, điểm hoặc gợi ý của bài kiểm tra',async()=>{
 const a=await get('attempts/'+attempt,alice);const q=a.questions[0];
 const r=await post(`attempts/${attempt}/answer`,{questionId:q.id,response:'0'},alice);
 assert.equal(r.questions[0].answer.correct,undefined);assert.equal(r.questions[0].expected,undefined);assert.equal(r.questions[0].solution,undefined);
 assert.equal((await request(`attempts/${attempt}/hint`,{questionId:q.id},alice)).status,403);
 assert.equal((await request('attempts/'+attempt,undefined,bob)).status,404);
 assert.equal((await get('history',alice))[0].right_count,null);
 assert.equal((await get('analytics',alice)).rows.length,0);
});
test('10 · Hết giờ theo máy chủ, chốt nháp, không chấp nhận sửa muộn',async()=>{
 const a=await get('attempts/'+attempt,alice);const q=a.questions[1];
 await post(`attempts/${attempt}/save`,{questionId:q.id,response:'2'},alice);
 db.prepare('UPDATE attempts SET deadline=? WHERE id=?').run(Date.now()-100,attempt);
 assert.equal((await request(`attempts/${attempt}/save`,{questionId:q.id,response:'999'},alice)).status,409);
 const row=db.prepare('SELECT response FROM answers WHERE attempt_id=? AND question_id=?').get(attempt,q.id);assert.equal(row.response,'2');
 assert.equal((await get('attempts/'+attempt,alice)).status,'submitted');
});
test('11 · Luyện tập, lưu nháp, gợi ý, chấm số và nộp lặp an toàn',async()=>{
 const p=await post('practice',{questionId:question.id,count:1},alice);const r=await post('start',{studentAssignmentId:p.studentAssignmentId},alice);const id=r.attemptId;
 await post(`attempts/${id}/save`,{questionId:question.id,response:'3'},alice);assert.equal((await get('attempts/'+id,alice)).questions[0].answer.draft,'3');
 const hint=await post(`attempts/${id}/hint`,{questionId:question.id},alice);assert.equal(hint.questions[0].hints.length,1);
 assert.equal((await get('attempts/'+id,alice)).questions[0].hints.length,1);
 const a=await post(`attempts/${id}/answer`,{questionId:question.id,response:'3'},alice);assert.equal(a.questions[0].answer.correct,0);
 await post(`attempts/${id}/answer`,{questionId:question.id,response:'4'},alice);assert.equal((await get('attempts/'+id,alice)).questions[0].answer.response,'3');
 const explanation=await post(`attempts/${id}/explain`,{questionId:question.id},alice);assert.match(explanation.explanation,/đáp án cuối/);
 await post(`attempts/${id}/finish`,{},alice);await post(`attempts/${id}/finish`,{},alice);
 assert.equal(db.prepare('SELECT count(*) AS c FROM answers WHERE attempt_id=?').get(id).c,1);
});
test('12 · Ôn câu sai, năng lực riêng, thống kê không ảnh hưởng tài khoản khác',async()=>{
 const data=await get('analytics',alice);assert.ok(data.groups.length);assert.equal(data.groups[0].studentId,alice.user.id);assert.equal(data.groups[0].risk,false);
 assert.equal((await get('analytics',bob)).rows.length,0);
 const review=await post('practice',{review:true,count:5},alice);const r=await post('start',{studentAssignmentId:review.studentAssignmentId},alice);const a=await get('attempts/'+r.attemptId,alice);assert.ok(a.questions.some(q=>q.id===question.id));
 const adaptive=await post('practice',{adaptive:true,subject:'Toán học',lesson:'Phương trình bậc nhất',type:'Tìm nghiệm phương trình',count:3},alice);const begun=await post('start',{studentAssignmentId:adaptive.studentAssignmentId},alice);assert.ok((await get('attempts/'+begun.attemptId,alice)).questions.every(q=>q.difficulty==='medium'));
});
test('13 · Chấm tự luận bởi giáo viên; không cho học sinh tự chấm',async()=>{
 const q=(await get('questions')).find(q=>q.id===question.id);const draft=await post('questions',{...q,prompt:'Trình bày quy tắc chuyển vế.',kind:'text',answer:'Đổi dấu khi chuyển vế.',solution:'Chuyển hạng tử sang vế kia và đổi dấu.'});
 await post('questions/'+draft.id,{action:'approve',acknowledgeDuplicates:true});await post('questions/'+draft.id,{action:'publish'});
 const p=await post('practice',{questionId:draft.id,count:1},bob);const a=await post('start',{studentAssignmentId:p.studentAssignmentId},bob);
 const view=await post(`attempts/${a.attemptId}/answer`,{questionId:draft.id,response:'Chuyển hạng tử và đổi dấu.'},bob);assert.equal(view.questions[0].answer.correct,null);
 assert.equal((await request('grade',{attemptId:a.attemptId,questionId:draft.id,correct:true,feedback:'Tự chấm'},bob)).status,403);
 await post('grade',{attemptId:a.attemptId,questionId:draft.id,correct:true,feedback:'Đúng quy tắc.'});assert.equal((await get('attempts/'+a.attemptId,bob)).questions[0].answer.correct,1);
});
test('14 · Khóa và cấp lại mật khẩu thu hồi các phiên',async()=>{
 await post('students/'+bob.user.id,{action:'lock'});assert.equal((await request('me',undefined,bob)).status,401);
 await post('students/'+bob.user.id,{action:'lock'});bob=await login('bob','Bob-New-Password-2026!');
 await post('students/'+bob.user.id,{action:'reset',password:'Bob-Reset-Password-2026!'});assert.equal((await request('me',undefined,bob)).status,401);bob=await login('bob','Bob-Reset-Password-2026!');assert.equal(bob.user.must_change,true);
});
test('15 · Tìm kiếm và lọc không trả đáp án; nhật ký có thao tác duyệt',async()=>{
 const qs=await get('catalog?difficulty=easy&q='+encodeURIComponent('phương trình'),alice);assert.ok(qs.length);assert.ok(qs.every(q=>q.difficulty==='easy'&&q.answer===undefined));
 assert.ok((await get('audit')).some(a=>a.action==='question_approve'));
});
test('16 · Sao lưu đầy đủ và khôi phục sang thư mục mới, thu hồi phiên',async()=>{
 async function command(args,env={}){const child=spawn(process.execPath,args,{env:{...process.env,...env},windowsHide:true,stdio:['ignore','pipe','pipe']});let output='';child.stdout.on('data',c=>output+=c);child.stderr.on('data',c=>output+=c);const code=await new Promise(r=>child.on('exit',r));return {code,output};}
 const b=await command(['scripts/backup.mjs'],{DATA_DIR:join(temp,'data'),BACKUP_DIR:join(temp,'backups')});assert.equal(b.code,0,b.output);
 const file=(await readdir(join(temp,'backups')))[0];const target=join(temp,'restored');const restore=await command(['scripts/restore.mjs',join(temp,'backups',file),target]);assert.equal(restore.code,0,restore.output);
 const restored=new DatabaseSync(join(target,'btvn.sqlite'));assert.equal(restored.prepare('PRAGMA integrity_check').get().integrity_check,'ok');assert.equal(restored.prepare('SELECT count(*) AS c FROM sessions').get().c,0);assert.ok(restored.prepare('SELECT count(*) AS c FROM documents').get().c>=2);restored.close();
 assert.notEqual((await command(['scripts/restore.mjs',join(temp,'backups',file),target])).code,0);
});
test('17 · Giáo viên khác không đọc, sửa hoặc dùng nguồn ngoài phạm vi',async()=>{
 const password=db.prepare("SELECT password FROM users WHERE username='teacher'").get().password;
 db.prepare("INSERT INTO users(username,name,password,role) VALUES('otherteacher','Giáo viên khác',?,'teacher')").run(password);
 const other=await login('otherteacher','Teacher-Testing-2026!');
 assert.equal((await request('documents/'+source.id,undefined,other)).status,404);
 assert.equal((await request('students/'+alice.user.id,{action:'lock'},other)).status,404);
 assert.equal((await request('questions/'+question.id,{action:'publish'},other)).status,404);
 assert.equal((await request('attempts/'+attempt,undefined,other)).status,404);
 assert.equal((await get('analytics',other)).rows.length,0);
 assert.equal((await request('generate',{documentIds:[source.id],count:1,subject:'Toán',lesson:'Bài',type:'Dạng',difficulty:'easy'},other)).status,404);
});
test('18 · Nhà cung cấp AI lỗi: không tạo câu rác, giữ dữ liệu đã lưu',async()=>{
 const before=db.prepare('SELECT count(*) AS c FROM questions').get().c;
 aiFailure=true;const r=await request('generate',{documentIds:[source.id],count:2,subject:'Toán',lesson:'Bài',type:'Dạng',difficulty:'easy'},admin);aiFailure=false;
 assert.equal(r.status,502);assert.equal(db.prepare('SELECT count(*) AS c FROM questions').get().c,before);
 assert.equal(db.prepare('SELECT status FROM ai_runs ORDER BY id DESC LIMIT 1').get().status,'failed');
 assert.ok(db.prepare('SELECT count(*) AS c FROM answers').get().c>0);
});
test('19 · AI đề xuất theo số liệu đủ mẫu của chính học sinh và lưu kết quả',async()=>{
 const first=await post('recommendations',{},alice);assert.deepEqual(first.items,[]);assert.match(first.message,/5 câu/);
 for(let i=0;i<4;i++){
  const p=await post('practice',{questionId:question.id,count:1},alice);const a=await post('start',{studentAssignmentId:p.studentAssignmentId},alice);
  await post(`attempts/${a.attemptId}/answer`,{questionId:question.id,response:'3'},alice);await post(`attempts/${a.attemptId}/finish`,{},alice);
 }
 const result=await post('recommendations',{},alice);assert.equal(result.items.length,1);assert.equal(result.items[0].type,'Chuyển vế');
 assert.equal((await get('recommendations',alice)).items.length,1);
 assert.equal((await request('recommendations',undefined,admin)).status,403);
});
