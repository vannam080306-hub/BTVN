import katex from './vendor/katex/katex.mjs';
const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderFormula(tex,displayMode=false){
 return katex.renderToString(tex,{displayMode,throwOnError:true,strict:false,trust:false,maxExpand:1000,maxSize:20,output:'htmlAndMathml'});
}
export function richText(value){
 const text=String(value??'');let result='',cursor=0;
 for(const m of text.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)){
  result+=escape(text.slice(cursor,m.index))+renderFormula(m[1]??m[2],m[2]!==undefined);cursor=m.index+m[0].length;
 }
 return result+escape(text.slice(cursor));
}
export function studyGuideHTML(guide,solution,answer){
 return `<section class="study-guide">${guide?`<h2>Công thức cần dùng</h2><div class="formula-list">${guide.formulas.map(tex=>renderFormula(tex,true)).join('')}</div>${guide.condition?`<p class="formula-condition"><b>Điều kiện áp dụng:</b> ${richText(guide.condition)}</p>`:''}`:''}<h2>Lời giải</h2><p class="hint-text">${richText(solution)}</p>${answer?`<p class="solution-answer"><b>Đáp án:</b> ${richText(answer)}</p>`:''}</section>`;
}
