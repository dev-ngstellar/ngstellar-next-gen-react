import React from 'react';
import Container from './Container';

export default function PageHero({ eyebrow, heading, description, image }) {
  return (
    <section className="relative pt-28 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-[#101214]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/75 to-[#101214]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#101214]/50 to-[#101214]" />
      </div>

      <Container className="relative z-10 text-center">
        {eyebrow && (
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C99683] mb-4 bg-[#C99683]/10 px-4 py-1.5 rounded-full border border-[#C99683]/30 shadow-md">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4F0] max-w-4xl mx-auto leading-[1.15]">
          {heading}
        </h1>
        {description && (
          <p className="mt-6 text-base sm:text-lg text-[#A39E98] max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
