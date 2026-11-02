import {test} from 'node:test';
import assert from 'node:assert/strict';
import {chapter4Questions as qs} from '../site/toan11-chuong4.js';
import {chapters} from '../site/data.js';
import {geometryFigure,chapter4Diagram,geometrySegments,isGeometryPointHidden} from '../site/geometry.js';
const answer = n => qs[n - 1].options[qs[n - 1].answer];
const add = (a,b) => a.map((v,i)=>v+b[i]);
const sub = (a,b) => a.map((v,i)=>v-b[i]);
const mul = (a,k) => a.map(v=>v*k);
const avg = (...a) => mul(a.reduce(add,[0,0,0]),1/a.length);
const cross = (a,b) => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const dot = (a,b) => a.reduce((s,v,i)=>s+v*b[i],0);
const norm = a => Math.hypot(...a);
const parallel = (a,b) => norm(cross(a,b)) < 1e-9 && norm(a)>1e-9 && norm(b)>1e-9;
const near = (a,b) => assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const same = (a,b) => near(norm(sub(a,b)),0);

test('Chương 4 có 48 câu thuộc đúng sáu phần và đủ dữ liệu',()=>{
  assert.equal(qs.length,48);
  assert.deepEqual(chapters('toan',11)[3].questions,qs);
  assert.equal(new Set(qs.map(q=>q.id)).size,48);
  const counts=new Map();
  for(const q of qs){
    counts.set(q.lesson,(counts.get(q.lesson)||0)+1);
    assert.equal(new Set(q.options).size,4,q.id);
    assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id);
    assert.ok(q.hint&&q.explanation&&q.type&&q.difficulty,q.id);
    assert.equal(q.sample,false);
    const section=Number(q.source.file.slice(0,2));
    assert.ok(section>=1&&section<=6);
    assert.ok(q.source.page>=1&&q.source.page<=[12,10,10,10,7,5][section-1]);
    if(q.figure) assert.match(geometryFigure(q.figure),/<svg/);
  }
  assert.deepEqual([...counts.values()],[8,8,8,8,8,8]);
});

test('Kiểm chứng trung điểm, trọng tâm và thiết diện trên tứ diện xiên',()=>{
  const A=[0,0,0],B=[3,1,0],C=[1,4,1],D=[1,0,5];
  const M=avg(A,B),N=avg(A,C);
  assert.ok(parallel(sub(N,M),sub(C,B)));
  near(norm(sub(N,M))/norm(sub(C,B)),1/2);
  const G=avg(A,B,C),H=avg(A,B,D);
  assert.ok(parallel(sub(H,G),sub(D,C)));
  near(norm(sub(H,G))/norm(sub(D,C)),1/3);
  same(avg(avg(A,B),avg(C,D)),avg(avg(A,C),avg(B,D)));
  assert.equal(answer(12),'5 cm');
  assert.equal(answer(13),'5 cm');
  for(const t of [.2,.5,.8]){
    const m=add(mul(A,1-t),mul(B,t));
    const n=add(mul(C,1-t),mul(B,t));
    const p=add(mul(C,1-t),mul(D,t));
    const q=add(mul(A,1-t),mul(D,t));
    assert.ok(parallel(sub(n,m),sub(C,A)));
    assert.ok(parallel(sub(p,n),sub(D,B)));
    same(add(m,p),add(n,q));
  }
  assert.equal(answer(24),'Hình bình hành');
});

test('Kiểm chứng các mặt phẳng song song bằng hai phương độc lập',()=>{
  const A=[0,0,0],B=[4,0,0],D=[1,3,0],C=add(B,D),S=[2,1,5];
  const O=avg(A,C),M=avg(S,A),N=avg(S,D);
  assert.ok(parallel(sub(M,O),sub(S,C)));
  assert.ok(parallel(sub(N,O),sub(S,B)));
  assert.equal(answer(30),'(SBC)');
  const v=[1,2,6],Bp=add(B,v),Dp=add(D,v),Cp=add(C,v);
  const n1=cross(sub(Bp,A),sub(Dp,A));
  const n2=cross(sub(D,B),sub(Cp,B));
  assert.ok(parallel(n1,n2));
  assert.ok(Math.abs(dot(n1,sub(B,A)))>1e-9);
  assert.equal(answer(45),'(BDC′)');
  near(3*4/2,6);
  assert.equal(answer(28),'6');
  near(36*(1/2)**2,9);
  assert.equal(answer(32),'9 cm²');
});

test('Kiểm chứng phép chiếu xiên và giao điểm trên phần kéo dài',()=>{
  const A=[0,0,0],B=[4,0,0],C=[1,3,0],v=[1,2,6];
  const project=(p,d,z)=>add(p,mul(d,(z-p[2])/d[2]));
  const Ap=add(A,v),Bp=add(B,v),Cp=add(C,v);
  same(project(avg(B,Cp),v,6),avg(Bp,Cp));
  assert.equal(answer(38),'Trung điểm B′C′');
  const I=avg(A,B),Ip=avg(Ap,Bp),direction=sub(Ip,A);
  same(project(I,direction,6),Bp);
  assert.equal(answer(44),'B′');
  const S=[2,1,5],M=avg(S,A),G=add(mul(S,2/5),mul(I,3/5));
  const J=project(M,sub(G,M),0);
  near(norm(sub(J,A))/norm(sub(I,A)),3);
  assert.ok(parallel(sub(J,A),sub(I,A)));
  assert.equal(answer(48),'3');
});

test('Mỗi câu có hình riêng, mọi đỉnh, đường và mặt đều hợp lệ',()=>{
 const outputs=new Set();
 for(let n=1;n<=48;n++){
  const q=qs[n-1],s=chapter4Diagram(n),html=geometryFigure(q.figure);
  assert.deepEqual(q.figure,{chapter4:n});
  assert.match(html,new RegExp('data-figure-question="'+n+'"'));
  assert.match(html,/Phóng to hình/);
  assert.doesNotMatch(html,/NaN|Infinity|undefined|Hình biểu diễn chung/);
  assert.ok(s.edges.length>0);
  for(const p of Object.values(s.points))assert.ok(p.xy.every(Number.isFinite));
  for(const e of s.edges){assert.ok(s.points[e.a]);assert.ok(s.points[e.b]);}
  for(const f of s.faces)for(const k of f.keys)assert.ok(s.points[k]);
  outputs.add(html);
 }
 assert.equal(outputs.size,48);
 assert.equal(geometryFigure(undefined),'');
 assert.equal(geometryFigure('unknown'),'');
});

const p2=(n,key)=>chapter4Diagram(n).get(key);
const mid2=(a,b)=>a.map((v,i)=>(v+b[i])/2);
const near2=(a,b)=>a.forEach((v,i)=>near(v,b[i]));
const cross2=(a,b)=>a[0]*b[1]-a[1]*b[0];
const sub2=(a,b)=>a.map((v,i)=>v-b[i]);
const onLine=(p,a,b)=>near(cross2(sub2(p,a),sub2(b,a)),0);
test('Các điểm phụ thực sự thỏa trung điểm, trọng tâm và giao điểm',()=>{
 for(const [n,defs] of [[8,[['M','A','B'],['N','A','C'],['P','A','D']]],[12,[['M','A','B'],['N','A','C']]],[16,[['M','A','B'],['N','C','D'],['P','A','C'],['Q','B','D']]],[20,[['M','S','A'],['N','S','B']]],[21,[['M','A','B'],['N','B','C']]],[30,[['M','S','A'],['N','S','D'],['O','A','C']]],[31,[['M','S','A'],['N','S','B'],['P','S','C'],['Q','S','D']]],[44,[['I','A','B'],['I′','A′','B′']]],[46,[['M','B','B′'],['N','C','C′']]],[47,[['M','A','A′'],['N','B','B′'],['P','C','C′']]]]){
  for(const [k,a,b]of defs)near2(p2(n,k),mid2(p2(n,a),p2(n,b)));
 }
 for(const [n,k,vertices]of [[13,'G',['A','B','C']],[13,'H',['A','B','D']],[23,'G',['S','A','B']],[23,'H',['S','B','C']]]){
  near2(p2(n,k),[0,1].map(i=>vertices.reduce((sum,v)=>sum+p2(n,v)[i],0)/3));
 }
 onLine(p2(7,'K'),p2(7,'A'),p2(7,'M'));onLine(p2(7,'K'),p2(7,'S'),p2(7,'O'));
 onLine(p2(43,'K'),p2(43,'M'),p2(43,'N'));onLine(p2(43,'K'),p2(43,'C'),p2(43,'D'));
 onLine(p2(48,'J'),p2(48,'M'),p2(48,'G'));onLine(p2(48,'J'),p2(48,'A'),p2(48,'I'));
});
test('Hình thang, tỉ số và giao tuyến kéo dài được vẽ đúng',()=>{
 const s=chapter4Diagram(42),AB=sub2(s.get('B'),s.get('A')),CD=sub2(s.get('D'),s.get('C'));
 near(cross2(AB,CD),0);
 assert.ok(Math.hypot(...AB)!==Math.hypot(...CD));
 const t=chapter4Diagram(35);
 near2(t.get('M'),t.get('A').map((v,i)=>v+(t.get('B')[i]-v)*2/3));
 for(const k of ['A','M','B'])near2(sub2(t.get(k+'′'),t.get(k)),[60,170]);
 const last=chapter4Diagram(48);
 near2(last.get('G'),last.get('S').map((v,i)=>v+(last.get('I')[i]-v)*3/5));
 const d=chapter4Diagram(46);
 onLine(d.get('M'),d.get('A'),d.get('_U'));onLine(d.get('N'),d.get('A'),d.get('_V'));
 near(cross2(sub2(d.get('_V'),d.get('_U')),sub2(d.get('C′'),d.get('B′'))),0);
});

// Kiểm tra trực tiếp dữ liệu độ sâu dùng để vẽ, không chỉ kiểm tra tên lớp SVG.
const edgePieces=(n,a,b)=>geometrySegments(chapter4Diagram(n)).filter(p=>(p.edge.a===a&&p.edge.b===b)||(p.edge.a===b&&p.edge.b===a));
test('Cạnh và đường phụ phía sau khối không bị vẽ đè bằng nét liền',()=>{
 for(const [n,a,b]of [[4,'B','D'],[6,'S','A'],[6,'A','B'],[6,'A','D'],[6,'S','O'],[7,'A','M'],[8,'P','M'],[13,'G','H'],[16,'M','N'],[16,'P','Q'],[31,'M','N'],[31,'Q','M'],[45,'A','D′'],[47,'P','M']]){
  const pieces=edgePieces(n,a,b);assert.ok(pieces.length,`${n}:${a}${b}`);assert.ok(pieces.every(p=>p.hidden),`${n}:${a}${b}`);
 }
 for(const [n,a,b]of [[4,'A','B'],[4,'A','C'],[4,'C','D'],[6,'S','B'],[6,'S','C'],[6,'B','C'],[8,'M','N'],[8,'N','P'],[31,'N','P'],[31,'P','Q'],[44,'I','B′']]){
  const pieces=edgePieces(n,a,b);assert.ok(pieces.length);assert.ok(pieces.every(p=>!p.hidden),`${n}:${a}${b}`);
 }
});
test('Một đường đổi kiểu nét đúng ở chỗ đi vào và ra khỏi khối',()=>{
 const s=chapter4Diagram(48),segments=geometrySegments(s);
 for(const [a,b]of [['A','J'],['M','J']]){
  const pa=s.points[a].xyz,pb=s.points[b].xyz;
  const pieces=segments.filter(p=>Math.abs(cross2(sub2(p.start,pa),sub2(pb,pa)))<1e-7&&Math.abs(cross2(sub2(p.end,pa),sub2(pb,pa)))<1e-7);
  assert.ok(pieces.some(p=>p.hidden));assert.ok(pieces.some(p=>!p.hidden));
 }
 // Các phần che khuất được so sánh với bề mặt ở cùng tọa độ hình chiếu.
 assert.ok(isGeometryPointHidden(chapter4Diagram(4),avg(...['A','B','D'].map(k=>chapter4Diagram(4).points[k].xyz))));
 assert.equal(isGeometryPointHidden(chapter4Diagram(4),avg(...['A','B','C'].map(k=>chapter4Diagram(4).points[k].xyz))),false);
});
test('Các mặt khối và mặt cắt phẳng thực sự trong mô hình ba chiều',()=>{
 for(let n=1;n<=48;n++){
  const s=chapter4Diagram(n);
  for(const face of [...s.hull,...s.faces.map(f=>f.keys)]){
   const p=face.map(k=>s.points[k].xyz),normal=cross(sub(p[1],p[0]),sub(p[2],p[0]));
   for(const q of p.slice(3))near(dot(normal,sub(q,p[0])),0);
  }
  for(const p of geometrySegments(s))assert.ok([...p.start,...p.end].every(Number.isFinite));
  const html=geometryFigure({chapter4:n});assert.doesNotMatch(html,/geo-face|geo-amber|geo-teal|geo-projection|geo-arrow/);
 }
});
