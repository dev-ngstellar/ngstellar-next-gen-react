import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Phone, ShieldCheck, Sun, Moon, Menu, X, Clock, FileText, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricianData';
import { useTheme } from '../context/ThemeContext';

export const Header = ({ onOpenQuoteModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-[var(--border-color)]">
      
      {/* Top 24/7 Emergency Dispatch Alert Bar */}
      <div className="bg-[var(--color-primary)] text-slate-950 px-4 py-2 text-xs font-bold flex items-center justify-between shadow-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="uppercase tracking-wider font-mono">24/7 Emergency Service Dispatch</span>
            <span className="hidden md:inline">• Guaranteed On-Site Response Under 30 Mins</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`tel:${COMPANY_INFO.emergencyPhone}`} className="hover:underline flex items-center space-x-1 font-mono">
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span>EMERGENCY: {COMPANY_INFO.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-amber-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform glow-amber">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[var(--color-primary)] fill-[var(--color-primary)] animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[var(--text-heading)] font-mono">
                VOLTAGE<span className="text-[var(--color-primary)]">PRO</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)] font-mono">
                Electrical Systems
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-[var(--bg-card)] px-4 py-1.5 rounded-full border border-[var(--border-color)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  isActive(link.path)
                    ? 'bg-[var(--color-primary)] text-slate-950 shadow-md font-extrabold'
                    : 'text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] hover:border-[var(--color-primary)] transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </button>

            <button
              onClick={() => onOpenQuoteModal(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-amber-600 text-slate-950 text-xs font-bold shadow-lg hover:opacity-90 transition-all flex items-center space-x-2 glow-amber"
            >
              <FileText className="w-4 h-4 fill-slate-950" />
              <span>Get Free Estimate</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-heading)]">
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-heading)]">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-bold rounded-xl ${
                  isActive(link.path)
                    ? 'bg-[var(--color-primary)] text-slate-950'
                    : 'text-[var(--text-body)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal(true);
              }}
              className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-slate-950 text-xs font-bold"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
