// Formulas and symbol definitions are authored by topic, before the question's hint.
const r=String.raw;
const pack=(formulas,symbols,condition='')=>({formulas,symbols,condition});
const angles=[[r`a,b,x,\alpha,\beta`,'Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số.'],[r`k\in\mathbb Z`,'Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm.']];
const sequenceSymbols=[[r`u_1,u_n`,'Số hạng đầu và số hạng thứ n của dãy.'],[r`n`,'Chỉ số hoặc số lượng số hạng; n là số nguyên dương.']];
const apSymbols=[...sequenceSymbols,[r`d`,'Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp.']];
const gpSymbols=[...sequenceSymbols,[r`q`,'Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp.']];
const sumSymbol=[r`S_n`,'Tổng n số hạng đầu của dãy, từ u₁ đến uₙ.'];
const ap=pack([r`u_{n+1}=u_n+d`,r`u_n=u_1+(n-1)d`],apSymbols);
const apSum=pack([r`u_n=u_1+(n-1)d`,r`S_n=\frac{n(u_1+u_n)}2=\frac{n[2u_1+(n-1)d]}2`],[...apSymbols,sumSymbol]);
const gp=pack([r`u_{n+1}=q u_n`,r`u_n=u_1q^{n-1}\quad(n\ge2)`],gpSymbols,'Khi có số hạng bằng 0, dùng định nghĩa truy hồi; không chia cho số hạng đó.');
const gpSum=pack([r`S_n=u_1\frac{1-q^n}{1-q}\quad(q\ne1)`,r`S_n=nu_1\quad(q=1)`],[...gpSymbols,sumSymbol]);
const threeAP=pack([r`a,b,c\text{ lập CSC}\ \Longleftrightarrow\ a+c=2b`],[[r`a,b,c`,'Ba số theo đúng thứ tự đề bài.'],[r`\mathrm{CSC}`,'Cấp số cộng; chấp nhận công sai bằng 0.']]);
const threeGP=pack([r`a,b,c\text{ lập CSN}\ \Longleftrightarrow\ b^2=ac`],[[r`a,b,c`,'Ba số theo thứ tự đề; trong công thức tương đương này, cả ba khác 0.'],[r`\mathrm{CSN}`,'Cấp số nhân.']],'Nếu có số bằng 0, kiểm tra trực tiếp điều kiện số sau bằng q lần số trước.');
const gpRatio=pack([r`\frac{u_j}{u_i}=q^{j-i}\quad(u_i\ne0)`,r`q^{2m}=A>0\ \Longrightarrow\ q=\pm A^{1/(2m)}`],[...gpSymbols,[r`i,j`,'Chỉ số hai số hạng đã biết, với j lớn hơn i.'],[r`m`,'Số nguyên dương; 2m là số mũ chẵn.'],[r`A`,'Giá trị dương của lũy thừa công bội sau khi lập phương trình.']],'Không bỏ nghiệm công bội âm nếu đề không yêu cầu q dương.');
const circle=pack([r`\cos\alpha=x,\qquad\sin\alpha=y`,r`\tan\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad\cot\alpha=\frac{\cos\alpha}{\sin\alpha}`],[[r`M(x;y)`,'Điểm biểu diễn góc α trên đường tròn bán kính 1; x là hoành độ, y là tung độ.'],[r`\alpha`,'Góc lượng giác được biểu diễn bởi M.']],'Chỉ dùng tan khi cos khác 0, cot khi sin khác 0.');
const identity=pack([r`\sin^2\alpha+\cos^2\alpha=1`,r`1+\tan^2\alpha=\frac1{\cos^2\alpha},\qquad\tan\alpha\cot\alpha=1`],[[r`\alpha`,'Góc cần tính giá trị lượng giác; dấu của sin, cos phụ thuộc góc phần tư.']],'Các biểu thức phải xác định; kiểm tra mẫu khác 0 trước khi chia.');
const addition=pack([r`\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b`,r`\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b`,r`\tan(a\pm b)=\frac{\tan a\pm\tan b}{1\mp\tan a\tan b}`],angles,'Trong công thức tan, các tan và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán.');
const double=pack([r`\sin2a=2\sin a\cos a`,r`\cos2a=2\cos^2a-1=1-2\sin^2a`,r`\sin^2a=\frac{1-\cos2a}2,\quad\cos^2a=\frac{1+\cos2a}2`,r`\tan2a=\frac{2\tan a}{1-\tan^2a}`],angles,'Công thức tan chỉ dùng khi các biểu thức và mẫu số xác định.');
const productSum=pack([r`2\sin a\cos b=\sin(a+b)+\sin(a-b)`,r`2\cos a\cos b=\cos(a+b)+\cos(a-b)`,r`2\sin a\sin b=\cos(a-b)-\cos(a+b)`],angles);
const sumProduct=pack([r`\sin u+\sin v=2\sin\frac{u+v}2\cos\frac{u-v}2`,r`\sin u-\sin v=2\cos\frac{u+v}2\sin\frac{u-v}2`,r`\cos u+\cos v=2\cos\frac{u+v}2\cos\frac{u-v}2`,r`\cos u-\cos v=-2\sin\frac{u+v}2\sin\frac{u-v}2`],[[r`u,v`,'Hai góc trong tổng hoặc hiệu; (u+v)/2 là nửa tổng, (u−v)/2 là nửa hiệu.']]);
const period=pack([r`T_{\sin(ax+b)}=T_{\cos(ax+b)}=\frac{2\pi}{|a|}`,r`T_{\tan(ax+b)}=T_{\cot(ax+b)}=\frac{\pi}{|a|}`],[[r`T`,'Chu kì dương nhỏ nhất.'],[r`a\ne0`,'Hệ số của biến x trong góc ax+b.'],[r`b`,'Hằng số dịch pha; không làm thay đổi chu kì.'],[r`x`,'Biến góc tính bằng radian.']]);
function trigEquation(q){
 const f=/\btan|tanx|tan\(/.test(q.prompt)?'tan':/cot/.test(q.prompt)?'cot':/cos/.test(q.prompt)&&!/sin/.test(q.prompt)?'cos':'sin';
 const formula=f==='sin'?r`\sin u=\sin\alpha\ \Longleftrightarrow\ \begin{cases}u=\alpha+2k\pi,\\u=\pi-\alpha+2k\pi\end{cases}`:f==='cos'?r`\cos u=\cos\alpha\ \Longleftrightarrow\ u=\pm\alpha+2k\pi`:`\\${f} u=\\${f}\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi`;
 return pack([formula,...(['sin','cos'].includes(f)?[r`|m|\le1\quad\text{để }\sin u=m\text{ hoặc }\cos u=m\text{ có nghiệm}`]:[])],[[r`u`,'Biểu thức góc chứa ẩn x; giải theo u rồi đổi lại x.'],[r`\alpha`,'Một góc đã biết có giá trị lượng giác bằng vế phải.'],[r`m`,'Giá trị ở vế phải phương trình sin hoặc cos.'],[r`k\in\mathbb Z`,'Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu.']],'Các vế tan hoặc cot phải xác định. Khi đếm nghiệm, loại nghiệm trùng.');
}
function chapter1(q){
 switch(q.type){
  case 'Đổi đơn vị':return pack([r`\alpha_{\text{rad}}=\alpha_{\text{độ}}\frac\pi{180}`,r`\alpha_{\text{độ}}=\alpha_{\text{rad}}\frac{180}\pi`],[[r`\alpha_{\text{độ}}`,'Số đo góc theo độ.'],[r`\alpha_{\text{rad}}`,'Số đo cùng góc theo radian.'],[r`\pi`,'Hằng số pi; một góc bẹt bằng π rad hoặc 180°.']]);
  case 'Độ dài cung':return pack([r`l=R\alpha\quad(\alpha\text{ tính bằng radian})`],[[r`l`,'Độ dài cung tròn.'],[r`R`,'Bán kính đường tròn, cùng đơn vị độ dài với l.'],[r`\alpha`,'Số đo góc ở tâm chắn cung; đổi sang radian trước khi thay số.']]);
  case 'Góc và cung lượng giác':return /răng|quay|kim/.test(q.prompt)?pack([r`\alpha_{\text{độ}}=360\frac mN`],[[r`m`,'Số phần bằng nhau mà bánh xe hoặc kim đã đi qua.'],[r`N`,'Tổng số phần bằng nhau ứng với một vòng.'],[r`\alpha_{\text{độ}}`,'Góc quay theo độ.']]):pack([r`\alpha=\alpha_0+2k\pi,\quad k\in\mathbb Z`],[[r`\alpha_0`,'Một góc đại diện có cùng điểm cuối.'],[r`k`,'Số vòng quay nguyên, có thể âm, dương hoặc bằng 0.'],[r`\alpha`,'Góc cần thỏa điều kiện khoảng trong đề.']]);
  case 'Dấu và góc liên quan':return pack([r`-1\le\sin\alpha\le1,\quad-1\le\cos\alpha\le1`,r`\sin(-\alpha)=-\sin\alpha,\quad\cos(-\alpha)=\cos\alpha`],circle.symbols,'Dấu của cos theo hoành độ, dấu của sin theo tung độ trên đường tròn lượng giác.');
  case 'Kiến thức cơ bản':return circle;
  case 'Hệ thức cơ bản':case 'Tính giá trị lượng giác':return identity;
  case 'Công thức cộng':return addition;
  case 'Nhân đôi và hạ bậc':return double;
  case 'Tích thành tổng':return productSum;
  case 'Tổng thành tích':return sumProduct;
  case 'Bổ trợ công thức':
   if(/tích thành tổng|sin a sin b|sin5x cos|s\(t\)/.test(q.prompt))return productSum;
   if(/cosu|cos20|sin75|dao động/.test(q.prompt))return sumProduct;
   if(/2a|2α|hạ bậc|sinα[+−]cosα/.test(q.prompt))return double;
   return addition;
  case 'Giá trị lớn nhất, nhỏ nhất':return pack([r`-1\le\sin t\le1,\quad-1\le\cos t\le1`,r`b-|a|\le a\sin t+b\le b+|a|`,r`b-|a|\le a\cos t+b\le b+|a|`],[[r`t`,'Biểu thức góc trong sin hoặc cos.'],[r`a,b`,'Các hệ số thực của biểu thức; a là hệ số nhân, b là hằng số cộng.']],'Để kết luận đạt cực trị, kiểm tra góc có thể làm sin hoặc cos bằng 1 hay −1 trong miền đề cho.');
  case 'Chu kì':return period;
  case 'Tính chất hàm số':
   if(/đồng biến/.test(q.prompt))return pack([r`\sin x\text{ đồng biến trên }\left[-\frac\pi2+2k\pi;\frac\pi2+2k\pi\right]`],angles);
   if(/chẵn|lẻ/.test(q.prompt))return pack([r`f(-x)=f(x)\quad\text{(hàm chẵn)}`,r`f(-x)=-f(x)\quad\text{(hàm lẻ)}`],[[r`f,x`,'Hàm số và biến số; miền xác định phải đối xứng qua 0.']]);
   return pack([r`D_{\sin}=D_{\cos}=\mathbb R`,r`-1\le\sin x\le1,\quad-1\le\cos x\le1`,r`\tan x\text{ xác định}\ \Longleftrightarrow\ \cos x\ne0`,r`\cot x\text{ xác định}\ \Longleftrightarrow\ \sin x\ne0`],[[r`D`,'Tập xác định của hàm số.'],[r`x`,'Biến góc, tính theo radian.'],[r`\mathbb R`,'Tập các số thực.']]);
  case 'Phương trình bậc hai':return pack([r`t=\sin x\text{ hoặc }t=\cos x,\qquad -1\le t\le1`,r`at^2+bt+c=0,\quad\Delta=b^2-4ac`,r`t=\frac{-b\pm\sqrt\Delta}{2a}\quad(a\ne0,\Delta\ge0)`],[[r`t`,'Ẩn phụ là giá trị sin hoặc cos; loại nghiệm ngoài [−1;1].'],[r`a,b,c`,'Các hệ số của phương trình bậc hai theo t.'],[r`\Delta`,'Biệt thức; Δ âm thì phương trình theo t không có nghiệm thực.'],[r`x`,'Ẩn ban đầu; giải phương trình lượng giác sau khi tìm t.']]);
  case 'Phương trình cơ bản':case 'Lý thuyết phương trình':return trigEquation(q);
 }
 throw Error('Thiếu công thức chương 1: '+q.type);
}
function chapter2(q){
 const n=Number(q.id.split('-')[3]);
 if(n===1)return pack([r`u_k=f(k),\quad k=1,2,3,\ldots`],[[r`u_k`,'Số hạng thứ k của dãy.'],[r`f(k)`,'Công thức số hạng tổng quát trong đề, thay n bằng k.'],[r`k`,'Chỉ số bắt đầu từ 1.']]);
 if(n===2)return gp;
 if(n===7||n===8)return threeAP;
 if(n===12)return pack([r`u_1=S_1,\quad u_n=S_n-S_{n-1}\quad(n\ge2)`],[...sequenceSymbols,sumSymbol]);
 if(n===13)return pack([r`d=\frac{b-a}{m+1},\qquad N=m+2`],[[r`a,b`,'Hai số ở đầu và cuối cấp số cộng.'],[r`m`,'Số lượng số cần xen giữa hai đầu.'],[r`N`,'Tổng số hạng sau khi xen.'],[r`d`,'Công sai; có m+1 khoảng giữa m+2 số hạng.']]);
 if(n===14)return pack([r`A+B+C=180^\circ`,r`A+C=2B\quad\text{khi ba góc theo thứ tự lập CSC}`],[[r`A,B,C`,'Số đo ba góc của tam giác theo đúng thứ tự cấp số cộng.']],'Mỗi góc phải dương và nhỏ hơn 180°.');
 if([9,10,11,27].includes(n))return apSum;
 if(n>=3&&n<=6)return ap;
 if([17,18,19,25].includes(n))return gpRatio;
 if(n===20)return threeGP;
 if(n===22)return pack([r`q=1\ \Longrightarrow\ u_n=u_1,\quad S_n=nu_1`],[...gpSymbols,sumSymbol]);
 if(n===24)return pack([r`q^{m+1}=\frac ba\quad(a\ne0),\qquad N=m+2`],[[r`a,b`,'Hai số đầu và cuối của cấp số nhân.'],[r`m`,'Số số hạng được xen giữa a và b.'],[r`N`,'Tổng số hạng sau khi xen.'],[r`q`,'Công bội; cần giữ đủ nghiệm thực, kể cả nghiệm âm.']]);
 if(n===26)return pack([r`S_{2n}=S_n(1+q^n)`,r`S_n=u_1(1+q+\cdots+q^{n-1})`],[...gpSymbols,sumSymbol]);
 if(n===21)return gpSum;
 if(n===28)return pack([r`A=A_0q^m,\quad m=\frac tT`],[[r`A_0,A`,'Số lượng ban đầu và số lượng sau thời gian t.'],[r`q`,'Hệ số nhân ở mỗi chu kì, ví dụ tăng gấp đôi thì q=2.'],[r`T,t`,'Thời gian một chu kì và tổng thời gian, phải cùng đơn vị.'],[r`m`,'Số chu kì hoàn chỉnh; trong bài này t/T là số nguyên.']]);
 if(n===29)return pack([r`x+z=2y\quad\text{(ba số lập CSC)}`,r`y^2=xz\quad\text{(ba số khác 0 lập CSN)}`],[[r`x,y,z`,'Ba số lấy theo đúng thứ tự của mỗi điều kiện trong đề.']],'Lập hai điều kiện cho hai bộ ba rồi giải chung; kiểm tra lại định nghĩa cấp số nhân.');
 if(n===30)return pack([r`u_{n+1}=au_n+b,\quad a\ne1`,r`v_n=u_n+\frac b{a-1}\ \Longrightarrow\ v_{n+1}=av_n`],[[r`u_n`,'Số hạng của dãy gốc.'],[r`a,b`,'Hệ số nhân và hằng số cộng trong công thức truy hồi.'],[r`v_n`,'Dãy phụ tạo thành cấp số nhân, sau đó đổi lại tổng của dãy gốc.'],[r`n`,'Chỉ số số hạng, bắt đầu từ 1.']]);
 return gp;
}
const groupedSymbols=[[r`N=\sum n_i`,'Tổng số quan sát, bằng tổng tần số.'],[r`n_i`,'Tần số của nhóm thứ i.'],[r`a_i,b_i`,'Đầu mút trái và phải của nhóm i.'],[r`c_i=\frac{a_i+b_i}2`,'Giá trị đại diện (trung điểm) của nhóm i.']];
function chapter3(q){
 const k=q.verification?.kind;
 if(k==='rawMean')return pack([r`\overline x=\frac1N\sum_{j=1}^N x_j`],[[r`N`,'Số giá trị trong mẫu số liệu thô.'],[r`x_j`,'Giá trị quan sát thứ j.'],[r`\overline x`,'Số trung bình của mẫu.']]);
 if(k==='rawQuantile')return pack([r`\operatorname{Me}=\begin{cases}x_{((N+1)/2)},&N\text{ lẻ},\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\text{ chẵn},\end{cases}`,r`Q_2=\operatorname{Me}`],[[r`x_{(j)}`,'Giá trị ở vị trí j sau khi sắp tăng dần.'],[r`N`,'Số giá trị của phần dữ liệu đang lấy trung vị.'],[r`Q_1,Q_3`,'Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử ban đầu lẻ.'],[r`Q_2,\operatorname{Me}`,'Trung vị của toàn mẫu.']]);
 if(k==='mean'||q.type==='Số trung bình')return pack([r`c_i=\frac{a_i+b_i}2,\quad\overline x\approx\frac{\sum n_ic_i}{N}`],[...groupedSymbols,[r`\overline x`,'Số trung bình ước lượng từ dữ liệu ghép nhóm.']]);
 if(k==='mode'||q.type==='Mốt')return pack([r`M_o=L+\frac{d_1}{d_1+d_2}h`,r`d_1=f-f_{\text{trước}},\quad d_2=f-f_{\text{sau}}`],[[r`M_o`,'Mốt ước lượng.'],[r`L,h`,'Đầu mút trái và độ rộng nhóm mốt.'],[r`f`,'Tần số nhóm mốt (nhóm có tần số lớn nhất).'],[r`f_{\text{trước}},f_{\text{sau}}`,'Tần số hai nhóm kề nhóm mốt.'],[r`d_1,d_2`,'Chênh lệch tần số của nhóm mốt với hai nhóm kề.']],'Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra d₁+d₂ khác 0.');
 if(k==='quantile'||['Trung vị','Tứ phân vị'].includes(q.type))return pack([r`Q_r=L+\frac{rN/4-F}{f}h,\quad r=1,2,3`],[[r`Q_r`,'Tứ phân vị thứ r; Q₂ chính là trung vị.'],[r`N`,'Tổng tần số của mẫu.'],[r`L,h`,'Đầu mút trái và độ rộng nhóm chứa vị trí rN/4.'],[r`F`,'Tần số tích lũy của các nhóm đứng trước nhóm nội suy.'],[r`f`,'Tần số của nhóm nội suy, phải lớn hơn 0.'],[r`r`,'Chọn r=1, 2 hoặc 3 theo Q₁, Q₂, Q₃ được hỏi.']]);
 if(/giá trị đại diện/i.test(q.prompt))return pack([r`c_i=\frac{a_i+b_i}2`],groupedSymbols.slice(2));
 return pack([r`n_i=\#\{x_j:a_i\le x_j<b_i\},\qquad N=\sum_i n_i`],[...groupedSymbols.slice(0,3),[r`x_j`,'Một giá trị quan sát; ký hiệu # là số phần tử của tập.']],'Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó.');
}
const planeSymbols=[[r`(P),(Q),(R)`,'Các mặt phẳng đang xét.'],[r`a,b,d`,'Các đường thẳng.'],[r`A,B,M`,'Các điểm; AB là đường thẳng qua hai điểm phân biệt A, B.']];
const intersectionGuide=pack([r`A,B\in(P)\cap(Q),\ A\ne B\ \Longrightarrow\ (P)\cap(Q)=AB`],planeSymbols,'Hai mặt phẳng phải phân biệt. Tìm đủ hai điểm chung rồi nối chúng.');
const linePlane=pack([r`a\not\subset(P),\quad a\parallel b,\quad b\subset(P)\ \Longrightarrow\ a\parallel(P)`],planeSymbols,'Phải kiểm tra điều kiện a không nằm trong (P); nếu bỏ điều kiện này thì kết luận chưa đủ.');
const middle=pack([r`M\text{ là trung điểm }AB,\ N\text{ là trung điểm }AC\ \Longrightarrow\ MN\parallel BC`,r`MN=\frac12BC`],[[r`A,B,C`,'Ba đỉnh của một tam giác không suy biến.'],[r`M,N`,'Trung điểm hai cạnh cùng xuất phát từ A.'],[r`AB,AC,BC,MN`,'Độ dài các đoạn tương ứng khi xuất hiện trong đẳng thức số đo.']]);
const centroids=pack([r`\frac{IG}{IC}=\frac{IH}{ID}=\frac13\ \Longrightarrow\ GH\parallel CD,\quad GH=\frac13CD`],[[r`I`,'Trung điểm cạnh chung của hai tam giác.'],[r`G,H`,'Hai trọng tâm.'],[r`C,D`,'Hai đỉnh đối diện cạnh chung.']],'Lấy các tỉ số tính từ I trên hai trung tuyến, không lấy từ đỉnh đối diện.');
const parallelPlanes=pack([r`a,b\subset(P),\ a\cap b=\{M\},\ a\parallel(Q),\ b\parallel(Q)\ \Longrightarrow\ (P)\parallel(Q)`],planeSymbols,'Hai đường a, b trong (P) phải cắt nhau.');
const projection=pack([r`M\in d_M,\quad M'=d_M\cap(P)`,r`d_M\text{ có phương }\Delta`],[[r`M,M'`,'Điểm gốc và ảnh của điểm qua phép chiếu.'],[r`(P)`,'Mặt phẳng chiếu.'],[r`\Delta`,'Phương chiếu, phải cắt mặt phẳng chiếu.'],[r`d_M`,'Đường qua M theo phương chiếu; có thể song song hoặc trùng Δ.']],'Nếu M thuộc mặt phẳng chiếu thì M′=M.');
function chapter4(q){
 const n=Number(q.id.split('-')[3]);
 if(n===1||n===2||n===3)return pack([r`A,B\in(P),\ A\ne B\ \Longrightarrow\ AB\subset(P)`,r`A,B,C\text{ không thẳng hàng}\ \Longrightarrow\ \exists!(P)\supset\{A,B,C\}`],[[r`A,B,C`,'Các điểm.'],[r`(P)`,'Mặt phẳng chứa các điểm.'],[r`\exists!`,'Có một và chỉ một.']],'Ba điểm thẳng hàng không xác định duy nhất một mặt phẳng.');
 if(n===4)return pack([r`\text{Số cạnh tứ diện}=\binom42`],[[r`\binom42`,'Số cách chọn một cặp trong bốn đỉnh; mỗi cặp tạo một cạnh.']]);
 if([5,6,7,43].includes(n))return intersectionGuide;
 if(n===8||n===12||n===20||n===21)return middle;
 if(n===13||n===23)return centroids;
 if(n===9||n===10||n===41)return pack([r`a\cap b=\varnothing\ \Longrightarrow\ a\parallel b\text{ hoặc }a,b\text{ chéo nhau}`],[[r`a,b`,'Hai đường thẳng phân biệt.'],[r`\varnothing`,'Tập rỗng, nghĩa là hai đường không có điểm chung.']],'Muốn kết luận song song, phải có thêm điều kiện đồng phẳng.');
 if(n===11)return pack([r`M\notin d\ \Longrightarrow\ \exists!a:\ M\in a,\ a\parallel d`],planeSymbols);
 if(n===14||n===42||n===46)return pack([r`a\subset(P),\ b\subset(Q),\ a\parallel b,\ d=(P)\cap(Q)`,r`d\parallel a\quad\text{hoặc }d=a`],planeSymbols,'Hai mặt phẳng phân biệt, cắt nhau. Dùng thêm điểm chung để xác định đường d.');
 if(n===15)return pack([r`a=(P)\cap(Q),\ b=(Q)\cap(R),\ c=(R)\cap(P)`,r`a,b,c\text{ đồng quy hoặc đôi một song song}`],planeSymbols,'Ba mặt phẳng phân biệt; ba giao tuyến phải phân biệt.');
 if(n===16)return pack([r`X\text{ là trung điểm }MN\text{ và }PQ`],[[r`M,N,P,Q`,'Trung điểm bốn cạnh thuộc hai cặp cạnh đối của tứ diện.'],[r`X`,'Trọng tâm tứ diện: giao điểm các đoạn nối trung điểm hai cạnh đối.']]);
 if(n===17)return pack([r`d\parallel(P)\ \Longleftrightarrow\ d\cap(P)=\varnothing`],planeSymbols,'Đường nằm trong (P) là vị trí khác, không gọi là song song với (P).');
 if(n===18||n===19)return linePlane;
 if(n===24)return pack([r`d\parallel(P),\ d\subset(Q),\ (P)\cap(Q)=\ell\ \Longrightarrow\ \ell\parallel d`],[...planeSymbols,[r`\ell`,'Giao tuyến của mặt cắt với một mặt của tứ diện.']],'Dựng lần lượt các giao tuyến theo hai phương AC và BD.');
 if(n===22)return pack([r`a\parallel(P),\quad a\subset(Q),\quad(P)\cap(Q)=b\ \Longrightarrow\ a\parallel b`],planeSymbols);
 if(n===25||n===30||n===45)return parallelPlanes;
 if(n===26)return pack([r`M\notin(P)\ \Longrightarrow\ \exists!(Q):M\in(Q),\ (Q)\parallel(P)`],planeSymbols);
 if(n===27||n===31)return pack([r`(P)\parallel(Q),\quad a=(R)\cap(P),\quad b=(R)\cap(Q)\ \Longrightarrow\ a\parallel b`],planeSymbols);
 if(n===28)return pack([r`\frac{AB}{BC}=\frac{A'B'}{B'C'}`],[[r`A,B,C`,'Giao điểm của cát tuyến thứ nhất với ba mặt phẳng đôi một song song, theo thứ tự.'],[r`A',B',C'`,'Các giao điểm tương ứng trên cát tuyến thứ hai.']],'Ghép đúng các đoạn tương ứng theo định lí Thalès trong không gian.');
 if(n===29)return pack([r`AA'\parallel BB'\parallel CC',\quad AA'=BB'=CC'`],[[r`AA',BB',CC'`,'Các cạnh bên của lăng trụ.']],'Mặt bên nói chung là hình bình hành; chỉ lăng trụ đứng mới có mặt bên là hình chữ nhật.');
 if(n===32)return pack([r`k=\frac{SM}{SA},\qquad\frac{S_{\text{cắt}}}{S_{\text{đáy}}}=k^2`],[[r`S`,'Đỉnh hình chóp trong các đoạn SM, SA.'],[r`M,A`,'M trên cạnh bên SA.'],[r`k`,'Tỉ số độ dài tính từ đỉnh đến thiết diện và đến đáy.'],[r`S_{\text{cắt}},S_{\text{đáy}}`,'Diện tích thiết diện và diện tích đáy.']],'Thiết diện phải song song đáy.');
 if(n===35)return pack([r`\frac{A'M'}{M'B'}=\frac{AM}{MB}`],[[r`A,B,M`,'Ba điểm thẳng hàng, M ở giữa A và B.'],[r`A',B',M'`,'Các ảnh tương ứng qua cùng một phép chiếu song song.']],'A′ và B′ phải phân biệt để tỉ số ảnh xác định.');
 if(n===36||n===40)return pack([r`AB\parallel CD\ \Longrightarrow\ A'B'\parallel C'D'\text{ hoặc trùng nhau}`],[[r`A,B,C,D`,'Các điểm của hình gốc.'],[r`A',B',C',D'`,'Các ảnh tương ứng.']],'Giả sử các đoạn không bị thu về điểm. Phép chiếu không bảo toàn góc hay độ dài theo hai phương bất kì.');
 if(n===39)return pack([r`a\cap b=\{M\}\ \Longrightarrow\ M'\in a'\cap b'`],[[r`a,b`,'Hai đường gốc; a′, b′ là ảnh đường thẳng của chúng.'],[r`M,M'`,'Giao điểm và ảnh của giao điểm.']],'Nếu hai ảnh song song phân biệt, hai đường gốc không thể cắt nhau.');
 if(n===47)return pack([r`MN\parallel AB,\quad MP\parallel AC`,r`(MNP)\parallel(ABC)`],[[r`M,N,P`,'Trung điểm của AA′, BB′, CC′ trong lăng trụ.'],[r`A,B,C`,'Ba đỉnh đáy.']],'Dùng tính chất đoạn nối trung điểm trong các mặt bên hình bình hành.');
 if(n===48)return pack([r`\frac{SM}{MA}\cdot\frac{AJ}{JI}\cdot\frac{IG}{GS}=1`],[[r`S,A,I`,'Ba đỉnh của tam giác phụ đang xét.'],[r`M,G,J`,'Ba điểm trên các đường SA, SI, AI; J nằm trên phần kéo dài qua I.']],'Đây là dạng độ dài của Menelaus với một điểm trên phần kéo dài.');
 return projection;
}

function sampleGuide(q){
 const [subject,grade,,item]=q.id.split('-'),n=Number(item);
 if(subject==='toan'&&grade==='10')return n===1?pack([r`P\lor\neg P`],[[r`P`,'Một mệnh đề: câu khẳng định có giá trị đúng hoặc sai xác định.'],[r`\neg P`,'Phủ định của P.'],[r`\lor`,'Phép hoặc; trong hai mệnh đề P và phủ định P, luôn có một mệnh đề đúng.']]):n===2?pack([r`A\cap B=\{x:x\in A\text{ và }x\in B\}`],[[r`A,B`,'Hai tập hợp.'],[r`x`,'Phần tử cần kiểm tra có thuộc cả hai tập hợp hay không.']]):pack([r`\neg(\forall x,P(x))\ \Longleftrightarrow\ \exists x,\neg P(x)`],[[r`P(x)`,'Mệnh đề theo biến x.'],[r`\neg`,'Phủ định; ∀ là với mọi, ∃ là tồn tại.']]);
 if(subject==='toan')return pack([r`(x^n)'=nx^{n-1}`,r`f'(x)>0\Rightarrow f\text{ đồng biến},\quad f'(x)<0\Rightarrow f\text{ nghịch biến}`],[[r`f',x,n`,'Đạo hàm của f, biến số x và số mũ n.']],'Xét dấu trên từng khoảng; cực trị cần kiểm tra đổi dấu đạo hàm.');
 if(subject==='ly'&&grade==='10')return n===1?pack([r`[l]_{\rm SI}=\mathrm m`],[[r`l`,'Độ dài cần đo.'],[r`\mathrm m`,'Mét, đơn vị cơ bản của độ dài trong hệ SI.']]):n===2?pack([r`D=2R`],[[r`D`,'Đường kính ngoài của viên bi, đại lượng cần đo.'],[r`R`,'Bán kính viên bi, cùng đơn vị với D.']],'Chọn dụng cụ đo được đường kính ngoài nhỏ với độ chia phù hợp.'):pack([r`\overline l=\frac{l_1+\cdots+l_N}{N}`],[[r`l_i`,'Kết quả đo độ dài ở lần thứ i.'],[r`N`,'Số lần đo.'],[r`\overline l`,'Độ dài trung bình, cùng đơn vị với các kết quả đo.']]);
 if(subject==='ly'&&grade==='11')return pack([r`f=\frac1T,\quad\omega=\frac{2\pi}T`,r`x=A\cos(\omega t+\varphi),\quad v_{\max}=\omega A`],[[r`f,T`,'Tần số (Hz) và chu kì (s).'],[r`\omega`,'Tần số góc, đơn vị rad/s.'],[r`x,A`,'Li độ và biên độ, cùng đơn vị độ dài.'],[r`t,\varphi`,'Thời gian và pha ban đầu.'],[r`v_{\max}`,'Tốc độ lớn nhất, đạt ở vị trí cân bằng.']]);
 if(subject==='ly')return pack([r`T=t+273{,}15`,r`U=E_{\text{động}}+E_{\text{thế}}`],[[r`T,t`,'Nhiệt độ theo kelvin và theo độ Celsius.'],[r`U`,'Nội năng.'],[r`E_{\text{động}},E_{\text{thế}}`,'Động năng chuyển động nhiệt và thế năng tương tác của các phân tử.']]);
 if(subject==='hoa'&&grade==='10')return n===1?pack([r`q_e=-e,\quad q_p=+e,\quad q_n=0`],[[r`q_e,q_p,q_n`,'Điện tích của electron, proton và neutron.'],[r`e>0`,'Độ lớn điện tích nguyên tố.']]):pack([r`A=Z+N,\quad n_e=Z\quad\text{(nguyên tử trung hòa)}`],[[r`A`,'Số khối.'],[r`Z,N`,'Số proton và số neutron.'],[r`n_e`,'Số electron; electron mang điện âm.']]);
 if(subject==='hoa'&&grade==='11')return pack([r`v_{\text{thuận}}=v_{\text{nghịch}}\quad\text{ở cân bằng}`,r`K_c=\frac{[\mathrm{NH}_3]^2}{[\mathrm{N}_2][\mathrm{H}_2]^3}`],[[r`v`,'Tốc độ phản ứng theo từng chiều.'],[r`K_c`,'Hằng số cân bằng nồng độ của phản ứng N₂+3H₂⇌2NH₃.'],[r`[X]`,'Nồng độ mol của chất X ở trạng thái cân bằng.']],'Chất xúc tác giúp đạt cân bằng nhanh hơn nhưng không làm đổi vị trí cân bằng.');
 if(subject==='hoa')return pack([r`\mathrm{RCOOR'}+\mathrm{NaOH}\longrightarrow\mathrm{RCOONa}+\mathrm{R'OH}`],[[r`\mathrm{RCOOR'}`,'Ester đơn chức; R, R′ là các gốc hữu cơ phù hợp.'],[r`\mathrm{RCOONa},\mathrm{R'OH}`,'Muối carboxylate và alcohol tạo thành khi xà phòng hóa.']],'Chất béo là triester của glycerol với các acid béo.');
 throw Error('Thiếu công thức: '+q.id);
}
export function getStudyGuide(q){
 if(q.id.startsWith('toan-11-1-'))return chapter1(q);
 if(q.id.startsWith('toan-11-2-'))return chapter2(q);
 if(q.id.startsWith('toan-11-3-'))return chapter3(q);
 if(q.id.startsWith('toan-11-4-'))return chapter4(q);
 return sampleGuide(q);
}
