import React from 'react';
import { cheatSheetCategories } from '../data/cheatSheetData';
import { MathView } from './MathView';
import { BookmarkCheck, ShieldCheck, Printer } from 'lucide-react';

export default function CheatSheetView() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#696969] dark:text-[#8c8c8c]">
              Cẩm nang tóm tắt
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#171717] dark:text-[#f5f5f5]">
            Sổ Tay Công Thức Phòng Thi
          </h1>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f5f5f5] hover:bg-[#ebebeb] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#171717] dark:text-[#f5f5f5] border border-[#e5e5e5] dark:border-white/10 rounded-lg text-xs font-medium transition-all select-none"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>In / Lưu PDF</span>
        </button>
      </div>

      <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs sm:text-sm mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>1. CÁC GIÁ TRỊ TỚI HẠN CHUẨN KINH ĐIỂN</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cheatSheetCategories[0].items.map((it, idx) => (
            <div
              key={idx}
              className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3.5 rounded-lg border border-[#e5e5e5] dark:border-white/10"
            >
              <h2 className="text-xs font-bold text-[#171717] dark:text-[#f5f5f5] mb-2">
                {it.name}
              </h2>
              <div className="space-y-1.5 font-mono text-xs sm:text-sm">
                <div className="p-2 bg-amber-50/70 dark:bg-amber-950/30 rounded border border-amber-200/40 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 font-semibold flex justify-between items-center">
                  <span>Hai phía:</span>
                  <MathView math={it.twoSided} />
                </div>
                <div className="p-2 bg-[#f5f5f5] dark:bg-[#262626] rounded border border-[#e5e5e5] dark:border-white/10 text-[#171717] dark:text-[#f5f5f5] flex justify-between items-center">
                  <span>Một phía:</span>
                  <MathView math={it.oneSided} />
                </div>
              </div>
              <p className="text-[11px] text-[#8c8c8c] mt-2 font-mono">{it.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
        <div className="flex items-center gap-2 text-[#0a66c2] dark:text-[#4a9be0] font-bold text-xs sm:text-sm mb-3">
          <BookmarkCheck className="w-4 h-4" />
          <span>2. CÔNG THỨC KHOẢNG TIN CẬY (1 - α)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cheatSheetCategories[1].formulas.map((f, idx) => (
            <div
              key={idx}
              className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3.5 rounded-lg border border-[#e5e5e5] dark:border-white/10"
            >
              <h2 className="text-xs font-bold text-[#171717] dark:text-[#f5f5f5] mb-1">
                {f.title}
              </h2>
              <p className="text-[11px] text-[#8c8c8c] mb-2 font-mono">{f.condition}</p>
              <div className="p-3 bg-white dark:bg-[#202020] rounded border border-[#e5e5e5] dark:border-white/10 overflow-x-auto text-center font-mono text-sm sm:text-base">
                <MathView math={f.formula} block={true} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-xs sm:text-sm mb-3">
          <BookmarkCheck className="w-4 h-4" />
          <span>3. ĐỐI CHIẾU TIÊU CHUẨN KIỂM ĐỊNH & MIỀN BÁC BỎ</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border border-[#e5e5e5] dark:border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-[#f5f5f5] dark:bg-[#262626] text-[#171717] dark:text-[#f5f5f5]">
              <tr>
                <th className="p-2.5">Bài toán</th>
                <th className="p-2.5">Tiêu chuẩn thống kê</th>
                <th className="p-2.5">Miền bác bỏ hai phía (≠)</th>
                <th className="p-2.5">Miền bác bỏ phía phải (&gt;)</th>
                <th className="p-2.5">Miền bác bỏ phía trái (&lt;)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e5e5] dark:divide-white/10 font-mono">
              {cheatSheetCategories[2].tables.map((t, idx) => (
                <tr key={idx} className="hover:bg-[#fbfbfa] dark:hover:bg-[#1a1a1a]">
                  <td className="p-2.5 font-sans font-semibold text-[#171717] dark:text-[#f5f5f5]">
                    {t.name}
                  </td>
                  <td className="p-2.5 text-[#0a66c2] dark:text-[#4a9be0] font-bold">
                    <MathView math={t.stat} />
                  </td>
                  <td className="p-2.5">
                    <MathView math={t.h1NotEqual} />
                  </td>
                  <td className="p-2.5">
                    {t.h1Greater.startsWith('W') ? <MathView math={t.h1Greater} /> : t.h1Greater}
                  </td>
                  <td className="p-2.5">
                    {t.h1Less.startsWith('W') || t.h1Less.startsWith('e_') ? <MathView math={t.h1Less} /> : t.h1Less}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
