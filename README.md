# BTVN · Tự học mỗi ngày

Website tĩnh ôn tập **Toán, Vật lý, Hóa học** cho lớp **10, 11, 12**.

**Truy cập:** https://vannam080306-hub.github.io/BTVN/

Luồng: **Môn học → Lớp → Chương → Câu hỏi**. Không có đăng nhập, khu vực giáo viên hoặc tích hợp tạo nội dung tự động.

## Làm bài

- Tìm theo từ khóa, chuyển chương bằng bộ lọc bên trái.
- Chọn đáp án để xem đúng/sai và lời giải; mở gợi ý khi cần.
- Ghim câu bằng ngôi sao; bật “Đã ghim” để ôn riêng.
- Bảng số bên phải chuyển nhanh, phân biệt đúng/sai/chưa làm.
- Tiến độ lưu trên trình duyệt, không đồng bộ thiết bị; không dùng tài khoản.
- Có sáng/tối, bố cục điện thoại và phím tắt 1–4, ← → trên máy tính.
- “Làm lại chương này” có xác nhận, xóa đáp án/gợi ý của chương nhưng giữ ghim.

## Nội dung hiện có

Danh mục chương tham khảo cho 9 tổ hợp môn/lớp. Thứ tự có thể điều chỉnh theo bộ sách. Có **27 câu minh họa** (3 câu ở chương đầu mỗi môn/lớp); các chương khác ghi rõ đang bổ sung. Chưa phải ngân hàng đầy đủ chương trình THPT.

## Chỉnh sửa

Nguồn: `site/data.js` (danh mục, câu hỏi), `site/app.js`, `site/styles.css`, `site/index.html`.

Câu hỏi gồm `prompt`, 4 `options`, chỉ số `answer` từ 0 đến 3, `explanation`, `hint`, `difficulty`, ID ổn định. Gắn câu hỏi đúng chương trong hàm `chapters()`. Đổi ID nếu thay nội dung câu để không dùng kết quả cũ.

```sh
node scripts/build-pages.mjs
node --test tests/*.test.mjs
node scripts/preview.mjs
```

Xem thử http://127.0.0.1:3000/BTVN/. Không cần cài thư viện hoặc dịch vụ máy chủ.

## Xuất bản

Workflow `.github/workflows/pages.yml` tạo `index.html`, `assets/`, kiểm thử và xuất bản khi cập nhật `main`. Settings → Pages → Source: GitHub Actions.

`site/` là nguồn chỉnh sửa; `index.html` và `assets/` là đầu ra tạo lại. Trên hosting tĩnh chỉ cần `index.html`, `.nojekyll`, `assets/`.

Bản v2 thay thế giao diện cũ. Tệp máy chủ, tài khoản và bản mô phỏng cũ được loại khỏi bản hiện tại; lịch sử Git giữ phiên bản trước.
