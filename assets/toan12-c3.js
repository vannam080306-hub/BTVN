export const chapter3 = [
  {
    "id": "toan-12-3-pdf-1",
    "sourceNumber": 1,
    "sourcePage": 1,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 1
    },
    "prompt": "Cô Hằng thống kê đường kính thân gỗ của một số cây xoan đào 6 năm tuổi được trồng ở một lâm trường như sau:",
    "explanation": "Khoảng biến thiên của mẫu số liệu ghép nhóm được tính bằng hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên.\nTa có: \\(R=70-45=25\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(25\\)",
      "\\(5\\)",
      "\\(20\\)",
      "\\(18\\)"
    ],
    "answer": 0,
    "table": {
      "headers": [
        "Đường kính (cm)",
        "\\([45;50)\\)",
        "\\([50;55)\\)",
        "\\([55;60)\\)",
        "\\([60;65)\\)",
        "\\([65;70)\\)"
      ],
      "rows": [
        [
          "Tần số",
          "\\(20\\)",
          "\\(18\\)",
          "\\(7\\)",
          "\\(1\\)",
          "\\(3\\)"
        ]
      ]
    },
    "responsePrompt": "Khoảng biến thiên của mẫu số liệu ghép nhóm trên là"
  },
  {
    "id": "toan-12-3-pdf-2",
    "sourceNumber": 2,
    "sourcePage": 1,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 1
    },
    "prompt": "Mỗi ngày bác Mạnh đều đi bộ để rèn luyện sức khỏe. Quãng đường đi bộ mỗi ngày của bác trong 20 ngày được thống kê lại ở bảng sau:",
    "explanation": "Giá trị đại diện của các nhóm lần lượt là: \\(x_1=2{,}85;\\ x_2=3{,}15;\\ x_3=3{,}45;\\ x_4=3{,}75;\\ x_5=4{,}05\\).\nTổng số ngày là \\(n=3+6+5+4+2=20\\).\nSố trung bình cộng của mẫu số liệu:\n\\[\\bar x=\\frac{3\\cdot2{,}85+6\\cdot3{,}15+5\\cdot3{,}45+4\\cdot3{,}75+2\\cdot4{,}05}{20}=3{,}39.\\]\nPhương sai của mẫu số liệu:\n\\[s^2=\\frac1{20}\\sum n_i x_i^2-\\bar x^2=\\frac{3\\cdot2{,}85^2+\\cdots+2\\cdot4{,}05^2}{20}-3{,}39^2\\approx0{,}1314.\\]\nGiá trị gần nhất là \\(0{,}13\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(0{,}19\\)",
      "\\(1{,}26\\)",
      "\\(0{,}13\\)",
      "\\(0{,}26\\)"
    ],
    "answer": 2,
    "table": {
      "headers": [
        "Quãng đường",
        "\\([2{,}7;3{,}0)\\)",
        "\\([3{,}0;3{,}3)\\)",
        "\\([3{,}3;3{,}6)\\)",
        "\\([3{,}6;3{,}9)\\)",
        "\\([3{,}9;4{,}2)\\)"
      ],
      "rows": [
        [
          "Số ngày",
          "\\(3\\)",
          "\\(6\\)",
          "\\(5\\)",
          "\\(4\\)",
          "\\(2\\)"
        ]
      ]
    },
    "responsePrompt": "Phương sai của mẫu số liệu ghép nhóm gần nhất với giá trị nào sau đây?"
  },
  {
    "id": "toan-12-3-pdf-3",
    "sourceNumber": 3,
    "sourcePage": 1,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 1
    },
    "prompt": "Để đánh giá chất lượng dịch vụ tài xế công nghệ của hãng X, người ta ghi lại thời gian chờ của các khách hàng được thể hiện trong bảng sau:",
    "explanation": "Tổng số khách hàng \\(n=10+5+23+6+3=47\\).\n- Tứ phân vị thứ nhất \\(Q_1\\) ở vị trí thứ \\(11{,}75\\). Nhóm chứa \\(Q_1\\) là \\([2{,}5;4)\\).\n\\[Q_1=2{,}5+\\frac{11{,}75-10}{5}\\cdot1{,}5=3{,}025.\\]\n- Tứ phân vị thứ ba \\(Q_3\\) ở vị trí thứ \\(35{,}25\\). Nhóm chứa \\(Q_3\\) là \\([4;5{,}5)\\).\n\\[Q_3=4+\\frac{35{,}25-15}{23}\\cdot1{,}5\\approx5{,}321.\\]\nKhoảng tứ phân vị \\(\\Delta Q=Q_3-Q_1\\approx5{,}321-3{,}025=2{,}296\\).\nGiá trị này gần nhất với \\(2{,}3\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(2{,}3\\)",
      "\\(1{,}9\\)",
      "\\(2{,}6\\)",
      "\\(3{,}1\\)"
    ],
    "answer": 0,
    "table": {
      "headers": [
        "Thời gian chờ (phút)",
        "\\([1;2{,}5)\\)",
        "\\([2{,}5;4)\\)",
        "\\([4;5{,}5)\\)",
        "\\([5{,}5;7)\\)",
        "\\([7;8{,}5)\\)"
      ],
      "rows": [
        [
          "Số khách hàng",
          "\\(10\\)",
          "\\(5\\)",
          "\\(23\\)",
          "\\(6\\)",
          "\\(3\\)"
        ]
      ]
    },
    "responsePrompt": "Khoảng tứ phân vị của mẫu số liệu trên gần nhất với giá trị nào sau đây?"
  },
  {
    "id": "toan-12-3-pdf-4",
    "sourceNumber": 4,
    "sourcePage": 2,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 2
    },
    "prompt": "Cho mẫu số liệu ghép nhóm ở bảng sau.",
    "explanation": "Số phần tử của mẫu là \\(n=25\\).\n- Tứ phân vị thứ nhất \\(Q_1\\): Vị trí thứ \\(0{,}25\\cdot25=6{,}25\\). Nhóm chứa \\(Q_1\\) là \\([30;40)\\).\n\\[Q_1=30+\\frac{6{,}25-3}{7}\\cdot10\\approx34{,}64.\\]\n- Tứ phân vị thứ ba \\(Q_3\\): Vị trí thứ \\(0{,}75\\cdot25=18{,}75\\). Nhóm chứa \\(Q_3\\) là \\([50;60)\\).\n\\[Q_3=50+\\frac{18{,}75-16}{4}\\cdot10=56{,}875.\\]\nKhoảng tứ phân vị \\(\\Delta Q=Q_3-Q_1=56{,}875-34{,}6428\\ldots\\approx22{,}23\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(19{,}15\\)",
      "\\(21{,}32\\)",
      "\\(20{,}07\\)",
      "\\(22{,}23\\)"
    ],
    "answer": 3,
    "table": {
      "headers": [
        "Nhóm",
        "Tần số"
      ],
      "rows": [
        [
          "\\([20;30)\\)",
          "\\(3\\)"
        ],
        [
          "\\([30;40)\\)",
          "\\(7\\)"
        ],
        [
          "\\([40;50)\\)",
          "\\(6\\)"
        ],
        [
          "\\([50;60)\\)",
          "\\(4\\)"
        ],
        [
          "\\([60;70)\\)",
          "\\(5\\)"
        ],
        [
          "",
          "\\(n=25\\)"
        ]
      ]
    },
    "responsePrompt": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm (làm tròn đến hàng phần trăm) là:"
  },
  {
    "id": "toan-12-3-pdf-5",
    "sourceNumber": 5,
    "sourcePage": 2,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 2
    },
    "prompt": "Người ta thống kê lại đường kính thân gỗ của một số cây xoan đào 6 năm tuổi được trồng ở một lâm trường ở bảng sau:",
    "explanation": "Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên.\nTa có \\(R=65-40=25\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(25\\)",
      "\\(30\\)",
      "\\(6\\)",
      "\\(69{,}8\\)"
    ],
    "answer": 0,
    "table": {
      "headers": [
        "Đường kính (cm)",
        "\\([40;45)\\)",
        "\\([45;50)\\)",
        "\\([50;55)\\)",
        "\\([55;60)\\)",
        "\\([60;65)\\)"
      ],
      "rows": [
        [
          "Tần số",
          "\\(5\\)",
          "\\(20\\)",
          "\\(18\\)",
          "\\(7\\)",
          "\\(3\\)"
        ]
      ]
    },
    "responsePrompt": "Khoảng biến thiên của mẫu số liệu ghép nhóm trên là"
  },
  {
    "id": "toan-12-3-pdf-6",
    "sourceNumber": 6,
    "sourcePage": 3,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 3
    },
    "prompt": "Điều tra về mức lương khởi điểm (đơn vị: triệu đồng) của 20 công nhân, ta có bảng số liệu sau:",
    "explanation": "- Giá trị đại diện \\(x_i\\) của các nhóm lần lượt là: \\(5{,}5;\\ 6{,}5;\\ 7{,}5;\\ 8{,}5;\\ 9{,}5\\).\n- Số trung bình:\n\\[\\bar x=\\frac{4\\cdot5{,}5+5\\cdot6{,}5+5\\cdot7{,}5+4\\cdot8{,}5+2\\cdot9{,}5}{20}=7{,}25.\\]\n- Phương sai:\n\\[s^2=\\frac1{20}[4\\cdot5{,}5^2+5\\cdot6{,}5^2+5\\cdot7{,}5^2+4\\cdot8{,}5^2+2\\cdot9{,}5^2]-7{,}25^2=1{,}5875\\approx1{,}59.\\]",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(s^2=0{,}63\\)",
      "\\(s^2=2{,}52\\)",
      "\\(s^2=1{,}26\\)",
      "\\(s^2=1{,}59\\)"
    ],
    "answer": 3,
    "table": {
      "headers": [
        "Mức lương",
        "\\([5;6)\\)",
        "\\([6;7)\\)",
        "\\([7;8)\\)",
        "\\([8;9)\\)",
        "\\([9;10)\\)"
      ],
      "rows": [
        [
          "Tần số",
          "\\(4\\)",
          "\\(5\\)",
          "\\(5\\)",
          "\\(4\\)",
          "\\(2\\)"
        ]
      ]
    },
    "responsePrompt": "Phương sai của mẫu số liệu ghép nhóm là (làm tròn đến hàng phần trăm):"
  },
  {
    "id": "toan-12-3-pdf-7",
    "sourceNumber": 7,
    "sourcePage": 3,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 3
    },
    "prompt": "Cho mẫu số liệu ghép nhóm về điểm số và số học sinh như bảng sau.",
    "explanation": "Tổng số học sinh là \\(n=7+3+8+10+7+10=45\\).\n- Tìm \\(Q_1\\): Vị trí \\(\\frac n4=11{,}25\\). Nhóm chứa \\(Q_1\\) là \\([6;8)\\).\nTa có \\(L=6,\\ n=45,\\ cf=10,\\ f=8,\\ h=2\\Rightarrow Q_1=6+\\frac{11{,}25-10}{8}\\cdot2=6{,}3125\\).\n- Tìm \\(Q_3\\): Vị trí \\(\\frac{3n}4=33{,}75\\). Nhóm chứa \\(Q_3\\) là \\([10;12)\\).\nTa có \\(L=10,\\ n=45,\\ cf=28,\\ f=7,\\ h=2\\Rightarrow Q_3=10+\\frac{33{,}75-28}{7}\\cdot2\\approx11{,}6428\\).\nKhoảng tứ phân vị: \\(\\Delta Q=Q_3-Q_1\\approx11{,}6428-6{,}3125=5{,}3303\\approx5{,}33\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(7{,}31\\)",
      "\\(5{,}33\\)",
      "\\(2{,}74\\)",
      "\\(2{,}59\\)"
    ],
    "answer": 1,
    "table": {
      "headers": [
        "Điểm số",
        "\\([2;4)\\)",
        "\\([4;6)\\)",
        "\\([6;8)\\)",
        "\\([8;10)\\)",
        "\\([10;12)\\)",
        "\\([12;14)\\)"
      ],
      "rows": [
        [
          "Số học sinh",
          "\\(7\\)",
          "\\(3\\)",
          "\\(8\\)",
          "\\(10\\)",
          "\\(7\\)",
          "\\(10\\)"
        ]
      ]
    },
    "responsePrompt": "Tìm khoảng tứ phân vị của mẫu số liệu ghép nhóm đã cho (làm tròn đến hàng phần trăm)."
  },
  {
    "id": "toan-12-3-pdf-8",
    "sourceNumber": 8,
    "sourcePage": 3,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 3
    },
    "prompt": "Thời gian (phút) đọc sách mỗi ngày của 60 học sinh được cho trong bảng sau",
    "explanation": "- Giá trị đại diện các nhóm lần lượt là: \\(x_1=12{,}5;\\ x_2=17{,}5;\\ x_3=22{,}5;\\ x_4=27{,}5;\\ x_5=32{,}5\\).\n- Cỡ mẫu \\(n=3+10+12+15+20=60\\).\n- Số trung bình:\n\\[\\bar x=\\frac{3\\cdot12{,}5+10\\cdot17{,}5+12\\cdot22{,}5+15\\cdot27{,}5+20\\cdot32{,}5}{60}=25{,}75.\\]\n- Phương sai:\n\\[s^2=\\frac1{60}\\sum n_i x_i^2-\\bar x^2=\\frac{42075}{60}-25{,}75^2=38{,}1875.\\]\n- Độ lệch chuẩn: \\(s=\\sqrt{38{,}1875}\\approx6{,}18\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(6{,}18\\)",
      "\\(7{,}2\\)",
      "\\(5{,}3\\)",
      "\\(6{,}45\\)"
    ],
    "answer": 0,
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\([10;15)\\)",
        "\\([15;20)\\)",
        "\\([20;25)\\)",
        "\\([25;30)\\)",
        "\\([30;35)\\)"
      ],
      "rows": [
        [
          "Số học sinh",
          "\\(3\\)",
          "\\(10\\)",
          "\\(12\\)",
          "\\(15\\)",
          "\\(20\\)"
        ]
      ]
    },
    "responsePrompt": "Độ lệch chuẩn của mẫu số liệu ghép nhóm (làm tròn đến hàng phần trăm) là"
  },
  {
    "id": "toan-12-3-pdf-9",
    "sourceNumber": 9,
    "sourcePage": 4,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 4
    },
    "prompt": "Một mẫu số liệu ghép nhóm về chiều cao của một lớp (đơn vị là centimet) có phương sai là \\(6{,}25\\). Độ lệch chuẩn của mẫu số liệu đó bằng",
    "explanation": "Độ lệch chuẩn \\(s\\) được tính bằng căn bậc hai của phương sai \\(s^2\\). Ta có \\(s=\\sqrt{s^2}=\\sqrt{6{,}25}=2{,}5\\,\\mathrm{cm}\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(2{,}5\\,\\mathrm{cm}\\)",
      "\\(12{,}5\\,\\mathrm{cm}\\)",
      "\\(3{,}125\\,\\mathrm{cm}\\)",
      "\\(42{,}25\\,\\mathrm{cm}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-3-pdf-10",
    "sourceNumber": 10,
    "sourcePage": 4,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 4
    },
    "prompt": "Mỗi ngày ông An đều đi bộ để rèn luyện sức khỏe. Quãng đường đi bộ mỗi ngày (đơn vị: km) của ông An trong 20 ngày được thống kê lại ở bảng sau:",
    "explanation": "Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên.\nTa có: \\(R=4{,}2-2{,}7=1{,}5\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(1{,}2\\)",
      "\\(0{,}9\\)",
      "\\(1{,}5\\)",
      "\\(0{,}3\\)"
    ],
    "answer": 2,
    "table": {
      "headers": [
        "Quãng đường (km)",
        "\\([2{,}7;3{,}0)\\)",
        "\\([3{,}0;3{,}3)\\)",
        "\\([3{,}3;3{,}6)\\)",
        "\\([3{,}6;3{,}9)\\)",
        "\\([3{,}9;4{,}2]\\)"
      ],
      "rows": [
        [
          "Số ngày",
          "\\(3\\)",
          "\\(6\\)",
          "\\(5\\)",
          "\\(4\\)",
          "\\(2\\)"
        ]
      ]
    },
    "responsePrompt": "Khoảng biến thiên của mẫu số liệu trên là"
  },
  {
    "id": "toan-12-3-pdf-11",
    "sourceNumber": 11,
    "sourcePage": 4,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 4
    },
    "prompt": "Một mẫu số liệu ghép nhóm về chiều cao của một lớp (đơn vị là centimét) có phương sai bằng \\(6{,}25\\). Độ lệch chuẩn của mẫu số liệu đó bằng:",
    "explanation": "Độ lệch chuẩn là căn bậc hai của phương sai: \\(s=\\sqrt{6{,}25}=2{,}5\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(2{,}5\\,\\mathrm{cm}\\)",
      "\\(12{,}5\\,\\mathrm{cm}\\)",
      "\\(3{,}125\\,\\mathrm{cm}\\)",
      "\\(42{,}25\\,\\mathrm{cm}\\)"
    ],
    "answer": 0
  },
  {
    "id": "toan-12-3-pdf-12",
    "sourceNumber": 12,
    "sourcePage": 4,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 4
    },
    "prompt": "Một thư viện ghi lại số giờ đọc sách của 50 sinh viên trong một ngày và thu được mẫu số liệu ghép nhóm sau:",
    "explanation": "Cỡ mẫu \\(n=50\\).\n- Tìm \\(Q_1\\): Vị trí \\(0{,}25\\times50=12{,}5\\) thuộc nhóm \\([1;2)\\). \\(Q_1=1+\\frac{12{,}5-8}{11}\\cdot1\\approx1{,}409\\).\n- Tìm \\(Q_3\\): Vị trí \\(0{,}75\\times50=37{,}5\\) thuộc nhóm \\([3;4)\\). \\(Q_3=3+\\frac{37{,}5-34}{9}\\cdot1\\approx3{,}389\\).\n- Khoảng tứ phân vị \\(\\Delta Q=Q_3-Q_1\\approx3{,}389-1{,}409=1{,}98\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(1{,}69\\)",
      "\\(1{,}85\\)",
      "\\(2{,}02\\)",
      "\\(1{,}98\\)"
    ],
    "answer": 3,
    "table": {
      "headers": [
        "Nhóm giờ",
        "\\([0;1)\\)",
        "\\([1;2)\\)",
        "\\([2;3)\\)",
        "\\([3;4)\\)",
        "\\([4;5)\\)"
      ],
      "rows": [
        [
          "Số sinh viên",
          "\\(8\\)",
          "\\(11\\)",
          "\\(15\\)",
          "\\(9\\)",
          "\\(7\\)"
        ]
      ]
    },
    "responsePrompt": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm gần nhất với giá trị nào sau đây?"
  },
  {
    "id": "toan-12-3-pdf-13",
    "sourceNumber": 13,
    "sourcePage": 5,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 5
    },
    "prompt": "Một công ty thống kê lương của nhân viên theo tuần (đơn vị: USD) theo bảng sau:",
    "explanation": "Tổng số công nhân \\(n=50\\).\nGiá trị đại diện các nhóm lần lượt là: \\(x_1=15,\\ x_2=25,\\ x_3=35,\\ x_4=45,\\ x_5=55\\).\nSố trung bình:\n\\[\\bar x=\\frac{4\\cdot15+6\\cdot25+10\\cdot35+20\\cdot45+10\\cdot55}{50}=40{,}2.\\]\nPhương sai:\n\\[s^2=\\frac{4\\cdot15^2+6\\cdot25^2+10\\cdot35^2+20\\cdot45^2+10\\cdot55^2}{50}-(40{,}2)^2=136{,}96.\\]\nĐộ lệch chuẩn: \\(s=\\sqrt{136{,}96}\\approx11{,}7\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\(11{,}7\\)",
      "\\(12\\)",
      "\\(11{,}4\\)",
      "\\(12{,}5\\)"
    ],
    "answer": 0,
    "table": {
      "headers": [
        "Lương theo tuần (USD)",
        "\\([10;20)\\)",
        "\\([20;30)\\)",
        "\\([30;40)\\)",
        "\\([40;50)\\)",
        "\\([50;60)\\)"
      ],
      "rows": [
        [
          "Số công nhân",
          "\\(4\\)",
          "\\(6\\)",
          "\\(10\\)",
          "\\(20\\)",
          "\\(10\\)"
        ]
      ]
    },
    "responsePrompt": "Độ lệch chuẩn của mẫu số liệu này bằng bao nhiêu (làm tròn tới hàng phần chục)?"
  },
  {
    "id": "toan-12-3-pdf-14",
    "sourceNumber": 14,
    "sourcePage": 5,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 5
    },
    "prompt": "Nhiệt độ trong 55 ngày của một địa phương được cho trong bảng ghép lớp sau:",
    "explanation": "Giá trị đại diện của các nhóm: \\(x_1=20{,}5;\\ x_2=23{,}5;\\ x_3=26{,}5;\\ x_4=29{,}5;\\ x_5=32{,}5;\\ x_6=35{,}5\\).\nSố ngày trung bình là\n\\[\\bar x=\\frac{5\\cdot20{,}5+7\\cdot23{,}5+8\\cdot26{,}5+16\\cdot29{,}5+12\\cdot32{,}5+7\\cdot35{,}5}{55}=28{,}9.\\]\nPhương sai \\(s^2=\\frac1{55}\\left(\\sum n_i x_i^2\\right)-\\bar x^2\\approx19{,}4\\).\nVì \\(19{,}4\\in(19;20)\\) nên chọn C.",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Trắc nghiệm",
    "kind": "choice",
    "options": [
      "\\((17;19)\\)",
      "\\((20;21)\\)",
      "\\((19;20)\\)",
      "\\((23;25)\\)"
    ],
    "answer": 2,
    "table": {
      "headers": [
        "Nhiệt độ (°C)",
        "\\([19;22)\\)",
        "\\([22;25)\\)",
        "\\([25;28)\\)",
        "\\([28;31)\\)",
        "\\([31;34)\\)",
        "\\([34;37)\\)"
      ],
      "rows": [
        [
          "Số ngày",
          "\\(5\\)",
          "\\(7\\)",
          "\\(8\\)",
          "\\(16\\)",
          "\\(12\\)",
          "\\(7\\)"
        ]
      ]
    },
    "responsePrompt": "Phương sai của mẫu số liệu được làm tròn đến chữ số thập phân thứ nhất nằm trong khoảng"
  },
  {
    "id": "toan-12-3-pdf-15",
    "sourceNumber": 15,
    "sourcePage": 6,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 6
    },
    "prompt": "Một cửa hàng điện thoại khảo sát thời gian sử dụng pin liên tục (đơn vị: giờ) của 40 điện thoại thuộc hai dòng: Dòng A và dòng B. Kết quả được thu thập và tổng hợp trong bảng tần số ghép nhóm sau:",
    "explanation": "a) Đúng.\nKhoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: \\(R=18-8=10\\) (giờ).\n\nb) Sai.\nTổng số máy \\(n=40\\).\n- Tứ phân vị thứ nhất \\(Q_1\\) ở vị trí thứ \\(\\frac{40}4=10\\). Nhóm chứa \\(Q_1\\) là \\([10;12)\\).\n\\[Q_1=10+\\frac{10-7}{7}\\cdot(12-10)\\approx10{,}86.\\]\n- Tứ phân vị thứ ba \\(Q_3\\) ở vị trí thứ \\(\\frac{3\\cdot40}4=30\\). Nhóm chứa \\(Q_3\\) là \\([14;16)\\).\n\\[Q_3=14+\\frac{30-26}{7}\\cdot(16-14)\\approx15{,}14.\\]\n- Khoảng tứ phân vị: \\(\\Delta Q=Q_3-Q_1\\approx15{,}14-10{,}86=4{,}28\\approx4{,}3\\). (Không phải \\(4{,}5\\).)\n\nc) Sai.\n- Dòng A có dữ liệu tập trung nhiều ở nhóm giữa \\([12;14)\\) với tần số \\(8\\); các nhóm xa trung tâm có tần số thấp (\\(2\\) và \\(4\\)).\n- Dòng B có dữ liệu phân tán nhiều ra hai cực (tần số nhóm đầu và cuối đều là \\(5\\)).\nDo đó, dòng A có độ lệch chuẩn nhỏ hơn và thời gian sử dụng pin đồng đều hơn dòng B.\n\nd) Đúng.\nSố cách chọn 4 máy từ 40 máy là: \\(n(\\Omega)=\\mathrm C_{40}^4=91390\\).\nXét nhóm thời gian \\(\\ge16\\) giờ có 7 máy (2A, 5B) và nhóm thời gian \\(<16\\) giờ có 33 máy (18A, 15B).\nSố cách chọn 4 máy có đúng 2 máy \\(\\ge16\\) giờ và có cả hai dòng A, B là:\n- Tổng số cách chọn 2 máy từ nhóm \\(\\ge16\\) giờ và 2 máy từ nhóm \\(<16\\) giờ: \\(\\mathrm C_7^2\\cdot\\mathrm C_{33}^2=21\\cdot528=11088\\).\n- Trừ đi trường hợp cả 4 máy đều là dòng A: \\(\\mathrm C_2^2\\cdot\\mathrm C_{18}^2=1\\cdot153=153\\).\n- Trừ đi trường hợp cả 4 máy đều là dòng B: \\(\\mathrm C_5^2\\cdot\\mathrm C_{15}^2=10\\cdot105=1050\\).\nSố kết quả thuận lợi: \\(11088-153-1050=9885\\).\nXác suất là: \\(P=\\frac{9885}{91390}\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Đúng / Sai",
    "kind": "true-false",
    "statements": [
      "Khoảng biến thiên của mẫu số liệu ghép nhóm cho cả 40 điện thoại là \\(R=10\\) (giờ).",
      "Khoảng tứ phân vị của mẫu số liệu ghép nhóm cho cả 40 điện thoại là \\(4{,}5\\) giờ (làm tròn đến hàng phần chục).",
      "Thời gian sử dụng pin của điện thoại dòng B đồng đều hơn điện thoại dòng A.",
      "Chọn ngẫu nhiên 4 điện thoại từ 40 máy trên. Xác suất để trong 4 điện thoại được chọn có cả hai dòng A, B và có đúng 2 máy có thời gian sử dụng pin từ 16 giờ trở lên là \\(\\frac{9885}{91390}\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Đúng"
    ],
    "table": {
      "headers": [
        "Thời gian (Giờ)",
        "\\([8;10)\\)",
        "\\([10;12)\\)",
        "\\([12;14)\\)",
        "\\([14;16)\\)",
        "\\([16;18)\\)"
      ],
      "rows": [
        [
          "Dòng A",
          "\\(2\\)",
          "\\(4\\)",
          "\\(8\\)",
          "\\(4\\)",
          "\\(2\\)"
        ],
        [
          "Dòng B",
          "\\(5\\)",
          "\\(3\\)",
          "\\(4\\)",
          "\\(3\\)",
          "\\(5\\)"
        ],
        [
          "Tổng số",
          "\\(7\\)",
          "\\(7\\)",
          "\\(12\\)",
          "\\(7\\)",
          "\\(7\\)"
        ]
      ]
    },
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Đúng"
  },
  {
    "id": "toan-12-3-pdf-16",
    "sourceNumber": 16,
    "sourcePage": 7,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 7
    },
    "prompt": "Một công ty bất động sản thực hiện cuộc khảo sát khách hàng xem họ có nhu cầu mua ở mức giá nào cho một căn nhà, để tiến hành dự án xây dựng khu đô thị mới sắp tới. Kết quả khảo sát 500 khách hàng được ghi lại ở bảng sau:",
    "explanation": "Tổng số khách hàng khảo sát là \\(n=75+105+197+80+43=500\\). Giá trị trung tâm của các nhóm lần lượt là: \\(x_1=12,\\ x_2=16,\\ x_3=20,\\ x_4=24,\\ x_5=28\\).\n\na) Đúng. Số trung bình:\n\\[\\bar x=\\frac{75\\cdot12+105\\cdot16+197\\cdot20+80\\cdot24+43\\cdot28}{500}=\\frac{9644}{500}=19{,}288.\\]\nPhương sai:\n\\[s^2=\\frac1{500}[75\\cdot12^2+105\\cdot16^2+197\\cdot20^2+80\\cdot24^2+43\\cdot28^2]-(19{,}288)^2.\\]\n\\[s^2=392{,}544-372{,}026944=20{,}517056\\approx20{,}52.\\]\n\nb) Đúng. Phân khúc nhà tầm trung dành cho 50% khách hàng ở giữa, tương ứng với khoảng từ tứ phân vị thứ nhất \\(Q_1\\) đến tứ phân vị thứ ba \\(Q_3\\).\n- Tìm \\(Q_1\\): Ta có \\(\\frac n4=125\\). Nhóm chứa \\(Q_1\\) là \\([14;18)\\). \\(Q_1=14+\\frac{125-75}{105}\\cdot4\\approx15{,}9\\).\n- Tìm \\(Q_3\\): Ta có \\(\\frac{3n}4=375\\). Nhóm chứa \\(Q_3\\) là \\([18;22)\\). \\(Q_3=18+\\frac{375-180}{197}\\cdot4\\approx21{,}96\\).\nĐộ chênh lệch: \\(Q_3-Q_1=21{,}96-15{,}9=6{,}06\\approx6{,}1\\) (triệu đồng).\n\nc) Sai. Theo tính toán ở câu b, \\(Q_3\\approx21{,}96\\ne25\\).\n\nd) Đúng. Độ dài mỗi nhóm (hệ số \\(h\\)) là khoảng cách giữa hai đầu mút của nhóm: \\(14-10=18-14=\\cdots=4\\).",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Đúng / Sai",
    "kind": "true-false",
    "statements": [
      "Phương sai xấp xỉ \\(20{,}52\\).",
      "Biết rằng công ty sẽ xây dựng phân khúc nhà giá rẻ cho 25% số khách hàng có nhu cầu mua ở mức giá thấp nhất theo khảo sát, xây dựng phân khúc nhà giá cao cấp cho 25% số khách hàng có nhu cầu mua ở mức giá cao nhất theo khảo sát. Tuy nhiên trước hết sẽ ưu tiên xây dựng phân khúc nhà tầm trung hướng tới 50% số khách hàng còn lại. Khi đó theo khảo sát, độ chênh lệch giá cao nhất và giá thấp nhất (đúng đến hàng phần mười, đơn vị triệu đồng) dành cho phân khúc nhà tầm trung là \\(6{,}1\\) triệu.",
      "Tứ phân vị thứ ba là \\(25\\).",
      "Độ dài mỗi nhóm là \\(4\\)."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Đúng"
    ],
    "table": {
      "headers": [
        "Mức giá (triệu đồng)/\\(m^2\\)",
        "\\([10;14)\\)",
        "\\([14;18)\\)",
        "\\([18;22)\\)",
        "\\([22;26)\\)",
        "\\([26;30)\\)"
      ],
      "rows": [
        [
          "Số khách hàng",
          "\\(75\\)",
          "\\(105\\)",
          "\\(197\\)",
          "\\(80\\)",
          "\\(43\\)"
        ]
      ]
    },
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Đúng"
  },
  {
    "id": "toan-12-3-pdf-17",
    "sourceNumber": 17,
    "sourcePage": 7,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 7
    },
    "prompt": "Bạn Trang thống kê chiều cao (đơn vị: cm) của các bạn học sinh nữ lớp 12C và lớp 12D ở bảng sau:",
    "explanation": "Giá trị đại diện của nhóm \\([a;b)\\) được tính bằng \\(\\frac{a+b}{2}\\). Đối với nhóm \\([165;170)\\), giá trị đại diện là \\(x_3=\\frac{165+170}{2}=167{,}5\\). Vậy ý a) Đúng.\n\nKhoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên. \\(R=180-155=25\\). Vậy ý b) Sai.\n\nTổng số học sinh mỗi lớp là \\(n=26\\).\n- Với lớp 12C:\n+ Tứ phân vị thứ nhất \\(Q_1\\) thuộc nhóm \\([160;165)\\), \\(Q_1=160+\\frac{\\frac{26}{4}-2}{7}\\cdot5\\approx163{,}21\\).\n+ Tứ phân vị thứ ba \\(Q_3\\) thuộc nhóm \\([165;170)\\), \\(Q_3=165+\\frac{\\frac{3\\cdot26}4-9}{12}\\cdot5\\approx169{,}38\\).\n+ Khoảng tứ phân vị \\(\\Delta Q_C=Q_3-Q_1\\approx6{,}17\\).\n- Với lớp 12D:\n+ Tứ phân vị thứ nhất \\(Q_1\\) thuộc nhóm \\([160;165)\\), \\(Q_1=160+\\frac{\\frac{26}{4}-5}{9}\\cdot5\\approx160{,}83\\).\n+ Tứ phân vị thứ ba \\(Q_3\\) thuộc nhóm \\([165;170)\\), \\(Q_3=165+\\frac{\\frac{3\\cdot26}4-14}{8}\\cdot5\\approx168{,}44\\).\n+ Khoảng tứ phân vị \\(\\Delta Q_D=Q_3-Q_1\\approx7{,}61\\). Vì \\(\\Delta Q_C<\\Delta Q_D\\) nên chiều cao lớp 12C đồng đều hơn. Vậy ý c) Đúng.\n\n- Tính số trung bình:\n\\[\\bar x_C=\\frac{2\\cdot157{,}5+7\\cdot162{,}5+12\\cdot167{,}5+4\\cdot172{,}5+1\\cdot177{,}5}{26}\\approx166{,}73.\\]\n\\[\\bar x_D=\\frac{5\\cdot157{,}5+9\\cdot162{,}5+8\\cdot167{,}5+2\\cdot172{,}5+2\\cdot177{,}5}{26}\\approx164{,}81.\\]\n- Tính phương sai và độ lệch chuẩn (\\(\\sigma=\\sqrt{s^2}\\)):\n+ Tính được \\(\\sigma_C\\approx4{,}51\\) và \\(\\sigma_D\\approx5{,}85\\).\nVì \\(\\sigma_C<\\sigma_D\\) nên học sinh nữ lớp 12C có chiều cao đồng đều hơn lớp 12D. Vậy ý d) Sai.",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Đúng / Sai",
    "kind": "true-false",
    "statements": [
      "Giá trị đại diện của nhóm \\([165;170)\\) là \\(167{,}5\\).",
      "Khoảng biến thiên của mẫu số liệu ghép nhóm của lớp 12D là \\(20\\).",
      "Nếu so sánh theo khoảng tứ phân vị của mẫu số liệu ghép nhóm thì học sinh nữ lớp 12C có chiều cao đồng đều hơn.",
      "Nếu so sánh theo độ lệch chuẩn của mẫu số liệu ghép nhóm thì học sinh nữ lớp 12D có chiều cao trung bình đồng đều hơn."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\([155;160)\\)",
        "\\([160;165)\\)",
        "\\([165;170)\\)",
        "\\([170;175)\\)",
        "\\([175;180)\\)"
      ],
      "rows": [
        [
          "Số học sinh nữ lớp 12C",
          "\\(2\\)",
          "\\(7\\)",
          "\\(12\\)",
          "\\(4\\)",
          "\\(1\\)"
        ],
        [
          "Số học sinh nữ lớp 12D",
          "\\(5\\)",
          "\\(9\\)",
          "\\(8\\)",
          "\\(2\\)",
          "\\(2\\)"
        ]
      ]
    },
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "sourceNote": "Tính lại từ bảng số liệu cho \\(\\bar x_C\\approx166{,}54\\), \\(\\bar x_D=165\\), \\(\\sigma_C\\approx4{,}60\\) và \\(\\sigma_D\\approx5{,}59\\). Kết luận các mệnh đề vẫn giữ nguyên."
  },
  {
    "id": "toan-12-3-pdf-18",
    "sourceNumber": 18,
    "sourcePage": 8,
    "source": {
      "file": "Chuong_3.pdf",
      "page": 8
    },
    "prompt": "Hiện nay, thời gian sử dụng điện thoại của học sinh quá nhiều dẫn đến suy giảm thị lực. Trung tâm Mắt Kính Đức Thành Trà Kiệu tổ chức khám sàn lọc miễn phí cho 100 học sinh của một trường THPT trên địa bàn huyện để kiểm tra tình trạng cận thị của học sinh và thu được mẫu số liệu sau:",
    "explanation": "Tổng số học sinh là \\(n=20+15+30+20+15=100\\). Bảng giá trị đại diện \\(x_i\\) của các nhóm:\nNhóm \\([0;0{,}5)\\) có \\(x_1=0{,}25\\).\nNhóm \\([0{,}5;1{,}0)\\) có \\(x_2=0{,}75\\).\nNhóm \\([1{,}0;1{,}5)\\) có \\(x_3=1{,}25\\).\nNhóm \\([1{,}5;2{,}0)\\) có \\(x_4=1{,}75\\).\nNhóm \\([2{,}0;2{,}5)\\) có \\(x_5=2{,}25\\).\n\nNhóm chứa mốt là nhóm có tần số lớn nhất. Ở đây \\(n_3=30\\) là tần số lớn nhất, nên nhóm chứa mốt là \\([1{,}0;1{,}5)\\).\nGiá trị đại diện của nhóm này là \\(x_3=\\frac{1{,}0+1{,}5}{2}=1{,}25\\). Vậy ý a) Đúng.\n\nĐộ cận trung bình của mẫu số liệu ghép nhóm là:\n\\[\\bar x=\\frac{20\\cdot0{,}25+15\\cdot0{,}75+30\\cdot1{,}25+20\\cdot1{,}75+15\\cdot2{,}25}{100}.\\]\n\\[\\bar x=\\frac{5+11{,}25+37{,}5+35+33{,}75}{100}=\\frac{122{,}5}{100}=1{,}225.\\]\nVì \\(1{,}225\\ne1{,}26\\) nên ý b) Sai.\n\nVị trí trung vị là \\(\\frac n2=50\\).\nCộng dồn tần số: \\(20\\) (nhóm 1), \\(20+15=35\\) (nhóm 2), \\(35+30=65\\) (nhóm 3). Vậy nhóm chứa trung vị là nhóm thứ ba \\([1{,}0;1{,}5)\\).\nCông thức trung vị:\n\\[M_e=L+\\frac{\\frac n2-cf_{p-1}}{n_p}\\cdot w=1{,}0+\\frac{50-35}{30}\\cdot0{,}5=1{,}0+0{,}25=1{,}25.\\]\nVì \\(1{,}25\\ne1{,}26\\) nên ý c) Sai.\n\nTính phương sai theo công thức \\(s^2=\\frac1n\\sum n_i x_i^2-\\bar x^2\\):\n\\[\\begin{aligned}\\sum n_i x_i^2&=20\\cdot0{,}25^2+15\\cdot0{,}75^2+30\\cdot1{,}25^2+20\\cdot1{,}75^2+15\\cdot2{,}25^2\\\\&=1{,}25+8{,}4375+46{,}875+61{,}25+75{,}9375=193{,}75.\\end{aligned}\\]\n\\[s^2=\\frac{193{,}75}{100}-(1{,}225)^2=1{,}9375-1{,}500625=0{,}436875.\\]\nLàm tròn đến 4 chữ số thập phân ta được \\(s^2\\approx0{,}4369\\).\nVì \\(0{,}4369\\ne0{,}4389\\) nên ý d) Sai.",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "type": "Đúng / Sai",
    "kind": "true-false",
    "statements": [
      "Giá trị đại diện của nhóm chứa Mốt là \\(1{,}25\\).",
      "Độ cận trung bình (đơn vị diop) của 100 học sinh là \\(1{,}26\\).",
      "Trung vị của mẫu số liệu là \\(M_e=1{,}26\\).",
      "Phương sai của mẫu số liệu là \\(s^2=0{,}4389\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Sai"
    ],
    "table": {
      "headers": [
        "Mức độ cận thị (Đơn vị diop)",
        "\\([0;0{,}5)\\)",
        "\\([0{,}5;1{,}0)\\)",
        "\\([1{,}0;1{,}5)\\)",
        "\\([1{,}5;2{,}0)\\)",
        "\\([2{,}0;2{,}5)\\)"
      ],
      "rows": [
        [
          "Số học sinh",
          "\\(20\\)",
          "\\(15\\)",
          "\\(30\\)",
          "\\(20\\)",
          "\\(15\\)"
        ]
      ]
    },
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Sai"
  }
];
