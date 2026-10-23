# Mở BTVN bằng GitHub Pages

## Bật xuất bản lần đầu

1. Đăng nhập GitHub bằng tài khoản có quyền quản lý repo, mở https://github.com/vannam080306-hub/BTVN/settings/pages.
2. Ở **Build and deployment → Source**, chọn **GitHub Actions**.
3. Mở **Actions → Publish BTVN demo to GitHub Pages**. Nếu lần chạy trước bị lỗi vì chưa bật Pages, chọn **Re-run all jobs**; hoặc **Run workflow → main → Run workflow**.
4. Chờ bước Deploy thành công. Mở URL trong Environment `github-pages`: https://vannam080306-hub.github.io/BTVN/.

Các lần cập nhật nhánh `main` sau đó tự xuất bản lại. File workflow là `.github/workflows/pages.yml`.

Nếu không có quyền Settings, chủ repo cần làm bước 1–2. Kết nối GitHub trong cuộc trò chuyện có quyền ghi mã nhưng không cung cấp công cụ quản trị Pages; không cần gửi mật khẩu hoặc token.

## Tài khoản mẫu

- Giáo viên: `giaovien` / `demo2026`.
- Học sinh: `hocsinh` / `demo2026`.
- Học sinh thứ hai: `hocsinh2` / `demo2026`.

Chọn vai trò ở trang đầu sẽ điền sẵn tài khoản tương ứng. Hai học sinh có bài làm riêng trong cùng trình duyệt. Dữ liệu không được gửi sang thiết bị khác. Để trở lại trạng thái ban đầu, dùng nút đặt lại dữ liệu mẫu.

## Có thể dùng thử

Xem tổng quan; tạo/sửa/khóa tài khoản mẫu; nhập tài liệu TXT/văn bản; sửa phân tích; tạo câu mẫu; duyệt/xuất bản; giao đề với phiên bản riêng; làm bài, lưu nháp và mở gợi ý; xem lịch sử, thống kê và ôn câu sai; sáng/tối.

Đồng hồ và phân quyền chỉ mô phỏng trên thiết bị, không có máy chủ chống gian lận. Toàn bộ dữ liệu mẫu có thể được xem/sửa bằng công cụ trình duyệt. Đây không phải hệ thống đăng nhập an toàn để dùng với học sinh thật. Không nhập dữ liệu cá nhân hoặc khóa API. Mọi chức năng AI trên Pages được ghi rõ là mô phỏng.

## Các tệp để đưa lên web tĩnh

```text
index.html
.nojekyll
assets/app.js
assets/demo-api.js
assets/styles.css
assets/favicon.svg
```

Giữ nguyên cấu trúc thư mục. Tất cả đường dẫn dùng `./assets/` để hoạt động dưới đường dẫn `/BTVN/`. Không cần Node hoặc Python trên hosting tĩnh; Node chỉ cần khi tạo lại các tệp.

Muốn chạy hệ thống thật, xem phần máy chủ trong README và `docs/DEPLOYMENT.md`.
