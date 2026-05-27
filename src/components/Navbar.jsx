import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    setCapabilitiesOpen(false);
    setAboutOpen(false);
  };

  const capabilities = [
    {
      title: 'Branding Services',
      description: 'Creating impactful brand identities that resonate and inspire',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: 'Consulting Services',
      description: 'Strategic guidance and expert consulting to drive your business forward',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Tech Services',
      description: 'Innovative technology solutions and development services',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  const aboutDropdown = [
    {
      title: 'Careers',
      path: '/careers',
      description: 'Join our team and build the future',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-[999] ${scrolled ? 'shadow-2xl rounded-[20px]' : 'rounded-[20px] shadow-lg'
        }`}
      style={{
        transition: 'background 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled
          ? 'linear-gradient(90deg, rgba(255, 255, 255, 1)'
          : 'linear-gradient(90deg, rgba(255, 255, 255, 1)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Frosted glass shine overlay - Water glass effect */}
      {scrolled && (
        <>
          {/* Main glossy water shine */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px] transition-opacity duration-700"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 60%),' +
                'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 80%)',
              opacity: scrolled ? 1 : 0,
            }}
          />
          {/* Smooth top highlight shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none rounded-t-[20px] transition-opacity duration-700"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.42) 30%, rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.36) 70%, transparent 100%)',
              opacity: scrolled ? 1 : 0,
            }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-2 md:px-3 lg:px-4 py-4">
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full"></div>
            <picture>
              <source srcSet="/logo_ngs.webp" type="image/webp" />
              <img
                src='/logo_ngs.png'
                alt="Next Gen Stellar"
                width="400"
                height="74"
                loading="eager"
                decoding="async"
                className="relative h-10 w-auto md:h-12 transition-all duration-300"
              />
            </picture>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-[0.95rem] font-medium text-primary-700 lg:flex">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`relative pb-1 transition-colors ${location.pathname === '/'
              ? 'text-primary-700 nav-active-underline after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary-600 after:to-secondary-500'
              : 'text-primary-700'
              }`}
          >
            Home
          </Link>

          {/* Capabilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCapabilitiesOpen(true)}
            onMouseLeave={() => setCapabilitiesOpen(false)}
          >
            <Link
              to="/capability"
              onClick={handleLinkClick}
              className={`flex items-center gap-1 pb-1 transition-colors relative ${location.pathname === '/capability' || location.pathname.startsWith('/services')
                ? 'text-primary-700 nav-active-underline after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary-600 after:to-secondary-500'
                : 'text-primary-700'
                }`}
            >
              Capabilities
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${capabilitiesOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {capabilitiesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[420px] rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-800/90 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                <div className="p-3 space-y-4">
                  {capabilities.map((item) => {
                    const serviceLinks = {
                      'Branding Services': '/services/branding',
                      'Consulting Services': '/services/consulting',
                      'Tech Services': '/services/tech',
                    };
                    const path = serviceLinks[item.title];
                    const isActive = location.pathname === path;
                    
                    return (
                      <Link
                        key={item.title}
                        to={path}
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 group ${
                          isActive 
                            ? 'bg-white/10 shadow-inner ring-1 ring-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <div className={`flex-shrink-0 transition-colors ${isActive ? 'text-secondary-400' : 'text-primary-400 group-hover:text-secondary-400'}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold text-base mb-1 transition-colors ${isActive ? 'text-primary-300' : 'text-white group-hover:text-primary-300'}`}>
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/industry"
            onClick={handleLinkClick}
            className={`relative pb-1 transition-colors ${location.pathname === '/industry'
              ? 'text-primary-700 nav-active-underline after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary-600 after:to-secondary-500'
              : 'text-primary-700'
              }`}
          >
            Industries
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
             <Link
              to="/about"
              onClick={handleLinkClick}
              className={`flex items-center gap-1 pb-1 transition-colors relative ${location.pathname === '/about' || location.pathname === '/careers'
                ? 'text-primary-700 nav-active-underline after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary-600 after:to-secondary-500'
                : 'text-primary-700'
                }`}
            >
              About us
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* About Dropdown Menu */}
            <AnimatePresence>
            {aboutOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[420px] rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-800/90 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
              >
                <div className="p-3 space-y-4">
                  {aboutDropdown.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.title}
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 group ${
                          isActive 
                            ? 'bg-white/10 shadow-inner ring-1 ring-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <div className={`flex-shrink-0 transition-colors ${isActive ? 'text-secondary-400' : 'text-primary-400 group-hover:text-secondary-400'}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold text-base mb-1 transition-colors ${isActive ? 'text-primary-300' : 'text-white group-hover:text-primary-300'}`}>
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-700 to-primary-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-700/20 transition-all hover:brightness-110 hover:shadow-primary-500/30 hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-2">Contact Us</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-primary-700 hover:bg-primary-700 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 overflow-y-auto max-h-[85vh] rounded-[20px]"
          >
            <nav className=" max-w-6xl mx-auto flex flex-col px-2 md:px-3 lg:px-4 py-6 space-y-1">
              <Link
                to="/"
                onClick={handleLinkClick}
                className={`px-4 py-3 rounded-lg transition-colors ${location.pathname === '/'
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-semibold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
              >
                Home
              </Link>

              {/* Capabilities with Sub-menu */}
              <div>
                <div
                  className={`w-full px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${location.pathname === '/capability' || location.pathname.startsWith('/services')
                    ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-semibold'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <Link to="/capability" onClick={handleLinkClick} className="flex-1">
                    Capabilities
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCapabilitiesOpen(!capabilitiesOpen);
                    }}
                    className="p-2 -mr-2"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${capabilitiesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Sub-menu */}
                <AnimatePresence>
                  {capabilitiesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-2 space-y-1">
                        <Link
                          to="/services/branding"
                          onClick={handleLinkClick}
                          className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === '/services/branding' 
                              ? 'bg-white/10 text-white' 
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <svg
                            className="w-6 h-6 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                          Branding Services
                        </Link>
                        <Link
                          to="/services/consulting"
                          onClick={handleLinkClick}
                          className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === '/services/consulting' 
                              ? 'bg-white/10 text-white' 
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <svg
                            className="w-6 h-6 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Consulting Services
                        </Link>
                        <Link
                          to="/services/tech"
                          onClick={handleLinkClick}
                          className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === '/services/tech' 
                              ? 'bg-white/10 text-white' 
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <svg
                            className="w-6 h-6 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          Tech Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/industry"
                onClick={handleLinkClick}
                className={`px-4 py-3 rounded-lg transition-colors ${location.pathname === '/industry'
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-semibold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
              >
                Industries
              </Link>

                <div>
                 <div
                    className={`w-full px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${location.pathname === '/about' || location.pathname === '/careers'
                      ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    <Link to="/about" onClick={handleLinkClick} className="flex-1">
                      About Us
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setAboutOpen(!aboutOpen);
                      }}
                      className="p-2 -mr-2"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Sub-menu */}
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-2 space-y-1">
                          {aboutDropdown.map((item) => (
                              <Link
                               key={item.title}
                               to={item.path}
                               onClick={handleLinkClick}
                               className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                                 location.pathname === item.path 
                                   ? 'bg-white/10 text-white' 
                                   : 'text-slate-300 hover:text-white hover:bg-white/5'
                               }`}
                             >
                               <div className="w-6 h-6 text-violet-400 flex-shrink-0 [&>svg]:w-full [&>svg]:h-full">
                                 {item.icon}
                               </div>
                               {item.title}
                             </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-700 to-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-700/20 transition-all hover:brightness-110 active:scale-95"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

