import {mkdir,copyFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
await mkdir(join(root,'assets'),{recursive:true});
await copyFile(join(root,'site/index.html'),join(root,'index.html'));
for(const name of ['app.js','data.js','styles.css','favicon.svg'])await copyFile(join(root,'site',name),join(root,'assets',name));
console.log('Đã tạo website tĩnh: Môn → Lớp → Chương → Câu hỏi.');
