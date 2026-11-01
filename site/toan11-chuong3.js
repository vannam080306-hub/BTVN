// Biên soạn từ 7 PDF người dùng cung cấp; đáp án được tính lại.
export const chapter3Questions = [
  {
    "id": "toan-11-3-d1-1",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Bảng chiều cao của 100 học sinh có bao nhiêu nhóm?",
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "[150; 152)",
        "[152; 154)",
        "[154; 156)",
        "[156; 158)",
        "[158; 160)",
        "[160; 162)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          18,
          40,
          26,
          8,
          3
        ]
      ]
    },
    "options": [
      "5",
      "6",
      "7",
      "12"
    ],
    "answer": 1,
    "explanation": "Có 6 khoảng chiều cao. Hàng tổng không phải là một nhóm.",
    "hint": "Đếm số khoảng, không đếm hàng tổng.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-2",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Giá trị đại diện của nhóm thứ tư trong bảng chiều cao là bao nhiêu?",
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "[150; 152)",
        "[152; 154)",
        "[154; 156)",
        "[156; 158)",
        "[158; 160)",
        "[160; 162)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          18,
          40,
          26,
          8,
          3
        ]
      ]
    },
    "options": [
      "155 cm",
      "157 cm",
      "158 cm",
      "160 cm"
    ],
    "answer": 1,
    "explanation": "Nhóm thứ tư là [156; 158). Giá trị đại diện bằng (156 + 158)/2 = 157 cm.",
    "hint": "Lấy trung bình hai đầu mút của nhóm thứ tư.",
    "difficulty": "Trung bình",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-3",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Bảng chiều cao của 500 học sinh có bao nhiêu nhóm?",
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "[150; 154)",
        "[154; 158)",
        "[158; 162)",
        "[162; 166)",
        "[166; 170)"
      ],
      "rows": [
        [
          "Số học sinh",
          25,
          50,
          200,
          175,
          50
        ]
      ]
    },
    "options": [
      "5",
      "6",
      "7",
      "12"
    ],
    "answer": 0,
    "explanation": "Bảng có 5 khoảng chiều cao nên có 5 nhóm.",
    "hint": "Mỗi khoảng là một nhóm.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-4",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 3,
      "block": 4
    },
    "prompt": "Giá trị đại diện của nhóm [162; 166) là bao nhiêu?",
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "[150; 154)",
        "[154; 158)",
        "[158; 162)",
        "[162; 166)",
        "[166; 170)"
      ],
      "rows": [
        [
          "Số học sinh",
          25,
          50,
          200,
          175,
          50
        ]
      ]
    },
    "options": [
      "162 cm",
      "165 cm",
      "167 cm",
      "164 cm"
    ],
    "answer": 3,
    "explanation": "Giá trị đại diện bằng (162 + 166)/2 = 164 cm.",
    "hint": "Tính trung điểm của khoảng.",
    "difficulty": "Trung bình",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-5",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 3,
      "block": 5
    },
    "prompt": "Giá trị đại diện của nhóm cân nặng [60,5; 65,5) là bao nhiêu?",
    "table": {
      "headers": [
        "Cân nặng (kg)",
        "[40,5; 45,5)",
        "[45,5; 50,5)",
        "[50,5; 55,5)",
        "[55,5; 60,5)",
        "[60,5; 65,5)",
        "[65,5; 70,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          10,
          7,
          16,
          4,
          2,
          3
        ]
      ]
    },
    "options": [
      "63 kg",
      "61 kg",
      "64 kg",
      "66 kg"
    ],
    "answer": 0,
    "explanation": "(60,5 + 65,5)/2 = 63 kg. Các phương án trong PDF gốc không chứa kết quả đúng; bộ câu hỏi đã bổ sung kết quả 63 kg.",
    "hint": "Giá trị đại diện là trung điểm, không phải độ dài nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "correction": "Bài 05 trong PDF thiếu phương án đúng 63 kg."
  },
  {
    "id": "toan-11-3-d1-6",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 3,
      "block": 6
    },
    "prompt": "Giá trị đại diện của nhóm thời gian [20; 25) là bao nhiêu?",
    "table": {
      "headers": [
        "Thời gian (giờ)",
        "[0; 5)",
        "[5; 10)",
        "[10; 15)",
        "[15; 20)",
        "[20; 25)"
      ],
      "rows": [
        [
          "Số học sinh",
          8,
          16,
          4,
          2,
          2
        ]
      ]
    },
    "options": [
      "20,5 giờ",
      "22,5 giờ",
      "23,5 giờ",
      "25,5 giờ"
    ],
    "answer": 1,
    "explanation": "(20 + 25)/2 = 22,5 giờ.",
    "hint": "Lấy trung bình hai đầu mút.",
    "difficulty": "Trung bình",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-7",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 3,
      "block": 7
    },
    "prompt": "Có bao nhiêu học sinh truy cập Internet từ 18,5 phút đến dưới 21,5 phút mỗi buổi tối?",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[9,5; 12,5)",
        "[12,5; 15,5)",
        "[15,5; 18,5)",
        "[18,5; 21,5)",
        "[21,5; 24,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "options": [
      "24",
      "15",
      "2",
      "20"
    ],
    "answer": 0,
    "explanation": "Nhóm [18,5; 21,5) có tần số 24, tức 24 học sinh.",
    "hint": "Đọc tần số tương ứng với nhóm [18,5; 21,5).",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-8",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 3,
      "block": 8
    },
    "prompt": "Giá trị đại diện của nhóm thời gian tập thể dục [20; 40) là:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0; 20)",
        "[20; 40)",
        "[40; 60)",
        "[60; 80)",
        "[80; 100)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "options": [
      "10 phút",
      "20 phút",
      "30 phút",
      "40 phút"
    ],
    "answer": 2,
    "explanation": "(20 + 40)/2 = 30 phút.",
    "hint": "Tính trung điểm của khoảng.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-9",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 4,
      "block": 9
    },
    "prompt": "Bảng cước điện thoại có phải mẫu số liệu ghép nhóm không? Nhóm [100; 150) cho biết điều gì?",
    "table": {
      "headers": [
        "Cước điện thoại (nghìn đồng)",
        "[0; 50)",
        "[50; 100)",
        "[100; 150)",
        "[150; 200)",
        "[200; 250)"
      ],
      "rows": [
        [
          "Số sinh viên",
          5,
          12,
          23,
          17,
          3
        ]
      ]
    },
    "options": [
      "Có; 23 sinh viên chi từ 100 đến dưới 150 nghìn đồng.",
      "Có; 23 sinh viên chi đúng 125 nghìn đồng.",
      "Không; vì số tiền là đại lượng liên tục.",
      "Có; tổng số sinh viên là 23."
    ],
    "answer": 0,
    "explanation": "Dữ liệu được chia theo các khoảng nên là số liệu ghép nhóm. Tần số 23 mô tả cả khoảng [100; 150), không khẳng định mỗi người chi đúng trung điểm.",
    "hint": "Đọc ý nghĩa của khoảng và tần số.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-10",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 4,
      "block": 9
    },
    "prompt": "Bảng nhiệt độ 40 ngày là mẫu ghép nhóm. Có bao nhiêu ngày nhiệt độ từ 22 °C đến dưới 25 °C?",
    "table": {
      "headers": [
        "Nhiệt độ (°C)",
        "[19; 22)",
        "[22; 25)",
        "[25; 28)",
        "[28; 31)"
      ],
      "rows": [
        [
          "Số ngày",
          7,
          15,
          12,
          6
        ]
      ]
    },
    "options": [
      "7 ngày",
      "15 ngày",
      "12 ngày",
      "40 ngày"
    ],
    "answer": 1,
    "explanation": "Nhóm [22; 25) có tần số 15 ngày.",
    "hint": "Đọc cột [22; 25).",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-11",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 4,
      "block": 10
    },
    "prompt": "Diễn giải nào đúng về bảng tiền điện của 50 gia đình?",
    "table": {
      "headers": [
        "Tiền điện (nghìn đồng)",
        "[375; 450)",
        "[450; 525)",
        "[525; 600)",
        "[600; 675)",
        "[675; 750)",
        "[750; 825)"
      ],
      "rows": [
        [
          "Số gia đình",
          6,
          15,
          10,
          6,
          9,
          4
        ]
      ]
    },
    "options": [
      "15 gia đình trả từ 450 đến dưới 525 nghìn đồng.",
      "15 gia đình trả đúng 487,5 nghìn đồng.",
      "Có 50 nhóm tiền điện.",
      "Có 6 gia đình được khảo sát."
    ],
    "answer": 0,
    "explanation": "Tần số của [450; 525) là 15. Có 6 nhóm và tổng tần số 50 gia đình.",
    "hint": "Tần số mô tả số gia đình trong cả khoảng.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d1-12",
    "type": "Đọc bảng và giá trị đại diện",
    "source": {
      "file": "01-doc-bang-gia-tri-dai-dien.pdf",
      "page": 4,
      "block": 11
    },
    "prompt": "Bảng khối lượng khoai tây cho biết điều gì?",
    "table": {
      "headers": [
        "Khối lượng (g)",
        "[70; 80)",
        "[80; 90)",
        "[90; 100)",
        "[100; 110)",
        "[110; 120)"
      ],
      "rows": [
        [
          "Số củ khoai",
          3,
          6,
          12,
          6,
          3
        ]
      ]
    },
    "options": [
      "12 củ có khối lượng từ 90 g đến dưới 100 g.",
      "12 củ có khối lượng đúng 95 g.",
      "Có tất cả 5 củ khoai.",
      "Có 30 nhóm khối lượng."
    ],
    "answer": 0,
    "explanation": "Có 5 nhóm, tổng 30 củ. Nhóm [90; 100) có tần số 12.",
    "hint": "Đọc tần số của khoảng [90; 100).",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d2-1",
    "type": "Lập bảng tần số",
    "source": {
      "file": "02-lap-bang-tan-so.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Chia thời gian chạy của 30 vận động viên thành 6 nhóm: [129; 132), [132; 135), [135; 138), [138; 141), [141; 144), [144; 147). Dãy tần số theo thứ tự là:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        129,
        130,
        133,
        134,
        135,
        136,
        138,
        141,
        142,
        143,
        144,
        145
      ],
      "rows": [
        [
          "Số VĐV",
          1,
          2,
          1,
          1,
          1,
          2,
          3,
          3,
          4,
          5,
          2,
          5
        ]
      ]
    },
    "options": [
      "4; 2; 3; 3; 12; 6",
      "3; 2; 3; 3; 12; 7",
      "2; 3; 3; 3; 12; 7",
      "3; 1; 4; 3; 12; 7"
    ],
    "answer": 1,
    "explanation": "Theo thứ tự [129; 132), [132; 135), [135; 138), [138; 141), [141; 144), [144; 147), các tần số là (3; 2; 3; 3; 12; 7). Tổng = 30 = số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        129,
        130,
        130,
        133,
        134,
        135,
        136,
        136,
        138,
        138,
        138,
        141,
        141,
        141,
        142,
        142,
        142,
        142,
        143,
        143,
        143,
        143,
        143,
        144,
        144,
        145,
        145,
        145,
        145,
        145
      ],
      "edges": [
        129,
        132,
        135,
        138,
        141,
        144,
        147
      ],
      "closed": false,
      "counts": [
        3,
        2,
        3,
        3,
        12,
        7
      ]
    }
  },
  {
    "id": "toan-11-3-d2-2",
    "type": "Lập bảng tần số",
    "source": {
      "file": "02-lap-bang-tan-so.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ghép cân nặng 35 người vào các nhóm [40; 45), [45; 50), [50; 55), [55; 60), [60; 65). Dãy tần số là:\nSố liệu: 43; 51; 47; 62; 48; 40; 50; 62; 53; 56; 40; 48; 56; 53; 50; 42; 55; 52; 48; 46; 45; 54; 52; 50; 47; 44; 54; 55; 60; 63; 58; 55; 60; 58; 53.",
    "table": null,
    "options": [
      "6; 7; 11; 7; 4",
      "4; 8; 11; 7; 5",
      "5; 7; 11; 7; 5",
      "5; 6; 12; 7; 5"
    ],
    "answer": 2,
    "explanation": "Theo thứ tự [40; 45), [45; 50), [50; 55), [55; 60), [60; 65), các tần số là (5; 7; 11; 7; 5). Tổng = 35 = số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        43,
        51,
        47,
        62,
        48,
        40,
        50,
        62,
        53,
        56,
        40,
        48,
        56,
        53,
        50,
        42,
        55,
        52,
        48,
        46,
        45,
        54,
        52,
        50,
        47,
        44,
        54,
        55,
        60,
        63,
        58,
        55,
        60,
        58,
        53
      ],
      "edges": [
        40,
        45,
        50,
        55,
        60,
        65
      ],
      "closed": false,
      "counts": [
        5,
        7,
        11,
        7,
        5
      ]
    }
  },
  {
    "id": "toan-11-3-d2-3",
    "type": "Lập bảng tần số",
    "source": {
      "file": "02-lap-bang-tan-so.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Chia số sản phẩm thành 7 nhóm dài 7: [5; 12), [12; 19), [19; 26), [26; 33), [33; 40), [40; 47), [47; 54] (nhóm cuối đóng). Dãy tần số là:\nSố liệu: 18; 25; 39; 12; 54; 27; 46; 25; 19; 8; 36; 22; 20; 19; 17; 44; 5; 18; 23; 28; 25; 34; 46; 27; 16.",
    "table": null,
    "options": [
      "3; 5; 8; 3; 3; 3; 0",
      "1; 6; 8; 3; 3; 3; 1",
      "2; 4; 9; 3; 3; 3; 1",
      "2; 5; 8; 3; 3; 3; 1"
    ],
    "answer": 3,
    "explanation": "Theo thứ tự [5; 12), [12; 19), [19; 26), [26; 33), [33; 40), [40; 47), [47; 54], các tần số là (2; 5; 8; 3; 3; 3; 1). Tổng = 25 = số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        18,
        25,
        39,
        12,
        54,
        27,
        46,
        25,
        19,
        8,
        36,
        22,
        20,
        19,
        17,
        44,
        5,
        18,
        23,
        28,
        25,
        34,
        46,
        27,
        16
      ],
      "edges": [
        5,
        12,
        19,
        26,
        33,
        40,
        47,
        54
      ],
      "closed": true,
      "counts": [
        2,
        5,
        8,
        3,
        3,
        3,
        1
      ]
    }
  },
  {
    "id": "toan-11-3-d2-4",
    "type": "Lập bảng tần số",
    "source": {
      "file": "02-lap-bang-tan-so.pdf",
      "page": 2,
      "block": 4
    },
    "prompt": "Chia giờ ra sân thành 7 nhóm dài 25: [490; 515), [515; 540), [540; 565), [565; 590), [590; 615), [615; 640), [640; 665). Dãy tần số là:\nSố liệu: 653; 632; 609; 572; 565; 535; 516; 514; 508; 505; 504; 504; 503; 499; 496; 492.",
    "table": null,
    "options": [
      "9; 2; 0; 2; 1; 1; 1",
      "10; 2; 0; 2; 1; 1; 0",
      "8; 3; 0; 2; 1; 1; 1",
      "9; 1; 1; 2; 1; 1; 1"
    ],
    "answer": 0,
    "explanation": "Theo thứ tự [490; 515), [515; 540), [540; 565), [565; 590), [590; 615), [615; 640), [640; 665), các tần số là (9; 2; 0; 2; 1; 1; 1). Tổng = 16 = số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        653,
        632,
        609,
        572,
        565,
        535,
        516,
        514,
        508,
        505,
        504,
        504,
        503,
        499,
        496,
        492
      ],
      "edges": [
        490,
        515,
        540,
        565,
        590,
        615,
        640,
        665
      ],
      "closed": false,
      "counts": [
        9,
        2,
        0,
        2,
        1,
        1,
        1
      ]
    }
  },
  {
    "id": "toan-11-3-d2-5",
    "type": "Lập bảng tần số",
    "source": {
      "file": "02-lap-bang-tan-so.pdf",
      "page": 2,
      "block": 5
    },
    "prompt": "Chia số liệu điện năng thành 8 nhóm dài 5: [30; 35), [35; 40), [40; 45), [45; 50), [50; 55), [55; 60), [60; 65), [65; 70] (nhóm cuối đóng). Dãy tần số là:\nSố liệu: 50; 47; 30; 65; 63; 70; 38; 34; 48; 53; 33; 39; 32; 40; 50; 55; 50; 61; 37; 37; 43; 35; 65; 60; 31; 33; 41; 45; 55; 59.",
    "table": null,
    "options": [
      "7; 5; 3; 3; 4; 3; 3; 2",
      "6; 5; 3; 3; 4; 3; 3; 3",
      "5; 6; 3; 3; 4; 3; 3; 3",
      "6; 4; 4; 3; 4; 3; 3; 3"
    ],
    "answer": 1,
    "explanation": "Theo thứ tự [30; 35), [35; 40), [40; 45), [45; 50), [50; 55), [55; 60), [60; 65), [65; 70], các tần số là (6; 5; 3; 3; 4; 3; 3; 3). Tổng = 30 = số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        50,
        47,
        30,
        65,
        63,
        70,
        38,
        34,
        48,
        53,
        33,
        39,
        32,
        40,
        50,
        55,
        50,
        61,
        37,
        37,
        43,
        35,
        65,
        60,
        31,
        33,
        41,
        45,
        55,
        59
      ],
      "edges": [
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70
      ],
      "closed": true,
      "counts": [
        6,
        5,
        3,
        3,
        4,
        3,
        3,
        3
      ]
    },
    "correction": "PDF ghi điện năng với đơn vị kW (đơn vị công suất). Bản web dùng số liệu và bỏ đơn vị chưa nhất quán; đóng nhóm cuối để chứa giá trị 70."
  },
  {
    "id": "toan-11-3-d3-1",
    "type": "Số trung bình",
    "source": {
      "file": "03-so-trung-binh.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Số trung bình ghép nhóm của doanh thu bán hàng trong 20 ngày thuộc khoảng nào?",
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "[5; 7)",
        "[7; 9)",
        "[9; 11)",
        "[11; 13)",
        "[13; 15)"
      ],
      "rows": [
        [
          "Số ngày",
          2,
          7,
          7,
          3,
          1
        ]
      ]
    },
    "options": [
      "[7; 9)",
      "[9; 11)",
      "[11; 13)",
      "[13; 15)"
    ],
    "answer": 1,
    "explanation": "Các trung điểm là 6; 8; 10; 12; 14. Tổng có trọng số = 188, N = 20 nên x̄ = 9,4 triệu đồng, thuộc [9; 11).",
    "hint": "Tính trung bình có trọng số từ các trung điểm.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d3-2",
    "type": "Số trung bình",
    "source": {
      "file": "03-so-trung-binh.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ước lượng cân nặng trung bình của học sinh lớp 11D. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Cân nặng (kg)",
        "[40,5; 45,5)",
        "[45,5; 50,5)",
        "[50,5; 55,5)",
        "[55,5; 60,5)",
        "[60,5; 65,5)",
        "[65,5; 70,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          10,
          7,
          16,
          4,
          2,
          3
        ]
      ]
    },
    "options": [
      "49,81 kg",
      "52,81 kg",
      "51,81 kg",
      "54,81 kg"
    ],
    "answer": 2,
    "explanation": "Giá trị đại diện các nhóm: 43; 48; 53; 58; 63; 68. Tổng tần số N = 42. Tổng nᵢcᵢ = 2.176. Số trung bình ghép nhóm x̄ = 2.176/42 ≈ 51,81 kg. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho 42.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mean",
      "edges": [
        40.5,
        45.5,
        50.5,
        55.5,
        60.5,
        65.5,
        70.5
      ],
      "freq": [
        10,
        7,
        16,
        4,
        2,
        3
      ],
      "value": 51.80952380952381
    }
  },
  {
    "id": "toan-11-3-d3-3",
    "type": "Số trung bình",
    "source": {
      "file": "03-so-trung-binh.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng thời gian xem tivi trung bình trong tuần. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Thời gian (giờ)",
        "[0; 5)",
        "[5; 10)",
        "[10; 15)",
        "[15; 20)",
        "[20; 25)"
      ],
      "rows": [
        [
          "Số học sinh",
          8,
          16,
          4,
          2,
          2
        ]
      ]
    },
    "options": [
      "6,44 giờ",
      "9,44 giờ",
      "11,44 giờ",
      "8,44 giờ"
    ],
    "answer": 3,
    "explanation": "Giá trị đại diện các nhóm: 2,5; 7,5; 12,5; 17,5; 22,5. Tổng tần số N = 32. Tổng nᵢcᵢ = 270. Số trung bình ghép nhóm x̄ = 270/32 ≈ 8,44 giờ. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho 32.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mean",
      "edges": [
        0,
        5,
        10,
        15,
        20,
        25
      ],
      "freq": [
        8,
        16,
        4,
        2,
        2
      ],
      "value": 8.4375
    }
  },
  {
    "id": "toan-11-3-d3-4",
    "type": "Số trung bình",
    "source": {
      "file": "03-so-trung-binh.pdf",
      "page": 2,
      "block": 4
    },
    "prompt": "Ước lượng thời gian sử dụng điện thoại từ lúc đầy pin đến khi hết pin. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Thời gian (giờ)",
        "[7; 9)",
        "[9; 11)",
        "[11; 13)",
        "[13; 15)",
        "[15; 17)"
      ],
      "rows": [
        [
          "Số lần",
          2,
          5,
          7,
          6,
          3
        ]
      ]
    },
    "options": [
      "12,26 giờ",
      "10,26 giờ",
      "13,26 giờ",
      "15,26 giờ"
    ],
    "answer": 0,
    "explanation": "Giá trị đại diện các nhóm: 8; 10; 12; 14; 16. Tổng tần số N = 23. Tổng nᵢcᵢ = 282. Số trung bình ghép nhóm x̄ = 282/23 ≈ 12,26 giờ. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho 23.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mean",
      "edges": [
        7,
        9,
        11,
        13,
        15,
        17
      ],
      "freq": [
        2,
        5,
        7,
        6,
        3
      ],
      "value": 12.26086956521739
    }
  },
  {
    "id": "toan-11-3-d4-1",
    "type": "Trung vị",
    "source": {
      "file": "04-trung-vi.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Nhóm chứa trung vị của thời gian tập thể dục là:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0; 20)",
        "[20; 40)",
        "[40; 60)",
        "[60; 80)",
        "[80; 100)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "options": [
      "[40; 60)",
      "[20; 40)",
      "[60; 80)",
      "[80; 100)"
    ],
    "answer": 0,
    "explanation": "N = 42, N/2 = 21. Tích lũy: 5; 14; 26; 36; 42. Mốc 21 thuộc nhóm [40; 60).",
    "hint": "Tính N/2 rồi tìm tần số tích lũy đầu tiên đạt mốc đó.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d4-2",
    "type": "Trung vị",
    "source": {
      "file": "04-trung-vi.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Trung vị ghép nhóm của doanh thu bán hàng thuộc khoảng nào?",
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "[5; 7)",
        "[7; 9)",
        "[9; 11)",
        "[11; 13)",
        "[13; 15)"
      ],
      "rows": [
        [
          "Số ngày",
          2,
          7,
          7,
          3,
          1
        ]
      ]
    },
    "options": [
      "[7; 9)",
      "[9; 11)",
      "[11; 13)",
      "[13; 15)"
    ],
    "answer": 1,
    "explanation": "N = 20, N/2 = 10. Tích lũy: 2; 9; 16; 19; 20. Mₑ = 9 + (10 − 9)/7 × 2 ≈ 9,29 triệu đồng, thuộc [9; 11).",
    "hint": "Dùng tần số tích lũy trước nhóm, không dùng tần số lớn nhất.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d4-3",
    "type": "Trung vị",
    "source": {
      "file": "04-trung-vi.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng trung vị thời gian truy cập Internet mỗi tối. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[9,5; 12,5)",
        "[12,5; 15,5)",
        "[15,5; 18,5)",
        "[18,5; 21,5)",
        "[21,5; 24,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "options": [
      "16,1 phút",
      "19,1 phút",
      "21,1 phút",
      "18,1 phút"
    ],
    "answer": 3,
    "explanation": "N = 56; mốc 2N/4 = 28. Nhóm nội suy [15,5; 18,5) có L = 15,5, h = 3, f = 15, F = 15. Mₑ = 15,5 + (28 − 15)/15 × 3 ≈ 18,1 phút.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 28 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        9.5,
        12.5,
        15.5,
        18.5,
        21.5,
        24.5
      ],
      "freq": [
        3,
        12,
        15,
        24,
        2
      ],
      "r": 2,
      "value": 18.1
    }
  },
  {
    "id": "toan-11-3-d4-4",
    "type": "Trung vị",
    "source": {
      "file": "04-trung-vi.pdf",
      "page": 2,
      "block": 4
    },
    "prompt": "Ước lượng trung vị tốc độ bóng trong 200 lần giao bóng. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Tốc độ (km/h)",
        "[150; 155)",
        "[155; 160)",
        "[160; 165)",
        "[165; 170)",
        "[170; 175)",
        "[175; 180)"
      ],
      "rows": [
        [
          "Số lần",
          18,
          28,
          35,
          43,
          41,
          35
        ]
      ]
    },
    "options": [
      "167,21 km/h",
      "165,21 km/h",
      "168,21 km/h",
      "170,21 km/h"
    ],
    "answer": 0,
    "explanation": "N = 200; mốc 2N/4 = 100. Nhóm nội suy [165; 170) có L = 165, h = 5, f = 43, F = 81. Mₑ = 165 + (100 − 81)/43 × 5 ≈ 167,21 km/h.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 100 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        150,
        155,
        160,
        165,
        170,
        175,
        180
      ],
      "freq": [
        18,
        28,
        35,
        43,
        41,
        35
      ],
      "r": 2,
      "value": 167.2093023255814
    }
  },
  {
    "id": "toan-11-3-d5-1",
    "type": "Tứ phân vị",
    "source": {
      "file": "05-tu-phan-vi.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Nhóm chứa tứ phân vị thứ nhất Q₁ của thời gian tập thể dục là:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0; 20)",
        "[20; 40)",
        "[40; 60)",
        "[60; 80)",
        "[80; 100)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "options": [
      "[40; 60)",
      "[20; 40)",
      "[60; 80)",
      "[80; 100)"
    ],
    "answer": 1,
    "explanation": "N/4 = 42/4 = 10,5. Tích lũy trước nhóm [20; 40) là 5, sau nhóm là 14, nên Q₁ thuộc nhóm này.",
    "hint": "Xác định mốc N/4.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d5-2",
    "type": "Tứ phân vị",
    "source": {
      "file": "05-tu-phan-vi.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Nhóm chứa tứ phân vị thứ ba Q₃ của thời gian tập thể dục là:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0; 20)",
        "[20; 40)",
        "[40; 60)",
        "[60; 80)",
        "[80; 100)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "options": [
      "[40; 60)",
      "[20; 40)",
      "[60; 80)",
      "[80; 100)"
    ],
    "answer": 2,
    "explanation": "3N/4 = 31,5. Tích lũy: 5; 14; 26; 36; 42, nên nhóm [60; 80) chứa Q₃.",
    "hint": "Xác định mốc 3N/4.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d5-3",
    "type": "Tứ phân vị",
    "source": {
      "file": "05-tu-phan-vi.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Tứ phân vị thứ nhất của doanh thu gần nhất với giá trị nào (triệu đồng)?",
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "[5; 7)",
        "[7; 9)",
        "[9; 11)",
        "[11; 13)",
        "[13; 15)"
      ],
      "rows": [
        [
          "Số ngày",
          2,
          7,
          7,
          3,
          1
        ]
      ]
    },
    "options": [
      "7",
      "7,6",
      "8",
      "8,6"
    ],
    "answer": 2,
    "explanation": "N/4 = 5, nhóm [7; 9) có F = 2, f = 7. Q₁ = 7 + (5 − 2)/7 × 2 ≈ 7,857. Trong bốn lựa chọn, 8 gần nhất.",
    "hint": "Nội suy Q₁ rồi so khoảng cách với từng lựa chọn.",
    "difficulty": "Trung bình",
    "sample": false
  },
  {
    "id": "toan-11-3-d5-4",
    "type": "Tứ phân vị",
    "source": {
      "file": "05-tu-phan-vi.pdf",
      "page": 2,
      "block": 4
    },
    "prompt": "Tứ phân vị thứ ba của doanh thu gần nhất với giá trị nào (triệu đồng)?",
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "[5; 7)",
        "[7; 9)",
        "[9; 11)",
        "[11; 13)",
        "[13; 15)"
      ],
      "rows": [
        [
          "Số ngày",
          2,
          7,
          7,
          3,
          1
        ]
      ]
    },
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "explanation": "3N/4 = 15, nhóm [9; 11) có F = 9, f = 7. Q₃ = 9 + (15 − 9)/7 × 2 ≈ 10,714, gần 11 nhất.",
    "hint": "Tìm nhóm chứa mốc 15 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false
  },
  {
    "id": "toan-11-3-d5-5",
    "type": "Tứ phân vị",
    "source": {
      "file": "05-tu-phan-vi.pdf",
      "page": 2,
      "block": 5
    },
    "prompt": "Ước lượng Q₁ của thời gian truy cập Internet. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[9,5; 12,5)",
        "[12,5; 15,5)",
        "[15,5; 18,5)",
        "[18,5; 21,5)",
        "[21,5; 24,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "options": [
      "13,25 phút",
      "15,25 phút",
      "16,25 phút",
      "18,25 phút"
    ],
    "answer": 1,
    "explanation": "N = 56; mốc 1N/4 = 14. Nhóm nội suy [12,5; 15,5) có L = 12,5, h = 3, f = 12, F = 3. Q1 = 12,5 + (14 − 3)/12 × 3 ≈ 15,25 phút.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 14 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        9.5,
        12.5,
        15.5,
        18.5,
        21.5,
        24.5
      ],
      "freq": [
        3,
        12,
        15,
        24,
        2
      ],
      "r": 1,
      "value": 15.25
    }
  },
  {
    "id": "toan-11-3-d5-6",
    "type": "Tứ phân vị",
    "source": {
      "file": "05-tu-phan-vi.pdf",
      "page": 2,
      "block": 5
    },
    "prompt": "Ước lượng Q₃ của thời gian truy cập Internet. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[9,5; 12,5)",
        "[12,5; 15,5)",
        "[15,5; 18,5)",
        "[18,5; 21,5)",
        "[21,5; 24,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "options": [
      "18 phút",
      "21 phút",
      "20 phút",
      "23 phút"
    ],
    "answer": 2,
    "explanation": "N = 56; mốc 3N/4 = 42. Nhóm nội suy [18,5; 21,5) có L = 18,5, h = 3, f = 24, F = 30. Q3 = 18,5 + (42 − 30)/24 × 3 ≈ 20 phút.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 42 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        9.5,
        12.5,
        15.5,
        18.5,
        21.5,
        24.5
      ],
      "freq": [
        3,
        12,
        15,
        24,
        2
      ],
      "r": 3,
      "value": 20
    }
  },
  {
    "id": "toan-11-3-d6-1",
    "type": "Mốt",
    "source": {
      "file": "06-mot.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Nhóm chứa mốt của thời gian tập thể dục là:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0; 20)",
        "[20; 40)",
        "[40; 60)",
        "[60; 80)",
        "[80; 100)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "options": [
      "[40; 60)",
      "[20; 40)",
      "[60; 80)",
      "[80; 100)"
    ],
    "answer": 0,
    "explanation": "Các nhóm cùng độ dài 20. Tần số lớn nhất là 12 ở nhóm [40; 60).",
    "hint": "So sánh tần số các nhóm.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d6-2",
    "type": "Mốt",
    "source": {
      "file": "06-mot.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Mốt ghép nhóm của thời gian tập thể dục bằng:",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0; 20)",
        "[20; 40)",
        "[40; 60)",
        "[60; 80)",
        "[80; 100)"
      ],
      "rows": [
        [
          "Số học sinh",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "options": [
      "42 phút",
      "52 phút",
      "53 phút",
      "54 phút"
    ],
    "answer": 1,
    "explanation": "Nhóm mốt [40; 60): d₁ = 12 − 9 = 3, d₂ = 12 − 10 = 2. Mₒ = 40 + 3/(3 + 2) × 20 = 52 phút.",
    "hint": "Dùng hiệu tần số giữa nhóm mốt và hai nhóm lân cận.",
    "difficulty": "Trung bình",
    "sample": false
  },
  {
    "id": "toan-11-3-d6-3",
    "type": "Mốt",
    "source": {
      "file": "06-mot.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Mốt ghép nhóm của doanh thu thuộc khoảng nào?",
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "[5; 7)",
        "[7; 9)",
        "[9; 11)",
        "[11; 13)",
        "[13; 15)"
      ],
      "rows": [
        [
          "Số ngày",
          2,
          7,
          7,
          3,
          1
        ]
      ]
    },
    "options": [
      "[7; 9)",
      "[9; 11)",
      "[11; 13)",
      "[13; 15)"
    ],
    "answer": 1,
    "explanation": "Hai nhóm kề [7; 9) và [9; 11) cùng có tần số lớn nhất 7. Nội suy ở cả hai phía đều cho Mₒ = 9. Theo quy ước [a; b), 9 thuộc [9; 11).",
    "hint": "Xét hai nhóm đồng tần số lớn nhất và quy ước đầu mút.",
    "difficulty": "Khó",
    "sample": false
  },
  {
    "id": "toan-11-3-d6-4",
    "type": "Mốt",
    "source": {
      "file": "06-mot.pdf",
      "page": 2,
      "block": 4
    },
    "prompt": "Ước lượng mốt chiều cao của 50 học sinh lớp 11A. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "[145; 150)",
        "[150; 155)",
        "[155; 160)",
        "[160; 165)",
        "[165; 170)"
      ],
      "rows": [
        [
          "Số học sinh",
          7,
          14,
          10,
          10,
          9
        ]
      ]
    },
    "options": [
      "151,18 cm",
      "154,18 cm",
      "153,18 cm",
      "156,18 cm"
    ],
    "answer": 2,
    "explanation": "Các nhóm cùng độ dài 5. Chọn nhóm có tần số lớn nhất [150; 155); d₁ = 7, d₂ = 4. Mₒ = 150 + 7/(7 + 4) × 5 ≈ 153,18 cm.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mode",
      "edges": [
        145,
        150,
        155,
        160,
        165,
        170
      ],
      "freq": [
        7,
        14,
        10,
        10,
        9
      ],
      "value": 153.1818181818182
    }
  },
  {
    "id": "toan-11-3-d6-5",
    "type": "Mốt",
    "source": {
      "file": "06-mot.pdf",
      "page": 2,
      "block": 4
    },
    "prompt": "Từ mốt chiều cao khoảng 153,18 cm, kết luận nào phù hợp?",
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "[145; 150)",
        "[150; 155)",
        "[155; 160)",
        "[160; 165)",
        "[165; 170)"
      ],
      "rows": [
        [
          "Số học sinh",
          7,
          14,
          10,
          10,
          9
        ]
      ]
    },
    "options": [
      "Chiều cao tập trung quanh vùng 153,18 cm.",
      "Có đúng 14 học sinh cao 153,18 cm.",
      "Mọi học sinh đều cao 153,18 cm.",
      "153,18 cm là chiều cao lớn nhất."
    ],
    "answer": 0,
    "explanation": "Mốt ghép nhóm là giá trị ước lượng vùng tập trung, không cho biết chính xác số người có chiều cao bằng giá trị đó.",
    "hint": "Phân biệt giá trị ước lượng với một quan sát chính xác.",
    "difficulty": "Dễ",
    "sample": false
  },
  {
    "id": "toan-11-3-d6-6",
    "type": "Mốt",
    "source": {
      "file": "06-mot.pdf",
      "page": 2,
      "block": 5
    },
    "prompt": "Ước lượng mốt thời gian hoàn thành một câu hỏi thi. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Thời gian (phút)",
        "[0,5; 10,5)",
        "[10,5; 20,5)",
        "[20,5; 30,5)",
        "[30,5; 40,5)",
        "[40,5; 50,5)"
      ],
      "rows": [
        [
          "Số học sinh",
          2,
          10,
          6,
          4,
          3
        ]
      ]
    },
    "options": [
      "17,17 phút",
      "15,17 phút",
      "18,17 phút",
      "20,17 phút"
    ],
    "answer": 0,
    "explanation": "Các nhóm cùng độ dài 10. Chọn nhóm có tần số lớn nhất [10,5; 20,5); d₁ = 8, d₂ = 4. Mₒ = 10,5 + 8/(8 + 4) × 10 ≈ 17,17 phút.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mode",
      "edges": [
        0.5,
        10.5,
        20.5,
        30.5,
        40.5,
        50.5
      ],
      "freq": [
        2,
        10,
        6,
        4,
        3
      ],
      "value": 17.166666666666664
    }
  },
  {
    "id": "toan-11-3-d7-1",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Ước lượng số trung bình điểm Toán của học sinh. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Điểm Toán",
        "[6,5; 7)",
        "[7; 7,5)",
        "[7,5; 8)",
        "[8; 8,5)",
        "[8,5; 9)",
        "[9; 9,5)",
        "[9,5; 10)"
      ],
      "rows": [
        [
          "Tần số",
          8,
          10,
          16,
          24,
          13,
          7,
          4
        ]
      ]
    },
    "options": [
      "6,12 điểm",
      "8,12 điểm",
      "9,12 điểm",
      "11,12 điểm"
    ],
    "answer": 1,
    "explanation": "Giá trị đại diện các nhóm: 6,75; 7,25; 7,75; 8,25; 8,75; 9,25; 9,75. Tổng tần số N = 82. Tổng nᵢcᵢ = 666. Số trung bình ghép nhóm x̄ = 666/82 ≈ 8,12 điểm. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho 82.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mean",
      "edges": [
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10
      ],
      "freq": [
        8,
        10,
        16,
        24,
        13,
        7,
        4
      ],
      "value": 8.121951219512194
    }
  },
  {
    "id": "toan-11-3-d7-2",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Ước lượng tứ phân vị Q1 của điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Điểm Toán",
        "[6,5; 7)",
        "[7; 7,5)",
        "[7,5; 8)",
        "[8; 8,5)",
        "[8,5; 9)",
        "[9; 9,5)",
        "[9,5; 10)"
      ],
      "rows": [
        [
          "Tần số",
          8,
          10,
          16,
          24,
          13,
          7,
          4
        ]
      ]
    },
    "options": [
      "5,58 điểm",
      "8,58 điểm",
      "7,58 điểm",
      "10,58 điểm"
    ],
    "answer": 2,
    "explanation": "N = 82; mốc 1N/4 = 20,5. Nhóm nội suy [7,5; 8) có L = 7,5, h = 0,5, f = 16, F = 18. Q1 = 7,5 + (20,5 − 18)/16 × 0,5 ≈ 7,58 điểm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 20,5 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10
      ],
      "freq": [
        8,
        10,
        16,
        24,
        13,
        7,
        4
      ],
      "r": 1,
      "value": 7.578125
    }
  },
  {
    "id": "toan-11-3-d7-3",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Ước lượng tứ phân vị Q2 của điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Điểm Toán",
        "[6,5; 7)",
        "[7; 7,5)",
        "[7,5; 8)",
        "[8; 8,5)",
        "[8,5; 9)",
        "[9; 9,5)",
        "[9,5; 10)"
      ],
      "rows": [
        [
          "Tần số",
          8,
          10,
          16,
          24,
          13,
          7,
          4
        ]
      ]
    },
    "options": [
      "6,15 điểm",
      "9,15 điểm",
      "11,15 điểm",
      "8,15 điểm"
    ],
    "answer": 3,
    "explanation": "N = 82; mốc 2N/4 = 41. Nhóm nội suy [8; 8,5) có L = 8, h = 0,5, f = 24, F = 34. Mₑ = 8 + (41 − 34)/24 × 0,5 ≈ 8,15 điểm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 41 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10
      ],
      "freq": [
        8,
        10,
        16,
        24,
        13,
        7,
        4
      ],
      "r": 2,
      "value": 8.145833333333334
    }
  },
  {
    "id": "toan-11-3-d7-4",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Ước lượng tứ phân vị Q3 của điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Điểm Toán",
        "[6,5; 7)",
        "[7; 7,5)",
        "[7,5; 8)",
        "[8; 8,5)",
        "[8,5; 9)",
        "[9; 9,5)",
        "[9,5; 10)"
      ],
      "rows": [
        [
          "Tần số",
          8,
          10,
          16,
          24,
          13,
          7,
          4
        ]
      ]
    },
    "options": [
      "8,63 điểm",
      "6,63 điểm",
      "9,63 điểm",
      "11,63 điểm"
    ],
    "answer": 0,
    "explanation": "N = 82; mốc 3N/4 = 61,5. Nhóm nội suy [8,5; 9) có L = 8,5, h = 0,5, f = 13, F = 58. Q3 = 8,5 + (61,5 − 58)/13 × 0,5 ≈ 8,63 điểm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 61,5 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10
      ],
      "freq": [
        8,
        10,
        16,
        24,
        13,
        7,
        4
      ],
      "r": 3,
      "value": 8.634615384615385
    }
  },
  {
    "id": "toan-11-3-d7-5",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 1
    },
    "prompt": "Ước lượng mốt điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Điểm Toán",
        "[6,5; 7)",
        "[7; 7,5)",
        "[7,5; 8)",
        "[8; 8,5)",
        "[8,5; 9)",
        "[9; 9,5)",
        "[9,5; 10)"
      ],
      "rows": [
        [
          "Tần số",
          8,
          10,
          16,
          24,
          13,
          7,
          4
        ]
      ]
    },
    "options": [
      "6,21 điểm",
      "8,21 điểm",
      "9,21 điểm",
      "11,21 điểm"
    ],
    "answer": 1,
    "explanation": "Các nhóm cùng độ dài 0,5. Chọn nhóm có tần số lớn nhất [8; 8,5); d₁ = 8, d₂ = 11. Mₒ = 8 + 8/(8 + 11) × 0,5 ≈ 8,21 điểm.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mode",
      "edges": [
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10
      ],
      "freq": [
        8,
        10,
        16,
        24,
        13,
        7,
        4
      ],
      "value": 8.210526315789474
    }
  },
  {
    "id": "toan-11-3-d7-6",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Từ số liệu thô lượng mưa tháng 8 ở Vũng Tàu, 2002–2020 (mm), tính số trung bình (làm tròn đến hai chữ số thập phân).",
    "table": {
      "headers": [],
      "rows": [
        [
          121.8,
          158.3,
          334.9,
          200.9,
          165.6,
          161.5,
          194.3,
          220.7
        ],
        [
          189.8,
          243.2,
          165.9,
          165.9,
          134,
          173,
          169,
          189
        ],
        [
          254,
          168,
          255
        ]
      ]
    },
    "options": [
      "190,88 mm",
      "193,88 mm",
      "192,88 mm",
      "195,88 mm"
    ],
    "answer": 2,
    "explanation": "Có 19 quan sát, tổng 3.664,8. Trung bình chính xác trước khi làm tròn là tổng chia 19, x̄ ≈ 192,88 mm.",
    "hint": "Cộng các quan sát gốc rồi chia cho số quan sát.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawMean",
      "raw": [
        121.8,
        158.3,
        334.9,
        200.9,
        165.6,
        161.5,
        194.3,
        220.7,
        189.8,
        243.2,
        165.9,
        165.9,
        134,
        173,
        169,
        189,
        254,
        168,
        255
      ],
      "value": 192.8842105263158
    }
  },
  {
    "id": "toan-11-3-d7-7",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Từ số liệu thô lượng mưa tháng 8 ở Vũng Tàu, 2002–2020 (mm), xác định Q1.",
    "table": {
      "headers": [],
      "rows": [
        [
          121.8,
          158.3,
          334.9,
          200.9,
          165.6,
          161.5,
          194.3,
          220.7
        ],
        [
          189.8,
          243.2,
          165.9,
          165.9,
          134,
          173,
          169,
          189
        ],
        [
          254,
          168,
          255
        ]
      ]
    },
    "options": [
      "163,6 mm",
      "166,6 mm",
      "168,6 mm",
      "165,6 mm"
    ],
    "answer": 3,
    "explanation": "Sắp xếp tăng dần: 121,8; 134; 158,3; 161,5; 165,6; 165,9; 165,9; 168; 169; 173; 189; 189,8; 194,3; 200,9; 220,7; 243,2; 254; 255; 334,9. Q₂ là trung vị của mẫu; Q₁ và Q₃ là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). Q1 = 165,6 mm.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawQuantile",
      "raw": [
        121.8,
        158.3,
        334.9,
        200.9,
        165.6,
        161.5,
        194.3,
        220.7,
        189.8,
        243.2,
        165.9,
        165.9,
        134,
        173,
        169,
        189,
        254,
        168,
        255
      ],
      "r": 1,
      "value": 165.6
    }
  },
  {
    "id": "toan-11-3-d7-8",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Từ số liệu thô lượng mưa tháng 8 ở Vũng Tàu, 2002–2020 (mm), xác định Q2.",
    "table": {
      "headers": [],
      "rows": [
        [
          121.8,
          158.3,
          334.9,
          200.9,
          165.6,
          161.5,
          194.3,
          220.7
        ],
        [
          189.8,
          243.2,
          165.9,
          165.9,
          134,
          173,
          169,
          189
        ],
        [
          254,
          168,
          255
        ]
      ]
    },
    "options": [
      "173 mm",
      "171 mm",
      "174 mm",
      "176 mm"
    ],
    "answer": 0,
    "explanation": "Sắp xếp tăng dần: 121,8; 134; 158,3; 161,5; 165,6; 165,9; 165,9; 168; 169; 173; 189; 189,8; 194,3; 200,9; 220,7; 243,2; 254; 255; 334,9. Q₂ là trung vị của mẫu; Q₁ và Q₃ là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). Q2 = 173 mm.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawQuantile",
      "raw": [
        121.8,
        158.3,
        334.9,
        200.9,
        165.6,
        161.5,
        194.3,
        220.7,
        189.8,
        243.2,
        165.9,
        165.9,
        134,
        173,
        169,
        189,
        254,
        168,
        255
      ],
      "r": 2,
      "value": 173
    }
  },
  {
    "id": "toan-11-3-d7-9",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Từ số liệu thô lượng mưa tháng 8 ở Vũng Tàu, 2002–2020 (mm), xác định Q3.",
    "table": {
      "headers": [],
      "rows": [
        [
          121.8,
          158.3,
          334.9,
          200.9,
          165.6,
          161.5,
          194.3,
          220.7
        ],
        [
          189.8,
          243.2,
          165.9,
          165.9,
          134,
          173,
          169,
          189
        ],
        [
          254,
          168,
          255
        ]
      ]
    },
    "options": [
      "218,7 mm",
      "220,7 mm",
      "221,7 mm",
      "223,7 mm"
    ],
    "answer": 1,
    "explanation": "Sắp xếp tăng dần: 121,8; 134; 158,3; 161,5; 165,6; 165,9; 165,9; 168; 169; 173; 189; 189,8; 194,3; 200,9; 220,7; 243,2; 254; 255; 334,9. Q₂ là trung vị của mẫu; Q₁ và Q₃ là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). Q3 = 220,7 mm.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawQuantile",
      "raw": [
        121.8,
        158.3,
        334.9,
        200.9,
        165.6,
        161.5,
        194.3,
        220.7,
        189.8,
        243.2,
        165.9,
        165.9,
        134,
        173,
        169,
        189,
        254,
        168,
        255
      ],
      "r": 3,
      "value": 220.7
    }
  },
  {
    "id": "toan-11-3-d7-10",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Hoàn thành dãy tần số lượng mưa theo thứ tự các nhóm trong bảng.\nDữ liệu gốc: 121,8; 158,3; 334,9; 200,9; 165,6; 161,5; 194,3; 220,7; 189,8; 243,2; 165,9; 165,9; 134; 173; 169; 189; 254; 168; 255.",
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "[120; 175)",
        "[175; 230)",
        "[230; 285)",
        "[285; 340)"
      ],
      "rows": [
        [
          "Tần số",
          "?",
          "?",
          "?",
          "?"
        ]
      ]
    },
    "options": [
      "11; 4; 3; 1",
      "10; 6; 2; 1",
      "10; 5; 3; 1",
      "9; 5; 4; 1"
    ],
    "answer": 2,
    "explanation": "Đếm từng giá trị theo các khoảng cho trước được (10; 5; 3; 1), tổng 19 quan sát.",
    "hint": "Đầu mút trái thuộc nhóm, đầu mút phải không thuộc nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        121.8,
        158.3,
        334.9,
        200.9,
        165.6,
        161.5,
        194.3,
        220.7,
        189.8,
        243.2,
        165.9,
        165.9,
        134,
        173,
        169,
        189,
        254,
        168,
        255
      ],
      "edges": [
        120,
        175,
        230,
        285,
        340
      ],
      "closed": false,
      "counts": [
        10,
        5,
        3,
        1
      ]
    }
  },
  {
    "id": "toan-11-3-d7-11",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ước lượng số trung bình lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "[120; 175)",
        "[175; 230)",
        "[230; 285)",
        "[285; 340)"
      ],
      "rows": [
        [
          "Số năm",
          10,
          5,
          3,
          1
        ]
      ]
    },
    "options": [
      "186,03 mm",
      "189,03 mm",
      "191,03 mm",
      "188,03 mm"
    ],
    "answer": 3,
    "explanation": "Giá trị đại diện các nhóm: 147,5; 202,5; 257,5; 312,5. Tổng tần số N = 19. Tổng nᵢcᵢ = 3.572,5. Số trung bình ghép nhóm x̄ = 3.572,5/19 ≈ 188,03 mm. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho 19.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mean",
      "edges": [
        120,
        175,
        230,
        285,
        340
      ],
      "freq": [
        10,
        5,
        3,
        1
      ],
      "value": 188.02631578947367
    }
  },
  {
    "id": "toan-11-3-d7-12",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ước lượng Q1 của lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "[120; 175)",
        "[175; 230)",
        "[230; 285)",
        "[285; 340)"
      ],
      "rows": [
        [
          "Số năm",
          10,
          5,
          3,
          1
        ]
      ]
    },
    "options": [
      "146,13 mm",
      "144,13 mm",
      "147,13 mm",
      "149,13 mm"
    ],
    "answer": 0,
    "explanation": "N = 19; mốc 1N/4 = 4,75. Nhóm nội suy [120; 175) có L = 120, h = 55, f = 10, F = 0. Q1 = 120 + (4,75 − 0)/10 × 55 ≈ 146,13 mm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 4,75 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        120,
        175,
        230,
        285,
        340
      ],
      "freq": [
        10,
        5,
        3,
        1
      ],
      "r": 1,
      "value": 146.125
    }
  },
  {
    "id": "toan-11-3-d7-13",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ước lượng Q2 của lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "[120; 175)",
        "[175; 230)",
        "[230; 285)",
        "[285; 340)"
      ],
      "rows": [
        [
          "Số năm",
          10,
          5,
          3,
          1
        ]
      ]
    },
    "options": [
      "170,25 mm",
      "172,25 mm",
      "173,25 mm",
      "175,25 mm"
    ],
    "answer": 1,
    "explanation": "N = 19; mốc 2N/4 = 9,5. Nhóm nội suy [120; 175) có L = 120, h = 55, f = 10, F = 0. Mₑ = 120 + (9,5 − 0)/10 × 55 ≈ 172,25 mm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 9,5 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        120,
        175,
        230,
        285,
        340
      ],
      "freq": [
        10,
        5,
        3,
        1
      ],
      "r": 2,
      "value": 172.25
    }
  },
  {
    "id": "toan-11-3-d7-14",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ước lượng Q3 của lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "[120; 175)",
        "[175; 230)",
        "[230; 285)",
        "[285; 340)"
      ],
      "rows": [
        [
          "Số năm",
          10,
          5,
          3,
          1
        ]
      ]
    },
    "options": [
      "219,75 mm",
      "222,75 mm",
      "221,75 mm",
      "224,75 mm"
    ],
    "answer": 2,
    "explanation": "N = 19; mốc 3N/4 = 14,25. Nhóm nội suy [175; 230) có L = 175, h = 55, f = 5, F = 10. Q3 = 175 + (14,25 − 10)/5 × 55 ≈ 221,75 mm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 14,25 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        120,
        175,
        230,
        285,
        340
      ],
      "freq": [
        10,
        5,
        3,
        1
      ],
      "r": 3,
      "value": 221.75
    }
  },
  {
    "id": "toan-11-3-d7-15",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 2
    },
    "prompt": "Ước lượng mốt lượng mưa sau khi ghép nhóm (nhóm biên dùng tần số ngoài bằng 0). (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "[120; 175)",
        "[175; 230)",
        "[230; 285)",
        "[285; 340)"
      ],
      "rows": [
        [
          "Số năm",
          10,
          5,
          3,
          1
        ]
      ]
    },
    "options": [
      "154,67 mm",
      "157,67 mm",
      "159,67 mm",
      "156,67 mm"
    ],
    "answer": 3,
    "explanation": "Các nhóm cùng độ dài 55. Chọn nhóm có tần số lớn nhất [120; 175); d₁ = 10, d₂ = 5. Mₒ = 120 + 10/(10 + 5) × 55 ≈ 156,67 mm.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mode",
      "edges": [
        120,
        175,
        230,
        285,
        340
      ],
      "freq": [
        10,
        5,
        3,
        1
      ],
      "value": 156.66666666666666
    }
  },
  {
    "id": "toan-11-3-d7-16",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng 12/2021 (ca), tính số trung bình (làm tròn đến hai chữ số thập phân).",
    "table": {
      "headers": [],
      "rows": [
        [
          15139,
          14295,
          14254,
          14598,
          14927,
          15215,
          14433,
          15223
        ],
        [
          15965,
          15474,
          16830,
          15264,
          16035,
          15871,
          16192,
          15720
        ],
        [
          15685,
          16363,
          16586,
          15420,
          16806,
          17044,
          16860,
          16633
        ],
        [
          16046,
          15667,
          15310,
          14866,
          14299,
          20454,
          17004
        ]
      ]
    },
    "options": [
      "15.821,87 ca",
      "15.819,87 ca",
      "15.822,87 ca",
      "15.824,87 ca"
    ],
    "answer": 0,
    "explanation": "Có 31 quan sát, tổng 490.478. Trung bình chính xác trước khi làm tròn là tổng chia 31, x̄ ≈ 15.821,87 ca.",
    "hint": "Cộng các quan sát gốc rồi chia cho số quan sát.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawMean",
      "raw": [
        15139,
        14295,
        14254,
        14598,
        14927,
        15215,
        14433,
        15223,
        15965,
        15474,
        16830,
        15264,
        16035,
        15871,
        16192,
        15720,
        15685,
        16363,
        16586,
        15420,
        16806,
        17044,
        16860,
        16633,
        16046,
        15667,
        15310,
        14866,
        14299,
        20454,
        17004
      ],
      "value": 15821.870967741936
    }
  },
  {
    "id": "toan-11-3-d7-17",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng 12/2021 (ca), xác định Q1.",
    "table": {
      "headers": [],
      "rows": [
        [
          15139,
          14295,
          14254,
          14598,
          14927,
          15215,
          14433,
          15223
        ],
        [
          15965,
          15474,
          16830,
          15264,
          16035,
          15871,
          16192,
          15720
        ],
        [
          15685,
          16363,
          16586,
          15420,
          16806,
          17044,
          16860,
          16633
        ],
        [
          16046,
          15667,
          15310,
          14866,
          14299,
          20454,
          17004
        ]
      ]
    },
    "options": [
      "15.137 ca",
      "15.139 ca",
      "15.140 ca",
      "15.142 ca"
    ],
    "answer": 1,
    "explanation": "Sắp xếp tăng dần: 14.254; 14.295; 14.299; 14.433; 14.598; 14.866; 14.927; 15.139; 15.215; 15.223; 15.264; 15.310; 15.420; 15.474; 15.667; 15.685; 15.720; 15.871; 15.965; 16.035; 16.046; 16.192; 16.363; 16.586; 16.633; 16.806; 16.830; 16.860; 17.004; 17.044; 20.454. Q₂ là trung vị của mẫu; Q₁ và Q₃ là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). Q1 = 15.139 ca.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawQuantile",
      "raw": [
        15139,
        14295,
        14254,
        14598,
        14927,
        15215,
        14433,
        15223,
        15965,
        15474,
        16830,
        15264,
        16035,
        15871,
        16192,
        15720,
        15685,
        16363,
        16586,
        15420,
        16806,
        17044,
        16860,
        16633,
        16046,
        15667,
        15310,
        14866,
        14299,
        20454,
        17004
      ],
      "r": 1,
      "value": 15139
    }
  },
  {
    "id": "toan-11-3-d7-18",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng 12/2021 (ca), xác định Q2.",
    "table": {
      "headers": [],
      "rows": [
        [
          15139,
          14295,
          14254,
          14598,
          14927,
          15215,
          14433,
          15223
        ],
        [
          15965,
          15474,
          16830,
          15264,
          16035,
          15871,
          16192,
          15720
        ],
        [
          15685,
          16363,
          16586,
          15420,
          16806,
          17044,
          16860,
          16633
        ],
        [
          16046,
          15667,
          15310,
          14866,
          14299,
          20454,
          17004
        ]
      ]
    },
    "options": [
      "15.683 ca",
      "15.686 ca",
      "15.685 ca",
      "15.688 ca"
    ],
    "answer": 2,
    "explanation": "Sắp xếp tăng dần: 14.254; 14.295; 14.299; 14.433; 14.598; 14.866; 14.927; 15.139; 15.215; 15.223; 15.264; 15.310; 15.420; 15.474; 15.667; 15.685; 15.720; 15.871; 15.965; 16.035; 16.046; 16.192; 16.363; 16.586; 16.633; 16.806; 16.830; 16.860; 17.004; 17.044; 20.454. Q₂ là trung vị của mẫu; Q₁ và Q₃ là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). Q2 = 15.685 ca.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawQuantile",
      "raw": [
        15139,
        14295,
        14254,
        14598,
        14927,
        15215,
        14433,
        15223,
        15965,
        15474,
        16830,
        15264,
        16035,
        15871,
        16192,
        15720,
        15685,
        16363,
        16586,
        15420,
        16806,
        17044,
        16860,
        16633,
        16046,
        15667,
        15310,
        14866,
        14299,
        20454,
        17004
      ],
      "r": 2,
      "value": 15685
    }
  },
  {
    "id": "toan-11-3-d7-19",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng 12/2021 (ca), xác định Q3.",
    "table": {
      "headers": [],
      "rows": [
        [
          15139,
          14295,
          14254,
          14598,
          14927,
          15215,
          14433,
          15223
        ],
        [
          15965,
          15474,
          16830,
          15264,
          16035,
          15871,
          16192,
          15720
        ],
        [
          15685,
          16363,
          16586,
          15420,
          16806,
          17044,
          16860,
          16633
        ],
        [
          16046,
          15667,
          15310,
          14866,
          14299,
          20454,
          17004
        ]
      ]
    },
    "options": [
      "16.584 ca",
      "16.587 ca",
      "16.589 ca",
      "16.586 ca"
    ],
    "answer": 3,
    "explanation": "Sắp xếp tăng dần: 14.254; 14.295; 14.299; 14.433; 14.598; 14.866; 14.927; 15.139; 15.215; 15.223; 15.264; 15.310; 15.420; 15.474; 15.667; 15.685; 15.720; 15.871; 15.965; 16.035; 16.046; 16.192; 16.363; 16.586; 16.633; 16.806; 16.830; 16.860; 17.004; 17.044; 20.454. Q₂ là trung vị của mẫu; Q₁ và Q₃ là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). Q3 = 16.586 ca.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "rawQuantile",
      "raw": [
        15139,
        14295,
        14254,
        14598,
        14927,
        15215,
        14433,
        15223,
        15965,
        15474,
        16830,
        15264,
        16035,
        15871,
        16192,
        15720,
        15685,
        16363,
        16586,
        15420,
        16806,
        17044,
        16860,
        16633,
        16046,
        15667,
        15310,
        14866,
        14299,
        20454,
        17004
      ],
      "r": 3,
      "value": 16586
    }
  },
  {
    "id": "toan-11-3-d7-20",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Đổi số ca sang nghìn ca rồi hoàn thành dãy tần số theo thứ tự các nhóm.\nDữ liệu gốc: 15,14; 14,29; 14,25; 14,6; 14,93; 15,21; 14,43; 15,22; 15,96; 15,47; 16,83; 15,26; 16,04; 15,87; 16,19; 15,72; 15,69; 16,36; 16,59; 15,42; 16,81; 17,04; 16,86; 16,63; 16,05; 15,67; 15,31; 14,87; 14,3; 20,45; 17.",
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "[14; 15,5)",
        "[15,5; 17)",
        "[17; 18,5)",
        "[18,5; 20)",
        "[20; 21,5)"
      ],
      "rows": [
        [
          "Tần số",
          "?",
          "?",
          "?",
          "?",
          "?"
        ]
      ]
    },
    "options": [
      "14; 14; 2; 0; 1",
      "15; 13; 2; 0; 1",
      "14; 15; 1; 0; 1",
      "13; 14; 3; 0; 1"
    ],
    "answer": 0,
    "explanation": "Đếm từng giá trị theo các khoảng cho trước được (14; 14; 2; 0; 1), tổng 31 quan sát.",
    "hint": "Đầu mút trái thuộc nhóm, đầu mút phải không thuộc nhóm.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "grouping",
      "raw": [
        15.139,
        14.295,
        14.254,
        14.598,
        14.927,
        15.215,
        14.433,
        15.223,
        15.965,
        15.474,
        16.83,
        15.264,
        16.035,
        15.871,
        16.192,
        15.72,
        15.685,
        16.363,
        16.586,
        15.42,
        16.806,
        17.044,
        16.86,
        16.633,
        16.046,
        15.667,
        15.31,
        14.866,
        14.299,
        20.454,
        17.004
      ],
      "edges": [
        14,
        15.5,
        17,
        18.5,
        20,
        21.5
      ],
      "closed": false,
      "counts": [
        14,
        14,
        2,
        0,
        1
      ]
    }
  },
  {
    "id": "toan-11-3-d7-21",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng số trung bình số ca mỗi ngày từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "[14; 15,5)",
        "[15,5; 17)",
        "[17; 18,5)",
        "[18,5; 20)",
        "[20; 21,5)"
      ],
      "rows": [
        [
          "Số ngày",
          14,
          14,
          2,
          0,
          1
        ]
      ]
    },
    "options": [
      "13,81 nghìn ca",
      "15,81 nghìn ca",
      "16,81 nghìn ca",
      "18,81 nghìn ca"
    ],
    "answer": 1,
    "explanation": "Giá trị đại diện các nhóm: 14,75; 16,25; 17,75; 19,25; 20,75. Tổng tần số N = 31. Tổng nᵢcᵢ = 490,25. Số trung bình ghép nhóm x̄ = 490,25/31 ≈ 15,81 nghìn ca. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho 31.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mean",
      "edges": [
        14,
        15.5,
        17,
        18.5,
        20,
        21.5
      ],
      "freq": [
        14,
        14,
        2,
        0,
        1
      ],
      "value": 15.814516129032258
    }
  },
  {
    "id": "toan-11-3-d7-22",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng Q1 của số ca từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "[14; 15,5)",
        "[15,5; 17)",
        "[17; 18,5)",
        "[18,5; 20)",
        "[20; 21,5)"
      ],
      "rows": [
        [
          "Số ngày",
          14,
          14,
          2,
          0,
          1
        ]
      ]
    },
    "options": [
      "12,83 nghìn ca",
      "15,83 nghìn ca",
      "14,83 nghìn ca",
      "17,83 nghìn ca"
    ],
    "answer": 2,
    "explanation": "N = 31; mốc 1N/4 = 7,75. Nhóm nội suy [14; 15,5) có L = 14, h = 1,5, f = 14, F = 0. Q1 = 14 + (7,75 − 0)/14 × 1,5 ≈ 14,83 nghìn ca.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 7,75 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        14,
        15.5,
        17,
        18.5,
        20,
        21.5
      ],
      "freq": [
        14,
        14,
        2,
        0,
        1
      ],
      "r": 1,
      "value": 14.830357142857142
    }
  },
  {
    "id": "toan-11-3-d7-23",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng Q2 của số ca từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "[14; 15,5)",
        "[15,5; 17)",
        "[17; 18,5)",
        "[18,5; 20)",
        "[20; 21,5)"
      ],
      "rows": [
        [
          "Số ngày",
          14,
          14,
          2,
          0,
          1
        ]
      ]
    },
    "options": [
      "13,66 nghìn ca",
      "16,66 nghìn ca",
      "18,66 nghìn ca",
      "15,66 nghìn ca"
    ],
    "answer": 3,
    "explanation": "N = 31; mốc 2N/4 = 15,5. Nhóm nội suy [15,5; 17) có L = 15,5, h = 1,5, f = 14, F = 14. Mₑ = 15,5 + (15,5 − 14)/14 × 1,5 ≈ 15,66 nghìn ca.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 15,5 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        14,
        15.5,
        17,
        18.5,
        20,
        21.5
      ],
      "freq": [
        14,
        14,
        2,
        0,
        1
      ],
      "r": 2,
      "value": 15.660714285714286
    }
  },
  {
    "id": "toan-11-3-d7-24",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng Q3 của số ca từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "[14; 15,5)",
        "[15,5; 17)",
        "[17; 18,5)",
        "[18,5; 20)",
        "[20; 21,5)"
      ],
      "rows": [
        [
          "Số ngày",
          14,
          14,
          2,
          0,
          1
        ]
      ]
    },
    "options": [
      "16,49 nghìn ca",
      "14,49 nghìn ca",
      "17,49 nghìn ca",
      "19,49 nghìn ca"
    ],
    "answer": 0,
    "explanation": "N = 31; mốc 3N/4 = 23,25. Nhóm nội suy [15,5; 17) có L = 15,5, h = 1,5, f = 14, F = 14. Q3 = 15,5 + (23,25 − 14)/14 × 1,5 ≈ 16,49 nghìn ca.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc 23,25 rồi nội suy.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "quantile",
      "edges": [
        14,
        15.5,
        17,
        18.5,
        20,
        21.5
      ],
      "freq": [
        14,
        14,
        2,
        0,
        1
      ],
      "r": 3,
      "value": 16.491071428571427
    }
  },
  {
    "id": "toan-11-3-d7-25",
    "type": "Bài tập tổng hợp",
    "source": {
      "file": "07-bai-tap-tong-hop.pdf",
      "page": 2,
      "block": 3
    },
    "prompt": "Ước lượng mốt số ca mỗi ngày từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "[14; 15,5)",
        "[15,5; 17)",
        "[17; 18,5)",
        "[18,5; 20)",
        "[20; 21,5)"
      ],
      "rows": [
        [
          "Số ngày",
          14,
          14,
          2,
          0,
          1
        ]
      ]
    },
    "options": [
      "13,5 nghìn ca",
      "15,5 nghìn ca",
      "16,5 nghìn ca",
      "18,5 nghìn ca"
    ],
    "answer": 1,
    "explanation": "Các nhóm cùng độ dài 1,5. Chọn nhóm có tần số lớn nhất [14; 15,5); d₁ = 14, d₂ = 0. Mₒ = 14 + 14/(14 + 0) × 1,5 ≈ 15,5 nghìn ca.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "difficulty": "Trung bình",
    "sample": false,
    "verification": {
      "kind": "mode",
      "edges": [
        14,
        15.5,
        17,
        18.5,
        20,
        21.5
      ],
      "freq": [
        14,
        14,
        2,
        0,
        1
      ],
      "value": 15.5
    }
  }
];
