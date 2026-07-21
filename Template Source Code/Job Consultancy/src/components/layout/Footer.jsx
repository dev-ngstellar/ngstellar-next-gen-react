import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';

const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface-950)] text-[var(--color-surface-300)] pt-20 pb-10 border-t border-[var(--color-surface-800)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="font-serif font-black text-xl tracking-tight text-white">Talent<span className="text-[var(--color-primary-500)]">Bridge</span></span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8 text-[var(--color-surface-400)]">
              Connecting exceptional talent with world-class companies. The premium platform for modern recruitment and team building.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-900)] border border-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-500)] hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-900)] border border-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-500)] hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface-900)] border border-[var(--color-surface-800)] flex items-center justify-center hover:bg-[var(--color-primary-500)] hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Candidates</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/jobs" className="hover:text-white transition-colors">Find Jobs</Link></li>
              <li><Link to="/candidates" className="hover:text-white transition-colors">Career Coaching</Link></li>
              <li><Link to="/candidates" className="hover:text-white transition-colors">Resume Review</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Career Advice</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Employers</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/employers" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Executive Search</Link></li>
              <li><Link to="/employers" className="hover:text-white transition-colors">Hiring Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/admin" className="hover:text-[var(--color-primary-400)] transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-surface-800)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-surface-500)]">
          <p>© 2026 TalentBridge Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
