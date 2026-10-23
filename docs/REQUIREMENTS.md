# Đối chiếu đúng 28 chức năng

Phạm vi gốc theo bản đặc tả tiếng Việt trong cuộc trao đổi. Bản v1 có các luồng hoạt động dưới đây; “cơ bản” nghĩa là còn khoảng cách tới tiêu chí sản xuất của đặc tả.

| Mã | Chức năng | Hiện trạng mã nguồn |
|---|---|---|
| FR-01 | Giáo viên tạo, sửa, khóa, cấp lại mật khẩu | Có; khóa/reset thu hồi phiên; giáo viên chỉ quản lý học sinh của mình |
| FR-02 | Dữ liệu/tiến độ riêng từng học sinh | Có; kiểm tra quyền trên API, truy vấn và tài liệu |
| FR-03 | Học sinh đổi mật khẩu | Có; bắt buộc đổi mật khẩu tạm, thu hồi phiên khác |
| FR-04 | Tải PDF, Word, văn bản | Cơ bản: PDF có chữ, DOCX, TXT/dán văn bản; PDF quét cần OCR ngoài hệ thống |
| FR-05 | AI phân tích lý thuyết, dạng, bước giải | Cơ bản: adapter AI thật và giáo viên xác nhận; giới hạn độ dài, chưa chia đoạn/truy xuất ngữ nghĩa |
| FR-06 | Tạo bài theo bài/dạng/số lượng/độ khó | Có adapter và kiểm tra đầu ra; cần cấu hình AI và giáo viên kiểm chứng chuyên môn |
| FR-07 | Giáo viên sửa, phê duyệt trước xuất bản | Có; sửa tạo phiên bản mới; không xuất bản nháp |
| FR-08 | Phát hiện câu trùng | Cơ bản: chuẩn hóa văn bản và độ tương đồng từ; chưa có ngữ nghĩa/embedding |
| FR-09 | Nhiều phiên bản đề theo học sinh | Có chọn câu/thứ tự khác, giữ cùng phân bố môn/bài/dạng/độ khó; chưa sinh biến thể đổi số tự động |
| FR-10 | Tạo bài từ nhiều tài liệu | Có chọn 1–5 tài liệu đã xác nhận, giữ trích dẫn, yêu cầu AI báo mâu thuẫn |
| FR-11 | Môn → bài → dạng | Có trong khu vực luyện tập; bài đã xuất bản tự hiện cho học sinh của giáo viên |
| FR-12 | Nhập đáp án, phản hồi đúng/sai | Có cho trắc nghiệm/số; tự luận chờ giáo viên; chưa chấm biểu thức tương đương |
| FR-13 | Gợi ý từng bước theo giáo viên | Có; bước đã duyệt, chỉ gửi bước đã mở tới học sinh |
| FR-14 | AI giải thích đáp án sai | Có adapter gọi thật, bám lời giải đã duyệt; chưa có bộ kiểm chứng ngữ nghĩa độc lập |
| FR-15 | Kiểm tra có thời gian | Cơ bản: một lượt, hạn máy chủ, chốt nháp, thời gian mở/đóng; chưa cấu hình nhiều lượt |
| FR-16 | Ôn từ câu sai | Có chọn lại câu sai đã xuất bản; không tự sinh câu mới chưa duyệt |
| FR-17 | AI đề xuất dạng cần ôn | Có thống kê/quy tắc và AI tổng hợp theo yêu cầu học sinh từ số liệu ẩn danh, chỉ chọn dạng đã có ít nhất 5 kết quả; lưu đề xuất riêng |
| FR-18 | Điều chỉnh độ khó theo năng lực | Cơ bản: chọn câu đã duyệt theo ngưỡng, tối thiểu 5 kết quả/dạng; chưa là mô hình đã hiệu chỉnh |
| FR-19 | Đề ngẫu nhiên từ ngân hàng | Có số câu, môn/bài/dạng/độ khó, báo thiếu; chưa có ma trận điểm nhiều tầng |
| FR-20 | Kết quả/lịch sử từng học sinh | Có; xem đáp án, gợi ý, nhận xét, chấm tự luận |
| FR-21 | Tỷ lệ đúng/sai theo bài/dạng | Có lọc học sinh/ngày, tách chờ chấm; mặc định thống kê theo lượt |
| FR-22 | Theo dõi sử dụng gợi ý | Cơ bản: đếm bước đã mở duy nhất; chưa ghi lượt xem lại từng bước |
| FR-23 | Phát hiện nguy cơ hổng kiến thức | Cơ bản: ngưỡng 5 câu gần nhất, tỷ lệ <50%; hiển thị bằng chứng, chưa kiểm định chuyên môn |
| FR-24 | So sánh tiến bộ theo thời gian | Cơ bản: theo ngày UTC, tỷ lệ đúng, thời gian, gợi ý, phân bố độ khó; chưa chuẩn hóa điểm năng lực |
| FR-25 | Tiếng Việt, điện thoại/máy tính | Có CSS responsive, menu điện thoại, nhãn biểu mẫu; chưa hoàn thành kiểm thử trình duyệt chéo |
| FR-26 | Tìm/lọc bài theo bài/dạng/độ khó | Có; chỉ dữ liệu đúng quyền |
| FR-27 | Sáng/tối | Có; lưu theo thiết bị bằng localStorage |
| FR-28 | Sao lưu/khôi phục | Cơ bản: tự sao lưu mỗi 24h, CLI backup/restore kiểm tra toàn vẹn; chưa có sao lưu ngoài máy/chính sách lưu tự động hoặc RPO/RTO được đo |

## Kiến trúc và mô hình dữ liệu

Một máy chủ Node HTTP, SQLite WAL, giao diện HTML/CSS/JS, Python trích xuất và adapter AI phía máy chủ. Câu hỏi/tài liệu gắn `teacher_id`; học sinh có `owner_id`; mọi lần làm gắn `student_id`. Phạm vi quản lý trong bản này là giáo viên sở hữu, chưa hỗ trợ đồng quản lý nhiều giáo viên cùng lớp.

Schema thực thi trong `lib/db.mjs`: users → sessions; documents → câu hỏi qua sources có kiểm tra quyền; questions có family/version; assignments → student_assignments (snapshot ID câu hỏi) → attempts → answers/hint_events. recommendations lưu đề xuất riêng cho học sinh; ai_runs và audit_logs ghi truy vết; tài liệu gốc nằm trong SQLite để sao lưu nhất quán.

Đề đã giao tham chiếu ID phiên bản cố định. Không sửa hoặc xóa đề cũ khi cập nhật câu hỏi. Xuất bản phiên bản mới sẽ ngừng dùng phiên bản cũ cho đề mới.

## Luồng AI và kiểm duyệt

Tài liệu → trích xuất → AI phân tích/nhập tay → giáo viên xác nhận → AI sinh nháp/nhập tay → kiểm tra cấu trúc/trích dẫn/trùng → giáo viên duyệt → xuất bản. Kết quả AI không tự trở thành nội dung xuất bản. Học sinh không được gọi API tạo bài hoặc đọc nguồn/đáp án qua ngân hàng.

Phản hồi giải thích khi học sinh sai không thay đổi điểm; chỉ dùng câu hỏi và lời giải đã duyệt, không gửi tên hoặc tài khoản học sinh. Câu tự luận luôn chờ giáo viên chấm.

## Quy ước chỉ số v1

- Tỷ lệ đúng = đúng / (đúng + sai), theo lượt trả lời, tách chờ chấm.
- Mỗi câu trong một lượt chỉ nộp đáp án một lần. Muốn luyện lại tạo lượt luyện mới.
- Dùng gợi ý = số bước duy nhất đã mở theo lượt/câu.
- Năng lực: dưới 5 kết quả dùng mức trung bình; từ 5 kết quả, ≥80% đúng và trung bình <0,5 gợi ý/câu chọn khó; <50% đúng chọn dễ; còn lại trung bình.
- Cảnh báo: có ít nhất 5 kết quả, 5 kết quả gần nhất đúng dưới 50%. Không kết luận năng lực cố định.
- Chỉ số ngày nhóm theo UTC và ghi rõ trên giao diện; thời gian bắt đầu/kết thúc hiển thị theo thiết bị.

## Ưu tiên hoàn thiện tiếp

1. OCR/nhận dạng công thức và hàng đợi bền vững; quét tệp an toàn.
2. Truy xuất đoạn nguồn, kiểm chứng đáp án, ngữ nghĩa chống trùng và đánh giá chất lượng đề xuất AI.
3. Chấm biểu thức, quy tắc chấm tự luận, thêm lượt thi và ma trận đề.
4. PostgreSQL/worker khi tăng tải; mã hóa, sao lưu ngoài máy và giám sát vận hành.
5. Bộ 100 trường hợp chuyên môn, kiểm thử 100 người dùng, đánh giá bảo mật và diễn tập RPO/RTO.

Đây là danh sách khoảng cách tới 28 yêu cầu gốc, không phải bổ sung chức năng ngoài phạm vi.
