import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, HeartPulse, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Upper Grid (12 Columns) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Column (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow shadow-sky-500/20 group-hover:bg-sky-600 transition-colors">
              <HeartPulse className="w-5 h-5" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Med<span className="text-emerald-500 group-hover:text-emerald-600 transition-colors">Care</span>
            </span>
          </Link>

          <p className="text-xs font-light text-slate-400 leading-relaxed max-w-sm">
            Providing high-fidelity, comprehensive medical diagnoses, emergency cardiac care, pediatric therapies, and dental hygiene procedures with world-class specialist surgeons.
          </p>

          <div className="flex gap-4">
            <a href="https://linkedin.com" className="p-2 bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white rounded transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" className="p-2 bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white rounded transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" className="p-2 bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white rounded transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Clinical Services (2.5 Cols) */}
        <div className="lg:col-span-2.5 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            Clinical Units
          </h4>
          <div className="flex flex-col gap-2.5 text-xs font-light">
            <Link to="/services" className="hover:text-sky-400 transition-colors">Cardiology Department</Link>
            <Link to="/services" className="hover:text-sky-400 transition-colors">Neurology Ward</Link>
            <Link to="/services" className="hover:text-sky-400 transition-colors">Orthopedics & Spine</Link>
            <Link to="/services" className="hover:text-sky-400 transition-colors">Pediatric ICU</Link>
            <Link to="/services" className="hover:text-sky-400 transition-colors">Dental Clinic</Link>
            <Link to="/services" className="hover:text-sky-400 transition-colors">General Consultations</Link>
          </div>
        </div>

        {/* Support & Resources (2 Cols) */}
        <div className="lg:col-span-2 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            For Patients
          </h4>
          <div className="flex flex-col gap-2.5 text-xs font-light">
            <Link to="/booking" className="hover:text-sky-400 transition-colors">Online Booking Desk</Link>
            <Link to="/doctors" className="hover:text-sky-400 transition-colors">Find Specialist</Link>
            <Link to="/contact" className="hover:text-sky-400 transition-colors">Billing & Insurances</Link>
            <Link to="/contact" className="hover:text-sky-400 transition-colors">Emergency Triages</Link>
            <a href="#" className="hover:text-sky-400 transition-colors">Patient Portals</a>
          </div>
        </div>

        {/* Contact Info (3.5 Cols) */}
        <div className="lg:col-span-3.5 flex flex-col gap-4.5">
          <h4 className="font-heading text-xs font-semibold text-white tracking-widest uppercase">
            MedCare Campus
          </h4>
          <div className="flex flex-col gap-3.5 text-xs font-light text-slate-400">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>100 Health Boulevard,<br />Metro City, NY 10001</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-sky-500 shrink-0" />
              <span>+1 (800) 555-0155</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-sky-500 shrink-0" />
              <span>admissions@medcarehospital.com</span>
            </div>
            <div className="flex gap-2.5 items-center text-emerald-400 font-medium">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Outpatient Consults: 24/7 Support</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="border-t border-slate-800 bg-slate-950/50 py-8 text-xs font-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>
            &copy; {currentYear} MedCare Hospital Group. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-400 transition-colors">Patient Privacy Code</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Care</a>
            <a href="#" className="hover:text-sky-400 transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
