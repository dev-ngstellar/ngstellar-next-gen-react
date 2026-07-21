import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, X, Moon, Sun, Search, User } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Find Jobs', path: '/jobs' },
    { name: 'Companies', path: '/employers' },
    { name: 'Candidates', path: '/candidates' },
    { name: 'Pricing', path: '/pricing' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center text-white shadow-lg shadow-[var(--color-primary-500)]/20 group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="font-serif font-black text-xl tracking-tight">Talent<span className="text-[var(--color-primary-500)]">Bridge</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-primary-500)] ${location.pathname === link.path ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text)]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)] transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="h-6 w-px bg-[var(--color-border)] mx-1"></div>
            <Link to="/login" className="text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-primary-500)] transition-colors">Log In</Link>
            <Button variant="primary" size="md">Post a Job</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-[var(--color-text)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-t border-[var(--color-border)] p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-base font-bold p-3 rounded-xl hover:bg-[var(--color-bg-secondary)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-[var(--color-border)] my-2"></div>
          <Button variant="primary" fullWidth>Post a Job</Button>
          <Button variant="outline" fullWidth>Log In</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
