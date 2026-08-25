import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { getPrimaryNavItems, getMoreNavItems } from './navData';

import TransformationMenu from './menus/TransformationMenu';
import SustainabilityMenu from './menus/SustainabilityMenu';
import HealthCheckMenu from './menus/HealthCheckMenu';
import CapabilitiesMenu from './menus/CapabilitiesMenu';
import ApproachMenu from './menus/ApproachMenu';
import MoreMenu from './menus/MoreMenu';

export default function DesktopNavigation() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isDesktopWide, setIsDesktopWide] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1200 : true
  );

  const location = useLocation();
  const currentPath = location.pathname;
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  // Track window resize to dynamically switch between Desktop (>=1200px) and Tablet (768-1199px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopWide(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenuId(null);
  };

  const handleMouseEnter = (id) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenuId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenMenuId(null);
    }, 140);
  };

  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const toggleMenu = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenuId(openMenuId === id ? null : id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Primary and About dropdown nav item lists based on viewport width
  const primaryItems = getPrimaryNavItems(isDesktopWide);
  const aboutDropdownItems = getMoreNavItems(isDesktopWide);

  // Remaining primary items after Home: Transformation, Sustainability, Health Check, Capabilities, Approach
  const otherPrimaryItems = primaryItems.filter((item) => item.id !== 'home');

  // Check active states
  const isItemActive = (item) => {
    if (item.href === '/' && currentPath === '/') return true;
    if (item.href !== '/' && currentPath.startsWith(item.href)) return true;
    return false;
  };

  const isAboutActive =
    currentPath === '/about' ||
    currentPath.startsWith('/about/') ||
    aboutDropdownItems.some((item) => currentPath.startsWith(item.href));

  // Render the specific mega-menu component
  const renderMenuContent = (menuId) => {
    const item = primaryItems.find((i) => i.id === menuId);
    switch (menuId) {
      case 'about':
      case 'more':
        return <MoreMenu onItemClick={handleItemClick} currentPath={currentPath} isDesktopWide={isDesktopWide} />;
      case 'transformation':
        return <TransformationMenu item={item} onItemClick={handleItemClick} currentPath={currentPath} />;
      case 'sustainability':
        return <SustainabilityMenu item={item} onItemClick={handleItemClick} currentPath={currentPath} />;
      case 'health-check':
        return <HealthCheckMenu item={item} onItemClick={handleItemClick} currentPath={currentPath} />;
      case 'capabilities':
        return <CapabilitiesMenu item={item} onItemClick={handleItemClick} currentPath={currentPath} />;
      case 'approach':
        return <ApproachMenu item={item} onItemClick={handleItemClick} currentPath={currentPath} />;
      default:
        return null;
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main Navigation"
      className="flex items-center gap-1 xl:gap-1.5 text-[12.5px] xl:text-[13.5px] font-medium tracking-normal text-white"
    >
      {/* 1. Home */}
      <Link
        to="/"
        onClick={handleItemClick}
        className={`relative px-2 xl:px-3 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap ${
          currentPath === '/'
            ? 'text-white font-semibold bg-white/10 shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
        }`}
      >
        Home
        {currentPath === '/' && (
          <span className="absolute bottom-0.5 left-2 xl:left-3 right-2 xl:right-3 h-[2px] bg-primary-400 rounded-full" />
        )}
      </Link>

      {/* 2. About ▾ Dropdown (Existing More menu renamed to About in 2nd position) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={(e) => toggleMenu('about', e)}
          aria-expanded={openMenuId === 'about'}
          aria-haspopup="true"
          className={`relative px-2 xl:px-3 py-1.5 rounded-lg transition-all duration-150 flex items-center gap-1 text-left whitespace-nowrap ${
            isAboutActive || openMenuId === 'about'
              ? 'text-white font-semibold bg-white/10 shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
          }`}
        >
          <span>About</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${
              openMenuId === 'about' ? 'rotate-180 text-primary-300' : 'text-slate-400'
            }`}
          />
          {isAboutActive && openMenuId !== 'about' && (
            <span className="absolute bottom-0.5 left-2 xl:left-3 right-2 xl:right-3 h-[2px] bg-primary-400 rounded-full" />
          )}
        </button>
      </div>

      {/* 3. Primary Items: Transformation, Sustainability, Health Check, Capabilities, Approach */}
      {otherPrimaryItems.map((item) => {
        const active = isItemActive(item);
        const isOpen = openMenuId === item.id;
        const isHealthCheck = item.id === 'health-check';

        if (item.type === 'link') {
          return (
            <Link
              key={item.id}
              to={item.href}
              onClick={handleItemClick}
              className={`relative px-2 xl:px-3 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap ${
                active
                  ? 'text-white font-semibold bg-white/10 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {item.label}
              {active && (
                <span className="absolute bottom-0.5 left-2 xl:left-3 right-2 xl:right-3 h-[2px] bg-primary-400 rounded-full" />
              )}
            </Link>
          );
        }

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {isHealthCheck ? (
              <button
                type="button"
                onClick={(e) => toggleMenu(item.id, e)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={`relative px-2 xl:px-3 py-1.5 rounded-lg transition-all duration-150 flex items-center gap-1 xl:gap-1.5 text-left whitespace-nowrap group ${
                  active || isOpen
                    ? 'bg-gradient-to-r from-primary-500/25 to-secondary-500/25 text-white font-semibold ring-1 ring-primary-400/40 shadow-sm'
                    : 'text-primary-300 hover:text-white bg-primary-950/40 border border-primary-500/30 hover:border-primary-400/60 hover:bg-primary-900/40'
                }`}
              >
                <Sparkles className="w-3 h-3 text-secondary-400 flex-shrink-0 animate-pulse" />
                <span className="font-semibold">{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-primary-300' : 'text-primary-400/70'
                  }`}
                />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => toggleMenu(item.id, e)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={`relative px-2 xl:px-3 py-1.5 rounded-lg transition-all duration-150 flex items-center gap-1 text-left whitespace-nowrap ${
                  active || isOpen
                    ? 'text-white font-semibold bg-white/10 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-primary-300' : 'text-slate-400'
                  }`}
                />
                {active && !isOpen && (
                  <span className="absolute bottom-0.5 left-2 xl:left-3 right-2 xl:right-3 h-[2px] bg-primary-400 rounded-full" />
                )}
              </button>
            )}
          </div>
        );
      })}

      {/* Centered Mega-Menu Container attached cleanly below header */}
      <AnimatePresence>
        {openMenuId && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            onMouseEnter={() => handleMouseEnter(openMenuId)}
            onMouseLeave={handleMouseLeave}
            className="fixed top-[82px] lg:top-[90px] left-0 right-0 mx-auto z-[1100] px-4 pointer-events-auto flex justify-center"
            style={{
              maxWidth: '1240px',
            }}
          >
            {renderMenuContent(openMenuId)}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
