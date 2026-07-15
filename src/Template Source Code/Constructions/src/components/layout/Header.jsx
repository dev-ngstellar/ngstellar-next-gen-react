import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { MdMenu, MdClose, MdPhone, MdKeyboardArrowDown } from 'react-icons/md';

const Header = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white border-b border-border ${
        isScrolled ? 'shadow-md py-4' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-xl shadow-lg transition-transform group-hover:scale-105">
            C
          </div>
          <span className="text-xl font-extrabold tracking-tight text-text-primary">
            CONSTRUCT<span className="text-primary">INFRA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            if (link.megaMenu) {
              return (
                <div
                  key={link.label}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveMegaMenu(true)}
                  onMouseLeave={() => setActiveMegaMenu(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors text-sm ${
                      isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <MdKeyboardArrowDown className="text-base group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Mega Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white border border-border rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50">
                    {link.megaMenu.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.path}
                        className="p-3 rounded-lg hover:bg-slate-50 transition-colors text-left"
                      >
                        <div className="text-sm font-semibold text-text-primary hover:text-primary">
                          {subLink.label}
                        </div>
                        <div className="text-xs text-text-secondary mt-1">
                          {subLink.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`font-medium transition-colors text-sm ${
                  isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Area */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 font-semibold text-sm text-text-primary hover:text-primary transition-colors"
          >
            <MdPhone className="text-primary text-lg" />
            <span>{siteConfig.phone}</span>
          </a>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Get Quote
          </button>
          <ThemeSwitcher />
        </div>

        {/* Mobile Actions and Hamburger */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-text-primary hover:bg-slate-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white border-t border-border z-30 lg:hidden flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <div key={link.label} className="flex flex-col">
                <Link
                  to={link.path}
                  className={`text-lg font-bold ${
                    location.pathname === link.path ? 'text-primary' : 'text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
                {link.megaMenu && (
                  <div className="mt-2 pl-4 border-l-2 border-primary/20 flex flex-col gap-2">
                    {link.megaMenu.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.path}
                        className="text-sm font-medium text-text-secondary hover:text-primary py-1"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="h-px bg-border my-2" />

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 font-semibold text-text-primary py-2"
            >
              <MdPhone className="text-primary text-xl" />
              <span>{siteConfig.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-center shadow-md cursor-pointer"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
