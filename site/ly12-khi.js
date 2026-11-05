// Ngân hàng Chương 2 lấy từ hai PDF có lời giải.
export const idealGasQuestions = [
  {
    "id": "ly-12-2-khi-2-7",
    "difficulty": "Nhận biết",
    "prompt": "Khí thực (khí trong tự nhiên) có tính chất tuân theo gần đúng các định luật về khí lí tưởng trong điều kiện nào sau đây? A. Áp suất thấp và nhiệt độ cao. B. Áp suất cao và nhiệt độ thấp. C. Áp suất cao và nhiệt độ cao. D. Áp suất thấp và nhiệt độ thấp.",
    "explanation": "Đáp án: A Giải Áp suất thấp làm các phân tử ở xa nhau hơn. Nhiệt độ cao làm động năng nhiệt lớn so với năng lượng tương tác. Khi đó mô hình khí lí tưởng gần đúng tốt hơn.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-7-de",
      "solution": "2-7-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-12",
    "difficulty": "Nhận biết",
    "prompt": "Trong các luận điểm của thuyết động học phân tử chất khí, phát biểu nào sau đây là sai? A. Các phân tử khí chuyển động hỗn loạn không ngừng. B. Nhiệt độ của khối khí càng cao thì tốc độ chuyển động hỗn loạn của các phân tử càng lớn. C. Lực tương tác giữa các phân tử khí rất lớn, ngay cả khi chúng ở xa nhau. D. Kích thước của các phân tử khí rất nhỏ so với khoảng cách giữa chúng.",
    "explanation": "Đáp án: C Giải Theo mô hình, các phân tử ở xa nhau tương tác rất yếu. Tương tác đáng kể chủ yếu trong thời gian va chạm.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-12-de",
      "solution": "2-12-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-14",
    "difficulty": "Nhận biết",
    "prompt": "Thảo luận về thuyết động học phân tử chất khí, một nhóm học sinh đưa ra các nhận định sau: a) Các phân tử khí luôn chuyển động hỗn loạn không ngừng. b) Kích thước của các phân tử khí rất lớn so với khoảng cách trung bình giữa chúng. c) Nhiệt độ của khối khí càng cao thì tốc độ chuyển động nhiệt của các phân tử càng lớn. d) Khi các phân tử khí va chạm vào thành bình, chúng không gây ra áp suất lên thành bình.",
    "explanation": "Giải a) Đúng. Chuyển động hỗn loạn không ngừng là một giả thiết cơ bản của thuyết động học phân tử. b) Sai. Kích thước phân tử khí rất nhỏ so với khoảng cách trung√bình giữa chúng. c) Đúng. Với cùng loại khí, tốc độ căn quân phương tăng theo T . d) Sai. Va chạm truyền xung lượng cho thành bình và gây áp suất.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-14-de",
      "solution": "2-14-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-4",
    "difficulty": "Thông hiểu",
    "prompt": "Mối liên hệ giữa áp suất, thể tích và nhiệt độ của một lượng khí trong quá trình nào dưới đây không được xác định bằng phương trình trạng thái của khí lí tưởng? A. Làm nóng một lượng khí trong một bình đậy kín; B. Làm nóng một lượng khí trong một bình không đậy kín; C. Làm nóng một lượng khí trong xilanh kín có pít-tông làm khí nóng lên, nở ra, đẩy pít-tông di chuyển; D. Dùng tay bóp méo quả bóng bay.",
    "explanation": "Đáp án B Giải Phương trình pV /T = nR cho một lượng khí xác định đòi hỏi n không đổi. Khi làm nóng khí trong bình hở, khí có thể thoát ra ngoài nên không thể dùng dạng pV /T = const cho khí còn lại.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-4-de",
      "solution": "1-4-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-5",
    "difficulty": "Thông hiểu",
    "prompt": "Cho một quá trình biến đổi trạng thái của một lượng khí xác định được biểu diễn như hình vẽ. Các thông số trạng thái của hệ đã thay đổi như thế nào khi chuyển từ trạng thái 1 sang trạng thái 2? A. T không đổi, p tăng, V giảm. B. V không đổi, p tăng, T giảm. C. V tăng, p tăng, T giảm. D. p tăng, V tăng, T tăng.",
    "explanation": "Đáp án D Giải Trên đồ thị p, V , điểm 2 nằm cao hơn và bên phải điểm 1, nên cả p và V đều tăng. Với số mol không đổi, T = pV /(nR) cũng tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-5-de",
      "solution": "1-5-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-17",
    "difficulty": "Thông hiểu",
    "prompt": "Một lượng khí lí tưởng xác định thực hiện chu trình biến đổi trạng thái khép kín A → B → C → D → A được biểu diễn trên hệ tọa độ p–T như hình bên (với p và T lần lượt là áp suất và nhiệt độ tuyệt đối của khối khí). Nội năng của khối khí không thay đổi trong quá trình nào sau đây? p ▷ ▷ ▷ T O ▷ A B C D A. A → B. B. B → C. C. C → D. D. D → A.",
    "explanation": "Đáp án: D Giải Nội năng của một lượng khí lí tưởng phụ thuộc vào nhiệt độ. Đoạn D → A song song với trục p, nên T không đổi.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-17-de",
      "solution": "2-17-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-18",
    "difficulty": "Thông hiểu",
    "prompt": "Hiện tượng lốp xe đạp được bơm căng, khi để ngoài trời nắng gắt dễ bị nổ (bỏ qua sự dãn nở của lốp) có thể được giải thích chủ yếu dựa trên A. định luật Boyle. B. định luật Charles. C. định luật I Newton. D. định luật Gay-Lussac.",
    "explanation": "Đáp án: D Giải Coi lượng khí và thể tích lốp không đổi, p/T không đổi theo định luật Gay-Lussac. Nhiệt độ tăng khiến áp suất trong lốp tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-18-de",
      "solution": "2-18-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-19",
    "difficulty": "Thông hiểu",
    "prompt": "Hai bình kín A và B có cùng thể tích. Bình A chứa 1 mol khí Nitrogen, bình B chứa 1 mol khí Oxygen (coi các khí đều là khí lí tưởng). Cả hai bình được giữ ở cùng một nhiệt độ. Nhận xét nào sau đây đúng khi so sánh áp suất khí trong hai bình? A. Áp suất khí trong bình A lớn hơn bình B. B. Áp suất khí trong bình B lớn hơn bình A. C. Áp suất khí trong hai bình bằng nhau. D. Áp suất khí trong bình B lớn gấp đôi bình A.",
    "explanation": "Đáp án: C Giải Từ p = nRT /V , hai bình có cùng n, T và V nên có cùng áp suất.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-19-de",
      "solution": "2-19-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-20",
    "difficulty": "Thông hiểu",
    "prompt": "Một lượng khí xác định biến đổi trạng thái sao cho nhiệt độ tuyệt đối tăng lên và áp suất giảm đi. Thể tích của khối khí sẽ A. không đổi. B. giảm xuống. C. tăng lên. D. chưa thể kết luận.",
    "explanation": "Đáp án: C Giải Với số mol cố định, V = nRT /p. Tử số tăng đồng thời mẫu số giảm nên thể tích tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-20-de",
      "solution": "2-20-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-21",
    "difficulty": "Thông hiểu",
    "prompt": "Nếu nhiệt độ của một khối khí lí tưởng tăng lên, tốc độ căn quân phương của các phân tử khí sẽ A. không đổi vì khối lượng phân tử không đổi. B. tăng lên vì động năng trung bình của phân tử tăng. C. tăng lên vì các phân tử khí dãn nở. D. giảm đi vì các phân tử va chạm vào nhau nhiều hơn.",
    "explanation": "Đáp án: B Giải √ Từ 1 mv2 = 3 kT , với cùng loại phân tử, v tăng theo T . 2 rms 2 rms",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-21-de",
      "solution": "2-21-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-22",
    "difficulty": "Thông hiểu",
    "prompt": "Xét một lượng khí lí tưởng đang dãn nở đẳng nhiệt. Nhận xét nào sau đây đúng về các phân tử khí? A. Số phân tử khí trong một đơn vị thể tích không đổi. B. Động năng tịnh tiến trung bình của các phân tử giảm dần do thể tích tăng. C. Động năng tịnh tiến trung bình của các phân tử khí được giữ không đổi. D. Áp suất khối khí tăng vì khoảng không gian dãn nở làm tăng va chạm.",
    "explanation": "Đáp án: C Giải Dãn nở đẳng nhiệt giữ T không đổi, nên 3 kT không đổi. Mật độ phân tử và áp suất đều giảm khi thể tích tăng. 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-22-de",
      "solution": "2-22-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-24",
    "difficulty": "Thông hiểu",
    "prompt": "Trong biểu thức pV = hằng số của định luật Boyle, giá trị của hằng số này phụ thuộc vào A. áp suất ban đầu của lượng khí. B. thể tích ban đầu của lượng khí. C. mọi lượng khí ở mọi nhiệt độ. D. khối lượng, nhiệt độ và bản chất của khí đang xét.",
    "explanation": "Đáp án: D Giải Hằng số trong định luật Boyle là nRT = mRT /M . Giá trị này phụ thuộc vào khối lượng m, nhiệt độ T và khối lượng mol M của khí.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-24-de",
      "solution": "2-24-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-25",
    "difficulty": "Thông hiểu",
    "prompt": "Phương trình trạng thái của khí lí tưởng có thể được ứng dụng vào việc nghiên cứu và chế tạo các thiết bị nào sau đây? A. Máy phát điện, lò vi sóng. B. Máy tính, điện thoại di động. C. Bình đựng khí, máy nén khí. D. Bàn là, bếp điện.",
    "explanation": "Đáp án: C Giải Phương trình trạng thái mô tả sự liên hệ giữa áp suất, thể tích, nhiệt độ và lượng khí trong bình chứa hoặc trong quá trình nén.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-25-de",
      "solution": "2-25-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-26",
    "difficulty": "Thông hiểu",
    "prompt": "Ứng dụng nào sau đây trong đời sống và kĩ thuật chủ yếu dựa trên nguyên lí của quá trình dãn nở đẳng áp của chất khí (hoặc sự thay đổi khối lượng riêng theo nhiệt độ)? A. Hoạt động của nồi áp suất nắp kín. B. Bơm kim tiêm khi hút dung dịch. C. Khinh khí cầu bay lên không trung. D. Bình chứa khí nén trong lặn biển.",
    "explanation": "Đáp án: C Giải Trong khí cầu, không khí nóng có khối lượng riêng nhỏ hơn không khí ngoài ở cùng áp suất. Chênh lệch khối lượng riêng tạo lực nâng có ích.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-26-de",
      "solution": "2-26-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-28",
    "difficulty": "Thông hiểu",
    "prompt": "Hiện tượng khuếch tán của các chất khí vào nhau xảy ra nhanh hơn khi A. áp suất của các chất khí giảm mạnh. B. nhiệt độ của các chất khí giảm. C. nhiệt độ của các chất khí tăng. D. chênh lệch khối lượng của các hạt tăng lên.",
    "explanation": "Đáp án: C Giải Với các điều kiện khác tương đương, nhiệt độ cao làm chuyển động nhiệt mạnh hơn và các chất khí trộn vào nhau nhanh hơn.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-28-de",
      "solution": "2-28-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-31",
    "difficulty": "Thông hiểu",
    "prompt": "Quan sát các hạt bụi rất nhỏ lơ lửng trong không khí dưới kính hiển vi, ta thấy chúng chuyển động hỗn loạn, không ngừng. Chuyển động Brown này là do Minh họa các hạt bụi quan sát dưới kính hiển vi A. các dòng khí đối lưu do đèn rọi sáng gây ra. B. lực hút hấp dẫn giữa các hạt. C. sự va chạm không cân bằng liên tục của các D. dao động nhẹ do các điều kiện môi trường gây phân tử khí lên hạt bụi. ra.",
    "explanation": "Đáp án: C Giải Các phân tử khí va chạm với hạt bụi từ nhiều phía. Lực tổng hợp tức thời thay đổi ngẫu nhiên, khiến hạt bụi chuyển động Brown.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-31-de",
      "solution": "2-31-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-32",
    "difficulty": "Thông hiểu",
    "prompt": "Xét một lượng khí lí tưởng xác định được đựng trong một xilanh. Nếu ta tác động làm thay đổi trạng thái của khối khí sao cho cả áp suất và thể tích của khối khí đều tăng, thì nhiệt độ tuyệt đối của khối khí đó sẽ A. chắc chắn tăng. B. chắc chắn giảm. C. được giữ nguyên không đổi. D. có thể tăng hoặc giảm.",
    "explanation": "Đáp án: A Giải Từ T = pV /(nR), tích của hai đại lượng dương p và V tăng khi cả hai cùng tăng, nên T tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-32-de",
      "solution": "2-32-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-33",
    "difficulty": "Thông hiểu",
    "prompt": "Ba trạng thái của một lượng khí lí tưởng xác định được biểu diễn bằng ba điểm A, B, C trên đồ thị áp suất p – nhiệt độ Celsius t như hình bên. So sánh nào sau đây đúng về thể tích V , V và V A B C của khí ở ba trạng thái này? p A B C ◦ t ( C) −273 O A. V > V = V . B. V = V < V . A B C A C B C. V < V = V . D. V = V > V . A B C A C B",
    "explanation": "Đáp án: C Giải Độ dốc của đường nối trạng thái với mốc T = 0 là p/T = nR/V . Hai điểm B, C cùng nằm trên một đường, còn đường qua A dốc hơn. Do đó V < V = V . A B C",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-33-de",
      "solution": "2-33-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-34",
    "difficulty": "Thông hiểu",
    "prompt": "Đặt hai khối khí lí tưởng khác nhau (khí 1 có khối lượng mol nhỏ hơn khí 2) vào hai bình chứa riêng biệt nhưng được duy trì ở cùng một nhiệt độ. Phát biểu nào sau đây so sánh đúng đặc điểm chuyển động nhiệt của hai khối khí? A. Tốc độ căn quân phương của các phân tử khí 1 lớn hơn các phân tử khí 2. B. Tốc độ căn quân phương của các phân tử khí 1 nhỏ hơn các phân tử khí 2. C. Động năng tịnh tiến trung bình của các phân tử khí 1 lớn hơn một phân tử khí 2. D. Động năng tịnh tiến trung bình của các phân tử khí 1 nhỏ hơn một phân tử khí 2.",
    "explanation": "Đáp án: A Giải √ Ở cùng nhiệt độ, hai khí có cùng động năng tịnh tiến trung bình. Từ v = 3RT /M , khí 1 có M nhỏ hơn rms nên có tốc độ căn quân phương lớn hơn.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-34-de",
      "solution": "2-34-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-36",
    "difficulty": "Thông hiểu",
    "prompt": "Phát biểu nào sau đây là đúng về các phân tử của một lượng khí lí tưởng trong một bình kín có nhiệt độ không đổi? A. Vận tốc trung bình của các phân tử bằng không. B. Trong khoảng thời gian giữa hai lần va chạm liên tiếp, tốc độ của phân tử giảm dần. C. Các phân tử đẩy nhau khi đến gần thành bình. D. Sau mỗi va chạm vào thành bình, phân tử chuyển động nhanh dần.",
    "explanation": "Đáp án: A Giải Trong bình đứng yên và ở cân bằng, chuyển động nhiệt không có hướng ưu tiên, nên trung bình vectơ vận tốc bằng không.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-36-de",
      "solution": "2-36-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-37",
    "difficulty": "Thông hiểu",
    "prompt": "Hai khối khí lí tưởng có cùng số mol, ở cùng nhiệt độ. Khối khí 1 có áp suất lớn hơn khối khí 2. Phát biểu nào sau đây là đúng? A. Thể tích của khối khí 1 lớn hơn của khối khí 2. B. Thể tích của khối khí 1 nhỏ hơn của khối khí 2. C. Thể tích của hai khối khí bằng nhau. D. Chưa thể kết luận được.",
    "explanation": "Đáp án: B Giải Hai khối khí có cùng n, T nên p V = p V . Do p > p nên V < V . 1 1 2 2 1 2 1 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-37-de",
      "solution": "2-37-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-40",
    "difficulty": "Thông hiểu",
    "prompt": "Khảo sát quá trình biến đổi đẳng nhiệt của một lượng khí lí tưởng xác định, học sinh ghi nhận: a) Nhiệt độ của khối khí được duy trì không đổi trong suốt quá trình. b) Áp suất của khối khí tỉ lệ thuận với thể tích của khối khí. c) Đồ thị biểu diễn quá trình này trong hệ tọa độ (p, V) là một đường hypebol. d) Khi thể tích khối khí giảm đi một nửa thì mật độ phân tử khí cũng giảm đi một nửa.",
    "explanation": "Giải a) Đúng. Đẳng nhiệt nghĩa là giữ nhiệt độ không đổi. b) Sai. Với T và n không đổi, pV = nRT nên p tỉ lệ nghịch với V . c) Đúng. Đường p = nRT /V là một nhánh hypebol trong miền V > 0. d) Sai. Vì N cố định, V giảm một nửa làm µ = N /V tăng gấp đôi.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-40-de",
      "solution": "2-40-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-41",
    "difficulty": "Thông hiểu",
    "prompt": "Phân tích quá trình biến đổi trạng thái của khối khí trong xilanh dựa trên Nguyên lí I Nhiệt động lực học, một nhóm học sinh đưa ra các quan điểm sau: a) Trong quá trình đẳng nhiệt, nội năng của khối khí luôn được giữ không đổi. b) Trong quá trình đẳng tích, nội năng của khối khí tăng khi khối khí nhận nhiệt lượng. c) Trong quá trình đẳng áp, nội năng của khối khí tăng khi nhiệt độ tuyệt đối của khí tăng. d) Nội năng của một lượng khí lí tưởng phụ thuộc vào cả nhiệt độ, áp suất và thể tích.",
    "explanation": "Giải a) Đúng. Nội năng của một lượng khí lí tưởng chỉ phụ thuộc vào nhiệt độ. b) Đúng. Ở thể tích không đổi, công do khí thực hiện bằng không. Do đó ∆U = Q > 0. c) Đúng. Khi nhiệt độ tăng, nội năng tăng dù áp suất được giữ cố định. d) Sai. Với một lượng khí lí tưởng xác định, p và V có thể thay đổi mà nội năng giữ nguyên nếu T không đổi.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Đúng",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-41-de",
      "solution": "2-41-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-42",
    "difficulty": "Thông hiểu",
    "prompt": "Khi vận dụng phương trình Clapeyron đối với khí lí tưởng, một bạn học sinh lập luận rằng: a) Tỉ số giữa tích của áp suất và thể tích với nhiệt độ tuyệt đối là đại lượng không đổi. b) Hằng số khí lí tưởng R có giá trị thay đổi phụ thuộc vào bản chất của từng loại khí. c) Nếu tăng áp suất lên gấp đôi và giảm thể tích đi một nửa thì nhiệt độ tuyệt đối không đổi. d) Phương trình pV = nRT chỉ áp dụng cho khí thực ở áp suất rất cao và nhiệt độ rất thấp.",
    "explanation": "Giải a) Đúng với lượng khí cố định. Từ pV /T = nR, nếu n thay đổi thì tỉ số này cũng thay đổi. b) Sai. R là hằng số chung cho mọi khí lí tưởng. c) Đúng với lượng khí cố định. Khi p tăng gấp đôi và V còn một nửa, tích pV không đổi nên T không đổi. d) Sai. Phương trình dùng cho khí lí tưởng. Khí thực thường gần mô hình này ở áp suất thấp và nhiệt độ đủ cao.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-42-de",
      "solution": "2-42-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-43",
    "difficulty": "Thông hiểu",
    "prompt": "Trình bày về mối liên hệ giữa động năng phân tử và nhiệt độ, một nhóm học sinh cho rằng: a) Nhiệt độ tuyệt đối của khối khí tỉ lệ thuận với động năng tịnh tiến trung bình của các phân tử. b) Ở nhiệt độ không tuyệt đối (0 K), động năng tịnh tiến của các phân tử bằng không. c) Ở cùng một nhiệt độ, động năng trung bình của các phân tử khí Oxygen lớn hơn khí Hydrogen. d) Tốc độ căn quân phương của các phân tử khí hoàn toàn không phụ thuộc vào khối lượng mol của nó.",
    "explanation": "Giải a) Đúng. Công thức W = 3 kT cho quan hệ tỉ lệ thuận. đ 2 b) Đúng trong giới hạn của mô hình cổ điển. Khi T → 0, động năng tịnh tiến trung bình theo công thức tiến về không. c) Sai. Cùng nhiệt độ thì hai khí√có cùng động năng tịnh tiến trung bình. d) Sai. Ở cùng nhiệt độ, v = 3RT /M giảm khi khối lượng mol tăng. rms",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-43-de",
      "solution": "2-43-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-44",
    "difficulty": "Thông hiểu",
    "prompt": "Một nhóm học sinh tiến hành thí nghiệm khảo sát mối liên hệ giữa áp suất và thể tích của một lượng khí lí tưởng xác định khi nhiệt độ được giữ không đổi với bộ dụng cụ được bố trí như hình bên. Trong quá trình thực hành, piston được dịch chuyển từ từ để làm thay đổi thể tích khí trong xilanh. Khi khối khí đã đạt trạng thái cân bằng nhiệt với môi trường, giá trị thể tích V trên xilanh (thông qua thước đo) và áp suất p tương ứng trên áp kế được ghi lại. Áp kế Giá đỡ thí nghiệm Xilanh Piston Thước đo a) Mục đích của thí nghiệm là kiểm nghiệm lại định luật Boyle. b) Thao tác dịch chuyển piston từ từ nhằm mục đích chính là giúp người làm thí nghiệm dễ dàng ghi nhận chính xác các số chỉ trên dụng cụ đo. c) Trong thí nghiệm trên, thể tích khí V là biến phụ thuộc. d) Để đường biểu diễn thực nghiệm thu được là một đường thẳng kéo dài đi qua gốc tọa độ, ta cần vẽ đồ thị biểu diễn sự phụ thuộc của áp suất khí p vào thể tích khí V.",
    "explanation": "Giải a) Đúng. Thí nghiệm khảo sát p theo V với lượng khí và nhiệt độ cố định, đúng điều kiện định luật Boyle. b) Sai. Dịch chuyển chậm chủ yếu để khí có thời gian trao đổi nhiệt với môi trường, giúp quá trình gần đẳng nhiệt. c) Sai. Người làm thí nghiệm chủ động thay đổi V , rồi đo p. Vì vậy V là biến độc lập. d) Sai. Đồ thị p theo V là hypebol. Vẽ p theo 1/V mới cho đường thẳng có phần kéo dài đi qua gốc tọa độ.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-44-de",
      "solution": "2-44-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-46",
    "difficulty": "Thông hiểu",
    "prompt": "Trong thí nghiệm “nghiên cứu mối quan hệ giữa áp suất và nhiệt độ của một khối lượng khí xác định khi thể tích không đổi”, nhóm học sinh đã tiến hành chuẩn bị các dụng cụ và bố trí như hình H1. Sau mỗi lần thêm một lượng nước nóng thích hợp, tiến hành đo số liệu áp suất và nhiệt độ rồi vẽ được đồ thị trên hệ tọa độ p – t như hình H2. Cảm biến A Cảm biến B p Que khuấy Nước nóng Nước t (◦C) O H1 H2 a) Cảm biến A trên hình H1 là cảm biến áp suất. b) Mục đích của thí nghiệm là kiểm chứng định luật Charles. c) Việc dùng que khuấy để khuấy đều nước trong bình trước mỗi lần đọc dữ liệu là không cần thiết. d) Nhiệt độ tại giao điểm của đường thực nghiệm và trục hoành được gọi là nhiệt độ không tuyệt đối.",
    "explanation": "Giải a) Sai. Cảm biến A đo nhiệt độ của nước, còn B nối với ống nghiệm để đo áp suất khí. b) Sai. Thể tích cố định nên thí nghiệm kiểm chứng quan hệ đẳng tích p/T = hằng số. c) Sai. Khuấy đều làm giảm chênh lệch nhiệt độ trong chậu, giúp số đo đại diện tốt hơn cho nhiệt độ của khí sau cân bằng. d) Đúng nếu hiểu là giao điểm của đường ngoại suy. Từ p ∝ t + 273,15, p = 0 ứng với khoảng −273,15 ◦ C.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Sai",
      "Sai",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Sai, c) Sai, d) Đúng",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-46-de",
      "solution": "2-46-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-47",
    "difficulty": "Thông hiểu",
    "prompt": "Trong điều kiện áp suất cao ở biển sâu, một lượng lớn khí nitrogen hòa tan vào hệ tuần hoàn của thợ lặn. Quá trình giảm áp khi thợ lặn bơi lên mặt nước khiến lượng khí nitrogen này tách khỏi trạng thái hòa tan và hình thành các bọt khí trong mạch máu. Giả thiết nhiệt độ cơ thể thợ lặn được duy trì không đổi trong toàn bộ quá trình. a) Áp suất của bọt khí tại đáy biển luôn nhỏ hơn áp suất của bọt khí đó khi tiếp cận mặt nước. b) Theo định luật Charles, sự giảm áp suất môi trường làm tăng thể tích các bọt khí nitrogen trong máu. c) Khi nổi lên, khoảng cách trung bình giữa các phân tử khí bên trong bọt khí giảm dần. d) Tốc độ giảm áp quá nhanh gây dãn nở bọt khí đột ngột, dẫn đến chèn ép mô thần kinh và tắc mạch.",
    "explanation": "Giải a) Sai. Áp suất môi trường tăng theo độ sâu. Trong mô hình bọt cân bằng với môi trường xung quanh, áp suất bọt dưới sâu lớn hơn gần mặt nước. b) Sai. Quan hệ giữa p và V của một bọt có lượng khí cố định ở nhiệt độ không đổi là định luật Boyle. c) Sai. Với T không đổi, mật độ phân tử µ = p/(kT ) giảm khi áp suất giảm. Khoảng cách trung bình giữa các phân tử tăng. d) Đúng. Giảm áp nhanh khiến bọt khí nở nhanh, có thể chèn ép mô hoặc cản trở dòng máu.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Sai",
      "Sai",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Sai, c) Sai, d) Đúng",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-47-de",
      "solution": "2-47-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-48",
    "difficulty": "Thông hiểu",
    "prompt": "Xét một lượng khí lí tưởng được chứa trong một xilanh đặt thẳng đứng. Khối khí được giới hạn bởi một piston có khối lượng không đáng kể, có khả năng trượt không ma sát dọc theo thành trong của xilanh. Người ta cung cấp nhiệt lượng nung nóng từ từ khối khí, làm piston dịch chuyển lên trên với tốc độ gần như không đổi. a) Có thể xem gần đúng quá trình biến đổi trạng thái khí bên trong xilanh là quá trình đẳng áp. b) Tốc độ chuyển động nhiệt của từng phân tử trong xilanh tăng dần. c) Toàn bộ nhiệt lượng truyền cho hệ chỉ dùng để làm tăng nội năng cho khối khí. d) Trong quá trình nhận nhiệt, mật độ phân tử khí bên trong xilanh tăng dần.",
    "explanation": "Giải a) Đúng. Piston nhẹ chuyển động gần đều nên áp suất khí xấp xỉ áp suất ngoài không đổi. b) Sai. Khi nhiệt độ tăng, tốc độ căn quân phương tăng. Tốc độ của từng phân tử còn thay đổi qua các va chạm. c) Sai. Khi piston đi lên, khí thực hiện công W = p∆V > 0. Theo nguyên lí I, Q = ∆U + W . d) Sai. Xilanh kín giữ N không đổi, còn V tăng nên mật độ N /V giảm.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-48-de",
      "solution": "2-48-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-9",
    "difficulty": "Vận dụng",
    "prompt": "Tính khối lượng riêng của không khí ở đỉnh núi Fansipan (Phan-Xi-Păng) cao 3 140 m. Biết rằng mỗi khi cao thêm 10,0 m (so với mực nước biển) thì áp suất khí quyển giảm 1,00 mmHg và nhiệt độ trên đỉnh núi ◦ ◦ là 2,00 C. Khối lượng riêng của không khí ở điều kiện tiêu chuẩn (áp suất 760 mmHg, nhiệt độ 0 C) là 1,29 kg/m3. A. 1,50 kg/m3. B. 0,58 kg/m3. C. 2,90 kg/m3. D. 0,75 kg/m3.",
    "explanation": "Đáp án D Giải Áp suất trên đỉnh là 760 − 3140/10 = 446 mmHg. Với cùng loại khí, ρ = pM /(RT ), nên 446 273,15 ρ = 1,29 ≈ 0,75 kg/m3. 760 275,15",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-9-de",
      "solution": "1-9-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-11",
    "difficulty": "Vận dụng",
    "prompt": "Trong xilanh của một động cơ đốt trong, hỗn hợp khí ở áp suất 1,00 atm, nhiệt độ 40,0 C và thể tích 2,80 dm3. Nén hỗn hợp khí đến thể tích 0,300 dm3 và áp suất 20,0 atm. Nhiệt độ của khí sau khi nén là ◦ A. 671 C. ◦ B. 398 C. ◦ C. 86 C. ◦ D. 857 C.",
    "explanation": "Đáp án B Giải Nhiệt độ đầu là 313,15 K. Từ p V /T = p V /T , 1 1 1 2 2 2 20,0 × 0,300 T = 313,15 ≈ 671 K. 2 1,00 × 2,80 ◦ Đổi về Celsius được khoảng 398 C.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-11-de",
      "solution": "1-11-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-13",
    "difficulty": "Vận dụng",
    "prompt": "Một khối khí lí tưởng ở áp suất p = 1,0.105 Pa có khối lượng riêng là ρ = 0,090 kg/m3. Căn bậc hai của trung bình bình phương tốc độ chuyển động nhiệt của các phân tử khí là X.103 m/s. Tìm X (viết kết quả gồm hai chữ số).",
    "explanation": "Giải Thuyết động học cho p = ρv2 /3. Do đó rms √ √ 3p 3 × 105 v = = ≈ 1,826 × 103 m/s. rms ρ 0,090 Hệ số làm tròn đến hai chữ số là 1,8. Đáp số 1,8",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 1.8,
    "unit": "",
    "tolerance": 0.05,
    "answerText": "1,8",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-13-de",
      "solution": "1-13-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-14",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí được nén đẳng nhiệt từ thể tích 10,0 lít đến 4,0 lít, áp suất khí tăng thêm 0,75 atm. Áp suất ban đầu của khí là A. 0,3 atm. B. 0,5 atm. C. 1,0 atm. D. 0,25 atm.",
    "explanation": "Đáp án B Giải Nén đẳng nhiệt nên p (10,0) = (p + 0,75)(4,0). Giải phương trình được 6p = 3, tức p = 0,50 atm. 1 1 1 1",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-14-de",
      "solution": "1-14-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-15",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí lí tưởng được đun nóng, khi nhiệt độ tăng thêm 100 K thì căn bậc hai của trung bình bình phương tốc độ chuyển động nhiệt của các phân tử khí tăng từ 100 m/s lên 150 m/s. Phải tăng thêm nhiệt độ của chất khí lên bao nhiêu để căn bậc hai của trung bình bình phương tốc độ chuyển động nhiệt của các phân tử khí tăng từ 150 m/s đến 250 m/s? (Viết kết quả gồm 3 chữ số).",
    "explanation": "Giải Với cùng chất khí, v2 tỉ lệ với T . Do đó tỉ số các độ tăng nhiệt độ bằng tỉ số các độ tăng bình phương tốc độ. rms 2502 − 1502 ∆T = 100 = 320 K. 1502 − 1002 Đáp số 320 K ◦ ◦",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 320.0,
    "unit": "K",
    "tolerance": 5.1e-05,
    "answerText": "320 K",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-15-de",
      "solution": "1-15-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-16",
    "difficulty": "Vận dụng",
    "prompt": "Nhiệt độ khí trơ trong bóng đèn sợi đốt khi đèn không sáng là 25 C, khi sáng là 323 C. Áp suất khí trơ trong bóng đèn này khi đèn sáng gấp mấy lần khi đèn không sáng? A. 1,5. B. 0,5. C. 3. D. 2.",
    "explanation": "Đáp án D Giải Bóng đèn kín, thể tích gần như không đổi, nên p /p = T /T = (323 + 273,15)/(25 + 273,15) ≈ 2. 2 1 2 1",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-16-de",
      "solution": "1-16-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-17",
    "difficulty": "Vận dụng",
    "prompt": "Một bình đầy không khí ở điều kiện chuẩn, được đậy bằng một vật có khối lượng m = 5 kg. Tiết diện của miệng bình là 10 cm2. Tìm áp suất cực đại của không khí trong bình để không khí không đẩy nắp bình lên và thoát ra ngoài. Biết áp suất khí quyển là p = 1 atm, g = 10 m/s2. 0 A. 6 atm. B. 1,8 atm. C. 2,0 atm. D. 1,5 atm.",
    "explanation": "Đáp án D Giải Khi nắp vừa có xu hướng nhấc lên, lực do chênh áp cân bằng trọng lượng nắp, (p − p )S = mg. Với S = 0 10 −3 m2, ta có p = 105 + 5(10)/10 −3 = 1,5 × 105 Pa ≈ 1,5 atm. ◦ ◦",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-17-de",
      "solution": "1-17-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-18",
    "difficulty": "Vận dụng",
    "prompt": "Ở nhiệt độ 27 C thể tích của một lượng khí là 30 lít. Ở nhiệt độ 227 C và áp suất khí không đổi, thể tích của lượng khí đó là A. 50 lít. B. 252 lít. C. 18 lít. D. 200 lít.",
    "explanation": "Đáp án A Giải Ở áp suất không đổi, V /T không đổi. Đổi nhiệt độ sang Kelvin rồi thay số V = 30(500,15/300,15) ≈ 50 L. 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-18-de",
      "solution": "1-18-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-19",
    "difficulty": "Vận dụng",
    "prompt": "Trong quá trình hít vào, cơ hoành và cơ liên sườn của một người co lại, mở rộng khoang ngực và hạ thấp áp suất không khí bên trong xuống dưới môi trường xung quanh để không khí đi vào qua miệng và mũi đến phổi. Giả sử phổi của một người chứa 6 000 ml không khí ở áp suất 1,00 atm. Nếu người đó mở rộng khoang ngực thêm 500 ml bằng cách giữ mũi và miệng đóng lại để không hít không khí vào phổi thì áp suất không khí trong phổi theo atm sẽ là bao nhiêu? Giả sử nhiệt độ không khí không đổi. A. 0,92 atm. B. 1,08 atm. C. 1,20 atm. D. 0,85 atm.",
    "explanation": "Đáp án A Giải Mũi và miệng đóng nên lượng khí giữ nguyên. Theo định luật Boyle, p = p V /V = 1,00(6000/6500) ≈ 2 1 1 2 0,92 atm.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-19-de",
      "solution": "1-19-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-20",
    "difficulty": "Vận dụng",
    "prompt": "Áp suất trong lốp xe ô tô được tăng lên bằng cách bơm thêm không khí vào lốp. Người ta thấy rằng số mol không khí trong lốp đã tăng 5%, nhiệt độ tăng 1% và thể tích bên trong của lốp tăng 0,2%. Áp suất không khí trong lốp tăng lên bao nhiêu phần trăm (viết kết quả đến một chữ số sau dấu phẩy thập phân)?",
    "explanation": "Giải Từ p = nRT /V , tỉ số áp suất là p /p = 1,05(1,01)/1,002 ≈ 1,05838. Áp suất tăng khoảng 5,838%, làm tròn 2 1 thành 5,8%. Đáp số 5,8%",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 5.8,
    "unit": "%",
    "tolerance": 0.05,
    "answerText": "5,8 %",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-20-de",
      "solution": "1-20-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-21",
    "difficulty": "Vận dụng",
    "prompt": "Một mẫu khí carbonic có thể tích giảm từ 21 dm3 đến 14 dm3 và áp suất của nó tăng từ ◦ 80 kPa đến 150 kPa. Nhiệt độ ban đầu của mẫu khí là 27 C. Nhiệt độ trạng thái sau của mẫu khí là bao nhiêu kelvin?",
    "explanation": "Giải T ≈ 300 K. Áp dụng phương trình trạng thái cho lượng khí cố định, 1 p V 150 × 14 2 2 T = T = 300 = 375 K. 2 1 p V 80 × 21 1 1 Đáp số 375 K ◦",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 375.0,
    "unit": "K",
    "tolerance": 5.1e-05,
    "answerText": "375 K",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-21-de",
      "solution": "1-21-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-22",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí ở trong bình có thể tích không đổi, ở áp suất 20,0 atm và nhiệt độ 25,0 C. Nếu rút bớt ◦ một nửa lượng khí và tăng nhiệt độ khí lên đến 75,0 C, áp suất của lượng khí còn lại trong bình là A. 47,5 atm. B. 120,0 atm. C. 11,7 atm. D. 50 atm.",
    "explanation": "Đáp án C Giải Thể tích bình không đổi và số mol giảm một nửa. Từ p = nRT /V , suy ra p = 20,0(1/2)(348,15/298,15) ≈ 2 11,7 atm. ◦",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-22-de",
      "solution": "1-22-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-23",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí có khối lượng 24 g chiếm thể tích 4 lít ở 7 C. Sau khi được làm nóng ở điều kiện áp suất không đổi, khối lượng riêng của khí là 1,2 g/dm3. Tìm nhiệt độ của khí sau khi nung. ◦ A. 1 400 C. ◦ B. 1 120 C. ◦ C. 700 C. ◦ D. 1 127 C.",
    "explanation": "Đáp án D Giải Thể tích cuối là V = 24/1,2 = 20 L. Ở áp suất không đổi, T = T V /V ≈ 280(20/4) = 1400 K, tương ứng 2 2 1 2 1 ◦ 1127 C.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-23-de",
      "solution": "1-23-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-24",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí nitrogen có khối lượng 1,0 kg chiếm thể tích 0,50 m3 ở nhiệt độ 27 ◦ C. Biết khối lượng mol phân tử của khí nitrogen là 28 g/mol. Áp suất của khí là A. 1,8.105 Pa. B. 3,2.101 Pa. C. 3,6.105 Pa. D. 1,6.101 Pa.",
    "explanation": "Đáp án A Giải Đổi M = 0,028 kg/mol, suy ra n = 1/0,028 mol. Với T ≈ 300 K, tính p = nRT /V ≈ 1,78 × 105 Pa.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-24-de",
      "solution": "1-24-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-25",
    "difficulty": "Vận dụng",
    "prompt": "Một bình chứa m = 0,90 kg helium. Sau một thời gian, do bị hở, khí helium thoát ra một phần. Nhiệt độ tuyệt đối của khí giảm 10%, áp suất giảm 20% so với ban đầu. Số nguyên tử helium đã thoát khỏi bình là X.1025. Tính X, viết kết quả đến một chữ số sau dấu phẩy thập phân.",
    "explanation": "Giải Ở cùng thể tích, n /n = (p /p )/(T /T ) = 0,80/0,90 = 8/9. Khối lượng thoát ra là 0,90/9 = 0,10 kg. 2 1 2 1 2 1 Dùng M = 0,004 kg/mol, tính N = (0,10/0,004)N ≈ 1,51 × 1025. He A Đáp số 1,5 ◦",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 1.5,
    "unit": "",
    "tolerance": 0.05,
    "answerText": "1,5",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-25-de",
      "solution": "1-25-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-26",
    "difficulty": "Vận dụng",
    "prompt": "Xác định động năng trung bình của phân tử không khí ở nhiệt độ 20,0 C. A. 6,07.10-21 J. B. 0,04 J. C. 6,51.10-21J. D. 4,14.10-21 J.",
    "explanation": "Đáp án A Giải Nhiệt độ tuyệt đối là 293,15 K. Động năng trung bình của chuyển động tịnh tiến là E = 3 kT ≈ 6,07 × 10 −21 J. 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-26-de",
      "solution": "1-26-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-27",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí mà các phân tử có động năng trung bình là 6,2.10-21 J, tính động năng trung bình của ◦ phân tử khí khi nhiệt độ tăng thêm 1173 C. A. 3,0.10-20 J. B. 1,7.10-22 J. C. 2,5.10-21J. D. 2,8.1Q-19 J.",
    "explanation": "Đáp án A Giải Độ tăng 1173 ◦ C tương ứng 1173 K. Động năng trung bình tăng thêm 3 k∆T , nên giá trị cuối là 6,2 × 10 −21 + 2 3 (1,38 × 10 −23)(1173) ≈ 3,0 × 10 −20 J. 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-27-de",
      "solution": "1-27-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-28",
    "difficulty": "Vận dụng",
    "prompt": "Bình có dung tích 5,0 lít chứa một loại khí đơn nguyên tử ở nhiệt độ 27 ◦ C và áp suất 10-5 mmHg. Số phân tử khí trong bình là A. 1,61.1015. B. 1,22.1018. C. 2,25.1015. D. 1,45.1018.",
    "explanation": "Đáp án A Giải Đổi p = 10 −5 mmHg ≈ 1,333 × 10 −3 Pa, V = 5,0 × 10 −3 m3, T ≈ 300 K. Từ pV = N kT , được N ≈ 1,61 × 1015.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-28-de",
      "solution": "1-28-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-29",
    "difficulty": "Vận dụng",
    "prompt": "Tính áp suất mà các phân tử khí tác dụng lên thành bình nếu khối lượng của khí là 15,0 g, thể tích là 200,0 l. Biết khối lượng mol của khí là 29,0 g/mol, động năng trung bình của phân tử khí là 2,43.10-21 J. A. 1,50.105 Pa. B. 2,50.103 Pa. C. 2,50.105 Pa. D. 1,68.105 Pa.",
    "explanation": "Đáp án B Giải Số phân tử là N = (15/29)N . Đổi V = 0,200 m3, rồi dùng p = 2 (N /V )E. Kết quả p ≈ 2,52 × 103 Pa, gần A 3 phương án B. ◦",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-29-de",
      "solution": "1-29-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-30",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí xác định luôn có áp suất không đổi, ở 27,0 C có thể tích 5,00 lít. Khi ◦ giảm nhiệt độ, thể tích khí giảm xuống còn 4,50 lít. Nhiệt độ của khí đã giảm bao nhiêu C?",
    "explanation": "Giải Quá trình đẳng áp cho T = T V /V ≈ 300(4,50/5,00) = 270 K. Độ giảm là 30 K, có cùng giá trị số là 30 ◦ C. 2 1 2 1 ◦ Đáp số 30 C",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 30.0,
    "unit": "°C",
    "tolerance": 5.1e-05,
    "answerText": "30 °C",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-30-de",
      "solution": "1-30-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-31",
    "difficulty": "Vận dụng",
    "prompt": "Một lượng khí ở nhiệt độ tuyệt đối 300 K có áp suất p = 4.10-5 N/m2. Hằng số Boltzmann k=1,38.10-23 J/K. Số lượng phân tử trên mỗi cm3 của lượng khí này là A. 1012. B. 1010. C. 108. D. 1016.",
    "explanation": "Đáp án B Giải Mật độ phân tử là N /V = p/(kT ) ≈ 9,66 × 1015 m −3. Một cm3 bằng 10 −6 m3, nên có khoảng 9,66 × 109 phân tử, gần 1010.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-31-de",
      "solution": "1-31-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-34",
    "difficulty": "Vận dụng",
    "prompt": "Nhiệt độ của một lượng khí tăng từ 77 ◦ C đến 427 ◦ C. Thể tích giảm từ 350 dm3 đến 280 dm3. Nếu áp suất cuối là 3,75 atm thì áp suất ban đầu là bao nhiêu? Kết quả tính theo đơn vị atm và lấy đến hai chữ số sau dấu phẩy thập phân.",
    "explanation": "Giải Đổi T ≈ 350 K và T ≈ 700 K. Với lượng khí không đổi, 1 2 V T 280 × 350 2 1 p = p = 3,75 = 1,50 atm. 1 2 V T 350 × 700 1 2 Đáp số 1,50 atm",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 1.5,
    "unit": "atm",
    "tolerance": 0.005,
    "answerText": "1,50 atm",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-34-de",
      "solution": "1-34-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-49",
    "difficulty": "Vận dụng",
    "prompt": "Khối khí trong một xilanh bịt kín có áp suất 2 atm và thể tích 6 lít. Kéo piston để thể tích khối khí tăng lên thành 12 lít trong điều kiện nhiệt độ không đổi. Áp suất của khối khí bên trong xilanh lúc này là A. 3 atm. B. 1 atm. C. 4 atm. D. 0,5 atm.",
    "explanation": "Đáp án: B Giải Nhiệt độ không đổi nên p = p V /V = 2 × 6/12 = 1 atm. 2 1 1 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-49-de",
      "solution": "2-49-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-51",
    "difficulty": "Vận dụng",
    "prompt": "Một bình chứa khí có thể tích V₁ = 5 lít đang ở áp suất 2 atm. Nối thông bình này với một bình chân không có thể tích V₂ = 3 lít bằng một ống nhỏ (bỏ qua thể tích ống). Quá trình diễn ra đẳng nhiệt. Áp suất của khối khí sau khi phân bố đều sang cả hai bình là A. 1,25 atm. B. 1,5 atm. C. 0,8 atm. D. 3,3 atm.",
    "explanation": "Đáp án: A Giải Khí chiếm tổng thể tích 5 + 3 = 8 lít sau khi nối bình. Vì T không đổi, p = 2 × 5/8 = 1,25 atm. 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-51-de",
      "solution": "2-51-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-54",
    "difficulty": "Vận dụng",
    "prompt": "Một xilanh tiết diện đều đặt thẳng đứng, bên trong chứa một lượng khí lí tưởng ở nhiệt độ 27°C, được đậy kín bởi một piston trượt không ma sát. Khoảng cách từ đáy xilanh đến piston ban đầu là 30 cm. Đun nóng đẳng áp khối khí đến nhiệt độ 77°C. Piston đã dịch chuyển một đoạn là A. 35 cm. B. 15 cm. C. 10 cm. D. 5 cm.",
    "explanation": "Đáp án: D Giải Vì tiết diện đều, V = Sh và h/T không đổi. Với T = 300 K, T = 350 K, ta có h = 30×350/300 = 35 cm. 1 2 2 Piston đi lên 35 − 30 = 5 cm.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-54-de",
      "solution": "2-54-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-56",
    "difficulty": "Vận dụng",
    "prompt": "Một bình hàn kín giới hạn mức chịu đựng áp suất tối đa là 15 atm. Hiện tại, khí trong bình ở nhiệt độ 300 K và áp suất 10 atm. Hỏi bình có thể chịu được nhiệt độ tối đa là bao nhiêu trước khi có nguy cơ phát nổ? A. 150 K. B. 450 K. C. 200 K. D. 300 K.",
    "explanation": "Đáp án: B Giải Với bình kín cứng, p/T không đổi. Tại áp suất giới hạn, T = 300 × 15/10 = 450 K. max",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-56-de",
      "solution": "2-56-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-57",
    "difficulty": "Vận dụng",
    "prompt": "Khí trong một quả bóng cao su có thể tích 3 lít, áp suất 10⁵ Pa ở 27°C. Đưa bóng vào phòng lạnh có nhiệt độ −3°C thì thể tích bóng co lại còn 2,5 lít. Áp suất của khí trong quả bóng lúc này là A. 1,50×105 Pa. B. 1,20×105 Pa. C. 0,90×105 Pa. D. 1,08×105 Pa.",
    "explanation": "Đáp án: D Giải Đổi T = 300 K và T = 270 K. Từ pV /T không đổi, p = 105(3/2,5)(270/300) = 1,08 × 105 Pa. 1 2 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-57-de",
      "solution": "2-57-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-58",
    "difficulty": "Vận dụng",
    "prompt": "Khinh khí cầu có hở lỗ thoát khí ở phía dưới (để duy trì áp suất bên trong bằng áp suất khí quyển bên ngoài). Ban đầu khí cầu chứa không khí ở 300 K. Để lực đẩy Archimedes sinh ra đủ lớn giúp khí cầu bay lên, người ta phải đốt lò nướng làm khối lượng không khí bên trong khí cầu giảm đi 1/4 so với ban đầu (thể tích vỏ khí cầu không đổi). Nhiệt độ không khí bên trong khí cầu khi đó phải đạt tới A. 375 K. B. 1200 K. C. 400 K. D. 225 K.",
    "explanation": "Đáp án: C Giải Ở cùng p, V , tích nT không đổi. Khối lượng và số mol còn 3/4 ban đầu, nên T = 300/(3/4) = 400 K. 2",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-58-de",
      "solution": "2-58-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-59",
    "difficulty": "Vận dụng",
    "prompt": "Để chống oxy hóa, người ta bơm khí nitrogen tinh khiết N₂ (M = 28 g/mol) vào bao bì của một gói snack. Lượng khí bơm vào có khối lượng 14 gam. Ở nhiệt độ 27°C và áp suất trong bao bì cân bằng với khí quyển (1 atm), thể tích phồng lên của không gian chứa khí trong bao bì xấp xỉ là A. 18,4 lít. B. 24,6 lít. C. 6,15 lít. D. 12,3 lít.",
    "explanation": "Đáp án: D Giải Số mol nitrogen là 14/28 = 0,5 mol. Dùng T = 300 K và R = 0,082 atm · lít/(mol · K), ta được V = nRT /p = 12,3 lít.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-59-de",
      "solution": "2-59-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-60",
    "difficulty": "Vận dụng",
    "prompt": "Một khinh khí cầu quảng cáo bằng vật liệu dẻo được nạp khí Helium (M=4 g/mol). Ban đêm, nhiệt độ khối khí giảm còn 200 K, khí cầu co lại đạt thể tích 1000 lít và áp suất đo được bên trong là 0,82 atm. Khối lượng khí Helium thực tế đang được giữ bên trong vỏ khí cầu là A. 400 gam. B. 200 gam. C. 100 gam. D. 50 gam.",
    "explanation": "Đáp án: B Giải Từ pV = nRT , n = 0,82 × 1000/(0,082 × 200) = 50 mol. Khối lượng m = nM = 50 × 4 = 200 g.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-60-de",
      "solution": "2-60-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-61",
    "difficulty": "Vận dụng",
    "prompt": "Một bình kín dung tích 3 lít chứa 2 g khí nitrogen (coi là khí lí tưởng) với tốc độ căn quân phương của phân tử khí là 150 m/s. Áp suất của khí trong bình là A. 6 kPa. B. 3 kPa. C. 5 kPa. D. 15 kPa.",
    "explanation": "Đáp án: C Giải Đổi V = 3 × 10 −3 m3 và m = 2 × 10 −3 kg. Theo thuyết động học, p = (m/V )v2 /3 = (2/3) × 1502/3 = rms 5000 Pa, tức 5 kPa.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-61-de",
      "solution": "2-61-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-62",
    "difficulty": "Vận dụng",
    "prompt": "Khí hydrogen có khối lượng mol xấp xỉ 2,02 g/mol. Tốc độ căn quân phương của phân tử ở nhiệt độ 300 K là A. 0,5×103 m/s. B. 1,4×103 m/s. C. 1,1×103 m/s. D. 1,9×103 m/s.",
    "explanation": "Đáp án: D Giải √ √ Đổi M = 2,02 × 10 −3 kg/mol. Ta có v = 3RT /M = 3 × 8,31 × 300/(2,02 × 10−3) ≈ 1,92 × rms 103 m/s.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-62-de",
      "solution": "2-62-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-63",
    "difficulty": "Vận dụng",
    "prompt": "Một bình dung tích 4,5 lít chứa 16 g khí oxygen ở áp suất 2,5×105 N/m². Khối lượng mol của khí oxygen là khoảng 32 g/mol. Động năng tịnh tiến trung bình của các phân tử khí oxygen bằng A. 5,6×10 −19 J. B. 5,6×10 −18 J. C. 5,6×10 −21 J. D. 5,6×10 −22 J.",
    "explanation": "Đáp án: C Giải Số mol n = 16/32 = 0,5 mol nên N = 3,01 × 1023. Đổi V = 4,5 × 10 −3 m3. Từ pV = 2 N W , suy ra 3 đ W = 3pV /(2N ) ≈ 5,61 × 10 −21 J. đ",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-63-de",
      "solution": "2-63-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-64",
    "difficulty": "Vận dụng",
    "prompt": "Một khối khí lí tưởng có động năng tịnh tiến trung bình của các phân tử khí bằng 0,02 eV. Nhiệt độ của khối khí khi đó xấp xỉ A. 77,5 K. B. 120 K. C. 155 K. D. 310 K.",
    "explanation": "Đáp án: C Giải Đổi W = 0,02 × 1,602 × 10 −19 = 3,204 × 10 −21 J. Dùng T = 2W /(3k) với k ≈ 1,38 × 10 −23 J/K, được đ đ T ≈ 155 K.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-64-de",
      "solution": "2-64-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-65",
    "difficulty": "Vận dụng",
    "prompt": "Một phân tử Oxygen đang chuyển động qua tâm một bình cầu có đường kính 0,20 m. Tốc độ của phân tử là 400 m/s. Biết rằng tốc độ phân tử là không đổi. Số lần phân tử này va chạm vào thành bình chứa trong mỗi giây là A. 2000 lần. B. 200 lần. C. 400 lần. D. 4000 lần.",
    "explanation": "Đáp án: A, nếu va chạm phản xạ theo phương pháp tuyến Giải Quỹ đạo đi qua tâm nên va vào thành theo phương pháp tuyến. Giả sử phản xạ đàn hồi lí tưởng và không có va chạm khác, phân tử đi hết một đường kính giữa hai lần đập vào thành. Khoảng thời gian là 0,20/400 = 5,0 × 10 −4 s, tương ứng 2000 lần mỗi giây. Chỉ biết tốc độ không đổi thì chưa xác định được hướng sau va chạm.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-65-de",
      "solution": "2-65-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-66",
    "difficulty": "Vận dụng",
    "prompt": "Trong các hoạt động lặn biển sâu, thợ lặn được trang bị bình dưỡng khí bằng thép chịu áp lực cao. Một bình dưỡng khí có dung tích rỗng là 12,0 lít, được nạp đầy khí oxygen tinh khiết (giả thiết là khí lí tưởng, khối lượng mol M = 32 g/mol). Tại thời điểm kiểm tra an toàn trước khi lặn, áp kế gắn trên van bình hiển thị giá trị 200 atm khi nhiệt độ hệ thống đang cân bằng với môi trường ở mức 27°C. Bỏ qua sự dãn nở nhiệt của vỏ bình và số chỉ của áp kế cho biết áp suất của khí trong bình. a) Với thể tích không đổi, áp suất của một lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối. b) Số mol khí O₂ được nạp vào bình xấp xỉ 97,56 mol. c) Khối lượng khí O₂ dự trữ trong bình xấp xỉ 3,12 kg. d) Nếu tiêu thụ một nửa lượng khí ở 27°C, áp suất bình giảm còn 100 atm.",
    "explanation": "Giải a) Đúng. Với n, V cố định, p = nRT /V tỉ lệ thuận với T . b) Đúng. Dùng T = 300 K, n = pV /(RT ) = 200 × 12/(0,082 × 300) ≈ 97,56 mol. c) Đúng. m = nM = 97,56 × 32 ≈ 3122 g = 3,12 kg. d) Đúng. Ở cùng T, V , áp suất tỉ lệ thuận với n, nên áp suất còn 200/2 = 100 atm.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Đúng",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Đúng, d) Đúng",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-66-de",
      "solution": "2-66-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-68",
    "difficulty": "Vận dụng",
    "prompt": "Một huấn luyện viên dùng bơm tay để bơm thêm không khí vào một quả bóng rổ. Coi quả bóng có dung tích không đổi là 5 lít, ban đầu chứa không khí ở áp suất khí quyển là 10⁵ Pa. Mỗi lần bơm, hành trình của piston dài 25 cm, tiết diện piston là 12 cm². Bỏ qua sự thay đổi nhiệt độ của khối khí trong suốt quá trình bơm và bằng 27°C. a) Có thể áp dụng định luật Boyle cho khối khí bên trong quả bóng trong quá trình bơm. b) Thể tích không khí ở áp suất khí quyển được đẩy vào bóng sau mỗi lần bơm là 300 cm³. c) Số mol khí mỗi lần bơm là 0,012 mol. d) Sau 15 lần bơm, áp suất khí trong quả bóng đạt mức 1,9×105 Pa.",
    "explanation": "Giải a) Sai. Khi bơm, số mol khí trong bóng tăng. Định luật Boyle áp dụng cho một lượng khí xác định. b) Đúng theo mô hình bơm lí tưởng. Thể tích hút vào mỗi lần là Sh = 12 × 25 = 300 cm3. c) Đúng. Với V = 3×10 −4 m3 và T = 300 K, mỗi lần bơm đưa vào n = 105(3×10 −4)/(8,31×300) ≈ bơm 0,012 mol. d) Đúng. Quy lượng khí bơm thêm về áp suất khí quyển, thể tích tương đương là 15 × 0,3 = 4,5 lít. Với thể tích bóng 5 lít và nhiệt độ giữ nguyên, p = 105(5 + 4,5)/5 = 1,9 × 105 Pa.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Đúng",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-68-de",
      "solution": "2-68-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-69",
    "difficulty": "Vận dụng",
    "prompt": "Áp suất của khối khí helium còn lại trong khí cầu ngay sau sự cố hở van bằng bao nhiêu kPa?",
    "explanation": "Giải Sau khi thoát 1/3, số mol còn n = 2 n . Nhiệt độ và thể tích gần như không đổi nên p /p = n /n . Suy ra 2 3 1 2 1 2 1 p = 2 × 120 = 80 kPa. 2 3 Đáp số: 80 kPa",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 80.0,
    "unit": "kPa",
    "tolerance": 5.1e-05,
    "answerText": "80 kPa",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-69-de",
      "solution": "2-69-giai",
      "shared": "2-69-chung",
      "sharedText": "Khí cầu tầng bình lưu được sử dụng để đưa các thiết bị nghiên cứu khoa học lên thượng tầng khí quyển. Tại bãi phóng, khí cầu được nạp khí helium (xem như khí lí tưởng) ở nhiệt độ 27°C và áp suất 120 kPa. Ngay trước khi cất cánh, một sự cố hở van đã làm thoát ra ngoài 1 khối lượng khí helium (coi nhiệt độ và thể tích 3 của khí cầu thay đổi không đáng kể trong quá trình trên)."
    }
  },
  {
    "id": "ly-12-2-khi-2-70",
    "difficulty": "Vận dụng",
    "prompt": "Sau khi khắc phục sự cố, khí cầu bay lên đến độ cao 30 km, lúc này nhiệt độ khối khí helium bên trong giảm xuống còn −72°C. Tính tỉ số giữa động năng tịnh tiến trung bình của phân tử helium ở độ cao 30 km so với trạng thái ban đầu tại bãi phóng.",
    "explanation": "Giải Nhiệt độ ở bãi phóng là T = 27 + 273 = 300 K. Ở độ cao 30 km, T = −72 + 273 = 201 K. Vì W = 3 kT , 1 2 đ 2 tỉ số cần tìm là 201/300 = 0,67. Đáp số: 0,67",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.67,
    "unit": "",
    "tolerance": 0.005,
    "answerText": "0,67",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-70-de",
      "solution": "2-70-giai",
      "shared": "2-69-chung",
      "sharedText": "Khí cầu tầng bình lưu được sử dụng để đưa các thiết bị nghiên cứu khoa học lên thượng tầng khí quyển. Tại bãi phóng, khí cầu được nạp khí helium (xem như khí lí tưởng) ở nhiệt độ 27°C và áp suất 120 kPa. Ngay trước khi cất cánh, một sự cố hở van đã làm thoát ra ngoài 1 khối lượng khí helium (coi nhiệt độ và thể tích 3 của khí cầu thay đổi không đáng kể trong quá trình trên)."
    }
  },
  {
    "id": "ly-12-2-khi-2-71",
    "difficulty": "Vận dụng",
    "prompt": "Bình chứa khí H₂ có thể tích 83,1 lít và được duy trì ở nhiệt độ 27°C. Áp suất của khí H₂ trong bình là x × 105 Pa. Tìm x.",
    "explanation": "Giải Từ tỉ lệ điện phân, n = n = 360/18 = 20 mol. Đổi V = 83,1 lít = 0,0831 m3 và T = 300 K. H2 H2O nRT 20 × 8,31 × 300 p = = = 6 × 105 Pa. V 0,0831 Đáp số: x = 6",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 6.0,
    "unit": "",
    "tolerance": 5.1e-05,
    "answerText": "6",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-71-de",
      "solution": "2-71-giai",
      "shared": "2-71-chung",
      "sharedText": "Trong một nhà máy công nghiệp, người ta sử dụng phương pháp điện phân nước (H₂O) để điều chế khí hydrogen (H₂) và oxygen (O₂). Biết rằng cứ 2 mol H₂O tham gia điện phân sẽ thu được 2 mol H₂ và 1 mol O₂. Khối lượng nước đã bị điện phân hoàn toàn là 360 g. Toàn bộ khí H₂ và O₂ sinh ra được nạp vào hai bình chứa riêng biệt (ban đầu là chân không). Cho khối lượng mol của H₂O, H₂ và O₂ lần lượt là 18 g/mol, 2 g/mol và 32 g/mol. Coi các khí là khí lí tưởng."
    }
  },
  {
    "id": "ly-12-2-khi-2-72",
    "difficulty": "Vận dụng",
    "prompt": "Sau khi lấy ra một lượng khí O₂ để sử dụng, áp suất khối khí trong bình giảm còn bằng 70% áp suất ban đầu. Biết nhiệt độ của bình khí không đổi. Khối lượng O₂ đã được rút ra khỏi bình là bao nhiêu g?",
    "explanation": "Giải Điện phân 20 mol nước cho 20/2 = 10 mol O . Thể tích bình và nhiệt độ không đổi nên n tỉ lệ thuận với p. 2 Khi áp suất còn 70%, số mol lấy ra là 0,30 × 10 = 3 mol. Khối lượng tương ứng là 3 × 32 = 96 g. Đáp số: 96 g",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 96.0,
    "unit": "g",
    "tolerance": 5.1e-05,
    "answerText": "96 g",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-72-de",
      "solution": "2-72-giai",
      "shared": "2-71-chung",
      "sharedText": "Trong một nhà máy công nghiệp, người ta sử dụng phương pháp điện phân nước (H₂O) để điều chế khí hydrogen (H₂) và oxygen (O₂). Biết rằng cứ 2 mol H₂O tham gia điện phân sẽ thu được 2 mol H₂ và 1 mol O₂. Khối lượng nước đã bị điện phân hoàn toàn là 360 g. Toàn bộ khí H₂ và O₂ sinh ra được nạp vào hai bình chứa riêng biệt (ban đầu là chân không). Cho khối lượng mol của H₂O, H₂ và O₂ lần lượt là 18 g/mol, 2 g/mol và 32 g/mol. Coi các khí là khí lí tưởng."
    }
  },
  {
    "id": "ly-12-2-khi-2-73",
    "difficulty": "Vận dụng",
    "prompt": "Áp suất tuyệt đối của khối khí bên trong xilanh ở trạng thái 1 là y × 105 Pa. Tìm y.",
    "explanation": "Giải Áp suất tuyệt đối bằng tổng áp suất khí quyển và áp suất dư. p = p + p = (1 + 0,5) × 105 = 1,5 × 105 Pa. 1 0 dư,1 Đáp số: y = 1,5",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 1.5,
    "unit": "",
    "tolerance": 0.05,
    "answerText": "1,5",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-73-de",
      "solution": "2-73-giai",
      "shared": "2-73-chung",
      "sharedText": "Trong một thí nghiệm khảo sát định luật Boyle, một học sinh sử dụng xilanh kín chứa khí lí tưởng nối với một áp kế. Biết áp kế này đo áp suất dư của khối khí (áp suất dư bằng phần chênh lệch giữa áp suất tuyệt đối của khí và áp suất khí quyển). Giả sử áp suất khí quyển trong phòng là p₀ = 10⁵ Pa không đổi. Nhiệt độ của khối khí được giữ không đổi trong suốt quá trình thí nghiệm. Ban đầu (trạng thái 1), thể tích khí trong xilanh là 20 cm³ và áp kế chỉ giá trị 0,5×105 Pa."
    }
  },
  {
    "id": "ly-12-2-khi-2-74",
    "difficulty": "Vận dụng",
    "prompt": "Nén từ từ piston để khối khí chuyển sang trạng thái 2. Lúc này, áp kế chỉ giá trị 2,0×105 Pa. Thể tích của khối khí ở trạng thái 2 là bao nhiêu cm³?",
    "explanation": "Giải Áp suất tuyệt đối sau nén là p = (1 + 2,0) × 105 = 3,0 × 105 Pa. Áp dụng định luật Boyle với áp suất tuyệt 2 đối p V 1,5 × 20 V = 1 1 = = 10 cm3. 2 p 3,0 2 Đáp số: 10 cm³",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 10.0,
    "unit": "cm³",
    "tolerance": 5.1e-05,
    "answerText": "10 cm³",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-74-de",
      "solution": "2-74-giai",
      "shared": "2-73-chung",
      "sharedText": "Trong một thí nghiệm khảo sát định luật Boyle, một học sinh sử dụng xilanh kín chứa khí lí tưởng nối với một áp kế. Biết áp kế này đo áp suất dư của khối khí (áp suất dư bằng phần chênh lệch giữa áp suất tuyệt đối của khí và áp suất khí quyển). Giả sử áp suất khí quyển trong phòng là p₀ = 10⁵ Pa không đổi. Nhiệt độ của khối khí được giữ không đổi trong suốt quá trình thí nghiệm. Ban đầu (trạng thái 1), thể tích khí trong xilanh là 20 cm³ và áp kế chỉ giá trị 0,5×105 Pa."
    }
  },
  {
    "id": "ly-12-2-khi-2-75",
    "difficulty": "Vận dụng",
    "prompt": "Sau khi phục vụ một vài bàn khách, thể tích bia đã rót ra khỏi thùng là 2 lít. Áp suất của khối khí trong thùng lúc này xấp xỉ bằng bao nhiêu atm? (Làm tròn đến chữ số hàng phần trăm).",
    "explanation": "Giải Thể tích khí ban đầu là 20 − 14 = 6 lít. Sau khi rót 2 lít bia, khí chiếm 8 lít. Áp dụng định luật Boyle p V 2,5 × 6 1 1 p = = = 1,875 atm. 2 V 8 2 Làm tròn đến hàng phần trăm được 1,88 atm. Đáp số: 1,88 atm",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 1.88,
    "unit": "atm",
    "tolerance": 0.005,
    "answerText": "1,88 atm",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-75-de",
      "solution": "2-75-giai",
      "shared": "2-75-chung",
      "sharedText": "Một thùng ủ bia tươi có dung tích 20 lít, ban đầu chứa 14 lít bia. Phần không gian trống phía trên mặt thoáng chứa khí CO₂ ở áp suất 2,5 atm. Khi nhân viên kéo vòi rót bia, bia chảy ra ngoài làm thể tích phần không gian chứa khí trong thùng tăng lên. Thùng được đóng kín hoàn toàn (không có khí từ bên ngoài lọt vào hay CO₂ thoát ra). Coi nhiệt độ của khối khí CO₂ không đổi và bỏ qua sự giải phóng khí CO₂ hòa tan từ bia vào không gian trống trong suốt quá trình trên."
    }
  },
  {
    "id": "ly-12-2-khi-2-76",
    "difficulty": "Vận dụng",
    "prompt": "Ở cuối ca làm việc, áp suất của khối khí trong thùng được xác định là giảm xuống chỉ còn 1,2 atm. Thể tích bia còn lại trong thùng lúc này là bao nhiêu lít?",
    "explanation": "Giải Nhiệt độ và lượng khí không đổi. Ở áp suất 1,2 atm, thể tích khí là 2,5 × 6/1,2 = 12,5 lít. Thể tích bia còn lại là 20 − 12,5 = 7,5 lít. Đáp số: 7,5 lít",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 7.5,
    "unit": "lít",
    "tolerance": 0.05,
    "answerText": "7,5 lít",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-76-de",
      "solution": "2-76-giai",
      "shared": "2-75-chung",
      "sharedText": "Một thùng ủ bia tươi có dung tích 20 lít, ban đầu chứa 14 lít bia. Phần không gian trống phía trên mặt thoáng chứa khí CO₂ ở áp suất 2,5 atm. Khi nhân viên kéo vòi rót bia, bia chảy ra ngoài làm thể tích phần không gian chứa khí trong thùng tăng lên. Thùng được đóng kín hoàn toàn (không có khí từ bên ngoài lọt vào hay CO₂ thoát ra). Coi nhiệt độ của khối khí CO₂ không đổi và bỏ qua sự giải phóng khí CO₂ hòa tan từ bia vào không gian trống trong suốt quá trình trên."
    }
  },
  {
    "id": "ly-12-2-khi-1-35",
    "difficulty": "Vận dụng cao",
    "prompt": "Một lốp ô tô được bơm căng không khí ở 27,0 C. Áp suất ban đầu của khí ở áp suất khí quyển bình thường là 1,013.105 Pa. Trong quá trình bơm, không khí vào trong lốp bị nén lại và giảm 80,0% thể ◦ tích ban đầu (khi không khí còn ở bên ngoài lốp), nhiệt độ khí trong lốp tăng lên đến 40,0 C. a) Tỉ số giữa thể tích khí sau khi đưa vào trong lốp và thể tích khí khi ở ngoài lốp là 0,2. b) Áp suất khí trong lốp là 2,11.103 Pa. ◦ c) Sau khi ô tô chạy ở tốc độ cao, nhiệt độ không khí trong lốp tăng đến 75,0 C và thể tích khí bên trong lốp tăng bằng 102% thể tích khi lốp ở 40,0 ◦ C. Áp suất mới của khí trong lốp là 5,76.105 Pa. d) Biết phần lốp tiếp xúc với mặt đường có dạng hình chữ nhật, diện tích 205 cm2. Áp lực lốp xe lên mặt đường cỡ 1 000 N.",
    "explanation": "Đáp án Đ, S, Đ, S Giải a) Đúng. Giảm 80% thể tích nghĩa là V = 0,20V . 2 1 b) Sai. Đổi nhiệt độ sang Kelvin và dùng pV /T không đổi. Tính được p = 1,013×105(313,15/300,15)/0,20 ≈ 2 5,28 × 105 Pa. c) Đúng. p = p (348,15/313,15)/1,02 ≈ 5,76 × 105 Pa. 3 2 d) Sai. 205 cm2 = 0,0205 m2. Ngay cả khi lấy chênh lệch áp suất so với khí quyển, lực ước tính (p − p )S ≈ 3 atm 9,7 × 103 N, lớn hơn 1000 N.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-35-de",
      "solution": "1-35-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-36",
    "difficulty": "Vận dụng cao",
    "prompt": "Một bình dưỡng khí dùng cho thợ lặn có thể tích chứa không khí V = 3,0 l, khí trong bình 1 được nén đến p = 15,0 MPa. Bình được nối thông khí với một bình khác đang có không khí cùng nhiệt độ, ở 1 áp suất p = 0,10 MPa và thể tích V = 39,0 l. Xét đến khi áp suất hai bình bằng nhau và bằng p, nhiệt độ của 0 0 khí ở hai bình bằng với nhiệt độ khi chưa nối. Bỏ qua thể tích của phần ống nối hai bình. a) Thể tích chứa khí tổng cộng của hai bình chứa là 42 l khi bỏ qua thể tích của ống nối hai bình chứa khí. b) Để có áp suất 0,10 MPa, vẫn giữ nhiệt độ ban đầu, lượng khí (ban đầu ở trong bình dưỡng khí) cần chứa trong bình mới có thể tích là V’ = 450 l. 1 c) Áp suất khí trong hai bình sau khi được nối với nhau với điều kiện nhiệt độ bằng nhiệt độ ban đầu là . d) Khi nối hai bình khí với nhau, do sự chênh lệch áp suất, có một lượng khí từ bình có áp suất lớn hơn chuyển sang bình có áp suất nhỏ hơn, tỉ số khối lượng phần khí chuyển sang và khối lượng tổng cộng của khí trong hai bình, bằng tỉ lệ áp suất ban đầu của bình khác và bình dưỡng khí.",
    "explanation": "Đáp án Đ, Đ, S, S Giải a) Đúng. Tổng thể tích là 3 + 39 = 42 L. ′ b) Đúng. Ở cùng nhiệt độ, V = 15(3)/0,10 = 450 L. c) Sai. Bảo toàn số mol ở nhiệt độ không đổi cho p(42) = 15(3) + 0,10(39), nên p ≈ 1,164 MPa. d) Sai. Khí mất khỏi bình thứ nhất tương ứng với độ giảm của pV trong bình đó. Tỉ lệ khối lượng là (15 − p)3/(15 × 3 + 0,10 × 39) ≈ 0,849, khác 0,10/15.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-36-de",
      "solution": "1-36-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-38",
    "difficulty": "Vận dụng cao",
    "prompt": "Một bình khí nén dành cho thợ lặn có dung tích V= 8,00 lít chứa khí có áp suất p = 8,50 1 ◦ atm ở nhiệt độ 27,0 C. Khối lượng tổng cộng của bình và khí là 1,52 kg. Mở khoá bình để một phần khí thoát ra ngoài. a) Xả khí chậm, nhiệt độ khí trong bình coi như không đổi. Khối lượng của bình và khí còn lại là 1,48 kg, áp suất giảm đến p = 4,25 atm. Khối lượng của khí trong bình khí nén đã xả ra ngoài là 0,04 kg. 2 ◦ b) Khi bình có áp suất 4,25 atm, nhiệt độ khí trong bình vẫn là 27,0 C, khối lượng riêng của khí còn lại trong bình sau khi xả khí là 5,00 kg/m3. ◦ ◦ c) Tiếp tục xả khí nhanh đến áp suất 1,0 atm, nhiệt độ khí trong bình hạ từ 27,0 C xuống đến 26,0 C. ◦ d) Tiếp tục xả khí đến khi lượng khí còn lại trong bình có cùng áp suất khí quyển 1,0 atm và nhiệt độ 27,0 C. Khối lượng khí còn lại trong bình là 20 gam.",
    "explanation": "Đáp án Đ, Đ, S, S Giải a) Đúng. Khối lượng khí đã xả là 1,52 − 1,48 = 0,04 kg. b) Đúng. Ở cùng V, T , khối lượng khí tỉ lệ với p. Áp suất giảm một nửa nên lượng khí còn lại cũng là 0,04 kg. Chia cho 0,008 m3 được 5 kg/m3. ◦ c) Sai vì chưa đủ dữ kiện. Xả nhanh có thể làm khí nguội, nhưng độ giảm đúng 1 C chưa suy ra được từ áp suất cuối. d) Sai. Ở 27 ◦ C, khối lượng còn lại là 0,04(1/4,25) ≈ 9,41 g.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Đúng",
      "Sai",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Đúng, c) Sai, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-38-de",
      "solution": "1-38-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-39",
    "difficulty": "Vận dụng cao",
    "prompt": "Một khí cầu thám không hình cầu được bơm đầy khí hydrogen đến thể tích 34 m3. Khi bơm xong, hydrogen trong khí cầu có nhiệt độ 27 ◦ C, áp suất 1,200.105 Pa. Vỏ khí cầu không bị vỡ khi thể tích khí không vượt quá 27 lần thể tích ban đầu. a) Khối lượng khí hydrogen cần bơm vào khí cầu là 3 300 gam. b) Nếu bơm khí trong thời gian 2 phút kể từ khi trong vỏ khí cầu không có khí đến khi đầy, cần dùng máy bơm có thể bơm được trung bình 15 gam khí trong mỗi giây. c) Khí cầu được thả bay lên đến độ cao nhất định thì bị vỡ do thể tích tăng quá giới hạn, nhiệt độ của khí cầu bằng nhiệt độ khí quyển là - 84 ◦ C thì áp suất trong khí cầu là 0,028.105 Pa. d) Cứ lên cao thêm 12 m thì áp suất khí quyển giảm 1 mmHg, độ cao lớn nhất khí cầu đến được là 20 km.",
    "explanation": "Đáp án Đ, S, Đ, S Giải a) Đúng. Với M = 2,0 × 10 −3 kg/mol, m = pV M /(RT ) ≈ 3,27 kg, xấp xỉ 3300 g. H2 b) Sai. Tốc độ bơm trung bình cần khoảng 3270/120 = 27 g/s. c) Đúng. Khi V = 27V , p = p (189,15/300,15)/27 ≈ 2,80 × 103 Pa. 2 1 2 1 d) Sai. Chênh áp 1,20 × 105 − 2,80 × 103 Pa tương ứng khoảng 879 mmHg nếu lấy áp suất đầu bằng áp suất ngoài. Theo quy luật giả định, độ cao khoảng 879 × 12 ≈ 10,5 km.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-39-de",
      "solution": "1-39-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-42",
    "difficulty": "Vận dụng cao",
    "prompt": "Các đồ thị sau đây mô tả sự biến đổi trạng thái của một lượng khí xác định theo các quá trình khác nhau. a) Ở đồ thị hình 1: Quá trình biến đổi có T > T . 2 1 b) Ở đồ thị hình 2: Quá trình biến đổi p < p . 2 1 c) Ở đồ thị hình 3: Quá trình biến đổi có V > V . 2 1 d) Ở đồ thị hình 4: Quá trình biến đổi từ 1 đến 2 có áp suất, thể tích và nhiệt độ đều tăng.",
    "explanation": "Đáp án Đ, S, Đ, Đ Giải a) Đúng. Trên hệ p, V , đường đẳng nhiệt phía trên ứng với T lớn hơn vì tại cùng V , p lớn hơn. b) Sai. Trên hệ V, T , độ dốc V /T = nR/p. Đường ứng với p có độ dốc nhỏ hơn nên p > p . 2 2 1 c) Đúng. Trên hệ p, T , độ dốc p/T = nR/V . Đường ứng với V có độ dốc nhỏ hơn nên V > V . 2 2 1 d) Đúng. Hình 4 là đồ thị V, T , cho V > V và T > T . Phần kéo dài của đường nối cắt trục V phía trên gốc, 2 1 2 1 nên V /T < V /T . Vì p = nRT /V , áp suất cũng tăng. 2 2 1 1",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Đúng",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-42-de",
      "solution": "1-42-giai"
    }
  },
  {
    "id": "ly-12-2-khi-1-43",
    "difficulty": "Vận dụng cao",
    "prompt": "Các quá trình biến đổi của một lượng khí được biểu diễn ở hình dưới đây. a) Từ 1 đến 2, khí có quá trình biến đổi đẳng tích, với V = V đồng thời T > T . 1 1 1 2 b) Từ 2 đến 3, có quá trình nén khí đẳng nhiệt. c) Từ 3 đến 1, có quá trình đẳng tích, áp suất đang giảm từ p xuống đến p . 3 1 d) Vẽ đồ thị các quá trình liên tục từ 1-2-3-1 trong hệ trục p, T thì đồ thị mới sẽ có dạng một hình chữ nhật.",
    "explanation": "Đáp án S, Đ, Đ, S Giải a) Sai. Trên đồ thị p, V , đoạn 1 → 2 nằm ngang, tức đẳng áp. Thể tích tăng nên nhiệt độ tăng. b) Đúng. Đoạn cong 2 → 3 là đường đẳng nhiệt trên hình, với V giảm khi đi đến trạng thái 3. c) Đúng. Đoạn 3 → 1 thẳng đứng ở V , áp suất giảm. 1 d) Sai. Trên hệ p, T , đoạn đẳng tích là đường xiên p = (nR/V )T . Ba quá trình tạo một đường kín ba cạnh. 1",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "1-43-de",
      "solution": "1-43-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-78",
    "difficulty": "Vận dụng cao",
    "prompt": "Một khối khí lí tưởng nhận nhiệt lượng và thực hiện hai quá trình biến đổi trạng thái độc lập. Quá trình (1) có áp suất không đổi; quá trình (2) có thể tích không đổi, không sinh công. Độ tăng nhiệt độ ở hai quá trình đều bằng nhau. Trong cả hai quá trình, khối khí đều không tỏa nhiệt lượng. Phát biểu nào sau đây là đúng? A. Nhiệt lượng khối khí nhận được ở quá trình (2) nhỏ hơn ở quá trình (1). B. Động năng trung bình của các phân tử trong khối khí ở cuối quá trình (1) lớn hơn ở cuối quá trình (2). C. Độ tăng nội năng của khối khí ở quá trình (1) nhỏ hơn ở quá trình (2). D. Độ tăng động năng trung bình của các phân tử trong khối khí ở quá trình (1) lớn hơn ở quá trình (2).",
    "explanation": "Đáp án: A theo mô hình phổ thông Giải Với cùng khối khí và nhiệt dung coi như không đổi, độ tăng nhiệt độ bằng nhau cho cùng ∆U . Quá trình đẳng áp sinh công W = p∆V > 0, còn quá trình đẳng tích có W = 0. Vì Q = ∆U + W , suy ra Q > Q . Nếu 1 2 1 2 hai quá trình bắt đầu ở nhiệt độ khác nhau, dữ kiện cũng chưa loại được B. Khi cùng trạng thái đầu, A là đáp án duy nhất trong mô hình này.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-78-de",
      "solution": "2-78-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-80",
    "difficulty": "Vận dụng cao",
    "prompt": "Không khí trong một căn phòng có kích thước 4 m × 5 m × 3 m ở 27°C và áp suất 10⁵ Pa. Buổi trưa nắng, nhiệt độ phòng tăng lên 37°C. Giả sử áp suất phòng luôn cân bằng với áp suất khí quyển 10⁵ Pa. Thể tích không khí đã tràn ra ngoài khỏi phòng qua các khe hở xấp xỉ là A. 2,0 m³. B. 60,0 m³. C. 20,0 m³. D. 3,3 m³.",
    "explanation": "Đáp án: A Giải Phòng có V = 60 m3, với T = 300 K và T = 310 K. Số mol thoát ra là ∆n = (pV /R)(1/T − 1/T ). Quy 1 2 1 2 về áp suất phòng và nhiệt độ cuối, thể tích khí này là V (T /T − 1) = 2,0 m3. Nếu quy về nhiệt độ đầu, kết 2 1 quả là 1,94 m3, vẫn gần A nhất.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-80-de",
      "solution": "2-80-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-82",
    "difficulty": "Vận dụng cao",
    "prompt": "Đồ thị hình bên biểu diễn sự thay đổi của áp suất p theo nhiệt độ T của một khối khí lí tưởng từ trạng thái A sang trạng thái C qua hai quá trình AB, BC. Biết thể tích của khí ở trạng thái A là 12 lít. p (atm) 1,5 1,0 ▷ 0,4 T (K) O 150 ▷ C B A a) Nhiệt độ của khối khí tại trạng thái A là 60 K. b) Thể tích của khối khí tại trạng thái C tính được là 18 lít. c) Trong quá trình biến đổi trạng thái từ A đến C, thể tích của khí đã giảm 4 lít. d) Công mà khối khí đã thực hiện trong quá trình AC là 7,2 atm.lít.",
    "explanation": "Giải a) Đúng. Đoạn AB có đường kéo dài qua O nên p/T không đổi. Suy ra T = 150 × 0,4/1,0 = 60 K. A b) Sai. AB đẳng tích nên V = 12 lít. BC đẳng nhiệt nên V = 1,0 × 12/1,5 = 8 lít. B C c) Đúng. Thể tích giảm từ 12 xuống 8 lít, tức giảm 4 lít. d) Sai. AB đẳng tích nên công bằng không. Trên BC, khí bị nén nên công khí thực hiện âm. Với quá trình gần cân bằng, W = p V ln(V /V ) = 12 ln(8/12) ≈ −4,87 atm · lít. BC B B C B",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Đúng",
      "Sai"
    ],
    "answerText": "a) Đúng, b) Sai, c) Đúng, d) Sai",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-82-de",
      "solution": "2-82-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-83",
    "difficulty": "Vận dụng cao",
    "prompt": "Một khinh khí cầu có thể tích khoang chứa khí V = 400 m³, tổng khối lượng của phần vỏ và tải trọng là m =100 kg. Khinh khí cầu có lỗ hở ở đáy thông với khí quyển, áp suất không khí bên ngoài là v p = 101325 Pa và nhiệt độ ban đầu t₀ = 27°C. Biết khối lượng mol của không khí M=29 g/mol và gia tốc rơi tự do g = 9,8 m/s². Lỗ thông khí a) Có thể áp dụng định luật Charles cho khối khí bên trong khinh khí cầu trong quá trình nung nóng. b) Khối lượng riêng D ban đầu xấp xỉ 1,18 kg/m³. c) Để khí cầu bay lên, khối lượng riêng khí nóng bên trong phải giảm còn 0,93 kg/m³. d) Nhiệt độ tối thiểu để khinh khí cầu bắt đầu bay lên xấp xỉ 380,6 K.",
    "explanation": "Giải a) Sai. Áp suất gần như cố định nhưng khí thoát qua lỗ đáy, nên số mol trong khí cầu thay đổi. b) Đúng. Với M = 0,029 kg/mol và T = 300 K, D = pM /(RT ) = 101325 × 0,029/(8,31 × 300) ≈ 0 0 0 1,1787 kg/m3. c) Đúng nếu hiểu 0,93 là giá trị ngưỡng đã làm tròn. Điều kiện cất lên là D V g > (m + DV )g, tức 0 v D < D − m /V ≈ 0,9287 kg/m3. Tại ngưỡng, lực đẩy cân bằng trọng lượng. 0 v d) Đúng xấp xỉ. Dùng mật độ chưa làm tròn, T = pM /[R(D − m /V )] ≈ 380,76 K. Nếu làm tròn min 0 v trước thành D = 0,93 kg/m3 thì được khoảng 380,2 K. Đề nêu 380,6 K, chênh khoảng 0,2 K so với giá trị tính từ số liệu chưa làm tròn.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Sai",
      "Đúng",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Đúng, c) Đúng, d) Đúng",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-83-de",
      "solution": "2-83-giai"
    }
  },
  {
    "id": "ly-12-2-khi-2-84",
    "difficulty": "Vận dụng cao",
    "prompt": "Số phân tử khí oxygen có trong bình lặn là x × 1025. Tìm x (làm tròn kết quả đến chữ số hàng phần trăm).",
    "explanation": "Giải Đổi 1,2 kg = 1200 g. Số mol n = 1200/32 = 37,5 mol. Số phân tử trong bình là N = nN = 37,5 × 6,02 × 1023 = 2,2575 × 1025. A Vậy x làm tròn đến hàng phần trăm là 2,26. Đáp số: x = 2,26",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 2.26,
    "unit": "",
    "tolerance": 0.005,
    "answerText": "2,26",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-84-de",
      "solution": "2-84-giai",
      "shared": "2-84-chung",
      "sharedText": "Một bình lặn bằng hợp kim nhôm chứa 1,2 kg khí oxygen (O₂) sẽ bị hỏng van an toàn nếu nhiệt độ khí trong bình tăng tới 67°C. Biết khối lượng mol của oxygen là 32 g/mol."
    }
  },
  {
    "id": "ly-12-2-khi-2-85",
    "difficulty": "Vận dụng cao",
    "prompt": "Để phục vụ lặn sâu, người ta dùng một bình lặn khác cùng loại (có cùng thể tích và giới hạn chịu lực) để nạp khí helium (He). Biết khối lượng mol của helium là 4 g/mol. Tính khối lượng khí helium tối đa có thể nạp vào bình ở nhiệt độ 17°C (theo đơn vị gam, làm tròn kết quả đến chữ số hàng phần mười), biết rằng để đảm bảo an toàn tuyệt đối, áp suất làm việc tối đa trong bình chỉ được phép bằng 1 áp suất 3 gây hỏng van.",
    "explanation": "Giải Đổi T = 67 + 273 = 340 K và T = 17 + 273 = 290 K. Bình cùng thể tích nên p /p = hỏng He He hỏng n T /(n T ). Ở giới hạn làm việc, tỉ số áp suất bằng 1/3, nên He He O2 hỏng n T 37,5 × 340 n = O2 hỏng = ≈ 14,655 mol. He 3T 3 × 290 He Suy ra m = 4n ≈ 58,6 g. He He Đáp số: 58,6 g",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 58.6,
    "unit": "g",
    "tolerance": 0.05,
    "answerText": "58,6 g",
    "pdfSource": {
      "folder": "ly12-khi",
      "question": "2-85-de",
      "solution": "2-85-giai",
      "shared": "2-84-chung",
      "sharedText": "Một bình lặn bằng hợp kim nhôm chứa 1,2 kg khí oxygen (O₂) sẽ bị hỏng van an toàn nếu nhiệt độ khí trong bình tăng tới 67°C. Biết khối lượng mol của oxygen là 32 g/mol."
    }
  }
];
