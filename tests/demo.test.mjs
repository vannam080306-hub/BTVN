import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const local=new Map(),session=new Map();
globalThis.localStorage={getItem:k=>local.get(k)||null,setItem:(k,v)=>local.set(k,v),removeItem:k=>local.delete(k)};
globalThis.sessionStorage={getItem:k=>session.get(k)||null,setItem:(k,v)=>session.set(k,v),removeItem:k=>session.delete(k)};
// Any accidental backend request makes these tests fail.
globalThis.fetch=()=>{throw new Error('Bản Pages không được gọi máy chủ.');};
const {demoApi:api}=await import('../demo/demo-api.js');
const login=(username)=>api('login',{username,password:'demo2026'});
let qid,attemptId;
test('Pages 01 · Tài khoản mẫu và dữ liệu sẵn có',async()=>{
 const teacher=await login('giaovien');assert.equal(teacher.user.role,'teacher');assert.equal(teacher.user.password,undefined);
 assert.equal((await api('students')).length,2);assert.ok((await api('questions')).length>=18);
 await login('hocsinh');assert.equal((await api('me')).user.role,'student');
 await assert.rejects(()=>api('students'),/giáo viên/);
});
test('Pages 02 · Lưu nháp, mở gợi ý, chấm và giữ riêng dữ liệu',async()=>{
 const p=await api('practice',{questionId:1,count:1});const start=await api('start',{studentAssignmentId:p.studentAssignmentId});attemptId=start.attemptId;
 await api(`attempts/${attemptId}/save`,{questionId:1,response:'2'});let a=await api('attempts/'+attemptId);assert.equal(a.questions[0].answer.draft,'2');
 a=await api(`attempts/${attemptId}/hint`,{questionId:1});assert.equal(a.questions[0].hints.length,1);
 a=await api(`attempts/${attemptId}/answer`,{questionId:1,response:'2'});assert.equal(a.questions[0].answer.correct,1);
 assert.ok((await api('analytics')).rows.length===1);
 await login('hocsinh2');assert.equal((await api('analytics')).rows.length,0);await assert.rejects(()=>api('attempts/'+attemptId),/tài khoản khác/);
 await login('hocsinh');await api(`attempts/${attemptId}/finish`,{});assert.equal((await api('history'))[0].status,'submitted');
});
test('Pages 03 · Tài liệu văn bản, tạo mẫu, duyệt rồi xuất bản',async()=>{
 await login('giaovien');const d=await api('documents',{title:'Nguồn dùng thử',content:'Chuyển vế và đổi dấu. Chia hai vế cho hệ số.'});
 const analysis=await api(`documents/${d.id}/analyze`,{});assert.match(analysis.theory,/MÔ PHỎNG/);
 await api(`documents/${d.id}/confirm`,analysis);
 const generated=await api('generate',{documentIds:[d.id],count:2,subject:'Toán',lesson:'Bài mẫu',type:'Dạng mẫu',difficulty:'easy'});qid=generated.ids[0];
 assert.equal(generated.created,2);assert.match((await api('questions')).find(q=>q.id===qid).prompt,/mô phỏng/);
 await login('hocsinh');assert.ok(!(await api('catalog')).some(q=>q.id===qid));
 await login('giaovien');await assert.rejects(()=>api('questions/'+qid,{action:'publish'}),/duyệt/);
 await api('questions/'+qid,{action:'approve'});await api('questions/'+qid,{action:'publish'});
 await login('hocsinh');const q=(await api('catalog')).find(q=>q.id===qid);assert.ok(q);assert.equal(q.answer,undefined);assert.equal(q.solution,undefined);
});
test('Pages 04 · Đề kiểm tra và thời gian mô phỏng; kết quả được giữ kín',async()=>{
 await login('giaovien');await api('assignments',{title:'Kiểm tra dùng thử',mode:'exam',minutes:1,count:2,studentIds:[2,3],variants:true,allow_hints:false,release:'after_close',closes_at:new Date(Date.now()+3600000).toISOString()});
 await login('hocsinh');const assigned=(await api('assignments'))[0];const start=await api('start',{studentAssignmentId:assigned.student_assignment_id});let a=await api('attempts/'+start.attemptId);const first=a.questions[0].id;
 a=await api(`attempts/${a.id}/answer`,{questionId:first,response:'0'});assert.equal(a.questions[0].answer.correct,undefined);await assert.rejects(()=>api(`attempts/${a.id}/hint`,{questionId:first}),/không cho phép/);
 const real=Date.now;try{Date.now=()=>real()+120000;const expired=await api('attempts/'+a.id);assert.equal(expired.status,'submitted');assert.equal(expired.reveal,false);}finally{Date.now=real;}
});
test('Pages 05 · File tĩnh dùng đường dẫn tương đối và không gọi API máy chủ',async()=>{
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');const js=await readFile(new URL('../assets/app.js',import.meta.url),'utf8');
 assert.match(html,/\.\/assets\/app\.js/);assert.match(html,/BẢN DÙNG THỬ/);assert.doesNotMatch(html,/(?:src|href)="\/(?:app|styles|favicon)/);
 assert.match(js,/from '\.\/demo-api\.js'/);assert.doesNotMatch(js,/fetch\('\/api\//);assert.match(js,/demo2026/);
});
