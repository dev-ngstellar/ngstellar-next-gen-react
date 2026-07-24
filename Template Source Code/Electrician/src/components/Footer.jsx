import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, ShieldCheck, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricianData';

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-[var(--text-body)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-amber-600 p-0.5">
                <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-[var(--text-heading)] font-mono">
                VOLTAGE<span className="text-[var(--color-primary)]">PRO</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] max-w-sm">
              Chicago's premier licensed electrical contractor specializing in residential rewiring, commercial power systems, industrial substations, and EV charger installations.
            </p>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--color-primary)] font-mono font-semibold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{COMPANY_INFO.license}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider font-mono">Electrical Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Residential Wiring</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Commercial Contracting</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Industrial Power</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">EV Fast Chargers</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Solar & Tesla Batteries</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider font-mono">Operating Hours</h4>
            <div className="space-y-2 text-xs text-[var(--text-muted)]">
              <p className="flex justify-between"><span>Mon - Fri:</span> <strong className="text-[var(--text-heading)]">7:00 AM - 7:00 PM</strong></p>
              <p className="flex justify-between"><span>Saturday:</span> <strong className="text-[var(--text-heading)]">8:00 AM - 5:00 PM</strong></p>
              <p className="flex justify-between text-[var(--color-primary)] font-bold"><span>Emergency 24/7:</span> <span>Available Always</span></p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider font-mono">Headquarters</h4>
            <div className="space-y-2 text-xs text-[var(--text-muted)]">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center space-x-2 font-mono font-bold text-[var(--text-heading)]">
                <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{COMPANY_INFO.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{COMPANY_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)]">
          <p>© 2026 {COMPANY_INFO.name}. Licensed, Bonded & Insured Master Electricians.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--text-heading)]">Safety Disclosures</a>
            <a href="#" className="hover:text-[var(--text-heading)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-heading)]">License Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
