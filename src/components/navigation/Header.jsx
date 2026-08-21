import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setScrolled(scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-2.5 sm:top-3 lg:top-4 left-0 right-0 z-[1000] mx-auto transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-slate-950/85 border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'bg-slate-950/75 border border-white/10 shadow-2xl backdrop-blur-md'
      } rounded-2xl`}
      style={{
        width: 'min(100% - 20px, 1280px)',
        marginInline: 'auto',
      }}
    >
      {/* Subtle glossy shimmer overlay on scroll */}
      {scrolled && (
        <>
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(circle at 10% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.01) 60%),' +
                'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 45%, rgba(255,255,255,0) 80%)',
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none rounded-t-2xl"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.25) 70%, transparent 100%)',
            }}
          />
        </>
      )}

      {/* Three-zone layout: Zone 1 (Logo) | Zone 2 (Navigation) | Zone 3 (CTA) */}
      <div className="relative w-full h-[64px] sm:h-[68px] lg:h-[74px] flex items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Zone 1: Brand Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group"
            aria-label="NG Stellar Home"
          >
            <img
              src="/NG Stellar.png"
              alt="NG Stellar - Transformation & Sustainability Advisory"
              width="188"
              height="36"
              loading="eager"
              decoding="async"
              className="h-7 sm:h-8 lg:h-9 w-auto max-w-[130px] sm:max-w-[150px] lg:max-w-[165px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              style={{ aspectRatio: '2170/417' }}
            />
          </Link>
        </div>

        {/* Zone 2: Navigation for Desktop (>= 1024px) */}
        <div className="hidden lg:flex flex-1 justify-center items-center px-1 lg:px-3 min-w-0">
          <DesktopNavigation />
        </div>

        {/* Zone 3: Compact CTA (>= 1024px) & Mobile Toggle (< 1024px) */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden lg:inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-3 lg:px-4 py-2 text-[11.5px] lg:text-[12.5px] font-bold text-white shadow-md shadow-primary-700/25 transition-all hover:brightness-110 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            style={{ maxWidth: '175px' }}
          >
            <span className="hidden xl:inline">Start a Conversation</span>
            <span className="xl:hidden">Start Conversation</span>
            <ArrowRight className="w-3 h-3 lg:w-3.5 lg:h-3.5 flex-shrink-0" />
          </Link>

          {/* Mobile Menu Toggle Button (< 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-primary-300" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer for < 768px */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
