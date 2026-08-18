import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { routesConfig } from '../../config/routesConfig';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Weddings', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const rawPhone = siteConfig.contact.phone.replace(/[^0-9+]/g, '');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-card py-3 sm:py-3.5 border-b border-accent/20'
          : 'bg-background/85 backdrop-blur-md shadow-soft py-4 sm:py-4.5 border-b border-accent/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src={siteConfig.brand.logo}
              alt={siteConfig.brand.name}
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-wide text-text leading-tight group-hover:text-primary transition-colors whitespace-nowrap">
                {siteConfig.brand.name}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-accent leading-tight whitespace-nowrap">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= 1024px) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all py-1 relative font-semibold ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-text/85 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop/Tablet CTA Action Group (>= 768px) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0">
            <a
              href={`tel:${rawPhone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-text/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <Button
              to={routesConfig.planWedding}
              variant="primary"
              size="sm"
              className="whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Plan Your Wedding
            </Button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle (< 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text hover:text-primary focus:outline-none cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer Menu (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-xl border-b border-accent/30 px-6 pt-5 pb-8 space-y-5 shadow-2xl text-text animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] py-3 border-b border-secondary/60 transition-colors ${
                    isActive
                      ? 'text-primary font-bold pl-3 border-l-2 border-l-primary'
                      : 'text-text/90 hover:text-primary font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${rawPhone}`}
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-mutedText font-semibold py-3 bg-secondary/50 border border-secondary"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <Button to={routesConfig.planWedding} variant="primary" fullWidth size="md">
              Plan Your Wedding
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};


