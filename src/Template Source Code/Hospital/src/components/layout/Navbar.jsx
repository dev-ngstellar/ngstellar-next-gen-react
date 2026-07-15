import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSpecialty } from '../../hooks/useSpecialty';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaBars, FaTimes, FaBriefcaseMedical } from 'react-icons/fa';
import Button from '../common/Button';

const Navbar = () => {
  const { activeConfig } = useSpecialty();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      scrolled 
        ? 'glass-card bg-white/80 py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 z-10 group select-none">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 transition-transform group-hover:rotate-12">
            <FaBriefcaseMedical size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base md:text-lg tracking-tight text-dark leading-none">
              {activeConfig.name.split(' ')[0]}
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
              {activeConfig.type}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-semibold text-sm transition-colors relative py-1 select-none hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="navUnderline" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side: Emergency & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href={`tel:${activeConfig.emergencyNumber}`} 
            className="flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">
              <FaPhoneAlt />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Emergency</span>
              <span className="text-sm">{activeConfig.emergencyNumber}</span>
            </div>
          </a>
          <Link to="/contact">
            <Button variant="primary" showIcon={true}>Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-dark p-2 hover:bg-gray-100 rounded-lg transition-colors z-10 cursor-pointer"
        >
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `font-bold text-base transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-gray-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="relative h-[1px] w-full bg-gray-100" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a 
                href={`tel:${activeConfig.emergencyNumber}`} 
                className="flex items-center gap-3 text-primary font-bold"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaPhoneAlt size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Emergency Helpline</span>
                  <span className="text-base">{activeConfig.emergencyNumber}</span>
                </div>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="primary" showIcon={true} className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
