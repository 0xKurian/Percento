export const chapters = [
  {
    id: "chuong-1",
    title: "Chương I: Khái Niệm Về Xác Suất",
    shortTitle: "Chương I: Xác Suất",
    pointsBadge: "2 điểm",
    description: "Định nghĩa cổ điển, tính chất, xác suất có điều kiện, công thức cộng nhân, xác suất toàn phần, công thức Bayes và nhị thức Bernoulli.",
    badge: "2 điểm",
    sections: [
      {
        id: "1.1",
        title: "1. Định nghĩa xác suất & Tính chất",
        content: `**1. Định nghĩa cổ điển:**
Nếu phép thử có $n$ kết cục đồng khả năng và có $m$ kết cục thuận lợi cho biến cố $A$:
$$P(A) = \\frac{m}{n} = \\frac{|A|}{|\\Omega|}$$

**2. Các tính chất cơ bản:**
- $0 \\le P(A) \\le 1$ với mọi biến cố $A$.
- Xác suất biến cố chắc chắn: $P(\\Omega) = 1$.
- Xác suất biến cố không thể: $P(\\emptyset) = 0$.
- Biến cố đối lập $\\overline{A}$ (biến cố bù):
$$P(\\overline{A}) = 1 - P(A)$$

**Công thức tổ hợp thường dùng khi rút mẫu:**
$$C_n^k = \\frac{n!}{k!(n-k)!}$$`
      },
      {
        id: "1.2",
        title: "2. Xác suất có điều kiện",
        content: `**Định nghĩa:**
Xác suất biến cố $B$ xảy ra khi biết biến cố $A$ đã xảy ra ($P(A) > 0$):
$$P(B|A) = \\frac{P(AB)}{P(A)}$$

Tương tự, xác suất của $A$ với điều kiện $B$ ($P(B) > 0$):
$$P(A|B) = \\frac{P(AB)}{P(B)}$$`
      },
      {
        id: "1.3",
        title: "3. Công thức cộng và nhân xác suất",
        content: `**1. Công thức cộng xác suất:**
- Hai biến cố bất kỳ:
$$P(A + B) = P(A) + P(B) - P(AB)$$
- Hai biến cố xung khắc ($AB = \\emptyset$):
$$P(A + B) = P(A) + P(B)$$

**2. Công thức nhân xác suất:**
- Tổng quát:
$$P(AB) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$$
- Hai biến cố độc lập:
$$P(AB) = P(A) \\cdot P(B)$$`
      },
      {
        id: "1.4",
        title: "4. Xác suất toàn phần và công thức Bayes",
        content: `**1. Hệ đầy đủ:**
Hệ biến cố $H_1, H_2, \\dots, H_n$ là hệ đầy đủ nếu đôi một xung khắc ($H_i H_j = \\emptyset, \\forall i \\ne j$) và $\\sum_{i=1}^n P(H_i) = 1$.

**2. Công thức xác suất toàn phần:**
$$P(A) = \\sum_{i=1}^n P(H_i) P(A|H_i) = P(H_1)P(A|H_1) + \\dots + P(H_n)P(A|H_n)$$

**3. Công thức Bayes:**
Tính xác suất nguyên nhân $H_k$ khi đã biết kết quả $A$:
$$P(H_k|A) = \\frac{P(H_k) P(A|H_k)}{P(A)} = \\frac{P(H_k) P(A|H_k)}{\\sum_{i=1}^n P(H_i) P(A|H_i)}$$`
      },
      {
        id: "1.5",
        title: "5. Công thức nhị thức Bernoulli",
        content: `**Định nghĩa mô hình:**
Thực hiện $n$ phép thử độc lập, mỗi phép thử có xác suất thành công là $p$, thất bại là $q = 1 - p$.

**Công thức xác suất:**
Xác suất có đúng $k$ lần thành công trong $n$ phép thử:
$$P_n(k) = C_n^k p^k (1-p)^{n-k} \\quad (0 \\le k \\le n)$$

**Số thành công có khả năng xảy ra nhất ($k_0$):**
$$np - q \\le k_0 \\le np + p$$`
      }
    ]
  },
  {
    id: "chuong-2",
    title: "Chương II: Biến Ngẫu Nhiên",
    shortTitle: "Chương II: Biến Ngẫu Nhiên",
    pointsBadge: "4 dạng bài",
    description: "Phân loại biến ngẫu nhiên, bảng phân phối, hàm phân phối F(x), kỳ vọng E(X), phương sai D(X), Mode và 4 dạng bài tập cốt lõi.",
    badge: "4 dạng bài",
    sections: [
      {
        id: "2.1",
        title: "1. Các loại biến ngẫu nhiên",
        content: `**1. Biến ngẫu nhiên rời rạc (Discrete):**
Tập các giá trị có thể nhận là hữu hạn hoặc vô hạn đếm được $\\{x_1, x_2, \\dots, x_n\\}$.

**2. Biến ngẫu nhiên liên tục (Continuous):**
Tập giá trị lấp đầy một khoảng $(a, b)$ hoặc toàn bộ trục số thực $\\mathbb{R}$.`
      },
      {
        id: "2.2",
        title: "2. Phân phối xác suất & Tính chất",
        content: `**Biến ngẫu nhiên rời rạc - Bảng phân phối:**
$$\\begin{array}{c|cccc} X & x_1 & x_2 & \\dots & x_n \\\\ \\hline P & p_1 & p_2 & \\dots & p_n \\end{array}$$
Điều kiện chuẩn hóa:
$$p_i \\ge 0, \\quad \\sum_{i=1}^n p_i = 1$$

**Biến ngẫu nhiên liên tục - Hàm mật độ xác suất $f(x)$:**
- $f(x) \\ge 0, \\quad \\forall x \\in \\mathbb{R}$.
- Điều kiện chuẩn hóa: $\\int_{-\\infty}^{+\\infty} f(x) \\, dx = 1$.`
      },
      {
        id: "2.3",
        title: "3. Hàm phân phối xác suất F(x) & Tính chất",
        content: `**Định nghĩa:**
$$F(x) = P(X < x) \\quad \\text{hoac} \\quad F(x) = P(X \\le x)$$

**Tính chất then chốt:**
- $0 \\le F(x) \\le 1$.
- $F(x)$ là hàm không giảm: $x_1 < x_2 \\implies F(x_1) \\le F(x_2)$.
- $\\lim_{x \\to -\\infty} F(x) = 0$, $\\lim_{x \\to +\\infty} F(x) = 1$.
- Xác suất rơi vào khoảng $[a, b)$:
$$P(a \\le X < b) = F(b) - F(a)$$

**Mối liên hệ giữa $F(x)$ và $f(x)$:**
$$F(x) = \\int_{-\\infty}^x f(t) \\, dt \\implies f(x) = F'(x)$$`
      },
      {
        id: "2.4",
        title: "4. Đặc trưng của biến ngẫu nhiên",
        content: `**1. Kỳ vọng toán $E(X)$ (Mean):**
- Rời rạc: $E(X) = \\sum_{i=1}^n x_i p_i$.
- Liên tục: $E(X) = \\int_{-\\infty}^{+\\infty} x f(x) \\, dx$.

**2. Phương sai $D(X) = Var(X)$ (Variance):**
$$D(X) = E(X^2) - [E(X)]^2$$
- Rời rạc: $E(X^2) = \\sum_{i=1}^n x_i^2 p_i$.
- Liên tục: $E(X^2) = \\int_{-\\infty}^{+\\infty} x^2 f(x) \\, dx$.

**3. Độ lệch chuẩn $\\sigma(X)$:**
$$\\sigma(X) = \\sqrt{D(X)}$$

**4. Yếu vị $\\text{Mode}(X)$:**
- Rời rạc: Giá trị $x_i$ có xác suất $p_i$ lớn nhất.
- Liên tục: Điểm $x$ tại đó hàm mật độ $f(x)$ đạt cực đại ($f'(x) = 0, f''(x) < 0$).`
      },
      {
        id: "2.5",
        title: "5. Một số hàm phân phối thường gặp",
        content: `**1. Phân phối Nhị thức: $X \\sim B(n, p)$**
- $P(X = k) = C_n^k p^k (1-p)^{n-k}$.
- $E(X) = np, \\quad D(X) = np(1-p)$.

**2. Phân phối Poisson: $X \\sim P(\\lambda)$**
- $P(X = k) = \\frac{\\lambda^k}{k!} e^{-\\lambda} \\quad (k = 0, 1, 2, \\dots)$.
- $E(X) = \\lambda, \\quad D(X) = \\lambda$.

**3. Phân phối Chuẩn (Gauss): $X \\sim N(\\mu, \\sigma^2)$**
- Đổi biến chuẩn hóa: $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$.
- Tra hàm Laplace $\\Phi_0(x)$:
$$P(a \\le X \\le b) = \\Phi_0\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi_0\\left(\\frac{a-\\mu}{\\sigma}\\right)$$`
      },
      {
        id: "2.6",
        title: "6. Tổng hợp 4 dạng bài tập cần ôn",
        content: `Bốn dạng bài tập trọng tâm trong đề cương ôn tập:

| Dạng | Tên dạng bài | Phương pháp giải |
| :--- | :--- | :--- |
| **Dạng 1** | **Tìm $k$** | Dùng điều kiện chuẩn hóa: $\\sum p_i = 1$ (rời rạc) hoặc $\\int_{-\\infty}^{+\\infty} f(x)dx = 1$ (liên tục). |
| **Dạng 2** | **Tìm hàm phân phối $F(x)$** | Tích lũy xác suất từng khoảng $F(x) = \\sum_{x_i < x} p_i$ hoặc tích phân $F(x) = \\int_{-\\infty}^x f(t)dt$. |
| **Dạng 3** | **Tính $P(a \\le X \\le b)$** | Dùng $F(b) - F(a)$, tích phân $\\int_a^b f(x)dx$, hoặc tra hàm Laplace $\\Phi_0$. |
| **Dạng 4** | **Tính $E(X), D(X), \\text{Mode}$** | Áp dụng công thức $E(X), E(X^2)$, tính $D(X) = E(X^2) - [E(X)]^2$, tìm đỉnh xác suất để xác định $\\text{Mode}$. |`
      }
    ]
  },
  {
    id: "chuong-3",
    title: "Chương III: Vectơ Ngẫu Nhiên",
    shortTitle: "Chương III: Vectơ Ngẫu Nhiên",
    pointsBadge: "Xét n = 2",
    description: "Phân loại vectơ ngẫu nhiên, phân phối đồng thời n = 2, hàm phân phối F(x, y), Covarian, hệ số tương quan, xác suất và kỳ vọng điều kiện.",
    badge: "Xét n = 2",
    sections: [
      {
        id: "3.1",
        title: "1. Khái niệm & Phân loại vectơ ngẫu nhiên (n = 2)",
        content: `**Định nghĩa:**
Hệ hai biến ngẫu nhiên $(X, Y)$ cùng xác định trên một không gian mẫu được gọi là vectơ ngẫu nhiên hai chiều ($n = 2$).
- **Vectơ rời rạc:** Cả $X$ và $Y$ đều là biến ngẫu nhiên rời rạc, nhận các cặp giá trị $(x_i, y_j)$.
- **Vectơ liên tục:** Nhận giá trị trên mặt phẳng $\\mathbb{R}^2$ với hàm mật độ đồng thời $f(x, y)$.`
      },
      {
        id: "3.2",
        title: "2. Phân phối đồng thời & Phân phối biên",
        content: `**1. Bảng phân phối xác suất đồng thời:**
Bảng gồm các ô $p_{ij} = P(X = x_i, Y = y_j)$.
Điều kiện chuẩn hóa:
$$\\sum_i \\sum_j p_{ij} = 1$$

**2. Phân phối xác suất biên:**
- Phân phối biên của $X$:
$$P(X = x_i) = p_{i\\bullet} = \\sum_j p_{ij}$$
- Phân phối biên của $Y$:
$$P(Y = y_j) = p_{\\bullet j} = \\sum_i p_{ij}$$`
      },
      {
        id: "3.3",
        title: "3. Hàm phân phối xác suất đồng thời",
        content: `**Định nghĩa:**
$$F(x, y) = P(X < x, Y < y)$$

**Tính chất cơ bản:**
- $0 \\le F(x, y) \\le 1$.
- $F(x, y)$ không giảm theo từng biến $x$ và $y$.
- $F(-\\infty, y) = F(x, -\\infty) = 0$.
- $F(+\\infty, +\\infty) = 1$.
- Mối liên hệ với hàm phân phối biên:
$$F_X(x) = F(x, +\\infty), \\quad F_Y(y) = F(+\\infty, y)$$`
      },
      {
        id: "3.4",
        title: "4. Đặc trưng của hàm phân phối đồng thời",
        content: `**1. Hiệp phương sai (Covariance):**
$$\\text{Cov}(X, Y) = E(XY) - E(X) \\cdot E(Y)$$
trong đó:
$$E(XY) = \\sum_i \\sum_j x_i y_j \\cdot p_{ij}$$

**2. Hệ số tương quan (Correlation):**
$$\\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\cdot \\sigma_Y}$$
- Tính chất: $-1 \\le \\rho_{XY} \\le 1$.
- Nếu $X, Y$ độc lập thì $\\text{Cov}(X, Y) = 0$ và $\\rho_{XY} = 0$.

**3. Điều kiện độc lập:**
$X$ và $Y$ độc lập khi và chỉ khi:
$$P(X = x_i, Y = y_j) = P(X = x_i) \\cdot P(Y = y_j) \\quad \\forall i, j$$`
      },
      {
        id: "3.5",
        title: "5. Xác suất điều kiện và kỳ vọng điều kiện",
        content: `**1. Luật phân phối có điều kiện:**
Phân phối của $Y$ khi biết $X = x_i$ ($P(X = x_i) > 0$):
$$P(Y = y_j \\mid X = x_i) = \\frac{p_{ij}}{P(X = x_i)} = \\frac{p_{ij}}{p_{i\\bullet}}$$

**2. Kỳ vọng có điều kiện:**
$$E(Y \\mid X = x_i) = \\sum_j y_j \\cdot P(Y = y_j \\mid X = x_i)$$
$$E(X \\mid Y = y_j) = \\sum_i x_i \\cdot P(X = x_i \\mid Y = y_j)$$`
      }
    ]
  },
  {
    id: "chuong-4",
    title: "Chương IV: Thống Kê và Ước Lượng Khoảng",
    shortTitle: "Chương IV: Ước Lượng Khoảng",
    pointsBadge: "4 điểm",
    description: "Trọng số 4 điểm bài thi. Ước lượng khoảng tin cậy cho Trung bình (TB), Tỷ lệ (TL), Phương sai (PS) và xác định cỡ mẫu tối thiểu.",
    badge: "4 điểm",
    sections: [
      {
        id: "4.1",
        title: "1. Thống kê mô tả & Tham số mẫu",
        content: `Cho mẫu số liệu kích thước $n$: $x_1, \\dots, x_n$ (hoặc bảng tần số $x_i, n_i$ với $\\sum n_i = n$).

**1. Trung bình mẫu:**
$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k n_i x_i$$

**2. Phương sai mẫu có hiệu chỉnh (Dùng trong bài thi):**
$$s'^2 = \\frac{n}{n-1} s^2 = \\frac{1}{n-1} \\sum_{i=1}^k n_i (x_i - \\bar{x})^2$$
Độ lệch chuẩn hiệu chỉnh: $s' = \\sqrt{s'^2}$.

**3. Tỷ lệ mẫu:**
$$f = \\frac{m}{n}$$
(trong đó $m$ là số phần tử mang dấu hiệu nghiên cứu trong mẫu).`
      },
      {
        id: "4.2",
        title: "2. Ước lượng khoảng cho Trung bình (TB)",
        content: `Độ tin cậy $1 - \\alpha$.

**Trường hợp 1: Đã biết phương sai $\\sigma^2$ (hoặc $n \\ge 30$):**
Độ chính xác ước lượng:
$$\\epsilon = u_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}$$
*(Nếu chưa biết $\\sigma$, thay bằng $s'$: $\\epsilon = u_{\\alpha/2} \\frac{s'}{\\sqrt{n}}$)*.
Khoảng tin cậy hai phía cho $\\mu$:
$$\\mu \\in \\Big[ \\bar{x} - \\epsilon \\, ; \\, \\bar{x} + \\epsilon \\Big]$$

**Trường hợp 2: Chưa biết $\\sigma^2$ và mẫu nhỏ ($n < 30$):**
Tra bảng phân phối Student $t_{\\alpha/2}^{(n-1)}$:
$$\\epsilon = t_{\\alpha/2}^{(n-1)} \\cdot \\frac{s'}{\\sqrt{n}}$$
$$\\mu \\in \\Big[ \\bar{x} - \\epsilon \\, ; \\, \\bar{x} + \\epsilon \\Big]$$`
      },
      {
        id: "4.3",
        title: "3. Ước lượng khoảng cho Tỷ lệ (TL)",
        content: `Mẫu cỡ $n \\ge 30$, tỷ lệ mẫu $f = \\frac{m}{n}$, độ tin cậy $1 - \\alpha$:

**Độ chính xác ước lượng:**
$$\\epsilon = u_{\\alpha/2} \\cdot \\sqrt{\\frac{f(1-f)}{n}}$$

**Khoảng tin cậy hai phía cho tỷ lệ $p$:**
$$p \\in \\Big[ f - \\epsilon \\, ; \\, f + \\epsilon \\Big]$$

**Bài toán xác định cỡ mẫu tối thiểu:**
Để sai số ước lượng tỷ lệ không vượt quá $\\epsilon_0$:
$$n \\ge \\frac{u_{\\alpha/2}^2 \\cdot f(1-f)}{\\epsilon_0^2}$$
*(Nếu chưa biết $f$, dùng trường hợp bất lợi nhất $f(1-f) = 0{,}25$)*.`
      },
      {
        id: "4.4",
        title: "4. Ước lượng khoảng cho Phương sai (PS)",
        content: `Ước lượng phương sai $\\sigma^2$ của biến ngẫu nhiên chuẩn $N(\\mu, \\sigma^2)$ với độ tin cậy $1 - \\alpha$:

Tra bảng phân phối Chi-Square $\\chi^2$ với $n - 1$ bậc tự do:
$$\\sigma^2 \\in \\left[ \\frac{(n-1)s'^2}{\\chi^2_{\\alpha/2}(n-1)} \\, ; \\, \\frac{(n-1)s'^2}{\\chi^2_{1-\\alpha/2}(n-1)} \\right]$$

Khoảng tin cậy cho độ lệch chuẩn $\\sigma$:
$$\\sigma \\in \\left[ \\sqrt{\\frac{(n-1)s'^2}{\\chi^2_{\\alpha/2}(n-1)}} \\, ; \\, \\sqrt{\\frac{(n-1)s'^2}{\\chi^2_{1-\\alpha/2}(n-1)}} \\right]$$`
      }
    ]
  },
  {
    id: "chuong-5",
    title: "Chương V: Kiểm Định Giả Thuyết",
    shortTitle: "Chương V: Kiểm Định Giả Thuyết",
    pointsBadge: "1 điểm",
    description: "Quy trình 5 bước kiểm định tự luận chuẩn mực. Kiểm định trung bình (KĐTB) và kiểm định tỷ lệ (KĐTL).",
    badge: "1 điểm",
    sections: [
      {
        id: "5.1",
        title: "1. Quy trình 5 bước kiểm định chuẩn",
        content: `**5 bước làm bài thi tự luận kiểm định:**

1. **Bước 1: Thiết lập giả thuyết:** $H_0: \\theta = \\theta_0$ và đối thuyết $H_1$ (hai phía $\\ne$, phía phải $>$, hoặc phía trái $<$).
2. **Bước 2: Chọn tiêu chuẩn kiểm định:** Nêu rõ công thức thống kê ($Z$ hoặc $T$) và phân phối của nó khi $H_0$ đúng.
3. **Bước 3: Xác định miền bác bỏ $W_\\alpha$:** Tra bảng giá trị tới hạn tương ứng với mức ý nghĩa $\\alpha$.
4. **Bước 4: Tính giá trị quan sát:** Thế số liệu mẫu tính $Z_{qs}$ hoặc $T_{qs}$.
5. **Bước 5: Kết luận:**
   - Nếu giá trị quan sát $\\in W_\\alpha \\implies$ Bác bỏ $H_0$, chấp nhận $H_1$.
   - Nếu giá trị quan sát $\\notin W_\\alpha \\implies$ Chưa có cơ sở bác bỏ $H_0$.`
      },
      {
        id: "5.2",
        title: "2. Kiểm định trung bình (KĐTB)",
        content: `Bài toán kiểm định giả thuyết $H_0: \\mu = \\mu_0$.

**1. Mẫu lớn hoặc đã biết $\\sigma^2$ (Tiêu chuẩn $Z$):**
$$Z_{qs} = \\frac{\\bar{x} - \\mu_0}{s'} \\sqrt{n} \\sim N(0, 1)$$
- $H_1: \\mu \\ne \\mu_0 \\implies W_\\alpha = \\{ |Z| > u_{\\alpha/2} \\}$.
- $H_1: \\mu > \\mu_0 \\implies W_\\alpha = \\{ Z > u_\\alpha \\}$.
- $H_1: \\mu < \\mu_0 \\implies W_\\alpha = \\{ Z < -u_\\alpha \\}$.

**2. Mẫu nhỏ ($n < 30$) chưa biết phương sai (Tiêu chuẩn Student $T$):**
$$T_{qs} = \\frac{\\bar{x} - \\mu_0}{s'} \\sqrt{n} \\sim t(n-1)$$
- $H_1: \\mu \\ne \\mu_0 \\implies W_\\alpha = \\{ |T| > t_{\\alpha/2}^{(n-1)} \\}$.
- $H_1: \\mu > \\mu_0 \\implies W_\\alpha = \\{ T > t_\\alpha^{(n-1)} \\}$.
- $H_1: \\mu < \\mu_0 \\implies W_\\alpha = \\{ T < -t_\\alpha^{(n-1)} \\}$.`
      },
      {
        id: "5.3",
        title: "3. Kiểm định tỷ lệ (KĐTL)",
        content: `Bài toán kiểm định tỷ lệ $H_0: p = p_0$.
Mẫu điều tra cỡ $n \\ge 30$, tỷ lệ mẫu $f = \\frac{m}{n}$.

**Tiêu chuẩn kiểm định Z:**
$$Z_{qs} = \\frac{f - p_0}{\\sqrt{p_0(1-p_0)}} \\sqrt{n} \\sim N(0, 1)$$

**Miền bác bỏ $W_\\alpha$:**
- Đối thuyết $H_1: p \\ne p_0 \\implies W_\\alpha = \\big(-\\infty, -u_{\\alpha/2}\\big) \\cup \\big(u_{\\alpha/2}, +\\infty\\big)$.
- Đối thuyết $H_1: p > p_0 \\implies W_\\alpha = \\big(u_\\alpha, +\\infty\\big)$.
- Đối thuyết $H_1: p < p_0 \\implies W_\\alpha = \\big(-\\infty, -u_\\alpha\\big)$.`
      }
    ]
  }
];
