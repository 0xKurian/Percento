import React, { useState, useMemo, useRef } from 'react';
import { computeLinearRegression } from '../../utils/statsMath';
import { MathView } from '../MathView';
import { TrendingUp, Trash2 } from 'lucide-react';

const PRESETS = {
  exam: {
    name: 'Quảng cáo vs Doanh thu',
    points: [
      { x: 2, y: 18 },
      { x: 4, y: 22 },
      { x: 5, y: 24 },
      { x: 6, y: 28 },
      { x: 8, y: 34 },
      { x: 11, y: 42 },
    ],
    xLabel: 'Quảng cáo',
    yLabel: 'Doanh thu',
  },
  study: {
    name: 'Giờ học vs Điểm thi',
    points: [
      { x: 1, y: 3.5 },
      { x: 2, y: 4.8 },
      { x: 3, y: 5.5 },
      { x: 4, y: 6.8 },
      { x: 5, y: 8.0 },
      { x: 6, y: 8.5 },
      { x: 7, y: 9.6 },
    ],
    xLabel: 'Số giờ học',
    yLabel: 'Điểm số',
  },
  scattered: {
    name: 'Tương quan trung bình',
    points: [
      { x: 2, y: 12 },
      { x: 3, y: 18 },
      { x: 5, y: 15 },
      { x: 7, y: 25 },
      { x: 8, y: 22 },
      { x: 10, y: 32 },
    ],
    xLabel: 'Biến X',
    yLabel: 'Biến Y',
  },
};

export default function LinearRegressionVisualizer() {
  const [points, setPoints] = useState(PRESETS.exam.points);
  const [activePreset, setActivePreset] = useState('exam');
  const [predictX, setPredictX] = useState(10);
  const svgRef = useRef(null);

  const regResults = useMemo(() => {
    return computeLinearRegression(points);
  }, [points]);

  const coords = useMemo(() => {
    if (points.length === 0) return { minX: 0, maxX: 12, minY: 0, maxY: 50 };

    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const minX = 0;
    const maxX = Math.max(12, Math.ceil(Math.max(...xs) * 1.2));
    const minY = 0;
    const maxY = Math.max(45, Math.ceil(Math.max(...ys) * 1.2));

    const width = 640;
    const height = 240;
    const pad = 35;

    const toSvgX = (x) => pad + (x / maxX) * (width - 2 * pad);
    const toSvgY = (y) => height - pad - (y / maxY) * (height - 2 * pad);

    const fromSvgX = (px) => {
      const val = ((px - pad) / (width - 2 * pad)) * maxX;
      return Math.max(0, Math.min(maxX, Math.round(val * 10) / 10));
    };

    const fromSvgY = (py) => {
      const val = ((height - pad - py) / (height - 2 * pad)) * maxY;
      return Math.max(0, Math.min(maxY, Math.round(val * 10) / 10));
    };

    return {
      minX,
      maxX,
      minY,
      maxY,
      width,
      height,
      pad,
      toSvgX,
      toSvgY,
      fromSvgX,
      fromSvgY,
    };
  }, [points]);

  const handleCanvasClick = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const scaleFactorX = coords.width / rect.width;
    const scaleFactorY = coords.height / rect.height;

    const svgX = clickX * scaleFactorX;
    const svgY = clickY * scaleFactorY;

    if (
      svgX >= coords.pad &&
      svgX <= coords.width - coords.pad &&
      svgY >= coords.pad &&
      svgY <= coords.height - coords.pad
    ) {
      const newX = coords.fromSvgX(svgX);
      const newY = coords.fromSvgY(svgY);
      setPoints((prev) => [...prev, { x: newX, y: newY }]);
      setActivePreset(null);
    }
  };

  const removePoint = (idx, e) => {
    e.stopPropagation();
    setPoints((prev) => prev.filter((_, i) => i !== idx));
    setActivePreset(null);
  };

  const loadPreset = (key) => {
    setActivePreset(key);
    setPoints(PRESETS[key].points);
  };

  const clearAll = () => {
    setPoints([]);
    setActivePreset(null);
  };

  const predictedY = useMemo(() => {
    if (!regResults || regResults.error) return null;
    return regResults.slope * predictX + regResults.intercept;
  }, [regResults, predictX]);

  return (
    <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5] tracking-tight flex items-center gap-1.5 flex-wrap">
            <span>Hồi Quy Tuyến Tính (OLS)</span>
            <span>• Hệ số</span>
            <MathView math="r" />
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          {Object.keys(PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => loadPreset(key)}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activePreset === key
                  ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] font-medium'
                  : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
              }`}
            >
              {PRESETS[key].name}
            </button>
          ))}
          <button
            onClick={clearAll}
            className="flex items-center gap-1 px-2 py-1 bg-[#f5f5f5] hover:bg-rose-50 text-rose-600 dark:bg-[#262626] dark:hover:bg-rose-950/40 rounded-md transition-all"
            title="Xóa tất cả điểm"
          >
            <Trash2 className="w-3 h-3" />
            <span>Xóa</span>
          </button>
        </div>
      </div>

      <div className="relative bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg p-3 border border-[#e5e5e5] dark:border-white/10 mb-4 flex flex-col items-center">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${coords.width} ${coords.height}`}
          onClick={handleCanvasClick}
          className="w-full max-w-xl h-auto overflow-visible select-none cursor-crosshair"
        >
          {[0, 2, 4, 6, 8, 10, 12].map((gx) => {
            if (gx > coords.maxX) return null;
            const px = coords.toSvgX(gx);
            return (
              <line
                key={`gx-${gx}`}
                x1={px}
                y1={coords.pad}
                x2={px}
                y2={coords.height - coords.pad}
                stroke="currentColor"
                className="text-[#e5e5e5] dark:text-[#333333] stroke-1"
                strokeDasharray="2 4"
              />
            );
          })}
          {[0, 10, 20, 30, 40, 50].map((gy) => {
            if (gy > coords.maxY) return null;
            const py = coords.toSvgY(gy);
            return (
              <line
                key={`gy-${gy}`}
                x1={coords.pad}
                y1={py}
                x2={coords.width - coords.pad}
                y2={py}
                stroke="currentColor"
                className="text-[#e5e5e5] dark:text-[#333333] stroke-1"
                strokeDasharray="2 4"
              />
            );
          })}

          <line
            x1={coords.pad}
            y1={coords.height - coords.pad}
            x2={coords.width - coords.pad + 10}
            y2={coords.height - coords.pad}
            stroke="currentColor"
            className="text-[#8c8c8c] stroke-1"
          />
          <line
            x1={coords.pad}
            y1={coords.pad - 10}
            x2={coords.pad}
            y2={coords.height - coords.pad}
            stroke="currentColor"
            className="text-[#8c8c8c] stroke-1"
          />

          <text
            x={coords.width - coords.pad + 5}
            y={coords.height - coords.pad - 4}
            className="text-[10px] fill-[#8c8c8c] font-mono"
          >
            X
          </text>
          <text
            x={coords.pad + 6}
            y={coords.pad - 2}
            className="text-[10px] fill-[#8c8c8c] font-mono"
          >
            Y
          </text>

          {regResults && !regResults.error && (
            <>
              {points.map((pt, idx) => {
                const fittedY = regResults.slope * pt.x + regResults.intercept;
                return (
                  <line
                    key={`res-${idx}`}
                    x1={coords.toSvgX(pt.x)}
                    y1={coords.toSvgY(pt.y)}
                    x2={coords.toSvgX(pt.x)}
                    y2={coords.toSvgY(fittedY)}
                    stroke="currentColor"
                    className="text-rose-400 dark:text-rose-500/70 stroke-1"
                    strokeDasharray="2 2"
                  />
                );
              })}

              <line
                x1={coords.toSvgX(0)}
                y1={coords.toSvgY(regResults.intercept)}
                x2={coords.toSvgX(coords.maxX)}
                y2={coords.toSvgY(regResults.slope * coords.maxX + regResults.intercept)}
                stroke="currentColor"
                className="text-[#0a66c2] dark:text-[#4a9be0] stroke-2"
              />
            </>
          )}

          {points.map((pt, idx) => {
            const px = coords.toSvgX(pt.x);
            const py = coords.toSvgY(pt.y);
            return (
              <g
                key={idx}
                onClick={(e) => removePoint(idx, e)}
                className="cursor-pointer group"
              >
                <circle
                  cx={px}
                  cy={py}
                  r="5"
                  className="fill-[#0a66c2] dark:fill-[#4a9be0] stroke-white dark:stroke-[#171717] stroke-2 group-hover:fill-rose-500 transition-colors"
                />
              </g>
            );
          })}
        </svg>

        <div className="mt-2 text-[11px] text-[#8c8c8c] font-mono">
          Nhấp chuột lên đồ thị để thêm điểm dữ liệu • Nhấp vào điểm để xóa
        </div>
      </div>

      {regResults && !regResults.error ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3 rounded-lg border border-[#e5e5e5] dark:border-white/10">
            <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block font-mono">
              Phương trình hồi quy
            </span>
            <div className="text-sm font-bold font-mono text-[#171717] dark:text-[#f5f5f5] mt-1">
              <MathView math={`\\hat{y} = ${regResults.formula}`} />
            </div>
            <span className="text-[10px] text-[#8c8c8c] font-mono block mt-0.5">
              a = {regResults.slope.toFixed(3)} • b = {regResults.intercept.toFixed(3)}
            </span>
          </div>

          <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3 rounded-lg border border-[#e5e5e5] dark:border-white/10">
            <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block font-mono">
              Hệ số tương quan Pearson r
            </span>
            <div className="text-sm font-bold font-mono text-[#0a66c2] dark:text-[#4a9be0] mt-1">
              <MathView math={`r = ${regResults.r.toFixed(4)}`} />
            </div>
            <span className="text-[10px] text-[#8c8c8c] font-mono block mt-0.5">
              {Math.abs(regResults.r) >= 0.8
                ? 'Tương quan rất chặt chẽ'
                : Math.abs(regResults.r) >= 0.5
                ? 'Tương quan vừa phải'
                : 'Tương quan yếu'}
            </span>
          </div>

          <div className="bg-[#fbfbfa] dark:bg-[#1a1a1a] p-3 rounded-lg border border-[#e5e5e5] dark:border-white/10">
            <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block font-mono">
              Hệ số xác định R²
            </span>
            <div className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
              <MathView math={`R^2 = ${(regResults.rSquared * 100).toFixed(1)}\\%`} />
            </div>
            <span className="text-[10px] text-[#8c8c8c] font-mono block mt-0.5">
              Giải thích {(regResults.rSquared * 100).toFixed(1)}% biến thiên
            </span>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-amber-50 text-amber-800 text-xs rounded-md mb-4">
          Cần ít nhất 2 điểm dữ liệu để vẽ đường hồi quy.
        </div>
      )}

      {regResults && !regResults.error && (
        <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <label className="text-[#696969] dark:text-[#8c8c8c]">
              Dự báo khi X = :
            </label>
            <input
              type="number"
              value={predictX}
              onChange={(e) => setPredictX(parseFloat(e.target.value) || 0)}
              className="w-20 px-2 py-1 font-mono font-bold bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded text-[#171717] dark:text-[#f5f5f5]"
            />
          </div>
          <div className="font-semibold text-[#171717] dark:text-[#f5f5f5] flex items-center gap-2">
            <span>Dự báo:</span>
            <span className="text-[#0a66c2] dark:text-[#4a9be0] font-mono text-base font-bold">
              <MathView math={`\\hat{Y} = ${predictedY !== null ? predictedY.toFixed(2) : '--'}`} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
