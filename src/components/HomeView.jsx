import React from 'react';
import {
  BookOpen,
  FileText,
  Compass,
  Calculator,
  Zap,
  ArrowRight,
  Sparkles,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { MathView } from './MathView';

export default function HomeView({ setActiveTab }) {
  const outlineChapters = [
    {
      id: 'chuong-1',
      num: 'I',
      title: 'Khái Niệm Về Xác Suất',
      points: '2.0 điểm',
      topics: 'Định nghĩa cổ điển, tính chất, xác suất có điều kiện, công thức cộng/nhân, toàn phần & Bayes, nhị thức Bernoulli.',
      badgeColor: 'bg-blue-50 text-[#0a66c2] border-blue-200/50 dark:bg-blue-950/40 dark:text-[#4a9be0] dark:border-blue-900/40',
    },
    {
      id: 'chuong-2',
      num: 'II',
      title: 'Biến Ngẫu Nhiên',
      points: '4 Dạng bài tập',
      topics: 'Phân loại BNN, bảng phân phối, hàm mật độ, hàm phân phối F(x), E(X), D(X), Mode, phân phối Nhị thức, Poisson, Chuẩn.',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/40',
    },
    {
      id: 'chuong-3',
      num: 'III',
      title: 'Vectơ Ngẫu Nhiên',
      points: 'Xét n = 2',
      topics: 'Phân phối đồng thời (n=2), phân phối biên, hàm F(x, y), hiệp phương sai Cov(X,Y), tương quan rho, XS và kỳ vọng điều kiện.',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/40',
    },
    {
      id: 'chuong-4',
      num: 'IV',
      title: 'Thống Kê & Ước Lượng Khoảng',
      points: '4.0 điểm (Trọng tâm)',
      topics: 'Thống kê mô tả (x_bar, s^2, s\'), ước lượng khoảng tin cậy cho Trung bình (TB), Tỷ lệ (TL), Phương sai (PS), xác định cỡ mẫu.',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/40',
    },
    {
      id: 'chuong-5',
      num: 'V',
      title: 'Kiểm Định Giả Thuyết',
      points: '1.0 điểm',
      topics: 'Quy trình 5 bước kiểm định tự luận chuẩn, kiểm định trung bình (KĐTB qua Z và Student), kiểm định tỷ lệ (KĐTL).',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/50 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900/40',
    },
  ];

  const features = [
    {
      id: 'theory',
      title: 'Lý Thuyết Cốt Lõi',
      desc: 'Hệ thống định nghĩa, công thức và bản chất 5 chương bám sát khung đề cương 10 điểm.',
      icon: BookOpen,
      badge: '5 Chương • 23 Mục',
      cta: 'Học lý thuyết',
    },
    {
      id: 'exercises',
      title: 'Luyện Tự Luận 5 Bước',
      desc: '75 bài tập trọng tâm (15 bài/chương) với lời giải 5 bước chuẩn mực, phân theo đúng các dạng bài đề cương.',
      icon: FileText,
      badge: '75 Bài tự luận',
      cta: 'Luyện bài tập',
    },
    {
      id: 'lab',
      title: 'Mô Phỏng Trực Quan',
      desc: 'Phòng thí nghiệm tương tác: phân phối Chuẩn, định lý giới hạn trung tâm và trực quan hóa quy luật.',
      icon: Compass,
      badge: 'Mô hình động',
      cta: 'Vào Lab',
    },
    {
      id: 'calculator',
      title: 'Máy Tính & Tra Bảng',
      desc: 'Tra cứu giá trị tới hạn Laplace, Z, Student t, Chi-Square và tính tham số mẫu tức thì.',
      icon: Calculator,
      badge: 'Bảng số & Mẫu',
      cta: 'Mở máy tính',
    },
    {
      id: 'cheatsheet',
      title: 'Sổ Tay Công Thức',
      desc: 'Cẩm nang tóm tắt khoảng tin cậy, tiêu chuẩn kiểm định và bảng tới hạn, hỗ trợ in PDF.',
      icon: Zap,
      badge: 'Phòng thi',
      cta: 'Xem sổ tay',
    },
  ];

  const handleNav = (tabId, chapterId) => {
    if (chapterId) {
      if (tabId === 'theory') {
        localStorage.setItem('percento_theory_chapter', chapterId);
      } else if (tabId === 'exercises') {
        localStorage.setItem('percento_exercise_chapter', chapterId);
      }
    }
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-xl p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-[#0a66c2] dark:text-[#4a9be0] border border-blue-200/40 dark:border-blue-900/40 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nền tảng Xác Suất & Thống Kê Chuẩn Đề Cương</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] dark:text-[#f5f5f5]">
            Percent<span className="text-[#0a66c2] dark:text-[#4a9be0]">o</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#696969] dark:text-[#8c8c8c] mt-2 max-w-xl leading-relaxed">
            Hệ thống hóa toàn bộ kiến thức và bài tập tự luận theo đúng khung đề cương 5 chương trọng tâm (10 điểm), trình bày súc tích và trực quan theo chuẩn xomdata.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 mt-5">
            <button
              onClick={() => handleNav('theory')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#0a66c2] hover:bg-[#084e96] dark:bg-[#4a9be0] dark:hover:bg-[#3a84ca] text-white dark:text-[#10171f] transition-all select-none shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Học lý thuyết đề cương</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleNav('exercises')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#f5f5f5] hover:bg-[#ebebeb] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#171717] dark:text-[#f5f5f5] border border-[#e5e5e5] dark:border-white/10 transition-all select-none"
            >
              <FileText className="w-3.5 h-3.5 text-[#0a66c2] dark:text-[#4a9be0]" />
              <span>Luyện 75 bài tự luận</span>
            </button>
            <button
              onClick={() => handleNav('calculator')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#f5f5f5] hover:bg-[#ebebeb] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#171717] dark:text-[#f5f5f5] border border-[#e5e5e5] dark:border-white/10 transition-all select-none"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Tra bảng Z, t, χ²</span>
            </button>
            <button
              onClick={() => handleNav('lab')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#f5f5f5] hover:bg-[#ebebeb] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#171717] dark:text-[#f5f5f5] border border-[#e5e5e5] dark:border-white/10 transition-all select-none"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Mô phỏng Lab</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-[#202020] p-4 rounded-xl border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block">Cấu trúc đề cương</span>
          <span className="text-xl font-bold font-mono text-[#171717] dark:text-[#f5f5f5] mt-0.5 block">
            5 Chương
          </span>
          <span className="text-[10px] text-[#8c8c8c] block mt-0.5">23 chuyên đề trọng tâm</span>
        </div>
        <div className="bg-white dark:bg-[#202020] p-4 rounded-xl border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block">Tự luận mẫu</span>
          <span className="text-xl font-bold font-mono text-[#0a66c2] dark:text-[#4a9be0] mt-0.5 block">
            75 Bài tự luận
          </span>
          <span className="text-[10px] text-[#8c8c8c] block mt-0.5">15 bài trọng tâm / chương</span>
        </div>
        <div className="bg-white dark:bg-[#202020] p-4 rounded-xl border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block">Thang điểm bài thi</span>
          <span className="text-xl font-bold font-mono text-purple-600 dark:text-purple-400 mt-0.5 block">
            10.0 Điểm
          </span>
          <span className="text-[10px] text-[#8c8c8c] block mt-0.5">Chương IV chiếm 4đ</span>
        </div>
        <div className="bg-white dark:bg-[#202020] p-4 rounded-xl border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block">Tra cứu & Mô phỏng</span>
          <span className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 block">
            Z, t, χ², CLT
          </span>
          <span className="text-[10px] text-[#8c8c8c] block mt-0.5">Tính tham số tức thì</span>
        </div>
      </div>

      <div className="bg-white dark:bg-[#202020] rounded-xl p-5 border border-[#e5e5e5] dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#0a66c2] dark:bg-[#4a9be0]"></span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#696969] dark:text-[#8c8c8c]">
                Khung Đề Cương Ôn Tập 10 Điểm
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5]">
              5 Chương Trọng Tâm Bài Thi
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8c8c8c]">
            Bấm vào chương để học ngay
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {outlineChapters.map((oc) => (
            <div
              key={oc.id}
              className="p-4 rounded-xl border border-[#e5e5e5] dark:border-white/10 bg-[#fbfbfa] dark:bg-[#1a1a1a] flex flex-col justify-between hover:border-[#0a66c2] dark:hover:border-[#4a9be0] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded bg-[#f0f0f0] dark:bg-[#262626] font-mono text-xs font-bold text-[#171717] dark:text-[#f5f5f5] flex items-center justify-center">
                    {oc.num}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${oc.badgeColor}`}>
                    {oc.points}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#171717] dark:text-[#f5f5f5] mb-1.5">
                  Chương {oc.num}: {oc.title}
                </h3>
                <p className="text-xs text-[#696969] dark:text-[#8c8c8c] leading-relaxed mb-3">
                  {oc.topics}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#e5e5e5] dark:border-white/10 flex items-center justify-between text-xs font-medium">
                <button
                  onClick={() => handleNav('theory', oc.id)}
                  className="text-[#0a66c2] dark:text-[#4a9be0] hover:underline"
                >
                  Xem lý thuyết
                </button>
                <button
                  onClick={() => handleNav('exercises', oc.id)}
                  className="text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white"
                >
                  Luyện 15 bài →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#171717] dark:text-[#f5f5f5] uppercase tracking-wider font-mono">
            Chuyên Mục Nền Tảng
          </h2>
          <span className="text-xs text-[#8c8c8c] font-mono">5 Phân hệ chính</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                onClick={() => handleNav(f.id)}
                className="bg-white dark:bg-[#202020] rounded-xl p-4 border border-[#e5e5e5] dark:border-white/10 hover:border-[#0a66c2] dark:hover:border-[#4a9be0] cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] dark:bg-[#262626] group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 text-[#171717] dark:text-[#f5f5f5] group-hover:text-[#0a66c2] dark:group-hover:text-[#4a9be0] flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] border border-[#e5e5e5] dark:border-white/10">
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#171717] dark:text-[#f5f5f5] group-hover:text-[#0a66c2] dark:group-hover:text-[#4a9be0] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#696969] dark:text-[#8c8c8c] mt-1.5 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e5e5e5] dark:border-white/10 flex items-center justify-between text-xs font-medium text-[#0a66c2] dark:text-[#4a9be0]">
                  <span>{f.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-[#0a66c2] dark:text-[#4a9be0]" />
          <h2 className="text-xs sm:text-sm font-bold text-[#171717] dark:text-[#f5f5f5] font-mono uppercase tracking-wider">
            Công Thức Trọng Tâm Đề Cương
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10 text-center">
            <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block mb-1">Công thức Bayes (Chương I - 2đ)</span>
            <div className="font-mono text-sm sm:text-base py-1.5">
              <MathView math="P(H_i|A) = \frac{P(H_i)P(A|H_i)}{\sum P(H_k)P(A|H_k)}" />
            </div>
          </div>

          <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10 text-center">
            <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block mb-1">Khoảng tin cậy TB (Chương IV - 4đ)</span>
            <div className="font-mono text-sm sm:text-base py-1.5">
              <MathView math="\mu \in \left[ \bar{x} \pm u_{\alpha/2} \frac{s'}{\sqrt{n}} \right]" />
            </div>
          </div>

          <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10 text-center">
            <span className="text-[11px] font-mono text-[#696969] dark:text-[#8c8c8c] block mb-1">Tiêu chuẩn kiểm định (Chương V - 1đ)</span>
            <div className="font-mono text-sm sm:text-base py-1.5">
              <MathView math="Z_{qs} = \frac{\bar{x} - \mu_0}{s'} \sqrt{n} \sim N(0, 1)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
