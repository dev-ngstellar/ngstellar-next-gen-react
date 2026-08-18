import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className = '',
  dark = false,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[alignment]} ${className}`}>
      {eyebrow && (
        <span className={`inline-block text-xs uppercase tracking-[0.25em] font-semibold mb-3 ${
          dark ? 'text-accent' : 'text-accent'
        }`}>
          {eyebrow}
        </span>
      )}

      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.18] ${
        dark ? 'text-surface' : 'text-text'
      }`}>
        {title}
      </h2>

      <div className={`w-12 h-[1px] my-5 ${
        dark ? 'bg-accent/70' : 'bg-accent/80'
      }`} />

      {description && (
        <p className={`text-base sm:text-lg font-light leading-relaxed max-w-2xl ${
          dark ? 'text-surface/80' : 'text-mutedText'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

