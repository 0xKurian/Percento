import React from 'react';
import { Sigma } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Giới thiệu' },
    { id: 'theory', label: 'Lý thuyết' },
    { id: 'exercises', label: 'Luyện tự luận' },
    { id: 'lab', label: 'Mô phỏng' },
    { id: 'calculator', label: 'Máy tính & Tra bảng' },
    { id: 'cheatsheet', label: 'Sổ tay' },
  ];

  return (
    <footer className="mt-12 border-t border-[#e5e5e5] dark:border-white/10 bg-white dark:bg-[#1f1f1f] py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#0a66c2] dark:bg-[#4a9be0] text-white dark:text-[#10171f] flex items-center justify-center font-bold">
              <Sigma className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-[#171717] dark:text-[#f5f5f5]">
                Percento
              </span>
              <span className="text-[10px] font-mono text-[#8c8c8c]">
                • Nền tảng Xác Suất & Thống Kê Toàn Diện
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#696969] dark:text-[#8c8c8c]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#0a66c2] dark:hover:text-[#4a9be0] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e5e5e5] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#8c8c8c]">
          <div>
            © 2026 Percento. All rights reserved.
          </div>
          <div>
            Biên soạn theo khung chương trình chuẩn mực.
          </div>
        </div>
      </div>
    </footer>
  );
}
