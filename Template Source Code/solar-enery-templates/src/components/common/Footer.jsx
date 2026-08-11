import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';
import { images } from '../../data/images';
import { Container } from './Container';

const socialIcons = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
  Youtube: Youtube,
};

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      if (location.pathname === basePath) {
        window.location.hash = hash;
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate(path);
      }
    } else if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white text-[#111111] pt-16 pb-8 border-t border-[#E5E7EB] overflow-hidden">
      
      {/* Semi-Transparent Solar Image — from Solar Solutions column to right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/4 pointer-events-none z-0 overflow-hidden">
        <img
          src={images.about.installation}
          alt=""
          className="w-full h-full object-cover object-center opacity-25"
          loading="lazy"
        />
        {/* Fade from left so it blends into the white background from the Solar Solutions area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
        {/* Subtle top & bottom fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/60"></div>
      </div>

      {/* Foreground Content Container */}
      <Container className="relative z-10">
        {/* Main 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Company / Logo & Socials */}
          <div className="space-y-4">
            <Link to="/" onClick={() => handleNavClick('/')} className="inline-flex items-center gap-3 group">
              <img
                src={companyData.logo}
                alt={`${companyData.name} Logo`}
                className="h-10 lg:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight group-hover:text-[#f0771a] transition-colors leading-tight">
                  {companyData.name}
                </span>
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#f0771a] -mt-0.5">
                  Solar Energy
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-[#555555] max-w-sm">
              {companyData.description}
            </p>
            
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {companyData.socials.map((social) => {
                  const Icon = socialIcons[social.icon] || ArrowUpRight;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-100/90 border border-slate-200/90 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#f0771a] hover:border-[#f0771a] transition-all duration-200 shadow-sm"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#111111] font-bold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationData.footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="text-[#111111] hover:text-[#f0771a] transition-colors inline-flex items-center gap-1 font-medium"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solar Solutions */}
          <div>
            <h4 className="text-[#111111] font-bold text-base mb-4 tracking-wide">
              Solar Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationData.footerLinks.services.map((link) => {
                const isActive = location.pathname === '/services' && location.hash === `#${link.id}`;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.path);
                      }}
                      className={`transition-colors inline-flex items-center gap-1.5 font-medium ${
                        isActive
                          ? 'text-[#f0771a] font-bold'
                          : 'text-[#111111] hover:text-[#f0771a]'
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Information (Positioned in front of transparent solar image) */}
          <div className="space-y-3.5 text-sm relative">
            <h4 className="text-[#111111] font-bold text-base mb-4 tracking-wide">
              Contact Us
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#f0771a] shrink-0 mt-0.5" />
              <span className="text-[#555555] font-medium">{companyData.contact.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#f0771a] shrink-0" />
              <a href={`tel:${companyData.contact.phoneClean}`} className="text-[#555555] hover:text-[#f0771a] transition-colors font-medium">
                {companyData.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#f0771a] shrink-0" />
              <a href={`mailto:${companyData.contact.email}`} className="text-[#555555] hover:text-[#f0771a] transition-colors font-medium">
                {companyData.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#f0771a] shrink-0 mt-0.5" />
              <span className="text-[#555555] text-xs font-medium">{companyData.contact.workingHours}</span>
            </div>
          </div>

        </div>

        {/* Section Divider & Copyright Row */}
        <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#555555]">
          <p>© {new Date().getFullYear()} {companyData.name} Energy Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
