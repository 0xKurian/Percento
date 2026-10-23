import React, { useState, useMemo, useEffect } from 'react';
import { RotateCcw, Coins, Dice5 } from 'lucide-react';
import { MathView } from '../MathView';

export default function LawOfLargeNumbersVisualizer() {
  const [experimentType, setExperimentType] = useState('coin');
  const [trials, setTrials] = useState([]);
  const [isAutoRunning, setIsAutoRunning] = useState(false);

  const theoreticalP = experimentType === 'coin' ? 0.5 : 1 / 6;

  const addTrials = (count = 100) => {
    setTrials((prev) => {
      let currentSuccesses = prev.length > 0 ? prev[prev.length - 1].successes : 0;
      const newBatch = [];
      const startIdx = prev.length;

      for (let i = 0; i < count; i++) {
        const isSuccess = Math.random() < theoreticalP;
        if (isSuccess) currentSuccesses++;
        const n = startIdx + i + 1;
        newBatch.push({
          n,
          isSuccess,
          successes: currentSuccesses,
          relFreq: currentSuccesses / n,
        });
      }

      return [...prev, ...newBatch].slice(-2000);
    });
  };

  const handleReset = () => {
    setTrials([]);
    setIsAutoRunning(false);
  };

  useEffect(() => {
    handleReset();
    addTrials(80);
  }, [experimentType]);

  useEffect(() => {
    let interval = null;
    if (isAutoRunning) {
      interval = setInterval(() => {
        addTrials(20);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAutoRunning, experimentType]);

  const chartData = useMemo(() => {
    if (trials.length === 0) return null;
    const width = 640;
    const height = 220;
    const pad = 35;

    const maxN = Math.max(50, trials[trials.length - 1].n);
    const toSvgX = (n) => pad + (n / maxN) * (width - 2 * pad);
    const toSvgY = (freq) => height - pad - (freq / 1.0) * (height - 2 * pad);

    const pathPoints = trials.map((t, i) => `${i === 0 ? 'M' : 'L'} ${toSvgX(t.n).toFixed(1)} ${toSvgY(t.relFreq).toFixed(1)}`).join(' ');

    const theoY = toSvgY(theoreticalP);

    return {
      width,
      height,
      pad,
      maxN,
      pathPoints,
      theoY,
      toSvgX,
      toSvgY,
      currentN: trials[trials.length - 1].n,
      currentFreq: trials[trials.length - 1].relFreq,
    };
  }, [trials, theoreticalP]);

  return (
    <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5] tracking-tight flex items-center gap-1.5 flex-wrap">
            <span>Luật Số Lớn (LLN)</span>
            <span>• Hội tụ của</span>
            <MathView math="f_n" />
            <span>về</span>
            <MathView math="P(A)" />
          </h2>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setExperimentType('coin')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-all ${
              experimentType === 'coin'
                ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] font-medium'
                : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c]'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>Đồng xu (p = 0.5)</span>
          </button>
          <button
            onClick={() => setExperimentType('die')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-all ${
              experimentType === 'die'
                ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] font-medium'
                : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c]'
            }`}
          >
            <Dice5 className="w-3.5 h-3.5" />
            <span>Xúc xắc mặt 6 (p = 1/6)</span>
          </button>
        </div>
      </div>

      {chartData && (
        <div className="relative bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg p-3 border border-[#e5e5e5] dark:border-white/10 mb-4 flex flex-col items-center">
          <svg
            viewBox={`0 0 ${chartData.width} ${chartData.height}`}
            className="w-full max-w-xl h-auto overflow-visible select-none"
          >
            <line
              x1={chartData.pad}
              y1={chartData.height - chartData.pad}
              x2={chartData.width - chartData.pad + 10}
              y2={chartData.height - chartData.pad}
              stroke="currentColor"
              className="text-[#d4d4d4] dark:text-[#333333] stroke-1"
            />
            <line
              x1={chartData.pad}
              y1={chartData.pad}
              x2={chartData.pad}
              y2={chartData.height - chartData.pad}
              stroke="currentColor"
              className="text-[#d4d4d4] dark:text-[#333333] stroke-1"
            />

            <line
              x1={chartData.pad}
              y1={chartData.theoY}
              x2={chartData.width - chartData.pad}
              y2={chartData.theoY}
              strokeDasharray="4 4"
              className="stroke-emerald-500 stroke-1"
            />
            <text
              x={chartData.width - chartData.pad}
              y={chartData.theoY - 5}
              textAnchor="end"
              className="text-[10px] fill-emerald-600 dark:fill-emerald-400 font-mono font-bold"
            >
              Lý thuyết p = {theoreticalP.toFixed(3)}
            </text>

            <path
              d={chartData.pathPoints}
              fill="none"
              className="stroke-[#0a66c2] dark:stroke-[#4a9be0] stroke-2"
            />

            <text
              x={chartData.pad + 4}
              y={chartData.pad + 4}
              className="text-[10px] fill-[#8c8c8c] font-mono"
            >
              Tần suất f_n
            </text>
            <text
              x={chartData.width - chartData.pad}
              y={chartData.height - chartData.pad + 14}
              textAnchor="end"
              className="text-[10px] fill-[#8c8c8c] font-mono"
            >
              Số lần thử (n = {chartData.currentN})
            </text>
          </svg>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10 text-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => addTrials(50)}
            className="px-2.5 py-1 bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] rounded-md transition-all select-none font-medium"
          >
            +50 lần
          </button>
          <button
            onClick={() => addTrials(500)}
            className="px-2.5 py-1 bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] rounded-md transition-all select-none font-medium"
          >
            +500 lần
          </button>
          <button
            onClick={() => setIsAutoRunning(!isAutoRunning)}
            className={`px-2.5 py-1 rounded-md transition-all select-none font-medium ${
              isAutoRunning
                ? 'bg-rose-600 text-white'
                : 'bg-emerald-600 text-white'
            }`}
          >
            {isAutoRunning ? 'Tạm dừng' : 'Chạy liên tục'}
          </button>
          <button
            onClick={handleReset}
            className="p-1 text-[#696969] hover:text-[#171717] dark:text-[#8c8c8c] dark:hover:text-white"
            title="Làm mới"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {chartData && (
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <div>
              <span className="text-[#8c8c8c]">n = </span>
              <span className="font-bold text-[#171717] dark:text-[#f5f5f5]">
                {chartData.currentN}
              </span>
            </div>
            <div>
              <span className="text-[#8c8c8c]">f_n = </span>
              <span className="font-bold text-[#0a66c2] dark:text-[#4a9be0]">
                {chartData.currentFreq.toFixed(4)}
              </span>
            </div>
            <div>
              <span className="text-[#8c8c8c]">|f_n - p| = </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {Math.abs(chartData.currentFreq - theoreticalP).toFixed(4)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
