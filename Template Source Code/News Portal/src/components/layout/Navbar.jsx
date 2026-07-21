import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sun, Moon, User, Bell } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Button from '../ui/Button';

function cn(...inputs) { return twMerge(clsx(inputs)); }

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const mainCategories = ['Technology', 'Business', 'Politics', 'Science', 'Lifestyle'];

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 w-full border-b",
          isScrolled 
            ? "bg-[var(--glass-bg)] backdrop-blur-xl border-[var(--glass-border)] shadow-sm py-3" 
            : "bg-[var(--color-bg)] border-[var(--color-border)] py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Mobile Menu Toggle & Date */}
            <div className="flex items-center gap-4 flex-1">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 -ml-2 text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <div className="hidden lg:block text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <Link to="/" className="flex flex-col items-center group">
                <span className="font-serif font-black text-3xl tracking-tight text-[var(--color-text)] uppercase relative">
                  Nova<span className="text-[var(--color-primary-600)]">Press</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent-500)] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
                </span>
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center justify-end gap-2 flex-1">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={toggleTheme} className="p-2 text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-full transition-colors hidden sm:block">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="hidden sm:block w-px h-6 bg-[var(--color-border)] mx-2"></div>
              <Link to="/admin" className="hidden sm:flex items-center gap-2 p-2 text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-full transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <Button variant="primary" size="sm" className="hidden lg:flex ml-2">Subscribe</Button>
            </div>
          </div>

          {/* Bottom Navigation (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center gap-8 pt-4 pb-2">
            <Link to="/" className={cn("text-sm font-semibold uppercase tracking-wider transition-colors", location.pathname === '/' ? "text-[var(--color-primary-600)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]")}>Home</Link>
            {mainCategories.map(cat => (
              <Link key={cat} to={`/categories`} className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                {cat}
              </Link>
            ))}
            <Link to="/archive" className={cn("text-sm font-semibold uppercase tracking-wider transition-colors", location.pathname === '/archive' ? "text-[var(--color-primary-600)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]")}>Archive</Link>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]"
            >
              <div className="max-w-3xl mx-auto px-4 py-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[var(--color-text-muted)]" />
                  <input 
                    type="text" 
                    placeholder="Search articles, topics, or authors..." 
                    className="w-full pl-14 pr-4 py-4 text-lg bg-[var(--color-bg-secondary)] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] text-[var(--color-text)]"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[var(--color-text-muted)] hover:bg-[var(--color-border)] rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-[var(--color-text-muted)] mr-2">Trending:</span>
                  {['AI Revolution', 'Market Crash', 'Elections 2026'].map(tag => (
                    <span key={tag} className="text-sm text-[var(--color-primary-600)] bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)] px-2 py-0.5 rounded cursor-pointer hover:underline">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden bg-[var(--color-bg)] border-r border-[var(--color-border)] w-[85%] max-w-sm flex flex-col h-full shadow-2xl"
          >
            <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
              <span className="font-serif font-black text-2xl tracking-tight text-[var(--color-text)] uppercase">NovaPress</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)] rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Dark Mode</span>
                <button onClick={toggleTheme} className="p-2 text-[var(--color-text)] bg-[var(--color-bg-secondary)] rounded-full">
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
              
              <div className="space-y-1">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 text-lg font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-xl">Home</Link>
                {mainCategories.map(cat => (
                  <Link key={cat} to="/categories" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 text-lg font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-xl">{cat}</Link>
                ))}
                <Link to="/authors" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 text-lg font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-xl">Authors</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 text-lg font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] rounded-xl">About Us</Link>
              </div>
            </div>
            
            <div className="p-4 border-t border-[var(--color-border)]">
              <Button variant="primary" fullWidth>Subscribe Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-[55] lg:hidden bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
