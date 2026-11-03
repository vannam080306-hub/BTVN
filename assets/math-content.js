// Generated LaTeX presentation fields. Run node scripts/build-math-content.mjs.
export const mathContent = {
  "toan-10-1-1": {
    "prompt": "Phát biểu nào sau đây là một mệnh đề?",
    "options": [
      "Số \\(2\\) là số nguyên tố.",
      "Bạn đã làm bài chưa?",
      "Hãy mở sách trang \\(10\\).",
      "Số này đẹp quá!"
    ],
    "explanation": "Mệnh đề là một khẳng định có thể xác định là đúng hoặc sai. “Số \\(2\\) là số nguyên tố” là một khẳng định đúng.",
    "hint": "Tìm câu khẳng định có giá trị đúng hoặc sai xác định.",
    "guide": {
      "formulas": [
        "P\\lor\\neg P"
      ],
      "symbols": [
        [
          "P",
          "Một mệnh đề: câu khẳng định có giá trị đúng hoặc sai xác định."
        ],
        [
          "\\neg P",
          "Phủ định của \\(P\\)."
        ],
        [
          "\\lor",
          "Phép hoặc; trong hai mệnh đề \\(P\\) và phủ định \\(P\\), luôn có một mệnh đề đúng."
        ]
      ],
      "condition": ""
    }
  },
  "toan-10-1-2": {
    "prompt": "Cho \\(A = \\left\\{1 ; 2 ; 3\\right\\}\\) và \\(B = \\left\\{2 ; 3 ; 4\\right\\}\\). Tập hợp \\(A \\cap B\\) là:",
    "options": [
      "\\(\\left\\{1 ; 2 ; 3 ; 4\\right\\}\\)",
      "\\(\\left\\{2 ; 3\\right\\}\\)",
      "\\(\\left\\{1 ; 4\\right\\}\\)",
      "\\(\\left\\{1\\right\\}\\)"
    ],
    "explanation": "Giao của hai tập hợp gồm các phần tử thuộc cả hai tập hợp. Các phần tử chung của \\(A\\) và \\(B\\) là \\(2\\) và \\(3\\).",
    "hint": "Liệt kê những phần tử xuất hiện trong cả \\(A\\) và \\(B\\).",
    "guide": {
      "formulas": [
        "A\\cap B=\\{x:x\\in A\\text{ và }x\\in B\\}"
      ],
      "symbols": [
        [
          "A,B",
          "Hai tập hợp."
        ],
        [
          "x",
          "Phần tử cần kiểm tra có thuộc cả hai tập hợp hay không."
        ]
      ],
      "condition": ""
    }
  },
  "toan-10-1-3": {
    "prompt": "Phủ định của mệnh đề “Mọi số thực \\(x\\) đều có \\(x^{2} \\ge 0\\)” là:",
    "options": [
      "Mọi số thực \\(x\\) đều có \\(x^{2} < 0\\).",
      "Tồn tại số thực \\(x\\) sao cho \\(x^{2} < 0\\).",
      "Tồn tại số thực \\(x\\) sao cho \\(x^{2} \\ge 0\\).",
      "Mọi số thực \\(x\\) đều có \\(x^{2} > 0\\)."
    ],
    "explanation": "Phủ định của “với mọi \\(x , P \\left(x\\right)\\)” là “tồn tại \\(x\\) sao cho không \\(P \\left(x\\right)\\)”. Phủ định của \\(x^{2} \\ge 0\\) là \\(x^{2} < 0\\).",
    "hint": "Đổi “mọi” thành “tồn tại” và phủ định bất đẳng thức.",
    "guide": {
      "formulas": [
        "\\neg(\\forall x,P(x))\\ \\Longleftrightarrow\\ \\exists x,\\neg P(x)"
      ],
      "symbols": [
        [
          "P(x)",
          "Mệnh đề theo biến \\(x\\)."
        ],
        [
          "\\neg",
          "Phủ định; ∀ là với mọi, ∃ là tồn tại."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-8-5-mc-v2": {
    "prompt": "Đổi \\(108^{\\circ}\\) sang radian. Tìm hệ số \\(k\\) trong \\(\\alpha = k \\pi\\).",
    "options": [
      "\\(\\frac{-3}{5}\\)",
      "\\(\\frac{3}{5}\\)",
      "\\(\\frac{4}{5}\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "\\(\\alpha = \\frac{108 \\pi}{180}\\) rad nên \\(k = \\frac{108}{180}\\).",
    "hint": "Dùng \\(180^{\\circ} = \\pi\\) rad.",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}",
        "\\alpha_{\\text{độ}}=\\alpha_{\\text{rad}}\\frac{180}\\pi"
      ],
      "symbols": [
        [
          "\\alpha_{\\text{độ}}",
          "Số đo góc theo độ."
        ],
        [
          "\\alpha_{\\text{rad}}",
          "Số đo cùng góc theo radian."
        ],
        [
          "\\pi",
          "Hằng số pi; một góc bẹt bằng \\(\\pi\\) rad hoặc \\(180^{\\circ}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi đơn vị",
        "content": "\\[\\alpha_{\\mathrm{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}\\]"
      },
      {
        "title": "Thay số và rút gọn",
        "content": "\\[\\alpha=108\\cdot\\frac\\pi{180}=\\frac{3}{5}\\pi\\]"
      },
      {
        "title": "Đọc hệ số",
        "content": "\\[k=\\frac{3}{5}\\]"
      }
    ]
  },
  "toan-11-1-8-13-mc-v2": {
    "prompt": "Đổi \\(120^{\\circ}\\) sang radian. Tìm hệ số \\(k\\) trong \\(\\alpha = k \\pi\\).",
    "options": [
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{-2}{3}\\)",
      "\\(1\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "\\(\\alpha = \\frac{120 \\pi}{180}\\) rad nên \\(k = \\frac{120}{180}\\).",
    "hint": "Dùng \\(180^{\\circ} = \\pi\\) rad.",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}",
        "\\alpha_{\\text{độ}}=\\alpha_{\\text{rad}}\\frac{180}\\pi"
      ],
      "symbols": [
        [
          "\\alpha_{\\text{độ}}",
          "Số đo góc theo độ."
        ],
        [
          "\\alpha_{\\text{rad}}",
          "Số đo cùng góc theo radian."
        ],
        [
          "\\pi",
          "Hằng số pi; một góc bẹt bằng \\(\\pi\\) rad hoặc \\(180^{\\circ}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi đơn vị",
        "content": "\\[\\alpha_{\\mathrm{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}\\]"
      },
      {
        "title": "Thay số và rút gọn",
        "content": "\\[\\alpha=120\\cdot\\frac\\pi{180}=\\frac{2}{3}\\pi\\]"
      },
      {
        "title": "Đọc hệ số",
        "content": "\\[k=\\frac{2}{3}\\]"
      }
    ]
  },
  "toan-11-1-8-12-mc-v2": {
    "prompt": "Đổi \\(\\frac{\\pi}{24}\\) rad sang độ. Số đo theo độ là:",
    "options": [
      "\\(\\frac{-15}{2}\\)",
      "\\(8\\)",
      "\\(5\\)",
      "\\(\\frac{15}{2}\\)"
    ],
    "explanation": "Số đo độ = \\(\\frac{\\left(\\frac{\\pi}{24}\\right) \\times 180}{\\pi} = 7.5^{\\circ}\\).",
    "hint": "Nhân số đo radian với \\(\\frac{180}{\\pi}\\).",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}",
        "\\alpha_{\\text{độ}}=\\alpha_{\\text{rad}}\\frac{180}\\pi"
      ],
      "symbols": [
        [
          "\\alpha_{\\text{độ}}",
          "Số đo góc theo độ."
        ],
        [
          "\\alpha_{\\text{rad}}",
          "Số đo cùng góc theo radian."
        ],
        [
          "\\pi",
          "Hằng số pi; một góc bẹt bằng \\(\\pi\\) rad hoặc \\(180^{\\circ}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi đơn vị",
        "content": "\\[\\alpha_{\\text{độ}}=\\alpha_{\\mathrm{rad}}\\frac{180}\\pi\\]"
      },
      {
        "title": "Thay số và khử pi",
        "content": "\\[\\alpha_{\\text{độ}}=(\\frac{1}{24}\\pi)\\frac{180}\\pi=7.5\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\alpha=7.5^\\circ\\]"
      }
    ]
  },
  "toan-11-1-mc-8-7": {
    "prompt": "Cho \\(a = \\frac{\\pi}{2} + 2 k \\pi , k \\in \\mathbb{Z}\\). Để \\(10 \\pi < a < 11 \\pi\\) thì \\(k\\) bằng:",
    "options": [
      "\\(7\\)",
      "\\(5\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    "explanation": "\\(10 < \\frac{1}{2} + 2 k < 11 \\Rightarrow 4{,}75 < k < 5{,}25 \\Rightarrow k = 5\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Thay góc vào khoảng",
        "content": "\\[10\\pi<\\frac\\pi2+2k\\pi<11\\pi\\]"
      },
      {
        "title": "Chia cho số dương và chuyển vế",
        "content": "\\[10<\\frac12+2k<11\\iff\\frac{19}2<2k<\\frac{21}2\\iff\\frac{19}4<k<\\frac{21}4\\]"
      },
      {
        "title": "Chọn số nguyên",
        "content": "\\[4.75<k<5.25,\\ k\\in\\mathbb Z\\Rightarrow k=5\\]"
      }
    ]
  },
  "toan-11-1-8-8-mc-v2": {
    "prompt": "Bánh xe có \\(72\\) răng cách đều nhau. Đi qua \\(10\\) răng tương ứng góc quay bao nhiêu độ?",
    "options": [
      "\\(-50\\)",
      "\\(50\\)",
      "\\(51\\)",
      "\\(25\\)"
    ],
    "explanation": "Mỗi răng tương ứng \\(\\frac{360}{72} = 5^{\\circ}\\). Đi qua \\(10\\) răng: \\(50^{\\circ}\\).",
    "hint": "Tính góc một răng rồi nhân \\(10\\).",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{độ}}=360\\frac mN"
      ],
      "symbols": [
        [
          "m",
          "Số phần bằng nhau mà bánh xe hoặc kim đã đi qua."
        ],
        [
          "N",
          "Tổng số phần bằng nhau ứng với một vòng."
        ],
        [
          "\\alpha_{\\text{độ}}",
          "Góc quay theo độ."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Tính góc ứng với một răng",
        "content": "\\[\\frac{360^\\circ}{72}=5^\\circ\\]"
      },
      {
        "title": "Nhân với số răng đi qua",
        "content": "\\[\\alpha=10\\cdot5^\\circ=50^\\circ\\]"
      },
      {
        "title": "Kết luận",
        "content": "Góc quay có độ lớn 50°."
      }
    ]
  },
  "toan-11-1-8-14-mc-v2": {
    "prompt": "Cung tròn bán kính \\(15\\) có góc ở tâm \\(50^{\\circ}\\). Độ dài cung bằng \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{25}{6}\\)",
      "\\(\\frac{-25}{6}\\)",
      "\\(\\frac{13}{3}\\)",
      "\\(\\frac{25}{7}\\)"
    ],
    "explanation": "\\(l = r \\alpha = \\frac{15 \\times 50 \\pi}{180} = \\frac{25 \\pi}{6}\\).",
    "hint": "Đổi góc sang radian rồi dùng \\(l = r \\alpha\\).",
    "guide": {
      "formulas": [
        "l=R\\alpha\\quad(\\alpha\\text{ tính bằng radian})"
      ],
      "symbols": [
        [
          "l",
          "Độ dài cung tròn."
        ],
        [
          "R",
          "Bán kính đường tròn, cùng đơn vị độ dài với \\(l\\)."
        ],
        [
          "\\alpha",
          "Số đo góc ở tâm chắn cung; đổi sang radian trước khi thay số."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi góc sang radian",
        "content": "\\[\\alpha=50\\cdot\\frac\\pi{180}=\\frac{5\\pi}{18}\\]"
      },
      {
        "title": "Nhân với bán kính",
        "content": "\\[l=R\\alpha=15\\cdot\\frac{5\\pi}{18}=\\frac{75\\pi}{18}=\\frac{25\\pi}6\\]"
      },
      {
        "title": "Đọc hệ số",
        "content": "\\[l=k\\pi\\Rightarrow k=\\frac{25}6\\]"
      }
    ]
  },
  "toan-11-1-8-17-mc-v2": {
    "prompt": "Cung tròn bán kính \\(5\\), góc ở tâm \\(\\frac{\\pi}{8}\\) rad có độ dài \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{-5}{8}\\)",
      "\\(\\frac{3}{4}\\)",
      "\\(\\frac{5}{9}\\)",
      "\\(\\frac{5}{8}\\)"
    ],
    "explanation": "\\(l = \\frac{5 \\times \\pi}{8}\\) nên \\(k = \\frac{5}{8}\\).",
    "hint": "\\(l = r \\alpha\\).",
    "guide": {
      "formulas": [
        "l=R\\alpha\\quad(\\alpha\\text{ tính bằng radian})"
      ],
      "symbols": [
        [
          "l",
          "Độ dài cung tròn."
        ],
        [
          "R",
          "Bán kính đường tròn, cùng đơn vị độ dài với \\(l\\)."
        ],
        [
          "\\alpha",
          "Số đo góc ở tâm chắn cung; đổi sang radian trước khi thay số."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Nhận đơn vị góc",
        "content": "Góc đã tính bằng radian nên dùng trực tiếp công thức độ dài cung."
      },
      {
        "title": "Thay số",
        "content": "\\[l=R\\alpha=5\\cdot\\frac\\pi8=\\frac{5\\pi}8\\]"
      },
      {
        "title": "Đọc hệ số",
        "content": "\\[k=\\frac58\\]"
      }
    ]
  },
  "toan-11-1-8-18-mc-v2": {
    "prompt": "Cung tròn bán kính \\(10\\) cm, góc ở tâm \\(40^{\\circ}\\). Tính độ dài cung (cm), làm tròn \\(4\\) chữ số thập phân.",
    "options": [
      "\\(-\\left(\\frac{20 \\times \\pi}{9}\\right)\\)",
      "\\(2 \\times \\left(\\frac{20 \\times \\pi}{9}\\right)\\)",
      "\\(\\frac{20 \\times \\pi}{9}\\)",
      "\\(\\frac{\\frac{20 \\times \\pi}{9}}{2}\\)"
    ],
    "explanation": "\\(l = \\frac{10 \\times 40 \\pi}{180} = \\frac{20 \\pi}{9} \\approx 6{,}9813\\) cm.",
    "hint": "Đổi \\(40^{\\circ}\\) sang radian.",
    "guide": {
      "formulas": [
        "l=R\\alpha\\quad(\\alpha\\text{ tính bằng radian})"
      ],
      "symbols": [
        [
          "l",
          "Độ dài cung tròn."
        ],
        [
          "R",
          "Bán kính đường tròn, cùng đơn vị độ dài với \\(l\\)."
        ],
        [
          "\\alpha",
          "Số đo góc ở tâm chắn cung; đổi sang radian trước khi thay số."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi độ sang radian",
        "content": "\\[\\alpha=40\\cdot\\frac\\pi{180}=\\frac{2\\pi}9\\]"
      },
      {
        "title": "Tính độ dài chính xác",
        "content": "\\[l=10\\cdot\\frac{2\\pi}9=\\frac{20\\pi}9\\ \\text{cm}\\]"
      },
      {
        "title": "Làm tròn ở bước cuối",
        "content": "\\[l\\approx6.9813\\ \\text{cm}\\]"
      }
    ]
  },
  "toan-11-1-mc-8-15": {
    "prompt": "Cho \\(\\alpha = \\frac{5 \\pi}{6} , \\beta = \\frac{\\pi}{3} , \\gamma = \\frac{25 \\pi}{3} , \\delta = \\frac{19 \\pi}{6}\\). Cặp nào có điểm cuối trùng nhau?",
    "options": [
      "\\(\\beta\\) và \\(\\gamma\\)",
      "\\(\\alpha\\) và \\(\\delta\\)",
      "\\(\\alpha\\) và \\(\\beta\\)",
      "\\(\\gamma\\) và \\(\\delta\\)"
    ],
    "explanation": "\\(\\gamma - \\beta = 8 \\pi = 4 \\times 2 \\pi\\). Các cặp còn lại không sai khác một bội nguyên của \\(2 \\pi\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-8-19-mc-v2": {
    "prompt": "Rút góc \\(\\frac{5 \\pi}{2} + 2001 \\pi\\) về \\(\\left[0 ; 2 \\pi\\right)\\). Tìm hệ số \\(k\\) trong góc \\(k \\pi\\).",
    "options": [
      "\\(\\frac{3}{2}\\)",
      "\\(\\frac{-3}{2}\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(\\frac{5 \\pi}{2} + 2001 \\pi = \\left(2003{,}5\\right) \\pi\\), đồng điểm cuối với \\(\\frac{3 \\pi}{2}\\).",
    "hint": "Trừ các bội của \\(2 \\pi\\).",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Cộng hệ số của pi",
        "content": "\\[\\frac{5\\pi}2+2001\\pi=\\frac{4007\\pi}2\\]"
      },
      {
        "title": "Tách số vòng nguyên",
        "content": "\\[\\frac{4007\\pi}2=1001\\cdot2\\pi+\\frac{3\\pi}2\\]"
      },
      {
        "title": "Chọn đại diện trong khoảng",
        "content": "\\[0\\le\\frac{3\\pi}2<2\\pi\\Rightarrow k=\\frac32\\]"
      }
    ]
  },
  "toan-11-1-8-22-mc-v2": {
    "prompt": "Hai điểm \\(M , N\\) trên đường tròn đơn vị có góc lần lượt \\(\\frac{\\pi}{3}\\) và \\(\\frac{4 \\pi}{3}\\). Họ góc chung là \\(\\frac{\\pi}{3}\\) + kp\\(\\pi , k \\in \\mathbb{Z} , p > 0\\) nhỏ nhất. Tìm \\(p\\).",
    "options": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)"
    ],
    "explanation": "Hai điểm đối nhau nên bước góc là \\(\\pi\\), tức \\(p = 1\\).",
    "hint": "Xét hiệu hai góc.",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "So sánh hai góc",
        "content": "\\[\\frac{4\\pi}3-\\frac\\pi3=\\pi\\]"
      },
      {
        "title": "Viết chung hai họ góc",
        "content": "\\[\\frac\\pi3+2m\\pi\\quad\\text{và}\\quad\\frac{4\\pi}3+2m\\pi\\]Gộp lại thành \\(\\pi/3+k\\pi\\)."
      },
      {
        "title": "Chọn bước dương nhỏ nhất",
        "content": "Hai điểm đối nhau nên bước nhỏ nhất là \\(\\pi\\), do đó \\(p=1\\)."
      }
    ]
  },
  "toan-11-1-8-23-mc-v2": {
    "prompt": "\\(M\\) biểu diễn góc \\(\\frac{\\pi}{3}\\). Điểm đối xứng của \\(M\\) qua Ox biểu diễn góc nhỏ nhất không âm \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{-5}{3}\\)",
      "\\(2\\)",
      "\\(\\frac{5}{3}\\)",
      "\\(\\frac{5}{4}\\)"
    ],
    "explanation": "Đối xứng qua Ox đổi \\(\\alpha\\) thành \\(-\\alpha\\). Trong \\(\\left[0 ; 2 \\pi\\right) , \\frac{-\\pi}{3}\\) tương ứng \\(\\frac{5 \\pi}{3}\\).",
    "hint": "Đổi dấu góc và cộng \\(2 \\pi\\).",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi góc khi đối xứng qua trục hoành",
        "content": "\\[\\alpha'= -\\frac\\pi3+2m\\pi\\]"
      },
      {
        "title": "Chọn góc không âm nhỏ nhất",
        "content": "\\[m=1\\Rightarrow\\alpha'=2\\pi-\\frac\\pi3=\\frac{5\\pi}3\\]"
      },
      {
        "title": "Đọc hệ số",
        "content": "\\[k=\\frac53\\]"
      }
    ]
  },
  "toan-11-1-mc-8-24": {
    "prompt": "Góc nào có cùng điểm cuối với \\(\\frac{7 \\pi}{4}\\)?",
    "options": [
      "\\(\\frac{-\\pi}{4}\\)",
      "\\(\\frac{\\pi}{4}\\)",
      "\\(\\frac{3 \\pi}{4}\\)",
      "\\(\\frac{-3 \\pi}{4}\\)"
    ],
    "explanation": "\\(\\frac{7 \\pi}{4} - \\left(\\frac{-\\pi}{4}\\right) = 2 \\pi\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-8-25-mc-v2": {
    "prompt": "Có bao nhiêu điểm cuối phân biệt của họ góc \\(\\frac{\\pi}{6} + \\frac{2 k \\pi}{3} , k \\in \\mathbb{Z}\\)?",
    "options": [
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "explanation": "\\(k = 0 , 1 , 2\\) cho \\(b a\\) điểm; tăng \\(k\\) thêm \\(3\\) làm góc tăng \\(2 \\pi\\).",
    "hint": "Tìm số bước để quay đủ một vòng.",
    "guide": {
      "formulas": [
        "\\alpha=\\alpha_0+2k\\pi,\\quad k\\in\\mathbb Z"
      ],
      "symbols": [
        [
          "\\alpha_0",
          "Một góc đại diện có cùng điểm cuối."
        ],
        [
          "k",
          "Số vòng quay nguyên, có thể âm, dương hoặc bằng \\(0\\)."
        ],
        [
          "\\alpha",
          "Góc cần thỏa điều kiện khoảng trong đề."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Xét ba giá trị liên tiếp của tham số",
        "content": "\\[k=0,1,2\\Rightarrow\\alpha=\\frac\\pi6,\\frac{5\\pi}6,\\frac{3\\pi}2\\]"
      },
      {
        "title": "Kiểm tra chu kì lặp điểm cuối",
        "content": "\\[\\alpha_{k+3}-\\alpha_k=3\\cdot\\frac{2\\pi}3=2\\pi\\]"
      },
      {
        "title": "Đếm",
        "content": "Ba góc đầu có hiệu không là bội nguyên của một vòng nên tạo 3 điểm khác nhau. Từ đó các điểm lặp lại theo chu kì 3."
      }
    ]
  },
  "toan-11-1-mc-8-26": {
    "prompt": "Cho \\(\\frac{\\pi}{2} < a < \\pi\\). Kết luận nào đúng?",
    "options": [
      "\\(\\sin a > 0 , \\cos a > 0\\)",
      "\\(\\sin a < 0 , \\cos a < 0\\)",
      "\\(\\sin a > 0 , \\cos a < 0\\)",
      "\\(\\sin a < 0 , \\cos a > 0\\)"
    ],
    "explanation": "Góc ở phần tư \\(II\\): tung độ dương và hoành độ âm.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-27": {
    "prompt": "Trong các giá trị sau, \\(\\sin \\alpha\\) có thể nhận giá trị nào?",
    "options": [
      "\\(-0{,}7\\)",
      "\\(\\frac{4}{3}\\)",
      "\\(-\\sqrt{2}\\)",
      "\\(\\frac{\\sqrt{5}}{2}\\)"
    ],
    "explanation": "Sin nằm trong \\(\\left[-1 ; 1\\right]\\). Chỉ \\(-0{,}7\\) thuộc khoảng này.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-28": {
    "prompt": "Cho \\(2 \\pi < a < \\frac{5 \\pi}{2}\\). Khẳng định đúng là:",
    "options": [
      "\\(\\tan a > 0 , \\cot a < 0\\)",
      "\\(\\tan a < 0 , \\cot a < 0\\)",
      "\\(\\tan a > 0 , \\cot a > 0\\)",
      "\\(\\tan a < 0 , \\cot a > 0\\)"
    ],
    "explanation": "Góc đồng vị với phần tư \\(I , \\tan\\) và \\(\\cot\\) đều dương.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-30": {
    "prompt": "Ở góc phần tư \\(IV\\), khẳng định nào đúng?",
    "options": [
      "\\(\\cot \\alpha > 0\\)",
      "\\(\\tan \\alpha > 0\\)",
      "\\(\\sin \\alpha > 0\\)",
      "\\(\\cos \\alpha > 0\\)"
    ],
    "explanation": "Ở phần tư \\(IV\\) chỉ \\(\\cos\\) dương; \\(\\sin , \\tan , \\cot\\) âm.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-35": {
    "prompt": "Đẳng thức nào đúng?",
    "options": [
      "\\(\\sin \\left(180^{\\circ} - a\\right) = -\\cos a\\)",
      "\\(\\sin \\left(180^{\\circ} - a\\right) = -\\sin a\\)",
      "\\(\\sin \\left(180^{\\circ} - a\\right) = \\sin a\\)",
      "\\(\\sin \\left(180^{\\circ} - a\\right) = \\cos a\\)"
    ],
    "explanation": "Hai góc bù có cùng \\(\\sin\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-36": {
    "prompt": "Chọn đẳng thức sai (khi hai vế xác định).",
    "options": [
      "\\(\\sin \\left(\\frac{\\pi}{2} - x\\right) = \\cos x\\)",
      "\\(\\sin \\left(\\frac{\\pi}{2} + x\\right) = \\cos x\\)",
      "\\(\\tan \\left(\\frac{\\pi}{2} - x\\right) = \\cot x\\)",
      "\\(\\tan \\left(\\frac{\\pi}{2} + x\\right) = \\cot x\\)"
    ],
    "explanation": "\\(\\tan \\left(\\frac{\\pi}{2} + x\\right) = -\\cot x\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-37": {
    "prompt": "Đẳng thức nào đúng?",
    "options": [
      "\\(\\cos \\left(-x\\right) = -\\cos x\\)",
      "\\(\\sin \\left(x - \\pi\\right) = \\sin x\\)",
      "\\(\\cos \\left(\\pi - x\\right) = -\\cos x\\)",
      "\\(\\sin \\left(\\frac{\\pi}{2} - x\\right) = -\\cos x\\)"
    ],
    "explanation": "Hai góc bù có \\(\\cos\\) đối nhau.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-38": {
    "prompt": "Khẳng định nào sai?",
    "options": [
      "\\(\\sin \\left(-\\alpha\\right) = -\\sin \\alpha\\)",
      "\\(\\cot \\left(-\\alpha\\right) = -\\cot \\alpha\\)",
      "\\(\\cos \\left(-\\alpha\\right) = -\\cos \\alpha\\)",
      "\\(\\tan \\left(-\\alpha\\right) = -\\tan \\alpha\\)"
    ],
    "explanation": "Cos là hàm chẵn: \\(\\cos \\left(-\\alpha\\right) = \\cos \\alpha\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "-1\\le\\sin\\alpha\\le1,\\quad-1\\le\\cos\\alpha\\le1",
        "\\sin(-\\alpha)=-\\sin\\alpha,\\quad\\cos(-\\alpha)=\\cos\\alpha"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Dấu của \\(\\cos\\) theo hoành độ, dấu của \\(\\sin\\) theo tung độ trên đường tròn lượng giác."
    }
  },
  "toan-11-1-mc-8-42": {
    "prompt": "Công thức nào sai, tại các góc hai vế xác định?",
    "options": [
      "\\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\)",
      "\\(1 + \\tan^{2} \\alpha = \\frac{1}{\\cos^{2} \\alpha}\\)",
      "\\(1 + \\cot^{2} \\alpha = \\frac{1}{\\sin^{2} \\alpha}\\)",
      "\\(\\tan \\alpha + \\cot \\alpha = 1\\)"
    ],
    "explanation": "Tích \\(\\tan \\alpha \\times \\cot \\alpha\\) bằng \\(1\\); tổng không luôn bằng \\(1\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    }
  },
  "toan-11-1-12-39-mc-v2": {
    "prompt": "\\(\\tan \\alpha = \\frac{1}{2}\\). Tính \\(\\cot \\alpha\\).",
    "options": [
      "\\(-2\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(\\cot \\alpha = \\frac{1}{\\tan \\alpha} = 2\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Đổi sang hàm nghịch đảo",
        "content": "\\[\\cot\\alpha=\\frac1{\\tan\\alpha}\\]"
      },
      {
        "title": "Thay giá trị đã cho",
        "content": "\\[\\cot\\alpha=\\frac1{1/2}=1\\cdot\\frac21=2\\]"
      },
      {
        "title": "Kiểm tra điều kiện",
        "content": "Tang đã xác định và khác 0 nên cotang xác định."
      }
    ]
  },
  "toan-11-1-12-41-mc-v2": {
    "prompt": "\\(\\tan \\alpha = 2 , \\pi < \\alpha < \\frac{3 \\pi}{2}\\). Tính \\(\\sin \\alpha\\).",
    "options": [
      "\\(-\\left(\\frac{-2}{\\sqrt{5}}\\right)\\)",
      "\\(\\frac{-2}{\\sqrt{5}}\\)",
      "\\(2 \\times \\left(\\frac{-2}{\\sqrt{5}}\\right)\\)",
      "\\(\\frac{\\frac{-2}{\\sqrt{5}}}{2}\\)"
    ],
    "explanation": "Phần tư \\(III : \\sin\\) và \\(\\cos\\) âm. \\(\\cos \\alpha = \\frac{-1}{\\sqrt{5}} , \\sin \\alpha = \\frac{-2}{\\sqrt{5}}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Xác định dấu",
        "content": "Góc thuộc phần tư III nên cả sin và cos đều âm."
      },
      {
        "title": "Tìm cos từ tan",
        "content": "\\[1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha}\\Rightarrow\\cos^2\\alpha=\\frac15\\Rightarrow\\cos\\alpha=-\\frac1{\\sqrt5}\\]"
      },
      {
        "title": "Tìm sin",
        "content": "\\[\\sin\\alpha=\\tan\\alpha\\cos\\alpha=2\\left(-\\frac1{\\sqrt5}\\right)=-\\frac2{\\sqrt5}\\]"
      }
    ]
  },
  "toan-11-1-12-42-mc-v2": {
    "prompt": "Biết \\(\\tan \\alpha = -3\\). Tính \\(\\tan \\left(\\alpha - \\frac{7 \\pi}{2}\\right)\\).",
    "options": [
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{-1}{3}\\)",
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{1}{4}\\)"
    ],
    "explanation": "Tan có chu kì \\(\\pi : \\tan \\left(\\alpha - \\frac{7 \\pi}{2}\\right) = \\tan \\left(\\alpha - \\frac{\\pi}{2}\\right) = -\\cot \\alpha = \\frac{1}{3}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Giảm góc theo chu kì",
        "content": "\\[\\alpha-\\frac{7\\pi}2=\\alpha-\\frac\\pi2-3\\pi\\Rightarrow\\tan\\left(\\alpha-\\frac{7\\pi}2\\right)=\\tan\\left(\\alpha-\\frac\\pi2\\right)\\]"
      },
      {
        "title": "Đổi tang của góc lệch",
        "content": "\\[\\tan\\left(\\alpha-\\frac\\pi2\\right)=-\\cot\\alpha=-\\frac1{\\tan\\alpha}\\]"
      },
      {
        "title": "Thay số",
        "content": "\\[-\\frac1{-3}=\\frac13\\]"
      }
    ]
  },
  "toan-11-1-12-45-mc-v2": {
    "prompt": "\\(\\cos \\alpha = \\frac{4}{5} , 0 < \\alpha < \\frac{\\pi}{2}\\). Tính \\(\\sin \\alpha\\).",
    "options": [
      "\\(\\frac{-3}{5}\\)",
      "\\(\\frac{4}{5}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{3}{5}\\)"
    ],
    "explanation": "\\(\\sin \\alpha\\) dương, \\(\\sin^{2} \\alpha = 1 - \\frac{16}{25} = \\frac{9}{25}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Xác định dấu",
        "content": "Góc thuộc phần tư I nên sin dương."
      },
      {
        "title": "Dùng hệ thức cơ bản",
        "content": "\\[\\sin^2\\alpha=1-\\cos^2\\alpha=1-\\frac{16}{25}=\\frac9{25}\\]"
      },
      {
        "title": "Lấy căn theo dấu",
        "content": "\\[\\sin\\alpha=\\sqrt{\\frac9{25}}=\\frac35\\]"
      }
    ]
  },
  "toan-11-1-12-46-mc-v2": {
    "prompt": "\\(P = \\sin \\left(a + \\frac{\\pi}{4}\\right) \\sin \\left(a - \\frac{\\pi}{4}\\right) = k \\cos 2 a\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{1}{2}\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{2}\\)",
      "\\(\\frac{-1}{3}\\)"
    ],
    "explanation": "\\(P = \\frac{\\cos \\left(\\frac{\\pi}{2}\\right) - \\cos 2 a}{2} = \\frac{-\\cos 2 a}{2}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Đổi tích thành tổng",
        "content": "\\[P=\\frac{\\cos[(a+\\pi/4)-(a-\\pi/4)]-\\cos[(a+\\pi/4)+(a-\\pi/4)]}{2}\\]"
      },
      {
        "title": "Thu gọn các góc",
        "content": "\\[P=\\frac{\\cos(\\pi/2)-\\cos2a}{2}=-\\frac12\\cos2a\\]"
      },
      {
        "title": "Đối chiếu hệ số",
        "content": "\\[k=-\\frac12\\]"
      }
    ]
  },
  "toan-11-1-12-50a-mc-v2": {
    "prompt": "\\(\\tan \\alpha = \\frac{-4}{5} , \\frac{3 \\pi}{2} < \\alpha < 2 \\pi\\). Tính \\(\\sin \\alpha\\).",
    "options": [
      "\\(-\\left(\\frac{-4}{\\sqrt{41}}\\right)\\)",
      "\\(\\frac{-4}{\\sqrt{41}}\\)",
      "\\(2 \\times \\left(\\frac{-4}{\\sqrt{41}}\\right)\\)",
      "\\(\\frac{\\frac{-4}{\\sqrt{41}}}{2}\\)"
    ],
    "explanation": "Phần tư \\(IV : \\cos\\) dương, \\(\\sin\\) âm. Từ \\(\\tan = \\frac{-4}{5}\\) suy ra \\(\\sin = \\frac{-4}{\\sqrt{41}}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Xác định dấu",
        "content": "Góc thuộc phần tư IV nên cos dương, sin âm."
      },
      {
        "title": "Tính cos",
        "content": "\\[\\cos^2\\alpha=\\frac1{1+\\tan^2\\alpha}=\\frac1{1+16/25}=\\frac{25}{41}\\Rightarrow\\cos\\alpha=\\frac5{\\sqrt{41}}\\]"
      },
      {
        "title": "Tính sin và kết luận",
        "content": "\\[\\sin\\alpha=\\tan\\alpha\\cos\\alpha=-\\frac45\\cdot\\frac5{\\sqrt{41}}=-\\frac4{\\sqrt{41}}\\]"
      }
    ]
  },
  "toan-11-1-12-50b-mc-v2": {
    "prompt": "\\(\\tan \\alpha = \\frac{-4}{5} , \\frac{3 \\pi}{2} < \\alpha < 2 \\pi\\). Tính \\(\\cos \\alpha\\).",
    "options": [
      "\\(\\frac{5}{\\sqrt{41}}\\)",
      "\\(-\\left(\\frac{5}{\\sqrt{41}}\\right)\\)",
      "\\(2 \\times \\left(\\frac{5}{\\sqrt{41}}\\right)\\)",
      "\\(\\frac{\\frac{5}{\\sqrt{41}}}{2}\\)"
    ],
    "explanation": "\\(\\cos \\alpha = \\frac{1}{\\sqrt{1 + \\tan^{2} \\alpha}} = \\frac{5}{\\sqrt{41}}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Xác định dấu",
        "content": "Góc thuộc phần tư IV nên cos dương, sin âm."
      },
      {
        "title": "Tính cos",
        "content": "\\[\\cos^2\\alpha=\\frac1{1+\\tan^2\\alpha}=\\frac1{1+16/25}=\\frac{25}{41}\\Rightarrow\\cos\\alpha=\\frac5{\\sqrt{41}}\\]"
      },
      {
        "title": "Tính sin và kết luận",
        "content": "\\[\\sin\\alpha=\\tan\\alpha\\cos\\alpha=-\\frac45\\cdot\\frac5{\\sqrt{41}}=-\\frac4{\\sqrt{41}}\\]"
      }
    ]
  },
  "toan-11-1-12-52-mc-v2": {
    "prompt": "\\(\\sin \\alpha = \\frac{1}{3} , \\frac{\\pi}{2} < \\alpha < \\pi\\). Tính \\(\\cos \\alpha\\).",
    "options": [
      "\\(-\\left(\\frac{-2 \\times \\sqrt{2}}{3}\\right)\\)",
      "\\(2 \\times \\left(\\frac{-2 \\times \\sqrt{2}}{3}\\right)\\)",
      "\\(\\frac{\\frac{-2 \\times \\sqrt{2}}{3}}{2}\\)",
      "\\(\\frac{-2 \\times \\sqrt{2}}{3}\\)"
    ],
    "explanation": "Cos âm; \\(\\cos^{2} \\alpha = \\frac{8}{9}\\) nên \\(\\cos \\alpha = \\frac{-2 \\sqrt{2}}{3}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Xác định dấu",
        "content": "Góc thuộc phần tư II nên cos âm."
      },
      {
        "title": "Tính bình phương cos",
        "content": "\\[\\cos^2\\alpha=1-\\sin^2\\alpha=1-\\frac19=\\frac89\\]"
      },
      {
        "title": "Chọn căn âm",
        "content": "\\[\\cos\\alpha=-\\sqrt{\\frac89}=-\\frac{2\\sqrt2}3\\]"
      }
    ]
  },
  "toan-11-1-12-53-mc-v2": {
    "prompt": "Cho \\(\\tan x = 2\\). Tính \\(P = \\frac{3 \\sin x - \\cos x}{\\sin x + 2 \\cos x}\\).",
    "options": [
      "\\(\\frac{-5}{4}\\)",
      "\\(\\frac{3}{2}\\)",
      "\\(\\frac{5}{4}\\)",
      "\\(1\\)"
    ],
    "explanation": "Chia tử mẫu cho \\(\\cos x : P = \\frac{3 \\tan x - 1}{\\tan x + 2} = \\frac{5}{4}\\).",
    "hint": "Xét dấu theo góc phần tư rồi dùng \\(\\sin^{2} \\alpha + \\cos^{2} \\alpha = 1\\).",
    "guide": {
      "formulas": [
        "\\sin^2\\alpha+\\cos^2\\alpha=1",
        "1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha},\\qquad\\tan\\alpha\\cot\\alpha=1"
      ],
      "symbols": [
        [
          "\\alpha",
          "Góc cần tính giá trị lượng giác; dấu của \\(\\sin , \\cos\\) phụ thuộc góc phần tư."
        ]
      ],
      "condition": "Các biểu thức phải xác định; kiểm tra mẫu khác \\(0\\) trước khi chia."
    },
    "solutionSteps": [
      {
        "title": "Kiểm tra phép chia",
        "content": "Tang xác định nên cos khác 0. Mẫu của biểu thức bằng \\(\\cos x(\\tan x+2)=4\\cos x\\ne0\\)."
      },
      {
        "title": "Chia tử và mẫu cho cos",
        "content": "\\[P=\\frac{3\\sin x/\\cos x-1}{\\sin x/\\cos x+2}=\\frac{3\\tan x-1}{\\tan x+2}\\]"
      },
      {
        "title": "Thay số và tính",
        "content": "\\[P=\\frac{3\\cdot2-1}{2+2}=\\frac54\\]"
      }
    ]
  },
  "toan-11-1-11-1-4b-mc-v2": {
    "prompt": "Đổi \\(1000^{\\circ}\\) sang radian. Tìm hệ số \\(k\\) trong \\(\\alpha = k \\pi\\).",
    "options": [
      "\\(\\frac{-50}{9}\\)",
      "\\(\\frac{50}{9}\\)",
      "\\(\\frac{17}{3}\\)",
      "\\(5\\)"
    ],
    "explanation": "\\(\\alpha = \\frac{1000 \\pi}{180}\\) rad nên \\(k = \\frac{1000}{180}\\).",
    "hint": "Dùng \\(180^{\\circ} = \\pi\\) rad.",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}",
        "\\alpha_{\\text{độ}}=\\alpha_{\\text{rad}}\\frac{180}\\pi"
      ],
      "symbols": [
        [
          "\\alpha_{\\text{độ}}",
          "Số đo góc theo độ."
        ],
        [
          "\\alpha_{\\text{rad}}",
          "Số đo cùng góc theo radian."
        ],
        [
          "\\pi",
          "Hằng số pi; một góc bẹt bằng \\(\\pi\\) rad hoặc \\(180^{\\circ}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi đơn vị",
        "content": "\\[\\alpha_{\\mathrm{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}\\]"
      },
      {
        "title": "Thay số và rút gọn",
        "content": "\\[\\alpha=1000\\cdot\\frac\\pi{180}=\\frac{50}{9}\\pi\\]"
      },
      {
        "title": "Đọc hệ số",
        "content": "\\[k=\\frac{50}{9}\\]"
      }
    ]
  },
  "toan-11-1-11-1-1d-mc-v2": {
    "prompt": "Đổi \\(\\frac{5 \\pi}{18}\\) rad sang độ. Số đo theo độ là:",
    "options": [
      "\\(50\\)",
      "\\(-50\\)",
      "\\(51\\)",
      "\\(25\\)"
    ],
    "explanation": "Số đo độ = \\(\\frac{\\left(\\frac{5 \\pi}{18}\\right) \\times 180}{\\pi} = 50^{\\circ}\\).",
    "hint": "Nhân số đo radian với \\(\\frac{180}{\\pi}\\).",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}",
        "\\alpha_{\\text{độ}}=\\alpha_{\\text{rad}}\\frac{180}\\pi"
      ],
      "symbols": [
        [
          "\\alpha_{\\text{độ}}",
          "Số đo góc theo độ."
        ],
        [
          "\\alpha_{\\text{rad}}",
          "Số đo cùng góc theo radian."
        ],
        [
          "\\pi",
          "Hằng số pi; một góc bẹt bằng \\(\\pi\\) rad hoặc \\(180^{\\circ}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi đơn vị",
        "content": "\\[\\alpha_{\\text{độ}}=\\alpha_{\\mathrm{rad}}\\frac{180}\\pi\\]"
      },
      {
        "title": "Thay số và khử pi",
        "content": "\\[\\alpha_{\\text{độ}}=(\\frac{5}{18}\\pi)\\frac{180}\\pi=50\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\alpha=50^\\circ\\]"
      }
    ]
  },
  "toan-11-1-11-1-3c-mc-v2": {
    "prompt": "Đổi \\(\\frac{\\pi}{10}\\) rad sang độ. Số đo theo độ là:",
    "options": [
      "\\(-18\\)",
      "\\(19\\)",
      "\\(9\\)",
      "\\(18\\)"
    ],
    "explanation": "Số đo độ = \\(\\frac{\\left(\\frac{\\pi}{10}\\right) \\times 180}{\\pi} = 18^{\\circ}\\).",
    "hint": "Nhân số đo radian với \\(\\frac{180}{\\pi}\\).",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{rad}}=\\alpha_{\\text{độ}}\\frac\\pi{180}",
        "\\alpha_{\\text{độ}}=\\alpha_{\\text{rad}}\\frac{180}\\pi"
      ],
      "symbols": [
        [
          "\\alpha_{\\text{độ}}",
          "Số đo góc theo độ."
        ],
        [
          "\\alpha_{\\text{rad}}",
          "Số đo cùng góc theo radian."
        ],
        [
          "\\pi",
          "Hằng số pi; một góc bẹt bằng \\(\\pi\\) rad hoặc \\(180^{\\circ}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi đơn vị",
        "content": "\\[\\alpha_{\\text{độ}}=\\alpha_{\\mathrm{rad}}\\frac{180}\\pi\\]"
      },
      {
        "title": "Thay số và khử pi",
        "content": "\\[\\alpha_{\\text{độ}}=(\\frac{1}{10}\\pi)\\frac{180}\\pi=18\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\alpha=18^\\circ\\]"
      }
    ]
  },
  "toan-11-1-11-2-1b-mc-v2": {
    "prompt": "Đường tròn bán kính \\(36 m\\) có góc ở tâm \\(51^{\\circ}\\). Tính độ dài cung \\(\\left(m\\right)\\).",
    "options": [
      "\\(-\\left(10.2 \\times \\pi\\right)\\)",
      "\\(2 \\times \\left(10.2 \\times \\pi\\right)\\)",
      "\\(10.2 \\times \\pi\\)",
      "\\(\\frac{10.2 \\times \\pi}{2}\\)"
    ],
    "explanation": "Dùng \\(l = R \\alpha\\) với \\(\\alpha\\) tính bằng radian. Kết quả \\(10{,}2 \\pi m\\).",
    "hint": "Đổi sang radian nếu góc cho theo độ.",
    "guide": {
      "formulas": [
        "l=R\\alpha\\quad(\\alpha\\text{ tính bằng radian})"
      ],
      "symbols": [
        [
          "l",
          "Độ dài cung tròn."
        ],
        [
          "R",
          "Bán kính đường tròn, cùng đơn vị độ dài với \\(l\\)."
        ],
        [
          "\\alpha",
          "Số đo góc ở tâm chắn cung; đổi sang radian trước khi thay số."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi góc về radian",
        "content": "\\[51^\\circ=51\\cdot\\frac\\pi{180}=\\frac{17\\pi}{60}\\]"
      },
      {
        "title": "Thay bán kính vào công thức",
        "content": "\\[l=R\\alpha=36\\cdot\\frac{17\\pi}{60}=\\frac{51\\pi}5\\]"
      },
      {
        "title": "Viết kết quả theo đơn vị",
        "content": "\\[l=10.2\\pi\\ \\text{m}\\]"
      }
    ]
  },
  "toan-11-1-11-2-1c-mc-v2": {
    "prompt": "Đường tròn bán kính \\(36 m\\) có góc ở tâm \\(\\frac{1}{3}\\) rad. Tính độ dài cung \\(\\left(m\\right)\\).",
    "options": [
      "\\(-12\\)",
      "\\(12\\)",
      "\\(13\\)",
      "\\(6\\)"
    ],
    "explanation": "Dùng \\(l = R \\alpha\\) với \\(\\alpha\\) tính bằng radian. Kết quả \\(12 m\\).",
    "hint": "Đổi sang radian nếu góc cho theo độ.",
    "guide": {
      "formulas": [
        "l=R\\alpha\\quad(\\alpha\\text{ tính bằng radian})"
      ],
      "symbols": [
        [
          "l",
          "Độ dài cung tròn."
        ],
        [
          "R",
          "Bán kính đường tròn, cùng đơn vị độ dài với \\(l\\)."
        ],
        [
          "\\alpha",
          "Số đo góc ở tâm chắn cung; đổi sang radian trước khi thay số."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Kiểm tra đơn vị",
        "content": "Bán kính bằng 36 m; góc đã là radian."
      },
      {
        "title": "Dùng công thức độ dài cung",
        "content": "\\[l=R\\alpha=36\\cdot\\frac13\\]"
      },
      {
        "title": "Rút gọn",
        "content": "\\[l=12\\ \\text{m}\\]"
      }
    ]
  },
  "toan-11-1-11-2-3-mc-v2": {
    "prompt": "Hình vuông \\(A_{0} A_{1} A_{2} A_{3}\\) nội tiếp đường tròn, theo chiều ngược kim đồng hồ. Góc dương nhỏ nhất từ \\(OA_{0}\\) đến \\(OA_{3}\\) bằng \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{3}{2}\\)",
      "\\(\\frac{-3}{2}\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "explanation": "Mỗi bước đỉnh là \\(\\frac{\\pi}{2}\\); từ \\(A_{0}\\) tới \\(A_{3}\\) theo chiều dương là \\(\\frac{3 \\pi}{2}\\).",
    "hint": "Một hình vuông chia đường tròn thành bốn cung bằng nhau.",
    "guide": {
      "formulas": [
        "\\alpha_{\\text{độ}}=360\\frac mN"
      ],
      "symbols": [
        [
          "m",
          "Số phần bằng nhau mà bánh xe hoặc kim đã đi qua."
        ],
        [
          "N",
          "Tổng số phần bằng nhau ứng với một vòng."
        ],
        [
          "\\alpha_{\\text{độ}}",
          "Góc quay theo độ."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Tính góc giữa hai đỉnh kề nhau",
        "content": "\\[\\frac{2\\pi}4=\\frac\\pi2\\]"
      },
      {
        "title": "Đếm số bước theo chiều dương",
        "content": "Từ đỉnh thứ 0 đến đỉnh thứ 3 theo chiều ngược kim đồng hồ đi qua 3 cạnh liên tiếp."
      },
      {
        "title": "Tính góc và hệ số",
        "content": "\\[\\alpha=3\\cdot\\frac\\pi2=\\frac{3\\pi}2\\Rightarrow k=\\frac32\\]"
      }
    ]
  },
  "toan-11-1-mc-15-sin": {
    "prompt": "Điểm \\(M \\left(x ; y\\right)\\) biểu diễn góc \\(\\alpha\\) trên đường tròn đơn vị. \\(\\sin \\alpha\\) bằng:",
    "options": [
      "\\(x\\)",
      "\\(y\\)",
      "\\(\\frac{x}{y}\\)",
      "\\(\\frac{y}{x}\\)"
    ],
    "explanation": "Sin là tung độ của điểm biểu diễn.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\cos\\alpha=x,\\qquad\\sin\\alpha=y",
        "\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha},\\qquad\\cot\\alpha=\\frac{\\cos\\alpha}{\\sin\\alpha}"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Chỉ dùng \\(\\tan\\) khi \\(\\cos\\) khác \\(0 , \\cot\\) khi \\(\\sin\\) khác \\(0\\)."
    }
  },
  "toan-11-1-mc-15-sign": {
    "prompt": "Ở góc phần tư \\(III\\), hàm lượng giác nào dương?",
    "options": [
      "\\(\\sin\\) và \\(\\cos\\)",
      "\\(\\cos\\) và \\(\\tan\\)",
      "\\(\\tan\\) và \\(\\cot\\)",
      "\\(\\sin\\) và \\(\\cot\\)"
    ],
    "explanation": "Ở phần tư \\(III \\sin\\) và \\(\\cos\\) cùng âm nên \\(\\tan\\) và \\(\\cot\\) dương.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\cos\\alpha=x,\\qquad\\sin\\alpha=y",
        "\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha},\\qquad\\cot\\alpha=\\frac{\\cos\\alpha}{\\sin\\alpha}"
      ],
      "symbols": [
        [
          "M(x;y)",
          "Điểm biểu diễn góc \\(\\alpha\\) trên đường tròn bán kính \\(1 ; x\\) là hoành độ, \\(y\\) là tung độ."
        ],
        [
          "\\alpha",
          "Góc lượng giác được biểu diễn bởi \\(M\\)."
        ]
      ],
      "condition": "Chỉ dùng \\(\\tan\\) khi \\(\\cos\\) khác \\(0 , \\cot\\) khi \\(\\sin\\) khác \\(0\\)."
    }
  },
  "toan-11-1-0-1a-mc-v2": {
    "prompt": "Rút gọn \\(A = \\frac{\\sqrt{2} \\cos a - 2 \\cos \\left(\\frac{\\pi}{4} + a\\right)}{-\\sqrt{2} \\sin a + 2 \\sin \\left(\\frac{\\pi}{4} + a\\right)}\\). Với mẫu khác \\(0 , A = k \\tan a\\). Tìm \\(k\\).",
    "options": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Khai triển hai công thức cộng: tử = \\(\\sqrt{2} \\sin a\\), mẫu = \\(\\sqrt{2} \\cos a\\). \\(A = \\tan a\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Khai triển góc tổng",
        "content": "\\[2\\cos(\\pi/4+a)=\\sqrt2\\cos a-\\sqrt2\\sin a\\]\\[2\\sin(\\pi/4+a)=\\sqrt2\\cos a+\\sqrt2\\sin a\\]"
      },
      {
        "title": "Rút gọn tử và mẫu",
        "content": "\\[\\text{Tử}=\\sqrt2\\cos a-(\\sqrt2\\cos a-\\sqrt2\\sin a)=\\sqrt2\\sin a\\]\\[\\text{Mẫu}=-\\sqrt2\\sin a+(\\sqrt2\\cos a+\\sqrt2\\sin a)=\\sqrt2\\cos a\\]"
      },
      {
        "title": "Chia và kết luận",
        "content": "Mẫu khác 0 nên \\[A=\\frac{\\sqrt2\\sin a}{\\sqrt2\\cos a}=\\tan a\\Rightarrow k=1\\]"
      }
    ]
  },
  "toan-11-1-0-1b-mc-v2": {
    "prompt": "Tính \\(B = \\left(\\tan a - \\tan b\\right) \\cot \\left(a - b\\right) - \\tan a \\tan b\\) tại các góc biểu thức xác định.",
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "\\(\\tan \\left(a - b\\right) = \\frac{\\tan a - \\tan b}{1 + \\tan a \\tan b}\\). Do đó tích đầu bằng \\(1 + \\tan a \\tan b ; B = 1\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi cotang",
        "content": "Theo giả thiết, các tang và cotang đều xác định; đặc biệt \\(\\sin(a-b)\\ne0\\)."
      },
      {
        "title": "Biến đổi tích đầu",
        "content": "\\[\\tan a-\\tan b=\\frac{\\sin(a-b)}{\\cos a\\cos b}\\]\\[(\\tan a-\\tan b)\\cot(a-b)=\\frac{\\cos(a-b)}{\\cos a\\cos b}=1+\\tan a\\tan b\\]"
      },
      {
        "title": "Trừ hai hạng bằng nhau",
        "content": "\\[B=1+\\tan a\\tan b-\\tan a\\tan b=1\\]"
      }
    ]
  },
  "toan-11-1-0-2a-mc-v2": {
    "prompt": "\\(\\sin x = \\frac{1}{\\sqrt{3}} , 0 < x < \\frac{\\pi}{2}\\). Tính \\(\\cos \\left(x + \\frac{\\pi}{3}\\right)\\).",
    "options": [
      "\\(-\\left(\\frac{\\sqrt{6}}{6} - \\frac{1}{2}\\right)\\)",
      "\\(2 \\times \\left(\\frac{\\sqrt{6}}{6} - \\frac{1}{2}\\right)\\)",
      "\\(\\frac{\\frac{\\sqrt{6}}{6} - \\frac{1}{2}}{2}\\)",
      "\\(\\frac{\\sqrt{6}}{6} - \\frac{1}{2}\\)"
    ],
    "explanation": "\\(\\cos x = \\frac{\\sqrt{6}}{3}\\). \\(\\cos \\left(x + \\frac{\\pi}{3}\\right) = \\frac{\\cos x}{2} - \\frac{\\sqrt{3} \\sin x}{2} = \\frac{\\sqrt{6}}{6} - \\frac{1}{2}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tính cos và chọn dấu",
        "content": "Góc nhọn nên \\[\\cos x=\\sqrt{1-\\frac13}=\\frac{\\sqrt6}3\\]"
      },
      {
        "title": "Khai triển cos của tổng",
        "content": "\\[\\cos(x+\\pi/3)=\\cos x\\cos(\\pi/3)-\\sin x\\sin(\\pi/3)\\]"
      },
      {
        "title": "Thay các giá trị",
        "content": "\\[\\frac{\\sqrt6}3\\cdot\\frac12-\\frac1{\\sqrt3}\\cdot\\frac{\\sqrt3}2=\\frac{\\sqrt6}6-\\frac12\\]"
      }
    ]
  },
  "toan-11-1-0-2b-mc-v2": {
    "prompt": "\\(\\cos a = \\frac{1}{3} , \\cos b = \\frac{1}{4}\\). Tính \\(\\cos \\left(a + b\\right) \\cos \\left(a - b\\right)\\).",
    "options": [
      "\\(\\frac{119}{144}\\)",
      "\\(\\frac{-59}{72}\\)",
      "\\(\\frac{-119}{144}\\)",
      "\\(\\frac{-119}{145}\\)"
    ],
    "explanation": "\\(\\cos \\left(a + b\\right) \\cos \\left(a - b\\right) = \\cos^{2} a + \\cos^{2} b - 1 = \\frac{1}{9} + \\frac{1}{16} - 1 = \\frac{-119}{144}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Khai triển hai thừa số",
        "content": "\\[\\cos(a+b)\\cos(a-b)=(\\cos a\\cos b-\\sin a\\sin b)(\\cos a\\cos b+\\sin a\\sin b)\\]"
      },
      {
        "title": "Dùng hiệu hai bình phương",
        "content": "\\[=\\cos^2a\\cos^2b-\\sin^2a\\sin^2b=\\cos^2a+\\cos^2b-1\\]"
      },
      {
        "title": "Thay số và quy đồng",
        "content": "\\[\\frac19+\\frac1{16}-1=\\frac{16+9-144}{144}=-\\frac{119}{144}\\]"
      }
    ]
  },
  "toan-11-1-0-3a-mc-v2": {
    "prompt": "\\(\\sin \\alpha = \\frac{3}{5} , \\frac{\\pi}{2} < \\alpha < \\pi\\). Tính \\(\\tan \\left(\\alpha + \\frac{\\pi}{3}\\right)\\).",
    "options": [
      "\\(-\\left(\\frac{48 - 25 \\times \\sqrt{3}}{11}\\right)\\)",
      "\\(\\frac{48 - 25 \\times \\sqrt{3}}{11}\\)",
      "\\(2 \\times \\left(\\frac{48 - 25 \\times \\sqrt{3}}{11}\\right)\\)",
      "\\(\\frac{\\frac{48 - 25 \\times \\sqrt{3}}{11}}{2}\\)"
    ],
    "explanation": "\\(\\cos \\alpha = \\frac{-4}{5} , \\tan \\alpha = \\frac{-3}{4}\\). Dùng công thức cộng: \\(\\frac{\\frac{-3}{4} + \\sqrt{3}}{1 + \\frac{3 \\sqrt{3}}{4}} = \\frac{48 - 25 \\sqrt{3}}{11}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tìm cos và tang",
        "content": "Góc thuộc phần tư II nên \\[\\cos\\alpha=-\\sqrt{1-9/25}=-\\frac45,\\quad\\tan\\alpha=-\\frac34\\]"
      },
      {
        "title": "Áp dụng tang của tổng",
        "content": "\\[\\tan(\\alpha+\\pi/3)=\\frac{-3/4+\\sqrt3}{1+3\\sqrt3/4}=\\frac{4\\sqrt3-3}{4+3\\sqrt3}\\]Mẫu dương nên công thức áp dụng được."
      },
      {
        "title": "Khử căn ở mẫu",
        "content": "\\[\\frac{(4\\sqrt3-3)(4-3\\sqrt3)}{16-27}=\\frac{25\\sqrt3-48}{-11}=\\frac{48-25\\sqrt3}{11}\\]"
      }
    ]
  },
  "toan-11-1-0-3b-mc-v2": {
    "prompt": "\\(\\sin \\alpha = \\frac{-12}{13} , \\frac{3 \\pi}{2} < \\alpha < 2 \\pi\\). Tính \\(\\cos \\left(\\frac{\\pi}{3} - \\alpha\\right)\\).",
    "options": [
      "\\(\\frac{5 - 12 \\times \\sqrt{3}}{26}\\)",
      "\\(-\\left(\\frac{5 - 12 \\times \\sqrt{3}}{26}\\right)\\)",
      "\\(2 \\times \\left(\\frac{5 - 12 \\times \\sqrt{3}}{26}\\right)\\)",
      "\\(\\frac{\\frac{5 - 12 \\times \\sqrt{3}}{26}}{2}\\)"
    ],
    "explanation": "\\(\\cos \\alpha = \\frac{5}{13}\\). \\(\\cos \\left(\\frac{\\pi}{3} - \\alpha\\right) = \\frac{\\cos \\alpha}{2} + \\frac{\\sqrt{3} \\sin \\alpha}{2} = \\frac{5 - 12 \\sqrt{3}}{26}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tìm cos theo góc phần tư IV",
        "content": "\\[\\cos\\alpha=\\sqrt{1-144/169}=\\frac5{13}\\]"
      },
      {
        "title": "Khai triển cos của hiệu",
        "content": "\\[\\cos(\\pi/3-\\alpha)=\\frac12\\cos\\alpha+\\frac{\\sqrt3}2\\sin\\alpha\\]"
      },
      {
        "title": "Thay số và quy đồng",
        "content": "\\[\\frac5{26}-\\frac{12\\sqrt3}{26}=\\frac{5-12\\sqrt3}{26}\\]"
      }
    ]
  },
  "toan-11-1-0-3d-sin-mc-v2": {
    "prompt": "\\(\\sin a = \\frac{8}{17} , \\tan b = \\frac{5}{12} ; a , b\\) nhọn. Tính \\(\\sin \\left(a - b\\right)\\).",
    "options": [
      "\\(\\frac{-21}{221}\\)",
      "\\(\\frac{22}{221}\\)",
      "\\(\\frac{7}{74}\\)",
      "\\(\\frac{21}{221}\\)"
    ],
    "explanation": "\\(\\cos a = \\frac{15}{17} ; \\sin b = \\frac{5}{13} ; \\cos b = \\frac{12}{13}\\). \\(\\frac{8 \\times 12 - 15 \\times 5}{17 \\times 13} = \\frac{21}{221}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tính các giá trị còn thiếu",
        "content": "Hai góc nhọn nên các giá trị đều dương. \\[\\cos a=\\sqrt{1-64/289}=\\frac{15}{17}\\]\\[\\cos b=\\frac1{\\sqrt{1+25/144}}=\\frac{12}{13},\\quad\\sin b=\\frac5{13},\\quad\\tan a=\\frac8{15}\\]"
      },
      {
        "title": "Chọn công thức",
        "content": "\\[\\sin(a-b)=\\sin a\\cos b-\\cos a\\sin b\\]"
      },
      {
        "title": "Thay số rồi thực hiện phép tính",
        "content": "\\[\\sin(a-b)=\\frac8{17}\\frac{12}{13}-\\frac{15}{17}\\frac5{13}=\\frac{96-75}{221}=\\frac{21}{221}\\]"
      }
    ]
  },
  "toan-11-1-0-3d-cos-mc-v2": {
    "prompt": "\\(\\sin a = \\frac{8}{17} , \\tan b = \\frac{5}{12} ; a , b\\) nhọn. Tính \\(\\cos \\left(a + b\\right)\\).",
    "options": [
      "\\(\\frac{-140}{221}\\)",
      "\\(\\frac{141}{221}\\)",
      "\\(\\frac{140}{221}\\)",
      "\\(\\frac{70}{111}\\)"
    ],
    "explanation": "\\(\\cos a = \\frac{15}{17} ; \\sin b = \\frac{5}{13} ; \\cos b = \\frac{12}{13}\\). \\(\\frac{15 \\times 12 - 8 \\times 5}{17 \\times 13} = \\frac{140}{221}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tính các giá trị còn thiếu",
        "content": "Hai góc nhọn nên các giá trị đều dương. \\[\\cos a=\\sqrt{1-64/289}=\\frac{15}{17}\\]\\[\\cos b=\\frac1{\\sqrt{1+25/144}}=\\frac{12}{13},\\quad\\sin b=\\frac5{13},\\quad\\tan a=\\frac8{15}\\]"
      },
      {
        "title": "Chọn công thức",
        "content": "\\[\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b\\]"
      },
      {
        "title": "Thay số rồi thực hiện phép tính",
        "content": "\\[\\cos(a+b)=\\frac{15}{17}\\frac{12}{13}-\\frac8{17}\\frac5{13}=\\frac{180-40}{221}=\\frac{140}{221}\\]"
      }
    ]
  },
  "toan-11-1-0-3d-tan-mc-v2": {
    "prompt": "\\(\\sin a = \\frac{8}{17} , \\tan b = \\frac{5}{12} ; a , b\\) nhọn. Tính \\(\\tan \\left(a + b\\right)\\).",
    "options": [
      "\\(\\frac{-171}{140}\\)",
      "\\(\\frac{171}{140}\\)",
      "\\(\\frac{43}{35}\\)",
      "\\(\\frac{57}{47}\\)"
    ],
    "explanation": "\\(\\cos a = \\frac{15}{17} ; \\sin b = \\frac{5}{13} ; \\cos b = \\frac{12}{13}\\). \\(\\frac{\\frac{8}{15} + \\frac{5}{12}}{1 - \\left(\\frac{8}{15}\\right) \\left(\\frac{5}{12}\\right)} = \\frac{171}{140}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tính các giá trị còn thiếu",
        "content": "Hai góc nhọn nên các giá trị đều dương. \\[\\cos a=\\sqrt{1-64/289}=\\frac{15}{17}\\]\\[\\cos b=\\frac1{\\sqrt{1+25/144}}=\\frac{12}{13},\\quad\\sin b=\\frac5{13},\\quad\\tan a=\\frac8{15}\\]"
      },
      {
        "title": "Chọn công thức",
        "content": "\\[\\tan(a+b)=\\frac{\\tan a+\\tan b}{1-\\tan a\\tan b}\\]"
      },
      {
        "title": "Thay số rồi thực hiện phép tính",
        "content": "\\[\\tan(a+b)=\\frac{8/15+5/12}{1-(8/15)(5/12)}=\\frac{171/180}{140/180}=\\frac{171}{140}\\]"
      }
    ]
  },
  "toan-11-1-1-1a-sin-mc-v2": {
    "prompt": "\\(\\cos a = \\frac{5}{13} , 0 < a < \\frac{\\pi}{2}\\). Tính \\(\\sin 2 a\\).",
    "options": [
      "\\(\\frac{120}{169}\\)",
      "\\(\\frac{-120}{169}\\)",
      "\\(\\frac{121}{169}\\)",
      "\\(\\frac{12}{17}\\)"
    ],
    "explanation": "\\(\\sin a = \\frac{12}{13} \\Rightarrow \\sin 2 a = \\frac{\\frac{2 \\times 5}{13} \\times 12}{13}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính sin của góc nhọn",
        "content": "\\[\\sin a=\\sqrt{1-25/169}=\\frac{12}{13}\\]"
      },
      {
        "title": "Tính sin và cos góc đôi",
        "content": "\\[\\sin2a=2\\cdot\\frac{12}{13}\\cdot\\frac5{13}=\\frac{120}{169}\\]\\[\\cos2a=2\\cdot\\frac{25}{169}-1=-\\frac{119}{169}\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\sin2a=\\frac{120}{169}\\]"
      }
    ]
  },
  "toan-11-1-1-1a-cos-mc-v2": {
    "prompt": "\\(\\cos a = \\frac{5}{13} , 0 < a < \\frac{\\pi}{2}\\). Tính \\(\\cos 2 a\\).",
    "options": [
      "\\(\\frac{119}{169}\\)",
      "\\(\\frac{-118}{169}\\)",
      "\\(\\frac{-7}{10}\\)",
      "\\(\\frac{-119}{169}\\)"
    ],
    "explanation": "\\(\\cos 2 a = 2 \\cos^{2} a - 1 = \\frac{50}{169} - 1\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính sin của góc nhọn",
        "content": "\\[\\sin a=\\sqrt{1-25/169}=\\frac{12}{13}\\]"
      },
      {
        "title": "Tính sin và cos góc đôi",
        "content": "\\[\\sin2a=2\\cdot\\frac{12}{13}\\cdot\\frac5{13}=\\frac{120}{169}\\]\\[\\cos2a=2\\cdot\\frac{25}{169}-1=-\\frac{119}{169}\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\cos2a=-\\frac{119}{169}\\]"
      }
    ]
  },
  "toan-11-1-1-1a-tan-mc-v2": {
    "prompt": "\\(\\cos a = \\frac{5}{13} , 0 < a < \\frac{\\pi}{2}\\). Tính \\(\\tan 2 a\\).",
    "options": [
      "\\(\\frac{120}{119}\\)",
      "\\(-1\\)",
      "\\(\\frac{-120}{119}\\)",
      "\\(\\frac{-1}{119}\\)"
    ],
    "explanation": "\\(\\tan 2 a = \\frac{\\sin 2 a}{\\cos 2 a}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính sin của góc nhọn",
        "content": "\\[\\sin a=\\sqrt{1-25/169}=\\frac{12}{13}\\]"
      },
      {
        "title": "Tính sin và cos góc đôi",
        "content": "\\[\\sin2a=2\\cdot\\frac{12}{13}\\cdot\\frac5{13}=\\frac{120}{169}\\]\\[\\cos2a=2\\cdot\\frac{25}{169}-1=-\\frac{119}{169}\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\tan2a=\\frac{120/169}{-119/169}=-\\frac{120}{119}\\]"
      }
    ]
  },
  "toan-11-1-1-1b-sin-mc-v2": {
    "prompt": "\\(\\sin a = \\frac{1}{4} , 0 < a < \\frac{\\pi}{2}\\). Tính \\(\\sin 2 a\\).",
    "options": [
      "\\(-\\left(\\frac{\\sqrt{15}}{8}\\right)\\)",
      "\\(\\frac{\\sqrt{15}}{8}\\)",
      "\\(2 \\times \\left(\\frac{\\sqrt{15}}{8}\\right)\\)",
      "\\(\\frac{\\frac{\\sqrt{15}}{8}}{2}\\)"
    ],
    "explanation": "\\(\\cos a = \\frac{\\sqrt{15}}{4} \\Rightarrow \\sin 2 a = \\frac{\\sqrt{15}}{8}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính cos của góc nhọn",
        "content": "\\[\\cos a=\\sqrt{1-1/16}=\\frac{\\sqrt{15}}4\\]"
      },
      {
        "title": "Tính hai giá trị góc đôi",
        "content": "\\[\\sin2a=2\\cdot\\frac14\\cdot\\frac{\\sqrt{15}}4=\\frac{\\sqrt{15}}8,\\quad\\cos2a=1-2\\cdot\\frac1{16}=\\frac78\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\sin2a=\\frac{\\sqrt{15}}8\\]"
      }
    ]
  },
  "toan-11-1-1-1b-cos-mc-v2": {
    "prompt": "\\(\\sin a = \\frac{1}{4} , 0 < a < \\frac{\\pi}{2}\\). Tính \\(\\cos 2 a\\).",
    "options": [
      "\\(\\frac{7}{8}\\)",
      "\\(\\frac{-7}{8}\\)",
      "\\(1\\)",
      "\\(\\frac{7}{9}\\)"
    ],
    "explanation": "\\(\\cos 2 a = 1 - 2 \\sin^{2} a = 1 - \\frac{2}{16}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính cos của góc nhọn",
        "content": "\\[\\cos a=\\sqrt{1-1/16}=\\frac{\\sqrt{15}}4\\]"
      },
      {
        "title": "Tính hai giá trị góc đôi",
        "content": "\\[\\sin2a=2\\cdot\\frac14\\cdot\\frac{\\sqrt{15}}4=\\frac{\\sqrt{15}}8,\\quad\\cos2a=1-2\\cdot\\frac1{16}=\\frac78\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\cos2a=\\frac78\\]"
      }
    ]
  },
  "toan-11-1-1-1b-tan-mc-v2": {
    "prompt": "\\(\\sin a = \\frac{1}{4} , 0 < a < \\frac{\\pi}{2}\\). Tính \\(\\tan 2 a\\).",
    "options": [
      "\\(-\\left(\\frac{\\sqrt{15}}{7}\\right)\\)",
      "\\(2 \\times \\left(\\frac{\\sqrt{15}}{7}\\right)\\)",
      "\\(\\frac{\\frac{\\sqrt{15}}{7}}{2}\\)",
      "\\(\\frac{\\sqrt{15}}{7}\\)"
    ],
    "explanation": "Chia \\(\\sin 2 a = \\frac{\\sqrt{15}}{8}\\) cho \\(\\cos 2 a = \\frac{7}{8}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính cos của góc nhọn",
        "content": "\\[\\cos a=\\sqrt{1-1/16}=\\frac{\\sqrt{15}}4\\]"
      },
      {
        "title": "Tính hai giá trị góc đôi",
        "content": "\\[\\sin2a=2\\cdot\\frac14\\cdot\\frac{\\sqrt{15}}4=\\frac{\\sqrt{15}}8,\\quad\\cos2a=1-2\\cdot\\frac1{16}=\\frac78\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[\\tan2a=\\frac{\\sqrt{15}/8}{7/8}=\\frac{\\sqrt{15}}7\\]"
      }
    ]
  },
  "toan-11-1-1-2-mc-v2": {
    "prompt": "\\(\\sin \\alpha = \\frac{3}{5} , \\frac{\\pi}{2} < \\alpha < \\pi\\). Tính \\(E = \\sin 2 \\alpha + \\tan 2 \\alpha\\).",
    "options": [
      "\\(\\frac{768}{175}\\)",
      "\\(\\frac{-767}{175}\\)",
      "\\(\\frac{-768}{175}\\)",
      "\\(\\frac{-48}{11}\\)"
    ],
    "explanation": "\\(\\cos \\alpha = \\frac{-4}{5}\\). \\(\\sin 2 \\alpha = \\frac{-24}{25} , \\cos 2 \\alpha = \\frac{7}{25} , \\tan 2 \\alpha = \\frac{-24}{7}\\). Cộng được \\(\\frac{-768}{175}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính cos theo góc phần tư II",
        "content": "\\[\\cos\\alpha=-\\sqrt{1-9/25}=-\\frac45\\]"
      },
      {
        "title": "Tính giá trị góc đôi",
        "content": "\\[\\sin2\\alpha=2\\cdot\\frac35\\cdot\\frac{-4}5=-\\frac{24}{25},\\quad\\cos2\\alpha=1-2\\cdot\\frac9{25}=\\frac7{25}\\]\\[\\tan2\\alpha=\\frac{-24/25}{7/25}=-\\frac{24}7\\]"
      },
      {
        "title": "Cộng và quy đồng",
        "content": "\\[E=-\\frac{24}{25}-\\frac{24}7=\\frac{-168-600}{175}=-\\frac{768}{175}\\]"
      }
    ]
  },
  "toan-11-1-1-3a-mc-v2": {
    "prompt": "\\(\\tan \\left(\\frac{x}{2}\\right) = -2\\). Tính \\(A = \\frac{3 \\sin x + 4 \\cos x}{4 \\cot x + 3 \\tan x}\\).",
    "options": [
      "\\(\\frac{24}{35}\\)",
      "\\(\\frac{-24}{35}\\)",
      "\\(\\frac{-23}{35}\\)",
      "\\(\\frac{-2}{3}\\)"
    ],
    "explanation": "\\(\\sin x = \\frac{2 t}{1 + t^{2}} = \\frac{-4}{5} , \\cos x = \\frac{1 - t^{2}}{1 + t^{2}} = \\frac{-3}{5}\\). Tử = \\(\\frac{-24}{5}\\), mẫu = \\(7\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Đặt biến nửa góc",
        "content": "\\[t=\\tan(x/2)=-2,\\quad\\sin x=\\frac{2t}{1+t^2}=-\\frac45,\\quad\\cos x=\\frac{1-t^2}{1+t^2}=-\\frac35\\]"
      },
      {
        "title": "Tính tử và mẫu riêng",
        "content": "\\[\\tan x=\\frac43,\\quad\\cot x=\\frac34\\]\\[3\\sin x+4\\cos x=-\\frac{12}5-\\frac{12}5=-\\frac{24}5\\]\\[4\\cot x+3\\tan x=3+4=7\\ne0\\]"
      },
      {
        "title": "Chia cho mẫu",
        "content": "\\[A=\\frac{-24/5}{7}=-\\frac{24}{35}\\]"
      }
    ]
  },
  "toan-11-1-1-3b-cos-mc-v2": {
    "prompt": "\\(\\sin x = \\frac{-4}{5} , \\frac{3 \\pi}{2} < x < 2 \\pi\\). Tính \\(\\cos \\left(\\frac{x}{2}\\right)\\).",
    "options": [
      "\\(\\frac{-2}{\\sqrt{5}}\\)",
      "\\(-\\left(\\frac{-2}{\\sqrt{5}}\\right)\\)",
      "\\(2 \\times \\left(\\frac{-2}{\\sqrt{5}}\\right)\\)",
      "\\(\\frac{\\frac{-2}{\\sqrt{5}}}{2}\\)"
    ],
    "explanation": "\\(\\cos x = \\frac{3}{5} ; \\frac{x}{2}\\) ở phần tư \\(II\\) nên \\(\\cos \\left(\\frac{x}{2}\\right) = -\\sqrt{\\frac{1 + \\frac{3}{5}}{2}}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính cos của góc ban đầu",
        "content": "Góc thuộc phần tư IV nên \\[\\cos x=\\sqrt{1-16/25}=\\frac35\\]"
      },
      {
        "title": "Xác định dấu ở nửa góc",
        "content": "\\[\\frac{3\\pi}4<\\frac x2<\\pi\\]Nửa góc thuộc phần tư II: sin dương và cos âm."
      },
      {
        "title": "Dùng công thức nửa góc",
        "content": "\\[\\cos(x/2)=-\\sqrt{\\frac{1+3/5}2}=-\\sqrt{\\frac45}=-\\frac2{\\sqrt5}\\]"
      }
    ]
  },
  "toan-11-1-1-3b-sin-mc-v2": {
    "prompt": "\\(\\sin x = \\frac{-4}{5} , \\frac{3 \\pi}{2} < x < 2 \\pi\\). Tính \\(\\sin \\left(\\frac{x}{2}\\right)\\).",
    "options": [
      "\\(-\\left(\\frac{1}{\\sqrt{5}}\\right)\\)",
      "\\(2 \\times \\left(\\frac{1}{\\sqrt{5}}\\right)\\)",
      "\\(\\frac{\\frac{1}{\\sqrt{5}}}{2}\\)",
      "\\(\\frac{1}{\\sqrt{5}}\\)"
    ],
    "explanation": "\\(\\frac{x}{2}\\) ở phần tư \\(II : \\sin \\left(\\frac{x}{2}\\right) = \\sqrt{\\frac{1 - \\frac{3}{5}}{2}} = \\frac{1}{\\sqrt{5}}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính cos của góc ban đầu",
        "content": "Góc thuộc phần tư IV nên \\[\\cos x=\\sqrt{1-16/25}=\\frac35\\]"
      },
      {
        "title": "Xác định dấu ở nửa góc",
        "content": "\\[\\frac{3\\pi}4<\\frac x2<\\pi\\]Nửa góc thuộc phần tư II: sin dương và cos âm."
      },
      {
        "title": "Dùng công thức nửa góc",
        "content": "\\[\\sin(x/2)=\\sqrt{\\frac{1-3/5}2}=\\sqrt{\\frac15}=\\frac1{\\sqrt5}\\]"
      }
    ]
  },
  "toan-11-1-1-3c-mc-v2": {
    "prompt": "\\(\\tan x = \\frac{1}{15}\\). Tính \\(B = \\frac{\\sin 2 x}{1 + \\tan 2 x}\\).",
    "options": [
      "\\(-\\left(\\frac{1680}{14351}\\right)\\)",
      "\\(2 \\times \\left(\\frac{1680}{14351}\\right)\\)",
      "\\(\\frac{1680}{14351}\\)",
      "\\(\\frac{\\frac{1680}{14351}}{2}\\)"
    ],
    "explanation": "\\(\\sin 2 x = \\frac{15}{113} , \\tan 2 x = \\frac{15}{112}\\). \\(B = \\frac{\\frac{15}{113}}{\\frac{127}{112}} = \\frac{1680}{14351}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Đổi giá trị góc đôi theo tang",
        "content": "\\[\\sin2x=\\frac{2\\tan x}{1+\\tan^2x}=\\frac{2/15}{226/225}=\\frac{15}{113}\\]"
      },
      {
        "title": "Tính mẫu của biểu thức",
        "content": "\\[\\tan2x=\\frac{2/15}{1-1/225}=\\frac{15}{112},\\quad1+\\tan2x=\\frac{127}{112}\\ne0\\]"
      },
      {
        "title": "Chia hai phân số",
        "content": "\\[B=\\frac{15}{113}\\cdot\\frac{112}{127}=\\frac{1680}{14351}\\]"
      }
    ]
  },
  "toan-11-1-1-3d-mc-v2": {
    "prompt": "\\(\\tan \\left(\\frac{x}{2}\\right) = \\frac{-1}{2}\\). Tính \\(C = \\frac{2 \\sin 2 x - \\cos 2 x}{\\tan 2 x + \\cos 2 x}\\).",
    "options": [
      "\\(\\frac{287}{551}\\)",
      "\\(\\frac{-287}{551}\\)",
      "\\(\\frac{-286}{551}\\)",
      "\\(\\frac{-287}{552}\\)"
    ],
    "explanation": "\\(\\sin x = \\frac{-4}{5} , \\cos x = \\frac{3}{5}\\). \\(\\sin 2 x = \\frac{-24}{25} , \\cos 2 x = \\frac{-7}{25} , \\tan 2 x = \\frac{24}{7}\\). \\(C = \\frac{\\frac{-41}{25}}{\\frac{551}{175}} = \\frac{-287}{551}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tính giá trị từ tang nửa góc",
        "content": "\\[t=-\\frac12,\\quad\\sin x=\\frac{2t}{1+t^2}=-\\frac45,\\quad\\cos x=\\frac{1-t^2}{1+t^2}=\\frac35\\]"
      },
      {
        "title": "Tính các giá trị góc đôi",
        "content": "\\[\\sin2x=2\\cdot\\frac{-4}5\\cdot\\frac35=-\\frac{24}{25},\\quad\\cos2x=\\frac9{25}-\\frac{16}{25}=-\\frac7{25},\\quad\\tan2x=\\frac{24}7\\]"
      },
      {
        "title": "Tính tử và mẫu",
        "content": "\\[2\\sin2x-\\cos2x=-\\frac{48}{25}+\\frac7{25}=-\\frac{41}{25}\\]\\[\\tan2x+\\cos2x=\\frac{24}7-\\frac7{25}=\\frac{551}{175}\\ne0\\]"
      },
      {
        "title": "Thực hiện phép chia",
        "content": "\\[C=-\\frac{41}{25}\\cdot\\frac{175}{551}=-\\frac{287}{551}\\]"
      }
    ]
  },
  "toan-11-1-1-4a-mc-v2": {
    "prompt": "\\(\\sin^{4} x + \\cos^{4} x = \\frac{3}{4} + k \\cos 4 x\\) với mọi \\(x\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{1}{4}\\)",
      "\\(\\frac{-1}{4}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{1}{5}\\)"
    ],
    "explanation": "\\(\\sin^{4} x + \\cos^{4} x = 1 - 2 \\sin^{2} x \\cos^{2} x = 1 - \\frac{\\sin^{2} 2 x}{2} = \\frac{3}{4} + \\frac{\\cos 4 x}{4}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Dùng bình phương của tổng",
        "content": "\\[\\sin^4x+\\cos^4x=(\\sin^2x+\\cos^2x)^2-2\\sin^2x\\cos^2x=1-2\\sin^2x\\cos^2x\\]"
      },
      {
        "title": "Nhân đôi rồi hạ bậc",
        "content": "\\[=1-\\frac12\\sin^22x=1-\\frac{1-\\cos4x}{4}=\\frac34+\\frac14\\cos4x\\]"
      },
      {
        "title": "Đối chiếu hệ số",
        "content": "\\[k=\\frac14\\]"
      }
    ]
  },
  "toan-11-1-1-4b-mc-v2": {
    "prompt": "\\(\\sin^{6} x + \\cos^{6} x = \\frac{5}{8} + k \\cos 4 x\\) với mọi \\(x\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{-3}{8}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{3}{8}\\)"
    ],
    "explanation": "Đặt \\(u = \\sin^{2} x , v = \\cos^{2} x ; u^{3} + v^{3} = \\left(u + v\\right)^{3} - 3\\)uv\\(\\left(u + v\\right) = 1 - \\frac{3 \\sin^{2} 2 x}{4} = \\frac{5}{8} + \\frac{3 \\cos 4 x}{8}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Đặt hai đại lượng có tổng bằng 1",
        "content": "\\[u=\\sin^2x,\\quad v=\\cos^2x,\\quad u+v=1,\\quad uv=\\frac14\\sin^22x\\]"
      },
      {
        "title": "Dùng tổng hai lập phương",
        "content": "\\[u^3+v^3=(u+v)^3-3uv(u+v)=1-\\frac34\\sin^22x\\]"
      },
      {
        "title": "Hạ bậc và lấy hệ số",
        "content": "\\[=1-\\frac38(1-\\cos4x)=\\frac58+\\frac38\\cos4x\\Rightarrow k=\\frac38\\]"
      }
    ]
  },
  "toan-11-1-1-4c-mc-v2": {
    "prompt": "\\(\\sin x \\cos^{3} x - \\cos x \\sin^{3} x = k \\sin 4 x\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{-1}{4}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{1}{4}\\)",
      "\\(\\frac{1}{5}\\)"
    ],
    "explanation": "Vế trái = \\(\\sin x \\cos x \\left(\\cos^{2} x - \\sin^{2} x\\right) = \\frac{\\sin 2 x \\cos 2 x}{2} = \\frac{\\sin 4 x}{4}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Đặt nhân tử chung",
        "content": "\\[\\sin x\\cos^3x-\\cos x\\sin^3x=\\sin x\\cos x(\\cos^2x-\\sin^2x)\\]"
      },
      {
        "title": "Áp dụng nhân đôi lần thứ nhất",
        "content": "\\[=\\frac12\\sin2x\\cos2x\\]"
      },
      {
        "title": "Nhân đôi lần nữa",
        "content": "\\[=\\frac14\\sin4x\\Rightarrow k=\\frac14\\]"
      }
    ]
  },
  "toan-11-1-2-1-mc-v2": {
    "prompt": "Với mọi \\(x , 4 \\cos x \\cos \\left(\\frac{\\pi}{3} - x\\right) \\cos \\left(\\frac{\\pi}{3} + x\\right) = \\cos \\left(k x\\right) , k\\) nguyên dương. Tìm \\(k\\).",
    "options": [
      "\\(-3\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "\\(2 \\cos \\left(\\frac{\\pi}{3} - x\\right) \\cos \\left(\\frac{\\pi}{3} + x\\right) = \\cos \\left(\\frac{2 \\pi}{3}\\right) + \\cos 2 x = \\cos 2 x - \\frac{1}{2}\\). Nhân \\(2 \\cos x\\) rồi dùng tích thành tổng được \\(\\cos 3 x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi tích hai cos có góc đối xứng",
        "content": "\\[2\\cos(\\pi/3-x)\\cos(\\pi/3+x)=\\cos(2\\pi/3)+\\cos2x=\\cos2x-\\frac12\\]"
      },
      {
        "title": "Nhân với thừa số còn lại",
        "content": "\\[P=2\\cos x(\\cos2x-1/2)=2\\cos x\\cos2x-\\cos x\\]"
      },
      {
        "title": "Đổi tích thành tổng và triệt tiêu",
        "content": "\\[P=\\cos3x+\\cos x-\\cos x=\\cos3x\\Rightarrow k=3\\]"
      }
    ]
  },
  "toan-11-1-2-2-mc-v2": {
    "prompt": "Tính hằng số \\(S = \\cos^{2} x + \\cos^{2} \\left(\\frac{2 \\pi}{3} + x\\right) + \\cos^{2} \\left(\\frac{2 \\pi}{3} - x\\right)\\).",
    "options": [
      "\\(\\frac{3}{2}\\)",
      "\\(\\frac{-3}{2}\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "explanation": "Hạ bậc \\(b a\\) bình phương. Tổng các hạng \\(\\cos\\) triệt tiêu, còn \\(\\frac{3}{2}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Hạ bậc ba bình phương",
        "content": "\\[S=\\frac32+\\frac12[\\cos2x+\\cos(4\\pi/3+2x)+\\cos(4\\pi/3-2x)]\\]"
      },
      {
        "title": "Ghép hai hạng đối xứng",
        "content": "\\[\\cos(4\\pi/3+2x)+\\cos(4\\pi/3-2x)=2\\cos(4\\pi/3)\\cos2x=-\\cos2x\\]"
      },
      {
        "title": "Triệt tiêu và kết luận",
        "content": "\\[S=\\frac32+\\frac12(\\cos2x-\\cos2x)=\\frac32\\]"
      }
    ]
  },
  "toan-11-1-2-3a-mc-v2": {
    "prompt": "\\(2 \\sin \\left(a + b\\right) \\cos \\left(a - b\\right) = \\sin \\left(2 a\\right) + k \\sin \\left(2 b\\right)\\). Tìm \\(k\\).",
    "options": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)"
    ],
    "explanation": "Dùng \\(2 \\sin u \\cos v = \\sin \\left(u + v\\right) + \\sin \\left(u - v\\right)\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Chọn công thức",
        "content": "\\[2\\sin u\\cos v=\\sin(u+v)+\\sin(u-v)\\]"
      },
      {
        "title": "Thay hai góc",
        "content": "\\[u=a+b,\\ v=a-b\\Rightarrow u+v=2a,\\ u-v=2b\\]"
      },
      {
        "title": "Rút gọn và đối chiếu",
        "content": "\\[2\\sin(a+b)\\cos(a-b)=\\sin2a+\\sin2b\\Rightarrow k=1\\]"
      }
    ]
  },
  "toan-11-1-2-3b-mc-v2": {
    "prompt": "\\(2 \\cos \\left(a + b\\right) \\cos \\left(a - b\\right) = \\cos \\left(2 a\\right) + k \\cos \\left(2 b\\right)\\). Tìm \\(k\\).",
    "options": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(1\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Dùng \\(2 \\cos u \\cos v = \\cos \\left(u + v\\right) + \\cos \\left(u - v\\right)\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Chọn công thức",
        "content": "\\[2\\cos u\\cos v=\\cos(u+v)+\\cos(u-v)\\]"
      },
      {
        "title": "Thay hai góc",
        "content": "\\[u=a+b,\\ v=a-b\\Rightarrow u+v=2a,\\ u-v=2b\\]"
      },
      {
        "title": "Rút gọn và đối chiếu",
        "content": "\\[2\\cos(a+b)\\cos(a-b)=\\cos2a+\\cos2b\\Rightarrow k=1\\]"
      }
    ]
  },
  "toan-11-1-2-3c-mc-v2": {
    "prompt": "Viết \\(4 \\sin 3 x \\sin 2 x \\cos x = A\\) + Bcos\\(2 x\\) + Ccos\\(4 x\\) + Dcos\\(6 x\\). Tìm \\(A\\).",
    "options": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "\\(4 \\sin 3 x \\sin 2 x \\cos x = 2 \\sin 3 x \\left(\\sin 3 x + \\sin x\\right) = 1 + \\cos 2 x - \\cos 4 x - \\cos 6 x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Ghép sin với cos",
        "content": "\\[2\\sin2x\\cos x=\\sin3x+\\sin x\\]"
      },
      {
        "title": "Khai triển tích",
        "content": "\\[4\\sin3x\\sin2x\\cos x=2\\sin^23x+2\\sin3x\\sin x\\]"
      },
      {
        "title": "Hạ bậc và đổi tích",
        "content": "\\[=1-\\cos6x+\\cos2x-\\cos4x\\Rightarrow A=1\\]"
      }
    ]
  },
  "toan-11-1-2-3d-mc-v2": {
    "prompt": "\\(4 \\sin \\left(\\frac{13 x}{2}\\right) \\cos x \\cos \\left(\\frac{x}{2}\\right) = \\sin\\)(px)\\(+\\sin\\)(qx)\\(+\\sin\\)(rx)\\(+\\sin\\)(sx), với \\(p , q , r , s\\) là số nguyên dương. Tính \\(p + q + r + s\\).",
    "options": [
      "\\(26\\)",
      "\\(-26\\)",
      "\\(27\\)",
      "\\(13\\)"
    ],
    "explanation": "Dùng \\(2 \\cos x \\cos \\left(\\frac{x}{2}\\right) = \\cos \\left(\\frac{3 x}{2}\\right) + \\cos \\left(\\frac{x}{2}\\right)\\), thu được \\(\\sin 8 x + \\sin 5 x + \\sin 7 x + \\sin 6 x\\). Tổng là \\(26\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Ghép hai cos",
        "content": "\\[2\\cos x\\cos(x/2)=\\cos(3x/2)+\\cos(x/2)\\]"
      },
      {
        "title": "Đổi hai tích sin với cos",
        "content": "\\[P=2\\sin(13x/2)\\cos(3x/2)+2\\sin(13x/2)\\cos(x/2)\\]\\[P=\\sin8x+\\sin5x+\\sin7x+\\sin6x\\]"
      },
      {
        "title": "Cộng các hệ số góc",
        "content": "\\[p+q+r+s=8+5+7+6=26\\]"
      }
    ]
  },
  "toan-11-1-2-3e-mc-v2": {
    "prompt": "\\(\\sin \\left(x + 30^{\\circ}\\right) \\cos \\left(x - 30^{\\circ}\\right) = A \\sin 2 x + B\\). Tìm \\(A\\).",
    "options": [
      "\\(\\frac{-1}{2}\\)",
      "\\(1\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Tích thành tổng: \\(\\frac{\\sin 2 x + \\sin 60^{\\circ}}{2} = \\frac{\\sin 2 x}{2} + \\frac{\\sqrt{3}}{4}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi tích thành tổng",
        "content": "\\[\\sin(x+30^\\circ)\\cos(x-30^\\circ)=\\frac12\\{\\sin[(x+30^\\circ)+(x-30^\\circ)]+\\sin60^\\circ\\}\\]"
      },
      {
        "title": "Tính sin của góc đặc biệt",
        "content": "\\[=\\frac12\\sin2x+\\frac12\\cdot\\frac{\\sqrt3}2=\\frac12\\sin2x+\\frac{\\sqrt3}4\\]"
      },
      {
        "title": "Đối chiếu hệ số",
        "content": "\\[A=\\frac12\\]"
      }
    ]
  },
  "toan-11-1-2-3f-mc-v2": {
    "prompt": "Tính \\(\\sin \\left(\\frac{\\pi}{5}\\right) \\sin \\left(\\frac{2 \\pi}{5}\\right)\\).",
    "options": [
      "\\(-\\left(\\frac{\\sqrt{5}}{4}\\right)\\)",
      "\\(2 \\times \\left(\\frac{\\sqrt{5}}{4}\\right)\\)",
      "\\(\\frac{\\sqrt{5}}{4}\\)",
      "\\(\\frac{\\frac{\\sqrt{5}}{4}}{2}\\)"
    ],
    "explanation": "\\(\\sin 36^{\\circ} \\sin 72^{\\circ} = \\frac{\\cos 36^{\\circ} - \\cos 108^{\\circ}}{2} = \\frac{\\sqrt{5}}{4}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi góc và tích",
        "content": "\\[\\sin(\\pi/5)\\sin(2\\pi/5)=\\sin36^\\circ\\sin72^\\circ=\\frac{\\cos36^\\circ-\\cos108^\\circ}{2}\\]"
      },
      {
        "title": "Tính các cos đặc biệt",
        "content": "\\[\\cos36^\\circ=\\frac{1+\\sqrt5}4,\\quad\\cos108^\\circ=-\\cos72^\\circ=-\\frac{\\sqrt5-1}4\\]"
      },
      {
        "title": "Thay và rút gọn",
        "content": "\\[\\frac12\\left(\\frac{1+\\sqrt5}4+\\frac{\\sqrt5-1}4\\right)=\\frac{\\sqrt5}4\\]"
      }
    ]
  },
  "toan-11-1-2-3g-mc-v2": {
    "prompt": "Viết \\(2 \\sin x \\sin 2 x \\sin 3 x = A \\sin 2 x + B \\sin 4 x + C \\sin 6 x\\). Tìm \\(C\\).",
    "options": [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{-1}{2}\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{3}\\)"
    ],
    "explanation": "\\(2 \\sin x \\sin 2 x \\sin 3 x = \\frac{\\sin 2 x + \\sin 4 x - \\sin 6 x}{2}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Ghép hai sin",
        "content": "\\[2\\sin x\\sin3x=\\cos2x-\\cos4x\\]"
      },
      {
        "title": "Nhân với sin còn lại",
        "content": "\\[P=\\sin2x\\cos2x-\\sin2x\\cos4x\\]"
      },
      {
        "title": "Đổi tích và gom hạng",
        "content": "\\[P=\\frac12\\sin4x-\\frac12(\\sin6x-\\sin2x)=\\frac12\\sin2x+\\frac12\\sin4x-\\frac12\\sin6x\\]\\[C=-\\frac12\\]"
      }
    ]
  },
  "toan-11-1-2-3h-mc-v2": {
    "prompt": "Viết \\(8 \\cos x \\sin 2 x \\sin 3 x = A\\) + Bcos\\(2 x\\) + Ccos\\(4 x\\) + Dcos\\(6 x\\). Tìm \\(A\\).",
    "options": [
      "\\(2\\)",
      "\\(-2\\)",
      "\\(3\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(8 \\cos x \\sin 2 x \\sin 3 x = 4 \\cos x \\left(\\cos x - \\cos 5 x\\right) = 2 + 2 \\cos 2 x - 2 \\cos 4 x - 2 \\cos 6 x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi tích hai sin",
        "content": "\\[2\\sin2x\\sin3x=\\cos x-\\cos5x\\]"
      },
      {
        "title": "Nhân với phần còn lại",
        "content": "\\[P=4\\cos x(\\cos x-\\cos5x)=4\\cos^2x-4\\cos x\\cos5x\\]"
      },
      {
        "title": "Hạ bậc và đổi tích",
        "content": "\\[P=2+2\\cos2x-2\\cos6x-2\\cos4x\\Rightarrow A=2\\]"
      }
    ]
  },
  "toan-11-1-2-3i-mc-v2": {
    "prompt": "Viết \\(\\sin \\left(x + \\frac{\\pi}{6}\\right) \\sin \\left(x - \\frac{\\pi}{6}\\right) \\cos 2 x = A\\) + Bcos\\(2 x\\) + Ccos\\(4 x\\). Tìm \\(A\\).",
    "options": [
      "\\(\\frac{1}{4}\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{5}\\)",
      "\\(\\frac{-1}{4}\\)"
    ],
    "explanation": "Tích hai \\(\\sin\\) bằng \\(\\frac{1}{4} - \\frac{\\cos 2 x}{2}\\). Nhân \\(\\cos 2 x\\) và hạ bậc được \\(\\frac{-1}{4} + \\frac{\\cos 2 x}{4} - \\frac{\\cos 4 x}{4}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi tích hai sin",
        "content": "\\[\\sin(x+\\pi/6)\\sin(x-\\pi/6)=\\frac{\\cos(\\pi/3)-\\cos2x}2=\\frac14-\\frac12\\cos2x\\]"
      },
      {
        "title": "Nhân rồi hạ bậc",
        "content": "\\[P=\\frac14\\cos2x-\\frac12\\cos^22x=\\frac14\\cos2x-\\frac14(1+\\cos4x)\\]"
      },
      {
        "title": "Đối chiếu hạng tự do",
        "content": "\\[P=-\\frac14+\\frac14\\cos2x-\\frac14\\cos4x\\Rightarrow A=-\\frac14\\]"
      }
    ]
  },
  "toan-11-1-2-3k-mc-v2": {
    "prompt": "Với mọi \\(a , b , c : 4 \\cos \\left(a - b\\right) \\cos \\left(b - c\\right) \\cos \\left(c - a\\right) = K + \\cos 2 \\left(a - b\\right) + \\cos 2 \\left(b - c\\right) + \\cos 2 \\left(c - a\\right)\\). Tìm \\(K\\).",
    "options": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(1\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Đặt \\(u = a - b , v = b - c\\) thì \\(c - a = -\\left(u + v\\right)\\). Dùng tích thành tổng hai lần thu được hằng số \\(1\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi biến góc",
        "content": "\\[u=a-b,\\quad v=b-c,\\quad c-a=-(u+v)\\]"
      },
      {
        "title": "Đổi tích đầu",
        "content": "\\[4\\cos u\\cos v\\cos(u+v)=2[\\cos(u+v)+\\cos(u-v)]\\cos(u+v)\\]"
      },
      {
        "title": "Khai triển hai tích",
        "content": "\\[=1+\\cos2(u+v)+\\cos2u+\\cos2v\\]"
      },
      {
        "title": "Đổi lại góc ban đầu",
        "content": "\\[=1+\\cos2(c-a)+\\cos2(a-b)+\\cos2(b-c)\\Rightarrow K=1\\]"
      }
    ]
  },
  "toan-11-1-3-1a-mc-v2": {
    "prompt": "\\(\\sin x + \\sin 2 x + \\sin 3 x = \\left(1 + k \\cos x\\right) \\sin 2 x\\). Tìm \\(k\\).",
    "options": [
      "\\(-2\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(\\sin x + \\sin 3 x = 2 \\sin 2 x \\cos x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Ghép hai góc đối xứng",
        "content": "\\[\\sin x+\\sin3x=2\\sin2x\\cos x\\]"
      },
      {
        "title": "Cộng hạng còn lại",
        "content": "\\[\\sin x+\\sin2x+\\sin3x=(2\\cos x+1)\\sin2x\\]"
      },
      {
        "title": "Đối chiếu hệ số",
        "content": "\\[k=2\\]"
      }
    ]
  },
  "toan-11-1-3-1b-mc-v2": {
    "prompt": "\\(\\sin x + \\sin 3 x + \\sin 5 x + \\sin 7 x = k \\sin 4 x \\cos 2 x \\cos x\\). Tìm \\(k\\).",
    "options": [
      "\\(4\\)",
      "\\(-4\\)",
      "\\(5\\)",
      "\\(2\\)"
    ],
    "explanation": "Ghép \\(\\sin x + \\sin 7 x\\) và \\(\\sin 3 x + \\sin 5 x : 2 \\sin 4 x \\left(\\cos 3 x + \\cos x\\right) = 4 \\sin 4 x \\cos 2 x \\cos x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Ghép hai cặp",
        "content": "\\[\\sin x+\\sin7x=2\\sin4x\\cos3x,\\quad\\sin3x+\\sin5x=2\\sin4x\\cos x\\]"
      },
      {
        "title": "Đặt nhân tử chung và ghép cos",
        "content": "\\[P=2\\sin4x(\\cos3x+\\cos x)=2\\sin4x\\cdot2\\cos2x\\cos x\\]"
      },
      {
        "title": "Đối chiếu",
        "content": "\\[P=4\\sin4x\\cos2x\\cos x\\Rightarrow k=4\\]"
      }
    ]
  },
  "toan-11-1-3-1c-mc-v2": {
    "prompt": "\\(\\cos x + \\cos 2 x + \\cos 3 x + \\cos 4 x = k \\cos \\left(\\frac{5 x}{2}\\right) \\cos x \\cos \\left(\\frac{x}{2}\\right)\\). Tìm \\(k\\).",
    "options": [
      "\\(-4\\)",
      "\\(5\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "Ghép \\(\\cos x + \\cos 4 x\\) và \\(\\cos 2 x + \\cos 3 x\\) rồi dùng \\(\\cos u + \\cos v\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Ghép các góc có cùng trung bình",
        "content": "\\[\\cos x+\\cos4x=2\\cos(5x/2)\\cos(3x/2)\\]\\[\\cos2x+\\cos3x=2\\cos(5x/2)\\cos(x/2)\\]"
      },
      {
        "title": "Đặt nhân tử và ghép tiếp",
        "content": "\\[P=2\\cos(5x/2)[\\cos(3x/2)+\\cos(x/2)]\\]\\[\\cos(3x/2)+\\cos(x/2)=2\\cos x\\cos(x/2)\\]"
      },
      {
        "title": "Đối chiếu hệ số",
        "content": "\\[P=4\\cos(5x/2)\\cos x\\cos(x/2)\\Rightarrow k=4\\]"
      }
    ]
  },
  "toan-11-1-3-1d-mc-v2": {
    "prompt": "Khi biểu thức xác định, \\(\\frac{\\cos x + \\cos y}{\\cos x - \\cos y} = k \\cot \\left(\\frac{x + y}{2}\\right) \\cot \\left(\\frac{x - y}{2}\\right)\\). Tìm \\(k\\).",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(-1\\)",
      "\\(\\frac{-1}{2}\\)"
    ],
    "explanation": "Tử = \\(2 \\cos \\left(\\frac{x + y}{2}\\right) \\cos \\left(\\frac{x - y}{2}\\right)\\), mẫu = \\(-2 \\sin \\left(\\frac{x + y}{2}\\right) \\sin \\left(\\frac{x - y}{2}\\right)\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Biến đổi tử và mẫu",
        "content": "\\[\\cos x+\\cos y=2\\cos\\frac{x+y}2\\cos\\frac{x-y}2\\]\\[\\cos x-\\cos y=-2\\sin\\frac{x+y}2\\sin\\frac{x-y}2\\]"
      },
      {
        "title": "Kiểm tra điều kiện",
        "content": "Mẫu khác 0 nên cả hai sin ở mẫu đều khác 0; được phép chia từng thừa số."
      },
      {
        "title": "Chia và đối chiếu",
        "content": "\\[P=-\\frac{\\cos((x+y)/2)}{\\sin((x+y)/2)}\\frac{\\cos((x-y)/2)}{\\sin((x-y)/2)}=-\\cot\\frac{x+y}2\\cot\\frac{x-y}2\\Rightarrow k=-1\\]"
      }
    ]
  },
  "toan-11-1-3-2a-mc-v2": {
    "prompt": "\\(\\cos 5 x \\cos 3 x + \\sin 7 x \\sin x = \\cos 2 x \\cos \\left(k x\\right)\\) với mọi \\(x , k\\) nguyên dương. Tìm \\(k\\).",
    "options": [
      "\\(-4\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(2\\)"
    ],
    "explanation": "Tích thành tổng cho \\(\\frac{\\cos 2 x + \\cos 8 x + \\cos 6 x - \\cos 8 x}{2} = \\cos 2 x \\cos 4 x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi từng tích",
        "content": "\\[\\cos5x\\cos3x=\\frac{\\cos2x+\\cos8x}2,\\quad\\sin7x\\sin x=\\frac{\\cos6x-\\cos8x}2\\]"
      },
      {
        "title": "Cộng và triệt tiêu",
        "content": "\\[P=\\frac{\\cos2x+\\cos6x}2\\]"
      },
      {
        "title": "Tổng thành tích",
        "content": "\\[P=\\cos4x\\cos2x\\Rightarrow k=4\\]"
      }
    ]
  },
  "toan-11-1-3-2b-mc-v2": {
    "prompt": "\\(\\sin 5 x - 2 \\sin x \\left(\\cos 2 x + \\cos 4 x\\right) = \\sin \\left(k x\\right)\\) với mọi \\(x , k\\) nguyên dương. Tìm \\(k\\).",
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "\\(2 \\sin x \\cos 2 x = \\sin 3 x - \\sin x , 2 \\sin x \\cos 4 x = \\sin 5 x - \\sin 3 x\\). Rút gọn còn \\(\\sin x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi hai tích",
        "content": "\\[2\\sin x\\cos2x=\\sin3x-\\sin x,\\quad2\\sin x\\cos4x=\\sin5x-\\sin3x\\]"
      },
      {
        "title": "Thế vào và khử các hạng",
        "content": "\\[M=\\sin5x-[(\\sin3x-\\sin x)+(\\sin5x-\\sin3x)]=\\sin x\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[M=\\sin x\\Rightarrow k=1\\]"
      }
    ]
  },
  "toan-11-1-3-2c-mc-v2": {
    "prompt": "\\(\\cos 5 x \\cos x + \\sin 3 x \\sin x = \\cos 2 x \\cos \\left(k x\\right) , k\\) nguyên dương. Tìm \\(k\\).",
    "options": [
      "\\(-4\\)",
      "\\(5\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "Vế trái = \\(\\frac{\\cos 6 x + \\cos 4 x + \\cos 2 x - \\cos 4 x}{2} = \\cos 4 x \\cos 2 x\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi từng tích",
        "content": "\\[\\cos5x\\cos x=\\frac{\\cos6x+\\cos4x}2,\\quad\\sin3x\\sin x=\\frac{\\cos2x-\\cos4x}2\\]"
      },
      {
        "title": "Triệt tiêu rồi ghép tổng",
        "content": "\\[P=\\frac{\\cos6x+\\cos2x}2=\\cos4x\\cos2x\\]"
      },
      {
        "title": "Đối chiếu hệ số góc",
        "content": "\\[k=4\\]"
      }
    ]
  },
  "toan-11-1-3-2d-mc-v2": {
    "prompt": "\\(2 \\left(\\sin a \\cos 2 a - \\sin 2 a \\cos 3 a\\right) + \\sin 5 a = \\sin \\left(k a\\right) , k\\) nguyên dương. Tìm \\(k\\).",
    "options": [
      "\\(-3\\)",
      "\\(4\\)",
      "\\(3\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "Đổi tích thành tổng, các hạng \\(\\sin a\\) và \\(\\sin 5 a\\) triệt tiêu, còn \\(\\sin 3 a\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi hai tích",
        "content": "\\[2\\sin a\\cos2a=\\sin3a-\\sin a,\\quad2\\sin2a\\cos3a=\\sin5a-\\sin a\\]"
      },
      {
        "title": "Thay vào biểu thức",
        "content": "\\[P=(\\sin3a-\\sin a)-(\\sin5a-\\sin a)+\\sin5a\\]"
      },
      {
        "title": "Triệt tiêu và kết luận",
        "content": "\\[P=\\sin3a\\Rightarrow k=3\\]"
      }
    ]
  },
  "toan-11-1-3-3-mc-v2": {
    "prompt": "\\(M = \\sin 5 x - 2 \\sin x \\left(\\cos 4 x + \\cos 2 x\\right)\\). Tính \\(M\\) khi \\(x = \\frac{\\pi}{6}\\).",
    "options": [
      "\\(\\frac{-1}{2}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\frac{1}{3}\\)"
    ],
    "explanation": "Rút gọn như công thức tổng thành tích: \\(M = \\sin x\\). Tại \\(\\frac{\\pi}{6} , M = \\frac{1}{2}\\).",
    "hint": "Dùng công thức lượng giác tương ứng.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đổi hai tích",
        "content": "\\[2\\sin x\\cos2x=\\sin3x-\\sin x,\\quad2\\sin x\\cos4x=\\sin5x-\\sin3x\\]"
      },
      {
        "title": "Thế vào và khử các hạng",
        "content": "\\[M=\\sin5x-[(\\sin3x-\\sin x)+(\\sin5x-\\sin3x)]=\\sin x\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[x=\\pi/6\\Rightarrow M=\\sin(\\pi/6)=\\frac12\\]"
      }
    ]
  },
  "toan-11-1-mc-10-1": {
    "prompt": "Công thức nào đúng?",
    "options": [
      "\\(\\cos \\left(a + b\\right) = \\cos a \\cos b + \\sin a \\sin b\\)",
      "\\(\\cos \\left(a + b\\right) = \\cos a \\cos b - \\sin a \\sin b\\)",
      "\\(\\cos \\left(a + b\\right) = \\sin a \\cos b + \\cos a \\sin b\\)",
      "\\(\\cos \\left(a + b\\right) = \\sin a \\sin b - \\cos a \\cos b\\)"
    ],
    "explanation": "Cos của tổng có dấu trừ.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    }
  },
  "toan-11-1-mc-10-2": {
    "prompt": "\\(\\sin \\left(a - b\\right)\\) bằng:",
    "options": [
      "\\(\\sin a \\cos b + \\cos a \\sin b\\)",
      "\\(\\cos a \\cos b - \\sin a \\sin b\\)",
      "\\(\\cos a \\sin b - \\sin a \\cos b\\)",
      "\\(\\sin a \\cos b - \\cos a \\sin b\\)"
    ],
    "explanation": "Sin của hiệu bằng \\(\\sin a \\cos b\\) trừ \\(\\cos a \\sin b\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    }
  },
  "toan-11-1-mc-10-3": {
    "prompt": "Công thức \\(\\tan \\left(a - b\\right)\\) đúng là:",
    "options": [
      "\\(\\frac{\\tan a - \\tan b}{1 + \\tan a \\tan b}\\)",
      "\\(\\frac{\\tan a + \\tan b}{1 + \\tan a \\tan b}\\)",
      "\\(\\frac{\\tan a - \\tan b}{1 - \\tan a \\tan b}\\)",
      "\\(\\frac{1 + \\tan a \\tan b}{\\tan a - \\tan b}\\)"
    ],
    "explanation": "Mẫu số có dấu cộng.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    }
  },
  "toan-11-1-mc-10-7": {
    "prompt": "\\(\\sin \\alpha = \\frac{4}{5} , \\alpha\\) ở phần tư \\(I ; \\cos \\beta = \\frac{-5}{13} , \\beta\\) ở phần tư \\(II\\). Tính \\(\\cos \\left(\\alpha - \\beta\\right)\\).",
    "options": [
      "\\(\\frac{-63}{65}\\)",
      "\\(\\frac{-33}{65}\\)",
      "\\(\\frac{63}{65}\\)",
      "\\(\\frac{33}{65}\\)"
    ],
    "explanation": "\\(\\cos \\alpha = \\frac{3}{5} , \\sin \\beta = \\frac{12}{13}\\). \\(\\cos \\left(\\alpha - \\beta\\right) = \\frac{-15}{65} + \\frac{48}{65} = \\frac{33}{65}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b",
        "\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b",
        "\\tan(a\\pm b)=\\frac{\\tan a\\pm\\tan b}{1\\mp\\tan a\\tan b}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Trong công thức \\(\\tan\\), các \\(\\tan\\) và mẫu số đều phải xác định. Chọn dấu trên hoặc dấu dưới nhất quán."
    },
    "solutionSteps": [
      {
        "title": "Tính giá trị còn lại theo dấu",
        "content": "\\[\\cos\\alpha=\\sqrt{1-16/25}=\\frac35,\\quad\\sin\\beta=\\sqrt{1-25/169}=\\frac{12}{13}\\]"
      },
      {
        "title": "Khai triển cos của hiệu",
        "content": "\\[\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\]"
      },
      {
        "title": "Thay số và quy đồng",
        "content": "\\[=\\frac35\\cdot\\frac{-5}{13}+\\frac45\\cdot\\frac{12}{13}=\\frac{-15+48}{65}=\\frac{33}{65}\\]"
      }
    ]
  },
  "toan-11-1-mc-10-9": {
    "prompt": "Công thức \\(\\sin 2 a\\) đúng là:",
    "options": [
      "\\(\\sin^{2} a - \\cos^{2} a\\)",
      "\\(\\sin a + \\cos a\\)",
      "\\(2 \\sin a \\cos a\\)",
      "\\(2 \\sin^{2} a\\)"
    ],
    "explanation": "Sin nhân đôi bằng \\(2 \\sin a \\cos a\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    }
  },
  "toan-11-1-mc-10-10": {
    "prompt": "Biểu thức bằng \\(\\cos 2 a\\) là:",
    "options": [
      "\\(1 + 2 \\sin^{2} a\\)",
      "\\(1 - 2 \\sin^{2} a\\)",
      "\\(2 \\sin a \\cos a\\)",
      "\\(2 \\sin^{2} a - 1\\)"
    ],
    "explanation": "\\(\\cos 2 a = 1 - 2 \\sin^{2} a\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    }
  },
  "toan-11-1-mc-10-11": {
    "prompt": "Công thức hạ bậc đúng là:",
    "options": [
      "\\(\\cos^{2} a = \\frac{1 - \\cos 2 a}{2}\\)",
      "\\(\\sin^{2} a = \\frac{1 + \\cos 2 a}{2}\\)",
      "\\(\\cos^{2} a = 1 + \\cos 2 a\\)",
      "\\(\\cos^{2} a = \\frac{1 + \\cos 2 a}{2}\\)"
    ],
    "explanation": "\\(\\cos 2 a = 2 \\cos^{2} a - 1\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    }
  },
  "toan-11-1-mc-10-12": {
    "prompt": "\\(\\cos \\alpha = \\frac{-3}{5}\\) và \\(\\frac{\\pi}{2} < \\alpha < \\pi\\). Khi đó \\(\\sin 2 \\alpha\\) bằng:",
    "options": [
      "\\(\\frac{-24}{25}\\)",
      "\\(\\frac{-7}{25}\\)",
      "\\(\\frac{7}{25}\\)",
      "\\(\\frac{24}{25}\\)"
    ],
    "explanation": "\\(\\sin \\alpha = \\frac{4}{5}\\) nên \\(\\sin 2 \\alpha = 2 \\left(\\frac{-3}{5}\\right) \\left(\\frac{4}{5}\\right)\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Tìm sin theo phần tư II",
        "content": "\\[\\sin\\alpha=\\sqrt{1-9/25}=\\frac45\\]"
      },
      {
        "title": "Dùng công thức góc đôi",
        "content": "\\[\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha\\]"
      },
      {
        "title": "Thay số",
        "content": "\\[\\sin2\\alpha=2\\cdot\\frac45\\cdot\\frac{-3}5=-\\frac{24}{25}\\]"
      }
    ]
  },
  "toan-11-1-mc-10-14": {
    "prompt": "\\(\\tan \\alpha = \\frac{1}{3}\\) và \\(\\tan 2 \\alpha\\) xác định. Tính \\(\\tan 2 \\alpha\\).",
    "options": [
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{3}{4}\\)",
      "\\(\\frac{4}{3}\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "\\(\\tan 2 \\alpha = \\frac{2 t}{1 - t^{2}} = \\frac{\\frac{2}{3}}{\\frac{8}{9}} = \\frac{3}{4}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Kiểm tra mẫu",
        "content": "\\[1-\\tan^2\\alpha=1-\\frac19=\\frac89\\ne0\\]"
      },
      {
        "title": "Áp dụng công thức",
        "content": "\\[\\tan2\\alpha=\\frac{2\\tan\\alpha}{1-\\tan^2\\alpha}\\]"
      },
      {
        "title": "Thực hiện phép chia",
        "content": "\\[\\tan2\\alpha=\\frac{2/3}{8/9}=\\frac23\\cdot\\frac98=\\frac34\\]"
      }
    ]
  },
  "toan-11-1-mc-10-15": {
    "prompt": "\\(\\sin \\alpha + \\cos \\alpha = \\frac{1}{2}\\). Tính \\(\\sin 2 \\alpha\\).",
    "options": [
      "\\(\\frac{3}{4}\\)",
      "\\(\\frac{-1}{4}\\)",
      "\\(\\frac{1}{4}\\)",
      "\\(\\frac{-3}{4}\\)"
    ],
    "explanation": "Bình phương: \\(1 + \\sin 2 \\alpha = \\frac{1}{4}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Bình phương đẳng thức đã cho",
        "content": "\\[(\\sin\\alpha+\\cos\\alpha)^2=\\frac14\\]"
      },
      {
        "title": "Khai triển và dùng hệ thức cơ bản",
        "content": "\\[1+2\\sin\\alpha\\cos\\alpha=\\frac14\\Rightarrow1+\\sin2\\alpha=\\frac14\\]"
      },
      {
        "title": "Giải theo giá trị cần tính",
        "content": "\\[\\sin2\\alpha=\\frac14-1=-\\frac34\\]"
      }
    ]
  },
  "toan-11-1-mc-10-16": {
    "prompt": "\\(\\sin \\alpha - \\cos \\alpha = \\frac{1}{3}\\). Tính \\(\\sin 2 \\alpha\\).",
    "options": [
      "\\(\\frac{-8}{9}\\)",
      "\\(\\frac{8}{9}\\)",
      "\\(\\frac{1}{9}\\)",
      "\\(\\frac{-1}{9}\\)"
    ],
    "explanation": "Bình phương: \\(1 - \\sin 2 \\alpha = \\frac{1}{9}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin2a=2\\sin a\\cos a",
        "\\cos2a=2\\cos^2a-1=1-2\\sin^2a",
        "\\sin^2a=\\frac{1-\\cos2a}2,\\quad\\cos^2a=\\frac{1+\\cos2a}2",
        "\\tan2a=\\frac{2\\tan a}{1-\\tan^2a}"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": "Công thức \\(\\tan\\) chỉ dùng khi các biểu thức và mẫu số xác định."
    },
    "solutionSteps": [
      {
        "title": "Bình phương đẳng thức đã cho",
        "content": "\\[(\\sin\\alpha-\\cos\\alpha)^2=\\frac19\\]"
      },
      {
        "title": "Khai triển và dùng hệ thức cơ bản",
        "content": "\\[1-2\\sin\\alpha\\cos\\alpha=\\frac19\\Rightarrow1-\\sin2\\alpha=\\frac19\\]"
      },
      {
        "title": "Giải theo giá trị cần tính",
        "content": "\\[\\sin2\\alpha=1-\\frac19=\\frac89\\]"
      }
    ]
  },
  "toan-11-1-mc-10-17": {
    "prompt": "Công thức tích thành tổng đúng là:",
    "options": [
      "cosacosb=\\(\\frac{\\cos \\left(a - b\\right) - \\cos \\left(a + b\\right)}{2}\\)",
      "cosacosb=\\(\\frac{\\cos \\left(a - b\\right) + \\cos \\left(a + b\\right)}{2}\\)",
      "cosacosb=\\(\\frac{\\sin \\left(a - b\\right) + \\sin \\left(a + b\\right)}{2}\\)",
      "cosacosb=\\(\\cos \\left(a - b\\right) + \\cos \\left(a + b\\right)\\)"
    ],
    "explanation": "Tích hai \\(\\cos\\) bằng nửa tổng hai \\(\\cos\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-10-18": {
    "prompt": "\\(\\sin a \\sin b\\) bằng:",
    "options": [
      "\\(\\frac{\\cos \\left(a + b\\right) + \\cos \\left(a - b\\right)}{2}\\)",
      "\\(\\frac{\\sin \\left(a - b\\right) - \\sin \\left(a + b\\right)}{2}\\)",
      "\\(\\frac{\\cos \\left(a + b\\right) - \\cos \\left(a - b\\right)}{2}\\)",
      "\\(\\frac{\\cos \\left(a - b\\right) - \\cos \\left(a + b\\right)}{2}\\)"
    ],
    "explanation": "Tích hai \\(\\sin\\) bằng nửa hiệu \\(\\cos\\) của hiệu và \\(\\cos\\) của tổng.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-10-21": {
    "prompt": "\\(\\sin 5 x \\cos 2 x\\) bằng:",
    "options": [
      "\\(\\frac{\\sin 7 x - \\sin 3 x}{2}\\)",
      "\\(\\frac{\\sin 7 x + \\sin 3 x}{2}\\)",
      "\\(\\sin 7 x + \\sin 3 x\\)",
      "\\(\\frac{\\cos 3 x - \\cos 7 x}{2}\\)"
    ],
    "explanation": "Dùng \\(2 \\sin u \\cos v = \\sin \\left(u + v\\right) + \\sin \\left(u - v\\right)\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Chọn công thức tích thành tổng",
        "content": "\\[\\sin u\\cos v=\\frac{\\sin(u+v)+\\sin(u-v)}2\\]"
      },
      {
        "title": "Tính tổng và hiệu hai góc",
        "content": "\\[u=5x,\\ v=2x\\Rightarrow u+v=7x,\\ u-v=3x\\]"
      },
      {
        "title": "Thay lại",
        "content": "\\[\\sin5x\\cos2x=\\frac{\\sin7x+\\sin3x}2\\]"
      }
    ]
  },
  "toan-11-1-mc-10-22": {
    "prompt": "\\(s \\left(t\\right) = 2 \\sin \\left(100 t\\right) \\cos \\left(4 t\\right)\\) bằng:",
    "options": [
      "\\(\\sin 100 t + \\sin 4 t\\)",
      "\\(2 \\sin 104 t + 2 \\sin 96 t\\)",
      "\\(\\cos 96 t - \\cos 104 t\\)",
      "\\(\\sin 104 t + \\sin 96 t\\)"
    ],
    "explanation": "Áp dụng tích thành tổng với \\(u = 100 t , v = 4 t\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)",
        "2\\cos a\\cos b=\\cos(a+b)+\\cos(a-b)",
        "2\\sin a\\sin b=\\cos(a-b)-\\cos(a+b)"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Chọn hai góc",
        "content": "\\[u=100t,\\quad v=4t\\]"
      },
      {
        "title": "Áp dụng tích thành tổng",
        "content": "\\[2\\sin u\\cos v=\\sin(u+v)+\\sin(u-v)\\]"
      },
      {
        "title": "Thu gọn",
        "content": "\\[s(t)=\\sin104t+\\sin96t\\]"
      }
    ]
  },
  "toan-11-1-mc-10-24": {
    "prompt": "Công thức \\(\\cos u + \\cos v\\) đúng là:",
    "options": [
      "\\(2 \\cos \\left(\\frac{u + v}{2}\\right) \\cos \\left(\\frac{u - v}{2}\\right)\\)",
      "\\(2 \\sin \\left(\\frac{u + v}{2}\\right) \\sin \\left(\\frac{u - v}{2}\\right)\\)",
      "\\(-2 \\sin \\left(\\frac{u + v}{2}\\right) \\sin \\left(\\frac{u - v}{2}\\right)\\)",
      "\\(2 \\cos \\left(\\frac{u + v}{2}\\right) \\sin \\left(\\frac{u - v}{2}\\right)\\)"
    ],
    "explanation": "Tổng hai \\(\\cos\\) bằng hai lần tích \\(\\cos\\) trung bình cộng và \\(\\cos\\) nửa hiệu.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-10-25": {
    "prompt": "\\(\\cos u - \\cos v\\) bằng:",
    "options": [
      "\\(2 \\cos \\left(\\frac{u + v}{2}\\right) \\cos \\left(\\frac{u - v}{2}\\right)\\)",
      "\\(2 \\sin \\left(\\frac{u + v}{2}\\right) \\sin \\left(\\frac{u - v}{2}\\right)\\)",
      "\\(-2 \\sin \\left(\\frac{u + v}{2}\\right) \\sin \\left(\\frac{u - v}{2}\\right)\\)",
      "\\(2 \\cos \\left(\\frac{u + v}{2}\\right) \\sin \\left(\\frac{u - v}{2}\\right)\\)"
    ],
    "explanation": "Hiệu hai \\(\\cos\\) có hệ số \\(-2\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-10-26": {
    "prompt": "\\(\\cos 20^{\\circ} + \\cos 40^{\\circ}\\) bằng:",
    "options": [
      "\\(2 \\cos 20^{\\circ} \\cos 10^{\\circ}\\)",
      "\\(\\sqrt{3} \\cos 10^{\\circ}\\)",
      "\\(\\sqrt{3} \\sin 10^{\\circ}\\)",
      "\\(2 \\sin 30^{\\circ} \\cos 10^{\\circ}\\)"
    ],
    "explanation": "Tổng bằng \\(2 \\cos 30^{\\circ} \\cos 10^{\\circ} = \\sqrt{3} \\cos 10^{\\circ}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Tính nửa tổng và nửa hiệu",
        "content": "\\[\\frac{20^\\circ+40^\\circ}2=30^\\circ,\\quad\\frac{20^\\circ-40^\\circ}2=-10^\\circ\\]"
      },
      {
        "title": "Tổng thành tích",
        "content": "\\[\\cos20^\\circ+\\cos40^\\circ=2\\cos30^\\circ\\cos(-10^\\circ)\\]"
      },
      {
        "title": "Dùng cos chẵn và góc đặc biệt",
        "content": "\\[=2\\cdot\\frac{\\sqrt3}2\\cos10^\\circ=\\sqrt3\\cos10^\\circ\\]"
      }
    ]
  },
  "toan-11-1-mc-10-27": {
    "prompt": "\\(\\sin 75^{\\circ} - \\sin 15^{\\circ}\\) bằng:",
    "options": [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{\\sqrt{3}}{2}\\)",
      "\\(\\sqrt{2}\\)",
      "\\(\\frac{\\sqrt{2}}{2}\\)"
    ],
    "explanation": "Hiệu bằng \\(2 \\cos 45^{\\circ} \\sin 30^{\\circ} = \\frac{\\sqrt{2}}{2}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Tính nửa tổng và nửa hiệu",
        "content": "\\[\\frac{75^\\circ+15^\\circ}2=45^\\circ,\\quad\\frac{75^\\circ-15^\\circ}2=30^\\circ\\]"
      },
      {
        "title": "Hiệu thành tích",
        "content": "\\[\\sin75^\\circ-\\sin15^\\circ=2\\cos45^\\circ\\sin30^\\circ\\]"
      },
      {
        "title": "Thay giá trị đặc biệt",
        "content": "\\[=2\\cdot\\frac{\\sqrt2}2\\cdot\\frac12=\\frac{\\sqrt2}2\\]"
      }
    ]
  },
  "toan-11-1-mc-10-30": {
    "prompt": "Hai dao động \\(x_{1} \\left(t\\right) = 3 \\cos \\left(4 t + \\frac{\\pi}{6}\\right) , x_{2} \\left(t\\right) = 3 \\cos \\left(4 t - \\frac{\\pi}{6}\\right)\\). Biên độ của \\(x_{1} + x_{2}\\) là:",
    "options": [
      "\\(3\\)",
      "\\(6\\)",
      "\\(\\frac{3 \\sqrt{3}}{2}\\)",
      "\\(3 \\sqrt{3}\\)"
    ],
    "explanation": "Tổng = \\(6 \\cos 4 t \\cos \\left(\\frac{\\pi}{6}\\right) = 3 \\sqrt{3} \\cos 4 t\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin u+\\sin v=2\\sin\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\sin u-\\sin v=2\\cos\\frac{u+v}2\\sin\\frac{u-v}2",
        "\\cos u+\\cos v=2\\cos\\frac{u+v}2\\cos\\frac{u-v}2",
        "\\cos u-\\cos v=-2\\sin\\frac{u+v}2\\sin\\frac{u-v}2"
      ],
      "symbols": [
        [
          "u,v",
          "Hai góc trong tổng hoặc hiệu; \\(\\frac{u + v}{2}\\) là nửa tổng, \\(\\frac{u - v}{2}\\) là nửa hiệu."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đặt hệ số chung",
        "content": "\\[x_1+x_2=3[\\cos(4t+\\pi/6)+\\cos(4t-\\pi/6)]\\]"
      },
      {
        "title": "Tổng thành tích",
        "content": "\\[x_1+x_2=6\\cos4t\\cos(\\pi/6)=3\\sqrt3\\cos4t\\]"
      },
      {
        "title": "Đọc biên độ dương",
        "content": "\\[A=|3\\sqrt3|=3\\sqrt3\\]"
      }
    ]
  },
  "toan-11-1-9-115max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\sin 4 x - 3\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-2\\)",
      "\\(2\\)",
      "\\(-1\\)",
      "\\(-3\\)"
    ],
    "explanation": "\\(-1 \\le \\sin 4 x \\le 1\\). Giá trị nhỏ nhất: \\(-4\\); lớn nhất: \\(-2\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin4x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-4\\le (1)(\\sin4x)+(-3)\\le-2\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-116max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 3 \\sin 2 x - 5\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(2\\)",
      "\\(-1\\)",
      "\\(-3\\)",
      "\\(-2\\)"
    ],
    "explanation": "\\(-1 \\le \\sin 2 x \\le 1\\). Giá trị nhỏ nhất: \\(-8\\); lớn nhất: \\(-2\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin2x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-8\\le (3)(\\sin2x)+(-5)\\le-2\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-117max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\sin 2 x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(1\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Hàm \\(\\sin\\) nhận mọi giá trị trong \\(\\left[-1 ; 1\\right]\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(1\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin2x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-1\\le (1)(\\sin2x)+(0)\\le1\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-118min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 2 \\cos^{2} x - 2 \\sqrt{3} \\sin x \\cos x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(-1\\)",
      "\\(2\\)"
    ],
    "explanation": "Biến đổi thành \\(2 + \\cos 2 x - \\sqrt{3} \\sin 2 x\\), biên độ \\(2\\). Giá trị nhỏ nhất: \\(0\\); lớn nhất: \\(4\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Hạ bậc và nhân đôi",
        "content": "\\[y=2+\\cos2x-\\sqrt3\\sin2x\\]"
      },
      {
        "title": "Gộp thành một cos",
        "content": "\\[\\cos2x-\\sqrt3\\sin2x=2\\cos(2x+\\pi/3)\\]"
      },
      {
        "title": "Tìm khoảng giá trị và kiểm tra đạt được",
        "content": "\\[-1\\le\\cos(2x+\\pi/3)\\le1\\Rightarrow0\\le y\\le4\\]Giá trị 0 đạt khi \\(x=\\pi/3\\), giá trị 4 đạt khi \\(x=-\\pi/6\\)."
      }
    ]
  },
  "toan-11-1-9-118max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 \\cos^{2} x - 2 \\sqrt{3} \\sin x \\cos x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(4\\)",
      "\\(-4\\)",
      "\\(5\\)",
      "\\(2\\)"
    ],
    "explanation": "Biến đổi thành \\(2 + \\cos 2 x - \\sqrt{3} \\sin 2 x\\), biên độ \\(2\\). Giá trị nhỏ nhất: \\(0\\); lớn nhất: \\(4\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Hạ bậc và nhân đôi",
        "content": "\\[y=2+\\cos2x-\\sqrt3\\sin2x\\]"
      },
      {
        "title": "Gộp thành một cos",
        "content": "\\[\\cos2x-\\sqrt3\\sin2x=2\\cos(2x+\\pi/3)\\]"
      },
      {
        "title": "Tìm khoảng giá trị và kiểm tra đạt được",
        "content": "\\[-1\\le\\cos(2x+\\pi/3)\\le1\\Rightarrow0\\le y\\le4\\]Giá trị 0 đạt khi \\(x=\\pi/3\\), giá trị 4 đạt khi \\(x=-\\pi/6\\)."
      }
    ]
  },
  "toan-11-1-9-119min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 2 \\cos^{2} x - \\sin x + 3\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-2\\)",
      "\\(3\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    "explanation": "Đặt \\(t = \\sin x \\in \\left[-1 ; 1\\right] , y = 5 - t - 2 t^{2}\\); đỉnh tại \\(t = \\frac{-1}{4}\\). Giá trị nhỏ nhất: \\(2\\); lớn nhất: \\(5.125\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đặt ẩn phụ và tìm miền",
        "content": "\\[t=\\sin x\\in[-1;1],\\quad\\cos^2x=1-t^2\\]"
      },
      {
        "title": "Hoàn thành bình phương",
        "content": "\\[y=5-t-2t^2=\\frac{41}8-2\\left(t+\\frac14\\right)^2\\]"
      },
      {
        "title": "Xét đỉnh và hai đầu mút",
        "content": "\\[y(-1)=4,\\quad y(1)=2,\\quad y(-1/4)=\\frac{41}8\\]Đỉnh thuộc miền của ẩn phụ. Min bằng 2 tại \\(t=1\\), max bằng \\(41/8=5.125\\) tại \\(t=-1/4\\)."
      }
    ]
  },
  "toan-11-1-9-119max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 \\cos^{2} x - \\sin x + 3\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(\\frac{-41}{8}\\)",
      "\\(\\frac{21}{4}\\)",
      "\\(\\frac{41}{8}\\)",
      "\\(\\frac{41}{9}\\)"
    ],
    "explanation": "Đặt \\(t = \\sin x \\in \\left[-1 ; 1\\right] , y = 5 - t - 2 t^{2}\\); đỉnh tại \\(t = \\frac{-1}{4}\\). Giá trị nhỏ nhất: \\(2\\); lớn nhất: \\(5.125\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đặt ẩn phụ và tìm miền",
        "content": "\\[t=\\sin x\\in[-1;1],\\quad\\cos^2x=1-t^2\\]"
      },
      {
        "title": "Hoàn thành bình phương",
        "content": "\\[y=5-t-2t^2=\\frac{41}8-2\\left(t+\\frac14\\right)^2\\]"
      },
      {
        "title": "Xét đỉnh và hai đầu mút",
        "content": "\\[y(-1)=4,\\quad y(1)=2,\\quad y(-1/4)=\\frac{41}8\\]Đỉnh thuộc miền của ẩn phụ. Min bằng 2 tại \\(t=1\\), max bằng \\(41/8=5.125\\) tại \\(t=-1/4\\)."
      }
    ]
  },
  "toan-11-1-9-121max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\cos 6 x + 5\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-6\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(3\\)"
    ],
    "explanation": "\\(-1 \\le \\cos 6 x \\le 1\\). Giá trị nhỏ nhất: \\(4\\); lớn nhất: \\(6\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\cos6x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[4\\le (1)(\\cos6x)+(5)\\le6\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-122max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 - \\sin x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(4\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "\\(-1 \\le \\sin x \\le 1\\). Giá trị nhỏ nhất: \\(1\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[1\\le (-1)(\\sin x)+(2)\\le3\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-124min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 3 \\sin x + 4 \\cos x - 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(6\\)",
      "\\(-5\\)",
      "\\(-3\\)",
      "\\(-6\\)"
    ],
    "explanation": "Biên độ \\(\\sqrt{3^{2} + 4^{2}} = 5\\). Giá trị nhỏ nhất: \\(-6\\); lớn nhất: \\(4\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chuẩn hóa các hệ số",
        "content": "\\[R=\\sqrt{3^2+4^2}=5,\\quad\\cos\\varphi=\\frac35,\\quad\\sin\\varphi=\\frac45\\]"
      },
      {
        "title": "Viết thành một sin",
        "content": "\\[y=5\\sin(x+\\varphi)-1\\]"
      },
      {
        "title": "Chặn và xét dấu bằng",
        "content": "\\[-1\\le\\sin(x+\\varphi)\\le1\\Rightarrow-6\\le y\\le4\\]Hai cận đều đạt được vì biến góc chạy trên toàn bộ số thực."
      }
    ]
  },
  "toan-11-1-9-124max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 3 \\sin x + 4 \\cos x - 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-4\\)",
      "\\(5\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    "explanation": "Biên độ \\(\\sqrt{3^{2} + 4^{2}} = 5\\). Giá trị nhỏ nhất: \\(-6\\); lớn nhất: \\(4\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chuẩn hóa các hệ số",
        "content": "\\[R=\\sqrt{3^2+4^2}=5,\\quad\\cos\\varphi=\\frac35,\\quad\\sin\\varphi=\\frac45\\]"
      },
      {
        "title": "Viết thành một sin",
        "content": "\\[y=5\\sin(x+\\varphi)-1\\]"
      },
      {
        "title": "Chặn và xét dấu bằng",
        "content": "\\[-1\\le\\sin(x+\\varphi)\\le1\\Rightarrow-6\\le y\\le4\\]Hai cận đều đạt được vì biến góc chạy trên toàn bộ số thực."
      }
    ]
  },
  "toan-11-1-9-125min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 4 \\sin x \\cos x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{2}\\)"
    ],
    "explanation": "\\(y = 2 \\sin 2 x + 1\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Nhân đôi",
        "content": "\\[4\\sin x\\cos x=2\\sin2x\\Rightarrow y=2\\sin2x+1\\]"
      },
      {
        "title": "Chặn giá trị",
        "content": "\\[-1\\le\\sin2x\\le1\\Rightarrow-1\\le y\\le3\\]"
      },
      {
        "title": "Kiểm tra dấu bằng",
        "content": "Min bằng −1 khi \\(x=-\\pi/4\\), max bằng 3 khi \\(x=\\pi/4\\)."
      }
    ]
  },
  "toan-11-1-9-125max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 4 \\sin x \\cos x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(4\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "\\(y = 2 \\sin 2 x + 1\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Nhân đôi",
        "content": "\\[4\\sin x\\cos x=2\\sin2x\\Rightarrow y=2\\sin2x+1\\]"
      },
      {
        "title": "Chặn giá trị",
        "content": "\\[-1\\le\\sin2x\\le1\\Rightarrow-1\\le y\\le3\\]"
      },
      {
        "title": "Kiểm tra dấu bằng",
        "content": "Min bằng −1 khi \\(x=-\\pi/4\\), max bằng 3 khi \\(x=\\pi/4\\)."
      }
    ]
  },
  "toan-11-1-9-126min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = \\sin 2024 x + \\sqrt{3} \\cos 2024 x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(2\\)",
      "\\(-1\\)",
      "\\(-3\\)",
      "\\(-2\\)"
    ],
    "explanation": "Biên độ \\(\\sqrt{1 + 3} = 2\\). Giá trị nhỏ nhất: \\(-2\\); lớn nhất: \\(2\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Gộp theo công thức cộng",
        "content": "\\[\\sin2024x+\\sqrt3\\cos2024x=2\\sin(2024x+\\pi/3)\\]"
      },
      {
        "title": "Chặn giá trị",
        "content": "\\[-1\\le\\sin(2024x+\\pi/3)\\le1\\Rightarrow-2\\le y\\le2\\]"
      },
      {
        "title": "Xét dấu bằng",
        "content": "Cả hai dấu bằng xảy ra vì \\(2024x+\\pi/3\\) nhận mọi giá trị thực. Min bằng −2, max bằng 2."
      }
    ]
  },
  "toan-11-1-9-126max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\sin 2024 x + \\sqrt{3} \\cos 2024 x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-2\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "explanation": "Biên độ \\(\\sqrt{1 + 3} = 2\\). Giá trị nhỏ nhất: \\(-2\\); lớn nhất: \\(2\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Gộp theo công thức cộng",
        "content": "\\[\\sin2024x+\\sqrt3\\cos2024x=2\\sin(2024x+\\pi/3)\\]"
      },
      {
        "title": "Chặn giá trị",
        "content": "\\[-1\\le\\sin(2024x+\\pi/3)\\le1\\Rightarrow-2\\le y\\le2\\]"
      },
      {
        "title": "Xét dấu bằng",
        "content": "Cả hai dấu bằng xảy ra vì \\(2024x+\\pi/3\\) nhận mọi giá trị thực. Min bằng −2, max bằng 2."
      }
    ]
  },
  "toan-11-1-9-128min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 3 \\sin \\left(x + \\frac{3 \\pi}{4}\\right) + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(2\\)",
      "\\(-2\\)",
      "\\(-1\\)",
      "\\(-3\\)"
    ],
    "explanation": "Biên độ \\(3\\), tịnh tiến lên \\(1\\). Giá trị nhỏ nhất: \\(-2\\); lớn nhất: \\(4\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin(x+3\\pi/4)\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-2\\le (3)(\\sin(x+3\\pi/4))+(1)\\le4\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-128max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 3 \\sin \\left(x + \\frac{3 \\pi}{4}\\right) + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(4\\)",
      "\\(-4\\)",
      "\\(5\\)",
      "\\(2\\)"
    ],
    "explanation": "Biên độ \\(3\\), tịnh tiến lên \\(1\\). Giá trị nhỏ nhất: \\(-2\\); lớn nhất: \\(4\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin(x+3\\pi/4)\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-2\\le (3)(\\sin(x+3\\pi/4))+(1)\\le4\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-129min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = \\cos^{2} x + \\sin x + 9 , x \\in \\left[0 ; \\pi\\right]\\).",
    "options": [
      "\\(-10\\)",
      "\\(11\\)",
      "\\(5\\)",
      "\\(10\\)"
    ],
    "explanation": "\\(t = \\sin x \\in \\left[0 ; 1\\right] , y = 10 + t - t^{2} = \\frac{41}{4} - \\left(t - \\frac{1}{2}\\right)^{2}\\). Giá trị nhỏ nhất: \\(10\\); lớn nhất: \\(10.25\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đặt ẩn phụ đúng theo khoảng",
        "content": "\\[x\\in[0;\\pi]\\Rightarrow t=\\sin x\\in[0;1]\\]"
      },
      {
        "title": "Đổi về tam thức",
        "content": "\\[y=1-t^2+t+9=10+t-t^2=\\frac{41}4-\\left(t-\\frac12\\right)^2\\]"
      },
      {
        "title": "Xét đỉnh và biên",
        "content": "\\[y(0)=y(1)=10,\\quad y(1/2)=\\frac{41}4\\]Vậy min bằng 10, max bằng \\(41/4=10.25\\). Các giá trị của ẩn phụ đều đạt được."
      }
    ]
  },
  "toan-11-1-9-129max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\cos^{2} x + \\sin x + 9 , x \\in \\left[0 ; \\pi\\right]\\).",
    "options": [
      "\\(\\frac{-41}{4}\\)",
      "\\(\\frac{21}{2}\\)",
      "\\(\\frac{41}{4}\\)",
      "\\(\\frac{41}{5}\\)"
    ],
    "explanation": "\\(t = \\sin x \\in \\left[0 ; 1\\right] , y = 10 + t - t^{2} = \\frac{41}{4} - \\left(t - \\frac{1}{2}\\right)^{2}\\). Giá trị nhỏ nhất: \\(10\\); lớn nhất: \\(10.25\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đặt ẩn phụ đúng theo khoảng",
        "content": "\\[x\\in[0;\\pi]\\Rightarrow t=\\sin x\\in[0;1]\\]"
      },
      {
        "title": "Đổi về tam thức",
        "content": "\\[y=1-t^2+t+9=10+t-t^2=\\frac{41}4-\\left(t-\\frac12\\right)^2\\]"
      },
      {
        "title": "Xét đỉnh và biên",
        "content": "\\[y(0)=y(1)=10,\\quad y(1/2)=\\frac{41}4\\]Vậy min bằng 10, max bằng \\(41/4=10.25\\). Các giá trị của ẩn phụ đều đạt được."
      }
    ]
  },
  "toan-11-1-9-130min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 6 \\cos 2 x - 7 , x \\in \\left[\\frac{-\\pi}{3} ; \\frac{\\pi}{6}\\right]\\).",
    "options": [
      "\\(10\\)",
      "\\(-10\\)",
      "\\(-9\\)",
      "\\(-5\\)"
    ],
    "explanation": "\\(2 x \\in \\left[\\frac{-2 \\pi}{3} ; \\frac{\\pi}{3}\\right]\\) nên \\(\\cos 2 x \\in \\left[\\frac{-1}{2} ; 1\\right]\\). Giá trị nhỏ nhất: \\(-10\\); lớn nhất: \\(-1\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đổi khoảng của góc",
        "content": "\\[x\\in[-\\pi/3;\\pi/6]\\Rightarrow2x\\in[-2\\pi/3;\\pi/3]\\]"
      },
      {
        "title": "Xác định miền giá trị cos",
        "content": "Trên khoảng góc này, cos nhỏ nhất tại \\(-2\\pi/3\\) và lớn nhất tại 0, nên \\[-\\frac12\\le\\cos2x\\le1\\]"
      },
      {
        "title": "Nhân hệ số dương và cộng hằng số",
        "content": "\\[-10\\le6\\cos2x-7\\le-1\\]Min đạt tại \\(x=-\\pi/3\\), max đạt tại \\(x=0\\)."
      }
    ]
  },
  "toan-11-1-9-130max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 6 \\cos 2 x - 7 , x \\in \\left[\\frac{-\\pi}{3} ; \\frac{\\pi}{6}\\right]\\).",
    "options": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{2}\\)"
    ],
    "explanation": "\\(2 x \\in \\left[\\frac{-2 \\pi}{3} ; \\frac{\\pi}{3}\\right]\\) nên \\(\\cos 2 x \\in \\left[\\frac{-1}{2} ; 1\\right]\\). Giá trị nhỏ nhất: \\(-10\\); lớn nhất: \\(-1\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đổi khoảng của góc",
        "content": "\\[x\\in[-\\pi/3;\\pi/6]\\Rightarrow2x\\in[-2\\pi/3;\\pi/3]\\]"
      },
      {
        "title": "Xác định miền giá trị cos",
        "content": "Trên khoảng góc này, cos nhỏ nhất tại \\(-2\\pi/3\\) và lớn nhất tại 0, nên \\[-\\frac12\\le\\cos2x\\le1\\]"
      },
      {
        "title": "Nhân hệ số dương và cộng hằng số",
        "content": "\\[-10\\le6\\cos2x-7\\le-1\\]Min đạt tại \\(x=-\\pi/3\\), max đạt tại \\(x=0\\)."
      }
    ]
  },
  "toan-11-1-9-131min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 3 \\sin 3 x + 2\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{2}\\)",
      "\\(-1\\)"
    ],
    "explanation": "\\(-1 \\le \\sin 3 x \\le 1\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(5\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin3x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-1\\le (3)(\\sin3x)+(2)\\le5\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-131max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 3 \\sin 3 x + 2\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-5\\)",
      "\\(6\\)",
      "\\(5\\)",
      "\\(\\frac{5}{2}\\)"
    ],
    "explanation": "\\(-1 \\le \\sin 3 x \\le 1\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(5\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin3x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-1\\le (3)(\\sin3x)+(2)\\le5\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-133min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 2 \\sqrt{\\sin x + 1} - 3\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(-2\\)",
      "\\(\\frac{-3}{2}\\)"
    ],
    "explanation": "\\(0 \\le \\sin x + 1 \\le 2\\); giá trị lớn nhất là \\(2 \\sqrt{2} - 3\\). Giá trị nhỏ nhất: \\(-3\\); lớn nhất: \\(-0.1716\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Kiểm tra căn và chặn biểu thức dưới căn",
        "content": "\\[-1\\le\\sin x\\le1\\Rightarrow0\\le\\sin x+1\\le2\\]"
      },
      {
        "title": "Lấy căn, nhân rồi trừ",
        "content": "\\[0\\le\\sqrt{\\sin x+1}\\le\\sqrt2\\Rightarrow-3\\le y\\le2\\sqrt2-3\\]"
      },
      {
        "title": "Kiểm tra đạt được",
        "content": "Min bằng −3 tại \\(x=-\\pi/2\\), max bằng \\(2\\sqrt2-3\\approx-0.1716\\) tại \\(x=\\pi/2\\)."
      }
    ]
  },
  "toan-11-1-9-133max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 \\sqrt{\\sin x + 1} - 3\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(2 \\times \\sqrt{2} - 3\\)",
      "\\(-\\left(2 \\times \\sqrt{2} - 3\\right)\\)",
      "\\(2 \\times \\left(2 \\times \\sqrt{2} - 3\\right)\\)",
      "\\(\\frac{2 \\times \\sqrt{2} - 3}{2}\\)"
    ],
    "explanation": "\\(0 \\le \\sin x + 1 \\le 2\\); giá trị lớn nhất là \\(2 \\sqrt{2} - 3\\). Giá trị nhỏ nhất: \\(-3\\); lớn nhất: \\(-0.1716\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Kiểm tra căn và chặn biểu thức dưới căn",
        "content": "\\[-1\\le\\sin x\\le1\\Rightarrow0\\le\\sin x+1\\le2\\]"
      },
      {
        "title": "Lấy căn, nhân rồi trừ",
        "content": "\\[0\\le\\sqrt{\\sin x+1}\\le\\sqrt2\\Rightarrow-3\\le y\\le2\\sqrt2-3\\]"
      },
      {
        "title": "Kiểm tra đạt được",
        "content": "Min bằng −3 tại \\(x=-\\pi/2\\), max bằng \\(2\\sqrt2-3\\approx-0.1716\\) tại \\(x=\\pi/2\\)."
      }
    ]
  },
  "toan-11-1-9-134min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 2 \\sin^{2} x + 3 \\sin 2 x - 4 \\cos^{2} x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-\\left(-1 - 3 \\times \\sqrt{2}\\right)\\)",
      "\\(2 \\times \\left(-1 - 3 \\times \\sqrt{2}\\right)\\)",
      "\\(\\frac{-1 - 3 \\times \\sqrt{2}}{2}\\)",
      "\\(-1 - 3 \\times \\sqrt{2}\\)"
    ],
    "explanation": "\\(y = -1 - 3 \\cos 2 x + 3 \\sin 2 x\\), biên độ \\(3 \\sqrt{2}\\). Giá trị nhỏ nhất: \\(-5.2426\\); lớn nhất: \\(3.2426\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Hạ bậc",
        "content": "\\[y=(1-\\cos2x)+3\\sin2x-2(1+\\cos2x)=-1-3\\cos2x+3\\sin2x\\]"
      },
      {
        "title": "Gộp thành một sin",
        "content": "\\[3\\sin2x-3\\cos2x=3\\sqrt2\\sin(2x-\\pi/4)\\]"
      },
      {
        "title": "Xác định hai cận",
        "content": "\\[-1-3\\sqrt2\\le y\\le-1+3\\sqrt2\\]Min đạt khi \\(x=-\\pi/8\\), max đạt khi \\(x=3\\pi/8\\)."
      }
    ]
  },
  "toan-11-1-9-134max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 \\sin^{2} x + 3 \\sin 2 x - 4 \\cos^{2} x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-\\left(-1 + 3 \\times \\sqrt{2}\\right)\\)",
      "\\(2 \\times \\left(-1 + 3 \\times \\sqrt{2}\\right)\\)",
      "\\(-1 + 3 \\times \\sqrt{2}\\)",
      "\\(\\frac{-1 + 3 \\times \\sqrt{2}}{2}\\)"
    ],
    "explanation": "\\(y = -1 - 3 \\cos 2 x + 3 \\sin 2 x\\), biên độ \\(3 \\sqrt{2}\\). Giá trị nhỏ nhất: \\(-5.2426\\); lớn nhất: \\(3.2426\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Hạ bậc",
        "content": "\\[y=(1-\\cos2x)+3\\sin2x-2(1+\\cos2x)=-1-3\\cos2x+3\\sin2x\\]"
      },
      {
        "title": "Gộp thành một sin",
        "content": "\\[3\\sin2x-3\\cos2x=3\\sqrt2\\sin(2x-\\pi/4)\\]"
      },
      {
        "title": "Xác định hai cận",
        "content": "\\[-1-3\\sqrt2\\le y\\le-1+3\\sqrt2\\]Min đạt khi \\(x=-\\pi/8\\), max đạt khi \\(x=3\\pi/8\\)."
      }
    ]
  },
  "toan-11-1-9-135min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = \\cos \\left(2 x + \\frac{\\pi}{3}\\right) - \\cos 2 x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{2}\\)"
    ],
    "explanation": "\\(y = -\\sin \\left(2 x + \\frac{\\pi}{6}\\right)\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(1\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Áp dụng hiệu hai cos",
        "content": "\\[\\cos(2x+\\pi/3)-\\cos2x=-2\\sin(2x+\\pi/6)\\sin(\\pi/6)\\]"
      },
      {
        "title": "Thay góc đặc biệt",
        "content": "\\[y=-\\sin(2x+\\pi/6)\\]"
      },
      {
        "title": "Chặn và xét dấu bằng",
        "content": "\\[-1\\le y\\le1\\]Min đạt tại \\(x=\\pi/6\\), max đạt tại \\(x=2\\pi/3\\)."
      }
    ]
  },
  "toan-11-1-9-135max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\cos \\left(2 x + \\frac{\\pi}{3}\\right) - \\cos 2 x\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "\\(y = -\\sin \\left(2 x + \\frac{\\pi}{6}\\right)\\). Giá trị nhỏ nhất: \\(-1\\); lớn nhất: \\(1\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Áp dụng hiệu hai cos",
        "content": "\\[\\cos(2x+\\pi/3)-\\cos2x=-2\\sin(2x+\\pi/6)\\sin(\\pi/6)\\]"
      },
      {
        "title": "Thay góc đặc biệt",
        "content": "\\[y=-\\sin(2x+\\pi/6)\\]"
      },
      {
        "title": "Chặn và xét dấu bằng",
        "content": "\\[-1\\le y\\le1\\]Min đạt tại \\(x=\\pi/6\\), max đạt tại \\(x=2\\pi/3\\)."
      }
    ]
  },
  "toan-11-1-9-136min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 2 \\cos^{2} x + 5 \\sin x + 1 , x \\in \\left[\\frac{\\pi}{3} ; \\frac{5 \\pi}{6}\\right]\\).",
    "options": [
      "\\(-5\\)",
      "\\(6\\)",
      "\\(\\frac{5}{2}\\)",
      "\\(5\\)"
    ],
    "explanation": "\\(t = \\sin x \\in \\left[\\frac{1}{2} ; 1\\right] , y = 3 + 5 t - 2 t^{2}\\) tăng trên khoảng này. Giá trị nhỏ nhất: \\(5\\); lớn nhất: \\(6\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đổi sang ẩn phụ theo khoảng",
        "content": "\\[x\\in[\\pi/3;5\\pi/6]\\Rightarrow t=\\sin x\\in[1/2;1]\\]"
      },
      {
        "title": "Đổi biểu thức và xét tính tăng",
        "content": "\\[y=2(1-t^2)+5t+1=3+5t-2t^2\\]Với \\(1/2\\le u<v\\le1\\), ta có \\[y(v)-y(u)=(v-u)[5-2(u+v)]>0\\]"
      },
      {
        "title": "Tính hai đầu mút",
        "content": "\\[y(1/2)=5,\\quad y(1)=6\\]Min bằng 5, max bằng 6; cả hai giá trị của ẩn phụ đều đạt được."
      }
    ]
  },
  "toan-11-1-9-136max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 \\cos^{2} x + 5 \\sin x + 1 , x \\in \\left[\\frac{\\pi}{3} ; \\frac{5 \\pi}{6}\\right]\\).",
    "options": [
      "\\(-6\\)",
      "\\(7\\)",
      "\\(6\\)",
      "\\(3\\)"
    ],
    "explanation": "\\(t = \\sin x \\in \\left[\\frac{1}{2} ; 1\\right] , y = 3 + 5 t - 2 t^{2}\\) tăng trên khoảng này. Giá trị nhỏ nhất: \\(5\\); lớn nhất: \\(6\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đổi sang ẩn phụ theo khoảng",
        "content": "\\[x\\in[\\pi/3;5\\pi/6]\\Rightarrow t=\\sin x\\in[1/2;1]\\]"
      },
      {
        "title": "Đổi biểu thức và xét tính tăng",
        "content": "\\[y=2(1-t^2)+5t+1=3+5t-2t^2\\]Với \\(1/2\\le u<v\\le1\\), ta có \\[y(v)-y(u)=(v-u)[5-2(u+v)]>0\\]"
      },
      {
        "title": "Tính hai đầu mút",
        "content": "\\[y(1/2)=5,\\quad y(1)=6\\]Min bằng 5, max bằng 6; cả hai giá trị của ẩn phụ đều đạt được."
      }
    ]
  },
  "toan-11-1-9-138min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 2 \\sin^{2} x - 2 \\sin^{4} x - 2 \\sin 2 x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{-1}{2}\\)",
      "\\(0\\)",
      "\\(\\frac{-1}{3}\\)"
    ],
    "explanation": "\\(u = \\sin 2 x \\in \\left[-1 ; 1\\right] , y = \\frac{u^{2}}{2} - 2 u + 1\\) giảm trên \\(\\left[-1 ; 1\\right]\\). Giá trị nhỏ nhất: \\(-0.5\\); lớn nhất: \\(3.5\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Nhóm và nhân đôi",
        "content": "\\[2\\sin^2x-2\\sin^4x=2\\sin^2x\\cos^2x=\\frac12\\sin^22x\\]"
      },
      {
        "title": "Đặt ẩn phụ",
        "content": "\\[u=\\sin2x\\in[-1;1],\\quad y=\\frac12u^2-2u+1\\]"
      },
      {
        "title": "Xét tính giảm",
        "content": "Với \\(-1\\le u<v\\le1\\), \\[y(v)-y(u)=(v-u)\\left(\\frac{u+v}2-2\\right)<0\\]"
      },
      {
        "title": "Tính giá trị biên",
        "content": "\\[y(1)=-\\frac12,\\quad y(-1)=\\frac72\\]Min bằng −0,5; max bằng 3,5."
      }
    ]
  },
  "toan-11-1-9-138max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 2 \\sin^{2} x - 2 \\sin^{4} x - 2 \\sin 2 x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(\\frac{7}{2}\\)",
      "\\(\\frac{-7}{2}\\)",
      "\\(4\\)",
      "\\(\\frac{7}{3}\\)"
    ],
    "explanation": "\\(u = \\sin 2 x \\in \\left[-1 ; 1\\right] , y = \\frac{u^{2}}{2} - 2 u + 1\\) giảm trên \\(\\left[-1 ; 1\\right]\\). Giá trị nhỏ nhất: \\(-0.5\\); lớn nhất: \\(3.5\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Nhóm và nhân đôi",
        "content": "\\[2\\sin^2x-2\\sin^4x=2\\sin^2x\\cos^2x=\\frac12\\sin^22x\\]"
      },
      {
        "title": "Đặt ẩn phụ",
        "content": "\\[u=\\sin2x\\in[-1;1],\\quad y=\\frac12u^2-2u+1\\]"
      },
      {
        "title": "Xét tính giảm",
        "content": "Với \\(-1\\le u<v\\le1\\), \\[y(v)-y(u)=(v-u)\\left(\\frac{u+v}2-2\\right)<0\\]"
      },
      {
        "title": "Tính giá trị biên",
        "content": "\\[y(1)=-\\frac12,\\quad y(-1)=\\frac72\\]Min bằng −0,5; max bằng 3,5."
      }
    ]
  },
  "toan-11-1-9-139min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = \\cos 2 x + 4 \\cos x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(2\\)",
      "\\(0\\)"
    ],
    "explanation": "\\(y = 2 \\left(\\cos x + 1\\right)^{2}\\). Giá trị nhỏ nhất: \\(0\\); lớn nhất: \\(8\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Dùng công thức nhân đôi",
        "content": "\\[y=2\\cos^2x-1+4\\cos x+1=2(\\cos x+1)^2\\]"
      },
      {
        "title": "Chặn trước khi bình phương",
        "content": "\\[-1\\le\\cos x\\le1\\Rightarrow0\\le\\cos x+1\\le2\\Rightarrow0\\le y\\le8\\]"
      },
      {
        "title": "Kiểm tra hai cận",
        "content": "Min bằng 0 tại \\(x=\\pi\\), max bằng 8 tại \\(x=0\\)."
      }
    ]
  },
  "toan-11-1-9-139max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\cos 2 x + 4 \\cos x + 1\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-8\\)",
      "\\(9\\)",
      "\\(8\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(y = 2 \\left(\\cos x + 1\\right)^{2}\\). Giá trị nhỏ nhất: \\(0\\); lớn nhất: \\(8\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Dùng công thức nhân đôi",
        "content": "\\[y=2\\cos^2x-1+4\\cos x+1=2(\\cos x+1)^2\\]"
      },
      {
        "title": "Chặn trước khi bình phương",
        "content": "\\[-1\\le\\cos x\\le1\\Rightarrow0\\le\\cos x+1\\le2\\Rightarrow0\\le y\\le8\\]"
      },
      {
        "title": "Kiểm tra hai cận",
        "content": "Min bằng 0 tại \\(x=\\pi\\), max bằng 8 tại \\(x=0\\)."
      }
    ]
  },
  "toan-11-1-9-140min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 4 \\cos 2 x - 1 , x \\in \\left[\\frac{-\\pi}{3} ; \\frac{\\pi}{6}\\right]\\).",
    "options": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(-2\\)",
      "\\(\\frac{-3}{2}\\)"
    ],
    "explanation": "\\(\\cos 2 x \\in \\left[\\frac{-1}{2} ; 1\\right]\\). Giá trị nhỏ nhất: \\(-3\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đổi khoảng góc",
        "content": "\\[2x\\in[-2\\pi/3;\\pi/3]\\]"
      },
      {
        "title": "Chặn cos trên đúng khoảng",
        "content": "\\[-\\frac12\\le\\cos2x\\le1\\]Cận dưới đạt tại góc \\(-2\\pi/3\\), cận trên đạt tại góc 0."
      },
      {
        "title": "Nhân rồi trừ",
        "content": "\\[-3\\le4\\cos2x-1\\le3\\]Min đạt tại \\(x=-\\pi/3\\), max tại \\(x=0\\)."
      }
    ]
  },
  "toan-11-1-9-140max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 4 \\cos 2 x - 1 , x \\in \\left[\\frac{-\\pi}{3} ; \\frac{\\pi}{6}\\right]\\).",
    "options": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(4\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "\\(\\cos 2 x \\in \\left[\\frac{-1}{2} ; 1\\right]\\). Giá trị nhỏ nhất: \\(-3\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đổi khoảng góc",
        "content": "\\[2x\\in[-2\\pi/3;\\pi/3]\\]"
      },
      {
        "title": "Chặn cos trên đúng khoảng",
        "content": "\\[-\\frac12\\le\\cos2x\\le1\\]Cận dưới đạt tại góc \\(-2\\pi/3\\), cận trên đạt tại góc 0."
      },
      {
        "title": "Nhân rồi trừ",
        "content": "\\[-3\\le4\\cos2x-1\\le3\\]Min đạt tại \\(x=-\\pi/3\\), max tại \\(x=0\\)."
      }
    ]
  },
  "toan-11-1-9-141min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = \\sin^{2} x - \\cos x + 2\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(t = \\cos x \\in \\left[-1 ; 1\\right] , y = 3 - t - t^{2} = \\frac{13}{4} - \\left(t + \\frac{1}{2}\\right)^{2}\\). Giá trị nhỏ nhất: \\(1\\); lớn nhất: \\(3.25\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đặt ẩn phụ",
        "content": "\\[t=\\cos x\\in[-1;1],\\quad y=1-t^2-t+2=3-t-t^2\\]"
      },
      {
        "title": "Hoàn thành bình phương",
        "content": "\\[y=\\frac{13}4-\\left(t+\\frac12\\right)^2\\]"
      },
      {
        "title": "Xét đỉnh và biên",
        "content": "\\[y(-1)=3,\\quad y(1)=1,\\quad y(-1/2)=\\frac{13}4\\]Min bằng 1, max bằng \\(13/4=3.25\\)."
      }
    ]
  },
  "toan-11-1-9-141max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = \\sin^{2} x - \\cos x + 2\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(\\frac{-13}{4}\\)",
      "\\(\\frac{7}{2}\\)",
      "\\(\\frac{13}{4}\\)",
      "\\(\\frac{13}{5}\\)"
    ],
    "explanation": "\\(t = \\cos x \\in \\left[-1 ; 1\\right] , y = 3 - t - t^{2} = \\frac{13}{4} - \\left(t + \\frac{1}{2}\\right)^{2}\\). Giá trị nhỏ nhất: \\(1\\); lớn nhất: \\(3.25\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Đặt ẩn phụ",
        "content": "\\[t=\\cos x\\in[-1;1],\\quad y=1-t^2-t+2=3-t-t^2\\]"
      },
      {
        "title": "Hoàn thành bình phương",
        "content": "\\[y=\\frac{13}4-\\left(t+\\frac12\\right)^2\\]"
      },
      {
        "title": "Xét đỉnh và biên",
        "content": "\\[y(-1)=3,\\quad y(1)=1,\\quad y(-1/2)=\\frac{13}4\\]Min bằng 1, max bằng \\(13/4=3.25\\)."
      }
    ]
  },
  "toan-11-1-9-142min-mc-v2": {
    "prompt": "Tìm giá trị nhỏ nhất của \\(y = 8 \\sin 2 x - 5\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(13\\)",
      "\\(-13\\)",
      "\\(-12\\)",
      "\\(\\frac{-13}{2}\\)"
    ],
    "explanation": "\\(-1 \\le \\sin 2 x \\le 1\\). Giá trị nhỏ nhất: \\(-13\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin2x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-13\\le (8)(\\sin2x)+(-5)\\le3\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-9-142max-mc-v2": {
    "prompt": "Tìm giá trị lớn nhất của \\(y = 8 \\sin 2 x - 5\\). Xét trên \\(\\mathbb{R}\\).",
    "options": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(4\\)",
      "\\(\\frac{3}{2}\\)"
    ],
    "explanation": "\\(-1 \\le \\sin 2 x \\le 1\\). Giá trị nhỏ nhất: \\(-13\\); lớn nhất: \\(3\\).",
    "hint": "Đưa về một hàm \\(\\sin\\) và \\(\\cos\\) hoặc đặt \\(t = \\sin x , \\cos x\\).",
    "guide": {
      "formulas": [
        "-1\\le\\sin t\\le1,\\quad-1\\le\\cos t\\le1",
        "b-|a|\\le a\\sin t+b\\le b+|a|",
        "b-|a|\\le a\\cos t+b\\le b+|a|"
      ],
      "symbols": [
        [
          "t",
          "Biểu thức góc trong \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "a,b",
          "Các hệ số thực của biểu thức; \\(a\\) là hệ số nhân, \\(b\\) là hằng số cộng."
        ]
      ],
      "condition": "Để kết luận đạt cực trị, kiểm tra góc có thể làm \\(\\sin\\) hoặc \\(\\cos\\) bằng \\(1\\) hay \\(-1\\) trong miền đề cho."
    },
    "solutionSteps": [
      {
        "title": "Chặn hàm lượng giác",
        "content": "\\[-1\\le \\sin2x\\le1\\]"
      },
      {
        "title": "Nhân hệ số rồi cộng hằng số",
        "content": "\\[-13\\le (8)(\\sin2x)+(-5)\\le3\\]"
      },
      {
        "title": "Xét điều kiện đạt cận",
        "content": "Góc bên trong chạy trên toàn bộ số thực nên sin hoặc cos đạt cả −1 và 1. Cận dưới là giá trị nhỏ nhất, cận trên là giá trị lớn nhất."
      }
    ]
  },
  "toan-11-1-mc-13-1": {
    "prompt": "Tập xác định của \\(y = \\tan x\\) là:",
    "options": [
      "\\(\\mathbb{R}\\)",
      "\\(\\mathbb{R} \\setminus \\left\\{k \\pi\\right\\}\\)",
      "\\(\\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k \\pi\\right\\}\\)",
      "\\(\\left[-1 ; 1\\right]\\)"
    ],
    "explanation": "Điều kiện \\(\\cos x \\ne 0 , k \\in \\mathbb{Z}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "D_{\\sin}=D_{\\cos}=\\mathbb R",
        "-1\\le\\sin x\\le1,\\quad-1\\le\\cos x\\le1",
        "\\tan x\\text{ xác định}\\ \\Longleftrightarrow\\ \\cos x\\ne0",
        "\\cot x\\text{ xác định}\\ \\Longleftrightarrow\\ \\sin x\\ne0"
      ],
      "symbols": [
        [
          "D",
          "Tập xác định của hàm số."
        ],
        [
          "x",
          "Biến góc, tính theo radian."
        ],
        [
          "\\mathbb R",
          "Tập các số thực."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-13-2": {
    "prompt": "Hàm số nào là hàm chẵn?",
    "options": [
      "\\(\\sin x\\)",
      "\\(\\cos x\\)",
      "\\(\\tan x\\)",
      "\\(\\cot x\\)"
    ],
    "explanation": "\\(\\cos \\left(-x\\right) = \\cos x\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "f(-x)=f(x)\\quad\\text{(hàm chẵn)}",
        "f(-x)=-f(x)\\quad\\text{(hàm lẻ)}"
      ],
      "symbols": [
        [
          "f,x",
          "Hàm số và biến số; miền xác định phải đối xứng qua \\(0\\)."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-13-3": {
    "prompt": "Tập giá trị của \\(y = \\sin x\\) là:",
    "options": [
      "\\(\\mathbb{R}\\)",
      "\\(\\left[0 ; 1\\right]\\)",
      "\\(\\left(-1 ; 1\\right)\\)",
      "\\(\\left[-1 ; 1\\right]\\)"
    ],
    "explanation": "\\(-1 \\le \\sin x \\le 1\\) và hai đầu mút đều đạt được.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "D_{\\sin}=D_{\\cos}=\\mathbb R",
        "-1\\le\\sin x\\le1,\\quad-1\\le\\cos x\\le1",
        "\\tan x\\text{ xác định}\\ \\Longleftrightarrow\\ \\cos x\\ne0",
        "\\cot x\\text{ xác định}\\ \\Longleftrightarrow\\ \\sin x\\ne0"
      ],
      "symbols": [
        [
          "D",
          "Tập xác định của hàm số."
        ],
        [
          "x",
          "Biến góc, tính theo radian."
        ],
        [
          "\\mathbb R",
          "Tập các số thực."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-13-4": {
    "prompt": "Tập xác định của \\(y = \\cot x\\) là:",
    "options": [
      "\\(\\mathbb{R} \\setminus \\left\\{k \\pi\\right\\}\\)",
      "\\(\\mathbb{R}\\)",
      "\\(\\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k \\pi\\right\\}\\)",
      "\\(\\left[-1 ; 1\\right]\\)"
    ],
    "explanation": "Điều kiện \\(\\sin x \\ne 0 , k \\in \\mathbb{Z}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "D_{\\sin}=D_{\\cos}=\\mathbb R",
        "-1\\le\\sin x\\le1,\\quad-1\\le\\cos x\\le1",
        "\\tan x\\text{ xác định}\\ \\Longleftrightarrow\\ \\cos x\\ne0",
        "\\cot x\\text{ xác định}\\ \\Longleftrightarrow\\ \\sin x\\ne0"
      ],
      "symbols": [
        [
          "D",
          "Tập xác định của hàm số."
        ],
        [
          "x",
          "Biến góc, tính theo radian."
        ],
        [
          "\\mathbb R",
          "Tập các số thực."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-mc-13-5": {
    "prompt": "Hàm số \\(y = \\sin x\\) đồng biến trên khoảng:",
    "options": [
      "\\(\\left(\\frac{\\pi}{2} ; \\frac{3 \\pi}{2}\\right)\\)",
      "\\(\\left(\\frac{-\\pi}{2} ; \\frac{\\pi}{2}\\right)\\)",
      "\\(\\left(0 ; \\pi\\right)\\)",
      "\\(\\left(\\pi ; 2 \\pi\\right)\\)"
    ],
    "explanation": "Sin tăng từ \\(-1\\) đến \\(1\\) trên \\(\\left(\\frac{-\\pi}{2} ; \\frac{\\pi}{2}\\right)\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin x\\text{ đồng biến trên }\\left[-\\frac\\pi2+2k\\pi;\\frac\\pi2+2k\\pi\\right]"
      ],
      "symbols": [
        [
          "a,b,x,\\alpha,\\beta",
          "Các góc hoặc biến góc đang xét; dùng cùng một đơn vị khi thay số."
        ],
        [
          "k\\in\\mathbb Z",
          "Số nguyên dùng để biểu diễn các vòng quay hoặc các họ nghiệm."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-1-13-6-mc-v2": {
    "prompt": "Chu kì cơ bản của \\(y = \\sin 3 x\\) bằng \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{-2}{3}\\)",
      "\\(1\\)",
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Chu kì \\(\\sin\\) và \\(\\cos : \\frac{2 \\pi}{\\left|a\\right|} ; \\tan\\) và \\(\\cot : \\frac{\\pi}{\\left|a\\right|}\\), với \\(a\\) là hệ số của \\(x\\).",
    "hint": "Đọc hệ số của \\(x\\).",
    "guide": {
      "formulas": [
        "T_{\\sin(ax+b)}=T_{\\cos(ax+b)}=\\frac{2\\pi}{|a|}",
        "T_{\\tan(ax+b)}=T_{\\cot(ax+b)}=\\frac{\\pi}{|a|}"
      ],
      "symbols": [
        [
          "T",
          "Chu kì dương nhỏ nhất."
        ],
        [
          "a\\ne0",
          "Hệ số của biến \\(x\\) trong góc \\(a x + b\\)."
        ],
        [
          "b",
          "Hằng số dịch pha; không làm thay đổi chu kì."
        ],
        [
          "x",
          "Biến góc tính bằng radian."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đọc hệ số của biến",
        "content": "\\[a=3\\ne0\\]"
      },
      {
        "title": "Dùng chu kì của hàm phù hợp",
        "content": "\\[T=\\frac{2\\pi}{|a|}=\\frac{2\\pi}{3}=\\frac{2}{3}\\pi\\]"
      },
      {
        "title": "Đọc hệ số trước pi",
        "content": "\\[k=\\frac{2}{3}\\]"
      }
    ]
  },
  "toan-11-1-13-7-mc-v2": {
    "prompt": "Chu kì cơ bản của \\(y = \\cos \\left(2 x + 1\\right)\\) bằng \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    "explanation": "Chu kì \\(\\sin\\) và \\(\\cos : \\frac{2 \\pi}{\\left|a\\right|} ; \\tan\\) và \\(\\cot : \\frac{\\pi}{\\left|a\\right|}\\), với \\(a\\) là hệ số của \\(x\\).",
    "hint": "Đọc hệ số của \\(x\\).",
    "guide": {
      "formulas": [
        "T_{\\sin(ax+b)}=T_{\\cos(ax+b)}=\\frac{2\\pi}{|a|}",
        "T_{\\tan(ax+b)}=T_{\\cot(ax+b)}=\\frac{\\pi}{|a|}"
      ],
      "symbols": [
        [
          "T",
          "Chu kì dương nhỏ nhất."
        ],
        [
          "a\\ne0",
          "Hệ số của biến \\(x\\) trong góc \\(a x + b\\)."
        ],
        [
          "b",
          "Hằng số dịch pha; không làm thay đổi chu kì."
        ],
        [
          "x",
          "Biến góc tính bằng radian."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đọc hệ số của biến",
        "content": "\\[a=2\\ne0\\]"
      },
      {
        "title": "Dùng chu kì của hàm phù hợp",
        "content": "\\[T=\\frac{2\\pi}{|a|}=\\frac{2\\pi}{2}=\\pi\\]"
      },
      {
        "title": "Đọc hệ số trước pi",
        "content": "\\[k=1\\]"
      }
    ]
  },
  "toan-11-1-13-8-mc-v2": {
    "prompt": "Chu kì cơ bản của \\(y = \\tan \\left(4 x - 1\\right)\\) bằng \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(\\frac{1}{4}\\)",
      "\\(\\frac{-1}{4}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{1}{5}\\)"
    ],
    "explanation": "Chu kì \\(\\sin\\) và \\(\\cos : \\frac{2 \\pi}{\\left|a\\right|} ; \\tan\\) và \\(\\cot : \\frac{\\pi}{\\left|a\\right|}\\), với \\(a\\) là hệ số của \\(x\\).",
    "hint": "Đọc hệ số của \\(x\\).",
    "guide": {
      "formulas": [
        "T_{\\sin(ax+b)}=T_{\\cos(ax+b)}=\\frac{2\\pi}{|a|}",
        "T_{\\tan(ax+b)}=T_{\\cot(ax+b)}=\\frac{\\pi}{|a|}"
      ],
      "symbols": [
        [
          "T",
          "Chu kì dương nhỏ nhất."
        ],
        [
          "a\\ne0",
          "Hệ số của biến \\(x\\) trong góc \\(a x + b\\)."
        ],
        [
          "b",
          "Hằng số dịch pha; không làm thay đổi chu kì."
        ],
        [
          "x",
          "Biến góc tính bằng radian."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đọc hệ số của biến",
        "content": "\\[a=4\\ne0\\]"
      },
      {
        "title": "Dùng chu kì của hàm phù hợp",
        "content": "\\[T=\\frac{\\pi}{|a|}=\\frac{\\pi}{4}=\\frac{1}{4}\\pi\\]"
      },
      {
        "title": "Đọc hệ số trước pi",
        "content": "\\[k=\\frac{1}{4}\\]"
      }
    ]
  },
  "toan-11-1-13-9-mc-v2": {
    "prompt": "Chu kì cơ bản của \\(y = \\cot \\left(\\frac{x}{2}\\right)\\) bằng \\(k \\pi\\). Tìm \\(k\\).",
    "options": [
      "\\(-2\\)",
      "\\(3\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    "explanation": "Chu kì \\(\\sin\\) và \\(\\cos : \\frac{2 \\pi}{\\left|a\\right|} ; \\tan\\) và \\(\\cot : \\frac{\\pi}{\\left|a\\right|}\\), với \\(a\\) là hệ số của \\(x\\).",
    "hint": "Đọc hệ số của \\(x\\).",
    "guide": {
      "formulas": [
        "T_{\\sin(ax+b)}=T_{\\cos(ax+b)}=\\frac{2\\pi}{|a|}",
        "T_{\\tan(ax+b)}=T_{\\cot(ax+b)}=\\frac{\\pi}{|a|}"
      ],
      "symbols": [
        [
          "T",
          "Chu kì dương nhỏ nhất."
        ],
        [
          "a\\ne0",
          "Hệ số của biến \\(x\\) trong góc \\(a x + b\\)."
        ],
        [
          "b",
          "Hằng số dịch pha; không làm thay đổi chu kì."
        ],
        [
          "x",
          "Biến góc tính bằng radian."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Đọc hệ số của biến",
        "content": "\\[a=\\frac{1}{2}\\ne0\\]"
      },
      {
        "title": "Dùng chu kì của hàm phù hợp",
        "content": "\\[T=\\frac{\\pi}{|a|}=\\frac{\\pi}{\\frac{1}{2}}=2\\pi\\]"
      },
      {
        "title": "Đọc hệ số trước pi",
        "content": "\\[k=2\\]"
      }
    ]
  },
  "toan-11-1-7-1-mc-v2": {
    "prompt": "Phương trình \\(\\sin \\left(x - \\frac{\\pi}{2}\\right) = \\sin \\left(\\frac{2 \\pi}{5}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x+(\\frac{-1}{2}\\pi))=\\sin(\\frac{2}{5}\\pi)\\]Chọn \\(\\alpha=\\frac{2}{5}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{9}{10}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{11}{10}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{9}{10}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-9}{20}\\le k<\\frac{11}{20}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{11}{10}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-11}{20}\\le k<\\frac{9}{20}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{9}{10}\\pi;\\frac{11}{10}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-2-mc-v2": {
    "prompt": "Phương trình \\(\\sin \\left(x - \\frac{\\pi}{6}\\right) = \\sin \\left(\\frac{\\pi}{9}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x+(\\frac{-1}{6}\\pi))=\\sin(\\frac{1}{9}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{9}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{5}{18}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{19}{18}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{5}{18}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-5}{36}\\le k<\\frac{31}{36}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{19}{18}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-19}{36}\\le k<\\frac{17}{36}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{5}{18}\\pi;\\frac{19}{18}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-4-mc-v2": {
    "prompt": "Phương trình \\(2 \\sin x = -1\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x)=\\sin(\\frac{-1}{6}\\pi)\\]Chọn \\(\\alpha=\\frac{-1}{6}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-1}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{7}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-1}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{1}{12}\\le k<\\frac{13}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\).\\[0\\le \\frac{7}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-7}{12}\\le k<\\frac{5}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{7}{6}\\pi;\\frac{11}{6}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-5-mc-v2": {
    "prompt": "Phương trình \\(\\sin \\left(x + \\frac{\\pi}{5}\\right) = -1\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(1\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x+(\\frac{1}{5}\\pi))=\\sin(\\frac{-1}{2}\\pi)\\]Chọn \\(\\alpha=\\frac{-1}{2}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-7}{10}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-7}{10}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{7}{20}\\le k<\\frac{27}{20}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{13}{10}\\pi\\}\\]Có 1 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-6-mc-v2": {
    "prompt": "Phương trình \\(2 \\sin \\left(x - \\frac{\\pi}{6}\\right) + \\sqrt{2} = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x+(\\frac{-1}{6}\\pi))=\\sin(\\frac{-1}{4}\\pi)\\]Chọn \\(\\alpha=\\frac{-1}{4}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-1}{12}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{17}{12}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-1}{12}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{1}{24}\\le k<\\frac{25}{24}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\).\\[0\\le \\frac{17}{12}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-17}{24}\\le k<\\frac{7}{24}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{17}{12}\\pi;\\frac{23}{12}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-7-mc-v2": {
    "prompt": "Phương trình \\(2 \\sin \\left(x - \\frac{\\pi}{3}\\right) - \\sqrt{3} = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x+(\\frac{-1}{3}\\pi))=\\sin(\\frac{1}{3}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{3}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{2}{3}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{2}{3}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{3}\\le k<\\frac{2}{3}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{2}\\le k<\\frac{1}{2}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{2}{3}\\pi;\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-10-mc-v2": {
    "prompt": "Phương trình \\(5 \\sin x = 1\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x)=\\frac{1}{5}\\]Chọn \\(\\alpha=\\operatorname{arcsin}(\\frac{1}{5})\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{(\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(\\pi-\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{(\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{(\\pi-\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\pi-\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\pi-\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0.20135792;2.94023473\\). Có 2 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-7-11-mc-v2": {
    "prompt": "Phương trình \\(\\sin \\left(x - 2\\right) = \\frac{2}{3}\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    "explanation": "\\(\\sin u = \\sin \\alpha \\Rightarrow u = \\alpha + 2 k \\pi\\) hoặc \\(u = \\pi - \\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\sin(x+(-2))=\\frac{2}{3}\\]Chọn \\(\\alpha=\\operatorname{arcsin}(\\frac{2}{3})\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{(\\alpha)-(-2)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(\\pi-\\alpha)-(-2)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{(\\alpha)-(-2)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(-2)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(-2)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{(\\pi-\\alpha)-(-2)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\pi-\\alpha)-(-2)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\pi-\\alpha)-(-2)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(2.72972766;4.411865\\). Có 2 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-7-12-mc-v2": {
    "prompt": "Phương trình \\(\\cos \\left(x + \\frac{2 \\pi}{5}\\right) = \\cos \\left(\\frac{\\pi}{7}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x+(\\frac{2}{5}\\pi))=\\cos(\\frac{1}{7}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{7}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-9}{35}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{-19}{35}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-9}{35}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{9}{70}\\le k<\\frac{79}{70}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\).\\[0\\le \\frac{-19}{35}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{19}{70}\\le k<\\frac{89}{70}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{51}{35}\\pi;\\frac{61}{35}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-13-mc-v2": {
    "prompt": "Phương trình \\(\\cos \\left(x - \\frac{2 \\pi}{9}\\right) = \\cos \\left(\\frac{\\pi}{18}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x+(\\frac{-2}{9}\\pi))=\\cos(\\frac{1}{18}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{18}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{5}{18}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{1}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{5}{18}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-5}{36}\\le k<\\frac{31}{36}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{1}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{12}\\le k<\\frac{11}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{1}{6}\\pi;\\frac{5}{18}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-14-mc-v2": {
    "prompt": "Phương trình \\(2 \\cos x = -1\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x)=\\cos(\\frac{2}{3}\\pi)\\]Chọn \\(\\alpha=\\frac{2}{3}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{2}{3}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{-2}{3}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{2}{3}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{3}\\le k<\\frac{2}{3}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{-2}{3}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{1}{3}\\le k<\\frac{4}{3}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{2}{3}\\pi;\\frac{4}{3}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-15-mc-v2": {
    "prompt": "Phương trình \\(\\cos \\left(x - \\frac{\\pi}{8}\\right) = 1\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(1\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(1\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x+(\\frac{-1}{8}\\pi))=\\cos(0)\\]Chọn \\(\\alpha=0\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{1}{8}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{1}{8}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{16}\\le k<\\frac{15}{16}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{1}{8}\\pi\\}\\]Có 1 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-16-mc-v2": {
    "prompt": "Phương trình \\(2 \\cos \\left(x - \\frac{\\pi}{6}\\right) - \\sqrt{3} = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x+(\\frac{-1}{6}\\pi))=\\cos(\\frac{1}{6}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{6}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{1}{3}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=0+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{1}{3}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{6}\\le k<\\frac{5}{6}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le 0+(2\\pi)k<2\\pi\\]\\[0\\le k<1\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{0;\\frac{1}{3}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-17-mc-v2": {
    "prompt": "Phương trình \\(2 \\cos \\left(x + \\frac{\\pi}{6}\\right) + \\sqrt{2} = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x+(\\frac{1}{6}\\pi))=\\cos(\\frac{3}{4}\\pi)\\]Chọn \\(\\alpha=\\frac{3}{4}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{7}{12}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{-11}{12}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{7}{12}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-7}{24}\\le k<\\frac{17}{24}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{-11}{12}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{11}{24}\\le k<\\frac{35}{24}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{7}{12}\\pi;\\frac{13}{12}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-18-mc-v2": {
    "prompt": "Phương trình \\(3 \\cos x + \\sqrt{3} = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(x)=\\frac{-1}{3}\\sqrt{3}\\]Chọn \\(\\alpha=\\operatorname{arccos}(\\frac{-1}{3}\\sqrt{3})\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{(\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(-\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{(\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{(-\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(-\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(-\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(2.18627604;4.09690927\\). Có 2 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-7-19-mc-v2": {
    "prompt": "Phương trình \\(5 \\cos \\left(2 x - 1\\right) - 3 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos u = \\cos \\alpha \\Rightarrow u =\\) ±\\(\\alpha + 2 k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(4\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "Sin và cos xác định với mọi số thực."
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cos(2x+(-1))=\\frac{3}{5}\\]Chọn \\(\\alpha=\\operatorname{arccos}(\\frac{3}{5})\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{(\\alpha)-(-1)}{2}+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(-\\alpha)-(-1)}{2}+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{(\\alpha)-(-1)}{2}+(\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(-1)}{2}}{\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(-1)}{2})}{\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\).\\[0\\le \\frac{(-\\alpha)-(-1)}{2}+(\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(-\\alpha)-(-1)}{2}}{\\pi}\\le k<\\frac{2\\pi-(\\frac{(-\\alpha)-(-1)}{2})}{\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0.03635239;0.96364761;3.17794504;4.10524026\\). Có 4 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-7-20-mc-v2": {
    "prompt": "Phương trình \\(\\tan \\left(x + \\frac{3 \\pi}{4}\\right) = \\tan \\left(\\frac{\\pi}{7}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\tan u = \\tan \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\cos(x+(\\frac{3}{4}\\pi))\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\tan(x+(\\frac{3}{4}\\pi))=\\tan(\\frac{1}{7}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{7}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-17}{28}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-17}{28}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{17}{28}\\le k<\\frac{73}{28}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{11}{28}\\pi;\\frac{39}{28}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-21-mc-v2": {
    "prompt": "Phương trình \\(\\tan \\left(x + \\frac{4 \\pi}{15}\\right) = \\tan \\left(\\frac{5 \\pi}{36}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\tan u = \\tan \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\cos(x+(\\frac{4}{15}\\pi))\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\tan(x+(\\frac{4}{15}\\pi))=\\tan(\\frac{5}{36}\\pi)\\]Chọn \\(\\alpha=\\frac{5}{36}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-23}{180}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-23}{180}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{23}{180}\\le k<\\frac{383}{180}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{157}{180}\\pi;\\frac{337}{180}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-22-mc-v2": {
    "prompt": "Phương trình \\(\\tan x = \\sqrt{3}\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\tan u = \\tan \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\cos(x)\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\tan(x)=\\tan(\\frac{1}{3}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{3}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{1}{3}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{1}{3}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{-1}{3}\\le k<\\frac{5}{3}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{1}{3}\\pi;\\frac{4}{3}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-23-mc-v2": {
    "prompt": "Phương trình \\(\\tan \\left(\\frac{\\pi}{6} - x\\right) = \\cot \\left(\\frac{\\pi}{6}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    "explanation": "\\(\\tan u = \\tan \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\cos(-x+(\\frac{1}{6}\\pi))\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\tan(-x+(\\frac{1}{6}\\pi))=\\tan(\\frac{1}{3}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{3}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-1}{6}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-1}{6}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{1}{6}\\le k<\\frac{13}{6}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{5}{6}\\pi;\\frac{11}{6}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-24-mc-v2": {
    "prompt": "Phương trình \\(\\tan \\left(x - \\frac{\\pi}{6}\\right) + 1 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\tan u = \\tan \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\cos(x+(\\frac{-1}{6}\\pi))\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\tan(x+(\\frac{-1}{6}\\pi))=\\tan(\\frac{-1}{4}\\pi)\\]Chọn \\(\\alpha=\\frac{-1}{4}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-1}{12}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-1}{12}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{1}{12}\\le k<\\frac{25}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{11}{12}\\pi;\\frac{23}{12}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-25-mc-v2": {
    "prompt": "Phương trình \\(2 \\tan x + 5 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\tan u = \\tan \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\cos(x)\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\tan(x)=\\frac{-5}{2}\\]Chọn \\(\\alpha=\\operatorname{arctan}(\\frac{-5}{2})\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{(\\alpha)-(0)}{1}+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{(\\alpha)-(0)}{1}+(\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(1.9513027;5.09289536\\). Có 2 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-7-26-mc-v2": {
    "prompt": "Phương trình \\(\\cot \\left(x - \\frac{\\pi}{8}\\right) = \\cot \\left(\\frac{\\pi}{5}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cot u = \\cot \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cot u=\\cot\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\sin(x+(\\frac{-1}{8}\\pi))\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cot(x+(\\frac{-1}{8}\\pi))=\\cot(\\frac{1}{5}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{5}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{13}{40}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{13}{40}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{-13}{40}\\le k<\\frac{67}{40}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{13}{40}\\pi;\\frac{53}{40}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-27-mc-v2": {
    "prompt": "Phương trình \\(\\cot \\left(x + \\frac{7 \\pi}{45}\\right) = \\cot \\left(\\frac{\\pi}{15}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    "explanation": "\\(\\cot u = \\cot \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cot u=\\cot\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\sin(x+(\\frac{7}{45}\\pi))\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cot(x+(\\frac{7}{45}\\pi))=\\cot(\\frac{1}{15}\\pi)\\]Chọn \\(\\alpha=\\frac{1}{15}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{-4}{45}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{-4}{45}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{4}{45}\\le k<\\frac{94}{45}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{41}{45}\\pi;\\frac{86}{45}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-28-mc-v2": {
    "prompt": "Phương trình \\(\\sqrt{3} \\cot x + 3 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cot u = \\cot \\alpha \\Rightarrow u = \\alpha + k \\pi\\). Giải theo \\(x\\) rồi giữ các nghiệm thuộc \\(\\left[0 ; 2 \\pi\\right)\\). Có \\(2\\) nghiệm phân biệt \\(\\left(k \\in \\mathbb{Z}\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\cot u=\\cot\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đưa về phương trình cơ bản",
        "content": "\\[\\sin(x)\\ne0\\]"
      },
      {
        "title": "Cô lập giá trị lượng giác",
        "content": "\\[\\cot(x)=\\cot(\\frac{5}{6}\\pi)\\]Chọn \\(\\alpha=\\frac{5}{6}\\pi\\)."
      },
      {
        "title": "Viết các họ nghiệm rồi giải theo x",
        "content": "\\[x=\\frac{5}{6}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]Ở mỗi họ, tham số là số nguyên; có thể đổi dấu tham số khi hệ số của x âm."
      },
      {
        "title": "Lọc tham số theo khoảng đề bài",
        "content": "\\[0\\le \\frac{5}{6}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{-5}{6}\\le k<\\frac{7}{6}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{5}{6}\\pi;\\frac{11}{6}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-7-3-mc-v2": {
    "prompt": "Phương trình \\(\\sin x \\left(\\cos x + 2\\right) = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "explanation": "\\(\\cos x + 2\\) luôn dương; \\(\\sin x = 0 \\Rightarrow x = k \\pi\\). Có \\(2\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Xét thừa số thứ hai",
        "content": "\\[-1\\le\\cos x\\le1\\Rightarrow1\\le\\cos x+2\\le3\\]"
      },
      {
        "title": "Dùng phương trình tích",
        "content": "Thừa số thứ hai luôn dương nên \\[\\sin x(\\cos x+2)=0\\iff\\sin x=0\\iff x=k\\pi,\\ k\\in\\mathbb Z\\]"
      },
      {
        "title": "Lọc nghiệm",
        "content": "\\[0\\le k\\pi<2\\pi\\iff0\\le k<2\\Rightarrow k=0,1\\]\\[x=0\\text{ hoặc }x=\\pi\\]"
      }
    ]
  },
  "toan-11-1-7-8-mc-v2": {
    "prompt": "Phương trình \\(\\sin 3 x = \\cos \\left(x - \\frac{\\pi}{3}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(6\\)",
      "\\(5\\)",
      "\\(7\\)",
      "\\(8\\)"
    ],
    "explanation": "Đổi \\(\\cos\\) thành \\(\\sin\\). Hai họ nghiệm: \\(x = \\frac{5 \\pi}{24} + \\frac{k \\pi}{2}\\) hoặc \\(x = \\frac{\\pi}{12} + k \\pi\\). Có \\(6\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Đổi về hai sin",
        "content": "\\[\\cos(x-\\pi/3)=\\sin[\\pi/2-(x-\\pi/3)]=\\sin(5\\pi/6-x)\\]"
      },
      {
        "title": "Tách hai trường hợp",
        "content": "\\[3x=5\\pi/6-x+2k\\pi\\quad\\text{hoặc}\\quad3x=\\pi-(5\\pi/6-x)+2k\\pi\\]"
      },
      {
        "title": "Giải theo x",
        "content": "\\[x=\\frac{5\\pi}{24}+\\frac{k\\pi}2\\quad\\text{hoặc}\\quad x=\\frac\\pi{12}+k\\pi\\]"
      },
      {
        "title": "Lọc từng họ",
        "content": "Họ thứ nhất có \\(k=0,1,2,3\\), họ thứ hai có \\(k=0,1\\). \\[x\\in\\left\\{\\frac\\pi{12};\\frac{5\\pi}{24};\\frac{17\\pi}{24};\\frac{13\\pi}{12};\\frac{29\\pi}{24};\\frac{41\\pi}{24}\\right\\}\\]Sáu nghiệm đôi một khác nhau."
      }
    ]
  },
  "toan-11-1-7-9-mc-v2": {
    "prompt": "Phương trình \\(\\cos \\left(2 x + \\frac{\\pi}{5}\\right) = \\sin \\left(x - \\frac{\\pi}{4}\\right)\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(4\\)"
    ],
    "explanation": "Đổi \\(\\sin\\) thành \\(\\cos\\). Hai họ: \\(x = \\frac{11 \\pi}{60} + \\frac{2 k \\pi}{3}\\) hoặc \\(x = \\frac{-19 \\pi}{20} + 2 k \\pi\\). Có \\(4\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Đổi về hai cos",
        "content": "\\[\\sin(x-\\pi/4)=\\cos[\\pi/2-(x-\\pi/4)]=\\cos(3\\pi/4-x)\\]"
      },
      {
        "title": "Tách hai trường hợp",
        "content": "\\[2x+\\pi/5=3\\pi/4-x+2k\\pi\\quad\\text{hoặc}\\quad2x+\\pi/5=-3\\pi/4+x+2k\\pi\\]"
      },
      {
        "title": "Giải hai phương trình bậc nhất",
        "content": "\\[x=\\frac{11\\pi}{60}+\\frac{2k\\pi}3\\quad\\text{hoặc}\\quad x=-\\frac{19\\pi}{20}+2k\\pi\\]"
      },
      {
        "title": "Lọc và đếm",
        "content": "Họ thứ nhất có \\(k=0,1,2\\), họ thứ hai có \\(k=1\\). \\[x\\in\\left\\{\\frac{11\\pi}{60};\\frac{17\\pi}{20};\\frac{21\\pi}{20};\\frac{91\\pi}{60}\\right\\}\\]Có 4 nghiệm phân biệt."
      }
    ]
  },
  "toan-11-1-6-1-mc-v2": {
    "prompt": "Phương trình \\(2 \\sin^{2} x - 3 \\sin x + 1 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(4\\)",
      "\\(3\\)",
      "\\(5\\)"
    ],
    "explanation": "\\(\\left(2 \\sin x - 1\\right) \\left(\\sin x - 1\\right) = 0\\). Có \\(3\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\sin x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[t=\\sin x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[2t^2-3t+1=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(2t-1)(t-1)=0\\]\\[t\\in\\{\\frac{1}{2};1\\}\\]"
      },
      {
        "title": "Giải \\(\\sin x=\\frac{1}{2}\\)",
        "content": "Chọn \\(\\alpha=\\frac{1}{6}\\pi\\). \\[x=\\frac{1}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{5}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{1}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{12}\\le k<\\frac{11}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{5}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-5}{12}\\le k<\\frac{7}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Giải \\(\\sin x=1\\)",
        "content": "Chọn \\(\\alpha=\\frac{1}{2}\\pi\\). \\[x=\\frac{1}{2}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{1}{2}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{4}\\le k<\\frac{3}{4}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{1}{6}\\pi;\\frac{1}{2}\\pi;\\frac{5}{6}\\pi\\}\\]Có 3 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-2-mc-v2": {
    "prompt": "Phương trình \\(\\cos^{2} x + 3 \\cos x + 2 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)"
    ],
    "explanation": "\\(\\left(\\cos x + 1\\right) \\left(\\cos x + 2\\right) = 0\\); loại \\(\\cos x = -2\\). Có \\(1\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\cos x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[t=\\cos x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[t^2+3t+2=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(t+1)(t+2)=0\\]\\[t\\in\\{-1;-2\\}\\]Loại \\(-2\\) vì nằm ngoài đoạn từ −1 đến 1."
      },
      {
        "title": "Giải \\(\\cos x=-1\\)",
        "content": "Chọn \\(\\alpha=\\pi\\). \\[x=\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{2}\\le k<\\frac{1}{2}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\pi\\}\\]Có 1 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-3-mc-v2": {
    "prompt": "Phương trình \\(2 \\tan^{2} x - 3 \\tan x + 1 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(4\\)",
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    "explanation": "Điều kiện \\(\\cos x \\ne 0\\). \\(\\left(2 \\tan x - 1\\right) \\left(\\tan x - 1\\right) = 0\\). Có \\(4\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\tan x",
        "\\cos x\\ne0",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Kiểm tra điều kiện xác định của \\(\\tan g\\) hoặc cotang trước khi biến đổi."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "\\[\\cos x\\ne0\\]\\[t=\\tan x\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[2t^2-3t+1=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(2t-1)(t-1)=0\\]\\[t\\in\\{\\frac{1}{2};1\\}\\]"
      },
      {
        "title": "Giải \\(\\tan x=\\frac{1}{2}\\)",
        "content": "Chọn \\(\\alpha=\\operatorname{arctan}(\\frac{1}{2})\\). \\[x=\\frac{(\\alpha)-(0)}{1}+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{(\\alpha)-(0)}{1}+(\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Giải \\(\\tan x=1\\)",
        "content": "Chọn \\(\\alpha=\\frac{1}{4}\\pi\\). \\[x=\\frac{1}{4}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{1}{4}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{-1}{4}\\le k<\\frac{7}{4}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0.46364761;0.78539816;3.60524026;3.92699082\\). Có 4 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-6-4-mc-v2": {
    "prompt": "Phương trình \\(\\cot^{2} x - \\cot x - 12 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(4\\)"
    ],
    "explanation": "Điều kiện \\(\\sin x \\ne 0\\). \\(\\left(\\cot x - 4\\right) \\left(\\cot x + 3\\right) = 0\\). Có \\(4\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\cot x",
        "\\sin x\\ne0",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Kiểm tra điều kiện xác định của \\(\\tan g\\) hoặc cotang trước khi biến đổi."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "\\[\\sin x\\ne0\\]\\[t=\\cot x\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[t^2-t-12=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(t-4)(t+3)=0\\]\\[t\\in\\{4;-3\\}\\]"
      },
      {
        "title": "Giải \\(\\cot x=4\\)",
        "content": "Chọn \\(\\alpha=\\operatorname{arccot}(4)\\). \\[x=\\frac{(\\alpha)-(0)}{1}+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{(\\alpha)-(0)}{1}+(\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Giải \\(\\cot x=-3\\)",
        "content": "Chọn \\(\\alpha=\\operatorname{arccot}(-3)\\). \\[x=\\frac{(\\alpha)-(0)}{1}+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{(\\alpha)-(0)}{1}+(\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0.24497866;2.8198421;3.38657132;5.96143475\\). Có 4 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-6-5-mc-v2": {
    "prompt": "Phương trình \\(8 \\cos^{2} x + 2 \\sin x - 7 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    "explanation": "Đặt \\(t = \\sin x : 8 t^{2} - 2 t - 1 = 0 \\Rightarrow t = \\frac{1}{2}\\) hoặc \\(\\frac{-1}{4}\\). Có \\(4\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\sin x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\cos^2x=1-\\sin^2x,\\quad t=\\sin x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[8(1-t^2)+2t-7=0\\iff8t^2-2t-1=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(4t+1)(2t-1)=0\\]\\[t\\in\\{\\frac{-1}{4};\\frac{1}{2}\\}\\]"
      },
      {
        "title": "Giải \\(\\sin x=\\frac{-1}{4}\\)",
        "content": "Chọn \\(\\alpha=\\operatorname{arcsin}(\\frac{-1}{4})\\). \\[x=\\frac{(\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(\\pi-\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{(\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\).\\[0\\le \\frac{(\\pi-\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\pi-\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\pi-\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Giải \\(\\sin x=\\frac{1}{2}\\)",
        "content": "Chọn \\(\\alpha=\\frac{1}{6}\\pi\\). \\[x=\\frac{1}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{5}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{1}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{12}\\le k<\\frac{11}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{5}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-5}{12}\\le k<\\frac{7}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0.52359878;2.61799388;3.39427291;6.03050505\\). Có 4 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-6-6-mc-v2": {
    "prompt": "Phương trình \\(2 \\cos 2 x + \\cos x = 1\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "explanation": "Đặt \\(t = \\cos x : 4 t^{2} + t - 3 = 0 \\Rightarrow t = \\frac{3}{4}\\) hoặc \\(-1\\). Có \\(3\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\cos x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\cos2x=2\\cos^2x-1,\\quad t=\\cos x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[2(2t^2-1)+t=1\\iff4t^2+t-3=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(4t-3)(t+1)=0\\]\\[t\\in\\{\\frac{3}{4};-1\\}\\]"
      },
      {
        "title": "Giải \\(\\cos x=\\frac{3}{4}\\)",
        "content": "Chọn \\(\\alpha=\\operatorname{arccos}(\\frac{3}{4})\\). \\[x=\\frac{(\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(-\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{(\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{(-\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(-\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(-\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Giải \\(\\cos x=-1\\)",
        "content": "Chọn \\(\\alpha=\\pi\\). \\[x=\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{2}\\le k<\\frac{1}{2}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0.72273425;3.14159265;5.56045106\\). Có 3 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-6-7-mc-v2": {
    "prompt": "Phương trình \\(\\sin^{2} x - 2 \\cos x + 2 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(2\\)",
      "\\(3\\)"
    ],
    "explanation": "Đặt \\(t = \\cos x : t^{2} + 2 t - 3 = 0\\); loại \\(t = -3\\). Có \\(1\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\cos x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\sin^2x=1-\\cos^2x,\\quad t=\\cos x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[1-t^2-2t+2=0\\iff t^2+2t-3=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(t-1)(t+3)=0\\]\\[t\\in\\{1;-3\\}\\]Loại \\(-3\\) vì nằm ngoài đoạn từ −1 đến 1."
      },
      {
        "title": "Giải \\(\\cos x=1\\)",
        "content": "Chọn \\(\\alpha=0\\). \\[x=0+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le 0+(2\\pi)k<2\\pi\\]\\[0\\le k<1\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{0\\}\\]Có 1 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-8-mc-v2": {
    "prompt": "Phương trình \\(\\cos 2 x + 5 \\sin x + 2 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    "explanation": "Đặt \\(t = \\sin x : 2 t^{2} - 5 t - 3 = 0\\); loại \\(t = 3\\). Có \\(2\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\sin x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\cos2x=1-2\\sin^2x,\\quad t=\\sin x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[1-2t^2+5t+2=0\\iff2t^2-5t-3=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(2t+1)(t-3)=0\\]\\[t\\in\\{\\frac{-1}{2};3\\}\\]Loại \\(3\\) vì nằm ngoài đoạn từ −1 đến 1."
      },
      {
        "title": "Giải \\(\\sin x=\\frac{-1}{2}\\)",
        "content": "Chọn \\(\\alpha=\\frac{-1}{6}\\pi\\). \\[x=\\frac{-1}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{7}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{-1}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{1}{12}\\le k<\\frac{13}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\).\\[0\\le \\frac{7}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-7}{12}\\le k<\\frac{5}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{7}{6}\\pi;\\frac{11}{6}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-9-mc-v2": {
    "prompt": "Phương trình \\(2 \\cos^{2} x - \\sin^{2} x - 4 \\cos x + 2 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(4\\)",
      "\\(3\\)",
      "\\(5\\)"
    ],
    "explanation": "Đặt \\(t = \\cos x : 3 t^{2} - 4 t + 1 = 0\\). Có \\(3\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\cos x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\sin^2x=1-\\cos^2x,\\quad t=\\cos x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[2t^2-(1-t^2)-4t+2=0\\iff3t^2-4t+1=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(3t-1)(t-1)=0\\]\\[t\\in\\{\\frac{1}{3};1\\}\\]"
      },
      {
        "title": "Giải \\(\\cos x=\\frac{1}{3}\\)",
        "content": "Chọn \\(\\alpha=\\operatorname{arccos}(\\frac{1}{3})\\). \\[x=\\frac{(\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{(-\\alpha)-(0)}{1}+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{(\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{(-\\alpha)-(0)}{1}+(2\\pi)k<2\\pi\\]\\[-\\frac{\\frac{(-\\alpha)-(0)}{1}}{2\\pi}\\le k<\\frac{2\\pi-(\\frac{(-\\alpha)-(0)}{1})}{2\\pi}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Giải \\(\\cos x=1\\)",
        "content": "Chọn \\(\\alpha=0\\). \\[x=0+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le 0+(2\\pi)k<2\\pi\\]\\[0\\le k<1\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "Các nghiệm gần đúng (radian): \\(0;1.23095942;5.05222589\\). Có 3 nghiệm phân biệt. Các họ nghiệm ở trên là biểu diễn chính xác."
      }
    ]
  },
  "toan-11-1-6-10-mc-v2": {
    "prompt": "Phương trình \\(\\sin x - 2 \\cos^{2} x + 1 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "explanation": "Đặt \\(t = \\sin x : 2 t^{2} + t - 1 = 0\\). Có \\(3\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\sin x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\cos^2x=1-\\sin^2x,\\quad t=\\sin x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[t-2(1-t^2)+1=0\\iff2t^2+t-1=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(2t-1)(t+1)=0\\]\\[t\\in\\{\\frac{1}{2};-1\\}\\]"
      },
      {
        "title": "Giải \\(\\sin x=\\frac{1}{2}\\)",
        "content": "Chọn \\(\\alpha=\\frac{1}{6}\\pi\\). \\[x=\\frac{1}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[x=\\frac{5}{6}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{1}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{12}\\le k<\\frac{11}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\).\\[0\\le \\frac{5}{6}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-5}{12}\\le k<\\frac{7}{12}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Giải \\(\\sin x=-1\\)",
        "content": "Chọn \\(\\alpha=\\frac{-1}{2}\\pi\\). \\[x=\\frac{-1}{2}\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{-1}{2}\\pi+(2\\pi)k<2\\pi\\]\\[\\frac{1}{4}\\le k<\\frac{5}{4}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{1}{6}\\pi;\\frac{5}{6}\\pi;\\frac{3}{2}\\pi\\}\\]Có 3 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-11-mc-v2": {
    "prompt": "Phương trình \\(\\cos 2 x + \\sin^{2} x + 2 \\cos x + 1 = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(2\\)",
      "\\(3\\)"
    ],
    "explanation": "Phương trình tương đương \\(\\left(\\cos x + 1\\right)^{2} = 0\\). Có \\(1\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\cos x",
        "-1\\le t\\le1",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Chỉ nhận nghiệm của ẩn phụ thuộc đoạn \\(\\left[-1 ; 1\\right]\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "Sin, cos xác định với mọi số thực. \\[\\cos2x=2\\cos^2x-1,\\quad\\sin^2x=1-\\cos^2x,\\quad t=\\cos x\\]\\[-1\\le t\\le1\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[(2t^2-1)+(1-t^2)+2t+1=0\\iff t^2+2t+1=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[(t+1)^2=0\\]\\[t\\in\\{-1\\}\\]"
      },
      {
        "title": "Giải \\(\\cos x=-1\\)",
        "content": "Chọn \\(\\alpha=\\pi\\). \\[x=\\pi+(2\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\pi+(2\\pi)k<2\\pi\\]\\[\\frac{-1}{2}\\le k<\\frac{1}{2}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\pi\\}\\]Có 1 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-12-mc-v2": {
    "prompt": "Phương trình \\(\\tan^{2} x + \\tan x = 0\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(4\\)"
    ],
    "explanation": "Điều kiện \\(\\cos x \\ne 0 , \\tan x \\left(\\tan x + 1\\right) = 0\\). Có \\(4\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "t=\\tan x",
        "\\cos x\\ne0",
        "at^2+bt+c=0,\\quad\\Delta=b^2-4ac",
        "t=\\frac{-b\\pm\\sqrt\\Delta}{2a}\\quad(a\\ne0,\\Delta\\ge0)"
      ],
      "symbols": [
        [
          "t",
          "Ẩn phụ là giá trị lượng giác được chọn."
        ],
        [
          "a,b,c",
          "Các hệ số theo ẩn phụ."
        ],
        [
          "\\Delta",
          "Biệt thức của phương trình bậc hai."
        ],
        [
          "x",
          "Ẩn góc \\(b a n\\) đầu."
        ]
      ],
      "condition": "Kiểm tra điều kiện xác định của \\(\\tan g\\) hoặc cotang trước khi biến đổi."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "\\[\\cos x\\ne0\\]\\[t=\\tan x\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[t^2+t=0\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[t(t+1)=0\\]\\[t\\in\\{0;-1\\}\\]"
      },
      {
        "title": "Giải \\(\\tan x=0\\)",
        "content": "Chọn \\(\\alpha=0\\). \\[x=0+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le 0+(\\pi)k<2\\pi\\]\\[0\\le k<2\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Giải \\(\\tan x=-1\\)",
        "content": "Chọn \\(\\alpha=\\frac{-1}{4}\\pi\\). \\[x=\\frac{-1}{4}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{-1}{4}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{1}{4}\\le k<\\frac{9}{4}\\]Vì tham số nguyên, suy ra \\(k\\in\\{1;2\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{0;\\frac{3}{4}\\pi;\\pi;\\frac{7}{4}\\pi\\}\\]Có 4 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-6-13-mc-v2": {
    "prompt": "Phương trình \\(\\frac{1}{\\cos^{2} x} = \\tan x + \\tan^{2} x\\) có bao nhiêu nghiệm phân biệt trong \\(\\left[0 ; 2 \\pi\\right)\\)?",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "explanation": "Điều kiện \\(\\cos x \\ne 0\\). Dùng \\(\\frac{1}{\\cos^{2} x} = 1 + \\tan^{2} x\\) suy ra \\(\\tan x = 1\\). Có \\(2\\) nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\).",
    "hint": "Giải phương trình, liệt kê các nghiệm trong \\(\\left[0 ; 2 \\pi\\right)\\) và loại nghiệm trùng.",
    "guide": {
      "formulas": [
        "\\frac1{\\cos^2x}=1+\\tan^2x"
      ],
      "symbols": [
        [
          "x",
          "Ẩn góc của phương trình."
        ]
      ],
      "condition": "Điều kiện \\(\\cos x\\) khác \\(0\\)."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện và đổi về một hàm lượng giác",
        "content": "\\[\\cos x\\ne0\\]\\[\\frac1{\\cos^2x}=1+\\tan^2x,\\quad t=\\tan x\\]"
      },
      {
        "title": "Thu gọn phương trình theo ẩn phụ",
        "content": "\\[1+t^2=t+t^2\\]"
      },
      {
        "title": "Giải phương trình đại số",
        "content": "\\[t=1\\]\\[t\\in\\{1\\}\\]"
      },
      {
        "title": "Giải \\(\\tan x=1\\)",
        "content": "Chọn \\(\\alpha=\\frac{1}{4}\\pi\\). \\[x=\\frac{1}{4}\\pi+(\\pi)k,\\quad k\\in\\mathbb Z\\]\\[0\\le \\frac{1}{4}\\pi+(\\pi)k<2\\pi\\]\\[\\frac{-1}{4}\\le k<\\frac{7}{4}\\]Vì tham số nguyên, suy ra \\(k\\in\\{0;1\\}\\)."
      },
      {
        "title": "Liệt kê nghiệm phân biệt và kết luận",
        "content": "\\[x\\in\\{\\frac{1}{4}\\pi;\\frac{5}{4}\\pi\\}\\]Có 2 nghiệm; không lấy đầu mút \\(2\\pi\\)."
      }
    ]
  },
  "toan-11-1-mc-14-lt1": {
    "prompt": "Phương trình \\(\\sin x = m\\) có nghiệm khi:",
    "options": [
      "\\(m \\ge 0\\)",
      "\\(\\left|m\\right| \\le 1\\)",
      "\\(m > 1\\)",
      "Mọi \\(m \\in \\mathbb{R}\\)"
    ],
    "explanation": "Tập giá trị của \\(\\sin\\) là \\(\\left[-1 ; 1\\right]\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\sin u=\\sin\\alpha\\ \\Longleftrightarrow\\ \\begin{cases}u=\\alpha+2k\\pi,\\\\u=\\pi-\\alpha+2k\\pi\\end{cases}",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Dùng miền giá trị của sin",
        "content": "\\[-1\\le\\sin x\\le1\\]"
      },
      {
        "title": "Điều kiện cần",
        "content": "Nếu có nghiệm thì vế phải phải thuộc miền giá trị, tức \\(-1\\le m\\le1\\)."
      },
      {
        "title": "Điều kiện đủ",
        "content": "Với mỗi \\(m\\in[-1;1]\\), tồn tại góc \\(x=\\operatorname{arcsin}m\\). Vậy điều kiện cần và đủ là \\(|m|\\le1\\)."
      }
    ]
  },
  "toan-11-1-mc-14-lt2": {
    "prompt": "Nghiệm của \\(\\cos x = 1\\) là:",
    "options": [
      "\\(x = k \\pi\\)",
      "\\(x = \\frac{\\pi}{2} + k \\pi\\)",
      "\\(x = 2 k \\pi\\)",
      "\\(x = \\pi + 2 k \\pi\\)"
    ],
    "explanation": "Cos bằng \\(1\\) tại \\(x = 2 k \\pi , k \\in \\mathbb{Z}\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\cos u=\\cos\\alpha\\ \\Longleftrightarrow\\ u=\\pm\\alpha+2k\\pi",
        "|m|\\le1\\quad\\text{để }\\sin u=m\\text{ hoặc }\\cos u=m\\text{ có nghiệm}"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Nhận dạng góc cơ bản",
        "content": "\\[1=\\cos0\\]"
      },
      {
        "title": "Áp dụng công thức nghiệm",
        "content": "\\[\\cos x=\\cos0\\iff x=\\pm0+2k\\pi\\]"
      },
      {
        "title": "Gộp hai họ trùng nhau",
        "content": "\\[x=2k\\pi,\\quad k\\in\\mathbb Z\\]"
      }
    ]
  },
  "toan-11-1-mc-14-lt3": {
    "prompt": "Nghiệm của \\(\\tan x = \\tan \\alpha\\) là:",
    "options": [
      "\\(x = \\alpha + k \\pi\\)",
      "\\(x = -\\alpha + k \\pi\\)",
      "\\(x = \\alpha + 2 k \\pi\\)",
      "\\(x = \\frac{\\pi}{2} + \\alpha + k \\pi\\)"
    ],
    "explanation": "Tang có chu kì \\(\\pi\\); giả thiết \\(\\tan \\alpha\\) xác định.",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\tan u=\\tan\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Điều kiện",
        "content": "Giả thiết \\(\\tan\\alpha\\) xác định, tức \\(\\cos\\alpha\\ne0\\). Nghiệm cần thỏa \\(\\cos x\\ne0\\)."
      },
      {
        "title": "Dùng công thức hiệu tang",
        "content": "\\[\\tan x-\\tan\\alpha=\\frac{\\sin(x-\\alpha)}{\\cos x\\cos\\alpha}=0\\iff\\sin(x-\\alpha)=0\\]"
      },
      {
        "title": "Giải và kiểm tra",
        "content": "\\[x-\\alpha=k\\pi\\iff x=\\alpha+k\\pi,\\quad k\\in\\mathbb Z\\]Các nghiệm giữ nguyên điều kiện xác định của tang."
      }
    ]
  },
  "toan-11-1-mc-14-lt4": {
    "prompt": "Nghiệm của \\(\\cot x = 0\\) là:",
    "options": [
      "\\(x = k \\pi\\)",
      "\\(x = 2 k \\pi\\)",
      "\\(x = \\frac{\\pi}{2} + 2 k \\pi\\)",
      "\\(x = \\frac{\\pi}{2} + k \\pi\\)"
    ],
    "explanation": "Cot bằng \\(0\\) khi \\(\\cos x = 0\\) và \\(\\sin x \\ne 0\\).",
    "hint": "Dùng công thức hoặc tính chất tương ứng của bài học.",
    "guide": {
      "formulas": [
        "\\cot u=\\cot\\alpha\\ \\Longleftrightarrow\\ u=\\alpha+k\\pi"
      ],
      "symbols": [
        [
          "u",
          "Biểu thức góc chứa ẩn \\(x\\); giải theo \\(u\\) rồi đổi lại \\(x\\)."
        ],
        [
          "\\alpha",
          "Một góc đã biết có giá trị lượng giác bằng vế phải."
        ],
        [
          "m",
          "Giá trị ở vế phải phương trình \\(\\sin\\) hoặc \\(\\cos\\)."
        ],
        [
          "k\\in\\mathbb Z",
          "Tham số nguyên của họ nghiệm; chỉ giữ nghiệm trong khoảng đề yêu cầu."
        ]
      ],
      "condition": "Các vế \\(\\tan\\) hoặc \\(\\cot\\) phải xác định. Khi đếm nghiệm, loại nghiệm trùng."
    },
    "solutionSteps": [
      {
        "title": "Đổi về sin và cos",
        "content": "\\[\\cot x=\\frac{\\cos x}{\\sin x},\\quad\\sin x\\ne0\\]"
      },
      {
        "title": "Giải tử bằng 0",
        "content": "\\[\\cot x=0\\iff\\cos x=0\\iff x=\\frac\\pi2+k\\pi\\]"
      },
      {
        "title": "Kiểm tra điều kiện",
        "content": "\\[\\sin(\\pi/2+k\\pi)=(-1)^k\\ne0\\]Vậy nhận toàn bộ họ nghiệm với tham số nguyên."
      }
    ]
  },
  "toan-11-2-1-v1": {
    "prompt": "Dãy số có \\(u_{n} = 3 n - 2 \\left(n \\ge 1\\right)\\). Bốn số hạng đầu là:",
    "options": [
      "\\(1 ; 4 ; 7 ; 10\\)",
      "\\(-2 ; 1 ; 4 ; 7\\)",
      "\\(3 ; 6 ; 9 ; 12\\)",
      "\\(1 ; 3 ; 5 ; 7\\)"
    ],
    "explanation": "Thay \\(n = 1 , 2 , 3 , 4\\) vào công thức, được \\(1 ; 4 ; 7 ; 10\\).",
    "hint": "Chỉ số của số hạng đầu là \\(n = 1\\).",
    "guide": {
      "formulas": [
        "u_k=f(k),\\quad k=1,2,3,\\ldots"
      ],
      "symbols": [
        [
          "u_k",
          "Số hạng thứ \\(k\\) của dãy."
        ],
        [
          "f(k)",
          "Công thức số hạng tổng quát trong đề, thay \\(n\\) bằng \\(k\\)."
        ],
        [
          "k",
          "Chỉ số bắt đầu từ \\(1\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Chỉ số bắt đầu từ \\(1\\). Dùng \\(u_{n} = 3 n - 2\\)."
      },
      {
        "title": "",
        "content": "\\(u_{1} = 3 \\times 1 - 2 = 1 ; u_{2} = 3 \\times 2 - 2 = 4\\)."
      },
      {
        "title": "",
        "content": "\\(u_{3} = 3 \\times 3 - 2 = 7 ; u_{4} = 3 \\times 4 - 2 = 10\\). Vậy bốn số hạng là \\(1 ; 4 ; 7 ; 10\\)."
      }
    ]
  },
  "toan-11-2-2-v1": {
    "prompt": "Cho \\(u_{1} = 2\\) và \\(u_{n+1} = -3 u_{n}\\) với \\(n \\ge 1\\). Bốn số hạng đầu là:",
    "options": [
      "\\(2 ; 6 ; 18 ; 54\\)",
      "\\(2 ; -6 ; 18 ; -54\\)",
      "\\(2 ; -1 ; -4 ; -7\\)",
      "\\(-6 ; 18 ; -54 ; 162\\)"
    ],
    "explanation": "Lần lượt nhân số hạng trước với \\(-3 : u_{2} = -6 , u_{3} = 18 , u_{4} = -54\\).",
    "hint": "Dùng số hạng vừa tìm được để tính số hạng tiếp theo.",
    "guide": {
      "formulas": [
        "u_{n+1}=q u_n",
        "u_n=u_1q^{n-1}\\quad(n\\ge2)"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ]
      ],
      "condition": "Khi có số hạng bằng \\(0\\), dùng định nghĩa truy hồi; không chia cho số hạng đó."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Giữ \\(u_{1} = 2\\); số hạng sau bằng \\(-3\\) lần số hạng trước."
      },
      {
        "title": "",
        "content": "\\(u_{2} = -3 \\times 2 = -6 ; u_{3} = -3 \\times \\left(-6\\right) = 18\\)."
      },
      {
        "title": "",
        "content": "\\(u_{4} = -3 \\times 18 = -54\\). Vậy bốn số hạng là \\(2 ; -6 ; 18 ; -54\\)."
      }
    ]
  },
  "toan-11-2-3-v1": {
    "prompt": "Dãy số nào sau đây là cấp số cộng với \\(n \\ge 1\\)?",
    "options": [
      "\\(u_{n} = 2^{n}\\)",
      "\\(u_{n} = n^{2}\\)",
      "\\(u_{n} = 5 n - 2\\)",
      "\\(u_{n} = \\frac{1}{n}\\)"
    ],
    "explanation": "Với \\(u_{n} = 5 n - 2\\), hiệu \\(u_{n+1} - u_{n} = 5\\) không đổi. Ba dãy còn lại có hiệu liên tiếp phụ thuộc \\(n\\).",
    "hint": "Xét hiệu \\(u_{n+1} - u_{n}\\) với mọi \\(n\\).",
    "guide": {
      "formulas": [
        "u_{n+1}=u_n+d",
        "u_n=u_1+(n-1)d"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Với \\[u_{n} = 5 n - 2 : u_{n+1} - u_{n} = \\left[5 \\left(n + 1\\right) - 2\\right] - \\left(5 n - 2\\right) = 5\\], không đổi."
      },
      {
        "title": "",
        "content": "Với \\(u_{n} = n^{2} : u_{n+1} - u_{n} = 2 n + 1\\), phụ thuộc \\(n\\). Với \\(u_{n} = 2^{n} : u_{n+1} - u_{n} = 2^{n}\\), phụ thuộc \\(n\\)."
      },
      {
        "title": "",
        "content": "Với \\[u_{n} = \\frac{1}{n} : u_{n+1} - u_{n} = \\frac{-1}{n \\left(n + 1\\right)}\\], cũng phụ thuộc \\(n\\). Chỉ dãy \\(u_{n} = 5 n - 2\\) là cấp số cộng."
      }
    ]
  },
  "toan-11-2-4-v1": {
    "prompt": "Cho cấp số cộng có \\(u_{1} = -4 , d = 5\\). Tính \\(u_{12}\\).",
    "options": [
      "\\(46\\)",
      "\\(56\\)",
      "\\(55\\)",
      "\\(51\\)"
    ],
    "explanation": "\\(u_{12} = u_{1} + 11 d = -4 + 11 \\times 5 = 51\\).",
    "hint": "Từ số hạng thứ nhất đến số hạng thứ \\(12\\) có \\(11\\) bước.",
    "guide": {
      "formulas": [
        "u_{n+1}=u_n+d",
        "u_n=u_1+(n-1)d"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Từ số hạng đầu đến số hạng thứ \\(12\\) có \\(11\\) lần cộng công sai: \\(u_{12} = u_{1} + 11 d\\)."
      },
      {
        "title": "",
        "content": "Thay \\(u_{1} = -4 , d = 5 : u_{12} = -4 + 11 \\times 5\\)."
      },
      {
        "title": "",
        "content": "\\(u_{12} = -4 + 55 = 51\\)."
      }
    ]
  },
  "toan-11-2-5-v1": {
    "prompt": "Cho cấp số cộng có \\(u_{3} = 8 , u_{8} = 23\\). Tính \\(u_{20}\\).",
    "options": [
      "\\(59\\)",
      "\\(62\\)",
      "\\(57\\)",
      "\\(60\\)"
    ],
    "explanation": "Ta có \\(5 d = u_{8} - u_{3} = 15\\) nên \\(d = 3 , u_{1} = 8 - 2 \\times 3 = 2\\). Vậy \\(u_{20} = 2 + 19 \\times 3 = 59\\).",
    "hint": "Lấy hiệu hai số hạng đã biết để tìm \\(d\\).",
    "guide": {
      "formulas": [
        "u_{n+1}=u_n+d",
        "u_n=u_1+(n-1)d"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Hai chỉ số cách nhau \\(5 : u_{8} - u_{3} = 5 d\\). Suy ra \\(23 - 8 = 5 d\\) nên \\(d = 3\\)."
      },
      {
        "title": "",
        "content": "\\(u_{1} = u_{3} - 2 d = 8 - 2 \\times 3 = 2\\)."
      },
      {
        "title": "",
        "content": "\\(u_{20} = u_{1} + 19 d = 2 + 19 \\times 3 = 59\\)."
      }
    ]
  },
  "toan-11-2-6-v1": {
    "prompt": "Cho cấp số cộng có \\(u_{1} = 7 , d = -2\\). Số \\(-31\\) là số hạng thứ bao nhiêu?",
    "options": [
      "\\(19\\)",
      "\\(20\\)",
      "\\(21\\)",
      "\\(18\\)"
    ],
    "explanation": "Giải \\(7 - 2 \\left(n - 1\\right) = -31\\) được \\(n = 20\\), là số nguyên dương nên hợp lệ.",
    "hint": "Đặt \\(u_{n} = -31\\) rồi kiểm tra \\(n\\) là số nguyên dương.",
    "guide": {
      "formulas": [
        "u_{n+1}=u_n+d",
        "u_n=u_1+(n-1)d"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Đặt \\(u_{n} = -31 : 7 - 2 \\left(n - 1\\right) = -31\\)."
      },
      {
        "title": "",
        "content": "Khai triển: \\(9 - 2 n = -31\\). Chuyển vế: \\(-2 n = -40\\), suy ra \\(n = 20\\)."
      },
      {
        "title": "",
        "content": "\\(n = 20\\) là số nguyên dương. Kiểm tra: \\(7 - 2 \\times 19 = -31\\), đúng."
      }
    ]
  },
  "toan-11-2-7-v1": {
    "prompt": "Bốn số \\(-7 ; x ; 11 ; y\\) theo thứ tự lập thành một cấp số cộng. Tìm \\(x , y\\).",
    "options": [
      "\\(x = -2 ; y = 24\\)",
      "\\(x = 1 ; y = 21\\)",
      "\\(x = 2 ; y = 20\\)",
      "\\(x = 4 ; y = 18\\)"
    ],
    "explanation": "Từ \\(-7\\) đến \\(11\\) có hai bước nên \\(d = \\frac{11 + 7}{2} = 9\\). Do đó \\(x = 2 , y = 20\\).",
    "hint": "Tính công sai từ số hạng thứ nhất và thứ \\(b a\\).",
    "guide": {
      "formulas": [
        "a,b,c\\text{ lập CSC}\\ \\Longleftrightarrow\\ a+c=2b"
      ],
      "symbols": [
        [
          "a,b,c",
          "Ba số theo đúng thứ tự đề bài."
        ],
        [
          "\\mathrm{CSC}",
          "Cấp số cộng; chấp nhận công sai bằng \\(0\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Từ \\(-7\\) đến \\(11\\) có hai bước: \\(2 d = 11 - \\left(-7\\right) = 18\\) nên \\(d = 9\\)."
      },
      {
        "title": "",
        "content": "\\(x = -7 + 9 = 2 ; y = 11 + 9 = 20\\)."
      },
      {
        "title": "",
        "content": "Kiểm tra các hiệu: \\(2 - \\left(-7\\right) = 11 - 2 = 20 - 11 = 9\\)."
      }
    ]
  },
  "toan-11-2-8-v1": {
    "prompt": "Tìm \\(x\\) để \\(b a\\) số \\(x + 1 ; 2 x - 1 ; 5 x - 7\\) theo thứ tự lập thành cấp số cộng.",
    "options": [
      "Không có \\(x\\)",
      "\\(x = 0\\)",
      "\\(x = -2\\)",
      "\\(x = 2\\)"
    ],
    "explanation": "Điều kiện là \\(\\left(x + 1\\right) + \\left(5 x - 7\\right) = 2 \\left(2 x - 1\\right)\\), suy ra \\(x = 2\\). Ba số khi đó đều bằng \\(3\\); công sai bằng \\(0\\) vẫn hợp lệ.",
    "hint": "Số giữa bằng trung bình cộng hai số hai bên; \\(d\\) có thể bằng \\(0\\).",
    "guide": {
      "formulas": [
        "a,b,c\\text{ lập CSC}\\ \\Longleftrightarrow\\ a+c=2b"
      ],
      "symbols": [
        [
          "a,b,c",
          "Ba số theo đúng thứ tự đề bài."
        ],
        [
          "\\mathrm{CSC}",
          "Cấp số cộng; chấp nhận công sai bằng \\(0\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Điều kiện \\(b a\\) số theo thứ tự lập cấp số cộng: \\[\\left(x + 1\\right) + \\left(5 x - 7\\right) = 2 \\left(2 x - 1\\right)\\]."
      },
      {
        "title": "",
        "content": "Khai triển: \\(6 x - 6 = 4 x - 2\\). Suy ra \\(2 x = 4\\) nên \\(x = 2\\)."
      },
      {
        "title": "",
        "content": "Thay \\(x = 2\\) được \\(3 ; 3 ; 3\\). Các hiệu bằng \\(0\\) nên nhận nghiệm."
      }
    ]
  },
  "toan-11-2-9-v1": {
    "prompt": "Cho cấp số cộng có \\(u_{1} = 3 , d = 4\\). Tính tổng \\(S_{20}\\) của \\(20\\) số hạng đầu.",
    "options": [
      "\\(820\\)",
      "\\(800\\)",
      "\\(860\\)",
      "\\(780\\)"
    ],
    "explanation": "\\(u_{20} = 3 + 19 \\times 4 = 79\\). \\(S_{20} = \\frac{20 \\left(3 + 79\\right)}{2} = 820\\).",
    "hint": "Dùng \\(S_{n} = \\frac{n \\left[2 u_{1} + \\left(n - 1\\right) d\\right]}{2}\\).",
    "guide": {
      "formulas": [
        "u_n=u_1+(n-1)d",
        "S_n=\\frac{n(u_1+u_n)}2=\\frac{n[2u_1+(n-1)d]}2"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Tính số hạng cuối: \\(u_{20} = 3 + \\left(20 - 1\\right) \\times 4 = 3 + 76 = 79\\)."
      },
      {
        "title": "",
        "content": "Dùng tổng cấp số cộng: \\(S_{20} = \\frac{20 \\left(3 + 79\\right)}{2}\\)."
      },
      {
        "title": "",
        "content": "\\(S_{20} = 10 \\times 82 = 820\\)."
      }
    ]
  },
  "toan-11-2-10-v1": {
    "prompt": "Cho cấp số cộng có \\(u_{1} = 5 , d = 3\\). Biết \\(S_{n} = 185\\), tìm số nguyên dương \\(n\\).",
    "options": [
      "\\(9\\)",
      "\\(10\\)",
      "\\(11\\)",
      "\\(12\\)"
    ],
    "explanation": "\\(S_{n} = \\frac{n \\left(3 n + 7\\right)}{2} = 185\\) nên \\(3 n^{2} + 7 n - 370 = \\left(n - 10\\right) \\left(3 n + 37\\right) = 0\\). Chỉ \\(n = 10\\) là số nguyên dương.",
    "hint": "Lập phương trình theo \\(n\\) từ công thức tính tổng.",
    "guide": {
      "formulas": [
        "u_n=u_1+(n-1)d",
        "S_n=\\frac{n(u_1+u_n)}2=\\frac{n[2u_1+(n-1)d]}2"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Dùng \\[S_{n} = \\frac{n \\left[2 u_{1} + \\left(n - 1\\right) d\\right]}{2} : \\frac{n \\left[10 + 3 \\left(n - 1\\right)\\right]}{2} = 185\\]."
      },
      {
        "title": "",
        "content": "Khai triển và nhân \\(2 : 3 n^{2} + 7 n - 370 = 0\\)."
      },
      {
        "title": "",
        "content": "Phân tích: \\(\\left(n - 10\\right) \\left(3 n + 37\\right) = 0\\). Suy ra \\(n = 10\\) hoặc \\(n = \\frac{-37}{3}\\)."
      },
      {
        "title": "",
        "content": "Vì \\(n\\) là số nguyên dương nên loại \\(\\frac{-37}{3}\\), nhận \\(n = 10\\). Kiểm tra \\(S_{10} = \\frac{10 \\left(10 + 27\\right)}{2} = 185\\)."
      }
    ]
  },
  "toan-11-2-11-v1": {
    "prompt": "Cho cấp số cộng có \\(S_{4} = 18\\) và \\(S_{6} = 45\\). Tìm \\(u_{1} , d\\).",
    "options": [
      "\\(u_{1} = 1 ; d = 2\\)",
      "\\(u_{1} = 3 ; d = 1\\)",
      "\\(u_{1} = 0 ; d = 3\\)",
      "\\(u_{1} = -3 ; d = 5\\)"
    ],
    "explanation": "\\(S_{4} = 4 u_{1} + 6 d = 18\\) và \\(S_{6} = 6 u_{1} + 15 d = 45\\). Giải hệ được \\(d = 3\\) và \\(u_{1} = 0\\).",
    "hint": "Viết hai tổng theo \\(u_{1}\\) và \\(d\\) rồi giải hệ.",
    "guide": {
      "formulas": [
        "u_n=u_1+(n-1)d",
        "S_n=\\frac{n(u_1+u_n)}2=\\frac{n[2u_1+(n-1)d]}2"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Viết hai phương trình: \\(S_{4} = 4 u_{1} + 6 d = 18 ; S_{6} = 6 u_{1} + 15 d = 45\\)."
      },
      {
        "title": "",
        "content": "Nhân phương trình đầu với \\(3\\), phương trình sau với \\(2 : 12 u_{1} + 18 d = 54 ; 12 u_{1} + 30 d = 90\\)."
      },
      {
        "title": "",
        "content": "Lấy phương trình sau trừ trước: \\(12 d = 36\\) nên \\(d = 3\\)."
      },
      {
        "title": "",
        "content": "Thế lại: \\(4 u_{1} + 18 = 18\\) nên \\(u_{1} = 0\\). Hai tổng đều thỏa dữ kiện."
      }
    ]
  },
  "toan-11-2-12-v1": {
    "prompt": "Một dãy số có tổng \\(n\\) số hạng đầu là \\(S_{n} = 2 n^{2} + 3 n\\) với mọi \\(n \\ge 1\\). Công thức \\(u_{n}\\) và công sai là:",
    "options": [
      "\\(u_{n} = 4 n - 1 ; d = 4\\)",
      "\\(u_{n} = 4 n + 3 ; d = 4\\)",
      "\\(u_{n} = 2 n + 3 ; d = 2\\)",
      "\\(u_{n} = 4 n + 1 ; d = 4\\)"
    ],
    "explanation": "\\(u_{1} = S_{1} = 5\\). Với \\(n \\ge 2 , u_{n} = S_{n} - S_{n-1} = 4 n + 1\\); công thức cũng đúng tại \\(n = 1\\). Hiệu liên tiếp bằng \\(4\\).",
    "hint": "Tách trường hợp \\(n = 1\\) trước khi dùng \\(u_{n} = S_{n} - S_{n-1}\\).",
    "guide": {
      "formulas": [
        "u_1=S_1,\\quad u_n=S_n-S_{n-1}\\quad(n\\ge2)"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Với \\(n = 1 : u_{1} = S_{1} = 2 + 3 = 5\\)."
      },
      {
        "title": "",
        "content": "Với \\[n \\ge 2 : S_{n-1} = 2 \\left(n - 1\\right)^{2} + 3 \\left(n - 1\\right) = 2 n^{2} - n - 1\\]."
      },
      {
        "title": "",
        "content": "\\[u_{n} = S_{n} - S_{n-1} = \\left(2 n^{2} + 3 n\\right) - \\left(2 n^{2} - n - 1\\right) = 4 n + 1\\]."
      },
      {
        "title": "",
        "content": "Công thức cũng cho \\(u_{1} = 5\\). Hiệu \\[u_{n+1} - u_{n} = \\left[4 \\left(n + 1\\right) + 1\\right] - \\left(4 n + 1\\right) = 4\\], nên \\(d = 4\\)."
      }
    ]
  },
  "toan-11-2-13-v1": {
    "prompt": "Xen bốn số giữa \\(3\\) và \\(28\\) để được cấp số cộng gồm sáu số hạng. Bốn số cần xen theo thứ tự là:",
    "options": [
      "\\(8 ; 13 ; 18 ; 23\\)",
      "\\(9 ; 14 ; 19 ; 24\\)",
      "\\(7 ; 12 ; 17 ; 22\\)",
      "\\(5 ; 10 ; 15 ; 20\\)"
    ],
    "explanation": "Sáu số hạng tạo năm khoảng nên \\(d = \\frac{28 - 3}{5} = 5\\). Bốn số cần xen là \\(8 ; 13 ; 18 ; 23\\).",
    "hint": "Đếm số khoảng giữa hai số đầu cuối.",
    "guide": {
      "formulas": [
        "d=\\frac{b-a}{m+1},\\qquad N=m+2"
      ],
      "symbols": [
        [
          "a,b",
          "Hai số ở đầu và cuối cấp số cộng."
        ],
        [
          "m",
          "Số lượng số cần xen giữa hai đầu."
        ],
        [
          "N",
          "Tổng số hạng sau khi xen."
        ],
        [
          "d",
          "Công sai; có \\(m + 1\\) khoảng giữa \\(m + 2\\) số hạng."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Xen bốn số tạo sáu số hạng, tức năm khoảng công sai."
      },
      {
        "title": "",
        "content": "\\(28 = 3 + 5 d\\) nên \\(5 d = 25 , d = 5\\)."
      },
      {
        "title": "",
        "content": "Lần lượt cộng \\(5\\) từ số đầu: \\(8 ; 13 ; 18 ; 23\\). Cộng thêm \\(5\\) nữa được \\(28\\), đúng số cuối."
      }
    ]
  },
  "toan-11-2-14-v1": {
    "prompt": "Ba góc của một tam giác, xếp từ nhỏ đến lớn, lập thành cấp số cộng. Góc nhỏ nhất bằng \\(20^{\\circ}\\). Tìm \\(b a\\) góc.",
    "options": [
      "\\(20^{\\circ} ; 70^{\\circ} ; 90^{\\circ}\\)",
      "\\(20^{\\circ} ; 60^{\\circ} ; 100^{\\circ}\\)",
      "\\(20^{\\circ} ; 40^{\\circ} ; 120^{\\circ}\\)",
      "\\(20^{\\circ} ; 80^{\\circ} ; 140^{\\circ}\\)"
    ],
    "explanation": "Gọi \\(b a\\) góc là \\(20^{\\circ} , 20^{\\circ} + d , 20^{\\circ} + 2 d\\). Tổng bằng \\(180^{\\circ}\\) nên \\(60^{\\circ} + 3 d = 180^{\\circ}\\), suy ra \\(d = 40^{\\circ}\\). Ba góc là \\(20^{\\circ} ; 60^{\\circ} ; 100^{\\circ}\\).",
    "hint": "Tổng \\(b a\\) góc trong tam giác bằng \\(180^{\\circ}\\).",
    "guide": {
      "formulas": [
        "A+B+C=180^\\circ",
        "A+C=2B\\quad\\text{khi ba góc theo thứ tự lập CSC}"
      ],
      "symbols": [
        [
          "A,B,C",
          "Số đo \\(b a\\) góc của tam giác theo đúng thứ tự cấp số cộng."
        ]
      ],
      "condition": "Mỗi góc phải dương và nhỏ hơn \\(180^{\\circ}\\)."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Gọi \\(b a\\) góc là \\(20^{\\circ} , 20^{\\circ} + d , 20^{\\circ} + 2 d\\) với \\(d \\ge 0\\)."
      },
      {
        "title": "",
        "content": "Tổng \\(b a\\) góc: \\(60^{\\circ} + 3 d = 180^{\\circ}\\) nên \\(3 d = 120^{\\circ} , d = 40^{\\circ}\\)."
      },
      {
        "title": "",
        "content": "Ba góc là \\(20^{\\circ} ; 60^{\\circ} ; 100^{\\circ}\\). Chúng đều dương, tăng dần và có tổng \\(180^{\\circ}\\)."
      }
    ]
  },
  "toan-11-2-15-v1": {
    "prompt": "Dãy số nào sau đây là cấp số nhân với \\(n \\ge 1\\)?",
    "options": [
      "\\(u_{n} = n^{2}\\)",
      "\\(u_{n} = 2 n + 1\\)",
      "\\(u_{n} = 3 \\times 2^{n-1}\\)",
      "\\(u_{n} = \\frac{1}{n}\\)"
    ],
    "explanation": "Dãy \\(u_{n} = 3 \\times 2^{n-1}\\) có \\(u_{n+1} = 2 u_{n}\\) với mọi \\(n\\), nên là cấp số nhân có \\(q = 2\\). Các dãy còn lại không có tỉ số liên tiếp không đổi.",
    "hint": "Xét tỉ số hai số hạng liên tiếp khi số hạng ở mẫu khác \\(0\\).",
    "guide": {
      "formulas": [
        "u_{n+1}=q u_n",
        "u_n=u_1q^{n-1}\\quad(n\\ge2)"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ]
      ],
      "condition": "Khi có số hạng bằng \\(0\\), dùng định nghĩa truy hồi; không chia cho số hạng đó."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Với \\(u_{n} = 3 \\times 2^{n-1} : u_{n+1} = 3 \\times 2^{n} = 2 u_{n}\\). Đây là cấp số nhân với \\(q = 2\\)."
      },
      {
        "title": "",
        "content": "Với \\(u_{n} = 2 n + 1\\), tỉ số \\(\\frac{u_{2}}{u_{1}} = \\frac{5}{3}\\) khác \\(\\frac{u_{3}}{u_{2}} = \\frac{7}{5}\\)."
      },
      {
        "title": "",
        "content": "Với \\(u_{n} = n^{2}\\), tỉ số đầu là \\(4\\) và \\(\\frac{9}{4}\\). Với \\(u_{n} = \\frac{1}{n}\\), tỉ số đầu là \\(\\frac{1}{2}\\) và \\(\\frac{2}{3}\\). Các dãy này không có công bội cố định."
      }
    ]
  },
  "toan-11-2-16-v1": {
    "prompt": "Cho cấp số nhân có \\(u_{1} = 3 , q = -2\\). Tính \\(u_{7}\\).",
    "options": [
      "\\(-384\\)",
      "\\(-192\\)",
      "\\(384\\)",
      "\\(192\\)"
    ],
    "explanation": "\\(u_{7} = 3 \\left(-2\\right)^{6} = 192\\). Số mũ chẵn nên lũy thừa dương.",
    "hint": "Dùng \\(u_{n} = u_{1} q^{n-1}\\) và chú ý dấu của lũy thừa.",
    "guide": {
      "formulas": [
        "u_{n+1}=q u_n",
        "u_n=u_1q^{n-1}\\quad(n\\ge2)"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ]
      ],
      "condition": "Khi có số hạng bằng \\(0\\), dùng định nghĩa truy hồi; không chia cho số hạng đó."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Dùng số hạng tổng quát: \\(u_{7} = u_{1} q^{6} = 3 \\left(-2\\right)^{6}\\)."
      },
      {
        "title": "",
        "content": "Vì mũ \\(6\\) chẵn: \\(\\left(-2\\right)^{6} = 64\\)."
      },
      {
        "title": "",
        "content": "\\(u_{7} = 3 \\times 64 = 192\\)."
      }
    ]
  },
  "toan-11-2-17-v1": {
    "prompt": "Cho cấp số nhân có \\(u_{2} = 6\\) và \\(u_{5} = 162\\). Tính \\(u_{6}\\).",
    "options": [
      "\\(486\\)",
      "\\(324\\)",
      "\\(-486\\)",
      "\\(54\\)"
    ],
    "explanation": "Vì \\(u_{2}\\) khác \\(0 , q^{3} = \\frac{u_{5}}{u_{2}} = 27\\) nên \\(q = 3\\). Vậy \\(u_{6} = 162 \\times 3 = 486\\).",
    "hint": "Khoảng cách chỉ số giữa \\(u_{2}\\) và \\(u_{5}\\) là \\(3\\).",
    "guide": {
      "formulas": [
        "\\frac{u_j}{u_i}=q^{j-i}\\quad(u_i\\ne0)",
        "q^{2m}=A>0\\ \\Longrightarrow\\ q=\\pm A^{1/(2m)}"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "i,j",
          "Chỉ số hai số hạng đã biết, với \\(j\\) lớn hơn \\(i\\)."
        ],
        [
          "m",
          "Số nguyên dương; \\(2 m\\) là số mũ chẵn."
        ],
        [
          "A",
          "Giá trị dương của lũy thừa công bội sau khi lập phương trình."
        ]
      ],
      "condition": "Không bỏ nghiệm công bội âm nếu đề không yêu cầu \\(q\\) dương."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "\\(u_{5} = u_{2} q^{3}\\). Do \\(u_{2} = 6\\) khác \\(0\\) nên \\(q^{3} = \\frac{162}{6} = 27\\)."
      },
      {
        "title": "",
        "content": "Lấy căn bậc \\(b a\\) thực: \\(q = 3\\)."
      },
      {
        "title": "",
        "content": "\\(u_{6} = u_{5} q = 162 \\times 3 = 486\\)."
      }
    ]
  },
  "toan-11-2-18-v1": {
    "prompt": "Cho cấp số nhân thực có \\(u_{1} = 2 , u_{3} = 18\\). Tất cả các giá trị có thể của \\(u_{4}\\) là:",
    "options": [
      "Chỉ \\(54\\)",
      "\\(-54\\) và \\(54\\)",
      "Chỉ \\(-54\\)",
      "\\(-18\\) và \\(18\\)"
    ],
    "explanation": "\\(2 q^{2} = 18\\) nên \\(q = 3\\) hoặc \\(q = -3\\). Do đó \\(u_{4} = 2 q^{3}\\) bằng \\(54\\) hoặc \\(-54\\). Đề không yêu cầu công bội dương.",
    "hint": "Phương trình \\(q^{2} = 9\\) có hai nghiệm thực.",
    "guide": {
      "formulas": [
        "\\frac{u_j}{u_i}=q^{j-i}\\quad(u_i\\ne0)",
        "q^{2m}=A>0\\ \\Longrightarrow\\ q=\\pm A^{1/(2m)}"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "i,j",
          "Chỉ số hai số hạng đã biết, với \\(j\\) lớn hơn \\(i\\)."
        ],
        [
          "m",
          "Số nguyên dương; \\(2 m\\) là số mũ chẵn."
        ],
        [
          "A",
          "Giá trị dương của lũy thừa công bội sau khi lập phương trình."
        ]
      ],
      "condition": "Không bỏ nghiệm công bội âm nếu đề không yêu cầu \\(q\\) dương."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "\\(u_{3} = u_{1} q^{2}\\) nên \\(18 = 2 q^{2}\\), tức \\(q^{2} = 9\\)."
      },
      {
        "title": "",
        "content": "Phương trình có đủ hai nghiệm thực: \\(q = 3\\) hoặc \\(q = -3\\)."
      },
      {
        "title": "",
        "content": "Nếu \\(q = 3 : u_{4} = 2 \\times 3^{3} = 54\\). Nếu \\(q = -3 : u_{4} = 2 \\left(-3\\right)^{3} = -54\\). Nhận cả hai giá trị."
      }
    ]
  },
  "toan-11-2-19-v1": {
    "prompt": "Bốn số \\(x ; 12 ; y ; 192\\) theo thứ tự lập thành cấp số nhân thực. Tìm tất cả các cặp \\(\\left(x ; y\\right)\\).",
    "options": [
      "\\(\\left(3 ; -48\\right)\\) và \\(\\left(-3 ; 48\\right)\\)",
      "Chỉ \\(\\left(3 ; 48\\right)\\)",
      "\\(\\left(3 ; 48\\right)\\) và \\(\\left(-3 ; -48\\right)\\)",
      "\\(\\left(4 ; 36\\right)\\) và \\(\\left(-4 ; -36\\right)\\)"
    ],
    "explanation": "\\(192 = 12 q^{2}\\) nên \\(q =\\) ±\\(4\\). Nếu \\(q = 4\\) thì \\(x = 3 , y = 48\\); nếu \\(q = -4\\) thì \\(x = -3 , y = -48\\). Cả hai cặp đều thỏa định nghĩa.",
    "hint": "Không bỏ nghiệm công bội âm.",
    "guide": {
      "formulas": [
        "\\frac{u_j}{u_i}=q^{j-i}\\quad(u_i\\ne0)",
        "q^{2m}=A>0\\ \\Longrightarrow\\ q=\\pm A^{1/(2m)}"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "i,j",
          "Chỉ số hai số hạng đã biết, với \\(j\\) lớn hơn \\(i\\)."
        ],
        [
          "m",
          "Số nguyên dương; \\(2 m\\) là số mũ chẵn."
        ],
        [
          "A",
          "Giá trị dương của lũy thừa công bội sau khi lập phương trình."
        ]
      ],
      "condition": "Không bỏ nghiệm công bội âm nếu đề không yêu cầu \\(q\\) dương."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Từ số hạng thứ hai đến thứ tư: \\(192 = 12 q^{2}\\), suy ra \\(q^{2} = 16 , q =\\) ±\\(4\\)."
      },
      {
        "title": "",
        "content": "Với \\(q = 4 : x = \\frac{12}{4} = 3 ; y = 12 \\times 4 = 48\\)."
      },
      {
        "title": "",
        "content": "Với \\[q = -4 : x = \\frac{12}{-4} = -3 ; y = 12 \\times \\left(-4\\right) = -48\\]."
      },
      {
        "title": "",
        "content": "Kiểm tra yq = \\(192\\) trong cả hai trường hợp. Hai cặp là \\(\\left(3 ; 48\\right)\\) và \\(\\left(-3 ; -48\\right)\\)."
      }
    ]
  },
  "toan-11-2-20-v1": {
    "prompt": "Tìm \\(x\\) để \\(b a\\) số \\(x - 1 ; x + 1 ; x + 5\\) theo thứ tự lập thành cấp số nhân.",
    "options": [
      "\\(x = 5\\)",
      "\\(x = 1\\)",
      "\\(x = -1\\)",
      "\\(x = 3\\)"
    ],
    "explanation": "Điều kiện cần \\(\\left(x + 1\\right)^{2} = \\left(x - 1\\right) \\left(x + 5\\right)\\) cho \\(x = 3\\). Kiểm tra lại được \\(2 ; 4 ; 8\\), là cấp số nhân có \\(q = 2\\), nên nghiệm hợp lệ.",
    "hint": "Dùng bình phương số giữa bằng tích hai số ngoài rồi kiểm tra định nghĩa.",
    "guide": {
      "formulas": [
        "a,b,c\\text{ lập CSN}\\ \\Longleftrightarrow\\ b^2=ac"
      ],
      "symbols": [
        [
          "a,b,c",
          "Ba số theo thứ tự đề; trong công thức tương đương này, cả \\(b a\\) khác \\(0\\)."
        ],
        [
          "\\mathrm{CSN}",
          "Cấp số nhân."
        ]
      ],
      "condition": "Nếu có số bằng \\(0\\), kiểm tra trực tiếp điều kiện số sau bằng \\(q\\) lần số trước."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Điều kiện cần: \\(\\left(x + 1\\right)^{2} = \\left(x - 1\\right) \\left(x + 5\\right)\\)."
      },
      {
        "title": "",
        "content": "Khai triển: \\(x^{2} + 2 x + 1 = x^{2} + 4 x - 5\\). Suy ra \\(2 x = 6\\) nên \\(x = 3\\)."
      },
      {
        "title": "",
        "content": "Thay lại được \\(2 ; 4 ; 8\\), có \\(\\frac{4}{2} = \\frac{8}{4} = 2\\) nên đúng định nghĩa cấp số nhân."
      }
    ]
  },
  "toan-11-2-21-v1": {
    "prompt": "Cho cấp số nhân có \\(u_{1} = 2 , q = 3\\). Tính \\(S_{6}\\).",
    "options": [
      "\\(728\\)",
      "\\(726\\)",
      "\\(486\\)",
      "\\(1456\\)"
    ],
    "explanation": "\\(S_{6} = \\frac{2 \\left(3^{6} - 1\\right)}{3 - 1} = 729 - 1 = 728\\).",
    "hint": "Dùng công thức tổng cấp số nhân với \\(q\\) khác \\(1\\).",
    "guide": {
      "formulas": [
        "S_n=u_1\\frac{1-q^n}{1-q}\\quad(q\\ne1)",
        "S_n=nu_1\\quad(q=1)"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Công bội \\(q = 3\\) khác \\(1\\) nên dùng \\(S_{6} = \\frac{u_{1} \\left(q^{6} - 1\\right)}{q - 1}\\)."
      },
      {
        "title": "",
        "content": "Thay số: \\[S_{6} = \\frac{2 \\left(3^{6} - 1\\right)}{3 - 1} = \\frac{2 \\left(729 - 1\\right)}{2}\\]."
      },
      {
        "title": "",
        "content": "Khử hệ số \\(2\\) rồi trừ: \\(S_{6} = 729 - 1 = 728\\)."
      }
    ]
  },
  "toan-11-2-22-v1": {
    "prompt": "Cho cấp số nhân có \\(u_{1} = 5 , q = 1\\). Tính \\(S_{20}\\).",
    "options": [
      "\\(0\\)",
      "\\(100\\)",
      "\\(20\\)",
      "Không xác định"
    ],
    "explanation": "\\(q = 1\\) nên mọi số hạng đều bằng \\(5\\). \\(S_{20} = 20 \\times 5 = 100\\); không dùng công thức có mẫu \\(1 - q\\).",
    "hint": "Xét riêng trường hợp \\(q = 1\\).",
    "guide": {
      "formulas": [
        "q=1\\ \\Longrightarrow\\ u_n=u_1,\\quad S_n=nu_1"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Khi \\(q = 1\\), mọi số hạng bằng \\(u_{1} = 5\\)."
      },
      {
        "title": "",
        "content": "Tổng gồm \\(20\\) số bằng nhau: \\(S_{20} = 20 \\times 5\\)."
      },
      {
        "title": "",
        "content": "\\(S_{20} = 100\\). Không dùng công thức tổng có mẫu \\(q - 1\\) vì mẫu bằng \\(0\\)."
      }
    ]
  },
  "toan-11-2-23-v1": {
    "prompt": "Cho cấp số nhân có \\(u_{1} = 3 , q = 2\\). Số \\(384\\) là số hạng thứ bao nhiêu?",
    "options": [
      "\\(9\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(6\\)"
    ],
    "explanation": "\\(3 \\times 2^{n-1} = 384\\) nên \\(2^{n-1} = 128 = 2^{7}\\). Suy ra \\(n = 8\\).",
    "hint": "Đưa hai vế về lũy thừa cùng cơ số \\(2\\).",
    "guide": {
      "formulas": [
        "u_{n+1}=q u_n",
        "u_n=u_1q^{n-1}\\quad(n\\ge2)"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ]
      ],
      "condition": "Khi có số hạng bằng \\(0\\), dùng định nghĩa truy hồi; không chia cho số hạng đó."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Đặt \\(u_{n} = 384 : 3 \\times 2^{n-1} = 384\\)."
      },
      {
        "title": "",
        "content": "Chia cho \\(3 : 2^{n-1} = 128 = 2^{7}\\). Hai lũy thừa cùng cơ số \\(2\\) nên \\(n - 1 = 7\\)."
      },
      {
        "title": "",
        "content": "\\(n = 8\\) là số nguyên dương; kiểm tra \\(3 \\times 2^{7} = 384\\), đúng."
      }
    ]
  },
  "toan-11-2-24-v1": {
    "prompt": "Xen \\(b a\\) số thực giữa \\(2\\) và \\(162\\) để được cấp số nhân gồm năm số hạng. Tìm tất cả các bộ \\(b a\\) theo thứ tự.",
    "options": [
      "\\(\\left(4 ; 18 ; 81\\right)\\) và \\(\\left(-4 ; 18 ; -81\\right)\\)",
      "Chỉ \\(\\left(6 ; 18 ; 54\\right)\\)",
      "\\(\\left(-6 ; -18 ; -54\\right)\\) và \\(\\left(6 ; 18 ; 54\\right)\\)",
      "\\(\\left(6 ; 18 ; 54\\right)\\) và \\(\\left(-6 ; 18 ; -54\\right)\\)"
    ],
    "explanation": "\\(2 q^{4} = 162\\) nên \\(q^{4} = 81\\), suy ra \\(q =\\) ±\\(3\\). Với \\(q = 3\\) được \\(6 ; 18 ; 54\\); với \\(q = -3\\) được \\(-6 ; 18 ; -54\\). Cả hai đều kết thúc ở \\(162\\).",
    "hint": "Năm số hạng tạo bốn lần nhân công bội.",
    "guide": {
      "formulas": [
        "q^{m+1}=\\frac ba\\quad(a\\ne0),\\qquad N=m+2"
      ],
      "symbols": [
        [
          "a,b",
          "Hai số đầu và cuối của cấp số nhân."
        ],
        [
          "m",
          "Số số hạng được xen giữa \\(a\\) và \\(b\\)."
        ],
        [
          "N",
          "Tổng số hạng sau khi xen."
        ],
        [
          "q",
          "Công bội; cần giữ đủ nghiệm thực, kể cả nghiệm âm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Năm số hạng có bốn lần nhân công bội: \\(162 = 2 q^{4}\\)."
      },
      {
        "title": "",
        "content": "\\(q^{4} = 81\\) nên hai công bội thực là \\(q = 3\\) và \\(q = -3\\)."
      },
      {
        "title": "",
        "content": "Với \\(q = 3 : b a\\) số xen là \\(6 ; 18 ; 54\\). Với \\(q = -3 : b a\\) số xen là \\(-6 ; 18 ; -54\\)."
      },
      {
        "title": "",
        "content": "Kiểm tra số cuối: \\(54 \\times 3 = 162\\) và \\(\\left(-54\\right) \\left(-3\\right) = 162\\). Nhận cả hai bộ."
      }
    ]
  },
  "toan-11-2-25-v1": {
    "prompt": "Một cấp số nhân thực có năm số hạng, \\(u_{3} = 12\\) và \\(u_{5} = 48\\). Tất cả các giá trị có thể của \\(S_{5}\\) là:",
    "options": [
      "\\(33\\) và \\(93\\)",
      "Chỉ \\(93\\)",
      "\\(-33\\) và \\(93\\)",
      "\\(31\\) và \\(63\\)"
    ],
    "explanation": "\\(q^{2} = \\frac{48}{12} = 4\\) nên \\(q =\\) ±\\(2\\) và \\(u_{1} = \\frac{12}{q^{2}} = 3\\). Với \\(q = 2\\), tổng là \\(3 + 6 + 12 + 24 + 48 = 93\\). Với \\(q = -2\\), tổng là \\(3 - 6 + 12 - 24 + 48 = 33\\).",
    "hint": "Tính tổng riêng cho hai công bội.",
    "guide": {
      "formulas": [
        "\\frac{u_j}{u_i}=q^{j-i}\\quad(u_i\\ne0)",
        "q^{2m}=A>0\\ \\Longrightarrow\\ q=\\pm A^{1/(2m)}"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "i,j",
          "Chỉ số hai số hạng đã biết, với \\(j\\) lớn hơn \\(i\\)."
        ],
        [
          "m",
          "Số nguyên dương; \\(2 m\\) là số mũ chẵn."
        ],
        [
          "A",
          "Giá trị dương của lũy thừa công bội sau khi lập phương trình."
        ]
      ],
      "condition": "Không bỏ nghiệm công bội âm nếu đề không yêu cầu \\(q\\) dương."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "\\(\\frac{u_{5}}{u_{3}} = q^{2} = \\frac{48}{12} = 4\\), nên \\(q =\\) ±\\(2\\)."
      },
      {
        "title": "",
        "content": "\\(u_{1} = \\frac{u_{3}}{q^{2}} = \\frac{12}{4} = 3\\) trong cả hai trường hợp."
      },
      {
        "title": "",
        "content": "Với \\(q = 2 : S_{5} = 3 + 6 + 12 + 24 + 48 = 93\\)."
      },
      {
        "title": "",
        "content": "Với \\(q = -2 : S_{5} = 3 - 6 + 12 - 24 + 48 = 33\\). Hai giá trị là \\(33\\) và \\(93\\)."
      }
    ]
  },
  "toan-11-2-26-v1": {
    "prompt": "Cho cấp số nhân thực có \\(S_{3} = 14\\) và \\(S_{6} = 126\\). Tìm \\(u_{1} , q\\).",
    "options": [
      "\\(u_{1} = 2 ; q = -2\\)",
      "\\(u_{1} = 2 ; q = 2\\)",
      "\\(u_{1} = 1 ; q = 3\\)",
      "\\(u_{1} = 7 ; q = 1\\)"
    ],
    "explanation": "Ba số hạng thứ tư đến thứ sáu lần lượt bằng \\(q^{3}\\) lần \\(b a\\) số hạng đầu, nên \\(S_{6} = \\left(1 + q^{3}\\right) S_{3}\\). Suy ra \\(q^{3} = 8 , q = 2\\). Từ \\(u_{1} \\left(1 + 2 + 4\\right) = 14\\) được \\(u_{1} = 2\\).",
    "hint": "So sánh tổng \\(b a\\) số hạng sau với tổng \\(b a\\) số hạng đầu.",
    "guide": {
      "formulas": [
        "S_{2n}=S_n(1+q^n)",
        "S_n=u_1(1+q+\\cdots+q^{n-1})"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "q",
          "Công bội: hệ số nhân cố định từ một số hạng sang số hạng kế tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Ba số hạng sau lần lượt bằng \\(q^{3}\\) lần \\(b a\\) số đầu, nên \\(S_{6} = S_{3} + q^{3} S_{3}\\)."
      },
      {
        "title": "",
        "content": "\\(126 = 14 \\left(1 + q^{3}\\right)\\) nên \\(1 + q^{3} = 9 , q^{3} = 8 , q = 2\\)."
      },
      {
        "title": "",
        "content": "\\(S_{3} = u_{1} \\left(1 + 2 + 4\\right) = 7 u_{1} = 14\\) nên \\(u_{1} = 2\\)."
      },
      {
        "title": "",
        "content": "Kiểm tra \\(S_{6} = \\frac{2 \\left(2^{6} - 1\\right)}{2 - 1} = 126\\)."
      }
    ]
  },
  "toan-11-2-27-v1": {
    "prompt": "Một hội trường có \\(20\\) hàng ghế. Hàng đầu có \\(18\\) ghế; mỗi hàng sau nhiều hơn hàng ngay trước \\(2\\) ghế. Tổng số ghế là:",
    "options": [
      "\\(760\\) ghế",
      "\\(720\\) ghế",
      "\\(740\\) ghế",
      "\\(1120\\) ghế"
    ],
    "explanation": "Số ghế mỗi hàng là cấp số cộng với \\(u_{1} = 18 , d = 2\\). Hàng thứ \\(20\\) có \\(56\\) ghế; tổng là \\(\\frac{20 \\left(18 + 56\\right)}{2} = 740\\) ghế.",
    "hint": "Mô hình hóa số ghế ở mỗi hàng bằng cấp số cộng.",
    "guide": {
      "formulas": [
        "u_n=u_1+(n-1)d",
        "S_n=\\frac{n(u_1+u_n)}2=\\frac{n[2u_1+(n-1)d]}2"
      ],
      "symbols": [
        [
          "u_1,u_n",
          "Số hạng đầu và số hạng thứ \\(n\\) của dãy."
        ],
        [
          "n",
          "Chỉ số hoặc số lượng số hạng; \\(n\\) là số nguyên dương."
        ],
        [
          "d",
          "Công sai: lượng tăng hoặc giảm cố định giữa hai số hạng liên tiếp."
        ],
        [
          "S_n",
          "Tổng \\(n\\) số hạng đầu của dãy, từ \\(u_{1}\\) đến \\(u_{n}\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Số ghế mỗi hàng lập cấp số cộng với \\(u_{1} = 18 , d = 2 , n = 20\\)."
      },
      {
        "title": "",
        "content": "Hàng cuối: \\(u_{20} = 18 + 19 \\times 2 = 56\\) ghế."
      },
      {
        "title": "",
        "content": "Tổng số ghế: \\(S_{20} = \\frac{20 \\left(18 + 56\\right)}{2} = 10 \\times 74 = 740\\) ghế."
      }
    ]
  },
  "toan-11-2-28-v1": {
    "prompt": "Lúc \\(b a n\\) đầu có \\(500\\) vi khuẩn. Cứ sau \\(3\\) giờ, số lượng tăng gấp đôi; không có vi khuẩn chết. Sau \\(12\\) giờ có bao nhiêu vi khuẩn?",
    "options": [
      "\\(2000\\)",
      "\\(4000\\)",
      "\\(16000\\)",
      "\\(8000\\)"
    ],
    "explanation": "Trong \\(12\\) giờ có \\(\\frac{12}{3} = 4\\) lần tăng gấp đôi. Số vi khuẩn là \\(500 \\times 2^{4} = 8000\\).",
    "hint": "Đếm số lần tăng từ thời điểm \\(b a n\\) đầu.",
    "guide": {
      "formulas": [
        "A=A_0q^m,\\quad m=\\frac tT"
      ],
      "symbols": [
        [
          "A_0,A",
          "Số lượng \\(b a n\\) đầu và số lượng sau thời gian \\(t\\)."
        ],
        [
          "q",
          "Hệ số nhân ở mỗi chu kì, ví dụ tăng gấp đôi thì \\(q = 2\\)."
        ],
        [
          "T,t",
          "Thời gian một chu kì và tổng thời gian, phải cùng đơn vị."
        ],
        [
          "m",
          "Số chu kì hoàn chỉnh; trong bài này \\(\\frac{t}{T}\\) là số nguyên."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Số chu kì tăng gấp đôi là \\(\\frac{12}{3} = 4\\)."
      },
      {
        "title": "",
        "content": "Sau mỗi chu kì nhân \\(2\\) nên số lượng là \\(500 \\times 2^{4}\\)."
      },
      {
        "title": "",
        "content": "\\(2^{4} = 16\\), do đó có \\(500 \\times 16 = 8000\\) vi khuẩn."
      }
    ]
  },
  "toan-11-2-29-v1": {
    "prompt": "Tìm tất cả các cặp số thực \\(\\left(a ; b\\right)\\) sao cho \\(1 ; a ; b\\) là cấp số nhân và \\(1 ; a + 8 ; b\\) là cấp số cộng.",
    "options": [
      "\\(\\left(5 ; 25\\right)\\) và \\(\\left(-3 ; 9\\right)\\)",
      "Chỉ \\(\\left(5 ; 25\\right)\\)",
      "\\(\\left(3 ; 9\\right)\\) và \\(\\left(-5 ; 25\\right)\\)",
      "\\(\\left(5 ; 25\\right)\\) và \\(\\left(3 ; 9\\right)\\)"
    ],
    "explanation": "Từ cấp số nhân có \\(b = a^{2}\\). Từ cấp số cộng có \\(1 + b = 2 \\left(a + 8\\right)\\). Suy ra \\(a^{2} - 2 a - 15 = \\left(a - 5\\right) \\left(a + 3\\right) = 0\\). Hai cặp \\(\\left(5 ; 25\\right) , \\left(-3 ; 9\\right)\\) đều thỏa cả hai điều kiện.",
    "hint": "Biểu diễn \\(b\\) theo \\(a\\) rồi thay vào điều kiện cấp số cộng.",
    "guide": {
      "formulas": [
        "x+z=2y\\quad\\text{(ba số lập CSC)}",
        "y^2=xz\\quad\\text{(ba số khác 0 lập CSN)}"
      ],
      "symbols": [
        [
          "x,y,z",
          "Ba số lấy theo đúng thứ tự của mỗi điều kiện trong đề."
        ]
      ],
      "condition": "Lập hai điều kiện cho hai bộ \\(b a\\) rồi giải chung; kiểm tra lại định nghĩa cấp số nhân."
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Điều kiện cấp số nhân: \\(b = a^{2}\\) vì số đầu bằng \\(1\\). Điều kiện cấp số cộng: \\(1 + b = 2 \\left(a + 8\\right)\\)."
      },
      {
        "title": "",
        "content": "Thế \\(b = a^{2}\\) vào: \\(a^{2} - 2 a - 15 = 0\\)."
      },
      {
        "title": "",
        "content": "Phân tích: \\(\\left(a - 5\\right) \\left(a + 3\\right) = 0\\) nên \\(a = 5\\) hoặc \\(a = -3\\)."
      },
      {
        "title": "",
        "content": "Với \\(a = 5 : b = 25\\), hai bộ là \\(1 ; 5 ; 25\\) và \\(1 ; 13 ; 25\\). Với \\(a = -3 : b = 9\\), hai bộ là \\(1 ; -3 ; 9\\) và \\(1 ; 5 ; 9\\). Cả hai cặp đều thỏa."
      }
    ]
  },
  "toan-11-2-30-v1": {
    "prompt": "Cho \\(u_{1} = 1\\) và \\(u_{n+1} = 2 u_{n} + 3 \\left(n \\ge 1\\right)\\). Tính tổng \\(10\\) số hạng đầu của \\(\\left(u_{n}\\right)\\).",
    "options": [
      "\\(4092\\)",
      "\\(4062\\)",
      "\\(2046\\)",
      "\\(4072\\)"
    ],
    "explanation": "Đặt \\(v_{n} = u_{n} + 3\\) thì \\(v_{1} = 4 , v_{n+1} = 2 v_{n}\\). Vì vậy tổng \\(10\\) số hạng của \\(\\left(v_{n}\\right)\\) là \\(4 \\left(2^{10} - 1\\right) = 4092\\). Tổng cần tìm là \\(4092 - 10 \\times 3 = 4062\\).",
    "hint": "Cộng thêm \\(3\\) vào mỗi số hạng để tạo một cấp số nhân.",
    "guide": {
      "formulas": [
        "u_{n+1}=au_n+b,\\quad a\\ne1",
        "v_n=u_n+\\frac b{a-1}\\ \\Longrightarrow\\ v_{n+1}=av_n"
      ],
      "symbols": [
        [
          "u_n",
          "Số hạng của dãy gốc."
        ],
        [
          "a,b",
          "Hệ số nhân và hằng số cộng trong công thức truy hồi."
        ],
        [
          "v_n",
          "Dãy phụ tạo thành cấp số nhân, sau đó đổi lại tổng của dãy gốc."
        ],
        [
          "n",
          "Chỉ số số hạng, bắt đầu từ \\(1\\)."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "",
        "content": "Đặt \\(v_{n} = u_{n} + 3\\). Khi đó \\(v_{1} = 4\\) và \\(v_{n+1} = 2 u_{n} + 6 = 2 \\left(u_{n} + 3\\right) = 2 v_{n}\\)."
      },
      {
        "title": "",
        "content": "Dãy phụ là cấp số nhân với số đầu \\(4\\), công bội \\(2\\). Tổng \\(10\\) số của dãy phụ bằng \\(\\frac{4 \\left(2^{10} - 1\\right)}{2 - 1}\\)."
      },
      {
        "title": "",
        "content": "\\(2^{10} = 1024\\) nên tổng dãy phụ là \\(4 \\times 1023 = 4092\\)."
      },
      {
        "title": "",
        "content": "Mỗi số hạng dãy phụ lớn hơn dãy gốc \\(3\\). Tổng dãy gốc là \\(4092 - 10 \\times 3 = 4062\\)."
      }
    ]
  },
  "toan-11-3-d1-1": {
    "prompt": "Bảng chiều cao của \\(100\\) học \\(\\sin h\\) có bao nhiêu nhóm?",
    "options": [
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(12\\)"
    ],
    "explanation": "Có \\(6\\) khoảng chiều cao. Hàng tổng không phải là một nhóm.",
    "hint": "Đếm số khoảng, không đếm hàng tổng.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\(\\left[150 ; 152\\right)\\)",
        "\\(\\left[152 ; 154\\right)\\)",
        "\\(\\left[154 ; 156\\right)\\)",
        "\\(\\left[156 ; 158\\right)\\)",
        "\\(\\left[158 ; 160\\right)\\)",
        "\\(\\left[160 ; 162\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          18,
          40,
          26,
          8,
          3
        ]
      ]
    }
  },
  "toan-11-3-d1-2": {
    "prompt": "Giá trị đại diện của nhóm thứ tư trong bảng chiều cao là bao nhiêu?",
    "options": [
      "\\(155\\) cm",
      "\\(157\\) cm",
      "\\(158\\) cm",
      "\\(160\\) cm"
    ],
    "explanation": "Nhóm thứ tư là \\(\\left[156 ; 158\\right)\\). Giá trị đại diện bằng \\(\\frac{156 + 158}{2} = 157\\) cm.",
    "hint": "Lấy trung bình hai đầu mút của nhóm thứ tư.",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2"
      ],
      "symbols": [
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\(\\left[150 ; 152\\right)\\)",
        "\\(\\left[152 ; 154\\right)\\)",
        "\\(\\left[154 ; 156\\right)\\)",
        "\\(\\left[156 ; 158\\right)\\)",
        "\\(\\left[158 ; 160\\right)\\)",
        "\\(\\left[160 ; 162\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          18,
          40,
          26,
          8,
          3
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Đọc hai đầu mút nhóm",
        "content": "\\[a=156,\\quad b=158\\]"
      },
      {
        "title": "Tính trung điểm",
        "content": "\\[c=\\frac{a+b}2=\\frac{156+158}2=\\frac{314}2\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[c=157\\]Giá trị này có cùng đơn vị với đại lượng trong bảng."
      }
    ]
  },
  "toan-11-3-d1-3": {
    "prompt": "Bảng chiều cao của \\(500\\) học \\(\\sin h\\) có bao nhiêu nhóm?",
    "options": [
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(12\\)"
    ],
    "explanation": "Bảng có \\(5\\) khoảng chiều cao nên có \\(5\\) nhóm.",
    "hint": "Mỗi khoảng là một nhóm.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\(\\left[150 ; 154\\right)\\)",
        "\\(\\left[154 ; 158\\right)\\)",
        "\\(\\left[158 ; 162\\right)\\)",
        "\\(\\left[162 ; 166\\right)\\)",
        "\\(\\left[166 ; 170\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          25,
          50,
          200,
          175,
          50
        ]
      ]
    }
  },
  "toan-11-3-d1-4": {
    "prompt": "Giá trị đại diện của nhóm \\(\\left[162 ; 166\\right)\\) là bao nhiêu?",
    "options": [
      "\\(162\\) cm",
      "\\(165\\) cm",
      "\\(167\\) cm",
      "\\(164\\) cm"
    ],
    "explanation": "Giá trị đại diện bằng \\(\\frac{162 + 166}{2} = 164\\) cm.",
    "hint": "Tính trung điểm của khoảng.",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2"
      ],
      "symbols": [
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\(\\left[150 ; 154\\right)\\)",
        "\\(\\left[154 ; 158\\right)\\)",
        "\\(\\left[158 ; 162\\right)\\)",
        "\\(\\left[162 ; 166\\right)\\)",
        "\\(\\left[166 ; 170\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          25,
          50,
          200,
          175,
          50
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Đọc hai đầu mút nhóm",
        "content": "\\[a=162,\\quad b=166\\]"
      },
      {
        "title": "Tính trung điểm",
        "content": "\\[c=\\frac{a+b}2=\\frac{162+166}2=\\frac{328}2\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[c=164\\]Giá trị này có cùng đơn vị với đại lượng trong bảng."
      }
    ]
  },
  "toan-11-3-d1-5": {
    "prompt": "Giá trị đại diện của nhóm cân nặng \\(\\left[60{,}5 ; 65{,}5\\right)\\) là bao nhiêu?",
    "options": [
      "\\(63\\) kg",
      "\\(61\\) kg",
      "\\(64\\) kg",
      "\\(66\\) kg"
    ],
    "explanation": "\\(\\frac{60{,}5 + 65{,}5}{2} = 63\\) kg. Các phương án trong \\(PDF\\) gốc không chứa kết quả đúng; bộ câu hỏi đã bổ sung kết quả \\(63\\) kg.",
    "hint": "Giá trị đại diện là trung điểm, không phải độ dài nhóm.",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2"
      ],
      "symbols": [
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Cân nặng (kg)",
        "\\(\\left[40{,}5 ; 45{,}5\\right)\\)",
        "\\(\\left[45{,}5 ; 50{,}5\\right)\\)",
        "\\(\\left[50{,}5 ; 55{,}5\\right)\\)",
        "\\(\\left[55{,}5 ; 60{,}5\\right)\\)",
        "\\(\\left[60{,}5 ; 65{,}5\\right)\\)",
        "\\(\\left[65{,}5 ; 70{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          10,
          7,
          16,
          4,
          2,
          3
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Đọc hai đầu mút nhóm",
        "content": "\\[a=60.5,\\quad b=65.5\\]"
      },
      {
        "title": "Tính trung điểm",
        "content": "\\[c=\\frac{a+b}2=\\frac{60.5+65.5}2=\\frac{126}2\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[c=63\\]Giá trị này có cùng đơn vị với đại lượng trong bảng."
      }
    ]
  },
  "toan-11-3-d1-6": {
    "prompt": "Giá trị đại diện của nhóm thời gian \\(\\left[20 ; 25\\right)\\) là bao nhiêu?",
    "options": [
      "\\(20{,}5\\) giờ",
      "\\(22{,}5\\) giờ",
      "\\(23{,}5\\) giờ",
      "\\(25{,}5\\) giờ"
    ],
    "explanation": "\\(\\frac{20 + 25}{2} = 22{,}5\\) giờ.",
    "hint": "Lấy trung bình hai đầu mút.",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2"
      ],
      "symbols": [
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (giờ)",
        "\\(\\left[0 ; 5\\right)\\)",
        "\\(\\left[5 ; 10\\right)\\)",
        "\\(\\left[10 ; 15\\right)\\)",
        "\\(\\left[15 ; 20\\right)\\)",
        "\\(\\left[20 ; 25\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          8,
          16,
          4,
          2,
          2
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Đọc hai đầu mút nhóm",
        "content": "\\[a=20,\\quad b=25\\]"
      },
      {
        "title": "Tính trung điểm",
        "content": "\\[c=\\frac{a+b}2=\\frac{20+25}2=\\frac{45}2\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[c=22.5\\]Giá trị này có cùng đơn vị với đại lượng trong bảng."
      }
    ]
  },
  "toan-11-3-d1-7": {
    "prompt": "Có bao nhiêu học \\(\\sin h\\) truy cập Internet từ \\(18{,}5\\) phút đến dưới \\(21{,}5\\) phút mỗi buổi tối?",
    "options": [
      "\\(24\\)",
      "\\(15\\)",
      "\\(2\\)",
      "\\(20\\)"
    ],
    "explanation": "Nhóm \\(\\left[18{,}5 ; 21{,}5\\right)\\) có tần số \\(24\\), tức \\(24\\) học \\(\\sin h\\).",
    "hint": "Đọc tần số tương ứng với nhóm \\(\\left[18{,}5 ; 21{,}5\\right)\\).",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[9{,}5 ; 12{,}5\\right)\\)",
        "\\(\\left[12{,}5 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 21{,}5\\right)\\)",
        "\\(\\left[21{,}5 ; 24{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    }
  },
  "toan-11-3-d1-8": {
    "prompt": "Giá trị đại diện của nhóm thời gian tập thể dục \\(\\left[20 ; 40\\right)\\) là:",
    "options": [
      "\\(10\\) phút",
      "\\(20\\) phút",
      "\\(30\\) phút",
      "\\(40\\) phút"
    ],
    "explanation": "\\(\\frac{20 + 40}{2} = 30\\) phút.",
    "hint": "Tính trung điểm của khoảng.",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2"
      ],
      "symbols": [
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0 ; 20\\right)\\)",
        "\\(\\left[20 ; 40\\right)\\)",
        "\\(\\left[40 ; 60\\right)\\)",
        "\\(\\left[60 ; 80\\right)\\)",
        "\\(\\left[80 ; 100\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Đọc hai đầu mút nhóm",
        "content": "\\[a=20,\\quad b=40\\]"
      },
      {
        "title": "Tính trung điểm",
        "content": "\\[c=\\frac{a+b}2=\\frac{20+40}2=\\frac{60}2\\]"
      },
      {
        "title": "Kết luận",
        "content": "\\[c=30\\]Giá trị này có cùng đơn vị với đại lượng trong bảng."
      }
    ]
  },
  "toan-11-3-d1-9": {
    "prompt": "Bảng cước điện thoại có phải mẫu số liệu ghép nhóm không? Nhóm \\(\\left[100 ; 150\\right)\\) cho biết điều gì?",
    "options": [
      "Có; \\(23 \\sin h\\) viên chi từ \\(100\\) đến dưới \\(150\\) nghìn đồng.",
      "Có; \\(23 \\sin h\\) viên chi đúng \\(125\\) nghìn đồng.",
      "Không; vì số tiền là đại lượng liên tục.",
      "Có; tổng số \\(\\sin h\\) viên là \\(23\\)."
    ],
    "explanation": "Dữ liệu được chia theo các khoảng nên là số liệu ghép nhóm. Tần số \\(23\\) mô tả cả khoảng \\(\\left[100 ; 150\\right)\\), không khẳng định mỗi người chi đúng trung điểm.",
    "hint": "Đọc ý nghĩa của khoảng và tần số.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Cước điện thoại (nghìn đồng)",
        "\\(\\left[0 ; 50\\right)\\)",
        "\\(\\left[50 ; 100\\right)\\)",
        "\\(\\left[100 ; 150\\right)\\)",
        "\\(\\left[150 ; 200\\right)\\)",
        "\\(\\left[200 ; 250\\right)\\)"
      ],
      "rows": [
        [
          "Số \\(\\sin h\\) viên",
          5,
          12,
          23,
          17,
          3
        ]
      ]
    }
  },
  "toan-11-3-d1-10": {
    "prompt": "Bảng nhiệt độ \\(40\\) ngày là mẫu ghép nhóm. Có bao nhiêu ngày nhiệt độ từ \\(22^{\\circ} C\\) đến dưới \\(25^{\\circ} C\\)?",
    "options": [
      "\\(7\\) ngày",
      "\\(15\\) ngày",
      "\\(12\\) ngày",
      "\\(40\\) ngày"
    ],
    "explanation": "Nhóm \\(\\left[22 ; 25\\right)\\) có tần số \\(15\\) ngày.",
    "hint": "Đọc cột \\(\\left[22 ; 25\\right)\\).",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Nhiệt độ \\(\\left(C\\right)\\)",
        "\\(\\left[19 ; 22\\right)\\)",
        "\\(\\left[22 ; 25\\right)\\)",
        "\\(\\left[25 ; 28\\right)\\)",
        "\\(\\left[28 ; 31\\right)\\)"
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
    }
  },
  "toan-11-3-d1-11": {
    "prompt": "Diễn giải nào đúng về bảng tiền điện của \\(50\\) gia đình?",
    "options": [
      "\\(15\\) gia đình trả từ \\(450\\) đến dưới \\(525\\) nghìn đồng.",
      "\\(15\\) gia đình trả đúng \\(487{,}5\\) nghìn đồng.",
      "Có \\(50\\) nhóm tiền điện.",
      "Có \\(6\\) gia đình được khảo sát."
    ],
    "explanation": "Tần số của \\(\\left[450 ; 525\\right)\\) là \\(15\\). Có \\(6\\) nhóm và tổng tần số \\(50\\) gia đình.",
    "hint": "Tần số mô tả số gia đình trong cả khoảng.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Tiền điện (nghìn đồng)",
        "\\(\\left[375 ; 450\\right)\\)",
        "\\(\\left[450 ; 525\\right)\\)",
        "\\(\\left[525 ; 600\\right)\\)",
        "\\(\\left[600 ; 675\\right)\\)",
        "\\(\\left[675 ; 750\\right)\\)",
        "\\(\\left[750 ; 825\\right)\\)"
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
    }
  },
  "toan-11-3-d1-12": {
    "prompt": "Bảng khối lượng khoai tây cho biết điều gì?",
    "options": [
      "\\(12\\) củ có khối lượng từ \\(90 g\\) đến dưới \\(100 g\\).",
      "\\(12\\) củ có khối lượng đúng \\(95 g\\).",
      "Có tất cả \\(5\\) củ khoai.",
      "Có \\(30\\) nhóm khối lượng."
    ],
    "explanation": "Có \\(5\\) nhóm, tổng \\(30\\) củ. Nhóm \\(\\left[90 ; 100\\right)\\) có tần số \\(12\\).",
    "hint": "Đọc tần số của khoảng \\(\\left[90 ; 100\\right)\\).",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Khối lượng \\(\\left(g\\right)\\)",
        "\\(\\left[70 ; 80\\right)\\)",
        "\\(\\left[80 ; 90\\right)\\)",
        "\\(\\left[90 ; 100\\right)\\)",
        "\\(\\left[100 ; 110\\right)\\)",
        "\\(\\left[110 ; 120\\right)\\)"
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
    }
  },
  "toan-11-3-d2-1": {
    "prompt": "Chia thời gian chạy của \\(30\\) vận động viên thành \\(6\\) nhóm: \\(\\left[129 ; 132\\right) , \\left[132 ; 135\\right) , \\left[135 ; 138\\right) , \\left[138 ; 141\\right) , \\left[141 ; 144\\right) , \\left[144 ; 147\\right)\\). Dãy tần số theo thứ tự là:",
    "options": [
      "\\(4 ; 2 ; 3 ; 3 ; 12 ; 6\\)",
      "\\(3 ; 2 ; 3 ; 3 ; 12 ; 7\\)",
      "\\(2 ; 3 ; 3 ; 3 ; 12 ; 7\\)",
      "\\(3 ; 1 ; 4 ; 3 ; 12 ; 7\\)"
    ],
    "explanation": "Theo thứ tự \\(\\left[129 ; 132\\right) , \\left[132 ; 135\\right) , \\left[135 ; 138\\right) , \\left[138 ; 141\\right) , \\left[141 ; 144\\right) , \\left[144 ; 147\\right)\\), các tần số là \\(\\left(3 ; 2 ; 3 ; 3 ; 12 ; 7\\right)\\). Tổng = \\(30 =\\) số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
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
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. "
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([129;132)\\): \\(129\\); \\(130\\); \\(130\\), tần số 3. Nhóm \\([132;135)\\): \\(133\\); \\(134\\), tần số 2. Nhóm \\([135;138)\\): \\(135\\); \\(136\\); \\(136\\), tần số 3. Nhóm \\([138;141)\\): \\(138\\); \\(138\\); \\(138\\), tần số 3. Nhóm \\([141;144)\\): \\(141\\); \\(141\\); \\(141\\); \\(142\\); \\(142\\); \\(142\\); \\(142\\); \\(143\\); \\(143\\); \\(143\\); \\(143\\); \\(143\\), tần số 12. Nhóm \\([144;147)\\): \\(144\\); \\(144\\); \\(145\\); \\(145\\); \\(145\\); \\(145\\); \\(145\\), tần số 7."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=3+2+3+3+12+7=30\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d2-2": {
    "prompt": "Ghép cân nặng \\(35\\) người vào các nhóm \\(\\left[40 ; 45\\right) , \\left[45 ; 50\\right) , \\left[50 ; 55\\right) , \\left[55 ; 60\\right) , \\left[60 ; 65\\right)\\). Dãy tần số là:\nSố liệu: \\(43 ; 51 ; 47 ; 62 ; 48 ; 40 ; 50 ; 62 ; 53 ; 56 ; 40 ; 48 ; 56 ; 53 ; 50 ; 42 ; 55 ; 52 ; 48 ; 46 ; 45 ; 54 ; 52 ; 50 ; 47 ; 44 ; 54 ; 55 ; 60 ; 63 ; 58 ; 55 ; 60 ; 58 ; 53\\).",
    "options": [
      "\\(6 ; 7 ; 11 ; 7 ; 4\\)",
      "\\(4 ; 8 ; 11 ; 7 ; 5\\)",
      "\\(5 ; 7 ; 11 ; 7 ; 5\\)",
      "\\(5 ; 6 ; 12 ; 7 ; 5\\)"
    ],
    "explanation": "Theo thứ tự \\(\\left[40 ; 45\\right) , \\left[45 ; 50\\right) , \\left[50 ; 55\\right) , \\left[55 ; 60\\right) , \\left[60 ; 65\\right)\\), các tần số là \\(\\left(5 ; 7 ; 11 ; 7 ; 5\\right)\\). Tổng = \\(35 =\\) số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. "
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([40;45)\\): \\(43\\); \\(40\\); \\(40\\); \\(42\\); \\(44\\), tần số 5. Nhóm \\([45;50)\\): \\(47\\); \\(48\\); \\(48\\); \\(48\\); \\(46\\); \\(45\\); \\(47\\), tần số 7. Nhóm \\([50;55)\\): \\(51\\); \\(50\\); \\(53\\); \\(53\\); \\(50\\); \\(52\\); \\(54\\); \\(52\\); \\(50\\); \\(54\\); \\(53\\), tần số 11. Nhóm \\([55;60)\\): \\(56\\); \\(56\\); \\(55\\); \\(55\\); \\(58\\); \\(55\\); \\(58\\), tần số 7. Nhóm \\([60;65)\\): \\(62\\); \\(62\\); \\(60\\); \\(63\\); \\(60\\), tần số 5."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=5+7+11+7+5=35\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d2-3": {
    "prompt": "Chia số sản phẩm thành \\(7\\) nhóm dài \\(7 : \\left[5 ; 12\\right) , \\left[12 ; 19\\right) , \\left[19 ; 26\\right) , \\left[26 ; 33\\right) , \\left[33 ; 40\\right) , \\left[40 ; 47\\right) , \\left[47 ; 54\\right]\\) (nhóm cuối đóng). Dãy tần số là:\nSố liệu: \\(18 ; 25 ; 39 ; 12 ; 54 ; 27 ; 46 ; 25 ; 19 ; 8 ; 36 ; 22 ; 20 ; 19 ; 17 ; 44 ; 5 ; 18 ; 23 ; 28 ; 25 ; 34 ; 46 ; 27 ; 16\\).",
    "options": [
      "\\(3 ; 5 ; 8 ; 3 ; 3 ; 3 ; 0\\)",
      "\\(1 ; 6 ; 8 ; 3 ; 3 ; 3 ; 1\\)",
      "\\(2 ; 4 ; 9 ; 3 ; 3 ; 3 ; 1\\)",
      "\\(2 ; 5 ; 8 ; 3 ; 3 ; 3 ; 1\\)"
    ],
    "explanation": "Theo thứ tự \\(\\left[5 ; 12\\right) , \\left[12 ; 19\\right) , \\left[19 ; 26\\right) , \\left[26 ; 33\\right) , \\left[33 ; 40\\right) , \\left[40 ; 47\\right) , \\left[47 ; 54\\right]\\), các tần số là \\(\\left(2 ; 5 ; 8 ; 3 ; 3 ; 3 ; 1\\right)\\). Tổng = \\(25 =\\) số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. Riêng nhóm cuối đóng ở cả hai đầu theo đề."
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([5;12)\\): \\(8\\); \\(5\\), tần số 2. Nhóm \\([12;19)\\): \\(18\\); \\(12\\); \\(17\\); \\(18\\); \\(16\\), tần số 5. Nhóm \\([19;26)\\): \\(25\\); \\(25\\); \\(19\\); \\(22\\); \\(20\\); \\(19\\); \\(23\\); \\(25\\), tần số 8. Nhóm \\([26;33)\\): \\(27\\); \\(28\\); \\(27\\), tần số 3. Nhóm \\([33;40)\\): \\(39\\); \\(36\\); \\(34\\), tần số 3. Nhóm \\([40;47)\\): \\(46\\); \\(44\\); \\(46\\), tần số 3. Nhóm \\([47;54]\\): \\(54\\), tần số 1."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=2+5+8+3+3+3+1=25\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d2-4": {
    "prompt": "Chia giờ ra sân thành \\(7\\) nhóm dài \\(25 : \\left[490 ; 515\\right) , \\left[515 ; 540\\right) , \\left[540 ; 565\\right) , \\left[565 ; 590\\right) , \\left[590 ; 615\\right) , \\left[615 ; 640\\right) , \\left[640 ; 665\\right)\\). Dãy tần số là:\nSố liệu: \\(653 ; 632 ; 609 ; 572 ; 565 ; 535 ; 516 ; 514 ; 508 ; 505 ; 504 ; 504 ; 503 ; 499 ; 496 ; 492\\).",
    "options": [
      "\\(9 ; 2 ; 0 ; 2 ; 1 ; 1 ; 1\\)",
      "\\(10 ; 2 ; 0 ; 2 ; 1 ; 1 ; 0\\)",
      "\\(8 ; 3 ; 0 ; 2 ; 1 ; 1 ; 1\\)",
      "\\(9 ; 1 ; 1 ; 2 ; 1 ; 1 ; 1\\)"
    ],
    "explanation": "Theo thứ tự \\(\\left[490 ; 515\\right) , \\left[515 ; 540\\right) , \\left[540 ; 565\\right) , \\left[565 ; 590\\right) , \\left[590 ; 615\\right) , \\left[615 ; 640\\right) , \\left[640 ; 665\\right)\\), các tần số là \\(\\left(9 ; 2 ; 0 ; 2 ; 1 ; 1 ; 1\\right)\\). Tổng = \\(16 =\\) số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. "
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([490;515)\\): \\(514\\); \\(508\\); \\(505\\); \\(504\\); \\(504\\); \\(503\\); \\(499\\); \\(496\\); \\(492\\), tần số 9. Nhóm \\([515;540)\\): \\(535\\); \\(516\\), tần số 2. Nhóm \\([540;565)\\): không có quan sát, tần số 0. Nhóm \\([565;590)\\): \\(572\\); \\(565\\), tần số 2. Nhóm \\([590;615)\\): \\(609\\), tần số 1. Nhóm \\([615;640)\\): \\(632\\), tần số 1. Nhóm \\([640;665)\\): \\(653\\), tần số 1."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=9+2+0+2+1+1+1=16\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d2-5": {
    "prompt": "Chia số liệu điện năng thành \\(8\\) nhóm dài \\(5 : \\left[30 ; 35\\right) , \\left[35 ; 40\\right) , \\left[40 ; 45\\right) , \\left[45 ; 50\\right) , \\left[50 ; 55\\right) , \\left[55 ; 60\\right) , \\left[60 ; 65\\right) , \\left[65 ; 70\\right]\\) (nhóm cuối đóng). Dãy tần số là:\nSố liệu: \\(50 ; 47 ; 30 ; 65 ; 63 ; 70 ; 38 ; 34 ; 48 ; 53 ; 33 ; 39 ; 32 ; 40 ; 50 ; 55 ; 50 ; 61 ; 37 ; 37 ; 43 ; 35 ; 65 ; 60 ; 31 ; 33 ; 41 ; 45 ; 55 ; 59\\).",
    "options": [
      "\\(7 ; 5 ; 3 ; 3 ; 4 ; 3 ; 3 ; 2\\)",
      "\\(6 ; 5 ; 3 ; 3 ; 4 ; 3 ; 3 ; 3\\)",
      "\\(5 ; 6 ; 3 ; 3 ; 4 ; 3 ; 3 ; 3\\)",
      "\\(6 ; 4 ; 4 ; 3 ; 4 ; 3 ; 3 ; 3\\)"
    ],
    "explanation": "Theo thứ tự \\(\\left[30 ; 35\\right) , \\left[35 ; 40\\right) , \\left[40 ; 45\\right) , \\left[45 ; 50\\right) , \\left[50 ; 55\\right) , \\left[55 ; 60\\right) , \\left[60 ; 65\\right) , \\left[65 ; 70\\right]\\), các tần số là \\(\\left(6 ; 5 ; 3 ; 3 ; 4 ; 3 ; 3 ; 3\\right)\\). Tổng = \\(30 =\\) số quan sát. Giá trị ở đầu mút trái được tính vào nhóm; đầu mút phải chỉ tính nếu đã quy định đóng.",
    "hint": "Đếm mỗi quan sát vào đúng một khoảng và kiểm tra tổng tần số.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. Riêng nhóm cuối đóng ở cả hai đầu theo đề."
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([30;35)\\): \\(30\\); \\(34\\); \\(33\\); \\(32\\); \\(31\\); \\(33\\), tần số 6. Nhóm \\([35;40)\\): \\(38\\); \\(39\\); \\(37\\); \\(37\\); \\(35\\), tần số 5. Nhóm \\([40;45)\\): \\(40\\); \\(43\\); \\(41\\), tần số 3. Nhóm \\([45;50)\\): \\(47\\); \\(48\\); \\(45\\), tần số 3. Nhóm \\([50;55)\\): \\(50\\); \\(53\\); \\(50\\); \\(50\\), tần số 4. Nhóm \\([55;60)\\): \\(55\\); \\(55\\); \\(59\\), tần số 3. Nhóm \\([60;65)\\): \\(63\\); \\(61\\); \\(60\\), tần số 3. Nhóm \\([65;70]\\): \\(65\\); \\(70\\); \\(65\\), tần số 3."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=6+5+3+3+4+3+3+3=30\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d3-1": {
    "prompt": "Số trung bình ghép nhóm của doanh thu bán hàng trong \\(20\\) ngày thuộc khoảng nào?",
    "options": [
      "\\(\\left[7 ; 9\\right)\\)",
      "\\(\\left[9 ; 11\\right)\\)",
      "\\(\\left[11 ; 13\\right)\\)",
      "\\(\\left[13 ; 15\\right)\\)"
    ],
    "explanation": "Các trung điểm là \\(6 ; 8 ; 10 ; 12 ; 14\\). Tổng có trọng số = \\(188 , N = 20\\) nên \\(\\overline{x} = 9{,}4\\) triệu đồng, thuộc \\(\\left[9 ; 11\\right)\\).",
    "hint": "Tính trung bình có trọng số từ các trung điểm.",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "\\(\\left[5 ; 7\\right)\\)",
        "\\(\\left[7 ; 9\\right)\\)",
        "\\(\\left[9 ; 11\\right)\\)",
        "\\(\\left[11 ; 13\\right)\\)",
        "\\(\\left[13 ; 15\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{5+7}2=6\\]\\[c_{2}=\\frac{7+9}2=8\\]\\[c_{3}=\\frac{9+11}2=10\\]\\[c_{4}=\\frac{11+13}2=12\\]\\[c_{5}=\\frac{13+15}2=14\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=2+7+7+3+1=20\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=2\\cdot6+7\\cdot8+7\\cdot10+3\\cdot12+1\\cdot14=188\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{188}{20}\\approx9.40\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d3-2": {
    "prompt": "Ước lượng cân nặng trung bình của học \\(\\sin h\\) lớp \\(11 D\\). (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(49{,}81\\) kg",
      "\\(52{,}81\\) kg",
      "\\(51{,}81\\) kg",
      "\\(54{,}81\\) kg"
    ],
    "explanation": "Giá trị đại diện các nhóm: \\(43 ; 48 ; 53 ; 58 ; 63 ; 68\\). Tổng tần số \\(N = 42\\). Tổng \\(n_{i} c_{i} = 2.176\\). Số trung bình ghép nhóm \\(\\overline{x} = \\frac{2.176}{42} \\approx 51{,}81\\) kg. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho \\(42\\).",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Cân nặng (kg)",
        "\\(\\left[40{,}5 ; 45{,}5\\right)\\)",
        "\\(\\left[45{,}5 ; 50{,}5\\right)\\)",
        "\\(\\left[50{,}5 ; 55{,}5\\right)\\)",
        "\\(\\left[55{,}5 ; 60{,}5\\right)\\)",
        "\\(\\left[60{,}5 ; 65{,}5\\right)\\)",
        "\\(\\left[65{,}5 ; 70{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          10,
          7,
          16,
          4,
          2,
          3
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{40.5+45.5}2=43\\]\\[c_{2}=\\frac{45.5+50.5}2=48\\]\\[c_{3}=\\frac{50.5+55.5}2=53\\]\\[c_{4}=\\frac{55.5+60.5}2=58\\]\\[c_{5}=\\frac{60.5+65.5}2=63\\]\\[c_{6}=\\frac{65.5+70.5}2=68\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=10+7+16+4+2+3=42\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=10\\cdot43+7\\cdot48+16\\cdot53+4\\cdot58+2\\cdot63+3\\cdot68=2176\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{2176}{42}\\approx51.81\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d3-3": {
    "prompt": "Ước lượng thời gian xem tivi trung bình trong tuần. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(6{,}44\\) giờ",
      "\\(9{,}44\\) giờ",
      "\\(11{,}44\\) giờ",
      "\\(8{,}44\\) giờ"
    ],
    "explanation": "Giá trị đại diện các nhóm: \\(2{,}5 ; 7{,}5 ; 12{,}5 ; 17{,}5 ; 22{,}5\\). Tổng tần số \\(N = 32\\). Tổng \\(n_{i} c_{i} = 270\\). Số trung bình ghép nhóm \\(\\overline{x} = \\frac{270}{32} \\approx 8{,}44\\) giờ. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho \\(32\\).",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (giờ)",
        "\\(\\left[0 ; 5\\right)\\)",
        "\\(\\left[5 ; 10\\right)\\)",
        "\\(\\left[10 ; 15\\right)\\)",
        "\\(\\left[15 ; 20\\right)\\)",
        "\\(\\left[20 ; 25\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          8,
          16,
          4,
          2,
          2
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{0+5}2=2.5\\]\\[c_{2}=\\frac{5+10}2=7.5\\]\\[c_{3}=\\frac{10+15}2=12.5\\]\\[c_{4}=\\frac{15+20}2=17.5\\]\\[c_{5}=\\frac{20+25}2=22.5\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=8+16+4+2+2=32\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=8\\cdot2.5+16\\cdot7.5+4\\cdot12.5+2\\cdot17.5+2\\cdot22.5=270\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{270}{32}\\approx8.44\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d3-4": {
    "prompt": "Ước lượng thời gian sử dụng điện thoại từ lúc đầy pin đến khi hết pin. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(12{,}26\\) giờ",
      "\\(10{,}26\\) giờ",
      "\\(13{,}26\\) giờ",
      "\\(15{,}26\\) giờ"
    ],
    "explanation": "Giá trị đại diện các nhóm: \\(8 ; 10 ; 12 ; 14 ; 16\\). Tổng tần số \\(N = 23\\). Tổng \\(n_{i} c_{i} = 282\\). Số trung bình ghép nhóm \\(\\overline{x} = \\frac{282}{23} \\approx 12{,}26\\) giờ. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho \\(23\\).",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (giờ)",
        "\\(\\left[7 ; 9\\right)\\)",
        "\\(\\left[9 ; 11\\right)\\)",
        "\\(\\left[11 ; 13\\right)\\)",
        "\\(\\left[13 ; 15\\right)\\)",
        "\\(\\left[15 ; 17\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{7+9}2=8\\]\\[c_{2}=\\frac{9+11}2=10\\]\\[c_{3}=\\frac{11+13}2=12\\]\\[c_{4}=\\frac{13+15}2=14\\]\\[c_{5}=\\frac{15+17}2=16\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=2+5+7+6+3=23\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=2\\cdot8+5\\cdot10+7\\cdot12+6\\cdot14+3\\cdot16=282\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{282}{23}\\approx12.26\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d4-1": {
    "prompt": "Nhóm chứa trung vị của thời gian tập thể dục là:",
    "options": [
      "\\(\\left[40 ; 60\\right)\\)",
      "\\(\\left[20 ; 40\\right)\\)",
      "\\(\\left[60 ; 80\\right)\\)",
      "\\(\\left[80 ; 100\\right)\\)"
    ],
    "explanation": "\\(N = 42 , \\frac{N}{2} = 21\\). Tích lũy: \\(5 ; 14 ; 26 ; 36 ; 42\\). Mốc \\(21\\) thuộc nhóm \\(\\left[40 ; 60\\right)\\).",
    "hint": "Tính \\(\\frac{N}{2}\\) rồi tìm tần số tích lũy đầu tiên đạt mốc đó.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0 ; 20\\right)\\)",
        "\\(\\left[20 ; 40\\right)\\)",
        "\\(\\left[40 ; 60\\right)\\)",
        "\\(\\left[60 ; 80\\right)\\)",
        "\\(\\left[80 ; 100\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=5+9+12+10+6=42,\\quad\\frac{2N}4=21\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(5\\); \\(14\\); \\(26\\); \\(36\\); \\(42\\). \\[14<21\\le26\\]Nhóm cần dùng là \\([40;60)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=40,\\quad h=60-40=20,\\quad F=14,\\quad f=12\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=40+\\frac{21-14}{12}\\cdot20\\approx51.6667\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d4-2": {
    "prompt": "Trung vị ghép nhóm của doanh thu bán hàng thuộc khoảng nào?",
    "options": [
      "\\(\\left[7 ; 9\\right)\\)",
      "\\(\\left[9 ; 11\\right)\\)",
      "\\(\\left[11 ; 13\\right)\\)",
      "\\(\\left[13 ; 15\\right)\\)"
    ],
    "explanation": "\\(N = 20 , \\frac{N}{2} = 10\\). Tích lũy: \\(2 ; 9 ; 16 ; 19 ; 20\\). Mₑ = \\(9 + \\frac{10 - 9}{7} \\times 2 \\approx 9{,}29\\) triệu đồng, thuộc \\(\\left[9 ; 11\\right)\\).",
    "hint": "Dùng tần số tích lũy trước nhóm, không dùng tần số lớn nhất.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "\\(\\left[5 ; 7\\right)\\)",
        "\\(\\left[7 ; 9\\right)\\)",
        "\\(\\left[9 ; 11\\right)\\)",
        "\\(\\left[11 ; 13\\right)\\)",
        "\\(\\left[13 ; 15\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=2+7+7+3+1=20,\\quad\\frac{2N}4=10\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(2\\); \\(9\\); \\(16\\); \\(19\\); \\(20\\). \\[9<10\\le16\\]Nhóm cần dùng là \\([9;11)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=9,\\quad h=11-9=2,\\quad F=9,\\quad f=7\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=9+\\frac{10-9}{7}\\cdot2\\approx9.2857\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d4-3": {
    "prompt": "Ước lượng trung vị thời gian truy cập Internet mỗi tối. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(16{,}1\\) phút",
      "\\(19{,}1\\) phút",
      "\\(21{,}1\\) phút",
      "\\(18{,}1\\) phút"
    ],
    "explanation": "\\(N = 56\\); mốc \\(\\frac{2 N}{4} = 28\\). Nhóm nội suy \\(\\left[15{,}5 ; 18{,}5\\right)\\) có \\(L = 15{,}5 , h = 3 , f = 15 , F = 15\\). Mₑ = \\(15{,}5 + \\frac{28 - 15}{15} \\times 3 \\approx 18{,}1\\) phút.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(28\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[9{,}5 ; 12{,}5\\right)\\)",
        "\\(\\left[12{,}5 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 21{,}5\\right)\\)",
        "\\(\\left[21{,}5 ; 24{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=3+12+15+24+2=56,\\quad\\frac{2N}4=28\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(3\\); \\(15\\); \\(30\\); \\(54\\); \\(56\\). \\[15<28\\le30\\]Nhóm cần dùng là \\([15.5;18.5)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=15.5,\\quad h=18.5-15.5=3,\\quad F=15,\\quad f=15\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=15.5+\\frac{28-15}{15}\\cdot3\\approx18.1000\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d4-4": {
    "prompt": "Ước lượng trung vị tốc độ bóng trong \\(200\\) lần giao bóng. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(167{,}21\\) km\\(/ h\\)",
      "\\(165{,}21\\) km\\(/ h\\)",
      "\\(168{,}21\\) km\\(/ h\\)",
      "\\(170{,}21\\) km\\(/ h\\)"
    ],
    "explanation": "\\(N = 200\\); mốc \\(\\frac{2 N}{4} = 100\\). Nhóm nội suy \\(\\left[165 ; 170\\right)\\) có \\(L = 165 , h = 5 , f = 43 , F = 81\\). Mₑ = \\(165 + \\frac{100 - 81}{43} \\times 5 \\approx 167{,}21\\) km\\(/ h\\).",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(100\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Tốc độ (km\\(/ h )\\)",
        "\\(\\left[150 ; 155\\right)\\)",
        "\\(\\left[155 ; 160\\right)\\)",
        "\\(\\left[160 ; 165\\right)\\)",
        "\\(\\left[165 ; 170\\right)\\)",
        "\\(\\left[170 ; 175\\right)\\)",
        "\\(\\left[175 ; 180\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=18+28+35+43+41+35=200,\\quad\\frac{2N}4=100\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(18\\); \\(46\\); \\(81\\); \\(124\\); \\(165\\); \\(200\\). \\[81<100\\le124\\]Nhóm cần dùng là \\([165;170)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=165,\\quad h=170-165=5,\\quad F=81,\\quad f=43\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=165+\\frac{100-81}{43}\\cdot5\\approx167.2093\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d5-1": {
    "prompt": "Nhóm chứa tứ phân vị thứ nhất \\(Q_{1}\\) của thời gian tập thể dục là:",
    "options": [
      "\\(\\left[40 ; 60\\right)\\)",
      "\\(\\left[20 ; 40\\right)\\)",
      "\\(\\left[60 ; 80\\right)\\)",
      "\\(\\left[80 ; 100\\right)\\)"
    ],
    "explanation": "\\(\\frac{N}{4} = \\frac{42}{4} = 10{,}5\\). Tích lũy trước nhóm \\(\\left[20 ; 40\\right)\\) là \\(5\\), sau nhóm là \\(14\\), nên \\(Q_{1}\\) thuộc nhóm này.",
    "hint": "Xác định mốc \\(\\frac{N}{4}\\).",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0 ; 20\\right)\\)",
        "\\(\\left[20 ; 40\\right)\\)",
        "\\(\\left[40 ; 60\\right)\\)",
        "\\(\\left[60 ; 80\\right)\\)",
        "\\(\\left[80 ; 100\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=5+9+12+10+6=42,\\quad\\frac{1N}4=10.5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(5\\); \\(14\\); \\(26\\); \\(36\\); \\(42\\). \\[5<10.5\\le14\\]Nhóm cần dùng là \\([20;40)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=20,\\quad h=40-20=20,\\quad F=5,\\quad f=9\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_1=20+\\frac{10.5-5}{9}\\cdot20\\approx32.2222\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d5-2": {
    "prompt": "Nhóm chứa tứ phân vị thứ \\(b a Q_{3}\\) của thời gian tập thể dục là:",
    "options": [
      "\\(\\left[40 ; 60\\right)\\)",
      "\\(\\left[20 ; 40\\right)\\)",
      "\\(\\left[60 ; 80\\right)\\)",
      "\\(\\left[80 ; 100\\right)\\)"
    ],
    "explanation": "\\(\\frac{3 N}{4} = 31{,}5\\). Tích lũy: \\(5 ; 14 ; 26 ; 36 ; 42\\), nên nhóm \\(\\left[60 ; 80\\right)\\) chứa \\(Q_{3}\\).",
    "hint": "Xác định mốc \\(\\frac{3 N}{4}\\).",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0 ; 20\\right)\\)",
        "\\(\\left[20 ; 40\\right)\\)",
        "\\(\\left[40 ; 60\\right)\\)",
        "\\(\\left[60 ; 80\\right)\\)",
        "\\(\\left[80 ; 100\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=5+9+12+10+6=42,\\quad\\frac{3N}4=31.5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(5\\); \\(14\\); \\(26\\); \\(36\\); \\(42\\). \\[26<31.5\\le36\\]Nhóm cần dùng là \\([60;80)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=60,\\quad h=80-60=20,\\quad F=26,\\quad f=10\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_3=60+\\frac{31.5-26}{10}\\cdot20\\approx71.0000\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d5-3": {
    "prompt": "Tứ phân vị thứ nhất của doanh thu gần nhất với giá trị nào (triệu đồng)?",
    "options": [
      "\\(7\\)",
      "\\(7{,}6\\)",
      "\\(8\\)",
      "\\(8{,}6\\)"
    ],
    "explanation": "\\(\\frac{N}{4} = 5\\), nhóm \\(\\left[7 ; 9\\right)\\) có \\(F = 2 , f = 7\\). \\(Q_{1} = 7 + \\frac{5 - 2}{7} \\times 2 \\approx 7{,}857\\). Trong bốn lựa chọn, \\(8\\) gần nhất.",
    "hint": "Nội suy \\(Q_{1}\\) rồi so khoảng cách với từng lựa chọn.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "\\(\\left[5 ; 7\\right)\\)",
        "\\(\\left[7 ; 9\\right)\\)",
        "\\(\\left[9 ; 11\\right)\\)",
        "\\(\\left[11 ; 13\\right)\\)",
        "\\(\\left[13 ; 15\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=2+7+7+3+1=20,\\quad\\frac{1N}4=5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(2\\); \\(9\\); \\(16\\); \\(19\\); \\(20\\). \\[2<5\\le9\\]Nhóm cần dùng là \\([7;9)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=7,\\quad h=9-7=2,\\quad F=2,\\quad f=7\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_1=7+\\frac{5-2}{7}\\cdot2\\approx7.8571\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d5-4": {
    "prompt": "Tứ phân vị thứ \\(b a\\) của doanh thu gần nhất với giá trị nào (triệu đồng)?",
    "options": [
      "\\(10\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(13\\)"
    ],
    "explanation": "\\(\\frac{3 N}{4} = 15\\), nhóm \\(\\left[9 ; 11\\right)\\) có \\(F = 9 , f = 7\\). \\(Q_{3} = 9 + \\frac{15 - 9}{7} \\times 2 \\approx 10{,}714\\), gần \\(11\\) nhất.",
    "hint": "Tìm nhóm chứa mốc \\(15\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "\\(\\left[5 ; 7\\right)\\)",
        "\\(\\left[7 ; 9\\right)\\)",
        "\\(\\left[9 ; 11\\right)\\)",
        "\\(\\left[11 ; 13\\right)\\)",
        "\\(\\left[13 ; 15\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=2+7+7+3+1=20,\\quad\\frac{3N}4=15\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(2\\); \\(9\\); \\(16\\); \\(19\\); \\(20\\). \\[9<15\\le16\\]Nhóm cần dùng là \\([9;11)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=9,\\quad h=11-9=2,\\quad F=9,\\quad f=7\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_3=9+\\frac{15-9}{7}\\cdot2\\approx10.7143\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d5-5": {
    "prompt": "Ước lượng \\(Q_{1}\\) của thời gian truy cập Internet. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(13{,}25\\) phút",
      "\\(15{,}25\\) phút",
      "\\(16{,}25\\) phút",
      "\\(18{,}25\\) phút"
    ],
    "explanation": "\\(N = 56\\); mốc \\(\\frac{1 N}{4} = 14\\). Nhóm nội suy \\(\\left[12{,}5 ; 15{,}5\\right)\\) có \\(L = 12{,}5 , h = 3 , f = 12 , F = 3\\). \\(Q_{1} = 12{,}5 + \\frac{14 - 3}{12} \\times 3 \\approx 15{,}25\\) phút.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(14\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[9{,}5 ; 12{,}5\\right)\\)",
        "\\(\\left[12{,}5 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 21{,}5\\right)\\)",
        "\\(\\left[21{,}5 ; 24{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=3+12+15+24+2=56,\\quad\\frac{1N}4=14\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(3\\); \\(15\\); \\(30\\); \\(54\\); \\(56\\). \\[3<14\\le15\\]Nhóm cần dùng là \\([12.5;15.5)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=12.5,\\quad h=15.5-12.5=3,\\quad F=3,\\quad f=12\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_1=12.5+\\frac{14-3}{12}\\cdot3\\approx15.2500\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d5-6": {
    "prompt": "Ước lượng \\(Q_{3}\\) của thời gian truy cập Internet. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(18\\) phút",
      "\\(21\\) phút",
      "\\(20\\) phút",
      "\\(23\\) phút"
    ],
    "explanation": "\\(N = 56\\); mốc \\(\\frac{3 N}{4} = 42\\). Nhóm nội suy \\(\\left[18{,}5 ; 21{,}5\\right)\\) có \\(L = 18{,}5 , h = 3 , f = 24 , F = 30\\). \\(Q_{3} = 18{,}5 + \\frac{42 - 30}{24} \\times 3 \\approx 20\\) phút.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(42\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[9{,}5 ; 12{,}5\\right)\\)",
        "\\(\\left[12{,}5 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 21{,}5\\right)\\)",
        "\\(\\left[21{,}5 ; 24{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          3,
          12,
          15,
          24,
          2
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=3+12+15+24+2=56,\\quad\\frac{3N}4=42\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(3\\); \\(15\\); \\(30\\); \\(54\\); \\(56\\). \\[30<42\\le54\\]Nhóm cần dùng là \\([18.5;21.5)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=18.5,\\quad h=21.5-18.5=3,\\quad F=30,\\quad f=24\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_3=18.5+\\frac{42-30}{24}\\cdot3\\approx20.0000\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d6-1": {
    "prompt": "Nhóm chứa mốt của thời gian tập thể dục là:",
    "options": [
      "\\(\\left[40 ; 60\\right)\\)",
      "\\(\\left[20 ; 40\\right)\\)",
      "\\(\\left[60 ; 80\\right)\\)",
      "\\(\\left[80 ; 100\\right)\\)"
    ],
    "explanation": "Các nhóm cùng độ dài \\(20\\). Tần số lớn nhất là \\(12\\) ở nhóm \\(\\left[40 ; 60\\right)\\).",
    "hint": "So sánh tần số các nhóm.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0 ; 20\\right)\\)",
        "\\(\\left[20 ; 40\\right)\\)",
        "\\(\\left[40 ; 60\\right)\\)",
        "\\(\\left[60 ; 80\\right)\\)",
        "\\(\\left[80 ; 100\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(12\\), chọn nhóm \\([40;60)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=12-9=3,\\quad d_2=12-10=2\\]"
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=40+\\frac{3}{3+2}\\cdot20\\approx52.0000\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d6-2": {
    "prompt": "Mốt ghép nhóm của thời gian tập thể dục bằng:",
    "options": [
      "\\(42\\) phút",
      "\\(52\\) phút",
      "\\(53\\) phút",
      "\\(54\\) phút"
    ],
    "explanation": "Nhóm mốt \\(\\left[40 ; 60\\right) : d_{1} = 12 - 9 = 3 , d_{2} = 12 - 10 = 2\\). \\(M_{o} = 40 + \\frac{3}{3 + 2} \\times 20 = 52\\) phút.",
    "hint": "Dùng hiệu tần số giữa nhóm mốt và hai nhóm lân cận.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0 ; 20\\right)\\)",
        "\\(\\left[20 ; 40\\right)\\)",
        "\\(\\left[40 ; 60\\right)\\)",
        "\\(\\left[60 ; 80\\right)\\)",
        "\\(\\left[80 ; 100\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          5,
          9,
          12,
          10,
          6
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(12\\), chọn nhóm \\([40;60)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=12-9=3,\\quad d_2=12-10=2\\]"
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=40+\\frac{3}{3+2}\\cdot20\\approx52.0000\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d6-3": {
    "prompt": "Mốt ghép nhóm của doanh thu thuộc khoảng nào?",
    "options": [
      "\\(\\left[7 ; 9\\right)\\)",
      "\\(\\left[9 ; 11\\right)\\)",
      "\\(\\left[11 ; 13\\right)\\)",
      "\\(\\left[13 ; 15\\right)\\)"
    ],
    "explanation": "Hai nhóm kề \\(\\left[7 ; 9\\right)\\) và \\(\\left[9 ; 11\\right)\\) cùng có tần số lớn nhất \\(7\\). Nội suy ở cả hai phía đều cho \\(M_{o} = 9\\). Theo quy ước \\(\\left[a ; b\\right) , 9\\) thuộc \\(\\left[9 ; 11\\right)\\).",
    "hint": "Xét hai nhóm đồng tần số lớn nhất và quy ước đầu mút.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Doanh thu (triệu đồng)",
        "\\(\\left[5 ; 7\\right)\\)",
        "\\(\\left[7 ; 9\\right)\\)",
        "\\(\\left[9 ; 11\\right)\\)",
        "\\(\\left[11 ; 13\\right)\\)",
        "\\(\\left[13 ; 15\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(7\\), chọn nhóm \\([7;9)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=7-2=5,\\quad d_2=7-7=0\\]"
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=7+\\frac{5}{5+0}\\cdot2\\approx9.0000\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d6-4": {
    "prompt": "Ước lượng mốt chiều cao của \\(50\\) học \\(\\sin h\\) lớp \\(11 A\\). (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(151{,}18\\) cm",
      "\\(154{,}18\\) cm",
      "\\(153{,}18\\) cm",
      "\\(156{,}18\\) cm"
    ],
    "explanation": "Các nhóm cùng độ dài \\(5\\). Chọn nhóm có tần số lớn nhất \\(\\left[150 ; 155\\right) ; d_{1} = 7 , d_{2} = 4\\). \\(M_{o} = 150 + \\frac{7}{7 + 4} \\times 5 \\approx 153{,}18\\) cm.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\(\\left[145 ; 150\\right)\\)",
        "\\(\\left[150 ; 155\\right)\\)",
        "\\(\\left[155 ; 160\\right)\\)",
        "\\(\\left[160 ; 165\\right)\\)",
        "\\(\\left[165 ; 170\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          7,
          14,
          10,
          10,
          9
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(14\\), chọn nhóm \\([150;155)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=14-7=7,\\quad d_2=14-10=4\\]"
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=150+\\frac{7}{7+4}\\cdot5\\approx153.1818\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d6-5": {
    "prompt": "Từ mốt chiều cao khoảng \\(153{,}18\\) cm, kết luận nào phù hợp?",
    "options": [
      "Chiều cao tập trung quanh vùng \\(153{,}18\\) cm.",
      "Có đúng \\(14\\) học \\(\\sin h\\) cao \\(153{,}18\\) cm.",
      "Mọi học \\(\\sin h\\) đều cao \\(153{,}18\\) cm.",
      "\\(153{,}18\\) cm là chiều cao lớn nhất."
    ],
    "explanation": "Mốt ghép nhóm là giá trị ước lượng vùng tập trung, không cho biết chính xác số người có chiều cao bằng giá trị đó.",
    "hint": "Phân biệt giá trị ước lượng với một quan sát chính xác.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Chiều cao (cm)",
        "\\(\\left[145 ; 150\\right)\\)",
        "\\(\\left[150 ; 155\\right)\\)",
        "\\(\\left[155 ; 160\\right)\\)",
        "\\(\\left[160 ; 165\\right)\\)",
        "\\(\\left[165 ; 170\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          7,
          14,
          10,
          10,
          9
        ]
      ]
    }
  },
  "toan-11-3-d6-6": {
    "prompt": "Ước lượng mốt thời gian hoàn thành một câu hỏi thi. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(17{,}17\\) phút",
      "\\(15{,}17\\) phút",
      "\\(18{,}17\\) phút",
      "\\(20{,}17\\) phút"
    ],
    "explanation": "Các nhóm cùng độ dài \\(10\\). Chọn nhóm có tần số lớn nhất \\(\\left[10{,}5 ; 20{,}5\\right) ; d_{1} = 8 , d_{2} = 4\\). \\(M_{o} = 10{,}5 + \\frac{8}{8 + 4} \\times 10 \\approx 17{,}17\\) phút.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Thời gian (phút)",
        "\\(\\left[0{,}5 ; 10{,}5\\right)\\)",
        "\\(\\left[10{,}5 ; 20{,}5\\right)\\)",
        "\\(\\left[20{,}5 ; 30{,}5\\right)\\)",
        "\\(\\left[30{,}5 ; 40{,}5\\right)\\)",
        "\\(\\left[40{,}5 ; 50{,}5\\right)\\)"
      ],
      "rows": [
        [
          "Số học \\(\\sin h\\)",
          2,
          10,
          6,
          4,
          3
        ]
      ]
    },
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(10\\), chọn nhóm \\([10.5;20.5)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=10-2=8,\\quad d_2=10-6=4\\]"
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=10.5+\\frac{8}{8+4}\\cdot10\\approx17.1667\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d7-1": {
    "prompt": "Ước lượng số trung bình điểm Toán của học \\(\\sin h\\). (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(6{,}12\\) điểm",
      "\\(8{,}12\\) điểm",
      "\\(9{,}12\\) điểm",
      "\\(11{,}12\\) điểm"
    ],
    "explanation": "Giá trị đại diện các nhóm: \\(6{,}75 ; 7{,}25 ; 7{,}75 ; 8{,}25 ; 8{,}75 ; 9{,}25 ; 9{,}75\\). Tổng tần số \\(N = 82\\). Tổng \\(n_{i} c_{i} = 666\\). Số trung bình ghép nhóm \\(\\overline{x} = \\frac{666}{82} \\approx 8{,}12\\) điểm. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho \\(82\\).",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Điểm Toán",
        "\\(\\left[6{,}5 ; 7\\right)\\)",
        "\\(\\left[7 ; 7{,}5\\right)\\)",
        "\\(\\left[7{,}5 ; 8\\right)\\)",
        "\\(\\left[8 ; 8{,}5\\right)\\)",
        "\\(\\left[8{,}5 ; 9\\right)\\)",
        "\\(\\left[9 ; 9{,}5\\right)\\)",
        "\\(\\left[9{,}5 ; 10\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{6.5+7}2=6.75\\]\\[c_{2}=\\frac{7+7.5}2=7.25\\]\\[c_{3}=\\frac{7.5+8}2=7.75\\]\\[c_{4}=\\frac{8+8.5}2=8.25\\]\\[c_{5}=\\frac{8.5+9}2=8.75\\]\\[c_{6}=\\frac{9+9.5}2=9.25\\]\\[c_{7}=\\frac{9.5+10}2=9.75\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=8+10+16+24+13+7+4=82\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=8\\cdot6.75+10\\cdot7.25+16\\cdot7.75+24\\cdot8.25+13\\cdot8.75+7\\cdot9.25+4\\cdot9.75=666\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{666}{82}\\approx8.12\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d7-2": {
    "prompt": "Ước lượng tứ phân vị \\(Q_{1}\\) của điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(5{,}58\\) điểm",
      "\\(8{,}58\\) điểm",
      "\\(7{,}58\\) điểm",
      "\\(10{,}58\\) điểm"
    ],
    "explanation": "\\(N = 82\\); mốc \\(\\frac{1 N}{4} = 20{,}5\\). Nhóm nội suy \\(\\left[7{,}5 ; 8\\right)\\) có \\(L = 7{,}5 , h = 0{,}5 , f = 16 , F = 18\\). \\(Q_{1} = 7{,}5 + \\frac{20{,}5 - 18}{16} \\times 0{,}5 \\approx 7{,}58\\) điểm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(20{,}5\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Điểm Toán",
        "\\(\\left[6{,}5 ; 7\\right)\\)",
        "\\(\\left[7 ; 7{,}5\\right)\\)",
        "\\(\\left[7{,}5 ; 8\\right)\\)",
        "\\(\\left[8 ; 8{,}5\\right)\\)",
        "\\(\\left[8{,}5 ; 9\\right)\\)",
        "\\(\\left[9 ; 9{,}5\\right)\\)",
        "\\(\\left[9{,}5 ; 10\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=8+10+16+24+13+7+4=82,\\quad\\frac{1N}4=20.5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(8\\); \\(18\\); \\(34\\); \\(58\\); \\(71\\); \\(78\\); \\(82\\). \\[18<20.5\\le34\\]Nhóm cần dùng là \\([7.5;8)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=7.5,\\quad h=8-7.5=0.5,\\quad F=18,\\quad f=16\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_1=7.5+\\frac{20.5-18}{16}\\cdot0.5\\approx7.5781\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-3": {
    "prompt": "Ước lượng tứ phân vị \\(Q_{2}\\) của điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(6{,}15\\) điểm",
      "\\(9{,}15\\) điểm",
      "\\(11{,}15\\) điểm",
      "\\(8{,}15\\) điểm"
    ],
    "explanation": "\\(N = 82\\); mốc \\(\\frac{2 N}{4} = 41\\). Nhóm nội suy \\(\\left[8 ; 8{,}5\\right)\\) có \\(L = 8 , h = 0{,}5 , f = 24 , F = 34\\). Mₑ = \\(8 + \\frac{41 - 34}{24} \\times 0{,}5 \\approx 8{,}15\\) điểm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(41\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Điểm Toán",
        "\\(\\left[6{,}5 ; 7\\right)\\)",
        "\\(\\left[7 ; 7{,}5\\right)\\)",
        "\\(\\left[7{,}5 ; 8\\right)\\)",
        "\\(\\left[8 ; 8{,}5\\right)\\)",
        "\\(\\left[8{,}5 ; 9\\right)\\)",
        "\\(\\left[9 ; 9{,}5\\right)\\)",
        "\\(\\left[9{,}5 ; 10\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=8+10+16+24+13+7+4=82,\\quad\\frac{2N}4=41\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(8\\); \\(18\\); \\(34\\); \\(58\\); \\(71\\); \\(78\\); \\(82\\). \\[34<41\\le58\\]Nhóm cần dùng là \\([8;8.5)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=8,\\quad h=8.5-8=0.5,\\quad F=34,\\quad f=24\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=8+\\frac{41-34}{24}\\cdot0.5\\approx8.1458\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-4": {
    "prompt": "Ước lượng tứ phân vị \\(Q_{3}\\) của điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(8{,}63\\) điểm",
      "\\(6{,}63\\) điểm",
      "\\(9{,}63\\) điểm",
      "\\(11{,}63\\) điểm"
    ],
    "explanation": "\\(N = 82\\); mốc \\(\\frac{3 N}{4} = 61{,}5\\). Nhóm nội suy \\(\\left[8{,}5 ; 9\\right)\\) có \\(L = 8{,}5 , h = 0{,}5 , f = 13 , F = 58\\). \\(Q_{3} = 8{,}5 + \\frac{61{,}5 - 58}{13} \\times 0{,}5 \\approx 8{,}63\\) điểm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(61{,}5\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Điểm Toán",
        "\\(\\left[6{,}5 ; 7\\right)\\)",
        "\\(\\left[7 ; 7{,}5\\right)\\)",
        "\\(\\left[7{,}5 ; 8\\right)\\)",
        "\\(\\left[8 ; 8{,}5\\right)\\)",
        "\\(\\left[8{,}5 ; 9\\right)\\)",
        "\\(\\left[9 ; 9{,}5\\right)\\)",
        "\\(\\left[9{,}5 ; 10\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=8+10+16+24+13+7+4=82,\\quad\\frac{3N}4=61.5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(8\\); \\(18\\); \\(34\\); \\(58\\); \\(71\\); \\(78\\); \\(82\\). \\[58<61.5\\le71\\]Nhóm cần dùng là \\([8.5;9)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=8.5,\\quad h=9-8.5=0.5,\\quad F=58,\\quad f=13\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_3=8.5+\\frac{61.5-58}{13}\\cdot0.5\\approx8.6346\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-5": {
    "prompt": "Ước lượng mốt điểm Toán. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(6{,}21\\) điểm",
      "\\(8{,}21\\) điểm",
      "\\(9{,}21\\) điểm",
      "\\(11{,}21\\) điểm"
    ],
    "explanation": "Các nhóm cùng độ dài \\(0{,}5\\). Chọn nhóm có tần số lớn nhất \\(\\left[8 ; 8{,}5\\right) ; d_{1} = 8 , d_{2} = 11\\). \\(M_{o} = 8 + \\frac{8}{8 + 11} \\times 0{,}5 \\approx 8{,}21\\) điểm.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Điểm Toán",
        "\\(\\left[6{,}5 ; 7\\right)\\)",
        "\\(\\left[7 ; 7{,}5\\right)\\)",
        "\\(\\left[7{,}5 ; 8\\right)\\)",
        "\\(\\left[8 ; 8{,}5\\right)\\)",
        "\\(\\left[8{,}5 ; 9\\right)\\)",
        "\\(\\left[9 ; 9{,}5\\right)\\)",
        "\\(\\left[9{,}5 ; 10\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(24\\), chọn nhóm \\([8;8.5)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=24-16=8,\\quad d_2=24-13=11\\]"
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=8+\\frac{8}{8+11}\\cdot0.5\\approx8.2105\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d7-6": {
    "prompt": "Từ số liệu thô lượng mưa tháng \\(8\\) ở Vũng Tàu, \\(2002 - 2020\\) (mm), tính số trung bình (làm tròn đến hai chữ số thập phân).",
    "options": [
      "\\(190{,}88\\) mm",
      "\\(193{,}88\\) mm",
      "\\(192{,}88\\) mm",
      "\\(195{,}88\\) mm"
    ],
    "explanation": "Có \\(19\\) quan sát, tổng \\(3.664 , 8\\). Trung bình chính xác trước khi làm tròn là tổng chia \\(19 , \\overline{x} \\approx 192{,}88\\) mm.",
    "hint": "Cộng các quan sát gốc rồi chia cho số quan sát.",
    "guide": {
      "formulas": [
        "\\overline x=\\frac1N\\sum_{j=1}^N x_j"
      ],
      "symbols": [
        [
          "N",
          "Số giá trị trong mẫu số liệu thô."
        ],
        [
          "x_j",
          "Giá trị quan sát thứ \\(j\\)."
        ],
        [
          "\\overline x",
          "Số trung bình của mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Đếm số quan sát",
        "content": "\\[N=19\\]"
      },
      {
        "title": "Cộng các số liệu",
        "content": "Các giá trị được cộng: \\(121.8\\); \\(158.3\\); \\(334.9\\); \\(200.9\\); \\(165.6\\); \\(161.5\\); \\(194.3\\); \\(220.7\\); \\(189.8\\); \\(243.2\\); \\(165.9\\); \\(165.9\\); \\(134\\); \\(173\\); \\(169\\); \\(189\\); \\(254\\); \\(168\\); \\(255\\). \\[\\sum x_j=3664.8\\]"
      },
      {
        "title": "Chia và làm tròn",
        "content": "\\[\\overline x=\\frac{3664.8}{19}\\approx192.88\\]Giữ đơn vị ban đầu của mẫu số liệu."
      }
    ]
  },
  "toan-11-3-d7-7": {
    "prompt": "Từ số liệu thô lượng mưa tháng \\(8\\) ở Vũng Tàu, \\(2002 - 2020\\) (mm), xác định \\(Q_{1}\\).",
    "options": [
      "\\(163{,}6\\) mm",
      "\\(166{,}6\\) mm",
      "\\(168{,}6\\) mm",
      "\\(165{,}6\\) mm"
    ],
    "explanation": "Sắp xếp tăng dần: \\(121{,}8 ; 134 ; 158{,}3 ; 161{,}5 ; 165{,}6 ; 165{,}9 ; 165{,}9 ; 168 ; 169 ; 173 ; 189 ; 189{,}8 ; 194{,}3 ; 200{,}9 ; 220{,}7 ; 243{,}2 ; 254 ; 255 ; 334{,}9\\). \\(Q_{2}\\) là trung vị của mẫu; \\(Q_{1}\\) và \\(Q_{3}\\) là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). \\(Q_{1} = 165{,}6\\) mm.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "guide": {
      "formulas": [
        "\\operatorname{Me}=\\begin{cases}x_{((N+1)/2)},&N\\text{ lẻ},\\\\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\\text{ chẵn},\\end{cases}",
        "Q_2=\\operatorname{Me}"
      ],
      "symbols": [
        [
          "x_{(j)}",
          "Giá trị ở vị trí \\(j\\) sau khi sắp tăng dần."
        ],
        [
          "N",
          "Số giá trị của phần dữ liệu đang lấy trung vị."
        ],
        [
          "Q_1,Q_3",
          "Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử \\(b a n\\) đầu lẻ."
        ],
        [
          "Q_2,\\operatorname{Me}",
          "Trung vị của toàn mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Sắp xếp tăng dần",
        "content": "\\(121.8\\); \\(134\\); \\(158.3\\); \\(161.5\\); \\(165.6\\); \\(165.9\\); \\(165.9\\); \\(168\\); \\(169\\); \\(173\\); \\(189\\); \\(189.8\\); \\(194.3\\); \\(200.9\\); \\(220.7\\); \\(243.2\\); \\(254\\); \\(255\\); \\(334.9\\)."
      },
      {
        "title": "Chọn phần dữ liệu cần lấy trung vị",
        "content": "Mẫu có 19 giá trị. Bỏ phần tử trung vị chung, rồi lấy nửa dưới gồm 9 giá trị: \\(121.8\\); \\(134\\); \\(158.3\\); \\(161.5\\); \\(165.6\\); \\(165.9\\); \\(165.9\\); \\(168\\); \\(169\\)."
      },
      {
        "title": "Lấy phần tử giữa",
        "content": "Phần dữ liệu có số phần tử lẻ, lấy vị trí 5: \\[Q_1=165.6\\]"
      }
    ]
  },
  "toan-11-3-d7-8": {
    "prompt": "Từ số liệu thô lượng mưa tháng \\(8\\) ở Vũng Tàu, \\(2002 - 2020\\) (mm), xác định \\(Q_{2}\\).",
    "options": [
      "\\(173\\) mm",
      "\\(171\\) mm",
      "\\(174\\) mm",
      "\\(176\\) mm"
    ],
    "explanation": "Sắp xếp tăng dần: \\(121{,}8 ; 134 ; 158{,}3 ; 161{,}5 ; 165{,}6 ; 165{,}9 ; 165{,}9 ; 168 ; 169 ; 173 ; 189 ; 189{,}8 ; 194{,}3 ; 200{,}9 ; 220{,}7 ; 243{,}2 ; 254 ; 255 ; 334{,}9\\). \\(Q_{2}\\) là trung vị của mẫu; \\(Q_{1}\\) và \\(Q_{3}\\) là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). \\(Q_{2} = 173\\) mm.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "guide": {
      "formulas": [
        "\\operatorname{Me}=\\begin{cases}x_{((N+1)/2)},&N\\text{ lẻ},\\\\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\\text{ chẵn},\\end{cases}",
        "Q_2=\\operatorname{Me}"
      ],
      "symbols": [
        [
          "x_{(j)}",
          "Giá trị ở vị trí \\(j\\) sau khi sắp tăng dần."
        ],
        [
          "N",
          "Số giá trị của phần dữ liệu đang lấy trung vị."
        ],
        [
          "Q_1,Q_3",
          "Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử \\(b a n\\) đầu lẻ."
        ],
        [
          "Q_2,\\operatorname{Me}",
          "Trung vị của toàn mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Sắp xếp tăng dần",
        "content": "\\(121.8\\); \\(134\\); \\(158.3\\); \\(161.5\\); \\(165.6\\); \\(165.9\\); \\(165.9\\); \\(168\\); \\(169\\); \\(173\\); \\(189\\); \\(189.8\\); \\(194.3\\); \\(200.9\\); \\(220.7\\); \\(243.2\\); \\(254\\); \\(255\\); \\(334.9\\)."
      },
      {
        "title": "Chọn phần dữ liệu cần lấy trung vị",
        "content": "Lấy toàn bộ 19 giá trị để tính trung vị."
      },
      {
        "title": "Lấy phần tử giữa",
        "content": "Phần dữ liệu có số phần tử lẻ, lấy vị trí 10: \\[Q_2=173\\]"
      }
    ]
  },
  "toan-11-3-d7-9": {
    "prompt": "Từ số liệu thô lượng mưa tháng \\(8\\) ở Vũng Tàu, \\(2002 - 2020\\) (mm), xác định \\(Q_{3}\\).",
    "options": [
      "\\(218{,}7\\) mm",
      "\\(220{,}7\\) mm",
      "\\(221{,}7\\) mm",
      "\\(223{,}7\\) mm"
    ],
    "explanation": "Sắp xếp tăng dần: \\(121{,}8 ; 134 ; 158{,}3 ; 161{,}5 ; 165{,}6 ; 165{,}9 ; 165{,}9 ; 168 ; 169 ; 173 ; 189 ; 189{,}8 ; 194{,}3 ; 200{,}9 ; 220{,}7 ; 243{,}2 ; 254 ; 255 ; 334{,}9\\). \\(Q_{2}\\) là trung vị của mẫu; \\(Q_{1}\\) và \\(Q_{3}\\) là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). \\(Q_{3} = 220{,}7\\) mm.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "guide": {
      "formulas": [
        "\\operatorname{Me}=\\begin{cases}x_{((N+1)/2)},&N\\text{ lẻ},\\\\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\\text{ chẵn},\\end{cases}",
        "Q_2=\\operatorname{Me}"
      ],
      "symbols": [
        [
          "x_{(j)}",
          "Giá trị ở vị trí \\(j\\) sau khi sắp tăng dần."
        ],
        [
          "N",
          "Số giá trị của phần dữ liệu đang lấy trung vị."
        ],
        [
          "Q_1,Q_3",
          "Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử \\(b a n\\) đầu lẻ."
        ],
        [
          "Q_2,\\operatorname{Me}",
          "Trung vị của toàn mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Sắp xếp tăng dần",
        "content": "\\(121.8\\); \\(134\\); \\(158.3\\); \\(161.5\\); \\(165.6\\); \\(165.9\\); \\(165.9\\); \\(168\\); \\(169\\); \\(173\\); \\(189\\); \\(189.8\\); \\(194.3\\); \\(200.9\\); \\(220.7\\); \\(243.2\\); \\(254\\); \\(255\\); \\(334.9\\)."
      },
      {
        "title": "Chọn phần dữ liệu cần lấy trung vị",
        "content": "Mẫu có 19 giá trị. Bỏ phần tử trung vị chung, rồi lấy nửa trên gồm 9 giá trị: \\(189\\); \\(189.8\\); \\(194.3\\); \\(200.9\\); \\(220.7\\); \\(243.2\\); \\(254\\); \\(255\\); \\(334.9\\)."
      },
      {
        "title": "Lấy phần tử giữa",
        "content": "Phần dữ liệu có số phần tử lẻ, lấy vị trí 5: \\[Q_3=220.7\\]"
      }
    ]
  },
  "toan-11-3-d7-10": {
    "prompt": "Hoàn thành dãy tần số lượng mưa theo thứ tự các nhóm trong bảng.\nDữ liệu gốc: \\(121{,}8 ; 158{,}3 ; 334{,}9 ; 200{,}9 ; 165{,}6 ; 161{,}5 ; 194{,}3 ; 220{,}7 ; 189{,}8 ; 243{,}2 ; 165{,}9 ; 165{,}9 ; 134 ; 173 ; 169 ; 189 ; 254 ; 168 ; 255\\).",
    "options": [
      "\\(11 ; 4 ; 3 ; 1\\)",
      "\\(10 ; 6 ; 2 ; 1\\)",
      "\\(10 ; 5 ; 3 ; 1\\)",
      "\\(9 ; 5 ; 4 ; 1\\)"
    ],
    "explanation": "Đếm từng giá trị theo các khoảng cho trước được \\(\\left(10 ; 5 ; 3 ; 1\\right)\\), tổng \\(19\\) quan sát.",
    "hint": "Đầu mút trái thuộc nhóm, đầu mút phải không thuộc nhóm.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "\\(\\left[120 ; 175\\right)\\)",
        "\\(\\left[175 ; 230\\right)\\)",
        "\\(\\left[230 ; 285\\right)\\)",
        "\\(\\left[285 ; 340\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. "
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([120;175)\\): \\(121.8\\); \\(158.3\\); \\(165.6\\); \\(161.5\\); \\(165.9\\); \\(165.9\\); \\(134\\); \\(173\\); \\(169\\); \\(168\\), tần số 10. Nhóm \\([175;230)\\): \\(200.9\\); \\(194.3\\); \\(220.7\\); \\(189.8\\); \\(189\\), tần số 5. Nhóm \\([230;285)\\): \\(243.2\\); \\(254\\); \\(255\\), tần số 3. Nhóm \\([285;340)\\): \\(334.9\\), tần số 1."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=10+5+3+1=19\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d7-11": {
    "prompt": "Ước lượng số trung bình lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(186{,}03\\) mm",
      "\\(189{,}03\\) mm",
      "\\(191{,}03\\) mm",
      "\\(188{,}03\\) mm"
    ],
    "explanation": "Giá trị đại diện các nhóm: \\(147{,}5 ; 202{,}5 ; 257{,}5 ; 312{,}5\\). Tổng tần số \\(N = 19\\). Tổng \\(n_{i} c_{i} = 3.572 , 5\\). Số trung bình ghép nhóm \\(\\overline{x} = 3.572 , \\frac{5}{19} \\approx 188{,}03\\) mm. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho \\(19\\).",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "\\(\\left[120 ; 175\\right)\\)",
        "\\(\\left[175 ; 230\\right)\\)",
        "\\(\\left[230 ; 285\\right)\\)",
        "\\(\\left[285 ; 340\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{120+175}2=147.5\\]\\[c_{2}=\\frac{175+230}2=202.5\\]\\[c_{3}=\\frac{230+285}2=257.5\\]\\[c_{4}=\\frac{285+340}2=312.5\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=10+5+3+1=19\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=10\\cdot147.5+5\\cdot202.5+3\\cdot257.5+1\\cdot312.5=3572.5\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{3572.5}{19}\\approx188.03\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d7-12": {
    "prompt": "Ước lượng \\(Q_{1}\\) của lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(146{,}13\\) mm",
      "\\(144{,}13\\) mm",
      "\\(147{,}13\\) mm",
      "\\(149{,}13\\) mm"
    ],
    "explanation": "\\(N = 19\\); mốc \\(\\frac{1 N}{4} = 4{,}75\\). Nhóm nội suy \\(\\left[120 ; 175\\right)\\) có \\(L = 120 , h = 55 , f = 10 , F = 0\\). \\(Q_{1} = 120 + \\frac{4{,}75 - 0}{10} \\times 55 \\approx 146{,}13\\) mm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(4{,}75\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "\\(\\left[120 ; 175\\right)\\)",
        "\\(\\left[175 ; 230\\right)\\)",
        "\\(\\left[230 ; 285\\right)\\)",
        "\\(\\left[285 ; 340\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=10+5+3+1=19,\\quad\\frac{1N}4=4.75\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(10\\); \\(15\\); \\(18\\); \\(19\\). \\[0<4.75\\le10\\]Nhóm cần dùng là \\([120;175)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=120,\\quad h=175-120=55,\\quad F=0,\\quad f=10\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_1=120+\\frac{4.75-0}{10}\\cdot55\\approx146.1250\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-13": {
    "prompt": "Ước lượng \\(Q_{2}\\) của lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(170{,}25\\) mm",
      "\\(172{,}25\\) mm",
      "\\(173{,}25\\) mm",
      "\\(175{,}25\\) mm"
    ],
    "explanation": "\\(N = 19\\); mốc \\(\\frac{2 N}{4} = 9{,}5\\). Nhóm nội suy \\(\\left[120 ; 175\\right)\\) có \\(L = 120 , h = 55 , f = 10 , F = 0\\). Mₑ = \\(120 + \\frac{9{,}5 - 0}{10} \\times 55 \\approx 172{,}25\\) mm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(9{,}5\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "\\(\\left[120 ; 175\\right)\\)",
        "\\(\\left[175 ; 230\\right)\\)",
        "\\(\\left[230 ; 285\\right)\\)",
        "\\(\\left[285 ; 340\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=10+5+3+1=19,\\quad\\frac{2N}4=9.5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(10\\); \\(15\\); \\(18\\); \\(19\\). \\[0<9.5\\le10\\]Nhóm cần dùng là \\([120;175)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=120,\\quad h=175-120=55,\\quad F=0,\\quad f=10\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=120+\\frac{9.5-0}{10}\\cdot55\\approx172.2500\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-14": {
    "prompt": "Ước lượng \\(Q_{3}\\) của lượng mưa sau khi ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(219{,}75\\) mm",
      "\\(222{,}75\\) mm",
      "\\(221{,}75\\) mm",
      "\\(224{,}75\\) mm"
    ],
    "explanation": "\\(N = 19\\); mốc \\(\\frac{3 N}{4} = 14{,}25\\). Nhóm nội suy \\(\\left[175 ; 230\\right)\\) có \\(L = 175 , h = 55 , f = 5 , F = 10\\). \\(Q_{3} = 175 + \\frac{14{,}25 - 10}{5} \\times 55 \\approx 221{,}75\\) mm.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(14{,}25\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "\\(\\left[120 ; 175\\right)\\)",
        "\\(\\left[175 ; 230\\right)\\)",
        "\\(\\left[230 ; 285\\right)\\)",
        "\\(\\left[285 ; 340\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=10+5+3+1=19,\\quad\\frac{3N}4=14.25\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(10\\); \\(15\\); \\(18\\); \\(19\\). \\[10<14.25\\le15\\]Nhóm cần dùng là \\([175;230)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=175,\\quad h=230-175=55,\\quad F=10,\\quad f=5\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_3=175+\\frac{14.25-10}{5}\\cdot55\\approx221.7500\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-15": {
    "prompt": "Ước lượng mốt lượng mưa sau khi ghép nhóm (nhóm biên dùng tần số ngoài bằng \\(0 )\\). (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(154{,}67\\) mm",
      "\\(157{,}67\\) mm",
      "\\(159{,}67\\) mm",
      "\\(156{,}67\\) mm"
    ],
    "explanation": "Các nhóm cùng độ dài \\(55\\). Chọn nhóm có tần số lớn nhất \\(\\left[120 ; 175\\right) ; d_{1} = 10 , d_{2} = 5\\). \\(M_{o} = 120 + \\frac{10}{10 + 5} \\times 55 \\approx 156{,}67\\) mm.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Lượng mưa (mm)",
        "\\(\\left[120 ; 175\\right)\\)",
        "\\(\\left[175 ; 230\\right)\\)",
        "\\(\\left[230 ; 285\\right)\\)",
        "\\(\\left[285 ; 340\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(10\\), chọn nhóm \\([120;175)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=10-0=10,\\quad d_2=10-5=5\\]Nhóm ở biên dùng tần số nhóm ngoài bằng 0 theo quy ước của đề."
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=120+\\frac{10}{10+5}\\cdot55\\approx156.6667\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-3-d7-16": {
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng \\(\\frac{12}{2021}\\) (ca), tính số trung bình (làm tròn đến hai chữ số thập phân).",
    "options": [
      "\\(15.821 , 87\\) ca",
      "\\(15.819 , 87\\) ca",
      "\\(15.822 , 87\\) ca",
      "\\(15.824 , 87\\) ca"
    ],
    "explanation": "Có \\(31\\) quan sát, tổng \\(490.478\\). Trung bình chính xác trước khi làm tròn là tổng chia \\(31 , \\overline{x} \\approx 15.821 , 87\\) ca.",
    "hint": "Cộng các quan sát gốc rồi chia cho số quan sát.",
    "guide": {
      "formulas": [
        "\\overline x=\\frac1N\\sum_{j=1}^N x_j"
      ],
      "symbols": [
        [
          "N",
          "Số giá trị trong mẫu số liệu thô."
        ],
        [
          "x_j",
          "Giá trị quan sát thứ \\(j\\)."
        ],
        [
          "\\overline x",
          "Số trung bình của mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Đếm số quan sát",
        "content": "\\[N=31\\]"
      },
      {
        "title": "Cộng các số liệu",
        "content": "Các giá trị được cộng: \\(15139\\); \\(14295\\); \\(14254\\); \\(14598\\); \\(14927\\); \\(15215\\); \\(14433\\); \\(15223\\); \\(15965\\); \\(15474\\); \\(16830\\); \\(15264\\); \\(16035\\); \\(15871\\); \\(16192\\); \\(15720\\); \\(15685\\); \\(16363\\); \\(16586\\); \\(15420\\); \\(16806\\); \\(17044\\); \\(16860\\); \\(16633\\); \\(16046\\); \\(15667\\); \\(15310\\); \\(14866\\); \\(14299\\); \\(20454\\); \\(17004\\). \\[\\sum x_j=490478\\]"
      },
      {
        "title": "Chia và làm tròn",
        "content": "\\[\\overline x=\\frac{490478}{31}\\approx15821.87\\]Giữ đơn vị ban đầu của mẫu số liệu."
      }
    ]
  },
  "toan-11-3-d7-17": {
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng \\(\\frac{12}{2021}\\) (ca), xác định \\(Q_{1}\\).",
    "options": [
      "\\(15.137\\) ca",
      "\\(15.139\\) ca",
      "\\(15.140\\) ca",
      "\\(15.142\\) ca"
    ],
    "explanation": "Sắp xếp tăng dần: \\(14.254 ; 14.295 ; 14.299 ; 14.433 ; 14.598 ; 14.866 ; 14.927 ; 15.139 ; 15.215 ; 15.223 ; 15.264 ; 15.310 ; 15.420 ; 15.474 ; 15.667 ; 15.685 ; 15.720 ; 15.871 ; 15.965 ; 16.035 ; 16.046 ; 16.192 ; 16.363 ; 16.586 ; 16.633 ; 16.806 ; 16.830 ; 16.860 ; 17.004 ; 17.044 ; 20.454\\). \\(Q_{2}\\) là trung vị của mẫu; \\(Q_{1}\\) và \\(Q_{3}\\) là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). \\(Q_{1} = 15.139\\) ca.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "guide": {
      "formulas": [
        "\\operatorname{Me}=\\begin{cases}x_{((N+1)/2)},&N\\text{ lẻ},\\\\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\\text{ chẵn},\\end{cases}",
        "Q_2=\\operatorname{Me}"
      ],
      "symbols": [
        [
          "x_{(j)}",
          "Giá trị ở vị trí \\(j\\) sau khi sắp tăng dần."
        ],
        [
          "N",
          "Số giá trị của phần dữ liệu đang lấy trung vị."
        ],
        [
          "Q_1,Q_3",
          "Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử \\(b a n\\) đầu lẻ."
        ],
        [
          "Q_2,\\operatorname{Me}",
          "Trung vị của toàn mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Sắp xếp tăng dần",
        "content": "\\(14254\\); \\(14295\\); \\(14299\\); \\(14433\\); \\(14598\\); \\(14866\\); \\(14927\\); \\(15139\\); \\(15215\\); \\(15223\\); \\(15264\\); \\(15310\\); \\(15420\\); \\(15474\\); \\(15667\\); \\(15685\\); \\(15720\\); \\(15871\\); \\(15965\\); \\(16035\\); \\(16046\\); \\(16192\\); \\(16363\\); \\(16586\\); \\(16633\\); \\(16806\\); \\(16830\\); \\(16860\\); \\(17004\\); \\(17044\\); \\(20454\\)."
      },
      {
        "title": "Chọn phần dữ liệu cần lấy trung vị",
        "content": "Mẫu có 31 giá trị. Bỏ phần tử trung vị chung, rồi lấy nửa dưới gồm 15 giá trị: \\(14254\\); \\(14295\\); \\(14299\\); \\(14433\\); \\(14598\\); \\(14866\\); \\(14927\\); \\(15139\\); \\(15215\\); \\(15223\\); \\(15264\\); \\(15310\\); \\(15420\\); \\(15474\\); \\(15667\\)."
      },
      {
        "title": "Lấy phần tử giữa",
        "content": "Phần dữ liệu có số phần tử lẻ, lấy vị trí 8: \\[Q_1=15139\\]"
      }
    ]
  },
  "toan-11-3-d7-18": {
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng \\(\\frac{12}{2021}\\) (ca), xác định \\(Q_{2}\\).",
    "options": [
      "\\(15.683\\) ca",
      "\\(15.686\\) ca",
      "\\(15.685\\) ca",
      "\\(15.688\\) ca"
    ],
    "explanation": "Sắp xếp tăng dần: \\(14.254 ; 14.295 ; 14.299 ; 14.433 ; 14.598 ; 14.866 ; 14.927 ; 15.139 ; 15.215 ; 15.223 ; 15.264 ; 15.310 ; 15.420 ; 15.474 ; 15.667 ; 15.685 ; 15.720 ; 15.871 ; 15.965 ; 16.035 ; 16.046 ; 16.192 ; 16.363 ; 16.586 ; 16.633 ; 16.806 ; 16.830 ; 16.860 ; 17.004 ; 17.044 ; 20.454\\). \\(Q_{2}\\) là trung vị của mẫu; \\(Q_{1}\\) và \\(Q_{3}\\) là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). \\(Q_{2} = 15.685\\) ca.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "guide": {
      "formulas": [
        "\\operatorname{Me}=\\begin{cases}x_{((N+1)/2)},&N\\text{ lẻ},\\\\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\\text{ chẵn},\\end{cases}",
        "Q_2=\\operatorname{Me}"
      ],
      "symbols": [
        [
          "x_{(j)}",
          "Giá trị ở vị trí \\(j\\) sau khi sắp tăng dần."
        ],
        [
          "N",
          "Số giá trị của phần dữ liệu đang lấy trung vị."
        ],
        [
          "Q_1,Q_3",
          "Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử \\(b a n\\) đầu lẻ."
        ],
        [
          "Q_2,\\operatorname{Me}",
          "Trung vị của toàn mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Sắp xếp tăng dần",
        "content": "\\(14254\\); \\(14295\\); \\(14299\\); \\(14433\\); \\(14598\\); \\(14866\\); \\(14927\\); \\(15139\\); \\(15215\\); \\(15223\\); \\(15264\\); \\(15310\\); \\(15420\\); \\(15474\\); \\(15667\\); \\(15685\\); \\(15720\\); \\(15871\\); \\(15965\\); \\(16035\\); \\(16046\\); \\(16192\\); \\(16363\\); \\(16586\\); \\(16633\\); \\(16806\\); \\(16830\\); \\(16860\\); \\(17004\\); \\(17044\\); \\(20454\\)."
      },
      {
        "title": "Chọn phần dữ liệu cần lấy trung vị",
        "content": "Lấy toàn bộ 31 giá trị để tính trung vị."
      },
      {
        "title": "Lấy phần tử giữa",
        "content": "Phần dữ liệu có số phần tử lẻ, lấy vị trí 16: \\[Q_2=15685\\]"
      }
    ]
  },
  "toan-11-3-d7-19": {
    "prompt": "Từ số liệu thô số ca nhiễm mới mỗi ngày trong bảng tháng \\(\\frac{12}{2021}\\) (ca), xác định \\(Q_{3}\\).",
    "options": [
      "\\(16.584\\) ca",
      "\\(16.587\\) ca",
      "\\(16.589\\) ca",
      "\\(16.586\\) ca"
    ],
    "explanation": "Sắp xếp tăng dần: \\(14.254 ; 14.295 ; 14.299 ; 14.433 ; 14.598 ; 14.866 ; 14.927 ; 15.139 ; 15.215 ; 15.223 ; 15.264 ; 15.310 ; 15.420 ; 15.474 ; 15.667 ; 15.685 ; 15.720 ; 15.871 ; 15.965 ; 16.035 ; 16.046 ; 16.192 ; 16.363 ; 16.586 ; 16.633 ; 16.806 ; 16.830 ; 16.860 ; 17.004 ; 17.044 ; 20.454\\). \\(Q_{2}\\) là trung vị của mẫu; \\(Q_{1}\\) và \\(Q_{3}\\) là trung vị của hai nửa (bỏ trung vị chung nếu cỡ mẫu lẻ). \\(Q_{3} = 16.586\\) ca.",
    "hint": "Sắp xếp số liệu; dùng quy tắc trung vị của hai nửa, không dùng nội suy ghép nhóm.",
    "guide": {
      "formulas": [
        "\\operatorname{Me}=\\begin{cases}x_{((N+1)/2)},&N\\text{ lẻ},\\\\\\dfrac{x_{(N/2)}+x_{(N/2+1)}}2,&N\\text{ chẵn},\\end{cases}",
        "Q_2=\\operatorname{Me}"
      ],
      "symbols": [
        [
          "x_{(j)}",
          "Giá trị ở vị trí \\(j\\) sau khi sắp tăng dần."
        ],
        [
          "N",
          "Số giá trị của phần dữ liệu đang lấy trung vị."
        ],
        [
          "Q_1,Q_3",
          "Trung vị nửa dưới và nửa trên; bỏ phần tử trung vị chung nếu số phần tử \\(b a n\\) đầu lẻ."
        ],
        [
          "Q_2,\\operatorname{Me}",
          "Trung vị của toàn mẫu."
        ]
      ],
      "condition": ""
    },
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
    "solutionSteps": [
      {
        "title": "Sắp xếp tăng dần",
        "content": "\\(14254\\); \\(14295\\); \\(14299\\); \\(14433\\); \\(14598\\); \\(14866\\); \\(14927\\); \\(15139\\); \\(15215\\); \\(15223\\); \\(15264\\); \\(15310\\); \\(15420\\); \\(15474\\); \\(15667\\); \\(15685\\); \\(15720\\); \\(15871\\); \\(15965\\); \\(16035\\); \\(16046\\); \\(16192\\); \\(16363\\); \\(16586\\); \\(16633\\); \\(16806\\); \\(16830\\); \\(16860\\); \\(17004\\); \\(17044\\); \\(20454\\)."
      },
      {
        "title": "Chọn phần dữ liệu cần lấy trung vị",
        "content": "Mẫu có 31 giá trị. Bỏ phần tử trung vị chung, rồi lấy nửa trên gồm 15 giá trị: \\(15720\\); \\(15871\\); \\(15965\\); \\(16035\\); \\(16046\\); \\(16192\\); \\(16363\\); \\(16586\\); \\(16633\\); \\(16806\\); \\(16830\\); \\(16860\\); \\(17004\\); \\(17044\\); \\(20454\\)."
      },
      {
        "title": "Lấy phần tử giữa",
        "content": "Phần dữ liệu có số phần tử lẻ, lấy vị trí 8: \\[Q_3=16586\\]"
      }
    ]
  },
  "toan-11-3-d7-20": {
    "prompt": "Đổi số ca sang nghìn ca rồi hoàn thành dãy tần số theo thứ tự các nhóm.\nDữ liệu gốc: \\(15{,}14 ; 14{,}29 ; 14{,}25 ; 14{,}6 ; 14{,}93 ; 15{,}21 ; 14{,}43 ; 15{,}22 ; 15{,}96 ; 15{,}47 ; 16{,}83 ; 15{,}26 ; 16{,}04 ; 15{,}87 ; 16{,}19 ; 15{,}72 ; 15{,}69 ; 16{,}36 ; 16{,}59 ; 15{,}42 ; 16{,}81 ; 17{,}04 ; 16{,}86 ; 16{,}63 ; 16{,}05 ; 15{,}67 ; 15{,}31 ; 14{,}87 ; 14{,}3 ; 20{,}45 ; 17\\).",
    "options": [
      "\\(14 ; 14 ; 2 ; 0 ; 1\\)",
      "\\(15 ; 13 ; 2 ; 0 ; 1\\)",
      "\\(14 ; 15 ; 1 ; 0 ; 1\\)",
      "\\(13 ; 14 ; 3 ; 0 ; 1\\)"
    ],
    "explanation": "Đếm từng giá trị theo các khoảng cho trước được \\(\\left(14 ; 14 ; 2 ; 0 ; 1\\right)\\), tổng \\(31\\) quan sát.",
    "hint": "Đầu mút trái thuộc nhóm, đầu mút phải không thuộc nhóm.",
    "guide": {
      "formulas": [
        "n_i=\\#\\{x_j:a_i\\le x_j<b_i\\},\\qquad N=\\sum_i n_i"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "x_j",
          "Một giá trị quan sát; ký hiệu # là số phần tử của tập."
        ]
      ],
      "condition": "Đọc đúng khoảng của từng nhóm. Chỉ tính đầu mút phải nếu đề ghi rõ nhóm đóng ở đầu đó."
    },
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "\\(\\left[14 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 17\\right)\\)",
        "\\(\\left[17 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 20\\right)\\)",
        "\\(\\left[20 ; 21{,}5\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Áp dụng quy tắc chia nhóm",
        "content": "Giá trị bằng đầu mút trái được tính vào nhóm; giá trị bằng đầu mút phải chuyển sang nhóm kế tiếp. "
      },
      {
        "title": "Đếm từng nhóm",
        "content": "Nhóm \\([14;15.5)\\): \\(15.139\\); \\(14.295\\); \\(14.254\\); \\(14.598\\); \\(14.927\\); \\(15.215\\); \\(14.433\\); \\(15.223\\); \\(15.474\\); \\(15.264\\); \\(15.42\\); \\(15.31\\); \\(14.866\\); \\(14.299\\), tần số 14. Nhóm \\([15.5;17)\\): \\(15.965\\); \\(16.83\\); \\(16.035\\); \\(15.871\\); \\(16.192\\); \\(15.72\\); \\(15.685\\); \\(16.363\\); \\(16.586\\); \\(16.806\\); \\(16.86\\); \\(16.633\\); \\(16.046\\); \\(15.667\\), tần số 14. Nhóm \\([17;18.5)\\): \\(17.044\\); \\(17.004\\), tần số 2. Nhóm \\([18.5;20)\\): không có quan sát, tần số 0. Nhóm \\([20;21.5)\\): \\(20.454\\), tần số 1."
      },
      {
        "title": "Kiểm tra tổng và kết luận",
        "content": "\\[N=14+14+2+0+1=31\\]Tổng tần số bằng số quan sát; lấy dãy tần số theo đúng thứ tự các nhóm."
      }
    ]
  },
  "toan-11-3-d7-21": {
    "prompt": "Ước lượng số trung bình số ca mỗi ngày từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(13{,}81\\) nghìn ca",
      "\\(15{,}81\\) nghìn ca",
      "\\(16{,}81\\) nghìn ca",
      "\\(18{,}81\\) nghìn ca"
    ],
    "explanation": "Giá trị đại diện các nhóm: \\(14{,}75 ; 16{,}25 ; 17{,}75 ; 19{,}25 ; 20{,}75\\). Tổng tần số \\(N = 31\\). Tổng \\(n_{i} c_{i} = 490{,}25\\). Số trung bình ghép nhóm \\(\\overline{x} = \\frac{490{,}25}{31} \\approx 15{,}81\\) nghìn ca. Đây là giá trị ước lượng.",
    "hint": "Lấy trung điểm từng nhóm, nhân với tần số rồi chia tổng các tích cho \\(31\\).",
    "guide": {
      "formulas": [
        "c_i=\\frac{a_i+b_i}2,\\quad\\overline x\\approx\\frac{\\sum n_ic_i}{N}"
      ],
      "symbols": [
        [
          "N=\\sum n_i",
          "Tổng số quan sát, bằng tổng tần số."
        ],
        [
          "n_i",
          "Tần số của nhóm thứ \\(i\\)."
        ],
        [
          "a_i,b_i",
          "Đầu mút trái và phải của nhóm \\(i\\)."
        ],
        [
          "c_i=\\frac{a_i+b_i}2",
          "Giá trị đại diện (trung điểm) của nhóm \\(i\\)."
        ],
        [
          "\\overline x",
          "Số trung bình ước lượng từ dữ liệu ghép nhóm."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "\\(\\left[14 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 17\\right)\\)",
        "\\(\\left[17 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 20\\right)\\)",
        "\\(\\left[20 ; 21{,}5\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính giá trị đại diện từng nhóm",
        "content": "\\[c_{1}=\\frac{14+15.5}2=14.75\\]\\[c_{2}=\\frac{15.5+17}2=16.25\\]\\[c_{3}=\\frac{17+18.5}2=17.75\\]\\[c_{4}=\\frac{18.5+20}2=19.25\\]\\[c_{5}=\\frac{20+21.5}2=20.75\\]"
      },
      {
        "title": "Cộng tần số",
        "content": "\\[N=14+14+2+0+1=31\\]"
      },
      {
        "title": "Tính tổng có trọng số",
        "content": "\\[\\sum n_ic_i=14\\cdot14.75+14\\cdot16.25+2\\cdot17.75+0\\cdot19.25+1\\cdot20.75=490.25\\]"
      },
      {
        "title": "Chia tổng cho số quan sát",
        "content": "\\[\\overline x\\approx\\frac{490.25}{31}\\approx15.81\\]Đây là số trung bình ước lượng; chỉ làm tròn ở bước cuối. Nếu đề hỏi khoảng, đối chiếu kết quả này với các khoảng đáp án."
      }
    ]
  },
  "toan-11-3-d7-22": {
    "prompt": "Ước lượng \\(Q_{1}\\) của số ca từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(12{,}83\\) nghìn ca",
      "\\(15{,}83\\) nghìn ca",
      "\\(14{,}83\\) nghìn ca",
      "\\(17{,}83\\) nghìn ca"
    ],
    "explanation": "\\(N = 31\\); mốc \\(\\frac{1 N}{4} = 7{,}75\\). Nhóm nội suy \\(\\left[14 ; 15{,}5\\right)\\) có \\(L = 14 , h = 1{,}5 , f = 14 , F = 0\\). \\(Q_{1} = 14 + \\frac{7{,}75 - 0}{14} \\times 1{,}5 \\approx 14{,}83\\) nghìn ca.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(7{,}75\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "\\(\\left[14 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 17\\right)\\)",
        "\\(\\left[17 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 20\\right)\\)",
        "\\(\\left[20 ; 21{,}5\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=14+14+2+0+1=31,\\quad\\frac{1N}4=7.75\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(14\\); \\(28\\); \\(30\\); \\(30\\); \\(31\\). \\[0<7.75\\le14\\]Nhóm cần dùng là \\([14;15.5)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=14,\\quad h=15.5-14=1.5,\\quad F=0,\\quad f=14\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_1=14+\\frac{7.75-0}{14}\\cdot1.5\\approx14.8304\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-23": {
    "prompt": "Ước lượng \\(Q_{2}\\) của số ca từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(13{,}66\\) nghìn ca",
      "\\(16{,}66\\) nghìn ca",
      "\\(18{,}66\\) nghìn ca",
      "\\(15{,}66\\) nghìn ca"
    ],
    "explanation": "\\(N = 31\\); mốc \\(\\frac{2 N}{4} = 15{,}5\\). Nhóm nội suy \\(\\left[15{,}5 ; 17\\right)\\) có \\(L = 15{,}5 , h = 1{,}5 , f = 14 , F = 14\\). Mₑ = \\(15{,}5 + \\frac{15{,}5 - 14}{14} \\times 1{,}5 \\approx 15{,}66\\) nghìn ca.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(15{,}5\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "\\(\\left[14 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 17\\right)\\)",
        "\\(\\left[17 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 20\\right)\\)",
        "\\(\\left[20 ; 21{,}5\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=14+14+2+0+1=31,\\quad\\frac{2N}4=15.5\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(14\\); \\(28\\); \\(30\\); \\(30\\); \\(31\\). \\[14<15.5\\le28\\]Nhóm cần dùng là \\([15.5;17)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=15.5,\\quad h=17-15.5=1.5,\\quad F=14,\\quad f=14\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_2=15.5+\\frac{15.5-14}{14}\\cdot1.5\\approx15.6607\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-24": {
    "prompt": "Ước lượng \\(Q_{3}\\) của số ca từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(16{,}49\\) nghìn ca",
      "\\(14{,}49\\) nghìn ca",
      "\\(17{,}49\\) nghìn ca",
      "\\(19{,}49\\) nghìn ca"
    ],
    "explanation": "\\(N = 31\\); mốc \\(\\frac{3 N}{4} = 23{,}25\\). Nhóm nội suy \\(\\left[15{,}5 ; 17\\right)\\) có \\(L = 15{,}5 , h = 1{,}5 , f = 14 , F = 14\\). \\(Q_{3} = 15{,}5 + \\frac{23{,}25 - 14}{14} \\times 1{,}5 \\approx 16{,}49\\) nghìn ca.",
    "hint": "Tính tần số tích lũy, xác định nhóm có tích lũy đạt mốc \\(23{,}25\\) rồi nội suy.",
    "guide": {
      "formulas": [
        "Q_r=L+\\frac{rN/4-F}{f}h,\\quad r=1,2,3"
      ],
      "symbols": [
        [
          "Q_r",
          "Tứ phân vị thứ \\(r ; Q_{2}\\) chính là trung vị."
        ],
        [
          "N",
          "Tổng tần số của mẫu."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm chứa vị trí rN\\(/ 4\\)."
        ],
        [
          "F",
          "Tần số tích lũy của các nhóm đứng trước nhóm nội suy."
        ],
        [
          "f",
          "Tần số của nhóm nội suy, phải lớn hơn \\(0\\)."
        ],
        [
          "r",
          "Chọn \\(r = 1 , 2\\) hoặc \\(3\\) theo \\(Q_{1} , Q_{2} , Q_{3}\\) được hỏi."
        ]
      ],
      "condition": ""
    },
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "\\(\\left[14 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 17\\right)\\)",
        "\\(\\left[17 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 20\\right)\\)",
        "\\(\\left[20 ; 21{,}5\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Tính cỡ mẫu và vị trí nội suy",
        "content": "\\[N=14+14+2+0+1=31,\\quad\\frac{3N}4=23.25\\]"
      },
      {
        "title": "Lập tần số tích lũy và tìm nhóm",
        "content": "Tần số tích lũy lần lượt: \\(14\\); \\(28\\); \\(30\\); \\(30\\); \\(31\\). \\[14<23.25\\le28\\]Nhóm cần dùng là \\([15.5;17)\\)."
      },
      {
        "title": "Lấy số liệu của nhóm",
        "content": "\\[L=15.5,\\quad h=17-15.5=1.5,\\quad F=14,\\quad f=14\\]"
      },
      {
        "title": "Nội suy và kết luận",
        "content": "\\[Q_3=15.5+\\frac{23.25-14}{14}\\cdot1.5\\approx16.4911\\]Nếu đề hỏi nhóm, dùng nhóm đã xác định ở bước 2. Nếu đề hỏi giá trị gần nhất, so sánh với các lựa chọn; không làm tròn trong các bước trung gian."
      }
    ]
  },
  "toan-11-3-d7-25": {
    "prompt": "Ước lượng mốt số ca mỗi ngày từ bảng ghép nhóm. (Làm tròn đến hai chữ số thập phân nếu cần.)",
    "options": [
      "\\(13{,}5\\) nghìn ca",
      "\\(15{,}5\\) nghìn ca",
      "\\(16{,}5\\) nghìn ca",
      "\\(18{,}5\\) nghìn ca"
    ],
    "explanation": "Các nhóm cùng độ dài \\(1{,}5\\). Chọn nhóm có tần số lớn nhất \\(\\left[14 ; 15{,}5\\right) ; d_{1} = 14 , d_{2} = 0\\). \\(M_{o} = 14 + \\frac{14}{14 + 0} \\times 1{,}5 \\approx 15{,}5\\) nghìn ca.",
    "hint": "Tìm nhóm có tần số lớn nhất, rồi dùng hai hiệu với tần số nhóm trước và sau.",
    "guide": {
      "formulas": [
        "M_o=L+\\frac{d_1}{d_1+d_2}h",
        "d_1=f-f_{\\text{trước}},\\quad d_2=f-f_{\\text{sau}}"
      ],
      "symbols": [
        [
          "M_o",
          "Mốt ước lượng."
        ],
        [
          "L,h",
          "Đầu mút trái và độ rộng nhóm mốt."
        ],
        [
          "f",
          "Tần số nhóm mốt (nhóm có tần số lớn nhất)."
        ],
        [
          "f_{\\text{trước}},f_{\\text{sau}}",
          "Tần số hai nhóm kề nhóm mốt."
        ],
        [
          "d_1,d_2",
          "Chênh lệch tần số của nhóm mốt với hai nhóm kề."
        ]
      ],
      "condition": "Dùng cho các bảng trong bộ câu hỏi có nhóm đều; kiểm tra \\(d_{1} + d_{2}\\) khác \\(0\\)."
    },
    "table": {
      "headers": [
        "Số ca (nghìn)",
        "\\(\\left[14 ; 15{,}5\\right)\\)",
        "\\(\\left[15{,}5 ; 17\\right)\\)",
        "\\(\\left[17 ; 18{,}5\\right)\\)",
        "\\(\\left[18{,}5 ; 20\\right)\\)",
        "\\(\\left[20 ; 21{,}5\\right)\\)"
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
    "solutionSteps": [
      {
        "title": "Chọn nhóm mốt",
        "content": "Các nhóm có độ dài bằng nhau. Tần số lớn nhất là \\(14\\), chọn nhóm \\([14;15.5)\\)."
      },
      {
        "title": "Tính hai chênh lệch",
        "content": "\\[d_1=14-0=14,\\quad d_2=14-14=0\\]Nhóm ở biên dùng tần số nhóm ngoài bằng 0 theo quy ước của đề."
      },
      {
        "title": "Thay vào công thức nội suy",
        "content": "\\[M_o=14+\\frac{14}{14+0}\\cdot1.5\\approx15.5000\\]"
      },
      {
        "title": "Đối chiếu yêu cầu",
        "content": "Nếu đề hỏi nhóm chứa mốt, đặt giá trị vừa tìm vào đúng khoảng. Khi giá trị bằng đầu mút, dùng quy ước đầu trái đóng, đầu phải mở của bảng; nếu hỏi số đo, giữ đơn vị và làm tròn theo đề."
      }
    ]
  },
  "toan-11-4-1-v1": {
    "prompt": "Yếu tố nào sau đây luôn xác định một mặt phẳng duy nhất?",
    "options": [
      "Ba điểm phân biệt bất kì",
      "Ba điểm không thẳng hàng",
      "Một điểm và một đường thẳng bất kì",
      "Hai đường thẳng bất kì"
    ],
    "explanation": "Qua \\(b a\\) điểm không thẳng hàng có một và chỉ một mặt phẳng. Các trường hợp còn lại thiếu điều kiện: \\(b a\\) điểm có thể thẳng hàng, điểm có thể thuộc đường thẳng, hai đường thẳng có thể chéo nhau.",
    "hint": "Tìm giả thiết loại trừ trường hợp suy biến.",
    "guide": {
      "formulas": [
        "A,B\\in(P),\\ A\\ne B\\ \\Longrightarrow\\ AB\\subset(P)",
        "A,B,C\\text{ không thẳng hàng}\\ \\Longrightarrow\\ \\exists!(P)\\supset\\{A,B,C\\}"
      ],
      "symbols": [
        [
          "A,B,C",
          "Các điểm."
        ],
        [
          "(P)",
          "Mặt phẳng chứa các điểm."
        ],
        [
          "\\exists!",
          "Có một và chỉ một."
        ]
      ],
      "condition": "Ba điểm thẳng hàng không xác định duy nhất một mặt phẳng."
    }
  },
  "toan-11-4-2-v1": {
    "prompt": "Hai điểm phân biệt \\(A , B\\) cùng thuộc mặt phẳng \\(\\left(P\\right)\\). Khẳng định nào chắc chắn đúng?",
    "options": [
      "Đường thẳng \\(AB\\) nằm trong \\(\\left(P\\right)\\)",
      "Đường thẳng \\(AB\\) song song với \\(\\left(P\\right)\\)",
      "Chỉ đoạn \\(AB\\) thuộc \\(\\left(P\\right)\\), còn đường thẳng \\(AB\\) không thuộc \\(\\left(P\\right)\\)",
      "\\(AB\\) chỉ có hai điểm chung với \\(\\left(P\\right)\\)"
    ],
    "explanation": "Một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó.",
    "hint": "Áp dụng tính chất đường thẳng có hai điểm thuộc mặt phẳng.",
    "guide": {
      "formulas": [
        "A,B\\in(P),\\ A\\ne B\\ \\Longrightarrow\\ AB\\subset(P)",
        "A,B,C\\text{ không thẳng hàng}\\ \\Longrightarrow\\ \\exists!(P)\\supset\\{A,B,C\\}"
      ],
      "symbols": [
        [
          "A,B,C",
          "Các điểm."
        ],
        [
          "(P)",
          "Mặt phẳng chứa các điểm."
        ],
        [
          "\\exists!",
          "Có một và chỉ một."
        ]
      ],
      "condition": "Ba điểm thẳng hàng không xác định duy nhất một mặt phẳng."
    }
  },
  "toan-11-4-3-v1": {
    "prompt": "Cho \\(b a\\) điểm phân biệt \\(A , B , C\\) thẳng hàng. Có bao nhiêu mặt phẳng chứa cả \\(b a\\) điểm?",
    "options": [
      "Đúng hai",
      "Không có",
      "Đúng một",
      "Vô số"
    ],
    "explanation": "Cả \\(b a\\) điểm thuộc đường thẳng \\(AB\\). Có vô số mặt phẳng đi qua một đường thẳng nên có vô số mặt phẳng chứa \\(A , B , C\\).",
    "hint": "Ba điểm thẳng hàng chỉ xác định một đường thẳng.",
    "guide": {
      "formulas": [
        "A,B\\in(P),\\ A\\ne B\\ \\Longrightarrow\\ AB\\subset(P)",
        "A,B,C\\text{ không thẳng hàng}\\ \\Longrightarrow\\ \\exists!(P)\\supset\\{A,B,C\\}"
      ],
      "symbols": [
        [
          "A,B,C",
          "Các điểm."
        ],
        [
          "(P)",
          "Mặt phẳng chứa các điểm."
        ],
        [
          "\\exists!",
          "Có một và chỉ một."
        ]
      ],
      "condition": "Ba điểm thẳng hàng không xác định duy nhất một mặt phẳng."
    }
  },
  "toan-11-4-4-v1": {
    "prompt": "Một tứ diện có bao nhiêu cạnh?",
    "options": [
      "\\(5\\)",
      "\\(4\\)",
      "\\(6\\)",
      "\\(8\\)"
    ],
    "explanation": "Tứ diện có bốn đỉnh; mỗi cặp đỉnh tạo một cạnh. Sáu cạnh của \\(ABCD\\) là \\(AB , AC , AD , BC , BD , CD\\).",
    "hint": "Liệt kê các đoạn nối hai trong bốn đỉnh.",
    "guide": {
      "formulas": [
        "\\text{Số cạnh tứ diện}=\\binom42"
      ],
      "symbols": [
        [
          "\\binom42",
          "Số cách chọn một cặp trong bốn đỉnh; mỗi cặp tạo một cạnh."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-5-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). Giao tuyến của hai mặt phẳng \\(\\left(ABC\\right)\\) và \\(\\left(ABD\\right)\\) là:",
    "options": [
      "\\(AC\\)",
      "\\(AB\\)",
      "\\(AD\\)",
      "\\(CD\\)"
    ],
    "explanation": "Hai mặt phẳng phân biệt có hai điểm chung \\(A\\) và \\(B\\) nên giao tuyến là đường thẳng \\(AB\\).",
    "hint": "Tìm hai điểm chung phân biệt.",
    "guide": {
      "formulas": [
        "A,B\\in(P)\\cap(Q),\\ A\\ne B\\ \\Longrightarrow\\ (P)\\cap(Q)=AB"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phải phân biệt. Tìm đủ hai điểm chung rồi nối chúng."
    }
  },
  "toan-11-4-6-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là tứ giác lồi; \\(O = AC \\cap BD\\). Giao tuyến của \\(\\left(SAC\\right)\\) và \\(\\left(SBD\\right)\\) là:",
    "options": [
      "\\(SO\\)",
      "\\(SA\\)",
      "\\(AC\\)",
      "\\(BD\\)"
    ],
    "explanation": "\\(S\\) thuộc cả hai mặt phẳng; \\(O\\) thuộc \\(AC\\) và \\(BD\\) nên cũng thuộc cả hai. Vì \\(S\\) khác \\(O\\), giao tuyến là \\(SO\\).",
    "hint": "Ngoài \\(S\\), tìm điểm chung trong mặt phẳng đáy.",
    "guide": {
      "formulas": [
        "A,B\\in(P)\\cap(Q),\\ A\\ne B\\ \\Longrightarrow\\ (P)\\cap(Q)=AB"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phải phân biệt. Tìm đủ hai điểm chung rồi nối chúng."
    }
  },
  "toan-11-4-7-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là tứ giác lồi; \\(O = AC \\cap BD\\). \\(M\\) nằm trong đoạn \\(SC\\). Gọi \\(K = AM \\cap SO\\). Giao điểm của \\(AM\\) với \\(\\left(SBD\\right)\\) là:",
    "options": [
      "\\(A\\)",
      "\\(O\\)",
      "\\(M\\)",
      "\\(K\\)"
    ],
    "explanation": "\\(AM\\) nằm trong \\(\\left(SAC\\right)\\), còn \\(\\left(SAC\\right) \\cap \\left(SBD\\right) = SO\\). Điểm \\(K\\) thuộc \\(AM\\) và \\(SO\\) nên thuộc \\(AM\\) và \\(\\left(SBD\\right) ; A\\) không thuộc \\(\\left(SBD\\right)\\) nên giao điểm là duy nhất.",
    "hint": "Chọn mặt phẳng phụ \\(\\left(SAC\\right)\\) chứa \\(AM\\).",
    "guide": {
      "formulas": [
        "A,B\\in(P)\\cap(Q),\\ A\\ne B\\ \\Longrightarrow\\ (P)\\cap(Q)=AB"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phải phân biệt. Tìm đủ hai điểm chung rồi nối chúng."
    }
  },
  "toan-11-4-8-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). \\(M , N , P\\) lần lượt là trung điểm \\(AB , AC , AD\\). Thiết diện của tứ diện bởi \\(\\left(MNP\\right)\\) là:",
    "options": [
      "Tam giác \\(BCD\\)",
      "Tứ giác \\(MBCP\\)",
      "Tam giác \\(MNP\\)",
      "Ngũ giác"
    ],
    "explanation": "\\(MNP\\) cắt \\(b a\\) cạnh xuất phát từ \\(A\\) tại \\(M , N , P\\). Ba đoạn \\(MN , NP , PM\\) lần lượt thuộc \\(b a\\) mặt kề \\(A\\) và tạo thành thiết diện tam giác \\(MNP\\).",
    "hint": "Xác định các giao điểm của mặt phẳng với các cạnh.",
    "guide": {
      "formulas": [
        "M\\text{ là trung điểm }AB,\\ N\\text{ là trung điểm }AC\\ \\Longrightarrow\\ MN\\parallel BC",
        "MN=\\frac12BC"
      ],
      "symbols": [
        [
          "A,B,C",
          "Ba đỉnh của một tam giác không suy biến."
        ],
        [
          "M,N",
          "Trung điểm hai cạnh cùng xuất phát từ \\(A\\)."
        ],
        [
          "AB,AC,BC,MN",
          "Độ dài các đoạn tương ứng khi xuất hiện trong đẳng thức số đo."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-9-v1": {
    "prompt": "Hai đường thẳng phân biệt không có điểm chung trong không gian có thể:",
    "options": [
      "Chỉ song song",
      "Song song hoặc chéo nhau",
      "Chỉ chéo nhau",
      "Cắt nhau"
    ],
    "explanation": "Không có điểm chung chưa đủ kết luận song song. Nếu đồng phẳng thì chúng song song; nếu không đồng phẳng thì chúng chéo nhau.",
    "hint": "Cần xét thêm điều kiện đồng phẳng.",
    "guide": {
      "formulas": [
        "a\\cap b=\\varnothing\\ \\Longrightarrow\\ a\\parallel b\\text{ hoặc }a,b\\text{ chéo nhau}"
      ],
      "symbols": [
        [
          "a,b",
          "Hai đường thẳng phân biệt."
        ],
        [
          "\\varnothing",
          "Tập rỗng, nghĩa là hai đường không có điểm chung."
        ]
      ],
      "condition": "Muốn kết luận song song, phải có thêm điều kiện đồng phẳng."
    }
  },
  "toan-11-4-10-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). Hai đường thẳng \\(AB\\) và \\(CD\\) có vị trí tương đối nào?",
    "options": [
      "Chéo nhau",
      "Song song",
      "Cắt nhau",
      "Trùng nhau"
    ],
    "explanation": "Nếu \\(AB\\) và \\(CD\\) đồng phẳng thì cả bốn đỉnh \\(A , B , C , D\\) đồng phẳng, trái định nghĩa tứ diện. Vì thế hai cạnh đối \\(AB\\) và \\(CD\\) chéo nhau.",
    "hint": "Sử dụng giả thiết bốn đỉnh không đồng phẳng.",
    "guide": {
      "formulas": [
        "a\\cap b=\\varnothing\\ \\Longrightarrow\\ a\\parallel b\\text{ hoặc }a,b\\text{ chéo nhau}"
      ],
      "symbols": [
        [
          "a,b",
          "Hai đường thẳng phân biệt."
        ],
        [
          "\\varnothing",
          "Tập rỗng, nghĩa là hai đường không có điểm chung."
        ]
      ],
      "condition": "Muốn kết luận song song, phải có thêm điều kiện đồng phẳng."
    }
  },
  "toan-11-4-11-v1": {
    "prompt": "Qua điểm \\(M\\) không thuộc đường thẳng \\(d\\), có bao nhiêu đường thẳng song song với \\(d\\)?",
    "options": [
      "Vô số",
      "Không có",
      "Đúng hai",
      "Đúng một"
    ],
    "explanation": "Trong không gian, qua một điểm nằm ngoài một đường thẳng có duy nhất một đường thẳng song song với đường thẳng đó.",
    "hint": "Dùng tiên đề về đường thẳng song song qua một điểm.",
    "guide": {
      "formulas": [
        "M\\notin d\\ \\Longrightarrow\\ \\exists!a:\\ M\\in a,\\ a\\parallel d"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-12-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). \\(M , N\\) là trung điểm \\(AB , AC ; BC = 10\\) cm. Tính \\(MN\\).",
    "options": [
      "\\(20\\) cm",
      "\\(10\\) cm",
      "\\(5\\) cm",
      "\\(15\\) cm"
    ],
    "explanation": "Trong tam giác \\(ABC , MN\\) là đường trung bình nên \\(MN = \\frac{BC}{2} = 5\\) cm và \\(MN \\parallel BC\\).",
    "hint": "Chỉ cần xét tam giác \\(ABC\\).",
    "guide": {
      "formulas": [
        "M\\text{ là trung điểm }AB,\\ N\\text{ là trung điểm }AC\\ \\Longrightarrow\\ MN\\parallel BC",
        "MN=\\frac12BC"
      ],
      "symbols": [
        [
          "A,B,C",
          "Ba đỉnh của một tam giác không suy biến."
        ],
        [
          "M,N",
          "Trung điểm hai cạnh cùng xuất phát từ \\(A\\)."
        ],
        [
          "AB,AC,BC,MN",
          "Độ dài các đoạn tương ứng khi xuất hiện trong đẳng thức số đo."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Chọn tam giác cần xét",
        "content": "Hai điểm M, N là trung điểm hai cạnh AB, AC của tam giác ABC."
      },
      {
        "title": "Áp dụng đường trung bình",
        "content": "\\[MN\\parallel BC,\\quad MN=\\frac12BC\\]"
      },
      {
        "title": "Thay độ dài",
        "content": "\\[MN=\\frac{10}2=5\\ \\text{cm}\\]"
      }
    ]
  },
  "toan-11-4-13-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). \\(G , H\\) lần lượt là trọng tâm các tam giác \\(ABC , ABD ; CD = 15\\) cm. Tính \\(GH\\).",
    "options": [
      "\\(10\\) cm",
      "\\(5\\) cm",
      "\\(7{,}5\\) cm",
      "\\(15\\) cm"
    ],
    "explanation": "Gọi \\(I\\) là trung điểm \\(AB\\). Trên các trung tuyến \\(CI\\) và \\(DI\\) có \\(\\frac{IG}{IC} = \\frac{IH}{ID} = \\frac{1}{3}\\). Trong tam giác \\(ICD , GH \\parallel CD\\) và \\(\\frac{GH}{CD} = \\frac{1}{3}\\), nên \\(GH = 5\\) cm.",
    "hint": "Nối trung điểm \\(AB\\) với \\(C\\) và \\(D\\).",
    "guide": {
      "formulas": [
        "\\frac{IG}{IC}=\\frac{IH}{ID}=\\frac13\\ \\Longrightarrow\\ GH\\parallel CD,\\quad GH=\\frac13CD"
      ],
      "symbols": [
        [
          "I",
          "Trung điểm cạnh chung của hai tam giác."
        ],
        [
          "G,H",
          "Hai trọng tâm."
        ],
        [
          "C,D",
          "Hai đỉnh đối diện cạnh chung."
        ]
      ],
      "condition": "Lấy các tỉ số tính từ \\(I\\) trên hai trung tuyến, không lấy từ đỉnh đối diện."
    },
    "solutionSteps": [
      {
        "title": "Dùng tính chất trọng tâm",
        "content": "Gọi I là trung điểm AB. Hai trọng tâm nằm trên các trung tuyến CI và DI, nên \\[\\frac{IG}{IC}=\\frac{IH}{ID}=\\frac13\\]"
      },
      {
        "title": "Áp dụng Thalès trong tam giác ICD",
        "content": "\\[GH\\parallel CD,\\quad\\frac{GH}{CD}=\\frac{IG}{IC}=\\frac13\\]"
      },
      {
        "title": "Thay độ dài",
        "content": "\\[GH=\\frac13\\cdot15=5\\ \\text{cm}\\]"
      }
    ]
  },
  "toan-11-4-14-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là hình bình hành. Giao tuyến của \\(\\left(SAB\\right)\\) và \\(\\left(SCD\\right)\\) là:",
    "options": [
      "Đường thẳng qua \\(S\\), song song \\(AB\\)",
      "Đường thẳng \\(SO\\) với \\(O = AC \\cap BD\\)",
      "Đường thẳng \\(AC\\)",
      "Đường thẳng qua \\(S\\), song song \\(AD\\)"
    ],
    "explanation": "Hai mặt phẳng chứa hai đường thẳng song song \\(AB\\) và \\(CD\\), đồng thời cùng đi qua \\(S\\). Giao tuyến qua \\(S\\) và song song \\(AB , CD\\).",
    "hint": "Áp dụng tính chất giao tuyến của hai mặt phẳng chứa hai đường thẳng song song.",
    "guide": {
      "formulas": [
        "a\\subset(P),\\ b\\subset(Q),\\ a\\parallel b,\\ d=(P)\\cap(Q)",
        "d\\parallel a\\quad\\text{hoặc }d=a"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phân biệt, cắt nhau. Dùng thêm điểm chung để xác định đường \\(d\\)."
    }
  },
  "toan-11-4-15-v1": {
    "prompt": "Ba mặt phẳng phân biệt đôi một cắt nhau theo \\(b a\\) giao tuyến phân biệt. Ba giao tuyến đó:",
    "options": [
      "Luôn đôi một chéo nhau",
      "Luôn đồng quy",
      "Luôn đôi một song song",
      "Đồng quy hoặc đôi một song song"
    ],
    "explanation": "Định lí \\(b a\\) giao tuyến cho biết: nếu \\(b a\\) giao tuyến phân biệt thì chúng đồng quy hoặc đôi một song song. Không thể chỉ giữ một trong hai khả năng.",
    "hint": "Nhớ đầy đủ hai trường hợp của định lí.",
    "guide": {
      "formulas": [
        "a=(P)\\cap(Q),\\ b=(Q)\\cap(R),\\ c=(R)\\cap(P)",
        "a,b,c\\text{ đồng quy hoặc đôi một song song}"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Ba mặt phẳng phân biệt; \\(b a\\) giao tuyến phải phân biệt."
    }
  },
  "toan-11-4-16-v1": {
    "prompt": "Trong tứ diện \\(ABCD , M , N , P , Q\\) lần lượt là trung điểm \\(AB , CD , AC , BD\\). Hai đoạn \\(MN\\) và \\(PQ\\):",
    "options": [
      "Chéo nhau",
      "Song song và không trùng nhau",
      "Cắt nhau tại trung điểm của mỗi đoạn",
      "Cùng nằm trên \\(AB\\)"
    ],
    "explanation": "Trung điểm của \\(MN\\) và trung điểm của \\(PQ\\) đều có vị trí bằng trung bình của bốn đỉnh \\(A , B , C , D\\). Hai đoạn nối trung điểm các cặp cạnh đối đồng quy tại trọng tâm tứ diện và chia đôi nhau.",
    "hint": "Dùng tính chất các đoạn nối trung điểm hai cạnh đối.",
    "guide": {
      "formulas": [
        "X\\text{ là trung điểm }MN\\text{ và }PQ"
      ],
      "symbols": [
        [
          "M,N,P,Q",
          "Trung điểm bốn cạnh thuộc hai cặp cạnh đối của tứ diện."
        ],
        [
          "X",
          "Trọng tâm tứ diện: giao điểm các đoạn nối trung điểm hai cạnh đối."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-17-v1": {
    "prompt": "Đường thẳng \\(d\\) song song với mặt phẳng \\(\\left(P\\right)\\) khi và chỉ khi:",
    "options": [
      "\\(d\\) có đúng một điểm chung với \\(\\left(P\\right)\\)",
      "\\(d\\) và \\(\\left(P\\right)\\) không có điểm chung",
      "\\(d\\) có hai điểm phân biệt thuộc \\(\\left(P\\right)\\)",
      "\\(d\\) nằm trong \\(\\left(P\\right)\\)"
    ],
    "explanation": "Theo định nghĩa, \\(d \\parallel \\left(P\\right)\\) khi đường thẳng và mặt phẳng không có điểm chung. Nằm trong mặt phẳng là một vị trí khác.",
    "hint": "Phân biệt song song với nằm trong.",
    "guide": {
      "formulas": [
        "d\\parallel(P)\\ \\Longleftrightarrow\\ d\\cap(P)=\\varnothing"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Đường nằm trong \\(\\left(P\\right)\\) là vị trí khác, không gọi là song song với \\(\\left(P\\right)\\)."
    }
  },
  "toan-11-4-18-v1": {
    "prompt": "Cho \\(b\\) nằm trong \\(\\left(P\\right) , a \\parallel b\\) và \\(a\\) không nằm trong \\(\\left(P\\right)\\). Kết luận nào đúng?",
    "options": [
      "\\(a \\parallel \\left(P\\right)\\)",
      "\\(a\\) nằm trong \\(\\left(P\\right)\\)",
      "\\(a\\) cắt \\(\\left(P\\right)\\) tại một điểm",
      "\\(a\\) vuông góc \\(\\left(P\\right)\\)"
    ],
    "explanation": "Một đường thẳng không nằm trong mặt phẳng và song song với một đường thẳng nằm trong mặt phẳng thì song song với mặt phẳng ấy.",
    "hint": "Kiểm tra đủ cả điều kiện \\(a\\) không nằm trong \\(\\left(P\\right)\\).",
    "guide": {
      "formulas": [
        "a\\not\\subset(P),\\quad a\\parallel b,\\quad b\\subset(P)\\ \\Longrightarrow\\ a\\parallel(P)"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Phải kiểm tra điều kiện \\(a\\) không nằm trong \\(\\left(P\\right)\\); nếu bỏ điều kiện này thì kết luận chưa đủ."
    }
  },
  "toan-11-4-19-v1": {
    "prompt": "Biết \\(a \\parallel b\\) và \\(b\\) nằm trong \\(\\left(P\\right)\\), nhưng chưa biết \\(a\\) có nằm trong \\(\\left(P\\right)\\) hay không. Kết luận chính xác là:",
    "options": [
      "\\(a\\) cắt \\(\\left(P\\right)\\) tại đúng một điểm",
      "Chắc chắn \\(a \\parallel \\left(P\\right)\\)",
      "Chắc chắn \\(a\\) nằm trong \\(\\left(P\\right)\\)",
      "\\(a\\) nằm trong \\(\\left(P\\right)\\) hoặc \\(a \\parallel \\left(P\\right)\\)"
    ],
    "explanation": "Nếu \\(a\\) có điểm chung \\(M\\) với \\(\\left(P\\right)\\), đường thẳng qua \\(M\\) song song \\(b\\) thuộc \\(\\left(P\\right)\\), nên \\(a\\) nằm trong \\(\\left(P\\right)\\). Nếu không có điểm chung thì \\(a \\parallel \\left(P\\right)\\).",
    "hint": "Đề chưa có điều kiện loại trừ \\(a\\) nằm trong mặt phẳng.",
    "guide": {
      "formulas": [
        "a\\not\\subset(P),\\quad a\\parallel b,\\quad b\\subset(P)\\ \\Longrightarrow\\ a\\parallel(P)"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Phải kiểm tra điều kiện \\(a\\) không nằm trong \\(\\left(P\\right)\\); nếu bỏ điều kiện này thì kết luận chưa đủ."
    }
  },
  "toan-11-4-20-v1": {
    "prompt": "Cho tứ diện \\(SABC\\). \\(M , N\\) lần lượt là trung điểm \\(SA , SB\\). Đường thẳng \\(MN\\) song song với mặt phẳng nào?",
    "options": [
      "\\(\\left(SAC\\right)\\)",
      "\\(\\left(SAB\\right)\\)",
      "\\(\\left(ABC\\right)\\)",
      "\\(\\left(SBC\\right)\\)"
    ],
    "explanation": "\\(MN \\parallel AB\\), với \\(AB\\) thuộc \\(\\left(ABC\\right)\\), còn \\(MN\\) không nằm trong \\(\\left(ABC\\right)\\), nên \\(MN \\parallel \\left(ABC\\right)\\). \\(MN\\) nằm trong \\(\\left(SAB\\right)\\) và cắt hai mặt phẳng còn lại lần lượt tại \\(M , N\\).",
    "hint": "Xét đường trung bình trong tam giác \\(SAB\\).",
    "guide": {
      "formulas": [
        "M\\text{ là trung điểm }AB,\\ N\\text{ là trung điểm }AC\\ \\Longrightarrow\\ MN\\parallel BC",
        "MN=\\frac12BC"
      ],
      "symbols": [
        [
          "A,B,C",
          "Ba đỉnh của một tam giác không suy biến."
        ],
        [
          "M,N",
          "Trung điểm hai cạnh cùng xuất phát từ \\(A\\)."
        ],
        [
          "AB,AC,BC,MN",
          "Độ dài các đoạn tương ứng khi xuất hiện trong đẳng thức số đo."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-21-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\). \\(M , N\\) lần lượt là trung điểm \\(AB , BC\\). Khẳng định nào đúng?",
    "options": [
      "\\(MN \\parallel \\left(SAB\\right)\\)",
      "\\(MN \\parallel \\left(SAC\\right)\\)",
      "\\(MN \\parallel \\left(SBC\\right)\\)",
      "\\(MN\\) nằm trong \\(\\left(SAC\\right)\\)"
    ],
    "explanation": "Trong tam giác \\(ABC , MN \\parallel AC\\). Hai mặt phẳng đáy và \\(\\left(SAC\\right)\\) cắt nhau theo \\(AC ; MN\\) không trùng \\(AC\\) nên không nằm trong \\(\\left(SAC\\right)\\), từ đó \\(MN \\parallel \\left(SAC\\right)\\).",
    "hint": "Tìm một đường trong \\(\\left(SAC\\right)\\) song song \\(MN\\).",
    "guide": {
      "formulas": [
        "M\\text{ là trung điểm }AB,\\ N\\text{ là trung điểm }AC\\ \\Longrightarrow\\ MN\\parallel BC",
        "MN=\\frac12BC"
      ],
      "symbols": [
        [
          "A,B,C",
          "Ba đỉnh của một tam giác không suy biến."
        ],
        [
          "M,N",
          "Trung điểm hai cạnh cùng xuất phát từ \\(A\\)."
        ],
        [
          "AB,AC,BC,MN",
          "Độ dài các đoạn tương ứng khi xuất hiện trong đẳng thức số đo."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-22-v1": {
    "prompt": "Cho \\(a \\parallel \\left(P\\right)\\). Mặt phẳng \\(\\left(Q\\right)\\) chứa \\(a\\) và cắt \\(\\left(P\\right)\\) theo \\(b\\). Khi đó:",
    "options": [
      "\\(a \\parallel b\\)",
      "\\(a\\) cắt \\(b\\)",
      "\\(a\\) trùng \\(b\\)",
      "\\(a\\) và \\(b\\) chéo nhau"
    ],
    "explanation": "\\(a\\) và \\(b\\) cùng thuộc \\(\\left(Q\\right)\\). Nếu chúng cắt nhau thì \\(a\\) có điểm chung với \\(\\left(P\\right)\\), mâu thuẫn. Chúng cũng không trùng nhau, nên \\(a \\parallel b\\).",
    "hint": "Hai đường cùng nằm trong \\(\\left(Q\\right)\\); dùng giả thiết không có điểm chung.",
    "guide": {
      "formulas": [
        "a\\parallel(P),\\quad a\\subset(Q),\\quad(P)\\cap(Q)=b\\ \\Longrightarrow\\ a\\parallel b"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-23-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\). \\(G , H\\) lần lượt là trọng tâm tam giác \\(SAB\\) và \\(SBC\\). Khẳng định nào đúng?",
    "options": [
      "\\(GH\\) đi qua \\(S\\)",
      "\\(GH \\parallel \\left(SAB\\right)\\)",
      "\\(GH \\parallel \\left(SBC\\right)\\)",
      "\\(GH \\parallel \\left(SAC\\right)\\)"
    ],
    "explanation": "Hai tam giác có chung cạnh \\(SB\\) nên \\(GH \\parallel AC\\). \\(G\\) không thuộc \\(\\left(SAC\\right)\\), vì \\(G\\) nằm trong tam giác \\(SAB\\) và không thuộc \\(SA\\). Do đó \\(GH \\parallel \\left(SAC\\right)\\).",
    "hint": "Nối trung điểm \\(SB\\) với \\(A\\) và \\(C\\).",
    "guide": {
      "formulas": [
        "\\frac{IG}{IC}=\\frac{IH}{ID}=\\frac13\\ \\Longrightarrow\\ GH\\parallel CD,\\quad GH=\\frac13CD"
      ],
      "symbols": [
        [
          "I",
          "Trung điểm cạnh chung của hai tam giác."
        ],
        [
          "G,H",
          "Hai trọng tâm."
        ],
        [
          "C,D",
          "Hai đỉnh đối diện cạnh chung."
        ]
      ],
      "condition": "Lấy các tỉ số tính từ \\(I\\) trên hai trung tuyến, không lấy từ đỉnh đối diện."
    }
  },
  "toan-11-4-24-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). \\(M\\) nằm trong đoạn \\(AB\\). Mặt phẳng \\(\\left(P\\right)\\) qua \\(M\\) và song song với cả \\(AC , BD\\). Thiết diện là hình gì?",
    "options": [
      "Ngũ giác",
      "Tam giác",
      "Hình bình hành",
      "Hình thang chỉ có một cặp cạnh đối song song"
    ],
    "explanation": "Qua \\(M\\) kẻ \\(MN \\parallel AC\\) với \\(N\\) thuộc \\(BC , MQ \\parallel BD\\) với \\(Q\\) thuộc \\(AD\\). Qua \\(N\\) kẻ \\(NP \\parallel BD\\) với \\(P\\) thuộc \\(CD\\); khi đó \\(PQ \\parallel AC\\). Thiết diện \\(MNPQ\\) có hai cặp cạnh đối song song nên là hình bình hành.",
    "hint": "Dựng giao tuyến trên từng mặt của tứ diện.",
    "guide": {
      "formulas": [
        "d\\parallel(P),\\ d\\subset(Q),\\ (P)\\cap(Q)=\\ell\\ \\Longrightarrow\\ \\ell\\parallel d"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ],
        [
          "\\ell",
          "Giao tuyến của mặt cắt với một mặt của tứ diện."
        ]
      ],
      "condition": "Dựng lần lượt các giao tuyến theo hai phương \\(AC\\) và \\(BD\\)."
    }
  },
  "toan-11-4-25-v1": {
    "prompt": "Trong \\(\\left(P\\right)\\) có hai đường thẳng \\(a , b\\) cắt nhau và cùng song song với \\(\\left(Q\\right)\\). Kết luận nào đúng?",
    "options": [
      "\\(\\left(P\\right)\\) trùng \\(\\left(Q\\right)\\)",
      "\\(\\left(P\\right) \\parallel \\left(Q\\right)\\)",
      "\\(\\left(P\\right)\\) cắt \\(\\left(Q\\right)\\) theo \\(a\\)",
      "Chưa thể kết luận"
    ],
    "explanation": "Nếu một mặt phẳng chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia thì hai mặt phẳng song song.",
    "hint": "Hai đường thẳng trong \\(\\left(P\\right)\\) phải cắt nhau.",
    "guide": {
      "formulas": [
        "a,b\\subset(P),\\ a\\cap b=\\{M\\},\\ a\\parallel(Q),\\ b\\parallel(Q)\\ \\Longrightarrow\\ (P)\\parallel(Q)"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai đường \\(a , b\\) trong \\(\\left(P\\right)\\) phải cắt nhau."
    }
  },
  "toan-11-4-26-v1": {
    "prompt": "Qua điểm \\(M\\) nằm ngoài mặt phẳng \\(\\left(P\\right)\\), có bao nhiêu mặt phẳng song song với \\(\\left(P\\right)\\)?",
    "options": [
      "Đúng một",
      "Không có",
      "Đúng hai",
      "Vô số"
    ],
    "explanation": "Qua một điểm nằm ngoài một mặt phẳng có duy nhất một mặt phẳng song song với mặt phẳng đó.",
    "hint": "Dùng tính chất tồn tại và duy nhất.",
    "guide": {
      "formulas": [
        "M\\notin(P)\\ \\Longrightarrow\\ \\exists!(Q):M\\in(Q),\\ (Q)\\parallel(P)"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-27-v1": {
    "prompt": "Hai mặt phẳng \\(\\left(P\\right) , \\left(Q\\right)\\) song song. Mặt phẳng \\(\\left(R\\right)\\) cắt chúng lần lượt theo \\(a\\) và \\(b\\). Khi đó:",
    "options": [
      "\\(a\\) và \\(b\\) chéo nhau",
      "\\(a\\) trùng \\(b\\)",
      "\\(a\\) cắt \\(b\\)",
      "\\(a \\parallel b\\)"
    ],
    "explanation": "\\(a , b\\) cùng nằm trong \\(\\left(R\\right)\\) và không có điểm chung, vì \\(\\left(P\\right) , \\left(Q\\right)\\) không có điểm chung. Vậy \\(a \\parallel b\\).",
    "hint": "Xét đồng phẳng và số điểm chung của \\(a , b\\).",
    "guide": {
      "formulas": [
        "(P)\\parallel(Q),\\quad a=(R)\\cap(P),\\quad b=(R)\\cap(Q)\\ \\Longrightarrow\\ a\\parallel b"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-28-v1": {
    "prompt": "Ba mặt phẳng đôi một song song cắt hai cát tuyến lần lượt tại \\(A , B , C\\) và \\(A^{\\prime} , B^{\\prime} , C^{\\prime}\\) theo thứ tự. Biết \\(AB = 2 , BC = 3 , A^{\\prime} B^{\\prime} = 4\\). Tính \\(B^{\\prime} C^{\\prime}\\).",
    "options": [
      "\\(8\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(3\\)"
    ],
    "explanation": "Theo Thalès trong không gian, \\(\\frac{AB}{BC} = \\frac{A^{\\prime} B^{\\prime}}{B^{\\prime}} C^{\\prime}\\). Suy ra \\(B^{\\prime} C^{\\prime} = \\frac{3 \\times 4}{2} = 6\\).",
    "hint": "Lập tỉ lệ giữa các đoạn tương ứng.",
    "guide": {
      "formulas": [
        "\\frac{AB}{BC}=\\frac{A'B'}{B'C'}"
      ],
      "symbols": [
        [
          "A,B,C",
          "Giao điểm của cát tuyến thứ nhất với \\(b a\\) mặt phẳng đôi một song song, theo thứ tự."
        ],
        [
          "A',B',C'",
          "Các giao điểm tương ứng trên cát tuyến thứ hai."
        ]
      ],
      "condition": "Ghép đúng các đoạn tương ứng theo định lí Thalès trong không gian."
    },
    "solutionSteps": [
      {
        "title": "Lập tỉ lệ Thalès",
        "content": "Ba mặt phẳng song song tạo các đoạn tương ứng trên hai cát tuyến: \\[\\frac{AB}{BC}=\\frac{A'B'}{B'C'}\\]"
      },
      {
        "title": "Thay số và nhân chéo",
        "content": "\\[\\frac23=\\frac4{B'C'}\\Rightarrow2B'C'=3\\cdot4=12\\]"
      },
      {
        "title": "Chia và kết luận",
        "content": "\\[B'C'=\\frac{12}2=6\\]"
      }
    ]
  },
  "toan-11-4-29-v1": {
    "prompt": "Mệnh đề nào đúng với mọi hình lăng trụ?",
    "options": [
      "Mọi mặt bên đều là hình chữ nhật",
      "Các cạnh bên song song và bằng nhau",
      "Các cạnh bên luôn vuông góc hai đáy",
      "Hai đáy nằm trên hai mặt phẳng cắt nhau"
    ],
    "explanation": "Mọi lăng trụ có các cạnh bên song song, bằng nhau và hai đáy song song. Mặt bên nói chung là hình bình hành; chỉ lăng trụ đứng mới có mọi mặt bên là hình chữ nhật.",
    "hint": "Phân biệt lăng trụ bất kì với lăng trụ đứng.",
    "guide": {
      "formulas": [
        "AA'\\parallel BB'\\parallel CC',\\quad AA'=BB'=CC'"
      ],
      "symbols": [
        [
          "AA',BB',CC'",
          "Các cạnh bên của lăng trụ."
        ]
      ],
      "condition": "Mặt bên nói chung là hình bình hành; chỉ lăng trụ đứng mới có mặt bên là hình chữ nhật."
    }
  },
  "toan-11-4-30-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là hình bình hành tâm \\(O\\). \\(M , N\\) là trung điểm \\(SA , SD\\). Mặt phẳng \\(\\left(OMN\\right)\\) song song với:",
    "options": [
      "\\(\\left(SBC\\right)\\)",
      "\\(\\left(SAD\\right)\\)",
      "\\(\\left(SAB\\right)\\)",
      "\\(\\left(ABCD\\right)\\)"
    ],
    "explanation": "Trong tam giác \\(SAC , OM \\parallel SC\\); trong tam giác \\(SBD , ON \\parallel SB\\). Hai đường \\(OM , ON\\) cắt nhau và lần lượt song song hai đường cắt nhau \\(SC , SB\\), nên \\(\\left(OMN\\right) \\parallel \\left(SBC\\right)\\). Các mặt phẳng còn lại đều có điểm chung với \\(\\left(OMN\\right)\\).",
    "hint": "\\(O\\) là trung điểm của cả \\(AC\\) và \\(BD\\).",
    "guide": {
      "formulas": [
        "a,b\\subset(P),\\ a\\cap b=\\{M\\},\\ a\\parallel(Q),\\ b\\parallel(Q)\\ \\Longrightarrow\\ (P)\\parallel(Q)"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai đường \\(a , b\\) trong \\(\\left(P\\right)\\) phải cắt nhau."
    }
  },
  "toan-11-4-31-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là hình bình hành. \\(M\\) là trung điểm \\(SA\\). Mặt phẳng qua \\(M\\) song song \\(\\left(ABCD\\right)\\) cắt \\(SB , SC , SD\\) tại \\(N , P , Q\\). Khi đó \\(MNPQ\\) là:",
    "options": [
      "Tam giác",
      "Hình chữ nhật trong mọi trường hợp",
      "Hình thoi trong mọi trường hợp",
      "Hình bình hành"
    ],
    "explanation": "Theo tính chất mặt phẳng song song, \\(MN \\parallel AB , NP \\parallel BC , PQ \\parallel CD , QM \\parallel DA\\). Vì đáy là hình bình hành nên \\(MNPQ\\) cũng là hình bình hành, không nhất thiết là hình chữ nhật hay hình thoi.",
    "hint": "Các cạnh tương ứng của thiết diện và đáy song song.",
    "guide": {
      "formulas": [
        "(P)\\parallel(Q),\\quad a=(R)\\cap(P),\\quad b=(R)\\cap(Q)\\ \\Longrightarrow\\ a\\parallel b"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": ""
    }
  },
  "toan-11-4-32-v1": {
    "prompt": "Một hình chóp có diện tích đáy bằng \\(36\\) cm². Mặt phẳng song song đáy đi qua trung điểm một cạnh bên. Diện tích thiết diện là:",
    "options": [
      "\\(12\\) cm²",
      "\\(18\\) cm²",
      "\\(9\\) cm²",
      "\\(24\\) cm²"
    ],
    "explanation": "Thiết diện đồng dạng với đáy theo tỉ số \\(\\frac{1}{2}\\) tính từ đỉnh chóp. Tỉ số diện tích bằng \\(\\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}\\), nên diện tích là \\(\\frac{36}{4} = 9\\) cm².",
    "hint": "Tỉ số diện tích là bình phương tỉ số độ dài.",
    "guide": {
      "formulas": [
        "k=\\frac{SM}{SA},\\qquad\\frac{S_{\\text{cắt}}}{S_{\\text{đáy}}}=k^2"
      ],
      "symbols": [
        [
          "S",
          "Đỉnh hình chóp trong các đoạn \\(SM , SA\\)."
        ],
        [
          "M,A",
          "\\(M\\) trên cạnh bên \\(SA\\)."
        ],
        [
          "k",
          "Tỉ số độ dài tính từ đỉnh đến thiết diện và đến đáy."
        ],
        [
          "S_{\\text{cắt}},S_{\\text{đáy}}",
          "Diện tích thiết diện và diện tích đáy."
        ]
      ],
      "condition": "Thiết diện phải song song đáy."
    }
  },
  "toan-11-4-33-v1": {
    "prompt": "Chiếu song song lên mặt phẳng \\(\\left(P\\right)\\) theo phương \\(\\Delta\\), trong đó \\(\\Delta\\) cắt \\(\\left(P\\right)\\). Với \\(M\\) ngoài \\(\\left(P\\right)\\), ảnh \\(M^{\\prime}\\) được xác định bằng cách:",
    "options": [
      "Kẻ đường qua \\(M\\) vuông góc \\(\\left(P\\right)\\) trong mọi trường hợp",
      "Kẻ đường qua \\(M\\) song song hoặc trùng \\(\\Delta\\) rồi lấy giao với \\(\\left(P\\right)\\)",
      "Lấy điểm bất kì trên \\(\\left(P\\right)\\)",
      "Lấy trung điểm của \\(M\\) và một điểm bất kì trên \\(\\left(P\\right)\\)"
    ],
    "explanation": "Đường chiếu qua \\(M\\) có phương \\(\\Delta\\); giao điểm duy nhất của nó với \\(\\left(P\\right)\\) là \\(M^{\\prime}\\). Phép chiếu song song không bắt buộc là phép chiếu vuông góc.",
    "hint": "Đường nối điểm và ảnh phải có phương chiếu.",
    "guide": {
      "formulas": [
        "M\\in d_M,\\quad M'=d_M\\cap(P)",
        "d_M\\text{ có phương }\\Delta"
      ],
      "symbols": [
        [
          "M,M'",
          "Điểm gốc và ảnh của điểm qua phép chiếu."
        ],
        [
          "(P)",
          "Mặt phẳng chiếu."
        ],
        [
          "\\Delta",
          "Phương chiếu, phải cắt mặt phẳng chiếu."
        ],
        [
          "d_M",
          "Đường qua \\(M\\) theo phương chiếu; có thể song song hoặc trùng \\(\\Delta\\)."
        ]
      ],
      "condition": "Nếu \\(M\\) thuộc mặt phẳng chiếu thì \\(M^{\\prime} = M\\)."
    }
  },
  "toan-11-4-34-v1": {
    "prompt": "Một đường thẳng \\(d\\) song song với phương chiếu \\(\\Delta\\). Hình chiếu song song của \\(d\\) lên mặt phẳng chiếu là:",
    "options": [
      "Một điểm",
      "Một đường thẳng",
      "Một đoạn thẳng có độ dài dương",
      "Không tồn tại"
    ],
    "explanation": "Mọi điểm trên \\(d\\) có cùng đường chiếu \\(d\\) nên cùng ảnh tại giao điểm \\(d\\) với mặt phẳng chiếu. Ảnh của cả đường thẳng là một điểm.",
    "hint": "Xét các đường chiếu qua những điểm trên \\(d\\).",
    "guide": {
      "formulas": [
        "M\\in d_M,\\quad M'=d_M\\cap(P)",
        "d_M\\text{ có phương }\\Delta"
      ],
      "symbols": [
        [
          "M,M'",
          "Điểm gốc và ảnh của điểm qua phép chiếu."
        ],
        [
          "(P)",
          "Mặt phẳng chiếu."
        ],
        [
          "\\Delta",
          "Phương chiếu, phải cắt mặt phẳng chiếu."
        ],
        [
          "d_M",
          "Đường qua \\(M\\) theo phương chiếu; có thể song song hoặc trùng \\(\\Delta\\)."
        ]
      ],
      "condition": "Nếu \\(M\\) thuộc mặt phẳng chiếu thì \\(M^{\\prime} = M\\)."
    }
  },
  "toan-11-4-35-v1": {
    "prompt": "\\(M\\) nằm trong đoạn \\(AB\\) và \\(\\frac{AM}{MB} = 2\\). Qua phép chiếu song song, \\(A , B\\) có hai ảnh phân biệt \\(A^{\\prime} , B^{\\prime}\\). Với \\(M^{\\prime}\\) là ảnh của \\(M\\), ta có:",
    "options": [
      "Không xác định được tỉ số",
      "\\(\\frac{A^{\\prime} M^{\\prime}}{M^{\\prime}} B^{\\prime} = \\frac{1}{2}\\)",
      "\\(A^{\\prime} M^{\\prime} = M^{\\prime} B^{\\prime}\\)",
      "\\(\\frac{A^{\\prime} M^{\\prime}}{M^{\\prime}} B^{\\prime} = 2\\)"
    ],
    "explanation": "Phép chiếu song song bảo toàn tỉ số độ dài hai đoạn cùng nằm trên một đường thẳng không song song phương chiếu. Do \\(A^{\\prime}\\) khác \\(B^{\\prime}\\), đoạn \\(AB\\) không bị thu về một điểm.",
    "hint": "Hai ảnh đầu mút phân biệt loại trừ trường hợp suy biến.",
    "guide": {
      "formulas": [
        "\\frac{A'M'}{M'B'}=\\frac{AM}{MB}"
      ],
      "symbols": [
        [
          "A,B,M",
          "Ba điểm thẳng hàng, \\(M\\) ở giữa \\(A\\) và \\(B\\)."
        ],
        [
          "A',B',M'",
          "Các ảnh tương ứng qua cùng một phép chiếu song song."
        ]
      ],
      "condition": "\\(A^{\\prime}\\) và \\(B^{\\prime}\\) phải phân biệt để tỉ số ảnh xác định."
    }
  },
  "toan-11-4-36-v1": {
    "prompt": "Tính chất nào không được bảo toàn trong mọi phép chiếu song song có ảnh không suy biến?",
    "options": [
      "Tỉ số hai đoạn cùng nằm trên một đường thẳng",
      "Tính thẳng hàng",
      "Số đo góc",
      "Trung điểm của một đoạn thẳng"
    ],
    "explanation": "Phép chiếu song song có thể làm thay đổi góc, nên góc vuông có thể được biểu diễn bởi góc không vuông. Tính thẳng hàng, trung điểm và tỉ số trên cùng một đường thẳng được bảo toàn khi ảnh không suy biến.",
    "hint": "Phép chiếu song song có thể biến hình chữ nhật thành hình bình hành.",
    "guide": {
      "formulas": [
        "AB\\parallel CD\\ \\Longrightarrow\\ A'B'\\parallel C'D'\\text{ hoặc trùng nhau}"
      ],
      "symbols": [
        [
          "A,B,C,D",
          "Các điểm của hình gốc."
        ],
        [
          "A',B',C',D'",
          "Các ảnh tương ứng."
        ]
      ],
      "condition": "Giả sử các đoạn không bị thu về điểm. Phép chiếu không bảo toàn góc hay độ dài theo hai phương bất kì."
    }
  },
  "toan-11-4-37-v1": {
    "prompt": "Cho hình hộp \\(ABCD . A^{\\prime} B^{\\prime} C^{\\prime} D^{\\prime}\\). Chiếu song song lên \\(\\left(ABCD\\right)\\) theo phương \\(AA^{\\prime}\\). Ảnh của tam giác \\(A^{\\prime} B^{\\prime} C^{\\prime}\\) là:",
    "options": [
      "Tam giác \\(ABD\\)",
      "Tam giác \\(ABC\\)",
      "Tam giác \\(ACD\\)",
      "Tam giác \\(BCD\\)"
    ],
    "explanation": "Các cạnh bên \\(AA^{\\prime} , BB^{\\prime} , CC^{\\prime}\\) song song nên \\(A^{\\prime} , B^{\\prime} , C^{\\prime}\\) lần lượt có ảnh là \\(A , B , C\\). Do đó ảnh của tam giác là tam giác \\(ABC\\).",
    "hint": "Tìm ảnh của từng đỉnh theo phương cạnh bên.",
    "guide": {
      "formulas": [
        "M\\in d_M,\\quad M'=d_M\\cap(P)",
        "d_M\\text{ có phương }\\Delta"
      ],
      "symbols": [
        [
          "M,M'",
          "Điểm gốc và ảnh của điểm qua phép chiếu."
        ],
        [
          "(P)",
          "Mặt phẳng chiếu."
        ],
        [
          "\\Delta",
          "Phương chiếu, phải cắt mặt phẳng chiếu."
        ],
        [
          "d_M",
          "Đường qua \\(M\\) theo phương chiếu; có thể song song hoặc trùng \\(\\Delta\\)."
        ]
      ],
      "condition": "Nếu \\(M\\) thuộc mặt phẳng chiếu thì \\(M^{\\prime} = M\\)."
    }
  },
  "toan-11-4-38-v1": {
    "prompt": "Cho lăng trụ \\(ABC . A^{\\prime} B^{\\prime} C^{\\prime}\\). \\(O\\) là tâm hình bình hành \\(BCC^{\\prime} B^{\\prime}\\). Chiếu song song theo phương \\(AA^{\\prime}\\) lên \\(\\left(A^{\\prime} B^{\\prime} C^{\\prime}\\right)\\), ảnh của \\(O\\) là:",
    "options": [
      "Trung điểm \\(B^{\\prime} C^{\\prime}\\)",
      "\\(B^{\\prime}\\)",
      "\\(C^{\\prime}\\)",
      "Trung điểm \\(A^{\\prime} B^{\\prime}\\)"
    ],
    "explanation": "\\(O\\) là trung điểm đường chéo \\(BC^{\\prime}\\). Phép chiếu biến \\(B\\) thành \\(B^{\\prime}\\) và giữ nguyên \\(C^{\\prime}\\), nên biến \\(O\\) thành trung điểm \\(B^{\\prime} C^{\\prime}\\).",
    "hint": "Biểu diễn tâm hình bình hành thành trung điểm một đường chéo.",
    "guide": {
      "formulas": [
        "M\\in d_M,\\quad M'=d_M\\cap(P)",
        "d_M\\text{ có phương }\\Delta"
      ],
      "symbols": [
        [
          "M,M'",
          "Điểm gốc và ảnh của điểm qua phép chiếu."
        ],
        [
          "(P)",
          "Mặt phẳng chiếu."
        ],
        [
          "\\Delta",
          "Phương chiếu, phải cắt mặt phẳng chiếu."
        ],
        [
          "d_M",
          "Đường qua \\(M\\) theo phương chiếu; có thể song song hoặc trùng \\(\\Delta\\)."
        ]
      ],
      "condition": "Nếu \\(M\\) thuộc mặt phẳng chiếu thì \\(M^{\\prime} = M\\)."
    }
  },
  "toan-11-4-39-v1": {
    "prompt": "Hai đường thẳng có hai hình chiếu là hai đường thẳng song song phân biệt. Hai đường thẳng \\(b a n\\) đầu có thể:",
    "options": [
      "Bắt buộc vuông góc nhau",
      "Chỉ cắt nhau",
      "Chỉ trùng nhau",
      "Song song hoặc chéo nhau"
    ],
    "explanation": "Nếu hai đường \\(b a n\\) đầu cắt nhau thì ảnh giao điểm phải thuộc cả hai đường ảnh, trái giả thiết hai ảnh song song phân biệt. Chúng có thể song song hoặc chéo nhau; phép chiếu không bảo toàn tính chéo nhau.",
    "hint": "Một điểm chung của hai đường sẽ cho một điểm chung của hai ảnh.",
    "guide": {
      "formulas": [
        "a\\cap b=\\{M\\}\\ \\Longrightarrow\\ M'\\in a'\\cap b'"
      ],
      "symbols": [
        [
          "a,b",
          "Hai đường gốc; \\(a^{\\prime} , b^{\\prime}\\) là ảnh đường thẳng của chúng."
        ],
        [
          "M,M'",
          "Giao điểm và ảnh của giao điểm."
        ]
      ],
      "condition": "Nếu hai ảnh song song phân biệt, hai đường gốc không thể cắt nhau."
    }
  },
  "toan-11-4-40-v1": {
    "prompt": "Ảnh không suy biến của một hình vuông qua phép chiếu song song luôn là:",
    "options": [
      "Một hình chữ nhật",
      "Một hình vuông",
      "Một hình bình hành",
      "Một hình thoi"
    ],
    "explanation": "Hai cặp cạnh đối song song được bảo toàn nên ảnh là hình bình hành. Góc vuông và độ dài các cạnh theo các phương khác nhau không nhất thiết được bảo toàn.",
    "hint": "Chỉ sử dụng tính chất song song chắc chắn được giữ lại.",
    "guide": {
      "formulas": [
        "AB\\parallel CD\\ \\Longrightarrow\\ A'B'\\parallel C'D'\\text{ hoặc trùng nhau}"
      ],
      "symbols": [
        [
          "A,B,C,D",
          "Các điểm của hình gốc."
        ],
        [
          "A',B',C',D'",
          "Các ảnh tương ứng."
        ]
      ],
      "condition": "Giả sử các đoạn không bị thu về điểm. Phép chiếu không bảo toàn góc hay độ dài theo hai phương bất kì."
    }
  },
  "toan-11-4-41-v1": {
    "prompt": "Hai mặt phẳng \\(\\left(P\\right) , \\left(Q\\right)\\) song song; \\(a\\) nằm trong \\(\\left(P\\right) , b\\) nằm trong \\(\\left(Q\\right)\\). Kết luận nào đúng?",
    "options": [
      "\\(a , b\\) luôn song song",
      "\\(a , b\\) song song hoặc chéo nhau",
      "\\(a , b\\) luôn chéo nhau",
      "\\(a , b\\) có thể cắt nhau"
    ],
    "explanation": "\\(a\\) và \\(b\\) không thể có điểm chung vì hai mặt phẳng không có điểm chung. Tùy phương của chúng, hai đường có thể song song hoặc chéo nhau.",
    "hint": "Hai đường nằm trong hai mặt phẳng song song không nhất thiết cùng phương.",
    "guide": {
      "formulas": [
        "a\\cap b=\\varnothing\\ \\Longrightarrow\\ a\\parallel b\\text{ hoặc }a,b\\text{ chéo nhau}"
      ],
      "symbols": [
        [
          "a,b",
          "Hai đường thẳng phân biệt."
        ],
        [
          "\\varnothing",
          "Tập rỗng, nghĩa là hai đường không có điểm chung."
        ]
      ],
      "condition": "Muốn kết luận song song, phải có thêm điều kiện đồng phẳng."
    }
  },
  "toan-11-4-42-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là hình thang \\(AB \\parallel CD\\). \\(M\\) là trung điểm \\(SA ; N\\) là giao điểm \\(SB\\) với \\(\\left(MCD\\right)\\). Khi đó:",
    "options": [
      "\\(MN \\parallel CD\\)",
      "\\(MN\\) cắt \\(CD\\)",
      "\\(MN\\) và \\(CD\\) chéo nhau",
      "\\(MN\\) trùng \\(CD\\)"
    ],
    "explanation": "Hai mặt phẳng \\(\\left(SAB\\right) , \\left(MCD\\right)\\) lần lượt chứa \\(AB , CD\\) song song và cùng chứa \\(M\\). Giao tuyến \\(MN\\) qua \\(M\\), song song \\(AB\\) và \\(CD\\); trong tam giác \\(SAB , N\\) là trung điểm \\(SB\\).",
    "hint": "Xác định giao tuyến hai mặt phẳng chứa hai đường thẳng song song.",
    "guide": {
      "formulas": [
        "a\\subset(P),\\ b\\subset(Q),\\ a\\parallel b,\\ d=(P)\\cap(Q)",
        "d\\parallel a\\quad\\text{hoặc }d=a"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phân biệt, cắt nhau. Dùng thêm điểm chung để xác định đường \\(d\\)."
    }
  },
  "toan-11-4-43-v1": {
    "prompt": "Cho tứ diện \\(ABCD\\). \\(M , N\\) nằm trong \\(BC , BD\\) và \\(MN\\) không song song \\(CD\\). Giao điểm \\(K = MN \\cap \\left(ACD\\right)\\) chính là:",
    "options": [
      "\\(CM \\cap DN\\)",
      "\\(MN \\cap AC\\)",
      "\\(MN \\cap AD\\)",
      "\\(MN \\cap CD\\)"
    ],
    "explanation": "\\(MN\\) thuộc \\(\\left(BCD\\right)\\), còn \\(\\left(BCD\\right) \\cap \\left(ACD\\right) = CD\\). Vì \\(MN\\) không song song \\(CD\\), giao điểm cần tìm là \\(MN \\cap CD\\) (có thể nằm trên phần kéo dài của các cạnh).",
    "hint": "Dùng mặt phẳng phụ \\(\\left(BCD\\right)\\).",
    "guide": {
      "formulas": [
        "A,B\\in(P)\\cap(Q),\\ A\\ne B\\ \\Longrightarrow\\ (P)\\cap(Q)=AB"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phải phân biệt. Tìm đủ hai điểm chung rồi nối chúng."
    }
  },
  "toan-11-4-44-v1": {
    "prompt": "Cho lăng trụ \\(ABC . A^{\\prime} B^{\\prime} C^{\\prime}\\). \\(I , I^{\\prime}\\) là trung điểm \\(AB , A^{\\prime} B^{\\prime}\\). Chiếu song song theo phương \\(AI^{\\prime}\\) lên \\(\\left(A^{\\prime} B^{\\prime} C^{\\prime}\\right)\\). Ảnh của \\(I\\) là:",
    "options": [
      "\\(I^{\\prime}\\)",
      "\\(A^{\\prime}\\)",
      "\\(B^{\\prime}\\)",
      "\\(C^{\\prime}\\)"
    ],
    "explanation": "Trong hình bình hành \\(ABB^{\\prime} A^{\\prime} , II^{\\prime} \\parallel AA^{\\prime}\\) và \\(I^{\\prime} B^{\\prime} \\parallel AI\\). Hai đoạn \\(AI\\) và \\(I^{\\prime} B^{\\prime}\\) bằng nhau, cùng hướng, nên tứ giác \\(AIB^{\\prime} I^{\\prime}\\) là hình bình hành. Vì \\(IB^{\\prime} \\parallel AI^{\\prime}\\), ảnh của \\(I\\) là \\(B^{\\prime}\\).",
    "hint": "Chỉ cần xét hình bình hành \\(ABB^{\\prime} A^{\\prime}\\).",
    "guide": {
      "formulas": [
        "M\\in d_M,\\quad M'=d_M\\cap(P)",
        "d_M\\text{ có phương }\\Delta"
      ],
      "symbols": [
        [
          "M,M'",
          "Điểm gốc và ảnh của điểm qua phép chiếu."
        ],
        [
          "(P)",
          "Mặt phẳng chiếu."
        ],
        [
          "\\Delta",
          "Phương chiếu, phải cắt mặt phẳng chiếu."
        ],
        [
          "d_M",
          "Đường qua \\(M\\) theo phương chiếu; có thể song song hoặc trùng \\(\\Delta\\)."
        ]
      ],
      "condition": "Nếu \\(M\\) thuộc mặt phẳng chiếu thì \\(M^{\\prime} = M\\)."
    }
  },
  "toan-11-4-45-v1": {
    "prompt": "Cho hình hộp \\(ABCD . A^{\\prime} B^{\\prime} C^{\\prime} D^{\\prime}\\). Mặt phẳng \\(\\left(AB^{\\prime} D^{\\prime}\\right)\\) song song với mặt phẳng nào?",
    "options": [
      "\\(\\left(A^{\\prime} BD\\right)\\)",
      "\\(\\left(BDC^{\\prime}\\right)\\)",
      "\\(\\left(ACC^{\\prime}\\right)\\)",
      "\\(\\left(ABC\\right)\\)"
    ],
    "explanation": "Theo tính chất hình hộp, \\(AB^{\\prime} \\parallel DC^{\\prime}\\) và \\(AD^{\\prime} \\parallel BC^{\\prime}\\). Hai cặp đường tương ứng cắt nhau xác định hai mặt phẳng phân biệt, suy ra \\(\\left(AB^{\\prime} D^{\\prime}\\right) \\parallel \\left(BDC^{\\prime}\\right)\\).",
    "hint": "Tìm hai đường cắt nhau trong mỗi mặt phẳng, đôi một song song.",
    "guide": {
      "formulas": [
        "a,b\\subset(P),\\ a\\cap b=\\{M\\},\\ a\\parallel(Q),\\ b\\parallel(Q)\\ \\Longrightarrow\\ (P)\\parallel(Q)"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai đường \\(a , b\\) trong \\(\\left(P\\right)\\) phải cắt nhau."
    }
  },
  "toan-11-4-46-v1": {
    "prompt": "Cho lăng trụ \\(ABC . A^{\\prime} B^{\\prime} C^{\\prime}\\). \\(M , N\\) là trung điểm \\(BB^{\\prime} , CC^{\\prime}\\). Giao tuyến \\(d\\) của \\(\\left(AMN\\right)\\) với \\(\\left(A^{\\prime} B^{\\prime} C^{\\prime}\\right)\\) song song với:",
    "options": [
      "\\(BC\\)",
      "\\(AB\\)",
      "\\(AC\\)",
      "\\(AA^{\\prime}\\)"
    ],
    "explanation": "Trong hình bình hành \\(BCC^{\\prime} B^{\\prime}\\) có \\(MN \\parallel BC \\parallel B^{\\prime} C^{\\prime}\\). Mặt phẳng \\(\\left(AMN\\right)\\) không song song mặt phẳng đáy trên vì chứa \\(A\\) và \\(MN\\) ở hai độ cao khác nhau, nên giao tuyến \\(d\\) tồn tại và \\(d \\parallel MN \\parallel BC\\).",
    "hint": "Dùng đường trung bình \\(MN\\) và tính chất giao tuyến.",
    "guide": {
      "formulas": [
        "a\\subset(P),\\ b\\subset(Q),\\ a\\parallel b,\\ d=(P)\\cap(Q)",
        "d\\parallel a\\quad\\text{hoặc }d=a"
      ],
      "symbols": [
        [
          "(P),(Q),(R)",
          "Các mặt phẳng đang xét."
        ],
        [
          "a,b,d",
          "Các đường thẳng."
        ],
        [
          "A,B,M",
          "Các điểm; \\(AB\\) là đường thẳng qua hai điểm phân biệt \\(A , B\\)."
        ]
      ],
      "condition": "Hai mặt phẳng phân biệt, cắt nhau. Dùng thêm điểm chung để xác định đường \\(d\\)."
    }
  },
  "toan-11-4-47-v1": {
    "prompt": "Cho lăng trụ \\(ABC . A^{\\prime} B^{\\prime} C^{\\prime}\\). \\(M , N , P\\) là trung điểm \\(AA^{\\prime} , BB^{\\prime} , CC^{\\prime}\\). Mệnh đề nào đúng?",
    "options": [
      "\\(MN \\parallel AA^{\\prime}\\)",
      "\\(\\left(MNP\\right)\\) chứa \\(A\\)",
      "\\(\\left(MNP\\right)\\) cắt \\(\\left(ABC\\right)\\) theo \\(BC\\)",
      "\\(\\left(MNP\\right) \\parallel \\left(ABC\\right)\\)"
    ],
    "explanation": "Trong hình bình hành \\(ABB^{\\prime} A^{\\prime}\\) có \\(MN \\parallel AB\\); trong \\(ACC^{\\prime} A^{\\prime}\\) có \\(MP \\parallel AC\\). Hai đường \\(MN , MP\\) cắt nhau nên \\(\\left(MNP\\right) \\parallel \\left(ABC\\right)\\).",
    "hint": "Xét các đường nối trung điểm trên hai mặt bên.",
    "guide": {
      "formulas": [
        "MN\\parallel AB,\\quad MP\\parallel AC",
        "(MNP)\\parallel(ABC)"
      ],
      "symbols": [
        [
          "M,N,P",
          "Trung điểm của \\(AA^{\\prime} , BB^{\\prime} , CC^{\\prime}\\) trong lăng trụ."
        ],
        [
          "A,B,C",
          "Ba đỉnh đáy."
        ]
      ],
      "condition": "Dùng tính chất đoạn nối trung điểm trong các mặt bên hình bình hành."
    }
  },
  "toan-11-4-48-v1": {
    "prompt": "Cho hình chóp \\(S . ABCD\\) có đáy là hình bình hành. \\(M\\) là trung điểm \\(SA ; I\\) là trung điểm \\(BC\\). \\(G\\) nằm trong \\(SI\\) với \\(\\frac{SG}{SI} = \\frac{3}{5}\\). Đặt \\(J = MG \\cap \\left(ABCD\\right)\\). Tính \\(\\frac{AJ}{AI}\\).",
    "options": [
      "\\(2\\)",
      "\\(\\frac{3}{2}\\)",
      "\\(3\\)",
      "\\(\\frac{5}{3}\\)"
    ],
    "explanation": "Trong tam giác \\(SAI\\), lấy \\(J\\) trên tia \\(AI\\) sao cho \\(AJ = 3 AI\\) thì \\(IJ = 2 AI\\). Áp dụng Menelaus với cát tuyến \\(M , G , J : \\left(\\frac{SM}{MA}\\right) \\left(\\frac{AJ}{JI}\\right) \\left(\\frac{IG}{GS}\\right) = 1 \\times \\left(\\frac{3}{2}\\right) \\times \\left(\\frac{2}{3}\\right) = 1\\). Vậy \\(M , G , J\\) thẳng hàng; \\(J\\) là giao điểm cần tìm và \\(\\frac{AJ}{AI} = 3\\).",
    "hint": "Xét tam giác \\(SAI\\); giao điểm nằm trên đường \\(AI\\) kéo dài qua \\(I\\).",
    "guide": {
      "formulas": [
        "\\frac{SM}{MA}\\cdot\\frac{AJ}{JI}\\cdot\\frac{IG}{GS}=1"
      ],
      "symbols": [
        [
          "S,A,I",
          "Ba đỉnh của tam giác phụ đang xét."
        ],
        [
          "M,G,J",
          "Ba điểm trên các đường \\(SA , SI , AI ; J\\) nằm trên phần kéo dài qua \\(I\\)."
        ]
      ],
      "condition": "Đây là dạng độ dài của Menelaus với một điểm trên phần kéo dài."
    },
    "solutionSteps": [
      {
        "title": "Đưa về tam giác phẳng",
        "content": "M thuộc SA, G thuộc SI nên đường MG nằm trong mặt phẳng (SAI). Giao tuyến của (SAI) với mặt phẳng đáy là AI; do đó tìm giao điểm của MG với đường AI."
      },
      {
        "title": "Tính các tỉ số đã biết",
        "content": "\\[\\frac{SM}{MA}=1,\\quad\\frac{IG}{GS}=\\frac{1-3/5}{3/5}=\\frac23\\]"
      },
      {
        "title": "Dùng Menelaus",
        "content": "Đường qua hai điểm trong hai cạnh SA, SI gặp đường AI ở ngoài đoạn AI. Theo Menelaus với độ dài dương: \\[\\frac{SM}{MA}\\cdot\\frac{AJ}{JI}\\cdot\\frac{IG}{GS}=1\\Rightarrow\\frac{AJ}{JI}=\\frac32\\]"
      },
      {
        "title": "Xác định phía và giải tỉ số",
        "content": "Vì \\(AJ>JI\\), điểm J ở phía ngoài I trên tia AI. Khi đó \\(AJ=AI+IJ\\). \\[\\frac{AI+IJ}{IJ}=\\frac32\\Rightarrow2AI=IJ\\Rightarrow AJ=3AI\\]\\[\\frac{AJ}{AI}=3\\]"
      }
    ]
  },
  "toan-12-1-1": {
    "prompt": "Cho \\(f \\left(x\\right) = x^{3} - 3 x\\). Đạo hàm \\(f^{\\prime} \\left(x\\right)\\) là:",
    "options": [
      "\\(3 x^{2} - 3\\)",
      "\\(x^{2} - 3\\)",
      "\\(3 x^{2} + 3\\)",
      "\\(3 x - 3\\)"
    ],
    "explanation": "Lấy đạo hàm từng hạng tử: \\(\\left(x^{3}\\right)^{\\prime} = 3 x^{2}\\) và \\(\\left(-3 x\\right)^{\\prime} = -3\\). Vậy \\(f^{\\prime} \\left(x\\right) = 3 x^{2} - 3\\).",
    "hint": "Dùng công thức \\(\\left(x^{n}\\right)^{\\prime} = n x^{n-1}\\).",
    "guide": {
      "formulas": [
        "(x^n)'=nx^{n-1}",
        "f'(x)>0\\Rightarrow f\\text{ đồng biến},\\quad f'(x)<0\\Rightarrow f\\text{ nghịch biến}"
      ],
      "symbols": [
        [
          "f',x,n",
          "Đạo hàm của \\(f\\), biến số \\(x\\) và số mũ \\(n\\)."
        ]
      ],
      "condition": "Xét dấu trên từng khoảng; cực trị cần kiểm tra đổi dấu đạo hàm."
    },
    "solutionSteps": [
      {
        "title": "Đạo hàm từng hạng",
        "content": "\\[(x^3)'=3x^2,\\quad(-3x)'=-3\\]"
      },
      {
        "title": "Dùng đạo hàm của hiệu",
        "content": "\\[f'(x)=(x^3-3x)'=(x^3)'-3x'\\]"
      },
      {
        "title": "Rút gọn",
        "content": "\\[f'(x)=3x^2-3\\]"
      }
    ]
  },
  "toan-12-1-2": {
    "prompt": "Hàm số \\(y = x^{2}\\) nghịch biến trên khoảng nào?",
    "options": [
      "\\(\\left(0 ; +\\infty\\right)\\)",
      "\\(\\left(-\\infty ; 0\\right)\\)",
      "\\(\\left(-\\infty ; +\\infty\\right)\\)",
      "\\(\\left(1 ; +\\infty\\right)\\)"
    ],
    "explanation": "Ta có \\(y^{\\prime} = 2 x\\). Trên \\(\\left(-\\infty ; 0\\right) , y^{\\prime} < 0\\) nên hàm số nghịch biến.",
    "hint": "Xét dấu của đạo hàm \\(y^{\\prime} = 2 x\\).",
    "guide": {
      "formulas": [
        "(x^n)'=nx^{n-1}",
        "f'(x)>0\\Rightarrow f\\text{ đồng biến},\\quad f'(x)<0\\Rightarrow f\\text{ nghịch biến}"
      ],
      "symbols": [
        [
          "f',x,n",
          "Đạo hàm của \\(f\\), biến số \\(x\\) và số mũ \\(n\\)."
        ]
      ],
      "condition": "Xét dấu trên từng khoảng; cực trị cần kiểm tra đổi dấu đạo hàm."
    },
    "solutionSteps": [
      {
        "title": "Tính đạo hàm",
        "content": "\\[y'=2x\\]"
      },
      {
        "title": "Giải điều kiện nghịch biến",
        "content": "\\[y'<0\\iff2x<0\\iff x<0\\]"
      },
      {
        "title": "Kết luận",
        "content": "Hàm số nghịch biến trên \\((-\\infty;0)\\)."
      }
    ]
  },
  "toan-12-1-3": {
    "prompt": "Hàm số \\(y = x^{3} - 3 x\\) có điểm cực đại tại:",
    "options": [
      "\\(x = 1\\)",
      "\\(x = 0\\)",
      "\\(x = -1\\)",
      "\\(x = 3\\)"
    ],
    "explanation": "\\(y^{\\prime} = 3 \\left(x - 1\\right) \\left(x + 1\\right)\\). Khi đi qua \\(x = -1\\), đạo hàm đổi dấu từ dương sang âm, nên hàm đạt cực đại tại \\(x = -1\\).",
    "hint": "Giải \\(y^{\\prime} = 0\\) rồi xét dấu ở hai bên nghiệm.",
    "guide": {
      "formulas": [
        "(x^n)'=nx^{n-1}",
        "f'(x)>0\\Rightarrow f\\text{ đồng biến},\\quad f'(x)<0\\Rightarrow f\\text{ nghịch biến}"
      ],
      "symbols": [
        [
          "f',x,n",
          "Đạo hàm của \\(f\\), biến số \\(x\\) và số mũ \\(n\\)."
        ]
      ],
      "condition": "Xét dấu trên từng khoảng; cực trị cần kiểm tra đổi dấu đạo hàm."
    },
    "solutionSteps": [
      {
        "title": "Tính và phân tích đạo hàm",
        "content": "\\[y'=3x^2-3=3(x-1)(x+1)\\]"
      },
      {
        "title": "Tìm nghiệm đạo hàm và xét dấu",
        "content": "\\[y'=0\\iff x=-1\\text{ hoặc }x=1\\]Đạo hàm dương trước −1, âm trên khoảng (−1;1), dương sau 1."
      },
      {
        "title": "Kết luận cực đại",
        "content": "Tại \\(x=-1\\), đạo hàm đổi dấu từ dương sang âm nên hàm đạt cực đại. Tại \\(x=1\\) là cực tiểu."
      }
    ]
  },
  "ly-10-1-1": {
    "prompt": "Đơn vị của độ dài trong hệ \\(SI\\) là:",
    "options": [
      "Mét \\(\\left(m\\right)\\)",
      "Giây \\(\\left(s\\right)\\)",
      "Kilôgam (kg)",
      "Kelvin \\(\\left(K\\right)\\)"
    ],
    "explanation": "Mét, kí hiệu \\(m\\), là đơn vị cơ bản của độ dài trong hệ đơn vị \\(SI\\).",
    "hint": "Phân biệt đơn vị độ dài với thời gian và khối lượng.",
    "guide": {
      "formulas": [
        "[l]_{\\rm SI}=\\mathrm m"
      ],
      "symbols": [
        [
          "l",
          "Độ dài cần đo."
        ],
        [
          "\\mathrm m",
          "Mét, đơn vị cơ bản của độ dài trong hệ \\(SI\\)."
        ]
      ],
      "condition": ""
    }
  },
  "ly-10-1-2": {
    "prompt": "Dụng cụ phù hợp nhất để đo đường kính ngoài của một viên bi nhỏ là:",
    "options": [
      "Đồng hồ bấm giây",
      "Thước kẹp",
      "Lực kế",
      "Nhiệt kế"
    ],
    "explanation": "Thước kẹp có thể đo đường kính ngoài với độ chính xác phù hợp hơn thước thông thường.",
    "hint": "Chọn dụng cụ đo kích thước nhỏ.",
    "guide": {
      "formulas": [
        "D=2R"
      ],
      "symbols": [
        [
          "D",
          "Đường kính ngoài của viên bi, đại lượng cần đo."
        ],
        [
          "R",
          "Bán kính viên bi, cùng đơn vị với \\(D\\)."
        ]
      ],
      "condition": "Chọn dụng cụ đo được đường kính ngoài nhỏ với độ chia phù hợp."
    }
  },
  "ly-10-1-3": {
    "prompt": "Đo chiều dài \\(b a\\) lần được \\(10{,}1\\) cm; \\(10{,}2\\) cm; \\(10{,}3\\) cm. Giá trị trung bình là:",
    "options": [
      "\\(10{,}1\\) cm",
      "\\(10{,}2\\) cm",
      "\\(10{,}3\\) cm",
      "\\(30{,}6\\) cm"
    ],
    "explanation": "Giá trị trung bình bằng \\(\\frac{10{,}1 + 10{,}2 + 10{,}3}{3} = 10{,}2\\) cm.",
    "hint": "Cộng \\(b a\\) kết quả rồi chia cho số lần đo.",
    "guide": {
      "formulas": [
        "\\overline l=\\frac{l_1+\\cdots+l_N}{N}"
      ],
      "symbols": [
        [
          "l_i",
          "Kết quả đo độ dài ở lần thứ \\(i\\)."
        ],
        [
          "N",
          "Số lần đo."
        ],
        [
          "\\overline l",
          "Độ dài trung bình, cùng đơn vị với các kết quả đo."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Cộng ba kết quả đo",
        "content": "\\[10.1+10.2+10.3=30.6\\ \\text{cm}\\]"
      },
      {
        "title": "Chia cho số lần đo",
        "content": "\\[\\overline l=\\frac{30.6}3\\]"
      },
      {
        "title": "Tính kết quả và đơn vị",
        "content": "\\[\\overline l=10.2\\ \\text{cm}\\]"
      }
    ]
  },
  "ly-11-1-1": {
    "prompt": "Một dao động có chu kì \\(T = 0{,}5 s\\). Tần số của dao động là:",
    "options": [
      "\\(0{,}5\\) Hz",
      "\\(1\\) Hz",
      "\\(2\\) Hz",
      "\\(5\\) Hz"
    ],
    "explanation": "Tần số \\(f = \\frac{1}{T} = \\frac{1}{0{,}5} = 2\\) Hz.",
    "hint": "Tần số là nghịch đảo của chu kì.",
    "guide": {
      "formulas": [
        "f=\\frac1T,\\quad\\omega=\\frac{2\\pi}T",
        "x=A\\cos(\\omega t+\\varphi),\\quad v_{\\max}=\\omega A"
      ],
      "symbols": [
        [
          "f,T",
          "Tần số (Hz) và chu kì \\(\\left(s\\right)\\)."
        ],
        [
          "\\omega",
          "Tần số góc, đơn vị rad\\(/ s\\)."
        ],
        [
          "x,A",
          "Li độ và biên độ, cùng đơn vị độ dài."
        ],
        [
          "t,\\varphi",
          "Thời gian và pha \\(b a n\\) đầu."
        ],
        [
          "v_{\\max}",
          "Tốc độ lớn nhất, đạt ở vị trí cân bằng."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Chọn công thức",
        "content": "\\[f=\\frac1T\\]"
      },
      {
        "title": "Thay chu kì tính bằng giây",
        "content": "\\[f=\\frac1{0.5}=\\frac1{1/2}\\]"
      },
      {
        "title": "Lấy nghịch đảo và ghi đơn vị",
        "content": "\\[f=2\\ \\text{Hz}\\]"
      }
    ]
  },
  "ly-11-1-2": {
    "prompt": "Vật dao động điều hòa có phương trình \\(x = 4 \\cos \\left(2 \\pi t\\right)\\) cm. Biên độ là:",
    "options": [
      "\\(2\\) cm",
      "\\(4\\) cm",
      "\\(2 \\pi\\) cm",
      "\\(8\\) cm"
    ],
    "explanation": "Trong \\(x = A \\cos \\left(\\omega t + \\varphi\\right) , A\\) là biên độ. Ở đây \\(A = 4\\) cm.",
    "hint": "Đọc hệ số đứng trước hàm \\(\\cos\\).",
    "guide": {
      "formulas": [
        "f=\\frac1T,\\quad\\omega=\\frac{2\\pi}T",
        "x=A\\cos(\\omega t+\\varphi),\\quad v_{\\max}=\\omega A"
      ],
      "symbols": [
        [
          "f,T",
          "Tần số (Hz) và chu kì \\(\\left(s\\right)\\)."
        ],
        [
          "\\omega",
          "Tần số góc, đơn vị rad\\(/ s\\)."
        ],
        [
          "x,A",
          "Li độ và biên độ, cùng đơn vị độ dài."
        ],
        [
          "t,\\varphi",
          "Thời gian và pha \\(b a n\\) đầu."
        ],
        [
          "v_{\\max}",
          "Tốc độ lớn nhất, đạt ở vị trí cân bằng."
        ]
      ],
      "condition": ""
    }
  },
  "ly-11-1-3": {
    "prompt": "Trong dao động điều hòa, tốc độ của vật lớn nhất khi vật:",
    "options": [
      "Ở vị trí biên dương",
      "Ở vị trí biên âm",
      "Đi qua vị trí cân bằng",
      "Có gia tốc lớn nhất về độ lớn"
    ],
    "explanation": "Ở vị trí cân bằng, thế năng nhỏ nhất và động năng lớn nhất, vì vậy tốc độ đạt cực đại.",
    "hint": "Xét sự chuyển hóa giữa động năng và thế năng.",
    "guide": {
      "formulas": [
        "f=\\frac1T,\\quad\\omega=\\frac{2\\pi}T",
        "x=A\\cos(\\omega t+\\varphi),\\quad v_{\\max}=\\omega A"
      ],
      "symbols": [
        [
          "f,T",
          "Tần số (Hz) và chu kì \\(\\left(s\\right)\\)."
        ],
        [
          "\\omega",
          "Tần số góc, đơn vị rad\\(/ s\\)."
        ],
        [
          "x,A",
          "Li độ và biên độ, cùng đơn vị độ dài."
        ],
        [
          "t,\\varphi",
          "Thời gian và pha \\(b a n\\) đầu."
        ],
        [
          "v_{\\max}",
          "Tốc độ lớn nhất, đạt ở vị trí cân bằng."
        ]
      ],
      "condition": ""
    }
  },
  "ly-12-1-1": {
    "prompt": "Trong hệ \\(SI\\), đơn vị của nhiệt độ nhiệt động lực học là:",
    "options": [
      "Độ Celsius \\(\\left(C\\right)\\)",
      "Kelvin \\(\\left(K\\right)\\)",
      "Joule \\(\\left(J\\right)\\)",
      "Watt \\(\\left(W\\right)\\)"
    ],
    "explanation": "Kelvin, kí hiệu \\(K\\), là đơn vị cơ bản của nhiệt độ nhiệt động lực học trong \\(SI\\).",
    "hint": "Đơn vị này có kí hiệu \\(K\\).",
    "guide": {
      "formulas": [
        "T=t+273{,}15",
        "U=E_{\\text{động}}+E_{\\text{thế}}"
      ],
      "symbols": [
        [
          "T,t",
          "Nhiệt độ theo kelvin và theo độ Celsius."
        ],
        [
          "U",
          "Nội năng."
        ],
        [
          "E_{\\text{động}},E_{\\text{thế}}",
          "Động năng chuyển động nhiệt và thế năng tương tác của các phân tử."
        ]
      ],
      "condition": ""
    }
  },
  "ly-12-1-2": {
    "prompt": "Ở áp suất khí quyển tiêu chuẩn, nhiệt độ nước đá đang nóng chảy gần bằng:",
    "options": [
      "\\(0^{\\circ} C\\)",
      "\\(100^{\\circ} C\\)",
      "\\(-100^{\\circ} C\\)",
      "\\(273^{\\circ} C\\)"
    ],
    "explanation": "Ở áp suất khí quyển tiêu chuẩn, nước đá tinh khiết nóng chảy ở khoảng \\(0^{\\circ} C\\).",
    "hint": "Phân biệt nhiệt độ nóng chảy với nhiệt độ sôi của nước.",
    "guide": {
      "formulas": [
        "T=t+273{,}15",
        "U=E_{\\text{động}}+E_{\\text{thế}}"
      ],
      "symbols": [
        [
          "T,t",
          "Nhiệt độ theo kelvin và theo độ Celsius."
        ],
        [
          "U",
          "Nội năng."
        ],
        [
          "E_{\\text{động}},E_{\\text{thế}}",
          "Động năng chuyển động nhiệt và thế năng tương tác của các phân tử."
        ]
      ],
      "condition": ""
    }
  },
  "ly-12-1-3": {
    "prompt": "Nội năng của một vật là:",
    "options": [
      "Chỉ động năng chuyển động của cả vật",
      "Tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật",
      "Chỉ thế năng trọng trường của vật",
      "Nhiệt lượng vật luôn chứa sẵn"
    ],
    "explanation": "Nội năng gồm động năng chuyển động nhiệt và thế năng tương tác của các phân tử cấu tạo nên vật. Nhiệt lượng là năng lượng truyền do chênh lệch nhiệt độ.",
    "hint": "Xét năng lượng ở cấp độ phân tử.",
    "guide": {
      "formulas": [
        "T=t+273{,}15",
        "U=E_{\\text{động}}+E_{\\text{thế}}"
      ],
      "symbols": [
        [
          "T,t",
          "Nhiệt độ theo kelvin và theo độ Celsius."
        ],
        [
          "U",
          "Nội năng."
        ],
        [
          "E_{\\text{động}},E_{\\text{thế}}",
          "Động năng chuyển động nhiệt và thế năng tương tác của các phân tử."
        ]
      ],
      "condition": ""
    }
  },
  "hoa-10-1-1": {
    "prompt": "Hạt nào trong nguyên tử mang điện tích âm?",
    "options": [
      "Proton",
      "Neutron",
      "Electron",
      "Hạt nhân"
    ],
    "explanation": "Electron mang điện tích âm; proton mang điện tích dương và neutron không mang điện.",
    "hint": "Hạt này chuyển động trong vùng vỏ nguyên tử.",
    "guide": {
      "formulas": [
        "q_e=-e,\\quad q_p=+e,\\quad q_n=0"
      ],
      "symbols": [
        [
          "q_e,q_p,q_n",
          "Điện tích của electron, proton và neutron."
        ],
        [
          "e>0",
          "Độ lớn điện tích nguyên tố."
        ]
      ],
      "condition": ""
    }
  },
  "hoa-10-1-2": {
    "prompt": "Một nguyên tử trung hòa có \\(11\\) proton. Số electron của nguyên tử đó là:",
    "options": [
      "\\(10\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(22\\)"
    ],
    "explanation": "Nguyên tử trung hòa có số proton bằng số electron, nên có \\(11\\) electron.",
    "hint": "Tổng điện tích dương bằng độ lớn tổng điện tích âm.",
    "guide": {
      "formulas": [
        "A=Z+N,\\quad n_e=Z\\quad\\text{(nguyên tử trung hòa)}"
      ],
      "symbols": [
        [
          "A",
          "Số khối."
        ],
        [
          "Z,N",
          "Số proton và số neutron."
        ],
        [
          "n_e",
          "Số electron; electron mang điện âm."
        ]
      ],
      "condition": ""
    }
  },
  "hoa-10-1-3": {
    "prompt": "Nguyên tử có số khối \\(A = 23\\) và số hiệu nguyên tử \\(Z = 11\\). Số neutron là:",
    "options": [
      "\\(11\\)",
      "\\(12\\)",
      "\\(23\\)",
      "\\(34\\)"
    ],
    "explanation": "Số khối \\(A = Z + N\\). Suy ra \\(N = A - Z = 23 - 11 = 12\\).",
    "hint": "Số khối bằng tổng số proton và neutron.",
    "guide": {
      "formulas": [
        "A=Z+N,\\quad n_e=Z\\quad\\text{(nguyên tử trung hòa)}"
      ],
      "symbols": [
        [
          "A",
          "Số khối."
        ],
        [
          "Z,N",
          "Số proton và số neutron."
        ],
        [
          "n_e",
          "Số electron; electron mang điện âm."
        ]
      ],
      "condition": ""
    },
    "solutionSteps": [
      {
        "title": "Dùng hệ thức số khối",
        "content": "\\[A=Z+N\\]"
      },
      {
        "title": "Chuyển vế tìm neutron",
        "content": "\\[N=A-Z\\]"
      },
      {
        "title": "Thay số",
        "content": "\\[N=23-11=12\\]Nguyên tử có 12 neutron."
      }
    ]
  },
  "hoa-11-1-1": {
    "prompt": "Khi một hệ phản ứng thuận nghịch đạt trạng thái cân bằng, điều nào đúng?",
    "options": [
      "Phản ứng thuận dừng lại",
      "Phản ứng nghịch dừng lại",
      "Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch",
      "Nồng độ mọi chất đều bằng nhau"
    ],
    "explanation": "Cân bằng hóa học là cân bằng động: phản ứng thuận và nghịch vẫn diễn ra với tốc độ bằng nhau.",
    "hint": "Chú ý cân bằng là trạng thái động.",
    "guide": {
      "formulas": [
        "v_{\\text{thuận}}=v_{\\text{nghịch}}\\quad\\text{ở cân bằng}",
        "K_c=\\frac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}"
      ],
      "symbols": [
        [
          "v",
          "Tốc độ phản ứng theo từng chiều."
        ],
        [
          "K_c",
          "Hằng số cân bằng nồng độ của phản ứng \\(N_{2} + 3 H_{2} \\rightleftharpoons 2 \\mathrm{NH}_{3}\\)."
        ],
        [
          "[X]",
          "Nồng độ mol của chất \\(X\\) ở trạng thái cân bằng."
        ]
      ],
      "condition": "Chất xúc tác giúp đạt cân bằng nhanh hơn nhưng không làm đổi vị trí cân bằng."
    }
  },
  "hoa-11-1-2": {
    "prompt": "Với phản ứng \\(N_{2} \\left(g\\right) + 3 H_{2} \\left(g\\right) \\rightleftharpoons 2 \\mathrm{NH}_{3} \\left(g\\right)\\), biểu thức \\(\\mathrm{Kc}\\) là:",
    "options": [
      "\\(\\frac{\\left[\\mathrm{NH}_{3}\\right]^{2}}{\\left[N_{2}\\right] \\left[H_{2}\\right]^{3}}\\)",
      "\\(\\frac{\\left[N_{2}\\right] \\left[H_{2}\\right]}{\\mathrm{NH}_{3}}\\)",
      "\\(\\frac{\\mathrm{NH}_{3}}{\\left[N_{2}\\right] \\left[H_{2}\\right]}\\)",
      "\\(\\frac{\\left[N_{2}\\right] \\left[H_{2}\\right]^{3}}{\\left[\\mathrm{NH}_{3}\\right]^{2}}\\)"
    ],
    "explanation": "Trong biểu thức \\(\\mathrm{Kc}\\), nồng độ sản phẩm ở tử, chất phản ứng ở mẫu; số mũ là hệ số trong phương trình cân bằng.",
    "hint": "Đặt sản phẩm ở tử và dùng hệ số phản ứng làm số mũ.",
    "guide": {
      "formulas": [
        "v_{\\text{thuận}}=v_{\\text{nghịch}}\\quad\\text{ở cân bằng}",
        "K_c=\\frac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}"
      ],
      "symbols": [
        [
          "v",
          "Tốc độ phản ứng theo từng chiều."
        ],
        [
          "K_c",
          "Hằng số cân bằng nồng độ của phản ứng \\(N_{2} + 3 H_{2} \\rightleftharpoons 2 \\mathrm{NH}_{3}\\)."
        ],
        [
          "[X]",
          "Nồng độ mol của chất \\(X\\) ở trạng thái cân bằng."
        ]
      ],
      "condition": "Chất xúc tác giúp đạt cân bằng nhanh hơn nhưng không làm đổi vị trí cân bằng."
    }
  },
  "hoa-11-1-3": {
    "prompt": "Chất xúc tác ảnh hưởng thế nào đến vị trí cân bằng hóa học?",
    "options": [
      "Luôn chuyển dịch theo chiều thuận",
      "Luôn chuyển dịch theo chiều nghịch",
      "Không làm thay đổi vị trí cân bằng",
      "Làm mọi phản ứng dừng lại"
    ],
    "explanation": "Chất xúc tác làm tăng tốc độ cả hai chiều và giúp hệ đạt cân bằng nhanh hơn, không làm thay đổi vị trí cân bằng.",
    "hint": "Phân biệt tốc độ đạt cân bằng với vị trí cân bằng.",
    "guide": {
      "formulas": [
        "v_{\\text{thuận}}=v_{\\text{nghịch}}\\quad\\text{ở cân bằng}",
        "K_c=\\frac{[\\mathrm{NH}_3]^2}{[\\mathrm{N}_2][\\mathrm{H}_2]^3}"
      ],
      "symbols": [
        [
          "v",
          "Tốc độ phản ứng theo từng chiều."
        ],
        [
          "K_c",
          "Hằng số cân bằng nồng độ của phản ứng \\(N_{2} + 3 H_{2} \\rightleftharpoons 2 \\mathrm{NH}_{3}\\)."
        ],
        [
          "[X]",
          "Nồng độ mol của chất \\(X\\) ở trạng thái cân bằng."
        ]
      ],
      "condition": "Chất xúc tác giúp đạt cân bằng nhanh hơn nhưng không làm đổi vị trí cân bằng."
    }
  },
  "hoa-12-1-1": {
    "prompt": "Công thức nào sau đây là của một ester?",
    "options": [
      "\\(\\mathrm{CH}_{3} \\mathrm{COOCH}_{3}\\)",
      "\\(\\mathrm{CH}_{3} \\mathrm{COOH}\\)",
      "\\(C_{2} H_{5} \\mathrm{OH}\\)",
      "\\(\\mathrm{CH}_{3} \\mathrm{CHO}\\)"
    ],
    "explanation": "\\(\\mathrm{CH}_{3} \\mathrm{COOCH}_{3}\\) có nhóm chức ester \\(-\\mathrm{COO}\\)– nối với gốc hydrocarbon. Các chất còn lại là acid, alcohol và aldehyde.",
    "hint": "Tìm nhóm chức \\(-\\mathrm{COO}\\)–.",
    "guide": {
      "formulas": [
        "\\mathrm{RCOOR'}+\\mathrm{NaOH}\\longrightarrow\\mathrm{RCOONa}+\\mathrm{R'OH}"
      ],
      "symbols": [
        [
          "\\mathrm{RCOOR'}",
          "Ester đơn chức; \\(R , R^{\\prime}\\) là các gốc hữu cơ phù hợp."
        ],
        [
          "\\mathrm{RCOONa},\\mathrm{R'OH}",
          "Muối carboxylate và alcohol tạo thành khi xà phòng hóa."
        ]
      ],
      "condition": "Chất béo là triester của glycerol với các acid béo."
    }
  },
  "hoa-12-1-2": {
    "prompt": "Thủy phân ethyl acetate trong dung dịch \\(\\mathrm{NaOH}\\) thu được:",
    "options": [
      "\\(\\mathrm{CH}_{3} \\mathrm{COONa}\\) và \\(C_{2} H_{5} \\mathrm{OH}\\)",
      "\\(\\mathrm{CH}_{3} \\mathrm{OH}\\) và \\(C_{2} H_{5} \\mathrm{COONa}\\)",
      "\\(\\mathrm{CH}_{3} \\mathrm{COOH}\\) và \\(\\mathrm{NaCl}\\)",
      "\\(\\mathrm{CH}_{4}\\) và \\(\\mathrm{CO}_{2}\\)"
    ],
    "explanation": "\\(\\mathrm{CH}_{3} \\mathrm{COOC}_{2} H_{5} + \\mathrm{NaOH} \\to \\mathrm{CH}_{3} \\mathrm{COONa} + C_{2} H_{5} \\mathrm{OH}\\). Đây là phản ứng xà phòng hóa ester.",
    "hint": "Tách phần \\(\\mathrm{CH}_{3} \\mathrm{COO}\\)– và gốc ethyl của ester.",
    "guide": {
      "formulas": [
        "\\mathrm{RCOOR'}+\\mathrm{NaOH}\\longrightarrow\\mathrm{RCOONa}+\\mathrm{R'OH}"
      ],
      "symbols": [
        [
          "\\mathrm{RCOOR'}",
          "Ester đơn chức; \\(R , R^{\\prime}\\) là các gốc hữu cơ phù hợp."
        ],
        [
          "\\mathrm{RCOONa},\\mathrm{R'OH}",
          "Muối carboxylate và alcohol tạo thành khi xà phòng hóa."
        ]
      ],
      "condition": "Chất béo là triester của glycerol với các acid béo."
    }
  },
  "hoa-12-1-3": {
    "prompt": "Chất béo là triester của glycerol với:",
    "options": [
      "Acid béo",
      "Acid hydrochloric",
      "Acid sulfuric",
      "Mọi acid vô cơ"
    ],
    "explanation": "Chất béo là triester tạo bởi glycerol và các acid béo.",
    "hint": "Xét các acid carboxylic mạch dài trong lipid.",
    "guide": {
      "formulas": [
        "\\mathrm{RCOOR'}+\\mathrm{NaOH}\\longrightarrow\\mathrm{RCOONa}+\\mathrm{R'OH}"
      ],
      "symbols": [
        [
          "\\mathrm{RCOOR'}",
          "Ester đơn chức; \\(R , R^{\\prime}\\) là các gốc hữu cơ phù hợp."
        ],
        [
          "\\mathrm{RCOONa},\\mathrm{R'OH}",
          "Muối carboxylate và alcohol tạo thành khi xà phòng hóa."
        ]
      ],
      "condition": "Chất béo là triester của glycerol với các acid béo."
    }
  }
};
