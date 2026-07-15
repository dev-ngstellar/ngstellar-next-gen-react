import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--surface)] pt-20 pb-10 border-t border-[var(--border)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif mb-6">NG Stellar</h2>
            <p className="text-[var(--muted)] max-w-sm">
              Capturing timeless stories through light. Luxury photography for the modern world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Home</a></li>
              <li><a href="/gallery" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6">Socials</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Behance</a></li>
              <li><a href="#" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-[var(--border)] text-center text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} NG Stellar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
