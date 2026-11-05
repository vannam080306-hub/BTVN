import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {subjects,chapters} from '../site/data.js';
test('Từ trường có 102 câu, loại các câu tô vàng và đóng gói đủ ảnh đề, lời giải',async()=>{
 const questions=chapters('ly',12)[2].questions;
 assert.equal(questions.length,102);
 const excluded=[6,7,8,10,12,14,15,17,20,39,44,58,65,76,77,85,90,93,94,98,103,107,116,119,121]
  .map(n=>`ly-12-3-tu-1-${n}`);
 assert.ok(questions.every(q=>!excluded.includes(q.id)));
 const stems=questions.map(q=>q.prompt.split(' A. ')[0].normalize('NFC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,''));
 assert.equal(new Set(stems).size,questions.length);
 for(const q of questions){
  const {folder,question,solution,shared}=q.pdfSource;
  for(const name of [question,solution,shared].filter(Boolean)){
   const image=await readFile(new URL(`../assets/${folder}/${name}.webp`,import.meta.url));
   assert.equal(image.toString('ascii',8,12),'WEBP',name);
  }
 }
});
test('Khí lí tưởng bỏ các câu đánh dấu vàng, không trùng đề và có đủ ảnh nguồn',async()=>{
 const questions=chapters('ly',12)[1].questions;
 assert.equal(questions.length,86);
 const highlighted=[
  [1,[1,2,33]],
  [2,[1,2,3,4,5,6,8,10,11,13,15,16,27,29,30,35,38]]
 ].flatMap(([source,numbers])=>numbers.map(n=>`ly-12-2-khi-${source}-${n}`));
 assert.ok(questions.every(q=>!highlighted.includes(q.id)));
 const stems=questions.map(q=>q.prompt.split(' A. ')[0].normalize('NFC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,''));
 assert.equal(new Set(stems).size,questions.length);
 for(const q of questions){
  const {folder,question,solution,shared}=q.pdfSource;
  for(const name of [question,solution,shared].filter(Boolean)){
   const image=await readFile(new URL(`../assets/${folder}/${name}.webp`,import.meta.url));
   assert.equal(image.toString('ascii',8,12),'WEBP',name);
  }
 }
});
test('Vật lý nhiệt có đủ 100 câu riêng biệt và bản xuất chứa lời giải của từng câu PDF',async()=>{
 const questions=chapters('ly',12)[0].questions;
 assert.equal(questions.length,100);
 assert.equal(questions.filter(q=>q.kind==='true-false').length,10);
 assert.equal(questions.filter(q=>q.kind==='short').length,12);
 const stems=questions.map(q=>q.prompt.split(' A. ')[0].normalize('NFC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,''));
 assert.equal(new Set(stems).size,questions.length);
 for(const question of questions){
  if(!question.pdfSource)continue;
  const {question:prompt,solution,shared}=question.pdfSource;
  for(const name of [prompt,solution,shared].filter(Boolean)){
   const image=await readFile(new URL('../assets/ly12-nhiet/'+name+'.webp',import.meta.url));
   assert.equal(image.toString('ascii',8,12),'WEBP',name);
  }
 }
});
test('Ba môn, mỗi môn có ba lớp và danh mục chương',()=>{assert.deepEqual(subjects.map(s=>s.id),['toan','ly','hoa']);for(const s of subjects)for(const g of [10,11,12]){assert.ok(chapters(s.id,g).length>=4);assert.equal(chapters(s.id,g)[0].id,1);}});
test('Ngân hàng câu hỏi có đáp án hợp lệ, gợi ý và lời giải',()=>{const ids=new Set();let total=0;for(const s of subjects)for(const g of [10,11,12])for(const c of chapters(s.id,g))for(const q of c.questions){if(q.kind==='short'){assert.ok(Number.isFinite(q.value));assert.ok(q.answerText);}else if(q.kind==='true-false'){assert.equal(q.answer.length,4);assert.ok(q.answerText);}else{assert.equal(q.options.length,4);assert.ok(q.answer>=0&&q.answer<4);}assert.ok(q.explanation&&(q.hint||q.pdfSource)&&q.prompt);assert.ok(!ids.has(q.id));ids.add(q.id);total++;}assert.equal(total,649);});
test('Không lặp câu mẫu sang những chương chưa có nội dung',()=>{for(const s of subjects)for(const g of [10,11,12])assert.ok(chapters(s.id,g).slice(1).filter(c=>!(s.id==='toan'&&g===11&&[2,3,4].includes(c.id))&&!(s.id==='ly'&&g===12&&[2,3].includes(c.id))).every(c=>c.questions.length===0));});
test('Bản xuất dùng đường dẫn tương đối, không gọi dịch vụ ngoài hoặc đăng nhập',async()=>{const html=await readFile(new URL('../index.html',import.meta.url),'utf8');const js=await readFile(new URL('../assets/app.js',import.meta.url),'utf8');assert.match(html,/\.\/assets\/app.js/);assert.doesNotMatch(js,/fetch\(|\/api\/|password|role==='teacher'|AI_KEY/);assert.match(js,/localStorage/);assert.match(js,/data-answer/);assert.match(js,/pins-only/);assert.match(js,/chapter-select/);});
test('Các tệp xuất khớp nguồn chỉnh sửa',async()=>{for(const name of ['math.js','math-content.js','app.js','data.js','ly12-nhiet.js','ly12-khi.js','ly12-tu-truong.js','toan11-chuong4.js','geometry.js','toan11-chuong3.js','toan11-chuong2.js','toan11-chuong1.js','answers.js','styles.css','favicon.svg'])assert.equal(await readFile(new URL('../site/'+name,import.meta.url),'utf8'),(await readFile(new URL('../assets/'+name,import.meta.url),'utf8')).replace(/\?v=[a-f0-9]{12}/g,''));});
