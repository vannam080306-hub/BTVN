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

Mỗi câu trong 48 câu có một cấu hình SVG riêng ở `site/geometry.js`, được gắn bằng `figure.chapter4`. Các điểm phụ, trọng tâm, trung điểm, giao điểm và đường kéo dài đều được dựng bằng phép toán affine. Các câu lý thuyết dùng cấu hình minh họa có chú thích giới hạn của ví dụ, không gán tính chất riêng của hình cho mọi trường hợp.

Hình thể hiện đầy đủ đỉnh, điểm phụ và các đối tượng trong đề bằng mực đen trên nền trắng, kể cả khi website ở chế độ tối. Không tô mặt phẳng, không dùng màu để phân biệt đường. Nét liền cho phần nhìn thấy; nét đứt cho phần bị che. Đường phụ, đường chiếu và phần kéo dài không mặc định là nét đứt: từng đoạn được xét theo độ che khuất thực tế. Nhãn điểm có nền trắng để đọc rõ. Nút **Phóng to hình** mở hộp thoại lớn, có thể cuộn ngang trên điện thoại, đóng bằng nút hoặc phím Escape.

Mỗi điểm có thêm tọa độ độ sâu theo một hướng quan sát thống nhất trong từng hình. Trung điểm, trọng tâm, giao điểm và điểm ngoại suy kế thừa tọa độ ba chiều từ phép dựng affine. Các mặt tứ diện, hình chóp, lăng trụ, hình hộp và các mặt phẳng minh họa được kiểm tra đồng phẳng. Khi vẽ, đường được tách tại giao với biên hình chiếu và giao thực với mặt phẳng; so sánh độ sâu với các mặt chắn để chọn nét liền/nét đứt cho từng phần. Việc bỏ màu không dùng bộ lọc ảnh hoặc chỉ đổi CSS cho các kiểu nét cũ.

Các hình chỉ bổ sung cách trình bày; ID câu, đáp án và tiến độ cũ được giữ nguyên. Không ghi kết quả độ dài hoặc tỉ số cần tìm lên hình.

## Tích hợp và kiểm tra

`site/toan11-chuong4.js` gắn vào chương 4 trong `site/data.js`; hình được hiển thị bởi `site/app.js`. Build sao chép cả dữ liệu và module SVG, đồng thời thêm phiên bản cho đường dẫn nhập để làm mới bộ nhớ đệm. Preview cho phép tải hai module mới.

Chạy `node scripts/build-pages.mjs` và `node --test tests/*.test.mjs`. Kiểm tra cấu trúc, nguồn trang, ID, lựa chọn khác nhau, phân bố sáu phần; kiểm chứng độc lập các tỉ số, trung điểm, trọng tâm, mặt phẳng song song và phép chiếu bằng các cấu hình tọa độ xiên, kiểm tra các phép dựng hình theo dữ liệu thực sự dùng để vẽ, kiểm tra riêng các cạnh sau, đoạn trong lòng khối, phần thấy/khuất của cùng một đường, rà soát 48 hình theo sáu nhóm và thử phóng to/đóng hình trên giao diện thực tế.

Phần chú giải kiểu nét và ghi chú dưới hình không hiển thị trong câu hỏi hoặc hộp thoại phóng to. Mô tả SVG vẫn có trong thuộc tính hỗ trợ trình đọc màn hình.
