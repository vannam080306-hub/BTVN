import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import {isCorrect} from '../site/answers.js';
import {chapters} from '../site/data.js';
import {chapter4} from '../site/toan12-c4.js';
import {richText,solutionHTML} from '../site/math.js';

test('Các chương 2–6 có đủ đề và lời giải LaTeX, không dùng ảnh cắt chữ', async()=>{
 const math12=chapters('toan',12);
 const specs=[[2,39,5,5],[3,14,4,0],[4,43,30,26],[5,36,16,16],[6,5,11,10]];
 for(const [chapter,choices,truths,shorts] of specs){
  const {questions}=math12[chapter-1];
  const extra=chapter===2?[23,9,25]:chapter===6?[0,11,10]:[0,0,0];
  const oldCount=choices+truths+shorts;
  assert.equal(questions.length,oldCount+extra.reduce((sum,count)=>sum+count,0));
  assert.deepEqual(questions.map(q=>q.id),questions.map((_,i)=>i<oldCount?["toan",12,chapter,"pdf",i+1].join("-"):["toan",12,chapter,"vdc",i-oldCount+1].join("-")));
  assert.equal(questions.filter(q=>q.kind==='choice').length,choices+extra[0]);
  assert.equal(questions.filter(q=>q.kind==='true-false').length,truths+extra[1]);
  assert.equal(questions.filter(q=>q.kind==='short').length,shorts+extra[2]);
  for(const q of questions){
   assert.ok(q.originalSolution && q.nativeLatex,q.id);
   assert.equal(q.pdfSource,undefined,q.id);
   assert.equal(q.solutionSteps,undefined,q.id);
   assert.ok(q.explanation.length>10,q.id);
   for(const value of [q.prompt,q.explanation,q.answerText,q.sourceNote,...q.options||[],...q.statements||[]]){
    if(value)assert.doesNotThrow(()=>richText(value),q.id);
   }
   for(const row of [q.table?.headers||[],...q.table?.rows||[]])
    for(const cell of row)assert.doesNotThrow(()=>richText(cell),q.id);
   if(q.kind==='true-false')assert.equal(q.statements.length,q.answer.length,q.id);
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


test('Câu 12 chương 2 chấm đúng cả hai phương án giống nhau trong PDF',()=>{
 const q=chapters('toan',12)[1].questions[11];
 assert.equal(q.options[1],q.options[3]);
 assert.equal(isCorrect(q,1),true);
 assert.equal(isCorrect(q,3),true);
 assert.equal(isCorrect(q,2),false);
});
