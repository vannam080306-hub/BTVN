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

Danh mục chương tham khảo cho 9 tổ hợp môn/lớp. Có **24 câu minh họa** ở các môn/lớp khác và ngân hàng Toán 11 gồm **200 câu chương 1**, **30 câu chương 2**, **62 câu chương 3**, **48 câu chương 4**. Các chương khác ghi rõ đang bổ sung. Chưa phải ngân hàng đầy đủ chương trình THPT.

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

## Toán 11 chương 3

Dữ liệu ở `site/toan11-chuong3.js`, gồm 7 dạng, bảng số liệu dạng văn bản, 4 lựa chọn, gợi ý và lời giải. Xem `docs/TOAN11-CHUONG3.md` để đối chiếu nguồn và các hiệu chỉnh đề. Không tải bản PDF gốc lên website.

## Toán 11 chương 2

Dữ liệu ở `site/toan11-chuong2.js`: 30 câu, gồm 2 câu dãy số, 12 câu cấp số cộng, 12 câu cấp số nhân và 4 câu vận dụng tổng hợp. Mỗi câu có 4 lựa chọn, gợi ý và lời giải; lọc riêng theo bài học hoặc dạng bài. Xem `docs/TOAN11-CHUONG2.md` để đối chiếu tài liệu và các điều kiện đã kiểm tra.

## Toán 11 chương 4

Dữ liệu ở `site/toan11-chuong4.js`: 48 câu chia đều cho năm bài học và phần ôn tập chung, theo sáu PDF được cung cấp. Có bốn lựa chọn, gợi ý, lời giải và hình vẽ riêng đầy đủ cho cả 48 câu, kèm nút phóng to hình. Lọc theo bài học hoặc dạng bài để ôn riêng. Xem `docs/TOAN11-CHUONG4.md` để đối chiếu nguồn và các giả thiết đã làm rõ.
