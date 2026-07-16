import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, Palette } from 'lucide-react';
import { navLinks } from '../../utils/data';
import { useTheme } from '../../theme/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themePanel, setThemePanel] = useState(false);
  const { activeTheme, setActiveTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(11, 18, 32, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center animate-pulse-glow"
              style={{ background: 'var(--primary)' }}
            >
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-2xl text-white tracking-wider group-hover:text-gradient transition-all duration-300">
              GymForge
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                      style={{
                        background: 'var(--primary)',
                        width: isActive ? '100%' : '0%',
                      }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: 'var(--primary)', opacity: isActive ? 0 : 0.6 }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemePanel(!themePanel)}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                title="Switch Theme"
              >
                <Palette className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {themePanel && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 glass-dark rounded-xl p-3 flex flex-col gap-2 min-w-[140px]"
                  >
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setActiveTheme(t.id); setThemePanel(false); }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeTheme === t.id ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ background: t.color, boxShadow: activeTheme === t.id ? `0 0 8px ${t.color}` : 'none' }}
                        />
                        {t.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/membership">
              <button className="btn-primary text-sm py-3 px-6">
                <span>Join Now</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 glass rounded-lg flex items-center justify-center text-white"
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
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 glass-dark flex flex-col p-6 lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                    <Flame className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display text-xl text-white tracking-wider">GymForge</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
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
                    transition={{ delay: i * 0.07 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'text-white bg-white/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Switcher Mobile */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 px-4">Theme</p>
                <div className="flex gap-2 px-4">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTheme(t.id)}
                      className="w-8 h-8 rounded-full border-2 transition-all duration-200"
                      style={{
                        background: t.color,
                        borderColor: activeTheme === t.id ? 'white' : 'transparent',
                        boxShadow: activeTheme === t.id ? `0 0 12px ${t.color}` : 'none',
                      }}
                      title={t.label}
                    />
                  ))}
                </div>
              </div>

              <Link to="/membership" onClick={() => setMenuOpen(false)}>
                <button className="btn-primary w-full justify-center">
                  <span>Join Now</span>
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
