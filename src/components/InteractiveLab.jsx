import React, { useState, useEffect } from 'react';
import NormalDistributionVisualizer from './simulations/NormalDistributionVisualizer';
import CentralLimitTheoremVisualizer from './simulations/CentralLimitTheoremVisualizer';
import LinearRegressionVisualizer from './simulations/LinearRegressionVisualizer';
import LawOfLargeNumbersVisualizer from './simulations/LawOfLargeNumbersVisualizer';
import { Activity, Sparkles, TrendingUp, Coins } from 'lucide-react';

export default function InteractiveLab() {
  const [activeTab, setActiveTab] = useState(() => {
    try {
      const saved = localStorage.getItem('percento_lab_tab');
      if (saved) return saved;
    } catch {
      return 'normal';
    }
    return 'normal';
  });

  useEffect(() => {
    try {
      localStorage.setItem('percento_lab_tab', activeTab);
    } catch (e) {
      console.error(e);
    }
  }, [activeTab]);

  const tabs = [
    {
      id: 'normal',
      name: 'Phân phối Chuẩn (Gauss)',
      icon: Activity,
      badge: 'Chương II',
    },
    {
      id: 'clt',
      name: 'Định Lý Giới Hạn TT (CLT)',
      icon: Sparkles,
      badge: 'Chương IV',
    },
    {
      id: 'lln',
      name: 'Luật Số Lớn & Tần Suất',
      icon: Coins,
      badge: 'Chương I',
    },
    {
      id: 'regression',
      name: 'Tương Quan Tuyến Tính',
      icon: TrendingUp,
      badge: 'Chương III',
    },
  ];

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-[#202020] border border-[#e5e5e5] dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#0a66c2] dark:bg-[#4a9be0]"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#696969] dark:text-[#8c8c8c]">
              Khung Đề Cương Trọng Tâm
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#171717] dark:text-[#f5f5f5]">
            Mô Phỏng Trực Quan Tương Tác
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#696969] dark:text-[#8c8c8c]">
          <span className="px-2.5 py-1 rounded bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10">
            4 Mô hình động
          </span>
          <span className="px-2.5 py-1 rounded bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10">
            Thời gian thực
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left p-3 rounded-lg border transition-all select-none ${
                isActive
                  ? 'bg-blue-50/70 dark:bg-blue-950/30 border-[#0a66c2] dark:border-[#4a9be0] text-[#0a66c2] dark:text-[#4a9be0]'
                  : 'bg-white dark:bg-[#202020] border-[#e5e5e5] dark:border-white/10 hover:border-[#cccccc] dark:hover:border-white/20 text-[#171717] dark:text-[#e8e8e8]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-[#0a66c2] text-white dark:bg-[#4a9be0] dark:text-[#10171f]'
                      : 'bg-[#f5f5f5] dark:bg-[#262626] text-[#696969] dark:text-[#8c8c8c]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ebebeb] dark:bg-[#2e2e2e] text-[#696969] dark:text-[#8c8c8c]">
                  {tab.badge}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold truncate">
                {tab.name}
              </div>
            </button>
          );
        })}
      </div>

      <div>
        {activeTab === 'normal' && <NormalDistributionVisualizer />}
        {activeTab === 'clt' && <CentralLimitTheoremVisualizer />}
        {activeTab === 'regression' && <LinearRegressionVisualizer />}
        {activeTab === 'lln' && <LawOfLargeNumbersVisualizer />}
      </div>
    </div>
  );
}
