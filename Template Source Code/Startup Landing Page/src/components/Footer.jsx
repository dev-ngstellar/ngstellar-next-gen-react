import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end mb-4 inline-block">
              Nexus
            </Link>
            <p className="text-text-secondary max-w-sm mb-6">
              Launch your next big idea faster. Premium startup landing page template for modern SaaS companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-text-secondary hover:text-primary transition-colors">Features</Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Changelog</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Blog</a></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
