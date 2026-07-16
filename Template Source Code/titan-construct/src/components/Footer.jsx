import React from 'react';
import { Shield, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px]">
        
        {/* Footer Top Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Brand Details */}
          <div>
            <div className="flex items-center gap-2.5 text-white font-extrabold text-2xl tracking-wider uppercase font-syne mb-6">
              <Shield className="text-[#F59E0B] fill-[#F59E0B]/10" size={26} />
              TITAN<span className="text-[#F59E0B]">CONSTRUCT</span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Building next-generation smart cities, sustainable infrastructure, and iconic landmarks for future generations.
            </p>
            <div className="flex items-center gap-2.5 text-xs text-gray-500 font-semibold uppercase tracking-widest">
              <Globe size={14} className="text-[#F59E0B]" />
              Neom + Dubai Future Inspired
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase font-bold text-[#F59E0B] tracking-widest mb-6 font-syne">
              Operations
            </h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0 text-sm text-gray-400 font-light">
              <li><a href="#projects" className="hover:text-[#F59E0B] transition-colors duration-300">Mega Projects</a></li>
              <li><a href="#timeline" className="hover:text-[#F59E0B] transition-colors duration-300">Milestones</a></li>
              <li><a href="#live-hub" className="hover:text-[#F59E0B] transition-colors duration-300">Site Telemetry</a></li>
              <li><a href="#technology" className="hover:text-[#F59E0B] transition-colors duration-300">Tech Architecture</a></li>
            </ul>
          </div>

          {/* Corporate / Investors */}
          <div>
            <h4 className="text-sm uppercase font-bold text-[#F59E0B] tracking-widest mb-6 font-syne">
              Corporate
            </h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0 text-sm text-gray-400 font-light">
              <li><a href="#investors" className="hover:text-[#F59E0B] transition-colors duration-300">Investor Hub</a></li>
              <li><a href="#investors" className="hover:text-[#F59E0B] transition-colors duration-300">Quarterly Audits</a></li>
              <li><a href="#investors" className="hover:text-[#F59E0B] transition-colors duration-300">Growth Yields</a></li>
              <li><a href="#investors" className="hover:text-[#F59E0B] transition-colors duration-300">Briefing Packages</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm uppercase font-bold text-[#F59E0B] tracking-widest mb-6 font-syne">
              Global HQ
            </h4>
            <ul className="flex flex-col gap-4 list-none m-0 p-0 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <MapPin className="text-[#F59E0B] shrink-0" size={16} />
                <span>Level 72, Burj Khalifa Tower, Downtown Dubai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#F59E0B] shrink-0" size={16} />
                <span>+971 4 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#F59E0B] shrink-0" size={16} />
                <span>contact@titanconstruct.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Rights */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold tracking-wider uppercase">
          <span>
            © {new Date().getFullYear()} Titan Construct. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F59E0B] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#F59E0B] transition-colors duration-300">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
