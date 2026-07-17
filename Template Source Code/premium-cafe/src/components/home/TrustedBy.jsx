import React from 'react';

export default function TrustedBy() {
  const partners = ["Coffee Bean", "Lavazza", "Blue Tokai", "Local Farms", "Organic Suppliers", "Coffee Bean", "Lavazza", "Blue Tokai", "Local Farms", "Organic Suppliers"];

  return (
    <section className="py-12 bg-card border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <p className="text-center text-sm font-medium tracking-widest text-text-muted uppercase">Trusted By Premium Brands</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 items-center px-8">
          {partners.map((partner, idx) => (
            <span key={idx} className="text-2xl font-serif font-bold text-text-muted/40 hover:text-primary transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-16 items-center px-8">
          {partners.map((partner, idx) => (
            <span key={idx} className="text-2xl font-serif font-bold text-text-muted/40 hover:text-primary transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
