# Công thức LaTeX và gợi ý

Website dùng KaTeX 0.19.1, đóng gói cùng mã nguồn trong `site/vendor/katex/`, gồm giấy phép MIT và phông WOFF2. Không cần CDN khi mở bài tập. Nguồn và mã kiểm tra gói được lưu trong `VERSION.txt`.

## Cập nhật nội dung

- Dữ liệu câu hỏi gốc trong `site/data.js` và các tệp chương tiếp tục quản lý mã câu, lựa chọn, đáp án, kiểm chứng và tìm kiếm.
- `scripts/latex-migration.mjs` chuyển ký hiệu toán của dữ liệu gốc sang LaTeX; `scripts/build-math-content.mjs` tạo các trường trình bày trong `site/math-content.js`, ghép theo mã câu. Không sửa trực tiếp tệp sinh này.
- `site/study-guides.js` chứa công thức LaTeX, giải thích ký hiệu và điều kiện áp dụng theo dạng bài. Khi thêm dạng bài, bổ sung hướng dẫn tương ứng tại đây.
- `site/math.js` hiển thị công thức, giữ văn bản thông thường được escape và tắt `trust` của KaTeX. Nội dung dùng `\(...\)` cho công thức trong dòng, `\[...\]` cho công thức riêng dòng. Các công thức trong bộ hướng dẫn là chuỗi LaTeX không có dấu phân cách.

Phần Xem gợi ý luôn có thứ tự: Công thức cần dùng → Điều kiện áp dụng (nếu có) → Lời giải → Đáp án. Hình vẽ tiếp tục dùng SVG riêng.

## Kiểm tra và xuất bản

```sh
node scripts/build-pages.mjs
node --test tests/*.test.mjs
node scripts/preview.mjs
```

Bộ kiểm tra xác nhận mọi câu có công thức và lời giải, phần xem gợi ý không hiển thị giải thích ký hiệu hay gợi ý làm bài, mọi chuỗi LaTeX render được, đối chiếu giá trị các lựa chọn số với biểu thức kiểm chứng ban đầu, và kiểm tra tài nguyên/phông cục bộ. Cần xem trực tiếp các dạng bài đại diện trong trình duyệt để kiểm tra bố cục.

Tài liệu KaTeX: https://katex.org/docs/api và https://katex.org/docs/security.
