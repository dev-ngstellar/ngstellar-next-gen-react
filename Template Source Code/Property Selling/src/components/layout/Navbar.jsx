import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../config/themes';
import { siteConfig } from '../../data/siteConfig';
import { FiPhone, FiCalendar, FiMenu, FiX, FiCheck, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { currentTheme, selectTheme, themes } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setThemeDropdownOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-theme-nav shadow-lg border-b border-white/10 backdrop-blur-md py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand (Neutral / Elegant) */}
          <Link to="/" className="flex items-center space-x-2">
            <span 
              className="text-2xl font-bold tracking-tight uppercase"
              style={{ color: currentTheme.primary }}
            >
              VISTA
              <span className="text-white font-light lowercase">.estate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-theme-primary'
                    : currentTheme.isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-theme-primary'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Area & Theme Switched */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Call button */}
            <a
              href={`tel:${siteConfig.contactInfo.phone}`}
              className={`flex items-center space-x-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white`}
            >
              <FiPhone className="text-base" />
              <span>Call</span>
            </a>

            {/* Consultation button */}
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white bg-theme-primary hover:opacity-90 transition-all duration-200 shadow-md shadow-black/10 hover:shadow-black/20"
            >
              <FiCalendar className="text-base" />
              <span>Schedule Consultation</span>
            </Link>

            {/* Theme Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={`flex items-center space-x-1.5 p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  currentTheme.isDark
                    ? 'border-white/20 text-slate-300 hover:bg-white/10'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ backgroundColor: currentTheme.primary }}
                />
                <FiChevronDown className={`text-sm transition-transform duration-200 ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-56 rounded-2xl bg-white border border-slate-100 shadow-xl overflow-hidden py-2 z-50"
                  >
                    <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Select Theme
                    </div>
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          selectTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-3.5 h-3.5 rounded-full"
                            style={{ backgroundColor: t.primary }}
                          />
                          <span className={currentTheme.id === t.id ? 'font-semibold' : ''}>
                            {t.name}
                          </span>
                        </div>
                        {currentTheme.id === t.id && (
                          <FiCheck className="text-slate-900" style={{ color: currentTheme.primary }} />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Hamburguer & Theme Switcher */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Quick Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={`p-2 rounded-full border transition-all duration-200 ${
                  currentTheme.isDark
                    ? 'border-white/20 text-white'
                    : 'border-slate-200 text-slate-700'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: currentTheme.primary }}
                />
              </button>
              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-48 rounded-xl bg-white border border-slate-100 shadow-xl overflow-hidden py-1 z-50"
                  >
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          selectTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.primary }} />
                        <span className="text-xs">{t.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-all duration-200 ${
                currentTheme.isDark
                  ? 'border-white/20 text-white'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-b border-white/10 text-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2.5 px-4 rounded-xl text-base font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3 px-4">
                <a
                  href={`tel:${siteConfig.contactInfo.phone}`}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/5"
                >
                  <FiPhone />
                  <span>Call Advisory</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-theme-primary text-white text-sm font-semibold hover:opacity-90 shadow-md"
                >
                  <FiCalendar />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
