import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Sun, Moon, Palette, ShieldCheck, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeCustomizerModal } from './ThemeCustomizerModal';

export const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Community' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-2xl theme-accent-bg text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition transform">
                <Building2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Sky<span className="theme-accent-text">Nest</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                  Luxury Residences
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive(link.path)
                      ? 'theme-accent-bg text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Action Toolbar */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsThemeModalOpen(true)}
                className="p-2.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition"
                title="Theme Customizer"
              >
                <Palette className="w-5 h-5" />
              </button>

              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition"
                title="Toggle Light / Dark Mode"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </button>

              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl theme-accent-bg text-white font-semibold text-sm shadow-xl shadow-teal-500/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition"
              >
                <Sparkles className="w-4 h-4 fill-white/20" />
                Launch CMS Portal
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsThemeModalOpen(true)}
                className="p-2 text-slate-600 dark:text-slate-300"
              >
                <Palette className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden p-4 border-t border-slate-200 dark:border-slate-800 glass-card bg-slate-900/95 text-white">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium text-base ${
                    isActive(link.path) ? 'theme-accent-bg text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800 text-slate-200"
                >
                  <span>Toggle Mode</span>
                  {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
                </button>

                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl theme-accent-bg text-white font-semibold text-center"
                >
                  Launch CMS Portal
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <ThemeCustomizerModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </>
  );
};
