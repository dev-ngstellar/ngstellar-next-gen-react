import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Moon, Sun, Menu, X, PhoneCall, ChevronRight, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'About Firm', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[var(--nav-bg)] backdrop-blur-xl shadow-luxury border-b border-[var(--color-card-border)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A34B] to-[#9A661F] p-[1px] flex items-center justify-center shadow-gold-glow">
                <div className="w-full h-full bg-slate-950 dark:bg-slate-900 rounded-[7px] flex items-center justify-center transition-transform group-hover:scale-95 duration-300">
                  <Scale className="w-5 h-5 text-[#D4A34B]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[var(--color-heading)] flex items-center gap-1.5">
                  VANCE <span className="text-[#D4A34B] font-light">&</span> STERLING
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase font-semibold">
                  Attorneys at Law
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[var(--glass-bg)] backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--glass-border)] shadow-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-[#D4A34B]'
                        : 'text-[var(--color-body)] hover:text-[var(--color-heading)]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#D4A34B]/10 rounded-full border border-[#D4A34B]/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] flex items-center justify-center text-[var(--color-heading)] transition-all duration-200"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#D4A34B]" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {/* Consultation Button */}
              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider text-slate-950 uppercase transition-all duration-300 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] hover:shadow-gold-glow hover:scale-[1.02] active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-2 text-slate-900 group-hover:rotate-12 transition-transform" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-heading)]"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D4A34B]" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[var(--color-heading)] hover:bg-[var(--color-surface-hover)] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-2xl p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between py-2.5 border-b border-[var(--color-border)]/50 text-base font-serif font-medium ${
                    location.pathname === link.path ? 'text-[#D4A34B]' : 'text-[var(--color-heading)]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--color-muted)]" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold tracking-widest text-slate-950 uppercase rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] flex items-center justify-center gap-2 shadow-gold-glow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
