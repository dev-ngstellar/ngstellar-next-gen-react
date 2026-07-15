import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-[#D4AF37]/10 text-slate-400 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        
        {/* Brand & Narrative */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded border border-[#D4AF37]/30 flex items-center justify-center bg-[#0F172A] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <Building2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] font-bold text-white leading-none">
                SKYLINE
              </span>
              <span className="text-[9px] tracking-[0.4em] text-[#D4AF37] uppercase font-medium mt-1">
                Residences
              </span>
            </div>
          </Link>
          <p className="text-xs leading-relaxed text-slate-400 font-light mt-2 max-w-sm">
            An architectural marvel rising above the clouds. Designed by world-renowned architects, Skyline Residences offers limited-edition 3 & 4 BHK signature apartments and double-height penthouses.
          </p>
          <div className="flex gap-4.5 mt-2">
            <a href="#" className="w-9 h-9 rounded border border-slate-800 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded border border-slate-800 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded border border-slate-800 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-[0.15em] border-b border-slate-900 pb-3">
            Explore Project
          </h4>
          <div className="grid grid-cols-1 gap-3 text-xs">
            <Link to="/overview" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Project Overview <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/master-plan" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Master Plan <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/floor-plans" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Floor Plans <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/amenities" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Amenities & Sky Lounge <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Interactive Galleries */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-[0.15em] border-b border-slate-900 pb-3">
            Showcase Galleries
          </h4>
          <div className="grid grid-cols-1 gap-3 text-xs">
            <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Luxury Interiors <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Swimming Pool & Gardens <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/location" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Location & Proximity <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/contact" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 group">
              Schedule site visit <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Contact Registry info */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-[0.15em] border-b border-slate-900 pb-3">
            Concierge Desk
          </h4>
          <div className="flex flex-col gap-4 text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="leading-relaxed font-light">
                Skyline Towers, Golf Course Road extension, Sector 54, Gurugram, NCR - 122002
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-light">+91 9999 888 777</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-light">concierge@skyline-residences.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* RERA and compliance details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 pt-8 border-t border-slate-900/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] text-slate-500 font-light">
        <div className="flex flex-col gap-1 max-w-xl">
          <span>Disclaimer: All renders, plans, drawings and images are artists' impressions and conceptual representation for showcase purposes only.</span>
          <span>Haryana RERA Registration No: HRERA-GRG-1082-2026. Project approved for construction.</span>
        </div>
        <div className="flex items-center gap-1 mt-1 md:mt-0 font-medium text-slate-400">
          <span>&copy; {new Date().getFullYear()} Skyline Residences. Built by Premium Builders Group.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
