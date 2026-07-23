import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Sun, Moon, Search, Menu, X, ArrowUpRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenTrackModal, onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-glass backdrop-blur-xl border-b border-surface-glassBorder shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-400 p-[1px] shadow-glow">
            <div className="w-full h-full bg-surface-bg rounded-[11px] flex items-center justify-center text-brand-500 group-hover:text-white transition-colors">
              <Box className="w-5 h-5 text-brand-500 transform group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold font-heading tracking-tight text-white flex items-center gap-1">
              Cargo<span className="text-brand-500">Flow</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold -mt-1">
              Global Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-surface-border">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-brand-500 shadow-glow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-surface-card border border-surface-border text-slate-300 hover:text-white hover:border-brand-500/50 transition-all"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Quick Track Button */}
          <button
            onClick={onOpenTrackModal}
            className="px-3.5 py-2 rounded-xl bg-surface-card border border-surface-border text-xs font-semibold text-slate-200 hover:border-brand-500 hover:text-white transition-all flex items-center gap-2"
          >
            <Search className="w-3.5 h-3.5 text-brand-500" />
            <span>Track Waybill</span>
          </button>

          {/* Request Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-glow flex items-center gap-1.5"
          >
            <span>Get Free Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface-card border border-surface-border text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-card border border-surface-border text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-card border-b border-surface-border px-4 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'bg-brand-500 text-white'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-surface-border flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTrackModal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-surface-bg border border-surface-border text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-brand-500" />
                  Track Waybill Number
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3 rounded-xl bg-brand-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-glow"
                >
                  Get Instant Freight Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
