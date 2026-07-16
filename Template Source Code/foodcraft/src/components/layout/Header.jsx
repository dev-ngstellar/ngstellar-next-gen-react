import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Menu', path: '/menu' },
    { name: 'Chef Specials', path: '/chef-specials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-24 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center text-[#111827]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 group-hover:border-[#EAB308] transition-colors">
            <UtensilsCrossed className="w-4.5 h-4.5 text-[#EAB308] group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.2em] font-extrabold text-[#111827] leading-none">
              FOOD<span className="text-[#EAB308]">CRAFT</span>
            </span>
            <span className="text-[8px] tracking-[0.45em] text-[#6B7280] uppercase font-bold mt-1">
              Modern Luxury
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] tracking-[0.25em] uppercase font-bold transition-colors duration-300 relative py-1 ${
                isActive(link.path) 
                  ? 'text-[#EAB308]' 
                  : 'text-slate-550 hover:text-[#111827]'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#EAB308]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden lg:block">
          <Link
            to="/reservations"
            className="px-6 py-2.5 border border-[#EAB308] hover:bg-[#EAB308] hover:text-white text-[#EAB308] font-bold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 rounded-sm hover:shadow-[0_4px_12px_rgba(234,179,8,0.15)]"
          >
            Reserve Table
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-700 hover:text-[#EAB308] focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-24 bg-white z-40 flex flex-col p-8 border-t border-gray-150 animate-fade-in lg:hidden">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs tracking-[0.2em] uppercase font-bold py-3 border-b border-gray-100 ${
                  isActive(link.path) ? 'text-[#EAB308]' : 'text-[#6B7280]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/reservations"
              className="w-full block text-center py-4 bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold text-xs tracking-[0.25em] uppercase transition-colors"
            >
              Book A Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
