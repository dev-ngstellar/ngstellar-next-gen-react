import React from 'react';
import { Link } from 'react-router-dom';
import { useSpecialty } from '../../hooks/useSpecialty';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBriefcaseMedical, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { activeConfig } = useSpecialty();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Departments', path: '/departments' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaLinkedinIn />, url: '#' },
    { icon: <FaYoutube />, url: '#' }
  ];

  return (
    <footer className="bg-dark text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2.5 group select-none">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md transition-transform group-hover:rotate-12">
              <FaBriefcaseMedical size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base md:text-lg tracking-tight text-white leading-none">
                {activeConfig.name.split(' ')[0]}
              </span>
              <span className="text-[10px] text-primary-light font-medium tracking-wider uppercase">
                {activeConfig.type}
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 mt-2">
            Providing premium medical care with experienced doctors, cutting-edge clinical facilities, and compassionate recovery guidelines.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map((s, idx) => (
              <a 
                key={idx} 
                href={s.url} 
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-base tracking-wide uppercase">Quick Links</h4>
          <ul className="grid grid-cols-1 gap-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-primary-light transition-colors flex items-center gap-1.5">
                  <span className="text-[10px]">▶</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-base tracking-wide uppercase">Working Hours</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Weekdays:</span>
              <span className="text-white font-medium">{activeConfig.hours?.weekdays || '8:00 AM - 8:00 PM'}</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Saturday:</span>
              <span className="text-white font-medium">{activeConfig.hours?.saturday || '9:00 AM - 5:00 PM'}</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Emergency Services:</span>
              <span className="text-accent font-bold">{activeConfig.hours?.emergency || '24/7 Available'}</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-base tracking-wide uppercase">Get In Touch</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary-light mt-1 flex-shrink-0" />
              <span>{activeConfig.address || 'Stellar Towers, Sector 62, Golf Course Road, Gurgaon, India'}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary-light flex-shrink-0" />
              <a href={`tel:${activeConfig.emergencyNumber}`} className="hover:text-primary-light transition-colors">
                {activeConfig.emergencyNumber}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary-light flex-shrink-0" />
              <a href={`mailto:${activeConfig.email || 'info@stellarhealthcare.com'}`} className="hover:text-primary-light transition-colors">
                {activeConfig.email || 'info@stellarhealthcare.com'}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copywrite Bottom */}
      <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} {activeConfig.name}. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
