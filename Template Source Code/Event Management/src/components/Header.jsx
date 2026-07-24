import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Sun, Moon, Search, Command, Menu, X, LayoutDashboard, Calendar, Layers, Image, User, Mail, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header = ({ onOpenCommand }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[var(--color-primary)] animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[var(--text-heading)]">
                STELLAR<span className="text-[var(--color-primary)]">EVENTS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)] font-mono">
                Experience Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-[var(--bg-card)] px-4 py-1.5 rounded-full border border-[var(--border-color)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive(link.path)
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Portal CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => onOpenCommand(true)}
              className="flex items-center space-x-2 px-3 py-2 text-xs text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--color-primary)] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface)] text-[10px] rounded border border-[var(--border-color)] font-mono">
                Ctrl K
              </kbd>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] hover:border-[var(--color-primary)] transition-colors"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Admin SaaS Dashboard CTA */}
            <Link
              to="/admin"
              className="flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>SaaS Admin Portal</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-heading)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-heading)]"
            >
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
                className={`px-4 py-2.5 text-sm font-medium rounded-xl ${
                  isActive(link.path)
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--text-body)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[var(--border-color)] flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCommand(true);
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 text-xs text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl"
            >
              <Search className="w-4 h-4" />
              <span>Search Palette (Ctrl + K)</span>
            </button>

            <Link
              to="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Launch SaaS Admin Portal</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
