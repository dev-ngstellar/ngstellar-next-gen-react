import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold tracking-widest text-[var(--text-main)]">
          ARCHLUX
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-[var(--primary-color)] relative group ${
                location.pathname === link.path ? 'text-[var(--primary-color)]' : 'text-[var(--text-main)]'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}
              ></span>
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors text-[var(--text-main)]"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link
            to="/contact"
            className="px-6 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300 font-medium tracking-wide text-sm"
          >
            CONSULTATION
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--text-main)]"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--text-main)]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-[var(--surface-color)] border-t border-[var(--border-color)]"
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-[var(--text-main)] hover:text-[var(--primary-color)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block mt-4 px-6 py-3 bg-[var(--primary-color)] text-white text-center font-medium tracking-wide w-full"
          >
            BOOK CONSULTATION
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
