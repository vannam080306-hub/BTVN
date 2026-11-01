# Toán 11 — Chương 1: Hàm số lượng giác và phương trình lượng giác

249 câu biên soạn từ 16 PDF người dùng cung cấp: 46 câu trắc nghiệm và 203 câu trả lời ngắn. Bài 1: 72; Bài 2: 69; Bài 3: 55; Bài 4: 53.

## Quy tắc biên soạn
- Tài liệu Bài 2 được xếp vào Chương 1 theo đính chính của người dùng.
- Câu tự luận tính giá trị được chuyển sang nhập số, phân số, căn thức. Câu chứng minh/rút gọn được đổi thành tìm hệ số hoặc giá trị của biểu thức đã rút gọn.
- Phương trình được đổi thành đếm nghiệm phân biệt trên [0;2π), không nhận chuỗi nghiệm tổng quát. Góc độ trong đề được đổi sang radian tương đương.
- Bài cực trị được tách thành câu tìm giá trị nhỏ nhất và lớn nhất. Một câu nguồn có thể tạo nhiều câu web. Đây là ngân hàng biên soạn, không phải bản sao nguyên văn toàn bộ PDF.
- Tài liệu lý thuyết dùng để tạo câu kiểm tra tính chất và công thức. Câu trùng nội dung được lược bớt. Không đưa thông tin cá nhân trên phiếu lên web.
- BT-Bài1-P1: bỏ câu đầu bị cắt đề; các câu 16,20,21 thiếu hình và 32,33 thiếu giả thiết không đưa nguyên trạng. Câu 14 tính lại độ dài cung 25π/6, không dùng đáp án in sai.
- BT-Bài3 cực trị: câu 119 tính đỉnh parabol cho GTLN 41/8; câu 133 sửa GTLN thành 2√2−3 (các lựa chọn nguồn không khớp). Câu 137 trùng 115 được gộp; một số câu sin/cos cơ bản trùng được lược.
- Mỗi câu có metadata source.file/page/item phục vụ đối chiếu; với câu lý thuyết, item là mã do người biên soạn đặt. Một số mục dài trải qua trang kế tiếp; page chỉ vị trí tham chiếu đầu mục.

## Chấm và dữ liệu
Không dùng AI hoặc dịch vụ ngoài. Phân tích số bằng bộ phân tích cú pháp giới hạn, không eval. Hỗ trợ dấu phẩy thập phân, pi/π, sqrt(...), phân số và phép tính. Sai số mặc định 0,000051 để chấp nhận kết quả làm tròn 4 chữ số; câu yêu cầu hàng phần nghìn dùng đáp án làm tròn với sai số riêng. Câu đã chấm được khóa đến khi làm lại chương. Tiến độ vẫn lưu cục bộ theo trình duyệt, tương thích kết quả trắc nghiệm cũ. Chương 3 giữ nguyên 62 câu.

## Kiểm tra
Chạy node scripts/build-pages.mjs rồi node --test tests/*.test.mjs. Kiểm tra cấu trúc, đủ 16 nguồn/4 bài, đáp án ngắn, đầu vào không hợp lệ, nghiệm phương trình và tính tương thích dữ liệu cũ. Các phép biến đổi được kiểm tra lại khi biên soạn; không suy ra đáp án từ màu đánh dấu trong PDF.
