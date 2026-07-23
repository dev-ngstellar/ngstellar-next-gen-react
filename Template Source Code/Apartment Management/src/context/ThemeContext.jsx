import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const COLOR_PRESETS = [
  { id: 'teal', name: 'Emerald Teal', primary: '#0f766e', hover: '#0d9488', light: 'rgba(15, 118, 110, 0.12)' },
  { id: 'sapphire', name: 'Royal Sapphire', primary: '#2563eb', hover: '#1d4ed8', light: 'rgba(37, 99, 235, 0.12)' },
  { id: 'violet', name: 'Amethyst Violet', primary: '#7c3aed', hover: '#6d28d9', light: 'rgba(124, 58, 237, 0.12)' },
  { id: 'rose', name: 'Luxury Rose', primary: '#e11d48', hover: '#be123c', light: 'rgba(225, 29, 72, 0.12)' },
  { id: 'amber', name: 'Golden Amber', primary: '#d97706', hover: '#b45309', light: 'rgba(217, 119, 6, 0.12)' },
  { id: 'emerald', name: 'Vibrant Emerald', primary: '#059669', hover: '#047857', light: 'rgba(5, 150, 105, 0.12)' },
];

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('skynest_theme') === 'dark';
  });

  const [activePreset, setActivePreset] = useState(() => {
    return localStorage.getItem('skynest_color_preset') || 'teal';
  });

  const [customPrimary, setCustomPrimary] = useState(() => {
    return localStorage.getItem('skynest_custom_primary') || '#0f766e';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('skynest_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('skynest_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    const preset = COLOR_PRESETS.find(p => p.id === activePreset);
    
    if (preset) {
      root.style.setProperty('--primary-color', preset.primary);
      root.style.setProperty('--primary-hover', preset.hover);
      root.style.setProperty('--primary-light', preset.light);
      localStorage.setItem('skynest_color_preset', preset.id);
    } else {
      root.style.setProperty('--primary-color', customPrimary);
      root.style.setProperty('--primary-hover', customPrimary);
      root.style.setProperty('--primary-light', `${customPrimary}20`);
      localStorage.setItem('skynest_custom_primary', customPrimary);
    }
  }, [activePreset, customPrimary]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const selectColorPreset = (presetId) => {
    setActivePreset(presetId);
  };

  const setCustomColor = (hex) => {
    setActivePreset('custom');
    setCustomPrimary(hex);
  };

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleTheme,
      activePreset,
      selectColorPreset,
      customPrimary,
      setCustomColor,
      COLOR_PRESETS
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
