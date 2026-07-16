import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiCheck, FiDroplet } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const { themes, activeThemeId, switchTheme, activeTheme, customColor, changeCustomColor } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100 }}>
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '64px',
              right: 0,
              width: '260px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '1.25rem',
              padding: '1.25rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-subtle)', marginBottom: '1rem' }}>
              Choose Theme
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => { switchTheme(theme.id); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.625rem 0.875rem',
                    borderRadius: '0.75rem',
                    border: `1px solid ${activeThemeId === theme.id ? 'var(--color-primary)' : 'transparent'}`,
                    background: activeThemeId === theme.id ? 'rgba(37,99,235,0.08)' : 'transparent',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                >
                  {/* Swatch */}
                  <div style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                    {[theme.preview.swatch1, theme.preview.swatch2, theme.preview.swatch3].map((color, i) => (
                      <div
                        key={i}
                        style={{
                          width: '12px',
                          height: '22px',
                          borderRadius: '4px',
                          background: color,
                          border: '1px solid rgba(255,255,255,0.15)',
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', flex: 1 }}>
                    {theme.name}
                  </span>
                  {activeThemeId === theme.id && (
                    <FiCheck size={14} color="var(--color-primary)" />
                  )}
                </button>
              ))}
            </div>

            {/* Custom Color Picker */}
            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>
                Custom Color
              </span>
              <div style={{
                position: 'relative',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--color-border)',
                cursor: 'pointer'
              }}>
                <input 
                  type="color" 
                  value={customColor || activeTheme.colors.primary}
                  onChange={(e) => changeCustomColor(e.target.value)}
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: '60px',
                    height: '60px',
                    cursor: 'pointer',
                    border: 'none',
                    padding: 0,
                  }}
                  title="Choose custom primary color"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px var(--color-glow)',
          color: 'white',
        }}
        aria-label="Theme Switcher"
      >
        <FiDroplet size={22} />
      </motion.button>
    </div>
  );
}
