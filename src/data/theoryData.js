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
        content: `**1. Định nghĩa cổ điển về xác suất:**
Giả sử phép thử ngẫu nhiên có không gian mẫu $\\Omega$ gồm $n$ kết cục đồng khả năng và có $m$ kết cục thuận lợi cho biến cố $A$ ($A \\subset \\Omega$):
$$P(A) = \\dfrac{m}{n} = \\dfrac{|A|}{|\\Omega|}$$

**2. Các tính chất của xác suất:**
- Với mọi biến cố $A$:
$$0 \\le P(A) \\le 1$$
- Biến cố chắc chắn: $P(\\Omega) = 1$.
- Biến cố không thể: $P(\\emptyset) = 0$.
- Biến cố đối lập $\\overline{A}$ (hoặc $A^c$):
$$P(\\overline{A}) = 1 - P(A)$$
- Nếu $A \\subset B$ thì $P(A) \\le P(B)$ và $P(B \\setminus A) = P(B) - P(A)$.

**3. Các công thức giải tích tổ hợp cơ bản:**
- Tổ hợp chập $k$ của $n$ phần tử (chọn không thứ tự):
$$C_n^k = \\dbinom{n}{k} = \\dfrac{n!}{k!(n-k)!}$$
- Chỉnh hợp chập $k$ của $n$ phần tử (chọn có thứ tự):
$$A_n^k = \\dfrac{n!}{(n-k)!}$$
- Hoán vị $n$ phần tử:
$$P_n = n!$$`
      },
      {
        id: "1.2",
        title: "2. Xác suất có điều kiện",
        content: `**Định nghĩa:**
Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra (với $P(B) > 0$), ký hiệu $P(A \\mid B)$, được định nghĩa bởi:
$$P(A \\mid B) = \\dfrac{P(AB)}{P(B)} = \\dfrac{P(A \\cap B)}{P(B)}$$

Tương tự, xác suất của biến cố $B$ khi biết biến cố $A$ đã xảy ra (với $P(A) > 0$):
$$P(B \\mid A) = \\dfrac{P(AB)}{P(A)} = \\dfrac{P(A \\cap B)}{P(A)}$$

**Tính chất:**
- $0 \\le P(A \\mid B) \\le 1$.
- $P(\\Omega \\mid B) = 1, \\quad P(\\emptyset \\mid B) = 0$.
- $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$.`
      },
      {
        id: "1.3",
        title: "3. Công thức cộng và nhân xác suất",
        content: `**1. Công thức cộng xác suất:**
- Với hai biến cố bất kỳ $A$ và $B$:
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
*(Thầy cũng ký hiệu: $P(A + B) = P(A) + P(B) - P(AB)$)*.
- Khi hai biến cố xung khắc ($AB = \\emptyset$):
$$P(A \\cup B) = P(A) + P(B)$$
- Công thức cộng cho 3 biến cố $A, B, C$:
$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)$$

**2. Công thức nhân xác suất:**
- Hai biến cố bất kỳ:
$$P(AB) = P(A) \\cdot P(B \\mid A) = P(B) \\cdot P(A \\mid B)$$
- Trường hợp $n$ biến cố $A_1, A_2, \\dots, A_n$:
$$P(A_1 A_2 \\cdots A_n) = P(A_1) P(A_2 \\mid A_1) P(A_3 \\mid A_1 A_2) \\cdots P(A_n \\mid A_1 A_2 \\cdots A_{n-1})$$
- Hai biến cố độc lập:
$$P(AB) = P(A) \\cdot P(B)$$`
      },
      {
        id: "1.4",
        title: "4. Xác suất toàn phần và công thức Bayes",
        content: `**1. Hệ đầy đủ các biến cố:**
Dãy các biến cố $\\{B_1, B_2, \\dots, B_n\\}$ (hoặc $\\{H_1, H_2, \\dots, H_n\\}$) lập thành hệ đầy đủ nếu:
$$B_i \\cap B_j = \\emptyset \\quad (i \\ne j) \\quad \\text{và} \\quad \\bigcup_{i=1}^n B_i = \\Omega \\implies \\sum_{i=1}^n P(B_i) = 1$$

**2. Công thức xác suất toàn phần:**
Với mọi biến cố $A \\subset \\Omega$ và hệ đầy đủ $\\{B_1, B_2, \\dots, B_n\\}$ ($P(B_i) > 0$):
$$P(A) = \\sum_{i=1}^n P(B_i) P(A \\mid B_i) = P(B_1)P(A \\mid B_1) + P(B_2)P(A \\mid B_2) + \\dots + P(B_n)P(A \\mid B_n)$$

**3. Công thức Bayes:**
Xác suất hậu nghiệm của nguyên nhân $B_k$ khi đã biết kết quả $A$ xảy ra:
$$P(B_k \\mid A) = \\dfrac{P(B_k) P(A \\mid B_k)}{P(A)} = \\dfrac{P(B_k) P(A \\mid B_k)}{\\displaystyle\\sum_{i=1}^n P(B_i) P(A \\mid B_i)}$$`
      },
      {
        id: "1.5",
        title: "5. Công thức nhị thức Bernoulli",
        content: `**1. Dãy phép thử Bernoulli:**
Thực hiện $n$ phép thử độc lập và lặp lại. Trong mỗi phép thử, biến cố $A$ xuất hiện với xác suất không đổi $p = P(A)$, và không xuất hiện với xác suất $q = 1 - p$.

**2. Công thức nhị thức (Bernoulli):**
Xác suất để biến cố $A$ xuất hiện đúng $k$ lần trong $n$ phép thử:
$$P_n(k) = C_n^k p^k q^{n-k} = C_n^k p^k (1-p)^{n-k} \\quad (k = 0, 1, 2, \\dots, n)$$

**3. Số lần có khả năng xuất hiện nhiều nhất ($k_0$):**
Giá trị $k_0$ thỏa mãn hệ bất đẳng thức:
$$np - q \\le k_0 \\le np + p$$
- Nếu $np - q$ không phải số nguyên, $k_0 = [np + p]$.
- Nếu $np - q$ là số nguyên, có hai giá trị mốt: $k_0 = np - q$ và $k_0 = np + p$.`
      }
    ]
  },
  {
    id: "chuong-2",
    title: "Chương II: Biến Ngẫu Nhiên",
    shortTitle: "Chương II: Biến Ngẫu Nhiên",
    pointsBadge: "4 dạng bài",
    description: "Phân loại biến ngẫu nhiên, bảng phân phối, hàm phân phối F(x), hàm mật độ p(x), kỳ vọng E[X], phương sai D[X], Mode và 4 dạng bài tập cốt lõi.",
    badge: "4 dạng bài",
    sections: [
      {
        id: "2.1",
        title: "1. Các loại biến ngẫu nhiên",
        content: `**1. Định nghĩa biến ngẫu nhiên:**
Một đại lượng nhận các giá trị số thực tùy thuộc vào kết quả của phép thử ngẫu nhiên được gọi là biến ngẫu nhiên, ký hiệu là $X, Y, Z, \\dots$.

**2. Phân loại biến ngẫu nhiên:**
- **Biến ngẫu nhiên rời rạc:** Tập các giá trị có thể nhận là tập hữu hạn hoặc vô hạn đếm được: $\\{x_1, x_2, \\dots, x_n, \\dots\\}$.
- **Biến ngẫu nhiên liên tục:** Tập các giá trị có thể nhận lấp đầy một khoảng $(a, b)$ hữu hạn hoặc vô hạn trên trục số thực $\\mathbb{R}$.`
      },
      {
        id: "2.2",
        title: "2. Phân phối xác suất & Tính chất",
        content: `**1. Biến ngẫu nhiên rời rạc - Bảng phân phối xác suất:**
Bảng phân phối của $X$ nhận các giá trị $x_i$ với xác suất $p_i = P(X = x_i)$:
$$\\begin{array}{|c|c|c|c|c|c|}
\\hline
X & x_1 & x_2 & \\dots & x_n & \\dots \\
\\hline
P & p_1 & p_2 & \\dots & p_n & \\dots \\
\\hline
\\end{array}$$
Điều kiện chuẩn hóa:
$$p_i \\ge 0 \\quad \\text{và} \\quad \\sum_{i} p_i = 1$$

**2. Biến ngẫu nhiên liên tục - Hàm mật độ xác suất $p(x)$ (hoặc $f(x)$):**
Hàm số $p(x)$ thỏa mãn:
- $p(x) \\ge 0, \\quad \\forall x \\in \\mathbb{R}$.
- Điều kiện chuẩn hóa:
$$\\int_{-\\infty}^{+\\infty} p(x) \\, dx = 1$$
- Xác suất trên một khoảng $[a, b]$:
$$P(a \\le X \\le b) = \\int_a^b p(x) \\, dx$$`
      },
      {
        id: "2.3",
        title: "3. Hàm phân phối xác suất F(x) & Tính chất",
        content: `**1. Định nghĩa chuẩn (Giáo trình trang 60):**
Hàm phân phối xác suất (hàm phân phối tích lũy) của biến ngẫu nhiên $X$, ký hiệu $F(x)$, là hàm số thực xác định bởi:
$$F(x) = P(X < x), \\quad x \\in \\mathbb{R}$$

- **Trường hợp rời rạc:**
$$F(x) = \\sum_{x_i < x} p_i$$
- **Trường hợp liên tục:**
$$F(x) = \\int_{-\\infty}^x p(t) \\, dt, \\quad x \\in \\mathbb{R}$$

**2. Các tính chất cơ bản:**
- $0 \\le F(x) \\le 1$ với mọi $x \\in \\mathbb{R}$.
- $F(x)$ là hàm không giảm: nếu $x_1 < x_2$ thì $F(x_1) \\le F(x_2)$.
- Giới hạn ở vô cực:
$$\\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to +\\infty} F(x) = 1$$
- Quan hệ giữa $F(x)$ và xác suất trên khoảng:
  - Nếu $X$ rời rạc:
$$P(a \\le X < b) = F(b) - F(a)$$
$$P(a \\le X \\le b) = F(b) - F(a) + P(X = b)$$
$$P(a < X < b) = F(b) - F(a) - P(X = a)$$
$$P(a < X \\le b) = F(b) - F(a) + P(X = b) - P(X = a)$$
  - Nếu $X$ liên tục (với $P(X = a) = P(X = b) = 0$):
$$P(a \\le X \\le b) = P(a < X < b) = P(a \\le X < b) = P(a < X \\le b) = F(b) - F(a) = \\int_a^b p(x) \\, dx$$
- Mối liên hệ: $p(x) = F'(x)$ tại các điểm $F(x)$ khả vi.`
      },
      {
        id: "2.4",
        title: "4. Đặc trưng của biến ngẫu nhiên",
        content: `**1. Kỳ vọng toán $E[X]$ (hoặc $E(X), EX$):**
- Rời rạc:
$$E[X] = \\sum_{i} x_i p_i$$
- Liên tục:
$$E[X] = \\int_{-\\infty}^{+\\infty} x p(x) \\, dx$$
- Tính chất: $E(C) = C, \\; E(cX) = cE(X), \\; E(X + Y) = E(X) + E(Y)$. Nếu $X, Y$ độc lập thì $E(XY) = E(X)E(Y)$.

**2. Phương sai $D[X]$ (hoặc $D(X), DX, Var(X)$):**
$$D[X] = E\\left[(X - E[X])^2\\right] = E[X^2] - (E[X])^2$$
- Rời rạc: $E[X^2] = \\displaystyle\\sum_{i} x_i^2 p_i$.
- Liên tục: $E[X^2] = \\displaystyle\\int_{-\\infty}^{+\\infty} x^2 p(x) \\, dx$.
- Tính chất: $D(C) = 0, \\; D(cX) = c^2 D(X)$. Nếu $X, Y$ độc lập thì $D(X \\pm Y) = D(X) + D(Y)$.

**3. Độ lệch chuẩn $\\sigma$:**
$$\\sigma = \\sqrt{D[X]}$$

**4. Mốt (Mode) $x_{mod}$ (hoặc $Mod(X)$):**
- Rời rạc: Giá trị $x_i$ ứng với xác suất $p_i$ lớn nhất.
- Liên tục: Điểm $x$ tại đó hàm mật độ $p(x)$ đạt cực đại.`
      },
      {
        id: "2.5",
        title: "5. Một số hàm phân phối thường gặp",
        content: `**1. Phân phối Nhị thức: $X \\sim B(n, p)$**
- $P(X = k) = C_n^k p^k q^{n-k} \\quad (q = 1 - p)$.
- $E[X] = np, \\quad D[X] = npq$.

**2. Phân phối Poisson: $X \\sim P(\\lambda)$**
- $P(X = k) = \\dfrac{\\lambda^k}{k!} e^{-\\lambda} \\quad (k = 0, 1, 2, \\dots)$.
- $E[X] = \\lambda, \\quad D[X] = \\lambda$.

**3. Phân phối Đều: $X \\sim U(a, b)$**
- Hàm mật độ: $p(x) = \\dfrac{1}{b-a}$ khi $x \\in [a, b]$; bằng $0$ khi khác.
- $E[X] = \\dfrac{a+b}{2}, \\quad D[X] = \\dfrac{(b-a)^2}{12}$.

**4. Phân phối Chuẩn (Gauss): $X \\sim N(\\mu, \\sigma^2)$**
- Biến đổi chuẩn hóa:
$$Z = \\dfrac{X - \\mu}{\\sigma} \\sim N(0, 1)$$
- Hàm mật độ chuẩn tắc: $\\phi(x) = \\dfrac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$.
- Hàm phân phối chuẩn tắc: $\\Phi(x) = \\dfrac{1}{\\sqrt{2\\pi}} \\displaystyle\\int_{-\\infty}^x e^{-\\frac{t^2}{2}} \\, dt$.
- Tính chất: $\\Phi(-x) = 1 - \\Phi(x), \\; \\Phi(0) = 0{,}5$.
- Công thức tính xác suất:
$$P(a \\le X \\le b) = \\Phi\\left(\\dfrac{b - \\mu}{\\sigma}\\right) - \\Phi\\left(\\dfrac{a - \\mu}{\\sigma}\\right)$$`
      },
      {
        id: "2.6",
        title: "6. Tổng hợp 4 dạng bài tập cần ôn",
        content: `Bốn dạng bài tập trọng tâm trong đề cương ôn tập:

| Dạng bài | Nội dung & Ký hiệu toán học | Phương pháp giải chuẩn |
| :--- | :--- | :--- |
| **Dạng 1** | **Tìm hằng số $k$** | Dùng điều kiện chuẩn hóa: $\\sum p_i = 1$ (rời rạc) hoặc $\\int_{-\\infty}^{+\\infty} p(x) dx = 1$ (liên tục). |
| **Dạng 2** | **Tìm hàm phân phối $F(x)$** | Tích lũy xác suất theo định nghĩa $F(x) = P(X < x)$: chia các khoảng thực hiện cộng dồn $F(x) = \\sum_{x_i < x} p_i$ hoặc tích phân $F(x) = \\int_{-\\infty}^x p(t)dt$. |
| **Dạng 3** | **Tính $P(a \\le X \\le b)$** | Áp dụng công thức $F(b) - F(a)$, tích phân $\\int_a^b p(x)dx$, hoặc dùng biến đổi chuẩn tắc $\\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$. |
| **Dạng 4** | **Tính $E[X], D[X], Mod(X)$** | Tính $E[X]$, $E[X^2]$, suy ra phương sai $D[X] = E[X^2] - (E[X])^2$, xác định điểm cực đại xác suất để tìm $x_{mod}$. |`
      }
    ]
  },
  {
    id: "chuong-3",
    title: "Chương III: Vectơ Ngẫu Nhiên",
    shortTitle: "Chương III: Vectơ Ngẫu Nhiên",
    pointsBadge: "Xét n = 2",
    description: "Phân loại vectơ ngẫu nhiên, phân phối đồng thời n = 2, bảng phân phối, hàm phân phối F(x, y), Covariance, hệ số tương quan, xác suất và kỳ vọng điều kiện.",
    badge: "Xét n = 2",
    sections: [
      {
        id: "3.1",
        title: "1. Khái niệm & Phân loại vectơ ngẫu nhiên (n = 2)",
        content: `**Định nghĩa:**
Một cặp hai biến ngẫu nhiên $(X, Y)$ cùng xác định trên không gian mẫu $\\Omega$ được gọi là vectơ ngẫu nhiên hai chiều ($n = 2$).

**Phân loại:**
- **Vectơ ngẫu nhiên hai chiều rời rạc:** Cả $X$ và $Y$ đều là biến ngẫu nhiên rời rạc, nhận tập giá trị là các cặp $(x_i, y_j)$.
- **Vectơ ngẫu nhiên hai chiều liên tục:** Nhận giá trị trên mặt phẳng $\\mathbb{R}^2$ với hàm mật độ đồng thời $p(x, y)$ (hoặc $f(x, y)$).`
      },
      {
        id: "3.2",
        title: "2. Phân phối đồng thời & Phân phối biên",
        content: `**1. Bảng phân phối xác suất đồng thời:**
Cho $(X, Y)$ là vectơ ngẫu nhiên rời rạc hai chiều với $p_{ij} = P(X = x_i, Y = y_j) = P(X = x_i \\cap Y = y_j)$:
$$\\begin{array}{|c|c|c|c|c|}
\\hline
Y \\backslash X & x_1 & x_2 & \\dots & x_n \\
\\hline
y_1 & p_{11} & p_{21} & \\dots & p_{n1} \\
\\hline
y_2 & p_{12} & p_{22} & \\dots & p_{n2} \\
\\hline
\\dots & \\dots & \\dots & \\dots & \\dots \\
\\hline
y_m & p_{1m} & p_{2m} & \\dots & p_{nm} \\
\\hline
\\end{array}$$

Điều kiện chuẩn hóa:
$$\\sum_{i=1}^n \\sum_{j=1}^m p_{ij} = 1, \\quad p_{ij} \\ge 0$$

**2. Phân phối xác suất biên:**
- Phân phối biên của $X$ (tổng các xác suất theo cột):
$$P(X = x_i) = p_{i\\bullet} = \\sum_{j=1}^m p_{ij}$$
- Phân phối biên của $Y$ (tổng các xác suất theo hàng):
$$P(Y = y_j) = p_{\\bullet j} = \\sum_{i=1}^n p_{ij}$$

**3. Điều kiện hai biến ngẫu nhiên độc lập:**
$X$ và $Y$ độc lập khi và chỉ khi với mọi cặp $(x_i, y_j)$:
$$p_{ij} = P(X = x_i) \\cdot P(Y = y_j) = p_{i\\bullet} \\cdot p_{\\bullet j}$$`
      },
      {
        id: "3.3",
        title: "3. Hàm phân phối xác suất đồng thời",
        content: `**1. Định nghĩa:**
Hàm phân phối xác suất đồng thời của vectơ ngẫu nhiên $(X, Y)$, ký hiệu $F(x, y)$, được định nghĩa bởi:
$$F(x, y) = P(X < x, Y < y)$$

**2. Các tính chất cơ bản:**
- $0 \\le F(x, y) \\le 1$ với mọi $(x, y) \\in \\mathbb{R}^2$.
- $F(x, y)$ là hàm không giảm theo từng biến $x$ và $y$.
- Giới hạn tại vô cực:
$$F(-\\infty, y) = 0, \\quad F(x, -\\infty) = 0, \\quad F(+\\infty, +\\infty) = 1$$
- Mối liên hệ với các hàm phân phối biên:
$$F_X(x) = F(x, +\\infty), \\quad F_Y(y) = F(+\\infty, y)$$`
      },
      {
        id: "3.4",
        title: "4. Đặc trưng của hàm phân phối đồng thời",
        content: `**1. Hiệp phương sai (Covariance):**
Ký hiệu là $Cov(X, Y)$, được định nghĩa bởi:
$$Cov(X, Y) = E\\left[(X - E[X])(Y - E[Y])\\right] = E[XY] - E[X] \\cdot E[Y]$$
trong đó kỳ vọng của tích $XY$ được tính theo công thức:
$$E[XY] = \\sum_{i=1}^n \\sum_{j=1}^m x_i y_j p_{ij}$$

**2. Hệ số tương quan (Correlation Coefficient):**
$$\\rho(X, Y) = \\rho_{XY} = \\dfrac{Cov(X, Y)}{\\sqrt{D[X] \\cdot D[Y]}} = \\dfrac{Cov(X, Y)}{\\sigma_X \\cdot \\sigma_Y}$$

**Tính chất:**
- $|\\rho_{XY}| \\le 1 \\iff -1 \\le \\rho_{XY} \\le 1$.
- Nếu $X, Y$ độc lập thì $Cov(X, Y) = 0$ và $\\rho_{XY} = 0$.`
      },
      {
        id: "3.5",
        title: "5. Xác suất điều kiện và kỳ vọng điều kiện",
        content: `**1. Phân phối xác suất có điều kiện (biến rời rạc):**
Phân phối của $Y$ với điều kiện $X = x_i$ (khi $P(X = x_i) > 0$):
$$P(Y = y_j \\mid X = x_i) = \\dfrac{p_{ij}}{P(X = x_i)} = \\dfrac{p_{ij}}{p_{i\\bullet}}$$

Tương tự, phân phối của $X$ với điều kiện $Y = y_j$ (khi $P(Y = y_j) > 0$):
$$P(X = x_i \\mid Y = y_j) = \\dfrac{p_{ij}}{P(Y = y_j)} = \\dfrac{p_{ij}}{p_{\\bullet j}}$$

**2. Kỳ vọng có điều kiện:**
- Kỳ vọng của $Y$ với điều kiện $X = x_i$:
$$E(Y \\mid X = x_i) = \\sum_{j=1}^m y_j \\cdot P(Y = y_j \\mid X = x_i) = \\sum_{j=1}^m y_j \\cdot \\dfrac{p_{ij}}{p_{i\\bullet}}$$
- Kỳ vọng của $X$ với điều kiện $Y = y_j$:
$$E(X \\mid Y = y_j) = \\sum_{i=1}^n x_i \\cdot P(X = x_i \\mid Y = y_j) = \\sum_{i=1}^n x_i \\cdot \\dfrac{p_{ij}}{p_{\\bullet j}}$$`
      }
    ]
  },
  {
    id: "chuong-4",
    title: "Chương IV: Thống Kê và Ước Lượng Khoảng",
    shortTitle: "Chương IV: Ước Lượng Khoảng",
    pointsBadge: "4 điểm",
    description: "Trọng số 4 điểm bài thi. Ước lượng khoảng tin cậy đối xứng và một phía cho Trung bình (TB), Tỷ lệ (TL), Phương sai (PS) và xác định cỡ mẫu tối thiểu.",
    badge: "4 điểm",
    sections: [
      {
        id: "4.1",
        title: "1. Thống kê mô tả & Tham số mẫu",
        content: `Cho mẫu số liệu quan sát kích thước $n$: $(x_1, x_2, \\dots, x_n)$ hoặc dưới dạng bảng phân bố tần số $(x_i, n_i)$ với $\\sum_{i=1}^k n_i = n$.

**1. Trung bình mẫu:**
$$\\overline{x} = \\dfrac{1}{n} \\sum_{i=1}^k n_i x_i$$

**2. Phương sai mẫu có hiệu chỉnh:**
$$s^2 = \\dfrac{1}{n-1} \\sum_{i=1}^k n_i (x_i - \\overline{x})^2 \\quad \\left(\\text{hoặc ký hiệu } s'^2 = \\dfrac{n}{n-1} s_0^2\\right)$$
Độ lệch chuẩn mẫu hiệu chỉnh:
$$s = \\sqrt{s^2} \\quad (\\text{hoặc } s' = \\sqrt{s'^2})$$

**3. Tỷ lệ mẫu (Tần suất mẫu):**
$$f = \\dfrac{k}{n}$$
(với $k$ là số phần tử có tính chất cần nghiên cứu trong mẫu).`
      },
      {
        id: "4.2",
        title: "2. Ước lượng khoảng cho Trung bình (TB)",
        content: `Tìm khoảng tin cậy cho kỳ vọng tổng thể $\\mu = E[X]$ với độ tin cậy $\\beta = 1 - \\alpha$.

**1. Khoảng tin cậy đối xứng:**
- **Trường hợp 1: Đã biết phương sai tổng thể $\\sigma^2$ (tổng thể $N(\\mu, \\sigma^2)$):**
$$(\\mu_1, \\mu_2) = \\left( \\overline{x} - u_{\\alpha/2} \\dfrac{\\sigma}{\\sqrt{n}}, \\; \\overline{x} + u_{\\alpha/2} \\dfrac{\\sigma}{\\sqrt{n}} \\right)$$
- **Trường hợp 2: Chưa biết $\\sigma^2$, mẫu lớn ($n \\ge 30$):**
Xấp xỉ $\\sigma \\approx s$:
$$(\\mu_1, \\mu_2) = \\left( \\overline{x} - u_{\\alpha/2} \\dfrac{s}{\\sqrt{n}}, \\; \\overline{x} + u_{\\alpha/2} \\dfrac{s}{\\sqrt{n}} \\right)$$
- **Trường hợp 3: Chưa biết $\\sigma^2$, mẫu nhỏ ($n < 30$), tổng thể chuẩn:**
Sử dụng phân phối Student với $n - 1$ bậc tự do:
$$(\\mu_1, \\mu_2) = \\left( \\overline{x} - t_{(n-1, \\alpha/2)} \\dfrac{s}{\\sqrt{n}}, \\; \\overline{x} + t_{(n-1, \\alpha/2)} \\dfrac{s}{\\sqrt{n}} \\right)$$

**2. Khoảng tin cậy một phía (Giáo trình trang 276):**
- **Khoảng tin cậy bên trái (Ước lượng giá trị tối đa của $\\mu$):**
$$\\mu \\le \\overline{x} + u_\\alpha \\dfrac{s}{\\sqrt{n}} \\iff \\mu \\in \\left( -\\infty, \\; \\overline{x} + u_\\alpha \\dfrac{s}{\\sqrt{n}} \\right)$$
- **Khoảng tin cậy bên phải (Ước lượng giá trị tối thiểu của $\\mu$):**
$$\\mu \\ge \\overline{x} - u_\\alpha \\dfrac{s}{\\sqrt{n}} \\iff \\mu \\in \\left( \\overline{x} - u_\\alpha \\dfrac{s}{\\sqrt{n}}, \\; +\\infty \\right)$$
*(Khi $n < 30$ chưa biết $\\sigma$, thay $u_\\alpha$ bằng $t_{(n-1, \\alpha)}$)*.`
      },
      {
        id: "4.3",
        title: "3. Ước lượng khoảng cho Tỷ lệ (TL)",
        content: `Ước lượng xác suất $p$ của một đặc tính trong tổng thể.
Mẫu quan sát cỡ $n$, có $k$ phần tử mang đặc tính đó $\\implies f = \\dfrac{k}{n}$.
Điều kiện xấp xỉ chuẩn: $nf > 10, \\; n(1-f) > 10$.

**1. Khoảng tin cậy đối xứng:**
$$(p_1, p_2) = \\left( f - u_{\\alpha/2} \\sqrt{\\dfrac{f(1-f)}{n}}, \\; f + u_{\\alpha/2} \\sqrt{\\dfrac{f(1-f)}{n}} \\right)$$
Độ chính xác ước lượng:
$$\\varepsilon = u_{\\alpha/2} \\sqrt{\\dfrac{f(1-f)}{n}}$$

**2. Khoảng tin cậy một phía (Giáo trình trang 282):**
- **Khoảng bên trái (Ước lượng tỷ lệ tối đa):**
$$p \\in \\left[ 0, \\; f + u_\\alpha \\sqrt{\\dfrac{f(1-f)}{n}} \\right]$$
- **Khoảng bên phải (Ước lượng tỷ lệ tối thiểu):**
$$p \\in \\left[ f - u_\\alpha \\sqrt{\\dfrac{f(1-f)}{n}}, \\; 1 \\right]$$

**3. Bài toán xác định cỡ mẫu tối thiểu:**
Để sai số ước lượng tỷ lệ không vượt quá $\\varepsilon_0$:
$$n \\ge \\dfrac{u_{\\alpha/2}^2 \\cdot f(1-f)}{\\varepsilon_0^2}$$
*(Nếu chưa biết $f$, dùng cận an toàn tối đa $f(1-f) \\le 0{,}25$)*.`
      },
      {
        id: "4.4",
        title: "4. Ước lượng khoảng cho Phương sai (PS)",
        content: `Ước lượng phương sai $\\sigma^2$ của tổng thể chuẩn $N(\\mu, \\sigma^2)$ với độ tin cậy $1 - \\alpha$.

**Trường hợp $\\mu$ chưa biết (Dùng phương sai mẫu hiệu chỉnh $s^2$):**
Đại lượng thống kê:
$$\\dfrac{(n-1)s^2}{\\sigma^2} \\sim \\chi^2(n-1)$$

Khoảng tin cậy đối xứng cho $\\sigma^2$ (Giáo trình trang 290):
$$\\sigma^2 \\in \\left[ \\dfrac{(n-1)s^2}{\\chi^2_{n-1}(1 - \\alpha/2)}, \\; \\dfrac{(n-1)s^2}{\\chi^2_{n-1}(\\alpha/2)} \\right]$$
*(Hoặc ký hiệu theo bảng tra phân vị đuôi phải: $\\left[ \\dfrac{(n-1)s'^2}{\\chi^2_{\\alpha/2}(n-1)}, \\; \\dfrac{(n-1)s'^2}{\\chi^2_{1-\\alpha/2}(n-1)} \\right]$)*.

Khoảng tin cậy cho độ lệch chuẩn $\\sigma$:
$$\\sigma \\in \\left[ \\sqrt{\\dfrac{(n-1)s^2}{\\chi^2_{n-1}(1 - \\alpha/2)}}, \\; \\sqrt{\\dfrac{(n-1)s^2}{\\chi^2_{n-1}(\\alpha/2)}} \\right]$$`
      }
    ]
  },
  {
    id: "chuong-5",
    title: "Chương V: Kiểm Định Giả Thuyết",
    shortTitle: "Chương V: Kiểm Định Giả Thuyết",
    pointsBadge: "1 điểm",
    description: "Quy trình 5 bước kiểm định chuẩn mực. Kiểm định trung bình (KĐTB) và kiểm định tỷ lệ (KĐTL) với đầy đủ bài toán hai phía và một phía.",
    badge: "1 điểm",
    sections: [
      {
        id: "5.1",
        title: "1. Quy trình 5 bước kiểm định chuẩn",
        content: `**5 bước làm bài kiểm định giả thuyết thống kê:**

1. **Bước 1: Đặt giả thiết và đối thiết:**
   - Giả thiết: $H: \\theta = \\theta_0$ (hoặc ký hiệu $H_0$).
   - Đối thiết $K$ (hoặc ký hiệu $H_1$):
     - Hai phía: $K: \\theta \\ne \\theta_0$.
     - Một phía phải: $K: \\theta > \\theta_0$.
     - Một phía trái: $K: \\theta < \\theta_0$.
2. **Bước 2: Chọn tiêu chuẩn kiểm định:**
   Nêu rõ thống kê kiểm định $t$ (hoặc $Z, T$) và xác định phân phối của nó khi $H$ đúng.
3. **Bước 3: Xác định miền bác bỏ $W_\\alpha$:**
   Tra bảng phân vị tới hạn theo mức ý nghĩa $\\alpha$.
4. **Bước 4: Tính giá trị quan sát $t_{qs}$:**
   Thay các số liệu từ mẫu vào công thức tiêu chuẩn kiểm định.
5. **Bước 5: Kết luận:**
   - Nếu $t_{qs} \\in W_\\alpha \\implies$ Bác bỏ $H$, chấp nhận $K$.
   - Nếu $t_{qs} \\notin W_\\alpha \\implies$ Chưa có cơ sở bác bỏ $H$ (chấp nhận $H$).`
      },
      {
        id: "5.2",
        title: "2. Kiểm định trung bình (KĐTB)",
        content: `Bài toán kiểm định giả thiết $H: \\mu = \\mu_0$.

**1. Trường hợp $\\sigma^2$ đã biết hoặc mẫu lớn ($n \\ge 30$):**
Thống kê kiểm định:
$$t = \\dfrac{\\overline{x} - \\mu_0}{\\dfrac{\\sigma}{\\sqrt{n}}} \\sim N(0, 1) \\quad \\left(\\text{nếu } \\sigma \\text{ chưa biết thì thay bằng } s\\right)$$
- **Bài toán hai phía ($K: \\mu \\ne \\mu_0$):** Miền bác bỏ:
$$W_\\alpha = \\{ |t| > u_{\\alpha/2} \\}$$
- **Bài toán một phía phải ($K: \\mu > \\mu_0$):** Miền bác bỏ:
$$W_\\alpha = \\{ t > u_\\alpha \\}$$
- **Bài toán một phía trái ($K: \\mu < \\mu_0$):** Miền bác bỏ:
$$W_\\alpha = \\{ t < -u_\\alpha \\}$$

**2. Trường hợp $\\sigma^2$ chưa biết và mẫu nhỏ ($n < 30$), tổng thể chuẩn:**
Thống kê kiểm định Student:
$$t = \\dfrac{\\overline{x} - \\mu_0}{\\dfrac{s}{\\sqrt{n}}} \\sim t(n-1)$$
- **Bài toán hai phía ($K: \\mu \\ne \\mu_0$):** Miền bác bỏ: $|t| > t_{(n-1, \\alpha/2)}$.
- **Bài toán một phía phải ($K: \\mu > \\mu_0$):** Miền bác bỏ: $t > t_{(n-1, \\alpha)}$.
- **Bài toán một phía trái ($K: \\mu < \\mu_0$):** Miền bác bỏ: $t < -t_{(n-1, \\alpha)}$.`
      },
      {
        id: "5.3",
        title: "3. Kiểm định tỷ lệ (KĐTL)",
        content: `Bài toán kiểm định tỷ lệ $H: p = p_0$.
Mẫu quan sát cỡ $n \\ge 30$, tần suất mẫu $f = \\dfrac{k}{n}$.
Điều kiện chuẩn hóa: $np_0 \\ge 5$ và $n(1 - p_0) \\ge 5$.

**Thống kê kiểm định:**
$$t = \\dfrac{f - p_0}{\\sqrt{\\dfrac{p_0(1 - p_0)}{n}}} = \\dfrac{f - p_0}{\\sqrt{p_0(1 - p_0)}} \\sqrt{n} \\sim N(0, 1)$$

**Quy tắc ra quyết định:**
- **Bài toán hai phía ($K: p \\ne p_0$):** Miền bác bỏ:
$$W_\\alpha = \\{ |t| > u_{\\alpha/2} \\}$$
- **Bài toán một phía phải ($K: p > p_0$):** Miền bác bỏ:
$$W_\\alpha = \\{ t > u_\\alpha \\}$$
- **Bài toán một phía trái ($K: p < p_0$):** Miền bác bỏ:
$$W_\\alpha = \\{ t < -u_\\alpha \\}$$

**Các giá trị phân vị chuẩn thông dụng:**
- $\\alpha = 5\\%: \\quad u_{\\alpha/2} = u_{0{,}025} = 1{,}96; \\quad u_\\alpha = u_{0{,}05} = 1{,}65$.
- $\\alpha = 1\\%: \\quad u_{\\alpha/2} = u_{0{,}005} = 2{,}58; \\quad u_\\alpha = u_{0{,}01} = 2{,}33$.
- $\\alpha = 10\\%: \\quad u_{\\alpha/2} = u_{0{,}05} = 1{,}65; \\quad u_\\alpha = u_{0{,}10} = 1{,}28$.`
      }
    ]
  }
];
