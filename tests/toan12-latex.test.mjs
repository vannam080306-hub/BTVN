import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import {chapter4} from '../site/toan12-c4.js';
import {chapter5} from '../site/toan12-c5.js';
import {richText,solutionHTML} from '../site/math.js';

test('Chương 4–5 hiển thị đủ 167 đề và lời giải LaTeX, không dùng ảnh cắt chữ', async()=>{
 for(const [questions,count] of [[chapter4,99],[chapter5,68]]){
  assert.equal(questions.length,count);
  for(const q of questions){
   assert.ok(q.originalSolution && q.nativeLatex,q.id);
   assert.equal(q.pdfSource,undefined,q.id);
   assert.equal(q.solutionSteps,undefined,q.id);
   assert.ok(q.explanation.length>10,q.id);
   for(const value of [q.prompt,q.explanation,q.answerText,...q.options||[],...q.statements||[]]){
    if(value)assert.doesNotThrow(()=>richText(value),q.id);
   }
   if(q.kind==='true-false')assert.equal(q.statements.length,4,q.id);
   assert.doesNotMatch(solutionHTML(q.explanation),/solution-steps|<h3>Bước/);
   for(const figure of [q.diagram,q.solutionDiagram].filter(Boolean))
    await access(new URL('../assets/'+figure.folder+'/'+figure.file,import.meta.url));
  }
 }
});
test('Câu 5 giữ đủ cận -1 và 1, dấu tích phân và phép tính nguyên bản',()=>{
 const q=chapter4[4];
 assert.equal((q.prompt.match(/\\int_\{-1\}\^\{1\}/g)||[]).length,2);
 assert.equal((q.explanation.match(/\\int_\{-1\}\^\{1\}/g)||[]).length,3);
 assert.match(q.explanation,/6\+\[1-\(-1\)\]=8/);
 assert.equal(q.answer,0);
 assert.equal(q.options.length,4);
});

