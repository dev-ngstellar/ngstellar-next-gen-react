import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'timeline', 'live-hub', 'technology', 'investors'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-[#F1F5F9] flex items-center shadow-xs" style={{ height: '90px' }}>
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-[100px] flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')} 
          className="flex items-center gap-2.5 text-[#0F172A] font-extrabold text-2xl tracking-wider uppercase font-syne"
        >
          <Shield className="text-[#F59E0B] fill-[#F59E0B]/10" size={26} />
          TITAN<span className="text-[#F59E0B]">CONSTRUCT</span>
        </a>

        {/* Navigation Links */}
        <ul className="nav-links hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {[
            { id: 'home', label: 'Home' },
            { id: 'projects', label: 'Projects' },
            { id: 'timeline', label: 'Timeline' },
            { id: 'live-hub', label: 'Live Hub' },
            { id: 'technology', label: 'Technology' },
            { id: 'investors', label: 'Investors' }
          ].map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`font-semibold text-[13px] uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === item.id ? 'text-[#F59E0B]' : 'text-[#0F172A] hover:text-[#F59E0B]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA (Schedule Meeting) */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="btn btn-primary !bg-[#F59E0B] !text-[#0F172A] !border-[#F59E0B] font-bold shadow-xs hover:shadow-md"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.85rem' }}
          >
            Schedule Meeting
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden bg-transparent border-none text-[#0F172A] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md py-6 px-8 flex flex-col gap-4">
          {[
            { id: 'home', label: 'Home' },
            { id: 'projects', label: 'Projects' },
            { id: 'timeline', label: 'Timeline' },
            { id: 'live-hub', label: 'Live Hub' },
            { id: 'technology', label: 'Technology' },
            { id: 'investors', label: 'Investors' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`font-semibold text-sm uppercase tracking-wider ${
                activeSection === item.id ? 'text-[#F59E0B]' : 'text-[#0F172A]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
