# Toán 11 — Chương 1

Ngân hàng hiện tại: **200 câu trắc nghiệm, mỗi câu 4 lựa chọn**.

| Bài | Số câu |
|---|---:|
| 1. Giá trị lượng giác | 40 |
| 2. Công thức lượng giác | 65 |
| 3. Hàm số lượng giác | 50 |
| 4. Phương trình lượng giác | 45 |

## Điều chỉnh theo yêu cầu
- Bài 1 giảm từ 72 xuống 40 câu; giữ các nhóm đổi đơn vị, góc/cung, độ dài cung, dấu, hệ thức và tính giá trị. Lược các câu cùng kỹ năng và kiến thức cơ bản lặp lại.
- Bài 2 bỏ 4 câu nhắc công thức trùng với phần luyện tập; Bài 3 lược 5 câu tìm giá trị nhỏ nhất đơn giản cùng dạng.
- Bỏ toàn bộ 8 câu thuộc dạng phương trình bậc nhất theo sin và cos và nguồn PDF tương ứng khỏi ngân hàng.
- Chuyển mọi câu trả lời ngắn còn lại sang trắc nghiệm. Lựa chọn là các giá trị khác nhau; giữ phân số/căn thức chính xác khi có. Mỗi câu có một đáp án đúng, gợi ý và lời giải.
- Câu chuyển hình thức có hậu tố mã `-mc-v2` để đáp án nhập số trước đây không bị hiểu nhầm là lựa chọn A–D. Câu trắc nghiệm cũ giữ mã và thứ tự đáp án, giữ kết quả đã lưu của chúng.

## Nguồn và biên soạn
Dùng các tài liệu Chương 1 người dùng đã cung cấp; mỗi câu có source.file/page/item. Câu lý thuyết có mã mục do người biên soạn đặt. Ngân hàng được biên soạn và tuyển chọn, không sao chép toàn bộ từng PDF. Không đưa thông tin cá nhân trên phiếu lên website.

Giữ các hiệu chỉnh của phiên bản trước: câu độ dài cung 14 của BT-Bài1-P1 có kết quả 25π/6; câu cực trị 119 có GTLN 41/8; câu 133 có GTLN 2√2−3. Không đưa các câu bị cắt đề, thiếu hình hoặc thiếu giả thiết vào nguyên trạng. Câu chứng minh được hỏi hệ số/giá trị sau rút gọn; phương trình được hỏi số nghiệm trên [0;2π).

Chương 3 và các môn/lớp khác giữ nguyên. Tiến độ lưu trên trình duyệt, không dùng AI hay tài khoản đăng nhập.

## Kiểm tra
`node scripts/build-pages.mjs` rồi `node --test tests/*.test.mjs`.
Kiểm tra tổng số và phân bố, loại bỏ đúng dạng, đáp án 4 lựa chọn khác nhau, giá trị chính xác của đáp án chuyển đổi, nghiệm phương trình, mã lưu tiến độ và bản xuất khớp nguồn.
