import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, ArrowRight, Globe, Share2, MessageCircle, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-[var(--text-body)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] p-0.5">
                <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
              </div>
              <span className="text-xl font-bold text-[var(--text-heading)]">
                STELLAR<span className="text-[var(--color-primary)]">EVENTS</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] max-w-sm">
              Architecting luxury event experiences, high-stakes summits, haute couture galas, and next-generation hybrid tech conferences worldwide.
            </p>
            <div className="flex space-x-3 pt-2">
              {[Globe, Share2, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[var(--text-heading)] uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="hover:text-[var(--color-primary)] transition-colors">Upcoming Events</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Luxury Services</Link></li>
              <li><Link to="/gallery" className="hover:text-[var(--color-primary)] transition-colors">Media Gallery</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">Company Story</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors">Executive Support</Link></li>
            </ul>
          </div>

          {/* SaaS Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[var(--text-heading)] uppercase tracking-wider">SaaS Admin</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/admin" className="hover:text-[var(--color-primary)] transition-colors">Overview Dashboard</Link></li>
              <li><Link to="/admin" className="hover:text-[var(--color-primary)] transition-colors">Agenda & Timeline Builder</Link></li>
              <li><Link to="/admin" className="hover:text-[var(--color-primary)] transition-colors">QR Ticket Scanner</Link></li>
              <li><Link to="/admin" className="hover:text-[var(--color-primary)] transition-colors">Revenue Analytics</Link></li>
              <li><Link to="/admin" className="hover:text-[var(--color-primary)] transition-colors">Blog CMS & Reports</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[var(--text-heading)] uppercase tracking-wider">Headquarters</h4>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>5th Ave, Manhattan, NY 10001</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                <span>+1 (800) 555-STELLAR</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                <span>concierge@stellarevents.io</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)]">
          <p>© 2026 Stellar Events Experience Platform. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--text-heading)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-heading)]">Terms of Service</a>
            <a href="#" className="hover:text-[var(--text-heading)]">Security SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
