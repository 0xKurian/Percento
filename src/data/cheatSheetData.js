export const cheatSheetCategories = [
  {
    id: "critical-values",
    title: "Giá trị tới hạn chuẩn thường dùng nhất (Z-table)",
    description: "Các giá trị tới hạn kinh điển từ hàm Laplace và phân phối chuẩn tắc N(0, 1):",
    items: [
      {
        name: "Mức ý nghĩa α = 5% (Độ tin cậy 95%)",
        twoSided: "u_{\\alpha/2} = u_{0{,}025} = 1{,}96",
        oneSided: "u_\\alpha = u_{0{,}05} = 1{,}65 \; (1{,}645)",
        note: "Xuất hiện trong hơn 85% đề thi ước lượng và kiểm định"
      },
      {
        name: "Mức ý nghĩa α = 1% (Độ tin cậy 99%)",
        twoSided: "u_{\\alpha/2} = u_{0{,}005} = 2{,}58 \; (2{,}576)",
        oneSided: "u_\\alpha = u_{0{,}01} = 2{,}33 \; (2{,}326)",
        note: "Dành cho các bài toán yêu cầu độ tin cậy rất cao 99%"
      },
      {
        name: "Mức ý nghĩa α = 10% (Độ tin cậy 90%)",
        twoSided: "u_{\\alpha/2} = u_{0{,}05} = 1{,}65 \; (1{,}645)",
        oneSided: "u_\\alpha = u_{0{,}10} = 1{,}28 \; (1{,}282)",
        note: "Mức ý nghĩa 10% trong các bài toán kiểm định một phía và hai phía"
      }
    ]
  },
  {
    id: "confidence-intervals",
    title: "Chương IV: Công Thức Khoảng Tin Cậy (4 Điểm)",
    description: "Toàn bộ các trường hợp ước lượng TB, TL, PS với độ tin cậy 1 - α (Giáo trình Chương 4):",
    formulas: [
      {
        title: "1. Ước lượng Trung bình TB: Đã biết σ² hoặc mẫu lớn (n ≥ 30)",
        formula: "(\mu_1, \mu_2) = \left( \overline{x} - u_{\\alpha/2} \dfrac{s}{\sqrt{n}}, \; \overline{x} + u_{\\alpha/2} \dfrac{s}{\sqrt{n}} \right)",
        condition: "Mẫu lớn n ≥ 30 hoặc đã biết σ². Độ lệch chuẩn mẫu s (hoặc s'). Khoảng 1 phía tối đa: μ ≤ x̄ + u_α s/√n."
      },
      {
        title: "2. Ước lượng Trung bình TB: Chưa biết σ² và mẫu nhỏ (n < 30)",
        formula: "(\mu_1, \mu_2) = \left( \overline{x} - t_{(n-1, \alpha/2)} \dfrac{s}{\sqrt{n}}, \; \overline{x} + t_{(n-1, \alpha/2)} \dfrac{s}{\sqrt{n}} \right)",
        condition: "Tổng thể phân phối chuẩn N(μ, σ²), cỡ mẫu n < 30. Tra bảng Student với bậc tự do df = n - 1."
      },
      {
        title: "3. Ước lượng Tỷ lệ TL của tổng thể (p)",
        formula: "(p_1, p_2) = \left( f - u_{\\alpha/2} \sqrt{\dfrac{f(1-f)}{n}}, \; f + u_{\\alpha/2} \sqrt{\dfrac{f(1-f)}{n}} \right)",
        condition: "Tần suất mẫu f = k/n (với k là số quan sát thuận lợi). Cỡ mẫu tối thiểu: n ≥ u_{α/2}² f(1-f) / ε₀²."
      },
      {
        title: "4. Ước lượng Phương sai PS (σ²) qua phân phối Chi-Square",
        formula: "\sigma^2 \in \left[ \dfrac{(n-1)s^2}{\chi^2_{n-1}(1 - \alpha/2)}, \; \dfrac{(n-1)s^2}{\chi^2_{n-1}(\alpha/2)} \right]",
        condition: "Tổng thể phân phối chuẩn N(μ, σ²). Với bảng tra phân vị đuôi phải: [(n-1)s'² / χ²_{α/2}(n-1) ; (n-1)s'² / χ²_{1-α/2}(n-1)]."
      }
    ]
  },
  {
    id: "hypothesis-tests",
    title: "Chương V: Tiêu Chuẩn Kiểm Định Giả Thuyết (1 Điểm)",
    description: "Đối chiếu nhanh tiêu chuẩn kiểm định t và miền bác bỏ W_α (Giáo trình Chương 5):",
    tables: [
      {
        name: "Kiểm định Trung bình (KĐTB): n ≥ 30 hoặc biết σ²",
        stat: "t = \dfrac{\overline{x} - \mu_0}{\dfrac{s}{\sqrt{n}}} \sim N(0, 1)",
        h1NotEqual: "W_\alpha = \{ |t| > u_{\\alpha/2} \}",
        h1Greater: "W_\alpha = \{ t > u_\\alpha \}",
        h1Less: "W_\alpha = \{ t < -u_\\alpha \}"
      },
      {
        name: "Kiểm định Trung bình (KĐTB): n < 30 chưa biết σ²",
        stat: "t = \dfrac{\overline{x} - \mu_0}{\dfrac{s}{\sqrt{n}}} \sim t(n-1)",
        h1NotEqual: "W_\alpha = \{ |t| > t_{(n-1, \alpha/2)} \}",
        h1Greater: "W_\alpha = \{ t > t_{(n-1, \alpha)} \}",
        h1Less: "W_\alpha = \{ t < -t_{(n-1, \alpha)} \}"
      },
      {
        name: "Kiểm định Tỷ lệ (KĐTL): H: p = p0",
        stat: "t = \dfrac{f - p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}} = \dfrac{f - p_0}{\sqrt{p_0(1-p_0)}} \sqrt{n} \sim N(0, 1)",
        h1NotEqual: "W_\alpha = \{ |t| > u_{\\alpha/2} \}",
        h1Greater: "W_\alpha = \{ t > u_\\alpha \}",
        h1Less: "W_\alpha = \{ t < -u_\\alpha \}"
      }
    ]
  }
];
