import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { siteConfig } from '../../data/siteConfig';
import { navigationLinks } from '../../data/navigation';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmitNewsletter = (data) => {
    alert(`Newsletter subscription registered for: ${data.email}`);
    reset();
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-white text-lg">
              C
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              CONSTRUCT<span className="text-primary">INFRA</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Delivering next-generation construction, engineering, and infrastructure services through sustainable design, safety compliance, and robust project governance.
          </p>
          <div className="flex flex-col gap-2 mt-2 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-primary text-lg shrink-0" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-primary text-lg shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-primary text-lg shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-base font-bold text-white border-l-3 border-primary pl-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services & Projects */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-base font-bold text-white border-l-3 border-primary pl-3">
            Our Services
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            {servicesData.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className="hover:text-primary transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-base font-bold text-white border-l-3 border-primary pl-3">
            Newsletter
          </h3>
          <p className="text-slate-400 text-sm">
            Subscribe to our industrial bulletin to receive the latest updates.
          </p>
          <form onSubmit={handleSubmit(onSubmitNewsletter)} className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary transition-colors"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <span className="text-xs text-red-400 mt-1 block">{errors.email.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Construction Template. All rights reserved. Designed for commercial resale.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
