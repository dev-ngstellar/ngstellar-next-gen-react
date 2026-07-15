import React, { useEffect, useState } from 'react';
import { Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  {
    name: 'Blue',
    color: '#3b82f6',
    accent: '#3b82f6',
    gradientStart: '#3b82f6',
    gradientEnd: '#8b5cf6',
  },
  {
    name: 'Emerald',
    color: '#10b981',
    accent: '#10b981',
    gradientStart: '#10b981',
    gradientEnd: '#059669',
  },
  {
    name: 'Rose',
    color: '#f43f5e',
    accent: '#f43f5e',
    gradientStart: '#f43f5e',
    gradientEnd: '#e11d48',
  },
  {
    name: 'Amber',
    color: '#f59e0b',
    accent: '#f59e0b',
    gradientStart: '#f59e0b',
    gradientEnd: '#d97706',
  },
  {
    name: 'Purple',
    color: '#a855f7',
    accent: '#a855f7',
    gradientStart: '#a855f7',
    gradientEnd: '#c084fc',
  }
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', activeTheme.accent);
    root.style.setProperty('--gradient-start', activeTheme.gradientStart);
    root.style.setProperty('--gradient-end', activeTheme.gradientEnd);
  }, [activeTheme]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 glass-card p-4 rounded-2xl border border-white/10 w-48 shadow-2xl mb-2"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-white">Theme Color</span>
              <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 flex-wrap">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setActiveTheme(theme)}
                  title={theme.name}
                  className={`w-8 h-8 rounded-full transition-transform hover:scale-110 flex items-center justify-center ${activeTheme.name === theme.name ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}`}
                  style={{ backgroundColor: theme.color }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-lg"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
