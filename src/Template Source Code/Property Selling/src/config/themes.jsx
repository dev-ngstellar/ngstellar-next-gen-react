import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = [
  {
    id: 'luxury-gold',
    name: 'Luxury Gold',
    primary: '#D4AF37',
    secondary: '#111827',
    accent: '#F5D76E',
    background: '#FFFFFF',
    text: '#1F2937',
    textLight: '#4B5563',
    cardBg: '#FFFFFF',
    navBg: 'rgba(17, 24, 39, 0.9)',
    isDark: true,
  },
  {
    id: 'modern-blue',
    name: 'Modern Realtor Blue',
    primary: '#2563EB',
    secondary: '#0F172A',
    accent: '#38BDF8',
    background: '#F8FAFC',
    text: '#334155',
    textLight: '#64748B',
    cardBg: '#FFFFFF',
    navBg: 'rgba(255, 255, 255, 0.95)',
    isDark: false,
  },
  {
    id: 'investment-green',
    name: 'Investment Green',
    primary: '#15803D',
    secondary: '#1E293B',
    accent: '#84CC16',
    background: '#F9FAFB',
    text: '#334155',
    textLight: '#64748B',
    cardBg: '#FFFFFF',
    navBg: 'rgba(255, 255, 255, 0.95)',
    isDark: false,
  },
  {
    id: 'luxury-black',
    name: 'Luxury Black',
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#D4AF37',
    background: '#FAFAFA',
    text: '#1A1A1A',
    textLight: '#737373',
    cardBg: '#FFFFFF',
    navBg: 'rgba(0, 0, 0, 0.95)',
    isDark: true,
  },
  {
    id: 'developer-orange',
    name: 'Developer Theme',
    primary: '#F97316',
    secondary: '#1E293B',
    accent: '#FBBF24',
    background: '#FFFFFF',
    text: '#334155',
    textLight: '#64748B',
    cardBg: '#FFFFFF',
    navBg: 'rgba(30, 41, 59, 0.95)',
    isDark: true,
  }
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('property-template-theme');
    return themes.find(t => t.id === saved) || themes[1]; // default to Modern Realtor Blue
  });

  useEffect(() => {
    const root = document.documentElement;
    
    root.style.setProperty('--theme-primary', currentTheme.primary);
    root.style.setProperty('--theme-secondary', currentTheme.secondary);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-background', currentTheme.background);
    root.style.setProperty('--theme-text', currentTheme.text);
    root.style.setProperty('--theme-text-light', currentTheme.textLight);
    root.style.setProperty('--theme-card-bg', currentTheme.cardBg);
    root.style.setProperty('--theme-nav-bg', currentTheme.navBg);

    localStorage.setItem('property-template-theme', currentTheme.id);
  }, [currentTheme]);

  const selectTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, selectTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
