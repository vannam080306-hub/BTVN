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
export function studyGuideHTML(guide,hint){
 if(!guide)return `<p class="hint-text">${richText(hint)}</p>`;
 return `<section class="study-guide"><h2>Công thức cần dùng</h2><div class="formula-list">${guide.formulas.map(tex=>renderFormula(tex,true)).join('')}</div><h2>Giải thích ký hiệu</h2><dl class="symbol-definitions">${guide.symbols.map(([symbol,meaning])=>`<div><dt>${renderFormula(symbol)}</dt><dd>${richText(meaning)}</dd></div>`).join('')}</dl>${guide.condition?`<p class="formula-condition"><b>Điều kiện áp dụng:</b> ${richText(guide.condition)}</p>`:''}<h2>Gợi ý làm bài</h2><p class="hint-text">${richText(hint)}</p></section>`;
}
