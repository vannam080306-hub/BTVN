import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join,extname} from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
const server=http.createServer(async(req,res)=>{let path=new URL(req.url,'http://localhost').pathname;path=path.replace(/^\/BTVN/,'');if(path==='/'||path==='')path='/index.html';if(!/^\/(index\.html|assets\/(math\.js|math-content\.js|app\.js|data\.js|geometry\.js|ly12-nhiet\.js|toan11-chuong4\.js|toan11-chuong3\.js|toan11-chuong2\.js|toan11-chuong1\.js|answers\.js|styles\.css|favicon\.svg))$/.test(path)&&!/^\/assets\/ly12-nhiet\/(?:(?:pdf2-)?\d{1,2}-(?:de|giai)|68-69-de-chung)\.webp$/.test(path)&&!/^\/assets\/vendor\/katex\/(katex\.mjs|katex\.min\.css|fonts\/[A-Za-z0-9_-]+\.woff2)$/.test(path)){res.writeHead(404).end();return;}try{const data=await readFile(join(root,path));res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.woff2':'font/woff2','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp'})[extname(path)]);res.end(data);}catch{res.writeHead(404).end();}});
server.listen(Number(process.env.PORT||3000),'127.0.0.1',()=>console.log('http://127.0.0.1:'+server.address().port+'/BTVN/'));
