import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  FileText,
  Compass,
  Calculator,
  Zap,
  Moon,
  Sun,
  Menu,
  X,
  Sigma
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Giới thiệu', icon: Home },
    { id: 'theory', label: 'Lý thuyết', icon: BookOpen, badge: '5 Chương' },
    { id: 'exercises', label: 'Luyện tự luận', icon: FileText, badge: '75 Bài' },
    { id: 'lab', label: 'Mô phỏng', icon: Compass, badge: 'Lab' },
    { id: 'calculator', label: 'Máy tính & Tra bảng', icon: Calculator },
    { id: 'cheatsheet', label: 'Sổ tay', icon: Zap },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1f1f1f]/90 backdrop-blur-md border-b border-[#e5e5e5] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0a66c2] dark:bg-[#4a9be0] text-white dark:text-[#10171f] flex items-center justify-center font-bold shadow-xs">
              <Sigma className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-[#171717] dark:text-[#f5f5f5]">
                Percent<span className="text-[#0a66c2] dark:text-[#4a9be0]">o</span>
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-[#f5f5f5] dark:bg-[#292929] text-[#696969] dark:text-[#8c8c8c] border border-[#e5e5e5] dark:border-white/10">
                PRO
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-[#f5f5f5] dark:bg-[#262626] p-1 rounded-xl border border-[#e5e5e5] dark:border-white/10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all select-none ${
                    isActive
                      ? 'bg-white dark:bg-[#1a1a1a] text-[#0a66c2] dark:text-[#4a9be0] shadow-xs'
                      : 'text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-mono px-1 py-0.2 rounded ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-[#0a66c2] dark:text-[#4a9be0]'
                          : 'bg-[#ebebeb] dark:bg-[#333333] text-[#696969] dark:text-[#8c8c8c]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-[#696969] dark:text-[#8c8c8c] hover:text-[#171717] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10 transition-colors"
              title={darkMode ? 'Giao diện sáng' : 'Giao diện tối'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-[#696969] dark:text-[#8c8c8c] bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-white/10"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1f1f1f] border-b border-[#e5e5e5] dark:border-white/10 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-[#0a66c2] dark:text-[#4a9be0]'
                    : 'text-[#696969] dark:text-[#8c8c8c] hover:bg-[#f5f5f5] dark:hover:bg-[#262626]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#0a66c2] dark:text-[#4a9be0]" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ebebeb] dark:bg-[#333333] text-[#696969] dark:text-[#8c8c8c]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
