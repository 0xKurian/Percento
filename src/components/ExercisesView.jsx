import React, { useState, useEffect, useMemo } from 'react';
import { exercises } from '../data/exercisesData';
import { FormattedMath, MathView } from './MathView';
import {
  FileText,
  Search,
  CheckCircle2,
  Eye,
  EyeOff,
  Lightbulb,
  BookmarkCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExercisesView() {
  const [selectedChapter, setSelectedChapter] = useState(() => {
    try {
      const saved = localStorage.getItem('percento_exercise_chapter');
      if (saved) return saved;
    } catch {
      return 'all';
    }
    return 'all';
  });
  const [subFilter, setSubFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSolutions, setExpandedSolutions] = useState({});
  const [showTips, setShowTips] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem('percento_exercise_chapter', selectedChapter);
    } catch (e) {
      console.error(e);
    }
  }, [selectedChapter]);

  const [completedExercises, setCompletedExercises] = useState(() => {
    try {
      const saved = localStorage.getItem('xstk_completed_exercises');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleSolution = (id) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleTip = (id) => {
    setShowTips((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleComplete = (id) => {
    setCompletedExercises((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('xstk_completed_exercises', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      if (updated[id]) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.75 },
        });
      }
      return updated;
    });
  };

  const handleSelectChapter = (chId) => {
    setSelectedChapter(chId);
    setSubFilter('all');
  };

  const chapterSubFilters = {
    'chuong-1': [
      { id: 'all', label: 'Tất cả' },
      { id: 'cd', label: 'Định nghĩa cổ điển', match: (ex) => /cổ điển|đếm|tổ hợp|hoán vị/i.test(ex.category + ex.title) },
      { id: 'cn', label: 'Cộng & Nhân XS', match: (ex) => /cộng|nhân|độc lập/i.test(ex.category + ex.title) },
      { id: 'bayes', label: 'Toàn phần & Bayes', match: (ex) => /bayes|đầy đủ/i.test(ex.category + ex.title) },
      { id: 'bernoulli', label: 'Nhị thức Bernoulli', match: (ex) => /bernoulli|mốt/i.test(ex.category + ex.title) },
    ],
    'chuong-2': [
      { id: 'all', label: 'Tất cả' },
      { id: 'd1', label: 'Dạng 1: Tìm k', match: (ex) => /hằng số|chuẩn hóa|tìm c|tìm k/i.test(ex.title + ex.problem) },
      { id: 'd2', label: 'Dạng 2: Tìm F(x)', match: (ex) => /f\(x\)|hàm phân phối|tích lũy/i.test(ex.title + ex.category + ex.problem) },
      { id: 'd3', label: 'Dạng 3: Tính P(a≤X≤b)', match: (ex) => /xác suất|chuẩn n|poisson|nhị thức|đều u|mũ exp|siêu bội/i.test(ex.category + ex.title) },
      { id: 'd4', label: 'Dạng 4: E(X), D(X), Mode', match: (ex) => /kỳ vọng|phương sai|mod|đặc trưng/i.test(ex.title + ex.category) },
    ],
    'chuong-3': [
      { id: 'all', label: 'Tất cả' },
      { id: 'dt', label: 'Phân phối đồng thời', match: (ex) => /đồng thời|biên/i.test(ex.category + ex.title) },
      { id: 'cov', label: 'Covarian & Tương quan', match: (ex) => /hiệp phương sai|tương quan|độc lập/i.test(ex.category + ex.title) },
      { id: 'dk', label: 'Điều kiện & Kỳ vọng ĐK', match: (ex) => /điều kiện/i.test(ex.category + ex.title) },
    ],
    'chuong-4': [
      { id: 'all', label: 'Tất cả' },
      { id: 'tb', label: 'Trung bình (TB)', match: (ex) => /kỳ vọng|trung bình|mô tả/i.test(ex.category + ex.title) },
      { id: 'tl', label: 'Tỷ lệ (TL)', match: (ex) => /tỷ lệ/i.test(ex.category + ex.title) },
      { id: 'ps', label: 'Phương sai (PS)', match: (ex) => /phương sai/i.test(ex.category + ex.title) },
    ],
    'chuong-5': [
      { id: 'all', label: 'Tất cả' },
      { id: 'kdtb', label: 'Kiểm định Trung bình (KĐTB)', match: (ex) => /kỳ vọng|trung bình|student/i.test(ex.category + ex.title) },
      { id: 'kdtl', label: 'Kiểm định Tỷ lệ (KĐTL)', match: (ex) => /tỷ lệ/i.test(ex.category + ex.title) },
    ],
  };

  const filteredExercises = useMemo(() => {
    return exercises.filter((ex) => {
      const matchesChapter = selectedChapter === 'all' || ex.chapter === selectedChapter;
      if (!matchesChapter) return false;

      if (selectedChapter !== 'all' && subFilter !== 'all') {
        const filters = chapterSubFilters[selectedChapter] || [];
        const activeSub = filters.find((f) => f.id === subFilter);
        if (activeSub && activeSub.match && !activeSub.match(ex)) {
          return false;
        }
      }

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        ex.title.toLowerCase().includes(q) ||
        ex.problem.toLowerCase().includes(q) ||
        ex.category.toLowerCase().includes(q);
      return matchesSearch;
    });
  }, [selectedChapter, subFilter, searchQuery]);

  const completedCount = Object.values(completedExercises).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / exercises.length) * 100);

  const activeSubFilters = selectedChapter !== 'all' ? chapterSubFilters[selectedChapter] : null;

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#696969] dark:text-[#8c8c8c]">
              Khung Đề Cương 10 Điểm
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#171717] dark:text-[#f5f5f5]">
            Luyện Tự Luận Theo Đề Cương
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs font-mono font-medium text-[#171717] dark:text-[#f5f5f5]">
              {completedCount} / {exercises.length} bài ({progressPercent}%)
            </div>
            <div className="w-32 sm:w-40 bg-[#ebebeb] dark:bg-[#333333] h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#202020] p-3 rounded-xl border border-[#e5e5e5] dark:border-white/10 space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => handleSelectChapter('all')}
              className={`px-2.5 py-1 rounded-md transition-all select-none font-medium ${
                selectedChapter === 'all'
                  ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f]'
                  : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
              }`}
            >
              Tất cả ({exercises.length})
            </button>
            {[
              { id: 'chuong-1', label: 'Chương I (2đ)' },
              { id: 'chuong-2', label: 'Chương II (4 dạng)' },
              { id: 'chuong-3', label: 'Chương III (n=2)' },
              { id: 'chuong-4', label: 'Chương IV (4đ)' },
              { id: 'chuong-5', label: 'Chương V (1đ)' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectChapter(c.id)}
                className={`px-2.5 py-1 rounded-md transition-all select-none font-medium ${
                  selectedChapter === c.id
                    ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f]'
                    : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-[#8c8c8c] absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm dạng bài..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md text-[#171717] dark:text-[#f5f5f5] placeholder-[#8c8c8c] focus:outline-none focus:border-[#0a66c2] dark:focus:border-[#4a9be0]"
            />
          </div>
        </div>

        {activeSubFilters && activeSubFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#e5e5e5] dark:border-white/10 text-xs">
            <span className="text-[11px] font-mono text-[#8c8c8c] mr-1">Dạng đề cương:</span>
            {activeSubFilters.map((sf) => (
              <button
                key={sf.id}
                onClick={() => setSubFilter(sf.id)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all select-none ${
                  subFilter === sf.id
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-[#0a66c2] dark:text-[#4a9be0] font-semibold'
                    : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                {sf.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4">
        {filteredExercises.map((ex) => {
          const isDone = !!completedExercises[ex.id];
          const isExpanded = !!expandedSolutions[ex.id];
          const isTipOpen = !!showTips[ex.id];

          return (
            <div
              key={ex.id}
              className={`bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border transition-all ${
                isDone
                  ? 'border-emerald-500/40 bg-emerald-50/10 dark:bg-emerald-950/10'
                  : 'border-[#e5e5e5] dark:border-white/10'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] border border-[#e5e5e5] dark:border-white/10">
                    {ex.chapterName}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-[#0a66c2] dark:text-[#4a9be0] border border-blue-200/40 dark:border-blue-900/40">
                    {ex.category}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded ${
                      ex.difficulty === 'Nâng cao' || ex.difficulty === 'Trọng tâm thi'
                        ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                    }`}
                  >
                    {ex.difficulty}
                  </span>
                  {ex.source && (
                    <span className="text-[#8c8c8c]">
                      • {ex.source}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleComplete(ex.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-colors select-none ${
                    isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isDone ? 'Đã thành thạo' : 'Đánh dấu hoàn thành'}</span>
                </button>
              </div>

              <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5] mb-2.5">
                {ex.title}
              </h2>

              <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3.5 sm:p-4 rounded-lg border border-[#e5e5e5] dark:border-white/10 text-xs sm:text-sm text-[#262626] dark:text-[#d4d4d4] mb-3 leading-relaxed">
                <FormattedMath text={ex.problem} />
              </div>

              {ex.tips && (
                <div className="mb-3">
                  <button
                    onClick={() => toggleTip(ex.id)}
                    className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:underline select-none"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{isTipOpen ? 'Ẩn lưu ý' : 'Xem lưu ý phòng thi'}</span>
                  </button>
                  {isTipOpen && (
                    <div className="mt-2 p-3 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 rounded-lg text-xs text-amber-900 dark:text-amber-200">
                      <strong>Lưu ý:</strong> {ex.tips}
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-[#e5e5e5] dark:border-white/10">
                <button
                  onClick={() => toggleSolution(ex.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all select-none ${
                    isExpanded
                      ? 'bg-[#ebebeb] dark:bg-[#333333] text-[#171717] dark:text-[#f5f5f5]'
                      : 'bg-[#0a66c2] hover:bg-[#084e96] dark:bg-[#4a9be0] dark:hover:bg-[#3a84ca] text-white dark:text-[#10171f]'
                  }`}
                >
                  {isExpanded ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Ẩn lời giải</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem lời giải 5 bước</span>
                    </>
                  )}
                </button>

                {ex.finalAnswer && (
                  <div className="text-xs text-[#8c8c8c] font-mono">
                    Đáp số: <span className="font-semibold text-[#171717] dark:text-[#f5f5f5]">{ex.finalAnswer}</span>
                  </div>
                )}
              </div>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-[#e5e5e5] dark:border-white/10 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0a66c2] dark:text-[#4a9be0]">
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>LỜI GIẢI CHI TIẾT THEO BƯỚC:</span>
                  </div>

                  <div className="space-y-2.5">
                    {ex.steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3.5 rounded-lg border-l-2 border-[#0a66c2] dark:border-[#4a9be0] border border-[#e5e5e5] dark:border-white/10"
                      >
                        <h3 className="text-xs font-bold text-[#171717] dark:text-[#f5f5f5] mb-1.5">
                          {step.stepTitle}
                        </h3>
                        <div className="text-xs sm:text-sm text-[#262626] dark:text-[#d4d4d4]">
                          <FormattedMath text={step.stepContent} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
