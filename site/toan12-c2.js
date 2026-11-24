export const chapter2 = [
  {
    "id": "toan-12-2-pdf-1",
    "sourcePage": 1,
    "prompt": "Cho hình chóp tứ giác đều \\(S.ABCD\\) (xem hình bên). Gọi \\(O\\) là giao điểm của \\(AC\\) và \\(BD\\). Phát biểu nào sau đây đúng?",
    "explanation": "Vì \\(O\\) là tâm của hình vuông \\(ABCD\\) nên \\(O\\) là trung điểm của \\(AC\\) và \\(BD\\).\nTheo quy tắc trung điểm, ta có: \\(\\overrightarrow{SA}+\\overrightarrow{SC}=2\\overrightarrow{SO}\\) và \\(\\overrightarrow{SB}+\\overrightarrow{SD}=2\\overrightarrow{SO}\\).\nCộng vế theo vế, ta được: \\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=4\\overrightarrow{SO}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=4\\overrightarrow{SO}\\)",
      "\\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=2\\overrightarrow{SO}\\)",
      "\\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=\\vec{0}\\)",
      "\\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=\\overrightarrow{SO}\\)"
    ],
    "answer": 0,
    "diagram": {
      "folder": "toan12-c2",
      "file": "1-fig.webp",
      "alt": "Hình minh họa câu 1"
    }
  },
  {
    "id": "toan-12-2-pdf-2",
    "sourcePage": 1,
    "prompt": "Cho hình hộp \\(ABCD.A_1B_1C_1D_1\\) với tâm \\(O\\). Chọn đẳng thức sai.",
    "explanation": "Xét các phương án:\nA: \\((\\overrightarrow{AB}+\\overrightarrow{CD})+\\overrightarrow{BC_1}+\\overrightarrow{D_1A}=\\vec{0}+\\overrightarrow{BC_1}+\\overrightarrow{D_1A}=\\overrightarrow{AD_1}+\\overrightarrow{D_1A}=\\vec{0}\\) (Đúng).\nB: \\(\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CC_1}=\\overrightarrow{AC_1}\\) và \\(\\overrightarrow{AD_1}+\\overrightarrow{D_1O}+\\overrightarrow{OC_1}=\\overrightarrow{AC_1}\\) (Đúng).\nC: Quy tắc hình hộp: \\(\\overrightarrow{AC_1}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA_1}\\) (Đúng).\nD: \\(\\overrightarrow{AB}+\\overrightarrow{AA_1}=\\overrightarrow{AB_1}\\) còn \\(\\overrightarrow{AD}+\\overrightarrow{DD_1}=\\overrightarrow{AD_1}\\). Vì \\(AB_1\\ne AD_1\\) nên đẳng thức này sai.",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{AB}+\\overrightarrow{BC_1}+\\overrightarrow{CD}+\\overrightarrow{D_1A}=\\vec{0}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CC_1}=\\overrightarrow{AD_1}+\\overrightarrow{D_1O}+\\overrightarrow{OC_1}\\)",
      "\\(\\overrightarrow{AC_1}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA_1}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AA_1}=\\overrightarrow{AD}+\\overrightarrow{DD_1}\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-pdf-3",
    "sourcePage": 1,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), cho \\(A(2;-2;1)\\), \\(B(0;1;2)\\). Tọa độ điểm \\(M\\) thuộc mặt phẳng \\((Oxy)\\) sao cho 3 điểm \\(A,B,M\\) thẳng hàng là",
    "explanation": "Vì \\(M\\in(Oxy)\\) nên \\(M(x;y;0)\\).\nTa có \\(\\overrightarrow{AB}=(-2;3;1)\\). Đường thẳng \\(AB\\) đi qua \\(B(0;1;2)\\) có phương trình tham số: \\(\\begin{cases}x=-2t\\\\y=1+3t\\\\z=2+t\\end{cases}\\).\nVì \\(M\\in AB\\) nên tọa độ \\(M\\) ứng với \\(z=0\\Rightarrow2+t=0\\Rightarrow t=-2\\).\nKhi đó \\(x=-2(-2)=4\\) và \\(y=1+3(-2)=-5\\).\nVậy \\(M(4;-5;0)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(M(4;-5;0)\\)",
      "\\(M(2;-3;0)\\)",
      "\\(M(4;5;0)\\)",
      "\\(M(0;0;1)\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-4",
    "sourcePage": 2,
    "prompt": "Cho hình hộp chữ nhật \\(ABCD.A'B'C'D'\\). Khẳng định nào đúng?",
    "explanation": "Trong hình hộp chữ nhật \\(ABCD.A'B'C'D'\\), ta có \\(AD\\parallel B'C'\\) và \\(AD=B'C'\\).\nHơn nữa, các vectơ \\(\\overrightarrow{AD}\\) và \\(\\overrightarrow{B'C'}\\) cùng hướng đi từ trái sang phải.\nVậy \\(\\overrightarrow{AD}\\) cùng hướng với \\(\\overrightarrow{B'C'}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{AD}\\text{ cùng hướng với }\\overrightarrow{B'C'}\\)",
      "\\(\\overrightarrow{AC'}\\text{ cùng phương với }\\overrightarrow{A'C'}\\)",
      "\\(\\overrightarrow{CD}\\text{ cùng hướng với }\\overrightarrow{D'C'}\\)",
      "\\(\\overrightarrow{AC'}=\\overrightarrow{BD'}\\)"
    ],
    "answer": 0,
    "diagram": {
      "folder": "toan12-c2",
      "file": "4-fig.webp",
      "alt": "Hình minh họa câu 4"
    }
  },
  {
    "id": "toan-12-2-pdf-5",
    "sourcePage": 2,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), cho \\(\\vec{a}=(1;2;3)\\), \\(\\vec{b}=(2;2;-1)\\). Tọa độ \\(\\vec{a}-2\\vec{b}\\) là:",
    "explanation": "Ta có: \\(2\\vec{b}=(4;4;-2)\\).\nSuy ra \\(\\vec{a}-2\\vec{b}=(1-4;2-4;3-(-2))=(-3;-2;5)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((-3;-2;1)\\)",
      "\\((3;2;5)\\)",
      "\\((-3;-2;5)\\)",
      "\\((-1;0;4)\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-6",
    "sourcePage": 2,
    "prompt": "Cho hình tứ diện \\(ABCD\\) có \\(M,N,O\\) lần lượt là trung điểm của \\(AB,CD,MN\\). Phát biểu nào sau đây là đúng?",
    "explanation": "Vì \\(M\\) là trung điểm của \\(AB\\), \\(N\\) là trung điểm của \\(CD\\) nên với mọi điểm \\(O\\) ta có: \\(\\overrightarrow{OA}+\\overrightarrow{OB}=2\\overrightarrow{OM}\\) và \\(\\overrightarrow{OC}+\\overrightarrow{OD}=2\\overrightarrow{ON}\\).\nDo \\(O\\) là trung điểm của \\(MN\\) nên \\(\\overrightarrow{OM}+\\overrightarrow{ON}=\\vec{0}\\).\nSuy ra \\(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=2(\\overrightarrow{OM}+\\overrightarrow{ON})=\\vec{0}\\Rightarrow \\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=-\\overrightarrow{OA}\\).\nKhi đó: \\(\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}=(\\overrightarrow{OB}-\\overrightarrow{OA})+(\\overrightarrow{OC}-\\overrightarrow{OA})+(\\overrightarrow{OD}-\\overrightarrow{OA})=(\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD})-3\\overrightarrow{OA}=-\\overrightarrow{OA}-3\\overrightarrow{OA}=-4\\overrightarrow{OA}=4\\overrightarrow{AO}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}=\\overrightarrow{AO}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}=2\\overrightarrow{AO}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}=4\\overrightarrow{AO}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}=3\\overrightarrow{AO}\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-7",
    "sourcePage": 2,
    "prompt": "Trong không gian với hệ trục tọa độ \\(Oxyz\\), cho điểm \\(M\\) có hình chiếu vuông góc lên mặt phẳng \\((Oxy)\\) và \\((Oxz)\\) lần lượt là \\(M_1(2;3;0)\\) và \\(M_2(2;0;-5)\\). Tọa độ của điểm \\(M\\) là",
    "explanation": "Hình chiếu của \\(M(x;y;z)\\) lên mặt phẳng \\((Oxy)\\) là \\(M_1(x;y;0)\\Rightarrow x=2,y=3\\).\nHình chiếu của \\(M(x;y;z)\\) lên mặt phẳng \\((Oxz)\\) là \\(M_2(x;0;z)\\Rightarrow x=2,z=-5\\).\nVậy tọa độ điểm \\(M\\) là \\(M(2;3;-5)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(M(-2;-3;5)\\)",
      "\\(M(2;3;-5)\\)",
      "\\(M(2;-5;3)\\)",
      "\\(M(2;-3;5)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-pdf-8",
    "sourcePage": 3,
    "prompt": "Cho hình hộp \\(ABCD.A'B'C'D'\\). Chọn đẳng thức đúng:",
    "explanation": "Theo quy tắc hình hộp, vectơ đường chéo xuất phát từ một đỉnh bằng tổng ba vectơ cạnh xuất phát từ đỉnh đó.\nĐối với đỉnh \\(A\\), ta có: \\(\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{DB'}=\\overrightarrow{DA}+\\overrightarrow{DD'}+\\overrightarrow{DB}\\)",
      "\\(\\overrightarrow{AC'}=\\overrightarrow{AC}+\\overrightarrow{AB}+\\overrightarrow{AD}\\)",
      "\\(\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AA'}+\\overrightarrow{AD}\\)",
      "\\(\\overrightarrow{DB}=\\overrightarrow{DA}+\\overrightarrow{DD'}+\\overrightarrow{DC}\\)"
    ],
    "answer": 2,
    "diagram": {
      "folder": "toan12-c2",
      "file": "8-fig.webp",
      "alt": "Hình minh họa câu 8"
    }
  },
  {
    "id": "toan-12-2-pdf-9",
    "sourcePage": 3,
    "prompt": "Trong không gian với hệ trục tọa độ \\(Oxyz\\), cho hai vectơ \\(\\vec{a}=(1;0;1)\\), \\(\\vec{b}=(2;0;0)\\). Góc giữa hai vectơ \\(\\vec{a}\\) và \\(\\vec{b}\\) là",
    "explanation": "Ta có \\(\\cos(\\vec{a},\\vec{b})=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}=\\frac{1\\cdot2+0\\cdot0+1\\cdot0}{\\sqrt{1^2+0^2+1^2}\\cdot\\sqrt{2^2+0^2+0^2}}=\\frac2{\\sqrt2\\cdot2}=\\frac1{\\sqrt2}\\).\nSuy ra \\((\\vec{a},\\vec{b})=45^\\circ\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(30^\\circ\\)",
      "\\(150^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(45^\\circ\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-pdf-10",
    "sourcePage": 3,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), cho vectơ \\(\\vec{a}=(1;-2;0)\\) và \\(\\vec{b}=2\\vec{a}\\). Tìm tọa độ của vectơ \\(\\vec{b}\\).",
    "explanation": "Ta có \\(\\vec{a}=(1;-2;0)\\Rightarrow \\vec{b}=2\\vec{a}=(2\\cdot1;2\\cdot(-2);2\\cdot0)=(2;-4;0)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\vec{b}=(2;4;2)\\)",
      "\\(\\vec{b}=(2;-4;0)\\)",
      "\\(\\vec{b}=(3;0;2)\\)",
      "\\(\\vec{b}=(2;4;0)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-pdf-11",
    "sourcePage": 3,
    "prompt": "Trong không gian \\(Oxyz\\), cho hai vectơ \\(\\vec{u}=(1;-4;0)\\) và \\(\\vec{v}=(-1;-2;1)\\). Vectơ \\(\\vec{u}+3\\vec{v}\\) có tọa độ là",
    "explanation": "Ta có \\(3\\vec{v}=(3\\cdot(-1);3\\cdot(-2);3\\cdot1)=(-3;-6;3)\\).\n\\(\\vec{u}+3\\vec{v}=(1+(-3);-4+(-6);0+3)=(-2;-10;3)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((-2;-10;3)\\)",
      "\\((-2;-6;3)\\)",
      "\\((-4;-8;4)\\)",
      "\\((-2;-10;-3)\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-12",
    "sourcePage": 4,
    "prompt": "Cho hình hộp \\(ABCD.A'B'C'D'\\) (xem hình vẽ). Phát biểu nào sau đây là đúng?",
    "explanation": "Theo quy tắc hình hộp, xét đường chéo \\(DB'\\), ta có \\(\\overrightarrow{DB'}=\\overrightarrow{DA}+\\overrightarrow{DC}+\\overrightarrow{DD'}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AB'}+\\overrightarrow{AD}\\)",
      "\\(\\overrightarrow{DB'}=\\overrightarrow{DA}+\\overrightarrow{DD'}+\\overrightarrow{DC}\\)",
      "\\(\\overrightarrow{AC'}=\\overrightarrow{AC}+\\overrightarrow{AB}+\\overrightarrow{AD}\\)",
      "\\(\\overrightarrow{DB'}=\\overrightarrow{DA}+\\overrightarrow{DD'}+\\overrightarrow{DC}\\)"
    ],
    "answer": 1,
    "diagram": {
      "folder": "toan12-c2",
      "file": "12-fig.webp",
      "alt": "Hình minh họa câu 12"
    },
    "acceptedChoiceIndices": [
      1,
      3
    ],
    "answerText": "B hoặc D",
    "sourceNote": "Hai phương án B và D trong tài liệu giống nhau. Hệ thống chấp nhận cả hai."
  },
  {
    "id": "toan-12-2-pdf-13",
    "sourcePage": 4,
    "prompt": "Trong không gian \\(Oxyz\\), cho ba điểm \\(M(1;1;1)\\), \\(N(2;3;4)\\), \\(P(7;7;5)\\). Tìm tọa độ điểm \\(Q\\) để tứ giác \\(MNPQ\\) là hình bình hành.",
    "explanation": "Tứ giác \\(MNPQ\\) là hình bình hành khi \\(\\overrightarrow{MN}=\\overrightarrow{QP}\\).\nTa có \\(\\overrightarrow{MN}=(1;2;3)\\). Gọi \\(Q(x;y;z)\\), ta có \\(\\overrightarrow{QP}=(7-x;7-y;5-z)\\).\n\\(\\overrightarrow{MN}=\\overrightarrow{QP}\\Leftrightarrow\\begin{cases}7-x=1\\\\7-y=2\\\\5-z=3\\end{cases}\\Leftrightarrow\\begin{cases}x=6\\\\y=5\\\\z=2\\end{cases}\\Rightarrow Q(6;5;2)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(Q(6;5;2)\\)",
      "\\(Q(-6;-5;-2)\\)",
      "\\(Q(-2;-3;-4)\\)",
      "\\(Q(-4;-3;0)\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-14",
    "sourcePage": 4,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), phương trình nào sau đây là phương trình tổng quát của mặt phẳng?",
    "explanation": "Phương trình tổng quát của mặt phẳng có dạng \\(Ax+By+Cz+D=0\\) (\\(A,B,C\\) không đồng thời bằng \\(0\\)). Đây là phương trình bậc nhất đối với ba biến \\(x,y,z\\). Trong các phương án đã cho, chỉ có phương trình \\(2x+y+z+3=0\\) là bậc nhất đối với cả \\(x,y,z\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(2x+y^2+z+1=0\\)",
      "\\(x^2+y+z+2=0\\)",
      "\\(2x+y+z+3=0\\)",
      "\\(2x+y+z^2+4=0\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-15",
    "sourcePage": 4,
    "prompt": "Trong không gian, cho hình hộp \\(ABCD.A'B'C'D'\\). Mệnh đề nào dưới đây sai?",
    "explanation": "Theo quy tắc hình hộp, ta có \\(\\overrightarrow{BD'}=\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BB'}\\). Vì \\(\\overrightarrow{BA}+\\overrightarrow{BC}=\\overrightarrow{BD}\\) nên \\(\\overrightarrow{BD'}=\\overrightarrow{BD}+\\overrightarrow{BB'}\\). Đẳng thức ở phương án C ghi là \\(\\overrightarrow{BD'}=\\overrightarrow{BA}+\\overrightarrow{BD}+\\overrightarrow{BB'}\\) là sai vì nó tương đương với \\(2\\overrightarrow{BD}+\\overrightarrow{BB'}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{CA'}=\\overrightarrow{CB}+\\overrightarrow{CD}+\\overrightarrow{CC'}\\)",
      "\\(\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}\\)",
      "\\(\\overrightarrow{BD'}=\\overrightarrow{BA}+\\overrightarrow{BD}+\\overrightarrow{BB'}\\)",
      "\\(\\overrightarrow{CA}=\\overrightarrow{CB}+\\overrightarrow{CD}\\)"
    ],
    "answer": 2,
    "diagram": {
      "folder": "toan12-c2",
      "file": "15-fig.webp",
      "alt": "Hình minh họa câu 15"
    },
    "sourceNote": "Ở dòng cuối, lời giải gốc ghi \\(2\\overrightarrow{BD}+\\overrightarrow{BB\\prime}\\). Đẳng thức sai ở C thực tế thừa \\(\\overrightarrow{BA}\\) so với \\(\\overrightarrow{BD\\prime}=\\overrightarrow{BD}+\\overrightarrow{BB\\prime}\\). Kết luận chọn C vẫn đúng."
  },
  {
    "id": "toan-12-2-pdf-16",
    "sourcePage": 5,
    "prompt": "Trong không gian \\(Oxyz\\), cho \\(\\vec{a}=(1;2;-3)\\). Độ dài của vectơ \\(\\vec{a}\\) là",
    "explanation": "Độ dài của vectơ \\(\\vec{a}=(x;y;z)\\) được tính theo công thức \\(|\\vec{a}|=\\sqrt{x^2+y^2+z^2}\\).\nTa có: \\(|\\vec{a}|=\\sqrt{1^2+2^2+(-3)^2}=\\sqrt{1+4+9}=\\sqrt{14}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\sqrt{13}\\)",
      "\\(0\\)",
      "\\(\\sqrt{14}\\)",
      "\\(\\sqrt{12}\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-17",
    "sourcePage": 5,
    "prompt": "Trong không gian \\(Oxyz\\), cho ba vectơ \\(\\vec{a}=(2;-1;0)\\), \\(\\vec{b}=(-1;-3;2)\\), \\(\\vec{c}=(-2;-4;-3)\\). Tọa độ của vectơ \\(\\vec{u}=2\\vec{a}-3\\vec{b}+\\vec{c}\\) là",
    "explanation": "Ta có:\n\\(2\\vec{a}=(4;-2;0)\\)\n\\(-3\\vec{b}=(3;9;-6)\\)\n\\(\\vec{c}=(-2;-4;-3)\\)\nCộng vế theo vế các tọa độ: \\(\\vec{u}=(4+3-2;-2+9-4;0-6-3)=(5;3;-9)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((3;7;9)\\)",
      "\\((-3;-7;-9)\\)",
      "\\((5;3;-9)\\)",
      "\\((-5;-3;9)\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-18",
    "sourcePage": 5,
    "prompt": "Trong không gian với hệ trục tọa độ \\(Oxyz\\), cho vectơ \\(\\vec{u}=\\vec{j}-4\\vec{k}\\). Tọa độ vectơ \\(\\vec{u}\\) là",
    "explanation": "Ta có \\(\\vec{u}=x\\vec{i}+y\\vec{j}+z\\vec{k}\\Leftrightarrow \\vec{u}=(x;y;z)\\).\nỞ đây \\(\\vec{u}=0\\cdot\\vec{i}+1\\cdot\\vec{j}-4\\cdot\\vec{k}\\Rightarrow \\vec{u}=(0;1;-4)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((1;-4)\\)",
      "\\((0;1;-4)\\)",
      "\\((1;0;-4)\\)",
      "\\((0;-1;4)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-pdf-19",
    "sourcePage": 5,
    "prompt": "Cho tứ diện \\(ABCD\\) có \\(G\\) là trọng tâm của tam giác \\(BCD\\). Đặt \\(\\overrightarrow{AB}=\\vec{x}\\), \\(\\overrightarrow{AC}=\\vec{y}\\), \\(\\overrightarrow{AD}=\\vec{z}\\). Phát biểu nào sau đây là đúng?",
    "explanation": "Với \\(G\\) là trọng tâm tam giác \\(BCD\\), ta luôn có hệ thức:\n\\(3\\overrightarrow{AG}=\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AD}\\Rightarrow \\overrightarrow{AG}=\\frac13(\\vec{x}+\\vec{y}+\\vec{z})\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{AG}=\\frac13(\\vec{x}+\\vec{y}+\\vec{z})\\)",
      "\\(\\overrightarrow{AG}=\\frac23(\\vec{x}+\\vec{y}+\\vec{z})\\)",
      "\\(\\overrightarrow{AG}=-\\frac13(\\vec{x}+\\vec{y}+\\vec{z})\\)",
      "\\(\\overrightarrow{AG}=\\frac23(\\vec{x}+\\vec{y}+\\vec{z})\\)"
    ],
    "answer": 0,
    "diagram": {
      "folder": "toan12-c2",
      "file": "19-fig.webp",
      "alt": "Hình minh họa câu 19"
    }
  },
  {
    "id": "toan-12-2-pdf-20",
    "sourcePage": 6,
    "prompt": "Cho hình hộp \\(ABCD.A'B'C'D'\\) (minh họa như hình dưới). Phát biểu nào sau đây là đúng?",
    "explanation": "Theo quy tắc hình hộp, tổng ba vectơ chung gốc là ba cạnh của hình hộp bằng vectơ đường chéo xuất phát từ gốc đó: \\(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{AB}+\\overrightarrow{BB'}+\\overrightarrow{B'A'}=\\overrightarrow{AC'}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{BC'}+\\overrightarrow{C'D'}=\\overrightarrow{AC'}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AC}+\\overrightarrow{AA'}=\\overrightarrow{AC'}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AA'}+\\overrightarrow{AD}=\\overrightarrow{AC'}\\)"
    ],
    "answer": 3,
    "diagram": {
      "folder": "toan12-c2",
      "file": "20-fig.webp",
      "alt": "Hình minh họa câu 20"
    }
  },
  {
    "id": "toan-12-2-pdf-21",
    "sourcePage": 6,
    "prompt": "Cho hình lập phương \\(ABCD.A'B'C'D'\\) có cạnh bằng \\(a\\). Độ dài của vectơ \\(\\vec{u}=\\overrightarrow{A'C'}-\\overrightarrow{A'A}\\) bằng",
    "explanation": "Ta có \\(\\vec u=\\overrightarrow{A\\prime C\\prime}-\\overrightarrow{A\\prime A}=\\overrightarrow{A\\prime C\\prime}+\\overrightarrow{AA\\prime}\\).\nMà \\(\\overrightarrow{AA\\prime}=\\overrightarrow{CC\\prime}\\) nên \\(\\vec u=\\overrightarrow{A\\prime C\\prime}+\\overrightarrow{CC\\prime}=\\overrightarrow{A\\prime C}\\).\nĐộ dài \\(|\\vec u|=A\\prime C=\\sqrt{a^2+a^2+a^2}=a\\sqrt3\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\sqrt2 a\\)",
      "\\(\\frac{\\sqrt3a}{2}\\)",
      "\\(\\sqrt6 a\\)",
      "\\(\\sqrt3 a\\)"
    ],
    "answer": 3,
    "diagram": {
      "folder": "toan12-c2",
      "file": "21-fig.webp",
      "alt": "Hình minh họa câu 21"
    },
    "sourceNote": "Lời giải gốc ghi nhầm hướng của vectơ tổng. Từ quy tắc hình hộp ta có \\(\\vec u=\\overrightarrow{AC\\prime}\\), cùng độ dài \\(a\\sqrt3\\) với đường chéo \\(A\\prime C\\). Đáp án D giữ nguyên."
  },
  {
    "id": "toan-12-2-pdf-22",
    "sourcePage": 6,
    "prompt": "Trong không gian, biết \\(|\\vec{u}|=2\\), \\(|\\vec{v}|=1\\) và góc giữa hai vectơ \\(\\vec{u}\\) và \\(\\vec{v}\\) bằng \\(\\frac{2\\pi}{3}\\). Tính tích vô hướng của hai vectơ \\(\\vec{u}\\) và \\(\\vec{v}\\).",
    "explanation": "Tích vô hướng của hai vectơ được tính theo công thức: \\(\\vec{u}\\cdot\\vec{v}=|\\vec{u}|\\cdot|\\vec{v}|\\cdot\\cos(\\vec{u},\\vec{v})=2\\cdot1\\cdot\\cos\\left(\\frac{2\\pi}{3}\\right)=2\\cdot\\left(-\\frac12\\right)=-1\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\frac{4\\pi}{3}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-23",
    "sourcePage": 7,
    "prompt": "Trong không gian \\(Oxyz\\), cho vectơ \\(\\vec{a}=(-1;0;2)\\). Mệnh đề nào dưới đây đúng?",
    "explanation": "Ta có \\(2\\vec{a}=2\\cdot(-1;0;2)=(-2;0;4)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(2\\vec{a}=(2;0;-4)\\)",
      "\\(2\\vec{a}=(-2;0;-4)\\)",
      "\\(2\\vec{a}=(-2;0;4)\\)",
      "\\(2\\vec{a}=(2;0;4)\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-24",
    "sourcePage": 7,
    "prompt": "Cho hình hộp \\(ABCD.A'B'C'D'\\). Hãy chọn khẳng định đúng.",
    "explanation": "Theo quy tắc hình hộp, tổng của ba vectơ chung gốc xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó: \\(\\overrightarrow{DA}+\\overrightarrow{DC}+\\overrightarrow{DD'}=\\overrightarrow{DB'}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{DA}+\\overrightarrow{DC}+\\overrightarrow{DD'}=\\overrightarrow{B'D}\\)",
      "\\(\\overrightarrow{DA}+\\overrightarrow{DC}+\\overrightarrow{DD'}=\\overrightarrow{DB'}\\)",
      "\\(\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC'}\\)",
      "\\(\\overrightarrow{AA'}+\\overrightarrow{BB'}=\\vec{0}\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-pdf-25",
    "sourcePage": 7,
    "prompt": "Cho hình lập phương \\(ABCD.EFGH\\). Hãy xác định góc giữa hai vectơ \\(\\overrightarrow{AB}\\) và \\(\\overrightarrow{EG}\\)?",
    "explanation": "Vì \\(EFGH\\) là hình vuông nên \\(\\overrightarrow{EG}=\\overrightarrow{AC}\\).\nKhi đó \\((\\overrightarrow{AB},\\overrightarrow{EG})=(\\overrightarrow{AB},\\overrightarrow{AC})=\\widehat{BAC}\\).\nVì \\(ABCD\\) là hình vuông nên góc \\(\\widehat{BAC}=45^\\circ\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(45^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(120^\\circ\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-26",
    "sourcePage": 7,
    "prompt": "Trong không gian \\(Oxyz\\), cho điểm \\(A(2;2;1)\\). Tính độ dài đoạn thẳng \\(OA\\).",
    "explanation": "Độ dài đoạn thẳng \\(OA=\\sqrt{x_A^2+y_A^2+z_A^2}=\\sqrt{2^2+2^2+1^2}=\\sqrt9=3\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(OA=3\\)",
      "\\(OA=9\\)",
      "\\(OA=\\sqrt5\\)",
      "\\(OA=5\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-27",
    "sourcePage": 7,
    "prompt": "Trong không gian tọa độ \\(Oxyz\\) cho điểm \\(M(3;2;-1)\\) và vectơ \\(\\vec{v}=(2;-1;-2)\\). Tọa độ của điểm \\(N\\) thỏa mãn điều kiện \\(\\vec{v}=\\overrightarrow{MN}\\) là",
    "explanation": "Gọi \\(N(x;y;z)\\). Ta có \\(\\overrightarrow{MN}=(x-3;y-2;z+1)\\).\nVì \\(\\vec{v}=\\overrightarrow{MN}\\Rightarrow\\begin{cases}x-3=2\\\\y-2=-1\\\\z+1=-2\\end{cases}\\Rightarrow\\begin{cases}x=5\\\\y=1\\\\z=-3\\end{cases}\\). Vậy \\(N(5;1;-3)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((1;5;-3)\\)",
      "\\((1;3;1)\\)",
      "\\((-1;-3;-1)\\)",
      "\\((5;1;-3)\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-pdf-28",
    "sourcePage": 7,
    "prompt": "Trong không gian \\(Oxyz\\), cho điểm \\(A(1;0;1)\\). Tìm tọa độ điểm \\(C\\) thỏa mãn \\(\\overrightarrow{AC}=(3;3;0)\\)?",
    "explanation": "Gọi \\(C(x;y;z)\\). Ta có \\(\\overrightarrow{AC}=(x-1;y-0;z-1)\\).\nTheo giả thiết \\(\\overrightarrow{AC}=(3;3;0)\\Rightarrow\\begin{cases}x-1=3\\\\y=3\\\\z-1=0\\end{cases}\\Rightarrow\\begin{cases}x=4\\\\y=3\\\\z=1\\end{cases}\\Rightarrow C(4;3;1)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(C(2;3;1)\\)",
      "\\(C(3;3;0)\\)",
      "\\(C(-3;-3;-1)\\)",
      "\\(C(4;3;1)\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-pdf-29",
    "sourcePage": 8,
    "prompt": "Cho hình lập phương \\(ABCD.A'B'C'D'\\). Khẳng định nào sau đây là khẳng định sai?",
    "explanation": "Giả sử hình lập phương có cạnh bằng 1 và gắn hệ trục tọa độ \\(Oxyz\\) sao cho \\(A(0;0;0)\\), \\(B(1;0;0)\\), \\(D(0;1;0)\\), \\(A'(0;0;1)\\).\nKhi đó \\(C(1;1;0)\\), \\(B'(1;0;1)\\). Ta có \\(\\overrightarrow{A'A}=(0;0;-1)\\) và \\(\\overrightarrow{CB'}=(1-1;0-1;1-0)=(0;-1;1)\\).\n\\(\\cos(\\overrightarrow{A'A},\\overrightarrow{CB'})=\\frac{0\\cdot0+0\\cdot(-1)+(-1)\\cdot1}{1\\cdot\\sqrt2}=-\\frac1{\\sqrt2}\\Rightarrow(\\overrightarrow{A'A},\\overrightarrow{CB'})=135^\\circ\\).\nVậy khẳng định C sai.",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((\\overrightarrow{A'C'},\\overrightarrow{AD})=45^\\circ\\)",
      "\\((\\overrightarrow{A'C'},\\overrightarrow{B'B})=90^\\circ\\)",
      "\\((\\overrightarrow{A'A},\\overrightarrow{CB'})=45^\\circ\\)",
      "\\((\\overrightarrow{AB},\\overrightarrow{CD})=180^\\circ\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-30",
    "sourcePage": 8,
    "prompt": "Cho hình hộp \\(ABCD.EFGH\\). Vectơ nào sau đây bằng vectơ \\(\\overrightarrow{FH}\\)?",
    "explanation": "Trong hình hộp \\(ABCD.EFGH\\), tứ giác \\(BDHF\\) là hình bình hành.\nDo đó, \\(\\overrightarrow{FH}=\\overrightarrow{BD}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\overrightarrow{BD}\\)",
      "\\(\\overrightarrow{DB}\\)",
      "\\(\\overrightarrow{BA}\\)",
      "\\(\\overrightarrow{AB}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-31",
    "sourcePage": 8,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), với \\(\\vec{i},\\vec{j},\\vec{k}\\) là các vectơ đơn vị trên trục \\(Ox,Oy,Oz\\) tương ứng và vectơ \\(\\vec{a}=(1;0;1)\\). Kết quả nào sau đây đúng?",
    "explanation": "Theo định nghĩa tọa độ vectơ: \\(\\vec{a}=(x;y;z)\\Leftrightarrow \\vec{a}=x\\vec{i}+y\\vec{j}+z\\vec{k}\\).\nVới \\(\\vec{a}=(1;0;1)\\), ta có \\(\\vec{a}=1\\vec{i}+0\\vec{j}+1\\vec{k}=\\vec{i}+\\vec{k}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\vec{a}=\\vec{i}+\\vec{j}+\\vec{k}\\)",
      "\\(\\vec{a}=\\vec{j}+\\vec{k}\\)",
      "\\(\\vec{a}=\\vec{i}+\\vec{j}\\)",
      "\\(\\vec{a}=\\vec{i}+\\vec{k}\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-pdf-32",
    "sourcePage": 8,
    "prompt": "Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình bình hành tâm \\(O\\). Tổng \\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}\\) bằng",
    "explanation": "Vì \\(O\\) là tâm hình bình hành \\(ABCD\\) nên \\(O\\) là trung điểm của \\(AC\\) và \\(BD\\).\nTa có: \\(\\overrightarrow{SA}+\\overrightarrow{SC}=2\\overrightarrow{SO}\\) và \\(\\overrightarrow{SB}+\\overrightarrow{SD}=2\\overrightarrow{SO}\\).\nCộng vế theo vế: \\(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SC}+\\overrightarrow{SD}=4\\overrightarrow{SO}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(4\\overrightarrow{SO}\\)",
      "\\(8\\overrightarrow{SO}\\)",
      "\\(3\\overrightarrow{SO}\\)",
      "\\(2\\overrightarrow{SO}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-33",
    "sourcePage": 8,
    "prompt": "Trong không gian với hệ trục tọa độ \\(Oxyz\\), cho vectơ \\(\\vec{u}=\\vec{j}-4\\vec{k}\\). Tọa độ của vectơ \\(\\vec{u}\\) là",
    "explanation": "Ta có \\(\\vec{u}=0\\vec{i}+1\\vec{j}-4\\vec{k}\\Rightarrow \\vec{u}=(0;1;-4)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\((1;-4)\\)",
      "\\((0;1;-4)\\)",
      "\\((1;0;-4)\\)",
      "\\((0;-1;4)\\)"
    ],
    "answer": 1
  },
  {
    "id": "toan-12-2-pdf-34",
    "sourcePage": 9,
    "prompt": "Hình chiếu vuông góc của điểm \\(A(2;3;-1)\\) trên mặt phẳng \\((Oyz)\\) là điểm",
    "explanation": "Hình chiếu vuông góc của điểm \\(A(x_0;y_0;z_0)\\) lên mặt phẳng \\((Oyz)\\) là điểm có tọa độ \\((0;y_0;z_0)\\).\nVậy hình chiếu của \\(A(2;3;-1)\\) lên \\((Oyz)\\) là điểm \\(P(0;3;-1)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(M(2;0;0)\\)",
      "\\(N(0;-3;1)\\)",
      "\\(P(0;3;-1)\\)",
      "\\(Q(-2;3;-1)\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-35",
    "sourcePage": 9,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), cho hai véc-tơ \\(\\vec{x}=(2;1;-3)\\) và \\(\\vec{y}=(1;0;-1)\\). Tìm tọa độ của véc-tơ \\(\\vec{a}=\\vec{x}+2\\vec{y}\\).",
    "explanation": "Ta có \\(2\\vec{y}=(2;0;-2)\\).\nKhi đó \\(\\vec{a}=\\vec{x}+2\\vec{y}=(2+2;1+0;-3-2)=(4;1;-5)\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\vec{a}=(4;1;-1)\\)",
      "\\(\\vec{a}=(3;1;-4)\\)",
      "\\(\\vec{a}=(0;1;-1)\\)",
      "\\(\\vec{a}=(4;1;-5)\\)"
    ],
    "answer": 3
  },
  {
    "id": "toan-12-2-pdf-36",
    "sourcePage": 9,
    "prompt": "Trong không gian với hệ trục tọa độ \\(Oxyz\\), cho \\(\\vec{a}=(2;3;1)\\), \\(\\vec{b}=(-1;5;2)\\), \\(\\vec{c}=(4;-1;3)\\) và \\(\\vec{x}=(-3;22;5)\\). Đẳng thức nào đúng trong các đẳng thức sau?",
    "explanation": "Kiểm tra phương án C: \\(2\\vec{a}+3\\vec{b}-\\vec{c}=2(2;3;1)+3(-1;5;2)-(4;-1;3)=(4-3-4;6+15+1;2+6-3)=(-3;22;5)\\).\nĐẳng thức này trùng với tọa độ của vectơ \\(\\vec{x}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\vec{x}=2\\vec{a}-3\\vec{b}-\\vec{c}\\)",
      "\\(\\vec{x}=-2\\vec{a}+3\\vec{b}+\\vec{c}\\)",
      "\\(\\vec{x}=2\\vec{a}+3\\vec{b}-\\vec{c}\\)",
      "\\(\\vec{x}=2\\vec{a}-3\\vec{b}+\\vec{c}\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-37",
    "sourcePage": 9,
    "prompt": "Trong không gian \\(Oxyz\\), cho tam giác \\(ABC\\) có \\(A(1;2;-1)\\), \\(B(2;-1;3)\\), \\(C(-4;7;5)\\). Gọi \\(D(a;b;c)\\) là chân đường phân giác trong góc \\(B\\) của tam giác \\(ABC\\). Giá trị của \\(a+b+2c\\) bằng",
    "explanation": "Ta có \\(BA=\\sqrt{(1-2)^2+(2+1)^2+(-1-3)^2}=\\sqrt{26}\\).\n\\(BC=\\sqrt{(-4-2)^2+(7+1)^2+(5-3)^2}=\\sqrt{36+64+4}=\\sqrt{104}=2\\sqrt{26}\\).\nTheo tính chất đường phân giác trong: \\(\\frac{DA}{DC}=\\frac{BA}{BC}=\\frac12\\Rightarrow \\overrightarrow{DA}=-\\frac12\\overrightarrow{DC}\\Rightarrow \\overrightarrow{CD}=2\\overrightarrow{DA}\\).\nTọa độ điểm \\(D\\): \\(a=\\frac{2\\cdot1+(-4)}{1+2}=-\\frac23\\); \\(b=\\frac{2\\cdot2+7}{3}=\\frac{11}{3}\\); \\(c=\\frac{2\\cdot(-1)+5}{3}=1\\).\nVậy \\(a+b+2c=-\\frac23+\\frac{11}{3}+2(1)=3+2=5\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(5\\)",
      "\\(4\\)",
      "\\(14\\)",
      "\\(15\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-38",
    "sourcePage": 9,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), cho điểm \\(A(3;-1;1)\\), \\(B(0;-3;3)\\), \\(C(1;7;1)\\). Biết rằng tọa độ điểm \\(M\\) thỏa mãn \\(|\\overrightarrow{MA}+2\\overrightarrow{MB}+\\overrightarrow{MC}|\\) đạt giá trị nhỏ nhất có dạng \\(M(a;b;c)\\). Giá trị \\(T=abc\\) bằng",
    "explanation": "Gọi \\(I\\) là điểm thỏa mãn \\(\\overrightarrow{IA}+2\\overrightarrow{IB}+\\overrightarrow{IC}=\\vec{0}\\). Tọa độ điểm \\(I\\): \\(x_I=\\frac{3+2(0)+1}{4}=1\\); \\(y_I=\\frac{-1+2(-3)+7}{4}=0\\); \\(z_I=\\frac{1+2(3)+1}{4}=2\\).\nTa có \\(|\\overrightarrow{MA}+2\\overrightarrow{MB}+\\overrightarrow{MC}|=|4\\overrightarrow{MI}+(\\overrightarrow{IA}+2\\overrightarrow{IB}+\\overrightarrow{IC})|=4MI\\).\nBiểu thức nhỏ nhất khi \\(M\\) trùng với \\(I\\), hay \\(M(1;0;2)\\).\nKhi đó \\(T=abc=1\\cdot0\\cdot2=0\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(10\\)",
      "\\(4\\)",
      "\\(0\\)",
      "\\(3\\)"
    ],
    "answer": 2
  },
  {
    "id": "toan-12-2-pdf-39",
    "sourcePage": 10,
    "prompt": "Trong không gian với hệ tọa độ \\(Oxyz\\), cho các điểm \\(A(2;1;1)\\), \\(B(1;2;3)\\), \\(C(-1;2;0)\\). Điểm \\(M(x;y;z)\\) thỏa mãn \\(\\cos(\\overrightarrow{MA},\\overrightarrow{MB})+\\cos(\\overrightarrow{MA},\\overrightarrow{MC})=0\\) và tồn tại số thực \\(k\\) sao cho \\(\\overrightarrow{AM}=k\\overrightarrow{AB}+k(3k+1)\\overrightarrow{AC}\\). Tổng \\(x+2y+3z-k\\) bằng",
    "explanation": "Điều kiện \\(\\cos(\\overrightarrow{MA},\\overrightarrow{MB})+\\cos(\\overrightarrow{MA},\\overrightarrow{MC})=0\\Leftrightarrow\\frac{\\overrightarrow{MA}}{MA}\\cdot\\left(\\frac{\\overrightarrow{MB}}{MB}+\\frac{\\overrightarrow{MC}}{MC}\\right)=0\\).\nNếu \\(M\\) nằm trên đoạn thẳng \\(BC\\) thì \\(\\frac{\\overrightarrow{MB}}{MB}+\\frac{\\overrightarrow{MC}}{MC}=\\vec{0}\\), khi đó đẳng thức trên luôn đúng.\nĐể \\(M\\) thuộc đường thẳng \\(BC\\) thì tổng các hệ số của \\(\\overrightarrow{AB}\\) và \\(\\overrightarrow{AC}\\) trong biểu diễn \\(\\overrightarrow{AM}\\) phải bằng 1:\n\\(k+k(3k+1)=1\\Leftrightarrow3k^2+2k-1=0\\Leftrightarrow\\begin{cases}k=\\frac13\\text{ hoặc}\\\\k=-1\\end{cases}\\).\n- Với \\(k=\\frac13\\), ta có \\(\\overrightarrow{AM}=\\frac13\\overrightarrow{AB}+\\frac23\\overrightarrow{AC}\\). Vì các hệ số \\(\\frac13,\\frac23\\in(0,1)\\) nên \\(M\\) nằm giữa \\(B\\) và \\(C\\) (thỏa mãn).\n- Với \\(k=-1\\), ta có \\(\\overrightarrow{AM}=-\\overrightarrow{AB}+2\\overrightarrow{AC}\\), \\(M\\) nằm ngoài đoạn \\(BC\\). Thử lại điều kiện cosin không thỏa mãn.\nVới \\(k=\\frac13\\), ta có \\(\\overrightarrow{AB}=(-1;1;2)\\) và \\(\\overrightarrow{AC}=(-3;1;-1)\\).\n\\(\\overrightarrow{AM}=\\frac13(-1;1;2)+\\frac23(-3;1;-1)=\\left(-\\frac73;1;0\\right)\\).\nTọa độ điểm \\(M=A+\\overrightarrow{AM}=(2;1;1)+\\left(-\\frac73;1;0\\right)=\\left(-\\frac13;2;1\\right)\\).\n\\(\\Rightarrow x=-\\frac13,\\ y=2,\\ z=1\\).\nTổng \\(x+2y+3z-k=-\\frac13+2(2)+3(1)-\\frac13=7-\\frac23=\\frac{19}{3}\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "choice",
    "type": "Trắc nghiệm",
    "options": [
      "\\(\\frac{19}{3}\\)",
      "\\(5\\)",
      "\\(7\\)",
      "\\(6\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-2-pdf-40",
    "sourcePage": 11,
    "prompt": "Bạn Mạnh rất yêu thích tập Gym và bạn thường thực hiện bài tập ép ngực với máy tập cáp chéo có tên tiếng Anh là “Cable Crossover”. Thiết lập hệ trục tọa độ \\(Oxyz\\) với đơn vị trên mỗi trục là mét có gốc tọa độ \\(O(0;0;0)\\) nằm trên sàn ngay chính giữa hai trụ của máy tập, các trục \\(Ox,Oy,Oz\\) được chọn như hình vẽ minh họa. Các ròng rọc của hai dây cáp được gắn tại các điểm \\(A(-1{,}4;0;1{,}9)\\) và \\(B(1{,}4;0;1{,}9)\\). Khi tập thì Mạnh kéo và giữ hai tay cầm tại điểm \\(D(0;0{,}8;1{,}2)\\) và tại đó hai tay sẽ chịu tác dụng của hai lực căng \\(\\vec T_1\\) và \\(\\vec T_2\\). Biết rằng mức tạ được cài đặt sao cho độ lớn lực căng trên mỗi sợi dây cáp đều là \\(330\\ \\mathrm N\\) (kết quả tính được ở các ý đều làm tròn đến hàng phần trăm).",
    "explanation": "Ta có tọa độ các điểm: \\(A(-1{,}4;0;1{,}9)\\), \\(B(1{,}4;0;1{,}9)\\) và \\(D(0;0{,}8;1{,}2)\\).\n\na) Đúng.\nChiều dài đoạn dây cáp \\(AD\\) là khoảng cách giữa hai điểm \\(A\\) và \\(D\\):\n\\(AD=\\sqrt{(0-(-1{,}4))^2+(0{,}8-0)^2+(1{,}2-1{,}9)^2}=\\sqrt{1{,}4^2+0{,}8^2+(-0{,}7)^2}=\\sqrt{3{,}09}\\approx1{,}76\\ \\mathrm m\\).\n\nb) Sai.\nTa có \\(\\overrightarrow{DA}=(-1{,}4;-0{,}8;0{,}7)\\) và \\(\\overrightarrow{DB}=(1{,}4;-0{,}8;0{,}7)\\).\nLực căng \\(\\vec T_1\\) cùng hướng với \\(\\overrightarrow{DA}\\), \\(\\vec T_2\\) cùng hướng với \\(\\overrightarrow{DB}\\). Vì độ lớn \\(T_1=T_2\\) và \\(DA=DB=\\sqrt{3{,}09}\\) nên:\n\\(\\vec F_{hl}=\\vec T_1+\\vec T_2=\\frac{330}{\\sqrt{3{,}09}}(\\overrightarrow{DA}+\\overrightarrow{DB})=\\frac{330}{\\sqrt{3{,}09}}(0;-1{,}6;1{,}4)\\).\nVectơ hợp lực có thành phần tung độ \\(y=\\frac{330}{\\sqrt{3{,}09}}\\cdot(-1{,}6)\\ne0\\) nên hợp lực không song song với trục \\(Oz\\).\n\nc) Sai.\nĐộ lớn của hợp lực tác dụng lên tay Mạnh là:\n\\(F=\\frac{330}{\\sqrt{3{,}09}}\\sqrt{0^2+(-1{,}6)^2+1{,}4^2}=\\frac{330}{\\sqrt{3{,}09}}\\sqrt{4{,}52}\\approx399{,}12\\ \\mathrm N\\).\nĐể giữ yên hai tay tại \\(D\\), Mạnh phải tác dụng một lực ngược hướng và có độ lớn bằng hợp lực này, tức là khoảng \\(399{,}12\\ \\mathrm N\\).\n\nd) Đúng.\nTại vị trí mới \\(D'(0;y_D;1{,}2)\\), ta có \\(\\overrightarrow{D'A}=(-1{,}4;-y_D;0{,}7)\\) và \\(\\overrightarrow{D'B}=(1{,}4;-y_D;0{,}7)\\).\nGóc tạo bởi hai dây cáp tại \\(D\\) bằng \\(90^\\circ\\) khi và chỉ khi \\(\\overrightarrow{D'A}\\cdot\\overrightarrow{D'B}=0\\):\n\\((-1{,}4)\\cdot1{,}4+(-y_D)\\cdot(-y_D)+0{,}7\\cdot0{,}7=0\\Leftrightarrow-1{,}96+y_D^2+0{,}49=0\\Leftrightarrow y_D^2=1{,}47\\).\nSuy ra \\(y_D=\\sqrt{1{,}47}\\approx1{,}21\\ \\mathrm m\\) (do \\(y_D>0\\) theo hình vẽ).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Chiều dài đoạn dây cáp tính từ ròng rọc \\(A\\) đến tay cầm \\(D\\) bằng \\(1{,}76\\ \\mathrm m\\).",
      "Vectơ hợp lực tác dụng lên tay Mạnh có phương song song với trục \\(Oz\\).",
      "Để giữ yên hai tay tại vị trí \\(D\\) thì Mạnh phải tác dụng một lực giữ có độ lớn bằng \\(369{,}52\\ \\mathrm N\\).",
      "Để tối ưu hóa nhóm cơ ngực, huấn luyện viên yêu cầu Mạnh điều chỉnh vị trí giữ tay (thay đổi tung độ \\(y\\) của điểm \\(D\\)) sao cho góc tạo bởi hai dây cáp tại \\(D\\) đúng bằng \\(90^\\circ\\). Biết cao độ của tay vẫn giữ nguyên ở \\(z_D=1{,}2\\ \\mathrm m\\) thì khi đó Mạnh cần giữ tay cầm ở vị trí sao cho \\(y_D=1{,}21\\ \\mathrm m\\)."
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
      "file": "40-fig.webp",
      "alt": "Hình minh họa câu 40"
    }
  },
  {
    "id": "toan-12-2-pdf-41",
    "sourcePage": 12,
    "prompt": "Cho hình chóp \\(S.ABCD\\) có \\(SA\\) vuông góc với đáy, \\(SA=a\\), \\(ABCD\\) là hình chữ nhật với \\(AB=2a\\), \\(AD=3a\\) và \\(M\\) là trung điểm của \\(CD\\) (tham khảo hình vẽ).",
    "explanation": "Vì \\(SA\\perp(ABCD)\\) và \\(ABCD\\) là hình chữ nhật nên \\(\\begin{cases}SA\\perp AD\\\\SA\\perp AB\\\\AB\\perp AD\\end{cases}\\).\nGắn hệ trục tọa độ \\(Oxyz\\) với \\(A\\equiv(0;0;0)\\), tia \\(Ax\\) trùng với \\(AB\\), tia \\(Ay\\) trùng với \\(AD\\), tia \\(Az\\) trùng với \\(AS\\).\nKhi đó ta có tọa độ các điểm như sau: \\(A(0;0;0)\\), \\(B(2a;0;0)\\), \\(C(2a;3a;0)\\), \\(D(0;3a;0)\\), \\(S(0;0;a)\\).\nVì \\(M\\) là trung điểm của \\(CD\\) nên \\(M\\left(\\frac{2a+0}{2};\\frac{3a+3a}{2};\\frac{0+0}{2}\\right)=(a;3a;0)\\).\n\na) Sai.\nVì \\(M\\) là trung điểm của \\(CD\\) nên theo quy tắc trung tuyến, ta có \\(\\overrightarrow{SC}+\\overrightarrow{SD}=2\\overrightarrow{SM}\\).\nHoặc kiểm chứng bằng tọa độ: \\(\\overrightarrow{SC}=(2a;3a;-a)\\), \\(\\overrightarrow{SD}=(0;3a;-a)\\Rightarrow \\overrightarrow{SC}+\\overrightarrow{SD}=(2a;6a;-2a)=2(a;3a;-a)=2\\overrightarrow{SM}\\).\n\nb) Đúng.\nTa có \\(\\overrightarrow{SM}=(a-0;3a-0;0-a)=(a;3a;-a)\\).\n\\(\\Rightarrow|\\overrightarrow{SM}|=\\sqrt{a^2+(3a)^2+(-a)^2}=\\sqrt{a^2+9a^2+a^2}=a\\sqrt{11}\\).\n\nc) Sai.\nTa có \\(\\overrightarrow{AB}=(2a;0;0)\\) và \\(\\overrightarrow{SM}=(a;3a;-a)\\).\n\\(\\overrightarrow{SM}\\cdot\\overrightarrow{AB}=a\\cdot2a+3a\\cdot0+(-a)\\cdot0=2a^2\\ne3a^2\\).\n\nd) Đúng.\n\\(\\cos(\\overrightarrow{SM},\\overrightarrow{AB})=\\frac{\\overrightarrow{SM}\\cdot\\overrightarrow{AB}}{|\\overrightarrow{SM}|\\cdot|\\overrightarrow{AB}|}=\\frac{2a^2}{a\\sqrt{11}\\cdot2a}=\\frac1{\\sqrt{11}}\\).\n\\(\\Rightarrow(\\overrightarrow{SM},\\overrightarrow{AB})=\\arccos\\left(\\frac1{\\sqrt{11}}\\right)\\approx72{,}45^\\circ\\).",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "\\(\\overrightarrow{SC}+\\overrightarrow{SD}=\\overrightarrow{SM}\\).",
      "\\(|\\overrightarrow{SM}|=a\\sqrt{11}\\).",
      "\\(\\overrightarrow{SM}\\cdot\\overrightarrow{AB}=3a^2\\).",
      "Góc giữa hai vectơ \\(\\overrightarrow{SM}\\) và \\(\\overrightarrow{AB}\\) bằng \\(72{,}45^\\circ\\) (kết quả làm tròn đến hàng phần trăm của độ)."
    ],
    "answer": [
      "Sai",
      "Đúng",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Đúng, c) Sai, d) Đúng",
    "diagram": {
      "folder": "toan12-c2",
      "file": "41-fig.webp",
      "alt": "Hình minh họa câu 41"
    }
  },
  {
    "id": "toan-12-2-pdf-42",
    "sourcePage": 14,
    "prompt": "Hình bên minh họa một nhà kho trong không gian với hai mái \\(EFGH\\) và \\(EFMN\\) là các hình chữ nhật có kích thước bằng nhau. Biết rằng các bức tường của nhà kho tạo thành hình hộp chữ nhật \\(OABC.MNHG\\) với \\(BC=16\\) mét, \\(AB=12\\) mét và \\(OM=6\\) mét. Trung điểm \\(I\\) của \\(EF\\) (đỉnh mái nhà) cách đáy nhà kho \\(10\\) mét. Chọn hệ tọa độ \\(Oxyz\\) như hình vẽ với điểm \\(A\\) thuộc tia \\(Ox\\), \\(C\\) thuộc tia \\(Oy\\), \\(M\\) thuộc tia \\(Oz\\). Một ăngten \\(PQ\\) cao \\(12\\) mét được đặt thẳng đứng tại tâm của mái \\(EFGH\\).",
    "explanation": "Dựa vào hình vẽ và các dữ kiện đề bài, ta xác định tọa độ các điểm như sau:\n- Gốc tọa độ \\(O(0;0;0)\\). Các trục \\(Ox,Oy,Oz\\) lần lượt đi qua \\(A,C,M\\).\n- Theo nhãn trên hình vẽ: đoạn \\(OA\\) tương ứng với chiều dài \\(16\\ \\mathrm m\\) (\\(BC=16\\)), đoạn \\(OC\\) tương ứng với chiều rộng \\(12\\ \\mathrm m\\) (\\(AB=12\\)), và \\(OM=6\\ \\mathrm m\\) là chiều cao tường.\n- Vậy: \\(A(16;0;0)\\), \\(C(0;12;0)\\), \\(B(16;12;0)\\), \\(M(0;0;6)\\), \\(N(16;0;6)\\), \\(G(0;12;6)\\), \\(H(16;12;6)\\).\nĐiểm \\(I\\) là trung điểm của đỉnh mái \\(EF\\). Hình chiếu của \\(I\\) trên mặt phẳng \\((Oxy)\\) là tâm của hình chữ nhật \\(OABC\\).\nTọa độ hình chiếu là: \\(I'\\left(\\frac{16+0}{2};\\frac{12+0}{2};0\\right)=(8;6;0)\\).\nVì \\(I\\) cách đáy \\(10\\ \\mathrm m\\) nên cao độ \\(z_I=10\\). Vậy \\(I(8;6;10)\\).\nMệnh đề ghi \\(I(6;8;10)\\) là Sai.\nĐường đỉnh mái \\(EF\\) song song với trục \\(Ox\\) và đi qua điểm \\((8;6;10)\\). Do đó \\(E(0;6;10)\\) và \\(F(16;6;10)\\).\n\nGọi \\(\\alpha\\) là góc tạo bởi mái nhà và mặt đáy. Xét tam giác vuông tạo bởi đỉnh mái, tường và phương ngang:\nChiều cao từ đỉnh mái đến mặt tường là \\(h=10-6=4\\ \\mathrm m\\).\nKhoảng cách ngang từ đỉnh mái đến tường bên là \\(d=\\frac{OC}{2}=\\frac{12}{2}=6\\ \\mathrm m\\).\nTa có: \\(\\tan\\alpha=\\frac hd=\\frac46=\\frac23\\Rightarrow\\alpha\\approx33{,}7^\\circ\\).\nVì \\(33{,}7^\\circ>30^\\circ\\) nên mái nhà tạo với đáy góc lớn hơn \\(30^\\circ\\). Vậy ý b) Đúng.\n\nMái \\(EFGH\\) có các đỉnh: \\(E(0;6;10)\\), \\(F(16;6;10)\\), \\(G(0;12;6)\\), \\(H(16;12;6)\\).\nTâm \\(P\\) của hình chữ nhật \\(EFGH\\) là trung điểm của \\(FH\\) (hoặc \\(EG\\)):\n\\(P=\\left(\\frac{16+16}{2};\\frac{6+12}{2};\\frac{10+6}{2}\\right)=(16;9;8)\\) là sai dựa trên hình vẽ (\\(P\\) phải ở giữa nhà theo phương \\(Ox\\)).\nThực tế \\(P\\) là trung tâm vùng mái bên phải: \\(x_P=\\frac{0+16}{2}=8\\); \\(y_P=\\frac{6+12}{2}=9\\); \\(z_P=\\frac{10+6}{2}=8\\). Vậy \\(P(8;9;8)\\).\nĂngten \\(PQ\\) thẳng đứng, cao \\(12\\ \\mathrm m\\) nên đỉnh \\(Q\\) có tọa độ: \\(Q(8;9;8+12)=(8;9;20)\\). Mệnh đề ghi \\(Q(9;8;20)\\) là Sai.\n\nĐiểm \\(K\\) thuộc đoạn \\(PQ\\) nên \\(K\\) có tọa độ \\((8;9;k)\\) với \\(8\\le k\\le20\\).\nĐộ dài \\(IK=7\\Leftrightarrow IK^2=49\\).\n\\(\\Leftrightarrow(8-8)^2+(9-6)^2+(k-10)^2=49\\Leftrightarrow0+9+(k-10)^2=49\\Leftrightarrow(k-10)^2=40\\Rightarrow k=10+\\sqrt{40}=10+2\\sqrt{10}\\approx16{,}325\\ \\mathrm m\\).\nKhoảng cách \\(QK=|z_Q-z_K|=|20-(10+2\\sqrt{10})|=10-2\\sqrt{10}\\approx3{,}675\\ \\mathrm m\\).\nVì \\(3{,}675>3{,}5\\) nên mệnh đề nói \\(QK\\) nhỏ hơn \\(3{,}5\\ \\mathrm m\\) là Sai.",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Điểm \\(I\\) có tọa độ là \\(I(6;8;10)\\).",
      "Hai mái của nhà kho đều tạo với mặt đáy một góc lớn hơn \\(30^\\circ\\).",
      "Đỉnh \\(Q\\) của ăngten có tọa độ là \\(Q(9;8;20)\\).",
      "Ăngten được cố định bằng một sợi \\(IK\\) dài \\(7\\) mét, nối từ điểm \\(I\\) đến điểm \\(K\\) (\\(K\\) thuộc đoạn \\(PQ\\)). Vậy khoảng cách \\(QK\\) nhỏ hơn \\(3{,}5\\) mét."
    ],
    "answer": [
      "Sai",
      "Đúng",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Sai, b) Đúng, c) Sai, d) Sai",
    "diagram": {
      "folder": "toan12-c2",
      "file": "42-fig.webp",
      "alt": "Hình minh họa câu 42"
    }
  },
  {
    "id": "toan-12-2-pdf-43",
    "sourcePage": 15,
    "prompt": "Trong không gian \\(Oxyz\\), cho các điểm \\(A(4;2;-1)\\), \\(B(1;-1;2)\\), \\(C(0;-2;3)\\). Xét tính đúng sai của các mệnh đề sau:",
    "explanation": "Ta có \\(\\overrightarrow{AB}=(1-4;-1-2;2-(-1))=(-3;-3;3)\\).\nĐộ dài đoạn thẳng \\(AB\\) là: \\(AB=\\sqrt{(-3)^2+(-3)^2+3^2}=\\sqrt{27}=3\\sqrt3\\).\nVậy ý a) Đúng.\n\nTọa độ trọng tâm \\(G\\) của tam giác \\(ABC\\) được tính theo công thức:\n\\(x_G=\\frac{x_A+x_B+x_C}{3}=\\frac{4+1+0}{3}=\\frac53\\). \\(y_G=\\frac{y_A+y_B+y_C}{3}=\\frac{2-1-2}{3}=-\\frac13\\). \\(z_G=\\frac{z_A+z_B+z_C}{3}=\\frac{-1+2+3}{3}=\\frac43\\). Vậy \\(G\\left(\\frac53;-\\frac13;\\frac43\\right)\\). Ý b) Đúng.\n\nHình chiếu của điểm \\(A(x;y;z)\\) lên mặt phẳng \\((Oyz)\\) là điểm \\(M(0;y;z)\\).\nDo đó, hình chiếu của \\(A(4;2;-1)\\) lên mặt phẳng \\((Oyz)\\) phải là \\((0;2;-1)\\).\nTọa độ \\(A'(4;0;0)\\) là hình chiếu của \\(A\\) lên trục \\(Ox\\). Vậy ý c) Sai.\n\nTa có \\(\\overrightarrow{OA}=(4;2;-1)\\) và \\(\\overrightarrow{AB}=(-3;-3;3)\\).\nGóc \\(\\varphi\\) giữa hai đường thẳng \\(OA\\) và \\(AB\\) được tính bởi:\n\\(\\cos\\varphi=\\frac{|\\overrightarrow{OA}\\cdot\\overrightarrow{AB}|}{|\\overrightarrow{OA}|\\cdot|\\overrightarrow{AB}|}=\\frac{|4\\cdot(-3)+2\\cdot(-3)+(-1)\\cdot3|}{\\sqrt{4^2+2^2+(-1)^2}\\cdot3\\sqrt3}\\).\n\\(\\cos\\varphi=\\frac{|-12-6-3|}{\\sqrt{21}\\cdot\\sqrt{27}}=\\frac{21}{\\sqrt{567}}=\\frac{21}{9\\sqrt7}=\\frac{\\sqrt7}{3}\\).\nVậy ý d) Đúng.",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "\\(\\overrightarrow{AB}=(-3;-3;3)\\), \\(AB=3\\sqrt3\\).",
      "Ba điểm \\(A,B,C\\) tạo thành tam giác có trọng tâm là \\(G\\left(\\frac53;-\\frac13;\\frac43\\right)\\).",
      "Điểm \\(A'(4;0;0)\\) là hình chiếu của điểm \\(A\\) lên mặt phẳng \\((Oyz)\\).",
      "Gọi \\(\\varphi\\) là góc giữa hai đường thẳng \\(OA\\) và \\(AB\\). Khi đó \\(\\cos\\varphi=\\frac{\\sqrt7}{3}\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Đúng",
    "sourceNote": "Ở ý b), \\(\\overrightarrow{AC}=(-4;-4;4)=\\frac43\\overrightarrow{AB}\\) nên \\(A,B,C\\) thẳng hàng. Tọa độ trong tài liệu là trung bình của ba điểm, nhưng chúng không tạo thành tam giác. Vì vậy ý b) được chấm Sai."
  },
  {
    "id": "toan-12-2-pdf-44",
    "sourcePage": 16,
    "prompt": "Trong hệ tọa độ \\(Oxyz\\), đơn vị mỗi trục là km. Máy bay \\(M\\) lúc đầu quan sát (\\(t=0\\)) nó ở vị trí có tọa độ \\(A(3;-10;12)\\). Cùng lúc đó một máy bay \\(N\\) đang ở vị trí có tọa độ \\(B(45;25;18)\\). Hai máy bay này đều đang chuyển động cùng hướng với vectơ \\(\\vec{v}(0;1;0)\\). Từ điểm \\(A\\), máy bay \\(M\\) tăng tốc với tốc độ \\(v(t)=\\beta t+1000\\) (km/h), trong đó \\(t\\) tính bằng giờ kể từ khi tăng tốc (\\(0\\le t\\le10\\)), \\(\\beta\\) là hằng số dương nhỏ hơn \\(20\\), còn máy bay \\(N\\) chuyển động với vận tốc không đổi là \\(962\\) km/h. Biết rằng sau 30 phút kể từ lúc ban đầu, khoảng cách giữa hai máy bay là \\(45\\) km.",
    "explanation": "a) Đúng.\nTại thời điểm \\(t=0\\), vị trí hai máy bay là \\(A(3;-10;12)\\) và \\(B(45;25;18)\\).\nKhoảng cách giữa hai máy bay lúc ban đầu là:\n\\(AB=\\sqrt{(45-3)^2+(25+10)^2+(18-12)^2}=\\sqrt{42^2+35^2+6^2}=55\\ \\mathrm{km}\\).\n\nb) Đúng.\nMáy bay \\(N\\) chuyển động với vận tốc không đổi \\(v_N=962\\text{ km/h}\\) theo hướng \\(\\vec{v}(0;1;0)\\).\nSau \\(t\\) giờ, máy bay \\(N\\) đi được quãng đường \\(s_N=962t\\ \\mathrm{km}\\).\nVì hướng chuyển động cùng phương với trục \\(Oy\\), nên chỉ có tung độ thay đổi:\n\\(N(45;25+962t;18)\\).\n\nc) Sai.\nMáy bay \\(M\\) chuyển động cùng hướng \\(\\vec{v}(0;1;0)\\) nên tọa độ sau \\(t\\) giờ là \\(M(3;-10+s_M;12)\\).\nQuãng đường máy bay \\(M\\) đi được là:\n\\(s_M=\\int_0^t v(u)\\,du=\\int_0^t(\\beta u+1000)\\,du=\\left[\\frac{\\beta u^2}{2}+1000u\\right]_0^t=\\frac{\\beta t^2}{2}+1000t\\).\nSuy ra \\(M\\left(3;-10+\\frac{\\beta t^2}{2}+1000t;12\\right)\\).\nSau 30 phút (\\(t=0{,}5\\) h): \\(N(45;25+962\\cdot0{,}5;18)\\Rightarrow N(45;506;18)\\).\n\\(M\\left(3;-10+\\frac{\\beta(0{,}5)^2}{2}+1000\\cdot0{,}5;12\\right)\\Rightarrow M\\left(3;490+\\frac{\\beta}{8};12\\right)\\).\nTheo giả thiết \\(MN=45\\):\n\\(\\sqrt{(45-3)^2+\\left(506-\\left(490+\\frac\\beta8\\right)\\right)^2+(18-12)^2}=45\\)\n\\(\\Leftrightarrow42^2+\\left(16-\\frac\\beta8\\right)^2+6^2=45^2\\)\n\\(\\Leftrightarrow1800+\\left(16-\\frac\\beta8\\right)^2=2025\\Leftrightarrow\\left(16-\\frac\\beta8\\right)^2=225\\)\n\\(\\Leftrightarrow\\left|16-\\frac\\beta8\\right|=15\\Rightarrow 16-\\frac\\beta8=15\\) (vì \\(0<\\beta<20\\Rightarrow16-\\frac\\beta8>0\\))\n\\(\\Leftrightarrow\\frac\\beta8=1\\Leftrightarrow\\beta=8\\).\n\nd) Sai.\nVới \\(\\beta=8\\), tọa độ máy bay \\(M\\) sau \\(t\\) giờ là \\(M(3;-10+4t^2+1000t;12)\\).\nSau \\(1\\) giờ (\\(t=1\\)):\n\\(M(3;-10+4+1000;12)\\Rightarrow M(3;994;12)\\).\n\\(N(45;25+962\\cdot1;18)\\Rightarrow N(45;987;18)\\).\nKhoảng cách lúc này:\n\\(MN=\\sqrt{(45-3)^2+(987-994)^2+(18-12)^2}=\\sqrt{42^2+(-7)^2+6^2}=\\sqrt{1849}=43\\ \\mathrm{km}\\).\nVì \\(43<50\\) nên nhận định d sai.",
    "originalSolution": true,
    "nativeLatex": true,
    "hint": "Lời giải",
    "difficulty": "",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Khoảng cách giữa hai máy bay lúc ban đầu là \\(55\\) km.",
      "Sau \\(t\\) giờ (\\(0\\le t\\le10\\)) máy bay \\(N\\) đang ở vị trí có tọa độ là \\((45;25+962t;18)\\).",
      "\\(\\beta=12\\).",
      "Khoảng cách giữa hai máy bay sau \\(1\\) giờ (kể từ thời điểm quan sát) lớn hơn \\(50\\) km."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Sai",
    "solutionDiagram": {
      "folder": "toan12-c2",
      "file": "44-solfig.webp",
      "alt": "Hình trong lời giải câu 44"
    }
  },
  {
    "id": "toan-12-2-pdf-45",
    "sourcePage": 18,
    "kind": "short",
    "type": "Trả lời ngắn",
    "difficulty": "",
    "prompt": "Trong không gian \\(Oxyz\\), cho tam giác \\(ABC\\) có \\(A(-4;-1;2)\\), \\(B(3;5;-6)\\) và \\(C(a;b;c)\\). Biết trung điểm cạnh \\(AC\\) thuộc trục tung, trung điểm cạnh \\(BC\\) thuộc mặt phẳng \\((Oxz)\\). Tính \\(T=2a+b-c\\).",
    "value": 5,
    "answerText": "5",
    "tolerance": 0.000051,
    "explanation": "Gọi \\(M\\) là trung điểm cạnh \\(AC\\). Khi đó \\(M\\left(\\frac{a-4}{2};\\frac{b-1}{2};\\frac{c+2}{2}\\right)\\).\nVì \\(M\\in Oy\\Rightarrow\\begin{cases}\\frac{a-4}{2}=0\\\\\\frac{c+2}{2}=0\\end{cases}\\Rightarrow\\begin{cases}a=4\\\\c=-2.\\end{cases}\\)\nGọi \\(N\\) là trung điểm của cạnh \\(BC\\Rightarrow N\\left(\\frac{a+3}{2};\\frac{b+5}{2};\\frac{c-6}{2}\\right)\\).\nVì \\(N\\in(Oxz)\\Rightarrow\\frac{b+5}{2}=0\\Rightarrow b=-5\\).\nDo đó \\(T=2\\cdot4+(-5)-(-2)=5\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải"
  },
  {
    "id": "toan-12-2-pdf-46",
    "sourcePage": 18,
    "kind": "short",
    "type": "Trả lời ngắn",
    "difficulty": "",
    "prompt": "Trong không gian với hệ trục tọa độ \\(Oxyz\\) (đơn vị đo độ dài trên mỗi trục tính là mét), một vườn hoa nằm trên mặt phẳng \\((P):2x+2y-z-12=0\\). Có hai bóng đèn chiếu sáng cố định được đặt tại các điểm \\(A(40;-40;12)\\), \\(B(-40;50;38)\\). Để đảm bảo kỹ thuật chiếu sáng, các kỹ sư muốn thiết kế trên vườn một đường ray để lắp đặt một đèn chiếu sáng \\(M\\) di động trên đường ray ấy. Yêu cầu kỹ thuật đặt ra là góc tạo bởi \\(MA\\) với mặt vườn và góc tạo bởi \\(MB\\) với mặt vườn phải luôn bằng nhau. Độ dài đường ray là bao nhiêu mét (kết quả làm tròn đến hàng đơn vị)?",
    "value": 1720,
    "answerText": "1720",
    "tolerance": 0.000051,
    "explanation": "Gọi \\(A_1,B_1\\) lần lượt là hình chiếu vuông góc của \\(A,B\\) lên mặt phẳng \\((P)\\).\nKhi đó yêu cầu bài toán đặt ra \\(\\widehat{AMA_1}=\\widehat{BMB_1}\\).\nTa có\n\\[\\widehat{AMA_1}=\\widehat{BMB_1}\\Rightarrow\\tan\\widehat{AMA_1}=\\tan\\widehat{BMB_1}\\Rightarrow\\frac{AA_1}{MA_1}=\\frac{BB_1}{MB_1}\\]\n\\[\\Rightarrow\\frac{MA_1}{MB_1}=\\frac{AA_1}{BB_1}=\\frac{d(A,(P))}{d(B,(P))}=\\frac8{10}=\\frac45.\\]\nXét điểm \\(I,J\\) thỏa\n\\[\\begin{cases}\\overrightarrow{IA_1}=-\\frac45\\overrightarrow{IB_1}\\\\\\overrightarrow{JA_1}=\\frac45\\overrightarrow{JB_1}\\end{cases}\\Rightarrow\\begin{cases}I,J\\in(P)\\\\\\widehat{IMJ}=90^\\circ.\\end{cases}\\]\nSuy ra \\(M\\) thuộc đường tròn đường kính \\(IJ\\).\nMặt khác ta có\n\\[\\begin{cases}AA_1=8\\\\BB_1=10\\\\AB=\\sqrt{15176}\\end{cases}\\Rightarrow A_1B_1=\\sqrt{15172}\\Rightarrow IJ=\\frac{40\\sqrt{15172}}9.\\]\nVậy điểm \\(M\\) chuyển động trên đường tròn đường kính bằng \\(\\frac{40\\sqrt{15172}}9\\).\nVậy độ dài của đường ray là \\(L=\\pi\\cdot IJ=\\pi\\cdot\\frac{40\\sqrt{15172}}9\\approx1720\\) (m).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "diagram": {
      "folder": "toan12-c2",
      "file": "46-fig.webp",
      "alt": "Hình minh họa câu 46"
    },
    "solutionDiagram": {
      "folder": "toan12-c2",
      "file": "46-solfig.webp",
      "alt": "Hình trong lời giải câu 46"
    }
  },
  {
    "id": "toan-12-2-pdf-47",
    "sourcePage": 19,
    "kind": "short",
    "type": "Trả lời ngắn",
    "difficulty": "",
    "prompt": "Trong hệ tọa độ \\(Oxyz\\), đơn vị trên mỗi trục tính bằng kilomet, sân bay nằm trên mặt phẳng \\((Oxy)\\). Tại thời điểm ban đầu, máy bay \\(X\\) bay thẳng từ điểm \\(A(-8;3;2)\\) với tốc độ 360 km/h, máy bay \\(Y\\) bay từ điểm \\(C\\) theo hướng \\(\\vec v_1=(-2;2;-1)\\). Sau \\(t\\) giờ, máy bay \\(X\\) bay đến điểm \\(B(-4;-1;4)\\) còn máy bay \\(Y\\) bay đến điểm \\(D(10;-10;5)\\). Khi đến \\(D\\), máy bay \\(Y\\) được tháp kiểm soát yêu cầu bay tiếp theo hướng \\(\\vec v_2(-5;4;-1)\\) và phải hạ cánh sau đúng 10 phút. Tính tốc độ trung bình của máy bay \\(Y\\) từ thời điểm ban đầu cho đến khi tiếp đất theo đơn vị km/h (làm tròn kết quả đến hàng đơn vị).",
    "value": 259,
    "answerText": "259",
    "tolerance": 0.000051,
    "explanation": "Ta có thời gian máy bay \\(X\\) bay từ \\(A\\) đến \\(B\\) là\n\\[t=\\frac{AB}{360}=\\frac{\\sqrt{(-4-(-8))^2+(-1-3)^2+(4-2)^2}}{360}=\\frac1{60}\\ (\\text{giờ}).\\]\nGọi \\(C(a;b;0)\\) (vì \\(C\\) nằm trên mặt đất nên cao độ bằng 0). \\(\\Rightarrow\\overrightarrow{CD}=(10-a;-10-b;5)\\).\nTừ giả thiết “Máy bay \\(Y\\) bay từ \\(C\\) đến \\(D\\) theo phương \\(\\vec v_1=(-2;2;-1)\\)” nên \\(\\overrightarrow{CD}\\) cùng phương với \\(\\vec v_1=(-2;2;-1)\\).\n\\[\\Rightarrow\\frac{10-a}{-2}=\\frac{-10-b}2=\\frac5{-1}\\Rightarrow\\begin{cases}10-a=(-5)\\cdot(-2)\\\\-10-b=(-5)\\cdot2\\end{cases}\\Rightarrow\\begin{cases}10-a=10\\\\-10-b=-10\\end{cases}\\Rightarrow\\begin{cases}a=0\\\\b=0.\\end{cases}\\]\nSuy ra \\(\\overrightarrow{CD}=(10;-10;5)\\).\nSuy ra \\(CD=\\sqrt{10^2+(-10)^2+5^2}=15\\).\nTa thực hiện tương tự để tính \\(DE\\):\nGọi \\(E(c;d;0)\\) thuộc mặt đất là vị trí mà máy bay \\(Y\\) hạ cánh.\nSuy ra \\(\\overrightarrow{DE}=(c-10;d+10;-5)\\).\nVì máy bay \\(Y\\) bay từ \\(D\\) đến \\(E\\) theo hướng \\(\\vec v_2(-5;4;-1)\\) nên \\(\\overrightarrow{DE}\\) và \\(\\vec v_2\\) cùng phương \\(\\Rightarrow\\frac{c-10}{-5}=\\frac{d+10}{4}=\\frac{-5}{-1}\\).\n\\[\\Rightarrow\\begin{cases}c-10=5\\cdot(-5)\\\\d+10=5\\cdot4\\end{cases}\\Leftrightarrow\\begin{cases}c=5\\cdot(-5)+10=-15\\\\d=5\\cdot4-10=10.\\end{cases}\\]\n\\(\\Rightarrow\\overrightarrow{DE}=(-25;20;-5)\\).\n\\(\\Rightarrow DE=\\sqrt{(-25)^2+20^2+(-5)^2}=5\\sqrt{42}\\).\nSuy ra tốc độ trung bình máy bay \\(Y\\) từ thời điểm ban đầu cho đến khi tiếp đất là\n\\[v_{\\rm tb}=\\frac{CD+DE}{t+\\frac16}=\\frac{15+5\\sqrt{42}}{\\frac1{60}+\\frac16}\\approx259\\ (\\text{km/h}).\\]",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "sourceNote": "Vectơ \\(\\overrightarrow{CD}=(10;-10;5)\\) ngược hướng \\(\\vec v_1=(-2;2;-1)\\). Lời giải PDF tính theo điều kiện hai vectơ cùng phương."
  },
  {
    "id": "toan-12-2-pdf-48",
    "sourcePage": 20,
    "kind": "short",
    "type": "Trả lời ngắn",
    "difficulty": "",
    "prompt": "Một đê chắn tiếng ồn được xây bằng bê tông có hình dạng một lăng trụ tứ giác với mặt phẳng cắt ngang là một hình thang. Trong hệ tọa độ \\(Oxyz\\), đơn vị trên mỗi trục tính bằng mét, mặt đất trùng với mặt phẳng \\((Oxy)\\). Một mặt của con đê nằm trên mặt đất và mặt phía trên nằm trong mặt phẳng \\((E_3):z=5\\), hai mặt sườn bên nằm trong hai mặt phẳng \\((E_1):3x+4y-5z+13=0\\) và \\((E_2):3x+4y+10z-87=0\\) (tham khảo hình vẽ). Biết rằng con đê dài 100 mét, tính thể tích của khối bê tông làm con đê trên.",
    "value": 6250,
    "answerText": "6250",
    "tolerance": 0.000051,
    "explanation": "Vì con đê có dạng lăng trụ tứ giác nên hai mặt phẳng đáy \\((E_3):z=5\\) và \\((Oxy):z=0\\) song song với nhau. Suy ra chiều cao \\(h=d((E_3),(Oxy))=5\\).\nĐầu tiên, ta tính độ dài đáy lớn \\(a\\) của con đê.\nGọi \\(\\begin{cases}d_1=(E_1)\\cap(Oxy)\\\\d_2=(E_2)\\cap(Oxy)\\end{cases}\\) suy ra \\(d_1\\parallel d_2\\).\n\\(a=d(d_1,d_2)\\). Khi đó \\(a=d(d_1,d_2)\\). \\((Oxy):z=0\\), \\((E_1):3x+4y-5z+13=0\\), \\((E_2):3x+4y+10z-87=0\\).\nVì \\(d_1=(E_1)\\cap(Oxy)\\) nên đường thẳng \\(d_1\\) thỏa mãn hệ phương trình \\(\\begin{cases}z=0\\\\3x+4y-5z+13=0\\quad(*)\\end{cases}\\).\nThay \\(z=0\\) vào phương trình \\((*)\\) ta được \\(d_1:3x+4y+13=0\\).\nTương tự, vì \\(d_2=(E_2)\\cap(Oxy)\\) nên đường thẳng \\(d_2\\) thỏa mãn hệ phương trình \\(\\begin{cases}z=0\\\\3x+4y+10z-87=0\\quad(**)\\end{cases}\\).\nThay \\(z=0\\) vào phương trình \\((**)\\) ta được \\(d_2:3x+4y-87=0\\).\nLấy \\(A(-3;-1;0)\\in d_1\\). Vì \\(d_1\\parallel d_2\\) nên (đáy lớn)\n\\[\\begin{aligned}a=d(d_1,d_2)&=d(A,d_2)\\\\&=\\frac{|3\\cdot(-3)+4(-1)-87|}{\\sqrt{3^2+4^2+0^2}}\\\\&=\\frac{100}{5}=20\\ (\\mathrm m).\\end{aligned}\\]\nTương tự như tính độ dài đáy lớn, ta đi tính độ dài đáy nhỏ.\nGọi \\(\\begin{cases}d_3=(E_1)\\cap(E_3)\\\\d_4=(E_2)\\cap(E_3)\\end{cases}\\). Khi đó \\(d_3\\parallel d_4\\). \\(b=d(d_3,d_4)\\). \\((E_3):z=5\\), \\((E_1):3x+4y-5z+13=0\\), \\((E_2):3x+4y+10z-87=0\\).\nVì \\(d_3=(E_1)\\cap(E_3)\\) nên đường thẳng \\(d_3\\) thỏa mãn hệ phương trình \\(\\begin{cases}z=5\\\\3x+4y-5z+13=0\\quad(1)\\end{cases}\\).\nThay \\(z=5\\) vào phương trình (1) ta được \\(d_3:3x+4y-5\\cdot5+13=0\\Leftrightarrow d_3:3x+4y-12=0\\).\nVì \\(d_4=(E_2)\\cap(E_3)\\) nên đường thẳng \\(d_4\\) thỏa mãn hệ phương trình \\(\\begin{cases}z=5\\\\3x+4y+10z-87=0\\quad(2)\\end{cases}\\).\nThay \\(z=5\\) vào phương trình (2) ta được \\(d_4:3x+4y+10\\cdot5-87=0\\Leftrightarrow d_4:3x+4y-37=0\\).\nChọn \\(B(4;0;0)\\in d_3\\). Khi đó\n\\[b=d(d_3,d_4)=d(B,d_4)=\\frac{|3\\cdot4+4\\cdot0-37|}{\\sqrt{3^2+4^2+0^2}}=\\frac{25}{5}=5\\ (\\mathrm m).\\]\nSuy ra diện tích đáy của con đê là\n\\[S(x)=\\frac{h(a+b)}2=\\frac{5(20+5)}2=62{,}5\\ (\\mathrm m^2).\\]\nVậy thể tích của đê là \\(V=100S(x)=100\\cdot62{,}5=6250\\ (\\mathrm m^3)\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "diagram": {
      "folder": "toan12-c2",
      "file": "48-fig.webp",
      "alt": "Hình minh họa câu 48"
    }
  },
  {
    "id": "toan-12-2-pdf-49",
    "sourcePage": 22,
    "kind": "short",
    "type": "Trả lời ngắn",
    "difficulty": "",
    "prompt": "Trong không gian tọa độ \\(Oxyz\\), đơn vị mỗi trục là mét, mặt sàn là mặt phẳng \\((Oxy)\\), trục \\(Oz\\) hướng lên, một người thực hiện ném bóng, quả bóng được ném tại điểm có tọa độ \\(A(4;22;2)\\), bóng bay qua điểm \\(B(7;26;4)\\) sau đó bay vào tâm của rổ. Biết quỹ đạo của quả bóng là một Parabol nằm trong mặt phẳng vuông góc với mặt sàn, khoảng cách từ vị trí ném đến rổ theo phương ngang là 6 mét và tâm của rổ cao 3 mét so với sàn. Gọi \\(H\\) là điểm mà tại đó, quả bóng đạt độ cao lớn nhất, tìm tung độ của \\(H\\) (kết quả làm tròn đến hàng phần mười).",
    "value": 24.7,
    "answerText": "24,7",
    "tolerance": 0.000051,
    "explanation": "Gọi \\(A',B',H'\\) lần lượt là hình chiếu của \\(A,B,H\\) xuống mặt phẳng \\((Oxy)\\).\nVì quỹ đạo bóng bay nằm trong mặt phẳng vuông góc với mặt sàn nên \\(A',B',H'\\) thẳng hàng.\nVì \\(A',B',H'\\) lần lượt là hình chiếu vuông góc của \\(A(4;22;2),B(7;26;4),H(x;y;z)\\) xuống mặt phẳng \\((Oxy)\\) nên \\(A'(4;22;0), B'(7;26;0), H'(x;y;0)\\). Suy ra\n\\[A'B'=\\sqrt{(7-4)^2+(26-22)^2}=5;\\quad BB'=4.\\]\nXét các dữ kiện trên trong hệ trục \\((Odh)\\), đơn vị mỗi trục là mét, với trục \\(Oh\\) là độ cao của quả bóng so với mặt đất, trục \\(Od\\) là khoảng cách theo phương ngang của quả bóng so với gốc \\(A'\\equiv O(0;0;0)\\).\nGiả sử quỹ đạo parabol của bóng có dạng \\(f(d)=ad^2+bd+c\\). Từ hình vẽ, ta suy ra đồ thị hàm số đi qua các điểm \\(A(0;2),B(5;4),C(6;3)\\) (với \\(C\\) là tâm của rổ). Ta có hệ phương trình\n\\[\\begin{cases}f(0)=2\\\\f(5)=4\\\\f(6)=3\\end{cases}\\Leftrightarrow\n\\begin{cases}a\\cdot0^2+b\\cdot0+c=2\\\\a\\cdot5^2+b\\cdot5+c=4\\\\a\\cdot6^2+b\\cdot6+c=3\\end{cases}\\]\n\\[\\Leftrightarrow\\begin{cases}c=2\\\\25a+5b+2=4\\\\36a+6b+2=3\\end{cases}\n\\Leftrightarrow\\begin{cases}c=2\\\\25a+5b=2\\\\36a+6b=1\\end{cases}\n\\Leftrightarrow\\begin{cases}c=2\\\\a=-\\frac7{30}\\\\b=\\frac{47}{30}.\\end{cases}\\]\nHoành độ của đỉnh \\(H\\) là \\(d_H=-\\frac b{2a}=\\frac{47}{14}\\).\nTa có \\(A'B'=5,A'H'=\\frac{47}{14}\\) suy ra \\(\\frac{A'H'}{A'B'}=\\frac{\\frac{47}{14}}5=\\frac{47}{70}\\Rightarrow A'H'=\\frac{47}{70} A'B'\\). Mà \\(H',A',B'\\) thẳng hàng nên ta có\n\\[\\overrightarrow{A'H'}=\\frac{47}{70}\\overrightarrow{A'B'}\\Leftrightarrow\\begin{cases}x-4=\\frac{47}{70}\\cdot3\\\\y-22=\\frac{47}{70}\\cdot4\\end{cases}\\Leftrightarrow\\begin{cases}x=\\frac{421}{70}\\\\y=\\frac{864}{35}\\end{cases}\\]\n(với \\(\\overrightarrow{A'H'}=(x-4;y-22;0)\\); \\(\\overrightarrow{A'B'}=(3;4;0)\\)). Suy ra tung độ của điểm \\(H\\) là \\(24{,}7\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "diagram": {
      "folder": "toan12-c2",
      "file": "49-fig.webp",
      "alt": "Hình minh họa câu 49"
    },
    "solutionDiagram": {
      "folder": "toan12-c2",
      "file": "49-solfig.webp",
      "alt": "Hình trong lời giải câu 49"
    }
  }
];
