// Convert the existing mathematical notation into authored LaTeX display fields.
// Original grading/search fields and stable question IDs remain untouched.
const greek={π:'pi',α:'alpha',β:'beta',γ:'gamma',δ:'delta',Δ:'Delta',φ:'varphi',ω:'omega',θ:'theta',ℝ:'mathbb{R}',ℤ:'mathbb{Z}',ℕ:'mathbb{N}','∞':'infty'};
const subscript=Object.fromEntries([... '₀₁₂₃₄₅₆₇₈₉ₙᵢₖₒ₊₋'].map((c,i)=>[c,['0','1','2','3','4','5','6','7','8','9','n','i','k','o','+','-'][i]]));
const superscript=Object.fromEntries([... '⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁻⁺'].map((c,i)=>[c,['0','1','2','3','4','5','6','7','8','9','n','-','+'][i]]));
const symbols={'−':'-','–':'-','×':'\\times','·':'\\cdot','÷':'/','≤':'\\le','≥':'\\ge','≠':'\\ne','≈':'\\approx','∈':'\\in','∉':'\\notin','∩':'\\cap','∪':'\\cup','∥':'\\parallel','⇒':'\\Rightarrow','⇔':'\\Leftrightarrow','→':'\\to','⇌':'\\rightleftharpoons','∗':'*','ℓ':'\\ell'};
const opens={'(':')','[':']','{':'}','|':'|'};
const isLetter=c=>!!c&&/\p{L}/u.test(c);
const wordTokens=(word,chem)=>{
  if(greek[word])return [{kind:'atom',tex:'\\'+greek[word]}];
  const f=/^(sin|cos|tan|cot|sqrt)(.*)$/.exec(word);
  if(f){const rest=f[2]?wordTokens(f[2],chem):[];return rest?[{kind:'function',tex:'\\'+f[1]},...rest]:null;}
  if(/^[a-zA-Z]$/.test(word))return [{kind:'atom',tex:word}];
  if(/^[A-Z]{2,5}$/.test(word))return [{kind:'atom',tex:chem?'\\mathrm{'+word+'}':word}];
  if(chem&&/^(?:[A-Z][a-z]?)+$/.test(word))return [{kind:'atom',tex:'\\mathrm{'+word+'}'}];
  if(/^[abknuxy]{2,4}$/.test(word))return [...word].map(tex=>({kind:'atom',tex}));
  if(word==='Kc')return [{kind:'atom',tex:'K_{c}'}];
  if(['min','max'].includes(word))return [{kind:'function',tex:'\\'+word}];
  return null;
};

function scan(text,chem){
 const out=[];let i=0,absolute=false;
 while(i<text.length){
  const start=i,c=text[i];
  if(/\s/.test(c)){i++;continue;}
  if(subscript[c]||superscript[c]){
   const dict=subscript[c]?subscript:superscript,kind=subscript[c]?'sub':'power';let tex='';
   while(dict[text[i]])tex+=dict[text[i++]];
   out.push({kind,tex,start,end:i});continue;
  }
  const number=/^\d+(?:[.,]\d+)?/.exec(text.slice(i));
  if(number){let value=number[0];if(/\.\d{8,}/.test(value))value=String(Number(Number(value).toPrecision(10)));i+=number[0].length;out.push({kind:'atom',tex:value.replace(/,/g,'{,}'),start,end:i});continue;}
  if(greek[c]){i++;out.push({kind:'atom',tex:'\\'+greek[c],start,end:i});continue;}
  if(isLetter(c)){
   let word='';while(isLetter(text[i])&&!subscript[text[i]]&&!superscript[text[i]]&&!greek[text[i]])word+=text[i++];
   if(!word){word=text[i++];}
   const tokens=wordTokens(word,chem);
   if(tokens)out.push(...tokens.map(t=>({...t,start,end:i})));else out.push({kind:'text',tex:word,start,end:i});continue;
  }
  if(c==='\u0304'){out.push({kind:'bar',start,end:++i});continue;}
  if(c==='√'){out.push({kind:'root',start,end:++i});continue;}
  if(c==='°'){out.push({kind:'degree',start,end:++i});continue;}
  if(c==='′'||c==="'"){out.push({kind:'prime',start,end:++i});continue;}
  if(c==='|'){out.push({kind:absolute?'close':'open',tex:'|',start,end:++i});absolute=!absolute;continue;}
  if(c==='.'&&text.slice(i,i+3)==='...'){i+=3;out.push({kind:'atom',tex:'\\ldots',start,end:i});continue;}
  if(c==='.'&&/[A-Z]/.test(text[i+1]||'')){out.push({kind:'punct',tex:'.',start,end:++i});continue;}
  if(opens[c]){out.push({kind:'open',tex:c,start,end:++i});continue;}
  if(')]}'.includes(c)){out.push({kind:'close',tex:c,start,end:++i});continue;}
  if('+-*/=<>^|;,!%:'.includes(c)||symbols[c]||c==='\\'){
   let tex=symbols[c]||c;if(c==='\\')tex='\\setminus';if(c==='%')tex='\\%';
   out.push({kind:c==='^'?'caret':'+-*/'.includes(tex)?'op':'punct',tex,start,end:++i});continue;
  }
  out.push({kind:'text',tex:c,start,end:++i});
 }
 return out;
}
function latex(tokens){
 let i=0;
 const node=(tex,inner)=>({tex,inner});
 const ungroup=n=>n.inner??n.tex;
 const canStart=t=>t&&['atom','open','function','root'].includes(t.kind);
 function primary(){
  const t=tokens[i++];if(!t)return node('');
  let n;
  if(t.kind==='open'){
   const body=sequence(true),end=tokens[i]?.kind==='close'?tokens[i++].tex:opens[t.tex];
   const left=t.tex==='{'?'\\{':t.tex,right=end==='}'?'\\}':end;
   n=node('\\left'+left+body+'\\right'+right,t.tex==='|'?undefined:body);
  }else if(t.kind==='root')n=node('\\sqrt{'+ungroup(primary())+'}');
  else if(t.kind==='function'){
   const pow=tokens[i]?.kind==='power'?'^{'+tokens[i++].tex+'}':'';
   let arg='';
   if(canStart(tokens[i])){
    arg=primary().tex;
    // sin 2x, cos kx: the coefficient belongs to the argument.
    if(/^\d/.test(arg))while(tokens[i]?.kind==='atom'&&/^[a-z\\]/.test(tokens[i].tex))arg+=' '+primary().tex;
   }
   n=node(t.tex+pow+(arg?' '+arg:''));
  }else n=node(t.tex||'');
  while(tokens[i]&&['sub','power','degree','prime','bar','caret'].includes(tokens[i].kind)){
   const p=tokens[i++];
   if(p.kind==='sub')n=node(n.tex+'_{'+p.tex+'}');
   if(p.kind==='power')n=node(n.tex+'^{'+p.tex+'}');
   if(p.kind==='degree')n=node(n.tex+'^{\\circ}');
   if(p.kind==='prime')n=node(n.tex+'^{\\prime}');
   if(p.kind==='bar')n=node('\\overline{'+n.tex+'}');
   if(p.kind==='caret')n=node(n.tex+'^{'+ungroup(primary())+'}');
  }
  return n;
 }
 function unary(){if(tokens[i]?.kind==='op'&&['+','-'].includes(tokens[i].tex)){const op=tokens[i++].tex;return node(op+unary().tex);}return primary();}
 function product(){
  let a=unary();
  while(i<tokens.length){
   const t=tokens[i];
   if(t.kind==='op'&&['*','/'].includes(t.tex)){i++;const b=unary();a=t.tex==='/'?node('\\frac{'+ungroup(a)+'}{'+ungroup(b)+'}'):node(a.tex+'\\cdot '+b.tex);}
   else if(t.tex==='\\times'||t.tex==='\\cdot'){i++;a=node(a.tex+' '+t.tex+' '+unary().tex);}
   else if(canStart(t))a=node(a.tex+' '+unary().tex);
   else break;
  }
  return a;
 }
 function addition(){let a=product();while(tokens[i]?.kind==='op'&&['+','-'].includes(tokens[i].tex)){const op=tokens[i++].tex;a=node(a.tex+' '+op+' '+product().tex);}return a;}
 function sequence(group=false){
  let result='';
  while(i<tokens.length&&!(group&&tokens[i].kind==='close')){
   const before=i,t=tokens[i];
   if(canStart(t)||(t.kind==='op'&&['+','-'].includes(t.tex)))result+=(result?' ':'')+addition().tex;
   else {i++;result+=' '+(t.tex==='|'?'\\vert':t.tex||'');}
   if(i===before)throw Error('LaTeX parser did not advance');
  }
  return result.trim();
 }
 return sequence();
}

export function toLatexText(value,{chem=false}={}){
 if(typeof value!=='string')return value;
 const text=value.replace(/sin\/cos/g,'sin và cos').replace(/tan\/cot/g,'tan và cot').replace(/\bQ([123])\b/g,(_,n)=>'Q'+'₀₁₂₃'[Number(n)]);
 const tokens=scan(text,chem);let result='',cursor=0;
 for(let i=0;i<tokens.length;){
  if(tokens[i].kind==='text'){i++;continue;}
  let end=i;while(end<tokens.length&&tokens[end].kind!=='text')end++;
  let a=i,b=end;
  // Leave sentence punctuation/parentheses outside math when no operand follows.
  while(a<b&&['close','punct'].includes(tokens[a].kind))a++;
  while(b>a&&['open','op'].includes(tokens[b-1].kind))b--;
  while(b>a&&[';',',',':'].includes(tokens[b-1].tex))b--;
  const part=tokens.slice(a,b);
  if(part.some(t=>['atom','function','root'].includes(t.kind))){
   const first=tokens[a].start,last=tokens[b-1].end;
   result+=text.slice(cursor,first)+'\\('+latex(part)+'\\)';cursor=last;
  }
  i=end;
 }
 return result+text.slice(cursor);
}
