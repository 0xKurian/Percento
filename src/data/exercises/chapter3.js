export const chapter3Exercises = [
  {
    id: "ex-3-01",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Phân phối Đồng thời Rời rạc",
    difficulty: "Cơ bản",
    title: "Bài tập 1: Bảng phân phối xác suất đồng thời và xác suất biến cố",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên rời rạc $(X, Y)$ có bảng phân phối xác suất đồng thời như sau:
$$\\begin{array}{c|ccc}
X \\backslash Y & 1 & 2 & 3 \\\\ \\hline
0 & 0{,}10 & 0{,}15 & c \\\\
1 & 0{,}20 & 0{,}10 & 0{,}15 \\\\
2 & c & 0{,}10 & 0{,}05
\\end{array}$$
a) Xác định hằng số $c$.
b) Tính xác suất $P(X \\le 1, Y \\ge 2)$.
c) Tính xác suất $P(X + Y = 3)$.`,
    tips: "Tổng xác suất của toàn bộ các ô trong bảng đồng thời luôn bằng 1. Xác suất của biến cố là tổng xác suất của các ô $(x_i, y_j)$ thỏa mãn điều kiện.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hằng số $c$",
        stepContent: `Tổng xác suất của tất cả các ô trong bảng bằng 1:
$$\\sum_{i} \\sum_{j} P(X = x_i, Y = y_j) = 1$$
$$(0{,}10 + 0{,}15 + c) + (0{,}20 + 0{,}10 + 0{,}15) + (c + 0{,}10 + 0{,}05) = 1$$
$$2c + 0{,}85 = 1 \\implies 2c = 0{,}15 \\implies c = 0{,}075$$
Bảng phân phối xác suất hoàn chỉnh:
$$\\begin{array}{c|ccc}
X \\backslash Y & 1 & 2 & 3 \\\\ \\hline
0 & 0{,}100 & 0{,}150 & 0{,}075 \\\\
1 & 0{,}200 & 0{,}100 & 0{,}150 \\\\
2 & 0{,}075 & 0{,}100 & 0{,}050
\\end{array}$$`
      },
      {
        stepTitle: "Bước 2: Tính xác suất $P(X \\le 1, Y \\ge 2)$",
        stepContent: `Điều kiện $X \\in \\{0, 1\\}$ và $Y \\in \\{2, 3\\}$.
Biến cố gồm 4 cặp ô: $(0,2), (0,3), (1,2), (1,3)$.
$$P(X \\le 1, Y \\ge 2) = p_{02} + p_{03} + p_{12} + p_{13}$$
$$= 0{,}150 + 0{,}075 + 0{,}100 + 0{,}150 = 0{,}475$$`
      },
      {
        stepTitle: "Bước 3: Tính xác suất $P(X + Y = 3)$",
        stepContent: `Các cặp $(x, y)$ có tổng bằng 3: $(0, 3), (1, 2), (2, 1)$.
$$P(X + Y = 3) = P(X=0, Y=3) + P(X=1, Y=2) + P(X=2, Y=1)$$
$$= 0{,}075 + 0{,}100 + 0{,}075 = 0{,}250$$`
      }
    ],
    finalAnswer: "a) c = 0,075 | b) P(X <= 1, Y >= 2) = 0,475 | c) P(X + Y = 3) = 0,25"
  },
  {
    id: "ex-3-02",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Phân phối Biên (Marginal Distribution)",
    difficulty: "Cơ bản",
    title: "Bài tập 2: Xác định phân phối biên và các kỳ vọng thành phần",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho bảng phân phối đồng thời của $(X, Y)$:
$$\\begin{array}{c|cc}
X \\backslash Y & 1 & 3 \\\\ \\hline
-1 & 0{,}2 & 0{,}1 \\\\
0 & 0{,}1 & 0{,}3 \\\\
1 & 0{,}1 & 0{,}2
\\end{array}$$
a) Lập bảng phân phối xác suất biên của $X$ và của $Y$.
b) Tính kỳ vọng $E(X), E(Y)$ và phương sai $D(X), D(Y)$.`,
    tips: "Xác suất biên của $X$ là tổng theo từng hàng: $p_{i\\bullet} = \\sum_j p_{ij}$. Xác suất biên của $Y$ là tổng theo từng cột: $p_{\\bullet j} = \\sum_i p_{ij}$.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm phân phối xác suất biên của $X$",
        stepContent: `Cộng các xác suất theo từng hàng:
- Với $X = -1$: $P(X = -1) = 0{,}2 + 0{,}1 = 0{,}3$.
- Với $X = 0$: $P(X = 0) = 0{,}1 + 0{,}3 = 0{,}4$.
- Với $X = 1$: $P(X = 1) = 0{,}1 + 0{,}2 = 0{,}3$.
Bảng phân phối biên của $X$:
$$\\begin{array}{c|ccc}
X & -1 & 0 & 1 \\\\ \\hline
P & 0{,}3 & 0{,}4 & 0{,}3
\\end{array}$$`
      },
      {
        stepTitle: "Bước 2: Tìm phân phối xác suất biên của $Y$",
        stepContent: `Cộng các xác suất theo từng cột:
- Với $Y = 1$: $P(Y = 1) = 0{,}2 + 0{,}1 + 0{,}1 = 0{,}4$.
- Với $Y = 3$: $P(Y = 3) = 0{,}1 + 0{,}3 + 0{,}2 = 0{,}6$.
Bảng phân phối biên của $Y$:
$$\\begin{array}{c|cc}
Y & 1 & 3 \\\\ \\hline
P & 0{,}4 & 0{,}6
\\end{array}$$`
      },
      {
        stepTitle: "Bước 3: Tính $E(X), D(X)$",
        stepContent: `Kỳ vọng và phương sai của $X$:
$$E(X) = (-1)(0{,}3) + 0(0{,}4) + 1(0{,}3) = 0$$
$$E(X^2) = (-1)^2(0{,}3) + 0^2(0{,}4) + 1^2(0{,}3) = 0{,}3 + 0{,}3 = 0{,}6$$
$$D(X) = E(X^2) - [E(X)]^2 = 0{,}6 - 0 = 0{,}6$$`
      },
      {
        stepTitle: "Bước 4: Tính $E(Y), D(Y)$",
        stepContent: `Kỳ vọng và phương sai của $Y$:
$$E(Y) = 1(0{,}4) + 3(0{,}6) = 0{,}4 + 1{,}8 = 2{,}2$$
$$E(Y^2) = 1^2(0{,}4) + 3^2(0{,}6) = 0{,}4 + 5{,}4 = 5{,}8$$
$$D(Y) = E(Y^2) - [E(Y)]^2 = 5{,}8 - (2{,}2)^2 = 5{,}8 - 4{,}84 = 0{,}96$$`
      }
    ],
    finalAnswer: "a) Đã lập bảng ở bước 1 và 2 | b) E(X) = 0, D(X) = 0,6 | E(Y) = 2,2, D(Y) = 0,96"
  },
  {
    id: "ex-3-03",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Tính Độc Lập của BNN",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 3: Kiểm tra tính độc lập của hai biến ngẫu nhiên rời rạc",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho bảng phân phối đồng thời của hai biến ngẫu nhiên $X$ và $Y$:
$$\\begin{array}{c|cc}
X \\backslash Y & 0 & 1 \\\\ \\hline
1 & 0{,}12 & 0{,}18 \\\\
2 & 0{,}28 & 0{,}42
\\end{array}$$
a) Hai biến ngẫu nhiên $X$ và $Y$ có độc lập với nhau hay không? Giải thích chi tiết.
b) Nếu thay ô $P(X=1, Y=0) = 0{,}15$ và giữ nguyên các phân phối biên thì hai biến có độc lập không?`,
    tips: "Điều kiện cần và đủ để $X$ và $Y$ độc lập là: $P(X = x_i, Y = y_j) = P(X = x_i) P(Y = y_j)$ với mọi cặp $(x_i, y_j)$. Chỉ cần 1 ô vi phạm là không độc lập.",
    steps: [
      {
        stepTitle: "Bước 1: Tính phân phối biên của $X$ và $Y$",
        stepContent: `Biên của $X$:
$$P(X = 1) = 0{,}12 + 0{,}18 = 0{,}30$$
$$P(X = 2) = 0{,}28 + 0{,}42 = 0{,}70$$
Biên của $Y$:
$$P(Y = 0) = 0{,}12 + 0{,}28 = 0{,}40$$
$$P(Y = 1) = 0{,}18 + 0{,}42 = 0{,}60$$`
      },
      {
        stepTitle: "Bước 2: Kiểm tra điều kiện độc lập cho từng ô",
        stepContent: `So sánh tích xác suất biên với xác suất đồng thời:
- Ô $(1, 0)$: $P(X=1) \\times P(Y=0) = 0{,}30 \\times 0{,}40 = 0{,}12 = P(X=1, Y=0)$.
- Ô $(1, 1)$: $P(X=1) \\times P(Y=1) = 0{,}30 \\times 0{,}60 = 0{,}18 = P(X=1, Y=1)$.
- Ô $(2, 0)$: $P(X=2) \\times P(Y=0) = 0{,}70 \\times 0{,}40 = 0{,}28 = P(X=2, Y=0)$.
- Ô $(2, 1)$: $P(X=2) \\times P(Y=1) = 0{,}70 \\times 0{,}60 = 0{,}42 = P(X=2, Y=1)$.
Tất cả 4 ô đều thỏa mãn đẳng thức. Vậy $X$ và $Y$ là hai biến ngẫu nhiên độc lập.`
      },
      {
        stepTitle: "Bước 3: Giải câu b - Khi thay đổi giá trị một ô",
        stepContent: `Nếu ô $(1, 0)$ nhận giá trị $0{,}15 \\ne P(X=1) P(Y=0) = 0{,}12$.
Khi đó đẳng thức độc lập bị phá vỡ ngay tại ô $(1, 0)$.
Do đó $X$ và $Y$ sẽ phụ thuộc nhau.`
      }
    ],
    finalAnswer: "a) X và Y độc lập vì P(X=x, Y=y) = P(X=x)P(Y=y) với mọi cặp | b) Khi thay đổi, X và Y không còn độc lập"
  },
  {
    id: "ex-3-04",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Phân phối Có điều kiện",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 4: Phân phối có điều kiện và kỳ vọng có điều kiện",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho biến ngẫu nhiên hai chiều $(X, Y)$ có bảng phân phối đồng thời:
$$\\begin{array}{c|ccc}
X \\backslash Y & 1 & 2 & 3 \\\\ \\hline
1 & 0{,}1 & 0{,}2 & 0{,}1 \\\\
2 & 0{,}2 & 0{,}1 & 0{,}3
\\end{array}$$
a) Lập bảng phân phối xác suất có điều kiện của $Y$ với điều kiện $X = 2$.
b) Tính kỳ vọng có điều kiện $E(Y \\mid X = 2)$.
c) Tính phương sai có điều kiện $D(Y \\mid X = 2)$.`,
    tips: "Công thức phân phối có điều kiện: $P(Y = y_j \\mid X = x_i) = \\frac{P(X = x_i, Y = y_j)}{P(X = x_i)}$. Kỳ vọng có điều kiện tính như kỳ vọng thông thường trên hàng đó.",
    steps: [
      {
        stepTitle: "Bước 1: Tính xác suất biên $P(X = 2)$",
        stepContent: `Cộng các phần tử ở hàng $X = 2$:
$$P(X = 2) = 0{,}2 + 0{,}1 + 0{,}3 = 0{,}6$$`
      },
      {
        stepTitle: "Bước 2: Lập bảng phân phối của $Y \\mid X = 2$",
        stepContent: `Áp dụng công thức Bayes cho từng cột:
$$P(Y = 1 \\mid X = 2) = \\frac{P(X = 2, Y = 1)}{P(X = 2)} = \\frac{0{,}2}{0{,}6} = \\frac{1}{3} \\approx 0{,}3333$$
$$P(Y = 2 \\mid X = 2) = \\frac{P(X = 2, Y = 2)}{P(X = 2)} = \\frac{0{,}1}{0{,}6} = \\frac{1}{6} \\approx 0{,}1667$$
$$P(Y = 3 \\mid X = 2) = \\frac{P(X = 2, Y = 3)}{P(X = 2)} = \\frac{0{,}3}{0{,}6} = \\frac{3}{6} = \\frac{1}{2} = 0{,}5000$$
Bảng phân phối có điều kiện:
$$\\begin{array}{c|ccc}
Y \\mid X=2 & 1 & 2 & 3 \\\\ \\hline
P & 1/3 & 1/6 & 1/2
\\end{array}$$
Kiểm tra tổng: $1/3 + 1/6 + 1/2 = 2/6 + 1/6 + 3/6 = 1$.`
      },
      {
        stepTitle: "Bước 3: Tính kỳ vọng có điều kiện $E(Y \\mid X = 2)$",
        stepContent: `Tính theo định nghĩa:
$$E(Y \\mid X = 2) = \\sum y_j P(Y = y_j \\mid X = 2)$$
$$= 1 \\left(\\frac{1}{3}\\right) + 2 \\left(\\frac{1}{6}\\right) + 3 \\left(\\frac{1}{2}\\right) = \\frac{1}{3} + \\frac{1}{3} + \\frac{3}{2} = \\frac{2}{3} + \\frac{3}{2} = \\frac{13}{6} \\approx 2{,}1667$$`
      },
      {
        stepTitle: "Bước 4: Tính phương sai có điều kiện $D(Y \\mid X = 2)$",
        stepContent: `Tính $E(Y^2 \\mid X = 2)$:
$$E(Y^2 \\mid X = 2) = 1^2 \\left(\\frac{1}{3}\\right) + 2^2 \\left(\\frac{1}{6}\\right) + 3^2 \\left(\\frac{1}{2}\\right)$$
$$= \\frac{1}{3} + \\frac{4}{6} + \\frac{9}{2} = \\frac{1}{3} + \\frac{2}{3} + \\frac{9}{2} = 1 + 4{,}5 = 5{,}5 = \\frac{11}{2}$$
Phương sai có điều kiện:
$$D(Y \\mid X = 2) = E(Y^2 \\mid X = 2) - [E(Y \\mid X = 2)]^2$$
$$= \\frac{11}{2} - \\left(\\frac{13}{6}\\right)^2 = \\frac{11}{2} - \\frac{169}{36} = \\frac{198 - 169}{36} = \\frac{29}{36} \\approx 0{,}8056$$`
      }
    ],
    finalAnswer: "a) P(Y=1|X=2)=1/3, P(Y=2|X=2)=1/6, P(Y=3|X=2)=1/2 | b) E(Y|X=2) = 13/6 approx 2,1667 | c) D(Y|X=2) = 29/36 approx 0,8056"
  },
  {
    id: "ex-3-05",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Hiệp phương sai & Hệ số tương quan",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 5: Hiệp phương sai Cov(X,Y) và Hệ số tương quan Pearson",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên $(X, Y)$ có bảng phân phối xác suất đồng thời:
$$\\begin{array}{c|ccc}
X \\backslash Y & 0 & 1 & 2 \\\\ \\hline
1 & 0{,}1 & 0{,}2 & 0{,}1 \\\\
2 & 0{,}2 & 0{,}3 & 0{,}1
\\end{array}$$
a) Tính hiệp phương sai $Cov(X, Y)$.
b) Tính hệ số tương quan Pearson $\\rho_{XY}$.
c) Nhận xét về mối quan hệ tương quan tuyến tính giữa $X$ và $Y$.`,
    tips: "Công thức: $Cov(X, Y) = E(XY) - E(X)E(Y)$. Hệ số tương quan $\\rho_{XY} = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y}$. Nhớ rằng $-1 \\le \\rho_{XY} \\le 1$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính phân phối biên và các kỳ vọng $E(X), E(Y)$",
        stepContent: `Phân phối biên của $X$:
- $P(X=1) = 0{,}1 + 0{,}2 + 0{,}1 = 0{,}4$
- $P(X=2) = 0{,}2 + 0{,}3 + 0{,}1 = 0{,}6$
$$E(X) = 1(0{,}4) + 2(0{,}6) = 1{,}6$$
$$E(X^2) = 1^2(0{,}4) + 2^2(0{,}6) = 0{,}4 + 2{,}4 = 2{,}8$$
$$D(X) = 2{,}8 - (1{,}6)^2 = 2{,}8 - 2{,}56 = 0{,}24 \\implies \\sigma_X = \\sqrt{0{,}24} \\approx 0{,}4899$$

Phân phối biên của $Y$:
- $P(Y=0) = 0{,}1 + 0{,}2 = 0{,}3$
- $P(Y=1) = 0{,}2 + 0{,}3 = 0{,}5$
- $P(Y=2) = 0{,}1 + 0{,}1 = 0{,}2$
$$E(Y) = 0(0{,}3) + 1(0{,}5) + 2(0{,}2) = 0{,}9$$
$$E(Y^2) = 0^2(0{,}3) + 1^2(0{,}5) + 2^2(0{,}2) = 0{,}5 + 0{,}8 = 1{,}3$$
$$D(Y) = 1{,}3 - (0{,}9)^2 = 1{,}3 - 0{,}81 = 0{,}49 \\implies \\sigma_Y = \\sqrt{0{,}49} = 0{,}7$$`
      },
      {
        stepTitle: "Bước 2: Tính kỳ vọng tích $E(XY)$",
        stepContent: `Áp dụng công thức $E(XY) = \\sum x_i y_j p_{ij}$:
Các số hạng có $y = 0$ bằng 0.
- Với $x = 1, y = 1$: $1 \\times 1 \\times 0{,}2 = 0{,}2$
- Với $x = 1, y = 2$: $1 \\times 2 \\times 0{,}1 = 0{,}2$
- Với $x = 2, y = 1$: $2 \\times 1 \\times 0{,}3 = 0{,}6$
- Với $x = 2, y = 2$: $2 \\times 2 \\times 0{,}1 = 0{,}4$
$$E(XY) = 0{,}2 + 0{,}2 + 0{,}6 + 0{,}4 = 1{,}4$$`
      },
      {
        stepTitle: "Bước 3: Tính Hiệp phương sai $Cov(X, Y)$",
        stepContent: `Áp dụng công thức:
$$Cov(X, Y) = E(XY) - E(X)E(Y) = 1{,}4 - (1{,}6)(0{,}9) = 1{,}4 - 1{,}44 = -0{,}04$$`
      },
      {
        stepTitle: "Bước 4: Tính hệ số tương quan $\\rho_{XY}$ và nhận xét",
        stepContent: `Áp dụng công thức Pearson:
$$\\rho_{XY} = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{-0{,}04}{0{,}4899 \\times 0{,}7} = \\frac{-0{,}04}{0{,}3429} \\approx -0{,}1166$$
Nhận xét: Vì $\\rho_{XY} < 0$, giữa $X$ và $Y$ có mối tương quan tuyến tính nghịch. Tuy nhiên giá trị tuyệt đối $|\\rho_{XY}| \\approx 0{,}117$ khá nhỏ, cho thấy mức độ tương quan tuyến tính là rất yếu.`
      }
    ],
    finalAnswer: "a) Cov(X,Y) = -0,04 | b) rho_{XY} approx -0,1166 | c) Tương quan nghịch, mức độ rất yếu"
  },
  {
    id: "ex-3-06",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Phân phối của Hàm các BNN",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 6: Lập bảng phân phối của Tổng Z = X + Y và Tích W = XY",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho bảng phân phối đồng thời của $(X, Y)$:
$$\\begin{array}{c|cc}
X \\backslash Y & 1 & 2 \\\\ \\hline
0 & 0{,}2 & 0{,}3 \\\\
1 & 0{,}4 & 0{,}1
\\end{array}$$
a) Lập bảng phân phối xác suất của $Z = X + Y$.
b) Lập bảng phân phối xác suất của $W = X \\times Y$.
c) Tính $E(Z)$ bằng hai cách: từ bảng phân phối của $Z$ và theo tính chất tuyến tính $E(X) + E(Y)$.`,
    tips: "Gom các ô có cùng giá trị của hàm $g(X, Y) = z$ lại và cộng các xác suất tương ứng. Luôn kiểm tra tổng xác suất bằng 1.",
    steps: [
      {
        stepTitle: "Bước 1: Lập bảng phân phối của $Z = X + Y$",
        stepContent: `Xác định các giá trị có thể có của $Z = X + Y$:
- Cặp $(0, 1) \\implies Z = 1$ với $P = 0{,}2$.
- Cặp $(0, 2) \\implies Z = 2$ với $P = 0{,}3$.
- Cặp $(1, 1) \\implies Z = 2$ với $P = 0{,}4$.
- Cặp $(1, 2) \\implies Z = 3$ với $P = 0{,}1$.

Tổng hợp giá trị của $Z$:
- $P(Z = 1) = 0{,}2$
- $P(Z = 2) = 0{,}3 + 0{,}4 = 0{,}7$
- $P(Z = 3) = 0{,}1$
Bảng phân phối của $Z$:
$$\\begin{array}{c|ccc}
Z & 1 & 2 & 3 \\\\ \\hline
P & 0{,}2 & 0{,}7 & 0{,}1
\\end{array}$$`
      },
      {
        stepTitle: "Bước 2: Lập bảng phân phối của $W = XY$",
        stepContent: `Xác định các giá trị của $W = X \\times Y$:
- Với $X = 0$: $W = 0 \\times 1 = 0$ và $0 \\times 2 = 0$.
  $P(W = 0) = P(X=0, Y=1) + P(X=0, Y=2) = 0{,}2 + 0{,}3 = 0{,}5$.
- Với $X = 1$:
  $W = 1 \\times 1 = 1 \\implies P(W=1) = 0{,}4$.
  $W = 1 \\times 2 = 2 \\implies P(W=2) = 0{,}1$.
Bảng phân phối của $W$:
$$\\begin{array}{c|ccc}
W & 0 & 1 & 2 \\\\ \\hline
P & 0{,}5 & 0{,}4 & 0{,}1
\\end{array}$$`
      },
      {
        stepTitle: "Bước 3: Tính $E(Z)$ theo hai cách",
        stepContent: `Cách 1: Trực tiếp từ bảng phân phối của $Z$:
$$E(Z) = 1(0{,}2) + 2(0{,}7) + 3(0{,}1) = 0{,}2 + 1{,}4 + 0{,}3 = 1{,}9$$

Cách 2: Áp dụng tính chất tuyến tính $E(Z) = E(X) + E(Y)$:
Phân phối biên của $X$: $P(X=0) = 0{,}5; P(X=1) = 0{,}5 \\implies E(X) = 0(0{,}5) + 1(0{,}5) = 0{,}5$.
Phân phối biên của $Y$: $P(Y=1) = 0{,}6; P(Y=2) = 0{,}4 \\implies E(Y) = 1(0{,}6) + 2(0{,}4) = 1{,}4$.
$$E(X) + E(Y) = 0{,}5 + 1{,}4 = 1{,}9$$
Cả hai cách đều cho kết quả $1{,}9$.`
      }
    ],
    finalAnswer: "a) Z in {1, 2, 3} với P = {0,2; 0,7; 0,1} | b) W in {0, 1, 2} với P = {0,5; 0,4; 0,1} | c) E(Z) = 1,9"
  },
  {
    id: "ex-3-07",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Tổ hợp Tuyến tính BNN",
    difficulty: "Nâng cao",
    title: "Bài tập 7: Kỳ vọng và Phương sai của Tổ hợp tuyến tính Z = aX + bY",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho hai biến ngẫu nhiên $X$ và $Y$ thỏa mãn:
$$E(X) = 5, \\quad D(X) = 4, \\quad E(Y) = -2, \\quad D(Y) = 9$$
và hệ số tương quan giữa chúng là $\\rho_{XY} = -0{,}5$.
Xét biến ngẫu nhiên $Z = 3X - 2Y + 4$.
a) Tính kỳ vọng toán $E(Z)$.
b) Tính hiệp phương sai $Cov(X, Y)$.
c) Tính phương sai $D(Z)$ và độ lệch chuẩn $\\sigma_Z$.`,
    tips: "Công thức phương sai tổ hợp tuyến tính tổng quát: $D(aX + bY) = a^2 D(X) + b^2 D(Y) + 2ab Cov(X, Y)$. Chú ý dấu của $ab$ và $Cov(X, Y)$.",
    steps: [
      {
        stepTitle: "Bước 1: Câu a - Tính kỳ vọng $E(Z)$",
        stepContent: `Sử dụng tính chất tuyến tính của kỳ vọng:
$$E(Z) = E(3X - 2Y + 4) = 3E(X) - 2E(Y) + 4$$
Thay số:
$$E(Z) = 3(5) - 2(-2) + 4 = 15 + 4 + 4 = 23$$`
      },
      {
        stepTitle: "Bước 2: Câu b - Tính hiệp phương sai $Cov(X, Y)$",
        stepContent: `Từ công thức hệ số tương quan:
$$\\rho_{XY} = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y} \\implies Cov(X, Y) = \\rho_{XY} \\sigma_X \\sigma_Y$$
Ta có $\\sigma_X = \\sqrt{D(X)} = \\sqrt{4} = 2$ và $\\sigma_Y = \\sqrt{D(Y)} = \\sqrt{9} = 3$.
$$Cov(X, Y) = (-0{,}5) \\times 2 \\times 3 = -3$$`
      },
      {
        stepTitle: "Bước 3: Câu c - Tính phương sai $D(Z)$",
        stepContent: `Áp dụng công thức phương sai cho $Z = 3X - 2Y + 4$ (hằng số cộng thêm không làm đổi phương sai):
$$D(Z) = D(3X - 2Y) = 3^2 D(X) + (-2)^2 D(Y) + 2(3)(-2) Cov(X, Y)$$
$$D(Z) = 9 D(X) + 4 D(Y) - 12 Cov(X, Y)$$
Thay các giá trị:
$$D(Z) = 9(4) + 4(9) - 12(-3) = 36 + 36 + 36 = 108$$
Độ lệch chuẩn:
$$\\sigma_Z = \\sqrt{108} = 6\\sqrt{3} \\approx 10{,}3923$$`
      }
    ],
    finalAnswer: "a) E(Z) = 23 | b) Cov(X,Y) = -3 | c) D(Z) = 108, sigma_Z approx 10,3923"
  },
  {
    id: "ex-3-08",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Mô hình Hộp bi & Lập bảng đồng thời",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 8: Rút ngẫu nhiên từ hộp và thiết lập bảng phân phối 2 chiều",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một hộp có chứa 3 quả cầu trắng, 2 quả cầu đỏ và 1 quả cầu vàng. Lấy ngẫu nhiên đồng thời 2 quả cầu từ hộp.
Gọi $X$ là số quả cầu trắng lấy được, $Y$ là số quả cầu đỏ lấy được.
a) Lập bảng phân phối xác suất đồng thời của vectơ ngẫu nhiên $(X, Y)$.
b) Tính xác suất để lấy được đúng 1 quả cầu vàng.
c) Tính hiệp phương sai $Cov(X, Y)$.`,
    tips: "Tổng số quả cầu trong hộp là 6. Số cách chọn 2 quả là $C_6^2 = 15$. Số cầu vàng lấy được là $2 - (X + Y)$. Khi đó $X + Y \\le 2$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định không gian mẫu và miền giá trị",
        stepContent: `Tổng số cầu là $3 + 2 + 1 = 6$ quả. Số phần tử không gian mẫu:
$$|\\Omega| = C_6^2 = \\frac{6 \\times 5}{2} = 15$$
Do lấy 2 quả nên $X \\in \\{0, 1, 2\\}$ và $Y \\in \\{0, 1, 2\\}$ với ràng buộc $X + Y \\le 2$.
Công thức xác suất tổng quát:
$$P(X=x, Y=y) = \\frac{C_3^x C_2^y C_1^{2 - x - y}}{C_6^2}$$`
      },
      {
        stepTitle: "Bước 2: Tính xác suất từng ô và lập bảng đồng thời",
        stepContent: `Tính các giá trị:
- $X=0, Y=0 \\implies 2$ vàng: Không thể có vì chỉ có 1 vàng $\\implies P(0,0) = 0$.
- $X=0, Y=1 \\implies 1$ đỏ, 1 vàng: $\\frac{C_2^1 C_1^1}{15} = \\frac{2}{15}$.
- $X=0, Y=2 \\implies 2$ đỏ: $\\frac{C_2^2}{15} = \\frac{1}{15}$.
- $X=1, Y=0 \\implies 1$ trắng, 1 vàng: $\\frac{C_3^1 C_1^1}{15} = \\frac{3}{15}$.
- $X=1, Y=1 \\implies 1$ trắng, 1 đỏ: $\\frac{C_3^1 C_2^1}{15} = \\frac{6}{15}$.
- $X=1, Y=2$: Không thể vì $X+Y=3 > 2 \\implies P = 0$.
- $X=2, Y=0 \\implies 2$ trắng: $\\frac{C_3^2}{15} = \\frac{3}{15}$.
- $X=2, Y=1$ và $X=2, Y=2$: Không thể $\\implies P = 0$.

Bảng phân phối xác suất đồng thời:
$$\\begin{array}{c|ccc}
X \\backslash Y & 0 & 1 & 2 \\\\ \\hline
0 & 0 & 2/15 & 1/15 \\\\
1 & 3/15 & 6/15 & 0 \\\\
2 & 3/15 & 0 & 0
\\end{array}$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Xác suất lấy đúng 1 quả cầu vàng",
        stepContent: `Lấy đúng 1 vàng tương đương với tổng số cầu trắng và đỏ là 1, tức là $X + Y = 1$:
$$P(X + Y = 1) = P(0, 1) + P(1, 0) = \\frac{2}{15} + \\frac{3}{15} = \\frac{5}{15} = \\frac{1}{3} \\approx 0{,}3333$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Tính $Cov(X, Y)$",
        stepContent: `Kỳ vọng tích:
$$E(XY) = 1 \\times 1 \\times P(1, 1) = 1 \\times \\frac{6}{15} = \\frac{6}{15} = 0{,}4$$
Phân phối biên của $X$:
$$P(X=0) = 3/15; \\quad P(X=1) = 9/15; \\quad P(X=2) = 3/15$$
$$E(X) = 0\\left(\\frac{3}{15}\\right) + 1\\left(\\frac{9}{15}\\right) + 2\\left(\\frac{3}{15}\\right) = \\frac{15}{15} = 1$$
Phân phối biên của $Y$:
$$P(Y=0) = 6/15; \\quad P(Y=1) = 8/15; \\quad P(Y=2) = 1/15$$
$$E(Y) = 0\\left(\\frac{6}{15}\\right) + 1\\left(\\frac{8}{15}\\right) + 2\\left(\\frac{1}{15}\\right) = \\frac{10}{15} = \\frac{2}{3}$$
Hiệp phương sai:
$$Cov(X, Y) = E(XY) - E(X)E(Y) = 0{,}4 - 1 \\times \\frac{2}{3} = \\frac{2}{5} - \\frac{2}{3} = -\\frac{4}{15} \\approx -0{,}2667$$`
      }
    ],
    finalAnswer: "a) Bảng đồng thời như trên | b) P(1 quả vàng) = 1/3 | c) Cov(X,Y) = -4/15 approx -0,2667"
  },
  {
    id: "ex-3-09",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Mật độ Đồng thời Liên tục",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 9: Xác định hằng số chuẩn hóa của hàm mật độ đồng thời",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên liên tục $(X, Y)$ có hàm mật độ xác suất đồng thời:
$$f(x, y) = \\begin{cases}
k (x + 2y) & \\text{khi } 0 \\le x \\le 1, \\; 0 \\le y \\le 1 \\\\
0 & \\text{khi } (x, y) \\notin [0, 1] \\times [0, 1]
\\end{cases}$$
a) Tìm hằng số chuẩn hóa $k$.
b) Tính xác suất $P(0 \\le X \\le 0{,}5, \\; 0 \\le Y \\le 0{,}5)$.
c) Tính xác suất $P(X + Y \\le 1)$.`,
    tips: "Điều kiện chuẩn hóa 2 chiều: $\\iint_{\\mathbb{R}^2} f(x, y) dx dy = 1$. Với miền tích phân tam giác $X + Y \\le 1$, xác định cận: $0 \\le x \\le 1$, $0 \\le y \\le 1 - x$.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hằng số $k$",
        stepContent: `Áp dụng điều kiện chuẩn hóa tích phân hai lớp:
$$\\int_0^1 \\int_0^1 k(x + 2y) dx dy = 1$$
Tính tích phân trong theo $x$:
$$\\int_0^1 (x + 2y) dx = \\left[ \\frac{x^2}{2} + 2yx \\right]_0^1 = \\frac{1}{2} + 2y$$
Tính tiếp tích phân ngoài theo $y$:
$$\\int_0^1 \\left(\\frac{1}{2} + 2y\\right) dy = \\left[ \\frac{y}{2} + y^2 \\right]_0^1 = \\frac{1}{2} + 1 = \\frac{3}{2}$$
Do đó:
$$k \\times \\frac{3}{2} = 1 \\implies k = \\frac{2}{3}$$`
      },
      {
        stepTitle: "Bước 2: Tính $P(0 \\le X \\le 0{,}5, \\; 0 \\le Y \\le 0{,}5)$",
        stepContent: `Tính tích phân trên hình vuông con $[0, 0{,}5] \\times [0, 0{,}5]$:
$$P = \\int_0^{0{,}5} \\int_0^{0{,}5} \\frac{2}{3}(x + 2y) dx dy$$
Tích phân theo $x$:
$$\\int_0^{0{,}5} (x + 2y) dx = \\left[ \\frac{x^2}{2} + 2yx \\right]_0^{0{,}5} = \\frac{0{,}25}{2} + y = \\frac{1}{8} + y$$
Tích phân theo $y$:
$$\\int_0^{0{,}5} \\left(\\frac{1}{8} + y\\right) dy = \\left[ \\frac{y}{8} + \\frac{y^2}{2} \\right]_0^{0{,}5} = \\frac{1}{16} + \\frac{1}{8} = \\frac{3}{16}$$
Nhân với hệ số $k = 2/3$:
$$P = \\frac{2}{3} \\times \\frac{3}{16} = \\frac{2}{16} = \\frac{1}{8} = 0{,}125$$`
      },
      {
        stepTitle: "Bước 3: Tính $P(X + Y \\le 1)$",
        stepContent: `Miền $D$: $\\{0 \\le x \\le 1, \\; 0 \\le y \\le 1 - x\\}$:
$$P(X + Y \\le 1) = \\frac{2}{3} \\int_0^1 dx \\int_0^{1-x} (x + 2y) dy$$
Tích phân trong theo $y$:
$$\\int_0^{1-x} (x + 2y) dy = \\left[ xy + y^2 \\right]_0^{1-x} = x(1 - x) + (1 - x)^2 = (1 - x)(x + 1 - x) = 1 - x$$
Tích phân ngoài theo $x$:
$$\\int_0^1 (1 - x) dx = \\left[ x - \\frac{x^2}{2} \\right]_0^1 = 1 - \\frac{1}{2} = \\frac{1}{2}$$
Vậy:
$$P(X + Y \\le 1) = \\frac{2}{3} \\times \\frac{1}{2} = \\frac{1}{3} \\approx 0{,}3333$$`
      }
    ],
    finalAnswer: "a) k = 2/3 | b) P = 1/8 = 0,125 | c) P(X + Y <= 1) = 1/3 approx 0,3333"
  },
  {
    id: "ex-3-10",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Mật độ Đồng thời Liên tục",
    difficulty: "Nâng cao",
    title: "Bài tập 10: Hàm mật độ đồng thời trên miền tam giác",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên $(X, Y)$ có hàm mật độ xác suất đồng thời:
$$f(x, y) = \\begin{cases}
c x y & \\text{khi } 0 \\le x \\le y \\le 1 \\\\
0 & \\text{nơi khác}
\\end{cases}$$
a) Xác định hằng số $c$.
b) Tìm hàm mật độ biên $f_X(x)$ và $f_Y(y)$.
c) Tính xác suất $P(Y \\ge 2X)$.`,
    tips: "Miền tam giác $0 \\le x \\le y \\le 1$: Khi tính tích phân theo $y$ thì $y$ chạy từ $x$ đến 1; khi tính theo $x$ thì $x$ chạy từ 0 đến $y$.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hằng số $c$",
        stepContent: `Điều kiện chuẩn hóa trên miền tam giác:
$$\\int_0^1 dy \\int_0^y c x y dx = 1$$
Tính tích phân trong theo $x$:
$$\\int_0^y x dx = \\frac{y^2}{2} \\implies c y \\times \\frac{y^2}{2} = \\frac{c y^3}{2}$$
Tích phân ngoài theo $y$:
$$\\int_0^1 \\frac{c y^3}{2} dy = \\frac{c}{2} \\left[ \\frac{y^4}{4} \\right]_0^1 = \\frac{c}{8}$$
Suy ra:
$$\\frac{c}{8} = 1 \\implies c = 8$$`
      },
      {
        stepTitle: "Bước 2: Tìm hàm mật độ biên $f_X(x)$",
        stepContent: `Với $x \\in [0, 1]$, tích phân theo $y$ từ $x$ đến 1:
$$f_X(x) = \\int_x^1 8xy dy = 8x \\left[ \\frac{y^2}{2} \\right]_x^1 = 4x (1 - x^2)$$
Vậy:
$$f_X(x) = \\begin{cases}
4x(1 - x^2) & \\text{khi } 0 \\le x \\le 1 \\\\
0 & \\text{nơi khác}
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 3: Tìm hàm mật độ biên $f_Y(y)$",
        stepContent: `Với $y \\in [0, 1]$, tích phân theo $x$ từ 0 đến $y$:
$$f_Y(y) = \\int_0^y 8xy dx = 8y \\left[ \\frac{x^2}{2} \\right]_0^y = 4y(y^2) = 4y^3$$
Vậy:
$$f_Y(y) = \\begin{cases}
4y^3 & \\text{khi } 0 \\le y \\le 1 \\\\
0 & \\text{nơi khác}
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 4: Tính $P(Y \\ge 2X)$",
        stepContent: `Điều kiện: $0 \\le x \\le y/2$ và $0 \\le y \\le 1$:
$$P(Y \\ge 2X) = \\int_0^1 dy \\int_0^{y/2} 8xy dx$$
Tích phân theo $x$:
$$\\int_0^{y/2} 8xy dx = 8y \\left[ \\frac{x^2}{2} \\right]_0^{y/2} = 8y \\times \\frac{y^2}{8} = y^3$$
Tích phân theo $y$:
$$\\int_0^1 y^3 dy = \\left[ \\frac{y^4}{4} \\right]_0^1 = \\frac{1}{4} = 0{,}25$$`
      }
    ],
    finalAnswer: "a) c = 8 | b) f_X(x) = 4x(1-x^2); f_Y(y) = 4y^3 trên [0,1] | c) P(Y >= 2X) = 0,25"
  },
  {
    id: "ex-3-11",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Mật độ Biên & Tính Độc Lập",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 11: Mật độ biên và kiểm tra tính độc lập của BNN liên tục",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên $(X, Y)$ có hàm mật độ xác suất:
$$f(x, y) = \\begin{cases}
4 x y & \\text{khi } 0 \\le x \\le 1, \\; 0 \\le y \\le 1 \\\\
0 & \\text{nơi khác}
\\end{cases}$$
a) Tìm các hàm mật độ biên $f_X(x)$ và $f_Y(y)$.
b) Hai biến ngẫu nhiên $X$ và $Y$ có độc lập với nhau không?
c) Tính xác suất $P(X < 0{,}5, \\; Y > 0{,}5)$.`,
    tips: "BNN liên tục $X$ và $Y$ độc lập khi và chỉ khi $f(x, y) = f_X(x) \\cdot f_Y(y)$ trên toàn bộ miền xác định dạng hình chữ nhật.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hàm mật độ biên $f_X(x)$",
        stepContent: `Với $0 \\le x \\le 1$:
$$f_X(x) = \\int_{-\\infty}^{+\\infty} f(x, y) dy = \\int_0^1 4xy dy = 4x \\left[ \\frac{y^2}{2} \\right]_0^1 = 2x$$
Với $x \\notin [0, 1]$, $f_X(x) = 0$.`
      },
      {
        stepTitle: "Bước 2: Tìm hàm mật độ biên $f_Y(y)$",
        stepContent: `Do tính đối xứng hoàn toàn giữa $x$ và $y$:
$$f_Y(y) = \\int_0^1 4xy dx = 4y \\left[ \\frac{x^2}{2} \\right]_0^1 = 2y, \\quad 0 \\le y \\le 1$$
Với $y \\notin [0, 1]$, $f_Y(y) = 0$.`
      },
      {
        stepTitle: "Bước 3: Kiểm tra tính độc lập",
        stepContent: `Xét tích hai hàm mật độ biên trên hình vuông đơn vị $[0, 1] \\times [0, 1]$:
$$f_X(x) \\cdot f_Y(y) = (2x) \\cdot (2y) = 4xy$$
Ta thấy:
$$f(x, y) = f_X(x) \\cdot f_Y(y), \\quad \\forall (x, y) \\in \\mathbb{R}^2$$
Vậy $X$ và $Y$ là hai biến ngẫu nhiên độc lập.`
      },
      {
        stepTitle: "Bước 4: Tính xác suất $P(X < 0{,}5, \\; Y > 0{,}5)$",
        stepContent: `Do $X$ và $Y$ độc lập:
$$P(X < 0{,}5, \\; Y > 0{,}5) = P(X < 0{,}5) \\times P(Y > 0{,}5)$$
Tính từng thành phần:
$$P(X < 0{,}5) = \\int_0^{0{,}5} 2x dx = \\left[ x^2 \\right]_0^{0{,}5} = 0{,}25$$
$$P(Y > 0{,}5) = \\int_{0{,}5}^1 2y dy = \\left[ y^2 \\right]_{0{,}5}^1 = 1 - 0{,}25 = 0{,}75$$
Nhân lại:
$$P = 0{,}25 \\times 0{,}75 = 0{,}1875$$`
      }
    ],
    finalAnswer: "a) f_X(x) = 2x; f_Y(y) = 2y trên [0,1] | b) X và Y độc lập | c) P = 0,1875"
  },
  {
    id: "ex-3-12",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Mật độ Có điều kiện & Kỳ vọng Có điều kiện Liên tục",
    difficulty: "Nâng cao",
    title: "Bài tập 12: Mật độ có điều kiện và hồi quy lý thuyết E(Y|X=x)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên $(X, Y)$ có hàm mật độ đồng thời:
$$f(x, y) = \\begin{cases}
x + y & \\text{khi } 0 \\le x \\le 1, \\; 0 \\le y \\le 1 \\\\
0 & \\text{nơi khác}
\\end{cases}$$
a) Tìm hàm mật độ có điều kiện $f(y \\mid x)$.
b) Xác định kỳ vọng có điều kiện $E(Y \\mid X = x)$ (đường hồi quy lý thuyết của $Y$ theo $X$).
c) Tính giá trị $E(Y \\mid X = 0{,}5)$.`,
    tips: "Mật độ có điều kiện liên tục: $f(y \\mid x) = \\frac{f(x, y)}{f_X(x)}$. Kỳ vọng có điều kiện liên tục: $E(Y \\mid X = x) = \\int_{-\\infty}^{+\\infty} y f(y \\mid x) dy$.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm hàm mật độ biên $f_X(x)$",
        stepContent: `Với $0 \\le x \\le 1$:
$$f_X(x) = \\int_0^1 (x + y) dy = \\left[ xy + \\frac{y^2}{2} \\right]_0^1 = x + \\frac{1}{2}$$`
      },
      {
        stepTitle: "Bước 2: Tìm hàm mật độ có điều kiện $f(y \\mid x)$",
        stepContent: `Áp dụng công thức mật độ có điều kiện với $0 \\le x \\le 1, 0 \\le y \\le 1$:
$$f(y \\mid x) = \\frac{f(x, y)}{f_X(x)} = \\frac{x + y}{x + 1/2} = \\frac{2(x + y)}{2x + 1}$$
Kiểm tra tính chuẩn hóa:
$$\\int_0^1 \\frac{2(x + y)}{2x + 1} dy = \\frac{2}{2x + 1} \\left[ xy + \\frac{y^2}{2} \\right]_0^1 = \\frac{2(x + 1/2)}{2x + 1} = 1$$`
      },
      {
        stepTitle: "Bước 3: Tính kỳ vọng có điều kiện $E(Y \\mid X = x)$",
        stepContent: `Tính tích phân:
$$E(Y \\mid X = x) = \\int_0^1 y f(y \\mid x) dy = \\int_0^1 y \\frac{2(x + y)}{2x + 1} dy$$
$$= \\frac{2}{2x + 1} \\int_0^1 (xy + y^2) dy = \\frac{2}{2x + 1} \\left[ \\frac{xy^2}{2} + \\frac{y^3}{3} \\right]_0^1$$
$$= \\frac{2}{2x + 1} \\left( \\frac{x}{2} + \\frac{1}{3} \\right) = \\frac{2}{2x + 1} \\left( \\frac{3x + 2}{6} \\right) = \\frac{3x + 2}{3(2x + 1)}$$`
      },
      {
        stepTitle: "Bước 4: Tính $E(Y \\mid X = 0{,}5)$",
        stepContent: `Thay $x = 0{,}5$ vào biểu thức vừa tìm được:
$$E(Y \\mid X = 0{,}5) = \\frac{3(0{,}5) + 2}{3(2 \\times 0{,}5 + 1)} = \\frac{1{,}5 + 2}{3(1 + 1)} = \\frac{3{,}5}{6} = \\frac{7}{12} \\approx 0{,}5833$$`
      }
    ],
    finalAnswer: "a) f(y|x) = 2(x+y)/(2x+1) | b) E(Y|X=x) = (3x+2)/(6x+3) | c) E(Y|X=0,5) = 7/12 approx 0,5833"
  },
  {
    id: "ex-3-13",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Hiệp phương sai BNN Liên tục",
    difficulty: "Nâng cao",
    title: "Bài tập 13: Hiệp phương sai và hệ số tương quan của BNN liên tục",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho vectơ ngẫu nhiên liên tục $(X, Y)$ có hàm mật độ đồng thời:
$$f(x, y) = \\begin{cases}
8 x y & \\text{khi } 0 \\le x \\le y \\le 1 \\\\
0 & \\text{nơi khác}
\\end{cases}$$
a) Tính các kỳ vọng $E(X), E(Y)$ và $E(XY)$.
b) Tính hiệp phương sai $Cov(X, Y)$.
c) Tính phương sai $D(X), D(Y)$ và hệ số tương quan Pearson $\\rho_{XY}$.`,
    tips: "Miền lấy tích phân là tam giác $0 \\le x \\le y \\le 1$. Tích phân $E(X) = \\iint x f(x, y) dx dy$ hoặc sử dụng các hàm mật độ biên đã tìm ở bài tập 10.",
    steps: [
      {
        stepTitle: "Bước 1: Tính $E(X)$ và $E(Y)$ từ hàm mật độ biên",
        stepContent: `Từ bài tập 10, ta đã có các mật độ biên:
$$f_X(x) = 4x(1 - x^2), \\quad 0 \\le x \\le 1$$
$$f_Y(y) = 4y^3, \\quad 0 \\le y \\le 1$$
Tính các kỳ vọng:
$$E(X) = \\int_0^1 x \\cdot 4x(1 - x^2) dx = 4 \\int_0^1 (x^2 - x^4) dx = 4 \\left[ \\frac{x^3}{3} - \\frac{x^5}{5} \\right]_0^1 = 4 \\left( \\frac{1}{3} - \\frac{1}{5} \\right) = \\frac{8}{15}$$
$$E(Y) = \\int_0^1 y \\cdot 4y^3 dy = 4 \\int_0^1 y^4 dy = 4 \\left[ \\frac{y^5}{5} \\right]_0^1 = \\frac{4}{5}$$`
      },
      {
        stepTitle: "Bước 2: Tính kỳ vọng tích $E(XY)$",
        stepContent: `Tính tích phân hai lớp trên miền tam giác:
$$E(XY) = \\int_0^1 dy \\int_0^y (xy)(8xy) dx = 8 \\int_0^1 y^2 dy \\int_0^y x^2 dx$$
Tích phân theo $x$:
$$\\int_0^y x^2 dx = \\frac{y^3}{3}$$
Tích phân theo $y$:
$$E(XY) = 8 \\int_0^1 y^2 \\left( \\frac{y^3}{3} \\right) dy = \\frac{8}{3} \\int_0^1 y^5 dy = \\frac{8}{3} \\left[ \\frac{y^6}{6} \\right]_0^1 = \\frac{8}{18} = \\frac{4}{9}$$`
      },
      {
        stepTitle: "Bước 3: Tính Hiệp phương sai $Cov(X, Y)$",
        stepContent: `Áp dụng công thức:
$$Cov(X, Y) = E(XY) - E(X)E(Y) = \\frac{4}{9} - \\left(\\frac{8}{15}\\right)\\left(\\frac{4}{5}\\right)$$
$$= \\frac{4}{9} - \\frac{32}{75} = \\frac{100 - 96}{225} = \\frac{4}{225} \\approx 0{,}0178$$`
      },
      {
        stepTitle: "Bước 4: Tính hệ số tương quan $\\rho_{XY}$",
        stepContent: `Tính các mômen bậc hai:
$$E(X^2) = \\int_0^1 x^2 \\cdot 4x(1 - x^2) dx = 4 \\int_0^1 (x^3 - x^5) dx = 4 \\left( \\frac{1}{4} - \\frac{1}{6} \\right) = 4 \\times \\frac{1}{12} = \\frac{1}{3}$$
$$D(X) = \\frac{1}{3} - \\left(\\frac{8}{15}\\right)^2 = \\frac{1}{3} - \\frac{64}{225} = \\frac{75 - 64}{225} = \\frac{11}{225}$$
$$E(Y^2) = \\int_0^1 y^2 \\cdot 4y^3 dy = 4 \\int_0^1 y^5 dy = \\frac{4}{6} = \\frac{2}{3}$$
$$D(Y) = \\frac{2}{3} - \\left(\\frac{4}{5}\\right)^2 = \\frac{2}{3} - \\frac{16}{25} = \\frac{50 - 48}{75} = \\frac{2}{75} = \\frac{6}{225}$$
Hệ số tương quan:
$$\\rho_{XY} = \\frac{Cov(X, Y)}{\\sqrt{D(X) D(Y)}} = \\frac{4/225}{\\sqrt{\\frac{11}{225} \\times \\frac{6}{225}}} = \\frac{4}{\\sqrt{66}} \\approx \\frac{4}{8{,}124} \\approx 0{,}4924$$`
      }
    ],
    finalAnswer: "a) E(X)=8/15, E(Y)=4/5, E(XY)=4/9 | b) Cov(X,Y) = 4/225 | c) rho_{XY} = 4/sqrt(66) approx 0,4924"
  },
  {
    id: "ex-3-14",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Phân phối Chuẩn 2 Chiều",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 14: Phân phối Chuẩn hai chiều và tính chất độc lập",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Vectơ ngẫu nhiên $(X, Y)$ có phân phối chuẩn hai chiều với các tham số:
$$\\mu_X = 10, \\quad \\mu_Y = 20, \\quad \\sigma_X^2 = 4, \\quad \\sigma_Y^2 = 9, \\quad \\rho_{XY} = 0$$
a) Viết biểu thức giải tích của hàm mật độ đồng thời $f(x, y)$.
b) Chứng minh $X$ và $Y$ độc lập với nhau.
c) Tính xác suất $P(8 \\le X \\le 12, \\; 17 \\le Y \\le 23)$.
(Cho biết $\\Phi_0(1) = 0{,}3413$).`,
    tips: "Với phân phối chuẩn hai chiều, điều kiện $\\rho_{XY} = 0$ là điều kiện cần VÀ ĐỦ để hai biến độc lập (đây là tính chất rất đặc biệt chỉ có ở phân phối Chuẩn).",
    steps: [
      {
        stepTitle: "Bước 1: Viết biểu thức hàm mật độ chuẩn hai chiều khi $\\rho = 0$",
        stepContent: `Công thức hàm mật độ chuẩn 2 chiều tổng quát với $\\rho = 0$:
$$f(x, y) = \\frac{1}{2\\pi \\sigma_X \\sigma_Y} \\exp\\left( -\\frac{1}{2} \\left[ \\left(\\frac{x - \\mu_X}{\\sigma_X}\\right)^2 + \\left(\\frac{y - \\mu_Y}{\\sigma_Y}\\right)^2 \\right] \\right)$$
Thay các tham số $\\mu_X = 10, \\sigma_X = 2, \\mu_Y = 20, \\sigma_Y = 3$:
$$f(x, y) = \\frac{1}{2\\pi (2)(3)} \\exp\\left( -\\frac{1}{2} \\left[ \\frac{(x - 10)^2}{4} + \\frac{(y - 20)^2}{9} \\right] \\right)$$
$$f(x, y) = \\frac{1}{12\\pi} \\exp\\left( -\\frac{(x - 10)^2}{8} - \\frac{(y - 20)^2}{18} \\right)$$`
      },
      {
        stepTitle: "Bước 2: Chứng minh $X$ và $Y$ độc lập",
        stepContent: `Tách biểu thức hàm số mũ:
$$f(x, y) = \\left[ \\frac{1}{\\sqrt{2\\pi}(2)} e^{-\\frac{(x - 10)^2}{2(4)}} \\right] \\times \\left[ \\frac{1}{\\sqrt{2\\pi}(3)} e^{-\\frac{(y - 20)^2}{2(9)}} \\right]$$
$$f(x, y) = f_X(x) \\cdot f_Y(y)$$
Trong đó $f_X(x)$ là mật độ của $N(10, 4)$ và $f_Y(y)$ là mật độ của $N(20, 9)$.
Vì hàm mật độ đồng thời bằng tích hai hàm mật độ biên nên $X$ và $Y$ độc lập.`
      },
      {
        stepTitle: "Bước 3: Tính xác suất $P(8 \\le X \\le 12, \\; 17 \\le Y \\le 23)$",
        stepContent: `Do tính độc lập:
$$P = P(8 \\le X \\le 12) \\times P(17 \\le Y \\le 23)$$
Chuẩn hóa biến $X$:
$$P(8 \\le X \\le 12) = P\\left( \\frac{8 - 10}{2} \\le Z_X \\le \\frac{12 - 10}{2} \\right) = P(-1 \\le Z_X \\le 1) = 2 \\Phi_0(1) = 2(0{,}3413) = 0{,}6826$$
Chuẩn hóa biến $Y$:
$$P(17 \\le Y \\le 23) = P\\left( \\frac{17 - 20}{3} \\le Z_Y \\le \\frac{23 - 20}{3} \\right) = P(-1 \\le Z_Y \\le 1) = 2 \\Phi_0(1) = 0{,}6826$$
Nhân hai xác suất:
$$P = 0{,}6826 \\times 0{,}6826 \\approx 0{,}4659$$`
      }
    ],
    finalAnswer: "a) f(x,y) = (1/(12pi)) * exp(-((x-10)^2/8 + (y-20)^2/18)) | b) Độc lập vì f(x,y)=f_X(x)f_Y(y) | c) P approx 0,4659"
  },
  {
    id: "ex-3-15",
    chapter: "chuong-3",
    chapterName: "Chương 3: Biến Ngẫu Nhiên 2 Chiều",
    category: "Ứng dụng Tài chính & Quản lý Danh mục",
    difficulty: "Nâng cao",
    title: "Bài tập 15: Tối ưu hóa phương sai danh mục đầu tư 2 tài sản (Markowitz)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một nhà đầu tư phân bổ vốn vào hai loại cổ phiếu $A$ và $B$ với tỷ trọng lần lượt là $w$ và $1 - w$ ($0 \\le w \\le 1$). Tỷ suất sinh lời của hai cổ phiếu là $R_A$ và $R_B$ có các đặc trưng:
$$E(R_A) = 14\\%, \\quad \\sigma_A = 12\\%$$
$$E(R_B) = 8\\%, \\quad \\sigma_B = 6\\%$$
Hệ số tương quan giữa hai cổ phiếu là $\\rho = 0{,}2$.
a) Thiết lập biểu thức tỷ suất sinh lời kỳ vọng $E(R_p)$ và phương sai $\\sigma_p^2$ của danh mục theo $w$.
b) Tìm tỷ trọng $w^*$ để danh mục đầu tư đạt phương sai nhỏ nhất (Minimum Variance Portfolio).
c) Tính tỷ suất sinh lời kỳ vọng và độ lệch chuẩn của danh mục tại cấu trúc tối ưu $w^*$.`,
    tips: "Phương sai danh mục: $\\sigma_p^2 = w^2 \\sigma_A^2 + (1-w)^2 \\sigma_B^2 + 2w(1-w) Cov(R_A, R_B)$. Để tìm cực tiểu, lấy đạo hàm theo $w$ và cho bằng 0.",
    steps: [
      {
        stepTitle: "Bước 1: Tính hiệp phương sai $Cov(R_A, R_B)$",
        stepContent: `Áp dụng công thức:
$$Cov(R_A, R_B) = \\rho \\sigma_A \\sigma_B = 0{,}2 \\times 12 \\times 6 = 14{,}4$$`
      },
      {
        stepTitle: "Bước 2: Thiết lập phương sai danh mục $\\sigma_p^2(w)$",
        stepContent: `Tỷ suất sinh lời danh mục $R_p = w R_A + (1 - w) R_B$.
Kỳ vọng:
$$E(R_p) = w E(R_A) + (1 - w) E(R_B) = 14w + 8(1 - w) = 6w + 8 \\text{ (\\%)}$$
Phương sai danh mục:
$$\\sigma_p^2 = w^2 \\sigma_A^2 + (1 - w)^2 \\sigma_B^2 + 2w(1 - w) Cov(R_A, R_B)$$
$$\\sigma_p^2 = 144 w^2 + 36 (1 - 2w + w^2) + 28{,}8 (w - w^2)$$
$$\\sigma_p^2 = (144 + 36 - 28{,}8) w^2 + (-72 + 28{,}8) w + 36$$
$$\\sigma_p^2 = 151{,}2 w^2 - 43{,}2 w + 36$$`
      },
      {
        stepTitle: "Bước 3: Tìm $w^*$ làm cực tiểu hóa phương sai",
        stepContent: `Lấy đạo hàm bậc nhất của $\\sigma_p^2$ theo $w$:
$$\\frac{d(\\sigma_p^2)}{dw} = 2(151{,}2) w - 43{,}2 = 302{,}4 w - 43{,}2 = 0$$
$$w^* = \\frac{43{,}2}{302{,}4} = \\frac{1}{7} \\approx 0{,}1429 = 14{,}29\\%$$
Tỷ trọng cổ phiếu $B$ là $1 - w^* = \\frac{6}{7} \\approx 85{,}71\\%$.
Vì đạo hàm bậc hai $302{,}4 > 0$ nên đây là điểm cực tiểu toàn cục.`
      },
      {
        stepTitle: "Bước 4: Tính các tham số của danh mục tối ưu",
        stepContent: `Tỷ suất sinh lời kỳ vọng:
$$E(R_p^*) = 6\\left(\\frac{1}{7}\\right) + 8 = \\frac{6 + 56}{7} = \\frac{62}{7} \\approx 8{,}857\\%$$
Phương sai nhỏ nhất:
$$\\sigma_p^2 = 151{,}2 \\left(\\frac{1}{7}\\right)^2 - 43{,}2 \\left(\\frac{1}{7}\\right) + 36$$
$$\\sigma_p^2 = \\frac{151{,}2}{49} - \\frac{302{,}4}{49} + \\frac{1764}{49} = \\frac{1612{,}8}{49} \\approx 32{,}914$$
Độ lệch chuẩn (rủi ro):
$$\\sigma_p = \\sqrt{32{,}914} \\approx 5{,}737\\%$$
Nhận xét: Rủi ro danh mục ($5{,}74\\%$) thấp hơn cả rủi ro của tài sản ít rủi ro nhất là $B$ ($6\\%$) nhờ hiệu ứng đa dạng hóa đầu tư.`
      }
    ],
    finalAnswer: "a) E(R_p) = 6w + 8; sigma_p^2 = 151,2 w^2 - 43,2 w + 36 | b) w* = 1/7 approx 14,29% | c) E(R_p*) approx 8,86%, sigma_p approx 5,74%"
  }
];
