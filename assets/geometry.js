// Hình riêng từng câu; phép dựng affine giữ trung điểm, trọng tâm và tỉ số.
const mix=(a,b,t=.5)=>a.map((v,i)=>v+(b[i]-v)*t);
const sum=(a,b)=>a.map((v,i)=>v+b[i]);
const diff=(a,b)=>a.map((v,i)=>v-b[i]);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const intersection=(a,b,c,d)=>{
  const u=diff(b,a),v=diff(d,c),w=diff(c,a),det=u[0]*v[1]-u[1]*v[0];
  if(Math.abs(det)<1e-8)throw Error('Hai đường dựng hình song song');
  return mix(a,b,(w[0]*v[1]-w[1]*v[0])/det);
};
function scene(n){
  const s={number:n,points:{},edges:[],faces:[],hull:[],notes:[],caption:'Hình dựng theo giả thiết. Không suy ra độ dài hoặc góc từ hình biểu diễn.'};
  s.point=(name,p,label=name)=>{s.points[name]={xy:p.slice(0,2),depth:p[2]||0,label};return p;};
  s.get=name=>s.points[name].xy;
  s.combine=(name,terms,label=name)=>{s.point(name,[0,1].map(i=>terms.reduce((v,[k,w])=>v+s.get(k)[i]*w,0)),label);s.points[name].affine=terms;};
  s.at=(name,a,b,t=.5)=>s.combine(name,[[a,1-t],[b,t]]);
  s.center=(name,...keys)=>s.combine(name,keys.map(k=>[k,1/keys.length]));
  s.intersect=(name,a,b,c,d)=>{const p=intersection(s.get(a),s.get(b),s.get(c),s.get(d)),v=diff(s.get(b),s.get(a));s.at(name,a,b,(Math.abs(v[0])>Math.abs(v[1])?(p[0]-s.get(a)[0])/v[0]:(p[1]-s.get(a)[1])/v[1]));};
  s.line=(a,b,style='aux',label='')=>s.edges.push({a,b,style,label});
  s.face=(keys,color='teal')=>s.faces.push({keys,color});
  s.note=(x,y,text)=>s.notes.push({xy:[x,y],text});
  s.path=(keys,style='aux')=>keys.forEach((p,i)=>{if(i)s.line(keys[i-1],p,style);});
  s.poly=(keys,color='teal')=>{s.face(keys,color);keys.forEach((p,i)=>s.line(p,keys[(i+1)%keys.length],'section'));};
  s.long=(a,b,k=.18,style='aux',label='')=>{
    const u=`_${s.edges.length}u`,v=`_${s.edges.length}v`;
    s.combine(u,[[a,1+k],[b,-k]],'');s.combine(v,[[a,-k],[b,1+k]],'');s.line(u,v,style,label);
  };
  return s;
}
function tetra(s,labels=['A','B','C','D']){
  const p=[[255,35,0],[70,300,0],[425,325,180],[495,175,0]];
  labels.forEach((k,i)=>s.point(k,p[i]));
  [[0,1],[0,2],[0,3],[1,2],[2,3]].forEach(([a,b])=>s.line(labels[a],labels[b],'edge'));
  s.line(labels[1],labels[3],'hidden');
  s.hull=[[0,1,2],[0,2,3],[0,3,1],[1,3,2]].map(face=>face.map(i=>labels[i]));
}
function pyramid(s,small=false,trapezoid=false){
  const p=small?[[170,30,220],[90,180,-160],[170,260,0],[300,230,160],[220,150,0]]:[[300,30,220],[260,205,-160],[75,325,0],[400,325,160],[585,205,0]];
  if(trapezoid)p[4]=[622,181,-32];
  ['S','A','B','C','D'].forEach((k,i)=>s.point(k,p[i]));
  [['S','B'],['S','C'],['S','D'],['A','B'],['B','C'],['C','D']].forEach(([a,b])=>s.line(a,b,'edge'));
  s.line('S','A','hidden');s.line('A','D','hidden');
  s.hull=[['S','A','B'],['S','B','C'],['S','C','D'],['S','D','A'],['A','B','C','D']];
}
function prism(s,box=false){
  const base=box?{A:[85,305,100],B:[390,325,200],C:[490,235,100],D:[185,215,0]}:{A:[90,300,100],B:[340,315,200],C:[425,205,0]};
  const v=[-25,-165,220];
  Object.entries(base).forEach(([k,p])=>{s.point(k,p);s.point(k+'′',sum(p,v));});
  const keys=Object.keys(base);
  keys.forEach((k,i)=>{
    const next=keys[(i+1)%keys.length];
    s.line(k,next,(box?(k==='C'||k==='D'):k==='C')?'hidden':'edge');
    s.line(k+'′',next+'′','edge');s.line(k,k+'′',box&&k==='D'?'hidden':'edge');
  });
  s.hull=[keys,keys.map(k=>k+'′'),...keys.map((k,i)=>[k,keys[(i+1)%keys.length],keys[(i+1)%keys.length]+'′',k+'′'])];
}
function plane(s,id,x,y,w=410,h=115,color='teal',label=`(${id})`){
  const keys=[0,1,2,3].map(i=>`_${id}${i}`);
  [[x,y,-y],[x+w,y,-y],[x+w+65,y-h,-y],[x+65,y-h,-y]].forEach((p,i)=>s.point(keys[i],p,''));
  s.face(keys,color);keys.forEach((p,i)=>s.line(p,keys[(i+1)%4],'plane'));
  if(label)s.note(x+22,y-14,label);
}
function loose(s,name,a,b,style='aux'){
  const ka=`_${name}${s.edges.length}a`,kb=`_${name}${s.edges.length}b`;s.point(ka,a,'');s.point(kb,b,'');s.line(ka,kb,style,name);
}
export function chapter4Diagram(n){
  if(!Number.isInteger(n)||n<1||n>48)return null;
  const s=scene(n);
  switch(n){
    case 1:
      plane(s,'P',60,315,410,170);s.point('A',[180,250]);s.point('B',[380,265]);s.point('C',[300,150]);s.path(['A','B','C','A']);
      s.caption='Một cấu hình ba điểm phân biệt trong không gian; xét các điều kiện nêu ở đề.';break;
    case 2:
      plane(s,'P',50,310);s.point('A',[200,240]);s.point('B',[350,220]);s.long('A','B',.65);break;
    case 3:
      plane(s,'P',50,300);s.point('A',[150,235]);s.point('B',[285,220]);s.point('C',[420,205]);s.long('A','C',.14);
      s.caption='A, B, C cùng nằm trên một đường thẳng. Số mặt phẳng chứa chúng là điều cần xét.';break;
    case 4:tetra(s);break;
    case 5:
      tetra(s);s.face(['A','B','C'],'teal');s.face(['A','B','D'],'amber');break;
    case 6:case 7:
      pyramid(s);s.intersect('O','A','C','B','D');
      s.line('A','C','hidden');s.line('B','D','hidden');s.line('S','O');
      if(n===7){s.at('M','S','C',.42);s.line('A','M');s.intersect('K','A','M','S','O');}
      else{s.face(['S','A','C'],'teal');s.face(['S','B','D'],'amber');}break;
    case 8:
      tetra(s);s.at('M','A','B');s.at('N','A','C');s.at('P','A','D');s.poly(['M','N','P']);break;
    case 9:
      plane(s,'P',40,300,185,75);loose(s,'a',[80,260],[220,240]);loose(s,'b',[95,290],[235,270]);
      plane(s,'Q',315,300,180,75,'amber');loose(s,'c',[340,185],[530,145]);loose(s,'d',[355,270],[530,270]);
      s.note(75,335,'Cấu hình I');s.note(350,335,'Cấu hình II');s.caption='Hai cấu hình minh họa cho các đường thẳng không có điểm chung.';break;
    case 10:
      tetra(s);s.line('A','B','accent');s.line('C','D','accent2');break;
    case 11:
      loose(s,'d',[80,270],[475,235]);s.point('M',[240,125]);loose(s,'a',[80,125+160*35/395],[475,125-235*35/395]);
      s.caption='M nằm ngoài d; a là đường dựng qua M theo phương song song với d.';break;
    case 12:
      tetra(s);s.at('M','A','B');s.at('N','A','C');s.line('M','N');s.line('B','C','accent2','10 cm');s.note(320,115,'MN = ?');break;
    case 13:
      tetra(s);s.at('I','A','B');s.center('G','A','B','C');s.center('H','A','B','D');
      s.line('I','C');s.line('I','D');s.line('G','H','accent');s.line('C','D','accent2','15 cm');s.note(315,215,'GH = ?');break;
    case 14:
      pyramid(s);s.face(['S','A','B'],'teal');s.face(['S','C','D'],'amber');s.line('A','B','accent');s.line('C','D','accent2');
      s.caption='Đáy ABCD là hình bình hành. Các cạnh và đường của hai mặt phẳng được biểu diễn theo vị trí nhìn thấy hoặc bị khuất.';break;
    case 15:{
      const O=[290,200,0],x=[180,25,0],y=[-110,65,-120],z=[0,-150,150];
      for(const [i,u,v,color] of [[0,x,y,'teal'],[1,x,z,'amber'],[2,y,z,'blue']]){
        const keys=[];
        for(const [j,a,b] of [[0,-.8,-.8],[1,.8,-.8],[2,.8,.8],[3,-.8,.8]]){
          const key=`_plane${i}${j}`;s.point(key,sum(O,sum(u.map(t=>t*a),v.map(t=>t*b))),'');keys.push(key);
        }
        s.face(keys,color);keys.forEach((k,j)=>s.line(k,keys[(j+1)%4],'plane'));
      }
      s.point('O',O);[x,y,z].forEach((v,i)=>loose(s,['a','b','c'][i],diff(O,v),sum(O,v)));
      s.caption='Một cấu hình ba giao tuyến cùng qua O. Đề hỏi kết luận tổng quát, không chỉ cấu hình này.';break;
    }
    case 16:
      tetra(s);s.at('M','A','B');s.at('N','C','D');s.at('P','A','C');s.at('Q','B','D');s.line('M','N');s.line('P','Q','accent2');s.center('G','A','B','C','D');break;
    case 17:
      plane(s,'P',50,310);loose(s,'d',[100,110],[485,85]);s.caption='Một vị trí minh họa của d và (P). Dùng định nghĩa để trả lời.';break;
    case 18:
      plane(s,'P',50,315);loose(s,'b',[140,255],[440,220]);loose(s,'a',[140,125],[440,90]);break;
    case 19:
      plane(s,'P',30,300,200,80);loose(s,'b',[65,275],[215,250]);loose(s,'a',[100,245],[250,220]);
      plane(s,'Q',320,300,200,80,'amber','(P)');loose(s,'b₂',[350,260],[510,235]);loose(s,'a₂',[350,150],[510,125]);
      s.note(65,345,'Cấu hình I');s.note(355,345,'Cấu hình II');s.caption='Hai cấu hình cùng thỏa a ∥ b và b thuộc (P); a₂, b₂ ký hiệu a, b ở cấu hình II.';break;
    case 20:
      tetra(s,['S','A','B','C']);s.at('M','S','A');s.at('N','S','B');s.line('M','N');s.face(['A','B','C'],'amber');break;
    case 21:
      pyramid(s);s.at('M','A','B');s.at('N','B','C');s.line('A','C','hidden');s.line('M','N');s.face(['S','A','C'],'amber');break;
    case 22:
      plane(s,'P',55,320);['_q1','_q2','_q3','_q4'].forEach((k,i)=>s.point(k,[[150,350],[460,300],[460,65],[150,115]][i],''));
      s.face(['_q1','_q2','_q3','_q4'],'amber');s.note(470,70,'(Q)');loose(s,'b',[150,250],[460,200]);loose(s,'a',[150,150],[460,100]);break;
    case 23:
      pyramid(s);s.center('G','S','A','B');s.center('H','S','B','C');s.at('I','S','B');s.line('I','A');s.line('I','C');s.line('G','H','accent');s.line('A','C','hidden');s.face(['S','A','C'],'amber');break;
    case 24:
      tetra(s);s.at('M','A','B',.42);s.at('N','C','B',.42);s.at('P','C','D',.42);s.at('Q','A','D',.42);s.poly(['M','N','P','Q']);
      s.caption='Mặt cắt qua M, có hai phương AC và BD. N, P, Q là các giao điểm phụ trên BC, CD, AD.';break;
    case 25:
      plane(s,'Q',50,325);plane(s,'P',50,185,410,110,'amber');loose(s,'a',[150,150],[425,125]);loose(s,'b',[210,175],[380,105]);break;
    case 26:
      plane(s,'P',50,325);plane(s,'Q',50,155,410,115,'amber');s.point('M',[300,95]);
      s.caption='M nằm ngoài (P); hình minh họa mặt phẳng (Q) qua M và song song với (P).';break;
    case 27:
      plane(s,'Q',50,325);plane(s,'P',50,185,410,110,'amber');
      ['_r1','_r2','_r3','_r4'].forEach((k,i)=>s.point(k,[[170,355],[420,315],[420,40],[170,80]][i],''));s.face(['_r1','_r2','_r3','_r4'],'blue');
      loose(s,'a',[170,125],[420,85]);loose(s,'b',[170,265],[420,225]);s.note(380,55,'(R)');break;
    case 28:
      [110,200,335].forEach((y,i)=>plane(s,['P','Q','R'][i],45,y,410,55,['teal','amber','blue'][i]));
      [['A',[180,85]],['B',[210,175]],['C',[255,310]],['A′',[370,85]],['B′',[390,175]],['C′',[420,310]]].forEach(([k,p])=>s.point(k,p));
      s.long('A','C',.13);s.long('A′','C′',.13,'accent2');s.note(105,150,'AB = 2');s.note(120,245,'BC = 3');s.note(405,150,'A′B′ = 4');s.note(450,245,'B′C′ = ?');break;
    case 29:
      prism(s);s.face(['A','B','C'],'amber');s.face(['A′','B′','C′'],'teal');break;
    case 30:
      pyramid(s);s.center('O','A','C');s.at('M','S','A');s.at('N','S','D');s.line('A','C','hidden');s.line('B','D','hidden');s.poly(['O','M','N']);break;
    case 31:case 32:
      pyramid(s);s.at('M','S','A');s.at('N','S','B');s.at('P','S','C');s.at('Q','S','D');s.poly(['M','N','P','Q']);
      if(n===32){s.face(['A','B','C','D'],'amber');s.note(200,375,'S đáy = 36 cm²');s.note(405,160,'S = ?');s.caption='Minh họa bằng hình chóp đáy tứ giác. Mặt cắt đi qua trung điểm các cạnh bên; tính chất áp dụng cho mọi hình chóp.';}break;
    case 33:
      plane(s,'P',50,330);s.point('M',[270,80]);s.point('M′',[350,255]);s.long('M','M′',.15,'projection');loose(s,'Δ',[100,70],[180,245],'projection');break;
    case 34:
      plane(s,'P',50,335);loose(s,'d',[245,55],[350,290],'projection');s.point('M',mix([245,55],[350,290],.24));s.point('N',mix([245,55],[350,290],.53));s.point('T',mix([245,55],[350,290],.82));s.point('H',[350,290]);
      loose(s,'Δ',[100,80],[163,221],'projection');s.caption='M, N, T là ba điểm trên d; H là điểm d gặp mặt phẳng chiếu. Δ là phương chiếu.';break;
    case 35:
      plane(s,'P',50,345);s.point('A',[110,90]);s.point('B',[410,120]);s.at('M','A','B',2/3);
      ['A','M','B'].forEach(k=>s.point(k+'′',sum(s.get(k),[60,170])));s.line('A','B');s.line('A′','B′','accent2');['A','M','B'].forEach(k=>s.line(k,k+'′','projection'));s.note(190,65,'AM : MB = 2 : 1');break;
    case 36:case 40:
      [['A',[65,60]],['B',[220,60]],['C',[220,215]],['D',[65,215]],['A′',[335,120]],['B′',[490,120]],['C′',[550,275]],['D′',[395,275]]].forEach(([k,p])=>s.point(k,p));
      s.poly(['A','B','C','D'],'amber');s.poly(['A′','B′','C′','D′']);s.point('_ra',[65,78],'');s.point('_rb',[83,78],'');s.point('_rc',[83,60],'');s.path(['_ra','_rb','_rc'],'edge');
      s.note(75,255,'Hình nguồn');s.note(370,320,'Hình chiếu');s.caption='Một phép chiếu song song không suy biến. A, B, C, D lần lượt có ảnh A′, B′, C′, D′.';break;
    case 37:
      prism(s,true);s.face(['A′','B′','C′'],'amber');s.face(['A','B','C'],'teal');['A','B','C'].forEach(k=>s.line(k+'′',k,'projection'));
      s.caption='Tam giác nguồn A′B′C′; mặt phẳng chiếu (ABCD). Các đường chiếu theo phương AA′.';break;
    case 38:
      prism(s);s.center('O','B','C′');s.line('B','C′');s.line('C','B′');s.face(['A′','B′','C′'],'amber');s.center('O′','B′','C′');s.line('O','O′','projection');
      s.caption='O là tâm mặt bên BCC′B′. O′ ký hiệu ảnh cần xác định trên (A′B′C′).';break;
    case 39:
      plane(s,'P',50,355);loose(s,'a',[90,70],[420,85]);loose(s,'b',[175,145],[450,157.5],'accent2');loose(s,'a′',[150,255],[480,270]);loose(s,'b′',[215,268+1/3],[490,280+5/6],'accent2');
      loose(s,'',[90,70],[150,255],'projection');loose(s,'',[450,157.5],[490,280+5/6],'projection');
      loose(s,'Δ',[65,120],[125,305],'projection');s.caption='Một cấu hình minh họa có hai ảnh a′, b′ song song phân biệt. Đề hỏi các khả năng của hai đường ban đầu.';break;
    case 41:
      plane(s,'Q',50,335);plane(s,'P',50,175,410,90,'amber');loose(s,'a',[120,115],[440,100]);loose(s,'b',[170,305],[440,255],'accent2');break;
    case 42:
      pyramid(s,false,true);s.at('M','S','A');s.at('N','S','B');s.face(['M','C','D'],'amber');s.line('M','C');s.line('M','D');s.line('M','N');break;
    case 43:
      tetra(s);s.at('M','B','C',.4);s.at('N','B','D',.7);s.intersect('K','M','N','C','D');
      s.face(['A','C','D'],'amber');s.long('M','K',.04);s.long('C','K',.04,'hidden');break;
    case 44:
      prism(s);s.at('I','A','B');s.at('I′','A′','B′');s.line('A','I′','projection');s.line('I','B′','projection');s.line('I','I′');s.face(['A′','B′','C′'],'amber');break;
    case 45:
      prism(s,true);s.poly(['A','B′','D′'],'amber');s.caption='Mặt phẳng (AB′D′) được đánh dấu; các đỉnh còn lại đầy đủ để xét các mặt phẳng trong đáp án.';break;
    case 46:
      prism(s);s.at('M','B','B′');s.at('N','C','C′');s.combine('_U',[['B′',1],['B',1],['A',-1]],'');s.combine('_V',[['C′',1],['C',1],['A',-1]],'');
      s.face(['A','_U','_V'],'teal');s.face(['A′','_U','_V'],'amber');s.line('A′','_U','hidden');s.line('A′','_V','hidden');s.line('A','_U');s.line('A','_V');s.line('M','N');s.long('_U','_V',.12,'accent2','d');
      s.caption='Mặt phẳng (A′B′C′) được kéo dài tới giao tuyến d với mặt phẳng (AMN).';break;
    case 47:
      prism(s);s.at('M','A','A′');s.at('N','B','B′');s.at('P','C','C′');s.poly(['M','N','P']);s.face(['A','B','C'],'amber');break;
    case 48:
      pyramid(s,true);s.at('M','S','A');s.at('I','B','C');s.at('G','S','I',3/5);s.at('J','A','I',3);
      s.line('S','I');s.long('A','J',.05);s.long('M','J',.05,'accent2');s.note(260,115,'SG : GI = 3 : 2');s.note(390,320,'AJ / AI = ?');break;
  }
  prepareDepth(s);
  return s;
}

function prepareDepth(s){
  // Độ sâu lớn hơn là gần người quan sát hơn; x,y là tọa độ chiếu song song.
  const set=(k,z)=>{if(s.points[k])s.points[k].depth=z;};
  const planeDepth=(id,z)=>{for(let i=0;i<4;i++)set(`_${id}${i}`,z);};
  const lineDepth=(label,a,b=a)=>s.edges.filter(e=>e.label===label).forEach(e=>{set(e.a,a);set(e.b,b);});
  if(!s.hull.length){
    switch(s.number){
      case 1:for(const k of ['A','B','C'])set(k,-315);break;
      case 2:for(const k of ['A','B'])set(k,-310);break;
      case 3:for(const k of ['A','B','C'])set(k,-300);break;
      case 9:lineDepth('a',-300);lineDepth('b',-300);lineDepth('c',-120);lineDepth('d',-300);break;
      case 17:lineDepth('d',-100);break;
      case 18:lineDepth('a',-100);lineDepth('b',-315);break;
      case 19:lineDepth('a',-300);lineDepth('b',-300);lineDepth('a₂',-100);lineDepth('b₂',-300);break;
      case 22:{
        planeDepth('P',0);
        for(const k of ['_q1','_q2','_q3','_q4']){const [x,y]=s.get(k);set(k,250-(x-150)*50/310-y);}
        lineDepth('a',100);lineDepth('b',0);break;
      }
      case 25:lineDepth('a',-185);lineDepth('b',-185);break;
      case 26:set('M',-155);break;
      case 27:{
        planeDepth('P',100);planeDepth('Q',0);
        for(const k of ['_r1','_r2','_r3','_r4']){const [x,y]=s.get(k);set(k,(265-(x-170)*.16-y)*100/140);}
        lineDepth('a',100);lineDepth('b',0);break;
      }
      case 28:for(const [k,z] of [['A',-110],['A′',-110],['B',-200],['B′',-200],['C',-335],['C′',-335]])set(k,z);break;
      case 33:set('M',-100);set('M′',-330);lineDepth('Δ',-100,-330);break;
      case 34:
        lineDepth('d',-80,-335);lineDepth('Δ',-80,-233);set('H',-335);
        for(const [k,t] of [['M',.24],['N',.53],['T',.82]])set(k,-80-255*t);break;
      case 35:
        set('A',-120);set('B',-120);for(const k of ['A′','M′','B′'])set(k,-345);break;
      case 39:{
        lineDepth('a',-100);lineDepth('b',-185);lineDepth('a′',-355);lineDepth('b′',-355);lineDepth('Δ',-100,-355);
        const unnamed=s.edges.filter(e=>e.style==='projection'&&!e.label);
        if(unnamed[0]){set(unnamed[0].a,-100);set(unnamed[0].b,-355);}
        if(unnamed[1]){set(unnamed[1].a,-185);set(unnamed[1].b,-355);}break;
      }
      case 41:lineDepth('a',-175);lineDepth('b',-335);break;
    }
  }
  const cache=new Map();
  const depth=k=>{
    if(cache.has(k))return cache.get(k);
    const p=s.points[k],z=p.affine?p.affine.reduce((v,[parent,w])=>v+depth(parent)*w,0):p.depth;
    cache.set(k,z);return z;
  };
  for(const [k,p] of Object.entries(s.points))p.xyz=[...p.xy,depth(k)];
  // Vẽ đủ biên các mặt phẳng được nhắc đến, không tô màu hay tô kín mặt.
  const sameEdge=(a,b,e)=>(e.a===a&&e.b===b)||(e.a===b&&e.b===a);
  for(const f of s.faces)for(let i=0;i<f.keys.length;i++){
    const a=f.keys[i],b=f.keys[(i+1)%f.keys.length];
    if(!s.edges.some(e=>sameEdge(a,b,e)))s.line(a,b,'plane');
  }
}

const det2=(a,b)=>a[0]*b[1]-a[1]*b[0];
function barycentric(p,a,b,c){
  const u=diff(b,a),v=diff(c,a),w=diff(p,a),den=det2(u,v);
  if(Math.abs(den)<1e-8)return null;
  const t=det2(w,v)/den,r=det2(u,w)/den;
  return [1-t-r,t,r];
}
function triangleDepth(p,triangle){
  const b=barycentric(p,...triangle);
  if(!b||b.some(v=>v< -1e-8))return null;
  return b.reduce((z,v,i)=>z+v*triangle[i][2],0);
}
function triangles(s){
  const surfaces=s.hull.length?s.hull:s.faces.map(f=>f.keys);
  return surfaces.flatMap(keys=>keys.slice(1,-1).map((_,i)=>[keys[0],keys[i+1],keys[i+2]].map(k=>s.points[k].xyz)));
}
export function isGeometryPointHidden(s,p){
  return triangles(s).some(t=>{const z=triangleDepth(p,t);return z!==null&&z>p[2]+1e-6;});
}

export function geometrySegments(s){
  const mesh=triangles(s),result=[],drawn=new Set();
  for(const edge of s.edges){
    const a=s.points[edge.a].xyz,b=s.points[edge.b].xyz,v=diff(b,a);
    if(Math.hypot(v[0],v[1])<1e-8)continue;
    const splits=[0,1];
    for(const triangle of mesh){
      // Giao với biên hình chiếu từng mặt: một đường có thể vừa thấy vừa khuất.
      for(let i=0;i<3;i++){
        const c=triangle[i],d=triangle[(i+1)%3],u=diff(d,c),den=det2(v,u);
        if(Math.abs(den)<1e-8)continue;
        const w=diff(c,a),t=det2(w,u)/den,r=det2(w,v)/den;
        if(t>1e-8&&t<1-1e-8&&r>=-1e-8&&r<=1+1e-8)splits.push(t);
      }
      // Giao thực với mặt phẳng, không chỉ giao nhau trên bản vẽ.
      const ca=barycentric(a,...triangle),cb=barycentric(b,...triangle);
      if(ca&&cb){
        const za=ca.reduce((z,w,i)=>z+w*triangle[i][2],0)-a[2];
        const zb=cb.reduce((z,w,i)=>z+w*triangle[i][2],0)-b[2];
        if(Math.abs(za-zb)>1e-8){const t=za/(za-zb);if(t>1e-8&&t<1-1e-8)splits.push(t);}
      }
    }
    const bounds=[...new Set(splits.map(t=>Number(t.toFixed(10))))].sort((x,y)=>x-y),pieces=[];
    for(let i=1;i<bounds.length;i++){
      const left=bounds[i-1],right=bounds[i];if(right-left<1e-8)continue;
      const mid=mix(a,b,(left+right)/2),hidden=mesh.some(triangle=>{const z=triangleDepth(mid,triangle);return z!==null&&z>mid[2]+1e-6;});
      const previous=pieces.at(-1);
      if(previous&&previous.hidden===hidden)previous.right=right;
      else pieces.push({left,right,hidden});
    }
    for(const piece of pieces){
      const start=mix(a,b,piece.left),end=mix(a,b,piece.right);
      const key=[start,end].map(p=>p.map(x=>x.toFixed(5)).join(',')).sort().join('/')+'/'+piece.hidden;
      if(drawn.has(key))continue;drawn.add(key);
      result.push({edge,start,end,hidden:piece.hidden});
    }
  }
  return result;
}

function render(s){
  const all=[...Object.values(s.points).map(p=>p.xy),...s.notes.map(p=>p.xy)];
  const x0=Math.min(0,...all.map(p=>p[0]))-35,y0=Math.min(0,...all.map(p=>p[1]))-35;
  const w=Math.max(580,...all.map(p=>p[0]))-x0+60,h=Math.max(350,...all.map(p=>p[1]))-y0+45;
  const edges=geometrySegments(s).sort((a,b)=>Number(b.hidden)-Number(a.hidden)).map(p=>`<line x1="${p.start[0]}" y1="${p.start[1]}" x2="${p.end[0]}" y2="${p.end[1]}" class="geo-line geo-${p.hidden?'hidden':'visible'}" data-visibility="${p.hidden?'hidden':'visible'}"/>`).join('');
  const edgeLabels=s.edges.filter(e=>e.label).map(e=>{
    const m=mix(s.get(e.a),s.get(e.b),s.number===34&&e.label==='d'?.05:e.label.length<=2?.82:.5);
    return `<text x="${m[0]+9}" y="${m[1]-10}" class="geo-label geo-measure">${esc(e.label)}</text>`;
  }).join('');
  const placed=[];
  const labels=Object.entries(s.points).filter(([,p])=>p.label).map(([key,p])=>{
    const candidates=[[12,-13],[-23,-13],[12,25],[-23,25],[22,5],[-30,5],[0,-25],[0,36]];
    let best,score=Infinity;
    for(const [dx,dy] of candidates){
      const x=p.xy[0]+dx,y=p.xy[1]+dy,box=[x-4,y-19,x+p.label.length*12+4,y+5];let cost=Math.hypot(dx,dy)*.2;
      for(const b of placed)if(box[0]<b[2]&&box[2]>b[0]&&box[1]<b[3]&&box[3]>b[1])cost+=1000;
      for(const q of Object.values(s.points))if(q!==p&&q.label&&q.xy[0]>box[0]&&q.xy[0]<box[2]&&q.xy[1]>box[1]&&q.xy[1]<box[3])cost+=400;
      if(cost<score){score=cost;best={x,y,box};}
    }
    placed.push(best.box);
    return `<g data-point="${esc(key)}"><circle cx="${p.xy[0]}" cy="${p.xy[1]}" r="3.4" class="geo-point"/><text x="${best.x}" y="${best.y}" class="geo-label">${esc(p.label)}</text></g>`;
  }).join('');
  const notes=s.notes.map(p=>`<text x="${p.xy[0]}" y="${p.xy[1]}" class="geo-label geo-note">${esc(p.text)}</text>`).join('');
  return `<figure class="geometry-figure" data-figure-question="${s.number}"><div class="geometry-toolbar"><span>Hình câu ${s.number}</span><button type="button" class="figure-zoom" data-action="zoom-figure" aria-label="Phóng to hình câu ${s.number}">⤢ Phóng to hình</button></div><svg viewBox="${x0} ${y0} ${w} ${h}" role="img" aria-label="Hình dựng đầy đủ cho câu ${s.number}"><title>Hình câu ${s.number}</title><desc>Các điểm: ${esc(Object.values(s.points).map(p=>p.label).filter(Boolean).join(', '))}. ${esc(s.caption)}</desc>${edges}${edgeLabels}${labels}${notes}</svg></figure>`;
}
export function geometryFigure(figure){const s=chapter4Diagram(figure?.chapter4);return s?render(s):'';}
