import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiZap } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { navbarSlide } from '../../animations/variants';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolios', to: '/portfolio' },
  { label: 'Themes', to: '/themes' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      variants={navbarSlide}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? `rgba(${activeTheme.isDark ? '11,17,32' : '255,255,255'}, 0.9)`
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'var(--color-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FiZap size={18} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-text)' }}>
            Portfolio<span style={{ color: 'var(--color-primary)' }}>Forge</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/portfolio" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Explore Templates
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--color-surface)',
              borderTop: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'block',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/portfolio" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                Explore Templates
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
