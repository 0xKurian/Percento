import React, { useState, useMemo } from 'react';
import { normalCDF, laplacePhi0 } from '../../utils/statsMath';
import { MathView } from '../MathView';
import { Sliders, HelpCircle, Activity } from 'lucide-react';

export default function NormalDistributionVisualizer() {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const [calcMode, setCalcMode] = useState('between');
  const [valA, setValA] = useState(-1.96);
  const [valB, setValB] = useState(1.96);

  const { prob, zA, zB, formulaLatex } = useMemo(() => {
    const s = Math.max(0.1, sigma);
    const zA_val = (valA - mu) / s;
    const zB_val = (valB - mu) / s;

    let p = 0;
    let formula = '';

    if (calcMode === 'left') {
      p = normalCDF(valB, mu, s);
      formula = `P(X \\le ${valB}) = \\Phi(${zB_val.toFixed(2)}) = ${(p * 100).toFixed(2)}\\%`;
    } else if (calcMode === 'right') {
      p = 1 - normalCDF(valA, mu, s);
      formula = `P(X \\ge ${valA}) = 1 - \\Phi(${zA_val.toFixed(2)}) = ${(p * 100).toFixed(2)}\\%`;
    } else if (calcMode === 'between') {
      const lower = Math.min(valA, valB);
      const upper = Math.max(valA, valB);
      const zLow = (lower - mu) / s;
      const zUp = (upper - mu) / s;
      p = Math.max(0, normalCDF(upper, mu, s) - normalCDF(lower, mu, s));
      formula = `P(${lower} \\le X \\le ${upper}) = \\Phi(${zUp.toFixed(2)}) - \\Phi(${zLow.toFixed(2)}) = ${(p * 100).toFixed(2)}\\%`;
    } else {
      const lower = Math.min(valA, valB);
      const upper = Math.max(valA, valB);
      const pLeft = normalCDF(lower, mu, s);
      const pRight = 1 - normalCDF(upper, mu, s);
      p = pLeft + pRight;
      formula = `P(X \\le ${lower} \\text{ hay } X \\ge ${upper}) = ${(p * 100).toFixed(2)}\\%`;
    }

    return {
      prob: p,
      zA: zA_val,
      zB: zB_val,
      formulaLatex: formula,
    };
  }, [mu, sigma, calcMode, valA, valB]);

  const svgData = useMemo(() => {
    const s = Math.max(0.1, sigma);
    const minX = mu - 4 * s;
    const maxX = mu + 4 * s;
    const width = 640;
    const height = 240;
    const padX = 40;
    const padY = 25;

    const scaleX = (x) => padX + ((x - minX) / (maxX - minX)) * (width - 2 * padX);
    const maxY = 1 / (s * Math.sqrt(2 * Math.PI));
    const scaleY = (y) => height - padY - (y / (maxY * 1.15)) * (height - 2 * padY);

    const normalPDF = (x) => (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / s, 2));

    const numPoints = 200;
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const x = minX + (i / numPoints) * (maxX - minX);
      const y = normalPDF(x);
      points.push({ x, y, px: scaleX(x), py: scaleY(y) });
    }

    const curvePath = points.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.px.toFixed(1)} ${pt.py.toFixed(1)}`).join(' ');

    const lower = Math.min(valA, valB);
    const upper = Math.max(valA, valB);

    let shadedSegments = [];
    if (calcMode === 'left') {
      shadedSegments = points.filter((pt) => pt.x <= valB);
    } else if (calcMode === 'right') {
      shadedSegments = points.filter((pt) => pt.x >= valA);
    } else if (calcMode === 'between') {
      shadedSegments = points.filter((pt) => pt.x >= lower && pt.x <= upper);
    } else {
      shadedSegments = [
        points.filter((pt) => pt.x <= lower),
        points.filter((pt) => pt.x >= upper)
      ];
    }

    const baselineY = scaleY(0);

    const makeShadedPath = (pts) => {
      if (pts.length === 0) return '';
      const first = pts[0];
      const last = pts[pts.length - 1];
      const linePts = pts.map((p) => `L ${p.px.toFixed(1)} ${p.py.toFixed(1)}`).join(' ');
      return `M ${first.px.toFixed(1)} ${baselineY} ${linePts} L ${last.px.toFixed(1)} ${baselineY} Z`;
    };

    let shadedPaths = [];
    if (calcMode === 'two-tails') {
      shadedPaths = shadedSegments.map(makeShadedPath);
    } else {
      shadedPaths = [makeShadedPath(shadedSegments)];
    }

    return {
      width,
      height,
      baselineY,
      curvePath,
      shadedPaths,
      muPx: scaleX(mu),
      padX,
      minX,
      maxX,
      scaleX,
    };
  }, [mu, sigma, calcMode, valA, valB]);

  return (
    <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5] tracking-tight flex items-center gap-1.5 flex-wrap">
            <span>Phân Phối Chuẩn</span>
            <MathView math="N(\mu, \sigma^2)" />
          </h2>
        </div>

        <div className="flex items-center gap-1 bg-[#f5f5f5] dark:bg-[#262626] p-1 rounded-lg border border-[#e5e5e5] dark:border-white/10 text-xs">
          <button
            onClick={() => setCalcMode('between')}
            className={`px-2.5 py-1 rounded-md transition-all select-none ${
              calcMode === 'between'
                ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs font-medium'
                : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
            }`}
          >
            Đoạn [a, b]
          </button>
          <button
            onClick={() => setCalcMode('left')}
            className={`px-2.5 py-1 rounded-md transition-all select-none ${
              calcMode === 'left'
                ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs font-medium'
                : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
            }`}
          >
            Đuôi trái (≤ b)
          </button>
          <button
            onClick={() => setCalcMode('right')}
            className={`px-2.5 py-1 rounded-md transition-all select-none ${
              calcMode === 'right'
                ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs font-medium'
                : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
            }`}
          >
            Đuôi phải (≥ a)
          </button>
          <button
            onClick={() => setCalcMode('two-tails')}
            className={`px-2.5 py-1 rounded-md transition-all select-none ${
              calcMode === 'two-tails'
                ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs font-medium'
                : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
            }`}
          >
            Hai phía
          </button>
        </div>
      </div>

      <div className="relative bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg p-3.5 border border-[#e5e5e5] dark:border-white/10 mb-4 flex flex-col items-center">
        <svg
          viewBox={`0 0 ${svgData.width} ${svgData.height}`}
          className="w-full max-w-xl h-auto overflow-visible select-none"
        >
          <line
            x1={svgData.padX - 10}
            y1={svgData.baselineY}
            x2={svgData.width - svgData.padX + 10}
            y2={svgData.baselineY}
            stroke="currentColor"
            className="text-[#d4d4d4] dark:text-[#333333] stroke-1"
          />

          {svgData.shadedPaths.map((p, idx) => (
            <path
              key={idx}
              d={p}
              className="fill-[#0a66c2]/25 dark:fill-[#4a9be0]/30 transition-all duration-150"
            />
          ))}

          <line
            x1={svgData.muPx}
            y1={svgData.baselineY}
            x2={svgData.muPx}
            y2={20}
            strokeDasharray="4 4"
            className="stroke-[#8c8c8c] stroke-1"
          />
          <text
            x={svgData.muPx}
            y={15}
            textAnchor="middle"
            className="text-[10px] fill-[#696969] dark:fill-[#8c8c8c] font-mono"
          >
            μ = {mu}
          </text>

          <path
            d={svgData.curvePath}
            fill="none"
            className="stroke-[#0a66c2] dark:stroke-[#4a9be0] stroke-2"
          />

          {[-3, -2, -1, 0, 1, 2, 3].map((step) => {
            const xVal = mu + step * sigma;
            const px = svgData.scaleX(xVal);
            return (
              <g key={step}>
                <line
                  x1={px}
                  y1={svgData.baselineY}
                  x2={px}
                  y2={svgData.baselineY + 4}
                  className="stroke-[#8c8c8c] stroke-1"
                />
                <text
                  x={px}
                  y={svgData.baselineY + 15}
                  textAnchor="middle"
                  className="text-[10px] fill-[#8c8c8c] font-mono"
                >
                  {xVal.toFixed(1)}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
          <div className="bg-[#0a66c2] dark:bg-[#4a9be0] text-white dark:text-[#10171f] px-3 py-1.5 rounded-lg text-center font-mono">
            <span className="text-[10px] uppercase block opacity-90">Xác suất</span>
            <span className="text-lg font-bold">{(prob * 100).toFixed(2)}%</span>
          </div>
          <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 px-3 py-1.5 rounded-lg text-center">
            <span className="text-[10px] text-[#696969] dark:text-[#8c8c8c] block font-mono">Z-score</span>
            <span className="text-xs font-semibold text-[#171717] dark:text-[#f5f5f5] font-mono">
              {calcMode !== 'left' ? `Z_a = ${zA.toFixed(2)}` : ''}{' '}
              {calcMode === 'between' || calcMode === 'two-tails' ? ' | ' : ''}
              {calcMode !== 'right' ? `Z_b = ${zB.toFixed(2)}` : ''}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10">
        <div>
          <label className="flex justify-between items-center text-xs text-[#171717] dark:text-[#f5f5f5] mb-1">
            <span className="inline-flex items-center gap-1">Kỳ vọng (<MathView math="\mu" />):</span>
            <span className="font-mono text-[#0a66c2] dark:text-[#4a9be0] font-bold">{mu}</span>
          </label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.5"
            value={mu}
            onChange={(e) => setMu(parseFloat(e.target.value))}
            className="w-full accent-[#0a66c2] cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center text-xs text-[#171717] dark:text-[#f5f5f5] mb-1">
            <span className="inline-flex items-center gap-1">Độ lệch chuẩn (<MathView math="\sigma" />):</span>
            <span className="font-mono text-[#0a66c2] dark:text-[#4a9be0] font-bold">{sigma}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={sigma}
            onChange={(e) => setSigma(parseFloat(e.target.value))}
            className="w-full accent-[#0a66c2] cursor-pointer"
          />
        </div>

        {calcMode !== 'left' && (
          <div>
            <label className="flex justify-between items-center text-xs text-[#171717] dark:text-[#f5f5f5] mb-1">
              <span className="inline-flex items-center gap-1">Cận dưới <MathView math="a" />:</span>
              <span className="font-mono text-[#0a66c2] dark:text-[#4a9be0] font-bold">{valA}</span>
            </label>
            <input
              type="range"
              min={mu - 3.5 * sigma}
              max={mu + 3.5 * sigma}
              step="0.1"
              value={valA}
              onChange={(e) => setValA(parseFloat(e.target.value))}
              className="w-full accent-[#0a66c2] cursor-pointer"
            />
          </div>
        )}

        {calcMode !== 'right' && (
          <div>
            <label className="flex justify-between items-center text-xs text-[#171717] dark:text-[#f5f5f5] mb-1">
              <span className="inline-flex items-center gap-1">Cận trên <MathView math="b" />:</span>
              <span className="font-mono text-[#0a66c2] dark:text-[#4a9be0] font-bold">{valB}</span>
            </label>
            <input
              type="range"
              min={mu - 3.5 * sigma}
              max={mu + 3.5 * sigma}
              step="0.1"
              value={valB}
              onChange={(e) => setValB(parseFloat(e.target.value))}
              className="w-full accent-[#0a66c2] cursor-pointer"
            />
          </div>
        )}
      </div>

      <div className="mt-3 p-3 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 rounded-lg text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
        <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Công thức chuẩn hóa:</span>
          <div className="mt-1 font-mono">
            <MathView math="Z = \frac{X - \mu}{\sigma} \implies P(a \le X \le b) = \Phi_0\left(\frac{b - \mu}{\sigma}\right) - \Phi_0\left(\frac{a - \mu}{\sigma}\right)" block={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
