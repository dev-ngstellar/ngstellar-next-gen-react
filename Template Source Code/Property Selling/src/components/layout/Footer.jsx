import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { useTheme } from '../../config/themes';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export const Footer = () => {
  const { currentTheme } = useTheme();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight uppercase" style={{ color: currentTheme.primary }}>
                VISTA<span className="text-white font-light lowercase">.estate</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              A premium, data-driven multi-model real estate platform template. Engineered for institutional buyers, agencies, and developers to present residential, commercial, and luxury properties in 2026.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.businessTypes.slice(0, 4).map((type) => (
                <span key={type} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-white/5 text-white/60">
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Get In Touch</h4>
            <div className="flex items-start space-x-3">
              <FiPhone className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
              <div>
                <p className="text-white font-medium">Phone Support</p>
                <a href={`tel:${siteConfig.contactInfo.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FiMail className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
              <div>
                <p className="text-white font-medium">Inquiries & Advisory</p>
                <a href={`mailto:${siteConfig.contactInfo.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FiMapPin className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
              <div>
                <p className="text-white font-medium">HQ Office</p>
                <p className="text-slate-400">{siteConfig.contactInfo.office}</p>
              </div>
            </div>
          </div>

          {/* Newsletter / Subscription */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Stay Informed</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to receive curated investment reports, market insights, and priority listings.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-theme-primary placeholder-slate-500"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-theme-primary hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vista Estate Template Ecosystem. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
