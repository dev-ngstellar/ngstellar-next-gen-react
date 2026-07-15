import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-serif font-semibold tracking-wider text-[var(--text)]">NG Stellar</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="hover:text-[var(--accent)] transition-colors">Home</a>
          <a href="/gallery" className="hover:text-[var(--accent)] transition-colors">Gallery</a>
          <a href="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
          <a href="/contact" className="px-6 py-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all rounded-full">Book Session</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--surface)] border-b border-[var(--border)] py-6 px-6 flex flex-col gap-6 shadow-2xl">
          <a href="/" className="text-lg hover:text-[var(--accent)] transition-colors">Home</a>
          <a href="/gallery" className="text-lg hover:text-[var(--accent)] transition-colors">Gallery</a>
          <a href="/contact" className="text-lg hover:text-[var(--accent)] transition-colors">Contact</a>
          <a href="/contact" className="text-lg text-[var(--accent)] font-medium">Book Session &rarr;</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
