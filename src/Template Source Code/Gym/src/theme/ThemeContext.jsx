import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { id: 'orange', label: 'Orange', color: '#ff5a1f', attr: '' },
  { id: 'red',    label: 'Red',    color: '#ef4444', attr: 'red' },
  { id: 'blue',   label: 'Blue',   color: '#3b82f6', attr: 'blue' },
  { id: 'neon',   label: 'Neon',   color: '#22c55e', attr: 'neon' },
  { id: 'gold',   label: 'Gold',   color: '#f59e0b', attr: 'gold' },
];

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('gymforge-theme') || 'orange';
  });

  useEffect(() => {
    const theme = themes.find(t => t.id === activeTheme);
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme.attr);
      localStorage.setItem('gymforge-theme', activeTheme);
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
