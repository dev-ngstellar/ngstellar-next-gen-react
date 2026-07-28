import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[var(--color-primary-dark)] text-slate-300 pt-20 pb-12 border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A34B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand & Statement */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A34B] to-[#9A661F] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#D4A34B]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  VANCE <span className="text-[#D4A34B] font-light">&</span> STERLING
                </span>
                <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-semibold">
                  Attorneys at Law
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
              Vance & Sterling is an elite international law firm dedicated to providing premier legal representation, strategic corporate architecture, and relentless courtroom advocacy.
            </p>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-[#D4A34B] hover:border-[#D4A34B]/40 transition-colors" aria-label="LinkedIn">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-[#D4A34B] hover:border-[#D4A34B]/40 transition-colors" aria-label="Twitter">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#D4A34B]/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Practice Areas', 'About Firm', 'Insights', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <li key={item}>
                    <Link to={path} className="hover:text-[#D4A34B] transition-colors flex items-center gap-1.5">
                      <span className="text-[#D4A34B] text-xs">›</span> {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#D4A34B]/30 pb-2 inline-block">
              Practice Sectors
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/practice-areas#corporate-law" className="hover:text-[#D4A34B] transition-colors">Corporate & M&A</Link></li>
              <li><Link to="/practice-areas#criminal-defense" className="hover:text-[#D4A34B] transition-colors">White Collar Defense</Link></li>
              <li><Link to="/practice-areas#property-law" className="hover:text-[#D4A34B] transition-colors">Commercial Real Estate</Link></li>
              <li><Link to="/practice-areas#tax-law" className="hover:text-[#D4A34B] transition-colors">International Tax Law</Link></li>
              <li><Link to="/practice-areas#civil-litigation" className="hover:text-[#D4A34B] transition-colors">Civil Litigation</Link></li>
            </ul>
          </div>

          {/* Newsletter & Contact brief */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#D4A34B]/30 pb-2 inline-block">
              Executive Briefing
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to receive curated analysis on international corporate jurisprudence and regulatory updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter executive email..."
                  className="w-full px-4 py-2.5 text-xs bg-slate-900/90 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A34B]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4A34B] text-slate-950 rounded-md font-semibold text-xs flex items-center justify-center hover:bg-[#c58b32] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-[#D4A34B] animate-fade-in font-medium">
                  ✓ Successfully subscribed to legal briefings.
                </p>
              )}
            </form>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A34B]" />
                <span>+1 (800) 555-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A34B]" />
                <span>contact@vancestirling.law</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vance & Sterling Law Firm LLP. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Representation</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Attorney Advertising</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
