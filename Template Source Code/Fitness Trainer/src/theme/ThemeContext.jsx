import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const colorThemes = [
  { id: 'violet', label: 'Violet', color: '#6366f1', attr: '' },
  { id: 'rose',   label: 'Rose',   color: '#f43f5e', attr: 'rose' },
  { id: 'emerald',label: 'Emerald',color: '#10b981', attr: 'emerald' },
  { id: 'amber',  label: 'Amber',  color: '#f59e0b', attr: 'amber' },
  { id: 'ocean',  label: 'Ocean',  color: '#0ea5e9', attr: 'ocean' },
];

export function ThemeProvider({ children }) {
  const [activeColor, setActiveColor] = useState(() =>
    localStorage.getItem('elitefit-color') || 'violet'
  );
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('elitefit-mode') !== 'light'
  );

  useEffect(() => {
    const theme = colorThemes.find(t => t.id === activeColor);
    if (theme) {
      document.documentElement.setAttribute('data-color', theme.attr);
      localStorage.setItem('elitefit-color', activeColor);
    }
  }, [activeColor]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', isDark ? 'dark' : 'light');
    localStorage.setItem('elitefit-mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleMode = () => setIsDark(v => !v);

  return (
    <ThemeContext.Provider value={{ activeColor, setActiveColor, colorThemes, isDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
