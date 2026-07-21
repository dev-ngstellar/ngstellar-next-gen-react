import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface-950)] text-[var(--color-surface-300)] pt-20 pb-10 border-t border-[var(--color-surface-800)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Top Section */}
        <div className="pb-16 mb-16 border-b border-[var(--color-surface-800)] flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
            <p className="text-[var(--color-surface-400)] text-lg">Join 250,000+ readers who receive our editor's picks, breaking news, and in-depth analysis every morning.</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 rounded-xl bg-[var(--color-surface-900)] border border-[var(--color-surface-700)] text-white focus:outline-none focus:border-[var(--color-primary-500)] w-full sm:w-80 transition-colors"
            />
            <Button variant="primary" size="lg" className="whitespace-nowrap shrink-0">Subscribe</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif font-black text-3xl tracking-tight text-white uppercase">
                Nova<span className="text-[var(--color-primary-500)]">Press</span>
              </span>
            </Link>
            <p className="text-[var(--color-surface-400)] leading-relaxed max-w-sm">
              NovaPress is an independent digital media company delivering quality journalism, analysis, and stories that shape tomorrow.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-600)] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-600)] hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-600)] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-600)] hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Categories</h4>
            <ul className="space-y-3">
              {['Technology', 'Business', 'Politics', 'Science', 'Health', 'Environment'].map(link => (
                <li key={link}>
                  <Link to="/categories" className="hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Authors', 'Contact', 'Editorial Policy', 'Advertise'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility', 'Copyright'].map(link => (
                <li key={link}>
                  <Link to="#" className="hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-surface-800)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-surface-500)] text-sm">
            &copy; {new Date().getFullYear()} NovaPress Media LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[var(--color-surface-500)]">
            <span>Designed for Excellence.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
