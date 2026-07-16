import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { themes, defaultTheme } from '../config/themes';

const ThemeContext = createContext(null);

const STORAGE_KEY = 'eventpro_theme_settings';
const LAYOUT_STORAGE_KEY = 'eventpro_active_layout';

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultTheme, ...parsed };
      }
    } catch {/* ignore */}
    return defaultTheme;
  });

  const [activeLayout, setActiveLayout] = useState(() => {
    try {
      return localStorage.getItem(LAYOUT_STORAGE_KEY) || 'wedding';
    } catch {
      return 'wedding';
    }
  });

  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Apply CSS variables whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', currentTheme.primary);
    root.style.setProperty('--color-secondary', currentTheme.secondary);
    root.style.setProperty('--color-accent', currentTheme.accent);
    root.style.setProperty('--font-heading', currentTheme.fontHeading);
    root.style.setProperty('--font-body', currentTheme.fontBody);
    root.style.setProperty('--border-radius', currentTheme.borderRadius);
    root.style.setProperty('--btn-style', currentTheme.btnStyle);
    root.style.setProperty('--card-style', currentTheme.cardStyle);

    // Set body background
    document.body.style.backgroundColor = currentTheme.secondary;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTheme));
    } catch {/* ignore */}
  }, [currentTheme]);

  useEffect(() => {
    try {
      localStorage.setItem(LAYOUT_STORAGE_KEY, activeLayout);
    } catch {/* ignore */}
  }, [activeLayout]);

  const applyTheme = useCallback((themeId) => {
    const theme = themes[themeId];
    if (theme) setCurrentTheme(theme);
  }, []);

  const updateThemeProperty = useCallback((key, value) => {
    setCurrentTheme(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetTheme = useCallback(() => {
    setCurrentTheme(defaultTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      themes,
      activeLayout,
      setActiveLayout,
      customizerOpen,
      setCustomizerOpen,
      applyTheme,
      updateThemeProperty,
      resetTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export default ThemeContext;
