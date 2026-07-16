import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-secondary">
        <div>
          <span className="text-xl font-bold text-text-primary tracking-tighter">
            Alex<span className="text-accent">.</span>
          </span>
        </div>
        <p>© {new Date().getFullYear()} Alex. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
