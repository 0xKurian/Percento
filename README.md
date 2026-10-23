# 🎓 Percento - Nền Tảng Học & Luyện Thi Tự Luận Xác Suất Thống Kê

Trang web học tập toàn diện môn **Xác Suất Thống Kê** dành cho người học khối ngành Kỹ thuật, Dữ liệu, Công nghệ & Kinh tế, kết hợp giữa **lý thuyết nền tảng**, **phòng thí nghiệm mô phỏng trực quan**, **máy tính thống kê & tra bảng số tức thì**, và **kho bài tập lớn tự luận có lời giải chi tiết 5 bước chuẩn mực**.

---

## 🌟 Các Tính Năng Nổi Bật

### 1. 📖 Lý Thuyết Chuẩn 6 Chương (KaTeX Math Sắc Nét)
- **Chương 1**: Biến cố ngẫu nhiên, xác suất cổ điển, công thức cộng/nhân, hệ đầy đủ, công thức Bayes & Bernoulli.
- **Chương 2**: Biến ngẫu nhiên rời rạc & liên tục, hàm phân phối $F(x)$, hàm mật độ $f(x)$, các phân phối thông dụng (Nhị thức, Poisson, Chuẩn Gauss).
- **Chương 3**: Biến ngẫu nhiên hai chiều, bảng phân phối đồng thời, phân phối biên, tính độc lập, Covariance & Correlation.
- **Chương 4**: Thống kê mô tả, mẫu ngẫu nhiên, trung bình mẫu, phương sai hiệu chỉnh $s'$, các công thức khoảng tin cậy ($\mu, p, \sigma^2$).
- **Chương 5**: Kiểm định giả thuyết thống kê (quy trình 5 bước tự luận, kiểm định $\mu, p$, kiểm định độc lập Chi-Square).
- **Chương 6**: Hồi quy tuyến tính OLS ($y = ax + b$), hệ số tương quan mẫu $r$, hệ số xác định $R^2$.

### 2. 📝 Luyện Tập Tự Luận (Chuẩn Đề Thi Tự Luận)
- Tuyển chọn bài tập tự luận kinh điển & bài tập lớn thực tế của nhóm sinh viên.
- **Chế độ tự luyện**: Ẩn lời giải để sinh viên tự đặt bút làm nháp trước.
- **Mẹo thi & lưu ý**: Chỉ ra các bẫy thường gặp khiến sinh viên bị trừ điểm (như dùng $s$ thay vì $s'$, quên gọi hệ biến cố đầy đủ...).
- **Bài giải 5 bước chi tiết**: Trình bày mẫu mực từng bước lập luận toán học KaTeX.
- Theo dõi tiến độ hoàn thành (lưu trên trình duyệt + hiệu ứng pháo hoa khi giải xong).

### 3. 🧪 Phòng Thí Nghiệm Mô Phỏng Trực Quan Động (Interactive Lab)
- **Mô phỏng Phân phối Chuẩn Gauss**: Kéo thanh trượt thay đổi $\mu, \sigma$, chọn miền diện tích xác suất ($a \le X \le b$, đuôi trái, đuôi phải, 2 phía) và xem biến đổi Z-score tương ứng.
- **Mô phỏng Định Lý Giới Hạn Trung Tâm (CLT)**: Chọn quần thể gốc (phân phối Mũ, Đều, Hai đỉnh), tăng kích thước mẫu $n \ge 30$, xem phân phối của $\bar{X}$ hội tụ kỳ diệu về hình chuông chuẩn.
- **Mô phỏng Hồi Quy Tuyến Tính (OLS)**: Nhấp chuột trên mặt phẳng tọa độ để thêm điểm tùy ý, hệ thống vẽ đường hồi quy $\hat{y} = ax + b$ động, đường sai số và tính $r, R^2$.
- **Mô phỏng Luật Số Lớn (LLN)**: Tung đồng xu hoặc gieo xúc xắc hàng trăm lần, quan sát tần suất thực nghiệm tiệm cận xác suất lý thuyết.

### 4. 🧮 Máy Tính Thống Kê & Bảng Tra Số Tức Thì
- **Tra bảng không cần lật sách**:
  - Tra Laplace $\Phi_0(z)$ và hàm phân phối chuẩn $\Phi(z)$.
  - Tra giá trị tới hạn hai phía $u_{\alpha/2}$ và một phía $u_\alpha$.
  - Tra bảng phân phối Student $t_\alpha(df)$ và $t_{\alpha/2}(df)$.
  - Tra bảng Khi bình phương $\chi^2_\alpha(df)$.
- **Máy tính tham số mẫu**: Nhập dãy số hoặc bảng tần số $\to$ tính $n, \bar{x}, s^2, s'^2, s'$ (phương sai có hiệu chỉnh để chép vào bài thi).
- **Trợ lý giải bài kiểm định 5 bước tự động**: Nhập số liệu mẫu $\to$ xuất bài văn giải kiểm định tự luận chuẩn chỉnh.

### 5. ⚡ Sổ Tay Công Thức Phòng Thi (Cheat Sheet)
- Tóm tắt các giá trị tới hạn kinh điển ($u_{0.025} = 1.96, u_{0.05} = 1.645$).
- Bảng tổng hợp công thức khoảng tin cậy & miền bác bỏ kiểm định.
- Hỗ trợ chế độ in ấn hoặc xuất PDF để mang đi ôn thi.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Website

### Khởi động môi trường phát triển (Dev Server):
```bash
cd website
npm run dev
```

### Đóng gói sản phẩm (Production Build):
```bash
cd website
npm run build
```
