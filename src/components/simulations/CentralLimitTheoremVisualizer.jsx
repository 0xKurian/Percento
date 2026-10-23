import React, { useState, useEffect, useMemo, useRef } from 'react';
import { RefreshCw, Play, Sparkles } from 'lucide-react';
import { MathView } from '../MathView';

export default function CentralLimitTheoremVisualizer() {
  const [distType, setDistType] = useState('exponential');
  const [sampleSizeN, setSampleSizeN] = useState(30);
  const [sampleMeans, setSampleMeans] = useState([]);

  const popStats = useMemo(() => {
    if (distType === 'uniform') {
      return {
        name: 'Phân phối Đều U(0, 10)',
        mean: 5,
        std: Math.sqrt(100 / 12),
        generator: () => Math.random() * 10,
        min: 0,
        max: 10,
      };
    } else if (distType === 'exponential') {
      return {
        name: 'Phân phối Mũ Exp(λ=0.5)',
        mean: 2,
        std: 2,
        generator: () => -Math.log(1 - Math.random()) / 0.5,
        min: 0,
        max: 8,
      };
    } else {
      return {
        name: 'Phân phối Hai Đỉnh (Bimodal)',
        mean: 5,
        std: 2.2,
        generator: () => (Math.random() > 0.5 ? 2 + (Math.random() - 0.5) * 1.5 : 8 + (Math.random() - 0.5) * 1.5),
        min: 0,
        max: 10,
      };
    }
  }, [distType]);

  const generateSamples = (count = 500) => {
    const newMeans = [];
    for (let i = 0; i < count; i++) {
      let sum = 0;
      for (let j = 0; j < sampleSizeN; j++) {
        sum += popStats.generator();
      }
      newMeans.push(sum / sampleSizeN);
    }
    setSampleMeans((prev) => [...prev, ...newMeans].slice(-3000));
  };

  const handleReset = () => {
    setSampleMeans([]);
  };

  useEffect(() => {
    handleReset();
    const initMeans = [];
    for (let i = 0; i < 300; i++) {
      let sum = 0;
      for (let j = 0; j < sampleSizeN; j++) {
        sum += popStats.generator();
      }
      initMeans.push(sum / sampleSizeN);
    }
    setSampleMeans(initMeans);
  }, [distType, sampleSizeN]);

  const histogram = useMemo(() => {
    if (sampleMeans.length === 0) return { bins: [], maxCount: 0, sampleMean: 0, sampleStd: 0 };

    const total = sampleMeans.length;
    const sum = sampleMeans.reduce((a, b) => a + b, 0);
    const mean = sum / total;
    let sumSq = 0;
    for (let m of sampleMeans) sumSq += (m - mean) ** 2;
    const std = Math.sqrt(sumSq / total);

    const minVal = popStats.mean - 3.5 * (popStats.std / Math.sqrt(Math.max(1, sampleSizeN)));
    const maxVal = popStats.mean + 3.5 * (popStats.std / Math.sqrt(Math.max(1, sampleSizeN)));

    const numBins = 24;
    const binWidth = (maxVal - minVal) / numBins;
    const bins = Array(numBins).fill(0);

    for (let val of sampleMeans) {
      const idx = Math.floor((val - minVal) / binWidth);
      if (idx >= 0 && idx < numBins) {
        bins[idx]++;
      }
    }

    const maxCount = Math.max(...bins, 1);

    return {
      bins: bins.map((count, i) => ({
        x0: minVal + i * binWidth,
        x1: minVal + (i + 1) * binWidth,
        mid: minVal + (i + 0.5) * binWidth,
        count,
        freq: count / total,
      })),
      maxCount,
      minVal,
      maxVal,
      sampleMean: mean,
      sampleStd: std,
      total,
    };
  }, [sampleMeans, popStats, sampleSizeN]);

  return (
    <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5] tracking-tight flex items-center gap-1.5 flex-wrap">
            <span>Định Lý Giới Hạn Trung Tâm (CLT)</span>
            <span>• Hội tụ của</span>
            <MathView math="\bar{X}" />
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => generateSamples(200)}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#0a66c2] hover:bg-[#084e96] dark:bg-[#4a9be0] dark:hover:bg-[#3a84ca] text-white dark:text-[#10171f] rounded-lg text-xs font-medium transition-all select-none"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>+200 mẫu</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-[#f5f5f5] hover:bg-[#ebebeb] dark:bg-[#262626] dark:hover:bg-[#333333] text-[#171717] dark:text-[#f5f5f5] border border-[#e5e5e5] dark:border-white/10 rounded-lg text-xs transition-colors select-none"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Làm mới</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10">
        <div>
          <label className="text-xs text-[#696969] dark:text-[#8c8c8c] block mb-1">
            Phân phối tổng thể gốc:
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'exponential', label: 'Phân phối Mũ' },
              { id: 'uniform', label: 'Phân phối Đều' },
              { id: 'bimodal', label: 'Hai đỉnh' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDistType(d.id)}
                className={`py-1 px-2 text-xs rounded-md transition-all text-center ${
                  distType === d.id
                    ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] font-medium'
                    : 'bg-white dark:bg-[#202020] text-[#171717] dark:text-[#f5f5f5] border border-[#e5e5e5] dark:border-white/10'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-xs text-[#171717] dark:text-[#f5f5f5] mb-1">
            <span className="inline-flex items-center gap-1">Kích thước mẫu (<MathView math="n" />):</span>
            <span className="font-mono text-[#0a66c2] dark:text-[#4a9be0] font-bold">
              n = {sampleSizeN} {sampleSizeN >= 30 ? '(n ≥ 30)' : ''}
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="60"
            step="1"
            value={sampleSizeN}
            onChange={(e) => setSampleSizeN(parseInt(e.target.value))}
            className="w-full accent-[#0a66c2] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#8c8c8c] font-mono mt-0.5">
            <span>n = 2</span>
            <span>n = 30 (chuẩn hóa)</span>
            <span>n = 60</span>
          </div>
        </div>
      </div>

      <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg p-3 border border-[#e5e5e5] dark:border-white/10 mb-3">
        <div className="h-52 w-full flex items-end gap-1 px-2 pt-4 pb-2 border-b border-[#e5e5e5] dark:border-white/10">
          {histogram.bins.map((bin, idx) => {
            const heightPercent = (bin.count / histogram.maxCount) * 100;
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center justify-end h-full group relative"
              >
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -top-8 bg-[#171717] text-white text-[10px] py-0.5 px-1.5 rounded shadow z-10 font-mono">
                  {bin.count} mẫu
                </div>
                <div
                  style={{ height: `${Math.max(4, heightPercent)}%` }}
                  className="w-full bg-[#0a66c2] dark:bg-[#4a9be0] rounded-t-xs transition-all duration-200"
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center text-[10px] text-[#8c8c8c] font-mono mt-1.5 px-2">
          <span>{histogram.minVal ? histogram.minVal.toFixed(2) : ''}</span>
          <span className="font-semibold text-[#171717] dark:text-[#f5f5f5] inline-flex items-center gap-1">
            <span>Kỳ vọng lý thuyết</span> <MathView math="\mu" /> <span>= {popStats.mean}</span>
          </span>
          <span>{histogram.maxVal ? histogram.maxVal.toFixed(2) : ''}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
        <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-2.5 rounded-lg border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">Số mẫu rút</span>
          <span className="text-base font-bold font-mono text-[#171717] dark:text-[#f5f5f5]">
            {histogram.total}
          </span>
        </div>
        <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-2.5 rounded-lg border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">
            Trung bình thực nghiệm <MathView math="\overline{\bar{x}}" />
          </span>
          <span className="text-base font-bold font-mono text-[#0a66c2] dark:text-[#4a9be0]">
            {histogram.sampleMean.toFixed(3)}
          </span>
        </div>
        <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-2.5 rounded-lg border border-[#e5e5e5] dark:border-white/10">
          <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">
            Sai số chuẩn <MathView math="s_{\bar{x}}" />
          </span>
          <span className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
            {histogram.sampleStd.toFixed(3)}
          </span>
        </div>
        <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-2.5 rounded-lg border border-[#e5e5e5] dark:border-white/10 flex flex-col justify-center">
          <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">Đánh giá</span>
          <span
            className={`text-xs font-mono font-medium ${
              sampleSizeN >= 30
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-amber-600 dark:text-amber-400'
            }`}
          >
            {sampleSizeN >= 30 ? 'Chuẩn hóa tốt (Z)' : 'Mẫu nhỏ (t-Student)'}
          </span>
        </div>
      </div>
    </div>
  );
}
