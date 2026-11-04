import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {subjects,chapters} from '../site/data.js';
import {mathContent} from '../site/math-content.js';
import {richText,renderFormula,studyGuideHTML,solutionHTML} from '../site/math.js';
import {deriveEquationRoots} from '../scripts/detailed-solutions.mjs';
import {toLatexText} from '../scripts/latex-migration.mjs';
import {parseNumericAnswer} from '../site/answers.js';
const questions=subjects.flatMap(s=>[10,11,12].flatMap(g=>chapters(s.id,g).flatMap(c=>c.questions))).filter(q=>!q.pdfSource);

test('Các câu dùng trường hiển thị LaTeX và gợi ý đầy đủ, không đổi số lựa chọn',()=>{
 assert.equal(Object.keys(mathContent).length,questions.length);
 for(const q of questions){
  const d=mathContent[q.id];assert.ok(d,q.id);assert.equal(d.options?.length,q.options?.length,q.id);
  assert.ok(d.guide.formulas.length&&d.guide.symbols.length,q.id);
  assert.ok(d.guide.symbols.every(([symbol,meaning])=>symbol&&meaning),q.id);
  for(const v of [d.prompt,d.explanation,d.hint,d.answerText,...d.options||[]])if(v)assert.doesNotThrow(()=>richText(v),q.id);
  for(const row of [d.table?.headers||[],...d.table?.rows||[]])for(const cell of row)assert.doesNotThrow(()=>richText(cell),q.id);
  const answer=q.kind==='short'?d.answerText:('ABCD'[q.answer]+'. '+d.options[q.answer]);
  const solution=d.solutionSteps??d.explanation;
  const html=studyGuideHTML(d.guide,solution,answer);
  assert.ok(d.explanation,q.id);
  assert.ok(html.indexOf('Công thức cần dùng')<html.indexOf('Lời giải'));
  assert.doesNotMatch(html,/Giải thích ký hiệu|Gợi ý làm bài|symbol-definitions/);
  assert.ok(html.includes(solutionHTML(solution)),q.id);
  assert.ok(html.includes(richText(answer)),q.id);
  assert.doesNotMatch(html,/katex-error/);
 }
});

test('Các bài biến đổi, tính toán và phương trình có lời giải từng bước bằng LaTeX',()=>{
 const detailed=questions.filter(q=>mathContent[q.id].solutionSteps);
 assert.ok(detailed.length>=260);
 for(const q of detailed){
  const steps=mathContent[q.id].solutionSteps;
  assert.ok(steps.length>=3,q.id);
  for(const step of steps){assert.ok(step.content,q.id);assert.doesNotThrow(()=>richText(step.title),q.id);assert.doesNotThrow(()=>richText(step.content),q.id);}
  const html=solutionHTML(steps);
  assert.match(html,/Bước 1/);assert.match(html,/Bước 3/);assert.doesNotMatch(html,/katex-error/);
 }
 for(const q of questions.filter(q=>q.id.startsWith('toan-11-1-')&&(/Rút gọn|Tính |Tìm giá trị|Phương trình/.test(q.prompt))))assert.ok(mathContent[q.id].solutionSteps,q.id);
 for(const q of questions.filter(q=>q.id.startsWith('toan-11-2-')))assert.ok(mathContent[q.id].solutionSteps,q.id);
});

test('Lọc tham số từng họ nghiệm khớp các nghiệm đã kiểm chứng, không bỏ hoặc đếm trùng',()=>{
 let count=0;
 for(const q of questions){
  const actual=deriveEquationRoots(q);if(!actual)continue;
  const expected=q.verification.roots;
  assert.equal(actual.length,expected.length,q.id);
  actual.forEach((x,i)=>assert.ok(Math.abs(x-expected[i])<1e-7,`${q.id}: ${x} ≠ ${expected[i]}`));count++;
 }
 assert.equal(count,38);
});

function numericTex(tex){
 let i=0;
 function group(){assert.equal(tex[i++],'{');let out='';while(i<tex.length&&tex[i]!=='}')out+=piece();assert.equal(tex[i++],'}');return out;}
 function piece(){
  if(tex.startsWith('\\frac',i)){i+=5;const a=group(),b=group();return '(('+a+')/('+b+'))';}
  if(tex.startsWith('\\sqrt',i)){i+=5;return 'sqrt('+group()+')';}
  if(tex.startsWith('\\pi',i)){i+=3;return 'pi';}
  for(const op of ['\\times','\\cdot'])if(tex.startsWith(op,i)){i+=op.length;return '*';}
  for(const op of ['\\left','\\right'])if(tex.startsWith(op,i)){i+=op.length;return '';}
  if(tex[i]==='{')return '('+group()+')';
  return tex[i++];
 }
 let result='';while(i<tex.length)result+=piece();return parseNumericAnswer(result);
}
test('Giá trị các phân số, căn và lũy thừa sau chuyển đổi bằng biểu thức chấm điểm',()=>{
 let count=0;
 for(const q of questions.filter(q=>q.optionExpressions))for(let i=0;i<q.options.length;i++){
  const display=mathContent[q.id].options[i],m=/^\\\(([\s\S]*)\\\)$/.exec(display);assert.ok(m,display);
  const expected=parseNumericAnswer(q.optionExpressions[i]),actual=numericTex(m[1]);
  assert.ok(Math.abs(actual-expected)<1e-9,`${q.id} ${i}: ${display}`);count++;
 }
 assert.ok(count>500);
});
test('Phân số có hàm, chỉ số nhiều ký tự và giá trị tuyệt đối giữ đúng phạm vi',()=>{
 assert.match(toLatexText('1/cos²α'),/\\frac\{1\}\{\\cos\^\{2\} \\alpha\}/);
 assert.match(toLatexText('uₙ₊₁ = uₙ + d'),/u_\{n\+1\}/);
 assert.match(toLatexText('2π/|a|'),/\\frac\{2 \\pi\}\{\\left\|a\\right\|\}/);
 assert.match(toLatexText('7.499999999999999°'),/7\.5/);
 assert.match(richText('<img src=x onerror=alert(1)>'),/&lt;img/);
 assert.throws(()=>renderFormula('\\frac{1}'));
});
test('KaTeX và phông chữ được đóng gói cục bộ, hỗ trợ GitHub Pages',async()=>{
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 assert.match(html,/\.\/assets\/vendor\/katex\/katex\.min\.css/);
 assert.doesNotMatch(html,/cdn\.jsdelivr|unpkg/);
 const css=await readFile(new URL('../site/vendor/katex/katex.min.css',import.meta.url),'utf8');
 const files=[...new Set([...css.matchAll(/url\(([^)]+\.woff2)\)/g)].map(m=>m[1]))];assert.ok(files.length>=15);
 for(const file of files){await access(new URL('../site/vendor/katex/'+file,import.meta.url));await access(new URL('../assets/vendor/katex/'+file,import.meta.url));}
});
