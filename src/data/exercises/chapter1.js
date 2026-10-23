export const chapter1Exercises = [
  {
    id: "ex-1-01",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Xác suất Cổ điển & Tổ hợp",
    difficulty: "Cơ bản",
    title: "Bài tập 1: Gieo đồng thời hai con xúc xắc cân đối",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Tính xác suất để:
a) Tổng số chấm xuất hiện trên hai con xúc xắc bằng 7.
b) Tổng số chấm xuất hiện trên hai con xúc xắc là một số lẻ lớn hơn hoặc bằng 9.
c) Có ít nhất một con xúc xắc xuất hiện mặt 6 chấm.`,
    tips: "Khi gieo 2 con xúc xắc, không gian mẫu luôn có $6 \\times 6 = 36$ phần tử. Liệt kê rõ các cặp số thuận lợi để tránh sót trường hợp.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định không gian mẫu $\\Omega$",
        stepContent: `Mỗi con xúc xắc có 6 mặt từ 1 đến 6. Khi gieo đồng thời hai con:
$$|\\Omega| = 6 \\times 6 = 36$$`
      },
      {
        stepTitle: "Bước 2: Giải câu a - Tổng số chấm bằng 7",
        stepContent: `Gọi $A$ là biến cố 'Tổng số chấm bằng 7'.
Các cặp thuận lợi:
$$A = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\} \\implies |A| = 6$$
$$P(A) = \\frac{|A|}{|\\Omega|} = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$$`
      },
      {
        stepTitle: "Bước 3: Giải câu b - Tổng số chấm là số lẻ $\\ge 9$",
        stepContent: `Gọi $B$ là biến cố cần tính. Tổng số chấm lẻ $\\ge 9$ có thể bằng 9 hoặc 11:
- Tổng bằng 9: $(3,6), (4,5), (5,4), (6,3)$ (4 cách).
- Tổng bằng 11: $(5,6), (6,5)$ (2 cách).
$$|B| = 4 + 2 = 6 \\implies P(B) = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$$`
      },
      {
        stepTitle: "Bước 4: Giải câu c - Có ít nhất một con ra mặt 6 chấm",
        stepContent: `Gọi $C$ là biến cố 'Có ít nhất một con ra mặt 6 chấm'.
Xét biến cố đối $\\overline{C}$: 'Cả hai con đều không ra mặt 6'.
Mỗi con có 5 khả năng (từ 1 đến 5):
$$|\\overline{C}| = 5 \\times 5 = 25 \\implies P(\\overline{C}) = \\frac{25}{36}$$
$$P(C) = 1 - P(\\overline{C}) = 1 - \\frac{25}{36} = \\frac{11}{36} \\approx 0{,}3056$$`
      }
    ],
    finalAnswer: "a) 1/6 (0,1667) | b) 1/6 (0,1667) | c) 11/36 (0,3056)"
  },
  {
    id: "ex-1-02",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Công thức Bayes & XS Đầy Đủ",
    difficulty: "Nâng cao",
    title: "Bài tập 2: Chẩn đoán xét nghiệm y tế (Dương tính giả & Bayes)",
    source: "Trích Đề thi tự luận XSTK (Bài 34-35)",
    problem: `Biết rằng tỷ lệ người mắc một căn bệnh hiểm nghèo trong cộng đồng là $2\\%$. Người ta sử dụng một xét nghiệm y tế:
- Nếu một người thực sự bị bệnh thì xét nghiệm cho kết quả dương tính với xác suất $98\\%$.
- Nếu một người không bị bệnh thì xét nghiệm vẫn có thể cho kết quả dương tính giả với xác suất $5\\%$.
Một người đi xét nghiệm ngẫu nhiên nhận kết quả dương tính. Hỏi xác suất thực sự người này mắc bệnh là bao nhiêu?`,
    tips: "Gọi hệ biến cố đầy đủ $H_1$ (bị bệnh) và $H_2$ (không bị bệnh). Áp dụng công thức Bayes để tính xác suất hậu nghiệm $P(H_1|A)$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập hệ biến cố đầy đủ",
        stepContent: `Gọi $H_1$ là biến cố 'Người được xét nghiệm bị bệnh'.
Gọi $H_2 = \\overline{H_1}$ là biến cố 'Người được xét nghiệm không bị bệnh'.
Theo đề bài:
$$P(H_1) = 0{,}02; \\quad P(H_2) = 1 - 0{,}02 = 0{,}98$$`
      },
      {
        stepTitle: "Bước 2: Xác định xác suất có điều kiện",
        stepContent: `Gọi $A$ là biến cố 'Kết quả xét nghiệm là dương tính'.
- Người có bệnh nhận kết quả dương tính: $P(A|H_1) = 0{,}98$.
- Người không bệnh nhận kết quả dương tính giả: $P(A|H_2) = 0{,}05$.`
      },
      {
        stepTitle: "Bước 3: Tính xác suất toàn phần $P(A)$",
        stepContent: `Áp dụng công thức xác suất đầy đủ:
$$P(A) = P(H_1)P(A|H_1) + P(H_2)P(A|H_2)$$
$$P(A) = 0{,}02 \\times 0{,}98 + 0{,}98 \\times 0{,}05 = 0{,}0196 + 0{,}0490 = 0{,}0686$$`
      },
      {
        stepTitle: "Bước 4: Áp dụng công thức Bayes",
        stepContent: `Xác suất thực sự bị bệnh khi biết kết quả xét nghiệm dương tính:
$$P(H_1|A) = \\frac{P(H_1)P(A|H_1)}{P(A)} = \\frac{0{,}0196}{0{,}0686} = \\frac{2}{7} \\approx 0{,}2857 \\text{ (28,57\\%)}$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Dù xét nghiệm có độ chính xác $98\\%$, nhưng vì tỷ lệ bệnh trong cộng đồng thấp ($2\\%$) nên khi nhận kết quả dương tính, xác suất thực sự mắc bệnh chỉ đạt khoảng $28{,}57\\%$.`
      }
    ],
    finalAnswer: "P(H_1|A) ≈ 0,2857 (28,57%)"
  },
  {
    id: "ex-1-03",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Quy tắc Đếm & Tổ hợp",
    difficulty: "Cơ bản",
    title: "Bài tập 3: Rút ngẫu nhiên đồng thời các viên bi từ hộp",
    source: "Trích Đề thi tự luận",
    problem: `Một hộp đựng 5 viên bi trắng, 6 viên bi đỏ và 4 viên bi vàng (tổng cộng 15 viên bi có kích thước giống nhau). Rút ngẫu nhiên đồng thời 3 viên bi. Tính xác suất để:
a) Cả 3 viên bi rút ra đều cùng màu đỏ.
b) Cả 3 viên bi rút ra có đúng hai màu khác nhau.
c) Rút được ít nhất một viên bi màu trắng.`,
    tips: "Rút đồng thời $k$ phần tử từ $n$ phần tử luôn dùng tổ hợp $C_n^k$. Với câu 'ít nhất 1 bi trắng', dùng biến cố đối 'không có bi trắng nào'.",
    steps: [
      {
        stepTitle: "Bước 1: Tính số phần tử không gian mẫu $|\\Omega|$",
        stepContent: `Rút đồng thời 3 viên từ tổng số 15 viên bi:
$$|\\Omega| = C_{15}^3 = \\frac{15 \\times 14 \\times 13}{3 \\times 2 \\times 1} = 455$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Cả 3 viên bi đều màu đỏ",
        stepContent: `Gọi $A$ là biến cố '3 viên bi rút ra đều màu đỏ'.
Số cách chọn 3 viên đỏ từ 6 viên đỏ: $|A| = C_6^3 = 20$.
$$P(A) = \\frac{C_6^3}{C_{15}^3} = \\frac{20}{455} = \\frac{4}{91} \\approx 0{,}0440$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Đúng hai màu khác nhau",
        stepContent: `Gọi $E_1$ là biến cố 'Cả 3 viên cùng màu', $E_3$ là 'Cả 3 viên đủ 3 màu khác nhau'.
- Số cách chọn 3 viên cùng màu: $C_5^3 + C_6^3 + C_4^3 = 10 + 20 + 4 = 34$.
- Số cách chọn đủ 3 màu (1 trắng, 1 đỏ, 1 vàng): $C_5^1 \\times C_6^1 \\times C_4^1 = 5 \\times 6 \\times 4 = 120$.
Số cách chọn đúng 2 màu: $|B| = 455 - 34 - 120 = 301$.
$$P(B) = \\frac{301}{455} = \\frac{43}{65} \\approx 0{,}6615$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Ít nhất một viên màu trắng",
        stepContent: `Xét biến cố đối $\\overline{C}$: 'Không có viên bi trắng nào' (tức cả 3 viên lấy từ 10 viên đỏ và vàng):
$$|\\overline{C}| = C_{10}^3 = 120 \\implies P(\\overline{C}) = \\frac{120}{455} = \\frac{24}{91}$$
$$P(C) = 1 - P(\\overline{C}) = 1 - \\frac{24}{91} = \\frac{67}{91} \\approx 0{,}7363$$`
      }
    ],
    finalAnswer: "a) 4/91 (0,0440) | b) 43/65 (0,6615) | c) 67/91 (0,7363)"
  },
  {
    id: "ex-1-04",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Quy tắc Đếm & Hoán vị",
    difficulty: "Cơ bản",
    title: "Bài tập 4: Xếp ngẫu nhiên người vào hàng ghế",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Có 4 nam sinh và 3 nữ sinh cùng xếp hàng ngẫu nhiên thành một hàng ngang gồm 7 vị trí. Tính xác suất để:
a) Ba nữ sinh đứng liền kề nhau.
b) Các nữ sinh không đứng cạnh nhau bất kỳ cặp nào.`,
    tips: "Phương pháp 'buộc nhóm' cho câu a: xem 3 nữ là 1 phần tử lớn. Phương pháp 'vách ngăn' cho câu b: xếp 4 nam trước rồi chèn 3 nữ vào các khe trống.",
    steps: [
      {
        stepTitle: "Bước 1: Không gian mẫu $|\\Omega|$",
        stepContent: `Xếp ngẫu nhiên 7 người vào 7 vị trí là một hoán vị của 7 phần tử:
$$|\\Omega| = 7! = 5040$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Ba nữ sinh đứng liền nhau (Phương pháp buộc nhóm)",
        stepContent: `Xem 3 nữ sinh như một khối duy nhất $X$.
Khối $X$ cùng 4 nam sinh tạo thành 5 phần tử cần xếp: có $5!$ cách.
Trong nội bộ khối $X$, có $3!$ cách xếp thứ tự 3 nữ sinh.
Số cách xếp thuận lợi: $|A| = 5! \\times 3! = 120 \\times 6 = 720$.
$$P(A) = \\frac{720}{5040} = \\frac{1}{7} \\approx 0{,}1429$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Không có 2 nữ sinh nào đứng cạnh nhau (Phương pháp vách ngăn)",
        stepContent: `Xếp 4 nam sinh thành hàng: có $4! = 24$ cách.
Bốn nam sinh tạo ra 5 khoảng trống (gồm 2 đầu và 3 kẽ giữa):
$$\\_\\; N_1 \\;\\_\\; N_2 \\;\\_\\; N_3 \\;\\_\\; N_4 \\;\\_$$
Chọn 3 trong số 5 vị trí trống để xếp 3 nữ sinh: $A_5^3 = 5 \\times 4 \\times 3 = 60$ cách.
Số cách thuận lợi: $|B| = 4! \\times A_5^3 = 24 \\times 60 = 1440$.
$$P(B) = \\frac{1440}{5040} = \\frac{2}{7} \\approx 0{,}2857$$`
      }
    ],
    finalAnswer: "a) 1/7 (0,1429) | b) 2/7 (0,2857)"
  },
  {
    id: "ex-1-05",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Công thức Cộng Xác Suất",
    difficulty: "Cơ bản",
    title: "Bài tập 5: Công thức cộng hai biến cố không xung khắc",
    source: "Trích Đề thi tự luận",
    problem: `Trong một lớp chuyên đề có $60\\%$ học viên biết tiếng Anh, $40\\%$ học viên biết tiếng Pháp và $25\\%$ học viên biết cả hai thứ tiếng. Chọn ngẫu nhiên một học viên trong lớp. Tính xác suất để:
a) Học viên đó biết ít nhất một trong hai thứ tiếng.
b) Học viên đó chỉ biết duy nhất tiếng Anh mà không biết tiếng Pháp.
c) Học viên đó không biết cả hai thứ tiếng trên.`,
    tips: "Sử dụng công thức cộng tổng quát $P(A \\cup B) = P(A) + P(B) - P(AB)$ và công thức hiệu $P(A \\setminus B) = P(A) - P(AB)$.",
    steps: [
      {
        stepTitle: "Bước 1: Ký hiệu biến cố và gán xác suất",
        stepContent: `Gọi $A$ là biến cố 'Học viên biết tiếng Anh', $P(A) = 0{,}60$.
Gọi $B$ là biến cố 'Học viên biết tiếng Pháp', $P(B) = 0{,}40$.
Biến cố học viên biết cả hai thứ tiếng: $AB$, với $P(AB) = 0{,}25$.`
      },
      {
        stepTitle: "Bước 2: Câu a - Biết ít nhất một thứ tiếng",
        stepContent: `Biến cố học viên biết ít nhất một thứ tiếng là biến cố hợp $A \\cup B$:
$$P(A \\cup B) = P(A) + P(B) - P(AB) = 0{,}60 + 0{,}40 - 0{,}25 = 0{,}75$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Chỉ biết tiếng Anh mà không biết tiếng Pháp",
        stepContent: `Biến cố 'Biết tiếng Anh nhưng không biết tiếng Pháp' là $A\\overline{B}$:
$$P(A\\overline{B}) = P(A) - P(AB) = 0{,}60 - 0{,}25 = 0{,}35$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Không biết cả hai thứ tiếng",
        stepContent: `Biến cố 'Không biết thứ tiếng nào' là biến cố đối của 'Biết ít nhất một thứ tiếng':
$$P(\\overline{A} \\cap \\overline{B}) = 1 - P(A \\cup B) = 1 - 0{,}75 = 0{,}25$$`
      }
    ],
    finalAnswer: "a) 0,75 | b) 0,35 | c) 0,25"
  },
  {
    id: "ex-1-06",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Công thức Nhân & Biến cố Độc lập",
    difficulty: "Cơ bản",
    title: "Bài tập 6: Bắn bia độc lập của ba xạ thủ",
    source: "Trích Đề thi tự luận",
    problem: `Ba xạ thủ cùng bắn độc lập vào một mục tiêu, mỗi người bắn đúng 1 viên đạn. Xác suất bắn trúng của người thứ nhất, thứ hai và thứ ba lần lượt là $0{,}7$; $0{,}8$ và $0{,}9$. Tính xác suất để:
a) Cả ba xạ thủ đều bắn trúng mục tiêu.
b) Có đúng một xạ thủ bắn trúng mục tiêu.
c) Mục tiêu bị trúng đạn (có ít nhất một xạ thủ bắn trúng).`,
    tips: "Biến cố các xạ thủ bắn trúng là độc lập. Câu 'ít nhất 1 người trúng' dùng biến cố đối 'cả 3 người đều bắn trượt'.",
    steps: [
      {
        stepTitle: "Bước 1: Gọi biến cố và xác định xác suất thành phần",
        stepContent: `Gọi $A_i$ là biến cố 'Xạ thủ thứ $i$ bắn trúng' ($i = 1, 2, 3$).
$$P(A_1) = 0{,}7 \\implies P(\\overline{A_1}) = 0{,}3$$
$$P(A_2) = 0{,}8 \\implies P(\\overline{A_2}) = 0{,}2$$
$$P(A_3) = 0{,}9 \\implies P(\\overline{A_3}) = 0{,}1$$`
      },
      {
        stepTitle: "Bước 2: Câu a - Cả ba người cùng bắn trúng",
        stepContent: `Do tính độc lập:
$$P(A_1 A_2 A_3) = P(A_1) \\times P(A_2) \\times P(A_3) = 0{,}7 \\times 0{,}8 \\times 0{,}9 = 0{,}504$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Đúng một người bắn trúng",
        stepContent: `Gọi $B$ là biến cố có đúng 1 người bắn trúng:
$$B = A_1\\overline{A_2}\\,\\overline{A_3} \\cup \\overline{A_1}A_2\\overline{A_3} \\cup \\overline{A_1}\\,\\overline{A_2}A_3$$
Vì các biến cố thành phần xung khắc từng đôi:
$$P(B) = (0{,}7 \\times 0{,}2 \\times 0{,}1) + (0{,}3 \\times 0{,}8 \\times 0{,}1) + (0{,}3 \\times 0{,}2 \\times 0{,}9)$$
$$P(B) = 0{,}014 + 0{,}024 + 0{,}054 = 0{,}092$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Mục tiêu bị trúng đạn",
        stepContent: `Mục tiêu trúng đạn khi có ít nhất 1 viên trúng. Xét biến cố đối 'Cả 3 đều trượt':
$$P(\\overline{A_1}\\,\\overline{A_2}\\,\\overline{A_3}) = 0{,}3 \\times 0{,}2 \\times 0{,}1 = 0{,}006$$
$$P(C) = 1 - 0{,}006 = 0{,}994$$`
      }
    ],
    finalAnswer: "a) 0,504 | b) 0,092 | c) 0,994"
  },
  {
    id: "ex-1-07",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Độ Tin Cậy Mạch Điện",
    difficulty: "Nâng cao",
    title: "Bài tập 7: Độ tin cậy hoạt động của hệ thống mạch rơ-le",
    source: "Trích Đề thi tự luận XSTK",
    problem: `Cho một hệ thống gồm 4 linh kiện $K_1, K_2, K_3, K_4$ mắc thành mạch: nhánh 1 gồm $K_1$ mắc nối tiếp với $K_2$; nhánh 2 gồm $K_3$ mắc nối tiếp với $K_4$; hai nhánh này mắc song song với nhau.
Biết xác suất hoạt động tốt trong thời gian $T$ của mỗi linh kiện đều bằng $0{,}9$ và chúng hoạt động độc lập. Tính xác suất để hệ thống dẫn điện thông suốt trong khoảng thời gian $T$.`,
    tips: "Mắc nối tiếp dẫn điện khi TẤT CẢ cùng hoạt động ($p_{nt} = p_1 p_2$). Mắc song song dẫn điện khi ÍT NHẤT một nhánh dẫn điện ($p_{ss} = 1 - (1-p_{nh1})(1-p_{nh2})$).",
    steps: [
      {
        stepTitle: "Bước 1: Tính độ tin cậy của từng nhánh nối tiếp",
        stepContent: `Gọi $A_i$ là biến cố 'Linh kiện $K_i$ hoạt động tốt' ($P(A_i) = 0{,}9$).
- Nhánh 1 ($K_1$ nối tiếp $K_2$) thông mạch khi cả hai linh kiện cùng tốt:
$$P(N_1) = P(A_1 A_2) = P(A_1) \\times P(A_2) = 0{,}9 \\times 0{,}9 = 0{,}81$$
- Nhánh 2 ($K_3$ nối tiếp $K_4$) thông mạch khi cả hai linh kiện cùng tốt:
$$P(N_2) = P(A_3 A_4) = P(A_3) \\times P(A_4) = 0{,}9 \\times 0{,}9 = 0{,}81$$`
      },
      {
        stepTitle: "Bước 2: Tính độ tin cậy của hệ thống mắc song song",
        stepContent: `Hệ thống dẫn điện khi có ít nhất một trong hai nhánh $N_1, N_2$ thông mạch.
Xét biến cố đối 'Cả hai nhánh đều mất điện':
$$P(\\overline{H}) = P(\\overline{N_1}) \\times P(\\overline{N_2}) = (1 - 0{,}81) \\times (1 - 0{,}81) = 0{,}19 \\times 0{,}19 = 0{,}0361$$`
      },
      {
        stepTitle: "Bước 3: Kết luận xác suất hệ thống hoạt động",
        stepContent: `Xác suất hệ thống hoạt động thông suốt:
$$P(H) = 1 - P(\\overline{H}) = 1 - 0{,}0361 = 0{,}9639 \\text{ (96,39\\%)}$$`
      }
    ],
    finalAnswer: "P(H) = 0,9639 (96,39%)"
  },
  {
    id: "ex-1-08",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Lược Đồ Bernoulli",
    difficulty: "Cơ bản",
    title: "Bài tập 8: Xác suất kiểm tra lô sản phẩm theo Bernoulli",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Tỷ lệ sản phẩm đạt tiêu chuẩn loại A của một dây chuyền sản xuất là $80\\%$. Người ta lấy ngẫu nhiên 5 sản phẩm để kiểm tra độc lập. Tính xác suất để:
a) Có đúng 4 sản phẩm đạt loại A.
b) Có ít nhất 4 sản phẩm đạt loại A.
c) Có không quá 1 sản phẩm không đạt loại A.`,
    tips: "Dãy $n$ phép thử độc lập có 2 kết cục tuân theo công thức Bernoulli: $P_n(k) = C_n^k p^k (1-p)^{n-k}$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định tham số của lược đồ Bernoulli",
        stepContent: `Mỗi lần kiểm tra 1 sản phẩm là một phép thử Bernoulli với:
- Số phép thử: $n = 5$.
- Xác suất thành công (đạt loại A): $p = 0{,}8$.
- Xác suất thất bại: $q = 1 - p = 0{,}2$.`
      },
      {
        stepTitle: "Bước 2: Câu a - Đúng 4 sản phẩm đạt loại A",
        stepContent: `Áp dụng công thức Bernoulli với $k = 4$:
$$P_5(4) = C_5^4 (0{,}8)^4 (0{,}2)^1 = 5 \\times 0{,}4096 \\times 0{,}2 = 0{,}4096$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Ít nhất 4 sản phẩm đạt loại A",
        stepContent: `Có ít nhất 4 sản phẩm loại A tức là $k = 4$ hoặc $k = 5$:
$$P_5(5) = C_5^5 (0{,}8)^5 (0{,}2)^0 = 1 \\times 0{,}32768 \\times 1 = 0{,}32768$$
$$P(X \\ge 4) = P_5(4) + P_5(5) = 0{,}4096 + 0{,}32768 = 0{,}73728$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Không quá 1 sản phẩm không đạt loại A",
        stepContent: `Có 'không quá 1 sản phẩm không đạt' đồng nghĩa với 'có ít nhất 4 sản phẩm đạt loại A' ($k = 4$ hoặc $k = 5$).
Do đó kết quả chính bằng câu b: $0{,}73728$.`
      }
    ],
    finalAnswer: "a) 0,4096 | b) 0,7373 | c) 0,7373"
  },
  {
    id: "ex-1-09",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Lược Đồ Bernoulli & Mốt",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 9: Tìm số lần xuất hiện có khả năng nhất (Số mốt k0)",
    source: "Trích Đề thi tự luận",
    problem: `Một thiết bị phát tín hiệu thực hiện phát 120 xung tín hiệu độc lập. Xác suất để mỗi xung truyền thành công qua kênh truyền là $p = 0{,}85$.
a) Tìm số lần phát tín hiệu thành công có khả năng xảy ra lớn nhất ($k_0$).
b) Tính xác suất tương ứng tại giá trị $k_0$ đó.`,
    tips: "Số mốt $k_0$ thỏa mãn bất đẳng thức: $np - q \\le k_0 \\le np + p$.",
    steps: [
      {
        stepTitle: "Bước 1: Xác định các tham số",
        stepContent: `Số phép thử $n = 120$; xác suất thành công $p = 0{,}85$; xác suất thất bại $q = 1 - p = 0{,}15$.`
      },
      {
        stepTitle: "Bước 2: Thiết lập bất đẳng thức tìm k0",
        stepContent: `Số mốt $k_0$ thỏa mãn:
$$np - q \\le k_0 \\le np + p$$
Tính giá trị hai vế:
$$np - q = 120 \\times 0{,}85 - 0{,}15 = 102 - 0{,}15 = 101{,}85$$
$$np + p = 120 \\times 0{,}85 + 0{,}85 = 102 + 0{,}85 = 102{,}85$$
$$\\implies 101{,}85 \\le k_0 \\le 102{,}85$$
Vì $k_0$ là số nguyên nên ta tìm được duy nhất $k_0 = 102$.`
      },
      {
        stepTitle: "Bước 3: Tính xác suất tại k0 = 102",
        stepContent: `Theo công thức Bernoulli:
$$P_{120}(102) = C_{120}^{102} (0{,}85)^{102} (0{,}15)^{18} \\approx 0{,}1014$$`
      }
    ],
    finalAnswer: "k_0 = 102 (với xác suất tương ứng ≈ 0,1014)"
  },
  {
    id: "ex-1-10",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Công thức Xác Suất Đầy Đủ",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 10: Tỷ lệ phế phẩm của ba phân xưởng cùng kho",
    source: "Trích Đề thi tự luận",
    problem: `Một kho hàng nhập sản phẩm từ 3 xưởng sản xuất:
- Xưởng 1 cung cấp $40\\%$ tổng số sản phẩm, với tỷ lệ phế phẩm là $2\\%$.
- Xưởng 2 cung cấp $35\\%$ tổng số sản phẩm, với tỷ lệ phế phẩm là $3\\%$.
- Xưởng 3 cung cấp $25\\%$ tổng số sản phẩm, với tỷ lệ phế phẩm là $4\\%$.
Lấy ngẫu nhiên một sản phẩm trong kho. Tính xác suất để sản phẩm đó là phế phẩm.`,
    tips: "Luôn kiểm tra điều kiện hệ đầy đủ: $P(H_1) + P(H_2) + P(H_3) = 0{,}4 + 0{,}35 + 0{,}25 = 1$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập hệ biến cố đầy đủ",
        stepContent: `Gọi $H_i$ là biến cố 'Sản phẩm lấy ra do xưởng $i$ sản xuất' ($i = 1, 2, 3$).
Hệ $\\{H_1, H_2, H_3\\}$ là hệ biến cố đầy đủ vì:
$$P(H_1) = 0{,}40; \\quad P(H_2) = 0{,}35; \\quad P(H_3) = 0{,}25$$
$$P(H_1) + P(H_2) + P(H_3) = 1$$`
      },
      {
        stepTitle: "Bước 2: Xác định xác suất có điều kiện",
        stepContent: `Gọi $A$ là biến cố 'Sản phẩm lấy ra là phế phẩm'.
Theo đề bài:
$$P(A|H_1) = 0{,}02; \\quad P(A|H_2) = 0{,}03; \\quad P(A|H_3) = 0{,}04$$`
      },
      {
        stepTitle: "Bước 3: Áp dụng công thức xác suất đầy đủ",
        stepContent: `$$P(A) = \\sum_{i=1}^3 P(H_i) P(A|H_i)$$
$$P(A) = 0{,}40 \\times 0{,}02 + 0{,}35 \\times 0{,}03 + 0{,}25 \\times 0{,}04$$
$$P(A) = 0{,}0080 + 0{,}0105 + 0{,}0100 = 0{,}0285 \\text{ (2,85\\%)}$$`
      }
    ],
    finalAnswer: "P(A) = 0,0285 (2,85%)"
  },
  {
    id: "ex-1-11",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Định Lý Bayes",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 11: Truy nguyên nguồn gốc sản phẩm khuyết tật (Bayes)",
    source: "Trích Đề thi tự luận XSTK",
    problem: `Tiếp tục với số liệu của Bài tập 10: Giả sử sản phẩm lấy ngẫu nhiên ra kiểm tra bị phát hiện là phế phẩm. Hỏi khả năng sản phẩm này do Xưởng 2 sản xuất là bao nhiêu? Xưởng nào có xác suất gây ra phế phẩm này cao nhất?`,
    tips: "Tính các xác suất hậu nghiệm $P(H_i|A)$ bằng công thức Bayes rồi so sánh để đưa ra kết luận nguồn gốc.",
    steps: [
      {
        stepTitle: "Bước 1: Sử dụng kết quả từ công thức đầy đủ",
        stepContent: `Từ bài trước, ta đã có xác suất chọn phải phế phẩm:
$$P(A) = 0{,}0285$$
và các xác suất thành phần:
$$P(H_1)P(A|H_1) = 0{,}0080; \\quad P(H_2)P(A|H_2) = 0{,}0105; \\quad P(H_3)P(A|H_3) = 0{,}0100$$`
      },
      {
        stepTitle: "Bước 2: Áp dụng công thức Bayes cho Xưởng 2",
        stepContent: `Xác suất phế phẩm do Xưởng 2 sản xuất:
$$P(H_2|A) = \\frac{P(H_2)P(A|H_2)}{P(A)} = \\frac{0{,}0105}{0{,}0285} = \\frac{105}{285} = \\frac{7}{19} \\approx 0{,}3684 \\text{ (36,84\\%)}$$`
      },
      {
        stepTitle: "Bước 3: So sánh xác suất giữa 3 xưởng",
        stepContent: `Tính tiếp cho Xưởng 1 và Xưởng 3:
$$P(H_1|A) = \\frac{0{,}0080}{0{,}0285} = \\frac{16}{57} \\approx 0{,}2807 \\text{ (28,07\\%)}$$
$$P(H_3|A) = \\frac{0{,}0100}{0{,}0285} = \\frac{20}{57} \\approx 0{,}3509 \\text{ (35,09\\%)}$$
So sánh: $P(H_2|A) > P(H_3|A) > P(H_1|A)$.`
      },
      {
        stepTitle: "Bước 4: Kết luận",
        stepContent: `Sản phẩm phế phẩm có khả năng cao nhất là do Xưởng 2 sản xuất ($36{,}84\\%$).`
      }
    ],
    finalAnswer: "P(H_2|A) ≈ 0,3684 (Xưởng 2 có khả năng cao nhất: 36,84%)"
  },
  {
    id: "ex-1-12",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Định Lý Bayes Ứng Dụng",
    difficulty: "Nâng cao",
    title: "Bài tập 12: Bộ lọc phát hiện email spam theo từ khóa",
    source: "Trích Đề thi tự luận",
    problem: `Trong hộp thư đến, có $70\\%$ tổng số thư là thư bình thường và $30\\%$ là thư rác (spam).
- Một từ khóa nhạy cảm 'Khuyến mãi khủng' xuất hiện trong $60\\%$ các thư rác.
- Từ khóa này chỉ xuất hiện trong $2\\%$ các thư bình thường.
Một email mới nhận được có chứa cụm từ 'Khuyến mãi khủng'. Tính xác suất để email này thực sự là thư rác.`,
    tips: "Đặt $S$ là thư rác, $N$ là thư bình thường, $W$ là biến cố chứa từ khóa. Công thức Naive Bayes phân loại văn bản.",
    steps: [
      {
        stepTitle: "Bước 1: Hệ biến cố và tiền nghiệm",
        stepContent: `Gọi $S$ là biến cố 'Email là thư rác', $P(S) = 0{,}30$.
Gọi $N$ là biến cố 'Email là thư bình thường', $P(N) = 0{,}70$.
Gọi $W$ là biến cố 'Email chứa từ khóa Khuyến mãi khủng'.
$$P(W|S) = 0{,}60; \\quad P(W|N) = 0{,}02$$`
      },
      {
        stepTitle: "Bước 2: Tính xác suất toàn phần P(W)",
        stepContent: `$$P(W) = P(S)P(W|S) + P(N)P(W|N)$$
$$P(W) = 0{,}30 \\times 0{,}60 + 0{,}70 \\times 0{,}02 = 0{,}180 + 0{,}014 = 0{,}194$$`
      },
      {
        stepTitle: "Bước 3: Tính xác suất hậu nghiệm P(S|W) qua Bayes",
        stepContent: `$$P(S|W) = \\frac{P(S)P(W|S)}{P(W)} = \\frac{0{,}180}{0{,}194} = \\frac{90}{97} \\approx 0{,}9278 \\text{ (92,78\\%)}$$
Kết luận: Email chứa từ khóa trên có xác suất là thư rác lên đến $92{,}78\\%$.`
      }
    ],
    finalAnswer: "P(S|W) ≈ 0,9278 (92,78%)"
  },
  {
    id: "ex-1-13",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Xác Suất Hình Học",
    difficulty: "Nâng cao",
    title: "Bài tập 13: Bài toán cuộc hẹn gặp gỡ giữa hai người",
    source: "Trích Đề thi tự luận XSTK",
    problem: `Hai người hẹn gặp nhau tại một quán cà phê trong khoảng thời gian từ 8h00 đến 9h00 sáng. Người đến trước sẽ đợi người đến sau tối đa 15 phút, nếu quá 15 phút mà người kia chưa tới thì sẽ bỏ về.
Giả sử thời điểm đến của mỗi người là ngẫu nhiên và độc lập trong khoảng thời gian trên. Tính xác suất để hai người có thể gặp được nhau.`,
    tips: "Chuyển bài toán sang hình học: Gọi $x, y$ là số phút sau 8h00 của hai người ($0 \\le x, y \\le 60$). Điều kiện gặp nhau là $|x - y| \\le 15$.",
    steps: [
      {
        stepTitle: "Bước 1: Mô hình hóa miền không gian mẫu $\\Omega$",
        stepContent: `Gọi $x, y$ lần lượt là số phút sau 8h00 mà người thứ nhất và người thứ hai đến quán ($0 \\le x, y \\le 60$).
Không gian mẫu là hình vuông cạnh 60 trên mặt phẳng $Oxy$:
$$S(\\Omega) = 60 \\times 60 = 3600$$`
      },
      {
        stepTitle: "Bước 2: Xác định miền biến cố thuận lợi A",
        stepContent: `Hai người gặp nhau khi và chỉ khi chênh lệch thời gian không quá 15 phút:
$$|x - y| \\le 15 \\iff -15 \\le x - y \\le 15 \\iff x - 15 \\le y \\le x + 15$$`
      },
      {
        stepTitle: "Bước 3: Tính diện tích miền A qua phần bù",
        stepContent: `Miền phần bù $\\overline{A}$ gồm hai tam giác vuông ở hai góc ngoài đường biên:
- Tam giác trên: $y - x > 15$, có cạnh góc vuông $60 - 15 = 45$.
- Tam giác dưới: $x - y > 15$, có cạnh góc vuông $60 - 15 = 45$.
Tổng diện tích miền không gặp nhau:
$$S(\\overline{A}) = 2 \\times \\left(\\frac{1}{2} \\times 45 \\times 45\\right) = 45^2 = 2025$$
Diện tích miền gặp nhau:
$$S(A) = S(\\Omega) - S(\\overline{A}) = 3600 - 2025 = 1575$$`
      },
      {
        stepTitle: "Bước 4: Tính xác suất hình học",
        stepContent: `$$P(A) = \\frac{S(A)}{S(\\Omega)} = \\frac{1575}{3600} = \\frac{7}{16} = 0{,}4375 \\text{ (43,75\\%)}$$`
      }
    ],
    finalAnswer: "P(A) = 7/16 = 0,4375 (43,75%)"
  },
  {
    id: "ex-1-14",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Công thức Nhân & Rút Không Hoàn Lại",
    difficulty: "Cơ bản",
    title: "Bài tập 14: Lấy liên tiếp sản phẩm không hoàn lại",
    source: "Trích Đề thi tự luận",
    problem: `Một hộp có 10 sản phẩm gồm 7 chính phẩm và 3 phế phẩm. Lấy lần lượt từng sản phẩm một cách ngẫu nhiên không hoàn lại cho đến khi lấy được chính phẩm thì dừng lại.
Tính xác suất để:
a) Phép thử dừng lại ở lần lấy thứ nhất.
b) Phép thử dừng lại ở lần lấy thứ hai.
c) Phép thử dừng lại ở lần lấy thứ ba.`,
    tips: "Dùng công thức nhân xác suất $P(AB) = P(A)P(B|A)$. Lưu ý số lượng sản phẩm trong hộp giảm đi sau mỗi lần rút.",
    steps: [
      {
        stepTitle: "Bước 1: Gọi biến cố từng lần rút",
        stepContent: `Gọi $C_i$ là biến cố 'Lần thứ $i$ lấy được chính phẩm'.
Gọi $D_i$ là biến cố 'Lần thứ $i$ lấy được phế phẩm'.`
      },
      {
        stepTitle: "Bước 2: Câu a - Dừng lại ở lần thứ 1",
        stepContent: `Dừng ở lần 1 tức lần 1 lấy được ngay chính phẩm:
$$P(A_1) = P(C_1) = \\frac{7}{10} = 0{,}7$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Dừng lại ở lần thứ 2",
        stepContent: `Dừng ở lần 2 tức lần 1 lấy phế phẩm, lần 2 lấy chính phẩm:
$$P(A_2) = P(D_1 C_2) = P(D_1) \\times P(C_2|D_1) = \\frac{3}{10} \\times \\frac{7}{9} = \\frac{7}{30} \\approx 0{,}2333$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Dừng lại ở lần thứ 3",
        stepContent: `Dừng ở lần 3 tức lần 1 và 2 đều lấy phế phẩm, lần 3 lấy chính phẩm:
$$P(A_3) = P(D_1 D_2 C_3) = \\frac{3}{10} \\times \\frac{2}{9} \\times \\frac{7}{8} = \\frac{42}{720} = \\frac{7}{120} \\approx 0{,}0583$$`
      }
    ],
    finalAnswer: "a) 7/10 (0,7) | b) 7/30 (0,2333) | c) 7/120 (0,0583)"
  },
  {
    id: "ex-1-15",
    chapter: "chuong-1",
    chapterName: "Chương 1: Xác Suất",
    category: "Tổng Hợp Chương 1",
    difficulty: "Nâng cao",
    title: "Bài tập 15: Chuyển hàng qua hai trạm kiểm định chất lượng",
    source: "Trích Đề thi tự luận XSTK",
    problem: `Một kiện hàng gồm 80 sản phẩm loại 1 và 20 sản phẩm loại 2. Để xuất kho, kiện hàng phải qua hai trạm kiểm soát độc lập:
- Trạm 1: Cho phép sản phẩm loại 1 đi qua với xác suất $0{,}95$; loại 2 đi qua với xác suất $0{,}10$.
- Trạm 2: Cho phép sản phẩm loại 1 đi qua với xác suất $0{,}90$; loại 2 đi qua với xác suất $0{,}05$.
Một sản phẩm được chọn ngẫu nhiên từ kiện hàng.
a) Tính xác suất để sản phẩm này vượt qua được cả hai trạm kiểm soát.
b) Giả sử sản phẩm đã vượt qua cả hai trạm, tính xác suất sản phẩm đó đúng là loại 1.`,
    tips: "Kết hợp hệ biến cố đầy đủ loại sản phẩm và công thức nhân xác suất khi qua 2 trạm độc lập.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập hệ đầy đủ",
        stepContent: `Gọi $H_1$ là 'Sản phẩm là loại 1', $P(H_1) = \\frac{80}{100} = 0{,}8$.
Gọi $H_2$ là 'Sản phẩm là loại 2', $P(H_2) = \\frac{20}{100} = 0{,}2$.
Gọi $A$ là biến cố 'Sản phẩm vượt qua cả hai trạm kiểm soát'.`
      },
      {
        stepTitle: "Bước 2: Xác suất có điều kiện khi qua 2 trạm",
        stepContent: `Do hai trạm kiểm soát độc lập:
- Nếu là loại 1: $P(A|H_1) = 0{,}95 \\times 0{,}90 = 0{,}855$.
- Nếu là loại 2: $P(A|H_2) = 0{,}10 \\times 0{,}05 = 0{,}005$.`
      },
      {
        stepTitle: "Bước 3: Câu a - Xác suất toàn phần P(A)",
        stepContent: `$$P(A) = P(H_1)P(A|H_1) + P(H_2)P(A|H_2)$$
$$P(A) = 0{,}8 \\times 0{,}855 + 0{,}2 \\times 0{,}005 = 0{,}684 + 0{,}001 = 0{,}685$$`
      },
      {
        stepTitle: "Bước 4: Câu b - Xác suất là loại 1 theo công thức Bayes",
        stepContent: `$$P(H_1|A) = \\frac{P(H_1)P(A|H_1)}{P(A)} = \\frac{0{,}684}{0{,}685} = \\frac{684}{685} \\approx 0{,}9985 \\text{ (99,85\\%)}$$`
      }
    ],
    finalAnswer: "a) P(A) = 0,685 (68,5%) | b) P(H_1|A) ≈ 0,9985 (99,85%)"
  }
];
