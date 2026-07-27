import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Globe
} from 'lucide-react';

export const Footer = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border)]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white shadow-md">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[var(--heading)] font-sans">
                  AURA<span className="text-[var(--primary)]">PET</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[var(--muted-text)] font-semibold">
                  Veterinary & Wellness
                </span>
              </div>
            </Link>
            <p className="text-sm text-[var(--muted-text)] leading-relaxed max-w-sm">
              Providing extraordinary veterinary healthcare, luxury grooming, and compassionate boarding services. Your pet’s comfort and vitality is our highest priority.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-[var(--heading)] mb-2">Subscribe to Pet Wellness Digest</span>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[var(--primary)] text-[var(--heading)]"
                />
                <button 
                  type="submit" 
                  className="bg-[var(--primary)] text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[var(--primary-hover)] transition-colors flex items-center gap-1"
                >
                  <span>Join</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[var(--heading)] tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-[var(--muted-text)]">
              <li><Link to="/about" className="hover:text-[var(--primary)] transition-colors">Our Story & Team</Link></li>
              <li><Link to="/services" className="hover:text-[var(--primary)] transition-colors">All Services</Link></li>
              <li><Link to="/gallery" className="hover:text-[var(--primary)] transition-colors">Happy Moments</Link></li>
              <li><button onClick={onOpenAppointment} className="hover:text-[var(--primary)] transition-colors text-left">Book Visit</button></li>
              <li><Link to="/contact" className="hover:text-[var(--primary)] transition-colors">Contact & Hours</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold text-[var(--heading)] tracking-wider uppercase mb-4">Care Services</h4>
            <ul className="space-y-2.5 text-sm text-[var(--muted-text)]">
              <li><Link to="/services" className="hover:text-[var(--primary)] transition-colors">Veterinary Medicine</Link></li>
              <li><Link to="/services" className="hover:text-[var(--primary)] transition-colors">Luxury Pet Spa</Link></li>
              <li><Link to="/services" className="hover:text-[var(--primary)] transition-colors">5-Star Pet Boarding</Link></li>
              <li><Link to="/services" className="hover:text-[var(--primary)] transition-colors">Dental & Oral Surgery</Link></li>
              <li><Link to="/services" className="hover:text-[var(--primary)] transition-colors">24/7 Emergency Care</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-[var(--heading)] tracking-wider uppercase mb-4">Hospital Location</h4>
            <ul className="space-y-3 text-sm text-[var(--muted-text)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>742 Evergreen Terrace, Luxury Care District, NY 10001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>(800) 999-PETS / (555) 019-2834</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>care@aurapetwellness.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>Mon - Sun: Open 24 Hours</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--muted-text)]">
          <p>© {new Date().getFullYear()} AuraPet Veterinary Hospital & Wellness Center. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--primary)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--primary)]">Terms of Service</a>
            <a href="#" className="hover:text-[var(--primary)]">AAHA Accreditation</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-[var(--background)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
