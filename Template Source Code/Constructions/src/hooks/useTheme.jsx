import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../config/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('construction-template-theme');
    return saved && themes[saved] ? saved : 'industrial';
  });

  useEffect(() => {
    const themeObj = themes[currentTheme];
    if (themeObj && themeObj.colors) {
      const root = document.documentElement;
      Object.entries(themeObj.colors).forEach(([key, value]) => {
        // Map camelCase keys to css-variable-format (e.g. textPrimary -> --color-text-primary)
        const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssKey, value);
      });
      localStorage.setItem('construction-template-theme', currentTheme);
      // Also apply a class to the root element for conditional styling if needed
      root.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  const changeTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes, themeDetails: themes[currentTheme] }}>
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
