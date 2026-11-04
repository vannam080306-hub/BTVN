import {writeFile} from 'node:fs/promises';
import {subjects,chapters} from '../site/data.js';
import {toLatexText} from './latex-migration.mjs';
import {getStudyGuide} from '../site/study-guides.js';
import {getDetailedSolution} from './detailed-solutions.mjs';

export async function buildMathContent(){
 const data={};
 for(const subject of subjects)for(const grade of [10,11,12])for(const chapter of chapters(subject.id,grade))for(const q of chapter.questions){
  // This chapter supplies PDF crops or authored prose ready for display.
  if(subject.id==='ly'&&grade===12&&chapter.id===1)continue;
  const convert=value=>toLatexText(value,{chem:subject.id==='hoa'});
  const guide=getStudyGuide(q);
  data[q.id]={prompt:convert(q.prompt),options:q.options?.map(convert),explanation:convert(q.explanation),hint:convert(q.hint),guide:{...guide,symbols:guide.symbols.map(([symbol,meaning])=>[symbol,convert(meaning)]),condition:convert(guide.condition)},...(q.answerText?{answerText:convert(q.answerText)}:{}),...(q.table?{table:{headers:q.table.headers?.map(convert),rows:q.table.rows.map(r=>r.map(convert))}}:{})};
  const steps=getDetailedSolution(q);
  if(steps)data[q.id].solutionSteps=steps;
 }
 await writeFile(new URL('../site/math-content.js',import.meta.url),'// Generated LaTeX presentation fields. Run node scripts/build-math-content.mjs.\nexport const mathContent = '+JSON.stringify(data,null,2)+';\n');
 return data;
}
if(process.argv[1]?.replaceAll('\\','/').endsWith('/build-math-content.mjs'))await buildMathContent();
