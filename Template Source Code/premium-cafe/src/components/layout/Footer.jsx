import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-accent py-12 px-6 md:px-12 mt-auto border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="font-serif text-3xl font-bold tracking-wider mb-2">STELLAR CAFE</h2>
          <p className="text-sm font-light text-accent/70 max-w-sm">Crafted Coffee. Made With Passion. Serving handcrafted coffee, artisan pastries, and unforgettable experiences every single day.</p>
        </div>
        <div className="text-right text-sm">
          <p>© 2026 Stellar Cafe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
