import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Video, Heart } from 'lucide-react';
import { academyData } from '../../data/academy';
import { navigationData } from '../../data/navigation';

export default function Footer() {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Instagram': return <Instagram className="w-5 h-5" />;
      case 'Facebook': return <Facebook className="w-5 h-5" />;
      case 'Youtube': return <Youtube className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      default: return <Instagram className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-[#101214] text-[#F7F4F0] border-t border-[#282523] pt-16 pb-8 relative overflow-hidden">
      {/* Centered Decorative Transparent Dancer Visual with Mask Fade */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10 sm:opacity-15 select-none flex items-center justify-center p-4 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 25%, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 25%, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)'
        }}
      >
        <img
          src="/assets/dance-academy/dancer-silhouette.png"
          alt=""
          aria-hidden="true"
          className="max-w-[90%] md:max-w-[80%] max-h-[85%] sm:max-h-[90%] w-auto h-auto object-contain object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#282523]">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img
                src={academyData.logo}
                alt={academyData.name}
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                  {academyData.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#A39E98] uppercase">
                  {academyData.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A39E98] leading-relaxed font-light">
              {academyData.hero.description}
            </p>

            <div className="flex items-center gap-3">
              {academyData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-full bg-[#151719] text-[#A39E98] hover:text-[#C99683] hover:bg-[#1B1B1D] border border-[#282523] transition-all duration-200"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#F7F4F0] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationData.footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#A39E98] hover:text-[#C99683] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99683]/50 group-hover:bg-[#C99683] transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#F7F4F0] tracking-wide">
              Studio Hours
            </h4>
            <div className="space-y-3 text-sm text-[#A39E98]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C99683] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F7F4F0] font-medium">{academyData.contact.hours.days}</p>
                  <p className="text-[#A39E98]">{academyData.contact.hours.time}</p>
                </div>
              </div>
              <p className="text-xs text-[#A39E98]/70 pt-2 border-t border-[#282523]">
                Sunday: Private Rehearsals & Performances
              </p>
            </div>
          </div>

          {/* Contact Snippet */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#F7F4F0] tracking-wide">
              Visit Studio
            </h4>
            <ul className="space-y-3 text-sm text-[#A39E98]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C99683] shrink-0 mt-0.5" />
                <span>
                  {academyData.contact.address.line1}<br />
                  {academyData.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C99683] shrink-0" />
                <a href={`tel:${academyData.contact.phone}`} className="hover:text-[#C99683] transition-colors">
                  {academyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C99683] shrink-0" />
                <a href={`mailto:${academyData.contact.email}`} className="hover:text-[#C99683] transition-colors">
                  {academyData.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A39E98]">
          <p>{academyData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
