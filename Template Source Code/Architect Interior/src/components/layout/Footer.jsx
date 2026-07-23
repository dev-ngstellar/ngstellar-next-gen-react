import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--surface-color)] border-t border-[var(--border-color)] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-heading font-bold tracking-widest text-[var(--text-main)] block">
              ARCHLUX
            </Link>
            <p className="text-[var(--text-muted)] max-w-sm">
              We create luxurious residential, commercial and hospitality interiors that blend creativity with functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.49 1.49 0 0 0-1.49 1.49c0 .82.67 1.49 1.49 1.49a1.49 1.49 0 0 0 1.49-1.49c0-.82-.67-1.49-1.49-1.49z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-[var(--text-main)]">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">Our Projects</Link></li>
              <li><Link to="/services" className="text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-[var(--text-main)]">Contact Us</h4>
            <ul className="space-y-4 text-[var(--text-muted)]">
              <li>123 Luxury Avenue, Suite 400</li>
              <li>New York, NY 10012</li>
              <li className="pt-2">
                <a href="mailto:hello@archlux.com" className="hover:text-[var(--primary-color)] transition-colors">hello@archlux.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-[var(--primary-color)] transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-[var(--text-main)]">Newsletter</h4>
            <p className="text-[var(--text-muted)] mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex group relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-[var(--border-color)] py-2 outline-none text-[var(--text-main)] focus:border-[var(--primary-color)] transition-colors pr-10"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Archlux. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--primary-color)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--primary-color)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
