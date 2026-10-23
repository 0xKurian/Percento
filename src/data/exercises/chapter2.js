export const chapter2Exercises = [
  {
    id: "ex-2-01",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Biến ngẫu nhiên Rời rạc",
    difficulty: "Cơ bản",
    title: "Bài tập 1: Lập bảng phân phối xác suất và tính các tham số đặc trưng",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một biến ngẫu nhiên rời rạc $X$ có bảng phân phối xác suất như sau:
$$\\begin{array}{c|cccc}
X & -1 & 0 & 1 & 2 \\\\ \\hline
P & 0{,}1 & 2c & 0{,}3 & c
\\end{array}$$
a) Tìm hằng số $c$.
b) Tính kỳ vọng toán học $E(X)$.
c) Tính phương sai $Var(X)$ và độ lệch chuẩn $\\sigma(X)$.
d) Tính kỳ vọng của đại lượng $Y = 3X^2 - 2X + 1$.`,
    tips: "Tổng tất cả các xác suất trong bảng phân phối luôn bằng 1. Áp dụng công thức $Var(X) = E(X^2) - [E(X)]^2$ thay vì tính theo định nghĩa để tiết kiệm thời gian.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hằng số $c$",
        stepContent: `Tổng xác suất của toàn bộ không gian biến ngẫu nhiên phải bằng 1:
$$\\sum_{i} P(X = x_i) = 1 \\iff 0{,}1 + 2c + 0{,}3 + c = 1$$
$$3c + 0{,}4 = 1 \\implies 3c = 0{,}6 \\implies c = 0{,}2$$
Khi đó, $P(X=0) = 2(0{,}2) = 0{,}4$ và $P(X=2) = 0{,}2$.
Bảng phân phối xác suất hoàn chỉnh:
$$\\begin{array}{c|cccc}
X & -1 & 0 & 1 & 2 \\\\ \\hline
P & 0{,}1 & 0{,}4 & 0{,}3 & 0{,}2
\\end{array}$$`
      },
      {
        stepTitle: "Bước 2: Tính kỳ vọng toán $E(X)$",
        stepContent: `Áp dụng công thức định nghĩa kỳ vọng rời rạc:
$$E(X) = \\sum x_i p_i = (-1)(0{,}1) + 0(0{,}4) + 1(0{,}3) + 2(0{,}2)$$
$$E(X) = -0{,}1 + 0 + 0{,}3 + 0{,}4 = 0{,}6$$`
      },
      {
        stepTitle: "Bước 3: Tính phương sai $Var(X)$ và độ lệch chuẩn $\\sigma(X)$",
        stepContent: `Tính $E(X^2)$:
$$E(X^2) = \\sum x_i^2 p_i = (-1)^2(0{,}1) + 0^2(0{,}4) + 1^2(0{,}3) + 2^2(0{,}2)$$
$$E(X^2) = 1(0{,}1) + 0 + 1(0{,}3) + 4(0{,}2) = 0{,}1 + 0{,}3 + 0{,}8 = 1{,}2$$
Áp dụng công thức phương sai:
$$Var(X) = E(X^2) - [E(X)]^2 = 1{,}2 - (0{,}6)^2 = 1{,}2 - 0{,}36 = 0{,}84$$
Độ lệch chuẩn:
$$\\sigma(X) = \\sqrt{Var(X)} = \\sqrt{0{,}84} \\approx 0{,}9165$$`
      },
      {
        stepTitle: "Bước 4: Tính kỳ vọng của $Y = 3X^2 - 2X + 1$",
        stepContent: `Sử dụng tính chất tuyến tính của kỳ vọng toán học:
$$E(Y) = E(3X^2 - 2X + 1) = 3E(X^2) - 2E(X) + 1$$
Thay số $E(X^2) = 1{,}2$ và $E(X) = 0{,}6$:
$$E(Y) = 3(1{,}2) - 2(0{,}6) + 1 = 3{,}6 - 1{,}2 + 1 = 3{,}4$$`
      }
    ],
    finalAnswer: "a) c = 0,2 | b) E(X) = 0,6 | c) Var(X) = 0,84, sigma(X) approx 0,9165 | d) E(Y) = 3,4"
  },
  {
    id: "ex-2-02",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Biến ngẫu nhiên Rời rạc",
    difficulty: "Cơ bản",
    title: "Bài tập 2: Xác định hàm phân phối tích lũy F(x) của biến ngẫu nhiên rời rạc",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho biến ngẫu nhiên rời rạc $X$ có bảng phân phối xác suất:
$$\\begin{array}{c|cccc}
X & 1 & 2 & 4 & 5 \\\\ \\hline
P & 0{,}15 & 0{,}35 & 0{,}30 & 0{,}20
\\end{array}$$
a) Lập biểu thức hàm phân phối tích lũy $F(x) = P(X < x)$.
b) Dựa vào hàm $F(x)$, tính xác suất $P(1{,}5 < X \\le 4)$ và $P(X \\ge 3)$.`,
    tips: "Quy ước hàm phân phối trong giáo trình Việt Nam phổ biến là $F(x) = P(X < x)$ (liên tục trái). Chú ý khi tính xác suất trên nửa khoảng: $P(a \\le X < b) = F(b) - F(a)$.",
    steps: [
      {
        stepTitle: "Bước 1: Phân tích các khoảng giá trị của $x$",
        stepContent: `Biến $X$ nhận các giá trị $1, 2, 4, 5$. Hàm phân phối $F(x) = P(X < x)$ được định nghĩa trên từng khoảng:
- Khi $x \\le 1$: Không có giá trị nào của $X < x$, do đó $F(x) = 0$.
- Khi $1 < x \\le 2$: Chỉ có giá trị $X = 1 < x$, nên $F(x) = P(X=1) = 0{,}15$.
- Khi $2 < x \\le 4$: Có các giá trị $X \\in \\{1, 2\\} < x$, nên $F(x) = 0{,}15 + 0{,}35 = 0{,}50$.
- Khi $4 < x \\le 5$: Có các giá trị $X \\in \\{1, 2, 4\\} < x$, nên $F(x) = 0{,}50 + 0{,}30 = 0{,}80$.
- Khi $x > 5$: Tất cả giá trị đều nhỏ hơn $x$, nên $F(x) = 0{,}80 + 0{,}20 = 1{,}00$.`
      },
      {
        stepTitle: "Bước 2: Viết hàm phân phối $F(x)$ dạng hàm từng khúc",
        stepContent: `Biểu thức hoàn chỉnh của hàm phân phối tích lũy:
$$F(x) = \\begin{cases}
0 & \\text{khi } x \\le 1 \\\\
0{,}15 & \\text{khi } 1 < x \\le 2 \\\\
0{,}50 & \\text{khi } 2 < x \\le 4 \\\\
0{,}80 & \\text{khi } 4 < x \\le 5 \\\\
1 & \\text{khi } x > 5
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 3: Tính xác suất $P(1{,}5 < X \\le 4)$",
        stepContent: `Các giá trị của $X$ thỏa mãn $1{,}5 < X \\le 4$ là $X = 2$ và $X = 4$.
$$P(1{,}5 < X \\le 4) = P(X=2) + P(X=4) = 0{,}35 + 0{,}30 = 0{,}65$$
Hoặc tính thông qua giới hạn của hàm $F$:
$$P(1{,}5 < X \\le 4) = F(4^+) - F(1{,}5) = 0{,}80 - 0{,}15 = 0{,}65$$`
      },
      {
        stepTitle: "Bước 4: Tính xác suất $P(X \\ge 3)$",
        stepContent: `Sử dụng biến cố đối:
$$P(X \\ge 3) = 1 - P(X < 3) = 1 - F(3)$$
Do $3 \\in (2, 4]$, theo biểu thức của $F(x)$ ta có $F(3) = 0{,}50$.
$$P(X \\ge 3) = 1 - 0{,}50 = 0{,}50$$
Kiểm tra lại bằng trực tiếp: $P(X \\ge 3) = P(X=4) + P(X=5) = 0{,}30 + 0{,}20 = 0{,}50$.`
      }
    ],
    finalAnswer: "a) Biểu thức từng khúc như trên | b) P(1,5 < X <= 4) = 0,65 | P(X >= 3) = 0,50"
  },
  {
    id: "ex-2-03",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Nhị thức B(n, p)",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 3: Phân phối Nhị thức trong kiểm soát chất lượng linh kiện",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Tỷ lệ sản phẩm phế phẩm của một dây chuyền sản xuất tự động là $p = 0{,}05$. Một nhân viên KCS chọn ngẫu nhiên độc lập 10 sản phẩm từ lô hàng để kiểm tra.
a) Tính xác suất để trong 10 sản phẩm kiểm tra có đúng 2 phế phẩm.
b) Tính xác suất có không quá 1 phế phẩm.
c) Tính xác suất có ít nhất 2 phế phẩm.
d) Tính số lượng phế phẩm trung bình và độ lệch chuẩn của số phế phẩm trong mẫu.`,
    tips: "Gọi $X$ là số phế phẩm thì $X \\sim B(n, p)$. Với bài toán 'ít nhất 2', hãy chuyển sang biến cố đối $1 - P(X \\le 1) = 1 - [P(X=0) + P(X=1)]$.",
    steps: [
      {
        stepTitle: "Bước 1: Mô hình hóa bằng biến ngẫu nhiên",
        stepContent: `Gọi $X$ là số phế phẩm có trong 10 sản phẩm được lấy ra kiểm tra.
Mỗi sản phẩm kiểm tra độc lập và chỉ có hai khả năng: phế phẩm (xác suất $p = 0{,}05$) hoặc chính phẩm ($q = 1 - p = 0{,}95$).
Do đó $X$ tuân theo phân phối nhị thức:
$$X \\sim B(n = 10, p = 0{,}05)$$
Công thức xác suất:
$$P(X = k) = C_{10}^k (0{,}05)^k (0{,}95)^{10-k}, \\quad k \\in \\{0, 1, 2, \\dots, 10\\}$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Đúng 2 phế phẩm",
        stepContent: `Thay $k = 2$ vào công thức Bernoulli:
$$P(X = 2) = C_{10}^2 (0{,}05)^2 (0{,}95)^8 = 45 \\times 0{,}0025 \\times 0{,}66342 \\approx 0{,}0746$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Không quá 1 phế phẩm",
        stepContent: `Sự kiện 'không quá 1 phế phẩm' tương ứng với $X \\le 1 \\iff X \\in \\{0, 1\\}$:
$$P(X = 0) = C_{10}^0 (0{,}05)^0 (0{,}95)^{10} = 1 \\times 1 \\times 0{,}59874 \\approx 0{,}5987$$
$$P(X = 1) = C_{10}^1 (0{,}05)^1 (0{,}95)^9 = 10 \\times 0{,}05 \\times 0{,}63025 \\approx 0{,}3151$$
$$P(X \\le 1) = P(X = 0) + P(X = 1) = 0{,}5987 + 0{,}3151 = 0{,}9138$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Ít nhất 2 phế phẩm",
        stepContent: `Biến cố $X \\ge 2$ là biến cố đối của biến cố $X \\le 1$:
$$P(X \\ge 2) = 1 - P(X \\le 1) = 1 - 0{,}9138 = 0{,}0862$$`
      },
      {
        stepTitle: "Bước 5: Câu d - Kỳ vọng và độ lệch chuẩn",
        stepContent: `Áp dụng công thức đặc trưng của phân phối nhị thức:
$$E(X) = n p = 10 \\times 0{,}05 = 0{,}5 \\text{ phe pham}$$
$$Var(X) = n p (1 - p) = 10 \\times 0{,}05 \\times 0{,}95 = 0{,}475$$
$$\\sigma(X) = \\sqrt{Var(X)} = \\sqrt{0{,}475} \\approx 0{,}6892$$`
      }
    ],
    finalAnswer: "a) P(X=2) approx 0,0746 | b) P(X<=1) approx 0,9138 | c) P(X>=2) approx 0,0862 | d) E(X) = 0,5; sigma(X) approx 0,6892"
  },
  {
    id: "ex-2-04",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Nhị thức B(n, p)",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 4: Tìm số khả năng nhất (Mod) của phân phối Nhị thức",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một xạ thủ bắn 25 phát đạn vào bia một cách độc lập. Xác suất trúng đích ở mỗi phát bắn là $p = 0{,}72$.
a) Tìm số lần bắn trúng bia có khả năng xảy ra nhất ($k_0$).
b) Tính xác suất để xạ thủ bắn trúng đúng $k_0$ phát đó.
c) Nếu người đó muốn có số lần bắn trúng có khả năng nhất là 20 phát thì cần phải bắn bao nhiêu phát?`,
    tips: "Số khả năng nhất $k_0$ của phân phối $B(n, p)$ thỏa mãn bất đẳng thức: $(n+1)p - 1 \\le k_0 \\le (n+1)p$. Nếu khoảng chứa 2 số nguyên thì cả 2 đều là mode.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập bất đẳng thức tìm $k_0$",
        stepContent: `Gọi $X$ là số phát bắn trúng trong 25 phát bắn độc lập.
$$X \\sim B(n = 25, p = 0{,}72)$$
Số lần bắn trúng có khả năng xảy ra nhiều nhất $k_0$ thỏa mãn:
$$(n + 1)p - 1 \\le k_0 \\le (n + 1)p$$`
      },
      {
        stepTitle: "Bước 2: Giải bất đẳng thức tìm $k_0$",
        stepContent: `Tính các giá trị biên:
$$(n + 1)p = (25 + 1) \\times 0{,}72 = 26 \\times 0{,}72 = 18{,}72$$
$$(n + 1)p - 1 = 18{,}72 - 1 = 17{,}72$$
Do đó:
$$17{,}72 \\le k_0 \\le 18{,}72$$
Vì $k_0 \\in \\mathbb{Z}$, nên giá trị nguyên duy nhất trong đoạn này là:
$$k_0 = 18$$`
      },
      {
        stepTitle: "Bước 3: Tính xác suất $P(X = k_0)$",
        stepContent: `Thay $k = 18$ vào công thức phân phối nhị thức:
$$P(X = 18) = C_{25}^{18} (0{,}72)^{18} (0{,}28)^7$$
Tính giá trị:
$$C_{25}^{18} = C_{25}^7 = \\frac{25!}{7! 18!} = 480700$$
$$(0{,}72)^{18} \\approx 0{,}002715, \\quad (0{,}28)^7 \\approx 0{,}0001349$$
$$P(X = 18) \\approx 480700 \\times 0{,}002715 \\times 0{,}0001349 \\approx 0{,}1761$$`
      },
      {
        stepTitle: "Bước 4: Giải câu c - Tìm số phát bắn $n$ để $k_0 = 20$",
        stepContent: `Để $k_0 = 20$ là số có khả năng nhất:
$$(n + 1)(0{,}72) - 1 \\le 20 \\le (n + 1)(0{,}72)$$
Tách thành hệ bất phương trình:
$$\\begin{cases}
(n + 1)(0{,}72) \\le 21 \\\\
(n + 1)(0{,}72) \\ge 20
\\end{cases} \\iff \\begin{cases}
n + 1 \\le \\frac{21}{0{,}72} = 29{,}167 \\\\
n + 1 \\ge \\frac{20}{0{,}72} = 27{,}778
\\end{cases}$$
$$\\iff 26{,}78 \\le n \\le 28{,}17$$
Vì $n$ là số nguyên dương, nên $n \\in \\{27, 28\\}$.`
      }
    ],
    finalAnswer: "a) k_0 = 18 | b) P(X=18) approx 0,1761 | c) n in {27, 28} phát bắn"
  },
  {
    id: "ex-2-05",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Poisson P(λ)",
    difficulty: "Cơ bản",
    title: "Bài tập 5: Phân phối Poisson mô hình hóa lưu lượng cuộc gọi tổng đài",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Số lượng cuộc gọi đến một tổng đài hỗ trợ kỹ thuật tuân theo phân phối Poisson với cường độ trung bình 3 cuộc gọi mỗi phút.
a) Tính xác suất để trong một phút bất kỳ không có cuộc gọi nào đến.
b) Tính xác suất để trong một phút có đúng 4 cuộc gọi đến.
c) Tính xác suất để trong khoảng thời gian 2 phút có ít nhất 2 cuộc gọi đến.`,
    tips: "Nếu trong 1 phút có trung bình $\\lambda = 3$, thì trong khoảng thời gian $t = 2$ phút cường độ sẽ là $\\lambda' = 3 \\times 2 = 6$. Hãy chú ý điều chỉnh tham số theo khoảng thời gian.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định mô hình trong 1 phút",
        stepContent: `Gọi $X$ là số cuộc gọi đến tổng đài trong 1 phút.
Theo giả thiết, $X$ có phân phối Poisson với tham số $\\lambda = 3$:
$$X \\sim P(3)$$
Công thức tính xác suất:
$$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} = \\frac{3^k e^{-3}}{k!}, \\quad k = 0, 1, 2, \\dots$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Không có cuộc gọi nào ($k = 0$)",
        stepContent: `Thay $k = 0$:
$$P(X = 0) = \\frac{3^0 e^{-3}}{0!} = e^{-3} \\approx 0{,}0498$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Đúng 4 cuộc gọi ($k = 4$)",
        stepContent: `Thay $k = 4$:
$$P(X = 4) = \\frac{3^4 e^{-3}}{4!} = \\frac{81 e^{-3}}{24} = \\frac{27}{8} e^{-3} \\approx 3{,}375 \\times 0{,}0498 \\approx 0{,}1680$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Ít nhất 2 cuộc gọi trong 2 phút",
        stepContent: `Gọi $Y$ là số cuộc gọi đến trong khoảng thời gian $t = 2$ phút.
Tham số Poisson trong 2 phút tỷ lệ thuận với thời gian:
$$\\lambda_Y = 3 \\times 2 = 6 \\implies Y \\sim P(6)$$
Xác suất có ít nhất 2 cuộc gọi:
$$P(Y \\ge 2) = 1 - P(Y < 2) = 1 - [P(Y = 0) + P(Y = 1)]$$
Tính từng giá trị:
$$P(Y = 0) = \\frac{6^0 e^{-6}}{0!} = e^{-6} \\approx 0{,}00248$$
$$P(Y = 1) = \\frac{6^1 e^{-6}}{1!} = 6 e^{-6} \\approx 0{,}01487$$
$$P(Y \\ge 2) = 1 - (0{,}00248 + 0{,}01487) = 1 - 0{,}01735 = 0{,}9827$$`
      }
    ],
    finalAnswer: "a) P(X=0) approx 0,0498 | b) P(X=4) approx 0,1680 | c) P(Y>=2) approx 0,9827"
  },
  {
    id: "ex-2-06",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Poisson P(λ)",
    difficulty: "Nâng cao",
    title: "Bài tập 6: Xấp xỉ Poisson cho phân phối Nhị thức khi n lớn và p rất nhỏ",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một công ty bảo hiểm ký hợp đồng bảo hiểm xe máy cho $n = 2000$ người dân. Xác suất để một người được bảo hiểm gặp tai nạn phải bồi thường trong một năm là $p = 0{,}0015$. Các tai nạn xảy ra độc lập.
a) Tính xác suất để trong năm đó công ty phải bồi thường cho đúng 3 người.
b) Tính xác suất để công ty phải bồi thường cho nhiều hơn 4 người.
c) Đánh giá sai số khi dùng phân phối Poisson so với công thức nhị thức chính xác.`,
    tips: "Điều kiện áp dụng luật số hiếm Poisson: $n \\ge 100$, $p \\le 0{,}01$, tích $\\lambda = np < 10$. Ở đây $n=2000, p=0{,}0015 \\implies \\lambda = 3 < 10$, rất thích hợp để xấp xỉ.",
    steps: [
      {
        stepTitle: "Bước 1: Kiểm tra điều kiện xấp xỉ Poisson",
        stepContent: `Gọi $X$ là số người gặp tai nạn trong năm: $X \\sim B(2000, 0{,}0015)$.
Vì $n = 2000$ rất lớn và $p = 0{,}0015$ rất nhỏ, ta dùng xấp xỉ Poisson với:
$$\\lambda = n p = 2000 \\times 0{,}0015 = 3$$
Do đó $X \\approx P(3)$, với:
$$P(X = k) \\approx \\frac{3^k e^{-3}}{k!}$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Đúng 3 vụ bồi thường",
        stepContent: `Áp dụng công thức Poisson với $k = 3$:
$$P(X = 3) \\approx \\frac{3^3 e^{-3}}{3!} = \\frac{27 e^{-3}}{6} = 4{,}5 e^{-3} \\approx 4{,}5 \\times 0{,}049787 \\approx 0{,}2240$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Nhiều hơn 4 vụ bồi thường",
        stepContent: `Tính biến cố đối:
$$P(X > 4) = 1 - P(X \\le 4) = 1 - \\sum_{k=0}^4 \\frac{3^k e^{-3}}{k!}$$
$$= 1 - e^{-3} \\left( 1 + 3 + \\frac{9}{2} + \\frac{27}{6} + \\frac{81}{24} \\right) = 1 - e^{-3} \\left( 1 + 3 + 4{,}5 + 4{,}5 + 3{,}375 \\right)$$
$$= 1 - e^{-3} (16{,}375) \\approx 1 - (0{,}049787 \\times 16{,}375) = 1 - 0{,}8153 = 0{,}1847$$`
      },
      {
        stepTitle: "Bước 4: Đánh giá sai số so với công thức nhị thức chuẩn",
        stepContent: `Tính chính xác theo công thức Bernoulli:
$$P_{nhithuc}(X=3) = C_{2000}^3 (0{,}0015)^3 (0{,}9985)^{1997} \\approx 0{,}2243$$
Độ chênh lệch tuyệt đối:
$$|0{,}2240 - 0{,}2243| = 0{,}0003 < 0{,}001$$
Xấp xỉ Poisson đạt độ chính xác rất cao và giảm tải phép tính lũy thừa bậc 2000.`
      }
    ],
    finalAnswer: "a) P(X=3) approx 0,2240 | b) P(X>4) approx 0,1847 | Sai số < 0,0003"
  },
  {
    id: "ex-2-07",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Siêu bội (Hypergeometric)",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 7: Phân phối Siêu bội khi chọn mẫu không hoàn lại",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một hộp gồm 12 quả bóng bàn, trong đó có 4 quả màu vàng và 8 quả màu trắng. Người ta lấy ngẫu nhiên đồng thời (không hoàn lại) 3 quả bóng từ hộp.
a) Lập bảng phân phối xác suất cho số quả bóng vàng được lấy ra ($X$).
b) Tính kỳ vọng $E(X)$ và phương sai $Var(X)$.
c) So sánh với trường hợp lấy có hoàn lại từng quả một.`,
    tips: "Lấy không hoàn lại tương ứng phân phối Siêu bội $H(N, M, n)$ với $N=12, M=4, n=3$. Công thức: $P(X=k) = \\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định tập giá trị của $X$",
        stepContent: `Gọi $X$ là số quả bóng vàng lấy được trong 3 quả.
Hộp có $N = 12$ quả (trong đó $M = 4$ vàng, $N-M = 8$ trắng). Lấy ra $n = 3$ quả.
Số bóng vàng tối đa có thể lấy là $\\min(n, M) = 3$.
Số bóng vàng tối thiểu là $\\max(0, n - (N-M)) = \\max(0, 3-8) = 0$.
Vậy $X \\in \\{0, 1, 2, 3\\}$.`
      },
      {
        stepTitle: "Bước 2: Tính xác suất từng giá trị",
        stepContent: `Số cách lấy 3 quả từ 12 quả:
$$C_{12}^3 = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = 220$$
Tính xác suất theo công thức siêu bội:
$$P(X = 0) = \\frac{C_4^0 C_8^3}{220} = \\frac{1 \\times 56}{220} = \\frac{14}{55} \\approx 0{,}2545$$
$$P(X = 1) = \\frac{C_4^1 C_8^2}{220} = \\frac{4 \\times 28}{220} = \\frac{112}{220} = \\frac{28}{55} \\approx 0{,}5091$$
$$P(X = 2) = \\frac{C_4^2 C_8^1}{220} = \\frac{6 \\times 8}{220} = \\frac{48}{220} = \\frac{12}{55} \\approx 0{,}2182$$
$$P(X = 3) = \\frac{C_4^3 C_8^0}{220} = \\frac{4 \\times 1}{220} = \\frac{4}{220} = \\frac{1}{55} \\approx 0{,}0182$$
Tổng kiểm tra: $\\frac{14+28+12+1}{55} = \\frac{55}{55} = 1$.`
      },
      {
        stepTitle: "Bước 3: Tính kỳ vọng và phương sai của $X$",
        stepContent: `Công thức đặc trưng của phân phối siêu bội:
$$E(X) = n \\frac{M}{N} = 3 \\times \\frac{4}{12} = 3 \\times \\frac{1}{3} = 1$$
$$Var(X) = n \\frac{M}{N} \\left(1 - \\frac{M}{N}\\right) \\frac{N - n}{N - 1}$$
Thay số với $p = \\frac{M}{N} = \\frac{1}{3}$:
$$Var(X) = 3 \\times \\frac{1}{3} \\times \\frac{2}{3} \\times \\frac{12 - 3}{12 - 1} = \\frac{2}{3} \\times \\frac{9}{11} = \\frac{6}{11} \\approx 0{,}5455$$`
      },
      {
        stepTitle: "Bước 4: So sánh với lấy mẫu có hoàn lại",
        stepContent: `Nếu lấy có hoàn lại, số bóng vàng $Y \\sim B(3, 1/3)$:
$$E(Y) = n p = 1$$
$$Var(Y) = n p (1-p) = 3 \\times \\frac{1}{3} \\times \\frac{2}{3} = \\frac{2}{3} \\approx 0{,}6667$$
Nhận xét: Kỳ vọng bằng nhau, nhưng phương sai của lấy không hoàn lại nhỏ hơn lấy có hoàn lại bởi hệ số hiệu chỉnh tổng thể hữu hạn $\\frac{N-n}{N-1} = \\frac{9}{11} < 1$.`
      }
    ],
    finalAnswer: "a) P(0)=14/55; P(1)=28/55; P(2)=12/55; P(3)=1/55 | b) E(X) = 1; Var(X) = 6/11 approx 0,5455"
  },
  {
    id: "ex-2-08",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Hình học (Geometric)",
    difficulty: "Cơ bản",
    title: "Bài tập 8: Phân phối Hình học - Thời gian chờ thành công đầu tiên",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một thiết bị khoan dầu thăm dò ở một vùng đất mới có xác suất phát hiện mỏ dầu ở mỗi lần khoan là $p = 0{,}2$. Các lần khoan hoàn toàn độc lập. Quá trình khoan dừng lại ngay khi phát hiện được mỏ dầu đầu tiên.
a) Gọi $X$ là số lần khoan cần thiết cho đến khi tìm thấy mỏ dầu đầu tiên. Nêu phân phối xác suất của $X$.
b) Tính xác suất mỏ dầu được tìm thấy ở lần khoan thứ 4.
c) Tính xác suất cần khoan nhiều hơn 3 lần.
d) Trung bình cần thực hiện bao nhiêu lần khoan?`,
    tips: "Phân phối Hình học $G(p)$: $P(X = k) = (1-p)^{k-1} p$. Xác suất $P(X > k) = (1-p)^k$ (nghĩa là $k$ lần đầu đều thất bại).",
    steps: [
      {
        stepTitle: "Bước 1: Xác định phân phối của $X$",
        stepContent: `Biến ngẫu nhiên $X$ đếm số phép thử độc lập cho đến khi đạt được thành công đầu tiên.
Do đó $X$ tuân theo phân phối hình học:
$$X \\sim G(p = 0{,}2)$$
Hàm xác suất:
$$P(X = k) = (1 - p)^{k-1} p = (0{,}8)^{k-1} (0{,}2), \\quad k = 1, 2, 3, \\dots$$`
      },
      {
        stepTitle: "Bước 2: Câu b - Mỏ dầu được tìm thấy ở lần khoan thứ 4",
        stepContent: `Thay $k = 4$ vào công thức:
$$P(X = 4) = (0{,}8)^3 \\times 0{,}2 = 0{,}512 \\times 0{,}2 = 0{,}1024$$`
      },
      {
        stepTitle: "Bước 3: Câu c - Cần khoan nhiều hơn 3 lần",
        stepContent: `Sự kiện cần khoan nhiều hơn 3 lần ($X > 3$) đồng nghĩa với việc cả 3 lần khoan đầu tiên đều không tìm thấy mỏ dầu:
$$P(X > 3) = (1 - p)^3 = (0{,}8)^3 = 0{,}512$$
Hoặc tính qua biến cố đối:
$$P(X > 3) = 1 - [P(X=1) + P(X=2) + P(X=3)]$$
$$= 1 - [0{,}2 + 0{,}16 + 0{,}128] = 1 - 0{,}488 = 0{,}512$$`
      },
      {
        stepTitle: "Bước 4: Câu d - Số lần khoan trung bình",
        stepContent: `Kỳ vọng toán học của phân phối hình học:
$$E(X) = \\frac{1}{p} = \\frac{1}{0{,}2} = 5$$ (lần khoan)
Phương sai:
$$Var(X) = \\frac{1 - p}{p^2} = \\frac{0{,}8}{0{,}04} = 20$$`
      }
    ],
    finalAnswer: "a) X ~ G(0,2) | b) P(X=4) = 0,1024 | c) P(X>3) = 0,5120 | d) E(X) = 5 lần khoan"
  },
  {
    id: "ex-2-09",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Biến ngẫu nhiên Liên tục",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 9: Xác định hằng số chuẩn hóa và hàm phân phối tích lũy F(x)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho biến ngẫu nhiên liên tục $X$ có hàm mật độ xác suất:
$$f(x) = \\begin{cases}
k (4 - x^2) & \\text{khi } 0 \\le x \\le 2 \\\\
0 & \\text{khi } x \\notin [0, 2]
\\end{cases}$$
a) Xác định hằng số chuẩn hóa $k$.
b) Tìm hàm phân phối xác suất tích lũy $F(x)$.
c) Tính xác suất $P(1 \\le X \\le 1{,}5)$.`,
    tips: "Điều kiện chuẩn hóa hàm mật độ: $\\int_{-\\infty}^{+\\infty} f(x)dx = 1$. Hàm phân phối liên tục xác định bởi tích phân $F(x) = \\int_{-\\infty}^x f(t)dt$.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hằng số chuẩn hóa $k$",
        stepContent: `Để $f(x)$ là hàm mật độ xác suất, ta phải có $f(x) \\ge 0$ và:
$$\\int_{-\\infty}^{+\\infty} f(x) dx = 1 \\iff \\int_0^2 k(4 - x^2) dx = 1$$
Tính tích phân xác định:
$$\\int_0^2 (4 - x^2) dx = \\left[ 4x - \\frac{x^3}{3} \\right]_0^2 = \\left( 8 - \\frac{8}{3} \\right) - 0 = \\frac{16}{3}$$
Suy ra:
$$k \\times \\frac{16}{3} = 1 \\implies k = \\frac{3}{16}$$
Vì với $x \\in [0, 2]$, $4 - x^2 \\ge 0$ nên $f(x) \\ge 0$, thỏa mãn điều kiện hàm mật độ.`
      },
      {
        stepTitle: "Bước 2: Tìm hàm phân phối xác suất tích lũy $F(x)$",
        stepContent: `Hàm phân phối xác suất $F(x) = \\int_{-\\infty}^x f(t)dt$:
- Với $x < 0$: $F(x) = \\int_{-\\infty}^x 0 dt = 0$.
- Với $0 \\le x \\le 2$:
$$F(x) = \\int_0^x \\frac{3}{16}(4 - t^2) dt = \\frac{3}{16} \\left[ 4t - \\frac{t^3}{3} \\right]_0^x = \\frac{3}{16}\\left(4x - \\frac{x^3}{3}\\right) = \\frac{12x - x^3}{16}$$
- Với $x > 2$:
$$F(x) = \\int_0^2 f(t)dt = 1$$
Vậy biểu thức của $F(x)$:
$$F(x) = \\begin{cases}
0 & \\text{khi } x < 0 \\\\
\\frac{12x - x^3}{16} & \\text{khi } 0 \\le x \\le 2 \\\\
1 & \\text{khi } x > 2
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 3: Tính xác suất $P(1 \\le X \\le 1{,}5)$",
        stepContent: `Áp dụng tính chất hàm phân phối:
$$P(1 \\le X \\le 1{,}5) = F(1{,}5) - F(1)$$
Tính giá trị:
$$F(1{,}5) = \\frac{12(1{,}5) - (1{,}5)^3}{16} = \\frac{18 - 3{,}375}{16} = \\frac{14{,}625}{16} \\approx 0{,}9141$$
$$F(1) = \\frac{12(1) - 1^3}{16} = \\frac{11}{16} = 0{,}6875$$
Do đó:
$$P(1 \\le X \\le 1{,}5) = 0{,}9141 - 0{,}6875 = 0{,}2266$$`
      }
    ],
    finalAnswer: "a) k = 3/16 | b) F(x) = (12x - x^3)/16 với x in [0,2] | c) P(1 <= X <= 1,5) = 29/128 approx 0,2266"
  },
  {
    id: "ex-2-10",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Biến ngẫu nhiên Liên tục",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 10: Tính Kỳ vọng, Phương sai và Trung vị của BNN liên tục",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho biến ngẫu nhiên liên tục $X$ có hàm mật độ xác suất:
$$f(x) = \\begin{cases}
2x & \\text{khi } 0 \\le x \\le 1 \\\\
0 & \\text{khi } x \\notin [0, 1]
\\end{cases}$$
a) Tính kỳ vọng toán $E(X)$.
b) Tính phương sai $Var(X)$ và độ lệch chuẩn $\\sigma(X)$.
c) Tìm trung vị $Med(X)$ và xác suất $P(X > Med(X))$.`,
    tips: "Trung vị $Med(X)$ là giá trị $m$ sao cho $F(m) = \\int_{-\\infty}^m f(x)dx = 0{,}5$. Lưu ý với BNN liên tục, $P(X=a) = 0$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính kỳ vọng toán $E(X)$",
        stepContent: `Áp dụng công thức định nghĩa kỳ vọng của BNN liên tục:
$$E(X) = \\int_{-\\infty}^{+\\infty} x f(x) dx = \\int_0^1 x (2x) dx = \\int_0^1 2x^2 dx$$
$$E(X) = \\left[ \\frac{2x^3}{3} \\right]_0^1 = \\frac{2}{3} \\approx 0{,}6667$$`
      },
      {
        stepTitle: "Bước 2: Tính $E(X^2)$ và phương sai $Var(X)$",
        stepContent: `Tính mômen bậc 2:
$$E(X^2) = \\int_{-\\infty}^{+\\infty} x^2 f(x) dx = \\int_0^1 x^2 (2x) dx = \\int_0^1 2x^3 dx$$
$$E(X^2) = \\left[ \\frac{2x^4}{4} \\right]_0^1 = \\left[ \\frac{x^4}{2} \\right]_0^1 = \\frac{1}{2} = 0{,}5$$
Áp dụng công thức phương sai:
$$Var(X) = E(X^2) - [E(X)]^2 = \\frac{1}{2} - \\left(\\frac{2}{3}\\right)^2 = \\frac{1}{2} - \\frac{4}{9} = \\frac{1}{18} \\approx 0{,}0556$$
Độ lệch chuẩn:
$$\\sigma(X) = \\sqrt{Var(X)} = \\sqrt{\\frac{1}{18}} = \\frac{1}{3\\sqrt{2}} \\approx 0{,}2357$$`
      },
      {
        stepTitle: "Bước 3: Tìm trung vị $m = Med(X)$",
        stepContent: `Trung vị $m$ thỏa mãn phương trình:
$$F(m) = \\int_0^m 2x dx = 0{,}5$$
$$\\left[ x^2 \\right]_0^m = 0{,}5 \\implies m^2 = 0{,}5$$
Vì $m \\in [0, 1]$ nên ta chọn nghiệm dương:
$$m = \\sqrt{0{,}5} = \\frac{\\sqrt{2}}{2} \\approx 0{,}7071$$
Do đó $Med(X) = \\frac{\\sqrt{2}}{2}$.
Theo định nghĩa trung vị: $P(X > Med(X)) = 1 - 0{,}5 = 0{,}5$.`
      }
    ],
    finalAnswer: "a) E(X) = 2/3 | b) Var(X) = 1/18 approx 0,0556; sigma(X) approx 0,2357 | c) Med(X) = sqrt(2)/2 approx 0,7071"
  },
  {
    id: "ex-2-11",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Đều U(a, b)",
    difficulty: "Cơ bản",
    title: "Bài tập 11: Phân phối Đều mô hình hóa thời gian chờ xe buýt",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Xe buýt tuyến số 02 cứ cách 15 phút lại có một chuyến đến trạm. Một hành khách đến trạm xe buýt vào một thời điểm hoàn toàn ngẫu nhiên.
a) Gọi $X$ là thời gian hành khách phải chờ xe buýt (đơn vị: phút). Xác định phân phối của $X$ và viết hàm mật độ xác suất $f(x)$.
b) Tính thời gian chờ đợi trung bình và độ lệch chuẩn của thời gian chờ.
c) Tính xác suất để hành khách phải chờ từ 5 đến 10 phút.
d) Biết rằng hành khách đã chờ được 5 phút mà xe chưa đến, tính xác suất người đó phải chờ thêm ít nhất 5 phút nữa.`,
    tips: "Phân phối đều $U(a, b)$ có hàm mật độ $f(x) = \\frac{1}{b-a}$ trên $[a, b]$. Lưu ý ở câu d là bài toán xác suất có điều kiện: $P(X \\ge 10 \\mid X > 5)$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định phân phối của $X$",
        stepContent: `Thời gian chờ $X$ phân phối đều trong khoảng từ 0 đến 15 phút:
$$X \\sim U(0, 15)$$
Hàm mật độ xác suất:
$$f(x) = \\begin{cases}
\\frac{1}{15 - 0} = \\frac{1}{15} & \\text{khi } 0 \\le x \\le 15 \\\\
0 & \\text{khi } x < 0 \\text{ hay } x > 15
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Câu b - Thời gian chờ trung bình và độ lệch chuẩn",
        stepContent: `Kỳ vọng toán:
$$E(X) = \\frac{a + b}{2} = \\frac{0 + 15}{2} = 7{,}5$$ (phút)
Phương sai và độ lệch chuẩn:
$$Var(X) = \\frac{(b - a)^2}{12} = \\frac{15^2}{12} = \\frac{225}{12} = 18{,}75$$
$$\\sigma(X) = \\sqrt{18{,}75} = \\frac{15}{2\\sqrt{3}} \\approx 4{,}3301$$ (phút)`
      },
      {
        stepTitle: "Bước 3: Câu c - Xác suất chờ từ 5 đến 10 phút",
        stepContent: `Với phân phối đều liên tục:
$$P(5 \\le X \\le 10) = \\int_5^{10} \\frac{1}{15} dx = \\frac{10 - 5}{15} = \\frac{5}{15} = \\frac{1}{3} \\approx 0{,}3333$$`
      },
      {
        stepTitle: "Bước 4: Câu d - Xác suất có điều kiện",
        stepContent: `Cần tính xác suất tổng thời gian chờ ít nhất là $5 + 5 = 10$ phút, biết rằng đã chờ quá 5 phút:
$$P(X \\ge 10 \\mid X > 5) = \\frac{P(X \\ge 10 \\cap X > 5)}{P(X > 5)} = \\frac{P(X \\ge 10)}{P(X > 5)}$$
Tính từng xác suất:
$$P(X \\ge 10) = \\frac{15 - 10}{15} = \\frac{5}{15} = \\frac{1}{3}$$
$$P(X > 5) = \\frac{15 - 5}{15} = \\frac{10}{15} = \\frac{2}{3}$$
Thay vào:
$$P(X \\ge 10 \\mid X > 5) = \\frac{1/3}{2/3} = \\frac{1}{2} = 0{,}5$$`
      }
    ],
    finalAnswer: "a) X ~ U(0, 15) | b) E(X) = 7,5 phút; sigma(X) approx 4,33 phút | c) P(5 <= X <= 10) = 1/3 | d) P = 0,5"
  },
  {
    id: "ex-2-12",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Mũ Exp(λ)",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 12: Phân phối Mũ và tính chất không nhớ (Memoryless Property)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Tuổi thọ của một loại bóng đèn LED bán dẫn tuân theo phân phối mũ với thời gian hoạt động trung bình là 2000 giờ.
a) Xác định tham số $\\lambda$ và viết hàm mật độ xác suất $f(t)$, hàm phân phối $F(t)$.
b) Tính xác suất một bóng đèn hỏng trước 1000 giờ.
c) Tính xác suất bóng đèn hoạt động tốt sau ít nhất 3000 giờ.
d) Chứng minh tính chất không nhớ: Biết bóng đèn đã hoạt động tốt 2000 giờ, tính xác suất nó hoạt động thêm ít nhất 1000 giờ nữa.`,
    tips: "Phân phối mũ $Exp(\\lambda)$ có kỳ vọng $E(X) = 1/\\lambda$. Tính chất không nhớ: $P(X > s+t \\mid X > s) = P(X > t) = e^{-\\lambda t}$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định tham số và các hàm đặc trưng",
        stepContent: `Gọi $T$ là tuổi thọ của bóng đèn (giờ): $T \\sim Exp(\\lambda)$.
Kỳ vọng $E(T) = \\frac{1}{\\lambda} = 2000 \\implies \\lambda = \\frac{1}{2000} = 0{,}0005\\text{ h}^{-1}$.
Hàm mật độ xác suất:
$$f(t) = \\begin{cases}
\\lambda e^{-\\lambda t} = 0{,}0005 e^{-0{,}0005 t} & \\text{khi } t \\ge 0 \\\\
0 & \\text{khi } t < 0
\\end{cases}$$
Hàm phân phối xác suất tích lũy:
$$F(t) = P(T < t) = 1 - e^{-\\lambda t} = 1 - e^{-0{,}0005 t}, \\quad t \\ge 0$$
Độ tin cậy (hàm sống sót):
$$R(t) = P(T > t) = e^{-\\lambda t} = e^{-0{,}0005 t}$$`
      },
      {
        stepTitle: "Bước 2: Câu b - Xác suất hỏng trước 1000 giờ",
        stepContent: `Áp dụng hàm phân phối tích lũy:
$$P(T < 1000) = F(1000) = 1 - e^{-0{,}0005 \\times 1000} = 1 - e^{-0{,}5}$$
$$P(T < 1000) = 1 - 0{,}6065 = 0{,}3935$$`
      },
      {
        stepTitle: "Bước 3: Câu c - Xác suất hoạt động tốt sau 3000 giờ",
        stepContent: `Áp dụng hàm sống sót:
$$P(T > 3000) = e^{-0{,}0005 \\times 3000} = e^{-1{,}5} \\approx 0{,}2231$$`
      },
      {
        stepTitle: "Bước 4: Câu d - Kiểm chứng tính chất không nhớ",
        stepContent: `Theo công thức xác suất có điều kiện:
$$P(T > 2000 + 1000 \\mid T > 2000) = \\frac{P(T > 3000)}{P(T > 2000)}$$
$$= \\frac{e^{-\\lambda(3000)}}{e^{-\\lambda(2000)}} = e^{-\\lambda(3000 - 2000)} = e^{-\\lambda(1000)}$$
$$= e^{-0{,}0005 \\times 1000} = e^{-0{,}5} \\approx 0{,}6065$$
So sánh với xác suất bóng mới tinh hoạt động quá 1000 giờ:
$$P(T > 1000) = e^{-0{,}5} \\approx 0{,}6065$$
Hai kết quả hoàn toàn bằng nhau, chứng minh tính không nhớ của phân phối mũ.`
      }
    ],
    finalAnswer: "a) lambda = 0,0005 | b) P(T < 1000) approx 0,3935 | c) P(T > 3000) approx 0,2231 | d) P = e^(-0,5) approx 0,6065"
  },
  {
    id: "ex-2-13",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Phân phối Chuẩn N(μ, σ²)",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 13: Phân phối Chuẩn trong tính toán tỷ lệ bao gói sản phẩm",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Trọng lượng một gói đường đóng bao tự động tuân theo phân phối chuẩn với trọng lượng trung bình $\\mu = 1000\\text{ g}$ và phương sai $\\sigma^2 = 25\\text{ g}^2$.
Quy cách đóng gói đạt tiêu chuẩn nếu trọng lượng thực tế nằm trong khoảng từ $992\\text{ g}$ đến $1008\\text{ g}$.
a) Tính tỷ lệ gói đường đạt tiêu chuẩn chất lượng.
b) Gói đường có trọng lượng dưới $990\\text{ g}$ bị coi là thiếu cân và phải đóng gói lại. Tính tỷ lệ gói đường thiếu cân.
c) Trong 10000 gói đường xuất xưởng, ước tính có bao nhiêu gói bị thiếu cân?
(Cho biết hàm Laplace $\\Phi_0(1{,}6) = 0{,}4452$; $\\Phi_0(2) = 0{,}4772$).`,
    tips: "Chuẩn hóa biến ngẫu nhiên $Z = \\frac{X - \\mu}{\\sigma}$. Chú ý phân biệt hàm Laplace gốc $\\Phi_0(x) = \\frac{1}{\\sqrt{2\\pi}}\\int_0^x e^{-t^2/2}dt$ và hàm chuẩn hóa $\\Phi(x) = 0{,}5 + \\Phi_0(x)$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập mô hình phân phối",
        stepContent: `Gọi $X$ là trọng lượng của một gói đường ngẫu nhiên (đơn vị: gam).
$$X \\sim N(\\mu = 1000, \\sigma^2 = 25) \\implies \\sigma = \\sqrt{25} = 5\\text{ g}$$
Chuyển về biến ngẫu nhiên chuẩn tắc $Z = \\frac{X - 1000}{5} \\sim N(0, 1)$.`
      },
      {
        stepTitle: "Bước 2: Câu a - Tỷ lệ gói đường đạt tiêu chuẩn",
        stepContent: `Gói đạt chuẩn khi $992 \\le X \\le 1008$:
$$P(992 \\le X \\le 1008) = P\\left( \\frac{992 - 1000}{5} \\le Z \\le \\frac{1008 - 1000}{5} \\right)$$
$$= P(-1{,}6 \\le Z \\le 1{,}6) = 2 \\Phi_0(1{,}6)$$
Tra bảng giá trị $\\Phi_0(1{,}6) = 0{,}4452$:
$$P(992 \\le X \\le 1008) = 2 \\times 0{,}4452 = 0{,}8904 = 89{,}04\\%$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Tỷ lệ gói đường thiếu cân",
        stepContent: `Gói đường thiếu cân khi $X < 990$:
$$P(X < 990) = P\\left( Z < \\frac{990 - 1000}{5} \\right) = P(Z < -2)$$
Sử dụng tính đối xứng của hàm mật độ chuẩn tắc:
$$P(Z < -2) = 0{,}5 - \\Phi_0(2) = 0{,}5 - 0{,}4772 = 0{,}0228 = 2{,}28\\%$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Ước tính số gói bị thiếu cân",
        stepContent: `Trong $N = 10000$ gói đường xuất xưởng:
Số gói thiếu cân dự kiến:
$$M = N \\times P(X < 990) = 10000 \\times 0{,}0228 = 228$$ (gói)`
      }
    ],
    finalAnswer: "a) 89,04% đạt chuẩn | b) 2,28% thiếu cân | c) Khoảng 228 gói trong 10.000 gói"
  },
  {
    id: "ex-2-14",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Quy tắc 3 Sigma & Định mức kỹ thuật",
    difficulty: "Nâng cao",
    title: "Bài tập 14: Quy tắc Ba Sigma và bài toán định mức dung sai kỹ thuật",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Đường kính trục máy do một máy tiện tự động sản xuất là biến ngẫu nhiên $X \\sim N(\\mu = 50\\text{ mm}, \\sigma = 0{,}04\\text{ mm})$.
a) Theo quy tắc Ba Sigma ($3\\sigma$), hãy xác định khoảng kích thước mà hầu như chắc chắn mọi chi tiết máy sản xuất ra đều rơi vào.
b) Nhà máy quy định trục máy đạt chất lượng nếu độ lệch tuyệt đối so với kích thước thiết kế $50\\text{ mm}$ không vượt quá $0{,}06\\text{ mm}$. Tính tỷ lệ chi tiết phế phẩm.
c) Nếu muốn tỷ lệ phế phẩm giảm xuống dưới $1\\%$, cần nâng cấp máy để độ lệch chuẩn $\\sigma$ giảm xuống mức tối đa là bao nhiêu?
(Cho biết $\\Phi_0(1{,}5) = 0{,}4332$; giá trị tới hạn $u_{0{,}005} = 2{,}5758$).`,
    tips: "Quy tắc $3\\sigma$ phát biểu rằng $P(\\mu - 3\\sigma \\le X \\le \\mu + 3\\sigma) \\approx 0{,}9973$. Để xác định tham số kỹ thuật mới, giải phương trình xác suất ngược từ phân vị chuẩn.",
    steps: [
      {
        stepTitle: "Bước 1: Câu a - Xác định khoảng theo quy tắc Ba Sigma",
        stepContent: `Quy tắc $3\\sigma$ cho biến chuẩn $X \\sim N(\\mu, \\sigma^2)$:
$$[\\mu - 3\\sigma; \\mu + 3\\sigma] = [50 - 3(0{,}04); 50 + 3(0{,}04)] = [50 - 0{,}12; 50 + 0{,}12] = [49{,}88\\text{ mm}; 50{,}12\\text{ mm}]$$
Xác suất để đường kính rơi vào khoảng này xấp xỉ $99{,}73\\%$.`
      },
      {
        stepTitle: "Bước 2: Câu b - Tính tỷ lệ chi tiết phế phẩm",
        stepContent: `Chi tiết đạt tiêu chuẩn khi $|X - 50| \\le 0{,}06$:
$$P(|X - 50| \\le 0{,}06) = P\\left( \\left|\\frac{X - 50}{0{,}04}\\right| \\le \\frac{0{,}06}{0{,}04} \\right) = P(|Z| \\le 1{,}5)$$
$$= 2 \\Phi_0(1{,}5) = 2 \\times 0{,}4332 = 0{,}8664$$
Tỷ lệ phế phẩm (không đạt tiêu chuẩn):
$$\\alpha = 1 - P(|X - 50| \\le 0{,}06) = 1 - 0{,}8664 = 0{,}1336 = 13{,}36\\%$$`
      },
      {
        stepTitle: "Bước 3: Câu c - Tính độ lệch chuẩn mục tiêu $\\sigma_{moi}$",
        stepContent: `Yêu cầu tỷ lệ phế phẩm không quá $1\\%$ đồng nghĩa tỷ lệ đạt chuẩn ít nhất $99\\%$:
$$P(|X - 50| \\le 0{,}06) \\ge 0{,}99 \\iff 2\\Phi_0\\left(\\frac{0{,}06}{\\sigma_{moi}}\\right) \\ge 0{,}99$$
$$\\iff \\Phi_0\\left(\\frac{0{,}06}{\\sigma_{moi}}\\right) \\ge 0{,}495$$
Tra bảng phân phối chuẩn: $\\Phi_0(u) = 0{,}495 \\implies u \\approx 2{,}576$.
Do đó:
$$\\frac{0{,}06}{\\sigma_{moi}} \\ge 2{,}576 \\implies \\sigma_{moi} \\le \\frac{0{,}06}{2{,}576} \\approx 0{,}0233\\text{ mm}$$
Vậy cần nâng cấp máy để $\\sigma \\le 0{,}0233\\text{ mm}$.`
      }
    ],
    finalAnswer: "a) [49,88 mm ; 50,12 mm] | b) Tỷ lệ phế phẩm 13,36% | c) sigma tối đa là 0,0233 mm"
  },
  {
    id: "ex-2-15",
    chapter: "chuong-2",
    chapterName: "Chương 2: Biến Ngẫu Nhiên 1 Chiều",
    category: "Định lý Giới hạn Trung tâm & Moivre-Laplace",
    difficulty: "Nâng cao",
    title: "Bài tập 15: Định lý Moivre-Laplace tích phân và hiệu chỉnh liên tục",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một trường trung học có 400 học sinh đăng ký dự thi Olympic. Xác suất để một học sinh đạt giải khuyến khích trở lên là $p = 0{,}25$.
a) Sử dụng định lý tích phân Moivre-Laplace để tính xác suất có từ 90 đến 115 học sinh đạt giải.
b) Áp dụng hiệu chỉnh liên tục (continuity correction) và so sánh kết quả.
c) Tính số giải thưởng $k$ sao cho xác suất đạt giải không vượt quá $k$ bằng $95\\%$.
(Cho biết $\\Phi_0(1{,}73) = 0{,}4582$; $\\Phi_0(1{,}15) = 0{,}3749$; $\\Phi_0(1{,}79) = 0{,}4633$; $\\Phi_0(1{,}21) = 0{,}3869$; $u_{0{,}05} = 1{,}645$).`,
    tips: "Khi xấp xỉ Nhị thức bằng Chuẩn, hiệu chỉnh liên tục thay đổi khoảng: $[k_1, k_2] \\to [k_1 - 0{,}5; k_2 + 0{,}5]$. Điều kiện $np = 100 \\ge 5$ và $nq = 300 \\ge 5$ thỏa mãn hoàn toàn.",
    steps: [
      {
        stepTitle: "Bước 1: Tính các tham số của phân phối chuẩn xấp xỉ",
        stepContent: `Gọi $X$ là số học sinh đạt giải: $X \\sim B(n = 400, p = 0{,}25)$.
Ta có:
$$\\mu = E(X) = n p = 400 \\times 0{,}25 = 100$$
$$\\sigma^2 = Var(X) = n p (1 - p) = 400 \\times 0{,}25 \\times 0{,}75 = 75$$
$$\\sigma = \\sqrt{75} = 5\\sqrt{3} \\approx 8{,}6603$$
Do $np = 100 > 5$ và $nq = 300 > 5$, theo định lý Moivre-Laplace, $X$ xấp xỉ chuẩn $N(100; 75)$.`
      },
      {
        stepTitle: "Bước 2: Câu a - Tính theo công thức tích phân Moivre-Laplace thông thường",
        stepContent: `Không dùng hiệu chỉnh liên tục:
$$P(90 \\le X \\le 115) \\approx P\\left( \\frac{90 - 100}{8{,}6603} \\le Z \\le \\frac{115 - 100}{8{,}6603} \\right)$$
$$= P(-1{,}15 \\le Z \\le 1{,}73) = \\Phi_0(1{,}73) + \\Phi_0(1{,}15)$$
Thay số từ đề bài:
$$P(90 \\le X \\le 115) \\approx 0{,}4582 + 0{,}3749 = 0{,}8331$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Áp dụng hiệu chỉnh liên tục (Continuity Correction)",
        stepContent: `Mở rộng biên nửa đơn vị: $[90, 115] \\to [89{,}5; 115{,}5]$:
$$u_1 = \\frac{89{,}5 - 100}{8{,}6603} = \\frac{-10{,}5}{8{,}6603} \\approx -1{,}21$$
$$u_2 = \\frac{115{,}5 - 100}{8{,}6603} = \\frac{15{,}5}{8{,}6603} \\approx 1{,}79$$
Xác suất có hiệu chỉnh:
$$P(89{,}5 \\le X \\le 115{,}5) = \\Phi_0(1{,}79) + \\Phi_0(1{,}21) = 0{,}4633 + 0{,}3869 = 0{,}8502$$
Hiệu chỉnh liên tục làm tăng độ chính xác của xấp xỉ diện tích hình chữ nhật bằng diện tích đường cong cong.`
      },
      {
        stepTitle: "Bước 4: Câu c - Tìm $k$ sao cho $P(X \\le k) = 0{,}95$",
        stepContent: `Chuẩn hóa:
$$P(X \\le k) = P\\left( Z \\le \\frac{k - 100}{8{,}6603} \\right) = 0{,}5 + \\Phi_0\\left( \\frac{k - 100}{8{,}6603} \\right) = 0{,}95$$
$$\\implies \\Phi_0\\left( \\frac{k - 100}{8{,}6603} \\right) = 0{,}45 \\implies \\frac{k - 100}{8{,}6603} = 1{,}645$$
$$k = 100 + 1{,}645 \\times 8{,}6603 = 100 + 14{,}25 = 114{,}25$$
Làm tròn lên số nguyên $k = 115$ giải thưởng.`
      }
    ],
    finalAnswer: "a) P approx 0,8331 | b) Có hiệu chỉnh P approx 0,8502 | c) k = 115 giải"
  }
];
