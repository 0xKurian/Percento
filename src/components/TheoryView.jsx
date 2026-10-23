import React, { useState, useEffect, useMemo } from 'react';
import { chapters } from '../data/theoryData';
import { FormattedMath } from './MathView';
import { BookOpen, Search, ChevronRight, Check } from 'lucide-react';

export default function TheoryView() {
  const [selectedChapterId, setSelectedChapterId] = useState(() => {
    try {
      const saved = localStorage.getItem('percento_theory_chapter');
      if (saved && chapters.some((c) => c.id === saved)) return saved;
    } catch {
      return chapters[0].id;
    }
    return chapters[0].id;
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('percento_theory_chapter', selectedChapterId);
    } catch (e) {
      console.error(e);
    }
  }, [selectedChapterId]);

  const currentChapter = useMemo(() => {
    return chapters.find((c) => c.id === selectedChapterId) || chapters[0];
  }, [selectedChapterId]);

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chapters;
    const q = searchQuery.toLowerCase();
    return chapters
      .map((c) => {
        const matchesChapter = c.title.toLowerCase().includes(q) || c.shortTitle.toLowerCase().includes(q);
        const matchingSections = c.sections.filter(
          (s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)
        );
        if (matchesChapter || matchingSections.length > 0) {
          return {
            ...c,
            sections: matchingSections.length > 0 ? matchingSections : c.sections,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [searchQuery]);

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#0a66c2] dark:bg-[#4a9be0]"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#696969] dark:text-[#8c8c8c]">
              Khung Đề Cương 10 Điểm
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#171717] dark:text-[#f5f5f5]">
            Lý Thuyết Cốt Lõi Theo Đề Cương
          </h1>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[#696969] dark:text-[#8c8c8c]">
          <span className="px-2.5 py-1 rounded bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10">
            5 Chương Đề Cương
          </span>
          <span className="px-2.5 py-1 rounded bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10">
            Trọng Số 10đ
          </span>
          <span className="px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-[#0a66c2] dark:text-[#4a9be0] border border-blue-200/40 dark:border-blue-900/40 font-semibold">
            Tối Giản • Trọng Tâm
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8c8c8c] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm công thức, định lý..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-lg text-xs sm:text-sm text-[#171717] dark:text-[#f5f5f5] placeholder-[#8c8c8c] focus:outline-none focus:border-[#0a66c2] dark:focus:border-[#4a9be0] transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            {filteredChapters.map((ch) => {
              const isSelected = ch.id === currentChapter.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all select-none ${
                    isSelected
                      ? 'bg-blue-50/70 dark:bg-blue-950/30 border-[#0a66c2] dark:border-[#4a9be0] text-[#0a66c2] dark:text-[#4a9be0]'
                      : 'bg-white dark:bg-[#202020] border-[#e5e5e5] dark:border-white/10 hover:border-[#cccccc] dark:hover:border-white/20 text-[#171717] dark:text-[#e8e8e8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded ${
                        isSelected
                          ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f]'
                          : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c]'
                      }`}
                    >
                      {ch.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#8c8c8c]">
                      {ch.sections.length} mục
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold truncate">
                    {ch.shortTitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white dark:bg-[#202020] rounded-xl p-5 border border-[#e5e5e5] dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#e5e5e5] dark:border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#0a66c2] dark:text-[#4a9be0] uppercase tracking-wider block">
                  {currentChapter.badge}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-[#171717] dark:text-[#f5f5f5]">
                  {currentChapter.title}
                </h2>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] border border-[#e5e5e5] dark:border-white/10">
                {currentChapter.sections.length} bài học
              </span>
            </div>

            <div className="space-y-4">
              {currentChapter.sections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={`sec-${sec.id}`}
                  className="bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-6 h-6 rounded bg-[#0a66c2] dark:bg-[#4a9be0] text-white dark:text-[#10171f] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5]">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="text-xs sm:text-sm text-[#262626] dark:text-[#d4d4d4]">
                    <FormattedMath text={sec.content} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
