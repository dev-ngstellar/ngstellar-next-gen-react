import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { academyData } from '../../data/academy';
import { navigationData } from '../../data/navigation';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101214]/95 backdrop-blur-md border-b border-[#282523] py-4 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#101214]/95 via-[#101214]/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#C99683] rounded-lg p-1">
            <img
              src={academyData.logo}
              alt={academyData.name}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                {academyData.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#A39E98] uppercase font-sans">
                {academyData.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Visible on Large Tablet/Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationData.mainNav.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-all duration-200 relative py-1 ${
                    isActive ? 'text-[#C99683]' : 'text-[#A39E98] hover:text-[#F7F4F0]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C99683] rounded-full shadow-sm shadow-[#C99683]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button to={navigationData.headerCta.href} variant="primary" size="sm" className="group whitespace-nowrap">
              <span>{navigationData.headerCta.label}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile/Tablet Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#A39E98] hover:text-[#F7F4F0] hover:bg-[#151719] focus:outline-none focus:ring-2 focus:ring-[#C99683]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#101214]/98 backdrop-blur-xl border-b border-[#282523] px-4 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navigationData.mainNav.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wider whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-[#151719] text-[#C99683] border border-[#C99683]/30'
                      : 'text-[#A39E98] hover:bg-[#151719] hover:text-[#F7F4F0]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#282523]">
            <Button to={navigationData.headerCta.href} variant="primary" size="md" className="w-full">
              <span>{navigationData.headerCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
