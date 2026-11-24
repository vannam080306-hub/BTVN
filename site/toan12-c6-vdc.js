export const vdc6 = [
  {
    "id": "toan-12-6-vdc-1",
    "sourceNumber": 1,
    "sourcePage": 1,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 1,
      "number": 1
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một phần mềm nhận dạng tin nhắn quảng cáo trên điện thoại bằng cách dựa theo từ khoá để đánh dấu một số tin nhắn được gửi đến. Qua một thời gian dài sử dụng, người ta thấy rằng trong số tất cả các tin nhắn gửi đến, có 20% số tin nhắn bị đánh dấu. Trong số các tin nhắn bị đánh dấu, có 10% số tin nhắn không phải là quảng cáo. Trong số các tin nhắn không bị đánh dấu, có 10% số tin nhắn là quảng cáo. Chọn ngẫu nhiên một tin nhắn được gửi đến điện thoại.",
    "explanation": "Gọi \\(D\\) là biến cố bị đánh dấu, \\(K\\) là tin thường. Ký hiệu \\(\\overline D\\) chỉ tin không bị đánh dấu.\n\nA. Đúng. Hai trường hợp bị đánh dấu và không bị đánh dấu bao trùm tất cả các tin.\n\\[P(\\overline D)=1-P(D)=1-0{,}2=0{,}8.\\]\nB. Sai. Trong nhóm không bị đánh dấu, tin thường chiếm phần còn lại sau khi trừ tin quảng cáo.\n\\[P(K\\mid\\overline D)=1-0{,}1=0{,}9.\\]\nC. Sai. Tin thường có thể thuộc một trong hai nhóm. Cộng xác suất của hai trường hợp:\n\\[P(K)=0{,}2\\times0{,}1+0{,}8\\times0{,}9=0{,}74.\\]\nD. Sai. Trong 100 tin có khoảng 74 tin thường, trong đó 72 tin thường không bị đánh dấu.\n\\[P(\\overline D\\mid K)=\\frac{0{,}8\\times0{,}9}{0{,}74}=\\frac{36}{37}\\approx0{,}973>0{,}95.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất để tin nhắn đó không bị đánh dấu bằng \\(0{,}8\\).",
      "Xác suất để tin nhắn đó không phải là quảng cáo, biết rằng nó không bị đánh dấu, bằng \\(0{,}95\\).",
      "Xác suất để tin nhắn đó không phải là quảng cáo bằng \\(0{,}76\\).",
      "Xác suất để tin nhắn đó không bị đánh dấu, biết rằng nó không phải là quảng cáo, nhỏ hơn \\(0{,}95\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-2",
    "sourceNumber": 2,
    "sourcePage": 1,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 1,
      "number": 2
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Hộp A chứa bốn quả bóng được đánh số 1, 2, 3, 4. Hộp B chứa ba quả bóng được đánh số 1, 2, 3. Hộp C chứa hai quả bóng được đánh số 1, 2. Một trong ba hộp được chọn ngẫu nhiên và sau đó một quả bóng được chọn ngẫu nhiên từ hộp đó.",
    "explanation": "Gọi \\(A,B,C\\) lần lượt là biến cố chọn được hộp A, hộp B, hộp C; \\(M_1,M_3\\) lần lượt là biến cố rút được quả bóng đánh số 1, quả bóng đánh số 3 ở lượt đầu tiên; \\(N_3\\) là biến cố rút được quả bóng đánh số 3 ở lượt thứ hai.\n\nA. Sai. Trong hộp A chỉ có một quả bóng số 1 trong bốn quả bóng:\n\\[P(M_1\\mid A)=\\frac14.\\]\nB. Sai. Hộp C không có quả bóng số 3. Áp dụng công thức xác suất toàn phần cho biến cố \\(M_3\\):\n\\[P(M_3)=P(A)\\cdot P(M_3\\mid A)+P(B)\\cdot P(M_3\\mid B)+P(C)\\cdot P(M_3\\mid C)=\\frac13\\cdot\\frac14+\\frac13\\cdot\\frac13+\\frac13\\cdot0=\\frac7{36}.\\]\nC. Đúng. Áp dụng công thức Bayes cho biến cố \\(A\\) với điều kiện \\(M_1\\):\n\\[P(A\\mid M_1)=\\frac{P(A)\\cdot P(M_1\\mid A)}{P(A)\\cdot P(M_1\\mid A)+P(B)\\cdot P(M_1\\mid B)+P(C)\\cdot P(M_1\\mid C)}=\\frac{\\frac13\\cdot\\frac14}{\\frac13\\cdot\\frac14+\\frac13\\cdot\\frac13+\\frac13\\cdot\\frac12}=\\frac3{3+4+6}=\\frac3{13}\\approx0{,}23.\\]\nD. Sai. Hoàn lại bóng trước lượt thứ hai. Khi đó \\(P(M_1\\cap N_3\\mid A)=\\frac1{16}\\), \\(P(M_1\\cap N_3\\mid B)=\\frac19\\) và \\(P(M_1\\cap N_3\\mid C)=0\\). Áp dụng công thức Bayes:\n\\[P(B\\mid M_1\\cap N_3)=\\frac{P(B)\\cdot P(M_1\\cap N_3\\mid B)}{P(A)\\cdot P(M_1\\cap N_3\\mid A)+P(B)\\cdot P(M_1\\cap N_3\\mid B)+P(C)\\cdot P(M_1\\cap N_3\\mid C)}=\\frac{\\frac19}{\\frac1{16}+\\frac19}=\\frac{16}{9+16}=\\frac{16}{25}.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Nếu hộp A được chọn thì xác suất quả bóng số 1 được chọn bằng \\(\\frac13\\).",
      "Xác suất chọn được quả bóng số 3 bằng \\(\\frac5{36}\\).",
      "Biết rằng quả bóng số 1 đã được chọn, xác suất để quả bóng này thuộc hộp A bằng \\(0{,}23\\) (làm tròn đến hàng phần trăm).",
      "Nếu người ta lấy được quả bóng số 1, sau đó hoàn lại quả bóng và tiếp tục lấy ngẫu nhiên một quả bóng từ hộp đó thì được quả bóng số 3, xác suất để quả bóng này thuộc hộp B bằng \\(\\frac{16}{27}\\)."
    ],
    "answer": [
      "Sai",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Sai, b) Sai, c) Đúng, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-3",
    "sourceNumber": 3,
    "sourcePage": 2,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 2,
      "number": 3
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trước khi đưa một loại sản phẩm ra thị trường, người ta đã phỏng vấn ngẫu nhiên 200 khách hàng về sản phẩm đó. Kết quả thống kê như sau: có 105 người trả lời “sẽ mua”; có 95 người trả lời “không mua”. Kinh nghiệm cho thấy tỉ lệ khách hàng thực sự sẽ mua sản phẩm tương ứng với những cách trả lời “sẽ mua” và “không mua” lần lượt là 70% và 30%. Gọi \\(A\\) là biến cố “Người được phỏng vấn thực sự sẽ mua sản phẩm”. Gọi \\(B\\) là biến cố “Người được phỏng vấn trả lời sẽ mua sản phẩm”.",
    "explanation": "Gọi \\(A\\) là biến cố thực sự mua và \\(B\\) là biến cố trả lời sẽ mua.\n\nA. Đúng. Chia số người trong mỗi nhóm cho tổng số người được hỏi.\n\\[P(B)=\\frac{105}{200}=\\frac{21}{40};\\quad P(\\overline B)=\\frac{95}{200}=\\frac{19}{40}.\\]\nB. Sai. Khi đã biết khách trả lời sẽ mua, phải dùng tỉ lệ của riêng nhóm \\(B\\).\n\\[P(A\\mid B)=0{,}70.\\]\nC. Đúng. Người mua có thể xuất phát từ một trong hai nhóm trả lời.\n\\[P(A)=0{,}7\\times\\frac{21}{40}+0{,}3\\times\\frac{19}{40}=\\frac{20{,}4}{40}=0{,}51.\\]\nD. Sai. Trong số người thực sự mua, tỉ lệ đã trả lời sẽ mua là\n\\[P(B\\mid A)=\\frac{0{,}7\\times105}{200\\times0{,}51}=\\frac{73{,}5}{102}\\approx72\\%.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất \\(P(B)=\\frac{21}{40}\\) và \\(P(\\overline B)=\\frac{19}{40}\\).",
      "Xác suất có điều kiện \\(P(A\\mid B)=0{,}3\\).",
      "Xác suất \\(P(A)=0{,}51\\).",
      "Trong số những người được phỏng vấn thực sự sẽ mua sản phẩm có 70% người đã trả lời “sẽ mua” khi được phỏng vấn (kết quả tính theo phần trăm được làm tròn đến hàng đơn vị)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-4",
    "sourceNumber": 4,
    "sourcePage": 3,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 3,
      "number": 4
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Có hai phác đồ điều trị A và B cho một loại bệnh. Phác đồ A có xác suất chữa khỏi bệnh là 60% và xác suất gây tác dụng phụ nghiêm trọng là 5%. Phác đồ B có xác suất chữa khỏi bệnh là 70% và xác suất gây tác dụng phụ nghiêm trọng là 10%. Một bệnh nhân được điều trị ngẫu nhiên bằng một trong hai phác đồ (xác suất chọn mỗi phác đồ là 50%).",
    "explanation": "Gọi \\(A,B\\) lần lượt là biến cố bệnh nhân được điều trị bằng phác đồ A, phác đồ B; \\(K\\) là biến cố bệnh nhân được chữa khỏi bệnh; \\(T\\) là biến cố bệnh nhân gặp tác dụng phụ nghiêm trọng.\n\nA. Sai. Muốn vừa chọn phác đồ A vừa khỏi bệnh, nhân xác suất chọn A với xác suất khỏi bệnh khi dùng A:\n\\[P(A\\cap K)=P(A)\\cdot P(K\\mid A)=0{,}5\\cdot0{,}6=0{,}30.\\]\nB. Đúng. Áp dụng công thức xác suất toàn phần cho biến cố \\(T\\):\n\\[P(T)=P(A)\\cdot P(T\\mid A)+P(B)\\cdot P(T\\mid B)=0{,}5\\cdot0{,}05+0{,}5\\cdot0{,}10=0{,}075.\\]\nC. Đúng. Áp dụng công thức Bayes cho biến cố \\(B\\) với điều kiện \\(T\\):\n\\[P(B\\mid T)=\\frac{P(B)\\cdot P(T\\mid B)}{P(T)}=\\frac{0{,}5\\cdot0{,}10}{0{,}075}=\\frac23>0{,}65.\\]\nD. Đúng. Theo giả thiết của ý D, trong từng phác đồ thì hai biến cố \\(K\\) và \\(\\overline T\\) độc lập với nhau. Áp dụng công thức xác suất toàn phần:\n\\[P(K\\cap\\overline T)=P(A)\\cdot P(K\\mid A)\\cdot P(\\overline T\\mid A)+P(B)\\cdot P(K\\mid B)\\cdot P(\\overline T\\mid B)=0{,}5\\cdot0{,}60\\cdot0{,}95+0{,}5\\cdot0{,}70\\cdot0{,}90=0{,}285+0{,}315=0{,}60.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất bệnh nhân điều trị bằng phác đồ A và được chữa khỏi bệnh là \\(0{,}6\\).",
      "Xác suất để bệnh nhân bị tác dụng phụ nghiêm trọng là \\(0{,}075\\).",
      "Nếu biết bệnh nhân này gặp tác dụng phụ nghiêm trọng thì xác suất bệnh nhân đã được điều trị bằng phác đồ B lớn hơn \\(0{,}65\\).",
      "Biết rằng trong mỗi phác đồ điều trị thì biến cố “bệnh nhân được chữa khỏi bệnh” và biến cố “bệnh nhân không bị tác dụng phụ nghiêm trọng” là độc lập với nhau. Xác suất bệnh nhân khỏi bệnh và không bị tác dụng phụ nghiêm trọng là \\(0{,}6\\)."
    ],
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Đúng"
  },
  {
    "id": "toan-12-6-vdc-5",
    "sourceNumber": 5,
    "sourcePage": 3,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 3,
      "number": 5
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Lớp 12A có tất cả 40 học sinh, trong đó có 26 nam sinh, còn lại là nữ sinh. Trong một bài kiểm tra Toán, lớp có đúng 18 học sinh đạt điểm Giỏi (22 học sinh còn lại đạt điểm Khá) đồng thời số nam sinh đạt điểm Giỏi gấp đôi số nữ sinh đạt điểm Khá. Chọn ngẫu nhiên hai học sinh của lớp 12A.",
    "explanation": "Gọi \\(x\\) là số nữ đạt điểm Khá (\\(x\\in\\mathbb N\\)). Khi đó có \\(2x\\) nam đạt điểm Giỏi và \\(14-x\\) nữ đạt điểm Giỏi. Tổng số học sinh Giỏi bằng 18 nên\n\\[2x+(14-x)=18\\Rightarrow x=4.\\]\nSuy ra lớp có 8 nam Giỏi và 10 nữ Giỏi. Số cách chọn ngẫu nhiên 2 học sinh từ 40 học sinh là \\(C_{40}^2=780\\).\nGọi \\(A\\) là biến cố hai học sinh được chọn đều là nữ; \\(B\\) là biến cố hai học sinh được chọn không có cùng giới tính; \\(C\\) là biến cố cả hai học sinh được chọn đều đạt điểm Giỏi.\n\nA. Đúng. Có \\(C_{14}^2=91\\) cách chọn hai học sinh nữ:\n\\[P(A)=\\frac{C_{14}^2}{C_{40}^2}=\\frac{91}{780}=\\frac7{60}.\\]\nB. Sai. Một cặp khác giới có 26 cách chọn nam và 14 cách chọn nữ:\n\\[P(B)=\\frac{26\\cdot14}{780}=\\frac7{15}.\\]\nC. Đúng. Biến cố cả hai học sinh được chọn đều là nữ đạt điểm Giỏi là \\(A\\cap C\\), có \\(C_{10}^2=45\\) cách chọn:\n\\[P(A\\cap C)=\\frac{C_{10}^2}{C_{40}^2}=\\frac{45}{780}=\\frac3{52}.\\]\nD. Sai. Biến cố cả hai học sinh đều đạt điểm Giỏi và khác giới tính là \\(B\\cap C\\), có \\(8\\cdot10\\) cách chọn. Do đó\n\\[P(C\\mid B)=\\frac{P(B\\cap C)}{P(B)}=\\frac{8\\cdot10}{26\\cdot14}=\\frac{20}{91}.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất để hai học sinh được chọn đều là nữ sinh bằng \\(\\frac7{60}\\).",
      "Xác suất để hai học sinh được chọn không có cùng giới tính bằng \\(\\frac{32}{65}\\).",
      "Xác suất để cả hai học sinh được chọn đều là nữ sinh đạt điểm Giỏi bằng \\(\\frac3{52}\\).",
      "Biết rằng hai học sinh được chọn không có cùng giới tính, xác suất để cả hai học sinh đó đều đạt điểm Giỏi bằng \\(\\frac{18}{91}\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-6",
    "sourceNumber": 6,
    "sourcePage": 4,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 4,
      "number": 6
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một công ty công nghệ tổ chức một kỳ thi tuyển dụng với hai bài kiểm tra: một bài kiểm tra lập trình và một bài kiểm tra tư duy logic. Công ty nhận thấy rằng: 60% ứng viên là nam, 40% ứng viên là nữ; 80% nam vượt qua bài kiểm tra lập trình, 70% nữ vượt qua bài kiểm tra lập trình; 75% nam vượt qua bài kiểm tra tư duy logic, 85% nữ vượt qua bài kiểm tra tư duy logic. Giả sử các bài kiểm tra là độc lập giữa các giới tính.",
    "explanation": "Gọi \\(A\\) là biến cố ứng viên được chọn là nam (\\(\\overline A\\) là biến cố ứng viên được chọn là nữ); \\(L\\) là biến cố ứng viên vượt qua bài kiểm tra lập trình; \\(T\\) là biến cố ứng viên vượt qua bài kiểm tra tư duy logic.\n\nA. Đúng. Áp dụng công thức xác suất toàn phần cho biến cố \\(L\\) và công thức Bayes cho biến cố \\(\\overline A\\) với điều kiện \\(L\\):\n\\[P(L)=P(A)\\cdot P(L\\mid A)+P(\\overline A)\\cdot P(L\\mid\\overline A)=0{,}6\\cdot0{,}8+0{,}4\\cdot0{,}7=0{,}76.\\]\n\\[P(\\overline A\\mid L)=\\frac{P(\\overline A)\\cdot P(L\\mid\\overline A)}{P(L)}=\\frac{0{,}4\\cdot0{,}7}{0{,}76}=\\frac7{19}.\\]\nB. Đúng. Với một ứng viên nam, biến cố đối của “trượt ít nhất một bài” là “đỗ cả hai bài” (\\(L\\cap T\\)). Do hai bài kiểm tra độc lập trong từng nhóm giới tính:\n\\[P(\\overline{L\\cap T}\\mid A)=1-P(L\\mid A)\\cdot P(T\\mid A)=1-0{,}8\\cdot0{,}75=0{,}4.\\]\nC. Đúng. Áp dụng công thức xác suất toàn phần cho biến cố \\(L\\cap T\\):\n\\[P(L\\cap T)=P(A)\\cdot P(L\\cap T\\mid A)+P(\\overline A)\\cdot P(L\\cap T\\mid\\overline A)=0{,}6\\cdot0{,}8\\cdot0{,}75+0{,}4\\cdot0{,}7\\cdot0{,}85=0{,}36+0{,}238=0{,}598.\\]\nD. Sai. Trong nhóm vượt qua cả hai bài, xác suất người được chọn là nữ bằng\n\\[P(\\overline A\\mid L\\cap T)=\\frac{P(\\overline A)\\cdot P(L\\cap T\\mid\\overline A)}{P(L\\cap T)}=\\frac{0{,}238}{0{,}598}\\approx0{,}398.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Trong những người vượt qua bài kiểm tra lập trình tỉ lệ ứng viên nữ là \\(\\frac7{19}\\).",
      "Trong những ứng viên nam có 40% ứng viên không vượt qua được ít nhất một bài kiểm tra.",
      "Có \\(59{,}8\\%\\) ứng viên vượt qua được hai bài kiểm tra.",
      "Một ứng viên ngẫu nhiên được chọn và được biết rằng người đó đã vượt qua cả hai bài kiểm tra lập trình và logic. Khi đó xác suất người đó là nữ bằng \\(0{,}397\\) (làm tròn đến hàng phần nghìn)."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Đúng, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-7",
    "sourceNumber": 7,
    "sourcePage": 5,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 5,
      "number": 7
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trước thềm trận siêu kinh điển (El Clasico) giữa Barcelona và Real Madrid, đài truyền hình Marca thực hiện phỏng vấn ngẫu nhiên một lượng người hâm mộ (biết rằng trong số những người được phỏng vấn, số người đang mặc áo thi đấu của hai đội chiếm 20%). Kết quả khảo sát cho thấy rằng 60% người trả lời sẽ xem, 40% người còn lại trả lời sẽ không xem. Tuy nhiên, số liệu thực tế sau trận đấu cho thấy có sự sai lệch giữa câu trả lời và hành động thực:\n– Trong số những người trả lời “có xem”, tỉ lệ người thực sự xem là 90%.\n– Trong số những người trả lời “không xem”, tỉ lệ người thực sự xem là 15%.\nGọi \\(A\\) là biến cố “Người được phỏng vấn thực sự xem trận đấu”; \\(B\\) là biến cố “Người được phỏng vấn trả lời sẽ xem trận đấu”.",
    "explanation": "Gọi \\(A\\) là thực sự xem, \\(B\\) là nói sẽ xem, \\(H\\) là mặc áo thi đấu và \\(E\\) là trả lời sai.\n\nA. Đúng. Người thực sự xem thuộc một trong hai nhóm trả lời. Nhân xác suất dọc từng nhánh rồi cộng lại:\n\\[P(A)=0{,}6\\times0{,}9+0{,}4\\times0{,}15=0{,}54+0{,}06=0{,}60=60\\%.\\]\nB. Đúng. Trong toàn bộ mẫu, 6% vừa trả lời không xem vừa thực sự xem. Trong nhóm thực sự xem, tỉ lệ ấy là\n\\[P(\\overline B\\mid A)=\\frac{0{,}4\\times0{,}15}{0{,}60}=\\frac{0{,}06}{0{,}60}=10\\%.\\]\nC. Đúng. Biết 85% nhóm mặc áo thực sự xem. Gọi \\(p\\) là tỉ lệ thực sự xem trong nhóm không mặc áo. Hai nhóm này chiếm 20% và 80% số người.\n\\[0{,}60=0{,}2\\times0{,}85+0{,}8p=0{,}17+0{,}8p.\\]\n\\[0{,}8p=0{,}43\\Rightarrow p=\\frac{0{,}43}{0{,}8}=53{,}75\\%.\\]\nD. Đúng. Nói xem nhưng không xem và nói không xem nhưng lại xem là hai trường hợp trả lời sai.\n\\[P(E)=0{,}6\\times(1-0{,}9)+0{,}4\\times0{,}15=0{,}12.\\]\nBiết 10% nhóm mặc áo trả lời sai. Gọi \\(q\\) là tỉ lệ trả lời sai trong nhóm không mặc áo.\n\\[0{,}12=0{,}2\\times0{,}10+0{,}8q\\Rightarrow q=\\frac{0{,}12-0{,}02}{0{,}8}=0{,}125.\\]\nVậy tỉ lệ trả lời đúng trong nhóm không mặc áo bằng \\(1-0{,}125=87{,}5\\%\\).",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Tỉ lệ người được phỏng vấn thực sự xem trận đấu là 60%.",
      "Trong số những người thực sự xem trận đấu, số người đã trả lời “không xem” khi phỏng vấn chiếm tỉ lệ 10%.",
      "Trong số những người mặc áo thi đấu, nếu tỉ lệ người thực sự xem trận đấu là 85% thì tỉ lệ người thực sự xem trận đấu trong những người không mặc áo thi đấu là \\(53{,}75\\%\\).",
      "Gọi \\(E\\) là biến cố “Người trả lời sai sự thật” (trả lời có và không xem hoặc ngược lại). Biết rằng trong nhóm mặc áo thi đấu, xác suất xảy ra biến cố \\(E\\) là 10%. Khi đó, xác suất để một người trả lời đúng sự thật trong nhóm không mặc áo thi đấu là \\(87{,}5\\%\\)."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Đúng, d) Đúng"
  },
  {
    "id": "toan-12-6-vdc-8",
    "sourceNumber": 8,
    "sourcePage": 6,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 6,
      "number": 8
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một công ty khí tượng sử dụng hai mô hình dự báo thời tiết hoạt động độc lập với nhau là mô hình 1 và mô hình 2. Dựa trên dữ liệu quá khứ, độ chính xác của các mô hình được quy định như sau:\n– Mô hình 1: Có xác suất dự báo đúng là 80%. Nghĩa là, nếu thực tế trời mưa, xác suất mô hình báo có mưa là \\(0{,}8\\); nếu thực tế không mưa, xác suất mô hình báo không mưa là \\(0{,}8\\).\n– Mô hình 2: Có xác suất dự báo đúng là 90%. Nghĩa là, nếu thực tế trời mưa, xác suất mô hình báo có mưa là \\(0{,}9\\); nếu thực tế không mưa, xác suất mô hình báo không mưa là \\(0{,}9\\).\nBiết rằng tỷ lệ ngày có mưa trong năm ở khu vực này là 20%.",
    "explanation": "Gọi \\(M\\) là biến cố thực tế trời mưa (\\(\\overline M\\) là biến cố thực tế không mưa); \\(A_1\\) là biến cố mô hình 1 dự báo có mưa; \\(A_2\\) là biến cố mô hình 2 dự báo có mưa.\n\nA. Sai. Xác suất dự báo sai của hai mô hình lần lượt là \\(0{,}2\\) và \\(0{,}1\\) ở cả hai trạng thái thời tiết. Gọi \\(S\\) là biến cố cả hai mô hình đều dự báo sai:\n\\[P(S)=P(M)\\cdot P(\\overline{A_1}\\mid M)\\cdot P(\\overline{A_2}\\mid M)+P(\\overline M)\\cdot P(A_1\\mid\\overline M)\\cdot P(A_2\\mid\\overline M)=0{,}2\\cdot0{,}2\\cdot0{,}1+0{,}8\\cdot0{,}2\\cdot0{,}1=0{,}02.\\]\nB. Sai. Gọi \\(E=\\overline{A_1}\\cap A_2\\) là biến cố mô hình 1 dự báo không mưa và mô hình 2 dự báo có mưa. Tính xác suất đồng thời với hai trạng thái thời tiết:\n\\[P(M\\cap E)=P(M)\\cdot P(\\overline{A_1}\\mid M)\\cdot P(A_2\\mid M)=0{,}2\\cdot0{,}2\\cdot0{,}9=0{,}036.\\]\n\\[P(\\overline M\\cap E)=P(\\overline M)\\cdot P(\\overline{A_1}\\mid\\overline M)\\cdot P(A_2\\mid\\overline M)=0{,}8\\cdot0{,}8\\cdot0{,}1=0{,}064.\\]\nKhi xảy ra \\(E\\), xác suất mô hình 1 dự báo đúng là \\(P(\\overline M\\mid E)=\\frac{0{,}064}{P(E)}\\), còn xác suất mô hình 2 dự báo đúng là \\(P(M\\mid E)=\\frac{0{,}036}{P(E)}\\).\nVì \\(0{,}064>0{,}036\\) nên \\(P(\\overline M\\mid E)>P(M\\mid E)\\), tức mô hình 1 có khả năng dự báo đúng cao hơn.\nC. Đúng. Áp dụng công thức xác suất toàn phần cho biến cố \\(A_1\\cap A_2\\):\n\\[P(A_1\\cap A_2)=P(M)\\cdot P(A_1\\mid M)\\cdot P(A_2\\mid M)+P(\\overline M)\\cdot P(A_1\\mid\\overline M)\\cdot P(A_2\\mid\\overline M)=0{,}2\\cdot0{,}8\\cdot0{,}9+0{,}8\\cdot0{,}2\\cdot0{,}1=0{,}16.\\]\nD. Đúng. Áp dụng công thức Bayes:\n\\[P(M\\mid A_1\\cap A_2)=\\frac{P(M)\\cdot P(A_1\\cap A_2\\mid M)}{P(A_1\\cap A_2)}=\\frac{0{,}2\\cdot0{,}8\\cdot0{,}9}{0{,}16}=\\frac{0{,}144}{0{,}16}=0{,}90.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất để cả hai mô hình đều dự báo sai là \\(0{,}2\\).",
      "Trong trường hợp mô hình 1 dự báo không mưa và mô hình 2 dự báo có mưa, xác suất mô hình 1 dự báo đúng thấp hơn xác suất mô hình 2 dự báo đúng.",
      "Xác suất để cả hai mô hình đều dự báo có mưa là \\(0{,}16\\).",
      "Nếu cả hai mô hình đều dự báo trời có mưa thì xác suất để thực tế trời có mưa là \\(0{,}9\\)."
    ],
    "answer": [
      "Sai",
      "Sai",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Sai, c) Đúng, d) Đúng"
  },
  {
    "id": "toan-12-6-vdc-9",
    "sourceNumber": 9,
    "sourcePage": 7,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 7,
      "number": 9
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Tại một thành phố, người ta thực hiện xét nghiệm đại trà để phát hiện Virus X. Qua thống kê, tỉ lệ người dân có kết quả xét nghiệm Dương tính (được máy báo là nhiễm bệnh) là 12%. Tuy nhiên, xét nghiệm không chính xác tuyệt đối:\n– Trong số những người có kết quả Dương tính, có 5% thực chất là không nhiễm bệnh.\n– Trong số những người có kết quả Âm tính (máy báo không nhiễm), có 2% thực chất là đang nhiễm bệnh.\nChọn ngẫu nhiên một người vừa thực hiện xét nghiệm.",
    "explanation": "Gọi \\(N\\) là kết quả âm tính và \\(K\\) là không nhiễm.\n\nA. Sai. Âm tính và dương tính là hai kết quả bổ sung nhau.\n\\[P(N)=1-0{,}12=0{,}88.\\]\nB. Đúng. Trong nhóm âm tính, phần không nhiễm bằng phần còn lại sau khi trừ 2% đang nhiễm.\n\\[P(K\\mid N)=1-0{,}02=0{,}98.\\]\nC. Đúng. Tách những người không nhiễm theo kết quả xét nghiệm.\n\\[P(K)=0{,}88\\times0{,}98+0{,}12\\times0{,}05=0{,}8624+0{,}006=0{,}8684.\\]\nD. Sai. Trong số người không nhiễm, tỉ lệ có kết quả âm tính là\n\\[P(N\\mid K)=\\frac{P(N\\text{ và }K)}{P(K)}=\\frac{0{,}8624}{0{,}8684}\\approx0{,}9931>0{,}99.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất để người đó có kết quả Âm tính là \\(0{,}98\\).",
      "Xác suất để người đó thực sự không nhiễm bệnh, biết rằng kết quả xét nghiệm là Âm tính, bằng \\(0{,}98\\).",
      "Xác suất để người đó thực sự không nhiễm bệnh là \\(0{,}8684\\).",
      "Xác suất để người đó có kết quả Âm tính, biết rằng người đó thực sự không nhiễm bệnh bé hơn \\(0{,}99\\)."
    ],
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-10",
    "sourceNumber": 10,
    "sourcePage": 7,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 7,
      "number": 10
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trước thềm cuộc bầu cử đại biểu Hội đồng nhân dân ở tỉnh X, một cuộc trưng cầu dân ý online đã được tổ chức. Kết quả cho thấy có 40% cử tri tham gia trả lời sẽ bầu cho ứng cử viên A. Sau cuộc bầu cử, tất cả cử tri từng tham gia cuộc trưng cầu dân ý online đều phản hồi lại kết quả mình đã bầu chọn. Các phản hồi cho thấy trong số các cử tri từng trả lời sẽ bầu cho ứng cử viên A có 90% đã thực sự bầu, trong số các cử tri từng trả lời sẽ không bầu cho ứng cử viên A có 20% đã bầu cho ứng cử viên A. Nếu chỉ xét những người tham gia cuộc trưng cầu dân ý online thì",
    "explanation": "Gọi \\(A\\) là biến cố cử tri thực sự bầu cho ứng cử viên A; \\(B\\) là biến cố cử tri trả lời sẽ bầu cho ứng cử viên A (\\(\\overline B\\) là biến cố cử tri trả lời sẽ không bầu cho ứng cử viên A).\n\nA. Đúng. Khi biết cử tri đã trả lời sẽ bầu cho ứng cử viên A, xác suất thực sự bầu được cho trực tiếp là \\(P(A\\mid B)=0{,}9\\).\nB. Sai. Trong nhóm đã trả lời sẽ không bầu, xác suất thực sự không bầu bằng\n\\[P(\\overline A\\mid\\overline B)=1-P(A\\mid\\overline B)=1-0{,}2=0{,}8.\\]\nC. Đúng. Áp dụng công thức xác suất toàn phần cho biến cố \\(A\\):\n\\[P(A)=P(B)\\cdot P(A\\mid B)+P(\\overline B)\\cdot P(A\\mid\\overline B)=0{,}4\\cdot0{,}9+0{,}6\\cdot0{,}2=0{,}36+0{,}12=0{,}48.\\]\nD. Sai. Áp dụng công thức Bayes:\n\\[P(\\overline B\\mid A)=\\frac{P(\\overline B)\\cdot P(A\\mid\\overline B)}{P(A)}=\\frac{0{,}6\\cdot0{,}2}{0{,}48}=\\frac14=0{,}25.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất cử tri bầu ứng cử viên A biết rằng trước bầu cử họ trả lời sẽ bầu ứng cử viên A là \\(0{,}9\\).",
      "Xác suất cử tri không bầu ứng cử viên A biết rằng trước bầu cử họ trả lời sẽ không bầu ứng cử viên A là \\(0{,}2\\).",
      "Tỉ lệ cử tri bầu cho ứng cử viên A là 48%.",
      "Biết rằng một cử tri đã bầu cho ứng cử viên A, xác suất để họ đã nói sẽ không bầu ứng cử viên A trước bầu cử là \\(0{,}2\\)."
    ],
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-11",
    "sourceNumber": 11,
    "sourcePage": 8,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 8,
      "number": 11
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Nhằm đưa ra cảnh báo sớm về tình trạng sức khỏe của cư dân, người ta sử dụng một ứng dụng trí tuệ nhân tạo để sàng lọc nguy cơ mắc bệnh dựa trên hồ sơ y tế được lưu trữ. Khi phát hiện nguy cơ mắc bệnh, ứng dụng này sẽ gửi cảnh báo để giúp người dân đi khám bệnh kịp thời. Người ta dùng ứng dụng này để tầm soát nguy cơ mắc một loại bệnh. Kết quả thu được khi quét thử nghiệm hồ sơ y tế của 10 000 người như sau:\nCó 1 000 người nhận được cảnh báo và 9 000 người còn lại không nhận được cảnh báo từ ứng dụng. Trong số 1 000 người nhận được cảnh báo thì có 700 người có bệnh và 300 người không có bệnh. Trong số 9 000 người không nhận được cảnh báo thì có 100 người có bệnh và 8 900 người không có bệnh. Chọn ngẫu nhiên một người trong số 10 000 người nói trên.",
    "explanation": "Gọi \\(C\\) là biến cố người được chọn nhận được cảnh báo từ ứng dụng (\\(\\overline C\\) là biến cố người đó không nhận được cảnh báo); \\(B\\) là biến cố người được chọn có bệnh (\\(\\overline B\\) là biến cố người đó không có bệnh).\n\nA. Đúng. Có 9 000 người không nhận cảnh báo trong tổng số 10 000 người:\n\\[P(\\overline C)=\\frac{9000}{10000}=0{,}9.\\]\nB. Đúng. Khi biết người đó không nhận được cảnh báo, chỉ xét nhóm 9 000 người:\n\\[P(\\overline B\\mid\\overline C)=\\frac{8900}{9000}\\approx0{,}9889>0{,}98.\\]\nC. Sai. Tổng số người không bệnh ở cả hai nhóm là \\(300+8\\,900=9\\,200\\) người:\n\\[P(\\overline B)=\\frac{9200}{10000}=0{,}92.\\]\nD. Sai. Áp dụng định nghĩa xác suất có điều kiện:\n\\[P(\\overline C\\mid\\overline B)=\\frac{P(\\overline C\\cap\\overline B)}{P(\\overline B)}=\\frac{8900}{9200}\\approx0{,}9674>0{,}95.\\]",
    "kind": "true-false",
    "type": "Đúng / Sai",
    "statements": [
      "Xác suất để người đó không nhận được cảnh báo từ ứng dụng bằng \\(0{,}9\\).",
      "Xác suất để người đó không có bệnh, biết rằng người đó không nhận được cảnh báo từ ứng dụng, lớn hơn \\(0{,}98\\).",
      "Xác suất để người đó không có bệnh bằng \\(0{,}9\\).",
      "Xác suất để người đó không nhận được cảnh báo từ ứng dụng, biết rằng người đó không có bệnh, nhỏ hơn \\(0{,}95\\)."
    ],
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Sai"
  },
  {
    "id": "toan-12-6-vdc-12",
    "sourceNumber": 12,
    "sourcePage": 9,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 9,
      "number": 12
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Có hai chiếc hộp, hộp I có 6 quả bóng màu đỏ và 4 quả bóng màu vàng, hộp II có 7 quả bóng màu đỏ và 3 quả bóng màu vàng, các quả bóng có cùng kích thước và khối lượng. Lấy ngẫu nhiên một quả bóng từ hộp I bỏ vào hộp II. Sau đó, lấy ngẫu nhiên một quả bóng từ hộp II. Tính xác suất để quả bóng được lấy ra từ hộp II là quả bóng được chuyển từ hộp I sang, biết rằng quả bóng đó có màu đỏ (làm tròn kết quả đến hàng phần trăm).",
    "explanation": "Gọi \\(R\\) là rút được bóng đỏ, \\(T\\) là rút đúng bóng vừa chuyển. Hộp II có 11 bóng sau khi chuyển.\n\nNếu chuyển đỏ, hộp II có 8 bóng đỏ. Nếu chuyển vàng, hộp II có 7 bóng đỏ. Do đó\n\\[P(R)=\\frac6{10}\\times\\frac8{11}+\\frac4{10}\\times\\frac7{11}=\\frac{76}{110}.\\]\nMuốn xảy ra cả \\(T\\) và \\(R\\), phải chuyển đúng một bóng đỏ rồi rút lại chính quả bóng ấy.\n\\[P(T\\text{ và }R)=\\frac6{10}\\times\\frac1{11}=\\frac6{110}.\\]\nTrong các lần rút được bóng đỏ, tỉ lệ rút đúng bóng vừa chuyển là\n\\[P(T\\mid R)=\\frac6{76}=\\frac3{38}\\approx0{,}08.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.08,
    "answerText": "0,08",
    "tolerance": 0.000051
  },
  {
    "id": "toan-12-6-vdc-13",
    "sourceNumber": 13,
    "sourcePage": 9,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 9,
      "number": 13
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một hộp chứa 10 viên bi xanh và 5 viên bi đỏ. Bạn An lấy ra ngẫu nhiên 1 viên bi từ hộp xem màu rồi bỏ ra ngoài. Nếu viên bi An lấy ra có màu xanh, bạn Bình sẽ lấy ra ngẫu nhiên 2 viên bi từ hộp; còn nếu viên bi An lấy ra có màu đỏ, bạn Bình sẽ lấy ra ngẫu nhiên 3 viên bi từ hộp. Tính xác suất để An lấy được viên bi màu xanh, biết rằng tất cả các viên bi được hai bạn chọn đều có đủ cả hai màu.",
    "explanation": "Gọi \\(X\\) là An lấy xanh, \\(H\\) là các viên đã lấy có đủ hai màu. Ban đầu \\(P(X)\\) bằng \\(\\frac{10}{15}\\), tức \\(\\frac23\\).\n\nNếu An lấy xanh, hộp còn 9 xanh và 5 đỏ. Hai bạn thiếu màu đỏ chỉ khi cả hai viên của Bình đều xanh.\n\\[P(H\\mid X)=1-\\frac{9\\times8}{14\\times13}=1-\\frac{36}{91}=\\frac{55}{91}.\\]\nNếu An lấy đỏ, hộp còn 10 xanh và 4 đỏ. Hai bạn thiếu màu xanh chỉ khi cả ba viên của Bình đều đỏ.\n\\[P(H\\mid\\overline X)=1-\\frac{4\\times3\\times2}{14\\times13\\times12}=1-\\frac1{91}=\\frac{90}{91}.\\]\nHai nhánh có xác suất tỉ lệ với \\(2\\times55\\) và \\(1\\times90\\) vì xác suất An lấy xanh gấp đôi xác suất lấy đỏ. Do đó\n\\[P(X\\mid H)=\\frac{2\\times55}{2\\times55+1\\times90}=\\frac{110}{200}=\\frac{11}{20}.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.55,
    "answerText": "\\(\\frac{11}{20}\\)",
    "tolerance": 0.000051
  },
  {
    "id": "toan-12-6-vdc-14",
    "sourceNumber": 14,
    "sourcePage": 10,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 10,
      "number": 14
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một nhà máy có hai phân xưởng I và II tương ứng làm ra 40% và 60% sản phẩm của nhà máy. Biết rằng tỉ lệ phế phẩm của hai phân xưởng I và II tương ứng là 1% và 2%. Chọn ngẫu nhiên một sản phẩm của nhà máy thì thấy nó là phế phẩm. Tính xác suất để sản phẩm đó thuộc phân xưởng I.",
    "explanation": "Gọi \\(A_1,A_2\\) lần lượt là biến cố sản phẩm được chọn do phân xưởng I, phân xưởng II làm ra; \\(B\\) là biến cố sản phẩm được chọn là phế phẩm.\n\nTheo giả thiết, ta có \\(P(A_1)=0{,}4\\), \\(P(A_2)=0{,}6\\), \\(P(B\\mid A_1)=0{,}01\\) và \\(P(B\\mid A_2)=0{,}02\\).\nÁp dụng công thức xác suất toàn phần, xác suất chọn được phế phẩm là\n\\[P(B)=P(A_1)\\cdot P(B\\mid A_1)+P(A_2)\\cdot P(B\\mid A_2)=0{,}4\\cdot0{,}01+0{,}6\\cdot0{,}02=0{,}016.\\]\nÁp dụng công thức Bayes, xác suất để phế phẩm đó thuộc phân xưởng I là\n\\[P(A_1\\mid B)=\\frac{P(A_1)\\cdot P(B\\mid A_1)}{P(B)}=\\frac{0{,}4\\cdot0{,}01}{0{,}016}=\\frac14=0{,}25.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.25,
    "answerText": "0,25",
    "tolerance": 0.000051
  },
  {
    "id": "toan-12-6-vdc-15",
    "sourceNumber": 15,
    "sourcePage": 10,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 10,
      "number": 15
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Có hai chiếc hộp, hộp I có 5 quả bóng màu trắng và 7 quả bóng màu đỏ, hộp II có 10 quả bóng màu trắng và 15 quả bóng màu đỏ, các quả bóng có cùng kích thước và khối lượng. Lấy ngẫu nhiên hai quả bóng từ hộp I bỏ vào hộp II. Sau đó lấy ra ngẫu nhiên một quả bóng từ hộp II. Xác suất để quả bóng được lấy ra từ hộp II là quả bóng được chuyển từ hộp I sang, biết rằng quả bóng đó có màu trắng, là \\(\\frac ab\\) (với \\(\\frac ab\\) là phân số tối giản). Tính \\(a+b\\).",
    "explanation": "Gọi \\(M\\) là biến cố quả bóng lấy ra từ hộp II là quả bóng được chuyển từ hộp I sang (\\(\\overline M\\) là biến cố quả bóng lấy ra là quả bóng có sẵn trong hộp II); \\(T\\) là biến cố quả bóng lấy ra có màu trắng.\n\nSau khi chuyển 2 quả bóng từ hộp I sang hộp II, hộp II có tất cả 27 quả bóng, gồm 25 bóng cũ và 2 bóng mới, nên \\(P(M)=\\frac2{27}\\) và \\(P(\\overline M)=\\frac{25}{27}\\).\nMỗi bóng được chuyển có cơ hội như nhau là một trong 12 bóng ban đầu ở hộp I nên \\(P(T\\mid M)=\\frac5{12}\\), còn trong 25 bóng cũ ở hộp II có 10 bóng trắng nên \\(P(T\\mid\\overline M)=\\frac{10}{25}=\\frac25\\).\nÁp dụng công thức xác suất toàn phần:\n\\[P(T)=P(M)\\cdot P(T\\mid M)+P(\\overline M)\\cdot P(T\\mid\\overline M)=\\frac2{27}\\cdot\\frac5{12}+\\frac{25}{27}\\cdot\\frac25=\\frac5{162}+\\frac{60}{162}=\\frac{65}{162}.\\]\nÁp dụng công thức Bayes:\n\\[P(M\\mid T)=\\frac{P(M)\\cdot P(T\\mid M)}{P(T)}=\\frac{\\frac5{162}}{\\frac{65}{162}}=\\frac1{13}.\\]\nPhân số đã tối giản nên \\(a=1\\), \\(b=13\\). Vậy \\(a+b=1+13=14\\).",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 14,
    "answerText": "14",
    "tolerance": 0.000051
  },
  {
    "id": "toan-12-6-vdc-16",
    "sourceNumber": 16,
    "sourcePage": 11,
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 11,
      "number": 16
    },
    "lesson": "Vận dụng cao",
    "difficulty": "",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Trong giải Billiards carom ba băng cá nhân vô địch thế giới lần thứ 76 năm 2024 tổ chức tại Bình Thuận, bốn cơ thủ T (Trần Thanh Lực), D (Dick Jaspers), E (Eddy Merckx), C (Cho Myung-woo) đã giành được quyền vào bán kết. Bốn cơ thủ đang tiếp tục hành trình chinh phục vị trí cao nhất. Trận bán kết 1, cơ thủ T sẽ tranh tài với cơ thủ D. Trận bán kết 2, cơ thủ E sẽ tranh tài với cơ thủ C. Trong trận chung kết, cơ thủ giành chiến thắng ở trận bán kết 1 sẽ tranh tài với cơ thủ giành chiến thắng ở trận bán kết 2, cơ thủ giành chiến thắng ở trận chung kết này được gọi là NHÀ VÔ ĐỊCH. Gọi \\(m_X\\) là số điểm hiện có của cơ thủ \\(X\\) (\\(X\\in\\{T;D;E;C\\}\\)) theo cách tính điểm của Liên đoàn bi-a thế giới – UMB (Union Mondiale de Billard). Nếu cơ thủ \\(X\\) tranh tài với cơ thủ \\(Y\\) (\\(X,Y\\in\\{T;D;E;C\\}\\)) thì xác suất để cơ thủ \\(X\\) giành chiến thắng là \\(\\frac{m_X}{m_X+m_Y}\\) (không có trận hòa). Tính xác suất để cơ thủ T (Trần Thanh Lực) trở thành NHÀ VÔ ĐỊCH; biết rằng \\(m_T=246,m_D=426,m_E=287,m_C=352\\) (làm tròn kết quả đến hàng phần trăm).",
    "explanation": "Gọi \\(A\\) là biến cố cơ thủ T thắng cơ thủ D ở trận bán kết 1; \\(B_1,B_2\\) lần lượt là biến cố cơ thủ E thắng cơ thủ C, cơ thủ C thắng cơ thủ E ở trận bán kết 2; \\(V\\) là biến cố cơ thủ T trở thành nhà vô địch.\n\nỞ trận bán kết 1, xác suất để T thắng D là\n\\[P(A)=\\frac{246}{246+426}=\\frac{246}{672}.\\]\nXét hai trường hợp của trận bán kết 2:\n– Trường hợp 1: E thắng C (\\(B_1\\)) rồi T thắng E ở chung kết:\n\\[P(B_1)=\\frac{287}{287+352}=\\frac{287}{639};\\quad P(V\\mid A\\cap B_1)=\\frac{246}{246+287}=\\frac{246}{533}.\\]\n– Trường hợp 2: C thắng E (\\(B_2\\)) rồi T thắng C ở chung kết:\n\\[P(B_2)=\\frac{352}{287+352}=\\frac{352}{639};\\quad P(V\\mid A\\cap B_2)=\\frac{246}{246+352}=\\frac{246}{598}.\\]\nVì \\(B_1,B_2\\) xung khắc, đầy đủ và độc lập với \\(A\\), xác suất để T vô địch là\n\\[P(V)=P(A)\\cdot[P(B_1)\\cdot P(V\\mid A\\cap B_1)+P(B_2)\\cdot P(V\\mid A\\cap B_2)]\n=\\frac{246}{672}\\left(\\frac{287}{639}\\cdot\\frac{246}{533}+\\frac{352}{639}\\cdot\\frac{246}{598}\\right)\\approx0{,}15884\\approx0{,}16.\\]",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.16,
    "answerText": "0,16",
    "tolerance": 0.000051
  },
  {
    "id": "toan-12-6-vdc-17",
    "sourceNumber": 17,
    "sourcePage": 11,
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một phi đội tại Thái Lan có 20 máy bay, gồm 12 chiếc F-16A (một chỗ ngồi) và 8 chiếc F-16B (hai chỗ ngồi). Trong 12 chiếc F-16A có 3 chiếc đã được nâng cấp chuẩn MLU, trong 8 chiếc F-16B có 5 chiếc đã được nâng cấp chuẩn MLU. Chọn ngẫu nhiên 1 máy bay kiểm tra, biết rằng máy bay được chọn đã nâng cấp MLU, hãy tính xác suất máy bay đó là F-16B (kết quả được làm tròn đến hàng phần trăm).",
    "value": 0.63,
    "answerText": "0,63",
    "explanation": "Gọi \\(B\\) là biến cố máy bay được chọn thuộc loại F-16B; \\(N\\) là biến cố máy bay được chọn đã được nâng cấp chuẩn MLU.\nTrong tổng số 20 máy bay, có \\(3+5=8\\) chiếc đã nâng cấp MLU nên \\(P(N)=\\frac8{20}\\). Có 5 chiếc vừa là F-16B vừa đã nâng cấp MLU nên \\(P(B\\cap N)=\\frac5{20}\\).\nÁp dụng định nghĩa xác suất có điều kiện:\n\\[P(B\\mid N)=\\frac{P(B\\cap N)}{P(N)}=\\frac{\\frac5{20}}{\\frac8{20}}=\\frac58=0{,}625.\\]\nLàm tròn đến hàng phần trăm được \\(0{,}63\\).",
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 11
    }
  },
  {
    "id": "toan-12-6-vdc-18",
    "sourceNumber": 18,
    "sourcePage": 12,
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Xét một bảng ô vuông kích thước \\(3\\times3\\). Mỗi ô được điền ngẫu nhiên và độc lập một giá trị từ tập \\(\\{-1;0;1\\}\\). Biết rằng tổng các số trên mỗi hàng đều bằng 0, gọi \\(p\\) là xác suất để tổng các số trên mỗi cột cũng đều bằng 0. Tính giá trị của \\(3430p\\).",
    "value": 310,
    "answerText": "310",
    "explanation": "Gọi \\(A\\) là biến cố tổng các số trên mỗi hàng đều bằng 0; \\(B\\) là biến cố tổng các số trên mỗi cột đều bằng 0. Khi đó \\(p=P(B\\mid A)\\).\nMột hàng có tổng bằng 0 hoặc là \\((0;0;0)\\), hoặc là một trong 6 hoán vị của \\((-1;0;1)\\). Khi đã biết điều kiện về hàng, có \\(n(A)=7^3=343\\) bảng đồng khả năng.\nĐếm số bảng thuộc \\(A\\cap B\\):\n– Cả ba hàng đều toàn số 0: có 1 bảng (nếu có đúng hai hàng toàn số 0 thì hàng còn lại cũng buộc phải toàn số 0 để mọi cột có tổng bằng 0).\n– Có đúng một hàng toàn số 0: chọn hàng toàn số 0 theo 3 cách, hàng thứ hai có 6 cách điền, hàng cuối buộc đối dấu từng ô với hàng thứ hai nên có 1 cách. Có \\(3\\cdot6=18\\) bảng.\n– Không có hàng nào toàn số 0: cả ba hàng đều là hoán vị của \\((-1;0;1)\\). Mỗi cột có tổng bằng 0 phải gồm đủ ba số \\(-1,0,1\\) (không thể có cột toàn 0 vì khi đó hai cột còn lại gồm ba số lẻ, tổng không thể bằng 0). Chọn hàng đầu theo 6 cách; hàng hai phải khác hàng đầu ở cả ba vị trí nên có 2 cách; hàng ba buộc nhận số còn thiếu ở từng cột. Có \\(6\\cdot2=12\\) bảng.\nDo đó \\(n(A\\cap B)=1+18+12=31\\), suy ra\n\\[p=P(B\\mid A)=\\frac{n(A\\cap B)}{n(A)}=\\frac{31}{343}.\\]\nVậy \\(3430p=3430\\cdot\\frac{31}{343}=310\\).",
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 12
    }
  },
  {
    "id": "toan-12-6-vdc-19",
    "sourceNumber": 19,
    "sourcePage": 12,
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Có hai chuồng \\(A\\) và \\(B\\). Chuồng \\(A\\) ban đầu có 9 con dê trắng và 8 con dê đen. Chuồng \\(B\\) ban đầu có 5 con dê trắng và 6 con dê đen. Các con dê được xem như nhau về kích thước và khả năng bị chọn. Người ta bắt ngẫu nhiên đồng thời 3 con dê từ chuồng \\(A\\) chuyển sang chuồng \\(B\\). Sau đó, từ chuồng \\(B\\) bắt ngẫu nhiên 2 con dê ra kiểm tra. Biết rằng cả 2 con dê bắt ra đều là dê trắng. Hỏi xác suất để cả 2 con dê trắng đó đều là dê chuyển từ chuồng \\(A\\) sang là bao nhiêu phần trăm? (kết quả làm tròn đến hai chữ số ở phần thập phân).",
    "value": 4.24,
    "answerText": "\\(4{,}24\\%\\)",
    "explanation": "Gọi \\(A\\) là biến cố cả hai con dê bắt ra từ chuồng \\(B\\) đều là dê trắng; \\(B\\) là biến cố cả hai con dê bắt ra từ chuồng \\(B\\) đều là dê được chuyển từ chuồng \\(A\\) sang; \\(H_k\\) (\\(k\\in\\{0,1,2,3\\}\\)) là biến cố trong 3 con dê chuyển từ chuồng \\(A\\) sang chuồng \\(B\\) có đúng \\(k\\) con dê trắng.\nVới mỗi nhóm 3 con được chuyển, chuồng \\(B\\) có 14 con. Mọi cách chuyển 3 con từ chuồng \\(A\\) rồi chọn một cặp trong 14 con ở chuồng \\(B\\) đều đồng khả năng:\n– Nếu \\(k=0\\): có \\(C_8^3=56\\) cách chuyển 3 dê đen. Trong chuồng \\(B\\) có 5 dê trắng, chọn được \\(C_5^2=10\\) cặp trắng và 0 cặp trắng mới chuyển.\n– Nếu \\(k=1\\): có \\(C_9^1\\cdot C_8^2=9\\cdot28=252\\) cách chuyển. Trong chuồng \\(B\\) có 6 dê trắng, chọn được \\(C_6^2=15\\) cặp trắng và 0 cặp trắng mới chuyển.\n– Nếu \\(k=2\\): có \\(C_9^2\\cdot C_8^1=36\\cdot8=288\\) cách chuyển. Trong chuồng \\(B\\) có 7 dê trắng, chọn được \\(C_7^2=21\\) cặp trắng và \\(C_2^2=1\\) cặp trắng mới chuyển.\n– Nếu \\(k=3\\): có \\(C_9^3=84\\) cách chuyển 3 dê trắng. Trong chuồng \\(B\\) có 8 dê trắng, chọn được \\(C_8^2=28\\) cặp trắng và \\(C_3^2=3\\) cặp trắng mới chuyển.\nSố kết quả thuận lợi cho biến cố \\(A\\) và biến cố \\(A\\cap B\\) lần lượt là\n\\[n(A)=56\\cdot10+252\\cdot15+288\\cdot21+84\\cdot28=12\\,740.\\]\n\\[n(A\\cap B)=288\\cdot1+84\\cdot3=540.\\]\nXác suất cần tìm là\n\\[P(B\\mid A)=\\frac{n(A\\cap B)}{n(A)}=\\frac{540}{12\\,740}=\\frac{27}{637}\\approx4{,}24\\%.\\]",
    "unit": "%",
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 12
    }
  },
  {
    "id": "toan-12-6-vdc-20",
    "sourceNumber": 20,
    "sourcePage": 13,
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Một con mã đang được đặt ở vị trí chính giữa tâm ô vuông d4 trong bàn cờ vua. Thầy Nghĩa di chuyển con mã 4 bước để sau 4 bước đó quân mã quay trở lại vị trí ban đầu với điều kiện 4 bước đi không trùng nhau. Mỗi bước di chuyển Thầy Nghĩa đều đặt con mã ở các điểm chính giữa tâm ô vuông đó (4 điểm đặt mã sau 4 bước được xem là 4 điểm ở tâm ô vuông con mã đi đến). Xác suất đường đi của con mã có 4 điểm đặt đó là 4 đỉnh của một hình vuông có dạng \\(\\frac ab\\) (là phân số tối giản, \\(a,b\\in\\mathbb N^*\\)). Tính \\(a+2b\\)?\nCách di chuyển của quân Mã: Mã di chuyển theo đường chéo của hình chữ nhật \\(2\\times3\\) ô vuông (hoặc \\(3\\times2\\) ô vuông).",
    "value": 26,
    "answerText": "26",
    "explanation": "Gọi \\(A\\) là biến cố quân mã thực hiện hành trình 4 bước khép kín qua 4 ô phân biệt rồi trở về vị trí ban đầu d4; \\(B\\) là biến cố 4 điểm đặt mã sau 4 bước là 4 đỉnh của một hình vuông. Ta cần tính \\(P(B\\mid A)\\).\nGọi \\(O\\) là ô d4. Mỗi hành trình thuộc \\(A\\) có dạng \\(O\\to P\\to Q\\to R\\to O\\). Sau nước đầu đến \\(P\\) và nước thứ hai đến \\(Q\\ne O\\), ta đếm các ô \\(R\\ne P\\) mà quân mã từ \\(Q\\) tới được và có thể trở về \\(O\\):\n– Với \\(P=\\mathrm{b3}\\), có 5 cặp \\((Q,R)\\) thỏa mãn là \\((\\mathrm{c5},\\mathrm{e6})\\), \\((\\mathrm{c1},\\mathrm{e2})\\), \\((\\mathrm{a5},\\mathrm{c6})\\), \\((\\mathrm{a1},\\mathrm{c2})\\) và \\((\\mathrm{d2},\\mathrm{f3})\\).\n– Đếm tương tự theo từng ô đầu: ứng với \\(P=\\mathrm{b3},\\mathrm{b5},\\mathrm{c2},\\mathrm{c6},\\mathrm{e2},\\mathrm{e6},\\mathrm{f3},\\mathrm{f5}\\), số hành trình lần lượt là 5, 5, 5, 6, 5, 6, 6, 6.\nDo đó số phần tử của biến cố \\(A\\) là\n\\[n(A)=5+5+5+6+5+6+6+6=44.\\]\nĐể tạo thành hình vuông (biến cố \\(A\\cap B\\)), sau nước đi đầu tiên \\(O\\to P\\), vectơ bước đi thứ hai \\(\\overrightarrow{PQ}\\) phải là vectơ \\(\\overrightarrow{OP}\\) quay \\(90^\\circ\\) theo một trong hai chiều. Chẳng hạn bắt đầu \\(\\mathrm{d4}\\to\\mathrm{b3}\\) thì hai hình vuông tiếp tục qua c1, e2 hoặc qua a5, c6. Cả 8 nước đi đầu đều cho đúng 2 hình vuông nằm trọn trên bàn cờ nên \\(n(A\\cap B)=8\\cdot2=16\\).\nXác suất cần tìm là\n\\[P(B\\mid A)=\\frac{n(A\\cap B)}{n(A)}=\\frac{16}{44}=\\frac4{11}.\\]\nVới \\(a=4,b=11\\), ta có \\(a+2b=4+2\\cdot11=26\\).",
    "sourceNote": "Lời giải coi các hành trình hợp lệ là đồng khả năng.",
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 13
    }
  },
  {
    "id": "toan-12-6-vdc-21",
    "sourceNumber": 21,
    "sourcePage": 13,
    "lesson": "Vận dụng cao",
    "kind": "short",
    "type": "Trả lời ngắn",
    "nativeLatex": true,
    "originalSolution": true,
    "hint": "Lời giải",
    "prompt": "Chuỗi cửa hàng máy tính nhằm kích cầu mua sắm và hỗ trợ khách hàng trong thời kì nguồn cung linh kiện khan hiếm, chuỗi cửa hàng phát hành phiếu bốc thăm trúng thưởng cho khách hàng đến mua sắm sẽ được bốc thăm một mã dự thưởng, mỗi mã dự thưởng là một dãy các số được viết dưới dạng \\(abcdef\\) được lấy từ tập \\(\\{0;1;2;\\ldots;9\\}\\). Một mã dự thưởng sẽ trúng theo quy định nếu thỏa điều kiện \\(a+b+c=d+e+f\\). Khách hàng sau khi thanh toán sẽ xếp hàng bốc thưởng theo lượt riêng biệt và lá thăm sau khi bốc sẽ bị tiêu hủy. Xác suất để người thứ 300426 trúng thưởng là \\(P\\), biết rằng trước đó đã có 4602 người trúng. Giá trị của \\(27983P\\) bằng",
    "value": 2026,
    "answerText": "2026",
    "explanation": "Gọi \\(A\\) là biến cố khách hàng thứ 300 426 bốc được mã dự thưởng trúng thưởng.\nXét mã bất kỳ \\(abcdef\\) với \\(a,b,c,d,e,f\\in\\{0,1,\\ldots,9\\}\\) (có tất cả \\(10^6\\) mã). Đổi ba chữ số cuối thành \\(d'=9-d,e'=9-e,f'=9-f\\). Đây là phép tương ứng một-một và điều kiện trúng thưởng \\(a+b+c=d+e+f\\) trở thành\n\\[a+b+c+d'+e'+f'=27\\quad(0\\le a,b,c,d',e',f'\\le9).\\]\nÁp dụng nguyên lý bù trừ:\n– Số nghiệm nguyên không âm của tổng bằng 27 là \\(C_{32}^5=201\\,376\\).\n– Nếu có một chữ số ít nhất bằng 10, số cách chọn là \\(C_6^1\\cdot C_{22}^5=6\\cdot26\\,334\\).\n– Nếu có hai chữ số ít nhất bằng 10, số cách chọn là \\(C_6^2\\cdot C_{12}^5=15\\cdot792\\) (ba chữ số không thể cùng ít nhất bằng 10).\nTổng số vé trúng thưởng ban đầu là\n\\[N=201\\,376-6\\cdot26\\,334+15\\cdot792=55\\,252.\\]\nỞ thời điểm xét đã rút 300 425 vé, trong đó có 4 602 vé trúng thưởng, nên còn lại \\(55\\,252-4\\,602=50\\,650\\) vé trúng thưởng trong \\(1\\,000\\,000-300\\,425=699\\,575\\) vé chưa rút. Xác suất cần tìm là\n\\[P=P(A)=\\frac{50\\,650}{699\\,575}.\\]\nVậy \\(27983P=\\frac{27983\\cdot50\\,650}{699\\,575}=2026\\).",
    "source": {
      "file": "VDC_Chuong_6.pdf",
      "page": 13
    }
  }
];
