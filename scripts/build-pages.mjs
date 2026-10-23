import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('..',import.meta.url));
// Generate tracked, directly hostable files at repository root. Relative paths work at /BTVN/.
await mkdir(resolve(root,'assets'),{recursive:true});
let html=await readFile(resolve(root,'public/index.html'),'utf8');
html=html.replace('BTVN · Không gian học tập','BTVN · Bản dùng thử trên web')
 .replace('href="/favicon.svg"','href="./assets/favicon.svg"').replace('href="/styles.css"','href="./assets/styles.css"').replace('src="/app.js"','src="./assets/app.js"')
 .replace('<body>','<body><aside class="demo-banner"><span><strong>BẢN DÙNG THỬ</strong> · Dữ liệu lưu trên trình duyệt · AI mô phỏng</span><button id="demo-reset" type="button">Đặt lại dữ liệu mẫu</button></aside>');
await writeFile(resolve(root,'index.html'),html);
let app=await readFile(resolve(root,'public/app.js'),'utf8');
const apiStart=app.indexOf('async function api(path,data)');const apiEnd=app.indexOf('\nfunction theme()',apiStart);
if(apiStart<0||apiEnd<0)throw new Error('Không xác định được adapter API.');
app=app.slice(0,apiStart)+`async function api(path,data){try{return structuredClone(await demoApi(path,data));}catch(error){if(path==='me'){state.user=null;}throw error;}}`+app.slice(apiEnd);
app=`import {demoApi,resetDemo} from './demo-api.js';\ndocument.querySelector('#demo-reset').addEventListener('click',()=>{const dialog=document.querySelector('#modal');dialog.innerHTML='<h2>Đặt lại bản dùng thử?</h2><p>Thao tác này xóa tài khoản và bài làm thử trên trình duyệt này, rồi tạo lại dữ liệu mẫu.</p><div class="form-actions"><button class="secondary" id="keep-demo">Giữ dữ liệu</button><button class="primary" id="confirm-demo-reset">Đặt lại</button></div>';dialog.showModal();dialog.querySelector('#keep-demo').onclick=()=>dialog.close();dialog.querySelector('#confirm-demo-reset').onclick=resetDemo;});\n`+app;
app=app.replace("field('Tên đăng nhập','username','','text'", "field('Tên đăng nhập','username',state.role==='teacher'?'giaovien':'hocsinh','text'")
 .replace("field('Mật khẩu','password','','password'", "field('Mật khẩu','password','demo2026','password'")
 .replace('Tài khoản học sinh do giáo viên cung cấp.<br>Quên mật khẩu? Hãy liên hệ giáo viên của bạn.','Dùng thử: <strong>giaovien</strong> hoặc <strong>hocsinh</strong><br>Mật khẩu mẫu: <strong>demo2026</strong> · Không nhập thông tin thật.')
 .replace('Chọn tệp PDF, Word hoặc TXT','Chọn tệp TXT (bản dùng thử)')
 .replace('accept=".pdf,.docx,.txt"','accept=".txt"')
 .replace('Tối đa 30 MB. PDF quét cần OCR trước. Công thức và bảng cần giáo viên kiểm tra lại sau trích xuất.','Bản GitHub Pages nhận TXT hoặc văn bản dán. PDF/Word cần chạy bản máy chủ.')
 .replace('Nội dung được lưu riêng trong phạm vi của giáo viên.','Bản dùng thử chỉ lưu trong trình duyệt. Không tải dữ liệu học sinh hoặc tài liệu nhạy cảm.')
 .replace('AI có thể cần đến 90 giây. Kết quả luôn là bản nháp; thầy cô kiểm tra và phê duyệt trước khi xuất bản.','Đây là mô phỏng tạo mẫu phương trình, KHÔNG gọi AI và KHÔNG phân tích thực nội dung nguồn. Bản máy chủ mới kết nối được dịch vụ AI.')
 .replace('AI chỉ nhận số liệu ẩn danh của chính em, không nhận tên hoặc tài khoản. Cần tối thiểu 5 câu đã chấm trong một dạng bài.','Bản dùng thử đề xuất bằng quy tắc mô phỏng, không gọi AI. Cần tối thiểu 5 câu đã chấm trong một dạng bài.')
 .replace('Đề xuất ôn tập từ AI','Đề xuất ôn tập mô phỏng')
 .replace('Giải thích thêm bằng AI','Xem giải thích mẫu')
 .replaceAll('Tạo với AI','Tạo mẫu mô phỏng')
 .replaceAll('AI phân tích','Phân tích mẫu')
 .replaceAll('Tạo bài tập với AI','Mô phỏng tạo bài tập')
 .replaceAll('AI đang tạo bản nháp','Đang tạo bản nháp mô phỏng')
 .replaceAll('Giải thích thêm bằng AI','Xem giải thích mẫu');
await writeFile(resolve(root,'assets/app.js'),app);
await copyFile(resolve(root,'demo/demo-api.js'),resolve(root,'assets/demo-api.js'));
await copyFile(resolve(root,'public/favicon.svg'),resolve(root,'assets/favicon.svg'));
let css=await readFile(resolve(root,'public/styles.css'),'utf8');
css+=`\n/* GitHub Pages demonstration */\n.demo-banner{min-height:43px;padding:9px 20px;background:#fff1c9;color:#674c20;display:flex;align-items:center;justify-content:center;gap:18px;font-size:11px;line-height:1.6;position:sticky;top:0;z-index:50;border-bottom:1px solid #e8d69e}.demo-banner button{font-size:10px;text-decoration:underline;color:#674c20;background:transparent;padding:2px}.sidebar{top:43px}.login{min-height:calc(100vh - 43px)}:root[data-theme=dark] .demo-banner{background:#4d4024;color:#f7e3b3}:root[data-theme=dark] .demo-banner button{color:#f7e3b3}@media(max-width:640px){.demo-banner{font-size:9px;padding:8px 12px;gap:10px}.demo-banner button{font-size:9px;max-width:83px}.sidebar{top:46px}.demo-banner span{max-width:260px}}\n`;
await writeFile(resolve(root,'assets/styles.css'),css);
await writeFile(resolve(root,'.nojekyll'),'');
console.log('Đã tạo index.html và assets/ cho GitHub Pages. Không chứa dữ liệu hay khóa của máy chủ.');
