# Báo cáo kiểm thử bàn giao

Ngày thực hiện: 24/10/2026. Môi trường: Node 24.22.1, Windows, SQLite tích hợp Node.

Lệnh: `node --test tests/app.test.mjs`.

Lần kiểm tra bàn giao: 19/19 trường hợp tích hợp đạt. Mỗi lần chạy tạo dữ liệu tạm và dịch vụ AI giả lập, tự dọn sau khi xong. Chi tiết tên trường hợp nằm trong mã kiểm thử.

Đã kiểm tra riêng trích xuất một PDF có chữ và một DOCX tạo thử bằng Python; cả hai lấy được nội dung mong đợi.

Đã xem bằng trình duyệt giao diện đăng nhập, tổng quan giáo viên, ngân hàng câu hỏi ở khung điện thoại. Không ghi nhận lỗi console trong các màn hình đã xem.

Chưa kiểm thử tải 100 người dùng; chưa kiểm định chất lượng với AI thật; chưa đánh giá 100 tình huống sư phạm; chưa kiểm thử đa trình duyệt/thiết bị đầy đủ; chưa diễn tập khôi phục hạ tầng ngoài máy. Các kết quả này không phải nghiệm thu sản xuất toàn bộ đặc tả.
