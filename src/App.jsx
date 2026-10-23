import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import TheoryView from './components/TheoryView';
import ExercisesView from './components/ExercisesView';
import InteractiveLab from './components/InteractiveLab';
import CalculatorAndTables from './components/CalculatorAndTables';
import CheatSheetView from './components/CheatSheetView';
import Footer from './components/Footer';

const VALID_TABS = ['home', 'theory', 'exercises', 'lab', 'calculator', 'cheatsheet'];

function getInitialTab() {
  try {
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    if (VALID_TABS.includes(hash)) {
      return hash;
    }
    const saved = localStorage.getItem('percento_active_tab');
    if (saved && VALID_TABS.includes(saved)) {
      return saved;
    }
  } catch {
    return 'home';
  }
  return 'home';
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('xstk_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('percento_active_tab', activeTab);
      const currentHash = window.location.hash.replace(/^#\/?/, '').trim();
      if (currentHash !== activeTab) {
        window.history.replaceState(null, '', `#${activeTab}`);
      }
    } catch (e) {
      console.error(e);
    }
  }, [activeTab]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('xstk_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('xstk_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f2ef] dark:bg-[#171717] text-[#1b1b1b] dark:text-[#e8e8e8] transition-colors duration-150">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'theory' && <TheoryView />}
        {activeTab === 'exercises' && <ExercisesView />}
        {activeTab === 'lab' && <InteractiveLab />}
        {activeTab === 'calculator' && <CalculatorAndTables />}
        {activeTab === 'cheatsheet' && <CheatSheetView />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
