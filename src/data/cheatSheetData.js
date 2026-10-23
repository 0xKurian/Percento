export const cheatSheetCategories = [
  {
    id: "critical-values",
    title: "Giá trị tới hạn chuẩn thường dùng nhất (Z-table)",
    description: "Các giá trị tới hạn kinh điển dùng trong bài thi ước lượng và kiểm định:",
    items: [
      {
        name: "Mức ý nghĩa α = 5% (Độ tin cậy 95%)",
        twoSided: "u_{0{,}025} = 1{,}96",
        oneSided: "u_{0{,}05} = 1{,}645",
        note: "Xuất hiện trong 85% đề thi ước lượng và kiểm định"
      },
      {
        name: "Mức ý nghĩa α = 1% (Độ tin cậy 99%)",
        twoSided: "u_{0{,}005} = 2{,}576",
        oneSided: "u_{0{,}01} = 2{,}326",
        note: "Dành cho các bài toán yêu cầu độ chính xác rất cao"
      },
      {
        name: "Mức ý nghĩa α = 10% (Độ tin cậy 90%)",
        twoSided: "u_{0{,}05} = 1{,}645",
        oneSided: "u_{0{,}10} = 1{,}282",
        note: "Mức ý nghĩa 10% trong kiểm định một phía và hai phía"
      }
    ]
  },
  {
    id: "confidence-intervals",
    title: "Chương IV: Công Thức Khoảng Tin Cậy (4 Điểm)",
    description: "Toàn bộ các trường hợp ước lượng TB, TL, PS với độ tin cậy 1 - α:",
    formulas: [
      {
        title: "1. Ước lượng Trung bình TB: Đã biết σ² hoặc mẫu lớn (n ≥ 30)",
        formula: "\\mu \\in \\left[ \\bar{x} - u_{\\alpha/2} \\frac{s'}{\\sqrt{n}} \\; , \\; \\bar{x} + u_{\\alpha/2} \\frac{s'}{\\sqrt{n}} \\right]",
        condition: "Mẫu lớn n ≥ 30 hoặc đã biết σ². Nếu chưa biết σ thì thay bằng s'."
      },
      {
        title: "2. Ước lượng Trung bình TB: Chưa biết σ² và mẫu nhỏ (n < 30)",
        formula: "\\mu \\in \\left[ \\bar{x} - t_{\\alpha/2}^{(n-1)} \\frac{s'}{\\sqrt{n}} \\; , \\; \\bar{x} + t_{\\alpha/2}^{(n-1)} \\frac{s'}{\\sqrt{n}} \\right]",
        condition: "Tổng thể phân phối chuẩn, n < 30. Tra bảng phân phối Student với df = n - 1."
      },
      {
        title: "3. Ước lượng Tỷ lệ TL của tổng thể (p)",
        formula: "p \\in \\left[ f - u_{\\alpha/2} \\sqrt{\\frac{f(1-f)}{n}} \\; , \\; f + u_{\\alpha/2} \\sqrt{\\frac{f(1-f)}{n}} \\right]",
        condition: "Tỷ lệ mẫu f = m/n, điều kiện n ≥ 30. Cỡ mẫu tối thiểu: n ≥ u_{\\alpha/2}^2 f(1-f) / \\epsilon_0^2."
      },
      {
        title: "4. Ước lượng Phương sai PS (σ²) qua phân phối Chi-Square",
        formula: "\\sigma^2 \\in \\left[ \\frac{(n-1)s'^2}{\\chi^2_{\\alpha/2}(n-1)} \\; , \\; \\frac{(n-1)s'^2}{\\chi^2_{1-\\alpha/2}(n-1)} \\right]",
        condition: "Lưu ý giá trị lớn hơn nằm ở mẫu số của cận dưới (ngược chiều)."
      }
    ]
  },
  {
    id: "hypothesis-tests",
    title: "Chương V: Tiêu Chuẩn Kiểm Định Giả Thuyết (1 Điểm)",
    description: "Đối chiếu nhanh tiêu chuẩn kiểm định và miền bác bỏ W_α:",
    tables: [
      {
        name: "Kiểm định Trung bình (KĐTB): n ≥ 30 hoặc biết σ²",
        stat: "Z_{qs} = \\frac{\\bar{x} - \\mu_0}{s'} \\sqrt{n}",
        h1NotEqual: "W_\\alpha = \\{|Z| > u_{\\alpha/2}\\}",
        h1Greater: "W_\\alpha = \\{Z > u_\\alpha\\}",
        h1Less: "W_\\alpha = \\{Z < -u_\\alpha\\}"
      },
      {
        name: "Kiểm định Trung bình (KĐTB): n < 30 chưa biết σ²",
        stat: "T_{qs} = \\frac{\\bar{x} - \\mu_0}{s'} \\sqrt{n}",
        h1NotEqual: "W_\\alpha = \\{|T| > t_{\\alpha/2}^{(n-1)}\\}",
        h1Greater: "W_\\alpha = \\{T > t_\\alpha^{(n-1)}\\}",
        h1Less: "W_\\alpha = \\{T < -t_\\alpha^{(n-1)}\\}"
      },
      {
        name: "Kiểm định Tỷ lệ (KĐTL): H0: p = p0",
        stat: "Z_{qs} = \\frac{f - p_0}{\\sqrt{p_0(1-p_0)}} \\sqrt{n}",
        h1NotEqual: "W_\\alpha = \\{|Z| > u_{\\alpha/2}\\}",
        h1Greater: "W_\\alpha = \\{Z > u_\\alpha\\}",
        h1Less: "W_\\alpha = \\{Z < -u_\\alpha\\}"
      }
    ]
  }
];
