import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {grade12Chapter1Questions as qs} from '../site/toan12-chuong1.js';
import {chapters} from '../site/data.js';
import {richText,solutionHTML} from '../site/math.js';
import {gradeShortAnswer} from '../site/answers.js';
const q=n=>qs.find(x=>x.sourceNumber===n);
const round=(x,d=0)=>Number(x.toFixed(d));
function optimum(f,a,b,min=true){
 for(let k=0;k<160;k++){
  const u=(2*a+b)/3,v=(a+2*b)/3;
  if((min?1:-1)*f(u)<(min?1:-1)*f(v))b=v;else a=u;
 }
 const x=(a+b)/2;return {x,y:f(x)};
}
test('Toán 12 Chương 1 có đủ 105 số thứ tự và ba dạng trả lời từ PDF',()=>{
 assert.equal(chapters('toan',12)[0].questions,qs);
 assert.equal(qs.length,105);
 assert.deepEqual(qs.map(x=>x.sourceNumber),Array.from({length:105},(_,i)=>i+1));
 assert.equal(qs.filter(x=>x.kind==='choice').length,57);
 assert.equal(qs.filter(x=>x.kind==='true-false').length,27);
 assert.equal(qs.filter(x=>x.kind==='short').length,21);
 for(const item of qs){
  assert.ok(item.source.page>=1&&item.source.page<=67,item.id);
  assert.equal(item.source.file,'Chuong_1.pdf');
  assert.ok(item.nativeLatex&&item.solutionSteps.length>=3,item.id);
  for(const text of [item.prompt,...item.options??[],...item.statements??[]])assert.doesNotThrow(()=>richText(text),item.id);
  assert.doesNotThrow(()=>solutionHTML(item.solutionSteps),item.id);
  if(item.kind==='true-false'){assert.equal(item.statements.length,4);assert.equal(item.answer.length,4);}
 }
});
test('Đủ 58 hình và bảng; mỗi ảnh xuất bản là WebP hợp lệ, không dùng ảnh thay công thức',async()=>{
 const illustrated=qs.filter(x=>x.diagram);assert.equal(illustrated.length,58);
 const manifest=JSON.parse(await readFile(new URL('../site/toan12-chuong1/manifest.json',import.meta.url),'utf8'));
 assert.equal(manifest.figures.length,58);assert.equal(Object.keys(manifest.questions).length,105);
 for(const item of illustrated){
  for(const folder of ['site','assets']){
   const bytes=await readFile(new URL(`../${folder}/toan12-chuong1/${item.diagram.file}`,import.meta.url));
   assert.equal(bytes.toString('ascii',8,12),'WEBP',item.id);
  }
  assert.ok(!item.pdfSource,item.id);assert.ok(item.prompt.length>30);
 }
});
test('Tính độc lập các bài tối ưu liên tục và các kết quả làm tròn',()=>{
 const V=a=>a*Math.sqrt(100-2*a*a)*5/3;
 const h=-5+2*Math.sqrt(13);
 const examples=[
  [86,round(optimum(V,.0001,Math.sqrt(50)-.0001,false).y,1)],
  [87,round(optimum(v=>v*v*(60/(v-5)+60/(v+5))/40,5.00001,50).x,2)],
  [88,round(optimum(x=>(x+3)**2+(24+72/x)**2,.01,100).y)],
  [89,round((-3+Math.sqrt(281))/4,2)],
  [90,round(72-120*optimum(x=>4*x*(.3-20*x*x/3),0,Math.sqrt(.045),false).y,1)],
  [92,round(optimum(x=>1500+400*Math.log(x/1200)-x,1,1200,false).y)],
  [95,round(4/optimum(y=>4*y*y+48*y+72/y+8,.01,10).x,2)],
  [97,round(100*optimum(t=>Math.abs((3-1.2*3**(-.1*t))-(2.5-3**(-.2*t))),0,12).y,1)],
  [98,optimum(x=>Math.sqrt(x*x+25)/4.32+(7-x)/6.48,0,7).x],
  [99,round(350/Math.PI/optimum(r=>700/r+8*r*r,.01,20).x**2,2)],
  [101,round(optimum(t=>Math.PI*(81-t*t)*(5+t/3),0,9,false).y)],
  [102,round(optimum(r=>{const H=3-r/4;return r<=4/3?4*Math.PI*r**3/3:Math.PI*H*H*(r-H/3);},0,12,false).y,1)],
  [103,round(optimum(t=>1/(1/(120-t)+1/(60+.5*t)),0,119.999,false).y,1)],
  [104,round(optimum(r=>200*Math.PI*r*r+3000/r,.01,10).y/1000,2)],
  [105,Math.abs(100*(.5-1)/2)]
 ];
 for(const [n,value] of examples)assert.ok(Math.abs(q(n).value-value)<1e-5,`${n}: ${value}`);
 assert.ok(h>0&&h<9);
 assert.ok(gradeShortAnswer(q(98),'2sqrt(5)'));
 for(const item of qs.filter(x=>x.kind==='short')){
  assert.ok(gradeShortAnswer(item,String(item.value)),item.id);
  assert.equal(gradeShortAnswer(item,String(item.value+1)),false,item.id);
 }
});
test('Đếm nguyên, xác suất và các đáp án nguồn bị gắn nhầm',()=>{
 const profit=x=>-.01*x*x+110*x-30000;
 assert.equal(Array.from({length:4500},(_,i)=>i+1).find(x=>profit(x)>100000),q(85).value);
 const valid=[];
 for(let a=1;a<=32;a++)for(let d=1;d<=32;d++){const u=a+7*d;if(2**u===2**27*u)valid.push(a+2*d);}
 assert.equal(Math.min(...valid),q(91).value);
 let all=0,good=0;
 for(let x=1;x<20;x++)for(let y=1;y<21-x;y++){const z=21-x-y;all++;if(x+y>z&&x+z>y&&y+z>x)good++;}
 assert.equal(all,190);assert.equal(good,55);assert.equal(q(94).value,49);
 assert.equal(q(96).value,2*(-1)+12+10**3);
 assert.equal(q(67).answer[3],'Đúng');assert.equal(Math.round(3072*Math.sqrt(3)),5321);
 assert.equal(q(84).answer[1],'Sai');assert.equal(round(5+39.2*4-4.9*4**2,1),83.4);
 assert.equal(q(56).options[q(56).answer],'Không đủ dữ kiện để xác định');
 assert.ok([56,67,84].every(n=>q(n).sourceCorrection));
});
