import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Home, Building2, Factory, BatteryCharging, Wrench, Zap } from 'lucide-react';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';
import { Container } from './Container';
import { Button } from './Button';

const serviceIconMap = {
  residential: Home,
  commercial: Building2,
  industrial: Factory,
  battery: BatteryCharging,
  maintenance: Wrench,
  'ev-charging': Zap,
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (targetPath) => {
    setDropdownOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
    navigate(targetPath);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5 lg:py-4'
          : 'bg-white border-b border-slate-100 py-4 lg:py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
            <img
              src={companyData.logo}
              alt={`${companyData.name} Logo`}
              className="h-10 lg:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#f0771a] transition-colors leading-tight">
                {companyData.name}
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#f0771a] -mt-0.5">
                Solar Energy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navigationData.navLinks.map((link) => {
              const isActive = location.pathname === link.path && (!location.hash || link.path !== '/services');

              if (link.hasDropdown) {
                const isServicesActive = location.pathname === '/services';

                return (
                  <div key={link.path} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isServicesActive || dropdownOpen
                          ? 'text-[#f0771a] bg-orange-50/80 font-bold'
                          : 'text-slate-700 hover:text-[#f0771a] hover:bg-slate-50'
                      }`}
                      aria-expanded={dropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#f0771a]' : ''}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {dropdownOpen && (
                      <div
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1">
                          Solar Clean Energy Solutions
                        </div>
                        <div className="space-y-1">
                          {navigationData.footerLinks.services.map((item) => {
                            const IconComp = serviceIconMap[item.id] || Zap;
                            const isItemActive = location.pathname === '/services' && location.hash === `#${item.id}`;

                            return (
                              <button
                                key={item.id}
                                onClick={() => handleServiceClick(item.path)}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-3 group cursor-pointer ${
                                  isItemActive
                                    ? 'bg-orange-50 text-[#f0771a] font-bold'
                                    : 'hover:bg-slate-50 text-slate-700 hover:text-[#f0771a]'
                                }`}
                              >
                                <div className={`p-2 rounded-lg transition-colors ${isItemActive ? 'bg-orange-100 text-[#f0771a]' : 'bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-[#f0771a]'}`}>
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold">{item.label}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-2 pt-2 border-t border-slate-100 text-center">
                          <button
                            onClick={() => handleServiceClick('/services')}
                            className="text-xs font-bold text-[#f0771a] hover:underline inline-flex items-center gap-1 py-1"
                          >
                            <span>View All Services Portfolio</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#f0771a] bg-orange-50/80 font-bold'
                      : 'text-slate-700 hover:text-[#f0771a] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#f0771a] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button to={navigationData.ctaButton.path} variant="primary" size="md" icon={ArrowRight}>
              {navigationData.ctaButton.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-[#f0771a] hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 mb-5">
            {navigationData.navLinks.map((link) => {
              const isActive = location.pathname === link.path && (!location.hash || link.path !== '/services');

              if (link.hasDropdown) {
                return (
                  <div key={link.path} className="space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                        location.pathname === '/services'
                          ? 'bg-orange-50 text-[#f0771a] font-bold'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#f0771a]' : ''}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50 rounded-xl border border-slate-100">
                        {navigationData.footerLinks.services.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleServiceClick(item.path)}
                            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-[#f0771a] hover:bg-white font-medium flex items-center justify-between cursor-pointer"
                          >
                            <span>{item.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#f0771a] text-white font-bold'
                      : 'text-slate-800 hover:bg-orange-50 hover:text-[#f0771a]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Button to={navigationData.ctaButton.path} variant="primary" size="md" className="w-full justify-center">
              {navigationData.ctaButton.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
