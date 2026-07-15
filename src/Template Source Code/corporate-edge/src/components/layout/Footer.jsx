import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800/60 text-slate-400">
      
      {/* Upper Grid Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Summary (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 text-white group w-fit">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-blue-500 transition-colors">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Corporate<span className="text-blue-500 group-hover:text-blue-400 transition-colors">Edge</span>
            </span>
          </Link>

          <p className="text-xs font-light text-slate-400 leading-relaxed max-w-sm">
            We partner with progressive global enterprises and hyper-growth scaleups to engineer high-fidelity software architectures, secure cloud solutions, and smart AI automation.
          </p>

          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Links (2.5 Cols) */}
        <div className="lg:col-span-2.5 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Services
          </h4>
          <div className="flex flex-col gap-2.5 text-xs font-light">
            <Link to="/services" className="hover:text-blue-400 transition-colors">Web Development</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Mobile Applications</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">UI/UX Design Systems</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Cloud Architectures</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">AI & Automation</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Strategic Consulting</Link>
          </div>
        </div>

        {/* Company Links (2 Cols) */}
        <div className="lg:col-span-2 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Company
          </h4>
          <div className="flex flex-col gap-2.5 text-xs font-light">
            <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
            <Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Careers (We're hiring)</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Desks</Link>
            <Link to="/" className="hover:text-blue-400 transition-colors">Newsroom</Link>
          </div>
        </div>

        {/* Office Contact Info (3.5 Cols) */}
        <div className="lg:col-span-3.5 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Global Headquarters
          </h4>
          <div className="flex flex-col gap-3.5 text-xs font-light text-slate-400">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Suite 450, 200 Pine Street,<br />San Francisco, CA 94104</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span>+1 (800) 555-0199</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span>inquiries@corporateedge.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal / Copyright Section */}
      <div className="border-t border-slate-800/50 bg-slate-950/45 py-8 text-xs font-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>
            &copy; {currentYear} Corporate Edge Inc. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Security Compliance</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
