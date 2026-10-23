# Triển khai và vận hành

## Trước khi chạy dữ liệu thật

- Chọn máy chủ/container có Node 24, ổ đĩa bền vững và đủ dung lượng cho tệp nằm trong SQLite.
- Dùng mật khẩu giáo viên khởi tạo riêng, không tái sử dụng tài khoản thử nghiệm.
- Đặt HTTPS qua reverse proxy; bật `COOKIE_SECURE=true`; không đưa trực tiếp cổng HTTP ra Internet.
- Một tiến trình ứng dụng, không chạy nhiều replica dùng chung SQLite qua ổ mạng.
- Thiết lập quyền tệp chỉ tài khoản dịch vụ được đọc; mã hóa ổ đĩa và nơi sao lưu.
- Duyệt chính sách lưu dữ liệu và việc gửi tài liệu/câu trả lời cho nhà cung cấp AI.
- Cấu hình giới hạn request của reverse proxy tương ứng tệp tối đa 30 MB và JSON/base64 tối đa 43 MB; timeout đọc trên 95 giây cho AI.
- Bảo vệ môi trường cấu hình. Không log request body hoặc header Cookie/Authorization.

## Khởi tạo

Tạo `.env` từ mẫu, đặt tài khoản/mật khẩu giáo viên. `SEED_DEMO=false` cho môi trường thật. Chạy Docker Compose hoặc Node. Truy cập `/api/health` để kiểm tra.

Đổi mật khẩu qua giao diện tài khoản. Không có trang đăng ký công khai, endpoint tạo giáo viên hoặc endpoint khôi phục dữ liệu cho học sinh.

## Sao lưu

Máy chủ tạo bản sao mỗi 24 giờ trong thời gian tiến trình sống. Khi dịch vụ dừng, lịch này không chạy. Với yêu cầu lịch độc lập, dùng Task Scheduler/cron của đơn vị vận hành gọi `scripts/backup.mjs` tại thư mục dự án với đúng `.env`.

1. Chạy backup, kiểm tra mã thoát và dung lượng tệp.
2. Chuyển bản sao sang nơi lưu riêng đã mã hóa.
3. Áp chính sách giữ/xóa theo quyết định đơn vị sử dụng (bản v1 không tự xóa).
4. Giám sát thất bại qua log và hệ thống vận hành bên ngoài.
5. Diễn tập restore trong môi trường cách ly, xác nhận tài liệu, quyền và kết quả.

Tệp backup chứa mật khẩu đã băm và dữ liệu học sinh; không gửi vào GitHub. `.gitignore` và `.dockerignore` đã loại thư mục dữ liệu, sao lưu và `.env`.

## Khôi phục

Chạy `node scripts/restore.mjs <backup> <thu-muc-moi>`. Chương trình không cho ghi đè thư mục có sẵn. Xác minh bản phục hồi, dừng dịch vụ hiện tại, đổi `DATA_DIR`, khởi động lại và yêu cầu đăng nhập lại. Trước chuyển đổi giữ nguyên dữ liệu cũ để quay lại nếu đối soát không đạt.

Không coi lịch sao lưu 24h là đáp ứng RPO 1h. Phải thiết kế lịch/bản sao ngoài máy phù hợp và đo RTO thực tế trước cam kết dịch vụ.

## Giám sát

Theo dõi dung lượng đĩa, bộ nhớ, lỗi HTTP, độ trễ, lần sao lưu gần nhất và trạng thái dịch vụ AI. `ai_runs` lưu mục đích/model/nguồn/trạng thái; `audit_logs` lưu thao tác quan trọng. Không đưa log chứa dữ liệu học sinh vào dịch vụ ngoài khi chưa có chính sách.

## Phát hành và quay lại

1. Chạy bộ kiểm thử trên bản mới.
2. Sao lưu nhất quán và giữ bản phát hành trước.
3. Dừng dịch vụ, cập nhật mã, khởi động lại.
4. Kiểm tra health, đăng nhập, xem đề và lưu bài bằng tài khoản kiểm thử.
5. Khi có sự cố, quay về mã trước; nếu đã thay schema không tương thích, phục hồi vào thư mục mới và đối soát trước khi chuyển.

Schema v1 tạo bảng nếu chưa tồn tại; chưa có hệ thống migration đánh phiên bản. Các thay đổi schema tiếp theo phải bổ sung migration và kiểm thử nâng cấp.
