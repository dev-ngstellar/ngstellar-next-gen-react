import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wider uppercase rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C99683] focus:ring-offset-2 focus:ring-offset-[#101214] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-[#C99683] text-[#101214] font-bold hover:bg-[#B88572] shadow-lg shadow-black/50 hover:shadow-[#C99683]/20 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-transparent text-[#F7F4F0] border border-[#C99683]/40 hover:border-[#C99683] hover:bg-[#C99683]/10 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border border-[#282523] bg-[#151719] text-[#F7F4F0] hover:border-[#C99683]/60 hover:bg-[#1B1B1D] hover:-translate-y-0.5 active:translate-y-0'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs px-6 py-3.5 gap-2',
    lg: 'text-sm px-8 py-4 gap-2.5'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
