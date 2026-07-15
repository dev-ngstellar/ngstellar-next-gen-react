import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Lock, Settings } from 'lucide-react';

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

  // Close mobile drawer on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/courses' },
    { name: 'Teachers', path: '/faculty' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' }
  ];

  // Hide Navbar if on student portal or admin dashboards
  const isDashboardRoute = location.pathname.startsWith('/student') || location.pathname.startsWith('/admin');
  if (isDashboardRoute) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md border-b border-slate-100 py-3.5' 
        : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-violet-650 flex items-center justify-center text-white shadow shadow-violet-500/20 group-hover:bg-violet-750 transition-colors">
            <GraduationCap className="w-5.5 h-5.5" />
          </div>
          <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-slate-900">
            Smart<span className="text-amber-500 group-hover:text-amber-600 transition-colors">Kids School</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/courses' && location.pathname.startsWith('/course/'));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isActive 
                    ? 'text-violet-600 font-bold' 
                    : 'text-slate-650 hover:text-violet-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Portal Entry Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/student/login"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs tracking-wider uppercase rounded transition-colors"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            Parent Login
          </Link>
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-violet-500/10"
          >
            <Settings className="w-3.5 h-3.5" />
            Admin Panel
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-slate-650 hover:text-violet-600 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
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
                    ? 'text-violet-600 font-bold' 
                    : 'text-slate-650 hover:text-violet-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
            <Link
              to="/student/login"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-center py-2.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              Parent Portal
            </Link>
            <Link
              to="/admin/dashboard"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white text-center py-2.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
