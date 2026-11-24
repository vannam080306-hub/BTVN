export const vdc2 = [
  {
    "id": "toan-12-2-vdc-1",
    "sourceNumber": 1,
    "sourcePage": 1,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 1
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Cho hình chóp \\(S.ABCD\\) có thể tích bằng \\(2\\) và đáy \\(ABCD\\) là hình bình hành. Lấy các điểm \\(M,N\\) lần lượt thuộc các cạnh \\(SB,SD\\) thỏa mãn \\(\\dfrac{SM}{SB}=\\dfrac{SN}{SD}=k\\) \\((0<k<1)\\). Mặt phẳng \\((AMN)\\) cắt cạnh \\(SC\\) tại điểm \\(P\\). Biết khối chóp \\(S.AMPN\\) có thể tích bằng \\(\\dfrac13\\), khi đó giá trị của \\(k\\) bằng",
    "explanation": "Gọi \\(O\\) là tâm hình bình hành và \\(I\\) là giao điểm của \\(MN\\) với \\(SO\\). Trong tam giác \\(SBD\\), vì hai cạnh bị chia cùng tỉ số nên \\(MN\\) song song \\(BD\\). Từ các tam giác đồng dạng, \\(SI=k\\cdot SO\\).\nTrong mặt phẳng \\((SAC)\\), ba điểm \\(A,I,P\\) thẳng hàng vì cùng thuộc cả hai mặt phẳng \\((SAC)\\) và \\((AMN)\\). Viết \\(t\\) là tỉ số \\(SP\\) trên \\(SC\\). Chọn \\(S\\) làm gốc, dùng hai vectơ \\(\\overrightarrow{SA},\\overrightarrow{SC}\\) làm cơ sở. Khi đó \\(A=(1;0),P=(0;t),O=(0{,}5;0{,}5),I=(0{,}5k;0{,}5k)\\).\nTrên đường \\(AP\\), tổng hoành độ chia hoành độ của \\(A\\) và tung độ chia tung độ của \\(P\\) bằng \\(1\\). Phương trình đường thẳng là\n\\[u+\\frac vt=1.\\]\nThay tọa độ \\(I\\) rồi giải theo \\(t\\):\n\\[\\frac k2+\\frac{k}{2t}=1\\Rightarrow k+\\frac kt=2\\Rightarrow t=\\frac{k}{2-k}.\\]\nMặt phẳng \\((SAC)\\) chia hình chóp lớn thành hai phần bằng nhau, mỗi phần thể tích \\(1\\). Trong mỗi phần, hai cạnh xuất phát từ \\(S\\) bị thu theo tỉ số \\(k\\) và \\(t\\), cạnh \\(SA\\) giữ nguyên. Tứ diện nhỏ có thể tích \\(kt\\).\n\\[2kt=\\frac13\\Rightarrow 6k^2=2-k\\Rightarrow(2k-1)(3k+2)=0.\\]\nVì \\(0<k<1\\) nên \\(k\\) bằng một phần hai. Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\frac12\\)",
      "\\(\\frac13\\)",
      "\\(\\frac23\\)",
      "\\(\\frac14\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-2",
    "sourceNumber": 2,
    "sourcePage": 1,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 1
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Cho hình chóp \\(S.ABCD\\) có đáy là hình bình hành, một mặt phẳng qua \\(A\\) và trung điểm của cạnh \\(SC\\), cắt cạnh \\(SB,SD\\) lần lượt tại \\(M\\) và \\(N\\). Đặt \\(\\dfrac{SM}{SB}=x,\\ \\dfrac{SN}{SD}=y\\), khẳng định nào dưới đây đúng?",
    "explanation": "Lấy \\(S\\) làm gốc và dùng ba vectơ \\(\\overrightarrow{SA},\\overrightarrow{SB},\\overrightarrow{SD}\\) làm cơ sở. Vì hai đường chéo đáy có cùng trung điểm, vectơ \\(\\overrightarrow{SC}\\) bằng \\(\\overrightarrow{SB}+\\overrightarrow{SD}-\\overrightarrow{SA}\\). Do đó \\(C=(-1;1;1)\\).\nTrong cơ sở này, \\(A=(1;0;0),M=(0;x;0),N=(0;0;y)\\). Mặt phẳng đi qua ba điểm chắn trục ấy có phương trình\n\\[u+\\frac vx+\\frac wy=1.\\]\nTrung điểm \\(I\\) của \\(SC\\) có tọa độ \\((-0{,}5;0{,}5;0{,}5)\\). Thay vào phương trình mặt phẳng và nhân hai vế với \\(2\\):\n\\[-\\frac12+\\frac1{2x}+\\frac1{2y}=1\\Rightarrow\\frac1x+\\frac1y=3.\\]\nNhân hai vế với \\(xy\\), được \\(y+x=3xy\\). Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(x+y=3xy\\)",
      "\\(x+y=2xy\\)",
      "\\(x+y=4xy\\)",
      "\\(x+y=xy\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-3",
    "sourceNumber": 3,
    "sourcePage": 2,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 2
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho ba điểm \\(E(1;3;2),F(0;-1;5),K(2;4;-1)\\) và tam giác \\(ABC\\) thoả mãn \\(\\overrightarrow{AE}+\\overrightarrow{BF}+\\overrightarrow{CK}=\\vec0\\). Toạ độ trọng tâm \\(G\\) của tam giác \\(ABC\\) là",
    "explanation": "Theo quy tắc hiệu hai vectơ vị trí, vectơ \\(\\overrightarrow{AE}\\) bằng \\(\\overrightarrow{OE}-\\overrightarrow{OA}\\). Viết tương tự cho \\(\\overrightarrow{BF}\\) và \\(\\overrightarrow{CK}\\), rồi chuyển vế. Ta được tổng \\(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}\\) bằng tổng \\(\\overrightarrow{OE}+\\overrightarrow{OF}+\\overrightarrow{OK}\\).\nVì \\(G\\) là trọng tâm, mỗi tọa độ của \\(G\\) bằng một phần ba tổng tọa độ tương ứng của \\(A,B,C\\). Dùng tổng của \\(E,F,K\\) vừa tìm:\n\\[x_G=\\frac{1+0+2}{3}=1;\\quad y_G=\\frac{3-1+4}{3}=2.\\]\n\\[z_G=\\frac{2+5-1}{3}=2.\\]\nVậy \\(G=(1;2;2)\\). Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(G(1;2;2)\\)",
      "\\(G(-1;-4;3)\\)",
      "\\(G(2;2;1)\\)",
      "\\(G(1;1;-3)\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-4",
    "sourceNumber": 4,
    "sourcePage": 2,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 2
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\), cho vectơ \\(\\vec a=(1;-2;4)\\), \\(\\vec b=(x_0;y_0;z_0)\\) cùng phương với vectơ \\(\\vec a\\). Biết vectơ \\(\\vec b\\) tạo với tia \\(Oy\\) một góc nhọn và \\(|\\vec b|=\\sqrt{21}\\). Giá trị của tổng \\(x_0+y_0+z_0\\) bằng",
    "explanation": "Vì cùng phương, \\(\\vec b=k\\vec a=(k;-2k;4k)\\). Độ dài \\(\\vec a\\) bằng \\(\\sqrt{1+4+16}=\\sqrt{21}\\). Hai vectơ dài bằng nhau nên \\(|k|=1\\).\nVectơ đơn vị theo \\(Oy\\) là \\((0;1;0)\\). Góc nhọn nghĩa là tích vô hướng của \\(\\vec b\\) với vectơ này dương, tức \\(-2k>0\\). Trong hai số \\(-1\\) và \\(1\\) chỉ có \\(k=-1\\) phù hợp.\nDo đó \\(\\vec b=(-1;2;-4)\\). Tổng tọa độ là \\(-1+2-4=-3\\). Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(-3\\)",
      "\\(3\\)",
      "\\(-6\\)",
      "\\(6\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-5",
    "sourceNumber": 5,
    "sourcePage": 2,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 2
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Chọn hệ trục toạ độ \\(Oxyz\\) trong không gian có gốc \\(O\\) tại vị trí của radar và đơn vị độ dài trên mỗi trục toạ độ là \\(1\\) km. Radar phát hiện một máy bay chiến đấu di chuyển với vận tốc và hướng không đổi từ điểm \\(M(500;200;10)\\) đến điểm \\(N(800;300;10)\\) trong 20 phút.",
    "explanation": "A. Sai. Hoành độ và tung độ đều dương và tăng dọc đoạn đường, độ cao giữ nguyên. Vậy bình phương khoảng cách đến \\(O\\) tăng, máy bay đi xa \\(O\\).\nB. Đúng. Lấy tọa độ điểm cuối trừ tọa độ điểm đầu:\n\\[\\overrightarrow{MN}=(300;100;0),\\qquad MN=\\sqrt{300^2+100^2}=100\\sqrt{10}\\ \\mathrm{km}.\\]\nC. Sai. 20 phút bằng một phần ba giờ. Tốc độ là\n\\[v=\\frac{100\\sqrt{10}}{\\frac13}=300\\sqrt{10}\\ \\mathrm{km/h}.\\]\nD. Sai. Bốn phút bằng một phần năm thời gian đi từ \\(M\\) tới \\(N\\). Trong bốn phút tiếp theo, độ dời là \\((60;20;0)\\).\n\\[Q=(800+60;300+20;10)=(860;320;10).\\]\n\\[a+b+c=860+320+10=1190.\\]\nChọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "Máy bay đang di chuyển theo hướng tiến lại gần vị trí đặt radar.",
      "Khoảng cách \\(MN=100\\sqrt{10}\\) km.",
      "Tốc độ của máy bay khi di chuyển từ \\(M\\) đến \\(N\\) là \\(150\\sqrt{10}\\) km/h.",
      "Nếu tiếp tục giữ nguyên vận tốc và hướng bay thì toạ độ của máy bay sau 4 phút tiếp theo là \\(Q(a;b;c)\\) với \\(a+b+c=1191\\)."
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-6",
    "sourceNumber": 6,
    "sourcePage": 3,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 3
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong hệ trục toạ độ \\(Oxyz\\), cho 3 điểm \\(A(5;-2;0),B(4;5;-2)\\) và \\(C(0;3;2)\\). Điểm \\(M\\) di chuyển trên trục \\(Ox\\). Đặt \\(Q=2|\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}|+3|\\overrightarrow{MB}+\\overrightarrow{MC}|\\). Biết giá trị nhỏ nhất của \\(Q\\) có dạng \\(a\\sqrt b\\) trong đó \\(a,b\\in\\mathbb N\\) và \\(b\\) là số nguyên tố. Tính \\(a+b\\).",
    "explanation": "Trọng tâm \\(G\\) của \\(ABC\\) là \\((3;2;0)\\). Trung điểm \\(H\\) của \\(BC\\) là \\((2;4;0)\\). Theo quy tắc trọng tâm và trung điểm, hai tổng vectơ trong đề lần lượt là \\(3\\overrightarrow{MG}\\) và \\(2\\overrightarrow{MH}\\).\n\\[Q=2\\times3MG+3\\times2MH=6(MG+MH).\\]\nCả \\(G,H,M\\) nằm trong mặt phẳng \\((Oxy)\\). Đối xứng \\(G\\) qua \\(Ox\\) được \\(G'(3;-2;0)\\), nên \\(MG=MG'\\).\nVì \\(G'\\) và \\(H\\) ở hai phía \\(Ox\\), đoạn \\(G'H\\) cắt \\(Ox\\). Tại giao điểm ấy, \\(MG'+MH=G'H\\) là nhỏ nhất.\n\\[G'H=\\sqrt{(2-3)^2+(4+2)^2}=\\sqrt{37}.\\]\nVậy \\(Q\\) nhỏ nhất bằng \\(6\\sqrt{37}\\), nên \\(a+b=6+37=43\\). Chọn C.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(38\\)",
      "\\(23\\)",
      "\\(43\\)",
      "\\(18\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-vdc-7",
    "sourceNumber": 7,
    "sourcePage": 3,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 3
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(-\\sqrt2;0;0),B(\\sqrt2;0;0),C(4;1;-2)\\) và \\(D(1;-2;4)\\). Điểm \\(M\\) thay đổi thỏa mãn \\(MA+MB=2\\sqrt3\\). Giá trị nhỏ nhất của biểu thức \\(T=2MC^2+MD^2\\) thuộc khoảng nào dưới đây?",
    "explanation": "Chọn \\(K\\) có tọa độ bằng trung bình có trọng số \\(2\\) cho \\(C\\) và \\(1\\) cho \\(D\\). Khi đó \\(K=(3;0;0)\\), và \\(2\\overrightarrow{KC}+\\overrightarrow{KD}=\\vec0\\). Khai triển bình phương theo \\(\\overrightarrow{MK}\\), các tích chéo triệt tiêu.\n\\[T=3MK^2+2KC^2+KD^2=3MK^2+2\\times6+24=3MK^2+36.\\]\nĐặt \\(M=(x;y;z)\\). Một khoảng cách trong không gian không nhỏ hơn độ dài hình chiếu lên \\(Ox\\), nên \\(MA+MB\\ge |x+\\sqrt2|+|x-\\sqrt2|\\ge 2x\\). Vậy \\(x\\le\\sqrt3\\).\n\\[MK\\ge |3-x|\\ge 3-\\sqrt3.\\]\nĐiểm \\(M(\\sqrt3;0;0)\\) cho \\(MA+MB=2\\sqrt3\\) và đạt cả hai dấu bằng. Thay vào \\(T\\):\n\\[T_{\\min}=3(3-\\sqrt3)^2+36=72-18\\sqrt3\\approx40{,}82.\\]\nGiá trị này thuộc \\((40;41)\\). Chọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((-\\infty;40)\\)",
      "\\((40;41)\\)",
      "\\((41;42)\\)",
      "\\((42;+\\infty)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-8",
    "sourceNumber": 8,
    "sourcePage": 3,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 3
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho hình thang \\(ABCD\\) có \\(AB\\) song song với \\(CD\\). Biết \\(A(1;2;1),B(2;0;-1),C(6;1;0)\\) và diện tích hình thang \\(ABCD\\) bằng \\(6\\sqrt2\\). Gọi \\(D(a;b;c)\\), khi đó biểu thức \\(T=a-2b+4c\\) bằng",
    "explanation": "\\[\\overrightarrow{AB}=(1;-2;-2),\\qquad\\overrightarrow{AC}=(5;-1;-1),\\qquad AB=3.\\]\nTích có hướng \\(\\overrightarrow{AB}\\times\\overrightarrow{AC}=(0;-9;9)\\) có độ dài \\(9\\sqrt2\\). Đây là hai lần diện tích tam giác \\(ABC\\), đồng thời bằng \\(AB\\) nhân với khoảng cách \\(h\\) từ \\(C\\) đến \\(AB\\).\n\\[h=\\frac{9\\sqrt2}{3}=3\\sqrt2.\\]\n\\[S=\\frac{AB+CD}{2}\\times h\\Rightarrow 6\\sqrt2=\\frac{3+CD}{2}\\times3\\sqrt2\\Rightarrow CD=1.\\]\nTrong hình thang có các đỉnh theo thứ tự \\(A,B,C,D\\), vectơ \\(\\overrightarrow{CD}\\) ngược hướng \\(\\overrightarrow{AB}\\) và dài bằng một phần ba. Do đó \\(D=C-\\frac13\\overrightarrow{AB}\\).\n\\[a=\\frac{17}{3},\\quad b=\\frac53,\\quad c=\\frac23.\\]\n\\[a-2b+4c=\\frac{17-10+8}{3}=5.\\]\nChọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(T=3\\)",
      "\\(T=5\\)",
      "\\(T=6\\)",
      "\\(T=8\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-9",
    "sourceNumber": 9,
    "sourcePage": 4,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 4
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho bốn điểm \\(A(2;3;-1),B(0;4;2),C(1;2;-1)\\) và \\(D(7;2;1)\\). Điểm \\(M\\) di chuyển trên trục \\(Ox\\). Đặt \\(P=4|\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}|+6|\\overrightarrow{MC}+\\overrightarrow{MD}|\\). Tính giá trị nhỏ nhất của \\(P\\)?",
    "explanation": "Tính trọng tâm \\(G=(1;3;0)\\) của \\(ABC\\) và trung điểm \\(H=(4;2;0)\\) của \\(CD\\). Vì tổng thứ nhất bằng \\(3\\overrightarrow{MG}\\) và tổng thứ hai bằng \\(2\\overrightarrow{MH}\\), biểu thức trở thành\n\\[P=4\\times3MG+6\\times2MH=12(MG+MH).\\]\nĐối xứng \\(G\\) qua \\(Ox\\) trong mặt phẳng \\((Oxy)\\) được \\(G'=(1;-3;0)\\). Với \\(M\\) trên \\(Ox\\), \\(MG=MG'\\), nên \\(MG+MH\\ge G'H\\).\n\\[G'H=\\sqrt{(4-1)^2+(2+3)^2}=\\sqrt{34}.\\]\nĐoạn \\(G'H\\) cắt \\(Ox\\) vì tung độ hai đầu trái dấu. Tại giao điểm đó có dấu bằng. Vậy \\(P\\) nhỏ nhất bằng \\(12\\sqrt{34}\\). Chọn C.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(P_{\\min}=48\\)",
      "\\(P_{\\min}=3\\)",
      "\\(P_{\\min}=12\\sqrt{34}\\)",
      "\\(P_{\\min}=12\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-vdc-10",
    "sourceNumber": 10,
    "sourcePage": 4,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 4
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho hai điểm \\(A(0;0;10)\\) và \\(B(3;4;6)\\). Xét các điểm \\(M\\) thay đổi sao cho tam giác \\(OAM\\) không có góc tù và có diện tích bằng \\(15\\). Giá trị nhỏ nhất của độ dài đoạn thẳng \\(MB\\) thuộc khoảng nào dưới đây?",
    "explanation": "Đặt \\(M=(x;y;z)\\). Lấy \\(OA=10\\) làm đáy. Chiều cao của tam giác là khoảng cách từ \\(M\\) đến \\(Oz\\), nên \\(15=5\\sqrt{x^2+y^2}\\), hay \\(x^2+y^2=9\\).\nHai góc tại \\(O\\) và \\(A\\) không tù cho \\(0\\le z\\le10\\). Góc tại \\(M\\) không tù khi \\(\\overrightarrow{MO}\\cdot\\overrightarrow{MA}\\ge0\\), tức là\n\\[x^2+y^2+z(z-10)\\ge0\\Rightarrow(z-1)(z-9)\\ge0.\\]\nVậy \\(z\\) thuộc \\([0;1]\\) hoặc \\([9;10]\\). Độ cao gần \\(6\\) nhất là \\(z=9\\), chênh \\(3\\). Hình chiếu ngang của \\(M\\) cách \\(O\\) một khoảng \\(3\\), còn hình chiếu của \\(B\\) cách \\(O\\) một khoảng \\(5\\). Khoảng cách ngang nhỏ nhất là \\(5-3=2\\), đạt khi hai hình chiếu nằm trên cùng một tia.\n\\[MB_{\\min}=\\sqrt{2^2+3^2}=\\sqrt{13}\\approx3{,}61.\\]\nGiá trị nằm trong \\((3;4)\\). Chọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((4;5)\\)",
      "\\((3;4)\\)",
      "\\((2;3)\\)",
      "\\((6;7)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-11",
    "sourceNumber": 11,
    "sourcePage": 5,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 5
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\), cho hai điểm \\(A(1;-2;3),B(4;1;-1)\\). Điểm \\(M(a;b;c)\\) thỏa mãn \\(MA\\cdot\\overrightarrow{MA}=4MB\\cdot\\overrightarrow{MB}\\). Giá trị của biểu thức \\(a+b+c\\) là",
    "explanation": "Lấy độ dài hai vế, ta có \\(MA^2=4MB^2\\). Do độ dài dương, \\(MA=2MB\\). Thay vào đẳng thức ban đầu rồi chia cho \\(2MB\\), được \\(\\overrightarrow{MA}=2\\overrightarrow{MB}\\).\nViết từng tọa độ của hai vectơ:\n\\[1-a=2(4-a)\\Rightarrow a=7.\\]\n\\[-2-b=2(1-b)\\Rightarrow b=4.\\]\n\\[3-c=2(-1-c)\\Rightarrow c=-5.\\]\nVậy \\(a+b+c=7+4-5=6\\). Chọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\frac15\\)",
      "\\(6\\)",
      "\\(-2\\)",
      "\\(-\\frac23\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-12",
    "sourceNumber": 12,
    "sourcePage": 5,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 5
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ trục toạ độ \\(Oxyz\\), cho 4 điểm \\(A(2;3;-1),B(0;4;2),C(1;2;-1),D(7;2;1)\\). Đặt \\(T=8|\\overrightarrow{NA}+\\overrightarrow{NB}+\\overrightarrow{NC}|+12|\\overrightarrow{NC}+\\overrightarrow{ND}|\\) trong đó \\(N\\) di chuyển trên trục \\(Ox\\). Giá trị nhỏ nhất của \\(T\\) thuộc khoảng nào dưới đây?",
    "explanation": "Gọi \\(G,H\\) lần lượt là trọng tâm \\(ABC\\) và trung điểm \\(CD\\). Tính theo tọa độ được \\(G(1;3;0),H(4;2;0)\\). Do đó tổng ba vectơ bằng \\(3\\overrightarrow{NG}\\) và tổng hai vectơ bằng \\(2\\overrightarrow{NH}\\).\n\\[T=8\\times3NG+12\\times2NH=24(NG+NH).\\]\nLấy \\(G'(1;-3;0)\\) đối xứng với \\(G\\) qua \\(Ox\\) trong mặt phẳng \\((Oxy)\\). Ta có \\(NG=NG'\\) và \\(NG'+NH\\ge G'H\\).\n\\[G'H=\\sqrt{(4-1)^2+(2+3)^2}=\\sqrt{34}.\\]\nĐoạn \\(G'H\\) cắt \\(Ox\\) nên tồn tại \\(N\\) đạt dấu bằng. Vậy \\(T\\) nhỏ nhất bằng \\(24\\sqrt{34}\\approx139{,}94\\), thuộc \\((130;150)\\). Chọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((80;100)\\)",
      "\\((130;150)\\)",
      "\\((62;80)\\)",
      "\\((100;130)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-13",
    "sourceNumber": 13,
    "sourcePage": 5,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 5
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho hai điểm \\(A(0;0;10)\\) và \\(B\\left(3;4;\\frac{19}2\\right)\\). Xét các điểm \\(M\\) thay đổi sao cho tam giác \\(OAM\\) không phải là tam giác nhọn và có diện tích bằng \\(20\\). Giá trị nhỏ nhất của độ dài đoạn \\(MB\\) thuộc khoảng nào dưới đây?",
    "explanation": "Đặt \\(M=(x;y;z)\\). Diện tích bằng một nửa \\(OA\\) nhân khoảng cách từ \\(M\\) tới \\(Oz\\), nên \\(20=5\\sqrt{x^2+y^2}\\). Do đó \\(x^2+y^2=16\\).\nTam giác không nhọn nghĩa là có ít nhất một góc vuông hoặc tù. Tại \\(O\\) điều này cho \\(z\\le0\\). Tại \\(A\\) cho \\(z\\ge10\\). Tại \\(M\\), tích vô hướng \\(\\overrightarrow{MO}\\cdot\\overrightarrow{MA}\\) phải không dương:\n\\[16+z(z-10)\\le0\\Leftrightarrow(z-2)(z-8)\\le0\\Leftrightarrow2\\le z\\le8.\\]\nTrong ba miền độ cao trên, giá trị gần \\(9{,}5\\) nhất là \\(10\\), chênh \\(0{,}5\\). Trong mặt phẳng ngang, hình chiếu của \\(M\\) cách \\(O\\) một khoảng \\(4\\) và của \\(B\\) cách \\(O\\) một khoảng \\(5\\). Khoảng cách ngang nhỏ nhất là \\(1\\).\n\\[MB_{\\min}=\\sqrt{1^2+0{,}5^2}=\\frac{\\sqrt5}{2}\\approx1{,}12.\\]\nGiá trị này thuộc khoảng từ \\(0\\) đến \\(1{,}5\\). Chọn D.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((5;10)\\)",
      "\\((3;5)\\)",
      "\\(\\left(\\frac32;3\\right)\\)",
      "\\(\\left(0;\\frac32\\right)\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-vdc-14",
    "sourceNumber": 14,
    "sourcePage": 6,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 6
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho bốn điểm \\(A(2;1;4),B(2;5;4),C\\left(-\\frac52;5;-1\\right),D(-3;1;-4)\\). Các điểm \\(M,N\\) thoả mãn \\(MA^2+3MB^2=48\\) và \\(ND^2=(\\overrightarrow{NC}+\\overrightarrow{BC})\\overrightarrow{ND}\\). Tìm độ dài ngắn nhất của đoạn thẳng \\(MN\\).",
    "explanation": "Lấy \\(I=\\dfrac{A+3B}{4}=(2;4;4)\\). Vì \\(\\overrightarrow{IA}+3\\overrightarrow{IB}=\\vec0\\), khai triển bình phương quanh \\(I\\) cho\n\\[MA^2+3MB^2=4MI^2+IA^2+3IB^2=4MI^2+9+3=48.\\]\nSuy ra \\(MI=3\\). Điểm \\(M\\) chạy trên mặt cầu tâm \\(I\\), bán kính \\(3\\).\nViết \\(ND^2=\\overrightarrow{ND}\\cdot\\overrightarrow{ND}\\) rồi chuyển vế. Ta được \\((\\overrightarrow{NC}+\\overrightarrow{BC}-\\overrightarrow{ND})\\cdot\\overrightarrow{ND}=0\\). Vectơ trong ngoặc bằng \\(2C-B-D=(-4;4;-2)\\), nên \\(N\\) nằm trên mặt phẳng qua \\(D\\) có pháp tuyến \\(\\vec n=(-2;2;-1)\\).\nVectơ \\(\\overrightarrow{DI}=(5;3;8)\\). Khoảng cách từ \\(I\\) đến mặt phẳng là\n\\[d=\\frac{|-2\\times5+2\\times3-8|}{\\sqrt{4+4+1}}=\\frac{12}{3}=4.\\]\nTâm cách mặt phẳng \\(4\\), bán kính bằng \\(3\\). Chọn \\(N\\) là hình chiếu của \\(I\\) và \\(M\\) ở phía \\(N\\) trên đường vuông góc, ta được \\(MN\\) nhỏ nhất bằng \\(4-3=1\\). Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(1\\)",
      "\\(4\\)",
      "\\(\\frac23\\)",
      "\\(0\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-15",
    "sourceNumber": 15,
    "sourcePage": 6,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 6
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho bốn điểm \\(A(1;3;-2),B(1;4;3),C(-2;5;2)\\) và \\(D(-1;-1;8)\\). Điểm \\(M\\) di động trên trục \\(Oy\\). Gọi \\(P=2|\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}|+3|\\overrightarrow{MA}+\\overrightarrow{MD}|\\). Giá trị nhỏ nhất của \\(P\\) bằng",
    "explanation": "Trọng tâm \\(G\\) của \\(ABC\\) là \\((0;4;1)\\). Trung điểm \\(H\\) của \\(AD\\) là \\((0;1;3)\\). Dùng các đẳng thức vectơ tại trọng tâm và trung điểm:\n\\[P=2\\times3MG+3\\times2MH=6(MG+MH).\\]\nTrong mặt phẳng \\((Oyz)\\), đối xứng \\(G\\) qua \\(Oy\\) được \\(G'(0;4;-1)\\). Khi \\(M\\) nằm trên \\(Oy\\) thì \\(MG=MG'\\).\n\\[MG+MH\\ge G'H=\\sqrt{(1-4)^2+(3+1)^2}=5.\\]\nĐường \\(G'H\\) cắt \\(Oy\\) vì cao độ hai đầu trái dấu, nên đạt được dấu bằng. Vậy \\(P\\) nhỏ nhất bằng \\(6\\times5=30\\). Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(30\\)",
      "\\(6\\sqrt{10}\\)",
      "\\(5\\)",
      "\\(6\\sqrt{29}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-16",
    "sourceNumber": 16,
    "sourcePage": 6,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 6
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho hai điểm \\(A(0;0;10)\\) và \\(B(3;4;6)\\). Xét các điểm \\(M\\) thay đổi sao cho \\(MB\\) luôn vuông góc \\(OA\\) và tam giác \\(OAM\\) diện tích bằng \\(15\\). Giá trị lớn nhất của độ dài đoạn thẳng \\(MB\\) thuộc khoảng nào dưới đây?",
    "explanation": "Gọi \\(M(x;y;z)\\). Vì \\(OA\\) thẳng đứng nên \\(MB\\) phải nằm ngang, suy ra \\(z=6\\).\nKhoảng cách từ \\(M\\) tới \\(OA\\) bằng hai lần diện tích chia đáy, tức \\(2\\times15:10=3\\). Vậy \\(M\\) nằm trên đường tròn trong mặt phẳng \\(z=6\\), tâm \\(I(0;0;6)\\), bán kính \\(3\\).\n\\[IB=\\sqrt{3^2+4^2}=5.\\]\nTheo bất đẳng thức tam giác, \\(MB\\le MI+IB=3+5=8\\). Chọn \\(M\\) đối diện \\(B\\) qua tâm theo phương \\(IB\\) để đạt dấu bằng. Vậy \\(MB\\) lớn nhất bằng \\(8\\), thuộc \\((7;9)\\). Chọn B.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((4;5)\\)",
      "\\((7;9)\\)",
      "\\((2;3)\\)",
      "\\((6;7)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-vdc-17",
    "sourceNumber": 17,
    "sourcePage": 7,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 7
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho điểm \\(A(4;0;0),B(1;2;3)\\). Gọi \\(M\\) là một điểm di động thoả mãn \\(\\overrightarrow{OM}\\cdot\\overrightarrow{OA}=\\frac{\\sqrt3}{2}OM\\cdot OA\\) và \\(\\overrightarrow{MA}\\cdot\\overrightarrow{MO}=0\\). Gọi \\(p,q\\) lần lượt là giá trị lớn nhất, giá trị nhỏ nhất của \\(BM\\). Giá trị \\(p^2+q^2\\) bằng",
    "explanation": "Đặt \\(r=OM,M(x;y;z)\\). Điều kiện đầu cho \\(4x=2\\sqrt3\\,r\\). Điều kiện thứ hai cho \\(x^2+y^2+z^2=4x\\), tức \\(r^2=4x\\).\nNếu \\(r>0\\), thay \\(4x=2\\sqrt3\\,r\\) được \\(r=2\\sqrt3\\) và \\(x=3\\). Do đó \\(y^2+z^2=12-9=3\\).\nTrong mặt phẳng \\(x=3\\), \\(M\\) nằm trên đường tròn tâm \\(I(3;0;0)\\), bán kính \\(\\sqrt3\\). Hình chiếu \\(H\\) của \\(B\\) là \\((3;2;3)\\), nên \\(IH=\\sqrt{13}\\) và \\(BH=2\\).\n\\[p^2=2^2+(\\sqrt{13}+\\sqrt3)^2;\\quad q^2=2^2+(\\sqrt{13}-\\sqrt3)^2.\\]\nCộng hai đẳng thức, hai hạng tử trái dấu triệt tiêu, được \\(p^2+q^2=8+2\\times(13+3)=40\\). Nếu kể cả \\(M=O\\) thì \\(BM^2=14\\) cũng nằm giữa hai cực trị. Chọn A.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(40\\)",
      "\\(30\\)",
      "\\(34-2\\sqrt{39}\\)",
      "\\(34+2\\sqrt{39}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-vdc-18",
    "sourceNumber": 18,
    "sourcePage": 7,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 7
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(2;0;2),B(0;2;0),C(1;0;3)\\). Gọi \\(M\\) là điểm trong không gian thoả mãn \\(MA^2+MC^2=MB^2\\). Tính \\(MP\\) với \\(P(3;-2;5)\\).",
    "explanation": "Đặt \\(M=(x;y;z)\\). Khai triển các bình phương rồi chuyển hết về vế trái:\n\\[(x-2)^2+y^2+(z-2)^2+(x-1)^2+y^2+(z-3)^2-x^2-(y-2)^2-z^2=0.\\]\n\\[x^2+y^2+z^2-6x+4y-10z+14=0.\\]\nNhóm theo từng ẩn và thêm các bình phương \\(9,4,25\\) vào cả hai vế:\n\\[(x-3)^2+(y+2)^2+(z-5)^2=9+4+25-14=24.\\]\nVế trái chính là \\(MP^2\\). Vậy \\(MP=\\sqrt{24}=2\\sqrt6\\). Chọn D.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\sqrt2\\)",
      "\\(2\\)",
      "\\(2\\sqrt5\\)",
      "\\(2\\sqrt6\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-vdc-19",
    "sourceNumber": 19,
    "sourcePage": 7,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 7
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho tam giác \\(ABC\\) có \\(A(1;2;-1),B(2;-1;3)\\) và \\(C(-4;7;5)\\). Gọi \\(D(a;b;c)\\) là chân đường phân giác trong \\(\\widehat B\\) của \\(\\triangle ABC\\). Giá trị của \\(a+b+2c\\) bằng",
    "explanation": "\\[BA=\\sqrt{1^2+(-3)^2+4^2}=\\sqrt{26}.\\]\n\\[BC=\\sqrt{(-6)^2+8^2+2^2}=\\sqrt{104}=2\\sqrt{26}.\\]\nTheo định lý phân giác, \\(AD:DC=BA:BC=1:2\\). Do đó \\(D\\) đi được một phần ba quãng đường từ \\(A\\) đến \\(C\\). Lấy từng tọa độ \\(D\\) bằng hai lần tọa độ \\(A\\) cộng tọa độ \\(C\\), rồi chia \\(3\\):\n\\[a=\\frac{2-4}{3}=-\\frac23;\\quad b=\\frac{4+7}{3}=\\frac{11}{3};\\quad c=\\frac{-2+5}{3}=1.\\]\n\\[a+b+2c=\\frac{-2+11}{3}+2=5.\\]\nChọn D.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(15\\)",
      "\\(4\\)",
      "\\(14\\)",
      "\\(5\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-vdc-20",
    "sourceNumber": 20,
    "sourcePage": 8,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 8
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho \\(A(1;2;0),B(3;-1;2),C(1;2;2),D(3;-1;1)\\) và \\(M\\in(Oxy)\\). Tìm giá trị lớn nhất của biểu thức \\(T=MA^2+2MB^2-MC^2-\\frac14MD^4\\).",
    "explanation": "\\(A\\) và \\(C\\) có cùng hình chiếu lên \\((Oxy)\\), cao độ lần lượt bằng \\(0\\) và \\(2\\). Vì \\(M\\) ở độ cao \\(0\\) nên \\(MC^2=MA^2+4\\).\n\\(B\\) và \\(D\\) cũng có cùng hình chiếu, cao độ là \\(2\\) và \\(1\\). Do đó \\(MB^2=MD^2+4-1=MD^2+3\\).\nĐặt \\(t=MD^2\\ge1\\). Thay các đẳng thức trên và hoàn thành bình phương:\n\\[T=-4+2(t+3)-\\frac{t^2}{4}=6-\\frac{(t-4)^2}{4}\\le6.\\]\nDấu bằng khi \\(MD^2=4\\). Điều này đạt được vì chỉ cần hình chiếu ngang của \\(M\\) cách \\((3;-1;0)\\) một khoảng \\(\\sqrt3\\). Chọn D.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(1\\)",
      "\\(\\frac74\\)",
      "\\(\\frac{15}4\\)",
      "\\(6\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-vdc-21",
    "sourceNumber": 21,
    "sourcePage": 8,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 8
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(P(7;9;0),Q(0;8;0)\\) và \\(R(-5;-7;0)\\). Điểm \\(M\\) di chuyển trong không gian thoả mãn \\(\\overrightarrow{MP}\\cdot\\overrightarrow{MR}+75=0\\). Giá trị nhỏ nhất của \\(MP+2MQ\\) bằng",
    "explanation": "Gọi \\(I\\) là trung điểm \\(PR\\). Khi đó \\(I(1;1;0),IP=10\\) và \\(\\overrightarrow{IR}=-\\overrightarrow{IP}\\). Khai triển tích vô hướng theo \\(\\overrightarrow{MI}\\):\n\\[\\overrightarrow{MP}\\cdot\\overrightarrow{MR}=(\\overrightarrow{MI}+\\overrightarrow{IP})\\cdot(\\overrightarrow{MI}-\\overrightarrow{IP})=MI^2-IP^2=-75.\\]\nSuy ra \\(MI^2=25\\), tức \\(M\\) nằm trên mặt cầu tâm \\(I\\), bán kính \\(5\\). Lấy \\(P'\\) trên đoạn \\(IP\\) với \\(IP'=2{,}5\\).\nVì \\(IP':IM=IM:IP=1:2\\) và góc tại \\(I\\) chung, hai tam giác \\(IP'M\\) và \\(IMP\\) đồng dạng, nên \\(MP=2MP'\\).\n\\[MP+2MQ=2(MP'+MQ)\\ge2P'Q.\\]\nTọa độ \\(P'\\) là \\((2{,}5;3;0)\\), nên \\(P'Q=\\sqrt{2{,}5^2+5^2}=2{,}5\\sqrt5\\). \\(P'\\) nằm trong mặt cầu, \\(Q\\) ở ngoài vì \\(IQ=\\sqrt{50}>5\\). Đoạn \\(P'Q\\) cắt mặt cầu, nên có \\(M\\) đạt dấu bằng.\nVậy giá trị nhỏ nhất bằng \\(5\\sqrt5\\). Chọn C.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(5\\sqrt3\\)",
      "\\(5\\)",
      "\\(5\\sqrt5\\)",
      "\\(5\\sqrt2\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-vdc-22",
    "sourceNumber": 22,
    "sourcePage": 8,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 8
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\), cho hai điểm \\(A(3;5;-1)\\) và \\(B(1;1;3)\\). Tìm giá trị nhỏ nhất của \\(|\\overrightarrow{MA}+\\overrightarrow{MB}|\\) với \\(M\\in(Oxy)\\).",
    "explanation": "Trung điểm \\(I\\) của \\(AB\\) có tọa độ\n\\[I=\\left(\\frac{3+1}{2};\\frac{5+1}{2};\\frac{-1+3}{2}\\right)=(2;3;1).\\]\nVì \\(\\overrightarrow{IA}+\\overrightarrow{IB}=\\vec0\\), ta có \\(\\overrightarrow{MA}+\\overrightarrow{MB}=(\\overrightarrow{MI}+\\overrightarrow{IA})+(\\overrightarrow{MI}+\\overrightarrow{IB})=2\\overrightarrow{MI}\\).\nGọi \\(H(2;3;0)\\) là hình chiếu của \\(I\\) lên \\((Oxy)\\). Tam giác \\(IHM\\) vuông tại \\(H\\) nên \\(MI\\ge IH=1\\), đạt khi \\(M=H\\). Độ dài nhỏ nhất của tổng là \\(2\\times1=2\\). Chọn C.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(0\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-vdc-23",
    "sourceNumber": 23,
    "sourcePage": 8,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 8
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\), cho hai điểm \\(A(1;0;3)\\) và \\(B(1;-2;5)\\). Điểm \\(M(a;b;c)\\) thoả mãn \\(MA\\cdot\\overrightarrow{MA}=9MB\\cdot\\overrightarrow{MB}\\). Giá trị của biểu thức \\(a+b+c\\) bằng",
    "explanation": "Lấy độ dài hai vế được \\(MA^2=9MB^2\\), suy ra \\(MA=3MB\\). \\(M\\) không thể trùng \\(B\\) vì \\(A\\) và \\(B\\) khác nhau. Thay lại và chia cho \\(3MB\\), ta được \\(\\overrightarrow{MA}=3\\overrightarrow{MB}\\).\n\\[1-a=3(1-a)\\Rightarrow a=1.\\]\n\\[-b=3(-2-b)\\Rightarrow 2b=-6\\Rightarrow b=-3.\\]\n\\[3-c=3(5-c)\\Rightarrow 2c=12\\Rightarrow c=6.\\]\nVậy \\(a+b+c=1-3+6=4\\). Chọn D.",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(5\\)",
      "\\(4\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-vdc-24",
    "sourceNumber": 24,
    "sourcePage": 9,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 9
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(9;-3;4),B(-9;-5;6),C(6;8;5),D(2;-2;-1)\\) và \\(M\\) là điểm bất kì.",
    "explanation": "Công cụ. Với một vectơ đơn vị \\(\\vec u\\) và một vectơ \\(\\vec v\\) bất kỳ, \\(\\vec v\\cdot\\vec u=|\\vec v|\\cos\\alpha\\le|\\vec v|\\). Do đó, muốn chặn dưới khoảng cách \\(MX\\), có thể chiếu vectơ \\(\\overrightarrow{MX}\\) lên một hướng đã chọn.\nA. Sai. Chọn điểm mốc \\(D\\). Với \\(X\\) bằng \\(A,B\\) hoặc \\(C\\), lấy \\(\\vec u_X\\) là vectơ đơn vị hướng từ \\(D\\) đến \\(X\\).\nVì \\(\\overrightarrow{MX}=\\overrightarrow{DX}-\\overrightarrow{DM}\\), ta có\n\\[MX\\ge\\overrightarrow{MX}\\cdot\\vec u_X=DX-\\overrightarrow{DM}\\cdot\\vec u_X.\\]\nTính từ tọa độ, ba vectơ \\(\\vec u_A,\\vec u_B,\\vec u_C\\) lần lượt là \\((7;-1;5)\\) chia \\(\\sqrt{75}\\), \\((-11;-3;7)\\) chia \\(\\sqrt{179}\\) và \\((4;10;6)\\) chia \\(\\sqrt{152}\\).\nGọi \\(\\vec U\\) là tổng ba vectơ ấy. Cộng lần lượt theo từng tọa độ được \\(\\vec U\\approx(0{,}3106;0{,}4714;1{,}5872)\\), nên \\(|\\vec U|\\approx1{,}6846<\\sqrt3\\).\nCộng ba bất đẳng thức chiếu rồi dùng \\(\\overrightarrow{DM}\\cdot\\vec U\\le DM\\times|\\vec U|\\). Khi đó tổng cần xét ít nhất bằng\n\\[DA+DB+DC+(\\sqrt3-|\\vec U|)DM.\\]\nHệ số của \\(DM\\) dương, nên tổng nhỏ nhất khi \\(DM=0\\), tức \\(M=D\\). Khi ấy \\(OM=\\sqrt{2^2+(-2)^2+(-1)^2}=3\\).\nB. Đúng. Chọn \\(H(1;-3;4)\\). Bốn vectơ \\(\\overrightarrow{HA},\\overrightarrow{HB},\\overrightarrow{HC},\\overrightarrow{HD}\\) có tọa độ \\((8;0;0),(-10;-2;2),(5;11;1),(1;1;-5)\\). Độ dài tương ứng là \\(8,6\\sqrt3,7\\sqrt3,3\\sqrt3\\).\nChia mỗi vectơ cho độ dài của nó rồi nhân với trọng số trong đề. Bốn vectơ thu được là \\((62;0;0),(-70;-14;14),(5;11;1),(3;3;-15)\\). Cộng từng tọa độ đều được \\(0\\).\nÁp dụng bất đẳng thức chiếu với điểm mốc \\(H\\), rồi nhân và cộng theo đúng bốn trọng số. Vì tổng vectơ vừa tính bằng \\(\\vec0\\), các hạng chứa \\(\\overrightarrow{HM}\\) triệt tiêu. Tổng tại \\(M\\) luôn ít nhất bằng tổng tại \\(H\\).\n\\[62\\times8+42\\sqrt3\\times6\\sqrt3+7\\sqrt3\\times7\\sqrt3+9\\sqrt3\\times3\\sqrt3=496+756+147+81=1480.\\]\n\\(M=H\\) cho dấu bằng, nên đây là giá trị nhỏ nhất.",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Khi \\(MA+MB+MC+MD\\sqrt3\\) đạt giá trị nhỏ nhất thì \\(OM=3\\sqrt3\\).",
      "Giá trị nhỏ nhất của \\(62MA+(42MB+7MC+9MD)\\sqrt3\\) bằng \\(1480\\)."
    ],
    "answer": [
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Đúng"
  },
  {
    "id": "toan-12-2-vdc-25",
    "sourceNumber": 25,
    "sourcePage": 9,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 9
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một cabin cáp treo xuất phát từ điểm \\(A(10;3;0)\\) và chuyển động đều theo đường cáp có vectơ chỉ phương \\(\\vec u=(2;-2;1)\\) với tốc độ \\(4{,}5\\) m/s (đơn vị trên mỗi trục toạ độ là mét) được mô hình hoá như hình vẽ.",
    "explanation": "A. Đúng. Đường qua \\(A\\) có vectơ chỉ phương \\(\\vec u\\) nên phương trình chính tắc là\n\\[\\frac{x-10}{2}=\\frac{y-3}{-2}=\\frac z1.\\]\nB. Đúng. Độ dài \\(\\vec u\\) bằng \\(\\sqrt{4+4+1}=3\\). Chia \\(\\vec u\\) cho \\(3\\) được vectơ đơn vị, rồi nhân với tốc độ:\n\\[\\vec v=\\frac{4{,}5}{3}(2;-2;1)=(3;-3;1{,}5).\\]\nSau \\(t\\) giây, cộng \\(t\\) lần vectơ vận tốc vào điểm xuất phát. Vị trí là \\((10+3t;3-3t;1{,}5t)\\).\nC. Đúng. Tại điểm có hoành độ \\(550\\), ta có \\(10+3t=550\\), nên \\(t=180\\) giây. Quãng đường là \\(4{,}5\\times180=810\\) m.\nD. Sai. Góc nghiêng so với mặt phẳng ngang có sin bằng thành phần thẳng đứng chia độ dài vectơ chỉ phương.\n\\[\\sin\\alpha=\\frac13\\Rightarrow\\alpha\\approx19{,}47^\\circ\\approx19^\\circ.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Phương trình chính tắc của đường cáp là \\(\\dfrac{x-10}{2}=\\dfrac{y-3}{-2}=\\dfrac z1\\).",
      "Giả sử sau \\(t\\) giây kể từ lúc xuất phát (\\(t\\ge0\\)), cabin đến vị trí điểm \\(M\\). Khi đó toạ độ điểm \\(M\\) là \\(\\left(3t+10;-3t+3;\\frac{3t}{2}\\right)\\).",
      "Cabin dừng ở điểm \\(B\\) có hoành độ \\(x_B=550\\). Quãng đường \\(AB\\) có độ dài bằng \\(810\\) m (làm tròn kết quả đến hàng đơn vị của mét).",
      "Đường cáp \\(AB\\) tạo với mặt \\((Oxy)\\) một góc \\(22^\\circ\\) (làm tròn kết quả đến hàng đơn vị của độ)."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Đúng, d) Sai",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-25-fig.webp",
      "alt": "Cabin đi từ A đến B dọc theo dây cáp theo hướng cho trước. Đường đứt biểu diễn hình chiếu xuống mặt phẳng ngang."
    },
    "sourceNote": "PDF nhắc đến hình vẽ nhưng không kèm hình. Sơ đồ trên được dựng từ dữ kiện và lời giải của tài liệu."
  },
  {
    "id": "toan-12-2-vdc-26",
    "sourceNumber": 26,
    "sourcePage": 10,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 10
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ trục toạ độ \\(Oxyz\\) (đơn vị trên mỗi trục là km), một trạm phát sóng điện thoại của nhà mạng Vinaphone được đặt trên quả đồi ở vị trí \\(I(1;-2;3)\\). Biết rằng điện thoại sẽ bắt được sóng tốt nếu vị trí của điện thoại cách vị trí điểm \\(I\\) không quá \\(5000\\) m. Nhà các bạn Minh Hiển, Nhật Hoàng và Phương Linh có vị trí toạ độ lần lượt là \\(M(1;2;0),N(-3;1;0)\\) và \\(P(2;-2;0)\\).",
    "explanation": "A. Đúng. \\(IM^2=0^2+4^2+(-3)^2=25\\), nên \\(IM=5\\) km. Nhà ở đúng biên vẫn có sóng.\nB. Sai. \\(IN^2=(-4)^2+3^2+(-3)^2=34>25\\), nên \\(N\\) ngoài vùng phủ sóng.\nC. Đúng. \\(IP^2=1^2+0^2+(-3)^2=10<25\\), nên \\(P\\) trong vùng phủ sóng.\nD. Đúng. Trên đoạn \\(MN\\), viết \\(\\overrightarrow{MQ}=t\\overrightarrow{MN}\\), \\(0\\le t\\le1\\). Vì \\(\\overrightarrow{MN}=(-4;-1;0)\\), tọa độ \\(Q\\) là \\((1-4t;2-t;0)\\).\n\\[IQ^2=(-4t)^2+(4-t)^2+(-3)^2=17t^2-8t+25.\\]\n\\[IQ^2\\le25\\Leftrightarrow t(17t-8)\\le0\\Leftrightarrow0\\le t\\le\\frac8{17}.\\]\nVì \\(MN=\\sqrt{17}\\) km nên \\(MQ=t\\sqrt{17}\\) lớn nhất ở đầu phải của khoảng vừa tìm.\n\\[MQ_{\\max}=\\frac{8\\sqrt{17}}{17}\\ \\mathrm{km}.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Bạn Minh Hiển có thể sử dụng điện thoại tại nhà.",
      "Bạn Nhật Hoàng có thể sử dụng điện thoại tại nhà.",
      "Bạn Phương Linh có thể sử dụng điện thoại tại nhà.",
      "Gọi \\(Q\\) là vị trí nằm trên đoạn thẳng đi từ nhà Minh Hiển đến nhà Nhật Hoàng sao cho tại vị trí này có thể sử dụng điện thoại. Độ dài lớn nhất của \\(MQ\\) bằng \\(\\dfrac{8\\sqrt{17}}{17}\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Đúng"
  },
  {
    "id": "toan-12-2-vdc-27",
    "sourceNumber": 27,
    "sourcePage": 11,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 11
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Nhà bác An được mô tả như hình vẽ. Trong đó phần thân nhà là hình hộp chữ nhật \\(ABCD.EFGH\\). Ngôi nhà được lợp ngói hai mái là hai hình chữ nhật \\(PEHQ\\) và \\(PFGQ\\), biết tam giác \\(EFP\\) là tam giác cân tại \\(P\\). Gọi \\(T\\) là trung điểm của cạnh \\(DC\\). Các kích thước của nhà lần lượt là \\(AB=6\\) m, \\(AE=5\\) m, \\(AD=8\\) m, \\(QT=7\\) m. Xét trục tọa độ \\(Oxyz\\) sao cho gốc tọa độ là điểm \\(O\\) thuộc đoạn \\(AD\\) sao cho \\(OA=2\\) m và các trục tọa độ tương ứng là các trục \\(Ox,Oy,Oz\\). Khi đó,",
    "explanation": "A. Đúng. \\(A\\) nằm trên tia \\(Ox\\), cách \\(O\\) 2 m, nên \\(A(2;0;0)\\).\nB. Sai. Từ \\(A\\) đến \\(C\\), ta đi 8 m ngược chiều \\(Ox\\) và 6 m theo chiều \\(Oy\\), độ cao không đổi. Do đó \\(\\overrightarrow{AC}=(-8;6;0)\\).\nC. Đúng. Theo hình, \\(K\\) ngay phía trên \\(O\\), cao 5 m. Gọi \\(L\\) là trung điểm \\(FG\\). Hai điểm \\(K,L\\) cùng cao, lệch nhau 2 m theo phương \\(AD\\) và 6 m theo phương \\(AB\\).\n\\[KL=\\sqrt{2^2+6^2}=\\sqrt{40}=2\\sqrt{10}\\ \\mathrm m.\\]\nDây đi theo hai đoạn thẳng \\(OK\\) và \\(KL\\) ngắn nhất có chiều dài \\(5+2\\sqrt{10}\\) m.\nD. Sai. Nửa bề rộng nhà là 3 m, độ chênh từ mép mái đến nóc là \\(7-5=2\\) m. Chiều rộng nghiêng của mỗi mái bằng \\(\\sqrt{3^2+2^2}=\\sqrt{13}\\) m.\nHai mái đều dài 8 m. Với định mức 22 viên trên mỗi mét vuông và 11 000 đồng mỗi viên, số tiền theo định mức là\n\\[2\\times8\\times\\sqrt{13}\\times22\\times11000\\approx13\\,960\\,695\\ \\text{đồng}.\\]\nLàm tròn đến hàng nghìn được 13 961 000 đồng.",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "\\(A(2;0;0)\\).",
      "\\(\\overrightarrow{AC}=(6;6;0)\\).",
      "Bác An muốn lắp một chiếc đèn lồng tại vị trí trung điểm của \\(FG\\) và đầu nguồn đặt tại vị trí \\(O\\). Bác ấy thiết kế đường dây điện nối từ \\(O\\) đến \\(K\\) sau đó nối đến chiếc đèn lồng. Độ dài đoạn dây điện nối tối thiểu bằng \\(5+2\\sqrt{10}\\) m.",
      "Mái nhà bác An được lợp bằng ngói đất nung Đất Việt, giá tiền mỗi viên ngói là 11.000 đồng và để lợp được 1 m² diện tích mái cần 22 viên ngói. Số tiền cần bỏ ra để mua ngói lợp mái nhà là 13.960.000 đồng (không kể hao phí do việc cắt ghép các viên ngói, kết quả làm tròn đến hàng nghìn)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-27-fig.webp",
      "alt": "Mô hình nhà có thân ABCD.EFGH, hai mái PEHQ và PFGQ. K nằm ngay phía trên O, L là trung điểm FG."
    },
    "sourceNote": "PDF nhắc đến hình vẽ nhưng không kèm hình. Sơ đồ trên được dựng từ dữ kiện và lời giải của tài liệu."
  },
  {
    "id": "toan-12-2-vdc-28",
    "sourceNumber": 28,
    "sourcePage": 11,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 11
    },
    "lesson": "Vận dụng cao",
    "difficulty": "Vận dụng cao",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một chậu cây được đặt trên một giá đỡ có bốn chân. Trong hệ trục toạ độ được chọn, có điểm đặt \\(S(0;0;30)\\) và các điểm chạm mặt đất của bốn chân lần lượt là \\(A(30;0;0),B(0;30;0),C(-30;0;0),D(0;-30;0)\\) (đơn vị cm). Biết trọng lực tác dụng lên chậu cây có độ lớn 80 N và được phân bố thành bốn lực \\(\\vec F_1,\\vec F_2,\\vec F_3,\\vec F_4\\) có độ lớn bằng nhau như hình vẽ.",
    "explanation": "A. Sai. Vectơ \\(\\overrightarrow{SA}=(30;0;-30)\\), nên \\(SA=\\sqrt{30^2+30^2}=30\\sqrt2\\) cm.\nB. Đúng. Bốn điểm đáy là các đỉnh hình vuông có hai đường chéo \\(AC,BD\\) bằng nhau, vuông góc và cắt nhau tại trung điểm \\(O\\). \\(SO\\) thẳng đứng qua tâm đáy nên \\(S.ABCD\\) là chóp tứ giác đều.\nC. Đúng. Bốn chân dài bằng nhau, bốn vectơ lực cũng dài bằng nhau. Vì thế bốn điểm cuối của chúng nhận được bằng cách nhân bốn vectơ \\(\\overrightarrow{SA},\\overrightarrow{SB},\\overrightarrow{SC},\\overrightarrow{SD}\\) với cùng một hệ số dương. Đáy mới vẫn là hình vuông và trục chóp vẫn là \\(SO\\).\nD. Sai. Bốn chân có cùng độ nghiêng, nên bốn lực có thành phần thẳng đứng bằng nhau. Tổng thành phần thẳng đứng là \\(-80\\) N, mỗi phần bằng \\(-20\\) N.\nLực theo \\(SA\\) cùng hướng với \\((1;0;-1)\\), nên nếu thành phần \\(z\\) bằng \\(-20\\) thì thành phần \\(x\\) bằng \\(20\\). Vậy lực là \\((20;0;-20)\\) và \\(a+b-c=40\\).",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Độ dài vectơ \\(\\overrightarrow{SA}\\) là \\(30\\sqrt3\\).",
      "Hình chóp \\(S.ABCD\\) là hình chóp tứ giác đều.",
      "Hình chóp \\(S.A'B'C'D'\\) là hình chóp tứ giác đều, với \\(A',B',C',D'\\) lần lượt là điểm cuối của các vectơ lực \\(\\vec F_1,\\vec F_2,\\vec F_3,\\vec F_4\\).",
      "Biết \\(\\vec F_1=(a;b;c)\\). Khi đó, \\(a+b-c=20\\)."
    ],
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Sai",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-28-fig.webp",
      "alt": "Giá đỡ S.ABCD có bốn chân và bốn vectơ lực lần lượt hướng dọc theo các chân."
    },
    "sourceNote": "PDF nhắc đến hình vẽ nhưng không kèm hình. Sơ đồ trên được dựng từ dữ kiện và lời giải của tài liệu."
  },
  {
    "id": "toan-12-2-vdc-29",
    "sourceNumber": 29,
    "sourcePage": 12,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Bạn Mạnh rất yêu thích tập Gym và bạn thường thực hiện bài tập ép ngực với máy tập cáp chéo có tên Tiếng Anh là “Cable Crossover”. Thiết lập hệ trục tọa độ \\(Oxyz\\) với đơn vị trên mỗi trục là mét có gốc tọa độ \\(O(0;0;0)\\) nằm trên sàn ngay chính giữa hai trụ của máy tập, các trục \\(Ox,Oy,Oz\\) được chọn như hình vẽ. Các ròng rọc của hai dây cáp được gắn tại các điểm \\(A(-1{,}4;0;1{,}9)\\) và \\(B(1{,}4;0;1{,}9)\\). Khi tập thì Mạnh kéo và giữ hai tay cầm tại điểm \\(D(0;0{,}8;1{,}2)\\) và tại đó hai tay sẽ chịu tác dụng của hai lực căng \\(\\vec T_1\\) và \\(\\vec T_2\\). Biết rằng mức tạ được cài đặt sao cho độ lớn lực căng trên mỗi sợi dây cáp đều là \\(330\\,\\mathrm N\\) (làm tròn đến hàng phần trăm).",
    "explanation": "A. Đúng. Lấy tọa độ \\(A\\) trừ \\(D\\) được \\(\\overrightarrow{DA}=(-1{,}4;-0{,}8;0{,}7)\\).\n\\[DA=\\sqrt{1{,}4^2+0{,}8^2+0{,}7^2}=\\sqrt{3{,}09}\\approx1{,}76\\ \\mathrm m.\\]\nB. Sai. Lực thứ nhất hướng \\(DA\\) và lực thứ hai hướng \\(DB\\). Chia mỗi vectơ cho độ dài dây bằng \\(\\sqrt{3{,}09}\\) rồi nhân 330. Khi cộng, hai thành phần \\(x\\) triệt tiêu, còn hai thành phần \\(y\\) cùng âm:\n\\[\\text{Tổng lực}=\\frac{330}{\\sqrt{3{,}09}}(0;-1{,}6;1{,}4).\\]\nVì thành phần \\(y\\) khác 0 nên hợp lực không song song \\(Oz\\).\nC. Sai. Lực giữ phải ngược hướng hợp lực và có cùng độ lớn:\n\\[F=\\frac{330}{\\sqrt{3{,}09}}\\times\\sqrt{1{,}6^2+1{,}4^2}\\approx399{,}12\\ \\mathrm N.\\]\nD. Đúng. Đặt \\(D=(0;y;1{,}2)\\). Hai dây vuông góc khi \\(\\overrightarrow{DA}\\cdot\\overrightarrow{DB}=0\\).\n\\[(-1{,}4)(1{,}4)+(-y)(-y)+0{,}7^2=0\\Rightarrow y^2=1{,}47.\\]\nChọn nghiệm ở phía người tập, được \\(y\\approx1{,}21\\) m.",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Chiều dài đoạn dây cáp tính từ ròng rọc \\(A\\) đến tay cầm \\(D\\) bằng \\(1{,}76\\) m.",
      "Vectơ hợp lực tác dụng lên tay Mạnh có phương song song với trục \\(Oz\\).",
      "Để giữ yên hai tay tại vị trí \\(D\\) thì Mạnh phải tác dụng một lực giữ có độ lớn bằng \\(369{,}52\\) N.",
      "Để tối ưu hóa nhóm cơ ngực, huấn luyện viên yêu cầu Mạnh điều chỉnh vị trí giữ tay (thay đổi tung độ \\(y\\) của điểm \\(D\\)) sao cho góc tạo bởi hai dây cáp tại \\(D\\) đúng bằng \\(90^\\circ\\). Biết cao độ của tay vẫn giữ nguyên ở \\(z_D=1{,}2\\) m thì khi đó Mạnh cần giữ tay cầm ở vị trí sao cho \\(y_D=1{,}21\\) m."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Đúng",
    "diagram": {
      "folder": "toan12-c2",
      "file": "40-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 29"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 12
    }
  },
  {
    "id": "toan-12-2-vdc-30",
    "sourceNumber": 30,
    "sourcePage": 12,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Cho hình tứ diện \\(ABCD\\) có \\(AB,AC,AD\\) đôi một vuông góc, \\(AB=AC=a\\), \\(M\\) là trung điểm \\(CB\\) và \\(H\\) là trung điểm \\(MD\\).",
    "explanation": "A. Đúng. Theo quy tắc trung điểm, \\(\\overrightarrow{DB}+\\overrightarrow{DC}=2\\overrightarrow{DM}\\). Do đó\n\\[\\overrightarrow{DM}=\\frac{\\overrightarrow{DB}+\\overrightarrow{DC}}2.\\]\nB. Sai. Tam giác \\(ABC\\) cân tại \\(A\\), nên \\(AM\\) vuông góc \\(BC\\). Vì \\(AD\\) vuông góc mặt phẳng \\((ABC)\\), \\(AD\\) cũng vuông góc \\(BC\\). Đường \\(BC\\) vuông góc hai đường \\(AM,AD\\) cắt nhau nên vuông góc mặt phẳng \\((AMD)\\), do đó vuông góc \\(AH\\). Góc bằng \\(90^\\circ\\).\nC. Đúng. \\(H\\) là trung điểm \\(MD\\) và \\(M\\) là trung điểm \\(BC\\), nên\n\\[\\overrightarrow{AH}=\\frac{\\overrightarrow{AM}+\\overrightarrow{AD}}2=\\frac{\\overrightarrow{AB}+\\overrightarrow{AC}}4+\\frac{\\overrightarrow{AD}}2.\\]\nNhân vô hướng với \\(\\overrightarrow{AB}\\). Hai tích \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\) và \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AD}\\) đều bằng 0. Chỉ còn \\(AB^2\\) chia 4, bằng một phần tư \\(a^2\\).\nD. Sai. Trong tử số đi cùng \\(\\overrightarrow{AB}\\) ở phân số đầu phải là \\(\\overrightarrow{AC}\\). Thay \\(\\overrightarrow{AC}\\) bằng \\(\\overrightarrow{AD}\\) làm thay đổi vectơ \\(\\overrightarrow{AH}\\).",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "\\(\\overrightarrow{DM}=\\frac{\\overrightarrow{DB}+\\overrightarrow{DC}}2\\).",
      "Góc giữa hai vectơ \\(\\overrightarrow{AH}\\) và \\(\\overrightarrow{BC}\\) bằng \\(60^\\circ\\).",
      "\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AH}=\\frac{a^2}4\\).",
      "\\(\\overrightarrow{AH}=\\frac{\\overrightarrow{AD}}2+\\frac{\\overrightarrow{AB}+\\overrightarrow{AD}}4\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 12
    }
  },
  {
    "id": "toan-12-2-vdc-31",
    "sourceNumber": 31,
    "sourcePage": 13,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho bốn điểm \\(S,A,B,C\\) như hình vẽ (với \\(S(1;2;3)\\), \\(C(1;2;6)\\)).",
    "explanation": "A. Đúng. Đọc ba hình chiếu theo thứ tự \\(Ox,Oy,Oz\\) được \\(A(3;2;3)\\), \\(B(1;5;3)\\).\nB. Sai. \\(\\overrightarrow{SC}=(0;0;3)\\), \\(\\overrightarrow{BC}=(0;-3;3)\\), nên tích vô hướng bằng \\(0+0+9=9\\).\nC. Sai. \\(\\overrightarrow{AB}=(-2;3;0)\\), \\(\\overrightarrow{AC}=(-2;0;3)\\). Hai vectơ đều dài \\(\\sqrt{13}\\) và có tích vô hướng bằng 4.\n\\[\\cos\\widehat{BAC}=\\frac4{\\sqrt{13}\\times\\sqrt{13}}=\\frac4{13}.\\]\nD. Đúng. Trên tia \\(SA\\) lấy \\(A'\\) sao cho \\(SA'=SB=SC=3\\). Vì các đường sinh của nón tròn xoay dài bằng nhau, \\(A'\\) nằm trên đường tròn đáy.\nBa tia \\(SA',SB,SC\\) đôi một vuông góc. Theo Pythagore, mỗi cạnh tam giác \\(A'BC\\) dài \\(3\\sqrt2\\).\nĐường tròn đáy là đường tròn ngoại tiếp tam giác đều này, nên\n\\[R=\\frac{3\\sqrt2}{\\sqrt3}=\\sqrt6.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Toạ độ điểm \\(A,B\\) lần lượt là \\((3;2;3)\\) và \\((1;5;3)\\).",
      "\\(\\overrightarrow{SC}\\cdot\\overrightarrow{BC}=6\\).",
      "\\(\\cos\\widehat{BAC}=\\frac{\\sqrt2}5\\).",
      "Xét hình nón \\((N)\\) có đỉnh \\(S\\), điểm \\(A\\) thuộc đường sinh và hai điểm \\(B,C\\) thuộc đường tròn đáy của \\((N)\\). Bán kính đáy hình nón bằng \\(\\sqrt6\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Đúng",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-31-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 31"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 13
    },
    "sourceNote": "Hình minh họa được dựng lại theo dữ kiện và lời giải vì PDF không kèm hình."
  },
  {
    "id": "toan-12-2-vdc-32",
    "sourceNumber": 32,
    "sourcePage": 13,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Cho tứ diện \\(ABCD\\) có các cạnh đều bằng \\(a\\). Gọi \\(M,N\\) lần lượt là trung điểm \\(AB,CD\\).",
    "explanation": "A. Sai. Vì \\(CA=CB\\) và \\(DA=DB\\) nên \\(C,D\\) cùng thuộc mặt phẳng trung trực của \\(AB\\). Do đó \\(CD\\) vuông góc \\(AB\\).\nB. Đúng. Tổng \\(\\overrightarrow{EA}+\\overrightarrow{EB}\\) bằng \\(2\\overrightarrow{EM}\\), còn \\(\\overrightarrow{EC}+\\overrightarrow{ED}\\) bằng \\(2\\overrightarrow{EN}\\). Vì \\(E\\) là trung điểm \\(MN\\) nên hai tổng này đối nhau.\nC. Đúng. Lập luận ở ý A cũng áp dụng cho hai cặp cạnh đối còn lại. Cả ba tích vô hướng đều bằng 0 nên tổng bằng 0.\nD. Đúng. Gọi \\(H\\) là trọng tâm tam giác \\(BCD\\). Tam giác đều \\(BCD\\) cho \\(HB^2=HC^2=HD^2=\\frac{a^2}{3}\\).\nBa vectơ \\(\\overrightarrow{HB},\\overrightarrow{HC},\\overrightarrow{HD}\\) cộng lại bằng \\(\\vec0\\). Khai triển quanh \\(H\\):\n\\[IB^2+IC^2+ID^2=3IH^2+HB^2+HC^2+HD^2=3IH^2+a^2.\\]\n\\(A\\) cách đều \\(B,C,D\\) nên hình chiếu của \\(A\\) lên đáy là tâm đường tròn ngoại tiếp tam giác đều \\(BCD\\), chính là \\(H\\). Áp dụng Pythagore cho \\(AHB\\):\n\\[AH^2=AB^2-HB^2=a^2-\\frac{a^2}{3}=\\frac{2a^2}{3}.\\]\nGọi \\(G\\) là trung điểm \\(AH\\). Công thức trung điểm cho \\(IA^2+IH^2=2IG^2+\\frac12 AH^2\\). Thế vào tổng cần tìm:\n\\[3IA^2+IB^2+IC^2+ID^2=6IG^2+\\frac{3AH^2}{2}+a^2=6IG^2+2a^2.\\]\nGiá trị nhỏ nhất là \\(2a^2\\) khi \\(I=G\\).",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Vectơ \\(\\overrightarrow{AB}\\) và \\(\\overrightarrow{CD}\\) cùng hướng.",
      "\\(\\overrightarrow{EA}+\\overrightarrow{EB}+\\overrightarrow{EC}+\\overrightarrow{ED}=\\vec0\\) với \\(E\\) là trung điểm \\(MN\\).",
      "\\(\\overrightarrow{AB}\\cdot\\overrightarrow{CD}+\\overrightarrow{AC}\\cdot\\overrightarrow{DB}+\\overrightarrow{AD}\\cdot\\overrightarrow{BC}=0\\).",
      "Điểm \\(I\\) xác định bởi \\(P=3IA^2+IB^2+IC^2+ID^2\\) có giá trị nhỏ nhất. Khi đó, giá trị nhỏ nhất của \\(P\\) là \\(2a^2\\)."
    ],
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Đúng",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 13
    }
  },
  {
    "id": "toan-12-2-vdc-33",
    "sourceNumber": 33,
    "sourcePage": 14,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Hệ thống định vị toàn cầu GPS là một hệ thống cho phép xác định vị trí của một vật thể trong không gian. Trong cùng một thời điểm, vị trí của một điểm \\(M\\) trong không gian sẽ được xác định bởi bốn vệ tinh cho trước nhờ các bộ thu phát tín hiệu đặt trên các vệ tinh. Giả sử trong không gian với hệ toạ độ \\(Oxyz\\), có bốn vệ tinh lần lượt đặt tại các điểm \\(A(3;1;0)\\), \\(B(3;6;6)\\), \\(C(4;6;2)\\), \\(D(6;2;14)\\), vị trí \\(M(a;b;c)\\) thoả mãn \\(MA=3\\), \\(MB=6\\), \\(MC=5\\), \\(MD=13\\). Khoảng cách từ điểm \\(M\\) đến điểm \\(O\\) bằng bao nhiêu?",
    "explanation": "Viết \\(MA^2=(a-3)^2+(b-1)^2+c^2=9\\). Viết tương tự cho \\(B,C,D\\). Lấy từng phương trình mới trừ phương trình của \\(A\\) để khử \\(a^2,b^2,c^2\\). Chẳng hạn với \\(B\\), hiệu hai vế là\n\\[-10b+35-12c+36=36-9\\Rightarrow 5b+6c=22.\\]\nLàm tương tự với \\(C\\) và \\(D\\) được \\(a+5b+2c=15\\) và \\(3a+b+14c=33\\). Từ phương trình đầu và phương trình của \\(C\\):\n\\[5b=22-6c;\\quad a=15-(22-6c)-2c=4c-7.\\]\nThay \\(a\\) vào phương trình của \\(D\\) được \\(b=54-26c\\). Thế vào \\(5b+6c=22\\) cho \\(270-130c+6c=22\\), suy ra \\(c=2,b=2,a=1\\).\nKiểm tra \\(MA^2=(1-3)^2+(2-1)^2+2^2=9\\). Vậy \\(OM=\\sqrt{1^2+2^2+2^2}=3\\).",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 3,
    "tolerance": 0.000051,
    "answerText": "3",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 14
    }
  },
  {
    "id": "toan-12-2-vdc-34",
    "sourceNumber": 34,
    "sourcePage": 14,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Có hai trạm thu phát sóng tín hiệu mặt đất đặt ở hai điểm \\(O,A\\) và vệ tinh thu phát tín hiệu tại vị trí \\(M\\), biết vệ tinh di chuyển luôn cách mặt đất 3500 km. Tín hiệu tại \\(O\\) phát lên vệ tinh \\(M\\) rồi truyền đến trạm thu \\(A\\). Xét hệ trục \\(Oxyz\\) được chọn thoả \\(O(0;0;0)\\), \\(A(3;4;0)\\) và \\(M(x;y;3{,}5)\\) (đơn vị toạ độ là ngàn km). Biết vận tốc trung bình truyền tín hiệu giữa vệ tinh với trạm thu phát khoảng 27000 km/s. Một tín hiệu phát từ \\(O\\) đến \\(M\\) rồi truyền về \\(A\\) mất ít nhất bao nhiêu giây? (kết quả làm tròn đến hàng phần trăm)",
    "explanation": "Đối xứng \\(O\\) qua mặt phẳng \\(z=3{,}5\\) được \\(O'(0;0;7)\\). Mọi \\(M\\) trên mặt phẳng đều có \\(OM=O'M\\).\n\\[OM+MA=O'M+MA\\ge O'A=\\sqrt{3^2+4^2+7^2}=\\sqrt{74}.\\]\nĐoạn \\(O'A\\) cắt mặt phẳng \\(z=3{,}5\\) vì hai đầu ở hai phía. Chọn \\(M\\) là giao điểm đó thì đường truyền đạt ngắn nhất.\nĐổi \\(\\sqrt{74}\\) đơn vị ra \\(1000\\sqrt{74}\\) km rồi chia cho vận tốc:\n\\[t_{\\min}=\\frac{1000\\sqrt{74}}{27000}=\\frac{\\sqrt{74}}{27}\\approx0{,}32\\ \\text{giây}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.32,
    "tolerance": 0.000051,
    "answerText": "0,32",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 14
    }
  },
  {
    "id": "toan-12-2-vdc-35",
    "sourceNumber": 35,
    "sourcePage": 15,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\) (đơn vị trên mỗi trục toạ độ là 1 m), một cabin cáp treo xuất phát từ điểm \\(A(10;3;0)\\) và chuyển động đều theo đường cáp thẳng đến vị trí \\(D\\) cách \\(A\\) một khoảng bằng 4050 m. Biết đường đi của cabin cùng phương với vectơ \\(\\vec u=(2;-2;1)\\) và sau 3 phút kể từ khi xuất phát thì cabin đi đến vị trí \\(B\\) có hoành độ \\(x_B=550\\). Hỏi thời gian di chuyển của cabin trên quãng đường \\(AD\\) là bao nhiêu phút?",
    "explanation": "Đặt \\(\\overrightarrow{AB}=k(2;-2;1)\\). So sánh hoành độ được \\(2k=550-10=540\\), suy ra \\(k=270\\).\n\\[AB=270\\sqrt{2^2+(-2)^2+1^2}=270\\times3=810\\ \\mathrm m.\\]\n\\[v=\\frac{810}{3}=270\\ \\text{m mỗi phút}.\\]\n\\[t=\\frac{4050}{270}=15\\ \\text{phút}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 15,
    "tolerance": 0.000051,
    "answerText": "15",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 15
    }
  },
  {
    "id": "toan-12-2-vdc-36",
    "sourceNumber": 36,
    "sourcePage": 15,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), một khinh khí cầu ở toạ độ \\(A(-16;-10;10)\\) bắt đầu bay với vectơ vận tốc không đổi \\(\\vec v=(4;3;-1)\\) (đơn vị vận tốc là km/h) và dự kiến bay trong thời gian 10 giờ. Biết trạm kiểm soát không lưu đặt ở vị trí gốc toạ độ \\(O\\) kiểm soát được các vật thể cách trạm một khoảng tối đa bằng 12 km. Thời gian kể từ khi trạm kiểm soát không lưu phát hiện ra khinh khí cầu đến khi khinh khí cầu ra khỏi vùng kiểm soát là bao nhiêu phút?",
    "explanation": "Sau \\(t\\) giờ, cộng \\(t\\) lần vectơ vận tốc với \\(A\\). Vị trí là \\(M(-16+4t;-10+3t;10-t)\\).\nKhí cầu ở trong vùng khi \\(OM^2\\le144\\). Khai triển:\n\\[(-16+4t)^2+(-10+3t)^2+(10-t)^2\\le144.\\]\n\\[26t^2-208t+312\\le0\\Leftrightarrow26(t-2)(t-6)\\le0.\\]\nHai nghiệm là 2 và 6, hệ số bậc hai dương, nên bất đẳng thức đúng từ giờ thứ 2 đến giờ thứ 6. Thời gian là \\((6-2)\\times60=240\\) phút.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 240,
    "tolerance": 0.000051,
    "answerText": "240",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 15
    }
  },
  {
    "id": "toan-12-2-vdc-37",
    "sourceNumber": 37,
    "sourcePage": 15,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Một chiếc xe đang kéo căng sợi dây cáp \\(AB\\) trong công trường xây dựng, trên đó đã thiết lập hệ toạ độ \\(Oxyz\\) như hình vẽ (với \\(A(0;0;10)\\), \\(OB=15\\) m và góc giữa \\(OB\\) với chiều dương của \\(Oy\\) bằng \\(30^\\circ\\)). Độ dài đơn vị trên các trục toạ độ bằng 1 m. Biết \\(\\overrightarrow{AB}=(x;y;z)\\). Tính \\(2x+\\frac2{\\sqrt3}y-z\\).",
    "explanation": "Vì góc đo từ \\(Oy\\), tung độ \\(B\\) dùng cosin còn hoành độ dùng sin. Hai thành phần đều dương theo hình.\n\\[x_B=15\\sin30^\\circ=\\frac{15}{2};\\quad y_B=15\\cos30^\\circ=\\frac{15\\sqrt3}{2}.\\]\nLấy tọa độ \\(B\\) trừ tọa độ \\(A(0;0;10)\\), được \\(x=x_B,y=y_B,z=-10\\). Thế vào biểu thức:\n\\[2x+\\frac{2y}{\\sqrt3}-z=15+15+10=40.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 40,
    "tolerance": 0.000051,
    "answerText": "40",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-37-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 37"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 15
    },
    "sourceNote": "Hình minh họa được dựng lại theo dữ kiện và lời giải vì PDF không kèm hình."
  },
  {
    "id": "toan-12-2-vdc-38",
    "sourceNumber": 38,
    "sourcePage": 16,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\) (đơn vị trên mỗi trục toạ độ là 1 m), một cabin cáp treo xuất phát từ điểm \\(A(10;3;0)\\) và chuyển động đều theo đường cáp thẳng đến vị trí \\(D\\) cách \\(A\\) một khoảng bằng 3780 m. Biết đường đi của cabin cùng phương với vectơ \\(\\vec u=(2;-2;1)\\) và sau 3 phút kể từ khi xuất phát thì cabin đi đến vị trí \\(B\\) có hoành độ \\(x_B=550\\). Hỏi thời gian di chuyển của cabin trên quãng đường \\(AD\\) là bao nhiêu phút?",
    "explanation": "Nếu độ dời trong 3 phút là \\(k(2;-2;1)\\) thì \\(2k=550-10\\), do đó \\(k=270\\).\nTrong thời gian này, cabin đi được \\(270\\sqrt{4+4+1}=810\\) m.\n\\[v=\\frac{810}{3}=270\\ \\text{m mỗi phút}.\\]\n\\[t=\\frac{3780}{270}=14\\ \\text{phút}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 14,
    "tolerance": 0.000051,
    "answerText": "14",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 16
    }
  },
  {
    "id": "toan-12-2-vdc-39",
    "sourceNumber": 39,
    "sourcePage": 16,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Hệ thống định vị toàn cầu GPS là một hệ thống cho phép xác định vị trí của một vật thể trong không gian. Trong cùng một thời điểm vị trí của một điểm \\(M\\) trong không gian sẽ được xác định bởi bốn vệ tinh cho trước nhờ các bộ thu phát tín hiệu đặt trên các vệ tinh. Giả sử trong không gian với hệ toạ độ \\(Oxyz\\), có bốn vệ tinh lần lượt đặt tại các điểm \\(A(2;4;0)\\), \\(B(0;4;6)\\), \\(C(2;0;6)\\), \\(D(-1;-2;-3)\\) và vị trí điểm \\(M(a;b;c)\\) thoả \\(MA+MB+MC+MD\\) nhỏ nhất. Tính độ dài \\(MO\\) (làm tròn kết quả đến hàng phần chục).",
    "explanation": "Nhận xét \\(O,A,B,C\\) có trung bình tọa độ là \\(H(1;2;3)\\). Bốn điểm này cách \\(H\\) cùng một khoảng \\(\\sqrt{14}\\). Ngoài ra, \\(D\\) ở trên tia \\(HO\\) vì \\(\\overrightarrow{HD}=2\\overrightarrow{HO}\\).\nLấy các vectơ đơn vị \\(\\vec u_A,\\vec u_B,\\vec u_C,\\vec u_D\\) từ \\(H\\) tới bốn điểm của đề. Khi nhân mỗi vectơ đơn vị đó với \\(\\sqrt{14}\\), ta lần lượt được \\((1;2;-3),(-1;2;3),(1;-2;3),(-1;-2;-3)\\). Cộng từng tọa độ được 0.\nVới mỗi đỉnh \\(X\\), hình chiếu của \\(\\overrightarrow{MX}\\) lên hướng \\(\\vec u_X\\) không thể dài hơn \\(MX\\). Mặt khác \\(\\overrightarrow{MX}=\\overrightarrow{MH}+\\overrightarrow{HX}\\) và \\(\\overrightarrow{HX}\\cdot\\vec u_X=HX\\). Do đó\n\\[MX\\ge\\overrightarrow{MX}\\cdot\\vec u_X=\\overrightarrow{MH}\\cdot\\vec u_X+HX.\\]\nCộng bốn bất đẳng thức, các tích chứa \\(\\overrightarrow{MH}\\) triệt tiêu. Tổng khoảng cách tại \\(M\\) ít nhất bằng tổng khoảng cách tại \\(H\\). Dấu bằng đồng thời đòi hỏi \\(M\\) nằm trên cả các đường \\(HA,HB\\), nên \\(M=H\\).\n\\[MO=\\sqrt{1^2+2^2+3^2}=\\sqrt{14}\\approx3{,}7.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 3.7,
    "tolerance": 0.000051,
    "answerText": "3,7",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 16
    }
  },
  {
    "id": "toan-12-2-vdc-40",
    "sourceNumber": 40,
    "sourcePage": 16,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ trục toạ độ \\(Oxyz\\), mỗi đơn vị trên hệ trục ứng với 10 km, trạm kiểm soát không lưu đang theo dõi hai máy bay. Máy bay thứ nhất ban đầu ở toạ độ \\(A(25;-10;1)\\) và bay theo hướng vectơ \\(\\vec v_1=(-3;-4;0)\\) với tốc độ không đổi là 750 km/h. Máy bay thứ hai ban đầu ở toạ độ \\(B(30;-25;1{,}1)\\) và bay theo hướng vectơ \\(\\vec v_2=(-4;3;0)\\) với tốc độ không đổi là 900 km/h. Trên máy bay thứ nhất có gắn radar tránh va chạm với bán kính hoạt động là 50 km. Hỏi thời gian máy bay thứ hai xuất hiện trên màn hình của radar máy bay thứ nhất là bao nhiêu phút (kết quả làm tròn đến hàng phần trăm)?",
    "explanation": "Đổi tốc độ ra đơn vị tọa độ mỗi giờ: được 75 và 90. Hai vectơ hướng đều dài 5, nên hai vectơ vận tốc là \\(15(-3;-4;0)=(-45;-60;0)\\) và \\(18(-4;3;0)=(-72;54;0)\\).\nSau \\(t\\) giờ, vectơ nối từ máy bay thứ nhất đến máy bay thứ hai bằng \\(\\overrightarrow{AB}\\) cộng \\(t\\) lần hiệu hai vận tốc:\n\\[\\vec r(t)=(5;-15;0{,}1)+t(-27;114;0).\\]\nBán kính 50 km bằng 5 đơn vị. Điều kiện nằm trong tầm là\n\\[(5-27t)^2+(-15+114t)^2+0{,}1^2\\le25.\\]\nKhai triển và gom hệ số được \\(13725t^2-3690t+225{,}01\\le0\\). Đặt hai vế bằng nhau, dùng công thức nghiệm:\n\\[t_1=\\frac{3690-\\sqrt{3690^2-4\\times13725\\times225{,}01}}{2\\times13725}.\\]\n\\[t_2=\\frac{3690+\\sqrt{3690^2-4\\times13725\\times225{,}01}}{2\\times13725}.\\]\nVì hệ số bậc hai dương, khoảng thời gian cần tính là từ \\(t_1\\) đến \\(t_2\\). Đổi sang phút:\n\\[60(t_2-t_1)=\\frac{60\\sqrt{3690^2-4\\times13725\\times225{,}01}}{13725}\\approx4{,}91\\ \\text{phút}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 4.91,
    "tolerance": 0.000051,
    "answerText": "4,91",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 16
    }
  },
  {
    "id": "toan-12-2-vdc-41",
    "sourceNumber": 41,
    "sourcePage": 17,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), một bức tường hình chữ nhật \\(ABCD\\) dựng vuông góc mặt đất với hai điểm \\(A(2;1;0)\\), \\(B(0;2;0)\\) với chiều cao 3 m. Biết rằng mỗi đơn vị trong hệ trục toạ độ tương ứng với 1 m. Một trạm phát sóng với máy phát đặt tại điểm \\(S\\) có toạ độ \\((3;3;6)\\). Trạm phát sóng phát sóng ra xung quanh tuy nhiên khi gặp bức tường thì bị chắn. Vì vậy sẽ có một vùng sau bức tường nơi mà không bắt được sóng như hình vẽ. Một người đi bộ từ vị trí có toạ độ là \\((-4;-4;0)\\) theo hướng thẳng đến gốc toạ độ với vận tốc 1 m/s. Tính thời gian kể từ lúc bắt đầu di chuyển đến khi người đó bị mất sóng (đơn vị giây, kết quả làm tròn đến hàng phần mười).",
    "explanation": "Hai đầu mép trên là \\(A'(2;1;3)\\), \\(B'(0;2;3)\\). Đường truyền từ \\(S\\) qua \\(A'\\) hạ 3 m khi đi đến \\(A'\\). Muốn hạ nốt 3 m xuống đất thì đi thêm đúng vectơ \\(\\overrightarrow{SA'}\\).\nĐiểm chiếu xuống đất là \\(U=2A'-S=(1;-1;0)\\). Tương tự, qua \\(B'\\) được \\(V=2B'-S=(-3;1;0)\\).\nCả \\(U,V\\) thỏa \\(x+2y=-1\\). Đoạn \\(UV\\) là biên phía xa của vùng khuất. Người đi theo \\(x=y\\), nên lúc tới biên ta có\n\\[3x=-1\\Rightarrow x=y=-\\frac13.\\]\nGiao điểm thuộc đoạn \\(UV\\). Theo phương \\(x\\) và \\(y\\), người đi được cùng một độ dài bằng 4 trừ một phần ba. Dùng Pythagore rồi chia cho vận tốc:\n\\[t=\\frac{11\\sqrt2}{3}\\approx5{,}2\\ \\text{giây}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 5.2,
    "tolerance": 0.000051,
    "answerText": "5,2",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-41-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 41"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 17
    },
    "sourceNote": "Hình minh họa được dựng lại theo dữ kiện và lời giải vì PDF không kèm hình."
  },
  {
    "id": "toan-12-2-vdc-42",
    "sourceNumber": 42,
    "sourcePage": 17,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), một cabin cáp treo xuất phát từ điểm \\(A(10;3;0)\\) và chuyển động đều theo đường cáp thẳng có vectơ chỉ phương \\(\\vec u=(2;-2;1)\\) với tốc độ \\(4{,}5\\) m/s (đơn vị trên trục toạ độ là mét). Một camera giám sát an toàn đặt tại \\(I(50;-10;50)\\). Hỏi sau bao nhiêu giây kể từ khi cabin xuất phát thì cabin gần camera giám sát an toàn nhất? (kết quả làm tròn đến hàng đơn vị).",
    "explanation": "Vectơ hướng dài 3, nên vectơ vận tốc bằng \\(1{,}5(2;-2;1)=(3;-3;1{,}5)\\). Sau \\(t\\) giây, cabin ở \\(M(10+3t;3-3t;1{,}5t)\\).\nĐể tránh căn bậc hai, ta tìm \\(t\\) làm bình phương khoảng cách nhỏ nhất:\n\\[f(t)=MI^2=(3t-40)^2+(13-3t)^2+(1{,}5t-50)^2.\\]\n\\[f'(t)=6(3t-40)-6(13-3t)+3(1{,}5t-50)=40{,}5t-468.\\]\nĐạo hàm đổi dấu từ âm sang dương tại nghiệm của \\(f'(t)=0\\). Nghiệm dương nên thuộc thời gian sau lúc xuất phát.\n\\[t=\\frac{468}{40{,}5}=\\frac{104}{9}\\approx11{,}56\\ \\text{giây}.\\]\nLàm tròn đến hàng đơn vị được 12 giây.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 12,
    "tolerance": 0.000051,
    "answerText": "12",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 17
    }
  },
  {
    "id": "toan-12-2-vdc-43",
    "sourceNumber": 43,
    "sourcePage": 18,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Lồng đèn kéo quân là một kiểu đèn trung thu cổ truyền ở Việt Nam (phổ biến ở miền Bắc và Bắc Trung Bộ). Chiếc lồng đèn kéo quân không chỉ là một món đồ chơi, mà còn là một tác phẩm nghệ thuật dân gian, gắn liền với tuổi thơ của biết bao thế hệ. Trong hình là một chiếc lồng đèn kéo quân có dạng lăng trụ lục giác đều. Khi gắn chiếc lồng đèn này vào hệ trục toạ độ \\(Oxyz\\) như hình vẽ với gốc toạ độ \\(O\\) trùng với tâm của một lục giác đều, tia \\(Ox\\) đi qua trung điểm một cạnh lục giác, tia \\(Oy\\) đi qua một đỉnh lục giác đó, tia \\(Oz\\) đi qua tâm của lục giác còn lại, đơn vị trục là cm. Người ta có được \\(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}=(10\\sqrt3;20;50)\\), trong đó \\(AB\\) là một cạnh bên của lăng trụ, \\(BC\\) là một cạnh đáy của lăng trụ. Hỏi thể tích của chiếc lồng đèn này là bao nhiêu \\(\\mathrm{cm}^3\\)? (làm tròn đến hàng đơn vị, bỏ qua độ dày của các vật liệu bao quanh)",
    "explanation": "Gọi \\(h\\) là chiều cao, \\(r\\) là bán kính ngoại tiếp đáy. Tổng cao độ của \\(A,B,C\\) là \\(0+h+h=50\\), nên \\(h=25\\) cm.\nHình chiếu ngang của \\(A\\) và \\(B\\) trùng nhau, cho cùng bán kính \\(\\vec u\\). Hình chiếu của \\(C\\) cho bán kính \\(\\vec v\\) kề \\(\\vec u\\). Trong lục giác đều, hai bán kính kề tạo góc \\(60^\\circ\\), nên \\(\\vec u\\cdot\\vec v=r^2\\cos60^\\circ=\\frac{r^2}2\\).\nTổng vectơ hình chiếu là \\(2\\vec u+\\vec v\\), có tọa độ \\((10\\sqrt3;20)\\). Bình phương độ dài theo hai cách:\n\\[\\lvert2\\vec u+\\vec v\\rvert^2=4r^2+4(\\vec u\\cdot\\vec v)+r^2=7r^2.\\]\n\\[7r^2=(10\\sqrt3)^2+20^2=700\\Rightarrow r=10\\ \\mathrm{cm}.\\]\nĐáy gồm sáu tam giác đều cạnh 10. Nhân diện tích đáy với chiều cao:\n\\[V=6\\times\\frac{10^2\\sqrt3}4\\times25=3750\\sqrt3\\approx6495\\ \\mathrm{cm}^3.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 6495,
    "tolerance": 0.000051,
    "answerText": "6495",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-43-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 43"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 18
    },
    "sourceNote": "Hình minh họa được dựng lại theo dữ kiện và lời giải vì PDF không kèm hình."
  },
  {
    "id": "toan-12-2-vdc-44",
    "sourceNumber": 44,
    "sourcePage": 18,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Một người đàn ông và một người phụ nữ cùng kéo chiếc thuyền theo hai hướng khác nhau bởi hai sợi dây cột vào mũi thuyền như hình vẽ. Các vectơ lực kéo lần lượt là \\(\\vec F_1=(180;110;0)\\), \\(\\vec F_2=(160;-50;0)\\) (đơn vị Newton). Khi đó chiếc thuyền tiến về phía trước vì chịu tác động của hợp lực \\(\\vec F_1+\\vec F_2\\) với độ lớn bao nhiêu Newton? Kết quả được làm tròn đến hàng đơn vị.",
    "explanation": "Cộng các thành phần cùng trục. Thành phần \\(y\\) của lực thứ hai có dấu âm:\n\\[\\vec F=\\vec F_1+\\vec F_2=(180+160;110-50;0)=(340;60;0).\\]\nĐộ lớn của một vectơ bằng căn bậc hai tổng bình phương các thành phần:\n\\[\\lvert\\vec F\\rvert=\\sqrt{340^2+60^2}=\\sqrt{119200}=20\\sqrt{298}\\approx345{,}25\\ \\mathrm N.\\]\nVậy độ lớn hợp lực sau khi làm tròn là 345 N.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 345,
    "tolerance": 0.000051,
    "answerText": "345",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-44-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 44"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 18
    },
    "sourceNote": "Hình minh họa được dựng lại theo dữ kiện và lời giải vì PDF không kèm hình."
  },
  {
    "id": "toan-12-2-vdc-45",
    "sourceNumber": 45,
    "sourcePage": 19,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong công viên nước, người ta xây dựng một máng trượt nước dạng một cung tròn. Mô hình hoá trong hệ trục \\(Oxyz\\) (đơn vị trên mỗi trục là 1 mét) với điểm đầu máng trượt là \\(A(0;0;12)\\), cung tròn đi qua điểm \\(B(5;12;5)\\) và kết thúc ở điểm \\(C(17;5;0)\\). Tính độ dài máng trượt đó (kết quả cuối cùng làm tròn đến hàng đơn vị).",
    "explanation": "Lấy tọa độ \\(A\\) và \\(C\\) trừ \\(B\\). Ta có \\(\\overrightarrow{BA}=(-5;-12;7)\\), \\(\\overrightarrow{BC}=(12;-7;-5)\\). Hai độ dài đều bằng \\(\\sqrt{218}\\). Tích vô hướng bằng \\(-60+84-35=-11\\).\nGọi \\(\\beta\\) là góc \\(ABC\\). Khi tính độ dài cung, dùng radian.\n\\[\\cos\\beta=\\frac{-11}{\\sqrt{218}\\times\\sqrt{218}}=-\\frac{11}{218}\\Rightarrow\\beta\\approx1{,}62128.\\]\nDây \\(AC\\) dài \\(\\sqrt{17^2+5^2+(-12)^2}=\\sqrt{458}\\). Theo định lý sin mở rộng:\n\\[R=\\frac{AC}{2\\sin\\beta}=\\frac{\\sqrt{458}}{2\\sin\\beta}\\approx10{,}7141\\ \\mathrm m.\\]\nGóc nội tiếp \\(ABC\\) chắn cung \\(AC\\) không qua \\(B\\), nên cung đó có số đo \\(2\\beta\\). Máng trượt đi qua \\(B\\), ứng với cung còn lại có số đo \\(2\\pi-2\\beta\\).\n\\[L=R(2\\pi-2\\beta)\\approx32{,}58\\ \\mathrm m.\\]\nLàm tròn đến hàng đơn vị được 33 m.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 33,
    "tolerance": 0.000051,
    "answerText": "33",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 19
    }
  },
  {
    "id": "toan-12-2-vdc-46",
    "sourceNumber": 46,
    "sourcePage": 19,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Cho biết công \\(A\\) (đơn vị: J) sinh bởi lực \\(\\vec F\\) tác dụng lên một vật được tính bằng công thức \\(A=\\vec F\\cdot\\vec d\\) trong đó \\(\\vec d\\) là vectơ biểu thị độ dịch chuyển của vật (đơn vị: mét) khi chịu tác dụng của lực \\(\\vec F\\). Một chiếc xe có khối lượng \\(1{,}5\\) tấn đang đi xuống trên một đoạn đường dốc có góc nghiêng \\(5^\\circ\\) so với phương ngang. Tính công sinh ra (đơn vị là kJ và kết quả làm tròn ở bước cuối cùng đến hàng phần chục) bởi trọng lực \\(\\vec P\\) khi xe đi hết đoạn đường dốc dài 30 m, biết rằng trọng lực \\(\\vec P\\) được xác định bởi công thức \\(\\vec P=m\\cdot\\vec g\\) với \\(m\\) là khối lượng của vật và \\(\\vec g\\) là gia tốc rơi tự do có độ lớn \\(g=9{,}8\\ \\mathrm{m/s^2}\\).",
    "explanation": "Đổi khối lượng: \\(1{,}5\\) tấn \\(=1500\\) kg. Độ lớn trọng lực là \\(P=mg=1500\\times9{,}8=14700\\) N.\nTrọng lực hướng thẳng đứng xuống dưới. Hướng đi xuống dốc nghiêng \\(5^\\circ\\) so với phương ngang, nên góc giữa trọng lực và độ dời là \\(90^\\circ-5^\\circ=85^\\circ\\).\n\\[A=P\\times d\\times\\cos85^\\circ=14700\\times30\\times\\cos85^\\circ\\ \\mathrm J.\\]\nChia cho 1000 để đổi từ J sang kJ:\n\\[A=441\\cos85^\\circ\\approx38{,}44\\ \\mathrm{kJ}.\\]\nLàm tròn đến một chữ số thập phân được \\(38{,}4\\) kJ.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 38.4,
    "tolerance": 0.000051,
    "answerText": "38,4",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 19
    }
  },
  {
    "id": "toan-12-2-vdc-47",
    "sourceNumber": 47,
    "sourcePage": 20,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trên hệ trục toạ độ \\(Oxyz\\) (đơn vị độ dài: mét), một người lái mô tô xuất phát từ vị trí \\(A(0;0;0)\\) đến \\(B(0;600;0)\\) trong 6 phút. Từ \\(B\\), người đó cho xe đổi hướng để tiến thẳng đến \\(C(1500;600;0)\\) với tốc độ không đổi và bằng đúng tốc độ khi đi từ \\(A\\) đến \\(B\\). Hỏi ở phút thứ 8 kể từ khi xe đổi hướng, tốc độ thay đổi khoảng cách của xe mô tô đối với vị trí xuất phát \\(A\\) là bao nhiêu mét/phút?",
    "explanation": "Tốc độ xe là \\(600:6=100\\) m mỗi phút. Lấy \\(t=0\\) ở lúc xe vừa qua \\(B\\). Sau \\(t\\) phút, xe ở \\((100t;600;0)\\).\nKhoảng cách đến \\(A\\) là \\(r(t)=\\sqrt{10000t^2+600^2}\\). Dùng công thức đạo hàm của căn:\n\\[r'(t)=\\frac{20000t}{2\\sqrt{10000t^2+600^2}}=\\frac{10000t}{\\sqrt{10000t^2+600^2}}.\\]\nTại \\(t=8\\), quãng đường ngang từ \\(B\\) là 800 m. Khoảng cách đến \\(A\\) bằng \\(\\sqrt{800^2+600^2}=1000\\) m.\n\\[r'(8)=\\frac{10000\\times8}{1000}=80\\ \\text{m mỗi phút}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 80,
    "tolerance": 0.000051,
    "answerText": "80",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 20
    }
  },
  {
    "id": "toan-12-2-vdc-48",
    "sourceNumber": 48,
    "sourcePage": 20,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong bảng thiết kế của dự án lắp đặt đường dây điện cho vùng núi tỉnh A, các kĩ sư thiết kế các trụ điện cao 120 m. Để giữ thăng bằng cho trụ điện, người ta kéo dây cáp nối từ đỉnh trụ \\(S\\) xuống mặt đất tại các điểm \\(A,B,C\\) sao cho \\(S.ABC\\) là hình chóp tam giác đều, khoảng cách từ chân trụ đến các điểm tiếp đất bằng \\(40\\sqrt3\\) m. Tuy nhiên trong thực tế, do sườn núi dốc \\(10^\\circ\\) so với mặt biển nên vị trí tiếp đất của dây cáp tại \\(A,B',C'\\) (\\(BB',CC'\\) song song thân trụ điện) như hình vẽ. Chọn hệ trục toạ độ \\(Oxyz\\) với \\(O\\) trùng với chân trụ điện, \\((Oxy)\\) song song với mặt biển, \\(A\\) thuộc tia \\(Oy\\), trục \\(Oz\\) hướng lên trên. Khi đó, tổng độ dài của ba dây cáp \\(SA,SB',SC'\\) bằng bao nhiêu? (kết quả làm tròn đến hàng đơn vị của mét)",
    "explanation": "Ba bán kính \\(OA,OB,OC\\) tạo các góc ở tâm \\(120^\\circ\\). Vì \\(A\\) nằm trên \\(Oy\\) nên khoảng cách theo phương \\(Ox\\) của \\(B,C\\) đến \\(Oy\\) có cùng độ lớn:\n\\[\\lvert x_B\\rvert=\\lvert x_C\\rvert=40\\sqrt3\\sin120^\\circ=40\\sqrt3\\times\\frac{\\sqrt3}{2}=60\\ \\mathrm m.\\]\nMặt dốc giữ nguyên cao độ trên \\(Oy\\). Hai điểm ở hai phía \\(Oy\\) chênh cao so với mặt phẳng ngang một lượng \\(h=60\\tan10^\\circ\\), một điểm ở cao độ \\(h\\), điểm kia ở \\(-h\\).\nChiều dài hình chiếu ngang của cả ba dây đều là \\(40\\sqrt3\\). Ba độ chênh cao từ đỉnh cột tới các neo lần lượt là \\(120,120-h,120+h\\). Dùng Pythagore cho từng dây:\n\\[L=\\sqrt{4800+120^2}+\\sqrt{4800+(120-h)^2}+\\sqrt{4800+(120+h)^2}.\\]\nThế \\(h=60\\tan10^\\circ\\) được \\(L\\approx415{,}89\\) m. Tổng chiều dài sau khi làm tròn là 416 m.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 416,
    "tolerance": 0.000051,
    "answerText": "416",
    "diagram": {
      "folder": "toan12-c2",
      "file": "vdc-48-fig.webp",
      "alt": "Hình minh họa câu vận dụng cao 48"
    },
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 20
    },
    "sourceNote": "Hình minh họa được dựng lại theo dữ kiện và lời giải vì PDF không kèm hình."
  },
  {
    "id": "toan-12-2-vdc-49",
    "sourceNumber": 49,
    "sourcePage": 20,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\) (mỗi đơn vị trên trục tương ứng 1 km), tại thời điểm 8 giờ sáng, hai máy bay \\(A\\) và \\(B\\) có vị trí và lộ trình chuyển động như sau:\n- Máy bay \\(A\\) đang ở vị trí \\(M(0;0;9)\\) và bay thẳng đều theo hướng đến điểm \\(N(1200;0;9)\\) với tốc độ hành trình \\(v_1=800\\) km/h.\n- Máy bay \\(B\\) đang ở vị trí \\(P(103;-97;12)\\) và bay thẳng đều theo hướng đến điểm \\(Q(703;103;12)\\) với tốc độ hành trình \\(v_2=200\\sqrt{10}\\) km/h.\nKhoảng cách ngắn nhất giữa máy bay \\(A\\) và máy bay \\(B\\) trong quá trình bay là bao nhiêu km? (làm tròn kết quả đến hàng phần mười)",
    "explanation": "Lấy \\(t\\) tính bằng giờ sau 8 giờ. \\(A\\) bay dọc chiều dương \\(Ox\\) nên vận tốc là \\((800;0;0)\\). Hướng của \\(B\\) là \\((600;200;0)\\), có độ dài đúng bằng \\(200\\sqrt{10}\\), nên đây cũng là vectơ vận tốc của \\(B\\).\nLấy vị trí \\(B\\) trừ vị trí \\(A\\) sau \\(t\\) giờ, được \\((103-200t;-97+200t;3)\\). Đặt \\(u=200t-100\\) để đưa hai thành phần đầu về \\(3-u\\) và \\(3+u\\).\n\\[d^2=(3-u)^2+(3+u)^2+9=27+2u^2\\ge27.\\]\nDấu bằng khi \\(u=0\\), tức \\(200t=100\\) và \\(t=0{,}5\\) giờ sau 8 giờ.\n\\[d_{\\min}=\\sqrt{27}=3\\sqrt3\\approx5{,}2\\ \\mathrm{km}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 5.2,
    "tolerance": 0.000051,
    "answerText": "5,2",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 20
    }
  },
  {
    "id": "toan-12-2-vdc-50",
    "sourceNumber": 50,
    "sourcePage": 21,
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\), cho \\(A(a;0;0)\\), \\(B(0;b;0)\\), \\(C(0;0;c)\\) với \\(a,b,c>0\\) sao cho \\(2OA-OB+OC+5\\sqrt{OB^2+OC^2}=36\\). Tính \\(a-b+c\\) khi thể tích khối chóp \\(O.ABC\\) đạt giá trị lớn nhất.",
    "explanation": "Áp dụng Cauchy–Schwarz cho \\((4;3)\\) và \\((b;c)\\):\n\\[4b+3c\\le\\sqrt{4^2+3^2}\\times\\sqrt{b^2+c^2}=5\\sqrt{b^2+c^2}.\\]\nThay cận dưới vào điều kiện đề, được \\(2a+3b+4c\\le36\\). Thể tích tứ diện bằng \\(\\frac{abc}6\\) nên cần tìm cận trên của tích \\(abc\\).\nTheo bất đẳng thức trung bình cộng – trung bình nhân cho ba số dương \\(2a,3b,4c\\):\n\\[(2a)(3b)(4c)\\le\\left(\\frac{2a+3b+4c}{3}\\right)^3\\le12^3.\\]\nMuốn đạt dấu bằng, cần \\(2a=3b=4c=12\\), tức \\(a=6,b=4,c=3\\). Khi đó \\(b:c=4:3\\) nên bất đẳng thức đầu cũng đạt dấu bằng. Thay trực tiếp vào điều kiện được \\(12-4+3+25=36\\).\nVậy \\(a-b+c=6-4+3=5\\).",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 5,
    "tolerance": 0.000051,
    "answerText": "5",
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 21
    }
  },
  {
    "id": "toan-12-2-vdc-51",
    "sourceNumber": 51,
    "sourcePage": 21,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 21
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho hai điểm \\(A(1;0;-2)\\), \\(B(3;-4;2)\\). Gọi \\(M\\) là điểm thoả mãn \\(MA=MB\\). Tìm giá trị nhỏ nhất của biểu thức \\(\\left|\\overrightarrow{MO}-\\overrightarrow{MA}+2\\overrightarrow{MB}\\right|\\) với \\(O\\) là gốc toạ độ.",
    "answerText": "7",
    "value": 7,
    "explanation": "Đổi sang vectơ vị trí. Ta có \\(\\overrightarrow{MO}-\\overrightarrow{MA}=-\\overrightarrow{OA}\\) và \\(\\overrightarrow{MB}=\\overrightarrow{OB}-\\overrightarrow{OM}\\). Vậy tổng bằng \\(2\\overrightarrow{OB}-\\overrightarrow{OA}-2\\overrightarrow{OM}\\).\nChọn \\(K\\) sao cho \\(2\\overrightarrow{OK}=2\\overrightarrow{OB}-\\overrightarrow{OA}\\), tức \\(K(2{,}5;-4;3)\\). Khi đó tổng đã cho bằng \\(2\\overrightarrow{MK}\\), nên chỉ cần tìm \\(MK\\) nhỏ nhất.\nĐiều kiện \\(MA=MB\\) cho \\(M\\) nằm trên mặt phẳng trung trực của \\(AB\\). Mặt phẳng qua trung điểm \\(H(2;-2;0)\\), pháp tuyến \\(\\vec n=\\overrightarrow{AB}=(2;-4;4)\\).\nLấy \\(M\\) là hình chiếu của \\(K\\) lên mặt phẳng để \\(MK\\) nhỏ nhất. Tính \\(\\overrightarrow{HK}=(0{,}5;-2;3)\\), \\(\\lvert\\vec n\\rvert=6\\):\n\\[MK_{\\min}=\\frac{|0{,}5\\times2+(-2)(-4)+3\\times4|}{6}=\\frac{21}{6}.\\]\nĐộ dài nhỏ nhất của vectơ đề bài bằng \\(2\\times21:6=7\\)."
  },
  {
    "id": "toan-12-2-vdc-52",
    "sourceNumber": 52,
    "sourcePage": 21,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 21
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(6;2;-1)\\), \\(B(-2;-6;3)\\), \\(C(2;-2;1)\\). Hai điểm \\(M,N\\) thay đổi sao cho \\(MN=5\\), \\(MC=NC\\) và đồng thời tam giác \\(MAB\\) vuông tại \\(M\\). Giá trị lớn nhất của biểu thức \\(2OM^2-ON^2\\) bằng",
    "answerText": "\\(45+6\\sqrt{86}\\)",
    "value": 100.64171097297422,
    "explanation": "\\(C\\) là trung điểm \\(AB\\). Tam giác \\(AMB\\) vuông tại \\(M\\) nên trung điểm cạnh huyền cách đều \\(A,B,M\\). Vì \\(AB=\\sqrt{8^2+8^2+4^2}=12\\) nên \\(CM=CN=6\\).\nĐặt \\(\\vec u=\\overrightarrow{CM}\\), \\(\\vec v=\\overrightarrow{CN}\\). Từ \\(MN=5\\) suy ra\n\\[25=|\\vec u-\\vec v|^2=36+36-2\\vec u\\cdot\\vec v\\Rightarrow\\vec u\\cdot\\vec v=\\frac{47}{2}.\\]\nTính bình phương độ dài của \\(2\\vec u-\\vec v\\):\n\\[|2\\vec u-\\vec v|^2=4\\times36+36-4\\times\\frac{47}{2}=86.\\]\nĐặt \\(\\vec w=\\overrightarrow{OC}\\). Khi ấy \\(|\\vec w|=3\\), \\(\\overrightarrow{OM}=\\vec w+\\vec u\\), \\(\\overrightarrow{ON}=\\vec w+\\vec v\\). Khai triển và gom hạng:\n\\[\\begin{aligned}\n2OM^2-ON^2&=|\\vec w|^2+2|\\vec u|^2-|\\vec v|^2+2\\vec w\\cdot(2\\vec u-\\vec v)\\\\\n&=45+2\\vec w\\cdot(2\\vec u-\\vec v)\\le45+6\\sqrt{86}.\n\\end{aligned}\\]\nCó thể quay đồng thời hai vectơ \\(\\vec u,\\vec v\\) quanh \\(C\\) để \\(2\\vec u-\\vec v\\) cùng hướng \\(\\vec w\\) mà vẫn giữ các độ dài và góc giữa \\(\\vec u,\\vec v\\). \\(M\\) vẫn thuộc mặt cầu đường kính \\(AB\\). Vì thế giá trị lớn nhất là \\(45+6\\sqrt{86}\\)."
  },
  {
    "id": "toan-12-2-vdc-53",
    "sourceNumber": 53,
    "sourcePage": 22,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 22
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(0;0;1)\\), \\(B(0;0;9)\\) và \\(Q(3;4;6)\\). Xét các điểm \\(M\\) thay đổi sao cho tam giác \\(ABM\\) vuông tại \\(M\\) và có diện tích lớn nhất. Giá trị nhỏ nhất của độ dài đoạn thẳng \\(MQ\\) bằng",
    "answerText": "\\(\\sqrt2\\)",
    "value": 1.4142135623730951,
    "explanation": "\\(M\\) thuộc mặt cầu đường kính \\(AB\\), tâm \\(I(0;0;5)\\), bán kính \\(4\\). Vì \\(AB\\) cố định, diện tích lớn nhất khi khoảng cách từ \\(M\\) đến đường thẳng \\(AB\\) lớn nhất.\nKhoảng cách ấy bằng bán kính \\(4\\) khi \\(IM\\) vuông góc \\(AB\\). Do đó \\(M\\) nằm trên đường tròn tâm \\(I\\), bán kính \\(4\\) trong mặt phẳng \\(z=5\\).\nChiếu \\(Q\\) xuống mặt phẳng ấy được \\(H(3;4;5)\\). Có \\(IH=\\sqrt{3^2+4^2}=5\\) và \\(QH=1\\). Khoảng cách \\(HM\\) nhỏ nhất bằng \\(5-4=1\\) khi \\(M\\) nằm trên đoạn \\(IH\\).\n\\[MQ_{\\min}=\\sqrt{QH^2+HM_{\\min}^2}=\\sqrt{1^2+1^2}=\\sqrt2.\\]"
  },
  {
    "id": "toan-12-2-vdc-54",
    "sourceNumber": 54,
    "sourcePage": 22,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 22
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(1;0;0)\\), \\(B(1;2;0)\\). Xét điểm \\(C\\) thuộc trục \\(Oz\\), gọi \\(H\\) là hình chiếu vuông góc của \\(A\\) trên \\(BC\\). Biết rằng khi \\(C\\) thay đổi thì \\(H\\) luôn thuộc một đường tròn cố định. Bán kính đường tròn đó bằng",
    "answerText": "\\(\\frac{2}{\\sqrt5}\\)",
    "value": 0.8944271909999159,
    "explanation": "Vì \\(AH\\) vuông góc \\(BC\\), ta có \\(\\overrightarrow{AH}\\cdot\\overrightarrow{BH}=0\\). Do đó \\(H\\) nằm trên mặt cầu đường kính \\(AB\\), tâm \\(I(1;1;0)\\), bán kính \\(1\\).\nMọi đường \\(BC\\) nằm trong mặt phẳng chứa \\(B\\) và trục \\(Oz\\). Mặt phẳng này có phương trình \\(2x-y=0\\) vì mọi điểm trên \\(Oz\\) và \\(B\\) đều thỏa mãn.\nVậy \\(H\\) nằm trên giao tuyến của mặt cầu và mặt phẳng. Khoảng cách từ \\(I\\) đến mặt phẳng là\n\\[d=\\frac{|2\\times1-1|}{\\sqrt{2^2+(-1)^2}}=\\frac1{\\sqrt5}.\\]\nTâm đường tròn giao tuyến là hình chiếu của \\(I\\) lên mặt phẳng. Dùng Pythagore với bán kính mặt cầu bằng \\(1\\):\n\\[r=\\sqrt{1-d^2}=\\sqrt{1-\\frac15}=\\frac2{\\sqrt5}.\\]"
  },
  {
    "id": "toan-12-2-vdc-55",
    "sourceNumber": 55,
    "sourcePage": 23,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 23
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong không gian với hệ toạ độ \\(Oxyz\\), cho tam giác \\(ABC\\) với \\(A(0;0;1)\\), \\(B(2;-2;0)\\) và \\(C(\\sqrt{11};4;4)\\). Biết điểm \\(D(x;y;z)\\) là chân đường phân giác trong góc \\(A\\) của tam giác \\(ABC\\). Tính giá trị của biểu thức \\(P=3x-y-3z\\).",
    "answerText": "\\(\\sqrt{11}\\)",
    "value": 3.3166247903554,
    "explanation": "Tính hai cạnh kề góc \\(A\\):\n\\[AB=\\sqrt{2^2+(-2)^2+(-1)^2}=3.\\]\n\\[AC=\\sqrt{11+4^2+3^2}=6.\\]\nTheo định lý phân giác, \\(BD:DC=AB:AC=1:2\\). Do đó \\(D=\\frac{2B+C}3\\). Từng tọa độ là\n\\[x=\\frac{4+\\sqrt{11}}3;\\quad y=\\frac{-4+4}3=0;\\quad z=\\frac43.\\]\n\\[3x-y-3z=(4+\\sqrt{11})-0-4=\\sqrt{11}.\\]"
  },
  {
    "id": "toan-12-2-vdc-56",
    "sourceNumber": 56,
    "sourcePage": 23,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 23
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong hệ tọa độ \\(Oxyz\\), cho các điểm \\(A(5;3;4)\\), \\(B(1;2;1)\\), \\(C(8;-3;2)\\). Gọi \\(D(a;b;c)\\) là chân đường phân giác trong kẻ từ đỉnh \\(A\\) của tam giác \\(ABC\\). Tính \\(a+2b+3c\\).",
    "answerText": "8",
    "value": 8,
    "explanation": "Xét biểu thức \\(L(x;y;z)=x+2y+3z\\). Thay tọa độ hai đầu cạnh \\(BC\\) vào:\n\\[L(B)=1+2\\times2+3\\times1=8.\\]\n\\[L(C)=8+2\\times(-3)+3\\times2=8.\\]\nVì \\(D\\) nằm trên đoạn \\(BC\\) nên viết được \\(D=(1-t)B+tC\\) với \\(0\\le t\\le1\\). Biểu thức \\(L\\) bậc nhất theo từng tọa độ nên\n\\[L(D)=(1-t)L(B)+tL(C)=(1-t)\\times8+t\\times8=8.\\]\nVậy \\(a+2b+3c=8\\)."
  },
  {
    "id": "toan-12-2-vdc-57",
    "sourceNumber": 57,
    "sourcePage": 23,
    "source": {
      "file": "VDC_Chuong_2.pdf",
      "page": 23
    },
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Cho khối chóp \\(S.ABC\\) được đặt vào trong hệ trục toạ độ \\(Oxyz\\) với \\(B(0;6;0)\\), \\(C(8;0;0)\\), \\(A\\) là điểm trên mặt \\((Oxy)\\) và \\(S\\) là điểm trên trục \\(Oz\\) sao cho \\(\\overrightarrow{AS}=-\\frac1{12}[\\overrightarrow{AB},\\overrightarrow{AC}]\\). Tính thể tích của khối chóp \\(S.ABC\\) (làm tròn đến hàng đơn vị).",
    "answerText": "32",
    "value": 32,
    "explanation": "Vì \\(A,B,C\\) thuộc \\((Oxy)\\), hai vectơ \\(\\overrightarrow{AB},\\overrightarrow{AC}\\) nằm ngang, nên tích có hướng của chúng thẳng đứng. Do đó \\(\\overrightarrow{AS}\\) thẳng đứng, tức \\(A\\) và \\(S\\) có cùng hoành độ và tung độ.\n\\(S\\) thuộc \\(Oz\\) nên cả hai tọa độ ngang bằng \\(0\\). Vì \\(A\\) thuộc \\((Oxy)\\), suy ra \\(A=O\\). Khi đó \\(\\overrightarrow{AB}=(0;6;0)\\), \\(\\overrightarrow{AC}=(8;0;0)\\). Tích có hướng có hai thành phần đầu bằng \\(0\\) và thành phần cuối bằng \\(0\\times0-6\\times8=-48\\).\n\\[\\overrightarrow{AS}=-\\frac1{12}(0;0;-48)=(0;0;4).\\]\nĐáy \\(ABC\\) là tam giác vuông có hai cạnh góc vuông \\(6\\) và \\(8\\), diện tích \\(24\\). Chiều cao bằng \\(4\\). Vậy \\(V=\\frac13\\times24\\times4=32\\)."
  }
];
