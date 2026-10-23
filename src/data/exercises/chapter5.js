export const chapter5Exercises = [
  {
    id: "ex-5-01",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Kỳ vọng 1 Mẫu",
    difficulty: "Cơ bản",
    title: "Bài tập 1: Quy trình 5 bước kiểm định hai phía cho kỳ vọng khi biết phương sai",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Khối lượng quy định của một bao đường đóng gói tự động là 1000 gam với độ lệch chuẩn đã biết $\\sigma = 16\\text{ g}$. Nghi ngờ máy hoạt động sai lệch, người ta cân thử 64 bao và thu được khối lượng trung bình mẫu là $\\overline{x} = 996\\text{ g}$.
Với mức ý nghĩa $\\alpha = 0{,}05$, máy đóng gói có hoạt động bình thường không?
(Cho biết $u_{0{,}025} = 1{,}96$).`,
    tips: "Quy trình kiểm định 5 bước chuẩn mực: 1) Đặt cặp giả thuyết $H_0, H_1$; 2) Chọn thống kê kiểm định; 3) Xác định miền bác bỏ $W_\\alpha$; 4) Tính giá trị quan sát $Z_{qs}$; 5) So sánh và kết luận.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết thống kê",
        stepContent: `Gọi $\\mu$ là khối lượng trung bình thực tế của bao đường.
Ta có cặp giả thuyết đối xứng hai phía:
$$\\begin{cases}
H_0: \\mu = 1000\\text{ g}  \\\\
H_1: \\mu \\ne 1000\\text{ g} 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Chọn tiêu chuẩn kiểm định",
        stepContent: `Vì đã biết độ lệch chuẩn tổng thể $\\sigma = 16\\text{ g}$, ta sử dụng thống kê kiểm định Z:
$$Z = \\frac{\\overline{X} - \\mu_0}{\\sigma / \\sqrt{n}}$$
Khi giả thuyết $H_0$ đúng, $Z \\sim N(0, 1)$.`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Với mức ý nghĩa $\\alpha = 0{,}05$, kiểm định hai phía:
Tra bảng phân vị chuẩn: $u_{\\alpha/2} = u_{0{,}025} = 1{,}96$.
Miền bác bỏ:
$$W_\\alpha = \\{z : |z| > u_{\\alpha/2}\\} = (-\\infty; -1{,}96) \\cup (1{,}96; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $Z_{qs}$",
        stepContent: `Kích thước mẫu $n = 64 \\implies \\sqrt{n} = 8$.
Trung bình mẫu $\\overline{x} = 996$.
$$Z_{qs} = \\frac{\\overline{x} - \\mu_0}{\\sigma / \\sqrt{n}} = \\frac{996 - 1000}{16 / 8} = \\frac{-4}{2} = -2{,}00$$`
      },
      {
        stepTitle: "Bước 5: So sánh và đưa ra kết luận",
        stepContent: `Ta thấy:
$$|Z_{qs}| = |-2{,}00| = 2{,}00 > 1{,}96 \\implies Z_{qs} \\in W_\\alpha$$
Do đó ta bác bỏ giả thuyết $H_0$, chấp nhận đối thuyết $H_1$.
Kết luận: Ở mức ý nghĩa $5\\%$, có đầy đủ bằng chứng thống kê để khẳng định máy đóng gói hoạt động không bình thường, trọng lượng đóng gói bị sai lệch so với tiêu chuẩn 1000 gam.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (|Z_qs| = 2,00 > 1,96); máy đóng gói hoạt động không bình thường"
  },
  {
    id: "ex-5-02",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Kỳ vọng 1 Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 2: Kiểm định phía phải cho kỳ vọng với mẫu lớn chưa biết phương sai",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Năng suất trung bình trước đây của một giống ngô là 45 tạ/ha. Áp dụng kỹ thuật chăm sóc mới trên 100 thửa ruộng thí nghiệm thu được năng suất trung bình mẫu là $\\overline{x} = 46{,}2\ \text{ ta/ha}$ với độ lệch chuẩn mẫu hiệu chỉnh $s' = 4\ \text{ ta/ha}$.
Với mức ý nghĩa $\\alpha = 0{,}01$, có thể kết luận rằng kỹ thuật mới thực sự làm tăng năng suất ngô hay không?
(Cho biết $u_{0{,}01} = 2{,}326$).`,
    tips: "Kiểm định phía phải: $H_1: \\mu > \\mu_0$. Miền bác bỏ: $W_\\alpha = (u_\\alpha; +\\infty)$. Chú ý mức phân vị là $u_\\alpha$ chứ không phải $u_{\\alpha/2}$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $\\mu$ là năng suất trung bình khi áp dụng kỹ thuật mới.
Kiểm định phía phải:
$$\\begin{cases}
H_0: \\mu = 45\ \text{ ta/ha}  \\\\
H_1: \\mu > 45\ \text{ ta/ha} 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Chọn tiêu chuẩn kiểm định",
        stepContent: `Kích thước mẫu $n = 100 \\ge 30$ (mẫu lớn), chưa biết phương sai $\\sigma^2$.
Dùng thống kê Z xấp xỉ chuẩn tắc:
$$Z = \\frac{\\overline{X} - \\mu_0}{s' / \\sqrt{n}} \\xrightarrow{d} N(0, 1)$$`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Với mức ý nghĩa $\\alpha = 0{,}01$, kiểm định một phía bên phải:
Tra bảng phân vị chuẩn: $u_\\alpha = u_{0{,}01} = 2{,}326$.
Miền bác bỏ:
$$W_\\alpha = (u_\\alpha; +\\infty) = (2{,}326; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $Z_{qs}$",
        stepContent: `Thay số từ mẫu: $n = 100 \\implies \\sqrt{n} = 10$; $\\overline{x} = 46{,}2$; $s' = 4$:
$$Z_{qs} = \\frac{46{,}2 - 45}{4 / 10} = \\frac{1{,}2}{0{,}4} = 3{,}00$$`
      },
      {
        stepTitle: "Bước 5: So sánh và kết luận",
        stepContent: `Vì $Z_{qs} = 3{,}00 > 2{,}326 \\implies Z_{qs} \\in W_\\alpha$.
Ta bác bỏ giả thuyết $H_0$, chấp nhận đối thuyết $H_1$.
Kết luận: Với mức ý nghĩa $1\\%$, có đầy đủ cơ sở để khẳng định kỹ thuật chăm sóc mới làm tăng năng suất ngô một cách có ý nghĩa thống kê.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 1% (Z_qs = 3,00 > 2,326); kỹ thuật mới thực sự làm tăng năng suất"
  },
  {
    id: "ex-5-03",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Kỳ vọng 1 Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 3: Kiểm định phía trái cho kỳ vọng với mẫu nhỏ (Kiểm định Student)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một công ty sản xuất dây cáp thép tuyên bố lực kéo đứt trung bình của sản phẩm ít nhất là $300\\text{ kg}$. Nghi ngờ công ty quảng cáo quá mức, một đơn vị kiểm định chọn ngẫu nhiên 16 sợi cáp để thử nghiệm độ bền kéo, kết quả thu được:
- Lực kéo đứt trung bình mẫu: $\\overline{x} = 294\\text{ kg}$
- Độ lệch chuẩn mẫu hiệu chỉnh: $s' = 12\\text{ kg}$
Giả thiết lực kéo đứt có phân phối chuẩn. Với mức ý nghĩa $\\alpha = 0{,}05$, nhận định của bên kiểm định có đúng không?
(Cho biết $t_{15; 0{,}05} = 1{,}753$).`,
    tips: "Mẫu nhỏ $n = 16 < 30$, chưa biết $\\sigma$, tổng thể chuẩn $\\implies$ Dùng kiểm định Student với bậc tự do $k = n - 1 = 15$. Kiểm định phía trái: Miền bác bỏ $W_\\alpha = (-\\infty; -t_{n-1; \\alpha})$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $\\mu$ là lực kéo đứt trung bình thực tế.
Kiểm định phía trái:
$$\\begin{cases}
H_0: \\mu = 300\\text{ kg}  \\\\
H_1: \\mu < 300\\text{ kg} 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tiêu chuẩn kiểm định Student",
        stepContent: `Do tổng thể có phân phối chuẩn và $n = 16 < 30$:
$$T = \\frac{\\overline{X} - \\mu_0}{s' / \\sqrt{n}} \\sim t(n - 1) = t(15)$$`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Bậc tự do $k = 16 - 1 = 15$. Mức ý nghĩa $\\alpha = 0{,}05$.
Tra bảng phân phối Student một phía: $t_{15; 0{,}05} = 1{,}753$.
Miền bác bỏ phía trái:
$$W_\\alpha = (-\\infty; -t_{15; 0{,}05}) = (-\\infty; -1{,}753)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $T_{qs}$",
        stepContent: `Thay số: $n = 16 \\implies \\sqrt{n} = 4$; $\\overline{x} = 294$; $s' = 12$:
$$T_{qs} = \\frac{294 - 300}{12 / 4} = \\frac{-6}{3} = -2{,}00$$`
      },
      {
        stepTitle: "Bước 5: So sánh và kết luận",
        stepContent: `Ta thấy:
$$T_{qs} = -2{,}00 < -1{,}753 \\implies T_{qs} \\in W_\\alpha$$
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $5\\%$, nghi ngờ của bên kiểm định là có căn cứ, lực kéo đứt trung bình của dây cáp thực tế nhỏ hơn $300\\text{ kg}$.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (T_qs = -2,00 < -1,753); lực kéo đứt thực tế kém hơn 300 kg"
  },
  {
    id: "ex-5-04",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Tỷ Lệ 1 Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 4: Kiểm định hai phía cho tỷ lệ phế phẩm",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Theo thiết kế ban đầu, tỷ lệ phế phẩm của một xí nghiệp may mặc là $p_0 = 0{,}08$. Sau khi thay đổi quy trình may, người ta kiểm tra ngẫu nhiên 500 sản phẩm thì thấy có 30 sản phẩm lỗi.
Với mức ý nghĩa $\\alpha = 0{,}05$, tỷ lệ phế phẩm của quy trình mới có thực sự thay đổi so với thiết kế hay không?
(Cho biết $u_{0{,}025} = 1{,}96$).`,
    tips: "Thống kê kiểm định tỷ lệ: $Z = \\frac{f - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$. Lưu ý ở dưới mẫu dùng tham số lý thuyết $p_0$ theo giả thiết $H_0$ chứ không dùng $f$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $p$ là tỷ lệ phế phẩm thực tế của quy trình may mới.
$$\\begin{cases}
H_0: p = 0{,}08  \\\\
H_1: p \\ne 0{,}08 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tính tần suất mẫu $f$",
        stepContent: `Kích thước mẫu $n = 500$. Số phế phẩm $m = 30$.
$$f = \\frac{30}{500} = 0{,}06 = 6\\%$$`
      },
      {
        stepTitle: "Bước 3: Xác định tiêu chuẩn và miền bác bỏ",
        stepContent: `Thống kê Z chuẩn tắc:
$$Z = \\frac{f - p_0}{\\sqrt{\\frac{p_0(1 - p_0)}{n}}} \\sim N(0, 1)$$
Với $\\alpha = 0{,}05$, kiểm định hai phía: $u_{0{,}025} = 1{,}96$.
Miền bác bỏ:
$$W_\\alpha = \\{z : |z| > 1{,}96\\} = (-\\infty; -1{,}96) \\cup (1{,}96; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $Z_{qs}$",
        stepContent: `Tính sai số mẫu chuẩn dưới $H_0$:
$$SE_0 = \\sqrt{\\frac{0{,}08 \\times 0{,}92}{500}} = \\sqrt{\\frac{0{,}0736}{500}} = \\sqrt{0{,}0001472} \\approx 0{,}01213$$
Giá trị quan sát:
$$Z_{qs} = \\frac{0{,}06 - 0{,}08}{0{,}01213} = \\frac{-0{,}02}{0{,}01213} \\approx -1{,}648$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Ta thấy:
$$|Z_{qs}| = |-1{,}648| = 1{,}648 < 1{,}96 \\implies Z_{qs} \\notin W_\\alpha$$
Chưa có đủ cơ sở để bác bỏ giả thuyết $H_0$.
Kết luận: Với mức ý nghĩa $5\\%$, sự sai khác giữa $6\\%$ và $8\\%$ chưa có ý nghĩa thống kê; ta chưa thể khẳng định tỷ lệ phế phẩm của quy trình mới đã thay đổi.`
      }
    ],
    finalAnswer: "Chưa đủ cơ sở bác bỏ H0 ở mức ý nghĩa 5% (|Z_qs| = 1,648 < 1,96); tỷ lệ phế phẩm chưa thay đổi có ý nghĩa"
  },
  {
    id: "ex-5-05",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Tỷ Lệ 1 Mẫu",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 5: Kiểm định phía phải cho tỷ lệ thị phần sau chiến dịch quảng cáo",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Trước đây, một ứng dụng di động chiếm $15\\%$ thị phần người dùng. Sau một chiến dịch quảng cáo rầm rộ, khảo sát ngẫu nhiên 800 người dùng điện thoại thông minh thấy có 144 người đang sử dụng ứng dụng này.
Với mức ý nghĩa $\\alpha = 0{,}05$, chiến dịch quảng cáo có mang lại hiệu quả gia tăng thị phần hay không?
(Cho biết $u_{0{,}05} = 1{,}645$).`,
    tips: "Hiệu quả gia tăng đồng nghĩa kiểm định phía phải: $H_1: p > 0{,}15$. Miền bác bỏ: $W_\\alpha = (1{,}645; +\\infty)$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $p$ là tỷ lệ thị phần của ứng dụng sau chiến dịch.
$$\\begin{cases}
H_0: p = 0{,}15  \\\\
H_1: p > 0{,}15 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tính tần suất mẫu",
        stepContent: `Kích thước mẫu $n = 800$. Số người dùng ứng dụng $m = 144$.
$$f = \\frac{144}{800} = 0{,}18 = 18\\%$$`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Kiểm định một phía bên phải ở mức ý nghĩa $\\alpha = 0{,}05$:
Tra bảng phân vị chuẩn: $u_{0{,}05} = 1{,}645$.
$$W_\\alpha = (1{,}645; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $Z_{qs}$",
        stepContent: `Tính sai số mẫu chuẩn dưới $H_0$:
$$SE_0 = \\sqrt{\\frac{0{,}15 \\times 0{,}85}{800}} = \\sqrt{\\frac{0{,}1275}{800}} = \\sqrt{0{,}000159375} \\approx 0{,}01262$$
Giá trị quan sát:
$$Z_{qs} = \\frac{f - p_0}{SE_0} = \\frac{0{,}18 - 0{,}15}{0{,}01262} = \\frac{0{,}03}{0{,}01262} \\approx 2{,}377$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Vì $Z_{qs} \\approx 2{,}377 > 1{,}645 \\implies Z_{qs} \\in W_\\alpha$.
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $5\\%$, chiến dịch quảng cáo đã đem lại hiệu quả rõ rệt, thị phần của ứng dụng đã thực sự tăng lên.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (Z_qs = 2,377 > 1,645); chiến dịch quảng cáo đã làm tăng thị phần"
  },
  {
    id: "ex-5-06",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định So sánh Hai Kỳ vọng",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 6: So sánh hai kỳ vọng mẫu lớn độc lập (Kiểm định Z)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Khảo sát mức lương khởi điểm (triệu đồng/tháng) của các kỹ sư mới tốt nghiệp ở hai chuyên ngành $A$ và $B$ thu được số liệu:
- Chuyên ngành $A$: $n_1 = 64, \\; \\overline{x}_1 = 15{,}5, \\; s'_1 = 2{,}4$.
- Chuyên ngành $B$: $n_2 = 81, \\; \\overline{x}_2 = 14{,}6, \\; s'_2 = 2{,}7$.
Với mức ý nghĩa $\\alpha = 0{,}05$, có thể cho rằng mức lương khởi điểm của chuyên ngành $A$ cao hơn chuyên ngành $B$ hay không?
(Cho biết $u_{0{,}05} = 1{,}645$).`,
    tips: "Cả hai mẫu lớn ($n_1, n_2 \\ge 30$) $\\implies$ Thống kê Z: $Z = \\frac{\\overline{x}_1 - \\overline{x}_2}{\\sqrt{\\frac{s'^2_1}{n_1} + \\frac{s'^2_2}{n_2}}}$. Kiểm định phía phải: $H_1: \\mu_1 > \\mu_2$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $\\mu_1$ và $\\mu_2$ lần lượt là mức lương trung bình của chuyên ngành $A$ và $B$.
$$\\begin{cases}
H_0: \\mu_1 = \\mu_2  \\\\
H_1: \\mu_1 > \\mu_2 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tiêu chuẩn kiểm định và miền bác bỏ",
        stepContent: `Vì hai mẫu lớn độc lập ($n_1 = 64, n_2 = 81$), dùng thống kê Z:
$$Z = \\frac{\\overline{X}_1 - \\overline{X}_2}{\\sqrt{\\frac{s'^2_1}{n_1} + \\frac{s'^2_2}{n_2}}} \\sim N(0, 1)$$
Với kiểm định phía phải ở mức $\\alpha = 0{,}05$:
$$W_\\alpha = (u_{0{,}05}; +\\infty) = (1{,}645; +\\infty)$$`
      },
      {
        stepTitle: "Bước 3: Tính giá trị quan sát $Z_{qs}$",
        stepContent: `Tính sai số chuẩn mẫu gộp:
$$SE = \\sqrt{\\frac{2{,}4^2}{64} + \\frac{2{,}7^2}{81}} = \\sqrt{\\frac{5{,}76}{64} + \\frac{7{,}29}{81}} = \\sqrt{0{,}09 + 0{,}09} = \\sqrt{0{,}18} \\approx 0{,}4243$$
Hiệu trung bình: $\\overline{x}_1 - \\overline{x}_2 = 15{,}5 - 14{,}6 = 0{,}9$.
Giá trị quan sát:
$$Z_{qs} = \\frac{0{,}9}{0{,}4243} \\approx 2{,}121$$`
      },
      {
        stepTitle: "Bước 4: So sánh và kết luận",
        stepContent: `Vì $Z_{qs} = 2{,}121 > 1{,}645 \\implies Z_{qs} \\in W_\\alpha$.
Bác bỏ giả thuyết $H_0$, chấp nhận đối thuyết $H_1$.
Kết luận: Với mức ý nghĩa $5\\%$, ta có đủ bằng chứng thống kê để kết luận mức lương khởi điểm của sinh viên ngành $A$ cao hơn ngành $B$.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (Z_qs = 2,121 > 1,645); lương ngành A cao hơn ngành B"
  },
  {
    id: "ex-5-07",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định So sánh Hai Kỳ vọng",
    difficulty: "Nâng cao",
    title: "Bài tập 7: So sánh hai kỳ vọng mẫu nhỏ với phương sai bằng nhau (Student hai mẫu)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Để so sánh độ bền chịu kéo của hai loại vật liệu sợi tổng hợp, người ta đo lực kéo đứt trên hai mẫu nhỏ độc lập:
- Vật liệu 1: $n_1 = 12, \\; \\overline{x}_1 = 82\\text{ N}, \\; s'_1 = 4\\text{ N}$.
- Vật liệu 2: $n_2 = 10, \\; \\overline{x}_2 = 78\\text{ N}, \\; s'_2 = 5\\text{ N}$.
Giả thiết các tổng thể có phân phối chuẩn và phương sai bằng nhau $\\sigma_1^2 = \\sigma_2^2$.
Với mức ý nghĩa $\\alpha = 0{,}05$, hai loại vật liệu có độ bền chịu kéo tương đương nhau không?
(Cho biết $t_{20; 0{,}025} = 2{,}086$).`,
    tips: "Phương sai gộp: $s_p^2 = \\frac{(n_1-1)s'^2_1 + (n_2-1)s'^2_2}{n_1+n_2-2}$. Bậc tự do $k = n_1 + n_2 - 2 = 20$. Thống kê $T = \\frac{\\overline{x}_1 - \\overline{x}_2}{s_p \\sqrt{1/n_1 + 1/n_2}}$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $\\mu_1, \\mu_2$ là độ bền trung bình của hai vật liệu.
$$\\begin{cases}
H_0: \\mu_1 = \\mu_2  \\\\
H_1: \\mu_1 \\ne \\mu_2 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tính phương sai gộp $s_p^2$",
        stepContent: `Bậc tự do: $k = 12 + 10 - 2 = 20$.
$$s_p^2 = \\frac{(12 - 1)(4^2) + (10 - 1)(5^2)}{20} = \\frac{11(16) + 9(25)}{20} = \\frac{176 + 225}{20} = \\frac{401}{20} = 20{,}05$$
Độ lệch chuẩn gộp:
$$s_p = \\sqrt{20{,}05} \\approx 4{,}4777\\text{ N}$$`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Với kiểm định hai phía ở mức $\\alpha = 0{,}05$:
Tra bảng Student với bậc tự do 20: $t_{20; 0{,}025} = 2{,}086$.
$$W_\\alpha = \\{t : |t| > 2{,}086\\}$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $T_{qs}$",
        stepContent: `Hiệu trung bình: $\\overline{x}_1 - \\overline{x}_2 = 82 - 78 = 4\\text{ N}$.
Sai số chuẩn:
$$SE = s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}} = 4{,}4777 \\sqrt{\\frac{1}{12} + \\frac{1}{10}} = 4{,}4777 \\sqrt{0{,}08333 + 0{,}1} = 4{,}4777 \\times 0{,}42817 \\approx 1{,}9172$$
Giá trị quan sát:
$$T_{qs} = \\frac{4}{1{,}9172} \\approx 2{,}0864$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `So sánh:
$$|T_{qs}| \\approx 2{,}0864 > 2{,}0860 \\implies T_{qs} \\in W_\\alpha$$
Mặc dù rất sát biên nhưng giá trị quan sát rơi vào miền bác bỏ.
Do đó ta bác bỏ $H_0$ ở mức ý nghĩa $5\\%$, thừa nhận độ bền chịu kéo của hai loại vật liệu là có sự khác biệt có ý nghĩa thống kê.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (|T_qs| = 2,0864 > 2,086); hai vật liệu có độ bền khác biệt"
  },
  {
    id: "ex-5-08",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Mẫu Cặp (Paired t-test)",
    difficulty: "Nâng cao",
    title: "Bài tập 8: Kiểm định t theo cặp đánh giá hiệu quả chương trình huấn luyện",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Điểm số bài kiểm tra chuyên môn của 10 nhân viên trước và sau khi tham gia khóa đào tạo nâng cao được ghi nhận như sau:
$$\\begin{array}{c|cccccccccc}
\\text{Nhan vien} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\\\ \\hline
\\text{Truoc } (X) & 65 & 70 & 68 & 72 & 60 & 75 & 64 & 71 & 67 & 68 \\\\
\\text{Sau } (Y) & 70 & 76 & 74 & 75 & 68 & 80 & 69 & 74 & 73 & 71
\\end{array}$$
Giả thiết hiệu số điểm có phân phối chuẩn. Với mức ý nghĩa $\\alpha = 0{,}01$, khóa đào tạo có thực sự giúp nâng cao điểm số của nhân viên không?
(Cho biết $t_{9; 0{,}01} = 2{,}821$).`,
    tips: "Dữ liệu đo trên cùng đối tượng trước - sau là dữ liệu cặp. Đặt $D_i = Y_i - X_i$. Đưa bài toán 2 mẫu về bài toán kiểm định 1 mẫu đối với biến sai khác $D$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính các sai khác $d_i = y_i - x_i$",
        stepContent: `Tính độ tăng điểm của từng nhân viên:
- $d = [70-65, \\; 76-70, \\; 74-68, \\; 75-72, \\; 68-60, \\; 80-75, \\; 69-64, \\; 74-71, \\; 73-67, \\; 71-68]$
- $d = [5, \\; 6, \\; 6, \\; 3, \\; 8, \\; 5, \\; 5, \\; 3, \\; 6, \\; 3]$
Số quan sát: $n = 10$.`
      },
      {
        stepTitle: "Bước 2: Tính trung bình mẫu $\\overline{d}$ và độ lệch chuẩn $s_d'$",
        stepContent: `Tổng các hiệu số:
$$\\sum d_i = 5 + 6 + 6 + 3 + 8 + 5 + 5 + 3 + 6 + 3 = 50$$
Trung bình mẫu của sai khác:
$$\\overline{d} = \\frac{50}{10} = 5{,}0$$
Tổng bình phương sai khác:
$$\\sum d_i^2 = 25 + 36 + 36 + 9 + 64 + 25 + 25 + 9 + 36 + 9 = 274$$
Phương sai mẫu hiệu chỉnh:
$$s_d'^2 = \\frac{1}{n - 1} \\left[ \\sum d_i^2 - n(\\overline{d})^2 \\right] = \\frac{1}{9} [274 - 10(25)] = \\frac{24}{9} \\approx 2{,}6667$$
Độ lệch chuẩn:
$$s_d' = \\sqrt{\\frac{24}{9}} = \\frac{\\sqrt{24}}{3} \\approx 1{,}633$$`
      },
      {
        stepTitle: "Bước 3: Thiết lập cặp giả thuyết và miền bác bỏ",
        stepContent: `Gọi $\\mu_D = E(Y - X)$ là mức tăng điểm trung bình.
$$\\begin{cases}
H_0: \\mu_D = 0  \\\\
H_1: \\mu_D > 0 
\\end{cases}$$
Kiểm định phía phải ở mức $\\alpha = 0{,}01$ với bậc tự do $k = 10 - 1 = 9$:
Tra bảng: $t_{9; 0{,}01} = 2{,}821$.
Miền bác bỏ:
$$W_\\alpha = (2{,}821; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $T_{qs}$ và kết luận",
        stepContent: `Giá trị quan sát:
$$T_{qs} = \\frac{\\overline{d} - 0}{s_d' / \\sqrt{n}} = \\frac{5{,}0}{1{,}633 / \\sqrt{10}} = \\frac{5{,}0}{1{,}633 / 3{,}1623} = \\frac{5{,}0}{0{,}5164} \\approx 9{,}68$$
So sánh: $T_{qs} \\approx 9{,}68 > 2{,}821 \\implies T_{qs} \\in W_\\alpha$.
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $1\\%$, khóa đào tạo nâng cao thực sự có hiệu quả rất cao trong việc cải thiện năng lực và điểm số của nhân viên.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 1% (T_qs = 9,68 > 2,821); khóa đào tạo giúp tăng điểm số rất rõ rệt"
  },
  {
    id: "ex-5-09",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định So sánh Hai Tỷ lệ",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 9: So sánh hai tỷ lệ trong thử nghiệm A/B Testing",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Một nhóm kỹ sư thực hiện A/B testing để so sánh tỷ lệ bấm vào nút đăng ký (Conversion Rate) giữa hai giao diện web:
- Giao diện A: Trong 1000 lượt truy cập có 80 lượt đăng ký.
- Giao diện B: Trong 1200 lượt truy cập có 126 lượt đăng ký.
Với mức ý nghĩa $\\alpha = 0{,}05$, giao diện B có thực sự mang lại tỷ lệ chuyển đổi cao hơn giao diện A hay không?
(Cho biết $u_{0{,}05} = 1{,}645$).`,
    tips: "Khi kiểm định $H_0: p_1 = p_2$, tính tỷ lệ gộp chung $\\overline{p} = \\frac{m_1 + m_2}{n_1 + n_2}$ để tính sai số mẫu chung: $SE = \\sqrt{\\overline{p}(1-\\overline{p})\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $p_A$ và $p_B$ lần lượt là tỷ lệ chuyển đổi của hai giao diện.
Kiểm định phía phải ($B > A$ tương đương $p_B - p_A > 0$):
$$\\begin{cases}
H_0: p_B = p_A  \\\\
H_1: p_B > p_A 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tính các tần suất mẫu và tỷ lệ gộp",
        stepContent: `Tần suất mẫu từng giao diện:
$$f_A = \\frac{80}{1000} = 0{,}08 = 8\\%$$
$$f_B = \\frac{126}{1200} = 0{,}105 = 10{,}5\\%$$
Tỷ lệ gộp chung dưới giả thiết $H_0$:
$$\\overline{p} = \\frac{m_A + m_B}{n_A + n_B} = \\frac{80 + 126}{1000 + 1200} = \\frac{206}{2200} \\approx 0{,}09364$$
$$1 - \\overline{p} = 1 - 0{,}09364 = 0{,}90636$$`
      },
      {
        stepTitle: "Bước 3: Xác định tiêu chuẩn kiểm định và miền bác bỏ",
        stepContent: `Thống kê Z chuẩn tắc:
$$Z = \\frac{f_B - f_A}{\\sqrt{\\overline{p}(1 - \\overline{p}) \\left(\\frac{1}{n_A} + \\frac{1}{n_B}\\right)}} \\sim N(0, 1)$$
Với mức ý nghĩa $\\alpha = 0{,}05$, kiểm định một phía bên phải:
$$W_\\alpha = (u_{0{,}05}; +\\infty) = (1{,}645; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $Z_{qs}$",
        stepContent: `Tính sai số chuẩn gộp:
$$SE = \\sqrt{0{,}09364 \\times 0{,}90636 \\times \\left(\\frac{1}{1000} + \\frac{1}{1200}\\right)}$$
$$SE = \\sqrt{0{,}08487 \\times (0{,}001 + 0{,}0008333)} = \\sqrt{0{,}08487 \\times 0{,}0018333} = \\sqrt{0{,}0001556} \\approx 0{,}01247$$
Hiệu tần suất: $f_B - f_A = 0{,}105 - 0{,}08 = 0{,}025$.
Giá trị quan sát:
$$Z_{qs} = \\frac{0{,}025}{0{,}01247} \\approx 2{,}005$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Vì $Z_{qs} \\approx 2{,}005 > 1{,}645 \\implies Z_{qs} \\in W_\\alpha$.
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $5\\%$, có đầy đủ cơ sở thống kê để khẳng định giao diện B cho tỷ lệ chuyển đổi cao hơn hẳn so với giao diện A.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (Z_qs = 2,005 > 1,645); giao diện B có tỷ lệ chuyển đổi cao hơn"
  },
  {
    id: "ex-5-10",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Phương Sai 1 Mẫu",
    difficulty: "Nâng cao",
    title: "Bài tập 10: Kiểm định phương sai đánh giá độ ổn định của máy công cụ",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Độ phân tán phương sai chuẩn của một máy đóng chai quy định là $\\sigma_0^2 = 0{,}36\\text{ ml}^2$. Sau thời gian vận hành dài, người ta nghi ngờ máy bị mòn làm tăng độ biến động. Khảo sát mẫu 25 chai nước thấy phương sai mẫu hiệu chỉnh là $s'^2 = 0{,}60\\text{ ml}^2$.
Giả thiết thể tích nước đóng chai có phân phối chuẩn. Với mức ý nghĩa $\\alpha = 0{,}05$, độ ổn định của máy có bị giảm sút hay không?
(Cho biết $\\chi^2_{24; 0{,}05} = 36{,}415$).`,
    tips: "Kiểm định phía phải cho phương sai: $H_1: \\sigma^2 > \\sigma_0^2$. Thống kê $\\chi^2 = \\frac{(n-1)s'^2}{\\sigma_0^2} \\sim \\chi^2(n-1)$. Miền bác bỏ: $W_\\alpha = (\\chi^2_{n-1; \\alpha}; +\\infty)$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $\\sigma^2$ là phương sai thực tế của máy đóng chai.
Nghi ngờ độ biến động tăng tương đương với kiểm định phía phải:
$$\\begin{cases}
H_0: \\sigma^2 = 0{,}36  \\\\
H_1: \\sigma^2 > 0{,}36 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tiêu chuẩn kiểm định Chi-bình phương",
        stepContent: `Khi $H_0$ đúng, thống kê:
$$\\chi^2 = \\frac{(n - 1)s'^2}{\\sigma_0^2} \\sim \\chi^2(n - 1)$$
Bậc tự do $k = n - 1 = 25 - 1 = 24$.`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Với mức ý nghĩa $\\alpha = 0{,}05$, kiểm định một phía bên phải:
Tra bảng Chi-bình phương: $\\chi^2_{24; 0{,}05} = 36{,}415$.
Miền bác bỏ:
$$W_\\alpha = (\\chi^2_{24; 0{,}05}; +\\infty) = (36{,}415; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $\\chi^2_{qs}$",
        stepContent: `Thay số: $n - 1 = 24$; $s'^2 = 0{,}60$; $\\sigma_0^2 = 0{,}36$:
$$\\chi^2_{qs} = \\frac{24 \\times 0{,}60}{0{,}36} = \\frac{14{,}4}{0{,}36} = 40{,}00$$`
      },
      {
        stepTitle: "Bước 5: So sánh và kết luận",
        stepContent: `Vì $\\chi^2_{qs} = 40{,}00 > 36{,}415 \\implies \\chi^2_{qs} \\in W_\\alpha$.
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $5\\%$, có đầy đủ cơ sở thống kê để kết luận độ phân tán của máy đóng chai đã tăng lên đáng kể, máy vận hành kém ổn định và cần phải được bảo dưỡng, căn chỉnh lại.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (chi^2_qs = 40,00 > 36,415); máy kém ổn định, cần bảo dưỡng"
  },
  {
    id: "ex-5-11",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định So sánh Hai Phương Sai",
    difficulty: "Nâng cao",
    title: "Bài tập 11: So sánh hai phương sai bằng kiểm định Fisher (F-test)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Hai máy tiện tự động cùng gia công một chi tiết. Đo kích thước các chi tiết sản xuất từ hai máy ta có:
- Máy 1: $n_1 = 16, \\; s'^2_1 = 0{,}25$.
- Máy 2: $n_2 = 21, \\; s'^2_2 = 0{,}10$.
Giả thiết kích thước chi tiết từ hai máy tuân theo phân phối chuẩn. Với mức ý nghĩa $\\alpha = 0{,}05$, máy 1 có độ phân tán lớn hơn máy 2 hay không?
(Cho biết $F_{15; 20; 0{,}05} = 2{,}203$).`,
    tips: "Kiểm định Fisher phía phải: Đặt phương sai lớn hơn lên tử số để $F_{qs} = \\frac{s'^2_1}{s'^2_2} \\ge 1$. Bậc tự do tử là $n_1 - 1$, mẫu là $n_2 - 1$. Miền bác bỏ: $W_\\alpha = (F_{n_1-1, n_2-1; \\alpha}; +\\infty)$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `Gọi $\\sigma_1^2$ và $\\sigma_2^2$ là phương sai kích thước chi tiết của máy 1 và máy 2.
$$\\begin{cases}
H_0: \\sigma_1^2 = \\sigma_2^2  \\\\
H_1: \\sigma_1^2 > \\sigma_2^2 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tiêu chuẩn kiểm định Fisher",
        stepContent: `Khi $H_0$ đúng, tỷ số hai phương sai tuân theo phân phối Fisher-Snedecor:
$$F = \\frac{s'^2_1}{s'^2_2} \\sim F(n_1 - 1, n_2 - 1)$$
Bậc tự do tử: $k_1 = n_1 - 1 = 16 - 1 = 15$.
Bậc tự do mẫu: $k_2 = n_2 - 1 = 21 - 1 = 20$.`
      },
      {
        stepTitle: "Bước 3: Xác định miền bác bỏ $W_\\alpha$",
        stepContent: `Với mức ý nghĩa $\\alpha = 0{,}05$:
Tra bảng phân phối Fisher: $F_{15; 20; 0{,}05} = 2{,}203$.
Miền bác bỏ:
$$W_\\alpha = (2{,}203; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $F_{qs}$",
        stepContent: `Thay số: $s'^2_1 = 0{,}25$; $s'^2_2 = 0{,}10$:
$$F_{qs} = \\frac{0{,}25}{0{,}10} = 2{,}50$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Vì $F_{qs} = 2{,}50 > 2{,}203 \\implies F_{qs} \\in W_\\alpha$.
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $5\\%$, ta khẳng định máy 1 có độ phân tán lớn hơn máy 2, nghĩa là máy 1 gia công kém chính xác và kém ổn định hơn máy 2.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 5% (F_qs = 2,50 > 2,203); máy 1 có độ phân tán lớn hơn máy 2"
  },
  {
    id: "ex-5-12",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Tính Độc Lập",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 12: Kiểm định Chi-bình phương về tính độc lập trong bảng tiếp biến 2x2",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Để nghiên cứu mối liên hệ giữa việc hút thuốc lá và nguy cơ mắc bệnh viêm phế quản mạn tính, người ta theo dõi 400 người và lập bảng phân loại:
$$\\begin{array}{c|cc|c}
\\text{Tinh trang} & \\text{Mac benh} & \\text{Khong mac benh} & \\text{Tong} \\\\ \\hline
\\text{Co hut thuoc} & 60 & 140 & 200 \\\\
\\text{Khong hut thuoc} & 20 & 180 & 200 \\\\ \\hline
\\text{Tong} & 80 & 320 & 400
\\end{array}$$
Với mức ý nghĩa $\\alpha = 0{,}01$, việc hút thuốc và tình trạng mắc bệnh có độc lập với nhau hay không?
(Cho biết $\\chi^2_{1; 0{,}01} = 6{,}635$).`,
    tips: "Bảng $r \\times c$ có bậc tự do $k = (r-1)(c-1)$. Bảng $2 \\times 2$ có $k = (2-1)(2-1) = 1$. Tần số lý thuyết $E_{ij} = \\frac{R_i C_j}{n}$. Thống kê $\\chi^2 = \\sum \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `$$\\begin{cases}
H_0: \\text{Hut thuoc va mac benh doc lap} \\\\
H_1: \\text{Hut thuoc va mac benh phu thuoc}
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tính bảng tần số kỳ vọng (lý thuyết) $E_{ij}$",
        stepContent: `Áp dụng công thức $E_{ij} = \\frac{R_i \\times C_j}{n}$:
- $E_{11} = \\frac{200 \\times 80}{400} = 40$
- $E_{12} = \\frac{200 \\times 320}{400} = 160$
- $E_{21} = \\frac{200 \\times 80}{400} = 40$
- $E_{22} = \\frac{200 \\times 320}{400} = 160$
Tất cả các tần số lý thuyết đều $\\ge 5$, thỏa mãn điều kiện áp dụng kiểm định $\\chi^2$.`
      },
      {
        stepTitle: "Bước 3: Xác định tiêu chuẩn kiểm định và miền bác bỏ",
        stepContent: `Bậc tự do: $k = (2 - 1)(2 - 1) = 1$.
Mức ý nghĩa $\\alpha = 0{,}01$. Tra bảng: $\\chi^2_{1; 0{,}01} = 6{,}635$.
Miền bác bỏ:
$$W_\\alpha = (6{,}635; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $\\chi^2_{qs}$",
        stepContent: `Tính tổng 4 ô theo công thức $\\sum \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}$:
$$\\chi^2_{qs} = \\frac{(60 - 40)^2}{40} + \\frac{(140 - 160)^2}{160} + \\frac{(20 - 40)^2}{40} + \\frac{(180 - 160)^2}{160}$$
$$= \\frac{20^2}{40} + \\frac{(-20)^2}{160} + \\frac{(-20)^2}{40} + \\frac{20^2}{160}$$
$$= \\frac{400}{40} + \\frac{400}{160} + \\frac{400}{40} + \\frac{400}{160} = 10 + 2{,}5 + 10 + 2{,}5 = 25{,}00$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Ta thấy:
$$\\chi^2_{qs} = 25{,}00 > 6{,}635 \\implies \\chi^2_{qs} \\in W_\\alpha$$
Bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.
Kết luận: Với mức ý nghĩa $1\\%$, việc hút thuốc lá và nguy cơ mắc bệnh viêm phế quản mạn tính không độc lập, mà có mối liên hệ phụ thuộc rất chặt chẽ.`
      }
    ],
    finalAnswer: "Bác bỏ H0 ở mức ý nghĩa 1% (chi^2_qs = 25,00 > 6,635); hút thuốc và mắc bệnh có mối liên hệ rất chặt chẽ"
  },
  {
    id: "ex-5-13",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Kiểm định Mức độ Phù hợp",
    difficulty: "Nâng cao",
    title: "Bài tập 13: Kiểm định độ phù hợp Chi-bình phương (Goodness-of-Fit)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Gieo một con xúc xắc 120 lần để kiểm tra tính cân đối và đồng chất, ta thu được kết quả số lần xuất hiện các mặt:
$$\\begin{array}{c|cccccc}
\\text{Mat cham } (i) & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline
\\text{Tan so quan sat } (O_i) & 15 & 24 & 18 & 16 & 28 & 19
\\end{array}$$
Với mức ý nghĩa $\\alpha = 0{,}05$, có thể kết luận con xúc xắc là cân đối và đồng chất hay không?
(Cho biết $\\chi^2_{5; 0{,}05} = 11{,}070$).`,
    tips: "Nếu xúc xắc cân đối, xác suất mỗi mặt là $p_i = 1/6$. Tần số kỳ vọng mỗi mặt là $E_i = n p_i = 120 \\times 1/6 = 20$. Bậc tự do $k = r - 1 = 6 - 1 = 5$.",
    steps: [
      {
        stepTitle: "Bước 1: Thiết lập cặp giả thuyết",
        stepContent: `$$\\begin{cases}
H_0: p_1 = p_2 = p_3 = p_4 = p_5 = p_6 = \\frac{1}{6}  \\\\
H_1: \\exists p_i \\ne \\frac{1}{6} 
\\end{cases}$$`
      },
      {
        stepTitle: "Bước 2: Tính các tần số lý thuyết $E_i$",
        stepContent: `Với $n = 120$ lần gieo:
$$E_i = n \\times p_i = 120 \\times \\frac{1}{6} = 20, \\quad \\forall i = 1, 2, \\dots, 6$$
Tất cả $E_i = 20 \\ge 5$, thỏa mãn điều kiện.`
      },
      {
        stepTitle: "Bước 3: Xác định tiêu chuẩn kiểm định và miền bác bỏ",
        stepContent: `Thống kê Pearson:
$$\\chi^2 = \\sum_{i=1}^6 \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2(r - 1) = \\chi^2(5)$$
Bậc tự do $k = 6 - 1 = 5$. Mức ý nghĩa $\\alpha = 0{,}05$.
Tra bảng: $\\chi^2_{5; 0{,}05} = 11{,}070$.
Miền bác bỏ:
$$W_\\alpha = (11{,}070; +\\infty)$$`
      },
      {
        stepTitle: "Bước 4: Tính giá trị quan sát $\\chi^2_{qs}$",
        stepContent: `Tính tổng bình phương sai lệch:
$$\\chi^2_{qs} = \\frac{(15 - 20)^2}{20} + \\frac{(24 - 20)^2}{20} + \\frac{(18 - 20)^2}{20} + \\frac{(16 - 20)^2}{20} + \\frac{(28 - 20)^2}{20} + \\frac{(19 - 20)^2}{20}$$
$$= \\frac{(-5)^2 + 4^2 + (-2)^2 + (-4)^2 + 8^2 + (-1)^2}{20}$$
$$= \\frac{25 + 16 + 4 + 16 + 64 + 1}{20} = \\frac{126}{20} = 6{,}30$$`
      },
      {
        stepTitle: "Bước 5: Kết luận",
        stepContent: `Vì $\\chi^2_{qs} = 6{,}30 < 11{,}070 \\implies \\chi^2_{qs} \\notin W_\\alpha$.
Chưa đủ bằng chứng để bác bỏ giả thuyết $H_0$.
Kết luận: Với mức ý nghĩa $5\\%$, số liệu quan sát hoàn toàn phù hợp với phân phối đều lý thuyết; ta chấp nhận con xúc xắc cân đối và đồng chất.`
      }
    ],
    finalAnswer: "Chưa đủ cơ sở bác bỏ H0 ở mức ý nghĩa 5% (chi^2_qs = 6,30 < 11,07); xúc xắc cân đối đồng chất"
  },
  {
    id: "ex-5-14",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "P-value & Ý nghĩa Thống kê",
    difficulty: "Trọng tâm thi",
    title: "Bài tập 14: Tính P-value và nguyên lý ra quyết định bác bỏ giả thuyết",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Trong một kiểm định hai phía cho kỳ vọng $\\mu$ với mẫu lớn đã biết phương sai, người ta thu được giá trị thống kê quan sát là $Z_{qs} = -2{,}15$.
a) Hãy tính giá trị $p\\text{-value}$ của bài toán kiểm định này.
b) Đưa ra kết luận ở mức ý nghĩa $\\alpha = 0{,}05$.
c) Đưa ra kết luận ở mức ý nghĩa $\\alpha = 0{,}01$.
d) Giải thích ý nghĩa thực tế của $p\\text{-value}$.
(Cho biết $\\Phi_0(2{,}15) = 0{,}4842$).`,
    tips: "Với kiểm định hai phía, $p\\text{-value} = 2 P(Z \\ge |Z_{qs}|) = 2(0{,}5 - \\Phi_0(|Z_{qs}|))$. Nguyên tắc: Bác bỏ $H_0$ nếu $p\\text{-value} \\le \\alpha$, chấp nhận $H_0$ nếu $p\\text{-value} > \\alpha$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính giá trị $p\\text{-value}$",
        stepContent: `Vì đây là kiểm định hai phía:
$$p\\text{-value} = 2 P(Z \\le Z_{qs}) = 2 P(Z \\le -2{,}15) = 2 P(Z \\ge 2{,}15)$$
Sử dụng hàm Laplace chuẩn tắc:
$$P(Z \\ge 2{,}15) = 0{,}5 - \\Phi_0(2{,}15) = 0{,}5 - 0{,}4842 = 0{,}0158$$
Do đó:
$$p\\text{-value} = 2 \\times 0{,}0158 = 0{,}0316 = 3{,}16\\%$$`
      },
      {
        stepTitle: "Bước 2: Kết luận ở mức ý nghĩa $\\alpha = 0{,}05$",
        stepContent: `So sánh $p\\text{-value}$ với $\\alpha = 0{,}05$:
$$p\\text{-value} = 0{,}0316 < 0{,}05 = \\alpha$$
Vì $p\\text{-value} < \\alpha$, ta bác bỏ giả thuyết $H_0$, chấp nhận $H_1$.`
      },
      {
        stepTitle: "Bước 3: Kết luận ở mức ý nghĩa $\\alpha = 0{,}01$",
        stepContent: `So sánh $p\\text{-value}$ với $\\alpha = 0{,}01$:
$$p\\text{-value} = 0{,}0316 > 0{,}01 = \\alpha$$
Vì $p\\text{-value} > \\alpha$, ta chưa có đủ cơ sở để bác bỏ $H_0$.`
      },
      {
        stepTitle: "Bước 4: Giải thích ý nghĩa thực tế của $p\\text{-value}$",
        stepContent: `Ý nghĩa: $p\\text{-value} = 0{,}0316$ là xác suất quan sát được một mẫu có độ lệch bằng hoặc lớn hơn mẫu hiện tại nếu giả thiết $H_0$ là hoàn toàn đúng.
Nói cách khác, $p\\text{-value}$ là mức ý nghĩa nhỏ nhất mà tại đó ta có thể bác bỏ giả thuyết $H_0$. Giá trị $p\\text{-value}$ càng nhỏ, bằng chứng chống lại $H_0$ càng mạnh mẽ.`
      }
    ],
    finalAnswer: "a) p-value = 0,0316 | b) Tại alpha=0,05: Bác bỏ H0 | c) Tại alpha=0,01: Chưa đủ cơ sở bác bỏ H0"
  },
  {
    id: "ex-5-15",
    chapter: "chuong-5",
    chapterName: "Chương 5: Kiểm Định Giả Thuyết",
    category: "Lý thuyết Kiểm định & Lực kiểm định",
    difficulty: "Nâng cao",
    title: "Bài tập 15: Tính xác suất sai lầm loại II và lực kiểm định (Power of the Test)",
    source: "Trích Đề thi & Bài tập lớn XSTK",
    problem: `Cho biến ngẫu nhiên $X \\sim N(\\mu, \\sigma^2 = 100)$. Kiểm định giả thuyết:
$$\\begin{cases}
H_0: \\mu = 50 \\\\
H_1: \\mu = 54
\\end{cases}$$
bằng một mẫu ngẫu nhiên cỡ $n = 25$ với quy tắc bác bỏ $H_0$ nếu trung bình mẫu $\\overline{x} \\ge 53$.
a) Tính xác suất sai lầm loại I (mức ý nghĩa $\\alpha$).
b) Tính xác suất sai lầm loại II (ký hiệu $\\beta$).
c) Tính lực kiểm định (Power of the Test: $1 - \\beta$).
(Cho biết $\\Phi_0(1{,}5) = 0{,}4332$; $\\Phi_0(0{,}5) = 0{,}1915$).`,
    tips: "Sai lầm loại I: Bác bỏ $H_0$ khi $H_0$ đúng. Sai lầm loại II: Chấp nhận $H_0$ khi $H_1$ đúng. Lực kiểm định: $1 - \\beta = P(\\text{Bac bo } H_0 \\mid H_1 \\text{ dung})$.",
    steps: [
      {
        stepTitle: "Bước 1: Tính phân phối của trung bình mẫu $\\overline{X}$",
        stepContent: `Với $n = 25$ và $\\sigma^2 = 100$:
$$Var(\\overline{X}) = \\frac{\\sigma^2}{n} = \\frac{100}{25} = 4 \\implies \\sigma_{\\overline{X}} = \\sqrt{4} = 2$$
Quy tắc quyết định: Bác bỏ $H_0$ nếu $\\overline{x} \\ge 53$.`
      },
      {
        stepTitle: "Bước 2: Câu a - Tính xác suất sai lầm loại I ($\\alpha$)",
        stepContent: `Sai lầm loại I xảy ra khi ta bác bỏ $H_0$ trong khi $H_0$ đúng (nghĩa là $\\mu = 50$):
$$\\alpha = P(\\overline{X} \\ge 53 \\mid \\mu = 50)$$
Chuẩn hóa dưới $\\mu = 50$:
$$Z = \\frac{\\overline{X} - 50}{2} \\implies Z_{bien} = \\frac{53 - 50}{2} = 1{,}5$$
$$\\alpha = P(Z \\ge 1{,}5) = 0{,}5 - \\Phi_0(1{,}5) = 0{,}5 - 0{,}4332 = 0{,}0668 = 6{,}68\\%$$`
      },
      {
        stepTitle: "Bước 3: Câu b - Tính xác suất sai lầm loại II ($\\beta$)",
        stepContent: `Sai lầm loại II xảy ra khi ta chấp nhận $H_0$ (nghĩa là $\\overline{X} < 53$) trong khi $H_1$ đúng (tức là $\\mu = 54$):
$$\\beta = P(\\overline{X} < 53 \\mid \\mu = 54)$$
Chuẩn hóa dưới $\\mu = 54$:
$$Z = \\frac{\\overline{X} - 54}{2} \\implies Z_{bien} = \\frac{53 - 54}{2} = -0{,}5$$
$$\\beta = P(Z < -0{,}5) = 0{,}5 - \\Phi_0(0{,}5) = 0{,}5 - 0{,}1915 = 0{,}3085 = 30{,}85\\%$$`
      },
      {
        stepTitle: "Bước 4: Câu c - Tính lực kiểm định (Power)",
        stepContent: `Lực kiểm định là xác suất bác bỏ đúng đắn một giả thuyết $H_0$ sai lầm:
$$\\text{Power} = 1 - \\beta = 1 - 0{,}3085 = 0{,}6915 = 69{,}15\\%$$
Nhận xét: Lực kiểm định đạt $69{,}15\\%$. Nếu muốn tăng lực kiểm định mà không làm tăng sai lầm loại I ($\\alpha$), cách hiệu quả nhất là tăng kích thước mẫu $n$.`
      }
    ],
    finalAnswer: "a) alpha = 0,0668 (6,68%) | b) beta = 0,3085 (30,85%) | c) Lực kiểm định Power = 0,6915 (69,15%)"
  }
];
