import React from 'react';

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignMap = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignMap[align]} ${className}`}>
      {label && (
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C99683] mb-3 bg-[#C99683]/10 px-4 py-1.5 rounded-full border border-[#C99683]/30 shadow-sm">
          {label}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4F0] max-w-3xl leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A39E98] max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
