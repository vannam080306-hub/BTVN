import {test} from 'node:test';
import assert from 'node:assert/strict';
import {chapter4Questions as qs} from '../site/toan11-chuong4.js';
import {chapters} from '../site/data.js';
import {geometryFigure} from '../site/geometry.js';
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

test('Các chương cũ không có hình mới; hình SVG hỗ trợ cả cấu hình SABC',()=>{
  assert.equal(geometryFigure(undefined),'');
  assert.equal(geometryFigure('unknown'),'');
  assert.match(geometryFigure('stetra'),/Tứ diện SABC/);
  assert.match(geometryFigure('box'),/stroke-dasharray/);
});
