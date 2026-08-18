import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  fullWidth = false,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses = "group relative inline-flex items-center justify-center font-semibold transition-all duration-500 rounded-none uppercase tracking-[0.18em] text-xs focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden";
  
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-[10px]',
    md: 'px-7 py-3.5 text-xs',
    lg: 'px-9 py-4 text-xs tracking-[0.2em]',
  };

  const variantClasses = {
    primary: 'bg-primary text-surface hover:bg-primary/95 shadow-md hover:shadow-xl border border-primary/90',
    secondary: 'bg-secondary text-text hover:bg-accent/20 border border-accent/30 text-text',
    outline: 'border border-text/80 text-text hover:border-primary hover:bg-primary hover:text-surface',
    ghost: 'text-text hover:text-primary hover:bg-secondary/60',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        <span className="relative z-10">{children}</span>
        {icon && <span className="relative z-10 ml-2.5 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 ml-2.5 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};

