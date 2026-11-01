// Chương 1: 200 câu trắc nghiệm đã tinh gọn. Xem docs/TOAN11-CHUONG1.md.
export const chapter1Questions = [
  {
    "id": "toan-11-1-8-5-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Đổi đơn vị",
    "kind": "choice",
    "prompt": "Đổi 108° sang radian. Tìm hệ số k trong α = kπ.",
    "value": 0.6,
    "explanation": "α = 108π/180 rad nên k = 108/180.",
    "hint": "Dùng 180° = π rad.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 1,
      "item": "5"
    },
    "sample": false,
    "verification": {
      "kind": "degree",
      "degrees": 108
    },
    "options": [
      "−3/5",
      "3/5",
      "4/5",
      "1/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-3/5",
      "3/5",
      "4/5",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-8-13-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Đổi đơn vị",
    "kind": "choice",
    "prompt": "Đổi 120° sang radian. Tìm hệ số k trong α = kπ.",
    "value": 0.6666666666666666,
    "explanation": "α = 120π/180 rad nên k = 120/180.",
    "hint": "Dùng 180° = π rad.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 1,
      "item": "13"
    },
    "sample": false,
    "verification": {
      "kind": "degree",
      "degrees": 120
    },
    "options": [
      "2/3",
      "−2/3",
      "1",
      "1/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "2/3",
      "-2/3",
      "1",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-8-12-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Đổi đơn vị",
    "kind": "choice",
    "prompt": "Đổi π/24 rad sang độ. Số đo theo độ là:",
    "value": 7.499999999999999,
    "explanation": "Số đo độ = (π/24) × 180/π = 7.499999999999999°.",
    "hint": "Nhân số đo radian với 180/π.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 1,
      "item": "12"
    },
    "sample": false,
    "verification": {
      "kind": "radian",
      "radians": 0.1308996938995747
    },
    "options": [
      "−15/2",
      "8",
      "5",
      "15/2"
    ],
    "answer": 3,
    "optionExpressions": [
      "-15/2",
      "8",
      "5",
      "15/2"
    ]
  },
  {
    "id": "toan-11-1-mc-8-7",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Cho a = π/2 + 2kπ, k ∈ ℤ. Để 10π < a < 11π thì k bằng:",
    "options": [
      "7",
      "5",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "10 < 1/2 + 2k < 11 ⇒ 4,75 < k < 5,25 ⇒ k = 5.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 1,
      "item": "7"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-8-8-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Bánh xe có 72 răng cách đều nhau. Đi qua 10 răng tương ứng góc quay bao nhiêu độ?",
    "value": 50,
    "explanation": "Mỗi răng tương ứng 360/72 = 5°. Đi qua 10 răng: 50°.",
    "hint": "Tính góc một răng rồi nhân 10.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 1,
      "item": "8"
    },
    "sample": false,
    "options": [
      "−50",
      "50",
      "51",
      "25"
    ],
    "answer": 1,
    "optionExpressions": [
      "-50",
      "50",
      "51",
      "25"
    ]
  },
  {
    "id": "toan-11-1-8-14-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Độ dài cung",
    "kind": "choice",
    "prompt": "Cung tròn bán kính 15 có góc ở tâm 50°. Độ dài cung bằng kπ. Tìm k.",
    "value": 4.166666666666667,
    "explanation": "l = rα = 15 × 50π/180 = 25π/6.",
    "hint": "Đổi góc sang radian rồi dùng l = rα.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 1,
      "item": "14"
    },
    "sample": false,
    "options": [
      "25/6",
      "−25/6",
      "13/3",
      "25/7"
    ],
    "answer": 0,
    "optionExpressions": [
      "25/6",
      "-25/6",
      "13/3",
      "25/7"
    ]
  },
  {
    "id": "toan-11-1-8-17-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Độ dài cung",
    "kind": "choice",
    "prompt": "Cung tròn bán kính 5, góc ở tâm π/8 rad có độ dài kπ. Tìm k.",
    "value": 0.625,
    "explanation": "l = 5 × π/8 nên k = 5/8.",
    "hint": "l = rα.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 2,
      "item": "17"
    },
    "sample": false,
    "options": [
      "−5/8",
      "3/4",
      "5/9",
      "5/8"
    ],
    "answer": 3,
    "optionExpressions": [
      "-5/8",
      "3/4",
      "5/9",
      "5/8"
    ]
  },
  {
    "id": "toan-11-1-8-18-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Độ dài cung",
    "kind": "choice",
    "prompt": "Cung tròn bán kính 10 cm, góc ở tâm 40°. Tính độ dài cung (cm), làm tròn 4 chữ số thập phân.",
    "value": 6.981317007977318,
    "explanation": "l = 10 × 40π/180 = 20π/9 ≈ 6,9813 cm.",
    "hint": "Đổi 40° sang radian.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 2,
      "item": "18"
    },
    "sample": false,
    "options": [
      "−(20×π/9)",
      "2×(20×π/9)",
      "20×π/9",
      "(20×π/9)/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-(20*pi/9)",
      "2*(20*pi/9)",
      "20*pi/9",
      "(20*pi/9)/2"
    ]
  },
  {
    "id": "toan-11-1-mc-8-15",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Cho α = 5π/6, β = π/3, γ = 25π/3, δ = 19π/6. Cặp nào có điểm cuối trùng nhau?",
    "options": [
      "β và γ",
      "α và δ",
      "α và β",
      "γ và δ"
    ],
    "answer": 0,
    "explanation": "γ − β = 8π = 4 × 2π. Các cặp còn lại không sai khác một bội nguyên của 2π.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 2,
      "item": "15"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-8-19-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Rút góc 5π/2 + 2001π về [0; 2π). Tìm hệ số k trong góc kπ.",
    "value": 1.5,
    "explanation": "5π/2 + 2001π = (2003,5)π, đồng điểm cuối với 3π/2.",
    "hint": "Trừ các bội của 2π.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 2,
      "item": "19"
    },
    "sample": false,
    "options": [
      "3/2",
      "−3/2",
      "2",
      "1"
    ],
    "answer": 0,
    "optionExpressions": [
      "3/2",
      "-3/2",
      "2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-8-22-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Hai điểm M, N trên đường tròn đơn vị có góc lần lượt π/3 và 4π/3. Họ góc chung là π/3 + kpπ, k ∈ ℤ, p > 0 nhỏ nhất. Tìm p.",
    "value": 1,
    "explanation": "Hai điểm đối nhau nên bước góc là π, tức p = 1.",
    "hint": "Xét hiệu hai góc.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 2,
      "item": "22"
    },
    "sample": false,
    "options": [
      "−1",
      "2",
      "1/2",
      "1"
    ],
    "answer": 3,
    "optionExpressions": [
      "-1",
      "2",
      "1/2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-8-23-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "M biểu diễn góc π/3. Điểm đối xứng của M qua Ox biểu diễn góc nhỏ nhất không âm kπ. Tìm k.",
    "value": 1.6666666666666667,
    "explanation": "Đối xứng qua Ox đổi α thành −α. Trong [0; 2π), −π/3 tương ứng 5π/3.",
    "hint": "Đổi dấu góc và cộng 2π.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 2,
      "item": "23"
    },
    "sample": false,
    "options": [
      "−5/3",
      "2",
      "5/3",
      "5/4"
    ],
    "answer": 2,
    "optionExpressions": [
      "-5/3",
      "2",
      "5/3",
      "5/4"
    ]
  },
  {
    "id": "toan-11-1-mc-8-24",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Góc nào có cùng điểm cuối với 7π/4?",
    "options": [
      "−π/4",
      "π/4",
      "3π/4",
      "−3π/4"
    ],
    "answer": 0,
    "explanation": "7π/4 − (−π/4) = 2π.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 3,
      "item": "24"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-8-25-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Có bao nhiêu điểm cuối phân biệt của họ góc π/6 + 2kπ/3, k ∈ ℤ?",
    "value": 3,
    "explanation": "k = 0, 1, 2 cho ba điểm; tăng k thêm 3 làm góc tăng 2π.",
    "hint": "Tìm số bước để quay đủ một vòng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 3,
      "item": "25"
    },
    "sample": false,
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "answer": 0,
    "optionExpressions": [
      "3",
      "2",
      "4",
      "5"
    ]
  },
  {
    "id": "toan-11-1-mc-8-26",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Cho π/2 < a < π. Kết luận nào đúng?",
    "options": [
      "sin a > 0, cos a > 0",
      "sin a < 0, cos a < 0",
      "sin a > 0, cos a < 0",
      "sin a < 0, cos a > 0"
    ],
    "answer": 2,
    "explanation": "Góc ở phần tư II: tung độ dương và hoành độ âm.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 3,
      "item": "26"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-27",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Trong các giá trị sau, sin α có thể nhận giá trị nào?",
    "options": [
      "−0,7",
      "4/3",
      "−√2",
      "√5/2"
    ],
    "answer": 0,
    "explanation": "Sin nằm trong [−1; 1]. Chỉ −0,7 thuộc khoảng này.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 3,
      "item": "27"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-28",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Cho 2π < a < 5π/2. Khẳng định đúng là:",
    "options": [
      "tan a > 0, cot a < 0",
      "tan a < 0, cot a < 0",
      "tan a > 0, cot a > 0",
      "tan a < 0, cot a > 0"
    ],
    "answer": 2,
    "explanation": "Góc đồng vị với phần tư I, tan và cot đều dương.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 3,
      "item": "28"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-30",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Ở góc phần tư IV, khẳng định nào đúng?",
    "options": [
      "cot α > 0",
      "tan α > 0",
      "sin α > 0",
      "cos α > 0"
    ],
    "answer": 3,
    "explanation": "Ở phần tư IV chỉ cos dương; sin, tan, cot âm.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 3,
      "item": "30"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-35",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Đẳng thức nào đúng?",
    "options": [
      "sin(180° − a) = −cos a",
      "sin(180° − a) = −sin a",
      "sin(180° − a) = sin a",
      "sin(180° − a) = cos a"
    ],
    "answer": 2,
    "explanation": "Hai góc bù có cùng sin.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 4,
      "item": "35"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-36",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Chọn đẳng thức sai (khi hai vế xác định).",
    "options": [
      "sin(π/2 − x) = cos x",
      "sin(π/2 + x) = cos x",
      "tan(π/2 − x) = cot x",
      "tan(π/2 + x) = cot x"
    ],
    "answer": 3,
    "explanation": "tan(π/2 + x) = −cot x.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 4,
      "item": "36"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-37",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Đẳng thức nào đúng?",
    "options": [
      "cos(−x) = −cos x",
      "sin(x − π) = sin x",
      "cos(π − x) = −cos x",
      "sin(π/2 − x) = −cos x"
    ],
    "answer": 2,
    "explanation": "Hai góc bù có cos đối nhau.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 4,
      "item": "37"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-38",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Dấu và góc liên quan",
    "kind": "choice",
    "prompt": "Khẳng định nào sai?",
    "options": [
      "sin(−α) = −sin α",
      "cot(−α) = −cot α",
      "cos(−α) = −cos α",
      "tan(−α) = −tan α"
    ],
    "answer": 2,
    "explanation": "Cos là hàm chẵn: cos(−α) = cos α.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 4,
      "item": "38"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-8-42",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Hệ thức cơ bản",
    "kind": "choice",
    "prompt": "Công thức nào sai, tại các góc hai vế xác định?",
    "options": [
      "sin²α + cos²α = 1",
      "1 + tan²α = 1/cos²α",
      "1 + cot²α = 1/sin²α",
      "tan α + cot α = 1"
    ],
    "answer": 3,
    "explanation": "Tích tan α × cot α bằng 1; tổng không luôn bằng 1.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT- Bài 1- P1.pdf",
      "page": 4,
      "item": "42"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-12-39-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "tan α = 1/2. Tính cot α.",
    "value": 2,
    "explanation": "cot α = 1/tan α = 2.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 1,
      "item": "39"
    },
    "sample": false,
    "options": [
      "−2",
      "3",
      "2",
      "1"
    ],
    "answer": 2,
    "optionExpressions": [
      "-2",
      "3",
      "2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-12-41-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "tan α = 2, π < α < 3π/2. Tính sin α.",
    "value": -0.8944271909999159,
    "explanation": "Phần tư III: sin và cos âm. cos α = −1/√5, sin α = −2/√5.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 1,
      "item": "41"
    },
    "sample": false,
    "options": [
      "−(−2/√(5))",
      "−2/√(5)",
      "2×(−2/√(5))",
      "(−2/√(5))/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-(-2/sqrt(5))",
      "-2/sqrt(5)",
      "2*(-2/sqrt(5))",
      "(-2/sqrt(5))/2"
    ]
  },
  {
    "id": "toan-11-1-12-42-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "Biết tan α = −3. Tính tan(α − 7π/2).",
    "value": 0.3333333333333333,
    "explanation": "Tan có chu kì π: tan(α − 7π/2) = tan(α − π/2) = −cot α = 1/3.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 1,
      "item": "42"
    },
    "sample": false,
    "options": [
      "1/3",
      "−1/3",
      "2/3",
      "1/4"
    ],
    "answer": 0,
    "optionExpressions": [
      "1/3",
      "-1/3",
      "2/3",
      "1/4"
    ]
  },
  {
    "id": "toan-11-1-12-45-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "cos α = 4/5, 0 < α < π/2. Tính sin α.",
    "value": 0.6,
    "explanation": "sin α dương, sin²α = 1 − 16/25 = 9/25.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 1,
      "item": "45"
    },
    "sample": false,
    "options": [
      "−3/5",
      "4/5",
      "1/2",
      "3/5"
    ],
    "answer": 3,
    "optionExpressions": [
      "-3/5",
      "4/5",
      "1/2",
      "3/5"
    ]
  },
  {
    "id": "toan-11-1-12-46-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "P = sin(a + π/4)sin(a − π/4) = k cos 2a. Tìm k.",
    "value": -0.5,
    "explanation": "P = [cos(π/2) − cos 2a]/2 = −cos 2a/2.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 2,
      "item": "46"
    },
    "sample": false,
    "options": [
      "1/2",
      "0",
      "−1/2",
      "−1/3"
    ],
    "answer": 2,
    "optionExpressions": [
      "1/2",
      "0",
      "-1/2",
      "-1/3"
    ]
  },
  {
    "id": "toan-11-1-12-50a-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "tan α = −4/5, 3π/2 < α < 2π. Tính sin α.",
    "value": -0.6246950475544243,
    "explanation": "Phần tư IV: cos dương, sin âm. Từ tan = −4/5 suy ra sin = −4/√41.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 2,
      "item": "50a"
    },
    "sample": false,
    "options": [
      "−(−4/√(41))",
      "−4/√(41)",
      "2×(−4/√(41))",
      "(−4/√(41))/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-(-4/sqrt(41))",
      "-4/sqrt(41)",
      "2*(-4/sqrt(41))",
      "(-4/sqrt(41))/2"
    ]
  },
  {
    "id": "toan-11-1-12-50b-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "tan α = −4/5, 3π/2 < α < 2π. Tính cos α.",
    "value": 0.7808688094430304,
    "explanation": "cos α = 1/√(1 + tan²α) = 5/√41.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 2,
      "item": "50b"
    },
    "sample": false,
    "options": [
      "5/√(41)",
      "−(5/√(41))",
      "2×(5/√(41))",
      "(5/√(41))/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "5/sqrt(41)",
      "-(5/sqrt(41))",
      "2*(5/sqrt(41))",
      "(5/sqrt(41))/2"
    ]
  },
  {
    "id": "toan-11-1-12-52-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "sin α = 1/3, π/2 < α < π. Tính cos α.",
    "value": -0.9428090415820635,
    "explanation": "Cos âm; cos²α = 8/9 nên cos α = −2√2/3.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 2,
      "item": "52"
    },
    "sample": false,
    "options": [
      "−(−2×√(2)/3)",
      "2×(−2×√(2)/3)",
      "(−2×√(2)/3)/2",
      "−2×√(2)/3"
    ],
    "answer": 3,
    "optionExpressions": [
      "-(-2*sqrt(2)/3)",
      "2*(-2*sqrt(2)/3)",
      "(-2*sqrt(2)/3)/2",
      "-2*sqrt(2)/3"
    ]
  },
  {
    "id": "toan-11-1-12-53-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Tính giá trị lượng giác",
    "kind": "choice",
    "prompt": "Cho tan x = 2. Tính P = (3sin x − cos x)/(sin x + 2cos x).",
    "value": 1.25,
    "explanation": "Chia tử mẫu cho cos x: P = (3tan x − 1)/(tan x + 2) = 5/4.",
    "hint": "Xét dấu theo góc phần tư rồi dùng sin²α + cos²α = 1.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 2.pdf",
      "page": 2,
      "item": "53"
    },
    "sample": false,
    "options": [
      "−5/4",
      "3/2",
      "5/4",
      "1"
    ],
    "answer": 2,
    "optionExpressions": [
      "-5/4",
      "3/2",
      "5/4",
      "1"
    ]
  },
  {
    "id": "toan-11-1-11-1-4b-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Đổi đơn vị",
    "kind": "choice",
    "prompt": "Đổi 1000° sang radian. Tìm hệ số k trong α = kπ.",
    "value": 5.555555555555555,
    "explanation": "α = 1000π/180 rad nên k = 1000/180.",
    "hint": "Dùng 180° = π rad.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 1.pdf",
      "page": 2,
      "item": "1-4b"
    },
    "sample": false,
    "verification": {
      "kind": "degree",
      "degrees": 1000
    },
    "options": [
      "−50/9",
      "50/9",
      "17/3",
      "5"
    ],
    "answer": 1,
    "optionExpressions": [
      "-50/9",
      "50/9",
      "17/3",
      "5"
    ]
  },
  {
    "id": "toan-11-1-11-1-1d-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Đổi đơn vị",
    "kind": "choice",
    "prompt": "Đổi 5π/18 rad sang độ. Số đo theo độ là:",
    "value": 50,
    "explanation": "Số đo độ = (5π/18) × 180/π = 50°.",
    "hint": "Nhân số đo radian với 180/π.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 1.pdf",
      "page": 1,
      "item": "1-1d"
    },
    "sample": false,
    "verification": {
      "kind": "radian",
      "radians": 0.8726646259971648
    },
    "options": [
      "50",
      "−50",
      "51",
      "25"
    ],
    "answer": 0,
    "optionExpressions": [
      "50",
      "-50",
      "51",
      "25"
    ]
  },
  {
    "id": "toan-11-1-11-1-3c-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Đổi đơn vị",
    "kind": "choice",
    "prompt": "Đổi π/10 rad sang độ. Số đo theo độ là:",
    "value": 18,
    "explanation": "Số đo độ = (π/10) × 180/π = 18°.",
    "hint": "Nhân số đo radian với 180/π.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 1.pdf",
      "page": 2,
      "item": "1-3c"
    },
    "sample": false,
    "verification": {
      "kind": "radian",
      "radians": 0.3141592653589793
    },
    "options": [
      "−18",
      "19",
      "9",
      "18"
    ],
    "answer": 3,
    "optionExpressions": [
      "-18",
      "19",
      "9",
      "18"
    ]
  },
  {
    "id": "toan-11-1-11-2-1b-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Độ dài cung",
    "kind": "choice",
    "prompt": "Đường tròn bán kính 36 m có góc ở tâm 51°. Tính độ dài cung (m).",
    "value": 32.044245066615886,
    "explanation": "Dùng l = Rα với α tính bằng radian. Kết quả 10,2π m.",
    "hint": "Đổi sang radian nếu góc cho theo độ.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 1.pdf",
      "page": 3,
      "item": "2-1b"
    },
    "sample": false,
    "options": [
      "−(10.2×π)",
      "2×(10.2×π)",
      "10.2×π",
      "(10.2×π)/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-(10.2*pi)",
      "2*(10.2*pi)",
      "10.2*pi",
      "(10.2*pi)/2"
    ]
  },
  {
    "id": "toan-11-1-11-2-1c-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Độ dài cung",
    "kind": "choice",
    "prompt": "Đường tròn bán kính 36 m có góc ở tâm 1/3 rad. Tính độ dài cung (m).",
    "value": 12,
    "explanation": "Dùng l = Rα với α tính bằng radian. Kết quả 12 m.",
    "hint": "Đổi sang radian nếu góc cho theo độ.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 1.pdf",
      "page": 3,
      "item": "2-1c"
    },
    "sample": false,
    "options": [
      "−12",
      "12",
      "13",
      "6"
    ],
    "answer": 1,
    "optionExpressions": [
      "-12",
      "12",
      "13",
      "6"
    ]
  },
  {
    "id": "toan-11-1-11-2-3-mc-v2",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Góc và cung lượng giác",
    "kind": "choice",
    "prompt": "Hình vuông A₀A₁A₂A₃ nội tiếp đường tròn, theo chiều ngược kim đồng hồ. Góc dương nhỏ nhất từ OA₀ đến OA₃ bằng kπ. Tìm k.",
    "value": 1.5,
    "explanation": "Mỗi bước đỉnh là π/2; từ A₀ tới A₃ theo chiều dương là 3π/2.",
    "hint": "Một hình vuông chia đường tròn thành bốn cung bằng nhau.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT-Bổ trợ 1.pdf",
      "page": 3,
      "item": "2-3"
    },
    "sample": false,
    "options": [
      "3/2",
      "−3/2",
      "2",
      "1"
    ],
    "answer": 0,
    "optionExpressions": [
      "3/2",
      "-3/2",
      "2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-mc-15-sin",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Kiến thức cơ bản",
    "kind": "choice",
    "prompt": "Điểm M(x; y) biểu diễn góc α trên đường tròn đơn vị. sin α bằng:",
    "options": [
      "x",
      "y",
      "x/y",
      "y/x"
    ],
    "answer": 1,
    "explanation": "Sin là tung độ của điểm biểu diễn.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT- Bài 1 - Giá trị lượng giác của góc lượng giác.pdf",
      "page": 1,
      "item": "sin"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-15-sign",
    "lesson": "Bài 1 · Giá trị lượng giác",
    "type": "Kiến thức cơ bản",
    "kind": "choice",
    "prompt": "Ở góc phần tư III, hàm lượng giác nào dương?",
    "options": [
      "sin và cos",
      "cos và tan",
      "tan và cot",
      "sin và cot"
    ],
    "answer": 2,
    "explanation": "Ở phần tư III sin và cos cùng âm nên tan và cot dương.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT- Bài 1 - Giá trị lượng giác của góc lượng giác.pdf",
      "page": 2,
      "item": "sign"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-0-1a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "Rút gọn A = [√2 cos a − 2cos(π/4 + a)]/[−√2 sin a + 2sin(π/4 + a)]. Với mẫu khác 0, A = k tan a. Tìm k.",
    "value": 1,
    "explanation": "Khai triển hai công thức cộng: tử = √2 sin a, mẫu = √2 cos a. A = tan a.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "1a"
    },
    "sample": false,
    "options": [
      "−1",
      "1",
      "2",
      "1/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-1",
      "1",
      "2",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-0-1b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "Tính B = (tan a − tan b)cot(a − b) − tan a tan b tại các góc biểu thức xác định.",
    "value": 1,
    "explanation": "tan(a − b) = (tan a − tan b)/(1 + tan a tan b). Do đó tích đầu bằng 1 + tan a tan b; B = 1.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "1b"
    },
    "sample": false,
    "options": [
      "1",
      "−1",
      "2",
      "1/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "1",
      "-1",
      "2",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-0-2a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "sin x = 1/√3, 0 < x < π/2. Tính cos(x + π/3).",
    "value": -0.09175170953613704,
    "explanation": "cos x = √6/3. cos(x + π/3) = cos x/2 − √3 sin x/2 = √6/6 − 1/2.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "2a"
    },
    "sample": false,
    "options": [
      "−(√(6)/6−1/2)",
      "2×(√(6)/6−1/2)",
      "(√(6)/6−1/2)/2",
      "√(6)/6−1/2"
    ],
    "answer": 3,
    "optionExpressions": [
      "-(sqrt(6)/6-1/2)",
      "2*(sqrt(6)/6-1/2)",
      "(sqrt(6)/6-1/2)/2",
      "sqrt(6)/6-1/2"
    ]
  },
  {
    "id": "toan-11-1-0-2b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "cos a = 1/3, cos b = 1/4. Tính cos(a + b)cos(a − b).",
    "value": -0.8263888888888888,
    "explanation": "cos(a + b)cos(a − b) = cos²a + cos²b − 1 = 1/9 + 1/16 − 1 = −119/144.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "2b"
    },
    "sample": false,
    "options": [
      "119/144",
      "−59/72",
      "−119/144",
      "−119/145"
    ],
    "answer": 2,
    "optionExpressions": [
      "119/144",
      "-59/72",
      "-119/144",
      "-119/145"
    ]
  },
  {
    "id": "toan-11-1-0-3a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "sin α = 3/5, π/2 < α < π. Tính tan(α + π/3).",
    "value": 0.427157255525279,
    "explanation": "cos α = −4/5, tan α = −3/4. Dùng công thức cộng: (−3/4 + √3)/(1 + 3√3/4) = (48 − 25√3)/11.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "3a"
    },
    "sample": false,
    "options": [
      "−((48−25×√(3))/11)",
      "(48−25×√(3))/11",
      "2×((48−25×√(3))/11)",
      "((48−25×√(3))/11)/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-((48-25*sqrt(3))/11)",
      "(48-25*sqrt(3))/11",
      "2*((48-25*sqrt(3))/11)",
      "((48-25*sqrt(3))/11)/2"
    ]
  },
  {
    "id": "toan-11-1-0-3b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "sin α = −12/13, 3π/2 < α < 2π. Tính cos(π/3 − α).",
    "value": -0.6071003727240972,
    "explanation": "cos α = 5/13. cos(π/3 − α) = cos α/2 + √3 sin α/2 = (5 − 12√3)/26.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "3b"
    },
    "sample": false,
    "options": [
      "(5−12×√(3))/26",
      "−((5−12×√(3))/26)",
      "2×((5−12×√(3))/26)",
      "((5−12×√(3))/26)/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "(5-12*sqrt(3))/26",
      "-((5-12*sqrt(3))/26)",
      "2*((5-12*sqrt(3))/26)",
      "((5-12*sqrt(3))/26)/2"
    ]
  },
  {
    "id": "toan-11-1-0-3d-sin-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "sin a = 8/17, tan b = 5/12; a, b nhọn. Tính sin(a − b).",
    "value": 0.09502262443438914,
    "explanation": "cos a = 15/17; sin b = 5/13; cos b = 12/13. (8×12 − 15×5)/(17×13) = 21/221.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "3d-sin"
    },
    "sample": false,
    "options": [
      "−21/221",
      "22/221",
      "7/74",
      "21/221"
    ],
    "answer": 3,
    "optionExpressions": [
      "-21/221",
      "22/221",
      "7/74",
      "21/221"
    ]
  },
  {
    "id": "toan-11-1-0-3d-cos-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "sin a = 8/17, tan b = 5/12; a, b nhọn. Tính cos(a + b).",
    "value": 0.6334841628959276,
    "explanation": "cos a = 15/17; sin b = 5/13; cos b = 12/13. (15×12 − 8×5)/(17×13) = 140/221.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "3d-cos"
    },
    "sample": false,
    "options": [
      "−140/221",
      "141/221",
      "140/221",
      "70/111"
    ],
    "answer": 2,
    "optionExpressions": [
      "-140/221",
      "141/221",
      "140/221",
      "70/111"
    ]
  },
  {
    "id": "toan-11-1-0-3d-tan-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Công thức cộng",
    "kind": "choice",
    "prompt": "sin a = 8/17, tan b = 5/12; a, b nhọn. Tính tan(a + b).",
    "value": 1.2214285714285715,
    "explanation": "cos a = 15/17; sin b = 5/13; cos b = 12/13. (8/15 + 5/12)/(1 − (8/15)(5/12)) = 171/140.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2-Dạng 1. Công thức cộng.pdf",
      "page": 1,
      "item": "3d-tan"
    },
    "sample": false,
    "options": [
      "−171/140",
      "171/140",
      "43/35",
      "57/47"
    ],
    "answer": 1,
    "optionExpressions": [
      "-171/140",
      "171/140",
      "43/35",
      "57/47"
    ]
  },
  {
    "id": "toan-11-1-1-1a-sin-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "cos a = 5/13, 0 < a < π/2. Tính sin 2a.",
    "value": 0.7100591715976331,
    "explanation": "sin a = 12/13 ⇒ sin 2a = 2 × 5/13 × 12/13.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "1a-sin"
    },
    "sample": false,
    "options": [
      "120/169",
      "−120/169",
      "121/169",
      "12/17"
    ],
    "answer": 0,
    "optionExpressions": [
      "120/169",
      "-120/169",
      "121/169",
      "12/17"
    ]
  },
  {
    "id": "toan-11-1-1-1a-cos-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "cos a = 5/13, 0 < a < π/2. Tính cos 2a.",
    "value": -0.7041420118343196,
    "explanation": "cos 2a = 2cos²a − 1 = 50/169 − 1.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "1a-cos"
    },
    "sample": false,
    "options": [
      "119/169",
      "−118/169",
      "−7/10",
      "−119/169"
    ],
    "answer": 3,
    "optionExpressions": [
      "119/169",
      "-118/169",
      "-7/10",
      "-119/169"
    ]
  },
  {
    "id": "toan-11-1-1-1a-tan-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "cos a = 5/13, 0 < a < π/2. Tính tan 2a.",
    "value": -1.0084033613445378,
    "explanation": "tan 2a = sin 2a/cos 2a.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "1a-tan"
    },
    "sample": false,
    "options": [
      "120/119",
      "−1",
      "−120/119",
      "−1/119"
    ],
    "answer": 2,
    "optionExpressions": [
      "120/119",
      "-1",
      "-120/119",
      "-1/119"
    ]
  },
  {
    "id": "toan-11-1-1-1b-sin-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin a = 1/4, 0 < a < π/2. Tính sin 2a.",
    "value": 0.4841229182759271,
    "explanation": "cos a = √15/4 ⇒ sin 2a = √15/8.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "1b-sin"
    },
    "sample": false,
    "options": [
      "−(√(15)/8)",
      "√(15)/8",
      "2×(√(15)/8)",
      "(√(15)/8)/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-(sqrt(15)/8)",
      "sqrt(15)/8",
      "2*(sqrt(15)/8)",
      "(sqrt(15)/8)/2"
    ]
  },
  {
    "id": "toan-11-1-1-1b-cos-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin a = 1/4, 0 < a < π/2. Tính cos 2a.",
    "value": 0.875,
    "explanation": "cos 2a = 1 − 2sin²a = 1 − 2/16.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "1b-cos"
    },
    "sample": false,
    "options": [
      "7/8",
      "−7/8",
      "1",
      "7/9"
    ],
    "answer": 0,
    "optionExpressions": [
      "7/8",
      "-7/8",
      "1",
      "7/9"
    ]
  },
  {
    "id": "toan-11-1-1-1b-tan-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin a = 1/4, 0 < a < π/2. Tính tan 2a.",
    "value": 0.5532833351724882,
    "explanation": "Chia sin 2a = √15/8 cho cos 2a = 7/8.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "1b-tan"
    },
    "sample": false,
    "options": [
      "−(√(15)/7)",
      "2×(√(15)/7)",
      "(√(15)/7)/2",
      "√(15)/7"
    ],
    "answer": 3,
    "optionExpressions": [
      "-(sqrt(15)/7)",
      "2*(sqrt(15)/7)",
      "(sqrt(15)/7)/2",
      "sqrt(15)/7"
    ]
  },
  {
    "id": "toan-11-1-1-2-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin α = 3/5, π/2 < α < π. Tính E = sin 2α + tan 2α.",
    "value": -4.388571428571429,
    "explanation": "cos α = −4/5. sin 2α = −24/25, cos 2α = 7/25, tan 2α = −24/7. Cộng được −768/175.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "2"
    },
    "sample": false,
    "options": [
      "768/175",
      "−767/175",
      "−768/175",
      "−48/11"
    ],
    "answer": 2,
    "optionExpressions": [
      "768/175",
      "-767/175",
      "-768/175",
      "-48/11"
    ]
  },
  {
    "id": "toan-11-1-1-3a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "tan(x/2) = −2. Tính A = (3sin x + 4cos x)/(4cot x + 3tan x).",
    "value": -0.6857142857142857,
    "explanation": "sin x = 2t/(1+t²) = −4/5, cos x = (1−t²)/(1+t²) = −3/5. Tử = −24/5, mẫu = 7.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "3a"
    },
    "sample": false,
    "options": [
      "24/35",
      "−24/35",
      "−23/35",
      "−2/3"
    ],
    "answer": 1,
    "optionExpressions": [
      "24/35",
      "-24/35",
      "-23/35",
      "-2/3"
    ]
  },
  {
    "id": "toan-11-1-1-3b-cos-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin x = −4/5, 3π/2 < x < 2π. Tính cos(x/2).",
    "value": -0.8944271909999159,
    "explanation": "cos x = 3/5; x/2 ở phần tư II nên cos(x/2) = −√((1+3/5)/2).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "3b-cos"
    },
    "sample": false,
    "options": [
      "−2/√(5)",
      "−(−2/√(5))",
      "2×(−2/√(5))",
      "(−2/√(5))/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "-2/sqrt(5)",
      "-(-2/sqrt(5))",
      "2*(-2/sqrt(5))",
      "(-2/sqrt(5))/2"
    ]
  },
  {
    "id": "toan-11-1-1-3b-sin-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin x = −4/5, 3π/2 < x < 2π. Tính sin(x/2).",
    "value": 0.4472135954999579,
    "explanation": "x/2 ở phần tư II: sin(x/2) = √((1−3/5)/2) = 1/√5.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "3b-sin"
    },
    "sample": false,
    "options": [
      "−(1/√(5))",
      "2×(1/√(5))",
      "(1/√(5))/2",
      "1/√(5)"
    ],
    "answer": 3,
    "optionExpressions": [
      "-(1/sqrt(5))",
      "2*(1/sqrt(5))",
      "(1/sqrt(5))/2",
      "1/sqrt(5)"
    ]
  },
  {
    "id": "toan-11-1-1-3c-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "tan x = 1/15. Tính B = sin 2x/(1 + tan 2x).",
    "value": 0.11706501289108773,
    "explanation": "sin 2x = 15/113, tan 2x = 15/112. B = (15/113)/(127/112) = 1680/14351.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "3c"
    },
    "sample": false,
    "options": [
      "−(1680/14351)",
      "2×(1680/14351)",
      "1680/14351",
      "(1680/14351)/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-(1680/14351)",
      "2*(1680/14351)",
      "1680/14351",
      "(1680/14351)/2"
    ]
  },
  {
    "id": "toan-11-1-1-3d-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "tan(x/2) = −1/2. Tính C = (2sin 2x − cos 2x)/(tan 2x + cos 2x).",
    "value": -0.5208711433756806,
    "explanation": "sin x = −4/5, cos x = 3/5. sin 2x = −24/25, cos 2x = −7/25, tan 2x = 24/7. C = (−41/25)/(551/175) = −287/551.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "3d"
    },
    "sample": false,
    "options": [
      "287/551",
      "−287/551",
      "−286/551",
      "−287/552"
    ],
    "answer": 1,
    "optionExpressions": [
      "287/551",
      "-287/551",
      "-286/551",
      "-287/552"
    ]
  },
  {
    "id": "toan-11-1-1-4a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin⁴x + cos⁴x = 3/4 + k cos 4x với mọi x. Tìm k.",
    "value": 0.25,
    "explanation": "sin⁴x + cos⁴x = 1 − 2sin²x cos²x = 1 − sin²2x/2 = 3/4 + cos4x/4.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "4a"
    },
    "sample": false,
    "options": [
      "1/4",
      "−1/4",
      "1/2",
      "1/5"
    ],
    "answer": 0,
    "optionExpressions": [
      "1/4",
      "-1/4",
      "1/2",
      "1/5"
    ]
  },
  {
    "id": "toan-11-1-1-4b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin⁶x + cos⁶x = 5/8 + k cos 4x với mọi x. Tìm k.",
    "value": 0.375,
    "explanation": "Đặt u = sin²x, v = cos²x; u³+v³ = (u+v)³−3uv(u+v) = 1−3sin²2x/4 = 5/8+3cos4x/8.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "4b"
    },
    "sample": false,
    "options": [
      "−3/8",
      "1/2",
      "1/3",
      "3/8"
    ],
    "answer": 3,
    "optionExpressions": [
      "-3/8",
      "1/2",
      "1/3",
      "3/8"
    ]
  },
  {
    "id": "toan-11-1-1-4c-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Nhân đôi và hạ bậc",
    "kind": "choice",
    "prompt": "sin x cos³x − cos x sin³x = k sin 4x. Tìm k.",
    "value": 0.25,
    "explanation": "Vế trái = sin x cos x(cos²x − sin²x) = sin2x cos2x/2 = sin4x/4.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 2. Nhân đôi.pdf",
      "page": 1,
      "item": "4c"
    },
    "sample": false,
    "options": [
      "−1/4",
      "1/2",
      "1/4",
      "1/5"
    ],
    "answer": 2,
    "optionExpressions": [
      "-1/4",
      "1/2",
      "1/4",
      "1/5"
    ]
  },
  {
    "id": "toan-11-1-2-1-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Với mọi x, 4cos x cos(π/3 − x)cos(π/3 + x) = cos(kx), k nguyên dương. Tìm k.",
    "value": 3,
    "explanation": "2cos(π/3−x)cos(π/3+x) = cos(2π/3)+cos2x = cos2x−1/2. Nhân 2cosx rồi dùng tích thành tổng được cos3x.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "1"
    },
    "sample": false,
    "options": [
      "−3",
      "3",
      "4",
      "3/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-3",
      "3",
      "4",
      "3/2"
    ]
  },
  {
    "id": "toan-11-1-2-2-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Tính hằng số S = cos²x + cos²(2π/3 + x) + cos²(2π/3 − x).",
    "value": 1.5,
    "explanation": "Hạ bậc ba bình phương. Tổng các hạng cos triệt tiêu, còn 3/2.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "2"
    },
    "sample": false,
    "options": [
      "3/2",
      "−3/2",
      "2",
      "1"
    ],
    "answer": 0,
    "optionExpressions": [
      "3/2",
      "-3/2",
      "2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-2-3a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "2sin(a+b)cos(a−b) = sin(2a) + k sin(2b). Tìm k.",
    "value": 1,
    "explanation": "Dùng 2sin u cos v = sin(u+v)+sin(u−v).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3a"
    },
    "sample": false,
    "options": [
      "−1",
      "2",
      "1/2",
      "1"
    ],
    "answer": 3,
    "optionExpressions": [
      "-1",
      "2",
      "1/2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-2-3b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "2cos(a+b)cos(a−b) = cos(2a) + k cos(2b). Tìm k.",
    "value": 1,
    "explanation": "Dùng 2cos u cos v = cos(u+v)+cos(u−v).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3b"
    },
    "sample": false,
    "options": [
      "−1",
      "2",
      "1",
      "1/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-1",
      "2",
      "1",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-2-3c-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Viết 4sin3x sin2x cosx = A + Bcos2x + Ccos4x + Dcos6x. Tìm A.",
    "value": 1,
    "explanation": "4sin3x sin2x cosx = 2sin3x(sin3x+sinx) = 1+cos2x−cos4x−cos6x.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3c"
    },
    "sample": false,
    "options": [
      "−1",
      "1",
      "2",
      "1/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-1",
      "1",
      "2",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-2-3d-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "4sin(13x/2)cos x cos(x/2) = sin(px)+sin(qx)+sin(rx)+sin(sx), với p,q,r,s là số nguyên dương. Tính p+q+r+s.",
    "value": 26,
    "explanation": "Dùng 2cosx cos(x/2)=cos(3x/2)+cos(x/2), thu được sin8x+sin5x+sin7x+sin6x. Tổng là 26.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3d"
    },
    "sample": false,
    "options": [
      "26",
      "−26",
      "27",
      "13"
    ],
    "answer": 0,
    "optionExpressions": [
      "26",
      "-26",
      "27",
      "13"
    ]
  },
  {
    "id": "toan-11-1-2-3e-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "sin(x+30°)cos(x−30°) = A sin2x + B. Tìm A.",
    "value": 0.5,
    "explanation": "Tích thành tổng: [sin2x + sin60°]/2 = sin2x/2 + √3/4.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3e"
    },
    "sample": false,
    "options": [
      "−1/2",
      "1",
      "1/3",
      "1/2"
    ],
    "answer": 3,
    "optionExpressions": [
      "-1/2",
      "1",
      "1/3",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-2-3f-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Tính sin(π/5)sin(2π/5).",
    "value": 0.5590169943749475,
    "explanation": "sin36°sin72° = [cos36°−cos108°]/2 = √5/4.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3f"
    },
    "sample": false,
    "options": [
      "−(√(5)/4)",
      "2×(√(5)/4)",
      "√(5)/4",
      "(√(5)/4)/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-(sqrt(5)/4)",
      "2*(sqrt(5)/4)",
      "sqrt(5)/4",
      "(sqrt(5)/4)/2"
    ]
  },
  {
    "id": "toan-11-1-2-3g-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Viết 2sin x sin2x sin3x = A sin2x + B sin4x + C sin6x. Tìm C.",
    "value": -0.5,
    "explanation": "2sinx sin2x sin3x = (sin2x+sin4x−sin6x)/2.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3g"
    },
    "sample": false,
    "options": [
      "1/2",
      "−1/2",
      "0",
      "−1/3"
    ],
    "answer": 1,
    "optionExpressions": [
      "1/2",
      "-1/2",
      "0",
      "-1/3"
    ]
  },
  {
    "id": "toan-11-1-2-3h-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Viết 8cos x sin2x sin3x = A + Bcos2x + Ccos4x + Dcos6x. Tìm A.",
    "value": 2,
    "explanation": "8cosx sin2x sin3x = 4cosx(cosx−cos5x) = 2+2cos2x−2cos4x−2cos6x.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3h"
    },
    "sample": false,
    "options": [
      "2",
      "−2",
      "3",
      "1"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "-2",
      "3",
      "1"
    ]
  },
  {
    "id": "toan-11-1-2-3i-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Viết sin(x+π/6)sin(x−π/6)cos2x = A + Bcos2x + Ccos4x. Tìm A.",
    "value": -0.25,
    "explanation": "Tích hai sin bằng 1/4−cos2x/2. Nhân cos2x và hạ bậc được −1/4+cos2x/4−cos4x/4.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3i"
    },
    "sample": false,
    "options": [
      "1/4",
      "0",
      "−1/5",
      "−1/4"
    ],
    "answer": 3,
    "optionExpressions": [
      "1/4",
      "0",
      "-1/5",
      "-1/4"
    ]
  },
  {
    "id": "toan-11-1-2-3k-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tích thành tổng",
    "kind": "choice",
    "prompt": "Với mọi a,b,c: 4cos(a−b)cos(b−c)cos(c−a) = K + cos2(a−b)+cos2(b−c)+cos2(c−a). Tìm K.",
    "value": 1,
    "explanation": "Đặt u=a−b, v=b−c thì c−a=−(u+v). Dùng tích thành tổng hai lần thu được hằng số 1.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2 - Dạng 3. Tích thành tổng.pdf",
      "page": 1,
      "item": "3k"
    },
    "sample": false,
    "options": [
      "−1",
      "2",
      "1",
      "1/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-1",
      "2",
      "1",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-3-1a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "sin x + sin2x + sin3x = (1 + k cos x)sin2x. Tìm k.",
    "value": 2,
    "explanation": "sinx+sin3x = 2sin2x cosx.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "1a"
    },
    "sample": false,
    "options": [
      "−2",
      "2",
      "3",
      "1"
    ],
    "answer": 1,
    "optionExpressions": [
      "-2",
      "2",
      "3",
      "1"
    ]
  },
  {
    "id": "toan-11-1-3-1b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "sinx+sin3x+sin5x+sin7x = k sin4x cos2x cosx. Tìm k.",
    "value": 4,
    "explanation": "Ghép sinx+sin7x và sin3x+sin5x: 2sin4x(cos3x+cosx)=4sin4x cos2x cosx.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "1b"
    },
    "sample": false,
    "options": [
      "4",
      "−4",
      "5",
      "2"
    ],
    "answer": 0,
    "optionExpressions": [
      "4",
      "-4",
      "5",
      "2"
    ]
  },
  {
    "id": "toan-11-1-3-1c-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "cosx+cos2x+cos3x+cos4x = k cos(5x/2)cosx cos(x/2). Tìm k.",
    "value": 4,
    "explanation": "Ghép cosx+cos4x và cos2x+cos3x rồi dùng cosu+cosv.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "1c"
    },
    "sample": false,
    "options": [
      "−4",
      "5",
      "2",
      "4"
    ],
    "answer": 3,
    "optionExpressions": [
      "-4",
      "5",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-3-1d-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "Khi biểu thức xác định, (cosx+cosy)/(cosx−cosy) = k cot((x+y)/2)cot((x−y)/2). Tìm k.",
    "value": -1,
    "explanation": "Tử = 2cos((x+y)/2)cos((x−y)/2), mẫu = −2sin((x+y)/2)sin((x−y)/2).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "1d"
    },
    "sample": false,
    "options": [
      "1",
      "0",
      "−1",
      "−1/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "0",
      "-1",
      "-1/2"
    ]
  },
  {
    "id": "toan-11-1-3-2a-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "cos5x cos3x + sin7x sinx = cos2x cos(kx) với mọi x, k nguyên dương. Tìm k.",
    "value": 4,
    "explanation": "Tích thành tổng cho [cos2x+cos8x+cos6x−cos8x]/2 = cos2x cos4x.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "2a"
    },
    "sample": false,
    "options": [
      "−4",
      "4",
      "5",
      "2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-4",
      "4",
      "5",
      "2"
    ]
  },
  {
    "id": "toan-11-1-3-2b-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "sin5x − 2sinx(cos2x+cos4x) = sin(kx) với mọi x, k nguyên dương. Tìm k.",
    "value": 1,
    "explanation": "2sinx cos2x = sin3x−sinx, 2sinx cos4x = sin5x−sin3x. Rút gọn còn sinx.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "2b"
    },
    "sample": false,
    "options": [
      "1",
      "−1",
      "2",
      "1/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "1",
      "-1",
      "2",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-3-2c-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "cos5x cosx + sin3x sinx = cos2x cos(kx), k nguyên dương. Tìm k.",
    "value": 4,
    "explanation": "Vế trái = [cos6x+cos4x+cos2x−cos4x]/2 = cos4x cos2x.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "2c"
    },
    "sample": false,
    "options": [
      "−4",
      "5",
      "2",
      "4"
    ],
    "answer": 3,
    "optionExpressions": [
      "-4",
      "5",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-3-2d-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "2(sin a cos2a − sin2a cos3a) + sin5a = sin(ka), k nguyên dương. Tìm k.",
    "value": 3,
    "explanation": "Đổi tích thành tổng, các hạng sin a và sin5a triệt tiêu, còn sin3a.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "2d"
    },
    "sample": false,
    "options": [
      "−3",
      "4",
      "3",
      "3/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-3",
      "4",
      "3",
      "3/2"
    ]
  },
  {
    "id": "toan-11-1-3-3-mc-v2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Tổng thành tích",
    "kind": "choice",
    "prompt": "M = sin5x − 2sinx(cos4x+cos2x). Tính M khi x = π/6.",
    "value": 0.5,
    "explanation": "Rút gọn như công thức tổng thành tích: M = sinx. Tại π/6, M = 1/2.",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 2- Dạng 4. Tổng thành tích .pdf",
      "page": 1,
      "item": "3"
    },
    "sample": false,
    "options": [
      "−1/2",
      "1/2",
      "1",
      "1/3"
    ],
    "answer": 1,
    "optionExpressions": [
      "-1/2",
      "1/2",
      "1",
      "1/3"
    ]
  },
  {
    "id": "toan-11-1-mc-10-1",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Công thức nào đúng?",
    "options": [
      "cos(a+b)=cosa cosb+sina sinb",
      "cos(a+b)=cosa cosb−sina sinb",
      "cos(a+b)=sina cosb+cosa sinb",
      "cos(a+b)=sina sinb−cosa cosb"
    ],
    "answer": 1,
    "explanation": "Cos của tổng có dấu trừ.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "1"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-2",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sin(a−b) bằng:",
    "options": [
      "sina cosb+cosa sinb",
      "cosa cosb−sina sinb",
      "cosa sinb−sina cosb",
      "sina cosb−cosa sinb"
    ],
    "answer": 3,
    "explanation": "Sin của hiệu bằng sin a cos b trừ cos a sin b.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "2"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-3",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Công thức tan(a−b) đúng là:",
    "options": [
      "(tana−tanb)/(1+tana tanb)",
      "(tana+tanb)/(1+tana tanb)",
      "(tana−tanb)/(1−tana tanb)",
      "(1+tana tanb)/(tana−tanb)"
    ],
    "answer": 0,
    "explanation": "Mẫu số có dấu cộng.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "3"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-7",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sinα=4/5, α ở phần tư I; cosβ=−5/13, β ở phần tư II. Tính cos(α−β).",
    "options": [
      "−63/65",
      "−33/65",
      "63/65",
      "33/65"
    ],
    "answer": 3,
    "explanation": "cosα=3/5, sinβ=12/13. cos(α−β)=−15/65+48/65=33/65.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "7"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-9",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Công thức sin2a đúng là:",
    "options": [
      "sin²a−cos²a",
      "sina+cosa",
      "2sina cosa",
      "2sin²a"
    ],
    "answer": 2,
    "explanation": "Sin nhân đôi bằng 2sin a cos a.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "9"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-10",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Biểu thức bằng cos2a là:",
    "options": [
      "1+2sin²a",
      "1−2sin²a",
      "2sina cosa",
      "2sin²a−1"
    ],
    "answer": 1,
    "explanation": "cos2a = 1−2sin²a.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "10"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-11",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Công thức hạ bậc đúng là:",
    "options": [
      "cos²a=(1−cos2a)/2",
      "sin²a=(1+cos2a)/2",
      "cos²a=1+cos2a",
      "cos²a=(1+cos2a)/2"
    ],
    "answer": 3,
    "explanation": "cos2a=2cos²a−1.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "11"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-12",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "cosα=−3/5 và π/2<α<π. Khi đó sin2α bằng:",
    "options": [
      "−24/25",
      "−7/25",
      "7/25",
      "24/25"
    ],
    "answer": 0,
    "explanation": "sinα=4/5 nên sin2α=2(−3/5)(4/5).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "12"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-14",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "tanα=1/3 và tan2α xác định. Tính tan2α.",
    "options": [
      "2/3",
      "3/4",
      "4/3",
      "3/2"
    ],
    "answer": 1,
    "explanation": "tan2α=2t/(1−t²)=(2/3)/(8/9)=3/4.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "14"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-15",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sinα+cosα=1/2. Tính sin2α.",
    "options": [
      "3/4",
      "−1/4",
      "1/4",
      "−3/4"
    ],
    "answer": 3,
    "explanation": "Bình phương: 1+sin2α=1/4.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "15"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-16",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sinα−cosα=1/3. Tính sin2α.",
    "options": [
      "−8/9",
      "8/9",
      "1/9",
      "−1/9"
    ],
    "answer": 1,
    "explanation": "Bình phương: 1−sin2α=1/9.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 1,
      "item": "16"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-17",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Công thức tích thành tổng đúng là:",
    "options": [
      "cosacosb=[cos(a−b)−cos(a+b)]/2",
      "cosacosb=[cos(a−b)+cos(a+b)]/2",
      "cosacosb=[sin(a−b)+sin(a+b)]/2",
      "cosacosb=cos(a−b)+cos(a+b)"
    ],
    "answer": 1,
    "explanation": "Tích hai cos bằng nửa tổng hai cos.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "17"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-18",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sin a sin b bằng:",
    "options": [
      "[cos(a+b)+cos(a−b)]/2",
      "[sin(a−b)−sin(a+b)]/2",
      "[cos(a+b)−cos(a−b)]/2",
      "[cos(a−b)−cos(a+b)]/2"
    ],
    "answer": 3,
    "explanation": "Tích hai sin bằng nửa hiệu cos của hiệu và cos của tổng.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "18"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-21",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sin5x cos2x bằng:",
    "options": [
      "(sin7x−sin3x)/2",
      "(sin7x+sin3x)/2",
      "sin7x+sin3x",
      "(cos3x−cos7x)/2"
    ],
    "answer": 1,
    "explanation": "Dùng 2sin u cos v = sin(u+v)+sin(u−v).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "21"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-22",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "s(t)=2sin(100t)cos(4t) bằng:",
    "options": [
      "sin100t+sin4t",
      "2sin104t+2sin96t",
      "cos96t−cos104t",
      "sin104t+sin96t"
    ],
    "answer": 3,
    "explanation": "Áp dụng tích thành tổng với u=100t,v=4t.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "22"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-24",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Công thức cosu+cosv đúng là:",
    "options": [
      "2cos((u+v)/2)cos((u−v)/2)",
      "2sin((u+v)/2)sin((u−v)/2)",
      "−2sin((u+v)/2)sin((u−v)/2)",
      "2cos((u+v)/2)sin((u−v)/2)"
    ],
    "answer": 0,
    "explanation": "Tổng hai cos bằng hai lần tích cos trung bình cộng và cos nửa hiệu.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "24"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-25",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "cosu−cosv bằng:",
    "options": [
      "2cos((u+v)/2)cos((u−v)/2)",
      "2sin((u+v)/2)sin((u−v)/2)",
      "−2sin((u+v)/2)sin((u−v)/2)",
      "2cos((u+v)/2)sin((u−v)/2)"
    ],
    "answer": 2,
    "explanation": "Hiệu hai cos có hệ số −2.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "25"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-26",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "cos20°+cos40° bằng:",
    "options": [
      "2cos20°cos10°",
      "√3 cos10°",
      "√3 sin10°",
      "2sin30°cos10°"
    ],
    "answer": 1,
    "explanation": "Tổng bằng 2cos30°cos10°=√3cos10°.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "26"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-27",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "sin75°−sin15° bằng:",
    "options": [
      "1/2",
      "√3/2",
      "√2",
      "√2/2"
    ],
    "answer": 3,
    "explanation": "Hiệu bằng 2cos45°sin30°=√2/2.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "27"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-10-30",
    "lesson": "Bài 2 · Công thức lượng giác",
    "type": "Bổ trợ công thức",
    "kind": "choice",
    "prompt": "Hai dao động x₁(t)=3cos(4t+π/6), x₂(t)=3cos(4t−π/6). Biên độ của x₁+x₂ là:",
    "options": [
      "3",
      "6",
      "3√3/2",
      "3√3"
    ],
    "answer": 3,
    "explanation": "Tổng = 6cos4t cos(π/6)=3√3cos4t.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "BT-Bổ trợ - Bài 2.pdf",
      "page": 2,
      "item": "30"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-9-115max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = sin4x − 3. Xét trên ℝ.",
    "value": -2,
    "explanation": "−1 ≤ sin4x ≤ 1. Giá trị nhỏ nhất: -4; lớn nhất: -2.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "115max"
    },
    "sample": false,
    "options": [
      "−2",
      "2",
      "−1",
      "−3"
    ],
    "answer": 0,
    "optionExpressions": [
      "-2",
      "2",
      "-1",
      "-3"
    ]
  },
  {
    "id": "toan-11-1-9-116max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 3sin2x − 5. Xét trên ℝ.",
    "value": -2,
    "explanation": "−1 ≤ sin2x ≤ 1. Giá trị nhỏ nhất: -8; lớn nhất: -2.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "116max"
    },
    "sample": false,
    "options": [
      "2",
      "−1",
      "−3",
      "−2"
    ],
    "answer": 3,
    "optionExpressions": [
      "2",
      "-1",
      "-3",
      "-2"
    ]
  },
  {
    "id": "toan-11-1-9-117max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = sin2x. Xét trên ℝ.",
    "value": 1,
    "explanation": "Hàm sin nhận mọi giá trị trong [−1;1]. Giá trị nhỏ nhất: -1; lớn nhất: 1.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "117max"
    },
    "sample": false,
    "options": [
      "−1",
      "2",
      "1",
      "1/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-1",
      "2",
      "1",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-9-118min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 2cos²x − 2√3 sinx cosx + 1. Xét trên ℝ.",
    "value": 0,
    "explanation": "Biến đổi thành 2 + cos2x − √3sin2x, biên độ 2. Giá trị nhỏ nhất: 0; lớn nhất: 4.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "118min"
    },
    "sample": false,
    "options": [
      "1",
      "0",
      "−1",
      "2"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "0",
      "-1",
      "2"
    ]
  },
  {
    "id": "toan-11-1-9-118max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2cos²x − 2√3 sinx cosx + 1. Xét trên ℝ.",
    "value": 4,
    "explanation": "Biến đổi thành 2 + cos2x − √3sin2x, biên độ 2. Giá trị nhỏ nhất: 0; lớn nhất: 4.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "118max"
    },
    "sample": false,
    "options": [
      "4",
      "−4",
      "5",
      "2"
    ],
    "answer": 0,
    "optionExpressions": [
      "4",
      "-4",
      "5",
      "2"
    ]
  },
  {
    "id": "toan-11-1-9-119min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 2cos²x − sinx + 3. Xét trên ℝ.",
    "value": 2,
    "explanation": "Đặt t=sinx ∈ [−1;1], y=5−t−2t²; đỉnh tại t=−1/4. Giá trị nhỏ nhất: 2; lớn nhất: 5.125.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "119min"
    },
    "sample": false,
    "options": [
      "−2",
      "3",
      "1",
      "2"
    ],
    "answer": 3,
    "optionExpressions": [
      "-2",
      "3",
      "1",
      "2"
    ]
  },
  {
    "id": "toan-11-1-9-119max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2cos²x − sinx + 3. Xét trên ℝ.",
    "value": 5.125,
    "explanation": "Đặt t=sinx ∈ [−1;1], y=5−t−2t²; đỉnh tại t=−1/4. Giá trị nhỏ nhất: 2; lớn nhất: 5.125.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "119max"
    },
    "sample": false,
    "options": [
      "−41/8",
      "21/4",
      "41/8",
      "41/9"
    ],
    "answer": 2,
    "optionExpressions": [
      "-41/8",
      "21/4",
      "41/8",
      "41/9"
    ]
  },
  {
    "id": "toan-11-1-9-121max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = cos6x + 5. Xét trên ℝ.",
    "value": 6,
    "explanation": "−1 ≤ cos6x ≤ 1. Giá trị nhỏ nhất: 4; lớn nhất: 6.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "121max"
    },
    "sample": false,
    "options": [
      "−6",
      "6",
      "7",
      "3"
    ],
    "answer": 1,
    "optionExpressions": [
      "-6",
      "6",
      "7",
      "3"
    ]
  },
  {
    "id": "toan-11-1-9-122max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2 − sinx. Xét trên ℝ.",
    "value": 3,
    "explanation": "−1 ≤ sinx ≤ 1. Giá trị nhỏ nhất: 1; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "122max"
    },
    "sample": false,
    "options": [
      "3",
      "−3",
      "4",
      "3/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "3",
      "-3",
      "4",
      "3/2"
    ]
  },
  {
    "id": "toan-11-1-9-124min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 3sinx + 4cosx − 1. Xét trên ℝ.",
    "value": -6,
    "explanation": "Biên độ √(3²+4²)=5. Giá trị nhỏ nhất: -6; lớn nhất: 4.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "124min"
    },
    "sample": false,
    "options": [
      "6",
      "−5",
      "−3",
      "−6"
    ],
    "answer": 3,
    "optionExpressions": [
      "6",
      "-5",
      "-3",
      "-6"
    ]
  },
  {
    "id": "toan-11-1-9-124max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 3sinx + 4cosx − 1. Xét trên ℝ.",
    "value": 4,
    "explanation": "Biên độ √(3²+4²)=5. Giá trị nhỏ nhất: -6; lớn nhất: 4.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "124max"
    },
    "sample": false,
    "options": [
      "−4",
      "5",
      "4",
      "2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-4",
      "5",
      "4",
      "2"
    ]
  },
  {
    "id": "toan-11-1-9-125min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 4sinx cosx + 1. Xét trên ℝ.",
    "value": -1,
    "explanation": "y=2sin2x+1. Giá trị nhỏ nhất: -1; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "125min"
    },
    "sample": false,
    "options": [
      "1",
      "−1",
      "0",
      "−1/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "-1",
      "0",
      "-1/2"
    ]
  },
  {
    "id": "toan-11-1-9-125max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 4sinx cosx + 1. Xét trên ℝ.",
    "value": 3,
    "explanation": "y=2sin2x+1. Giá trị nhỏ nhất: -1; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "125max"
    },
    "sample": false,
    "options": [
      "3",
      "−3",
      "4",
      "3/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "3",
      "-3",
      "4",
      "3/2"
    ]
  },
  {
    "id": "toan-11-1-9-126min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = sin2024x + √3cos2024x. Xét trên ℝ.",
    "value": -2,
    "explanation": "Biên độ √(1+3)=2. Giá trị nhỏ nhất: -2; lớn nhất: 2.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "126min"
    },
    "sample": false,
    "options": [
      "2",
      "−1",
      "−3",
      "−2"
    ],
    "answer": 3,
    "optionExpressions": [
      "2",
      "-1",
      "-3",
      "-2"
    ]
  },
  {
    "id": "toan-11-1-9-126max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = sin2024x + √3cos2024x. Xét trên ℝ.",
    "value": 2,
    "explanation": "Biên độ √(1+3)=2. Giá trị nhỏ nhất: -2; lớn nhất: 2.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "126max"
    },
    "sample": false,
    "options": [
      "−2",
      "3",
      "2",
      "1"
    ],
    "answer": 2,
    "optionExpressions": [
      "-2",
      "3",
      "2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-9-128min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 3sin(x+3π/4)+1. Xét trên ℝ.",
    "value": -2,
    "explanation": "Biên độ 3, tịnh tiến lên 1. Giá trị nhỏ nhất: -2; lớn nhất: 4.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "128min"
    },
    "sample": false,
    "options": [
      "2",
      "−2",
      "−1",
      "−3"
    ],
    "answer": 1,
    "optionExpressions": [
      "2",
      "-2",
      "-1",
      "-3"
    ]
  },
  {
    "id": "toan-11-1-9-128max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 3sin(x+3π/4)+1. Xét trên ℝ.",
    "value": 4,
    "explanation": "Biên độ 3, tịnh tiến lên 1. Giá trị nhỏ nhất: -2; lớn nhất: 4.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 1,
      "item": "128max"
    },
    "sample": false,
    "options": [
      "4",
      "−4",
      "5",
      "2"
    ],
    "answer": 0,
    "optionExpressions": [
      "4",
      "-4",
      "5",
      "2"
    ]
  },
  {
    "id": "toan-11-1-9-129min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = cos²x + sinx + 9, x ∈ [0;π].",
    "value": 10,
    "explanation": "t=sinx ∈ [0;1], y=10+t−t²=41/4−(t−1/2)². Giá trị nhỏ nhất: 10; lớn nhất: 10.25.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "129min"
    },
    "sample": false,
    "options": [
      "−10",
      "11",
      "5",
      "10"
    ],
    "answer": 3,
    "optionExpressions": [
      "-10",
      "11",
      "5",
      "10"
    ]
  },
  {
    "id": "toan-11-1-9-129max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = cos²x + sinx + 9, x ∈ [0;π].",
    "value": 10.25,
    "explanation": "t=sinx ∈ [0;1], y=10+t−t²=41/4−(t−1/2)². Giá trị nhỏ nhất: 10; lớn nhất: 10.25.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "129max"
    },
    "sample": false,
    "options": [
      "−41/4",
      "21/2",
      "41/4",
      "41/5"
    ],
    "answer": 2,
    "optionExpressions": [
      "-41/4",
      "21/2",
      "41/4",
      "41/5"
    ]
  },
  {
    "id": "toan-11-1-9-130min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 6cos2x − 7, x ∈ [−π/3;π/6].",
    "value": -10,
    "explanation": "2x ∈ [−2π/3;π/3] nên cos2x ∈ [−1/2;1]. Giá trị nhỏ nhất: -10; lớn nhất: -1.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "130min"
    },
    "sample": false,
    "options": [
      "10",
      "−10",
      "−9",
      "−5"
    ],
    "answer": 1,
    "optionExpressions": [
      "10",
      "-10",
      "-9",
      "-5"
    ]
  },
  {
    "id": "toan-11-1-9-130max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 6cos2x − 7, x ∈ [−π/3;π/6].",
    "value": -1,
    "explanation": "2x ∈ [−2π/3;π/3] nên cos2x ∈ [−1/2;1]. Giá trị nhỏ nhất: -10; lớn nhất: -1.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "130max"
    },
    "sample": false,
    "options": [
      "−1",
      "1",
      "0",
      "−1/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "-1",
      "1",
      "0",
      "-1/2"
    ]
  },
  {
    "id": "toan-11-1-9-131min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 3sin3x + 2. Xét trên ℝ.",
    "value": -1,
    "explanation": "−1 ≤ sin3x ≤ 1. Giá trị nhỏ nhất: -1; lớn nhất: 5.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "131min"
    },
    "sample": false,
    "options": [
      "1",
      "0",
      "−1/2",
      "−1"
    ],
    "answer": 3,
    "optionExpressions": [
      "1",
      "0",
      "-1/2",
      "-1"
    ]
  },
  {
    "id": "toan-11-1-9-131max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 3sin3x + 2. Xét trên ℝ.",
    "value": 5,
    "explanation": "−1 ≤ sin3x ≤ 1. Giá trị nhỏ nhất: -1; lớn nhất: 5.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "131max"
    },
    "sample": false,
    "options": [
      "−5",
      "6",
      "5",
      "5/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-5",
      "6",
      "5",
      "5/2"
    ]
  },
  {
    "id": "toan-11-1-9-133min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 2√(sinx+1) − 3. Xét trên ℝ.",
    "value": -3,
    "explanation": "0 ≤ sinx+1 ≤ 2; giá trị lớn nhất là 2√2−3. Giá trị nhỏ nhất: -3; lớn nhất: -0.1716.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "133min"
    },
    "sample": false,
    "options": [
      "3",
      "−3",
      "−2",
      "−3/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "3",
      "-3",
      "-2",
      "-3/2"
    ]
  },
  {
    "id": "toan-11-1-9-133max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2√(sinx+1) − 3. Xét trên ℝ.",
    "value": -0.1715728752538097,
    "explanation": "0 ≤ sinx+1 ≤ 2; giá trị lớn nhất là 2√2−3. Giá trị nhỏ nhất: -3; lớn nhất: -0.1716.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "133max"
    },
    "sample": false,
    "options": [
      "2×√(2)−3",
      "−(2×√(2)−3)",
      "2×(2×√(2)−3)",
      "(2×√(2)−3)/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "2*sqrt(2)-3",
      "-(2*sqrt(2)-3)",
      "2*(2*sqrt(2)-3)",
      "(2*sqrt(2)-3)/2"
    ]
  },
  {
    "id": "toan-11-1-9-134min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 2sin²x + 3sin2x − 4cos²x. Xét trên ℝ.",
    "value": -5.242640687119286,
    "explanation": "y=−1−3cos2x+3sin2x, biên độ 3√2. Giá trị nhỏ nhất: -5.2426; lớn nhất: 3.2426.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "134min"
    },
    "sample": false,
    "options": [
      "−(−1−3×√(2))",
      "2×(−1−3×√(2))",
      "(−1−3×√(2))/2",
      "−1−3×√(2)"
    ],
    "answer": 3,
    "optionExpressions": [
      "-(-1-3*sqrt(2))",
      "2*(-1-3*sqrt(2))",
      "(-1-3*sqrt(2))/2",
      "-1-3*sqrt(2)"
    ]
  },
  {
    "id": "toan-11-1-9-134max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2sin²x + 3sin2x − 4cos²x. Xét trên ℝ.",
    "value": 3.2426406871192857,
    "explanation": "y=−1−3cos2x+3sin2x, biên độ 3√2. Giá trị nhỏ nhất: -5.2426; lớn nhất: 3.2426.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "134max"
    },
    "sample": false,
    "options": [
      "−(−1+3×√(2))",
      "2×(−1+3×√(2))",
      "−1+3×√(2)",
      "(−1+3×√(2))/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-(-1+3*sqrt(2))",
      "2*(-1+3*sqrt(2))",
      "-1+3*sqrt(2)",
      "(-1+3*sqrt(2))/2"
    ]
  },
  {
    "id": "toan-11-1-9-135min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = cos(2x+π/3) − cos2x. Xét trên ℝ.",
    "value": -1,
    "explanation": "y=−sin(2x+π/6). Giá trị nhỏ nhất: -1; lớn nhất: 1.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "135min"
    },
    "sample": false,
    "options": [
      "1",
      "−1",
      "0",
      "−1/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "-1",
      "0",
      "-1/2"
    ]
  },
  {
    "id": "toan-11-1-9-135max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = cos(2x+π/3) − cos2x. Xét trên ℝ.",
    "value": 1,
    "explanation": "y=−sin(2x+π/6). Giá trị nhỏ nhất: -1; lớn nhất: 1.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "135max"
    },
    "sample": false,
    "options": [
      "1",
      "−1",
      "2",
      "1/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "1",
      "-1",
      "2",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-9-136min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 2cos²x + 5sinx + 1, x ∈ [π/3;5π/6].",
    "value": 5,
    "explanation": "t=sinx ∈ [1/2;1], y=3+5t−2t² tăng trên khoảng này. Giá trị nhỏ nhất: 5; lớn nhất: 6.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "136min"
    },
    "sample": false,
    "options": [
      "−5",
      "6",
      "5/2",
      "5"
    ],
    "answer": 3,
    "optionExpressions": [
      "-5",
      "6",
      "5/2",
      "5"
    ]
  },
  {
    "id": "toan-11-1-9-136max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2cos²x + 5sinx + 1, x ∈ [π/3;5π/6].",
    "value": 6,
    "explanation": "t=sinx ∈ [1/2;1], y=3+5t−2t² tăng trên khoảng này. Giá trị nhỏ nhất: 5; lớn nhất: 6.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "136max"
    },
    "sample": false,
    "options": [
      "−6",
      "7",
      "6",
      "3"
    ],
    "answer": 2,
    "optionExpressions": [
      "-6",
      "7",
      "6",
      "3"
    ]
  },
  {
    "id": "toan-11-1-9-138min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 2sin²x − 2sin⁴x − 2sin2x + 1. Xét trên ℝ.",
    "value": -0.5,
    "explanation": "u=sin2x ∈ [−1;1], y=u²/2−2u+1 giảm trên [−1;1]. Giá trị nhỏ nhất: -0.5; lớn nhất: 3.5.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "138min"
    },
    "sample": false,
    "options": [
      "1/2",
      "−1/2",
      "0",
      "−1/3"
    ],
    "answer": 1,
    "optionExpressions": [
      "1/2",
      "-1/2",
      "0",
      "-1/3"
    ]
  },
  {
    "id": "toan-11-1-9-138max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 2sin²x − 2sin⁴x − 2sin2x + 1. Xét trên ℝ.",
    "value": 3.5,
    "explanation": "u=sin2x ∈ [−1;1], y=u²/2−2u+1 giảm trên [−1;1]. Giá trị nhỏ nhất: -0.5; lớn nhất: 3.5.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "138max"
    },
    "sample": false,
    "options": [
      "7/2",
      "−7/2",
      "4",
      "7/3"
    ],
    "answer": 0,
    "optionExpressions": [
      "7/2",
      "-7/2",
      "4",
      "7/3"
    ]
  },
  {
    "id": "toan-11-1-9-139min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = cos2x + 4cosx + 1. Xét trên ℝ.",
    "value": 0,
    "explanation": "y=2(cosx+1)². Giá trị nhỏ nhất: 0; lớn nhất: 8.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "139min"
    },
    "sample": false,
    "options": [
      "1",
      "−1",
      "2",
      "0"
    ],
    "answer": 3,
    "optionExpressions": [
      "1",
      "-1",
      "2",
      "0"
    ]
  },
  {
    "id": "toan-11-1-9-139max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = cos2x + 4cosx + 1. Xét trên ℝ.",
    "value": 8,
    "explanation": "y=2(cosx+1)². Giá trị nhỏ nhất: 0; lớn nhất: 8.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "139max"
    },
    "sample": false,
    "options": [
      "−8",
      "9",
      "8",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "-8",
      "9",
      "8",
      "4"
    ]
  },
  {
    "id": "toan-11-1-9-140min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 4cos2x − 1, x ∈ [−π/3;π/6].",
    "value": -3,
    "explanation": "cos2x ∈ [−1/2;1]. Giá trị nhỏ nhất: -3; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "140min"
    },
    "sample": false,
    "options": [
      "3",
      "−3",
      "−2",
      "−3/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "3",
      "-3",
      "-2",
      "-3/2"
    ]
  },
  {
    "id": "toan-11-1-9-140max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 4cos2x − 1, x ∈ [−π/3;π/6].",
    "value": 3,
    "explanation": "cos2x ∈ [−1/2;1]. Giá trị nhỏ nhất: -3; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "140max"
    },
    "sample": false,
    "options": [
      "3",
      "−3",
      "4",
      "3/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "3",
      "-3",
      "4",
      "3/2"
    ]
  },
  {
    "id": "toan-11-1-9-141min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = sin²x − cosx + 2. Xét trên ℝ.",
    "value": 1,
    "explanation": "t=cosx ∈ [−1;1], y=3−t−t²=13/4−(t+1/2)². Giá trị nhỏ nhất: 1; lớn nhất: 3.25.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "141min"
    },
    "sample": false,
    "options": [
      "−1",
      "2",
      "1/2",
      "1"
    ],
    "answer": 3,
    "optionExpressions": [
      "-1",
      "2",
      "1/2",
      "1"
    ]
  },
  {
    "id": "toan-11-1-9-141max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = sin²x − cosx + 2. Xét trên ℝ.",
    "value": 3.25,
    "explanation": "t=cosx ∈ [−1;1], y=3−t−t²=13/4−(t+1/2)². Giá trị nhỏ nhất: 1; lớn nhất: 3.25.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "141max"
    },
    "sample": false,
    "options": [
      "−13/4",
      "7/2",
      "13/4",
      "13/5"
    ],
    "answer": 2,
    "optionExpressions": [
      "-13/4",
      "7/2",
      "13/4",
      "13/5"
    ]
  },
  {
    "id": "toan-11-1-9-142min-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị nhỏ nhất của y = 8sin2x − 5. Xét trên ℝ.",
    "value": -13,
    "explanation": "−1 ≤ sin2x ≤ 1. Giá trị nhỏ nhất: -13; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "142min"
    },
    "sample": false,
    "options": [
      "13",
      "−13",
      "−12",
      "−13/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "13",
      "-13",
      "-12",
      "-13/2"
    ]
  },
  {
    "id": "toan-11-1-9-142max-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Giá trị lớn nhất, nhỏ nhất",
    "kind": "choice",
    "prompt": "Tìm giá trị lớn nhất của y = 8sin2x − 5. Xét trên ℝ.",
    "value": 3,
    "explanation": "−1 ≤ sin2x ≤ 1. Giá trị nhỏ nhất: -13; lớn nhất: 3.",
    "hint": "Đưa về một hàm sin/cos hoặc đặt t = sinx, cosx.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT- Bài 3 GTLN, GTNN HS lượng giác.pdf",
      "page": 2,
      "item": "142max"
    },
    "sample": false,
    "options": [
      "3",
      "−3",
      "4",
      "3/2"
    ],
    "answer": 0,
    "optionExpressions": [
      "3",
      "-3",
      "4",
      "3/2"
    ]
  },
  {
    "id": "toan-11-1-mc-13-1",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Tính chất hàm số",
    "kind": "choice",
    "prompt": "Tập xác định của y=tanx là:",
    "options": [
      "ℝ",
      "ℝ \\ {kπ}",
      "ℝ \\ {π/2+kπ}",
      "[−1;1]"
    ],
    "answer": 2,
    "explanation": "Điều kiện cosx ≠ 0, k ∈ ℤ.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 1,
      "item": "1"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-13-2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Tính chất hàm số",
    "kind": "choice",
    "prompt": "Hàm số nào là hàm chẵn?",
    "options": [
      "sinx",
      "cosx",
      "tanx",
      "cotx"
    ],
    "answer": 1,
    "explanation": "cos(−x)=cosx.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 2,
      "item": "2"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-13-3",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Tính chất hàm số",
    "kind": "choice",
    "prompt": "Tập giá trị của y=sinx là:",
    "options": [
      "ℝ",
      "[0;1]",
      "(−1;1)",
      "[−1;1]"
    ],
    "answer": 3,
    "explanation": "−1 ≤ sinx ≤ 1 và hai đầu mút đều đạt được.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 3,
      "item": "3"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-13-4",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Tính chất hàm số",
    "kind": "choice",
    "prompt": "Tập xác định của y=cotx là:",
    "options": [
      "ℝ \\ {kπ}",
      "ℝ",
      "ℝ \\ {π/2+kπ}",
      "[−1;1]"
    ],
    "answer": 0,
    "explanation": "Điều kiện sinx ≠ 0, k ∈ ℤ.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 4,
      "item": "4"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-13-5",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Tính chất hàm số",
    "kind": "choice",
    "prompt": "Hàm số y=sinx đồng biến trên khoảng:",
    "options": [
      "(π/2;3π/2)",
      "(−π/2;π/2)",
      "(0;π)",
      "(π;2π)"
    ],
    "answer": 1,
    "explanation": "Sin tăng từ −1 đến 1 trên (−π/2;π/2).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 5,
      "item": "5"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-13-6-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Chu kì",
    "kind": "choice",
    "prompt": "Chu kì cơ bản của y=sin3x bằng kπ. Tìm k.",
    "value": 0.6666666666666666,
    "explanation": "Chu kì sin/cos: 2π/|a|; tan/cot: π/|a|, với a là hệ số của x.",
    "hint": "Đọc hệ số của x.",
    "difficulty": "Trung bình",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 2,
      "item": "6"
    },
    "sample": false,
    "options": [
      "−2/3",
      "1",
      "2/3",
      "1/2"
    ],
    "answer": 2,
    "optionExpressions": [
      "-2/3",
      "1",
      "2/3",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-13-7-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Chu kì",
    "kind": "choice",
    "prompt": "Chu kì cơ bản của y=cos(2x+1) bằng kπ. Tìm k.",
    "value": 1,
    "explanation": "Chu kì sin/cos: 2π/|a|; tan/cot: π/|a|, với a là hệ số của x.",
    "hint": "Đọc hệ số của x.",
    "difficulty": "Trung bình",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 2,
      "item": "7"
    },
    "sample": false,
    "options": [
      "−1",
      "1",
      "2",
      "1/2"
    ],
    "answer": 1,
    "optionExpressions": [
      "-1",
      "1",
      "2",
      "1/2"
    ]
  },
  {
    "id": "toan-11-1-13-8-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Chu kì",
    "kind": "choice",
    "prompt": "Chu kì cơ bản của y=tan(4x−1) bằng kπ. Tìm k.",
    "value": 0.25,
    "explanation": "Chu kì sin/cos: 2π/|a|; tan/cot: π/|a|, với a là hệ số của x.",
    "hint": "Đọc hệ số của x.",
    "difficulty": "Trung bình",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 2,
      "item": "8"
    },
    "sample": false,
    "options": [
      "1/4",
      "−1/4",
      "1/2",
      "1/5"
    ],
    "answer": 0,
    "optionExpressions": [
      "1/4",
      "-1/4",
      "1/2",
      "1/5"
    ]
  },
  {
    "id": "toan-11-1-13-9-mc-v2",
    "lesson": "Bài 3 · Hàm số lượng giác",
    "type": "Chu kì",
    "kind": "choice",
    "prompt": "Chu kì cơ bản của y=cot(x/2) bằng kπ. Tìm k.",
    "value": 2,
    "explanation": "Chu kì sin/cos: 2π/|a|; tan/cot: π/|a|, với a là hệ số của x.",
    "hint": "Đọc hệ số của x.",
    "difficulty": "Trung bình",
    "source": {
      "file": "LT - Bài 3. Hàm số lượng giác.pdf",
      "page": 2,
      "item": "9"
    },
    "sample": false,
    "options": [
      "−2",
      "3",
      "1",
      "2"
    ],
    "answer": 3,
    "optionExpressions": [
      "-2",
      "3",
      "1",
      "2"
    ]
  },
  {
    "id": "toan-11-1-7-1-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình sin(x−π/2)=sin(2π/5) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 1,
      "item": "1"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.827433388230814,
        3.4557519189487724
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": -1.5707963267948966,
        "m": 0.9510565162951535
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-2-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình sin(x−π/6)=sin(π/9) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 1,
      "item": "2"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.8726646259971647,
        3.316125578789226
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": -0.5235987755982988,
        "m": 0.3420201433256687
      }
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-4-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2sinx=−1 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 1,
      "item": "4"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        3.6651914291880923,
        5.759586531581287
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": 0,
        "m": -0.5
      }
    },
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-5-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình sin(x+π/5)=−1 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 1,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 1 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 1,
      "item": "5"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        4.084070449666731
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": 0.6283185307179586,
        "m": -1
      }
    },
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "answer": 3,
    "optionExpressions": [
      "0",
      "2",
      "3",
      "1"
    ]
  },
  {
    "id": "toan-11-1-7-6-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2sin(x−π/6)+√2=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 2,
      "item": "6"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        4.4505895925855405,
        6.021385919380437
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": -0.5235987755982988,
        "m": -0.7071067811865476
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-7-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2sin(x−π/3)−√3=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 2,
      "item": "7"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.0943951023931953,
        3.141592653589793
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": -1.0471975511965976,
        "m": 0.8660254037844386
      }
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-10-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 5sinx=1 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 2,
      "item": "10"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.2013579207903308,
        2.9402347327994622
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": 0,
        "m": 0.2
      }
    },
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-11-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình sin(x−2)=2/3 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "sin u = sin α ⇒ u = α + 2kπ hoặc u = π − α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 3,
      "item": "11"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.7297276562269666,
        4.411864997362827
      ],
      "trig": {
        "kind": "sin",
        "a": 1,
        "b": -2,
        "m": 0.6666666666666666
      }
    },
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answer": 3,
    "optionExpressions": [
      "1",
      "3",
      "4",
      "2"
    ]
  },
  {
    "id": "toan-11-1-7-12-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình cos(x+2π/5)=cos(π/7) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 3,
      "item": "12"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        4.577749295230841,
        5.475347196256497
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": 1.2566370614359172,
        "m": 0.9009688679024191
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-13-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình cos(x−2π/9)=cos(π/18) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 3,
      "item": "13"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.5235987755982986,
        0.872664625997165
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": -0.6981317007977318,
        "m": 0.984807753012208
      }
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-14-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2cosx=−1 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 3,
      "item": "14"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.0943951023931957,
        4.1887902047863905
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": 0,
        "m": -0.5
      }
    },
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-15-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình cos(x−π/8)=1 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 1,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 1 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 3,
      "item": "15"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.39269908169872414
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": -0.39269908169872414,
        "m": 1
      }
    },
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "answer": 3,
    "optionExpressions": [
      "0",
      "2",
      "3",
      "1"
    ]
  },
  {
    "id": "toan-11-1-7-16-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2cos(x−π/6)−√3=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 4,
      "item": "16"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0,
        1.0471975511965979
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": -0.5235987755982988,
        "m": 0.8660254037844386
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-17-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2cos(x+π/6)+√2=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 4,
      "item": "17"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        1.8325957145940461,
        3.4033920413889427
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": 0.5235987755982988,
        "m": -0.7071067811865476
      }
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-18-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 3cosx+√3=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 4,
      "item": "18"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.186276035465284,
        4.096909271714303
      ],
      "trig": {
        "kind": "cos",
        "a": 1,
        "b": 0,
        "m": -0.5773502691896257
      }
    },
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-19-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 5cos(2x−1)−3=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 4,
    "explanation": "cos u = cos α ⇒ u = ±α + 2kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 4 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 4,
      "item": "19"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.03635239099919385,
        0.9636476090008061,
        3.177945044588987,
        4.105240262590599
      ],
      "trig": {
        "kind": "cos",
        "a": 2,
        "b": -1,
        "m": 0.6
      }
    },
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answer": 3,
    "optionExpressions": [
      "3",
      "5",
      "6",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-20-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình tan(x+3π/4)=tan(π/7) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "tan u = tan α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 4,
      "item": "20"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        1.2341971139102759,
        4.375789767500069
      ],
      "trig": {
        "kind": "tan",
        "a": 1,
        "b": 2.356194490192345,
        "m": 0.4815746188075286
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-21-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình tan(x+4π/15)=tan(5π/36) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "tan u = tan α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 5,
      "item": "21"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.7401669256310974,
        5.8817595792208905
      ],
      "trig": {
        "kind": "tan",
        "a": 1,
        "b": 0.8377580409572781,
        "m": 0.4663076581549986
      }
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-22-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình tanx=√3 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "tan u = tan α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 5,
      "item": "22"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        1.0471975511965976,
        4.1887902047863905
      ],
      "trig": {
        "kind": "tan",
        "a": 1,
        "b": 0,
        "m": 1.7320508075688772
      }
    },
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-23-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình tan(π/6−x)=cot(π/6) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "tan u = tan α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 5,
      "item": "23"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.6179938779914944,
        5.759586531581288
      ],
      "trig": {
        "kind": "tan",
        "a": -1,
        "b": 0.5235987755982988,
        "m": 1.7320508075688772
      }
    },
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answer": 3,
    "optionExpressions": [
      "1",
      "3",
      "4",
      "2"
    ]
  },
  {
    "id": "toan-11-1-7-24-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình tan(x−π/6)+1=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "tan u = tan α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 5,
      "item": "24"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.8797932657906435,
        6.021385919380437
      ],
      "trig": {
        "kind": "tan",
        "a": 1,
        "b": -0.5235987755982988,
        "m": -1
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-25-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình 2tanx+5=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "tan u = tan α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 5,
      "item": "25"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        1.9513027039072615,
        5.092895357497055
      ],
      "trig": {
        "kind": "tan",
        "a": 1,
        "b": 0,
        "m": -2.5
      }
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-26-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình cot(x−π/8)=cot(π/5) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cot u = cot α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 6,
      "item": "26"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        1.0210176124166828,
        4.162610266006476
      ],
      "trig": {
        "kind": "cot",
        "a": 1,
        "b": -0.39269908169872414,
        "m": 1.3763819204711738
      }
    },
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "optionExpressions": [
      "2",
      "1",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-27-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình cot(x+7π/45)=cot(π/15) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cot u = cot α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 6,
      "item": "27"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.8623399732707,
        6.003932626860494
      ],
      "trig": {
        "kind": "cot",
        "a": 1,
        "b": 0.4886921905584123,
        "m": 4.704630109478455
      }
    },
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answer": 3,
    "optionExpressions": [
      "1",
      "3",
      "4",
      "2"
    ]
  },
  {
    "id": "toan-11-1-7-28-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình √3cotx+3=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cot u = cot α ⇒ u = α + kπ. Giải theo x rồi giữ các nghiệm thuộc [0;2π). Có 2 nghiệm phân biệt (k ∈ ℤ).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 6,
      "item": "28"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        2.6179938779914944,
        5.759586531581288
      ],
      "trig": {
        "kind": "cot",
        "a": 1,
        "b": 0,
        "m": -1.7320508075688772
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-3-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình sinx(cosx+2)=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "cosx+2 luôn dương; sinx=0 ⇒ x=kπ. Có 2 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 1,
      "item": "3"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0,
        3.141592653589793
      ]
    },
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "optionExpressions": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": "toan-11-1-7-8-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình sin3x=cos(x−π/3) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 6,
    "explanation": "Đổi cos thành sin. Hai họ nghiệm: x=5π/24+kπ/2 hoặc x=π/12+kπ. Có 6 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 2,
      "item": "8"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.2617993877991494,
        0.6544984694978736,
        2.2252947962927703,
        3.4033920413889427,
        3.796091123087667,
        5.366887449882563
      ]
    },
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "answer": 0,
    "optionExpressions": [
      "6",
      "5",
      "7",
      "8"
    ]
  },
  {
    "id": "toan-11-1-7-9-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình cơ bản",
    "kind": "choice",
    "prompt": "Phương trình cos(2x+π/5)=sin(x−π/4) có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 4,
    "explanation": "Đổi sin thành cos. Hai họ: x=11π/60+2kπ/3 hoặc x=−19π/20+2kπ. Có 4 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "BT - Bài 4. Dạng cơ bản.pdf",
      "page": 2,
      "item": "9"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.5759586531581287,
        2.670353755551324,
        3.2986722862692828,
        4.764748857944519
      ]
    },
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answer": 3,
    "optionExpressions": [
      "3",
      "5",
      "6",
      "4"
    ]
  },
  {
    "id": "toan-11-1-6-1-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình 2sin²x−3sinx+1=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 3,
    "explanation": "(2sinx−1)(sinx−1)=0. Có 3 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 1,
      "item": "1"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.5235987755982989,
        1.5707963267948966,
        2.617993877991494
      ],
      "reduced": {
        "kind": "sin",
        "values": [
          1,
          0.5
        ]
      }
    },
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answer": 2,
    "optionExpressions": [
      "2",
      "4",
      "3",
      "5"
    ]
  },
  {
    "id": "toan-11-1-6-2-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình cos²x+3cosx+2=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 1,
    "explanation": "(cosx+1)(cosx+2)=0; loại cosx=−2. Có 1 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 1,
      "item": "2"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        3.141592653589793
      ],
      "reduced": {
        "kind": "cos",
        "values": [
          -1
        ]
      }
    },
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "optionExpressions": [
      "0",
      "1",
      "2",
      "3"
    ]
  },
  {
    "id": "toan-11-1-6-3-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình 2tan²x−3tanx+1=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 4,
    "explanation": "Điều kiện cosx≠0. (2tanx−1)(tanx−1)=0. Có 4 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 1,
      "item": "3"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.4636476090008061,
        0.7853981633974483,
        3.6052402625905993,
        3.9269908169872414
      ],
      "reduced": {
        "kind": "tan",
        "values": [
          1,
          0.5
        ]
      }
    },
    "options": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answer": 0,
    "optionExpressions": [
      "4",
      "3",
      "5",
      "6"
    ]
  },
  {
    "id": "toan-11-1-6-4-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình cot²x−cotx−12=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 4,
    "explanation": "Điều kiện sinx≠0. (cotx−4)(cotx+3)=0. Có 4 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 1,
      "item": "4"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.24497866312686414,
        2.819842099193151,
        3.3865713167166573,
        5.961434752782944
      ],
      "reduced": {
        "kind": "cot",
        "values": [
          4,
          -3
        ]
      }
    },
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answer": 3,
    "optionExpressions": [
      "3",
      "5",
      "6",
      "4"
    ]
  },
  {
    "id": "toan-11-1-6-5-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình 8cos²x+2sinx−7=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 4,
    "explanation": "Đặt t=sinx: 8t²−2t−1=0 ⇒ t=1/2 hoặc −1/4. Có 4 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 2,
      "item": "5"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.5235987755982989,
        2.617993877991494,
        3.394272908731872,
        6.030505052037507
      ],
      "reduced": {
        "kind": "sin",
        "values": [
          0.5,
          -0.25
        ]
      }
    },
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "answer": 2,
    "optionExpressions": [
      "3",
      "5",
      "4",
      "6"
    ]
  },
  {
    "id": "toan-11-1-6-6-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình 2cos2x+cosx=1 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 3,
    "explanation": "Đặt t=cosx: 4t²+t−3=0 ⇒ t=3/4 hoặc −1. Có 3 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 2,
      "item": "6"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.7227342478134157,
        3.141592653589793,
        5.56045105936617
      ],
      "reduced": {
        "kind": "cos",
        "values": [
          0.75,
          -1
        ]
      }
    },
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "optionExpressions": [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    "id": "toan-11-1-6-7-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình sin²x−2cosx+2=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 1,
    "explanation": "Đặt t=cosx: t²+2t−3=0; loại t=−3. Có 1 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 2,
      "item": "7"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0
      ],
      "reduced": {
        "kind": "cos",
        "values": [
          1
        ]
      }
    },
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answer": 0,
    "optionExpressions": [
      "1",
      "0",
      "2",
      "3"
    ]
  },
  {
    "id": "toan-11-1-6-8-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình cos2x+5sinx+2=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "Đặt t=sinx: 2t²−5t−3=0; loại t=3. Có 2 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 2,
      "item": "8"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        3.6651914291880923,
        5.759586531581287
      ],
      "reduced": {
        "kind": "sin",
        "values": [
          -0.5
        ]
      }
    },
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answer": 3,
    "optionExpressions": [
      "1",
      "3",
      "4",
      "2"
    ]
  },
  {
    "id": "toan-11-1-6-9-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình 2cos²x−sin²x−4cosx+2=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 3,
    "explanation": "Đặt t=cosx: 3t²−4t+1=0. Có 3 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 3,
      "item": "9"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0,
        1.2309594173407747,
        5.0522258898388115
      ],
      "reduced": {
        "kind": "cos",
        "values": [
          1,
          0.3333333333333333
        ]
      }
    },
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answer": 2,
    "optionExpressions": [
      "2",
      "4",
      "3",
      "5"
    ]
  },
  {
    "id": "toan-11-1-6-10-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình sinx−2cos²x+1=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 3,
    "explanation": "Đặt t=sinx: 2t²+t−1=0. Có 3 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 3,
      "item": "10"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.5235987755982989,
        2.617993877991494,
        4.71238898038469
      ],
      "reduced": {
        "kind": "sin",
        "values": [
          0.5,
          -1
        ]
      }
    },
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "optionExpressions": [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    "id": "toan-11-1-6-11-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình cos2x+sin²x+2cosx+1=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 1,
    "explanation": "Phương trình tương đương (cosx+1)²=0. Có 1 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 3,
      "item": "11"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        3.141592653589793
      ],
      "reduced": {
        "kind": "cos",
        "values": [
          -1
        ]
      }
    },
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answer": 0,
    "optionExpressions": [
      "1",
      "0",
      "2",
      "3"
    ]
  },
  {
    "id": "toan-11-1-6-12-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình tan²x+tanx=0 có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 4,
    "explanation": "Điều kiện cosx≠0, tanx(tanx+1)=0. Có 4 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 3,
      "item": "12"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0,
        2.356194490192345,
        3.141592653589793,
        5.497787143782138
      ],
      "reduced": {
        "kind": "tan",
        "values": [
          0,
          -1
        ]
      }
    },
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answer": 3,
    "optionExpressions": [
      "3",
      "5",
      "6",
      "4"
    ]
  },
  {
    "id": "toan-11-1-6-13-mc-v2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Phương trình bậc hai",
    "kind": "choice",
    "prompt": "Phương trình 1/cos²x=tanx+tan²x có bao nhiêu nghiệm phân biệt trong [0; 2π)?",
    "value": 2,
    "explanation": "Điều kiện cosx≠0. Dùng 1/cos²x=1+tan²x suy ra tanx=1. Có 2 nghiệm trong [0;2π).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong [0;2π) và loại nghiệm trùng.",
    "difficulty": "Trung bình",
    "source": {
      "file": "Bài 4- Dạng. PT lượng giác bậc 2.pdf",
      "page": 4,
      "item": "13"
    },
    "sample": false,
    "verification": {
      "kind": "roots",
      "roots": [
        0.7853981633974483,
        3.9269908169872414
      ],
      "reduced": {
        "kind": "tan",
        "values": [
          1
        ]
      }
    },
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 2,
    "optionExpressions": [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    "id": "toan-11-1-mc-14-lt1",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Lý thuyết phương trình",
    "kind": "choice",
    "prompt": "Phương trình sinx=m có nghiệm khi:",
    "options": [
      "m≥0",
      "|m|≤1",
      "m>1",
      "Mọi m∈ℝ"
    ],
    "answer": 1,
    "explanation": "Tập giá trị của sin là [−1;1].",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 4 - phương trình lượng giác.pdf",
      "page": 1,
      "item": "lt1"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-14-lt2",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Lý thuyết phương trình",
    "kind": "choice",
    "prompt": "Nghiệm của cosx=1 là:",
    "options": [
      "x=kπ",
      "x=π/2+kπ",
      "x=2kπ",
      "x=π+2kπ"
    ],
    "answer": 2,
    "explanation": "Cos bằng 1 tại x=2kπ, k∈ℤ.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 4 - phương trình lượng giác.pdf",
      "page": 2,
      "item": "lt2"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-14-lt3",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Lý thuyết phương trình",
    "kind": "choice",
    "prompt": "Nghiệm của tanx=tanα là:",
    "options": [
      "x=α+kπ",
      "x=−α+kπ",
      "x=α+2kπ",
      "x=π/2+α+kπ"
    ],
    "answer": 0,
    "explanation": "Tang có chu kì π; giả thiết tanα xác định.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 4 - phương trình lượng giác.pdf",
      "page": 3,
      "item": "lt3"
    },
    "sample": false
  },
  {
    "id": "toan-11-1-mc-14-lt4",
    "lesson": "Bài 4 · Phương trình lượng giác",
    "type": "Lý thuyết phương trình",
    "kind": "choice",
    "prompt": "Nghiệm của cotx=0 là:",
    "options": [
      "x=kπ",
      "x=2kπ",
      "x=π/2+2kπ",
      "x=π/2+kπ"
    ],
    "answer": 3,
    "explanation": "Cot bằng 0 khi cosx=0 và sinx≠0.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "difficulty": "Dễ",
    "source": {
      "file": "LT - Bài 4 - phương trình lượng giác.pdf",
      "page": 4,
      "item": "lt4"
    },
    "sample": false
  }
];
