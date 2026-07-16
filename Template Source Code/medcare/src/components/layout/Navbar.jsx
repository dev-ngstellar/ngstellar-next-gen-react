import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse, Calendar } from 'lucide-react';

const Navbar = () => {
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

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Book Appointment', path: '/booking' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md border-b border-slate-100 py-3.5' 
        : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100/50'
    }`}>
      
      {/* Upper Announcement Emergency Bar */}
      <div className="bg-slate-900 text-white text-[11px] font-light py-1 px-6 lg:px-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <span className="hidden sm:inline">🏥 Welcome to MedCare Specialist Clinics & Hospital Group</span>
        <div className="flex gap-4.5 items-center justify-between w-full sm:w-auto">
          <span className="text-rose-400 font-semibold flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 animate-pulse text-rose-500 fill-rose-500/20" />
            24/7 Emergency helpline: 1-800-555-9999
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center mt-6">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow shadow-sky-500/20 group-hover:bg-sky-600 transition-colors">
            <HeartPulse className="w-5 h-5" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-slate-900">
            Med<span className="text-emerald-500 group-hover:text-emerald-600 transition-colors">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isActive 
                    ? 'text-sky-500' 
                    : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Call To Action */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-sky-500/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Slot
          </Link>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-slate-600 hover:text-sky-500 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 flex flex-col py-6 px-6 gap-4 shadow-xl animate-[fade-in_0.2s_ease-out_forwards]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                  isActive 
                    ? 'text-sky-500' 
                    : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/booking"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-3 text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow shadow-sky-500/10"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
