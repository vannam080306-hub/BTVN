import {chapter1Questions} from '../site/toan11-chuong1.js';
import {chapter2Questions} from '../site/toan11-chuong2.js';
import {toLatexText} from './latex-migration.mjs';
const r=String.raw;
const M=tex=>'\\['+tex+'\\]';
const I=tex=>'\\('+tex+'\\)';
const S=(title,content)=>({title,content});
const authored=new Map();
const c1=(n,...rows)=>authored.set(chapter1Questions[n-1].id,rows.map(([title,content])=>S(title,content)));
const c2=(n,...rows)=>authored.set(chapter2Questions[n-1].id,rows.map(([title,content])=>S(title,content)));
const fmt=n=>String(Number(n.toFixed(8)));
function fraction(x,max=360){
 for(let d=1;d<=max;d++){const n=Math.round(x*d);if(Math.abs(x-n/d)<1e-9)return d===1?String(n):`\\frac{${n}}{${d}}`;}
 return null;
}
function angle(x){
 const f=fraction(x/Math.PI,360);if(f!==null){if(Math.abs(x)<1e-10)return '0';if(f==='1')return r`\pi`;if(f==='-1')return r`-\pi`;return f+r`\pi`;}
 return null;
}
function value(x){
 const f=fraction(x,100);if(f!==null)return f;
 for(const a of [2,3,5,6,7,15,41])for(const sign of [1,-1]){
  const f=fraction(x/(sign*Math.sqrt(a)),100);if(f!==null)return (sign<0?'-':'')+(f==='1'?'':f)+`\\sqrt{${a}}`;
 }
 return fmt(x);
}

c1(4,['Thay góc vào khoảng',M(r`10\pi<\frac\pi2+2k\pi<11\pi`)],['Chia cho số dương và chuyển vế',M(r`10<\frac12+2k<11\iff\frac{19}2<2k<\frac{21}2\iff\frac{19}4<k<\frac{21}4`)],['Chọn số nguyên',M(r`4.75<k<5.25,\ k\in\mathbb Z\Rightarrow k=5`)]);
c1(5,['Tính góc ứng với một răng',M(r`\frac{360^\circ}{72}=5^\circ`)],['Nhân với số răng đi qua',M(r`\alpha=10\cdot5^\circ=50^\circ`)],['Kết luận','Góc quay có độ lớn 50°.']);
c1(6,['Đổi góc sang radian',M(r`\alpha=50\cdot\frac\pi{180}=\frac{5\pi}{18}`)],['Nhân với bán kính',M(r`l=R\alpha=15\cdot\frac{5\pi}{18}=\frac{75\pi}{18}=\frac{25\pi}6`)],['Đọc hệ số',M(r`l=k\pi\Rightarrow k=\frac{25}6`)]);
c1(7,['Nhận đơn vị góc','Góc đã tính bằng radian nên dùng trực tiếp công thức độ dài cung.'],['Thay số',M(r`l=R\alpha=5\cdot\frac\pi8=\frac{5\pi}8`)],['Đọc hệ số',M(r`k=\frac58`)]);
c1(8,['Đổi độ sang radian',M(r`\alpha=40\cdot\frac\pi{180}=\frac{2\pi}9`)],['Tính độ dài chính xác',M(r`l=10\cdot\frac{2\pi}9=\frac{20\pi}9\ \text{cm}`)],['Làm tròn ở bước cuối',M(r`l\approx6.9813\ \text{cm}`)]);
c1(10,['Cộng hệ số của pi',M(r`\frac{5\pi}2+2001\pi=\frac{4007\pi}2`)],['Tách số vòng nguyên',M(r`\frac{4007\pi}2=1001\cdot2\pi+\frac{3\pi}2`)],['Chọn đại diện trong khoảng',M(r`0\le\frac{3\pi}2<2\pi\Rightarrow k=\frac32`)]);
c1(11,['So sánh hai góc',M(r`\frac{4\pi}3-\frac\pi3=\pi`)],['Viết chung hai họ góc',M(r`\frac\pi3+2m\pi\quad\text{và}\quad\frac{4\pi}3+2m\pi`)+ 'Gộp lại thành '+I(r`\pi/3+k\pi`)+'.'],['Chọn bước dương nhỏ nhất','Hai điểm đối nhau nên bước nhỏ nhất là '+I(r`\pi`)+', do đó '+I(r`p=1`)+'.']);
c1(12,['Đổi góc khi đối xứng qua trục hoành',M(r`\alpha'= -\frac\pi3+2m\pi`)],['Chọn góc không âm nhỏ nhất',M(r`m=1\Rightarrow\alpha'=2\pi-\frac\pi3=\frac{5\pi}3`)],['Đọc hệ số',M(r`k=\frac53`)]);
c1(14,['Xét ba giá trị liên tiếp của tham số',M(r`k=0,1,2\Rightarrow\alpha=\frac\pi6,\frac{5\pi}6,\frac{3\pi}2`)],['Kiểm tra chu kì lặp điểm cuối',M(r`\alpha_{k+3}-\alpha_k=3\cdot\frac{2\pi}3=2\pi`)],['Đếm','Ba góc đầu có hiệu không là bội nguyên của một vòng nên tạo 3 điểm khác nhau. Từ đó các điểm lặp lại theo chu kì 3.']);
c1(36,['Đổi góc về radian',M(r`51^\circ=51\cdot\frac\pi{180}=\frac{17\pi}{60}`)],['Thay bán kính vào công thức',M(r`l=R\alpha=36\cdot\frac{17\pi}{60}=\frac{51\pi}5`)],['Viết kết quả theo đơn vị',M(r`l=10.2\pi\ \text{m}`)]);
c1(37,['Kiểm tra đơn vị','Bán kính bằng 36 m; góc đã là radian.'],['Dùng công thức độ dài cung',M(r`l=R\alpha=36\cdot\frac13`)],['Rút gọn',M(r`l=12\ \text{m}`)]);
c1(38,['Tính góc giữa hai đỉnh kề nhau',M(r`\frac{2\pi}4=\frac\pi2`)],['Đếm số bước theo chiều dương','Từ đỉnh thứ 0 đến đỉnh thứ 3 theo chiều ngược kim đồng hồ đi qua 3 cạnh liên tiếp.'],['Tính góc và hệ số',M(r`\alpha=3\cdot\frac\pi2=\frac{3\pi}2\Rightarrow k=\frac32`)]);

const extrema=(ns,...steps)=>{for(const n of ns)c1(n,...steps);};
extrema([109,110],['Hạ bậc và nhân đôi',M(r`y=2+\cos2x-\sqrt3\sin2x`)],['Gộp thành một cos',M(r`\cos2x-\sqrt3\sin2x=2\cos(2x+\pi/3)`)],['Tìm khoảng giá trị và kiểm tra đạt được',M(r`-1\le\cos(2x+\pi/3)\le1\Rightarrow0\le y\le4`)+ 'Giá trị 0 đạt khi '+I(r`x=\pi/3`)+', giá trị 4 đạt khi '+I(r`x=-\pi/6`)+'.']);
extrema([111,112],['Đặt ẩn phụ và tìm miền',M(r`t=\sin x\in[-1;1],\quad\cos^2x=1-t^2`)],['Hoàn thành bình phương',M(r`y=5-t-2t^2=\frac{41}8-2\left(t+\frac14\right)^2`)],['Xét đỉnh và hai đầu mút',M(r`y(-1)=4,\quad y(1)=2,\quad y(-1/4)=\frac{41}8`)+ 'Đỉnh thuộc miền của ẩn phụ. Min bằng 2 tại '+I(r`t=1`)+', max bằng '+I(r`41/8=5.125`)+ ' tại '+I(r`t=-1/4`)+'.']);
extrema([115,116],['Chuẩn hóa các hệ số',M(r`R=\sqrt{3^2+4^2}=5,\quad\cos\varphi=\frac35,\quad\sin\varphi=\frac45`)],['Viết thành một sin',M(r`y=5\sin(x+\varphi)-1`)],['Chặn và xét dấu bằng',M(r`-1\le\sin(x+\varphi)\le1\Rightarrow-6\le y\le4`)+ 'Hai cận đều đạt được vì biến góc chạy trên toàn bộ số thực.']);
extrema([117,118],['Nhân đôi',M(r`4\sin x\cos x=2\sin2x\Rightarrow y=2\sin2x+1`)],['Chặn giá trị',M(r`-1\le\sin2x\le1\Rightarrow-1\le y\le3`)],['Kiểm tra dấu bằng','Min bằng −1 khi '+I(r`x=-\pi/4`)+', max bằng 3 khi '+I(r`x=\pi/4`)+'.']);
extrema([119,120],['Gộp theo công thức cộng',M(r`\sin2024x+\sqrt3\cos2024x=2\sin(2024x+\pi/3)`)],['Chặn giá trị',M(r`-1\le\sin(2024x+\pi/3)\le1\Rightarrow-2\le y\le2`)],['Xét dấu bằng','Cả hai dấu bằng xảy ra vì '+I(r`2024x+\pi/3`)+' nhận mọi giá trị thực. Min bằng −2, max bằng 2.']);
extrema([123,124],['Đặt ẩn phụ đúng theo khoảng',M(r`x\in[0;\pi]\Rightarrow t=\sin x\in[0;1]`)],['Đổi về tam thức',M(r`y=1-t^2+t+9=10+t-t^2=\frac{41}4-\left(t-\frac12\right)^2`)],['Xét đỉnh và biên',M(r`y(0)=y(1)=10,\quad y(1/2)=\frac{41}4`)+ 'Vậy min bằng 10, max bằng '+I(r`41/4=10.25`)+'. Các giá trị của ẩn phụ đều đạt được.']);
extrema([125,126],['Đổi khoảng của góc',M(r`x\in[-\pi/3;\pi/6]\Rightarrow2x\in[-2\pi/3;\pi/3]`)],['Xác định miền giá trị cos','Trên khoảng góc này, cos nhỏ nhất tại '+I(r`-2\pi/3`)+ ' và lớn nhất tại 0, nên '+M(r`-\frac12\le\cos2x\le1`)],['Nhân hệ số dương và cộng hằng số',M(r`-10\le6\cos2x-7\le-1`)+ 'Min đạt tại '+I(r`x=-\pi/3`)+', max đạt tại '+I(r`x=0`)+'.']);
extrema([129,130],['Kiểm tra căn và chặn biểu thức dưới căn',M(r`-1\le\sin x\le1\Rightarrow0\le\sin x+1\le2`)],['Lấy căn, nhân rồi trừ',M(r`0\le\sqrt{\sin x+1}\le\sqrt2\Rightarrow-3\le y\le2\sqrt2-3`)],['Kiểm tra đạt được','Min bằng −3 tại '+I(r`x=-\pi/2`)+', max bằng '+I(r`2\sqrt2-3\approx-0.1716`)+' tại '+I(r`x=\pi/2`)+'.']);
extrema([131,132],['Hạ bậc',M(r`y=(1-\cos2x)+3\sin2x-2(1+\cos2x)=-1-3\cos2x+3\sin2x`)],['Gộp thành một sin',M(r`3\sin2x-3\cos2x=3\sqrt2\sin(2x-\pi/4)`)],['Xác định hai cận',M(r`-1-3\sqrt2\le y\le-1+3\sqrt2`)+ 'Min đạt khi '+I(r`x=-\pi/8`)+', max đạt khi '+I(r`x=3\pi/8`)+'.']);
extrema([133,134],['Áp dụng hiệu hai cos',M(r`\cos(2x+\pi/3)-\cos2x=-2\sin(2x+\pi/6)\sin(\pi/6)`)],['Thay góc đặc biệt',M(r`y=-\sin(2x+\pi/6)`)],['Chặn và xét dấu bằng',M(r`-1\le y\le1`)+ 'Min đạt tại '+I(r`x=\pi/6`)+', max đạt tại '+I(r`x=2\pi/3`)+'.']);
extrema([135,136],['Đổi sang ẩn phụ theo khoảng',M(r`x\in[\pi/3;5\pi/6]\Rightarrow t=\sin x\in[1/2;1]`)],['Đổi biểu thức và xét tính tăng',M(r`y=2(1-t^2)+5t+1=3+5t-2t^2`)+ 'Với '+I(r`1/2\le u<v\le1`)+', ta có '+M(r`y(v)-y(u)=(v-u)[5-2(u+v)]>0`)],['Tính hai đầu mút',M(r`y(1/2)=5,\quad y(1)=6`)+ 'Min bằng 5, max bằng 6; cả hai giá trị của ẩn phụ đều đạt được.']);
extrema([137,138],['Nhóm và nhân đôi',M(r`2\sin^2x-2\sin^4x=2\sin^2x\cos^2x=\frac12\sin^22x`)],['Đặt ẩn phụ',M(r`u=\sin2x\in[-1;1],\quad y=\frac12u^2-2u+1`)],['Xét tính giảm','Với '+I(r`-1\le u<v\le1`)+', '+M(r`y(v)-y(u)=(v-u)\left(\frac{u+v}2-2\right)<0`)],['Tính giá trị biên',M(r`y(1)=-\frac12,\quad y(-1)=\frac72`)+ 'Min bằng −0,5; max bằng 3,5.']);
extrema([139,140],['Dùng công thức nhân đôi',M(r`y=2\cos^2x-1+4\cos x+1=2(\cos x+1)^2`)],['Chặn trước khi bình phương',M(r`-1\le\cos x\le1\Rightarrow0\le\cos x+1\le2\Rightarrow0\le y\le8`)],['Kiểm tra hai cận','Min bằng 0 tại '+I(r`x=\pi`)+', max bằng 8 tại '+I(r`x=0`)+'.']);
extrema([141,142],['Đổi khoảng góc',M(r`2x\in[-2\pi/3;\pi/3]`)],['Chặn cos trên đúng khoảng',M(r`-\frac12\le\cos2x\le1`)+ 'Cận dưới đạt tại góc '+I(r`-2\pi/3`)+', cận trên đạt tại góc 0.'],['Nhân rồi trừ',M(r`-3\le4\cos2x-1\le3`)+ 'Min đạt tại '+I(r`x=-\pi/3`)+', max tại '+I(r`x=0`)+'.']);
extrema([143,144],['Đặt ẩn phụ',M(r`t=\cos x\in[-1;1],\quad y=1-t^2-t+2=3-t-t^2`)],['Hoàn thành bình phương',M(r`y=\frac{13}4-\left(t+\frac12\right)^2`)],['Xét đỉnh và biên',M(r`y(-1)=3,\quad y(1)=1,\quad y(-1/2)=\frac{13}4`)+ 'Min bằng 1, max bằng '+I(r`13/4=3.25`)+'.']);
for(const [ns,g,a,b] of [ [[106],r`\sin4x`,1,-3],[[107],r`\sin2x`,3,-5],[[108],r`\sin2x`,1,0],[[113],r`\cos6x`,1,5],[[114],r`\sin x`,-1,2],[[121,122],r`\sin(x+3\pi/4)`,3,1],[[127,128],r`\sin3x`,3,2],[[145,146],r`\sin2x`,8,-5] ])extrema(ns,['Chặn hàm lượng giác',M(`-1\\le ${g}\\le1`)],['Nhân hệ số rồi cộng hằng số',M(`${b-Math.abs(a)}\\le (${a})(${g})+(${b})\\le${b+Math.abs(a)}`)],['Xét điều kiện đạt cận','Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất.']);
for(const [n,a,p] of [[152,3,2],[153,2,2],[154,4,1],[155,.5,1]])c1(n,['Đọc hệ số của biến',M(`a=${value(a)}\\ne0`)],['Dùng chu kì của hàm phù hợp',M(`T=\\frac{${p===2?'2\\pi':'\\pi'}}{|a|}=\\frac{${p===2?'2\\pi':'\\pi'}}{${value(a)}}=${angle(p*Math.PI/a)}`)],['Đọc hệ số trước pi',M(`k=${value(p/a)}`)]);

function conversion(q){
 const v=q.verification;
 if(v?.kind==='degree')return [S('Đổi đơn vị',M(r`\alpha_{\mathrm{rad}}=\alpha_{\text{độ}}\frac\pi{180}`)),S('Thay số và rút gọn',M(`\\alpha=${v.degrees}\\cdot\\frac\\pi{180}=${angle(v.degrees*Math.PI/180)}`)),S('Đọc hệ số',M(`k=${value(v.degrees/180)}`))];
 if(v?.kind==='radian')return [S('Đổi đơn vị',M(r`\alpha_{\text{độ}}=\alpha_{\mathrm{rad}}\frac{180}\pi`)),S('Thay số và khử pi',M(`\\alpha_{\\text{độ}}=(${angle(v.radians)})\\frac{180}\\pi=${fmt(v.radians*180/Math.PI)}`)),S('Kết luận',M(`\\alpha=${fmt(v.radians*180/Math.PI)}^\\circ`))];
}
const sequence=(n,...contents)=>c2(n,...contents.map(content=>['',toLatexText(content).replace(/\\\(([\s\S]*?)\\\)/g,(whole,tex)=>tex.length>65?M(tex):whole)]));
sequence(1,'Chỉ số bắt đầu từ 1. Dùng uₙ = 3n − 2.', 'u₁ = 3 × 1 − 2 = 1; u₂ = 3 × 2 − 2 = 4.', 'u₃ = 3 × 3 − 2 = 7; u₄ = 3 × 4 − 2 = 10. Vậy bốn số hạng là 1; 4; 7; 10.');
sequence(2,'Giữ u₁ = 2; số hạng sau bằng −3 lần số hạng trước.', 'u₂ = −3 × 2 = −6; u₃ = −3 × (−6) = 18.', 'u₄ = −3 × 18 = −54. Vậy bốn số hạng là 2; −6; 18; −54.');
sequence(3,'Với uₙ = 5n − 2: uₙ₊₁ − uₙ = [5(n + 1) − 2] − (5n − 2) = 5, không đổi.', 'Với uₙ = n²: uₙ₊₁ − uₙ = 2n + 1, phụ thuộc n. Với uₙ = 2ⁿ: uₙ₊₁ − uₙ = 2ⁿ, phụ thuộc n.', 'Với uₙ = 1/n: uₙ₊₁ − uₙ = −1/[n(n + 1)], cũng phụ thuộc n. Chỉ dãy uₙ = 5n − 2 là cấp số cộng.');
sequence(4,'Từ số hạng đầu đến số hạng thứ 12 có 11 lần cộng công sai: u₁₂ = u₁ + 11d.', 'Thay u₁ = −4, d = 5: u₁₂ = −4 + 11 × 5.', 'u₁₂ = −4 + 55 = 51.');
sequence(5,'Hai chỉ số cách nhau 5: u₈ − u₃ = 5d. Suy ra 23 − 8 = 5d nên d = 3.', 'u₁ = u₃ − 2d = 8 − 2 × 3 = 2.', 'u₂₀ = u₁ + 19d = 2 + 19 × 3 = 59.');
sequence(6,'Đặt uₙ = −31: 7 − 2(n − 1) = −31.', 'Khai triển: 9 − 2n = −31. Chuyển vế: −2n = −40, suy ra n = 20.', 'n = 20 là số nguyên dương. Kiểm tra: 7 − 2 × 19 = −31, đúng.');
sequence(7,'Từ −7 đến 11 có hai bước: 2d = 11 − (−7) = 18 nên d = 9.', 'x = −7 + 9 = 2; y = 11 + 9 = 20.', 'Kiểm tra các hiệu: 2 − (−7) = 11 − 2 = 20 − 11 = 9.');
sequence(8,'Điều kiện ba số theo thứ tự lập cấp số cộng: (x + 1) + (5x − 7) = 2(2x − 1).', 'Khai triển: 6x − 6 = 4x − 2. Suy ra 2x = 4 nên x = 2.', 'Thay x = 2 được 3; 3; 3. Các hiệu bằng 0 nên nhận nghiệm.');
sequence(9,'Tính số hạng cuối: u₂₀ = 3 + (20 − 1) × 4 = 3 + 76 = 79.', 'Dùng tổng cấp số cộng: S₂₀ = 20(3 + 79)/2.', 'S₂₀ = 10 × 82 = 820.');
sequence(10,'Dùng Sₙ = n[2u₁ + (n − 1)d]/2: n[10 + 3(n − 1)]/2 = 185.', 'Khai triển và nhân 2: 3n² + 7n − 370 = 0.', 'Phân tích: (n − 10)(3n + 37) = 0. Suy ra n = 10 hoặc n = −37/3.', 'Vì n là số nguyên dương nên loại −37/3, nhận n = 10. Kiểm tra S₁₀ = 10(10 + 27)/2 = 185.');
sequence(11,'Viết hai phương trình: S₄ = 4u₁ + 6d = 18; S₆ = 6u₁ + 15d = 45.', 'Nhân phương trình đầu với 3, phương trình sau với 2: 12u₁ + 18d = 54; 12u₁ + 30d = 90.', 'Lấy phương trình sau trừ trước: 12d = 36 nên d = 3.', 'Thế lại: 4u₁ + 18 = 18 nên u₁ = 0. Hai tổng đều thỏa dữ kiện.');
sequence(12,'Với n = 1: u₁ = S₁ = 2 + 3 = 5.', 'Với n ≥ 2: Sₙ₋₁ = 2(n − 1)² + 3(n − 1) = 2n² − n − 1.', 'uₙ = Sₙ − Sₙ₋₁ = (2n² + 3n) − (2n² − n − 1) = 4n + 1.', 'Công thức cũng cho u₁ = 5. Hiệu uₙ₊₁ − uₙ = [4(n + 1) + 1] − (4n + 1) = 4, nên d = 4.');
sequence(13,'Xen bốn số tạo sáu số hạng, tức năm khoảng công sai.', '28 = 3 + 5d nên 5d = 25, d = 5.', 'Lần lượt cộng 5 từ số đầu: 8; 13; 18; 23. Cộng thêm 5 nữa được 28, đúng số cuối.');
sequence(14,'Gọi ba góc là 20°, 20° + d, 20° + 2d với d ≥ 0.', 'Tổng ba góc: 60° + 3d = 180° nên 3d = 120°, d = 40°.', 'Ba góc là 20°; 60°; 100°. Chúng đều dương, tăng dần và có tổng 180°.');
sequence(15,'Với uₙ = 3 × 2ⁿ⁻¹: uₙ₊₁ = 3 × 2ⁿ = 2uₙ. Đây là cấp số nhân với q = 2.', 'Với uₙ = 2n + 1, tỉ số u₂/u₁ = 5/3 khác u₃/u₂ = 7/5.', 'Với uₙ = n², tỉ số đầu là 4 và 9/4. Với uₙ = 1/n, tỉ số đầu là 1/2 và 2/3. Các dãy này không có công bội cố định.');
sequence(16,'Dùng số hạng tổng quát: u₇ = u₁q⁶ = 3(−2)⁶.', 'Vì mũ 6 chẵn: (−2)⁶ = 64.', 'u₇ = 3 × 64 = 192.');
sequence(17,'u₅ = u₂q³. Do u₂ = 6 khác 0 nên q³ = 162/6 = 27.', 'Lấy căn bậc ba thực: q = 3.', 'u₆ = u₅q = 162 × 3 = 486.');
sequence(18,'u₃ = u₁q² nên 18 = 2q², tức q² = 9.', 'Phương trình có đủ hai nghiệm thực: q = 3 hoặc q = −3.', 'Nếu q = 3: u₄ = 2 × 3³ = 54. Nếu q = −3: u₄ = 2(−3)³ = −54. Nhận cả hai giá trị.');
sequence(19,'Từ số hạng thứ hai đến thứ tư: 192 = 12q², suy ra q² = 16, q = ±4.', 'Với q = 4: x = 12/4 = 3; y = 12 × 4 = 48.', 'Với q = −4: x = 12/(−4) = −3; y = 12 × (−4) = −48.', 'Kiểm tra yq = 192 trong cả hai trường hợp. Hai cặp là (3; 48) và (−3; −48).');
sequence(20,'Điều kiện cần: (x + 1)² = (x − 1)(x + 5).', 'Khai triển: x² + 2x + 1 = x² + 4x − 5. Suy ra 2x = 6 nên x = 3.', 'Thay lại được 2; 4; 8, có 4/2 = 8/4 = 2 nên đúng định nghĩa cấp số nhân.');
sequence(21,'Công bội q = 3 khác 1 nên dùng S₆ = u₁(q⁶ − 1)/(q − 1).', 'Thay số: S₆ = 2(3⁶ − 1)/(3 − 1) = 2(729 − 1)/2.', 'Khử hệ số 2 rồi trừ: S₆ = 729 − 1 = 728.');
sequence(22,'Khi q = 1, mọi số hạng bằng u₁ = 5.', 'Tổng gồm 20 số bằng nhau: S₂₀ = 20 × 5.', 'S₂₀ = 100. Không dùng công thức tổng có mẫu q − 1 vì mẫu bằng 0.');
sequence(23,'Đặt uₙ = 384: 3 × 2ⁿ⁻¹ = 384.', 'Chia cho 3: 2ⁿ⁻¹ = 128 = 2⁷. Hai lũy thừa cùng cơ số 2 nên n − 1 = 7.', 'n = 8 là số nguyên dương; kiểm tra 3 × 2⁷ = 384, đúng.');
sequence(24,'Năm số hạng có bốn lần nhân công bội: 162 = 2q⁴.', 'q⁴ = 81 nên hai công bội thực là q = 3 và q = −3.', 'Với q = 3: ba số xen là 6; 18; 54. Với q = −3: ba số xen là −6; 18; −54.', 'Kiểm tra số cuối: 54 × 3 = 162 và (−54)(−3) = 162. Nhận cả hai bộ.');
sequence(25,'u₅/u₃ = q² = 48/12 = 4, nên q = ±2.', 'u₁ = u₃/q² = 12/4 = 3 trong cả hai trường hợp.', 'Với q = 2: S₅ = 3 + 6 + 12 + 24 + 48 = 93.', 'Với q = −2: S₅ = 3 − 6 + 12 − 24 + 48 = 33. Hai giá trị là 33 và 93.');
sequence(26,'Ba số hạng sau lần lượt bằng q³ lần ba số đầu, nên S₆ = S₃ + q³S₃.', '126 = 14(1 + q³) nên 1 + q³ = 9, q³ = 8, q = 2.', 'S₃ = u₁(1 + 2 + 4) = 7u₁ = 14 nên u₁ = 2.', 'Kiểm tra S₆ = 2(2⁶ − 1)/(2 − 1) = 126.');
sequence(27,'Số ghế mỗi hàng lập cấp số cộng với u₁ = 18, d = 2, n = 20.', 'Hàng cuối: u₂₀ = 18 + 19 × 2 = 56 ghế.', 'Tổng số ghế: S₂₀ = 20(18 + 56)/2 = 10 × 74 = 740 ghế.');
sequence(28,'Số chu kì tăng gấp đôi là 12/3 = 4.', 'Sau mỗi chu kì nhân 2 nên số lượng là 500 × 2⁴.', '2⁴ = 16, do đó có 500 × 16 = 8000 vi khuẩn.');
sequence(29,'Điều kiện cấp số nhân: b = a² vì số đầu bằng 1. Điều kiện cấp số cộng: 1 + b = 2(a + 8).', 'Thế b = a² vào: a² − 2a − 15 = 0.', 'Phân tích: (a − 5)(a + 3) = 0 nên a = 5 hoặc a = −3.', 'Với a = 5: b = 25, hai bộ là 1; 5; 25 và 1; 13; 25. Với a = −3: b = 9, hai bộ là 1; −3; 9 và 1; 5; 9. Cả hai cặp đều thỏa.');
sequence(30,'Đặt vₙ = uₙ + 3. Khi đó v₁ = 4 và vₙ₊₁ = 2uₙ + 6 = 2(uₙ + 3) = 2vₙ.', 'Dãy phụ là cấp số nhân với số đầu 4, công bội 2. Tổng 10 số của dãy phụ bằng 4(2¹⁰ − 1)/(2 − 1).', '2¹⁰ = 1024 nên tổng dãy phụ là 4 × 1023 = 4092.', 'Mỗi số hạng dãy phụ lớn hơn dãy gốc 3. Tổng dãy gốc là 4092 − 10 × 3 = 4062.');

const sum=xs=>xs.reduce((a,b)=>a+b,0);
const listing=xs=>xs.map(x=>I(fmt(x))).join('; ');
function statistics(q){
 if(!q.id.startsWith('toan-11-3-'))return;
 let v=q.verification;
 if(!v&&q.table){
  const bounds=q.table.headers.slice(1).map(s=>[...s.matchAll(/-?\d+(?:,\d+)?/g)].map(m=>Number(m[0].replace(',','.'))));
  const edges=[...bounds.map(x=>x[0]),bounds.at(-1)[1]],freq=q.table.rows[0].slice(1).map(Number);
  const kinds={'toan-11-3-d3-1':['mean'],'toan-11-3-d4-1':['quantile',2],'toan-11-3-d4-2':['quantile',2],'toan-11-3-d5-1':['quantile',1],'toan-11-3-d5-2':['quantile',3],'toan-11-3-d5-3':['quantile',1],'toan-11-3-d5-4':['quantile',3],'toan-11-3-d6-1':['mode'],'toan-11-3-d6-2':['mode'],'toan-11-3-d6-3':['mode']};
  const k=kinds[q.id];if(k)v={kind:k[0],r:k[1],edges,freq};
  if(/Giá trị đại diện/.test(q.prompt)){
   const match=/\[([\d,]+);\s*([\d,]+)\)/.exec(q.prompt),pair=match?match.slice(1).map(s=>Number(s.replace(',','.'))):bounds[3];
   const [a,b]=pair;
   return [S('Đọc hai đầu mút nhóm',M(`a=${fmt(a)},\\quad b=${fmt(b)}`)),S('Tính trung điểm',M(`c=\\frac{a+b}2=\\frac{${fmt(a)}+${fmt(b)}}2=\\frac{${fmt(a+b)}}2`)),S('Kết luận',M(`c=${fmt((a+b)/2)}`)+'Giá trị này có cùng đơn vị với đại lượng trong bảng.')];
  }
 }
 if(!v)return;
 if(v.kind==='mean'){
  const c=v.freq.map((_,i)=>(v.edges[i]+v.edges[i+1])/2),N=sum(v.freq),weighted=sum(c.map((x,i)=>x*v.freq[i])),mean=weighted/N;
  return [S('Tính giá trị đại diện từng nhóm',c.map((x,i)=>M(`c_{${i+1}}=\\frac{${fmt(v.edges[i])}+${fmt(v.edges[i+1])}}2=${fmt(x)}`)).join('')),S('Cộng tần số',M(`N=${v.freq.join('+')}=${N}`)),S('Tính tổng có trọng số',M(`\\sum n_ic_i=${c.map((x,i)=>`${v.freq[i]}\\cdot${fmt(x)}`).join('+')}=${fmt(weighted)}`)),S('Chia tổng cho số quan sát',M(`\\overline x\\approx\\frac{${fmt(weighted)}}{${N}}\\approx${mean.toFixed(2)}`)+'Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án.')];
 }
 if(v.kind==='quantile'){
  const N=sum(v.freq),pos=v.r*N/4,cum=[];v.freq.forEach((f,i)=>cum.push((cum[i-1]||0)+f));
  const j=cum.findIndex(x=>x>=pos),F=j?cum[j-1]:0,f=v.freq[j],L=v.edges[j],h=v.edges[j+1]-L,result=L+(pos-F)/f*h;
  return [S('Tính cỡ mẫu và vị trí nội suy',M(`N=${v.freq.join('+')}=${N},\\quad\\frac{${v.r}N}4=${fmt(pos)}`)),S('Lập tần số tích lũy và tìm nhóm','Tần số tích lũy lần lượt: '+listing(cum)+'. '+M(`${F}<${fmt(pos)}\\le${cum[j]}`)+'Nhóm cần dùng là '+I(`[${fmt(L)};${fmt(v.edges[j+1])})`)+'.'),S('Lấy số liệu của nhóm',M(`L=${fmt(L)},\\quad h=${fmt(v.edges[j+1])}-${fmt(L)}=${fmt(h)},\\quad F=${F},\\quad f=${f}`)),S('Nội suy và kết luận',M(`Q_${v.r}=${fmt(L)}+\\frac{${fmt(pos)}-${F}}{${f}}\\cdot${fmt(h)}\\approx${result.toFixed(4)}`)+'Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian.')];
 }
 if(v.kind==='mode'){
  const f=Math.max(...v.freq),j=v.freq.indexOf(f),L=v.edges[j],h=v.edges[j+1]-L,prev=v.freq[j-1]??0,next=v.freq[j+1]??0,d1=f-prev,d2=f-next,result=L+d1/(d1+d2)*h;
  return [S('Chọn nhóm mốt','Các nhóm có độ dài bằng nhau. Tần số lớn nhất là '+I(String(f))+', chọn nhóm '+I(`[${fmt(L)};${fmt(v.edges[j+1])})`)+'.'),S('Tính hai chênh lệch',M(`d_1=${f}-${prev}=${d1},\\quad d_2=${f}-${next}=${d2}`)+(j===0?'Nhóm ở biên dùng tần số nhóm ngoài bằng 0 theo quy ước của đề.':'')),S('Thay vào công thức nội suy',M(`M_o=${fmt(L)}+\\frac{${d1}}{${d1}+${d2}}\\cdot${fmt(h)}\\approx${result.toFixed(4)}`)),S('Đối chiếu yêu cầu','Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề.')];
 }
 if(v.kind==='rawMean'){
  const total=sum(v.raw),N=v.raw.length;
  return [S('Đếm số quan sát',M(`N=${N}`)),S('Cộng các số liệu','Các giá trị được cộng: '+listing(v.raw)+'. '+M(`\\sum x_j=${fmt(total)}`)),S('Chia và làm tròn',M(`\\overline x=\\frac{${fmt(total)}}{${N}}\\approx${(total/N).toFixed(2)}`)+'Giữ đơn vị ban đầu của mẫu số liệu.')];
 }
 if(v.kind==='rawQuantile'){
  const xs=[...v.raw].sort((a,b)=>a-b),N=xs.length,mid=Math.floor(N/2);
  const half=v.r===2?xs:v.r===1?xs.slice(0,mid):xs.slice(Math.ceil(N/2)),n=half.length,m=Math.floor(n/2),median=n%2?half[m]:(half[m-1]+half[m])/2;
  return [S('Sắp xếp tăng dần',listing(xs)+'.'),S('Chọn phần dữ liệu cần lấy trung vị',v.r===2?`Lấy toàn bộ ${N} giá trị để tính trung vị.`:`Mẫu có ${N} giá trị. ${N%2?'Bỏ phần tử trung vị chung, rồi lấy':'Lấy'} nửa ${v.r===1?'dưới':'trên'} gồm ${n} giá trị: `+listing(half)+'.'),S('Lấy phần tử giữa',n%2?`Phần dữ liệu có số phần tử lẻ, lấy vị trí ${m+1}: `+M(`Q_${v.r}=${fmt(median)}`):`Có số phần tử chẵn, lấy trung bình vị trí ${m} và ${m+1}: `+M(`Q_${v.r}=\\frac{${fmt(half[m-1])}+${fmt(half[m])}}2=${fmt(median)}`))];
 }
 if(v.kind==='grouping'){
  return [S('Áp dụng quy tắc chia nhóm','Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. '+(v.closed?'Riêng nhóm cuối đóng ở cả hai đầu theo đề.':'')),S('Đếm từng nhóm',v.counts.map((count,i)=>{const xs=v.raw.filter(x=>x>=v.edges[i]&&(x<v.edges[i+1]||v.closed&&i===v.counts.length-1&&x===v.edges[i+1]));return 'Nhóm '+I(`[${fmt(v.edges[i])};${fmt(v.edges[i+1])}${v.closed&&i===v.counts.length-1?']':')'}`)+': '+(xs.length?listing(xs):'không có quan sát')+`, tần số ${count}.`;}).join(' ')),S('Kiểm tra tổng và kết luận',M(`N=${v.counts.join('+')}=${v.raw.length}`)+'Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm.')];
 }
}

const put=(id,...rows)=>authored.set(id,rows.map(([title,content])=>S(title,content)));
put('toan-11-4-12-v1',['Chọn tam giác cần xét','Hai điểm M, N là trung điểm hai cạnh AB, AC của tam giác ABC.'],['Áp dụng đường trung bình',M(r`MN\parallel BC,\quad MN=\frac12BC`)],['Thay độ dài',M(r`MN=\frac{10}2=5\ \text{cm}`)]);
put('toan-11-4-13-v1',['Dùng tính chất trọng tâm','Gọi I là trung điểm AB. Hai trọng tâm nằm trên các trung tuyến CI và DI, nên '+M(r`\frac{IG}{IC}=\frac{IH}{ID}=\frac13`)],['Áp dụng Thalès trong tam giác ICD',M(r`GH\parallel CD,\quad\frac{GH}{CD}=\frac{IG}{IC}=\frac13`)],['Thay độ dài',M(r`GH=\frac13\cdot15=5\ \text{cm}`)]);
put('toan-11-4-28-v1',['Lập tỉ lệ Thalès','Ba mặt phẳng song song tạo các đoạn tương ứng trên hai cát tuyến: '+M(r`\frac{AB}{BC}=\frac{A'B'}{B'C'}`)],['Thay số và nhân chéo',M(r`\frac23=\frac4{B'C'}\Rightarrow2B'C'=3\cdot4=12`)],['Chia và kết luận',M(r`B'C'=\frac{12}2=6`)]);
put('toan-11-4-48-v1',['Đưa về tam giác phẳng','M thuộc SA, G thuộc SI nên đường MG nằm trong mặt phẳng (SAI). Giao tuyến của (SAI) với mặt phẳng đáy là AI; do đó tìm giao điểm của MG với đường AI.'],['Tính các tỉ số đã biết',M(r`\frac{SM}{MA}=1,\quad\frac{IG}{GS}=\frac{1-3/5}{3/5}=\frac23`)],['Dùng Menelaus','Đường qua hai điểm trong hai cạnh SA, SI gặp đường AI ở ngoài đoạn AI. Theo Menelaus với độ dài dương: '+M(r`\frac{SM}{MA}\cdot\frac{AJ}{JI}\cdot\frac{IG}{GS}=1\Rightarrow\frac{AJ}{JI}=\frac32`)],['Xác định phía và giải tỉ số','Vì '+I(r`AJ>JI`)+', điểm J ở phía ngoài I trên tia AI. Khi đó '+I(r`AJ=AI+IJ`)+'. '+M(r`\frac{AI+IJ}{IJ}=\frac32\Rightarrow2AI=IJ\Rightarrow AJ=3AI`)+M(r`\frac{AJ}{AI}=3`)]);
put('toan-12-1-1',['Đạo hàm từng hạng',M(r`(x^3)'=3x^2,\quad(-3x)'=-3`)],['Dùng đạo hàm của hiệu',M(r`f'(x)=(x^3-3x)'=(x^3)'-3x'`)],['Rút gọn',M(r`f'(x)=3x^2-3`)]);
put('toan-12-1-2',['Tính đạo hàm',M(r`y'=2x`)],['Giải điều kiện nghịch biến',M(r`y'<0\iff2x<0\iff x<0`)],['Kết luận','Hàm số nghịch biến trên '+I(r`(-\infty;0)`)+'.']);
put('toan-12-1-3',['Tính và phân tích đạo hàm',M(r`y'=3x^2-3=3(x-1)(x+1)`)],['Tìm nghiệm đạo hàm và xét dấu',M(r`y'=0\iff x=-1\text{ hoặc }x=1`)+ 'Đạo hàm dương trước −1, âm trên khoảng (−1;1), dương sau 1.'],['Kết luận cực đại','Tại '+I(r`x=-1`)+', đạo hàm đổi dấu từ dương sang âm nên hàm đạt cực đại. Tại '+I(r`x=1`)+' là cực tiểu.']);
put('ly-10-1-3',['Cộng ba kết quả đo',M(r`10.1+10.2+10.3=30.6\ \text{cm}`)],['Chia cho số lần đo',M(r`\overline l=\frac{30.6}3`)],['Tính kết quả và đơn vị',M(r`\overline l=10.2\ \text{cm}`)]);
put('ly-11-1-1',['Chọn công thức',M(r`f=\frac1T`)],['Thay chu kì tính bằng giây',M(r`f=\frac1{0.5}=\frac1{1/2}`)],['Lấy nghịch đảo và ghi đơn vị',M(r`f=2\ \text{Hz}`)]);
put('hoa-10-1-3',['Dùng hệ thức số khối',M(r`A=Z+N`)],['Chuyển vế tìm neutron',M(r`N=A-Z`)],['Thay số',M(r`N=23-11=12`)+ 'Nguyên tử có 12 neutron.']);

// Dùng trong kiểm chứng độc lập: các nghiệm được suy ra từ họ nghiệm,
// không đọc danh sách roots đã có trong ngân hàng.
export function deriveEquationRoots(q){
 if(q.verification?.trig){const {kind,m,a,b}=q.verification.trig;return familySteps(kind,m,a,b).roots;}
 if(q.verification?.reduced){
  const index=chapter1Questions.findIndex(x=>x.id===q.id)+1,all=quadratic[index-184][3],kind=q.verification.reduced.kind;
  const roots=all.filter(m=>!['sin','cos'].includes(kind)||Math.abs(m)<=1).flatMap(m=>familySteps(kind,m).roots);
  return [...new Set(roots.map(x=>Number(x.toFixed(9))))].sort((a,b)=>a-b);
 }
}

// Mỗi hàng là một phép biến đổi thực sự, không chỉ là chỉ dẫn chung.
c1(24,['Đổi sang hàm nghịch đảo',M(r`\cot\alpha=\frac1{\tan\alpha}`)],['Thay giá trị đã cho',M(r`\cot\alpha=\frac1{1/2}=1\cdot\frac21=2`)],['Kiểm tra điều kiện','Tang đã xác định và khác 0 nên cotang xác định.']);
c1(25,['Xác định dấu','Góc thuộc phần tư III nên cả sin và cos đều âm.'],['Tìm cos từ tan',M(r`1+\tan^2\alpha=\frac1{\cos^2\alpha}\Rightarrow\cos^2\alpha=\frac15\Rightarrow\cos\alpha=-\frac1{\sqrt5}`)],['Tìm sin',M(r`\sin\alpha=\tan\alpha\cos\alpha=2\left(-\frac1{\sqrt5}\right)=-\frac2{\sqrt5}`)]);
c1(26,['Giảm góc theo chu kì',M(r`\alpha-\frac{7\pi}2=\alpha-\frac\pi2-3\pi\Rightarrow\tan\left(\alpha-\frac{7\pi}2\right)=\tan\left(\alpha-\frac\pi2\right)`)],['Đổi tang của góc lệch',M(r`\tan\left(\alpha-\frac\pi2\right)=-\cot\alpha=-\frac1{\tan\alpha}`)],['Thay số',M(r`-\frac1{-3}=\frac13`)]);
c1(27,['Xác định dấu','Góc thuộc phần tư I nên sin dương.'],['Dùng hệ thức cơ bản',M(r`\sin^2\alpha=1-\cos^2\alpha=1-\frac{16}{25}=\frac9{25}`)],['Lấy căn theo dấu',M(r`\sin\alpha=\sqrt{\frac9{25}}=\frac35`)]);
c1(28,['Đổi tích thành tổng',M(r`P=\frac{\cos[(a+\pi/4)-(a-\pi/4)]-\cos[(a+\pi/4)+(a-\pi/4)]}{2}`)],['Thu gọn các góc',M(r`P=\frac{\cos(\pi/2)-\cos2a}{2}=-\frac12\cos2a`)],['Đối chiếu hệ số',M(r`k=-\frac12`)]);
for(const n of [29,30])c1(n,['Xác định dấu','Góc thuộc phần tư IV nên cos dương, sin âm.'],['Tính cos',M(r`\cos^2\alpha=\frac1{1+\tan^2\alpha}=\frac1{1+16/25}=\frac{25}{41}\Rightarrow\cos\alpha=\frac5{\sqrt{41}}`)],['Tính sin và kết luận',M(r`\sin\alpha=\tan\alpha\cos\alpha=-\frac45\cdot\frac5{\sqrt{41}}=-\frac4{\sqrt{41}}`)]);
c1(31,['Xác định dấu','Góc thuộc phần tư II nên cos âm.'],['Tính bình phương cos',M(r`\cos^2\alpha=1-\sin^2\alpha=1-\frac19=\frac89`)],['Chọn căn âm',M(r`\cos\alpha=-\sqrt{\frac89}=-\frac{2\sqrt2}3`)]);
c1(32,['Kiểm tra phép chia','Tang xác định nên cos khác 0. Mẫu của biểu thức bằng '+I(r`\cos x(\tan x+2)=4\cos x\ne0`)+'.'],['Chia tử và mẫu cho cos',M(r`P=\frac{3\sin x/\cos x-1}{\sin x/\cos x+2}=\frac{3\tan x-1}{\tan x+2}`)],['Thay số và tính',M(r`P=\frac{3\cdot2-1}{2+2}=\frac54`)]);
c1(41,['Khai triển góc tổng',M(r`2\cos(\pi/4+a)=\sqrt2\cos a-\sqrt2\sin a`)+M(r`2\sin(\pi/4+a)=\sqrt2\cos a+\sqrt2\sin a`)],['Rút gọn tử và mẫu',M(r`\text{Tử}=\sqrt2\cos a-(\sqrt2\cos a-\sqrt2\sin a)=\sqrt2\sin a`)+M(r`\text{Mẫu}=-\sqrt2\sin a+(\sqrt2\cos a+\sqrt2\sin a)=\sqrt2\cos a`)],['Chia và kết luận','Mẫu khác 0 nên '+M(r`A=\frac{\sqrt2\sin a}{\sqrt2\cos a}=\tan a\Rightarrow k=1`)]);
c1(42,['Điều kiện và đổi cotang','Theo giả thiết, các tang và cotang đều xác định; đặc biệt '+I(r`\sin(a-b)\ne0`)+'.'],['Biến đổi tích đầu',M(r`\tan a-\tan b=\frac{\sin(a-b)}{\cos a\cos b}`)+M(r`(\tan a-\tan b)\cot(a-b)=\frac{\cos(a-b)}{\cos a\cos b}=1+\tan a\tan b`)],['Trừ hai hạng bằng nhau',M(r`B=1+\tan a\tan b-\tan a\tan b=1`)]);
c1(43,['Tính cos và chọn dấu','Góc nhọn nên '+M(r`\cos x=\sqrt{1-\frac13}=\frac{\sqrt6}3`)],['Khai triển cos của tổng',M(r`\cos(x+\pi/3)=\cos x\cos(\pi/3)-\sin x\sin(\pi/3)`)],['Thay các giá trị',M(r`\frac{\sqrt6}3\cdot\frac12-\frac1{\sqrt3}\cdot\frac{\sqrt3}2=\frac{\sqrt6}6-\frac12`)]);
c1(44,['Khai triển hai thừa số',M(r`\cos(a+b)\cos(a-b)=(\cos a\cos b-\sin a\sin b)(\cos a\cos b+\sin a\sin b)`)],['Dùng hiệu hai bình phương',M(r`=\cos^2a\cos^2b-\sin^2a\sin^2b=\cos^2a+\cos^2b-1`)],['Thay số và quy đồng',M(r`\frac19+\frac1{16}-1=\frac{16+9-144}{144}=-\frac{119}{144}`)]);
c1(45,['Tìm cos và tang','Góc thuộc phần tư II nên '+M(r`\cos\alpha=-\sqrt{1-9/25}=-\frac45,\quad\tan\alpha=-\frac34`)],['Áp dụng tang của tổng',M(r`\tan(\alpha+\pi/3)=\frac{-3/4+\sqrt3}{1+3\sqrt3/4}=\frac{4\sqrt3-3}{4+3\sqrt3}`)+'Mẫu dương nên công thức áp dụng được.'],['Khử căn ở mẫu',M(r`\frac{(4\sqrt3-3)(4-3\sqrt3)}{16-27}=\frac{25\sqrt3-48}{-11}=\frac{48-25\sqrt3}{11}`)]);
c1(46,['Tìm cos theo góc phần tư IV',M(r`\cos\alpha=\sqrt{1-144/169}=\frac5{13}`)],['Khai triển cos của hiệu',M(r`\cos(\pi/3-\alpha)=\frac12\cos\alpha+\frac{\sqrt3}2\sin\alpha`)],['Thay số và quy đồng',M(r`\frac5{26}-\frac{12\sqrt3}{26}=\frac{5-12\sqrt3}{26}`)]);
for(const n of [47,48,49]){
 const last=n===47?r`\sin(a-b)=\frac8{17}\frac{12}{13}-\frac{15}{17}\frac5{13}=\frac{96-75}{221}=\frac{21}{221}`:n===48?r`\cos(a+b)=\frac{15}{17}\frac{12}{13}-\frac8{17}\frac5{13}=\frac{180-40}{221}=\frac{140}{221}`:r`\tan(a+b)=\frac{8/15+5/12}{1-(8/15)(5/12)}=\frac{171/180}{140/180}=\frac{171}{140}`;
 c1(n,['Tính các giá trị còn thiếu','Hai góc nhọn nên các giá trị đều dương. '+M(r`\cos a=\sqrt{1-64/289}=\frac{15}{17}`)+M(r`\cos b=\frac1{\sqrt{1+25/144}}=\frac{12}{13},\quad\sin b=\frac5{13},\quad\tan a=\frac8{15}`)],['Chọn công thức',M(n===47?r`\sin(a-b)=\sin a\cos b-\cos a\sin b`:n===48?r`\cos(a+b)=\cos a\cos b-\sin a\sin b`:r`\tan(a+b)=\frac{\tan a+\tan b}{1-\tan a\tan b}`)],['Thay số rồi thực hiện phép tính',M(last)]);
}
for(const n of [50,51,52])c1(n,['Tính sin của góc nhọn',M(r`\sin a=\sqrt{1-25/169}=\frac{12}{13}`)],['Tính sin và cos góc đôi',M(r`\sin2a=2\cdot\frac{12}{13}\cdot\frac5{13}=\frac{120}{169}`)+M(r`\cos2a=2\cdot\frac{25}{169}-1=-\frac{119}{169}`)],['Kết luận',M(n===50?r`\sin2a=\frac{120}{169}`:n===51?r`\cos2a=-\frac{119}{169}`:r`\tan2a=\frac{120/169}{-119/169}=-\frac{120}{119}`)]);
for(const n of [53,54,55])c1(n,['Tính cos của góc nhọn',M(r`\cos a=\sqrt{1-1/16}=\frac{\sqrt{15}}4`)],['Tính hai giá trị góc đôi',M(r`\sin2a=2\cdot\frac14\cdot\frac{\sqrt{15}}4=\frac{\sqrt{15}}8,\quad\cos2a=1-2\cdot\frac1{16}=\frac78`)],['Kết luận',M(n===53?r`\sin2a=\frac{\sqrt{15}}8`:n===54?r`\cos2a=\frac78`:r`\tan2a=\frac{\sqrt{15}/8}{7/8}=\frac{\sqrt{15}}7`)]);
c1(56,['Tính cos theo góc phần tư II',M(r`\cos\alpha=-\sqrt{1-9/25}=-\frac45`)],['Tính giá trị góc đôi',M(r`\sin2\alpha=2\cdot\frac35\cdot\frac{-4}5=-\frac{24}{25},\quad\cos2\alpha=1-2\cdot\frac9{25}=\frac7{25}`)+M(r`\tan2\alpha=\frac{-24/25}{7/25}=-\frac{24}7`)],['Cộng và quy đồng',M(r`E=-\frac{24}{25}-\frac{24}7=\frac{-168-600}{175}=-\frac{768}{175}`)]);
c1(57,['Đặt biến nửa góc',M(r`t=\tan(x/2)=-2,\quad\sin x=\frac{2t}{1+t^2}=-\frac45,\quad\cos x=\frac{1-t^2}{1+t^2}=-\frac35`)],['Tính tử và mẫu riêng',M(r`\tan x=\frac43,\quad\cot x=\frac34`)+M(r`3\sin x+4\cos x=-\frac{12}5-\frac{12}5=-\frac{24}5`)+M(r`4\cot x+3\tan x=3+4=7\ne0`)],['Chia cho mẫu',M(r`A=\frac{-24/5}{7}=-\frac{24}{35}`)]);
for(const n of [58,59])c1(n,['Tính cos của góc ban đầu','Góc thuộc phần tư IV nên '+M(r`\cos x=\sqrt{1-16/25}=\frac35`)],['Xác định dấu ở nửa góc',M(r`\frac{3\pi}4<\frac x2<\pi`)+ 'Nửa góc thuộc phần tư II: sin dương và cos âm.'],['Dùng công thức nửa góc',M(n===58?r`\cos(x/2)=-\sqrt{\frac{1+3/5}2}=-\sqrt{\frac45}=-\frac2{\sqrt5}`:r`\sin(x/2)=\sqrt{\frac{1-3/5}2}=\sqrt{\frac15}=\frac1{\sqrt5}`)]);
c1(60,['Đổi giá trị góc đôi theo tang',M(r`\sin2x=\frac{2\tan x}{1+\tan^2x}=\frac{2/15}{226/225}=\frac{15}{113}`)],['Tính mẫu của biểu thức',M(r`\tan2x=\frac{2/15}{1-1/225}=\frac{15}{112},\quad1+\tan2x=\frac{127}{112}\ne0`)],['Chia hai phân số',M(r`B=\frac{15}{113}\cdot\frac{112}{127}=\frac{1680}{14351}`)]);
c1(61,['Tính giá trị từ tang nửa góc',M(r`t=-\frac12,\quad\sin x=\frac{2t}{1+t^2}=-\frac45,\quad\cos x=\frac{1-t^2}{1+t^2}=\frac35`)],['Tính các giá trị góc đôi',M(r`\sin2x=2\cdot\frac{-4}5\cdot\frac35=-\frac{24}{25},\quad\cos2x=\frac9{25}-\frac{16}{25}=-\frac7{25},\quad\tan2x=\frac{24}7`)],['Tính tử và mẫu',M(r`2\sin2x-\cos2x=-\frac{48}{25}+\frac7{25}=-\frac{41}{25}`)+M(r`\tan2x+\cos2x=\frac{24}7-\frac7{25}=\frac{551}{175}\ne0`)],['Thực hiện phép chia',M(r`C=-\frac{41}{25}\cdot\frac{175}{551}=-\frac{287}{551}`)]);
c1(62,['Dùng bình phương của tổng',M(r`\sin^4x+\cos^4x=(\sin^2x+\cos^2x)^2-2\sin^2x\cos^2x=1-2\sin^2x\cos^2x`)],['Nhân đôi rồi hạ bậc',M(r`=1-\frac12\sin^22x=1-\frac{1-\cos4x}{4}=\frac34+\frac14\cos4x`)],['Đối chiếu hệ số',M(r`k=\frac14`)]);
c1(63,['Đặt hai đại lượng có tổng bằng 1',M(r`u=\sin^2x,\quad v=\cos^2x,\quad u+v=1,\quad uv=\frac14\sin^22x`)],['Dùng tổng hai lập phương',M(r`u^3+v^3=(u+v)^3-3uv(u+v)=1-\frac34\sin^22x`)],['Hạ bậc và lấy hệ số',M(r`=1-\frac38(1-\cos4x)=\frac58+\frac38\cos4x\Rightarrow k=\frac38`)]);
c1(64,['Đặt nhân tử chung',M(r`\sin x\cos^3x-\cos x\sin^3x=\sin x\cos x(\cos^2x-\sin^2x)`)],['Áp dụng nhân đôi lần thứ nhất',M(r`=\frac12\sin2x\cos2x`)],['Nhân đôi lần nữa',M(r`=\frac14\sin4x\Rightarrow k=\frac14`)]);
c1(65,['Đổi tích hai cos có góc đối xứng',M(r`2\cos(\pi/3-x)\cos(\pi/3+x)=\cos(2\pi/3)+\cos2x=\cos2x-\frac12`)],['Nhân với thừa số còn lại',M(r`P=2\cos x(\cos2x-1/2)=2\cos x\cos2x-\cos x`)],['Đổi tích thành tổng và triệt tiêu',M(r`P=\cos3x+\cos x-\cos x=\cos3x\Rightarrow k=3`)]);
c1(66,['Hạ bậc ba bình phương',M(r`S=\frac32+\frac12[\cos2x+\cos(4\pi/3+2x)+\cos(4\pi/3-2x)]`)],['Ghép hai hạng đối xứng',M(r`\cos(4\pi/3+2x)+\cos(4\pi/3-2x)=2\cos(4\pi/3)\cos2x=-\cos2x`)],['Triệt tiêu và kết luận',M(r`S=\frac32+\frac12(\cos2x-\cos2x)=\frac32`)]);
c1(67,['Chọn công thức',M(r`2\sin u\cos v=\sin(u+v)+\sin(u-v)`)],['Thay hai góc',M(r`u=a+b,\ v=a-b\Rightarrow u+v=2a,\ u-v=2b`)],['Rút gọn và đối chiếu',M(r`2\sin(a+b)\cos(a-b)=\sin2a+\sin2b\Rightarrow k=1`)]);
c1(68,['Chọn công thức',M(r`2\cos u\cos v=\cos(u+v)+\cos(u-v)`)],['Thay hai góc',M(r`u=a+b,\ v=a-b\Rightarrow u+v=2a,\ u-v=2b`)],['Rút gọn và đối chiếu',M(r`2\cos(a+b)\cos(a-b)=\cos2a+\cos2b\Rightarrow k=1`)]);
c1(69,['Ghép sin với cos',M(r`2\sin2x\cos x=\sin3x+\sin x`)],['Khai triển tích',M(r`4\sin3x\sin2x\cos x=2\sin^23x+2\sin3x\sin x`)],['Hạ bậc và đổi tích',M(r`=1-\cos6x+\cos2x-\cos4x\Rightarrow A=1`)]);
c1(70,['Ghép hai cos',M(r`2\cos x\cos(x/2)=\cos(3x/2)+\cos(x/2)`)],['Đổi hai tích sin với cos',M(r`P=2\sin(13x/2)\cos(3x/2)+2\sin(13x/2)\cos(x/2)`)+M(r`P=\sin8x+\sin5x+\sin7x+\sin6x`)],['Cộng các hệ số góc',M(r`p+q+r+s=8+5+7+6=26`)]);
c1(71,['Đổi tích thành tổng',M(r`\sin(x+30^\circ)\cos(x-30^\circ)=\frac12\{\sin[(x+30^\circ)+(x-30^\circ)]+\sin60^\circ\}`)],['Tính sin của góc đặc biệt',M(r`=\frac12\sin2x+\frac12\cdot\frac{\sqrt3}2=\frac12\sin2x+\frac{\sqrt3}4`)],['Đối chiếu hệ số',M(r`A=\frac12`)]);
c1(72,['Đổi góc và tích',M(r`\sin(\pi/5)\sin(2\pi/5)=\sin36^\circ\sin72^\circ=\frac{\cos36^\circ-\cos108^\circ}{2}`)],['Tính các cos đặc biệt',M(r`\cos36^\circ=\frac{1+\sqrt5}4,\quad\cos108^\circ=-\cos72^\circ=-\frac{\sqrt5-1}4`)],['Thay và rút gọn',M(r`\frac12\left(\frac{1+\sqrt5}4+\frac{\sqrt5-1}4\right)=\frac{\sqrt5}4`)]);
c1(73,['Ghép hai sin',M(r`2\sin x\sin3x=\cos2x-\cos4x`)],['Nhân với sin còn lại',M(r`P=\sin2x\cos2x-\sin2x\cos4x`)],['Đổi tích và gom hạng',M(r`P=\frac12\sin4x-\frac12(\sin6x-\sin2x)=\frac12\sin2x+\frac12\sin4x-\frac12\sin6x`)+M(r`C=-\frac12`)]);
c1(74,['Đổi tích hai sin',M(r`2\sin2x\sin3x=\cos x-\cos5x`)],['Nhân với phần còn lại',M(r`P=4\cos x(\cos x-\cos5x)=4\cos^2x-4\cos x\cos5x`)],['Hạ bậc và đổi tích',M(r`P=2+2\cos2x-2\cos6x-2\cos4x\Rightarrow A=2`)]);
c1(75,['Đổi tích hai sin',M(r`\sin(x+\pi/6)\sin(x-\pi/6)=\frac{\cos(\pi/3)-\cos2x}2=\frac14-\frac12\cos2x`)],['Nhân rồi hạ bậc',M(r`P=\frac14\cos2x-\frac12\cos^22x=\frac14\cos2x-\frac14(1+\cos4x)`)],['Đối chiếu hạng tự do',M(r`P=-\frac14+\frac14\cos2x-\frac14\cos4x\Rightarrow A=-\frac14`)]);
c1(76,['Đổi biến góc',M(r`u=a-b,\quad v=b-c,\quad c-a=-(u+v)`)],['Đổi tích đầu',M(r`4\cos u\cos v\cos(u+v)=2[\cos(u+v)+\cos(u-v)]\cos(u+v)`)],['Khai triển hai tích',M(r`=1+\cos2(u+v)+\cos2u+\cos2v`)],['Đổi lại góc ban đầu',M(r`=1+\cos2(c-a)+\cos2(a-b)+\cos2(b-c)\Rightarrow K=1`)]);
c1(77,['Ghép hai góc đối xứng',M(r`\sin x+\sin3x=2\sin2x\cos x`)],['Cộng hạng còn lại',M(r`\sin x+\sin2x+\sin3x=(2\cos x+1)\sin2x`)],['Đối chiếu hệ số',M(r`k=2`)]);
c1(78,['Ghép hai cặp',M(r`\sin x+\sin7x=2\sin4x\cos3x,\quad\sin3x+\sin5x=2\sin4x\cos x`)],['Đặt nhân tử chung và ghép cos',M(r`P=2\sin4x(\cos3x+\cos x)=2\sin4x\cdot2\cos2x\cos x`)],['Đối chiếu',M(r`P=4\sin4x\cos2x\cos x\Rightarrow k=4`)]);
c1(79,['Ghép các góc có cùng trung bình',M(r`\cos x+\cos4x=2\cos(5x/2)\cos(3x/2)`)+M(r`\cos2x+\cos3x=2\cos(5x/2)\cos(x/2)`)],['Đặt nhân tử và ghép tiếp',M(r`P=2\cos(5x/2)[\cos(3x/2)+\cos(x/2)]`)+M(r`\cos(3x/2)+\cos(x/2)=2\cos x\cos(x/2)`)],['Đối chiếu hệ số',M(r`P=4\cos(5x/2)\cos x\cos(x/2)\Rightarrow k=4`)]);
c1(80,['Biến đổi tử và mẫu',M(r`\cos x+\cos y=2\cos\frac{x+y}2\cos\frac{x-y}2`)+M(r`\cos x-\cos y=-2\sin\frac{x+y}2\sin\frac{x-y}2`)],['Kiểm tra điều kiện','Mẫu khác 0 nên cả hai sin ở mẫu đều khác 0; được phép chia từng thừa số.'],['Chia và đối chiếu',M(r`P=-\frac{\cos((x+y)/2)}{\sin((x+y)/2)}\frac{\cos((x-y)/2)}{\sin((x-y)/2)}=-\cot\frac{x+y}2\cot\frac{x-y}2\Rightarrow k=-1`)]);
c1(81,['Đổi từng tích',M(r`\cos5x\cos3x=\frac{\cos2x+\cos8x}2,\quad\sin7x\sin x=\frac{\cos6x-\cos8x}2`)],['Cộng và triệt tiêu',M(r`P=\frac{\cos2x+\cos6x}2`)],['Tổng thành tích',M(r`P=\cos4x\cos2x\Rightarrow k=4`)]);
for(const n of [82,85])c1(n,['Đổi hai tích',M(r`2\sin x\cos2x=\sin3x-\sin x,\quad2\sin x\cos4x=\sin5x-\sin3x`)],['Thế vào và khử các hạng',M(r`M=\sin5x-[(\sin3x-\sin x)+(\sin5x-\sin3x)]=\sin x`)],['Kết luận',M(n===82?r`M=\sin x\Rightarrow k=1`:r`x=\pi/6\Rightarrow M=\sin(\pi/6)=\frac12`)]);
c1(83,['Đổi từng tích',M(r`\cos5x\cos x=\frac{\cos6x+\cos4x}2,\quad\sin3x\sin x=\frac{\cos2x-\cos4x}2`)],['Triệt tiêu rồi ghép tổng',M(r`P=\frac{\cos6x+\cos2x}2=\cos4x\cos2x`)],['Đối chiếu hệ số góc',M(r`k=4`)]);
c1(84,['Đổi hai tích',M(r`2\sin a\cos2a=\sin3a-\sin a,\quad2\sin2a\cos3a=\sin5a-\sin a`)],['Thay vào biểu thức',M(r`P=(\sin3a-\sin a)-(\sin5a-\sin a)+\sin5a`)],['Triệt tiêu và kết luận',M(r`P=\sin3a\Rightarrow k=3`)]);
c1(89,['Tính giá trị còn lại theo dấu',M(r`\cos\alpha=\sqrt{1-16/25}=\frac35,\quad\sin\beta=\sqrt{1-25/169}=\frac{12}{13}`)],['Khai triển cos của hiệu',M(r`\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta`)],['Thay số và quy đồng',M(r`=\frac35\cdot\frac{-5}{13}+\frac45\cdot\frac{12}{13}=\frac{-15+48}{65}=\frac{33}{65}`)]);
c1(93,['Tìm sin theo phần tư II',M(r`\sin\alpha=\sqrt{1-9/25}=\frac45`)],['Dùng công thức góc đôi',M(r`\sin2\alpha=2\sin\alpha\cos\alpha`)],['Thay số',M(r`\sin2\alpha=2\cdot\frac45\cdot\frac{-3}5=-\frac{24}{25}`)]);
c1(94,['Kiểm tra mẫu',M(r`1-\tan^2\alpha=1-\frac19=\frac89\ne0`)],['Áp dụng công thức',M(r`\tan2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}`)],['Thực hiện phép chia',M(r`\tan2\alpha=\frac{2/3}{8/9}=\frac23\cdot\frac98=\frac34`)]);
for(const n of [95,96])c1(n,['Bình phương đẳng thức đã cho',M(n===95?r`(\sin\alpha+\cos\alpha)^2=\frac14`:r`(\sin\alpha-\cos\alpha)^2=\frac19`)],['Khai triển và dùng hệ thức cơ bản',M(n===95?r`1+2\sin\alpha\cos\alpha=\frac14\Rightarrow1+\sin2\alpha=\frac14`:r`1-2\sin\alpha\cos\alpha=\frac19\Rightarrow1-\sin2\alpha=\frac19`)],['Giải theo giá trị cần tính',M(n===95?r`\sin2\alpha=\frac14-1=-\frac34`:r`\sin2\alpha=1-\frac19=\frac89`)]);
c1(99,['Chọn công thức tích thành tổng',M(r`\sin u\cos v=\frac{\sin(u+v)+\sin(u-v)}2`)],['Tính tổng và hiệu hai góc',M(r`u=5x,\ v=2x\Rightarrow u+v=7x,\ u-v=3x`)],['Thay lại',M(r`\sin5x\cos2x=\frac{\sin7x+\sin3x}2`)]);
c1(100,['Chọn hai góc',M(r`u=100t,\quad v=4t`)],['Áp dụng tích thành tổng',M(r`2\sin u\cos v=\sin(u+v)+\sin(u-v)`)],['Thu gọn',M(r`s(t)=\sin104t+\sin96t`)]);
c1(103,['Tính nửa tổng và nửa hiệu',M(r`\frac{20^\circ+40^\circ}2=30^\circ,\quad\frac{20^\circ-40^\circ}2=-10^\circ`)],['Tổng thành tích',M(r`\cos20^\circ+\cos40^\circ=2\cos30^\circ\cos(-10^\circ)`)],['Dùng cos chẵn và góc đặc biệt',M(r`=2\cdot\frac{\sqrt3}2\cos10^\circ=\sqrt3\cos10^\circ`)]);
c1(104,['Tính nửa tổng và nửa hiệu',M(r`\frac{75^\circ+15^\circ}2=45^\circ,\quad\frac{75^\circ-15^\circ}2=30^\circ`)],['Hiệu thành tích',M(r`\sin75^\circ-\sin15^\circ=2\cos45^\circ\sin30^\circ`)],['Thay giá trị đặc biệt',M(r`=2\cdot\frac{\sqrt2}2\cdot\frac12=\frac{\sqrt2}2`)]);
c1(105,['Đặt hệ số chung',M(r`x_1+x_2=3[\cos(4t+\pi/6)+\cos(4t-\pi/6)]`)],['Tổng thành tích',M(r`x_1+x_2=6\cos4t\cos(\pi/6)=3\sqrt3\cos4t`)],['Đọc biên độ dương',M(r`A=|3\sqrt3|=3\sqrt3`)]);

// Viết rõ phương trình đại số trước khi lọc nghiệm của ẩn phụ.
const quadratic=[
 [r`t=\sin x`,r`2t^2-3t+1=0`,r`(2t-1)(t-1)=0`,[.5,1]],
 [r`t=\cos x`,r`t^2+3t+2=0`,r`(t+1)(t+2)=0`,[-1,-2]],
 [r`t=\tan x`,r`2t^2-3t+1=0`,r`(2t-1)(t-1)=0`,[.5,1]],
 [r`t=\cot x`,r`t^2-t-12=0`,r`(t-4)(t+3)=0`,[4,-3]],
 [r`\cos^2x=1-\sin^2x,\quad t=\sin x`,r`8(1-t^2)+2t-7=0\iff8t^2-2t-1=0`,r`(4t+1)(2t-1)=0`,[-.25,.5]],
 [r`\cos2x=2\cos^2x-1,\quad t=\cos x`,r`2(2t^2-1)+t=1\iff4t^2+t-3=0`,r`(4t-3)(t+1)=0`,[.75,-1]],
 [r`\sin^2x=1-\cos^2x,\quad t=\cos x`,r`1-t^2-2t+2=0\iff t^2+2t-3=0`,r`(t-1)(t+3)=0`,[1,-3]],
 [r`\cos2x=1-2\sin^2x,\quad t=\sin x`,r`1-2t^2+5t+2=0\iff2t^2-5t-3=0`,r`(2t+1)(t-3)=0`,[-.5,3]],
 [r`\sin^2x=1-\cos^2x,\quad t=\cos x`,r`2t^2-(1-t^2)-4t+2=0\iff3t^2-4t+1=0`,r`(3t-1)(t-1)=0`,[1/3,1]],
 [r`\cos^2x=1-\sin^2x,\quad t=\sin x`,r`t-2(1-t^2)+1=0\iff2t^2+t-1=0`,r`(2t-1)(t+1)=0`,[.5,-1]],
 [r`\cos2x=2\cos^2x-1,\quad\sin^2x=1-\cos^2x,\quad t=\cos x`,r`(2t^2-1)+(1-t^2)+2t+1=0\iff t^2+2t+1=0`,r`(t+1)^2=0`,[-1]],
 [r`t=\tan x`,r`t^2+t=0`,r`t(t+1)=0`,[0,-1]],
 [r`\frac1{\cos^2x}=1+\tan^2x,\quad t=\tan x`,r`1+t^2=t+t^2`,r`t=1`,[1]]
];
function inverse(kind,m){
 const num=kind==='sin'?Math.asin(m):kind==='cos'?Math.acos(m):kind==='cot'?Math.atan2(1,m):Math.atan(m);
 return {num,tex:angle(num)||`\\operatorname{arc${kind==='cot'?'cot':kind}}(${value(m)})`};
}
function branches(kind,m){
 const alpha=inverse(kind,m),p=kind==='sin'||kind==='cos'?2*Math.PI:Math.PI;
 const rows=[{num:alpha.num,tex:r`\alpha`}];
 if(kind==='sin')rows.push({num:Math.PI-alpha.num,tex:r`\pi-\alpha`});
 if(kind==='cos')rows.push({num:-alpha.num,tex:r`-\alpha`});
 return {alpha,p,rows};
}
function familySteps(kind,m,a=1,b=0){
 const {alpha,p,rows}=branches(kind,m),h=p/Math.abs(a),htex=angle(h),seen=[];
 const family=[],filter=[],bases=[];
 for(const row of rows){
  const base=(row.num-b)/a;
  if(bases.some(x=>Math.abs((base-x)/h-Math.round((base-x)/h))<1e-10))continue;
  bases.push(base);
  const basetex=angle(base)||`\\frac{(${row.tex})-(${angle(b)||fmt(b)})}{${fmt(a)}}`;
  const from=Math.ceil(-base/h-1e-10),to=Math.ceil((2*Math.PI-base)/h-1e-10)-1;
  const keys=[];for(let k=from;k<=to;k++)keys.push(k);
  family.push(M(`x=${basetex}+(${htex})k,\\quad k\\in\\mathbb Z`));
  const lower=fraction(-base/h)||`-\\frac{${basetex}}{${htex}}`,upper=fraction((2*Math.PI-base)/h)||`\\frac{2\\pi-(${basetex})}{${htex}}`;
  filter.push(M(`0\\le ${basetex}+(${htex})k<2\\pi`)+M(`${lower}\\le k<${upper}`)+ 'Vì tham số nguyên, suy ra '+I(keys.length?`k\\in\\{${keys.join(';')}\\}`:r`\text{không có }k\in\mathbb Z`)+'.');
  for(const k of keys){const x=base+k*h;if(!seen.some(t=>Math.abs(t-x)<1e-8))seen.push(x);}
 }
 return {alpha,family,filter,roots:seen.sort((a,b)=>a-b)};
}
function rootsConclusion(roots){
 const exact=roots.every(x=>angle(x)!==null);
 return S('Liệt kê nghiệm phân biệt và kết luận',exact?M(`x\\in\\{${roots.map(angle).join(';')}\\}`)+`Có ${roots.length} nghiệm; không lấy đầu mút `+I(r`2\pi`)+'.':`Các nghiệm gần đúng (radian): `+I(roots.map(x=>fmt(x)).join(';'))+`. Có ${roots.length} nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác.`);
}
function equation(q){
 const v=q.verification,t=v.trig;
 if(t){
  const f=familySteps(t.kind,t.m,t.a,t.b);
  const u=`${t.a===1?'':t.a===-1?'-':t.a}x${t.b===0?'':`+(${angle(t.b)||fmt(t.b)})`}`;
  const rhs=angle(f.alpha.num)!==null?`\\${t.kind}(${f.alpha.tex})`:value(t.m);
  return [S('Điều kiện và đưa về phương trình cơ bản',t.kind==='tan'?M(`\\cos(${u})\\ne0`):t.kind==='cot'?M(`\\sin(${u})\\ne0`):'Sin và cos xác định với mọi số thực.'),S('Cô lập giá trị lượng giác',M(`\\${t.kind}(${u})=${rhs}`)+`Chọn `+I(`\\alpha=${f.alpha.tex}`)+'.'),S('Viết các họ nghiệm rồi giải theo x',f.family.join('')+'Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm.'),S('Lọc tham số theo khoảng đề bài',f.filter.join('')),rootsConclusion(f.roots)];
 }
 const index=chapter1Questions.findIndex(x=>x.id===q.id)+1;
 if(v.reduced){
  const [pre,poly,factor,all]=quadratic[index-184],kind=v.reduced.kind;
  const valid=all.filter(x=>!['sin','cos'].includes(kind)||Math.abs(x)<=1),bad=all.filter(x=>!valid.includes(x));
  const families=valid.map(m=>({m,...familySteps(kind,m)}));
  return [S('Điều kiện và đổi về một hàm lượng giác',(kind==='tan'?M(r`\cos x\ne0`):kind==='cot'?M(r`\sin x\ne0`):'Sin, cos xác định với mọi số thực. ')+M(pre)+(kind==='sin'||kind==='cos'?M(r`-1\le t\le1`):'')),S('Thu gọn phương trình theo ẩn phụ',M(poly)),S('Giải phương trình đại số',M(factor)+M(`t\\in\\{${all.map(x=>value(x)).join(';')}\\}`)+(bad.length?'Loại '+I(bad.map(value).join(';'))+' vì nằm ngoài đoạn từ −1 đến 1.':'')),...families.map(f=>S('Giải '+I(`\\${kind} x=${value(f.m)}`),`Chọn `+I(`\\alpha=${f.alpha.tex}`)+'. '+f.family.join('')+f.filter.join(''))),rootsConclusion(v.roots)];
 }
 return authored.get(q.id);
}
c1(181,['Xét thừa số thứ hai',M(r`-1\le\cos x\le1\Rightarrow1\le\cos x+2\le3`)],['Dùng phương trình tích','Thừa số thứ hai luôn dương nên '+M(r`\sin x(\cos x+2)=0\iff\sin x=0\iff x=k\pi,\ k\in\mathbb Z`)],['Lọc nghiệm',M(r`0\le k\pi<2\pi\iff0\le k<2\Rightarrow k=0,1`)+M(r`x=0\text{ hoặc }x=\pi`)]);
c1(182,['Đổi về hai sin',M(r`\cos(x-\pi/3)=\sin[\pi/2-(x-\pi/3)]=\sin(5\pi/6-x)`)],['Tách hai trường hợp',M(r`3x=5\pi/6-x+2k\pi\quad\text{hoặc}\quad3x=\pi-(5\pi/6-x)+2k\pi`)],['Giải theo x',M(r`x=\frac{5\pi}{24}+\frac{k\pi}2\quad\text{hoặc}\quad x=\frac\pi{12}+k\pi`)],['Lọc từng họ','Họ thứ nhất có '+I(r`k=0,1,2,3`)+', họ thứ hai có '+I(r`k=0,1`)+'. '+M(r`x\in\left\{\frac\pi{12};\frac{5\pi}{24};\frac{17\pi}{24};\frac{13\pi}{12};\frac{29\pi}{24};\frac{41\pi}{24}\right\}`)+'Sáu nghiệm đôi một khác nhau.']);
c1(183,['Đổi về hai cos',M(r`\sin(x-\pi/4)=\cos[\pi/2-(x-\pi/4)]=\cos(3\pi/4-x)`)],['Tách hai trường hợp',M(r`2x+\pi/5=3\pi/4-x+2k\pi\quad\text{hoặc}\quad2x+\pi/5=-3\pi/4+x+2k\pi`)],['Giải hai phương trình bậc nhất',M(r`x=\frac{11\pi}{60}+\frac{2k\pi}3\quad\text{hoặc}\quad x=-\frac{19\pi}{20}+2k\pi`)],['Lọc và đếm','Họ thứ nhất có '+I(r`k=0,1,2`)+', họ thứ hai có '+I(r`k=1`)+'. '+M(r`x\in\left\{\frac{11\pi}{60};\frac{17\pi}{20};\frac{21\pi}{20};\frac{91\pi}{60}\right\}`)+'Có 4 nghiệm phân biệt.']);
c1(197,['Dùng miền giá trị của sin',M(r`-1\le\sin x\le1`)],['Điều kiện cần','Nếu có nghiệm thì vế phải phải thuộc miền giá trị, tức '+I(r`-1\le m\le1`)+'.'],['Điều kiện đủ','Với mỗi '+I(r`m\in[-1;1]`)+', tồn tại góc '+I(r`x=\operatorname{arcsin}m`)+'. Vậy điều kiện cần và đủ là '+I(r`|m|\le1`)+'.']);
c1(198,['Nhận dạng góc cơ bản',M(r`1=\cos0`)],['Áp dụng công thức nghiệm',M(r`\cos x=\cos0\iff x=\pm0+2k\pi`)],['Gộp hai họ trùng nhau',M(r`x=2k\pi,\quad k\in\mathbb Z`)]);
c1(199,['Điều kiện','Giả thiết '+I(r`\tan\alpha`)+' xác định, tức '+I(r`\cos\alpha\ne0`)+'. Nghiệm cần thỏa '+I(r`\cos x\ne0`)+'.'],['Dùng công thức hiệu tang',M(r`\tan x-\tan\alpha=\frac{\sin(x-\alpha)}{\cos x\cos\alpha}=0\iff\sin(x-\alpha)=0`)],['Giải và kiểm tra',M(r`x-\alpha=k\pi\iff x=\alpha+k\pi,\quad k\in\mathbb Z`)+'Các nghiệm giữ nguyên điều kiện xác định của tang.']);
c1(200,['Đổi về sin và cos',M(r`\cot x=\frac{\cos x}{\sin x},\quad\sin x\ne0`)],['Giải tử bằng 0',M(r`\cot x=0\iff\cos x=0\iff x=\frac\pi2+k\pi`)],['Kiểm tra điều kiện',M(r`\sin(\pi/2+k\pi)=(-1)^k\ne0`)+ 'Vậy nhận toàn bộ họ nghiệm với tham số nguyên.']);

export function getDetailedSolution(q){
 if(q.verification?.kind==='roots')return equation(q);
 return authored.get(q.id)||conversion(q)||statistics(q);
}
