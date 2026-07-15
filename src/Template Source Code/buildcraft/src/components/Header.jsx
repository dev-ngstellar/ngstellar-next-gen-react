import React, { useState, useEffect } from 'react';
import { Construction, Menu, X } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'live-hub', 'simulator', 'vision', 'contact'];
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
    <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-[#F1F5F9] shadow-sm flex items-center" style={{ height: '90px' }}>
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-[100px] flex justify-between items-center">
        
        {/* Logo (Left) */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="logo flex items-center gap-2 text-[#0F172A] font-extrabold text-2xl tracking-wider">
          <Construction className="logo-icon text-[#F59E0B]" size={28} />
          BUILD<span className="text-[#F59E0B]">CRAFT</span>
        </a>

        {/* Navigation Links (Center) */}
        <ul className="nav-links hidden md:flex items-center gap-8 list-none m-0 p-0">
          {['home', 'projects', 'live-hub', 'simulator', 'vision', 'contact'].map((section) => (
            <li key={section}>
              <a 
                href={`#${section}`} 
                onClick={(e) => handleLinkClick(e, section)}
                className={`font-semibold text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === section ? 'text-[#F59E0B]' : 'text-[#0F172A] hover:text-[#F59E0B]'
                }`}
              >
                {section.replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Right) */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="btn btn-primary btn-shimmer !bg-[#F59E0B] !text-[#0F172A] !border-[#F59E0B] font-bold"
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.85rem' }}
          >
            VIP Investor Club
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden bg-transparent border-none text-[#0F172A] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md py-6 px-8 flex flex-col gap-4">
          {['home', 'projects', 'live-hub', 'simulator', 'vision', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleLinkClick(e, section)}
              className={`font-semibold text-sm uppercase tracking-wider ${
                activeSection === section ? 'text-[#F59E0B]' : 'text-[#0F172A]'
              }`}
            >
              {section.replace('-', ' ')}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
