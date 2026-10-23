import React, { useState, useEffect, useMemo } from 'react';
import {
  normalCDF,
  laplacePhi0,
  getCriticalZ,
  getCriticalT,
  getCriticalChiSquare,
  computeDescriptiveStats,
} from '../utils/statsMath';
import { MathView } from './MathView';
import { Calculator, Table, Sparkles } from 'lucide-react';

export default function CalculatorAndTables() {
  const [activeSubTab, setActiveSubTab] = useState(() => {
    try {
      const saved = localStorage.getItem('percento_calc_subtab');
      if (saved) return saved;
    } catch {
      return 'tables';
    }
    return 'tables';
  });

  useEffect(() => {
    try {
      localStorage.setItem('percento_calc_subtab', activeSubTab);
    } catch (e) {
      console.error(e);
    }
  }, [activeSubTab]);

  const [zVal, setZVal] = useState(1.96);
  const [alphaVal, setAlphaVal] = useState(0.05);
  const [studentDf, setStudentDf] = useState(15);
  const [studentAlpha, setStudentAlpha] = useState(0.05);
  const [chiDf, setChiDf] = useState(4);
  const [chiAlpha, setChiAlpha] = useState(0.05);

  const [dataInput, setDataInput] = useState('24, 26, 28, 25, 29, 31, 27, 30, 26, 28');
  const [inputMode, setInputMode] = useState('raw');
  const [freqRows, setFreqRows] = useState([
    { x: 940, n: 6 },
    { x: 980, n: 14 },
    { x: 1020, n: 12 },
    { x: 1060, n: 8 },
  ]);

  const [testMean0, setTestMean0] = useState(1000);
  const [testSampleMean, setTestSampleMean] = useState(1002);
  const [testSampleStd, setTestSampleStd] = useState(38.84);
  const [testN, setTestN] = useState(40);
  const [testAlpha, setTestAlpha] = useState(0.05);
  const [testHypothesis, setTestHypothesis] = useState('two');

  const zResults = useMemo(() => {
    return {
      phi0: laplacePhi0(zVal),
      phi: normalCDF(zVal),
      uAlpha: getCriticalZ(alphaVal),
      uAlphaHalf: getCriticalZ(alphaVal / 2),
    };
  }, [zVal, alphaVal]);

  const tResults = useMemo(() => {
    return {
      tOne: getCriticalT(studentAlpha, studentDf),
      tTwo: getCriticalT(studentAlpha / 2, studentDf),
    };
  }, [studentAlpha, studentDf]);

  const chiResults = useMemo(() => {
    return {
      chiVal: getCriticalChiSquare(chiAlpha, chiDf),
    };
  }, [chiAlpha, chiDf]);

  const parsedStats = useMemo(() => {
    if (inputMode === 'raw') {
      const nums = dataInput
        .split(/[\s,;]+/)
        .map((s) => parseFloat(s.trim()))
        .filter((n) => !isNaN(n));
      return computeDescriptiveStats(nums);
    } else {
      const nums = [];
      for (const row of freqRows) {
        for (let i = 0; i < row.n; i++) {
          nums.push(row.x);
        }
      }
      return computeDescriptiveStats(nums);
    }
  }, [dataInput, inputMode, freqRows]);

  const testAssistantResult = useMemo(() => {
    const isLarge = testN >= 30;
    const statVal = ((testSampleMean - testMean0) / testSampleStd) * Math.sqrt(testN);
    const df = testN - 1;

    let critVal = 0;
    let isReject = false;
    let rejectionRegionText = '';

    if (isLarge) {
      if (testHypothesis === 'two') {
        critVal = getCriticalZ(testAlpha / 2);
        isReject = Math.abs(statVal) > critVal;
        rejectionRegionText = `W_\\alpha = (-\\infty; -${critVal.toFixed(3)}) \\cup (${critVal.toFixed(3)}; +\\infty)`;
      } else if (testHypothesis === 'greater') {
        critVal = getCriticalZ(testAlpha);
        isReject = statVal > critVal;
        rejectionRegionText = `W_\\alpha = (${critVal.toFixed(3)}; +\\infty)`;
      } else {
        critVal = getCriticalZ(testAlpha);
        isReject = statVal < -critVal;
        rejectionRegionText = `W_\\alpha = (-\\infty; -${critVal.toFixed(3)})`;
      }
    } else {
      if (testHypothesis === 'two') {
        critVal = getCriticalT(testAlpha / 2, df);
        isReject = Math.abs(statVal) > critVal;
        rejectionRegionText = `W_\\alpha = (-\\infty; -${critVal.toFixed(3)}) \\cup (${critVal.toFixed(3)}; +\\infty)`;
      } else if (testHypothesis === 'greater') {
        critVal = getCriticalT(testAlpha, df);
        isReject = statVal > critVal;
        rejectionRegionText = `W_\\alpha = (${critVal.toFixed(3)}; +\\infty)`;
      } else {
        critVal = getCriticalT(testAlpha, df);
        isReject = statVal < -critVal;
        rejectionRegionText = `W_\\alpha = (-\\infty; -${critVal.toFixed(3)})`;
      }
    }

    return {
      isLarge,
      statName: isLarge ? 'Z' : 'T',
      statVal,
      critVal,
      isReject,
      rejectionRegionText,
    };
  }, [testMean0, testSampleMean, testSampleStd, testN, testAlpha, testHypothesis]);

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#0a66c2] dark:bg-[#4a9be0]"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#696969] dark:text-[#8c8c8c]">
              Công cụ tính toán
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#171717] dark:text-[#f5f5f5]">
            Máy Tính & Tra Bảng Thống Kê
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#696969] dark:text-[#8c8c8c]">
          <span className="px-2.5 py-1 rounded bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10">
            Tra bảng Z, t, χ²
          </span>
          <span className="px-2.5 py-1 rounded bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10">
            Mẫu dữ liệu & Kiểm định
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center bg-[#f5f5f5] dark:bg-[#262626] p-1 rounded-xl border border-[#e5e5e5] dark:border-white/10 gap-1 w-fit">
        <button
          onClick={() => setActiveSubTab('tables')}
          className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all select-none ${
            activeSubTab === 'tables'
              ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs'
              : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
          }`}
        >
          Tra cứu bảng (Z, t, χ²)
        </button>
        <button
          onClick={() => setActiveSubTab('sampleStats')}
          className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all select-none ${
            activeSubTab === 'sampleStats'
              ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs'
              : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
          }`}
        >
          Máy tính tham số mẫu
        </button>
        <button
          onClick={() => setActiveSubTab('testAssistant')}
          className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all select-none ${
            activeSubTab === 'testAssistant'
              ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs'
              : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white'
          }`}
        >
          Trợ lý kiểm định 5 bước
        </button>
      </div>

      {activeSubTab === 'tables' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
            <div className="flex items-center gap-2 text-[#0a66c2] dark:text-[#4a9be0] font-bold mb-3 text-xs sm:text-sm">
              <Table className="w-4 h-4" />
              <span>1. Bảng Chuẩn Tắc & Laplace</span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">Nhập giá trị z:</label>
                <input
                  type="number"
                  step="0.01"
                  value={zVal}
                  onChange={(e) => setZVal(parseFloat(e.target.value) || 0)}
                  className="w-full px-2.5 py-1.5 bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md font-mono font-bold text-[#171717] dark:text-[#f5f5f5]"
                />
              </div>

              <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-white/10 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#696969] dark:text-[#8c8c8c]">
                    Hàm Laplace <MathView math={`\\Phi_0(${zVal})`} />:
                  </span>
                  <span className="font-mono font-bold text-[#0a66c2] dark:text-[#4a9be0] text-sm">
                    {zResults.phi0.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#696969] dark:text-[#8c8c8c]">
                    Hàm phân phối <MathView math={`\\Phi(${zVal})`} />:
                  </span>
                  <span className="font-mono font-semibold text-[#171717] dark:text-[#f5f5f5]">
                    {zResults.phi.toFixed(4)}
                  </span>
                </div>
              </div>

              <div className="border-t border-[#e5e5e5] dark:border-white/10 pt-3">
                <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                  Tra ngược mức ý nghĩa <MathView math="\alpha" />:
                </label>
                <input
                  type="number"
                  step="0.005"
                  min="0.001"
                  max="0.5"
                  value={alphaVal}
                  onChange={(e) => setAlphaVal(parseFloat(e.target.value) || 0.05)}
                  className="w-full px-2.5 py-1.5 bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md font-mono font-bold text-[#171717] dark:text-[#f5f5f5]"
                />
              </div>

              <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-white/10 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#696969] dark:text-[#8c8c8c]">
                    Hai phía <MathView math="u_{\alpha/2}" /> ({alphaVal / 2}):
                  </span>
                  <span className="font-mono font-bold text-[#0a66c2] dark:text-[#4a9be0] text-sm">
                    {zResults.uAlphaHalf.toFixed(3)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#696969] dark:text-[#8c8c8c]">
                    Một phía <MathView math="u_\alpha" /> ({alphaVal}):
                  </span>
                  <span className="font-mono font-bold text-[#0a66c2] dark:text-[#4a9be0] text-sm">
                    {zResults.uAlpha.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold mb-3 text-xs sm:text-sm">
              <Table className="w-4 h-4" />
              <span>2. Bảng Phân Phối Student t</span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">Bậc tự do df (n - 1):</label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={studentDf}
                    onChange={(e) => setStudentDf(parseInt(e.target.value) || 1)}
                    className="w-full px-2.5 py-1.5 bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md font-mono font-bold text-[#171717] dark:text-[#f5f5f5]"
                  />
                </div>
                <div>
                  <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                    Mức ý nghĩa <MathView math="\alpha" />:
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.001"
                    max="0.2"
                    value={studentAlpha}
                    onChange={(e) => setStudentAlpha(parseFloat(e.target.value) || 0.05)}
                    className="w-full px-2.5 py-1.5 bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md font-mono font-bold text-[#171717] dark:text-[#f5f5f5]"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-white/10 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#696969] dark:text-[#8c8c8c]">
                    Hai phía <MathView math="t_{\alpha/2}^{(df)}" />:
                  </span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                    {tResults.tTwo.toFixed(3)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#696969] dark:text-[#8c8c8c]">
                    Một phía <MathView math="t_\alpha^{(df)}" />:
                  </span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                    {tResults.tOne.toFixed(3)}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#8c8c8c] font-mono">
                Áp dụng khi chưa biết phương sai và mẫu n &lt; 30.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-3 text-xs sm:text-sm">
              <Table className="w-4 h-4" />
              <span>3. Bảng Khi Bình Phương <MathView math="\chi^2" /></span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">Bậc tự do df:</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={chiDf}
                    onChange={(e) => setChiDf(parseInt(e.target.value) || 1)}
                    className="w-full px-2.5 py-1.5 bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md font-mono font-bold text-[#171717] dark:text-[#f5f5f5]"
                  />
                </div>
                <div>
                  <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                    Mức ý nghĩa <MathView math="\alpha" />:
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.001"
                    max="0.2"
                    value={chiAlpha}
                    onChange={(e) => setChiAlpha(parseFloat(e.target.value) || 0.05)}
                    className="w-full px-2.5 py-1.5 bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-md font-mono font-bold text-[#171717] dark:text-[#f5f5f5]"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-white/10 rounded-lg text-center">
                <span className="text-[#696969] dark:text-[#8c8c8c] block text-[11px] mb-1">
                  Giá trị tới hạn <MathView math="\chi^2_\alpha(df)" />:
                </span>
                <div className="font-mono font-bold text-amber-600 dark:text-amber-400 text-xl">
                  {chiResults.chiVal.toFixed(3)}
                </div>
              </div>

              <p className="text-[11px] text-[#8c8c8c] font-mono">
                Kiểm định độc lập: df = (r-1)(k-1)
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'sampleStats' && (
        <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5] flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#0a66c2] dark:text-[#4a9be0]" />
              <span>Tính Tham Số Mẫu Tự Luận</span>
            </h2>

            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setInputMode('raw')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  inputMode === 'raw'
                    ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] font-medium'
                    : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c]'
                }`}
              >
                Dãy số liệu
              </button>
              <button
                onClick={() => setInputMode('freq')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  inputMode === 'freq'
                    ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f] font-medium'
                    : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c]'
                }`}
              >
                Bảng tần số (x, n)
              </button>
            </div>
          </div>

          {inputMode === 'raw' ? (
            <div className="mb-4">
              <label className="text-xs text-[#696969] dark:text-[#8c8c8c] block mb-1">
                Dãy số liệu (phân tách bởi dấu phẩy hoặc khoảng trắng):
              </label>
              <textarea
                rows="2"
                value={dataInput}
                onChange={(e) => setDataInput(e.target.value)}
                placeholder="12, 15, 14, 18, 19, 21, 16"
                className="w-full p-2.5 font-mono text-xs sm:text-sm bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 rounded-lg text-[#171717] dark:text-[#f5f5f5] focus:outline-none focus:border-[#0a66c2] dark:focus:border-[#4a9be0]"
              />
            </div>
          ) : (
            <div className="mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-[#e5e5e5] dark:border-white/10 rounded-lg overflow-hidden">
                  <thead className="bg-[#f5f5f5] dark:bg-[#262626] text-[#171717] dark:text-[#f5f5f5]">
                    <tr>
                      <th className="p-2">Trung điểm (x_i)</th>
                      <th className="p-2">Tần số (n_i)</th>
                      <th className="p-2">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e5e5] dark:divide-white/10">
                    {freqRows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="p-2">
                          <input
                            type="number"
                            value={row.x}
                            onChange={(e) => {
                              const newRows = [...freqRows];
                              newRows[idx].x = parseFloat(e.target.value) || 0;
                              setFreqRows(newRows);
                            }}
                            className="w-24 px-2 py-1 bg-white dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            value={row.n}
                            onChange={(e) => {
                              const newRows = [...freqRows];
                              newRows[idx].n = parseInt(e.target.value) || 0;
                              setFreqRows(newRows);
                            }}
                            className="w-20 px-2 py-1 bg-white dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
                          />
                        </td>
                        <td className="p-2">
                          <button
                            onClick={() => setFreqRows(freqRows.filter((_, i) => i !== idx))}
                            className="text-rose-600 dark:text-rose-400 text-xs hover:underline"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setFreqRows([...freqRows, { x: 0, n: 1 }])}
                className="mt-2 text-xs text-[#0a66c2] dark:text-[#4a9be0] hover:underline"
              >
                + Thêm dòng mới
              </button>
            </div>
          )}

          {parsedStats ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10">
              <div className="p-2.5 bg-white dark:bg-[#202020] rounded-md border border-[#e5e5e5] dark:border-white/10">
                <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">Cỡ mẫu</span>
                <span className="text-base font-bold font-mono text-[#171717] dark:text-[#f5f5f5]">
                  n = {parsedStats.n}
                </span>
                <span className="text-[10px] text-[#8c8c8c] block">
                  {parsedStats.n >= 30 ? 'Mẫu lớn (n ≥ 30)' : 'Mẫu nhỏ (n < 30)'}
                </span>
              </div>

              <div className="p-2.5 bg-white dark:bg-[#202020] rounded-md border border-[#e5e5e5] dark:border-white/10">
                <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">
                  Trung bình mẫu (<MathView math="\bar{x}" />)
                </span>
                <span className="text-base font-bold font-mono text-[#0a66c2] dark:text-[#4a9be0]">
                  {parsedStats.mean.toFixed(3)}
                </span>
                <span className="text-[10px] text-[#8c8c8c] block">
                  Tổng = {parsedStats.sum.toFixed(1)}
                </span>
              </div>

              <div className="p-2.5 bg-white dark:bg-[#202020] rounded-md border border-[#e5e5e5] dark:border-white/10">
                <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">
                  Độ lệch chuẩn hiệu chỉnh (<MathView math="s'" />)
                </span>
                <span className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {parsedStats.adjustedStd.toFixed(3)}
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono block">
                  Dùng cho bài thi
                </span>
              </div>

              <div className="p-2.5 bg-white dark:bg-[#202020] rounded-md border border-[#e5e5e5] dark:border-white/10">
                <span className="text-[11px] text-[#696969] dark:text-[#8c8c8c] block">
                  Phương sai hiệu chỉnh (<MathView math="s'^2" />)
                </span>
                <span className="text-base font-bold font-mono text-[#171717] dark:text-[#f5f5f5]">
                  {parsedStats.adjustedVariance.toFixed(3)}
                </span>
                <span className="text-[10px] text-[#8c8c8c] block">
                  s² = {parsedStats.variance.toFixed(2)}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-amber-50 text-amber-800 text-xs rounded-md">
              Chưa có đủ số liệu hợp lệ để tính toán.
            </div>
          )}
        </div>
      )}

      {activeSubTab === 'testAssistant' && (
        <div className="bg-white dark:bg-[#202020] rounded-xl p-4 sm:p-5 border border-[#e5e5e5] dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#0a66c2] dark:text-[#4a9be0]" />
            <h2 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#f5f5f5]">
              Lời Giải Kiểm Định Trung Bình 1 Mẫu
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-4 p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10 text-xs">
            <div>
              <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                Mức chuẩn <MathView math="\mu_0" />:
              </label>
              <input
                type="number"
                value={testMean0}
                onChange={(e) => setTestMean0(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
              />
            </div>
            <div>
              <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                Trung bình <MathView math="\bar{x}" />:
              </label>
              <input
                type="number"
                value={testSampleMean}
                onChange={(e) => setTestSampleMean(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
              />
            </div>
            <div>
              <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                Độ lệch <MathView math="s'" />:
              </label>
              <input
                type="number"
                value={testSampleStd}
                onChange={(e) => setTestSampleStd(parseFloat(e.target.value) || 1)}
                className="w-full px-2 py-1 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
              />
            </div>
            <div>
              <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">Cỡ mẫu n:</label>
              <input
                type="number"
                value={testN}
                onChange={(e) => setTestN(parseInt(e.target.value) || 1)}
                className="w-full px-2 py-1 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
              />
            </div>
            <div>
              <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                Mức <MathView math="\alpha" />:
              </label>
              <input
                type="number"
                step="0.01"
                value={testAlpha}
                onChange={(e) => setTestAlpha(parseFloat(e.target.value) || 0.05)}
                className="w-full px-2 py-1 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded font-mono text-xs"
              />
            </div>
            <div>
              <label className="text-[#696969] dark:text-[#8c8c8c] block mb-1">
                Đối thuyết <MathView math="H_1" />:
              </label>
              <select
                value={testHypothesis}
                onChange={(e) => setTestHypothesis(e.target.value)}
                className="w-full px-2 py-1 bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded text-xs"
              >
                <option value="two">Hai phía (≠)</option>
                <option value="greater">Phía phải (&gt;)</option>
                <option value="less">Phía trái (&lt;)</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 border-l-2 border-[#0a66c2] dark:border-[#4a9be0] pl-3.5 text-xs sm:text-sm text-[#262626] dark:text-[#d4d4d4]">
            <div>
              <span className="font-bold text-[#171717] dark:text-[#f5f5f5] block">
                • Bước 1: Thiết lập giả thuyết và đối thuyết
              </span>
              <p className="mt-0.5">
                - Giả thuyết: <MathView math={`H_0: \\mu = ${testMean0}`} />
                <br />
                - Đối thuyết: <MathView math={`H_1: \\mu ${testHypothesis === 'two' ? '\\ne' : testHypothesis === 'greater' ? '>' : '<'} ${testMean0}`} />
              </p>
            </div>

            <div>
              <span className="font-bold text-[#171717] dark:text-[#f5f5f5] block">
                • Bước 2: Tiêu chuẩn kiểm định
              </span>
              <p className="mt-0.5">
                {testAssistantResult.isLarge ? `Kích thước mẫu lớn n = ${testN} ≥ 30:` : `Chưa biết phương sai, n = ${testN} < 30:`}
                <span className="block mt-1">
                  {testAssistantResult.isLarge ? (
                    <MathView math="Z = \frac{\bar{X} - \mu_0}{s'} \sqrt{n} \sim N(0, 1)" />
                  ) : (
                    <MathView math={`T = \\frac{\\bar{X} - \\mu_0}{s'} \\sqrt{n} \\sim t(df = ${testN - 1})`} />
                  )}
                </span>
              </p>
            </div>

            <div>
              <span className="font-bold text-[#171717] dark:text-[#f5f5f5] block">
                • Bước 3: Miền bác bỏ <MathView math="W_\alpha" />
              </span>
              <p className="mt-0.5">
                Với mức ý nghĩa <MathView math={`\\alpha = ${testAlpha}`} />:
                <span className="block mt-1">
                  <MathView math={testAssistantResult.rejectionRegionText} />
                </span>
              </p>
            </div>

            <div>
              <span className="font-bold text-[#171717] dark:text-[#f5f5f5] block">
                • Bước 4: Giá trị quan sát
              </span>
              <div className="mt-0.5">
                <MathView
                  math={`${testAssistantResult.statName}_{qs} = \\frac{${testSampleMean} - ${testMean0}}{${testSampleStd}} \\sqrt{${testN}} = ${testAssistantResult.statVal.toFixed(3)}`}
                />
              </div>
            </div>

            <div className="p-3 bg-[#fbfbfa] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e5e5] dark:border-white/10">
              <span className="font-bold text-[#171717] dark:text-[#f5f5f5] block">
                • Bước 5: Kết luận
              </span>
              <p className="mt-0.5">
                Giá trị quan sát <MathView math={`${testAssistantResult.statName}_{qs} = ${testAssistantResult.statVal.toFixed(3)}`} />{' '}
                {testAssistantResult.isReject ? 'thuộc' : 'không thuộc'} <MathView math="W_\alpha" />.
              </p>
              <div
                className={`mt-2 px-2 py-1 rounded text-xs font-mono font-bold inline-block ${
                  testAssistantResult.isReject
                    ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                    : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                }`}
              >
                {testAssistantResult.isReject
                  ? 'Bác bỏ H0, chấp nhận H1'
                  : 'Chưa có cơ sở bác bỏ H0'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
