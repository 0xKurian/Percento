# Design System: Percento (Phong cách XomData)
**Project ID:** percento-edu
**Inspiration:** [xomdata.com](https://xomdata.com/)

## 1. Visual Theme & Atmosphere
Percento áp dụng ngôn ngữ thiết kế tối giản, kỹ thuật và sắc nét lấy cảm hứng trực tiếp từ **XomData**:
- **Không mô tả dài dòng**: Loại bỏ các đoạn văn mở đầu rườm rà; thay thế bằng metadata ngắn gọn, badge trạng thái, thẻ tag và số liệu tóm tắt súc tích.
- **Bảng màu ấm áp & tương phản kỹ thuật**: 
  - Light mode: Canvas `#f3f2ef` (warm technical slate), Card `#ffffff`, Border `#e5e5e5`.
  - Dark mode: Canvas `#171717` (graphite deep), Card `#202020`, Border `rgba(255, 255, 255, 0.1)`.
- **Accent Blue**: `#0a66c2` (Light) / `#4a9be0` (Dark) cho các nút hành động, thẻ đang chọn và điểm nhấn toán học.
- **Typography sắc nét**: Kết hợp font `Be Vietnam Pro` (tiếng Việt chuẩn mực) và `JetBrains Mono` (dữ liệu, công thức, số liệu thống kê).

---

## 2. Color Palette & Roles

| Semantic Role | Hex (Light) | Hex (Dark) | Ứng Dụng |
|---|---|---|---|
| **Canvas Background** | `#f3f2ef` | `#171717` | Nền toàn trang, êm mắt khi làm việc lâu |
| **Card Surface** | `#ffffff` | `#202020` | Thẻ nội dung chính, sidebar, bài tập |
| **Elevated / Inset** | `#fbfbfa` | `#1a1a1a` | Khung công thức KaTeX, SVG mô phỏng |
| **Subtle Border** | `#e5e5e5` | `rgba(255, 255, 255, 0.1)` | Viền thẻ, đường kẻ phân cách, bảng biểu |
| **Primary Accent** | `#0a66c2` | `#4a9be0` | Nút chính, tab kích hoạt, tiêu chuẩn kiểm định |
| **Success / Progress** | `#16a34a` | `#22c55e` | Hoàn thành bài tập, tiến độ ôn tập |
| **Warning / Lưu ý** | `#d97706` | `#f59e0b` | Lưu ý phòng thi, bảng Khi bình phương |
| **Muted Text** | `#696969` | `#8c8c8c` | Metadata, nhãn phụ, hướng dẫn ngắn |

---

## 3. Typography & Microcopy Rules

- **Microcopy súc tích**:
  - Không viết các đoạn văn dài giới thiệu.
  - Sử dụng badge ngắn: `6 Chương • 24 Chuyên đề • Chuẩn Toàn Diện`, `8 Dạng bài • 5 Bước giải`.
- **Font Stack**:
  - `font-sans`: `"Be Vietnam Pro", Inter, system-ui, sans-serif`
  - `font-mono`: `"JetBrains Mono", ui-monospace, monospace`
  - `font-math`: `KaTeX_Main, serif`

---

## 4. Component Patterns

- **Header / Navbar**: Chiều cao tinh gọn (`h-14`), nền kính mờ (`backdrop-blur-md`), logo vuông bo góc kết hợp icon Sigma và segmented control pill tabs.
- **Section Headers**: Khối card trắng/đen than tinh giản với tiêu đề đậm và dãy badge định dạng ngắn gọn bên phải.
- **Chapter & Exercise Cards**: Thẻ bo góc `rounded-xl`, viền mỏng `border-[#e5e5e5] dark:border-white/10`, tiêu đề rõ ràng, lời giải 5 bước phân tách rành mạch.
- **Bảng số & Tra cứu**: Dạng bảng kỹ thuật phân chia cột rõ ràng, giá trị tới hạn nổi bật, hỗ trợ tìm kiếm và tính toán trực tiếp.
