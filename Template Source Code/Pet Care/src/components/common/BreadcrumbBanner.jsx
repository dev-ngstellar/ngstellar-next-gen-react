import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const BreadcrumbBanner = ({ title, subtitle, pageName }) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[var(--surface)] to-[var(--background)] border-b border-[var(--border)] overflow-hidden">
      
      {/* Soft Glow Background Decorations */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Breadcrumb Navigation */}
        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--muted-text)] mb-6 shadow-sm">
          <Link to="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[var(--heading)] font-semibold">{pageName}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--heading)] tracking-tight font-sans max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-[var(--muted-text)] max-w-2xl mx-auto font-sans leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
};
