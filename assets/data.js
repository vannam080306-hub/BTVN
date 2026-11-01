import {chapter1Questions} from './toan11-chuong1.js?v=387f12aaf99e';
import {chapter3Questions} from './toan11-chuong3.js?v=387f12aaf99e';
export const subjects=[
 {id:'toan',name:'Toán',full:'Toán học',symbol:'ƒ',caption:'Tư duy logic. Khám phá quy luật.',color:'teal',chapters:{
  10:['Mệnh đề và tập hợp','Bất phương trình và hệ bất phương trình bậc nhất hai ẩn','Hệ thức lượng trong tam giác','Vectơ','Các số đặc trưng của mẫu số liệu không ghép nhóm','Hàm số, đồ thị và ứng dụng','Phương pháp tọa độ trong mặt phẳng','Đại số tổ hợp','Tính xác suất theo định nghĩa cổ điển'],
  11:['Hàm số lượng giác và phương trình lượng giác','Dãy số, cấp số cộng và cấp số nhân','Các số đặc trưng của mẫu số liệu ghép nhóm','Quan hệ song song trong không gian','Giới hạn và hàm số liên tục','Hàm số mũ và hàm số lôgarit','Quan hệ vuông góc trong không gian','Các quy tắc tính xác suất','Đạo hàm'],
  12:['Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số','Vectơ và hệ tọa độ trong không gian','Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm','Nguyên hàm và tích phân','Phương pháp tọa độ trong không gian','Xác suất có điều kiện']}},
 {id:'ly',name:'Vật lý',full:'Vật lý',symbol:'↗',caption:'Hiểu hiện tượng. Kết nối cuộc sống.',color:'blue',chapters:{
  10:['Mở đầu','Động học','Động lực học','Năng lượng, công, công suất','Động lượng','Chuyển động tròn','Biến dạng của vật rắn. Áp suất chất lỏng'],
  11:['Dao động','Sóng','Điện trường','Dòng điện. Mạch điện'],
  12:['Vật lý nhiệt','Khí lí tưởng','Từ trường','Vật lý hạt nhân']}},
 {id:'hoa',name:'Hóa học',full:'Hóa học',symbol:'⚗',caption:'Từ nguyên tử đến những biến đổi.',color:'amber',chapters:{
  10:['Cấu tạo nguyên tử','Bảng tuần hoàn các nguyên tố hóa học và định luật tuần hoàn','Liên kết hóa học','Phản ứng oxi hóa – khử','Năng lượng hóa học','Tốc độ phản ứng hóa học','Nguyên tố nhóm VIIA'],
  11:['Cân bằng hóa học','Nitrogen và sulfur','Đại cương về hóa học hữu cơ','Hydrocarbon','Dẫn xuất halogen – Alcohol – Phenol','Hợp chất carbonyl – Carboxylic acid'],
  12:['Ester – Lipid','Carbohydrate','Hợp chất chứa nitrogen','Polymer','Pin điện và điện phân','Đại cương về kim loại','Nguyên tố nhóm IA và nhóm IIA','Sơ lược về dãy kim loại chuyển tiếp thứ nhất và phức chất']}}
];
// Chapter names are an organizational reference. Adapt to your textbook before adding a full bank.
const q=(prompt,options,answer,explanation,hint,difficulty='Dễ')=>({prompt,options,answer,explanation,hint,difficulty});
const bank={
 'toan-10':[
 q('Phát biểu nào sau đây là một mệnh đề?', ['Số 2 là số nguyên tố.','Bạn đã làm bài chưa?','Hãy mở sách trang 10.','Số này đẹp quá!'],0,'Mệnh đề là một khẳng định có thể xác định là đúng hoặc sai. “Số 2 là số nguyên tố” là một khẳng định đúng.','Tìm câu khẳng định có giá trị đúng hoặc sai xác định.'),
 q('Cho A = {1; 2; 3} và B = {2; 3; 4}. Tập hợp A ∩ B là:', ['{1; 2; 3; 4}','{2; 3}','{1; 4}','{1}'],1,'Giao của hai tập hợp gồm các phần tử thuộc cả hai tập hợp. Các phần tử chung của A và B là 2 và 3.','Liệt kê những phần tử xuất hiện trong cả A và B.'),
 q('Phủ định của mệnh đề “Mọi số thực x đều có x² ≥ 0” là:', ['Mọi số thực x đều có x² < 0.','Tồn tại số thực x sao cho x² < 0.','Tồn tại số thực x sao cho x² ≥ 0.','Mọi số thực x đều có x² > 0.'],1,'Phủ định của “với mọi x, P(x)” là “tồn tại x sao cho không P(x)”. Phủ định của x² ≥ 0 là x² < 0.','Đổi “mọi” thành “tồn tại” và phủ định bất đẳng thức.','Trung bình')],
 'toan-11':[
 q('Giá trị của sin(π/2) bằng:', ['0','1','−1','1/2'],1,'Trên đường tròn lượng giác, góc π/2 có điểm biểu diễn (0; 1), nên sin(π/2) = 1.','Sin là tung độ của điểm trên đường tròn lượng giác.'),
 q('Chu kì cơ bản của hàm số y = sin x là:', ['π','2π','π/2','4π'],1,'Hàm sin thỏa mãn sin(x + 2π) = sin x với mọi x; chu kì dương nhỏ nhất là 2π.','Một vòng trên đường tròn lượng giác tương ứng bao nhiêu radian?'),
 q('Nghiệm của phương trình sin x = 0 là:', ['x = π/2 + kπ, k ∈ ℤ','x = kπ, k ∈ ℤ','x = 2kπ + π/4, k ∈ ℤ','x = π/4 + kπ, k ∈ ℤ'],1,'Sin x bằng 0 tại các điểm nằm trên trục hoành của đường tròn lượng giác, tức x = kπ với k nguyên.','Xác định các góc có tung độ bằng 0.','Trung bình')],
 'toan-12':[
 q('Cho f(x) = x³ − 3x. Đạo hàm f′(x) là:', ['3x² − 3','x² − 3','3x² + 3','3x − 3'],0,'Lấy đạo hàm từng hạng tử: (x³)′ = 3x² và (−3x)′ = −3. Vậy f′(x) = 3x² − 3.','Dùng công thức (xⁿ)′ = nxⁿ⁻¹.'),
 q('Hàm số y = x² nghịch biến trên khoảng nào?', ['(0; +∞)','(−∞; 0)','(−∞; +∞)','(1; +∞)'],1,'Ta có y′ = 2x. Trên (−∞; 0), y′ < 0 nên hàm số nghịch biến.','Xét dấu của đạo hàm y′ = 2x.'),
 q('Hàm số y = x³ − 3x có điểm cực đại tại:', ['x = 1','x = 0','x = −1','x = 3'],2,'y′ = 3(x − 1)(x + 1). Khi đi qua x = −1, đạo hàm đổi dấu từ dương sang âm, nên hàm đạt cực đại tại x = −1.','Giải y′ = 0 rồi xét dấu ở hai bên nghiệm.','Trung bình')],
 'ly-10':[
 q('Đơn vị của độ dài trong hệ SI là:', ['Mét (m)','Giây (s)','Kilôgam (kg)','Kelvin (K)'],0,'Mét, kí hiệu m, là đơn vị cơ bản của độ dài trong hệ đơn vị SI.','Phân biệt đơn vị độ dài với thời gian và khối lượng.'),
 q('Dụng cụ phù hợp nhất để đo đường kính ngoài của một viên bi nhỏ là:', ['Đồng hồ bấm giây','Thước kẹp','Lực kế','Nhiệt kế'],1,'Thước kẹp có thể đo đường kính ngoài với độ chính xác phù hợp hơn thước thông thường.','Chọn dụng cụ đo kích thước nhỏ.'),
 q('Đo chiều dài ba lần được 10,1 cm; 10,2 cm; 10,3 cm. Giá trị trung bình là:', ['10,1 cm','10,2 cm','10,3 cm','30,6 cm'],1,'Giá trị trung bình bằng (10,1 + 10,2 + 10,3)/3 = 10,2 cm.','Cộng ba kết quả rồi chia cho số lần đo.')],
 'ly-11':[
 q('Một dao động có chu kì T = 0,5 s. Tần số của dao động là:', ['0,5 Hz','1 Hz','2 Hz','5 Hz'],2,'Tần số f = 1/T = 1/0,5 = 2 Hz.','Tần số là nghịch đảo của chu kì.'),
 q('Vật dao động điều hòa có phương trình x = 4cos(2πt) cm. Biên độ là:', ['2 cm','4 cm','2π cm','8 cm'],1,'Trong x = A cos(ωt + φ), A là biên độ. Ở đây A = 4 cm.','Đọc hệ số đứng trước hàm cos.'),
 q('Trong dao động điều hòa, tốc độ của vật lớn nhất khi vật:', ['Ở vị trí biên dương','Ở vị trí biên âm','Đi qua vị trí cân bằng','Có gia tốc lớn nhất về độ lớn'],2,'Ở vị trí cân bằng, thế năng nhỏ nhất và động năng lớn nhất, vì vậy tốc độ đạt cực đại.','Xét sự chuyển hóa giữa động năng và thế năng.','Trung bình')],
 'ly-12':[
 q('Trong hệ SI, đơn vị của nhiệt độ nhiệt động lực học là:', ['Độ Celsius (°C)','Kelvin (K)','Joule (J)','Watt (W)'],1,'Kelvin, kí hiệu K, là đơn vị cơ bản của nhiệt độ nhiệt động lực học trong SI.','Đơn vị này có kí hiệu K.'),
 q('Ở áp suất khí quyển tiêu chuẩn, nhiệt độ nước đá đang nóng chảy gần bằng:', ['0 °C','100 °C','−100 °C','273 °C'],0,'Ở áp suất khí quyển tiêu chuẩn, nước đá tinh khiết nóng chảy ở khoảng 0 °C.','Phân biệt nhiệt độ nóng chảy với nhiệt độ sôi của nước.'),
 q('Nội năng của một vật là:', ['Chỉ động năng chuyển động của cả vật','Tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật','Chỉ thế năng trọng trường của vật','Nhiệt lượng vật luôn chứa sẵn'],1,'Nội năng gồm động năng chuyển động nhiệt và thế năng tương tác của các phân tử cấu tạo nên vật. Nhiệt lượng là năng lượng truyền do chênh lệch nhiệt độ.','Xét năng lượng ở cấp độ phân tử.','Trung bình')],
 'hoa-10':[
 q('Hạt nào trong nguyên tử mang điện tích âm?', ['Proton','Neutron','Electron','Hạt nhân'],2,'Electron mang điện tích âm; proton mang điện tích dương và neutron không mang điện.','Hạt này chuyển động trong vùng vỏ nguyên tử.'),
 q('Một nguyên tử trung hòa có 11 proton. Số electron của nguyên tử đó là:', ['10','11','12','22'],1,'Nguyên tử trung hòa có số proton bằng số electron, nên có 11 electron.','Tổng điện tích dương bằng độ lớn tổng điện tích âm.'),
 q('Nguyên tử có số khối A = 23 và số hiệu nguyên tử Z = 11. Số neutron là:', ['11','12','23','34'],1,'Số khối A = Z + N. Suy ra N = A − Z = 23 − 11 = 12.','Số khối bằng tổng số proton và neutron.')],
 'hoa-11':[
 q('Khi một hệ phản ứng thuận nghịch đạt trạng thái cân bằng, điều nào đúng?', ['Phản ứng thuận dừng lại','Phản ứng nghịch dừng lại','Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch','Nồng độ mọi chất đều bằng nhau'],2,'Cân bằng hóa học là cân bằng động: phản ứng thuận và nghịch vẫn diễn ra với tốc độ bằng nhau.','Chú ý cân bằng là trạng thái động.'),
 q('Với phản ứng N₂(g) + 3H₂(g) ⇌ 2NH₃(g), biểu thức Kc là:', ['[NH₃]² / ([N₂][H₂]³)','[N₂][H₂] / [NH₃]','[NH₃] / ([N₂][H₂])','[N₂][H₂]³ / [NH₃]²'],0,'Trong biểu thức Kc, nồng độ sản phẩm ở tử, chất phản ứng ở mẫu; số mũ là hệ số trong phương trình cân bằng.','Đặt sản phẩm ở tử và dùng hệ số phản ứng làm số mũ.','Trung bình'),
 q('Chất xúc tác ảnh hưởng thế nào đến vị trí cân bằng hóa học?', ['Luôn chuyển dịch theo chiều thuận','Luôn chuyển dịch theo chiều nghịch','Không làm thay đổi vị trí cân bằng','Làm mọi phản ứng dừng lại'],2,'Chất xúc tác làm tăng tốc độ cả hai chiều và giúp hệ đạt cân bằng nhanh hơn, không làm thay đổi vị trí cân bằng.','Phân biệt tốc độ đạt cân bằng với vị trí cân bằng.')],
 'hoa-12':[
 q('Công thức nào sau đây là của một ester?', ['CH₃COOCH₃','CH₃COOH','C₂H₅OH','CH₃CHO'],0,'CH₃COOCH₃ có nhóm chức ester –COO– nối với gốc hydrocarbon. Các chất còn lại là acid, alcohol và aldehyde.','Tìm nhóm chức –COO–.'),
 q('Thủy phân ethyl acetate trong dung dịch NaOH thu được:', ['CH₃COONa và C₂H₅OH','CH₃OH và C₂H₅COONa','CH₃COOH và NaCl','CH₄ và CO₂'],0,'CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH. Đây là phản ứng xà phòng hóa ester.','Tách phần CH₃COO– và gốc ethyl của ester.','Trung bình'),
 q('Chất béo là triester của glycerol với:', ['Acid béo','Acid hydrochloric','Acid sulfuric','Mọi acid vô cơ'],0,'Chất béo là triester tạo bởi glycerol và các acid béo.','Xét các acid carboxylic mạch dài trong lipid.')]
};
export function chapters(subject,grade){const item=subjects.find(s=>s.id===subject);return (item?.chapters[grade]||[]).map((name,i)=>({id:i+1,name,questions:subject==='toan'&&Number(grade)===11&&i===0?chapter1Questions:subject==='toan'&&Number(grade)===11&&i===2?chapter3Questions:i===0?(bank[subject+'-'+grade]||[]).map((item,j)=>({...item,id:`${subject}-${grade}-1-${j+1}`})):[]}));}
