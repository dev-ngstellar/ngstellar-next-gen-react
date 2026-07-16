import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaXmark, FaPalette } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/packages', label: 'Packages' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setCustomizerOpen } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(10,10,15,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
            >
              <span style={{ color: 'var(--color-secondary)' }}>EP</span>
            </div>
            <div>
              <span
                className="text-xl font-black tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
              >
                EventPro
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? ''
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
                style={({ isActive }) => isActive ? { color: 'var(--color-primary)' } : {}}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+18000000000"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <FaPhone className="text-xs" style={{ color: 'var(--color-primary)' }} />
              <span>+1 (800) 000-0000</span>
            </a>

            <button
              onClick={() => setCustomizerOpen(true)}
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
              title="Customize Theme"
            >
              <FaPalette />
            </button>

            <Link to="/contact" className="btn-primary text-sm">
              <span>Book Event</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setCustomizerOpen(true)}
              className="p-2 rounded-lg text-white/50 hover:text-white transition-colors"
            >
              <FaPalette />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-white/70 hover:text-white transition-colors"
            >
              {mobileOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] pt-20"
            style={{ background: 'rgba(8,8,12,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="container-custom py-8 flex flex-col gap-2">
              {navLinks.map(({ path, label }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `block py-4 px-5 rounded-xl text-xl font-bold transition-all ${
                        isActive ? 'text-white' : 'text-white/50'
                      }`
                    }
                    style={({ isActive }) => isActive ? { color: 'var(--color-primary)', background: 'rgba(255,255,255,0.05)' } : {}}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <Link to="/contact" className="btn-primary w-full justify-center text-lg py-4">
                  <span>Book Your Event</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
