import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Calendar } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
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

  // Close mobile menu when page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, path, sectionId) => {
    if (location.pathname === '/' && sectionId) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionId) {
      e.preventDefault();
      navigate('/');
      // Wait for page load then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const activeClassName = ({ isActive }) =>
    `relative py-2 text-sm tracking-[0.15em] uppercase transition-colors duration-300 font-medium ${
      isActive
        ? 'text-[#c5a880] line-reveal-active'
        : isScrolled
        ? 'text-[#1a1a1a] hover:text-[#c5a880] line-reveal'
        : 'text-white hover:text-[#c5a880] line-reveal'
    }`;

  const inactiveClassNameNonRouter =
    `relative py-2 text-sm tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 font-medium ${
      isScrolled
        ? 'text-[#1a1a1a] hover:text-[#c5a880] line-reveal'
        : 'text-white hover:text-[#c5a880] line-reveal'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'luxury-glass py-4 shadow-md'
          : 'bg-gradient-to-b from-[#1a1a1a]/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Crown className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-[#c5a880]' : 'text-white group-hover:text-[#c5a880]'}`} />
          <span
            className={`font-serif text-2xl tracking-[0.05em] transition-colors duration-300 ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white group-hover:text-[#c5a880]'
            }`}
          >
            ROYAL STAY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <NavLink to="/" className={activeClassName}>
            Home
          </NavLink>
          <NavLink to="/rooms" className={activeClassName}>
            Rooms
          </NavLink>
          <a
            href="#amenities"
            onClick={(e) => handleNavClick(e, '/', 'amenities')}
            className={inactiveClassNameNonRouter}
          >
            Amenities
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, '/', 'gallery')}
            className={inactiveClassNameNonRouter}
          >
            Gallery
          </a>
          <NavLink to="/contact" className={activeClassName}>
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/rooms"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-none text-xs font-semibold tracking-[0.2em] uppercase border transition-all duration-500 ${
              isScrolled
                ? 'border-[#c5a880] bg-[#c5a880] text-white hover:bg-transparent hover:text-[#c5a880]'
                : 'border-white text-white hover:bg-white hover:text-[#1a1a1a]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-1 text-[#c5a880] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-[#1a1a1a]/95 backdrop-blur-lg flex flex-col justify-between py-12 px-8 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <NavLink
            to="/"
            className="text-2xl font-serif text-white hover:text-[#c5a880] tracking-wide"
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className="text-2xl font-serif text-white hover:text-[#c5a880] tracking-wide"
          >
            Rooms
          </NavLink>
          <a
            href="#amenities"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleNavClick(e, '/', 'amenities');
            }}
            className="text-2xl font-serif text-white hover:text-[#c5a880] tracking-wide"
          >
            Amenities
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleNavClick(e, '/', 'gallery');
            }}
            className="text-2xl font-serif text-white hover:text-[#c5a880] tracking-wide"
          >
            Gallery
          </a>
          <NavLink
            to="/contact"
            className="text-2xl font-serif text-white hover:text-[#c5a880] tracking-wide"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <Link
            to="/rooms"
            className="w-full text-center px-6 py-4 bg-[#c5a880] text-white text-sm font-semibold tracking-[0.2em] uppercase border border-[#c5a880] hover:bg-transparent hover:text-[#c5a880] transition-all duration-300"
          >
            Book Your Room
          </Link>
          <div className="text-center text-xs text-white/50 tracking-widest uppercase">
            24/7 Support: +1 (800) Royal Stay
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
