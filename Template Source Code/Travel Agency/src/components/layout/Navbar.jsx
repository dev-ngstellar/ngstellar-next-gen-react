import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X, ChevronDown, Sparkles, Phone, Globe, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../common/ThemeToggle';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations', mega: true },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 py-3.5 shadow-2xl shadow-black/5'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary via-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-black tracking-widest text-text-bright flex items-center gap-1">
                VOYAGE<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-text-muted uppercase font-medium">
                Luxury Expeditions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.name} className="relative group/nav">
                  {link.mega ? (
                    <button
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? 'text-primary font-semibold'
                          : 'text-text-main hover:text-primary hover:bg-surface/50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                        isActive
                          ? 'text-primary font-semibold'
                          : 'text-text-main hover:text-primary hover:bg-surface/50'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-white/90 group-hover:rotate-12 transition-transform" />
              <span>Book Expedition</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-panel text-text-main hover:text-primary focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            onMouseLeave={() => setMegaMenuOpen(false)}
            className="hidden md:block absolute top-full left-0 right-0 max-w-6xl mx-auto px-4 mt-2"
          >
            <div className="glass-panel p-6 rounded-3xl shadow-2xl border border-border/80 backdrop-blur-2xl grid grid-cols-3 gap-6 bg-surface/90">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm tracking-wider uppercase">
                  <Globe className="w-4 h-4" /> Top Destinations
                </div>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/destinations" className="text-text-muted hover:text-primary transition-colors flex items-center justify-between">Maldives Private Atolls <span className="text-xs text-gold">4.98★</span></Link></li>
                  <li><Link to="/destinations" className="text-text-muted hover:text-primary transition-colors flex items-center justify-between">Santorini & Mykonos <span className="text-xs text-gold">4.96★</span></Link></li>
                  <li><Link to="/destinations" className="text-text-muted hover:text-primary transition-colors flex items-center justify-between">Swiss Alps & Zermatt <span className="text-xs text-gold">4.99★</span></Link></li>
                  <li><Link to="/destinations" className="text-text-muted hover:text-primary transition-colors flex items-center justify-between">Kyoto Zen Gardens <span className="text-xs text-gold">4.97★</span></Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm tracking-wider uppercase">
                  <Award className="w-4 h-4" /> Travel Collections
                </div>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/packages" className="text-text-muted hover:text-primary transition-colors">Ultra Luxury Overwater</Link></li>
                  <li><Link to="/packages" className="text-text-muted hover:text-primary transition-colors">Honeymoon & Romantic Getaways</Link></li>
                  <li><Link to="/packages" className="text-text-muted hover:text-primary transition-colors">Private Wildlife Safaris</Link></li>
                  <li><Link to="/packages" className="text-text-muted hover:text-primary transition-colors">Heliskiing & Polar Voyages</Link></li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden group p-4 flex flex-col justify-end min-h-[160px] bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
                <img
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
                  alt="Mega Menu Offer"
                  className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="text-[10px] font-bold tracking-widest text-gold uppercase">Featured Escapes</span>
                <h4 className="text-white font-heading font-bold text-base leading-tight mt-1">Summer Solstice 25% Off</h4>
                <Link to="/packages" className="mt-2 text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  Explore Package Offer &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-border mt-3 mx-4 rounded-3xl overflow-hidden shadow-2xl bg-surface/95"
          >
            <div className="p-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-text-main hover:bg-surface'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-hover text-white text-center font-bold shadow-lg shadow-primary/25"
                >
                  Book Expedition Now
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                  <Phone className="w-3.5 h-3.5 text-primary" /> 24/7 VIP Travel Desk: +1 (800) VOYAGE-VIP
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
