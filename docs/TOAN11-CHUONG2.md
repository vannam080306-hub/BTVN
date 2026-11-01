# Toán 11 - Chương 2

30 câu trắc nghiệm biên soạn theo dạng trong ba tài liệu người dùng cung cấp, không phải bản chép toàn bộ bài tập nguồn. Chỉ lưu tên tệp và trang PDF để đối chiếu, không đưa PDF gốc hoặc đường dẫn cá nhân lên website.

| Câu | Bài học | Trọng tâm |
| --- | --- | --- |
| 1-2 | Dãy số | Số hạng, truy hồi |
| 3-14 | Cấp số cộng | Nhận biết, số hạng, công sai, vị trí, tham số, tổng, xen số, góc tam giác |
| 15-26 | Cấp số nhân | Nhận biết, số hạng, công bội, vị trí, tham số, tổng, xen số |
| 27-30 | Vận dụng tổng hợp | Ghế hội trường, tăng trưởng, kết hợp hai cấp số, biến đổi truy hồi |

Nguồn: `day-so.pdf` (10 trang), `cap-so-cong.pdf` (9 trang), `cap-so-nhan.pdf` (12 trang). Metadata `source.page` là trang PDF tính từ 1, dẫn tới phần phương pháp hoặc bài tập tương ứng; `source.item` ghi rõ biên soạn theo dạng. Các bài ứng dụng mới và bài biến đổi truy hồi mở rộng từ phương pháp nguồn, không được gán là nguyên văn bài nguồn.

## Điều kiện và lỗi nguồn đã xử lý

- Mọi câu có đúng bốn lựa chọn khác nhau, một lựa chọn đúng; lựa chọn có thể chứa đầy đủ nhiều nghiệm.
- Câu 8 giữ nghiệm công sai bằng 0. Câu 12 kiểm tra riêng số hạng đầu khi suy ra số hạng từ tổng.
- Câu 18, 19, 24, 25, 29 giữ đủ nghiệm có công bội âm, không tự thêm điều kiện dương.
- Câu 20 kiểm tra lại ba số sau khi dùng điều kiện bình phương số giữa bằng tích hai số ngoài.
- Câu 22 xét riêng q = 1. Câu 24 đếm bốn khoảng cho năm số hạng.
- Câu 28 quy định rõ thời điểm ban đầu, chu kì tăng và giả thiết không có vi khuẩn chết.
- Không dùng những câu gốc thiếu dữ kiện, có lựa chọn tương đương hoặc sai công thức. Đặc biệt không dùng nhận định sai rằng mọi cấp số nhân có q = 0 đều là dãy không đổi.

## Tích hợp

Nguồn câu hỏi: `site/toan11-chuong2.js`. Gắn vào `chapters('toan', 11)[1]` trong `site/data.js`. Website dùng bộ lọc bài học/dạng bài, chấm đáp án, gợi ý, ghim và lưu tiến độ đã có. Mỗi câu dùng ID riêng với phiên bản `v1`.

Chạy `node scripts/build-pages.mjs` rồi `node --test tests/*.test.mjs`. Build đưa module chương 2 vào `assets/` và thêm mã phiên bản để trình duyệt tải dữ liệu mới.
