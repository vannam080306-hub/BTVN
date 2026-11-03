import {buildMathContent} from './build-math-content.mjs';
import {mkdir,writeFile,readFile,copyFile,cp} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('..',import.meta.url));
await buildMathContent();
const names=['math.js','math-content.js','app.js','data.js','toan11-chuong4.js','geometry.js','toan11-chuong3.js','toan11-chuong2.js','toan11-chuong1.js','answers.js','styles.css','favicon.svg'];
const sources=await Promise.all(names.map(n=>readFile(join(root,'site',n),'utf8')));
const version=createHash('sha256').update(sources.join('')).digest('hex').slice(0,12);
await mkdir(join(root,'assets'),{recursive:true});
let html=await readFile(join(root,'site/index.html'),'utf8');
html=html.replace(/\.\/assets\/(app\.js|styles\.css)/g,(s)=>s+'?v='+version);
await writeFile(join(root,'index.html'),html);
for(let i=0;i<names.length;i++){
 let content=sources[i];
 if(names[i].endsWith('.js'))content=content.replace(/(\.\/(?:math-content|math|data|answers|geometry|toan11-chuong4|toan11-chuong1|toan11-chuong2|toan11-chuong3)\.js)(['"])/g,(_,file,quote)=>file+'?v='+version+quote);
 await writeFile(join(root,'assets',names[i]),content);
}
await cp(join(root,'site/vendor'),join(root,'assets/vendor'),{recursive:true});
console.log('Đã tạo website tĩnh, phiên bản '+version);
