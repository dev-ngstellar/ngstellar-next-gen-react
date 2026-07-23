import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Moon, Sun, Palette, Check } from 'lucide-react';
import { useTheme, COLOR_PRESETS } from '../../context/ThemeContext';

export const ThemeCustomizerModal = ({ isOpen, onClose }) => {
  const { isDark, toggleTheme, activePreset, selectColorPreset, customPrimary, setCustomColor } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md p-6 glass-card rounded-3xl border border-white/20 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl theme-accent-light-bg theme-accent-text">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Theme & Color Engine</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Customize global CSS variables in real-time</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 rounded-full hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Appearance Mode
            </label>
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => isDark && toggleTheme()}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition ${
                  !isDark 
                    ? 'bg-white text-slate-900 shadow-md border border-slate-200' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                Light Mode
              </button>
              <button
                onClick={() => !isDark && toggleTheme()}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition ${
                  isDark 
                    ? 'bg-slate-800 text-white shadow-md border border-slate-700' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Moon className="w-4 h-4 text-indigo-400" />
                Dark Mode
              </button>
            </div>
          </div>

          {/* Color Palette Presets */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Primary Accent Color Palette
            </label>
            <div className="grid grid-cols-3 gap-3">
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => selectColorPreset(preset.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition relative overflow-hidden ${
                    activePreset === preset.id
                      ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-800/80 shadow-md ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-900'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div 
                    className="w-8 h-8 rounded-full mb-2 flex items-center justify-center text-white shadow-inner" 
                    style={{ backgroundColor: preset.primary }}
                  >
                    {activePreset === preset.id && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Color Input */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Custom Hex Primary Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={customPrimary}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-12 h-12 rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer p-1 bg-transparent"
              />
              <input
                type="text"
                value={customPrimary}
                onChange={(e) => setCustomColor(e.target.value)}
                placeholder="#0f766e"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl theme-accent-bg text-white font-semibold text-sm shadow-lg hover:opacity-95 transition"
            >
              Apply Settings
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
