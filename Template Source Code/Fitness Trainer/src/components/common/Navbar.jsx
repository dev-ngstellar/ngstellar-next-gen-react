import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, Palette, Sun, Moon } from 'lucide-react';
import { navLinks } from '../../utils/data';
import { useTheme } from '../../theme/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themePanel, setThemePanel] = useState(false);
  const { activeColor, setActiveColor, colorThemes, isDark, toggleMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8, 11, 16, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container-custom flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
            >
              <Dumbbell className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="font-display font-bold text-xl tracking-tight"
              style={{ color: 'var(--text)' }}
            >
              Elite<span style={{ color: 'var(--primary)' }}>Fit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                      style={{
                        background: 'var(--primary)',
                        width: isActive ? '100%' : '0%',
                        boxShadow: isActive ? '0 0 8px var(--glow)' : 'none',
                      }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: 'var(--primary)', opacity: isActive ? 0 : 0.5 }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleMode}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10"
              title="Toggle Theme Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Color Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemePanel(!themePanel)}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10"
                title="Switch Color"
              >
                <Palette className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {themePanel && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 glass-dark rounded-2xl p-3 min-w-[160px] shadow-2xl"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">Color</p>
                    {colorThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setActiveColor(t.id); setThemePanel(false); }}
                        className={`flex items-center gap-2.5 w-full px-2 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeColor === t.id ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                          style={{
                            background: t.color,
                            boxShadow: activeColor === t.id ? `0 0 10px ${t.color}` : 'none',
                          }}
                        />
                        {t.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link to="/contact">
              <button className="btn-primary py-2.5 px-5 text-sm">
                Book Free Session
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 glass rounded-xl flex items-center justify-center text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 glass-dark flex flex-col p-6 lg:hidden"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}>
                    <Dumbbell className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
                    Elite<span style={{ color: 'var(--primary)' }}>Fit</span>
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
                          isActive
                            ? 'text-white bg-white/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ background: 'var(--primary)' }} />
                          )}
                          {link.label}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Controls */}
              <div className="mb-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 px-4">Appearance</p>
                <div className="flex items-center gap-3 px-4">
                  <button
                    onClick={toggleMode}
                    className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-2.5 text-sm text-gray-400 hover:text-white transition-all"
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {isDark ? 'Light' : 'Dark'}
                  </button>
                </div>
                <div className="flex gap-2 px-4 mt-3">
                  {colorThemes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveColor(t.id)}
                      className="w-8 h-8 rounded-full border-2 transition-all duration-200"
                      style={{
                        background: t.color,
                        borderColor: activeColor === t.id ? 'white' : 'transparent',
                        boxShadow: activeColor === t.id ? `0 0 12px ${t.color}` : 'none',
                      }}
                      title={t.label}
                    />
                  ))}
                </div>
              </div>

              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <button className="btn-primary w-full justify-center">
                  Book Free Session
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
