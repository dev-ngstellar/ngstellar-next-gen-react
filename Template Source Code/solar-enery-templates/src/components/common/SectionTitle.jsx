import React from 'react';

export const SectionTitle = ({
  badge,
  title,
  highlightText,
  subtitle,
  centered = true,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
          dark
            ? 'bg-amber-950/80 text-[#f0771a] border border-amber-800/50'
            : 'bg-orange-100/80 text-[#d6620d] border border-orange-200'
        }`}>
          <span className="w-2 h-2 rounded-full bg-[#f0771a] animate-pulse"></span>
          {badge}
        </div>
      )}
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
          dark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}{highlightText && (
            <>
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0771a] via-amber-400 to-amber-300">
                {highlightText}
              </span>
            </>
          )}
        </h2>
      )}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
