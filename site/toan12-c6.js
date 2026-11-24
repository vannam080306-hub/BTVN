const questions = [];
const r = String.raw;

const math = (text) => text.replace(/\$([^$\n]+)\$/g, (_, tex) => '\\(' + tex + '\\)');
const figure = (file, alt) => ({folder: 'toan12-c6', file: file + '.webp', alt});

function question(number, page, type, kind, prompt, explanation, fields) {
  questions.push({
    id: 'toan-12-6-pdf-' + number,
    sourcePage: page,
    type,
    kind,
    prompt: math(prompt),
    explanation: math(explanation),
    difficulty: '',
    nativeLatex: true,
    originalSolution: true,
    hint: 'Lời giải',
    ...fields,
  });
}

function choice(number, prompt, options, correct, explanation) {
  question(number, 1, 'Trắc nghiệm', 'choice', prompt, explanation, {
    options: options.split('~').map(math),
    answer: 'ABCD'.indexOf(correct),
  });
}

function truth(number, page, prompt, statements, correct, explanation, figures) {
  const answer = Array.from(correct, (mark) => mark === '1' ? 'Đúng' : 'Sai');
  question(number, page, 'Đúng / Sai', 'true-false', prompt, explanation, {
    statements: statements.split('\n').map(math),
    answer,
    answerText: answer.map((mark, index) => 'abcd'[index] + ') ' + mark).join(', '),
    ...figures,
  });
}

function short(number, page, prompt, value, explanation, figures) {
  question(number, page, 'Trả lời ngắn', 'short', prompt, explanation, {
    value,
    answerText: String(value).replace('.', ','),
    tolerance: 0.000051,
    ...figures,
  });
}

choice(1, r`Cho $P(A), P(B)>0$. Công thức xác suất có điều kiện của biến cố $A$ khi biết biến cố $B$ đã xảy ra là`, r`$P(A\mid B)=\frac{P(AB)}{P(A)}$.~$P(A\mid B)=\frac{P(B)}{P(A)}$.~$P(A\mid B)=\frac{P(AB)}{P(B)}$.~$P(A\mid B)=\frac{P(A)}{P(B)}$.`, 'C', r`Theo định nghĩa xác suất có điều kiện: $P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(AB)}{P(B)}$.`);

choice(2, r`Cho hai biến cố $A,B$ với $0<P(B)<1$. Phát biểu nào sau đây là đúng?`, r`$P(A)=P(\overline B)\cdot P(A\mid B)+P(B)\cdot P(A\mid\overline B)$.~$P(A)=P(B)\cdot P(A\mid B)-P(\overline B)\cdot P(A\mid\overline B)$.~$P(A)=P(\overline B)\cdot P(A\mid\overline B)-P(B)\cdot P(A\mid B)$.~$P(A)=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B)$.`, 'D', r`Theo công thức xác suất đầy đủ với hệ đầy đủ $\{B,\overline B\}$, ta có:
\[P(A)=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B).\]`);

choice(3, r`Cho $A,B$ là hai biến cố của một phép thử. Biết $P(A)=0{,}8$; $P(B)=0{,}6$; $P(A\mid B)=0{,}72$. Hãy tính $P(B\mid A)$.`, r`$0{,}54$.~$0{,}46$.~$0{,}6$.~$0{,}48$.`, 'A', r`Ta có $P(A\cap B)=P(B)\cdot P(A\mid B)=0{,}6\cdot 0{,}72=0{,}432$.
Xác suất có điều kiện: $P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}432}{0{,}8}=0{,}54$.`);

choice(4, r`Cho hai biến cố $A,B$ với $P(B)=0{,}7$; $P(A\mid B)=0{,}6$ và $P(A\mid\overline B)=0{,}4$. Khi đó $P(A)$ bằng:`, r`$0{,}5$.~$0{,}54$.~$0{,}46$.~$0{,}3$.`, 'B', r`Ta có $P(\overline B)=1-P(B)=1-0{,}7=0{,}3$.
Áp dụng công thức xác suất đầy đủ:
\[P(A)=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B)=0{,}7\cdot0{,}6+0{,}3\cdot0{,}4=0{,}42+0{,}12=0{,}54.\]`);

choice(5, r`Cho hai biến cố $A,B$ có $P(A)=0{,}6$; $P(B)=0{,}8$; $P(AB)=0{,}48$. Tính $P(\overline B\mid A)$.`, r`$0{,}48$.~$0{,}6$.~$0{,}75$.~$0{,}2$.`, 'D', r`Ta có $P(A\cap\overline B)=P(A)-P(AB)=0{,}6-0{,}48=0{,}12$.
Xác suất có điều kiện: $P(\overline B\mid A)=\frac{P(A\cap\overline B)}{P(A)}=\frac{0{,}12}{0{,}6}=0{,}2$.`);

truth(6, 2, r`Trước khi đưa một loại sản phẩm ra thị trường, người ta đã phỏng vấn ngẫu nhiên 200 khách hàng về sản phẩm đó. Kết quả thống kê như sau: có 105 người trả lời “sẽ mua”; có 95 người trả lời “không mua”. Kinh nghiệm cho thấy tỉ lệ khách hàng thực sự sẽ mua sản phẩm tương ứng với những cách trả lời “sẽ mua” và “không mua” lần lượt là 70% và 30%. Gọi $A$ là biến cố “Người được phỏng vấn thực sự sẽ mua sản phẩm”. Gọi $B$ là biến cố “Người được phỏng vấn trả lời sẽ mua sản phẩm”.`, r`Xác suất $P(B)=\frac{21}{40}$ và $P(\overline B)=\frac{19}{40}$.
Xác suất có điều kiện $P(A\mid B)=0{,}3$.
Xác suất $P(A)=0{,}51$.
Trong số những người được phỏng vấn thực sự sẽ mua sản phẩm có 70% người đã trả lời “sẽ mua” khi được phỏng vấn (kết quả tính theo phần trăm được làm tròn đến hàng đơn vị).`, '1010', r`a) Đúng. Ta có số người trả lời “sẽ mua” là 105, tổng số khách hàng là 200.
Xác suất $P(B)=\frac{105}{200}=\frac{21}{40}$.
Xác suất $P(\overline B)=1-P(B)=1-\frac{21}{40}=\frac{19}{40}$.
b) Sai. Theo giả thiết, tỉ lệ khách hàng thực sự mua trong số những người trả lời “sẽ mua” là 70%. Do đó $P(A\mid B)=0{,}7$.
c) Đúng. Áp dụng công thức xác suất đầy đủ:
\[P(A)=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B).\]
\[P(A)=\frac{105}{200}\cdot0{,}7+\frac{95}{200}\cdot0{,}3=\frac{0{,}7\cdot105+0{,}3\cdot95}{200}=\frac{102}{200}=0{,}51.\]
d) Sai. Số người thực sự mua là $0{,}7\cdot105+0{,}3\cdot95=102$ (người).
Trong số 102 người thực sự mua này, số người đã trả lời “sẽ mua” là $0{,}7\cdot105=73{,}5$ (người).
Tỉ lệ cần tìm là $\frac{73{,}5}{102}\cdot100\%\approx72\%$.`);

truth(7, 2, r`Một phần mềm nhận dạng tin nhắn quảng cáo trên điện thoại bằng cách dựa theo từ khóa để đánh dấu một số tin nhắn được gửi đến. Qua một thời gian dài sử dụng, người ta thấy rằng trong số tất cả tin nhắn gửi đến, có 20% số tin nhắn bị đánh dấu. Trong số các tin nhắn bị đánh dấu, có 10% số tin nhắn không phải quảng cáo. Trong các tin nhắn không bị đánh dấu, có 10% số tin nhắn là quảng cáo. Chọn ngẫu nhiên một tin nhắn được gửi đến điện thoại.`, r`Xác suất để tin nhắn đó không bị đánh dấu là $0{,}8$.
Xác suất để tin nhắn đó không phải là quảng cáo, biết rằng nó không bị đánh dấu, bằng $0{,}95$.
Xác suất để tin nhắn đó không phải là quảng cáo bằng $0{,}76$.
Xác suất để tin nhắn đó không bị đánh dấu, biết rằng nó không phải là quảng cáo, nhỏ hơn $0{,}95$.`, '1000', r`Gọi $A$ là biến cố “tin nhắn được chọn bị đánh dấu”.
$\Rightarrow\overline A$ là biến cố “tin nhắn được chọn không bị đánh dấu”.
$B$ là biến cố “tin nhắn được chọn là tin nhắn quảng cáo”.
$\Rightarrow\overline B$ là biến cố “tin nhắn được chọn không phải là tin nhắn quảng cáo”.
Theo giả thiết ta có: $P(A)=0{,}2$; $P(\overline B\mid A)=0{,}1$; $P(B\mid\overline A)=0{,}1$. Ta có sơ đồ cây như hình.
a) Đúng. Ta có $P(A)=0{,}2\Rightarrow P(\overline A)=1-P(A)=0{,}8$.
b) Sai. Xác suất để tin nhắn không là quảng cáo khi biết không bị đánh dấu là
\[P(\overline B\mid\overline A)=1-P(B\mid\overline A)=1-0{,}1=0{,}9\ne0{,}95.\]
c) Sai. Xác suất để tin nhắn không phải là quảng cáo là:
\[P(\overline B)=P(\overline A)\cdot P(\overline B\mid\overline A)+P(A)\cdot P(\overline B\mid A)=0{,}8\cdot0{,}9+0{,}2\cdot0{,}1=0{,}72+0{,}02=0{,}74\ne0{,}76.\]
d) Sai. Xác suất để tin nhắn không bị đánh dấu, biết rằng nó không phải là quảng cáo là:
\[P(\overline A\mid\overline B)=\frac{P(\overline A\cap\overline B)}{P(\overline B)}=\frac{0{,}8\cdot0{,}9}{0{,}74}=\frac{0{,}72}{0{,}74}\approx0{,}973.\]
Vì $0{,}973>0{,}95$ nên phát biểu này sai.`, {solutionDiagram: figure('7-solfig', 'Sơ đồ cây phân loại tin nhắn')});

truth(8, 3, r`Chọn 6 số phân biệt từ tập hợp $X=\{1;2;3;4;5;6;7;8;9\}$ để xếp vào 6 ô hình tròn tại các đỉnh $(A;B;C)$ và các trung điểm $(M;N;P)$ của một tam giác như hình vẽ. Gọi $\Omega$ là tập hợp tất cả các cách xếp sao cho 3 số trên mỗi cạnh của tam giác luôn lập thành một cấp số cộng. Chọn ngẫu nhiên một cách sắp xếp từ tập $\Omega$.`, r`$n(\Omega)=48$.
Xác suất để ba số ở các đỉnh $(A;B;C)$ đều là số chẵn bằng $0{,}25$.
Xác suất để chữ số 5 nằm ở vị trí trung điểm bằng $0{,}65$.
Biết rằng ba số ở các đỉnh đều là số lẻ thì xác suất để chữ số 7 có mặt trong cách sắp xếp đó bằng $0{,}83$ (kết quả làm tròn đến hàng phần trăm).`, '1101', r`Để ba số trên mỗi cạnh $AB,BC,AC$ lập thành một cấp số cộng thì các số ở đỉnh và trung điểm phải thỏa mãn: $A+B=2P$; $B+C=2M$; $A+C=2N$.
Điều này kéo theo $A,B,C$ phải có cùng tính chẵn lẻ.

- Trường hợp 1: $A,B,C$ là các số chẵn phân biệt từ tập $\{2;4;6;8\}$. Xét các tập con 3 phần tử $\{A,B,C\}$ sao cho các trung điểm $P,M,N$ là các số nguyên phân biệt trong $X$ và khác với các đỉnh:
$\{2,4,8\}\Rightarrow\{P,M,N\}=\{3,6,5\}$ (thỏa mãn). Có $3!=6$ cách xếp. $\{2,6,8\}\Rightarrow\{P,M,N\}=\{4,7,5\}$ (thỏa mãn). Có $3!=6$ cách xếp. Số cách xếp ở TH1 là $6+6=12$.

- Trường hợp 2: $A,B,C$ là các số lẻ phân biệt từ tập $\{1;3;5;7;9\}$. Các tập con $\{A,B,C\}$ thỏa mãn điều kiện bài toán là:
$\{1,3,7\}\to\{P,M,N\}=\{2,5,4\}$ (6 cách);
$\{1,3,9\}\to\{P,M,N\}=\{2,6,5\}$ (6 cách);
$\{1,5,7\}\to\{P,M,N\}=\{3,6,4\}$ (6 cách);
$\{1,7,9\}\to\{P,M,N\}=\{4,8,5\}$ (6 cách);
$\{3,5,9\}\to\{P,M,N\}=\{4,7,6\}$ (6 cách);
$\{3,7,9\}\to\{P,M,N\}=\{5,8,6\}$ (6 cách). Số cách xếp ở TH2 là $6\times6=36$.

a) Đúng.
Tổng số cách xếp là $n(\Omega)=12+36=48$.
b) Đúng.
Số cách xếp mà các đỉnh là số chẵn là 12. Xác suất là $P=\frac{12}{48}=0{,}25$.
c) Sai.
Số các cách xếp có chữ số 5 nằm ở vị trí trung điểm:
- Ở TH1: Cả 2 tập đều có số 5 ở trung điểm, số cách là 12.
- Ở TH2: Các tập có số 5 ở trung điểm là $\{1,3,7\},\{1,3,9\},\{1,7,9\},\{3,7,9\}$. Số cách là $4\times6=24$. Xác suất là $P=\frac{12+24}{48}=\frac{36}{48}=0{,}75\ne0{,}65$.
d) Đúng.
Khi $A,B,C$ là số lẻ, không gian mẫu có 36 phần tử.
Trong các tập ở TH2, chỉ có tập $\{1,3,9\}$ (với các trung điểm $\{2,6,5\}$) là không chứa số 7.
Số cách xếp chứa số 7 là $36-6=30$. Xác suất là $P=\frac{30}{36}=\frac56\approx0{,}83$.`, {diagram: figure('8-fig', 'Tam giác ABC với ba trung điểm M, N, P')});


truth(9, 4, r`Người ta nhận thấy rằng xác suất để kinh tế thế giới phát triển là 60%. Trong trường hợp này, xác suất sinh lời khi đầu tư vào bất động sản là 80% và đầu tư vào vàng là 30%. Xác suất để kinh tế thế giới suy thoái là 40%. Khi đó, xác suất sinh lời khi đầu tư vào bất động sản là 10% và đầu tư vào việc mua vàng là 70%.`, r`Nếu biết một người đầu tư bất động sản không sinh lời thì xác suất kinh tế suy thoái vượt quá $0{,}4$.
Một nhà đầu tư chọn ngẫu nhiên một trong hai hình thức là bất động sản hoặc vàng thì xác suất để sinh lời trong trường hợp này lớn hơn $0{,}5$.
Nếu biết nhà đầu tư sinh lời thì xác suất kinh tế đang phát triển là lớn hơn $0{,}5$.
Giả định độc lập trong cùng điều kiện kinh tế, một nhà đầu tư có lợi nhuận ở cả hai kênh bất động sản và vàng trong cùng một năm. Anh ta tin rằng điều này chắc chắn chứng tỏ kinh tế đang phát triển.`, '1010', r`Gọi $E$ là biến cố “Kinh tế thế giới phát triển”, $\overline E$ là biến cố “Kinh tế thế giới suy thoái”.
Ta có: $P(E)=0{,}6$; $P(\overline E)=0{,}4$.
Gọi $B$ là biến cố “Đầu tư bất động sản sinh lời”, $V$ là biến cố “Đầu tư vào vàng sinh lời”.
Theo đề bài: $P(B\mid E)=0{,}8$; $P(V\mid E)=0{,}3$; $P(B\mid\overline E)=0{,}1$; $P(V\mid\overline E)=0{,}7$.

a) Đúng.
Xác suất đầu tư bất động sản không sinh lời là:
\[P(\overline B)=P(\overline B\mid E)\cdot P(E)+P(\overline B\mid\overline E)\cdot P(\overline E)=(1-0{,}8)\cdot0{,}6+(1-0{,}1)\cdot0{,}4=0{,}12+0{,}36=0{,}48.\]
Xác suất kinh tế suy thoái khi biết bất động sản không sinh lời là:
\[P(\overline E\mid\overline B)=\frac{P(\overline B\mid\overline E)\cdot P(\overline E)}{P(\overline B)}=\frac{0{,}9\cdot0{,}4}{0{,}48}=0{,}75.\]
Vì $0{,}75>0{,}4$ nên khẳng định này đúng.

b) Sai.
Xác suất sinh lời khi chọn ngẫu nhiên bất động sản hoặc vàng ($P(H_1)=P(H_2)=0{,}5$) là:
\[P(L)=0{,}5\cdot P(B)+0{,}5\cdot P(V).\]
Trong đó: $P(B)=0{,}8\cdot0{,}6+0{,}1\cdot0{,}4=0{,}52$ và $P(V)=0{,}3\cdot0{,}6+0{,}7\cdot0{,}4=0{,}46$.
\[\Rightarrow P(L)=0{,}5\cdot0{,}52+0{,}5\cdot0{,}46=0{,}49.\]
Vì $0{,}49<0{,}5$ nên khẳng định này sai.

c) Đúng.
Dựa trên kết quả câu b, xác suất kinh tế phát triển khi nhà đầu tư sinh lời là:
\[P(E\mid L)=\frac{P(L\mid E)\cdot P(E)}{P(L)}=\frac{(0{,}5\cdot0{,}8+0{,}5\cdot0{,}3)\cdot0{,}6}{0{,}49}=\frac{0{,}33}{0{,}49}\approx0{,}673.\]
Vì $0{,}673>0{,}5$ nên khẳng định này đúng.

d) Sai.
Xác suất kinh tế phát triển khi sinh lời ở cả hai kênh là:
\[P(E\mid B\cap V)=\frac{P(B\cap V\mid E)\cdot P(E)}{P(B\cap V)}=\frac{0{,}8\cdot0{,}3\cdot0{,}6}{0{,}8\cdot0{,}3\cdot0{,}6+0{,}1\cdot0{,}7\cdot0{,}4}=\frac{0{,}144}{0{,}172}\approx0{,}837.\]
Vì xác suất này không bằng 1 nên không thể nói là “chắc chắn”.`);

truth(10, 5, r`Hưng có một đồng xu không cân đối, mà khả năng xuất hiện mặt sấp là 60% và một con xúc xắc không cân đối, mà khả năng xuất hiện mặt 1 chấm nhiều gấp đôi so với các mặt còn lại. Hưng gieo đồng xu và quan sát mặt xuất hiện. Nếu mặt xuất hiện là mặt sấp thì Hưng gieo con xúc xắc 2 lần liên tiếp. Nếu mặt xuất hiện là mặt ngửa thì Hưng gieo con xúc xắc 1 lần.
Các mệnh đề sau đây đúng hay sai?`, r`Xác suất của biến cố “Con xúc xắc xuất hiện mặt 1 chấm” là $\frac27$.
Biết rằng Hưng gieo đồng xu ra mặt sấp, xác suất để Hưng gieo con xúc xắc xuất hiện mặt 1 chấm bằng $\frac{24}{49}$.
Xác suất để Hưng tung con xúc xắc có mặt 1 chấm bằng 42% (làm tròn đến hàng đơn vị).
Biết rằng Hưng gieo xúc xắc xuất hiện mặt 1 chấm. Khi đó, xác suất của biến cố “Đồng xu xuất hiện mặt sấp” là 28%.`, '1100', r`a) Gọi xác suất đổ trúng mặt 1 chấm là $2p$, suy ra xác suất đổ được các mặt còn lại là $p$.
Ta có: $2p+5p=1\Rightarrow p=\frac17\Rightarrow2p=\frac27$.
Suy ra xác suất ra mặt 1 chấm là $\frac27$.
Khẳng định a) ĐÚNG.

b) Gọi $A$ là biến cố “Đồng xu ra sấp” và $B$ là biến cố “Gieo xúc xắc xuất hiện mặt 1 chấm”.
$P(A)=0{,}6$ và $P(B)=\frac27$.
Biết rằng Hưng gieo đồng xu ra mặt sấp, thì xác suất để Hưng gieo con xúc xắc xuất hiện mặt 1 chấm là xác suất để ít nhất 1 trong 2 lần gieo ra mặt 1 chấm:
\[P(B\mid A)=1-P(\overline B)^2=1-\left(\frac57\right)^2=\frac{24}{49}.\]
Khẳng định b) ĐÚNG.

c) Gọi biến cố “Hưng tung xúc xắc có mặt 1 chấm” là $P(X)$.
Xác suất Hưng tung xúc xắc có mặt 1 chấm khi tung được mặt sấp đồng xu là:
\[P(AB)=P(A)\cdot P(B\mid A)=0{,}6\cdot\frac{24}{49}=\frac{72}{245}.\]
Khi tung được mặt ngửa là:
\[P(\overline AB)=P(\overline A)\cdot P(B\mid\overline A)=0{,}4\cdot\frac27=\frac4{35}.\]
Vậy xác suất Hưng tung được mặt 1 chấm là:
\[P(C)=P(\overline AB)+P(AB)=\frac{72}{245}+\frac4{35}=\frac{20}{49}\approx41\%.\]
Khẳng định c) SAI.

d) Ta có:
\[P(A\mid C)=\frac{P(C\mid A)\cdot P(A)}{P(C)}=\frac{\frac{24}{49}\cdot0{,}6}{\frac{20}{49}}=0{,}72.\]
Khẳng định d) SAI.`);

truth(11, 6, r`Một người có 5 con gà mái, 2 con gà trống nhốt chung trong một cái lồng. Một người đến mua, người bán gà bắt ngẫu nhiên 1 con. Người mua chấp nhận mua con gà đó, người bán gà quên mất rằng con gà bán cho người thứ nhất là gà trống hay gà mái.
Các mệnh đề sau đây đúng hay sai?`, r`Xác suất để người thứ nhất mua được con gà mái là $\frac57$.
Người thứ hai lại đến mua gà, người bán gà lại bắt ngẫu nhiên ra 1 con, xác suất để người thứ hai mua được con gà trống khi người thứ nhất mua được một con gà mái là $\frac13$.
Xác suất để người thứ hai mua được gà trống bằng $\frac37$.
Biết người thứ hai mua được gà trống, xác suất con gà mà người thứ nhất mua cũng là gà trống là $\frac16$.`, '1101', r`a) Đúng.
Số gà trong lồng ban đầu là $5+2=7$ con.
Xác suất để người thứ nhất mua được con gà mái là $P(B)=\frac57$.

b) Đúng.
Nếu người thứ nhất mua được một con gà mái, trong lồng còn lại 4 gà mái và 2 gà trống (tổng 6 con).
Xác suất để người thứ hai mua được con gà trống khi đó là $P(A\mid B)=\frac26=\frac13$.

c) Sai.
Gọi $A$ là biến cố “Người thứ hai mua được gà trống”.
Gọi $B$ là biến cố “Người thứ nhất mua được gà mái”.
Khi đó $\overline B$ là biến cố “Người thứ nhất mua được gà trống”.
Ta có: $P(B)=\frac57$; $P(\overline B)=\frac27$.
Nếu người thứ nhất mua gà trống ($\overline B$), trong lồng còn 5 gà mái và 1 gà trống. Khi đó $P(A\mid\overline B)=\frac16$.
Ta có sơ đồ cây như hình.
Áp dụng công thức xác suất toàn phần, ta có:
\[P(A)=P(B)P(A\mid B)+P(\overline B)P(A\mid\overline B)=\frac57\cdot\frac13+\frac27\cdot\frac16=\frac5{21}+\frac1{21}=\frac6{21}=\frac27.\]
Vậy khẳng định c) là sai.

d) Đúng.
Yêu cầu bài toán là tính $P(\overline B\mid A)$. Theo công thức Bayes, ta có:
\[P(\overline B\mid A)=\frac{P(\overline B)\cdot P(A\mid\overline B)}{P(A)}=\frac{\frac27\cdot\frac16}{\frac27}=\frac16.\]`, {solutionDiagram: figure('11-solfig', 'Sơ đồ cây cho hai lượt chọn gà')});

truth(12, 7, r`Kết quả khảo sát những bệnh nhân bị tai nạn xe máy về mối liên hệ giữa việc đội mũ bảo hiểm và khả năng bị chấn thương vùng đầu cho thấy:
◇ Tỉ lệ bệnh nhân bị chấn thương vùng đầu khi gặp tai nạn là 80%;
◇ Tỉ lệ bệnh nhân đội mũ bảo hiểm đúng cách khi gặp tai nạn là 90%;
◇ Tỉ lệ bệnh nhân đội mũ bảo hiểm đúng cách bị chấn thương vùng đầu là 18%.
Gọi $A$ là biến cố “Bệnh nhân bị chấn thương vùng đầu khi gặp tai nạn” và $B$ là biến cố “Bệnh nhân đội mũ bảo hiểm đúng cách khi gặp tai nạn”.`, r`Xác suất để khi gặp tai nạn, bệnh nhân đội mũ bảo hiểm đúng cách và bị chấn thương vùng đầu là $0{,}144$.
Xác suất để khi gặp tai nạn, bệnh nhân không đội mũ bảo hiểm đúng cách và bị chấn thương vùng đầu khi gặp tai nạn là $0{,}65$.
Xác suất để khi gặp tai nạn, bệnh nhân không đội mũ bảo hiểm đúng cách biết bệnh nhân bị chấn thương vùng đầu là $0{,}82$.
Việc đội mũ bảo hiểm đúng cách sẽ làm giảm khả năng chấn thương vùng đầu xuống khoảng 4,6 lần (kết quả làm tròn ở hàng phần mười).`, '1011', r`Từ giả thiết bài toán, ta có các xác suất sau:
◇ $P(A)=80\%=0{,}8\Rightarrow P(\overline A)=0{,}2$.
◇ $P(B)=90\%=0{,}9\Rightarrow P(\overline B)=0{,}1$.
◇ Dữ kiện thứ ba “Tỉ lệ bệnh nhân đội mũ bảo hiểm đúng cách [trong số những người] bị chấn thương vùng đầu là 18%” tương ứng với xác suất có điều kiện: $P(B\mid A)=18\%=0{,}18$.

Xác suất bệnh nhân đội mũ bảo hiểm đúng cách và bị chấn thương vùng đầu là: $P(B\cap A)=P(A)\cdot P(B\mid A)=0{,}8\cdot0{,}18=0{,}144$. Vậy ý a) Đúng.

Xác suất bệnh nhân không đội mũ bảo hiểm đúng cách và bị chấn thương vùng đầu là: $P(\overline B\cap A)=P(A)-P(B\cap A)=0{,}8-0{,}144=0{,}656$. Mệnh đề ghi $0{,}65$ là chưa chính xác (thiếu phần nghìn). Vậy ý b) Sai.

Xác suất bệnh nhân không đội mũ bảo hiểm đúng cách biết bệnh nhân bị chấn thương vùng đầu là: $P(\overline B\mid A)=1-P(B\mid A)=1-0{,}18=0{,}82$. Vậy ý c) Đúng.

Để so sánh hiệu quả, ta xét tỉ lệ giữa nhóm không đội mũ và nhóm có đội mũ trong số những người bị chấn thương: $\frac{P(\overline B\mid A)}{P(B\mid A)}=\frac{0{,}82}{0{,}18}\approx4{,}555\ldots\approx4{,}6$. Số liệu này cho thấy trong số những ca chấn thương đầu, tỉ lệ người không đội mũ bảo hiểm đúng cách cao gấp khoảng 4,6 lần người đội mũ đúng cách, điều này phản ánh việc đội mũ làm giảm đáng kể khả năng chấn thương. Vậy ý d) Đúng.`);


truth(13, 8, r`Trong một lớp có 40 học sinh, người ta khảo sát sở thích uống nước của các bạn. Kết quả thu được như sau:
◇ 25 bạn thích uống trà sữa.
◇ 18 bạn thích uống nước cam.
◇ 10 bạn thích cả hai loại trên.`, r`Số học sinh chỉ thích trà sữa là 15 học sinh.
Số học sinh chỉ thích nước cam là 9 học sinh.
Số học sinh không thích cả hai loại đồ uống trên là 7 học sinh.
Chọn ra một học sinh trong lớp, biết rằng học sinh đó không thích trà sữa, xác suất để học sinh đó cũng không thích nước cam là $\frac8{15}$.`, '1010', r`Gọi $A$ là tập hợp các học sinh thích trà sữa; $B$ là tập hợp các học sinh thích nước cam. Từ giả thiết đề bài, ta có $n(A)=25$; $n(B)=18$; $n(A\cap B)=10$.
Ta có biểu đồ Ven biểu diễn hai tập $A$ và $B$ như hình.

a) Đúng.
Từ biểu đồ Ven, số học sinh chỉ thích trà sữa (vùng chỉ có màu xanh dương) là:
\[n(A\setminus B)=n(A)-n(A\cap B)=25-10=15.\]

b) Sai.
Tương tự, ta suy ra được số học sinh chỉ thích nước cam (vùng chỉ có màu tím) là:
\[n(B\setminus A)=n(B)-n(A\cap B)=18-10=8.\]
Mệnh đề ghi 9 học sinh là sai.

c) Đúng.
Số học sinh thích ít nhất một loại đồ uống là:
\[n(A\cup B)=n(A\setminus B)+n(B\setminus A)+n(A\cap B)=15+8+10=33\text{ (học sinh)}.\]
Số học sinh không thích cả hai loại đồ uống trên là:
$40-33=7$ (học sinh).

d) Sai.
Yêu cầu bài toán: Tính xác suất có điều kiện $P(\overline B\mid\overline A)$.
Ta có số học sinh không thích trà sữa là $n(\overline A)=40-n(A)=40-25=15$.
Số học sinh vừa không thích trà sữa vừa không thích nước cam chính là số học sinh không thích cả hai loại đồ uống (đã tính ở câu c): $n(\overline A\cap\overline B)=7$.
Vậy xác suất cần tính là:
\[P(\overline B\mid\overline A)=\frac{n(\overline A\cap\overline B)}{n(\overline A)}=\frac7{15}.\]
Mệnh đề ghi $\frac8{15}$ là sai.`, {solutionDiagram: figure('13-solfig', 'Biểu đồ Ven của hai nhóm sở thích đồ uống')});

truth(14, 9, r`Khi phát hiện một vật thể bay, xác suất một hệ thống radar phát cảnh báo là $0{,}9$ nếu vật thể bay đó là mục tiêu thật và là $0{,}05$ nếu đó là mục tiêu giả. Thống kê cho thấy có 99% các vật thể bay là mục tiêu giả. Radar phát hiện một vật thể bay. Gọi $A$ là biến cố “Hệ thống radar phát cảnh báo”. Gọi $B$ là biến cố “Vật thể đó là mục tiêu thật”. Các mệnh đề sau đúng hay sai?`, r`$P(B)=0{,}99$ và $P(\overline B)=0{,}01$.
Xác suất có điều kiện $P(A\mid B)=0{,}9$.
Xác suất $P(A)=58{,}5\%$.
Biết rằng hệ thống radar đang phát cảnh báo khi phát hiện một vật thể bay. Xác suất vật thể đó là mục tiêu thật là $0{,}15$ (kết quả làm tròn đến hàng phần trăm).`, '0101', r`a) Sai.
Theo đề bài, có 99% các vật thể bay là mục tiêu giả, nên $P(\overline B)=0{,}99$.
Suy ra $P(B)=1-P(\overline B)=1-0{,}99=0{,}01$.

b) Đúng.
$P(A\mid B)$ là xác suất hệ thống radar phát cảnh báo khi biết vật thể bay đó là mục tiêu thật, theo giả đề bài cho bằng $0{,}9$.

c) Sai.
Ta có sơ đồ cây như hình.
Áp dụng công thức xác suất toàn phần, ta có:
\[\begin{aligned}
P(A)&=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B)\\
P(A)&=0{,}01\cdot0{,}9+0{,}99\cdot0{,}05\\
P(A)&=0{,}009+0{,}0495=0{,}0585=5{,}85\%.
\end{aligned}\]

d) Đúng.
Xác suất vật thể đó là mục tiêu thật khi biết hệ thống radar đang phát cảnh báo là $P(B\mid A)$.
Áp dụng công thức Bayes, ta có:
\[P(B\mid A)=\frac{P(B)\cdot P(A\mid B)}{P(A)}=\frac{0{,}01\cdot0{,}9}{0{,}0585}\approx0{,}1538\approx0{,}15.\]`, {solutionDiagram: figure('14-solfig', 'Sơ đồ cây xác suất cảnh báo radar')});

truth(15, 9, r`Khi trả lời câu hỏi trong một bài thi trắc nghiệm, học sinh có thể biết đáp án hoặc dự đoán đáp án. Các câu hỏi trắc nghiệm có 4 đáp án nhưng chỉ có 1 đáp án đúng. Giả sử với mỗi câu hỏi bạn Tuấn có xác suất biết đáp án đúng là $0{,}6$ và xác suất Tuấn không biết đáp án đúng là $0{,}4$. Trong trường hợp không biết đáp án Tuấn sẽ dự đoán đáp án đúng bằng cách chọn ngẫu nhiên một trong 4 đáp án của đề thi. Giả sử Tuấn gặp một câu hỏi trắc nghiệm.
Gọi $A$ là biến cố “Câu trả lời của Tuấn là đúng”.
Gọi $B$ là biến cố “Câu hỏi đó Tuấn đã biết đáp án”.`, r`$P(B)=0{,}6$, $P(\overline B)=0{,}4$.
Xác suất có điều kiện: $P(A\mid B)=0{,}5$; $P(A\mid\overline B)=0{,}25$.
Xác suất để câu trả lời của Tuấn đúng là 72%.
Với câu trắc nghiệm mà câu trả lời của Tuấn là đúng, xác suất để câu đó là câu mà Tuấn biết đáp án đúng là $\frac67$.`, '1001', r`a) Đúng. Vì câu hỏi bạn Tuấn có xác suất biết đáp án đúng là $0{,}6$ và xác suất Tuấn không biết đáp án đúng là $0{,}4$ nên $P(B)=0{,}6$, $P(\overline B)=0{,}4$.

b) Sai. Xác suất câu trả lời của Tuấn là đúng khi Tuấn đã biết đáp án bằng $P(A\mid B)=1$.
Xác suất câu trả lời của Tuấn là đúng khi Tuấn chưa biết đáp án bằng $P(A\mid\overline B)=0{,}25$ (do Tuấn chọn ngẫu nhiên 1 trong 4 đáp án).

c) Sai. Áp dụng công thức xác suất toàn phần $P(A)=P(B)P(A\mid B)+P(\overline B)P(A\mid\overline B)$, ta có:
\[P(A)=0{,}6\cdot1+0{,}4\cdot0{,}25=0{,}7.\]
Vậy xác suất để câu trả lời của Tuấn đúng là 70%.

d) Đúng. Áp dụng công thức Bayes $P(B\mid A)=\frac{P(B)P(A\mid B)}{P(A)}$, ta có:
\[P(B\mid A)=\frac{0{,}6\cdot1}{0{,}7}=\frac67.\]
Vậy với câu trắc nghiệm mà câu trả lời của Tuấn là đúng thì xác suất để câu đó là câu mà Tuấn biết đáp án đúng là $\frac67$.`);

truth(16, 10, r`Hình dạng hạt của đậu Hà Lan có hai kiểu hình: hạt trơn và hạt nhăn, có hai gene ứng với hai kiểu hình này là gene trội $B$ và gene lặn $b$. Khi cho lai hai cây đậu Hà Lan, cây con lấy ngẫu nhiên một cách độc lập một gene từ cây bố và một gene từ cây mẹ để hình thành một cặp gene. Giả sử cây bố và cây mẹ được chọn ngẫu nhiên từ một quần thể các cây đậu Hà Lan, ở đó tỉ lệ cây mang kiểu gene $bb,Bb$ tương ứng là 40% và 60%. Khi đó:`, r`Xác suất để cây con lấy gene $b$ từ cây bố với điều kiện cây bố có kiểu gene $bb$ là $0{,}5$.
Xác suất để cây con lấy gene $b$ từ cây bố với điều kiện cây bố có kiểu gene $Bb$ là $0{,}5$.
Xác suất để cây con lấy gene $b$ từ cây bố là $0{,}6$.
Xác suất để cây con có kiểu gene $bb$ là $0{,}49$.`, '0101', r`Gọi $A$ là biến cố “Cây bố có kiểu gene $bb$”;
$M$ là biến cố “Cây con lấy gene $b$ từ cây bố”;
$N$ là biến cố “Cây con lấy gene $b$ từ cây mẹ”;
$E$ là biến cố “Cây con có kiểu gene $bb$”.
Theo giả thiết $M$ và $N$ độc lập nên $P(E)=P(M)\cdot P(N)$.
Ta áp dụng công thức xác suất toàn phần $P(M)=P(A)\cdot P(M\mid A)+P(\overline A)\cdot P(M\mid\overline A)$ $(*)$.
Suy ra $P(A)=0{,}4$; $P(\overline A)=0{,}6$.

a) Sai. $P(M\mid A)$ là xác suất để cây con lấy gene $b$ từ cây bố với điều kiện cây bố có kiểu gene $bb$. Do đó $P(M\mid A)=1$.

b) Đúng. $P(M\mid\overline A)$ là xác suất để cây con lấy gene $b$ từ cây bố với điều kiện cây bố có kiểu gene $Bb$. Do đó $P(M\mid\overline A)=\frac12=0{,}5$.

c) Sai. Thay vào $(*)$ ta được $P(M)=0{,}4\cdot1+0{,}6\cdot0{,}5=0{,}4+0{,}3=0{,}7$.

d) Đúng. Tương tự tính được $P(N)=0{,}7$. Vậy $P(E)=P(M)\cdot P(N)=0{,}7\cdot0{,}7=0{,}49$.
Từ kết quả trên suy ra trong một quần thể các cây đậu Hà Lan, ở đó tỉ lệ cây bố và cây mẹ mang kiểu gene $bb,Bb$ tương ứng là 40% và 60%, thì tỉ lệ cây con có kiểu gene $bb$ là khoảng 49%.`);


short(17, 13, r`Xếp ngẫu nhiên 7 cuốn sách khác nhau, trong đó có một cuốn là sách Toán vào một giá sách có 4 ngăn. Biết rằng sau khi xếp, mỗi ngăn đều có ít nhất một cuốn sách. Gọi $A$ là biến cố “trong 4 ngăn sách, có đúng một ngăn chứa số lượng sách nhiều hơn hẳn các ngăn còn lại” và $B$ là biến cố “cuốn sách Toán học nằm ở ngăn có nhiều sách nhất đó”. Tính $P(B\mid A)$ (kết quả làm tròn đến hàng phần trăm).`, 0.45, r`Xét các bộ số $(n_1,n_2,n_3,n_4)$ là số lượng sách trong mỗi ngăn sao cho $\sum n_i=7$ và $n_i\ge1$. Các bộ số có thể xảy ra là:

◇ Trường hợp 1: Có dạng $\{4;1;1;1\}$. Số cách phân bố sách vào 4 ngăn là $C_4^1\cdot\frac{7!}{4!\cdot1!\cdot1!\cdot1!}=840$ cách. Trong trường hợp này, ngăn nhiều sách nhất có 4 cuốn. Số cách để sách Toán nằm ở ngăn này là $C_4^1\cdot\frac{6!}{3!\cdot1!\cdot1!\cdot1!}=480$ cách.
◇ Trường hợp 2: Có dạng $\{3;2;1;1\}$. Số cách phân bố sách vào 4 ngăn là $\frac{4!}{2!}\cdot\frac{7!}{3!\cdot2!\cdot1!\cdot1!}=12\cdot420=5040$ cách. Trong trường hợp này, ngăn nhiều sách nhất có 3 cuốn. Số cách để sách Toán nằm ở ngăn này là $4\cdot3\cdot\frac{6!}{2!\cdot2!\cdot1!\cdot1!}=12\cdot180=2160$ cách.
◇ Trường hợp 3: Có dạng $\{2;2;2;1\}$. Ở trường hợp này không có duy nhất một ngăn có số sách nhiều hơn hẳn các ngăn còn lại (vi phạm điều kiện biến cố $A$).

Biến cố $A$ xảy ra ở Trường hợp 1 và Trường hợp 2.
Số phần tử của biến cố $A$ là: $n(A)=840+5040=5880$.
Số phần tử của biến cố $A\cap B$ (sách Toán nằm ở ngăn nhiều nhất trong các trường hợp của $A$) là: $n(A\cap B)=480+2160=2640$.
Xác suất có điều kiện cần tìm là:
\[P(B\mid A)=\frac{n(A\cap B)}{n(A)}=\frac{2640}{5880}=\frac{22}{49}\approx0{,}4489\ldots\]
Làm tròn đến hàng phần trăm, ta được kết quả: $P(B\mid A)\approx0{,}45$.`, {diagram: figure('17-fig', 'Giá sách có bốn ngăn')});

short(18, 13, r`Xét một bảng ô vuông kích thước $3\times3$. Mỗi ô được điền ngẫu nhiên và độc lập một giá trị từ tập $\{-1;0;1\}$. Biết rằng tổng các số trên mỗi hàng đều bằng 0, gọi $p$ là xác suất để tổng các số trên mỗi cột cũng đều bằng 0. Tính giá trị của $3430p$.`, 310, r`Gọi các ô trong bảng là $a_{ij}$ với $i,j\in\{1,2,3\}$.
Theo giả thiết, tổng các số trên mỗi hàng đều bằng 0 nên $a_{i1}+a_{i2}+a_{i3}=0$ với mỗi $i\in\{1,2,3\}$.
◇ Các bộ ba số $(a,b,c)$ thuộc tập $\{-1;0;1\}$ có tổng bằng 0 là:
☆ Bộ $\{0;0;0\}$ có 1 cách sắp xếp: $(0,0,0)$.
☆ Bộ $\{-1;0;1\}$ có $3!=6$ cách sắp xếp: $(1,-1,0),(1,0,-1),(0,1,-1),(-1,1,0),(-1,0,1),(0,-1,1)$.
◇ Như vậy, mỗi hàng có $1+6=7$ cách điền để tổng bằng 0.
Vì bảng có 3 hàng và việc điền các hàng là độc lập, nên số phần tử của không gian mẫu là:
\[n(\Omega)=7\times7\times7=343.\]

Gọi biến cố $A$ là “Tổng các số trên mỗi cột cũng đều bằng 0”.
Đặt $R_1,R_2,R_3$ lần lượt là các vectơ hàng của bảng. Biến cố $A$ xảy ra khi $R_1+R_2+R_3=\vec0$.
Gọi $S$ là tập hợp 7 vectơ hàng có tổng các thành phần bằng 0. Ta đếm số bộ $(R_1,R_2,R_3)\in S^3$ sao cho $R_1+R_2+R_3=\vec0$:
◇ Trường hợp 1: Cả ba hàng đều là $(0,0,0)$. Có 1 cách: $((0,0,0),(0,0,0),(0,0,0))$.
◇ Trường hợp 2: Có đúng một hàng là $(0,0,0)$. Giả sử $R_1=(0,0,0)$, khi đó $R_2+R_3=\vec0\Rightarrow R_3=-R_2$. Với mỗi vectơ $R_2\ne(0,0,0)$ trong $S$ (có 6 vectơ), luôn tồn tại duy nhất một vectơ $R_3=-R_2$ cũng thuộc $S$ và khác $(0,0,0)$. Số cách chọn cho trường hợp này là: $3\times6=18$ cách (số 3 là số cách chọn vị trí cho hàng $(0,0,0)$).
◇ Trường hợp 3: Không có hàng nào là $(0,0,0)$. Giả sử $R_1=(1,-1,0)$, các cặp $(R_2,R_3)$ không chứa $(0,0,0)$ sao cho $R_2+R_3=(-1,1,0)$ là: $\{(0,1,-1);(-1,0,1)\}$ và $\{(-1,0,1);(0,1,-1)\}$. Có 2 cách cho mỗi $R_1$. Vì có 6 lựa chọn cho $R_1\ne(0,0,0)$, số cách là: $6\times2=12$ cách.
Tổng số kết quả thuận lợi cho biến cố $A$ là:
\[n(A)=1+18+12=31.\]
Xác suất biến cố $A$ là: $p=\frac{n(A)}{n(\Omega)}=\frac{31}{343}$.
Vậy giá trị của $3430p=3430\cdot\frac{31}{343}=310$.`);

short(19, 14, r`Phần trắc nghiệm đúng sai của đề thi THPT Quốc Gia gồm có 04 câu hỏi. Mỗi câu hỏi sẽ gồm 04 ý trắc nghiệm đúng sai a), b), c), d) và mỗi ý chỉ gồm hai lựa chọn là đúng hoặc sai. Quy tắc tính điểm của một câu hỏi đúng sai này như sau:
◇ Đúng 01 ý trong 04 ý được $0{,}1$ điểm.
◇ Đúng 02 ý trong 04 ý được $0{,}25$ điểm.
◇ Đúng 03 ý trong 04 ý được $0{,}5$ điểm.
◇ Đúng cả 04 ý được 1 điểm.
◇ Không đúng ý nào trong cả 04 ý thì không được điểm.
Một học sinh khoanh bừa ngẫu nhiên tất cả các ý của 4 câu hỏi. Biết rằng kết quả cuối cùng học sinh này đạt được tổng điểm là $2{,}5$ điểm. Tính xác suất để trong 4 câu hỏi đó có đúng 2 câu học sinh trả lời đúng hoàn toàn (kết quả làm tròn đến hàng phần trăm).`, 0.51, r`Mỗi câu hỏi có 4 ý, mỗi ý có 2 lựa chọn nên tổng số cách trả lời cho mỗi câu là $2^4=16$ cách.
Số cách để đạt được các mức điểm trong một câu hỏi cụ thể là:
◇ Để đạt 1 điểm (đúng cả 4 ý): Có $C_4^4=1$ cách.
◇ Để đạt $0{,}5$ điểm (đúng 3 ý): Có $C_4^3=4$ cách.
◇ Để đạt $0{,}25$ điểm (đúng 2 ý): Có $C_4^2=6$ cách.
◇ Để đạt $0{,}1$ điểm (đúng 1 ý): Có $C_4^1=4$ cách.
◇ Để đạt 0 điểm (đúng 0 ý): Có $C_4^0=1$ cách.

Gọi $x_i$ là số điểm đạt được ở câu thứ $i$ ($i=1,2,3,4$). Theo đề bài, ta có phương trình:
\[x_1+x_2+x_3+x_4=2{,}5\quad\text{với }x_i\in\{0;0{,}1;0{,}25;0{,}5;1\}.\]
Các bộ điểm $\{x_1,x_2,x_3,x_4\}$ có tổng bằng $2{,}5$ bao gồm các trường hợp sau:
① Bộ điểm $\{1;1;0{,}5;0\}$: Có $\frac{4!}{2!1!1!}=12$ hoán vị. Số cách chọn tương ứng: $12\times(1^2\times4^1\times1^1)=48$ cách.
② Bộ điểm $\{1;1;0{,}25;0{,}25\}$: Có $\frac{4!}{2!2!}=6$ hoán vị. Số cách chọn tương ứng: $6\times(1^2\times6^2)=216$ cách.
③ Bộ điểm $\{1;0{,}5;0{,}5;0{,}5\}$: Có $\frac{4!}{1!3!}=4$ hoán vị. Số cách chọn tương ứng: $4\times(1^1\times4^3)=256$ cách.
(Lưu ý: Các trường hợp có điểm $0{,}1$ không thể tạo ra tổng $2{,}5$ vì phần thập phân lẻ $0{,}1$ không thể bù trừ để ra $0{,}5$ hoặc số nguyên với tối đa 4 câu hỏi).

Tổng số kết quả thuận lợi cho việc học sinh đạt $2{,}5$ điểm là:
\[n(\Omega)=48+216+256=520\text{ cách}.\]
Gọi biến cố $A$: “Học sinh có đúng 2 câu trả lời đúng hoàn toàn (đạt 1 điểm)”.
Biến cố $A$ xảy ra ở trường hợp (1) và trường hợp (2). Số cách thuận lợi cho $A$ là:
\[n(A)=48+216=264\text{ cách}.\]
Xác suất cần tính là:
\[P(A)=\frac{264}{520}=\frac{33}{65}\approx0{,}50769.\]
Làm tròn đến hàng phần trăm, ta được kết quả $P(A)\approx0{,}51$.`);


short(20, 15, r`Có sáu tấm thẻ, mỗi tấm có một số tự nhiên từ 1 đến 6 được viết trên mặt trước và số 0 được viết trên mặt sau. Sáu tấm thẻ này được sắp xếp sao cho với mỗi số tự nhiên $k\le6$, vị trí thứ $k$ hiển thị số tự nhiên $k$ (tham khảo hình vẽ).
Sử dụng sáu tấm thẻ này và một con xúc xắc, thực hiện các bước sau: Gieo xúc xắc một lần, nếu số chấm xuất hiện ở mặt trên xúc xắc là $k$, thì ta lật tấm thẻ ở vị trí thứ $k$ một lần và đặt lại vào vị trí ban đầu. Sau khi lặp lại thí nghiệm trên 3 lần, nếu biết tổng các số xuất hiện trên cả 6 thẻ là số chẵn, xác suất để số 1 xuất hiện đúng một lần khi gieo xúc xắc là $\frac ab$ (với $a$ và $b$ là các số nguyên dương và phân số $\frac ab$ tối giản). Tính giá trị của $a+b$.`, 49, r`Minh họa thí nghiệm: Ví dụ khi thực hiện thí nghiệm 1 lần, con xúc xắc gieo được số 4, ta thực hiện lật lá bài ở vị trí số 4 và đặt lại vị trí cũ. Lúc này số xuất hiện trên 6 lá bài như hình minh họa.
Tổng trên 6 tấm thẻ lúc này là $T=1+2+3+0+5+6=17$ là một số lẻ.
Và sau khi ta thực hiện thí nghiệm này liên tiếp 3 lần thì được kết quả tổng trên 6 tấm thẻ là số chẵn.

Gọi $A$ là biến cố “Tổng các số xuất hiện trên cả 6 thẻ là số chẵn”.
$B$ là biến cố “Số 1 xuất hiện đúng 1 lần”.
Yêu cầu bài toán: Tính xác suất để số 1 xuất hiện đúng một lần khi gieo xúc xắc, biết tổng các số xuất hiện trên cả 6 thẻ là số chẵn $\Leftrightarrow P(B\mid A)=\frac{P(AB)}{P(A)}$ (theo công thức xác suất điều kiện).

Nhận thấy khi số mặt xuất hiện trên xúc xắc là số chẵn thì tổng trên 6 tấm thẻ không thay đổi tính chẵn lẻ (vì khi lật một số chẵn thì ta vẫn được một số chẵn, do đó không làm thay đổi tính chẵn lẻ của tổng 6 tấm thẻ).
Khi số mặt xuất hiện trên xúc xắc là số lẻ thì tổng trên 6 tấm thẻ sẽ thay đổi tính chẵn lẻ (vì khi lật một số lẻ (vị trí lẻ) thì ta được một số chẵn và ngược lại, do đó làm thay đổi tính chẵn lẻ của tổng 6 tấm thẻ).

Vậy để sau khi thực hiện lật thẻ 3 lần và được tổng trên 6 tấm thẻ là số chẵn thì có 2 trường hợp xảy ra:
◇ TH1: Thay đổi tính chẵn lẻ đúng 3 lần (tức 3 lần thí nghiệm gieo xúc xắc xuất hiện 3 mặt lẻ).
◇ TH2: Thay đổi tính chẵn lẻ đúng 1 lần (tức 3 lần thí nghiệm gieo xúc xắc có 2 lần xuất hiện mặt chẵn và 1 lần xuất hiện mặt lẻ): LCC, CLC, CCL.

Ta đi tiến hành giải từng trường hợp.
◇ Thay đổi tính chẵn lẻ đúng 3 lần.
Ta có xác suất để gieo được số lẻ là $\frac{C_3^1}{C_6^1}=\frac36=\frac12$.
Suy ra xác suất cả 3 lần đều lẻ là $P(A_1)=\frac12\cdot\frac12\cdot\frac12=\frac18$.
Xác suất số 1 xuất hiện đúng một lần là
\[P(A_1B_1)=\frac16\cdot\frac26\cdot\frac26+\frac26\cdot\frac26\cdot\frac16+\frac26\cdot\frac16\cdot\frac26=\frac1{18}\]
(vì số 1 có thể xuất hiện ở lần thí nghiệm thứ 1, 2, 3).

◇ TH2: Thay đổi tính chẵn lẻ đúng 1 lần.
Xác suất để 3 lần gieo được LCC là $P(A_2)=\frac12\cdot\frac12\cdot\frac12=\frac18$. Xác suất số 1 xuất hiện đúng một lần là
\[P(A_2B_2)=\frac16\cdot\frac12\cdot\frac12=\frac1{24}.\]
Xác suất để 3 lần gieo được CLC là $P(A_3)=\frac12\cdot\frac12\cdot\frac12=\frac18$. Xác suất số 1 xuất hiện đúng một lần là
\[P(A_3B_3)=\frac12\cdot\frac16\cdot\frac12=\frac1{24}.\]
Xác suất để 3 lần gieo được CCL là $P(A_4)=\frac12\cdot\frac12\cdot\frac12=\frac18$. Xác suất số 1 xuất hiện đúng một lần là
\[P(A_4B_4)=\frac12\cdot\frac12\cdot\frac16=\frac1{24}.\]
Khi đó xác suất cần tính là
\[\begin{aligned}
P(B\mid A)&=\frac{P(AB)}{P(A)}\\
&=\frac{P(A_1B_1)+P(A_2B_2)+P(A_3B_3)+P(A_4B_4)}{P(A_1)+P(A_2)+P(A_3)+P(A_4)}\\
&=\frac{\frac1{18}+\frac1{24}+\frac1{24}+\frac1{24}}{\frac18+\frac18+\frac18+\frac18}=\frac{13}{36}=\frac ab.
\end{aligned}\]
$\Rightarrow a+b=49$.`, {diagram: figure('20-fig', 'Các thẻ ở vị trí từ 1 đến 6'), solutionDiagram: figure('20-solfig', 'Minh họa trạng thái sau khi lật thẻ số 4')});

short(21, 17, r`Có hai chuồng $A$ và $B$. Chuồng $A$ ban đầu có 9 con dê trắng và 8 con dê đen. Chuồng $B$ ban đầu có 5 con dê trắng và 6 con dê đen. Các con dê được xem như nhau về kích thước và khả năng bị chọn. Người ta bắt ngẫu nhiên đồng thời 3 con dê từ chuồng $A$ chuyển sang chuồng $B$. Sau đó, từ chuồng $B$ bắt ngẫu nhiên 2 con dê ra kiểm tra. Biết rằng cả 2 con dê bắt ra đều là dê trắng. Hỏi xác suất để cả 2 con dê trắng đó đều là dê chuyển từ chuồng $A$ sang là bao nhiêu phần trăm? (Kết quả làm tròn đến 2 chữ số ở phần thập phân.)`, 4.24, r`Chuồng $A$ có tổng cộng $9+8=17$ con dê. Chuồng $B$ có $5+6=11$ con dê.
Gọi $H_i$ là biến cố “Có $i$ con dê trắng được chuyển từ chuồng $A$ sang chuồng $B$” với $i\in\{0,1,2,3\}$.
Số cách chọn 3 con dê từ chuồng $A$ là $C_{17}^3=680$. Xác suất của các biến cố $H_i$ là:
◇ $P(H_0)=\frac{C_9^0\cdot C_8^3}{680}=\frac{56}{680}$.
◇ $P(H_1)=\frac{C_9^1\cdot C_8^2}{680}=\frac{252}{680}$.
◇ $P(H_2)=\frac{C_9^2\cdot C_8^1}{680}=\frac{288}{680}$.
◇ $P(H_3)=\frac{C_9^3\cdot C_8^0}{680}=\frac{84}{680}$.

Gọi $X$ là biến cố “Cả 2 con dê bắt từ chuồng $B$ đều là dê trắng”.
Sau khi chuyển, chuồng $B$ có $11+3=14$ con dê. Nếu biến cố $H_i$ xảy ra, chuồng $B$ có $5+i$ con dê trắng.
Số cách chọn 2 con dê từ chuồng $B$ là $C_{14}^2=91$. Xác suất có điều kiện $P(X\mid H_i)=\frac{C_{5+i}^2}{91}$:
◇ $P(X\mid H_0)=\frac{10}{91}$; $P(X\mid H_1)=\frac{15}{91}$; $P(X\mid H_2)=\frac{21}{91}$; $P(X\mid H_3)=\frac{28}{91}$.
Xác suất để bắt được 2 con dê trắng là:
\[P(X)=\sum_{i=0}^3 P(H_i)P(X\mid H_i)=\frac{56\cdot10+252\cdot15+288\cdot21+84\cdot28}{680\cdot91}=\frac{12740}{61880}=\frac7{34}.\]

Gọi $M$ là biến cố “Cả 2 con dê trắng đó đều là dê chuyển từ chuồng $A$ sang”.
Biến cố $M\cap X$ xảy ra khi 2 con dê trắng lấy ra nằm trong số $i$ con dê trắng vừa chuyển từ $A$ sang.
Xác suất $P(M\cap X)=\sum P(H_i)\cdot\frac{C_i^2}{91}=P(H_2)\cdot\frac1{91}+P(H_3)\cdot\frac3{91}$ (vì $i<2$ thì $C_i^2=0$):
\[P(M\cap X)=\frac{288\cdot1+84\cdot3}{680\cdot91}=\frac{540}{61880}.\]
Xác suất cần tìm là xác suất có điều kiện:
\[P(M\mid X)=\frac{P(M\cap X)}{P(X)}=\frac{540}{12740}=\frac{27}{637}\approx0{,}042386\ldots\]
Đổi sang đơn vị phần trăm: $4{,}24\%$.`);

short(22, 18, r`Một hộp có 25 chiếc thẻ cùng loại được đánh số từ 1 đến 25. Hai bạn Hà và Quỳnh chơi trò chơi rút thẻ trong hộp như sau: hai bạn lần lượt rút thẻ, mỗi lượt rút ngẫu nhiên một thẻ rồi ghi lại số trên thẻ vừa rút sau đó trả lại thẻ vào hộp. Hà sẽ thắng nếu rút được thẻ ghi số chia hết cho 6, Quỳnh sẽ thắng nếu rút được thẻ ghi số chia hết cho 5. Giả sử Hà chơi trước, khi đó xác suất để Quỳnh thắng bằng $\frac ab$ ($a,b\in\mathbb N^*$, $\frac ab$ là phân số tối giản). Tính $a^2+b^2$.`, 2122, r`Gọi $H$ là biến cố “Hà rút được thẻ ghi số chia hết cho 6”.
$Q$ là biến cố “Quỳnh rút được thẻ ghi số chia hết cho 5”.
Vì Hà và Quỳnh sẽ rút thẻ và trả lại nên hai biến cố $H,Q$ là độc lập với nhau.

Đầu tiên, ta xét trong một lượt:
Hà thắng nếu rút được số chia hết cho 6, nên xác suất Hà thắng là $P(H)=\frac4{25}$ (trong 25 thẻ, rút trúng 1 trong 4 thẻ mang số 6, 12, 18, 24). Xác suất Hà rút trượt (rút không trúng) là
\[P(\overline H)=1-P(H)=1-\frac4{25}=\frac{21}{25}.\]
Quỳnh thắng nếu rút được số chia hết cho 5, nên xác suất Quỳnh thắng là $P(Q)=\frac5{25}=\frac15$ (trong 25 thẻ, rút trúng 1 trong 5 thẻ mang số 5, 10, 15, 20, 25). Xác suất Quỳnh rút trượt là
\[P(\overline Q)=1-P(Q)=1-\frac15=\frac45.\]
Xác suất trong một lượt rút không ai thắng là $P(\overline H\overline Q)=\frac{21}{25}\cdot\frac45=\frac{84}{125}$.
Xác suất trong một lượt rút Quỳnh thắng là $P(\overline H Q)=\frac{21}{25}\cdot\frac15=\frac{21}{125}$.

Tiếp theo, ta xác định xác suất để Quỳnh thắng.
Quỳnh có thể thắng ở vòng 1, vòng 2, ..., vòng $n$. Do đó để Quỳnh thắng ở một vòng, Hà phải rút trượt (thua) trước đó. Ta xét Quỳnh thắng ở lần lượt các vòng:
Vòng 1: Hà trượt, Quỳnh trúng. Suy ra xác suất Quỳnh thắng là
\[P_1=P(\overline H)\cdot P(Q)=\frac{21}{25}\cdot\frac5{25}=\frac{21}{125}.\]
Vòng 2: Cả hai trượt vòng 1, Hà trượt vòng 2, Quỳnh trúng vòng 2. Suy ra xác suất Quỳnh thắng là
\[P_2=\frac{84}{125}\cdot\frac{21}{125}.\]
Vòng 3: Cả hai trượt vòng 1, cả hai trượt vòng 2, Hà trượt vòng 3, Quỳnh trúng vòng 3. Suy ra xác suất Quỳnh thắng là
\[P_3=\frac{84}{125}\cdot\frac{84}{125}\cdot\frac{21}{125}=\frac{21}{125}\cdot\left(\frac{84}{125}\right)^2.\]
...
Nhận xét: Xác suất Quỳnh thắng vòng 1, vòng 2, ... vòng $n$ theo thứ tự lập thành một cấp số nhân lùi vô hạn với $u_1=\frac{21}{125}$ và công bội $q=\frac{84}{125}$.
Suy ra tổng xác suất Quỳnh thắng bằng với tổng cấp số nhân lùi vô hạn $u_1=\frac{21}{125}$ và công bội $q=\frac{84}{125}$ và bằng
\[P=\frac{u_1}{1-q}=\frac{\frac{21}{125}}{1-\frac{84}{125}}=\frac{21}{41}=\frac ab.\]
Suy ra $\begin{cases}a=21\\b=41\end{cases}$.
$\Rightarrow a^2+b^2=21^2+41^2=2122$.`);

short(23, 19, r`Có 24 con voi trong một khu bảo tồn động vật hoang dã. Người quản lý gắn thẻ sáu con voi bằng máy phát vô tuyến nhỏ và trả chúng về khu bảo tồn. Tháng tiếp theo, một người quản lý khác chọn ngẫu nhiên một con voi từ khu bảo tồn để gắn thẻ và lại trả về, nhưng anh ta không rõ là con voi này được gắn thẻ trước đó chưa. Giả sử không có con voi nào rời khỏi hoặc vào khu bảo tồn, hoặc chết hoặc sinh con, giữa thời điểm gắn thẻ và lựa chọn. Chọn ngẫu nhiên hai con voi trong khu bảo tồn, biết rằng hai con voi lấy ra có con voi được gắn thẻ, tính xác suất để trong khu bảo tồn có đúng sáu con voi được gắn thẻ (làm tròn kết quả đến hàng phần trăm).`, 0.23, r`Gọi $A$ là biến cố “Có đúng 6 con voi được gắn thẻ”.
$B$ là biến cố “Có 7 con voi được gắn thẻ”.
$C$ là biến cố “Hai con voi lấy ra có ít nhất 1 con voi được gắn thẻ”.
Ban đầu gắn thẻ cho 6 con trong 24 con voi nên $P(A)=\frac6{24}=0{,}25$.
Sau 1 tháng chọn ngẫu nhiên 1 con voi từ khu bảo tồn để gắn thẻ nên $P(B)=\frac{18}{24}=0{,}75$.
Ta có: $P(C\mid A)=1-\frac{C_{18}^2}{C_{24}^2}=\frac{41}{92}$;
$P(C\mid B)=1-\frac{C_{17}^2}{C_{24}^2}=\frac{35}{69}$.
\[\Rightarrow P(C)=P(A)\cdot P(C\mid A)+P(B)\cdot P(C\mid B)=\frac{181}{368}.\]
Xác suất cần tìm là $P(A\mid C)=\frac{P(A)\cdot P(C\mid A)}{P(C)}=\frac{0{,}25\cdot\frac{41}{92}}{\frac{181}{368}}\approx0{,}23$.`);

short(24,20,r`Túi A chứa 6 lá bài ghi các số tự nhiên từ 1 đến 6. Túi B và C mỗi túi chứa 3 lá bài ghi các số tự nhiên từ 1 đến 3.
◇ M (người thứ nhất) rút ngẫu nhiên 1 lá bài từ túi A.
◇ N (người thứ hai) rút ngẫu nhiên 1 lá bài từ túi B.
◇ P (người thứ ba) rút ngẫu nhiên 1 lá bài từ túi C.
Biết rằng số trên lá bài của M lớn hơn số trên lá bài của N, khi đó xác suất để số trên lá bài của M lớn hơn tổng số trên lá bài của N và P là $\frac ab$ (trong đó $a,b\in\mathbb N$ và phân số $\frac ab$ tối giản). Tính $3a^4+10b^4$.`,163,r`Gọi $m,n,p$ lần lượt là số trên lá bài của M, N và P.
Khi đó $m\in\{1,2,3,4,5,6\}$; $n\in\{1,2,3\}$; $p\in\{1,2,3\}$.
Gọi $A$ là biến cố “Số trên lá bài của M lớn hơn số trên lá bài của N” (tức là $m>n$).
Gọi $B$ là biến cố “Số trên lá bài của M lớn hơn tổng số trên lá bài của N và P” (tức là $m>n+p$).
Suy ra yêu cầu bài toán: $P(B\mid A)=\frac{P(AB)}{P(A)}=\frac{n(AB)}{n(A)}$.
Các cặp $(m,n)$ thỏa mãn $m>n$ là:
◇ Nếu $n=1$: $m\in\{2,3,4,5,6\}$ (5 trường hợp).
◇ Nếu $n=2$: $m\in\{3,4,5,6\}$ (4 trường hợp).
◇ Nếu $n=3$: $m\in\{4,5,6\}$ (3 trường hợp).
Tổng số cặp $(m,n)$ thỏa mãn là $5+4+3=12$.
Vì $p$ có thể là bất kỳ số nào trong $\{1,2,3\}$ nên số cách chọn $m,n,p$ thỏa mãn $m>n$ là $n(A)=12\times3=36$.
Lưu ý rằng nếu $m>n+p$ thì chắc chắn $m>n$ (vì $p\ge1$), nên ta chỉ cần tìm các bộ $(m,n,p)$ thỏa mãn $m>n+p$.
\[\begin{array}{|c|c|c|c|c|}\hline
n&p&n+p&m\text{ có thể chọn để thỏa mãn }m>n+p&\text{Số cách}\\\hline
1&1&2&3,4,5,6&4\\\hline
1&2&3&4,5,6&3\\\hline
1&3&4&5,6&2\\\hline
2&1&3&4,5,6&3\\\hline
2&2&4&5,6&2\\\hline
2&3&5&6&1\\\hline
3&1&4&5,6&2\\\hline
3&2&5&6&1\\\hline
3&3&6&\text{Không có}&0\\\hline
\end{array}\]
Vậy $n(A\cap B)=18$ suy ra xác suất cần tìm là $P(B\mid A)=\frac{18}{36}=\frac12\Rightarrow\begin{cases}a=1\\b=2.\end{cases}$
$\Rightarrow 3a^4+10b^4=163$.`);

short(25,21,r`Một con kiến di chuyển dọc theo các cạnh của một hình chóp tứ giác. Nó bắt đầu cuộc đi dạo của mình ở đỉnh $A$, mỗi lần nó đi đúng một cạnh của hình chóp và nó đi tối đa 3 lần. Tại mỗi đỉnh, con kiến quyết định ngẫu nhiên đi theo một trong ba hướng (đối với đỉnh $A,B,C$) hoặc bốn hướng (đối với đỉnh $S$ trên cùng), trong đó nó cũng được phép chọn hướng mà nó vừa đi đến. Tại đỉnh $B$ có một con thú ăn kiến đang rình rập. Xác suất để con kiến không bị bắt bởi thú ở $B$ là bao nhiêu phần trăm (làm tròn kết quả đến hàng phần mười)?`,42.6,r`Gọi $A$ là biến cố “Con kiến không bị bắt”.
Suy ra $\overline A$ là biến cố “Con kiến bị bắt”.
Khi đó yêu cầu bài toán: Tính $P(A)$ và $P(A)=1-P(\overline A)$.
Vì con kiến đi tối đa 3 lần nên con kiến có thể bị bắt sau lần đi 1, 2 hoặc 3. Ta xét các trường hợp sau:

TH1: Con kiến bị bắt sau lần di chuyển 1.
Xác suất con kiến bị bắt sau lần di chuyển 1 là $P(A_1)=\frac13$.

TH2: Con kiến bị bắt sau lần di chuyển 2.
Ta có sơ đồ cây:
\[\begin{array}{ccc}
&\text{Lần đi 1}&\text{Lần đi 2}\\
&\xrightarrow{1/3}S&\xrightarrow{1/4}B\\
\text{Từ điểm }A\\
&\xrightarrow{1/3}D&\xrightarrow{0}B
\end{array}\]
Suy ra xác suất con kiến bị bắt sau lần di chuyển 2 là $P(A_2)=\frac13\cdot\frac14=\frac1{12}$.

TH3: Con kiến bị bắt sau lần di chuyển 3.
Ta có sơ đồ cây:
\[\begin{array}{cccc}
&\text{Lần đi 1}&\text{Lần đi 2}&\text{Lần đi 3}\\
&&\xrightarrow{1/4}A&\xrightarrow{1/3}B\\
&\xrightarrow{1/3}S&\xrightarrow{1/4}D&\xrightarrow{0}B\\
&&\xrightarrow{1/4}C&\xrightarrow{1/3}B\\
\text{Từ điểm }A&&\xrightarrow{1/3}S&\xrightarrow{1/4}B\\
&\xrightarrow{1/3}D&\xrightarrow{1/3}A&\xrightarrow{1/3}B\\
&&\xrightarrow{1/3}C&\xrightarrow{1/3}B
\end{array}\]
Suy ra xác suất con kiến bị bắt sau lần di chuyển 3 là:
\[P(A_3)=\frac13\cdot\frac14\cdot\frac13+\frac13\cdot\frac14\cdot\frac13+\frac13\cdot\frac13\cdot\frac14+\frac13\cdot\frac13\cdot\frac13+\frac13\cdot\frac13\cdot\frac13=\frac{17}{108}.\]
Kết hợp 3 TH trên, ta có
\[P(\overline A)=\frac13+\frac1{12}+\frac{17}{108}=\frac{31}{54}.\]
Vậy xác suất cần tính là:
\[P(A)=1-P(\overline A)=1-\frac{31}{54}=0{,}4(259)\approx42{,}6\%.\]`,{diagram:figure('25-fig','Hình chóp tứ giác và các đỉnh di chuyển'),unit:'%',sourceNote:'Hình và lời giải cũng dùng ba hướng tại đỉnh D, dù đề gốc chỉ liệt kê A, B, C.'});

short(26,22,r`Bạn Quỳnh và bạn Hà tham gia chơi trò chơi sau:
◇ Quỳnh chọn trước một trong ba vòng quay được cho trong hình.
◇ Sau đó, Hà chọn một trong hai vòng còn lại.
◇ Cả hai quay vòng của mình. Người có số lớn hơn là người thắng.
Biết rằng mỗi vùng trên vòng quay đều có xác suất như nhau. Tính xác suất mà Quỳnh chiến thắng. Làm tròn kết quả đến hàng phần trăm.`,0.5,r`Quỳnh chọn trước có 3 cách chọn vòng quay.
Hà chọn sau có 2 cách chọn vòng quay.
Mỗi người quay vòng của mình có $3\times3=9$ kết quả cho mỗi cặp vòng quay.
$\Rightarrow$ Tổng số phần tử của không gian mẫu là $n(\Omega)=3\times2\times9=54$.
Các trường hợp Quỳnh quay được số $x$ và thắng Hà (số cách Hà thua):
◇ Số 9: Hà có 6 cách thua (thua mọi số ở các vòng quay còn lại).
◇ Số 5: Hà có 3 cách thua (số 3, 4 ở vòng $b$ và số 2 ở vòng $c$).
◇ Số 3: Hà có 2 cách thua (số 1 ở vòng $a$ và số 2 ở vòng $c$).
◇ Số 4: Hà có 2 cách thua (số 1 ở vòng $a$ và số 2 ở vòng $c$).
◇ Số 8: Hà có 5 cách thua (số 1, 5 ở vòng $a$ và số 7, 6, 2 ở vòng $c$).
◇ Số 7: Hà có 4 cách thua (số 1, 5 ở vòng $a$ và số 3, 4 ở vòng $b$).
◇ Số 6: Hà có 4 cách thua (số 1, 5 ở vòng $a$ và số 3, 4 ở vòng $b$).
◇ Số 2: Hà có 1 cách thua (số 1 ở vòng $a$).
◇ Số 1: Hà có 0 cách thua.
$\Rightarrow$ Tổng cộng có $6+3+2+2+5+4+4+1=27$ cách để Quỳnh chiến thắng.
Xác suất cần tìm là $P=\frac{27}{54}=0{,}5$.
Làm tròn kết quả đến hàng phần trăm: $0{,}50$.`,{diagram:figure('26-fig','Các giá trị trên ba vòng quay'),sourceNote:'Lời giải tính theo giả thiết hai bạn chọn đều trong số các vòng còn lại.'});

questions[11].sourceNote=math(r`Các tỷ lệ trong đề gốc mâu thuẫn nhau. Nếu $P(A)=0{,}8$ và $P(B)=0{,}9$ thì $P(A\cap B)\ge P(A)+P(B)-1=0{,}7$, nên $P(A\mid B)$ không thể bằng $0{,}18$. Phần lời giải và đáp án bên trên được giữ theo tài liệu.`);

export const chapter6 = questions;
