import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter" onClick={closeMenu}>
            Alex<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-sm font-medium transition-colors hover:text-white"
                  style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-primary text-background font-medium text-sm transition-transform hover:scale-105 active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6"
          >
            <div className="absolute top-0 left-0 w-full h-20 px-6 flex items-center justify-between border-b border-white/5">
              <Link to="/" className="text-2xl font-bold tracking-tighter" onClick={closeMenu}>
                Alex<span className="text-accent">.</span>
              </Link>
              <button onClick={closeMenu} className="text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-8 mt-12">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-3xl font-bold ${isActive ? 'text-accent' : 'text-text-secondary'} hover:text-white transition-colors`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-8 px-8 py-4 rounded-full bg-primary text-background font-bold text-center text-lg active:scale-95 transition-transform"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
