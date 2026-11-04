// Câu hỏi từ hai PDF Vật lý nhiệt và các câu thông hiểu bổ sung.
export const thermalPhysicsQuestions = [
  {
    "id": "ly-12-1-nhiet-3",
    "difficulty": "Nhận biết",
    "prompt": "Trong thang nhiệt độ Celsius, hai mốc nhiệt độ cơ bản (ở áp suất tiêu chuẩn) được chọn là ◦ ◦ A. 0 C là nhiệt độ sôi của nước tinh khiết và 100 C là nhiệt độ nước tinh khiết đóng băng. ◦ ◦ B. 0 C là nhiệt độ tan chảy của nước đá tinh khiết và 100 C là nhiệt độ sôi của nước tinh khiết. ◦ ◦ C. 0 C là nhiệt độ không tuyệt đối và 100 C là nhiệt độ sôi của nước tinh khiết. ◦ ◦ D. 0 C là nhiệt độ điểm ba của nước và 100 C là nhiệt độ sôi của nước tinh khiết.",
    "explanation": "Đáp án B. Giải ◦ Theo hai mốc Celsius dùng trong bài, ở áp suất tiêu chuẩn, nước đá tinh khiết nóng chảy ở 0 C và nước tinh ◦ khiết sôi ở 100 C.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "3-de",
      "solution": "3-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-4",
    "difficulty": "Nhận biết",
    "prompt": "Trong thang nhiệt độ Kelvin (nhiệt độ tuyệt đối), nhiệt độ của điểm ba của nước được chọn làm mốc chuẩn cố định và được quy ước có giá trị là A. 100 K. B. 273,16 K. C. 0 K. D. 273,15 K.",
    "explanation": "Đáp án B. Giải Theo quy ước về điểm ba được nêu trong câu hỏi, rắn, lỏng và hơi của nước cùng tồn tại ở 273,16 K, tương ◦ ứng 0,01 C.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "4-de",
      "solution": "4-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-5",
    "difficulty": "Nhận biết",
    "prompt": "Nhiệt độ không tuyệt đối (0 K) là nhiệt độ mà tại đó A. tất cả các chất đều ở thể lỏng. B. động năng chuyển động nhiệt của các phân tử bằng không và thế năng của chúng là lớn nhất. C. động năng chuyển động nhiệt của các phân tử hoặc nguyên tử bằng không và thế năng của chúng là tối thiểu. D. nước tinh khiết tồn tại đồng thời ở cả ba thể rắn, lỏng và hơi.",
    "explanation": "Đáp án C theo mô hình của đề. Giải Ở giới hạn 0 K, chuyển động nhiệt được coi là triệt tiêu và hệ ở trạng thái năng lượng thấp nhất. Trong mô hình cổ điển mà đề sử dụng, điều này ứng với phương án C.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "5-de",
      "solution": "5-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-7",
    "difficulty": "Nhận biết",
    "prompt": "Theo mô hình động học phân tử, ở thể khí, các phân tử A. chuyển động hỗn loạn. B. dao động quanh vị trí cân bằng không cố định. C. chỉ dao động quanh vị trí cân bằng cố định. D. sắp xếp có trật tự.",
    "explanation": "Đáp án A. Giải Các phân tử khí chuyển động hỗn loạn theo nhiều hướng. Giữa hai lần va chạm, chúng có thể di chuyển tự do qua khoảng cách lớn so với kích thước phân tử.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "7-de",
      "solution": "7-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-8",
    "difficulty": "Nhận biết",
    "prompt": "Chất rắn nào dưới đây là chất rắn vô định hình? A. Đường. B. Thủy tinh. C. Kim loại. D. Băng phiến.",
    "explanation": "Đáp án B. Giải Thủy tinh có cấu trúc vô định hình, với các hạt thiếu trật tự tuần hoàn trên khoảng cách dài.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "8-de",
      "solution": "8-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-9",
    "difficulty": "Nhận biết",
    "prompt": "Đặc điểm nào sau đây là đúng với cấu trúc của chất ở thể lỏng? A. Giữa các phân tử không có khoảng cách. B. Các phân tử chuyển động hỗn loạn và có khoảng cách rất lớn. C. Các phân tử có lực tương tác rất yếu. D. Các phân tử dao động quanh vị trí cân bằng, vị trí cân bằng có thể dịch chuyển.",
    "explanation": "Đáp án D. Giải Các phân tử chất lỏng ở gần nhau và dao động quanh các vị trí cân bằng có thể thay đổi. Sự thay đổi này cho phép chất lỏng chảy và nhận hình dạng của bình chứa.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "9-de",
      "solution": "9-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-11",
    "difficulty": "Nhận biết",
    "prompt": "Điều nào sau đây không đúng khi nói về cấu tạo chất. A. Các chất được cấu tạo từ các hạt riêng biệt gọi là phân tử. B. Giữa các phân tử có lực hút và lực đẩy gọi chung là lực liên kết phân tử. C. Các phân tử chuyển động không ngừng, các phân tử chuyển động càng nhanh thì nhiệt độ của vật càng cao. D. Giữa các phân tử có lực hút và lực đẩy, lực hút luôn lớn hơn lực đẩy.",
    "explanation": "Đáp án D. Giải Độ lớn tương đối của lực hút và lực đẩy phụ thuộc vào khoảng cách. Khi các phân tử bị ép đến rất gần nhau, lực đẩy chiếm ưu thế.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "11-de",
      "solution": "11-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-12",
    "difficulty": "Nhận biết",
    "prompt": "Phát biểu nào sau đây không nằm trong mô hình động học phân tử? A. Các chất được cấu tạo từ các hạt riêng biệt gọi là phân tử. B. Giữa các phân tử có lực tương tác gọi là lực liên kết phân tử. C. Các phân tử chuyển động không ngừng. D. Tốc độ chuyển động của các phân tử càng lớn thì thể tích của vật càng lớn.",
    "explanation": "Đáp án D. Giải Chuyển động nhiệt mạnh hơn gắn với nhiệt độ cao hơn. Thể tích còn phụ thuộc vào các điều kiện như áp suất hoặc bình chứa, nên tốc độ phân tử tăng chưa đủ để kết luận thể tích tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "12-de",
      "solution": "12-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-13",
    "difficulty": "Nhận biết",
    "prompt": "Nội năng của một vật là A. tổng động năng của vật và thế năng hấp dẫn của vật. B. nhiệt lượng mà vật nhận vào hoặc tỏa ra. C. tổng động năng và thế năng của các phân tử cấu tạo nên vật. D. cơ năng của vật.",
    "explanation": "Đáp án C. Giải Nội năng gồm động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng. Các đại lượng này mô tả trạng thái vi mô của vật.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "13-de",
      "solution": "13-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-15",
    "difficulty": "Nhận biết",
    "prompt": "Nội dung định luật I nhiệt động lực học là A. độ biến thiên nội năng của vật bằng tổng công và nhiệt lượng mà vật nhận được. B. độ biến thiên nội năng của vật bằng hiệu số công và nhiệt lượng mà vật nhận được. C. độ biến thiên nội năng của vật bằng tổng công mà vật nhận được. D. độ biến thiên nội năng của vật bằng tổng nhiệt lượng mà vật nhận được.",
    "explanation": "Đáp án A. Giải Định luật I cho ∆U = A + Q, với A là công và Q là nhiệt lượng vật nhận, có tính dấu. Tổng đại số này cho biết nội năng thay đổi bao nhiêu.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "15-de",
      "solution": "15-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-22",
    "difficulty": "Nhận biết",
    "prompt": "Trong suốt thời gian sôi, nhiệt độ của chất lỏng A. giảm dần đi. B. không thay đổi. C. tăng dần lên. D. khi tăng khi giảm.",
    "explanation": "Đáp án B. Giải Khi chất lỏng tinh khiết sôi ở áp suất không đổi, nhiệt độ giữ ở nhiệt độ sôi. Nhiệt lượng cung cấp trong giai đoạn này dùng cho quá trình hóa hơi.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "22-de",
      "solution": "22-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-24",
    "difficulty": "Nhận biết",
    "prompt": "Công nghệ đúc kim loại liên quan đến A. sự nóng chảy và sự hóa hơi. B. sự thăng hoa và sự ngưng kết. C. sự ngưng kết và sự nóng chảy. D. sự nóng chảy và sự đông đặc.",
    "explanation": "Đáp án D. Giải Kim loại rắn được nung nóng chảy để rót vào khuôn. Khi nguội, kim loại lỏng đông đặc và giữ hình dạng của khuôn.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "24-de",
      "solution": "24-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-30",
    "difficulty": "Nhận biết",
    "prompt": "Nhiệt lượng mà 1 kg nước lỏng ở 0 C tỏa ra môi trường xung quanh để chuyển hoàn toàn thành nước ◦ đá ở 0 C có độ lớn bằng A. nhiệt dung riêng của nước đá. B. nhiệt hóa hơi riêng của nước. C. nhiệt nóng chảy riêng của nước đá. D. nhiệt dung riêng của nước lỏng.",
    "explanation": "Đáp án C. Giải Đông đặc là quá trình ngược với nóng chảy. Độ lớn nhiệt lượng tỏa ra là mλ. Với m = 1 kg, độ lớn tính bằng jun có cùng giá trị số với λ tính bằng J/kg.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "30-de",
      "solution": "30-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-31",
    "difficulty": "Nhận biết",
    "prompt": "Người ta thường dùng sáp thơm để khử mùi trong xe hơi, nhà vệ sinh,… Các phân tử của sáp thơm có thể bay lên, khuếch tán trong không gian là nhờ sự chuyển thể nào sau đây? Các hộp sáp thơm A. Sự thăng hoa. B. Sự ngưng kết. C. Sự nóng chảy. D. Sự bay hơi.",
    "explanation": "Đáp án A theo mô hình của đề. Giải Đề coi các phân tử thoát trực tiếp từ sáp ở thể rắn vào không khí. Sự chuyển trực tiếp từ thể rắn sang thể khí được gọi là thăng hoa.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "31-de",
      "solution": "31-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-32",
    "difficulty": "Nhận biết",
    "prompt": "Sương muối là hiện tượng thời tiết cực đoan, gây ảnh hưởng đến quá trình sinh trưởng và phát triển ◦ của cây trồng. Khi nhiệt độ của hơi nước trong không khí giảm đột ngột xuống dưới 0 C, hơi nước chuyển từ thể khí sang thể rắn mà không qua thể lỏng. Quá trình chuyển thể này gọi là Sương muối trên cây A. sự thăng hoa. B. sự ngưng tụ. C. sự ngưng kết. D. sự nóng chảy.",
    "explanation": "Đáp án C. Giải Hơi nước chuyển trực tiếp từ thể khí thành tinh thể rắn. Quá trình khí chuyển thẳng sang rắn được gọi là ngưng kết.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "32-de",
      "solution": "32-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-33",
    "difficulty": "Nhận biết",
    "prompt": "Trường hợp làm biến đổi nội năng không do thực hiện công là A. nén khí trong xilanh. B. một viên bi bằng thép rơi xuống đất mềm. C. cọ xát hai vật vào nhau. D. đun nóng nước bằng bếp.",
    "explanation": "Đáp án D. Giải Bếp truyền nhiệt cho nước và làm nội năng của nước tăng. Nén khí, va chạm và cọ xát đều có sự thực hiện công cơ học.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "33-de",
      "solution": "33-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-35",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Hãy tìm câu sai trong các câu sau. A. Nhiệt độ của một vật phụ thuộc vào tốc độ chuyển động của các phân tử cấu tạo nên vật. B. Nhiệt độ cho biết trạng thái cân bằng nhiệt của các vật tiếp xúc nhau và chiều truyền nhiệt năng. C. Nhiệt độ của một vật là số đo nội năng của vật đó. D. Nhiệt độ là đại lượng dùng để mô tả mức độ nóng, lạnh của vật.",
    "explanation": "Đáp án C. Giải Nhiệt độ phản ánh mức độ chuyển động nhiệt của các phân tử. Nội năng còn liên quan đến số phân tử và thế năng tương tác, nên hai vật cùng nhiệt độ vẫn có thể có nội năng khác nhau.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "35-de",
      "solution": "35-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-38",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Phát biểu nào sau đây đúng khi so sánh sự bay hơi và sự sôi của chất lỏng? A. Sự sôi xảy ra ở mọi nhiệt độ, còn sự bay hơi xảy ra ở một nhiệt độ xác định. B. Sự bay hơi chỉ xảy ra khi chất lỏng đã đạt tới nhiệt độ sôi. C. Sự bay hơi xảy ra ở mặt thoáng và ở mọi nhiệt độ; sự sôi xảy ra cả trong lòng và ở mặt thoáng chất lỏng ở nhiệt độ sôi xác định. D. Sự bay hơi xảy ra cả trong lòng chất lỏng, còn sự sôi chỉ xảy ra ở mặt thoáng.",
    "explanation": "Đáp án C. Giải Bay hơi xảy ra ở mặt thoáng và có thể diễn ra dưới nhiệt độ sôi. Khi sôi, hơi còn hình thành thành bọt trong lòng chất lỏng. Với một áp suất xác định, sự sôi xảy ra ở nhiệt độ sôi tương ứng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "38-de",
      "solution": "38-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-39",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Khi bôi cồn y tế lên da để sát trùng, ta cảm thấy chỗ da đó mát lạnh hơn rất nhiều so với khi thoa nước thường, nguyên nhân chủ yếu vì: A. Khối lượng riêng của cồn nhỏ hơn nước làm giảm độ ma sát với bề mặt da. B. Cồn phản ứng hóa học tỏa nhiệt âm (thu nhiệt) với các tế bào biểu bì trên da. C. Cồn bay hơi nhanh hơn nước nên lấy nhiệt từ da trong thời gian ngắn hơn. D. Nhiệt độ ban đầu của cồn luôn thấp hơn nhiệt độ môi trường xung quanh.",
    "explanation": "Đáp án C. Giải Cồn dễ bay hơi. Quá trình bay hơi cần nhiệt lượng lấy từ da, làm nhiệt độ da giảm và tạo cảm giác mát lạnh.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "39-de",
      "solution": "39-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-40",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Hiện tượng vào mùa đông ở các nước vùng băng tuyết thường xảy ra sự cố vỡ đường ống nước là do A. thể tích nước khi đông đặc tăng lên gây ra áp lực lớn lên thành ống. B. tuyết rơi nhiều đè nặng thành ống. C. trời lạnh làm đường ống bị cứng dòn và rạn nứt. D. các phương án đưa ra đều sai.",
    "explanation": "Đáp án A. Giải Nước nở ra khi đông đặc. Trong ống bị giới hạn thể tích, sự nở này có thể làm áp lực lên thành ống đủ lớn để gây nứt hoặc vỡ ống.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "40-de",
      "solution": "40-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-41",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Biến đổi khí hậu là sự thay đổi lâu dài về nhiệt độ và các hình thái thời tiết kể từ năm 1800 tới nay, nguyên nhân chính gây ra biến đổi khí hậu là do các hoạt động của con người, đặc biệt liên quan đến việc đốt các nguyên liệu hóa thạch như than đá, dầu mỏ, khí đốt, làm tăng lượng khí nhà kính, từ đó làm tăng nhiệt độ Trái Đất. Với tốc độ như hiện nay, nhiều tỉnh ven biển của Việt Nam sẽ bị xâm nhập mặn, diện tích đất sẽ bị ngập mặn tăng lên. Hãy cho biết nguyên nhân chính tại sao khi nhiệt độ Trái Đất tăng lên, mực nước biển sẽ dâng cao. A. Nhiệt độ Trái Đất tăng lên làm cho mưa nhiều hơn nên làm mực nước biển dâng cao. B. Nhiệt độ Trái Đất tăng lên làm cho thủy triều dâng cao hơn. C. Nhiệt độ Trái Đất tăng lên làm cho một lượng băng ở các vùng cực cũng sẽ tan chảy, làm mực nước biển dâng cao. D. Nhiệt độ Trái Đất tăng lên làm cho nước bay hơi chậm hơn nên mực nước biển dâng cao.",
    "explanation": "Đáp án C. Giải Băng trên đất liền ở vùng cực tan và chảy ra biển làm tăng lượng nước biển, phù hợp với C. Nước biển ấm lên còn giãn nở, góp phần làm mực nước biển dâng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "41-de",
      "solution": "41-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-42",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Tại sao săm xe đạp sau khi được bơm căng, mặc dù đã vặn van thật chặt, nhưng để lâu ngày vẫn bị xẹp? A. Vì cao su dùng làm săm đẩy các phân tử không khí lại gần nhau nên săm bị xẹp. B. Vì săm xe làm bằng cao su là chất đàn hồi, nên sau khi giãn ra thì tự động co lại làm cho săm để lâu ngày bị xẹp. C. Vì giữa các phân tử cao su dùng làm săm có khoảng cách nên các phân tử không khí có thể thoát ra ngoài làm săm xẹp dần. D. Vì lúc bơm, không khí vào săm còn nóng, sau đó không khí nguội dần, co lại, làm săm xe bị xẹp.",
    "explanation": "Đáp án C. Giải Các phân tử khí có thể thấm dần qua vật liệu cao su ngay cả khi van đã đóng chặt. Sau một thời gian dài, lượng khí trong săm giảm và săm xẹp dần.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "42-de",
      "solution": "42-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-48",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Nhiệt dung riêng của rượu là 2500 J/(kg · K). Điều đó có nghĩa là gì? A. 1 kg rượu bị đông đặc thì giải phóng nhiệt lượng là 2500 J. B. Nhiệt lượng có trong 1 kg rượu ở nhiệt độ bình thường là 2500 J. ◦ C. Để nâng 1 kg rượu tăng thêm 1 K (1 C) ta cần cung cấp cho nó nhiệt lượng là 2500 J. D. Để nâng 1 kg rượu lên nhiệt độ bay hơi ta phải cung cấp cho nó một nhiệt lượng là 2500 J.",
    "explanation": "Đáp án C. Giải Theo Q = mc∆T , để 1 kg rượu tăng 1 K mà không chuyển thể, cần Q = 1 × 2500 × 1 = 2500 J.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "48-de",
      "solution": "48-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-50",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Trong hệ thống làm mát của động cơ đốt trong (như ô tô), người ta thường dùng nước làm chất lỏng tuần hoàn để hấp thụ nhiệt lượng từ thân máy, sau đó mang tới két tản nhiệt để tỏa ra môi trường. Đặc tính vật lí nào sau đây của nước đóng vai trò quan trọng nhất trong ứng dụng này? A. Độ nhớt thấp. B. Nhiệt độ hóa hơi lớn. C. Nhiệt dung riêng lớn. D. Khối lượng riêng nhỏ.",
    "explanation": "Đáp án C. Giải Với cùng khối lượng và nhiệt lượng hấp thụ, ∆T = Q/(mc). Nước có nhiệt dung riêng lớn nên hấp thụ được nhiều nhiệt từ động cơ trong khi nhiệt độ tăng tương đối ít.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "50-de",
      "solution": "50-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-51",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Nhiệt dung riêng của một chất đang không ở trạng thái chuyển thể phụ thuộc vào. A. Thể hiện tại của chất đó (rắn, lỏng, khí). B. Nhiệt độ hiện tại của chất đó. C. Khối lượng của chất đó. D. Nhiệt độ môi trường.",
    "explanation": "Đáp án A theo mô hình đơn giản của đề. Giải Nhiệt dung riêng của cùng một chất có thể khác nhau giữa các thể rắn, lỏng và khí. Nếu xét chính xác hơn, c cũng có thể thay đổi theo nhiệt độ trong cùng một thể, nên B có cơ sở khi bỏ giả thiết coi c không đổi trong khoảng khảo sát.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "51-de",
      "solution": "51-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-52",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Một vật đang được làm lạnh sao cho thể tích của vật không thay đổi. Nội năng của vật A. tăng lên. B. tăng lên rồi giảm đi. C. giảm đi. D. không thay đổi.",
    "explanation": "Đáp án C. Giải Làm lạnh khiến nhiệt độ giảm, làm động năng chuyển động nhiệt trung bình giảm. Với mô hình của bài ở thể tích không đổi, nội năng giảm.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "52-de",
      "solution": "52-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-53",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Khi truyền cùng một nhiệt lượng cho hai vật có cùng khối lượng được làm từ hai chất khác nhau, trong điều kiện không xảy ra sự chuyển thể, phát biểu nào sau đây là đúng? A. Vật được làm từ chất có nhiệt dung riêng nhỏ hơn có độ biến thiên nhiệt độ lớn hơn. B. Vật được làm từ chất có nhiệt dung riêng nhỏ hơn có độ biến thiên nhiệt độ nhỏ hơn. C. Hai vật không thay đổi nhiệt độ. D. Hai vật có độ biến thiên nhiệt độ bằng nhau.",
    "explanation": "Đáp án A. Giải Từ Q = mc∆T , suy ra ∆T = Q/(mc). Khi Q và m như nhau, vật có c nhỏ hơn tăng nhiệt độ nhiều hơn.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "53-de",
      "solution": "53-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-54",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Ở các vùng ven biển, người ta nhận thấy ban ngày thường có gió mát thổi từ biển vào đất liền (gió biển), nhưng ban đêm gió lại đổi chiều thổi ngược từ đất liền ra biển (gió đất). Yếu tố vật lý nào sau đây đóng vai trò quyết định hiện tượng trên? A. Quá trình bốc hơi và ngưng tụ của nước biển theo nhiệt độ. B. Sự chênh lệch nhiệt dung riêng giữa đất và nước biển. C. Khối lượng riêng của nước biển lớn hơn nhiều so với đất cát. D. Hiện tượng thủy triều lên xuống theo chu kỳ ngày - đêm.",
    "explanation": "Đáp án B. Giải Nước biển có nhiệt dung riêng lớn nên nóng lên và nguội đi chậm hơn đất liền trong mô hình của bài. Ban ngày, không khí trên đất nóng lên và bốc lên, kéo không khí từ biển vào. Ban đêm, đất nguội nhanh hơn biển và chiều gió gần mặt đất đổi ngược lại. ◦",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "54-de",
      "solution": "54-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-55",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Cho hai vật X và Y tiếp xúc nhau trong hệ cách nhiệt. Ban đầu vật X có nhiệt độ 80 C; khi đạt trạng ◦ thái cân bằng nhiệt, nhiệt độ chung của hai vật là 50 C. Nhận định nào sau đây đúng? A. Không có sự truyền năng lượng nhiệt giữa hai vật. B. Năng lượng nhiệt truyền từ vật Y sang vật X. ◦ C. Nhiệt độ ban đầu của vật Y lớn hơn 80 C. D. Năng lượng nhiệt truyền từ vật X sang vật Y.",
    "explanation": "Đáp án D. Giải ◦ ◦ X nguội từ 80 C xuống 50 C, nên X tỏa nhiệt. Hệ cách nhiệt với bên ngoài, vì vậy nhiệt lượng X tỏa ra được Y nhận.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "55-de",
      "solution": "55-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-58",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Một động cơ hơi nước cần một nồi hơi “súp de” để đun nước sôi tạo hơi. Việc giãn nở của hơi tạo áp lực đẩy lên pit-tông hay các cánh turbine, khi đó chuyển động thẳng được chuyển thành chuyển động quay để quay bánh xe hay truyền động cho các bộ phận cơ khí khác. Động cơ này có nguyên tắc hoạt động dựa trên. A. Định luật Jun Len xơ. B. Định luật I của nhiệt động lực học. C. Định luật II Newton. D. Mô hình động học phân tử về cấu tạo chất.",
    "explanation": "Đáp án B. Giải Nguồn nhiệt cung cấp năng lượng để tạo hơi. Hơi giãn nở và thực hiện công lên pit-tông hoặc turbine. Định luật I liên hệ nhiệt lượng, công và độ biến thiên nội năng trong quá trình này.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "58-de",
      "solution": "58-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-59",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Một chiếc ghế văn phòng có thể nâng hạ độ cao như hình vẽ. Một khối khí xác định bị giam giữa hai ống M và N; M có thể trượt lên xuống dọc theo thành trong của N. Coi khối khí là khí lí tưởng và không trao đổi nhiệt với bên ngoài. Khi M trượt xuống dưới thì khối khí bên trong ống M N A. nhận công và nội năng tăng. B. thực hiện công và nội năng tăng. C. thực hiện công và nội năng giảm. D. nhận công và nội năng giảm.",
    "explanation": "Đáp án A. Giải Ống M đi xuống làm thể tích khối khí giảm, nên khí bị nén và nhận công (A > 0). Vì Q = 0, định luật I cho ∆U = A > 0.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "59-de",
      "solution": "59-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-60",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Khi dùng nhiệt kế thủy ngân để đo nhiệt độ của chính cơ thể mình, người ta phải thực hiện các thao tác sau (chưa được sắp xếp theo đúng thứ tự): a. Dùng bông lau sạch thân và bầu nhiệt kế b. Đặt nhiệt kế vào nách trái, rồi kẹp cánh tay lại để giữ nhiệt kế c. Lấy nhiệt kế ra khỏi nách để đọc nhiệt kế d. Kiểm tra xem thủy ngân đã tụt hết xuống bầu nhiệt kế chưa; Nếu chưa thì vẩy nhiệt kế cho thủy ngân tụt xuống Hãy sắp xếp các thao tác trên theo thứ tự hợp lí nhất: A. d, b, c, a B. a, b, c, d C. d, a, b, c D. b, a, c, d",
    "explanation": "Đáp án C. Giải Theo quy trình trong đề, trước hết kiểm tra và vẩy cột thủy ngân xuống nếu cần (d). Tiếp theo lau nhiệt kế (a), đặt vào nách (b), rồi lấy ra đọc (c).",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "60-de",
      "solution": "60-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-62",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Trong thí nghiệm đo nhiệt hoá hơi riêng của nước như sách giáo khoa, việc sử dụng công thức L = P (τQ −τP ) làm cho giá trị của nhiệt hoá hơi riêng tính được sẽ. H2O mP −mQ A. Lớn hơn thực tế vì chưa tính đến hao phí năng lượng. B. Nhỏ hơn thực tế vì chưa tính đến hao phí năng lượng. C. Lớn hơn thực tế vì khối lượng nước bị giảm trong quá trình hoá hơi. D. Nhỏ hơn thực tế vì mở nắp bình làm mất nhiệt lượng trong bình.",
    "explanation": "Đáp án A. Giải Đặt ∆τ = τ − τ và ∆m = m − m > 0. Năng lượng cấp gồm nhiệt hóa hơi và phần hao phí Q P P Q P ∆τ = L∆m + Q . hao phí Chia cho ∆m, giá trị tính bằng công thức của đề là L + Q /∆m > L. hao phí",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "62-de",
      "solution": "62-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-63",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Giả sử cung cấp cho vật một công 500 J nhưng nhiệt lượng bị thất thoát ra môi trường là 200 J. Nội năng của vật tăng hay giảm bao nhiêu. A. Giảm 200 J. B. Tăng 300 J. C. Giảm 300 J. D. Tăng 200 J.",
    "explanation": "Đáp án B. Giải Vật nhận công nên A = +500 J. Nhiệt lượng thoát ra nên Q = −200 J. Theo định luật I, ∆U = A + Q = 500 − 200 = 300 J. Dấu dương cho biết nội năng tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "63-de",
      "solution": "63-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-64",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Lượng nước sôi có trong một chiếc ấm có khối lượng m = 300 g. Đun nước tới nhiệt độ sôi, dưới áp suất khí quyển bằng 1 atm. Cho nhiệt hóa hơi riêng của nước là 2,3 · 106 J/kg. Nhiệt lượng cần thiết để có ′ m = 100 g nước hóa thành hơi là. A. 460 J. B. 230 kJ. C. 690 J. D. 320 J.",
    "explanation": "Đáp án B. Giải Chỉ 100 g = 0,100 kg nước chuyển sang hơi. Lượng nước này đã ở nhiệt độ sôi, nên Q = Lm ′ = 2,3 × 106 × 0,100 = 2,30 × 105 J = 230 kJ. ◦",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "64-de",
      "solution": "64-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-65",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 500 g nước đá ở 0 C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34 · 105 J/kg. A. Q = 167 J. B. Q = 167 · 106 J. C. Q = 7 · 107 J. D. Q = 167 kJ.",
    "explanation": "Đáp án D. Giải Đổi 500 g = 0,500 kg. Nước đá đã ở nhiệt độ nóng chảy, nên Q = λm = 3,34 × 105 × 0,500 = 167 000 J = 167 kJ.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "65-de",
      "solution": "65-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-66",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Ba viên bi bằng sắt, đồng và chì có cùng khối lượng được nung nóng đến cùng một nhiệt độ t. Sau đó, người ta thả đồng thời ba viên bi này lên một tấm sáp dày. Nhiệt lượng do các viên bi tỏa ra làm sáp nóng chảy cục bộ và các viên bi lún sâu vào tấm sáp với các độ sâu khác nhau (như hình vẽ). Bỏ qua sự trao đổi nhiệt với môi trường. Sắp xếp nhiệt dung riêng của ba kim loại trên theo thứ tự tăng dần là Sắt Đồng Chì Tấm sáp A. c < c < c . chì sắt đồng B. c < c < c . đồng chì sắt C. c < c < c . chì đồng sắt D. c < c < c . sắt đồng chì",
    "explanation": "Đáp án C. Giải Trong mô hình thí nghiệm, viên lún sâu hơn làm nóng chảy nhiều sáp hơn và tỏa nhiều nhiệt hơn. Với cùng khối lượng và cùng độ giảm nhiệt độ tới mốc so sánh, Q = mc∆T tăng theo c. Hình cho thấy sắt lún sâu nhất, tiếp đến đồng rồi chì, nên c < c < c . chì đồng sắt",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "66-de",
      "solution": "66-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-67",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Hình bên phải là đồ thị nhiệt độ - thời gian của một chất rắn được đun nóng liên tục. Phát biểu nào sau đây đúng? 110 80 60 30 0 3 6 9 12 Thời gian (phút) ◦ )C (ộđtệihN A. Đây là chất rắn vô định hình vì nhiệt độ của chất tăng liên tục. B. Quá trình nóng chảy bắt đầu ở phút thứ 9 và kết thúc ở phút thứ 13. ◦ C. Chất rắn này nóng chảy ở 80 C và quá trình nóng chảy kéo dài 6 phút. D. Trong khoảng thời gian từ phút thứ 3 đến phút thứ 9, chất chỉ tồn tại ở thể lỏng.",
    "explanation": "Đáp án C. Giải ◦ Đồ thị nằm ngang ở 80 C từ phút thứ 3 đến phút thứ 9 dù chất vẫn được đun. Đây là giai đoạn nóng chảy và kéo dài 9 − 3 = 6 phút. Trong giai đoạn này, rắn và lỏng cùng tồn tại.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "pdfSource": {
      "question": "67-de",
      "solution": "67-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-68",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Trong thời gian từ thời điểm T đến thời điểm T ứng với quá trình chuyển thể nào sau đây? 1 2 A. Đông đặc. B. Hóa hơi. C. Nóng chảy. D. Ngưng tụ.",
    "explanation": "Đáp án B. Giải ◦ Từ T đến T , nhiệt độ giữ ở 100 C dù vẫn cấp nhiệt. Nước sôi và nhiệt lượng nhận được dùng để chuyển 1 2 nước lỏng thành hơi.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "68-de",
      "solution": "68-giai",
      "shared": "68-69-de-chung",
      "sharedText": "Hình vẽ bên biểu diễn sự phụ thuộc của nhiệt độ vào thời gian của 400 g nước khi được đun nóng. ◦ t ( C) 100 35 T (s) O T T 1 2"
    }
  },
  {
    "id": "ly-12-1-nhiet-69",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "Biết nhiệt dung riêng của nước là 4180 J/(kg · K). Trong thời gian từ t = 0 đến thời điểm T , nhiệt 0 1 lượng cần cung cấp cho nước là A. 108,68 kJ. B. 16720 kJ. C. 10868 kJ. D. 167,2 kJ.",
    "explanation": "Đáp án A. Giải ◦ ◦ Từ đầu đến T , nước tăng nhiệt độ từ 35 C đến 100 C. Với 400 g = 0,400 kg, ta có 1 Q = mc∆t = 0,400 × 4180 × (100 − 35) = 108 680 J = 108,68 kJ.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "69-de",
      "solution": "69-giai",
      "shared": "68-69-de-chung",
      "sharedText": "Hình vẽ bên biểu diễn sự phụ thuộc của nhiệt độ vào thời gian của 400 g nước khi được đun nóng. ◦ t ( C) 100 35 T (s) O T T 1 2"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-14",
    "difficulty": "Thông hiểu",
    "prompt": "Khi bắt đầu đun, nhiệt độ của vật rắn kết tinh tăng dần. Đến nhiệt độ xác định, sự nóng chảy diễn ra, vật chuyển từ thể rắn sang thể lỏng và nhiệt độ …(1)... dù tiếp tục đun. Sau khi toàn bộ vật chuyển sang thể lỏng, nhiệt độ của chất lỏng ...(2)... khi tiếp tục đun. Chỗ trống (1) và (2) lần lượt là A. “giảm xuống” và “giữ giá trị ổn định“. B. “không tăng” và “giảm xuống“. C. “giảm xuống” và “tiếp tục tăng lên“. D. “không tăng” và “tiếp tục tăng lên“.",
    "explanation": "Đáp án D Giải Trong giai đoạn nóng chảy của chất rắn kết tinh, nhiệt lượng cung cấp dùng để chuyển thể nên nhiệt độ giữ nguyên. Khi chất đã hóa lỏng hoàn toàn, cấp nhiệt tiếp làm nhiệt độ chất lỏng tăng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "pdf2-14-de",
      "solution": "pdf2-14-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-17",
    "difficulty": "Thông hiểu",
    "prompt": "Với mô hình động học phân tử, sự khác biệt về độ lớn của lực tương tác giữa các phân tử trong chất rắn, chất lỏng, chất khí dẫn đến sự A. đồng nhất về cấu trúc của chúng. B. khác biệt về cấu trúc của chúng. C. khác biệt về khối lượng của chúng. D. đồng nhất về khối lượng của chúng.",
    "explanation": "Đáp án B Giải Lực tương tác ảnh hưởng đến cách các phân tử sắp xếp và khả năng dịch chuyển. Vì thế các thể rắn, lỏng và khí có cấu trúc khác nhau.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "pdf2-17-de",
      "solution": "pdf2-17-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-21",
    "difficulty": "Thông hiểu",
    "prompt": "Khi làm nóng liên tục vật rắn vô định hình, vật rắn mềm đi và chuyển dần sang thể lỏng một cách liên tục. Trong quá trình này nhiệt độ của vật ...(1)…. Do đó, vật rắn vô định hình ...(2)…. Điền vào chỗ trống các cụm từ thích hợp. A. (1) tăng lên liên tục; (2) không có nhiệt độ nóng chảy xác định. B. (1) giữ ổn định; (2) không có nhiệt độ nóng chảy xác định. C. (1) giữ ổn định; (2) có nhiệt độ nóng chảy xác định được. D. (1) tăng lên liên tục; (2) có nhiệt độ nóng chảy xác định được.",
    "explanation": "Đáp án A Giải Chất rắn vô định hình mềm dần trong một khoảng nhiệt độ khi được đun. Nhiệt độ tăng liên tục trong quá trình đó, nên không có một nhiệt độ nóng chảy xác định.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "pdf2-21-de",
      "solution": "pdf2-21-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-22",
    "difficulty": "Thông hiểu",
    "prompt": "Nếu nhiệt truyền từ một cái bàn sang một khối băng chuyển động ngang trượt trên mặt bàn thì điều nào sau đây phải đúng? A. Mặt bàn gồ ghề và có ma sát giữa mặt bàn và mặt băng. B. Khối băng lạnh hơn cái bàn. C. Khối băng đang chuyển pha. D. Khối băng đang ở nhiệt độ điểm ba.",
    "explanation": "Đáp án B Giải Nhiệt tự truyền từ nơi có nhiệt độ cao hơn đến nơi có nhiệt độ thấp hơn. Vì bàn truyền nhiệt cho khối băng nên bàn nóng hơn khối băng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "pdf2-22-de",
      "solution": "pdf2-22-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-23",
    "difficulty": "Thông hiểu",
    "prompt": "Phát biểu nào sau đây nói về nhiệt lượng là không đúng? A. Nhiệt lượng là số đo độ biến thiên nội năng của vật trong quá trình truyền nhiệt. B. Một vật lúc nào cũng có nội năng, do đó lúc nào cũng có nhiệt lượng. C. Đơn vị của nhiệt lượng cũng là đơn vị của nội năng. D. Nhiệt lượng không phải là nội năng.",
    "explanation": "Đáp án B Giải Nội năng là năng lượng của vật ở một trạng thái. Nhiệt lượng chỉ xác định cho một quá trình truyền nhiệt, nên vật có nội năng không có nghĩa là vật luôn có nhiệt lượng.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "pdf2-23-de",
      "solution": "pdf2-23-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-25",
    "difficulty": "Thông hiểu",
    "prompt": "Lực tương tác giữa các phân tử chất rắn ...(1)... nên giữ được các phân tử ở các vị trí cân bằng và mỗi phân tử ...(2)... Điền vào chỗ trống các cụm từ thích hợp. A. (1) là lực hút; (2) dao động xung quanh vị trí cân bằng có thể di chuyển được. B. (1) rất mạnh; (2) đứng yên tại vị trí cân bằng này. C. (1) là lực hút; (2) chỉ có thể dao động xung quanh vị trí cân bằng xác định này. D. (1) rất mạnh; (2) chỉ có thể dao động xung quanh vị trí cân bằng xác định này.",
    "explanation": "Đáp án D Giải Tương tác mạnh giữ các hạt của chất rắn gần các vị trí cân bằng. Chuyển động nhiệt khiến chúng dao động quanh những vị trí ấy.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "pdfSource": {
      "question": "pdf2-25-de",
      "solution": "pdf2-25-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-26",
    "difficulty": "Thông hiểu",
    "prompt": "Đồ thị bên minh họa sự thay đổi nhiệt độ của chất X theo thời gian khi nhận nhiệt và chuyển thể. Chất X có thể là A. cồn. B. nước. C. kim loại. D. băng phiến.",
    "explanation": "Đáp án B Giải ◦ ◦ ◦ Đồ thị bắt đầu dưới 0 C, có đoạn chuyển thể tại 0 C, rồi có đoạn nằm ngang tại 100 C. Hai mốc phù hợp với nước ở áp suất thường.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "pdf2-26-de",
      "solution": "pdf2-26-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-35",
    "difficulty": "Thông hiểu",
    "prompt": "Trong những ngày nắng ở bãi biển, đứng trên cát cảm thấy nóng nhưng bước chân xuống nước biển thì vẫn tương đối mát là do sự khác biệt về tính chất nào giữa nước và cát? A. Khối lượng riêng. B. Nhiệt dung riêng. C. Nhiệt độ. D. Nhiệt nóng chảy.",
    "explanation": "Đáp án B Giải Nước có nhiệt dung riêng lớn hơn cát. Với cùng nhiệt lượng hấp thụ trên một đơn vị khối lượng, ∆T = Q/(mc) nhỏ hơn đối với nước, nên nước nóng lên chậm hơn.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "pdfSource": {
      "question": "pdf2-35-de",
      "solution": "pdf2-35-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-37",
    "difficulty": "Thông hiểu",
    "prompt": "Một số phân tử ở gần mặt thoáng chất lỏng, chuyển động hướng ra ngoài, có ...(1)... đủ lớn thắng được lực tương tác giữa các phân tử thì có thể thoát ra ngoài khối chất lỏng. Như vậy, có thể nói sự bay hơi là sự hóa hơi xảy ra ở ...(2)... của khối chất lỏng. Điền vào chỗ trống các cụm từ thích hợp. A. (1) động năng; (2) mặt thoáng. B. (1) thế năng; (2) mặt thoáng. C. (1) động năng; (2) trong lòng. D. (1) thế năng; (2) trong lòng.",
    "explanation": "Đáp án A Giải Phân tử chuyển động ra ngoài có thể rời chất lỏng nếu động năng đủ để thắng tương tác với các phân tử bên cạnh. Quá trình này xảy ra ở mặt thoáng. ◦",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "pdf2-37-de",
      "solution": "pdf2-37-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-38",
    "difficulty": "Thông hiểu",
    "prompt": "Đặt cốc nhôm đựng 0,2 lít nước ở nhiệt độ 30 C, đo bằng nhiệt kế 1 (NK1) vào trong bình cách nhiệt ◦ đựng 0,5 lít nước ở nhiệt độ 60 C, đo bằng nhiệt kế 2 (NK2). Quan sát sự thay đổi nhiệt độ của nước trong bình và cốc từ khi bắt đầu thí nghiệm cho đến khi hai nhiệt độ này bằng nhau. Làm thế nào để nhận biết quá trình truyền nhiệt lượng giữa nước trong bình và nước trong cốc đã kết thúc? A. Khi thấy số chỉ NK1 và số chỉ NK2 bằng nhau. B. Khi thấy số chỉ NK1 và số chỉ NK2 đều bằng nhiệt độ môi trường. C. Khi thấy số chỉ NK1 giảm còn số chỉ NK2 tăng. D. Khi thấy số chỉ NK1 tăng còn số chỉ NK2 giảm.",
    "explanation": "Đáp án A Giải NK1 và NK2 có cùng số chỉ khi hai phần nước có cùng nhiệt độ. Khi đó, sự truyền nhiệt ròng giữa chúng kết thúc.",
    "type": "Trắc nghiệm",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "pdfSource": {
      "question": "pdf2-38-de",
      "solution": "pdf2-38-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-1",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao sương xuất hiện ở mặt ngoài cốc nước đá dù cốc không rò?",
    "options": [
      "Nước trong cốc sôi ở mặt ngoài.",
      "Thành cốc tạo ra nước khi co lại.",
      "Hơi nước trong không khí gặp thành cốc lạnh rồi ngưng tụ.",
      "Nước đá thăng hoa xuyên qua thành cốc."
    ],
    "answer": 2,
    "explanation": "Không khí sát thành cốc bị làm lạnh. Khi nhiệt độ xuống dưới điểm sương, một phần hơi nước ngưng tụ thành giọt ở mặt ngoài.",
    "hint": "Không khí sát thành cốc bị làm lạnh. Khi nhiệt độ xuống dưới điểm sương, một phần hơi nước ngưng tụ thành giọt ở mặt ngoài."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-2",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Hai khăn ướt giống nhau được treo trong cùng phòng. Một khăn đặt trước quạt, khăn kia ở nơi không có gió. Vì sao khăn trước quạt thường khô nhanh hơn?",
    "options": [
      "Quạt làm nhiệt độ sôi của nước giảm đến nhiệt độ phòng.",
      "Quạt làm nước trong khăn đông đặc.",
      "Quạt làm nước có nhiệt dung riêng nhỏ hơn.",
      "Quạt liên tục thay lớp không khí ẩm sát khăn bằng không khí ít ẩm hơn."
    ],
    "answer": 3,
    "explanation": "Hơi nước tích lại sát mặt khăn làm chậm bay hơi. Luồng gió cuốn lớp không khí ẩm đó đi và duy trì sự bay hơi nhanh hơn.",
    "hint": "Hơi nước tích lại sát mặt khăn làm chậm bay hơi. Luồng gió cuốn lớp không khí ẩm đó đi và duy trì sự bay hơi nhanh hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-3",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao nồi áp suất giúp thực phẩm chín nhanh hơn nồi hở?",
    "options": [
      "Nắp nồi làm nhiệt dung riêng của nước giảm mạnh.",
      "Nước sôi ở nhiệt độ thấp hơn vì áp suất cao hơn.",
      "Áp suất cao làm nước đóng băng trong nồi.",
      "Áp suất cao làm nhiệt độ sôi tăng, nên thực phẩm được nấu ở nhiệt độ cao hơn."
    ],
    "answer": 3,
    "explanation": "Nước sôi khi áp suất hơi bão hòa bằng áp suất bên ngoài. Trong nồi áp suất, điều kiện đó đạt ở nhiệt độ cao hơn so với nồi hở.",
    "hint": "Nước sôi khi áp suất hơi bão hòa bằng áp suất bên ngoài. Trong nồi áp suất, điều kiện đó đạt ở nhiệt độ cao hơn so với nồi hở."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-4",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một ống tiêm kín chứa ít không khí và một ống khác đầy nước, không có bọt khí. Vì sao ấn pít-tông của ống khí dễ làm giảm thể tích hơn?",
    "options": [
      "Các phân tử nước biến mất khi bị ép.",
      "Khoảng trống giữa các phân tử khí lớn hơn nhiều so với giữa các phân tử nước.",
      "Chỉ nước có khoảng cách giữa các phân tử.",
      "Các phân tử khí nhỏ đi khi bị ép."
    ],
    "answer": 1,
    "explanation": "Khi nén, khoảng cách trung bình giữa các phân tử giảm. Khí có nhiều khoảng trống giữa các phân tử nên giảm thể tích dễ hơn chất lỏng.",
    "hint": "Khi nén, khoảng cách trung bình giữa các phân tử giảm. Khí có nhiều khoảng trống giữa các phân tử nên giảm thể tích dễ hơn chất lỏng."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-5",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Trong cùng một phòng, vì sao chạm tay vào miếng kim loại thường thấy lạnh hơn chạm vào miếng gỗ đã ở trong phòng đủ lâu?",
    "options": [
      "Kim loại dẫn nhiệt tốt hơn nên tay mất nhiệt nhanh hơn.",
      "Kim loại luôn có nhiệt độ thấp hơn gỗ.",
      "Gỗ truyền nhiệt từ tay nhanh hơn kim loại.",
      "Tay không trao đổi nhiệt với hai miếng."
    ],
    "answer": 0,
    "explanation": "Hai miếng có thể cùng nhiệt độ phòng. Kim loại dẫn nhiệt tốt, đưa năng lượng ra xa điểm tiếp xúc nhanh hơn, nên da nguội nhanh hơn.",
    "hint": "Hai miếng có thể cùng nhiệt độ phòng. Kim loại dẫn nhiệt tốt, đưa năng lượng ra xa điểm tiếp xúc nhanh hơn, nên da nguội nhanh hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-6",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Bình giữ nhiệt có lớp chân không giữa hai vách. Lớp này hạn chế trực tiếp hai cơ chế truyền nhiệt nào?",
    "options": [
      "Chỉ bức xạ.",
      "Dẫn nhiệt và bức xạ.",
      "Dẫn nhiệt qua không khí và đối lưu.",
      "Đối lưu và bức xạ."
    ],
    "answer": 2,
    "explanation": "Dẫn nhiệt qua khí và đối lưu cần vật chất giữa hai vách. Chân không làm hai cơ chế này giảm mạnh, còn bức xạ vẫn có thể truyền qua.",
    "hint": "Dẫn nhiệt qua khí và đối lưu cần vật chất giữa hai vách. Chân không làm hai cơ chế này giảm mạnh, còn bức xạ vẫn có thể truyền qua."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-7",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Hai bình giống nhau chứa nước nóng cùng nhiệt độ. Mặt ngoài một bình sơn đen mờ, bình kia bóng phản xạ. Nếu chỉ xét bức xạ nhiệt, bình nào mất năng lượng nhanh hơn?",
    "options": [
      "Bình đen mờ vì phát bức xạ nhiệt mạnh hơn.",
      "Hai bình luôn mất như nhau vì cùng nhiệt độ.",
      "Bình đen mờ vì chỉ truyền nhiệt bằng đối lưu.",
      "Bình bóng vì phản xạ tốt."
    ],
    "answer": 0,
    "explanation": "Ở cùng nhiệt độ và diện tích, bề mặt đen mờ có độ phát xạ lớn hơn bề mặt bóng phản xạ, nên tỏa nhiều năng lượng hơn qua bức xạ.",
    "hint": "Ở cùng nhiệt độ và diện tích, bề mặt đen mờ có độ phát xạ lớn hơn bề mặt bóng phản xạ, nên tỏa nhiều năng lượng hơn qua bức xạ."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-8",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao bộ phận đun nước thường đặt gần đáy ấm thay vì sát mặt nước?",
    "options": [
      "Nước chỉ truyền năng lượng bằng bức xạ.",
      "Nước lạnh ở phía trên không thể chuyển động.",
      "Nước nóng nặng hơn và luôn chìm xuống.",
      "Nước nóng ở đáy nhẹ hơn và đi lên, tạo dòng đối lưu."
    ],
    "answer": 3,
    "explanation": "Trong khoảng nhiệt độ thông thường khi đun, nước được làm nóng ở đáy nở ra và có khối lượng riêng nhỏ hơn. Nước nóng đi lên, nước lạnh đi xuống và dòng đối lưu phân phối nhiệt.",
    "hint": "Trong khoảng nhiệt độ thông thường khi đun, nước được làm nóng ở đáy nở ra và có khối lượng riêng nhỏ hơn. Nước nóng đi lên, nước lạnh đi xuống và dòng đối lưu phân phối nhiệt."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-9",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao quấn nhiều lớp vải khô quanh một bình nước ấm giúp nước nguội chậm hơn?",
    "options": [
      "Các lớp vải giữ những túi không khí, làm giảm dẫn nhiệt và đối lưu.",
      "Vải luôn tự sinh nhiệt đủ để bù hao phí.",
      "Vải làm mất hoàn toàn mọi trao đổi nhiệt.",
      "Vải làm nước có nhiệt dung riêng lớn hơn."
    ],
    "answer": 0,
    "explanation": "Không khí bị giữ giữa các sợi dẫn nhiệt kém. Khi khó lưu thông, nó cũng truyền ít năng lượng bằng đối lưu, nên nước mất nhiệt chậm hơn.",
    "hint": "Không khí bị giữ giữa các sợi dẫn nhiệt kém. Khi khó lưu thông, nó cũng truyền ít năng lượng bằng đối lưu, nên nước mất nhiệt chậm hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-10",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao để cùng một lượng nước trong đĩa rộng thường cạn nhanh hơn trong cốc hẹp ở cùng điều kiện?",
    "options": [
      "Mặt thoáng lớn cho phép nhiều phân tử thoát ra đồng thời hơn.",
      "Đĩa rộng làm nhiệt hóa hơi riêng của nước bằng không.",
      "Cốc hẹp làm lực tương tác giữa các phân tử nước lớn hơn.",
      "Đĩa rộng làm nước sôi ở nhiệt độ phòng."
    ],
    "answer": 0,
    "explanation": "Bay hơi xảy ra ở mặt thoáng. Khi diện tích tiếp xúc với không khí tăng, có nhiều phân tử ở bề mặt có thể thoát ra trong cùng thời gian.",
    "hint": "Bay hơi xảy ra ở mặt thoáng. Khi diện tích tiếp xúc với không khí tăng, có nhiều phân tử ở bề mặt có thể thoát ra trong cùng thời gian."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-11",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Hai khay nước giống nhau đặt ở cùng nhiệt độ và có luồng khí như nhau, nhưng không khí quanh khay X ẩm hơn. Khay nào thường mất nước chậm hơn?",
    "options": [
      "Khay X vì độ ẩm làm nước có nhiệt độ thấp hơn ngay lập tức.",
      "Khay X vì trong không khí ẩm, sự bay hơi ròng giảm.",
      "Khay Y vì không khí khô làm tăng ngưng tụ.",
      "Hai khay luôn mất nước bằng nhau."
    ],
    "answer": 1,
    "explanation": "Trong không khí ẩm, nhiều phân tử hơi nước có thể quay lại mặt nước hơn. Chênh lệch giữa số phân tử thoát ra và quay lại nhỏ hơn, nên nước mất chậm hơn.",
    "hint": "Trong không khí ẩm, nhiều phân tử hơi nước có thể quay lại mặt nước hơn. Chênh lệch giữa số phân tử thoát ra và quay lại nhỏ hơn, nên nước mất chậm hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-12",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao một lọ kín chứa nước có thể có lượng nước lỏng gần như không đổi dù các phân tử vẫn bay hơi?",
    "options": [
      "Áp suất trong lọ bằng không.",
      "Mọi phân tử nước ngừng chuyển động.",
      "Nước không thể bay hơi trong bình kín.",
      "Khi đạt cân bằng động, tốc độ bay hơi bằng tốc độ ngưng tụ."
    ],
    "answer": 3,
    "explanation": "Các phân tử vẫn trao đổi giữa pha lỏng và pha hơi. Ở cân bằng động, hai quá trình diễn ra với tốc độ bằng nhau nên lượng nước trong mỗi pha ổn định.",
    "hint": "Các phân tử vẫn trao đổi giữa pha lỏng và pha hơi. Ở cân bằng động, hai quá trình diễn ra với tốc độ bằng nhau nên lượng nước trong mỗi pha ổn định."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-13",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Ở vùng núi cao, đun nước trong nồi hở vẫn thấy nước sôi nhưng rau có thể lâu chín hơn. Vì sao?",
    "options": [
      "Nhiệt dung riêng của nước tăng vô hạn.",
      "Áp suất khí quyển thấp làm nước sôi ở nhiệt độ thấp hơn.",
      "Áp suất thấp làm nước sôi ở nhiệt độ cao hơn.",
      "Nước sôi ở cùng nhiệt độ ở mọi nơi."
    ],
    "answer": 1,
    "explanation": "Ở vùng cao, áp suất khí quyển thấp. Nước đạt áp suất hơi bão hòa bằng áp suất khí quyển ở nhiệt độ thấp hơn, nên rau được nấu trong nước ít nóng hơn.",
    "hint": "Ở vùng cao, áp suất khí quyển thấp. Nước đạt áp suất hơi bão hòa bằng áp suất khí quyển ở nhiệt độ thấp hơn, nên rau được nấu trong nước ít nóng hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-14",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao túi nước đá đang tan làm mát thức uống lâu hơn một túi nước lỏng cùng khối lượng, cả hai ban đầu ở 0 °C?",
    "options": [
      "Nước đá còn hấp thụ nhiệt nóng chảy trước khi nước tan ấm lên.",
      "Nước lỏng luôn tỏa nhiệt cho thức uống.",
      "Nước đá không cần nhận nhiệt để tan.",
      "Nước đá giữ lạnh lâu hơn vì có nhiệt độ ban đầu thấp hơn trong tình huống này."
    ],
    "answer": 0,
    "explanation": "Trong khi tan, nước đá hấp thụ nhiệt nóng chảy mà vẫn ở khoảng 0 °C. Nước lỏng ban đầu ở 0 °C chỉ có thể hấp thụ thêm năng lượng bằng cách ấm lên.",
    "hint": "Trong khi tan, nước đá hấp thụ nhiệt nóng chảy mà vẫn ở khoảng 0 °C. Nước lỏng ban đầu ở 0 °C chỉ có thể hấp thụ thêm năng lượng bằng cách ấm lên."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-15",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao mặt hồ có thể đóng băng trong khi bên dưới vẫn còn nước lỏng?",
    "options": [
      "Băng nặng hơn nước và lắng xuống đáy.",
      "Băng dẫn nhiệt tốt hơn nước nên đáy ấm lên.",
      "Băng chỉ hình thành nếu toàn bộ hồ đã đông cứng.",
      "Băng có khối lượng riêng nhỏ hơn nước, nổi và tạo lớp hạn chế mất nhiệt."
    ],
    "answer": 3,
    "explanation": "Băng nổi vì khối lượng riêng nhỏ hơn nước lỏng. Lớp băng trên mặt hạn chế truyền nhiệt từ nước phía dưới ra không khí lạnh.",
    "hint": "Băng nổi vì khối lượng riêng nhỏ hơn nước lỏng. Lớp băng trên mặt hạn chế truyền nhiệt từ nước phía dưới ra không khí lạnh."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-16",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Nhiệt kế điện tử đang ở nhiệt độ phòng được đặt vào nước ấm. Vì sao cần đợi số chỉ ổn định?",
    "options": [
      "Để cảm biến đạt nhiệt độ phòng.",
      "Để cảm biến tiến gần cân bằng nhiệt với nước.",
      "Để nước ấm thêm nhờ nhiệt kế.",
      "Để cảm biến không trao đổi năng lượng với nước ở bất kỳ thời điểm nào."
    ],
    "answer": 1,
    "explanation": "Cảm biến ban đầu lạnh hơn nước và cần thời gian nhận nhiệt. Khi số chỉ ổn định, nhiệt độ cảm biến đã gần bằng nhiệt độ nước.",
    "hint": "Cảm biến ban đầu lạnh hơn nước và cần thời gian nhận nhiệt. Khi số chỉ ổn định, nhiệt độ cảm biến đã gần bằng nhiệt độ nước."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-17",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Hai vật cùng chất và cùng nhiệt độ, nhưng một vật có khối lượng gấp đôi. Nếu cấp cùng một nhiệt lượng và bỏ qua hao phí, điều gì xảy ra?",
    "options": [
      "Vật nhẹ tăng nhiệt độ nhiều hơn.",
      "Vật nặng không thể nóng lên.",
      "Cả hai tăng nhiệt độ bằng nhau.",
      "Vật nặng tăng nhiệt độ nhiều hơn."
    ],
    "answer": 0,
    "explanation": "Năng lượng nhận trên mỗi kilôgam của vật nhẹ lớn hơn. Với cùng chất và không chuyển thể, độ tăng nhiệt độ của vật nhẹ lớn hơn.",
    "hint": "Năng lượng nhận trên mỗi kilôgam của vật nhẹ lớn hơn. Với cùng chất và không chuyển thể, độ tăng nhiệt độ của vật nhẹ lớn hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-18",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Cho một tinh thể nhỏ vào túi chườm chứa dung dịch quá bão hòa. Chất tan nhanh chóng kết tinh và túi ấm lên. Năng lượng làm ấm túi xuất phát chủ yếu từ đâu?",
    "options": [
      "Từ năng lượng giải phóng khi chất tan kết tinh.",
      "Từ lực hấp dẫn tác dụng lên túi.",
      "Từ nhiệt độ của tinh thể mồi truyền sang toàn bộ túi.",
      "Từ sự bay hơi của nước qua vỏ túi."
    ],
    "answer": 0,
    "explanation": "Khi chất tan chuyển sang cấu trúc tinh thể bền hơn, hệ giải phóng năng lượng. Năng lượng đó làm phần còn lại của túi chườm ấm lên; tinh thể mồi chỉ khởi phát kết tinh.",
    "hint": "Khi chất tan chuyển sang cấu trúc tinh thể bền hơn, hệ giải phóng năng lượng. Năng lượng đó làm phần còn lại của túi chườm ấm lên; tinh thể mồi chỉ khởi phát kết tinh."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-19",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một quả bóng kim loại nóng bị thả vào chậu nước mát. Xét cả bóng và nước, bỏ qua chậu và môi trường. Năng lượng mà bóng mất đi có quan hệ thế nào với năng lượng nước nhận?",
    "options": [
      "Năng lượng bóng mất lớn hơn vì bóng nóng hơn.",
      "Năng lượng nước nhận lớn hơn vì nước có thể có khối lượng lớn hơn.",
      "Hai độ lớn bằng nhau do hệ không trao đổi năng lượng với bên ngoài.",
      "Cả hai đều bằng không vì vật và nước tiếp xúc trực tiếp."
    ],
    "answer": 2,
    "explanation": "Năng lượng chuyển từ bóng sang nước bên trong hệ. Với giả thiết hệ cô lập, phần năng lượng bóng giảm đúng bằng phần nước tăng.",
    "hint": "Năng lượng chuyển từ bóng sang nước bên trong hệ. Với giả thiết hệ cô lập, phần năng lượng bóng giảm đúng bằng phần nước tăng."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-20",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Hai bình nhiệt lượng kế đều chứa cùng lượng nước mát. Rót cùng lượng nước nóng vào mỗi bình, nhưng bình thứ hai có thành kim loại dày hơn và ban đầu cùng nhiệt độ với nước mát. Bỏ qua mất nhiệt ra ngoài. Vì sao bình thứ hai có thể đạt nhiệt độ cân bằng thấp hơn?",
    "options": [
      "Nước nóng có nhiệt độ ban đầu thấp hơn trong bình thứ hai.",
      "Thành bình dày ngăn nước nóng hòa vào nước mát.",
      "Nhiệt dung riêng của nước thay đổi vì bình dày hơn.",
      "Thành bình thứ hai cần nhiều năng lượng hơn để tăng nhiệt độ."
    ],
    "answer": 3,
    "explanation": "Nước nóng truyền năng lượng cho cả nước mát và thành bình. Thành bình có nhiệt dung lớn hơn nhận nhiều năng lượng hơn với cùng mức tăng nhiệt độ, nên mức nhiệt độ cân bằng thấp hơn.",
    "hint": "Nước nóng truyền năng lượng cho cả nước mát và thành bình. Thành bình có nhiệt dung lớn hơn nhận nhiều năng lượng hơn với cùng mức tăng nhiệt độ, nên mức nhiệt độ cân bằng thấp hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-21",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một nhiệt kế chất lỏng được chuyển từ nước ấm sang nước lạnh. Vì sao cột chất lỏng trong ống mao dẫn hạ xuống sau khi ổn định?",
    "options": [
      "Chất lỏng đo chuyển thành khí rồi thoát ra ngoài.",
      "Nhiệt kế ngừng truyền nhiệt nên chất lỏng đột ngột mất khối lượng.",
      "Chất lỏng đo co lại khi nguội, thể tích của nó giảm tương đối so với bình chứa.",
      "Ống mao dẫn tự hút chất lỏng ra khỏi bầu nhiệt kế."
    ],
    "answer": 2,
    "explanation": "Chất lỏng trong nhiệt kế trao đổi nhiệt với môi trường lạnh và co lại. Mức co của chất lỏng so với phần thủy tinh làm thể tích trong ống giảm, nên mặt cột hạ xuống.",
    "hint": "Chất lỏng trong nhiệt kế trao đổi nhiệt với môi trường lạnh và co lại. Mức co của chất lỏng so với phần thủy tinh làm thể tích trong ống giảm, nên mặt cột hạ xuống."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-22",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một khối khí cách nhiệt giãn nở và nâng một vật nặng qua pít-tông. Nội năng của khí thay đổi ra sao nếu bỏ qua mọi trao đổi năng lượng khác?",
    "options": [
      "Không thể suy ra dù biết khí thực hiện công.",
      "Giữ nguyên vì không có truyền nhiệt.",
      "Giảm vì khí truyền năng lượng ra ngoài dưới dạng công.",
      "Tăng vì khí giãn nở."
    ],
    "answer": 2,
    "explanation": "Lớp cách nhiệt làm nhiệt lượng trao đổi bằng không. Năng lượng để nâng vật đến từ khối khí, nên nội năng khí giảm đúng bằng công khí thực hiện.",
    "hint": "Lớp cách nhiệt làm nhiệt lượng trao đổi bằng không. Năng lượng để nâng vật đến từ khối khí, nên nội năng khí giảm đúng bằng công khí thực hiện."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-23",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một khối khí nhận nhiệt, đồng thời đẩy pít-tông đi lên. Nếu nhiệt lượng nhận vào bằng công do khí thực hiện, nội năng thay đổi thế nào?",
    "options": [
      "Không đổi vì hai phần năng lượng vào và ra bằng nhau.",
      "Tăng đúng bằng nhiệt lượng nhận.",
      "Tăng gấp đôi nhiệt lượng nhận.",
      "Giảm đúng bằng công khí thực hiện."
    ],
    "answer": 0,
    "explanation": "Khí nhận năng lượng dưới dạng nhiệt và truyền năng lượng ra dưới dạng công. Hai phần bằng nhau nên độ biến thiên nội năng bằng không.",
    "hint": "Khí nhận năng lượng dưới dạng nhiệt và truyền năng lượng ra dưới dạng công. Hai phần bằng nhau nên độ biến thiên nội năng bằng không."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-24",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một bình cách nhiệt chứa nước được khuấy bằng cánh quạt quay. Vì sao nhiệt độ nước có thể tăng?",
    "options": [
      "Vì môi trường truyền nhiệt qua lớp cách nhiệt.",
      "Vì nhiệt dung riêng của nước bằng không khi khuấy.",
      "Vì cánh quạt làm giảm khối lượng nước.",
      "Vì trục quay truyền công vào nước, làm nội năng tăng."
    ],
    "answer": 3,
    "explanation": "Lớp cách nhiệt hạn chế trao đổi nhiệt với môi trường. Công từ trục quay truyền vào nước và chuyển thành nội năng khi chuyển động dòng chảy bị tiêu tán.",
    "hint": "Lớp cách nhiệt hạn chế trao đổi nhiệt với môi trường. Công từ trục quay truyền vào nước và chuyển thành nội năng khi chuyển động dòng chảy bị tiêu tán."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-25",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Hai miếng sắt giống nhau cùng nóng tới một nhiệt độ. Một miếng bị cắt thành nhiều mảnh và thả vào nước cùng điều kiện với miếng nguyên. Vì sao các mảnh thường nguội nhanh hơn?",
    "options": [
      "Tổng diện tích tiếp xúc với nước lớn hơn.",
      "Các mảnh không thể truyền nhiệt cho nước.",
      "Tổng khối lượng của các mảnh lớn hơn miếng nguyên.",
      "Nhiệt dung riêng của sắt giảm khi cắt nhỏ."
    ],
    "answer": 0,
    "explanation": "Cắt nhỏ làm tổng diện tích bề mặt tiếp xúc với nước tăng. Với cùng chênh lệch nhiệt độ ban đầu, diện tích lớn hơn giúp trao đổi nhiệt nhanh hơn.",
    "hint": "Cắt nhỏ làm tổng diện tích bề mặt tiếp xúc với nước tăng. Với cùng chênh lệch nhiệt độ ban đầu, diện tích lớn hơn giúp trao đổi nhiệt nhanh hơn."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-26",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Một chén nước đang được làm lạnh. Khi nước bắt đầu đóng băng và cả nước lẫn băng cùng tồn tại, tủ lạnh tiếp tục lấy nhiệt. Nhiệt lượng lấy đi chủ yếu làm gì?",
    "options": [
      "Làm thêm nước chuyển sang thể rắn.",
      "Làm nước đang đông giảm nhiệt độ liên tục mà không đổi tỉ lệ hai pha.",
      "Làm băng chuyển ngay sang thể hơi.",
      "Làm toàn bộ nước lỏng tăng nhiệt độ."
    ],
    "answer": 0,
    "explanation": "Khi nước tinh khiết đông đặc ở áp suất cố định, năng lượng tiếp tục thoát ra dưới dạng nhiệt đông đặc. Tỉ lệ băng tăng trong khi nhiệt độ gần như giữ ở mốc đông đặc.",
    "hint": "Khi nước tinh khiết đông đặc ở áp suất cố định, năng lượng tiếp tục thoát ra dưới dạng nhiệt đông đặc. Tỉ lệ băng tăng trong khi nhiệt độ gần như giữ ở mốc đông đặc."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-27",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Vì sao mặt kính phòng tắm mờ đi khi tắm nước nóng nhưng rõ lại khi phòng thông thoáng và kính ấm lên?",
    "options": [
      "Hơi nước chuyển thẳng thành tinh thể rồi nóng chảy.",
      "Các giọt nước biến mất vì kính hấp thụ chúng vĩnh viễn.",
      "Kính biến thành nước rồi trở lại thể rắn.",
      "Hơi nước ngưng tụ trên kính lạnh, rồi các giọt bay hơi khi điều kiện thuận lợi."
    ],
    "answer": 3,
    "explanation": "Kính lạnh làm hơi nước ngưng tụ thành nhiều giọt nhỏ tán xạ ánh sáng. Khi kính ấm lên và không khí bớt ẩm, các giọt bay hơi, giúp kính trong lại.",
    "hint": "Kính lạnh làm hơi nước ngưng tụ thành nhiều giọt nhỏ tán xạ ánh sáng. Khi kính ấm lên và không khí bớt ẩm, các giọt bay hơi, giúp kính trong lại."
  },
  {
    "id": "ly-12-1-nhiet-tinh-huong-28",
    "difficulty": "Thông hiểu",
    "type": "Trắc nghiệm",
    "prompt": "Tại sao dùng kẹp kim loại dài để gắp vật nóng giúp tay ít nóng hơn dùng kẹp cùng loại nhưng ngắn, trong một khoảng thời gian gắp ngắn?",
    "options": [
      "Nhiệt dung riêng của kim loại tăng theo chiều dài kẹp.",
      "Đầu cầm của kẹp dài nóng lên ngay khi chạm vật.",
      "Kẹp dài không truyền nhiệt.",
      "Nhiệt phải truyền qua quãng đường dài hơn mới tới tay."
    ],
    "answer": 3,
    "explanation": "Năng lượng dẫn dọc theo kim loại từ đầu gắp nóng đến tay. Với các yếu tố khác như nhau, đầu cầm xa nguồn nóng hơn thường tăng nhiệt chậm hơn trong thời gian ngắn.",
    "hint": "Năng lượng dẫn dọc theo kim loại từ đầu gắp nóng đến tay. Với các yếu tố khác như nhau, đầu cầm xa nguồn nóng hơn thường tăng nhiệt chậm hơn trong thời gian ngắn."
  },
  {
    "id": "ly-12-1-nhiet-70",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "(Đúng/sai) Xét tính đúng sai của các mệnh đề sau: a) Nhiệt năng là một dạng năng lượng và bằng tổng động năng các phân tử cấu tạo nên vật. b) Nội năng của vật bằng tổng công và nhiệt lượng mà vật nhận được. c) Nội năng là một dạng năng lượng. d) Nhiệt độ của vật càng cao thì nhiệt lượng của vật càng lớn.",
    "explanation": "Đáp án a) Đúng, b) Sai, c) Đúng, d) Sai. Giải a) Đúng. Theo cách dùng thuật ngữ trong câu, nhiệt năng là tổng động năng chuyển động nhiệt của các phân tử. b) Sai. Định luật I cho ∆U = A + Q. Tổng công và nhiệt lượng nhận được xác định độ biến thiên nội năng. c) Đúng. Nội năng là năng lượng vi mô gồm động năng chuyển động nhiệt và thế năng tương tác giữa các hạt. d) Sai. Nhiệt lượng là năng lượng trao đổi trong một quá trình. Để xác định lượng nhiệt truyền, cần biết quá trình và các đại lượng liên quan, chẳng hạn m, c, ∆T khi chỉ làm nóng vật.",
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
      "question": "70-de",
      "solution": "70-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-72",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Đúng/sai) Để tìm hiểu sự truyền năng lượng nhiệt giữa các vật, một nhóm học sinh đã chuẩn bị một số dụng cụ thí nghiệm gồm: 01 cốc nhôm; 01 cốc thủy tinh (loại lớn chứa được cốc nhôm); 02 nhiệt kế điện tử; 01 bình đựng nước nóng; 01 bình đựng nước lạnh cùng nhiệt độ với môi trường nơi làm thí nghiệm. 20.0 20.0 Nhiệt kế Cốc thủy tinh Cốc nhôm (cốc nhỏ phía trong) Nhóm đã tiến hành hai thí nghiệm như sau: Thí nghiệm 1: Đổ nước từ bình nước lạnh vào cốc nhôm và cốc thủy tinh rồi dùng hai nhiệt kế đồng thời đo nhiệt độ nước trong hai cốc (lúc t = 0). Sau đó, đặt cốc nhôm vào trong cốc thủy tinh sao cho nước của cốc thủy tinh không tràn vào cốc nhôm, đồng thời đo nhiệt độ nước trong hai cốc và ghi số liệu từ hai nhiệt kế vào các thời điểm cách nhau 2 phút. Thí nghiệm 2: Đưa cốc nhôm ra khỏi cốc thủy tinh và thay nước trong cốc thủy tinh bằng nước nóng còn nước trong cốc nhôm vẫn giữ nguyên. Đo đồng thời nhiệt độ nước trong hai cốc (lúc t = 0). Sau đó lại đặt cốc nhôm chứa nước lạnh vào cốc thủy tinh chứa nước nóng sao cho nước từ cốc thủy tinh không tràn vào cốc nhôm, đồng thời đo nhiệt độ nước trong hai cốc và ghi số liệu từ hai nhiệt kế vào các thời điểm cách nhau 2 phút. Kết quả hai lần thí nghiệm: Thời gian (phút) 0 2 4 6 8 ◦ 1 Nhiệt độ ( C) của cốc nhôm 20,0 20,0 20,0 20,0 20,0 ◦ 1 Nhiệt độ ( C) của cốc thủy tinh 20,0 20,0 20,0 20,0 20,0 ◦ 2 Nhiệt độ ( C) của cốc nhôm 20,0 26,5 32,0 36,5 33,5 ◦ 2 Nhiệt độ ( C) của cốc thủy tinh 82,0 60,5 46,0 36,5 33,5 a) Kết quả thí nghiệm 1 cho thấy, khi nước ở hai cốc có cùng một nhiệt độ thì không có sự truyền năng lượng nhiệt giữa chúng. b) Kết quả của hai thí nghiệm này khẳng định rằng khi cho hai vật tiếp xúc nhau thì năng lượng nhiệt chỉ truyền từ vật có nội năng cao sang vật có nội năng thấp hơn. c) Kết quả thí nghiệm 2 cho thấy, có sự truyền năng lượng nhiệt từ nước ở cốc thủy tinh (nhiệt độ cao hơn) sang nước ở cốc nhôm (nhiệt độ thấp hơn) cho đến khi trạng thái cân bằng nhiệt được thiết lập. d) Kết quả thí nghiệm 2 cho thấy, sau thời điểm t = 6 phút, nội năng của nước trong cốc nhôm tăng lên.",
    "explanation": "Đáp án a) Đúng, b) Sai, c) Đúng, d) Sai. Giải ◦ a) Đúng. Trong thí nghiệm 1, hai cốc đều ở 20,0 C ở mọi thời điểm đo. Không có chênh lệch nhiệt độ để tạo dòng nhiệt ròng giữa hai cốc. b) Sai. Chiều tự truyền nhiệt do chênh lệch nhiệt độ quyết định. Dữ liệu cũng không cho biết nội năng toàn phần của hai lượng nước. ◦ ◦ c) Đúng. Ban đầu, nước trong cốc thủy tinh ở 82,0 C, còn nước trong cốc nhôm ở 20,0 C. Cốc thủy tinh ◦ nguội đi và cốc nhôm nóng lên đến khi cả hai đạt 36,5 C ở phút thứ 6. ◦ ◦ d) Sai. Từ phút thứ 6 đến phút thứ 8, nhiệt độ nước trong cốc nhôm giảm từ 36,5 C xuống 33,5 C, nên nội năng của nước giảm theo mô hình của bài.",
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
      "question": "72-de",
      "solution": "72-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-73",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Đúng/sai) Ba vật rắn A, B, C có cùng khối lượng, ở cùng một nhiệt độ, được thả vào ba thùng cách nhiệt giống nhau, chứa cùng một lượng nước tinh khiết như nhau và có nhiệt độ ban đầu giống nhau. Hình bên biểu diễn sự thay đổi của nhiệt độ T của các vật rắn (đường liền nét) và của nước (đường nét đứt) trong các thùng theo thời gian t. Hình (a), (b), (c) tương ứng với các thùng nước đựng vật A, B, C T T T t t t (a) (b) (c) a) Nhiệt dung riêng của C gấp 3 lần nhiệt dung riêng của B b) Nhiệt lượng mà A trao đổi với nước lớn hơn nhiệt lượng mà C trao đổi với nước. c) Nhiệt độ của vật chất trong ba thùng khi đã cân bằng nhiệt là như nhau. d) Nhiệt độ ban đầu của nước trong ba thùng thấp hơn nhiệt độ của các vật rắn.",
    "explanation": "Đáp án a) Đúng, b) Sai, c) Sai, d) Đúng. Giải a) Đúng. Gọi k = m c /m , giống nhau ở cả ba thùng. Cân bằng nhiệt cho nước nước rắn T − T cb nước,0 c = k . rắn T − T rắn,0 cb Đếm ô trên hình, ở thùng B nước tăng 2 ô và vật rắn giảm 2 ô, nên c = k. Ở thùng C nước tăng 3 ô và vật B rắn giảm 1 ô, nên c = 3k = 3c . C B b) Sai. Nước ở thùng A tăng 1 ô, còn ở thùng C tăng 3 ô. Hai lượng nước giống nhau, nên theo Q = mc∆T , nước ở thùng C nhận nhiều nhiệt hơn. c) Sai. Độ cao của các đường khi gặp nhau cho thấy T < T < T . cb,A cb,B cb,C d) Đúng. Ở cả ba đồ thị, đường nét đứt của nước bắt đầu thấp hơn đường liền nét của vật rắn.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Đúng",
      "Sai",
      "Sai",
      "Đúng"
    ],
    "answerText": "a) Đúng, b) Sai, c) Sai, d) Đúng",
    "pdfSource": {
      "question": "73-de",
      "solution": "73-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-74",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Đúng/sai) Thí nghiệm thực hành đo nhiệt nóng chảy riêng của nước đá. Cho nước đá có khối lượng 0,02 kg vào bình nhiệt lượng kế sao cho dây điện trở chìm trong nước đá. Bật biến thế nguồn ở 11,15 W. Kết quả đo được ở bảng: Thời gian τ (s) 0 120 240 360 480 600 720 840 ◦ Nhiệt độ ( C) 0 0 0 0 0 0 1,6 16,4 a) Sau 600 s từ lúc bắt đầu thí nghiệm nước đá tan hết. ◦ b) Nhiệt độ ban đầu của nước đá là 0 C. c) Nhiệt nóng chảy riêng của nước đá là 3,345 · 105 J/kg. d) Nhiệt dung riêng của nước là 4520 J/(kg · K).",
    "explanation": "Đáp án a) và c) phụ thuộc giả thiết, b) Đúng, d) Đúng theo mô hình lí tưởng. Giải ◦ ◦ a) Chưa xác định được chính xác. Bảng cho T = 0 C tại 600 s và T = 1,6 C tại 720 s. Nước đá có thể vừa tan hết tại 600 s hoặc tan hết sau mốc đó và trước 720 s. Cách đọc gần đúng của đề lấy 600 s là cuối giai đoạn nóng chảy. ◦ b) Đúng. Ở thời điểm bắt đầu τ = 0, nhiệt độ ghi trong bảng là 0 C. c) Đúng nếu lấy thời gian nóng chảy là 600 s và bỏ qua hao phí. Khi đó P τ 11,15 × 600 λ = = = 3,345 × 105 J/kg. m 0,02 Giá trị này phụ thuộc vào cách chọn thời điểm kết thúc nóng chảy ở ý a). d) Đúng theo mô hình bỏ qua hao phí và nhiệt dung của bình. Từ 720 đến 840 s, nước đã ở thể lỏng và tăng 16,4 − 1,6 = 14,8 ◦ C. Suy ra 11,15(840 − 720) c = ≈ 4520 J/(kg · K). 0,02(16,4 − 1,6)",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Phụ thuộc giả thiết",
      "Đúng",
      "Phụ thuộc giả thiết",
      "Đúng"
    ],
    "answerText": "a) Phụ thuộc giả thiết, b) Đúng, c) Phụ thuộc giả thiết, d) Đúng",
    "pdfSource": {
      "question": "74-de",
      "solution": "74-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-16",
    "difficulty": "Thông hiểu",
    "prompt": "(Đúng/sai) Khi hai vật tiếp xúc với nhau, a) nhiệt lượng luôn tự truyền từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn. b) nhiệt lượng luôn tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ nhỏ hơn. c) hai vật không trao đổi nhiệt với nhau nếu nhiệt độ chúng bằng nhau. d) hai vật không trao đổi nhiệt với nhau nếu khối lượng chúng bằng nhau.",
    "explanation": "Đáp án S, Đ, Đ, S Giải a) Sai. Chiều tự truyền nhiệt phụ thuộc vào nhiệt độ của hai vật. b) Đúng. Nhiệt tự truyền từ vật nóng sang vật lạnh. c) Đúng. Khi nhiệt độ bằng nhau, dòng nhiệt ròng bằng không. d) Sai. Hai vật cùng khối lượng vẫn trao đổi nhiệt nếu nhiệt độ khác nhau.",
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
      "question": "pdf2-16-de",
      "solution": "pdf2-16-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-20",
    "difficulty": "Thông hiểu",
    "prompt": "(Đúng/sai) Một khối khí đựng trong xilanh có pít-tông. Đốt nóng xilanh trong thời gian đủ dài (trong quá trình đốt pít-tông không dịch chuyển). a) Nhiệt độ khối khí tăng lên. b) Nội năng của khối khí giảm. c) Động năng trung bình của phân tử khí tăng. d) Áp suất khối khí không đổi.",
    "explanation": "Đáp án Đ, S, Đ, S Giải a) Đúng. Khí được đun nóng trong xilanh có thể tích không đổi. b) Sai. Pít-tông đứng yên nên công bằng không. Khí nhận nhiệt nên ∆U = Q > 0. c) Đúng. Động năng trung bình của phân tử tăng khi nhiệt độ tăng. d) Sai. Với lượng khí cố định và thể tích không đổi, p/T không đổi. Nhiệt độ tăng làm áp suất tăng.",
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
      "question": "pdf2-20-de",
      "solution": "pdf2-20-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-28",
    "difficulty": "Thông hiểu",
    "prompt": "(Đúng/sai) Các phân tử chuyển động hỗn loạn không ngừng nên chúng có động năng (động năng phân tử). Các phân tử tương tác với nhau nên chúng có thế năng (thế năng phân tử). a) Động năng phân tử phụ thuộc vào tốc độ chuyển động của phân tử. b) Thế năng phân tử phụ thuộc vào khoảng cách giữa các phân tử. c) Nội năng của vật là tổng động năng và thế năng của các phân tử cấu tạo nên vật. d) Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật.",
    "explanation": "Đáp án Đ, Đ, Đ, Đ Giải a) Đúng. Động năng của một phân tử là mv2/2. b) Đúng. Thế năng tương tác thay đổi khi khoảng cách giữa các phân tử thay đổi. c) Đúng. Nội năng là tổng các phần năng lượng vi mô này. d) Đúng. Với một vật nói chung, nhiệt độ liên quan đến động năng, còn thể tích có thể ảnh hưởng tới thế năng tương tác.",
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
      "question": "pdf2-28-de",
      "solution": "pdf2-28-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-32",
    "difficulty": "Thông hiểu",
    "prompt": "(Đúng/sai) Các phân tử cấu tạo nên vật chuyển động hỗn loạn không ngừng nên a) tốc độ của các phân tử không ngừng thay đổi. b) khoảng cách giữa các phân tử thay đổi không đáng kể. c) động năng và cả thế năng của các phân tử không ngừng thay đổi. d) Khi nói động năng và thế năng của phân tử thì phải hiểu đó là động năng và thế năng hiệu dụng của các phân tử cấu tạo nên vật.",
    "explanation": "Đáp án Đ, S, Đ, S theo mô hình động học Giải a) Đúng. Tương tác và va chạm có thể làm vận tốc từng phân tử thay đổi theo thời gian. b) Sai. Chuyển động hỗn loạn nói chung không bảo đảm khoảng cách giữa từng cặp phân tử chỉ thay đổi ít. c) Đúng. Vận tốc và khoảng cách có thể thay đổi, làm động năng và thế năng vi mô thay đổi. d) Sai. Đây là các năng lượng vi mô. Khi mô tả cả hệ, ta có thể tính tổng hoặc giá trị trung bình tùy đại lượng.",
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
      "question": "pdf2-32-de",
      "solution": "pdf2-32-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-36",
    "difficulty": "Thông hiểu",
    "prompt": "(Đúng/sai) Đặt ống nghiệm đựng bột băng phiến vào bình nước. Trong ống nghiệm có nhiệt kế để đo nhiệt độ của băng phiến. Dùng đèn cồn đun nóng bình đựng nước. Thí nghiệm cho thấy, trong thời gian bị đun, bột băng phiến đang nóng chảy thì a) nhiệt độ của băng phiến tăng. b) động năng của các phân tử băng phiến tăng. c) thế năng của các phân tử băng phiến thay đổi. d) nội năng của bột băng phiến tăng.",
    "explanation": "Đáp án S, S, Đ, Đ Giải a) Sai. Trong lúc băng phiến kết tinh đang nóng chảy, nhiệt độ giữ ở mốc nóng chảy. b) Sai. Nhiệt độ không tăng nên động năng chuyển động nhiệt trung bình không tăng. c) Đúng. Khi cấu trúc chuyển từ rắn sang lỏng, thế năng tương tác thay đổi. d) Đúng. Băng phiến tiếp tục thu nhiệt trong quá trình nóng chảy, làm nội năng tăng.",
    "kind": "true-false",
    "type": "Đúng/sai",
    "answer": [
      "Sai",
      "Sai",
      "Đúng",
      "Đúng"
    ],
    "answerText": "a) Sai, b) Sai, c) Đúng, d) Đúng",
    "pdfSource": {
      "question": "pdf2-36-de",
      "solution": "pdf2-36-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-39",
    "difficulty": "Thông hiểu",
    "prompt": "(Đúng/sai) Các nội dung sau đây liên quan đến sự hóa hơi. a) Chất lỏng có thể hóa hơi ở các nhiệt độ khác nhau. b) Độ lớn của nhiệt hóa hơi riêng của chất lỏng phụ thuộc vào nhiệt độ ở đó chất lỏng hóa hơi. c) Với một chất lỏng nhất định, thông thường nhiệt hóa hơi riêng tăng khi nhiệt độ giảm. d) Với một chất lỏng nhất định, nhiệt độ sôi không phụ thuộc vào áp suất trên mặt thoáng.",
    "explanation": "Đáp án Đ, Đ, Đ, S Giải a) Đúng. Bay hơi xảy ra ở nhiều nhiệt độ khác nhau. b) Đúng. Nhiệt hóa hơi riêng thay đổi theo nhiệt độ của quá trình chuyển thể. c) Đúng. Với một chất thông thường, nhiệt hóa hơi riêng giảm khi nhiệt độ tiến gần nhiệt độ tới hạn. d) Sai. Khi áp suất trên mặt thoáng thay đổi, nhiệt độ mà tại đó áp suất hơi bão hòa bằng áp suất ngoài cũng thay đổi.",
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
      "question": "pdf2-39-de",
      "solution": "pdf2-39-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-71",
    "difficulty": "Thông hiểu và vận dụng trực tiếp",
    "prompt": "(Trả lời ngắn) Để xử lí nấm mốc của thóc giống trước khi ngâm, người nông dân dùng nước ấm “nước 3 sôi 2 lạnh” được tạo ra bằng cách trộn 3 phần nước sôi với 2 phần nước lạnh (nước ở nhiệt độ thường). Coi ◦ ◦ rằng nước lạnh có nhiệt độ là 20 C, nước sôi có nhiệt độ 100 C và nhiệt tỏa ra xung quanh là không đáng kể. ◦ Nhiệt độ của nước sau khi pha là bao nhiêu C? (Kết quả làm tròn kết quả đến chữ số hàng đơn vị)?",
    "explanation": "Giải Coi các phần nước được đong sao cho khối lượng nước nóng và lạnh có tỉ lệ 3 : 2. Gọi t là nhiệt độ sau khi pha. Bỏ qua nhiệt lượng mất ra ngoài, nhiệt nước nóng tỏa ra bằng nhiệt nước lạnh thu vào 3c(100 − t) = 2c(t − 20). Chia hai vế cho c rồi giải, được 300 − 3t = 2t − 40, nên 5t = 340. ◦ Đáp số 68 C.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 68,
    "unit": "°C",
    "tolerance": 5.1e-05,
    "answerText": "68 °C",
    "pdfSource": {
      "question": "71-de",
      "solution": "71-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-75",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Trả lời ngắn) Một vật khối lượng 2 kg trượt không vận tốc ban đầu từ đỉnh xuống chân một mặt ◦ phẳng dài 25 m, nghiêng 30 so với mặt nằm ngang. Tốc độ của vật ở chân mặt phẳng là 5 m/s. Tính độ biến thiên nội năng của vật trong quá trình chuyển động trên theo đơn vị J. Lấy g = 9,8 m/s2. Bỏ qua sự trao đổi nhiệt với mặt phẳng nghiêng. (Kết quả làm tròn kết quả đến chữ số hàng đơn vị)?",
    "explanation": "Giải Độ giảm độ cao là h = 25 sin 30 ◦ = 12,5 m. Thế năng giảm mgh = 2 × 9,8 × 12,5 = 245 J, còn động năng tăng từ 0 đến 1 × 2 × 52 = 25 J. Theo cách tính của bài, coi toàn bộ cơ năng hao hụt chuyển thành nội năng 2 của vật ∆U = mgh − 1 mv2 = 245 − 25 = 220 J. 2 Đáp số 220 J theo giả thiết trên.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 220,
    "unit": "J",
    "tolerance": 0.5,
    "answerText": "220 J",
    "pdfSource": {
      "question": "75-de",
      "solution": "75-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-76",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Trả lời ngắn) Vận động viên chạy Marathon mất rất nhiều nước trong khi thi đấu. Các vận động viên thường chỉ có thể chuyển hóa khoảng 20% năng lượng hóa học dự trữ trong cơ thể thành năng lượng dùng cho các hoạt động của cơ thể, đặc biệt là hoạt động chạy. Phần năng lượng còn lại chuyển thành nhiệt thải ra ngoài nhờ sự bay hơi của nước qua hô hấp và da để giữ cho nhiệt độ của cơ thể không đổi. Nếu vận động viên dùng hết 9 MJ trong cuộc thi thì có khoảng bao nhiêu lít nước đã thoát ra khỏi cơ thể? Coi nhiệt độ cơ thể của vận động viên hoàn toàn không đổi và nhiệt hóa hơi riêng của nước trong cơ thể vận động viên là 2,45 · 106 J/kg. Lấy khối lượng riêng của mồ hôi là 1 kg/lít. (Kết quả làm tròn đến chữ số hàng phần mười).",
    "explanation": "Giải Phần năng lượng dùng để hóa hơi nước chiếm 100% − 20% = 80%. Do đó, Q = 0,80 × 9 × 106 = 7,2 × 106 J. Từ Q = Lm, khối lượng nước thoát ra là m = 7,2 × 106/(2,45 × 106) ≈ 2,939 kg. Với khối lượng riêng 1 kg/lít, thể tích tương ứng khoảng 2,939 lít. Đáp số 2,9 lít.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 2.9,
    "unit": "lít",
    "tolerance": 0.05,
    "answerText": "2,9 lít",
    "pdfSource": {
      "question": "76-de",
      "solution": "76-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-77",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Trả lời ngắn) Để kiểm tra thời gian ngắt mạch của một cầu chì khi đoản mạch, một học sinh mắc cầu chì vào nguồn điện như hình vẽ. Biết nguồn điện có suất điện động E = 14 V, điện trở trong r = 0,25 Ω, cầu chì được làm từ dây chì có điện trở R = 11,25 Ω và có khối lượng 0,1 g, nhiệt dung riêng của chì là 130 J/(kg · K), nhiệt độ nóng chảy của chì là 327,5 ◦ C, nhiệt độ ban đầu của cầu chì khi chưa đóng mạch là ◦ 27 C. Cho rằng dây chì sẽ đứt ngay khi nó đạt nhiệt độ nóng chảy, bỏ qua nhiệt lượng toả ra môi trường bên ngoài của cầu chì. Thời gian từ thời điểm đóng mạch đến thời điểm dây chì bị đứt là bao nhiêu giây? (Kết quả làm tròn đến chữ số hàng phần trăm) Cầu chì K E, r",
    "explanation": "Giải Cường độ dòng điện qua dây chì và công suất tỏa nhiệt trên dây là E 14 I = = A, P = I2R ≈ 16,67 W. R + r 11,25 + 0,25 Dây đứt khi vừa đạt nhiệt độ nóng chảy, nên chỉ cần tính nhiệt lượng tăng nhiệt độ. Đổi 0,1 g = 10 −4 kg. Q = mc∆T = 10 −4 × 130 × (327,5 − 27) = 3,9065 J. Bỏ qua hao phí, P τ = Q, nên τ = 3,9065/16,67 ≈ 0,2343 s. Đáp số 0,23 s. ◦",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.23,
    "unit": "s",
    "tolerance": 0.005,
    "answerText": "0,23 s",
    "pdfSource": {
      "question": "77-de",
      "solution": "77-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-78",
    "difficulty": "Vận dụng nhiều bước",
    "prompt": "(Trả lời ngắn) Một bình chứa 2 kg nước ở nhiệt độ 1,5 C, người ta thả vào bình một cục nước đá ◦ gồm: một mẫu chì ở giữa có khối lượng 10 g và 200 g nước đá bao quanh mẫu chì ở 0 C. Cho nhiệt dung riêng của nước đá, nước lần lượt là c = 2100 J/(kg · K), c = 4200 J/(kg · K). Nhiệt nóng chảy riêng 1 2 của nước đá là λ = 340000 J/kg. Khối lượng riêng của nước đá, nước và chì lần lượt là D = 900 kg/m3, 1 D = 1000 kg/m3, D = 11500 kg/m3. Bỏ qua sự trao đổi nhiệt với bình và môi trường. Cần rót vào bình 2 3 ◦ bao nhiêu ml nước ở 27 C để cục nước đá bắt đầu chìm (làm tròn kết quả đến chữ số hàng đơn vị)?",
    "explanation": "Giải Gọi m là khối lượng nước đá còn lại và m = 0,010 kg. Tại ngưỡng bắt đầu chìm, cục đá vừa ngập hoàn chì toàn và lực đẩy Archimedes cân bằng trọng lượng. Chia phương trình lực cho g, được ( ) m 0,010 1000 + = m + 0,010 =⇒ m ≈ 0,082174 kg. 900 11500 Do đó, khối lượng nước đá cần tan là 0,200 − m ≈ 0,117826 kg. Vì vẫn còn đá, nhiệt độ cân bằng là 0 ◦ C. ◦ Gọi M là khối lượng nước 27 C cần rót. Nhiệt do nước ban đầu và nước rót thêm tỏa ra dùng để làm tan đá 2 × 4200 × 1,5 + M × 4200 × 27 = (0,200 − m) × 340000, M ≈ 0,242159 kg. Với D = 1000 kg/m3, thể tích nước cần rót xấp xỉ 242,159 mL. 2 Đáp số 242 mL.",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 242,
    "unit": "mL",
    "tolerance": 0.5,
    "answerText": "242 mL",
    "pdfSource": {
      "question": "78-de",
      "solution": "78-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-43",
    "difficulty": "Vận dụng",
    "prompt": "(Trả lời ngắn) Một thùng đựng 20,0 lít nước ở nhiệt độ 20,0 C. Cho khối lượng riêng của nước là 1,0.103 kg/m3; nhiệt dung riêng của nước là 4 200 J/(kg.K). Tính thời gian truyền nhiệt lượng cần thiết nếu ◦ dùng một thiết bị điện có công suất 25,0 kW để đun lượng nước trên đến 70 C. Biết chỉ có 80,0% năng lượng điện tiêu thụ được dùng để làm nóng nước.",
    "explanation": "Giải Đổi 20,0 lít thành 0,0200 m3. Khối lượng nước là m = ρV = 20,0 kg. Nhiệt lượng nước cần thu vào là Q = mc∆T = 20,0 × 4200 × (70 − 20) = 4,2 × 106 J. Công suất có ích là ηP = 0,800 × 25 000 = 20 000 W. Suy ra t = Q/(ηP ) = 210 s. Đáp số 210 s ◦ ◦ ◦",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 210,
    "unit": "s",
    "tolerance": 5.1e-05,
    "answerText": "210 s",
    "pdfSource": {
      "question": "pdf2-43-de",
      "solution": "pdf2-43-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-45",
    "difficulty": "Vận dụng",
    "prompt": "(Trả lời ngắn) Một viên đạn bằng bạc có khối lượng 2,00 g bay với tốc độ 2,00.102 m/s đến xuyên vào một bức tường gỗ. Nhiệt dung riêng của bạc là 0,234 kJ/(kg.K). Coi viên đạn không trao đổi nhiệt với bên ngoài và toàn bộ công cản của bức tường chỉ dùng để làm nóng viên đạn, nhiệt độ của viên đạn sẽ tăng thêm bao nhiêu kelvin (viết kết quả đến một chữ số sau dấu phẩy thập phân)?",
    "explanation": "Giải Theo giả thiết, viên đạn dừng lại và toàn bộ động năng ban đầu làm nóng viên đạn. Đổi c = 0,234 kJ/(kg · K) = 234 J/(kg · K). (200)2 mc∆T = 1 mv2 ⇒ ∆T = ≈ 85,5 K. 2 2 × 234 Đáp số 85,5 K",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 85.5,
    "unit": "K",
    "tolerance": 0.05,
    "answerText": "85,5 K",
    "pdfSource": {
      "question": "pdf2-45-de",
      "solution": "pdf2-45-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-47",
    "difficulty": "Vận dụng",
    "prompt": "(Trả lời ngắn) Một lượng khí nhận nhiệt lượng 250 kJ do được đun nóng; đồng thời nhận công 500 kJ do bị nén. Xác định độ tăng nội năng của lượng khí (theo đơn vị kJ). (Viết kết quả đến phần nguyên).",
    "explanation": "Giải Khí vừa nhận nhiệt Q = +250 kJ, vừa nhận công A = +500 kJ. Theo định luật I, ∆U = Q + A = 250 + 500 = 750 kJ. Đáp số 750 kJ",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 750,
    "unit": "kJ",
    "tolerance": 5.1e-05,
    "answerText": "750 kJ",
    "pdfSource": {
      "question": "pdf2-47-de",
      "solution": "pdf2-47-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-49",
    "difficulty": "Vận dụng",
    "prompt": "(Trả lời ngắn) Một quả bóng khối lượng 0,100 kg rơi từ độ cao 10,00 m xuống sân và nảy lên được 7,00 m. Lấy g = 9,81 m/s2. Độ biến thiên nội năng của hệ gồm quả bóng, mặt sân và không khí bằng bao nhiêu J? (Viết kết quả đến hai chữ số sau dấu phẩy thập phân).",
    "explanation": "Giải Ở hai vị trí cao nhất, vận tốc bằng không. Độ giảm cơ năng của hệ chuyển thành nội năng theo mô hình của đề. ∆U = mg(h − h ) = 0,100 × 9,81(10,00 − 7,00) = 2,943 J. 1 2 Đáp số 2,94 J ◦ ◦",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 2.94,
    "unit": "J",
    "tolerance": 0.005,
    "answerText": "2,94 J",
    "pdfSource": {
      "question": "pdf2-49-de",
      "solution": "pdf2-49-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-51",
    "difficulty": "Vận dụng",
    "prompt": "(Trả lời ngắn) Xác định độ biến thiên nhiệt độ (K) của nước rơi từ độ cao 96,0 m xuống và đập vào cánh tuabin làm quay máy phát điện, biết rằng 67% thế năng của nước biến thành nội năng của nước. Cho biết nhiệt dung riêng của nước là 4 190 J/(kg.K). Lấy g =9,81 m/s2. (Viết kết quả đến hai chữ số sau dấu phẩy thập phân).",
    "explanation": "Giải Phần thế năng làm nóng nước bằng 0,67mgh. Vì nước thu nhiệt làm tăng nhiệt độ mà không chuyển thể, 0,67 × 9,81 × 96,0 mc∆T = 0,67mgh ⇒ ∆T = ≈ 0,1506 K. 4190 Đáp số 0,15 K",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.15,
    "unit": "K",
    "tolerance": 0.005,
    "answerText": "0,15 K",
    "pdfSource": {
      "question": "pdf2-51-de",
      "solution": "pdf2-51-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-52",
    "difficulty": "Vận dụng cao",
    "prompt": "(Trả lời ngắn) Vào mùa hè, một số người thường có thói quen uống trà đá. Để có một cốc trà đá chất ◦ ◦ lượng, người chủ quán rót khoảng 0,250 kg trà nóng ở 80,0 C vào cốc, sau đó cho tiếp m kg nước đá 0 C. ◦ Cuối cùng được cốc trà đá ở nhiệt độ phù họp nhất là 10,0 C. Bỏ qua hao phí do trao đổi nhiệt với môi trường và cốc. Nhiệt dung riêng của nước là 4,20 kJ/(kg.K); nhiệt nóng chảy của nước đá là 3,33.105 J/kg. Giá trị của m là bao nhiêu kg? (Viết kết quả đến hai chừ số sau dấu phẩy thập phân).",
    "explanation": "Giải ◦ ◦ Nhiệt trà tỏa ra khi nguội từ 80 xuống 10 C làm đá tan hết và làm phần nước đá tan nóng lên đến 10 C. 0,250 × 4200(80 − 10) = m[3,33 × 105 + 4200(10 − 0)]. Suy ra m = 73 500/375 000 = 0,196 kg, làm tròn thành 0,20 kg. Đáp số 0,20 kg",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 0.2,
    "unit": "kg",
    "tolerance": 0.005,
    "answerText": "0,2 kg",
    "pdfSource": {
      "question": "pdf2-52-de",
      "solution": "pdf2-52-giai"
    }
  },
  {
    "id": "ly-12-1-nhiet-pdf2-53",
    "difficulty": "Vận dụng cao",
    "prompt": "(Trả lời ngắn) Một khối đồng có khối lượng 120,0 g được lấy ra khỏi lò nung và nhanh chóng cho ◦ ◦ vào một cốc có nhiệt dung không đáng kể chứa 300,0 g nước. Nhiệt độ nước tăng từ 15,0 C đến 35,0 C. Cho nhiệt dung riêng của đồng và nước lần lượt là 0,420 J/(g.K) và 4,20 J/(g.K). Nhiệt độ của lò nung là bao nhiêu (theo thang đo Celsius, viết kết quả đến phần nguyên)?",
    "explanation": "Giải ◦ Bỏ qua nhiệt lượng mất ra ngoài và coi khối đồng ban đầu ở nhiệt độ lò t. Đồng nguội về 35 C, nước nóng từ ◦ 15 đến 35 C. 120(0,420)(t − 35) = 300(4,20)(35 − 15). Vế phải bằng 25 200 J. Suy ra t − 35 = 500 ◦ C, tức t = 535 ◦ C. ◦ Đáp số 535 C",
    "kind": "short",
    "type": "Trả lời ngắn",
    "value": 535,
    "unit": "°C",
    "tolerance": 5.1e-05,
    "answerText": "535 °C",
    "pdfSource": {
      "question": "pdf2-53-de",
      "solution": "pdf2-53-giai"
    }
  }
];
