# Toán 11 - Chương 4: Quan hệ song song trong không gian

48 câu trắc nghiệm được biên soạn theo các dạng trong sáu tài liệu người dùng cung cấp. Đây là bộ chọn lọc và diễn đạt lại, không phải bản chép toàn bộ bài nguồn. Mỗi câu có bốn lựa chọn, một đáp án đúng, gợi ý, lời giải, mức độ và ID riêng.

| Câu | Bài học | Tài liệu đối chiếu |
| --- | --- | --- |
| 1-8 | Đường thẳng và mặt phẳng | 01-duong-thang-va-mat-phang.pdf (12 trang) |
| 9-16 | Hai đường thẳng song song | 02-hai-duong-thang-song-song.pdf (10 trang) |
| 17-24 | Đường thẳng song song mặt phẳng | 03-duong-thang-song-song-mat-phang.pdf (10 trang) |
| 25-32 | Hai mặt phẳng song song | 04-hai-mat-phang-song-song.pdf (10 trang) |
| 33-40 | Phép chiếu song song | 05-phep-chieu-song-song.pdf (7 trang) |
| 41-48 | Ôn tập chung | 06-on-tap-chung.pdf (5 trang) |

`source.page` chỉ trang PDF tính từ 1, dẫn đến phương pháp hoặc cấu hình tương ứng; `source.item` ghi rõ biên soạn theo dạng. Các số liệu mới dùng để luyện phương pháp. Không tải PDF gốc, thông tin liên hệ giáo viên hoặc đường dẫn cá nhân lên website.

## Các giả thiết cần phân biệt

- Ba điểm phải không thẳng hàng để xác định một mặt phẳng duy nhất.
- Hai đường thẳng không có điểm chung có thể song song hoặc chéo nhau.
- Đường thẳng song song mặt phẳng có nghĩa là không có điểm chung; không gồm trường hợp nằm trong mặt phẳng.
- Điều kiện chứng minh hai mặt phẳng song song dùng hai đường thẳng cắt nhau, không dùng hai đường song song bất kì.
- Định lí ba giao tuyến được nêu với ba giao tuyến phân biệt; giữ đủ trường hợp đồng quy hoặc đôi một song song.
- Không đồng nhất lăng trụ bất kì với lăng trụ đứng. Mặt bên lăng trụ nói chung là hình bình hành (tài liệu 04, trang 2 có chỗ ghi hình chữ nhật trong mô tả chung).
- Đường chiếu qua M phải có phương Δ. Không dùng công thức bị lỗi kí hiệu ở tài liệu 05 trang 1, nơi dòng mô tả MM′ ghi song song mặt phẳng chiếu thay vì phương chiếu.
- Đường thẳng có phương trùng phương chiếu có ảnh là một điểm. Khi dùng bảo toàn tỉ số trên một đường, loại trừ ảnh suy biến.
- Phép chiếu song song không bảo toàn góc hoặc tỉ số hai đoạn theo hai phương bất kì; không bảo toàn tính chéo nhau.
- Câu 48 xác định giao điểm trên đường AI kéo dài qua I, không giới hạn ở đoạn AI. Lời giải dùng Menelaus trong tam giác SAI.

## Hình minh họa

Các hình SVG được vẽ lại bằng mã trong `site/geometry.js`, gồm tứ diện, hình chóp, lăng trụ và hình hộp. Chỉ thể hiện cấu hình đỉnh; đề bài xác định các điểm phụ. Chú thích hiển thị trực tiếp để không hiểu hình biểu diễn chung là hình vẽ đầy đủ riêng cho từng câu. Không suy luận độ dài hoặc góc từ hình vẽ.

## Tích hợp và kiểm tra

`site/toan11-chuong4.js` gắn vào chương 4 trong `site/data.js`; hình được hiển thị bởi `site/app.js`. Build sao chép cả dữ liệu và module SVG, đồng thời thêm phiên bản cho đường dẫn nhập để làm mới bộ nhớ đệm. Preview cho phép tải hai module mới.

Chạy `node scripts/build-pages.mjs` và `node --test tests/*.test.mjs`. Kiểm tra cấu trúc, nguồn trang, ID, lựa chọn khác nhau, phân bố sáu phần; kiểm chứng độc lập các tỉ số, trung điểm, trọng tâm, mặt phẳng song song và phép chiếu bằng các cấu hình tọa độ xiên, cùng kiểm tra giao diện thực tế.
