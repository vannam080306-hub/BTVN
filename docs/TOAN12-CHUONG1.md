# Toán 12 – Chương 1

Nguồn: `D:\toán 12\Chuong_1.pdf`, 67 trang, tiêu đề “Ứng dụng của đạo hàm để khảo sát và vẽ đồ thị hàm số”.

Nhập đủ 105 câu, giữ thứ tự tài liệu: 57 trắc nghiệm A–D, 27 đúng/sai với bốn mệnh đề, 21 trả lời ngắn. Bộ này thay ba câu minh họa cũ của Toán 12 – Chương 1. Mã câu mới bắt đầu bằng `toan-12-1-pdf-` để không dùng nhầm tiến độ cũ.

Đề, phương án, mệnh đề và lời giải được biên soạn thành văn bản có LaTeX trong `site/toan12-chuong1.js`. Các bước giải hiển thị trong Xem gợi ý và sau khi chấm đáp án. Giữ phần công thức trước lời giải; không khôi phục mục giải thích ký hiệu hay gợi ý làm bài.

58 ảnh chỉ chứa hình, bảng biến thiên hoặc bảng dấu cần thiết được trích vào `site/toan12-chuong1/`. Các câu nằm vắt trang và các đoạn đề nhúng dưới dạng ảnh đã được đọc trực tiếp. Ảnh không thay cho công thức hay lời giải HTML. `manifest.json` ghi trang bắt đầu của 105 câu và vùng trích của từng hình. Công cụ trích là `scripts/import-toan12-chuong1-figures.py` (pypdfium2, pdfplumber, Pillow).

## Đối chiếu và hiệu chỉnh nguồn

- Câu 56: hình đạo hàm không có thang số hoặc giá trị các cực tiểu của f. Không đủ dữ kiện để đếm giao điểm với đường y = −5/4. Lựa chọn B được đổi từ “2” sang “Không đủ dữ kiện để xác định”; lời giải nêu phản ví dụ. Không tiếp tục khẳng định 2 nghiệm như bản nguồn.
- Câu 67: chuẩn hóa w,d cùng tính bằng cm để các công thức khớp số liệu 24 cm. Ý d phải là **Đúng**: 3072√3 ≈ 5320,86, làm tròn là 5321. Nhãn Sai trong PDF mâu thuẫn chính phép tính của tài liệu.
- Câu 84: ý b phải là **Sai** vì h(4) = 83,4 m, khác số 84,3 m trong mệnh đề. Giữ mệnh đề để người học đánh giá; sửa nhãn chấm.
- Câu 71: giải đủ hệ số và bất phương trình cảnh báo, khoảng thời gian khoảng 10,5505 phút, làm tròn 10,6; ý d ghi 10,8 vẫn Sai.
- Câu 75: giữ điều kiện biểu thức logarit dương khi giải bất phương trình, không nhận các số nguyên ngoài miền xác định.
- Câu 81: trị tuyệt đối có đỉnh nhọn tại t = 6; không khẳng định đạo hàm tại điểm này bằng 0. Thời điểm đầu bóng dài 1 m làm tròn là 4,06 giờ sau 6 giờ sáng.
- Câu 83: dùng đạo hàm bậc hai để phân biệt cực trị địa phương tại điểm giữa; không dùng so sánh hai điểm làm bằng chứng cực trị, không khẳng định có giá trị nhỏ nhất trên cả đường thẳng vô hạn.
- Câu 89: nêu rõ P nằm trên đoạn OM theo hình minh họa, tránh nghiệm khác khi cho P chạy trên cả bờ biển.
- Câu 93, 98: đổi đơn vị trục và vận tốc trước khi tính. Câu 98 chấp nhận cả biểu thức 2√5 và kết quả 4,47 km.
- Câu 96: viết đúng hệ thức cosα = MN/NP vì NP là cạnh huyền, rồi suy ra biểu thức chiều dài nếp gấp.

## Kiểm tra

`node scripts/build-pages.mjs` xuất website cùng tài nguyên cục bộ. `node --test tests/*.test.mjs` kiểm tra toàn bộ ngân hàng, LaTeX, tài nguyên hình, số lượng và cách chấm. Các bài tối ưu được tính lại độc lập bằng tối ưu số; các bài đếm số nguyên và xác suất được kiểm chứng bằng liệt kê.
