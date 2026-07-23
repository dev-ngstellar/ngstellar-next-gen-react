import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial dark mode state
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Theme"
      className="relative p-2.5 rounded-full glass-panel text-text-main hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-sky-600 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
