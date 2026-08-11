import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#f0771a] hover:bg-[#d6620d] text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 focus:ring-amber-500',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md focus:ring-slate-700',
    accent: 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-md shadow-amber-500/20 focus:ring-amber-400',
    outline: 'border-2 border-[#f0771a] text-[#f0771a] hover:bg-orange-50 focus:ring-amber-500',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-[#f0771a] focus:ring-slate-300',
    white: 'bg-white text-slate-900 hover:bg-slate-100 shadow-md focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={`group ${combinedClasses}`} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
