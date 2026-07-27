import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  PhoneCall, 
  Calendar, 
  Menu, 
  X, 
  Heart,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export const Navbar = ({ onOpenAppointment }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-lg py-3 border-b border-[var(--border)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white shadow-md shadow-[var(--primary)]/30 group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[var(--heading)] font-sans">
                AURA<span className="text-[var(--primary)]">PET</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[var(--muted-text)] font-semibold">
                Veterinary & Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--surface)]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border)] shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-[var(--primary)] text-white shadow-sm' 
                      : 'text-[var(--body-text)] hover:text-[var(--heading)] hover:bg-[var(--background)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--heading)] hover:bg-[var(--background)] transition-colors"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Emergency Phone CTA */}
            <a
              href="tel:18009997387"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border border-red-500/30 text-red-500 bg-red-500/5 hover:bg-red-500/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span>24/7 ER: (800) 999-PETS</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold shadow-md shadow-[var(--primary)]/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Visit</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--heading)]"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--heading)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[var(--border)] px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                location.pathname === link.path 
                  ? 'bg-[var(--primary)] text-white' 
                  : 'text-[var(--body-text)] hover:bg-[var(--background)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-[var(--border)] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-semibold text-center shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href="tel:18009997387"
              className="w-full py-2.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 font-semibold text-center flex items-center justify-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4 animate-pulse" />
              <span>Emergency 24/7 Care</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
