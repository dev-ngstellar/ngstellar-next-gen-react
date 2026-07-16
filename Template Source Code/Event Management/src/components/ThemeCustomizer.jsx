import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { themes, fontOptions, borderRadiusOptions } from '../config/themes';
import { FaPalette, FaXmark, FaRotateLeft, FaCheck } from 'react-icons/fa6';


const layoutOptions = [
  { id: 'wedding', name: 'Wedding Luxury', emoji: '💍', theme: 'luxuryGold' },
  { id: 'corporate', name: 'Corporate Events', emoji: '💼', theme: 'corporateBlue' },
  { id: 'festival', name: 'Festival & Concert', emoji: '🎵', theme: 'festivalNeon' },
  { id: 'exhibition', name: 'Exhibition & Expo', emoji: '🏛️', theme: 'elegantRose' },
];

export default function ThemeCustomizer() {
  const {
    currentTheme, themes: allThemes, activeLayout,
    setActiveLayout, customizerOpen, setCustomizerOpen,
    applyTheme, updateThemeProperty, resetTheme,
  } = useTheme();

  const [activeTab, setActiveTab] = useState('themes');

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setCustomizerOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))` }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        title="Customize Theme"
      >
        <FaPalette className="text-white text-xl" />
        <span className="sr-only">Open Theme Customizer</span>
      </motion.button>

      {/* Panel Overlay */}
      <AnimatePresence>
        {customizerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCustomizerOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-[999] h-full w-full max-w-sm shadow-2xl overflow-y-auto"
              style={{ background: 'rgba(10,10,15,0.98)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-white/10" style={{ background: 'rgba(10,10,15,0.98)' }}>
                <div>
                  <h3 className="text-white font-bold text-lg">Theme Customizer</h3>
                  <p className="text-white/40 text-xs mt-0.5">Live preview changes</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={resetTheme}
                    className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                    whileTap={{ scale: 0.9 }}
                    title="Reset to default"
                  >
                    <FaRotateLeft />
                  </motion.button>
                  <motion.button
                    onClick={() => setCustomizerOpen(false)}
                    className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaXmark />

                  </motion.button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/10">
                {['themes', 'layout', 'colors', 'typography'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider transition-colors capitalize ${
                      activeTab === tab
                        ? 'text-white border-b-2'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                    style={activeTab === tab ? { borderColor: 'var(--color-primary)' } : {}}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 space-y-6">
                {/* Preset Themes */}
                {activeTab === 'themes' && (
                  <div className="space-y-3">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Preset Themes</p>
                    {Object.values(allThemes).map(theme => (
                      <motion.button
                        key={theme.id}
                        onClick={() => applyTheme(theme.id)}
                        className="w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left"
                        style={{
                          background: currentTheme.id === theme.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                          borderColor: currentTheme.id === theme.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${theme.preview} shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold">{theme.name}</p>
                          <p className="text-white/40 text-xs truncate">{theme.description}</p>
                        </div>
                        {currentTheme.id === theme.id && (
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-primary)' }}>
                            <FaCheck className="text-xs text-black" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Layout Switcher */}
                {activeTab === 'layout' && (
                  <div className="space-y-3">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Master Layout</p>
                    {layoutOptions.map(layout => (
                      <motion.button
                        key={layout.id}
                        onClick={() => {
                          setActiveLayout(layout.id);
                          applyTheme(layout.theme);
                        }}
                        className="w-full flex items-center gap-3 p-4 rounded-xl border transition-all text-left"
                        style={{
                          background: activeLayout === layout.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                          borderColor: activeLayout === layout.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-2xl">{layout.emoji}</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold">{layout.name}</p>
                        </div>
                        {activeLayout === layout.id && (
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-primary)' }}>
                            <FaCheck className="text-xs text-black" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Custom Colors */}
                {activeTab === 'colors' && (
                  <div className="space-y-5">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Custom Colors</p>
                    {[
                      { key: 'primary', label: 'Primary Color', icon: '🎨' },
                      { key: 'secondary', label: 'Background Color', icon: '🌑' },
                      { key: 'accent', label: 'Accent Color', icon: '✨' },
                    ].map(({ key, label, icon }) => (
                      <div key={key}>
                        <label className="flex items-center gap-2 text-white/70 text-sm mb-2">
                          <span>{icon}</span> {label}
                        </label>
                        <div className="flex items-center gap-3">
                          <input
                            type="color"
                            value={currentTheme[key]}
                            onChange={e => updateThemeProperty(key, e.target.value)}
                            className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0.5 bg-white/10"
                            style={{ outline: 'none' }}
                          />
                          <input
                            type="text"
                            value={currentTheme[key]}
                            onChange={e => {
                              if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                                updateThemeProperty(key, e.target.value);
                              }
                            }}
                            className="flex-1 input-field text-sm font-mono"
                            placeholder="#000000"
                          />
                        </div>
                      </div>
                    ))}

                    {/* Border Radius */}
                    <div>
                      <label className="text-white/70 text-sm mb-3 block">Border Radius</label>
                      <div className="grid grid-cols-5 gap-2">
                        {borderRadiusOptions.map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => updateThemeProperty('borderRadius', opt.value)}
                            className="py-2 text-xs font-medium rounded-lg border transition-all"
                            style={{
                              background: currentTheme.borderRadius === opt.value ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                              color: currentTheme.borderRadius === opt.value ? '#000' : 'rgba(255,255,255,0.6)',
                              borderColor: currentTheme.borderRadius === opt.value ? 'var(--color-primary)' : 'transparent',
                              borderRadius: opt.value,
                            }}
                          >
                            {opt.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Typography */}
                {activeTab === 'typography' && (
                  <div className="space-y-4">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Font Family</p>
                    {fontOptions.map(font => (
                      <button
                        key={font.id}
                        onClick={() => updateThemeProperty('fontHeading', font.value)}
                        className="w-full flex items-center justify-between p-3 rounded-xl border transition-all"
                        style={{
                          background: currentTheme.fontHeading === font.value ? 'rgba(255,255,255,0.08)' : 'transparent',
                          borderColor: currentTheme.fontHeading === font.value ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                        }}
                      >
                        <div className="text-left">
                          <p className="text-white text-sm font-semibold" style={{ fontFamily: font.value }}>{font.name}</p>
                          <p className="text-white/40 text-xs" style={{ fontFamily: font.value }}>
                            The quick brown fox jumps
                          </p>
                        </div>
                        {currentTheme.fontHeading === font.value && (
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 ml-2" style={{ background: 'var(--color-primary)' }}>
                            <FaCheck className="text-xs text-black" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 p-4 border-t border-white/10 text-center" style={{ background: 'rgba(10,10,15,0.98)' }}>
                <p className="text-white/30 text-xs">Settings auto-saved to browser</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
