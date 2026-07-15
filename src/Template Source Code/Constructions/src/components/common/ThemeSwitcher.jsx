import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { MdColorLens, MdCheck } from 'react-icons/md';

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-slate-50 transition-colors text-text-primary text-sm font-medium"
        aria-label="Toggle Theme Menu"
      >
        <MdColorLens className="text-lg text-primary" />
        <span className="hidden sm:inline">{themes[currentTheme].name}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-white shadow-xl py-2 flex flex-col gap-1 transition-all duration-200">
            <div className="px-4 py-2 border-b border-border text-xs font-semibold tracking-wider text-text-secondary uppercase">
              Select Theme
            </div>
            {Object.values(themes).map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  changeTheme(theme.id);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 text-left transition-colors text-sm ${
                  currentTheme === theme.id ? 'font-semibold text-primary bg-primary/5' : 'text-text-primary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: theme.colors.primary }} />
                    <span className="w-3.5 h-3.5 rounded-full border border-black/10 hidden xs:inline" style={{ backgroundColor: theme.colors.secondary }} />
                  </div>
                  <span>{theme.name}</span>
                </div>
                {currentTheme === theme.id && <MdCheck className="text-primary text-lg" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
