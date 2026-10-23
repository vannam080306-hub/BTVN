# BTVN · Không gian học tập AI

Ứng dụng web tiếng Việt có máy chủ và cơ sở dữ liệu thật cho giáo viên/học sinh. Giao diện xanh lá, hỗ trợ điện thoại, máy tính và sáng/tối. Không cần cài thư viện JavaScript để chạy.

**Đây là bản nền tảng v1 để thử nghiệm và tiếp tục phát triển, chưa phải bản đã nghiệm thu đầy đủ 28 yêu cầu ở quy mô sản xuất.** Phạm vi, những phần làm được và giới hạn được đối chiếu tại [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md).

## Chạy nhanh

Yêu cầu **Node.js 24 trở lên**. Python 3.10+ và các thư viện trong `requirements.txt` cần cho đọc PDF/Word; nhập văn bản/TXT không cần Python.

```sh
git clone https://github.com/vannam080306-hub/BTVN.git
cd BTVN
```

Sao chép `.env.example` thành `.env`, đặt `ADMIN_PASSWORD` bằng mật khẩu riêng có ít nhất 10 ký tự. Không đưa `.env` lên GitHub.

```sh
node --env-file-if-exists=.env server.mjs
```

Mở **http://127.0.0.1:3000**. Đăng nhập giáo viên bằng `ADMIN_USERNAME` và mật khẩu đã cấu hình. Mật khẩu này chỉ dùng khởi tạo lần đầu; sửa biến môi trường không tự thay mật khẩu trong cơ sở dữ liệu.

Có thể dùng `npm start` nếu máy có npm. Dự án không có bước `npm install` hay build JavaScript.

### Đọc tài liệu PDF và Word

```sh
python -m pip install -r requirements.txt
```

Đặt `PYTHON` trong `.env` nếu trình thực thi trên máy tên là `python3` hoặc nằm trong môi trường ảo. PDF quét chưa có chữ phải OCR trước. Word hỗ trợ `.docx`; chuyển `.doc` cũ trước khi tải.

### Bật dữ liệu minh họa

Đặt `SEED_DEMO=true` **trước lần chạy đầu tiên với thư mục dữ liệu trống** để tạo một tài liệu và 12 câu phương trình mẫu đã xuất bản. Không tạo tài khoản học sinh hoặc mật khẩu dùng chung. Giáo viên tự tạo học sinh trên giao diện.

## Quy trình sử dụng

1. Giáo viên tạo tài khoản học sinh và cấp mật khẩu tạm riêng. Học sinh bắt buộc đổi mật khẩu.
2. Tải tài liệu hoặc dán văn bản. Phân tích bằng AI nếu đã cấu hình; nếu chưa có AI, nhập lý thuyết/dạng bài/bước giải thủ công.
3. Kiểm tra và xác nhận phân tích tài liệu.
4. Tạo bài bằng AI từ 1–5 tài liệu, hoặc nhập bài thủ công. Trích dẫn nguồn phải khớp nguyên văn.
5. Xem đề, đáp án, gợi ý và cảnh báo tương tự; phê duyệt rồi xuất bản.
6. Học sinh luyện theo môn → bài → dạng. Giáo viên có thể giao đề ngẫu nhiên có thời gian và phiên bản riêng.
7. Theo dõi lịch sử, chấm tự luận, xem thống kê, số bước gợi ý và tiến bộ.

Chỉnh sửa bài tạo **phiên bản mới cần duyệt lại**. Phiên bản đề đã giao và lịch sử học sinh giữ nguyên.

## Cấu hình AI thật

Trong `.env`, đặt:

```dotenv
AI_BASE_URL=https://dia-chi-nha-cung-cap.example/v1
AI_API_KEY=thay_bang_khoa_rieng
AI_MODEL=ten_mo_hinh_cua_nha_cung_cap
```

Nhà cung cấp cần hỗ trợ `POST /chat/completions`, định dạng messages và `response_format: {"type":"json_object"}`. Endpoint đầy đủ được ghép từ `AI_BASE_URL` và `/chat/completions`.

- Khóa chỉ nằm trên máy chủ; không được gửi cho trình duyệt hoặc lưu trong repo.
- Tắt AI nếu thiếu một trong ba biến. Website vẫn hoạt động với nội dung nhập thủ công.
- Phân tích và tạo bài giới hạn đầu vào 18.000 ký tự mỗi nguồn/lần, tối đa 5 nguồn; chưa có truy xuất ngữ nghĩa cho tài liệu dài.
- Nội dung AI tạo luôn là bản nháp. Kiểm tra nguồn, cấu trúc và dữ kiện vẫn cần giáo viên thực hiện.
- Giải thích tức thời bám lời giải đã duyệt nhưng chưa có bộ kiểm chứng ngữ nghĩa độc lập; giáo viên cần giám sát khi dùng thực tế.
- Kiểm thử tự động dùng nhà cung cấp giả lập để kiểm tra giao thức và rào chắn; **chưa kiểm định chất lượng của một mô hình thương mại thực tế**.

## Triển khai bằng Docker

Docker tự cài Python và thư viện trích xuất.

```sh
docker compose up --build -d
```

Ứng dụng bind cổng máy chủ tại `127.0.0.1:3000`. Đặt reverse proxy có HTTPS phía trước; chỉ sau khi HTTPS hoạt động mới đặt `COOKIE_SECURE=true`. Gắn volume bền vững cho cả dữ liệu và sao lưu. Dùng một tiến trình ứng dụng cho bản SQLite này.

**GitHub Pages không chạy được phần máy chủ của ứng dụng.** Repo là nơi lưu mã nguồn. Muốn có địa chỉ website công khai cần triển khai container hoặc Node trên máy chủ có ổ đĩa bền vững.

Đọc [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) trước khi dùng với dữ liệu thật.

## Kiểm thử

```sh
node --test tests/app.test.mjs
```

Kiểm thử tự tạo máy chủ, dữ liệu tạm và dịch vụ AI giả lập; không dùng API key thật. Bao phủ đăng nhập/phân quyền, đổi mật khẩu tạm, tài liệu, nguồn, tạo nháp, duyệt, trùng, phiên bản, cấu trúc đề, đáp án ẩn, hết giờ, lưu nháp, chống nộp lặp, gợi ý, ôn sai, thích ứng, thống kê, chấm tự luận, khóa/reset tài khoản, sao lưu và khôi phục.

## Sao lưu và khôi phục

Máy chủ đang chạy tự sao lưu mỗi 24 giờ. Tệp SQLite chứa cả tài liệu gốc (base64), nội dung, người dùng và kết quả.

Sao lưu thủ công hoặc từ lịch hệ điều hành:

```sh
node --env-file-if-exists=.env scripts/backup.mjs
```

Khôi phục **sang thư mục mới**:

```sh
node scripts/restore.mjs backups/ten-ban-sao.sqlite restored-data
```

Chương trình kiểm tra tính toàn vẹn, liên kết dữ liệu, thu hồi phiên cũ và không ghi đè cơ sở dữ liệu đang chạy. Kiểm tra bản khôi phục trong môi trường cách ly; dừng dịch vụ trước khi đổi `DATA_DIR` sang dữ liệu mới. Cần sao chép bản sao lưu ra nơi lưu trữ riêng và thiết lập mã hóa ở hạ tầng. Chưa có cam kết RPO 1 giờ/RTO 4 giờ.

## Cấu trúc mã nguồn

```text
server.mjs             HTTP API, phân quyền, làm bài, thống kê, tác vụ định kỳ
lib/db.mjs             Schema SQLite, mật khẩu, giao dịch, sao lưu
lib/ai.mjs             Adapter dịch vụ AI, giới hạn dữ liệu, nhật ký AI
public/               Giao diện web không phụ thuộc framework
scripts/extract.py    Trích xuất PDF/DOCX bằng Python
scripts/backup.mjs    Sao lưu nhất quán bằng SQLite backup API
scripts/restore.mjs   Khôi phục an toàn sang thư mục mới
tests/app.test.mjs    Kiểm thử tích hợp
docs/                 Phạm vi 28 yêu cầu và hướng dẫn bàn giao
```

## Giới hạn cần hoàn thiện trước sản xuất

- Chưa có OCR tích hợp, nhận dạng công thức chuyên dụng, tìm kiếm vector hoặc phát hiện trùng ngữ nghĩa.
- Tự chấm trắc nghiệm một đáp án và đáp án số có sai số. Tự luận chuyển giáo viên chấm; chưa chấm biểu thức tương đương hoặc tự luận bằng AI.
- Cá nhân hóa/cảnh báo dùng quy tắc có phiên bản `mastery-v1-min5`, chưa là mô hình năng lực đã kiểm định. Mỗi dạng cần ít nhất 5 câu đã chấm; học sinh có thể yêu cầu AI tổng hợp đề xuất từ số liệu ẩn danh. Chất lượng đề xuất cần giáo viên đánh giá thực tế.
- Đề ngẫu nhiên bảo toàn môn/bài/dạng/độ khó giữa các học sinh, nhưng chưa có trình cấu hình ma trận điểm phức tạp, nhiều lượt thi hoặc sinh biến thể đổi số tự động đã kiểm chứng.
- Tác vụ AI chạy trong yêu cầu HTTP có thời hạn 90 giây; chưa có hàng đợi bền vững, hủy tác vụ và tiếp tục sau khi máy chủ khởi động lại.
- Chưa có quét antivirus, giới hạn CPU theo container con, mã hóa tệp ở tầng ứng dụng, sao lưu ngoài máy chủ hoặc tự xóa bản sao theo thời hạn.
- Cần kiểm thử tải, bảo mật độc lập, trình duyệt chéo và bộ đánh giá chuyên môn trước khi nghiệm thu sản xuất.

Không coi kết quả kiểm thử kỹ thuật là xác nhận chất lượng sư phạm hay nghiệm thu trọn bộ đặc tả.
