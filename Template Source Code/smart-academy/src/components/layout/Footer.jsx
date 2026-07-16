import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  // Hide footer if on portal/admin dashboard layouts
  const isDashboardRoute = location.pathname.startsWith('/student') || location.pathname.startsWith('/admin');
  if (isDashboardRoute) return null;

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Description */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow shadow-violet-500/20 group-hover:bg-violet-700 transition-colors">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Smart<span className="text-amber-500 group-hover:text-amber-600 transition-colors">Kids School</span>
            </span>
          </Link>
          <p className="text-xs font-light text-slate-400 leading-relaxed max-w-sm">
            Providing premium preschool, kindergarten, and childhood playgroups configured for young creative minds.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" className="p-2 bg-slate-800 hover:bg-violet-600 text-slate-300 hover:text-white rounded transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" className="p-2 bg-slate-800 hover:bg-violet-600 text-slate-300 hover:text-white rounded transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" className="p-2 bg-slate-800 hover:bg-violet-600 text-slate-300 hover:text-white rounded transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Academic Categories */}
        <div className="lg:col-span-2.5 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Learn & Play
          </h4>
          <div className="flex flex-col gap-2.5 text-xs font-light">
            <Link to="/courses" className="hover:text-violet-400 transition-colors">Preschool Playgroup</Link>
            <Link to="/courses" className="hover:text-violet-400 transition-colors">Kindergarten Adventure</Link>
            <Link to="/courses" className="hover:text-violet-400 transition-colors">Creative Arts & Crafts</Link>
            <Link to="/courses" className="hover:text-violet-400 transition-colors">Little Scientists STEM</Link>
            <Link to="/courses" className="hover:text-violet-400 transition-colors">Reading & Phonics Club</Link>
          </div>
        </div>

        {/* Portals & Accounts */}
        <div className="lg:col-span-2.5 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Quick Actions
          </h4>
          <div className="flex flex-col gap-2.5 text-xs font-light">
            <Link to="/student/login" className="hover:text-violet-400 transition-colors">Parent Log-In</Link>
            <Link to="/admin/dashboard" className="hover:text-violet-400 transition-colors">Admin Dashboard</Link>
            <Link to="/admissions" className="hover:text-violet-400 transition-colors">Enroll Today</Link>
            <Link to="/events" className="hover:text-violet-400 transition-colors">School Events</Link>
            <Link to="/contact" className="hover:text-violet-400 transition-colors">Help & Help Desk</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Smart HQ
          </h4>
          <div className="flex flex-col gap-3.5 text-xs font-light text-slate-400">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
              <span>450 Academy Road,<br />San Francisco, CA 94107</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-violet-500 shrink-0" />
              <span>+1 (800) 555-0188</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-violet-500 shrink-0" />
              <span>registrations@smartacademy.edu</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 bg-slate-950/50 py-8 text-xs font-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>
            &copy; {new Date().getFullYear()} Smart Academy Kids School. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy Code</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Conduct Guidelines</a>
            <a href="#" className="hover:text-violet-400 transition-colors">SLA Agreements</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
