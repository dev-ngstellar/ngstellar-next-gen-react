import React from 'react';
import { Container } from './Container';

interface PageBannerProps {
  imageSrc: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  imageSrc,
  eyebrow,
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="relative w-full h-[220px] sm:h-[270px] md:h-[310px] lg:h-[340px] flex items-center justify-center overflow-hidden bg-text text-surface pt-16 sm:pt-20 pb-6">
      {/* Static Background Image Layer with Subtle Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center animate-[zoomOut_2s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        />

        {/* Soft Luxury Overlay for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-text/85 via-text/50 to-text/35" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Foreground Content Layer */}
      <Container className="relative z-10 text-center flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-1.5 sm:space-y-2.5">
          {eyebrow && (
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-accent block animate-in fade-in slide-in-from-bottom-2 duration-500">
              {eyebrow}
            </span>
          )}

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-surface max-w-3xl mx-auto drop-shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-base font-light text-surface/90 leading-relaxed max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="pt-2 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
