export const chapter4Exercises = [
  {
    id: "ex-4-01",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Thống kê Mô tả & Mẫu ngẫu nhiên",
    difficulty: "Cơ bản",
    title: "Bài tập 1: Tính trung bình mẫu, phương sai hiệu chỉnh từ bảng ghép lớp",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Khảo sát thời gian hoàn thành một tác vụ (phút) của 50 lập trình viên, ta thu được bảng số liệu ghép nhóm:
$$\\begin{array}{c|ccccc}
\\text{Khoang gia tri} & [10, 14) & [14, 18) & [18, 22) & [22, 26) & [26, 30] \\\\ \\hline
\n_i & 6 & 14 & 18 & 8 & 4
\\end{array}$$
a) Xác định giá trị đại diện của từng lớp và tính trung bình mẫu $\\overline{x}$.
b) Tính phương sai mẫu $s^2$, phương sai mẫu hiệu chỉnh $s'^2$ và độ lệch chuẩn hiệu chỉnh $s'$.
c) Tính hệ số biến thiên $CV = \\frac{s'}{\\overline{x}} \\times 100\\%$.`,
    tips: "Giá trị đại diện mỗi nhóm là trung điểm hai mút: $x_i = \\frac{a_i + b_i}{2}$. Công thức phương sai hiệu chỉnh: $s'^2 = \\frac{n}{n-1} s^2 = \\frac{1}{n-1}\\left[\\sum n_i x_i^2 - n(\\overline{x})^2\\right]$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định giá trị đại diện các lớp",
        stepContent: `Lấy trung điểm của mỗi khoảng:
- $[10, 14) \\implies x_1 = 12$, tần số $n_1 = 6$
- $[14, 18) \\implies x_2 = 16$, tần số $n_2 = 14$
- $[18, 22) \\implies x_3 = 20$, tần số $n_3 = 18$
- $[22, 26) \\implies x_4 = 24$, tần số $n_4 = 8$
- $[26, 30] \\implies x_5 = 28$, tần số $n_5 = 4$
Tổng kích thước mẫu: $n = 6 + 14 + 18 + 8 + 4 = 50$.`
      },
      {
        stepTitle: "Bước 2: Tính trung bình mẫu $\\overline{x}$",
        stepContent: `Tính tổng $\\sum n_i x_i$:
$$\\sum n_i x_i = 6(12) + 14(16) + 18(20) + 8(24) + 4(28)$$
$$= 72 + 224 + 360 + 192 + 112 = 960$$
Trung bình mẫu:
$$\\overline{x} = \\frac{\\sum n_i x_i}{n} = \\frac{960}{50} = 19{,}2 \ \text{ phut}$$`
      },
      {
        stepTitle: "Bước 3: Tính phương sai mẫu và phương sai hiệu chỉnh",
        stepContent: `Tính tổng bình phương $\\sum n_i x_i^2$:
$$\\sum n_i x_i^2 = 6(12^2) + 14(16^2) + 18(20^2) + 8(24^2) + 4(28^2)$$
$$= 6(144) + 14(256) + 18(400) + 8(576) + 4(784)$$
$$= 864 + 3584 + 7200 + 4608 + 3136 = 19392$$
Phương sai mẫu:
$$s^2 = \\frac{1}{n} \\sum n_i x_i^2 - (\\overline{x})^2 = \\frac{19392}{50} - (19{,}2)^2 = 387{,}84 - 368{,}64 = 19{,}2$$
Phương sai mẫu hiệu chỉnh:
$$s'^2 = \\frac{n}{n - 1} s^2 = \\frac{50}{49} \\times 19{,}2 \\approx 19{,}5918$$
Độ lệch chuẩn hiệu chỉnh:
$$s' = \\sqrt{19{,}5918} \\approx 4{,}4263 \ \text{ phut}$$`
      },
      {
        stepTitle: "Bước 4: Tính hệ số biến thiên $CV$",
        stepContent: `Áp dụng công thức:
$$CV = \\frac{s'}{\\overline{x}} \\times 100\\% = \\frac{4{,}4263}{19{,}2} \\times 100\\% \\approx 23{,}05\\%$$
Hệ số biến thiên $CV \\approx 23{,}05\\% < 33\\%$ cho thấy mức độ phân tán của dữ liệu ở mức trung bình, mẫu có tính đại diện tốt.`
      }
    ],
    finalAnswer: "a) x_bar = 19,2 phút | b) s^2 = 19,2; s'^2 approx 19,5918; s' approx 4,4263 phút | c) CV approx 23,05%"
  },
  {
    id: "ex-4-02",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Ước lượng Điểm MLE",
    difficulty: "Nâng cao",
    title: "Bài tập 2: Ước lượng hợp lý cực đại (MLE) cho tham số phân phối Poisson",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho mẫu ngẫu nhiên $W = (X_1, X_2, \\dots, X_n)$ độc lập cùng tuân theo phân phối Poisson với tham số $\\lambda > 0$:
$$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\dots$$
a) Thiết lập hàm hợp lý $L(\\lambda)$ và hàm log-hợp lý $\\ln L(\\lambda)$.
b) Tìm ước lượng hợp lý cực đại $\\widehat{\\lambda}_{MLE}$.
c) Chứng minh $\\widehat{\\lambda}_{MLE}$ là ước lượng không chệch của $\\lambda$.`,
    tips: "Các bước tìm MLE: Lập $L(\\theta) = \\prod f(x_i; \\theta)$, lấy $\\ln L(\\theta)$, giải phương trình đạo hàm $\\frac{d \\ln L}{d\\theta} = 0$, kiểm tra đạo hàm bậc hai âm.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập hàm hợp lý và log-hợp lý",
        stepContent: `Vì các quan sát độc lập cùng phân phối:
$$L(\\lambda) = \\prod_{i=1}^n P(X_i = x_i) = \\prod_{i=1}^n \\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!} = \\frac{\\lambda^{\\sum x_i} e^{-n\\lambda}}{\\prod_{i=1}^n (x_i!)}$$
Lấy logarit tự nhiên hai vế:
$$\\ln L(\\lambda) = \\ln\\left(\\lambda^{\\sum x_i}\\right) + \\ln(e^{-n\\lambda}) - \\ln\\left(\\prod_{i=1}^n x_i!\\right)$$
$$\\ln L(\\lambda) = \\left(\\sum_{i=1}^n x_i\\right) \\ln\\lambda - n\\lambda - \\sum_{i=1}^n \\ln(x_i!)$$`
      },
      {
        stepTitle: "Bước 2: Tìm nghiệm của phương trình hợp lý cực đại",
        stepContent: `Lấy đạo hàm riêng theo $\\lambda$:
$$\\frac{d \\ln L(\\lambda)}{d\\lambda} = \\frac{\\sum_{i=1}^n x_i}{\\lambda} - n = 0$$
$$\\implies \\frac{\\sum_{i=1}^n x_i}{\\lambda} = n \\implies \\lambda = \\frac{\\sum_{i=1}^n x_i}{n} = \\overline{x}$$
Kiểm tra đạo hàm bậc hai:
$$\\frac{d^2 \\ln L(\\lambda)}{d\\lambda^2} = -\\frac{\\sum_{i=1}^n x_i}{\\lambda^2} < 0 \\quad (\\text{voi } \\sum x_i > 0)$$
Do đó hàm đạt cực đại toàn cục tại:
$$\\widehat{\\lambda}_{MLE} = \\overline{X} = \\frac{1}{n} \\sum_{i=1}^n X_i$$`
      },
      {
        stepTitle: "Bước 3: Chứng minh tính không chệch",
        stepContent: `Ước lượng $\\widehat{\\theta}$ là không chệch nếu $E(\\widehat{\\theta}) = \\theta$.
Tính kỳ vọng toán của $\\widehat{\\lambda}_{MLE}$:
$$E(\\widehat{\\lambda}_{MLE}) = E\\left( \\frac{1}{n} \\sum_{i=1}^n X_i \\right) = \\frac{1}{n} \\sum_{i=1}^n E(X_i)$$
Vì $X_i \\sim P(\\lambda)$ nên $E(X_i) = \\lambda$:
$$E(\\widehat{\\lambda}_{MLE}) = \\frac{1}{n} \\sum_{i=1}^n \\lambda = \\frac{1}{n} (n\\lambda) = \\lambda$$
Vậy ước lượng hợp lý cực đại $\\widehat{\\lambda}_{MLE} = \\overline{X}$ là một ước lượng không chệch của tham số $\\lambda$.`
      }
    ],
    finalAnswer: "a) ln L(lambda) = (sum x_i)*ln(lambda) - n*lambda - sum ln(x_i!) | b) lambda_MLE = X_bar | c) E(lambda_MLE) = lambda (ước lượng không chệch)"
  },
  {
    id: "ex-4-03",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Ước lượng Điểm MME",
    difficulty: "Nâng cao",
    title: "Bài tập 3: Phương pháp mômen (Method of Moments) cho phân phối đều U(0, θ)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho mẫu ngẫu nhiên $X_1, X_2, \\dots, X_n$ từ tổng thể phân phối đều $U(0, \\theta)$ với tham số $\\theta > 0$ chưa biết.
a) Dùng phương pháp mômen tìm ước lượng $\\widehat{\\theta}_{MME}$.
b) Kiểm tra tính không chệch của $\\widehat{\\theta}_{MME}$.
c) Tính phương sai của ước lượng $Var(\\widehat{\\theta}_{MME})$.`,
    tips: "Phương pháp mômen: Đồng nhất mômen lý thuyết $\\alpha_k = E(X^k)$ với mômen mẫu $m_k = \\frac{1}{n}\\sum X_i^k$. Với 1 tham số, chỉ cần giải $\\alpha_1 = m_1 \\iff E(X) = \\overline{X}$.",
    steps: [
      {
        stepTitle: "Bước 1: Tìm ước lượng theo phương pháp mômen",
        stepContent: `Kỳ vọng lý thuyết của $X \\sim U(0, \\theta)$:
$$\\alpha_1 = E(X) = \\frac{0 + \\theta}{2} = \\frac{\\theta}{2}$$
Mômen mẫu bậc 1:
$$m_1 = \\overline{X}$$
Đồng nhất mômen lý thuyết với mômen mẫu:
$$\\frac{\\theta}{2} = \\overline{X} \\implies \\widehat{\\theta}_{MME} = 2\\overline{X} = \\frac{2}{n} \\sum_{i=1}^n X_i$$`
      },
      {
        stepTitle: "Bước 2: Kiểm tra tính không chệch",
        stepContent: `Tính kỳ vọng toán của ước lượng:
$$E(\\widehat{\\theta}_{MME}) = E(2\\overline{X}) = 2 E(\\overline{X}) = 2 E(X) = 2 \\left(\\frac{\\theta}{2}\\right) = \\theta$$
Vì $E(\\widehat{\\theta}_{MME}) = \\theta$, nên $\\widehat{\\theta}_{MME}$ là ước lượng không chệch của $\\theta$.`
      },
      {
        stepTitle: "Bước 3: Tính phương sai của ước lượng",
        stepContent: `Phương sai của biến ngẫu nhiên $X \\sim U(0, \\theta)$:
$$Var(X) = \\frac{(\\theta - 0)^2}{12} = \\frac{\\theta^2}{12}$$
Do các $X_i$ độc lập cùng phân phối:
$$Var(\\overline{X}) = \\frac{Var(X)}{n} = \\frac{\\theta^2}{12n}$$
Phương sai của ước lượng:
$$Var(\\widehat{\\theta}_{MME}) = Var(2\\overline{X}) = 4 Var(\\overline{X}) = 4 \\times \\frac{\\theta^2}{12n} = \\frac{\\theta^2}{3n}$$
Khi kích thước mẫu $n \\to \\infty$, $Var(\\widehat{\\theta}) \\to 0$, chứng minh ước lượng này cũng có tính vững.`
      }
    ],
    finalAnswer: "a) theta_MME = 2*X_bar | b) Không chệch vì E(theta_MME) = theta | c) Var(theta_MME) = theta^2 / (3n)"
  },
  {
    id: "ex-4-04",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy cho Kỳ Vọng",
    difficulty: "Cơ bản",
    title: "Bài tập 4: Ước lượng khoảng cho kỳ vọng khi đã biết phương sai chính xác",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Khối lượng đóng gói tự động của các bao xi măng tuân theo phân phối chuẩn với độ lệch chuẩn đã biết $\\sigma = 0{,}8\\text{ kg}$. Chọn ngẫu nhiên 36 bao xi măng để cân kiểm tra, thu được khối lượng trung bình mẫu là $\\overline{x} = 50{,}2\\text{ kg}$.
a) Hãy tìm khoảng tin cậy $95\\%$ cho khối lượng trung bình $\\mu$ của toàn bộ lô xi măng.
b) Nếu tăng độ tin cậy lên $99\\%$, khoảng tin cậy sẽ thay đổi như thế nào?
(Cho biết $u_{0{,}025} = 1{,}96$; $u_{0{,}005} = 2{,}576$).`,
    tips: "Khi đã biết $\\sigma$, dùng thống kê chuẩn tắc $Z = \\frac{\\overline{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0, 1)$. Độ chính xác: $\\epsilon = u_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định mô hình và các tham số mẫu",
        stepContent: `Tổng thể tuân theo phân phối chuẩn với $\\sigma = 0{,}8\\text{ kg}$.
Kích thước mẫu: $n = 36 \\implies \\sqrt{n} = 6$.
Trung bình mẫu: $\\overline{x} = 50{,}2\\text{ kg}$.
Độ tin cậy $1 - \\alpha = 0{,}95 \\implies \\alpha = 0{,}05 \\implies \\frac{\\alpha}{2} = 0{,}025$.
Tra bảng phân vị chuẩn: $u_{\\alpha/2} = u_{0{,}025} = 1{,}96$.`
      },
      {
        stepTitle: "Bước 2: Tính độ chính xác của ước lượng $\\epsilon$",
        stepContent: `Áp dụng công thức sai số biên:
$$\\epsilon = u_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} = 1{,}96 \\times \\frac{0{,}8}{\\sqrt{36}} = 1{,}96 \\times \\frac{0{,}8}{6} = 1{,}96 \\times 0{,}1333 \\approx 0{,}2613\\text{ kg}$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy $95\\%$",
        stepContent: `Khoảng tin cậy hai phía:
$$(\\overline{x} - \\epsilon ; \\overline{x} + \\epsilon) = (50{,}2 - 0{,}2613 ; 50{,}2 + 0{,}2613) = (49{,}9387 ; 50{,}4613)$$
Kết luận: Với độ tin cậy $95\\%$, khối lượng trung bình của bao xi măng nằm trong khoảng $[49{,}94\\text{ kg} ; 50{,}46\\text{ kg}]$.`
      },
      {
        stepTitle: "Bước 4: Giải câu b - Độ tin cậy $99\\%$",
        stepContent: `Với độ tin cậy $99\\% \\implies \\alpha = 0{,}01 \\implies u_{0{,}005} = 2{,}576$:
$$\\epsilon_{99} = 2{,}576 \\times \\frac{0{,}8}{6} \\approx 0{,}3435\\text{ kg}$$
Khoảng tin cậy:
$$(50{,}2 - 0{,}3435 ; 50{,}2 + 0{,}3435) = (49{,}8565 ; 50{,}5435)$$
Nhận xét: Khi độ tin cậy tăng từ $95\\%$ lên $99\\%$, độ dài khoảng tin cậy tăng từ $0{,}5226$ lên $0{,}687$, tức là độ chính xác giảm đi (khoảng ước lượng rộng hơn).`
      }
    ],
    finalAnswer: "a) Khoảng 95%: [49,9387 kg ; 50,4613 kg] | b) Khoảng 99%: [49,8565 kg ; 50,5435 kg] (khoảng rộng hơn)"
  },
  {
    id: "ex-4-05",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy cho Kỳ Vọng",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 5: Ước lượng khoảng cho kỳ vọng khi chưa biết phương sai (Mẫu lớn)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Để ước lượng mức tiêu thụ nhiên liệu trung bình của một dòng xe ô tô mới, người ta cho chạy thử nghiệm ngẫu nhiên $n = 64$ xe trong cùng điều kiện và thu được kết quả:
- Mức tiêu hao trung bình mẫu: $\\overline{x} = 6{,}5\ \text{ lit/100km}$
- Phương sai mẫu hiệu chỉnh: $s'^2 = 0{,}64\ \text{ (lit/100km)}^2$
a) Hãy tìm khoảng tin cậy $95\\%$ cho mức tiêu hao nhiên liệu trung bình $\\mu$ của dòng xe này.
b) Với độ tin cậy $95\\%$, mức tiêu hao trung bình có vượt quá $6{,}7\ \text{ lit/100km}$ hay không?
(Cho biết $u_{0{,}025} = 1{,}96$).`,
    tips: "Vì kích thước mẫu lớn $n = 64 \\ge 30$, theo định lý giới hạn trung tâm, ta dùng phân vị chuẩn $u_{\\alpha/2}$ với độ lệch chuẩn mẫu hiệu chỉnh $s'$ thay thế cho $\\sigma$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định các dữ kiện từ mẫu",
        stepContent: `Kích thước mẫu: $n = 64 \\ge 30$ (mẫu lớn).
Trung bình mẫu: $\\overline{x} = 6{,}5$.
Độ lệch chuẩn mẫu hiệu chỉnh:
$$s' = \\sqrt{s'^2} = \\sqrt{0{,}64} = 0{,}8\ \text{ (lit/100km)}$$
Độ tin cậy $1 - \\alpha = 0{,}95 \\implies u_{\\alpha/2} = u_{0{,}025} = 1{,}96$.`
      },
      {
        stepTitle: "Bước 2: Tính độ chính xác của ước lượng $\\epsilon$",
        stepContent: `Áp dụng công thức sai số cho mẫu lớn:
$$\\epsilon = u_{\\alpha/2} \\frac{s'}{\\sqrt{n}} = 1{,}96 \\times \\frac{0{,}8}{\\sqrt{64}} = 1{,}96 \\times \\frac{0{,}8}{8} = 1{,}96 \\times 0{,}1 = 0{,}196\ \text{ (lit/100km)}$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy $95\\%$",
        stepContent: `Khoảng ước lượng hai phía:
$$(\\overline{x} - \\epsilon ; \\overline{x} + \\epsilon) = (6{,}5 - 0{,}196 ; 6{,}5 + 0{,}196) = (6{,}304 ; 6{,}696)$$
Kết luận: Với độ tin cậy $95\\%$, mức tiêu thụ nhiên liệu trung bình thực tế nằm trong khoảng $[6{,}304 ; 6{,}696]\ \text{ lit/100km}$.`
      },
      {
        stepTitle: "Bước 4: Trả lời câu hỏi b",
        stepContent: `Cận trên của khoảng tin cậy $95\\%$ là $6{,}696\ \text{ lit/100km} < 6{,}7\ \text{ lit/100km}$.
Do đó, với độ tin cậy $95\\%$, ta có thể khẳng định mức tiêu thụ nhiên liệu trung bình của dòng xe không vượt quá $6{,}7\ \text{ lit/100km}$.`
      }
    ],
    finalAnswer: "a) Khoảng 95%: [6,304 ; 6,696] lít/100km | b) Không vượt quá 6,7 lít/100km"
  },
  {
    id: "ex-4-06",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy cho Kỳ Vọng",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 6: Ước lượng khoảng cho kỳ vọng với mẫu nhỏ (Phân phối Student)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Đo đường kính của 16 chi tiết máy chọn ngẫu nhiên từ một xưởng cơ khí, ta thu được các kết quả:
- Trung bình mẫu: $\\overline{x} = 12{,}05\\text{ mm}$
- Độ lệch chuẩn mẫu hiệu chỉnh: $s' = 0{,}12\\text{ mm}$
Giả thiết đường kính chi tiết máy tuân theo quy luật chuẩn.
a) Tìm khoảng tin cậy $95\\%$ cho đường kính trung bình $\\mu$ của chi tiết máy.
b) Nếu dùng công thức phân vị chuẩn $u_{\\alpha/2}$ thay vì phân vị Student thì độ dài khoảng ước lượng bị sai khác bao nhiêu phần trăm?
(Cho biết $t_{15; 0{,}025} = 2{,}131$; $u_{0{,}025} = 1{,}96$).`,
    tips: "Mẫu nhỏ $n < 30$, chưa biết $\\sigma$, tổng thể chuẩn $\\implies$ Bắt buộc sử dụng phân vị Student $t_{n-1; \\alpha/2}$ với bậc tự do $k = n - 1$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định mô hình và tra bảng phân vị Student",
        stepContent: `Tổng thể có phân phối chuẩn, phương sai $\\sigma^2$ chưa biết.
Kích thước mẫu: $n = 16 < 30$ (mẫu nhỏ) $\\implies \\sqrt{n} = 4$.
Bậc tự do: $k = n - 1 = 16 - 1 = 15$.
Mức ý nghĩa $\\alpha = 1 - 0{,}95 = 0{,}05 \\implies \\alpha/2 = 0{,}025$.
Tra bảng Student: $t_{15; 0{,}025} = 2{,}131$.`
      },
      {
        stepTitle: "Bước 2: Tính độ chính xác của ước lượng $\\epsilon$",
        stepContent: `Áp dụng công thức Student:
$$\\epsilon = t_{n-1; \\alpha/2} \\frac{s'}{\\sqrt{n}} = 2{,}131 \\times \\frac{0{,}12}{4} = 2{,}131 \\times 0{,}03 = 0{,}06393\\text{ mm}$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy $95\\%$",
        stepContent: `Khoảng ước lượng:
$$(\\overline{x} - \\epsilon ; \\overline{x} + \\epsilon) = (12{,}05 - 0{,}06393 ; 12{,}05 + 0{,}06393)$$
$$= (11{,}98607 ; 12{,}11393) \\approx [11{,}986\\text{ mm} ; 12{,}114\\text{ mm}]$$`
      },
      {
        stepTitle: "Bước 4: So sánh với trường hợp dùng nhầm phân vị chuẩn",
        stepContent: `Nếu dùng phân vị chuẩn $u_{0{,}025} = 1{,}96$:
$$\\epsilon_{Z} = 1{,}96 \\times 0{,}03 = 0{,}0588\\text{ mm}$$
Độ dài khoảng tin cậy khi dùng Student: $L_t = 2\\epsilon = 2(0{,}06393) = 0{,}12786$.
Độ dài khoảng tin cậy khi dùng Z: $L_z = 2\\epsilon_Z = 2(0{,}0588) = 0{,}1176$.
Tỷ lệ sai lệch:
$$\\frac{L_t - L_z}{L_t} = \\frac{2{,}131 - 1{,}96}{2{,}131} = \\frac{0{,}171}{2{,}131} \\approx 8{,}02\\%$$
Dùng chuẩn Z cho mẫu nhỏ sẽ làm hẹp khoảng ước lượng khoảng $8\\%$, dẫn đến độ tin cậy thực tế bị giảm sút.`
      }
    ],
    finalAnswer: "a) Khoảng 95%: [11,986 mm ; 12,114 mm] | b) Độ dài bị thu hẹp khoảng 8,02% nếu dùng sai Z"
  },
  {
    id: "ex-4-07",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy cho Tỷ Lệ",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 7: Khoảng tin cậy cho tỷ lệ phế phẩm của lô hàng",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Kiểm tra ngẫu nhiên 400 sản phẩm từ một lô hàng lớn xuất khẩu, phát hiện có 24 sản phẩm bị lỗi.
a) Tìm khoảng tin cậy $95\\%$ cho tỷ lệ phế phẩm $p$ của toàn bộ lô hàng.
b) Dựa vào khoảng tin cậy trên, hãy ước lượng số phế phẩm tối đa trong lô hàng gồm 50000 sản phẩm với độ tin cậy $95\\%$.
(Cho biết $u_{0{,}025} = 1{,}96$).`,
    tips: "Tần suất mẫu $f = \\frac{m}{n}$. Độ chính xác: $\\epsilon = u_{\\alpha/2} \\sqrt{\\frac{f(1-f)}{n}}$. Điều kiện $nf \\ge 5$ và $n(1-f) \\ge 5$ luôn thỏa mãn.",
    steps: [
      {
        stepTitle: "Bước 1: Tính tần suất mẫu $f$",
        stepContent: `Kích thước mẫu $n = 400$.
Số phế phẩm quan sát được: $m = 24$.
Tần suất mẫu:
$$f = \\frac{m}{n} = \\frac{24}{400} = 0{,}06 = 6\\%$$
Kiểm tra điều kiện xấp xỉ chuẩn: $nf = 24 \\ge 5$ và $n(1-f) = 376 \\ge 5$ (thỏa mãn tốt).`
      },
      {
        stepTitle: "Bước 2: Tính độ chính xác của ước lượng tỷ lệ $\\epsilon$",
        stepContent: `Với độ tin cậy $95\\% \\implies u_{\\alpha/2} = 1{,}96$.
$$\\epsilon = u_{\\alpha/2} \\sqrt{\\frac{f(1 - f)}{n}} = 1{,}96 \\sqrt{\\frac{0{,}06 \\times 0{,}94}{400}}$$
$$\\epsilon = 1{,}96 \\sqrt{\\frac{0{,}0564}{400}} = 1{,}96 \\times \\frac{0{,}23749}{20} = 1{,}96 \\times 0{,}011874 \\approx 0{,}02327 = 2{,}33\\%$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy $95\\%$",
        stepContent: `Khoảng ước lượng tỷ lệ:
$$(f - \\epsilon ; f + \\epsilon) = (0{,}06 - 0{,}02327 ; 0{,}06 + 0{,}02327) = (0{,}03673 ; 0{,}08327)$$
Tức là với độ tin cậy $95\\%$, tỷ lệ phế phẩm nằm trong khoảng $[3{,}67\\% ; 8{,}33\\%]$.`
      },
      {
        stepTitle: "Bước 4: Ước lượng số phế phẩm tối đa trong 50.000 sản phẩm",
        stepContent: `Cận trên của tỷ lệ phế phẩm với độ tin cậy $95\\%$ là $p_{max} = 0{,}08327$.
Số phế phẩm tối đa dự kiến trong lô $N = 50000$ sản phẩm:
$$M_{max} = N \\times p_{max} = 50000 \\times 0{,}08327 = 4163{,}5 \\approx 4164 $$ (sản phẩm)`
      }
    ],
    finalAnswer: "a) Khoảng tin cậy 95%: [3,67% ; 8,33%] | b) Tối đa khoảng 4164 phế phẩm"
  },
  {
    id: "ex-4-08",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Xác định Cỡ Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 8: Xác định kích thước mẫu tối thiểu khi ước lượng kỳ vọng",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Người ta muốn ước lượng tuổi thọ trung bình của một loại pin điện thoại sao cho sai số của ước lượng không vượt quá 20 giờ với độ tin cậy $95\\%$.
a) Giả sử qua các nghiên cứu trước đây đã biết độ lệch chuẩn tuổi thọ là $\\sigma = 80\ \text{ h}$. Cần khảo sát mẫu tối thiểu bao nhiêu quả pin?
b) Nếu muốn giảm sai số xuống còn 10 giờ (giảm một nửa) trong khi giữ nguyên độ tin cậy thì cỡ mẫu phải thay đổi như thế nào?
(Cho biết $u_{0{,}025} = 1{,}96$).`,
    tips: "Công thức cỡ mẫu tối thiểu: $n \\ge \\left(\\frac{u_{\\alpha/2} \\sigma}{\\epsilon}\\right)^2$. Khi muốn giảm sai số đi $k$ lần thì cỡ mẫu phải tăng lên $k^2$ lần.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập công thức tính cỡ mẫu",
        stepContent: `Độ chính xác yêu cầu: $\\epsilon = u_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\le \\epsilon_0 = 20\ \text{ h}$.
Bình phương hai vế và rút ra $n$:
$$n \\ge \\left( \\frac{u_{\\alpha/2} \\sigma}{\\epsilon_0} \\right)^2$$`
      },
      {
        stepTitle: "Bước 2: Thay số tính kích thước mẫu câu a",
        stepContent: `Với độ tin cậy $95\\% \\implies u_{0{,}025} = 1{,}96$:
$$n \\ge \\left( \\frac{1{,}96 \\times 80}{20} \\right)^2 = (1{,}96 \\times 4)^2 = (7{,}84)^2 = 61{,}4656$$
Vì cỡ mẫu $n$ phải là số nguyên dương, luôn làm tròn lên số nguyên kế tiếp:
$$n_{min} = 62 $$ (quả pin)`
      },
      {
        stepTitle: "Bước 3: Giải câu b - Khi giảm sai số xuống một nửa ($\\epsilon_0' = 10\ \text{ h}$)",
        stepContent: `Tính trực tiếp:
$$n' \\ge \\left( \\frac{1{,}96 \\times 80}{10} \\right)^2 = (1{,}96 \\times 8)^2 = (15{,}68)^2 = 245{,}86 \\implies n_{min}' = 246$$
Nhận xét: Vì $n \\propto \\frac{1}{\\epsilon^2}$, nên khi giảm sai số đi 2 lần:
$$\\frac{n'}{n} \\approx 2^2 = 4 \ \text{ lan}$$
Cỡ mẫu phải tăng lên gấp 4 lần để tăng độ chính xác lên gấp đôi.`
      }
    ],
    finalAnswer: "a) Cần khảo sát tối thiểu n = 62 quả pin | b) n tăng lên gấp 4 lần (n = 246 quả)"
  },
  {
    id: "ex-4-09",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Xác định Cỡ Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 9: Xác định cỡ mẫu ước lượng tỷ lệ khi chưa có thông tin sơ bộ",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một hãng nghiên cứu thị trường cần khảo sát tỷ lệ người tiêu dùng ủng hộ nhãn hàng sữa hạt mới. Yêu cầu sai số ước lượng không quá $3\\%$ với độ tin cậy $99\\%$.
a) Nếu chưa hề có bất kỳ thông tin nào về tỷ lệ ủng hộ, cần khảo sát tối thiểu bao nhiêu người?
b) Nếu qua một cuộc khảo sát sơ bộ đã biết tỷ lệ ủng hộ rơi vào khoảng $20\\%$, cỡ mẫu tối thiểu cần điều tra là bao nhiêu?
(Cho biết $u_{0{,}005} = 2{,}576$).`,
    tips: "Khi chưa biết thông tin về tỷ lệ $p$, đánh giá $p(1-p) \\le 0{,}25$ (đạt cực đại tại $p = 0{,}5$) để đảm bảo an toàn tối đa cho kích thước mẫu.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập công thức cỡ mẫu cho tỷ lệ",
        stepContent: `Sai số biên cho ước lượng tỷ lệ:
$$\\epsilon = u_{\\alpha/2} \\sqrt{\\frac{p(1 - p)}{n}} \\le \\epsilon_0$$
Suy ra:
$$n \\ge \\frac{u_{\\alpha/2}^2 \\cdot p(1 - p)}{\\epsilon_0^2}$$
Với độ tin cậy $99\\% \\implies u_{\\alpha/2} = u_{0{,}005} = 2{,}576$.
Sai số yêu cầu: $\\epsilon_0 = 3\\% = 0{,}03$.`
      },
      {
        stepTitle: "Bước 2: Câu a - Chưa có thông tin sơ bộ về $p$",
        stepContent: `Sử dụng bất đẳng thức Cauchy: $p(1 - p) \\le 0{,}25$ với mọi $p \\in [0, 1]$:
$$n \\ge \\frac{(2{,}576)^2 \\times 0{,}25}{(0{,}03)^2} = \\frac{6{,}635776 \\times 0{,}25}{0{,}0009} = \\frac{1{,}658944}{0{,}0009} \\approx 1843{,}27$$
Làm tròn lên:
$$n_{min} = 1844 $$ (người)`
      },
      {
        stepTitle: "Bước 3: Câu b - Đã biết tỷ lệ sơ bộ $p \\approx 0{,}20$",
        stepContent: `Thay $p = 0{,}20$ vào công thức:
$$p(1 - p) = 0{,}20 \\times 0{,}80 = 0{,}16$$
$$n \\ge \\frac{(2{,}576)^2 \\times 0{,}16}{(0{,}03)^2} = \\frac{6{,}635776 \\times 0{,}16}{0{,}0009} = \\frac{1{,}061724}{0{,}0009} \\approx 1179{,}69$$
Làm tròn lên:
$$n_{min} = 1180 $$ (người)
Nhận xét: Nhờ thông tin sơ bộ, kích thước mẫu cần khảo sát giảm được $1844 - 1180 = 664$ người (tiết kiệm khoảng $36\\%$ chi phí khảo sát).`
      }
    ],
    finalAnswer: "a) Tối thiểu n = 1844 người | b) Tối thiểu n = 1180 người"
  },
  {
    id: "ex-4-10",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy 1 Phía",
    difficulty: "Nâng cao",
    title: "Bài tập 10: Ước lượng khoảng một phía cho tuổi thọ thiết bị",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Khảo sát ngẫu nhiên tuổi thọ của 49 bóng đèn công nghiệp, ta thu được tuổi thọ trung bình mẫu là $\\overline{x} = 1520\ \text{ h}$ và độ lệch chuẩn mẫu hiệu chỉnh $s' = 140\ \text{ h}$.
a) Hãy tìm khoảng tin cậy chặn dưới với độ tin cậy $95\\%$ cho tuổi thọ trung bình $\\mu$ của loại bóng đèn này.
b) Nhà sản xuất muốn công bố tuổi thọ tối thiểu cam kết với khách hàng với độ tin cậy $95\\%$, con số đó nên là bao nhiêu?
(Cho biết $u_{0{,}05} = 1{,}645$; $u_{0{,}025} = 1{,}96$).`,
    tips: "Khoảng tin cậy chặn dưới cho kỳ vọng: $(\\overline{x} - u_\\alpha \\frac{s'}{\\sqrt{n}} ; +\\infty)$. Chú ý mức phân vị là $u_\\alpha$ chứ không phải $u_{\\alpha/2}$.",
    steps: [
      {
        stepTitle: "Bước 1: Phân tích bài toán ước lượng chặn dưới",
        stepContent: `Yêu cầu tìm giá trị $\\mu_{min}$ sao cho $P(\\mu > \\mu_{min}) = 1 - \\alpha = 0{,}95$.
Kích thước mẫu: $n = 49 \\ge 30 \\implies \\sqrt{n} = 7$.
Trung bình mẫu: $\\overline{x} = 1520\ \text{ h}$, độ lệch chuẩn $s' = 140\ \text{ h}$.
Mức ý nghĩa $\\alpha = 0{,}05$. Tra bảng phân vị chuẩn một phía: $u_\\alpha = u_{0{,}05} = 1{,}645$.`
      },
      {
        stepTitle: "Bước 2: Tính độ chính xác một phía $\\epsilon$",
        stepContent: `Áp dụng công thức sai số ước lượng một phía:
$$\\epsilon = u_\\alpha \\frac{s'}{\\sqrt{n}} = 1{,}645 \\times \\frac{140}{\\sqrt{49}} = 1{,}645 \\times \\frac{140}{7} = 1{,}645 \\times 20 = 32{,}9\ \text{ h}$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy chặn dưới",
        stepContent: `Khoảng ước lượng chặn dưới:
$$\\mu > \\overline{x} - \\epsilon \\iff \\mu > 1520 - 32{,}9 = 1487{,}1\ \text{ h}$$
Khoảng tin cậy: $[1487{,}1 ; +\\infty)$.`
      },
      {
        stepTitle: "Bước 4: Kết luận con số cam kết tối thiểu",
        stepContent: `Với độ tin cậy $95\\%$, nhà sản xuất có thể cam kết rằng tuổi thọ trung bình của loại bóng đèn công nghiệp này đạt ít nhất $1487{,}1\ \text{ h}$ (hoặc làm tròn an toàn là $1487\ \text{ h}$).`
      }
    ],
    finalAnswer: "a) Khoảng chặn dưới: [1487,1 giờ ; +infty) | b) Cam kết tuổi thọ tối thiểu 1487 giờ"
  },
  {
    id: "ex-4-11",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy 1 Phía",
    difficulty: "Nâng cao",
    title: "Bài tập 11: Ước lượng chặn trên cho tỷ lệ phế phẩm tối đa",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Trong một đợt kiểm tra nghiệm thu, kiểm tra 500 linh kiện điện tử thì thấy có 15 linh kiện không đạt yêu cầu kỹ thuật.
Hãy tìm khoảng tin cậy chặn trên với độ tin cậy $95\\%$ cho tỷ lệ phế phẩm tối đa của lô hàng.
(Cho biết $u_{0{,}05} = 1{,}645$).`,
    tips: "Khoảng tin cậy chặn trên cho tỷ lệ: $(0 ; f + u_\\alpha \\sqrt{\\frac{f(1-f)}{n}})$. Dùng phân vị một phía $u_\\alpha$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính tần suất mẫu $f$",
        stepContent: `Kích thước mẫu $n = 500$.
Số linh kiện hỏng: $m = 15$.
Tần suất mẫu:
$$f = \\frac{15}{500} = 0{,}03 = 3\\%$$`
      },
      {
        stepTitle: "Bước 2: Tính sai số một phía $\\epsilon$",
        stepContent: `Với độ tin cậy $95\\% \\implies \\alpha = 0{,}05 \\implies u_\\alpha = 1{,}645$.
$$\\epsilon = u_\\alpha \\sqrt{\\frac{f(1 - f)}{n}} = 1{,}645 \\sqrt{\\frac{0{,}03 \\times 0{,}97}{500}}$$
$$\\epsilon = 1{,}645 \\sqrt{\\frac{0{,}0291}{500}} = 1{,}645 \\times \\sqrt{0{,}0000582} \\approx 1{,}645 \\times 0{,}007629 \\approx 0{,}01255 = 1{,}255\\%$$`
      },
      {
        stepTitle: "Bước 3: Xác định chặn trên cho tỷ lệ phế phẩm",
        stepContent: `Khoảng ước lượng chặn trên:
$$p \\le f + \\epsilon = 0{,}03 + 0{,}01255 = 0{,}04255 = 4{,}255\\%$$
Khoảng tin cậy: $(0 ; 0{,}04255]$.`
      },
      {
        stepTitle: "Bước 4: Kết luận kiểm định chất lượng",
        stepContent: `Với độ tin cậy $95\\%$, tỷ lệ phế phẩm thực tế của cả lô hàng tối đa không vượt quá $4{,}26\\%$. Nếu tiêu chuẩn hợp đồng quy định tỷ lệ lỗi dưới $5\\%$ thì lô hàng đủ điều kiện thông quan.`
      }
    ],
    finalAnswer: "Tỷ lệ phế phẩm tối đa với độ tin cậy 95% là 4,26% (Khoảng: [0 ; 0,0426])"
  },
  {
    id: "ex-4-12",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Khoảng Tin Cậy cho Phương Sai",
    difficulty: "Nâng cao",
    title: "Bài tập 12: Ước lượng khoảng cho phương sai và độ lệch chuẩn (Phân phối Chi-bình phương)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một mẫu ngẫu nhiên gồm $n = 21$ quan sát được lấy từ tổng thể có phân phối chuẩn. Kết quả tính toán cho thấy phương sai mẫu hiệu chỉnh là $s'^2 = 4{,}5$.
a) Tìm khoảng tin cậy $90\\%$ cho phương sai $\\sigma^2$ của tổng thể.
b) Tìm khoảng tin cậy $90\\%$ cho độ lệch chuẩn $\\sigma$.
(Cho biết $\\chi^2_{20; 0{,}95} = 10{,}851$; $\\chi^2_{20; 0{,}05} = 31{,}410$).`,
    tips: "Khoảng tin cậy cho phương sai: $\\left( \\frac{(n-1)s'^2}{\\chi^2_{n-1; \\alpha/2}} ; \\frac{(n-1)s'^2}{\\chi^2_{n-1; 1-\\alpha/2}} \\right)$. Chú ý phân vị lớn nằm ở mẫu của cận dưới.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định bậc tự do và tra bảng $\\chi^2$",
        stepContent: `Tổng thể có phân phối chuẩn $N(\\mu, \\sigma^2)$.
Kích thước mẫu: $n = 21$.
Bậc tự do: $k = n - 1 = 20$.
Độ tin cậy $1 - \\alpha = 0{,}90 \\implies \\alpha = 0{,}10 \\implies \\frac{\\alpha}{2} = 0{,}05; \\; 1 - \\frac{\\alpha}{2} = 0{,}95$.
Tra bảng phân phối Chi-bình phương:
$$\\chi^2_{20; 0{,}05} = 31{,}410$$
$$\\chi^2_{20; 0{,}95} = 10{,}851$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Xác định khoảng tin cậy cho phương sai $\\sigma^2$",
        stepContent: `Tử số: $(n - 1)s'^2 = 20 \\times 4{,}5 = 90$.
Cận dưới:
$$\\sigma_{duoi}^2 = \\frac{(n - 1)s'^2}{\\chi^2_{20; 0{,}05}} = \\frac{90}{31{,}410} \\approx 2{,}8653$$
Cận trên:
$$\\sigma_{tren}^2 = \\frac{(n - 1)s'^2}{\\chi^2_{20; 0{,}95}} = \\frac{90}{10{,}851} \\approx 8{,}2942$$
Khoảng tin cậy $90\\%$ cho $\\sigma^2$:
$$(2{,}8653 ; 8{,}2942)$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Xác định khoảng tin cậy cho độ lệch chuẩn $\\sigma$",
        stepContent: `Lấy căn bậc hai hai vế của khoảng tin cậy phương sai:
$$\\sqrt{2{,}8653} < \\sigma < \\sqrt{8{,}2942}$$
$$1{,}6927 < \\sigma < 2{,}8800$$
Khoảng tin cậy $90\\%$ cho độ lệch chuẩn là $[1{,}693 ; 2{,}880]$.`
      }
    ],
    finalAnswer: "a) Khoảng cho phương sai sigma^2: [2,8653 ; 8,2942] | b) Khoảng cho độ lệch chuẩn sigma: [1,6927 ; 2,8800]"
  },
  {
    id: "ex-4-13",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Ước lượng So sánh Hai Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 13: Khoảng tin cậy cho hiệu hai kỳ vọng (Mẫu lớn độc lập)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Người ta muốn so sánh năng suất trung bình của hai phương pháp canh tác lúa $A$ và $B$. Thử nghiệm trên hai nhóm ruộng độc lập thu được kết quả:
- Phương pháp $A$: $n_1 = 50$, $\\overline{x}_1 = 65\ \text{ ta/ha}$, $s'_1 = 4\ \text{ ta/ha}$.
- Phương pháp $B$: $n_2 = 60$, $\\overline{x}_2 = 61\ \text{ ta/ha}$, $s'_2 = 5\ \text{ ta/ha}$.
a) Tìm khoảng tin cậy $95\\%$ cho hiệu năng suất trung bình $(\\mu_1 - \\mu_2)$.
b) Có thể khẳng định phương pháp $A$ cho năng suất trung bình cao hơn phương pháp $B$ với độ tin cậy $95\\%$ hay không?
(Cho biết $u_{0{,}025} = 1{,}96$).`,
    tips: "Với 2 mẫu lớn độc lập ($n_1, n_2 \\ge 30$), sai số hiệu hai kỳ vọng: $\\epsilon = u_{\\alpha/2} \\sqrt{\\frac{s'^2_1}{n_1} + \\frac{s'^2_2}{n_2}}$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính hiệu trung bình mẫu và sai số chuẩn",
        stepContent: `Hiệu trung bình hai mẫu:
$$\\overline{x}_1 - \\overline{x}_2 = 65 - 61 = 4\ \text{ ta/ha}$$
Sai số chuẩn của hiệu hai mẫu:
$$SE = \\sqrt{\\frac{s'^2_1}{n_1} + \\frac{s'^2_2}{n_2}} = \\sqrt{\\frac{4^2}{50} + \\frac{5^2}{60}} = \\sqrt{\\frac{16}{50} + \\frac{25}{60}}$$
$$SE = \\sqrt{0{,}32 + 0{,}4167} = \\sqrt{0{,}7367} \\approx 0{,}8583\ \text{ ta/ha}$$`
      },
      {
        stepTitle: "Bước 2: Tính độ chính xác ước lượng $\\epsilon$",
        stepContent: `Với độ tin cậy $95\\% \\implies u_{0{,}025} = 1{,}96$:
$$\\epsilon = u_{\\alpha/2} \\times SE = 1{,}96 \\times 0{,}8583 \\approx 1{,}6823\ \text{ ta/ha}$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy $95\\%$ cho $(\\mu_1 - \\mu_2)$",
        stepContent: `Khoảng ước lượng:
$$((\\overline{x}_1 - \\overline{x}_2) - \\epsilon ; (\\overline{x}_1 - \\overline{x}_2) + \\epsilon) = (4 - 1{,}6823 ; 4 + 1{,}6823) = (2{,}3177 ; 5{,}6823)$$
Tức là với độ tin cậy $95\\%$, hiệu năng suất nằm trong khoảng $[2{,}32 ; 5{,}68]\ \text{ ta/ha}$.`
      },
      {
        stepTitle: "Bước 4: Kết luận so sánh hai phương pháp",
        stepContent: `Vì toàn bộ khoảng tin cậy $(2{,}318 ; 5{,}682)$ đều nằm hoàn toàn bên phải số 0 (cận dưới $> 0$), ta có thể khẳng định chắc chắn với độ tin cậy $95\\%$ rằng phương pháp canh tác $A$ cho năng suất trung bình cao hơn phương pháp $B$, cụ thể là cao hơn từ $2{,}32$ đến $5{,}68\ \text{ ta/ha}$.`
      }
    ],
    finalAnswer: "a) Khoảng 95%: [2,3177 ; 5,6823] tạ/ha | b) Khẳng định phương pháp A cao hơn B"
  },
  {
    id: "ex-4-14",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Ước lượng So sánh Hai Mẫu",
    difficulty: "Nâng cao",
    title: "Bài tập 14: Khoảng tin cậy cho hiệu hai kỳ vọng với mẫu nhỏ (Phương sai gộp)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Hai dây chuyền sản xuất cùng chế tạo một loại trục máy. Đo ngẫu nhiên đường kính trục từ hai dây chuyền ta có số liệu:
- Dây chuyền 1: $n_1 = 10, \\; \\overline{x}_1 = 20{,}15\\text{ mm}, \\; s'_1 = 0{,}08\\text{ mm}$.
- Dây chuyền 2: $n_2 = 12, \\; \\overline{x}_2 = 20{,}08\\text{ mm}, \\; s'_2 = 0{,}09\\text{ mm}$.
Giả thiết đường kính ở hai dây chuyền tuân theo phân phối chuẩn với phương sai bằng nhau $\\sigma_1^2 = \\sigma_2^2$.
Hãy tìm khoảng tin cậy $95\\%$ cho sự sai khác đường kính trung bình $(\\mu_1 - \\mu_2)$.
(Cho biết $t_{20; 0{,}025} = 2{,}086$).`,
    tips: "Khi $n_1, n_2 < 30$ và phương sai bằng nhau, dùng phương sai gộp $s_p^2 = \\frac{(n_1-1)s'^2_1 + (n_2-1)s'^2_2}{n_1+n_2-2}$ với bậc tự do $n_1+n_2-2$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính phương sai gộp $s_p^2$",
        stepContent: `Bậc tự do tổng cộng: $k = n_1 + n_2 - 2 = 10 + 12 - 2 = 20$.
Phương sai gộp (pooled variance):
$$s_p^2 = \\frac{(n_1 - 1)s'^2_1 + (n_2 - 1)s'^2_2}{n_1 + n_2 - 2} = \\frac{9(0{,}08^2) + 11(0{,}09^2)}{20}$$
$$s_p^2 = \\frac{9(0{,}0064) + 11(0{,}0081)}{20} = \\frac{0{,}0576 + 0{,}0891}{20} = \\frac{0{,}1467}{20} = 0{,}007335$$
$$s_p = \\sqrt{0{,}007335} \\approx 0{,}08564\\text{ mm}$$`
      },
      {
        stepTitle: "Bước 2: Tính sai số biên $\\epsilon$",
        stepContent: `Hiệu trung bình: $\\overline{x}_1 - \\overline{x}_2 = 20{,}15 - 20{,}08 = 0{,}07\\text{ mm}$.
Tra bảng Student: $t_{20; 0{,}025} = 2{,}086$.
Sai số biên:
$$\\epsilon = t_{n_1+n_2-2; \\alpha/2} \\times s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}$$
$$\\epsilon = 2{,}086 \\times 0{,}08564 \\times \\sqrt{\\frac{1}{10} + \\frac{1}{12}} = 2{,}086 \\times 0{,}08564 \\times \\sqrt{0{,}18333}$$
$$\\epsilon \\approx 2{,}086 \\times 0{,}08564 \\times 0{,}42817 \\approx 0{,}0765\\text{ mm}$$`
      },
      {
        stepTitle: "Bước 3: Xác định khoảng tin cậy $95\\%$",
        stepContent: `Khoảng ước lượng:
$$((\\overline{x}_1 - \\overline{x}_2) - \\epsilon ; (\\overline{x}_1 - \\overline{x}_2) + \\epsilon) = (0{,}07 - 0{,}0765 ; 0{,}07 + 0{,}0765) = (-0{,}0065 ; 0{,}1465)$$
Nhận xét: Khoảng tin cậy chứa số 0 (từ $-0{,}0065$ đến $+0{,}1465$), điều này cho thấy ở mức ý nghĩa $5\\%$, chưa có đủ bằng chứng để khẳng định có sự khác biệt có ý nghĩa thống kê giữa đường kính trung bình của hai dây chuyền.`
      }
    ],
    finalAnswer: "Khoảng tin cậy 95% cho (mu_1 - mu_2): [-0,0065 mm ; 0,1465 mm]"
  },
  {
    id: "ex-4-15",
    chapter: "chuong-4",
    chapterName: "Chương 4: Ước Lượng Tham Số",
    category: "Ước lượng So sánh Hai Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 15: Khoảng tin cậy cho hiệu hai tỷ lệ (So sánh tỷ lệ lỗi)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Để đánh giá hiệu quả sau khi nâng cấp phần mềm, người ta theo dõi hai nhóm người dùng độc lập:
- Phiên bản cũ: trong $n_1 = 500$ phiên làm việc có $m_1 = 45$ phiên gặp sự cố giật lag.
- Phiên bản mới: trong $n_2 = 600$ phiên làm việc có $m_2 = 24$ phiên gặp sự cố giật lag.
a) Tìm khoảng tin cậy $95\\%$ cho hiệu tỷ lệ sự cố giữa hai phiên bản $(p_1 - p_2)$.
b) Tỷ lệ gặp sự cố ở phiên bản mới giảm được tối thiểu bao nhiêu phần trăm với độ tin cậy $95\\%$?
(Cho biết $u_{0{,}025} = 1{,}96$; $u_{0{,}05} = 1{,}645$).`,
    tips: "Sai số hiệu hai tỷ lệ: $\\epsilon = u_{\\alpha/2} \\sqrt{\\frac{f_1(1-f_1)}{n_1} + \\frac{f_2(1-f_2)}{n_2}}$. Để tìm mức giảm tối thiểu, dùng chặn dưới một phía với $u_\\alpha$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính các tần suất mẫu",
        stepContent: `Tần suất sự cố phiên bản cũ:
$$f_1 = \\frac{45}{500} = 0{,}09 = 9\\%$$
Tần suất sự cố phiên bản mới:
$$f_2 = \\frac{24}{600} = 0{,}04 = 4\\%$$
Hiệu tần suất:
$$f_1 - f_2 = 0{,}09 - 0{,}04 = 0{,}05 = 5\\%$$`
      },
      {
        stepTitle: "Bước 2: Tính sai số chuẩn của hiệu hai tỷ lệ",
        stepContent: `Áp dụng công thức sai số chuẩn:
$$SE = \\sqrt{\\frac{f_1(1 - f_1)}{n_1} + \\frac{f_2(1 - f_2)}{n_2}} = \\sqrt{\\frac{0{,}09 \\times 0{,}91}{500} + \\frac{0{,}04 \\times 0{,}96}{600}}$$
$$SE = \\sqrt{\\frac{0{,}0819}{500} + \\frac{0{,}0384}{600}} = \\sqrt{0{,}0001638 + 0{,}000064} = \\sqrt{0{,}0002278} \\approx 0{,}01509$$`
      },
      {
        stepTitle: "Bước 3: Câu a - Xác định khoảng tin cậy hai phía $95\\%$",
        stepContent: `Với $u_{0{,}025} = 1{,}96$:
$$\\epsilon = 1{,}96 \\times 0{,}01509 \\approx 0{,}02958 = 2{,}96\\%$$
Khoảng ước lượng hai phía:
$$((f_1 - f_2) - \\epsilon ; (f_1 - f_2) + \\epsilon) = (0{,}05 - 0{,}02958 ; 0{,}05 + 0{,}02958) = (0{,}02042 ; 0{,}07958)$$
Khoảng tin cậy: $[2{,}04\\% ; 7{,}96\\%]$.`
      },
      {
        stepTitle: "Bước 4: Câu b - Xác định mức giảm tối thiểu (Chặn dưới một phía)",
        stepContent: `Với độ tin cậy một phía $95\\% \\implies u_{0{,}05} = 1{,}645$:
$$\\epsilon_1 = 1{,}645 \\times 0{,}01509 \\approx 0{,}02482 = 2{,}48\\%$$
Chặn dưới của mức giảm:
$$p_1 - p_2 \\ge (f_1 - f_2) - \\epsilon_1 = 0{,}05 - 0{,}02482 = 0{,}02518 = 2{,}52\\%$$
Kết luận: Với độ tin cậy $95\\%$, việc nâng cấp phần mềm đã giúp giảm tỷ lệ giật lag tối thiểu $2{,}52\\%$.`
      }
    ],
    finalAnswer: "a) Khoảng 95%: [2,04% ; 7,96%] | b) Giảm tối thiểu 2,52% với độ tin cậy 95%"
  }
];
