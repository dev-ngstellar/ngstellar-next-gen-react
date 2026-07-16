import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Overview', path: '/overview' },
    { name: 'Master Plan', path: '/master-plan' },
    { name: 'Floor Plans', path: '/floor-plans' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 h-24 z-50 transition-all duration-500 bg-slate-950/80 backdrop-blur-md border-b border-[#D4AF37]/10 flex items-center"
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded border border-[#D4AF37]/30 flex items-center justify-center bg-[#0F172A]/80 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/80 transition-colors">
            <Building2 className="w-5 h-5 text-[#D4AF37] group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] font-bold text-white leading-none group-hover:text-[#D4AF37] transition-colors">
              SKYLINE
            </span>
            <span className="text-[9px] tracking-[0.4em] text-[#D4AF37] uppercase font-medium mt-1">
              Residences
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 nav-line ${isActive(link.path)
                  ? 'text-[#D4AF37] nav-line-active'
                  : 'text-slate-350 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-semibold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Schedule Tour
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-[#D4AF37] focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-24 bg-[#020617] z-45 flex flex-col p-8 border-t border-[#D4AF37]/15 animate-fade-in lg:hidden">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-[0.2em] uppercase font-bold py-2 border-b border-slate-900 ${isActive(link.path) ? 'text-[#D4AF37]' : 'text-slate-300'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="w-full block text-center py-4 bg-[#D4AF37] hover:bg-[#AA7C11] text-black font-bold text-xs tracking-[0.25em] uppercase transition-colors"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
