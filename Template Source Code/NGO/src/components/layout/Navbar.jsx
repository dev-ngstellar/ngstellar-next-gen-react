import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Programs', path: '/programs' },
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30"
          >
            <Heart size={20} fill="currentColor" />
          </motion.div>
          <span className="font-bold text-xl tracking-tight">
            Lumora <span className="text-primary font-normal">Foundation</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'relative text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-card-hover transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link
            to="/donate"
            className="group relative px-6 py-2.5 rounded-full bg-primary text-white font-medium overflow-hidden shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Heart size={16} /> Donate Now
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-border p-4 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  'p-3 rounded-lg text-base font-medium transition-colors',
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-card-hover'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-border my-2"></div>
            <div className="flex items-center justify-between p-3">
              <span className="font-medium">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-card hover:bg-card-hover transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <Link
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-2"
            >
              <Heart size={18} /> Donate Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
