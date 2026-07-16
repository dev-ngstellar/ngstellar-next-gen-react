import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes, defaultTheme, getThemeById, applyTheme } from '../config/themes';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [activeThemeId, setActiveThemeId] = useState(() => {
    return localStorage.getItem('portfolio-theme') || defaultTheme;
  });
  const [customColor, setCustomColor] = useState(() => {
    return localStorage.getItem('portfolio-custom-color') || null;
  });

  const activeTheme = getThemeById(activeThemeId);

  useEffect(() => {
    applyTheme(activeTheme);
    if (customColor) {
      document.documentElement.style.setProperty('--color-primary', customColor);
      document.documentElement.style.setProperty('--color-primary-light', customColor);
      document.documentElement.style.setProperty('--color-glow', `${customColor}40`);
    }
    localStorage.setItem('portfolio-theme', activeThemeId);
  }, [activeThemeId, activeTheme, customColor]);

  const switchTheme = (id) => {
    if (getThemeById(id)) {
      setActiveThemeId(id);
      setCustomColor(null);
      localStorage.removeItem('portfolio-custom-color');
    }
  };

  const changeCustomColor = (color) => {
    setCustomColor(color);
    localStorage.setItem('portfolio-custom-color', color);
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, activeThemeId, themes, switchTheme, customColor, changeCustomColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
