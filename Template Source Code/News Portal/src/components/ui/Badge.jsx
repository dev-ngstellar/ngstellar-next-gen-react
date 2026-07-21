import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Badge = ({ children, variant = 'default', size = 'md', className, ...props }) => {
  const variants = {
    default: "bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]",
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] dark:bg-[var(--color-primary-900)] dark:text-[var(--color-primary-300)] border border-[var(--color-primary-200)] dark:border-[var(--color-primary-800)]",
    accent: "bg-[var(--color-accent-100)] text-[var(--color-accent-700)] dark:bg-[var(--color-accent-900)] dark:text-[var(--color-accent-300)] border border-[var(--color-accent-200)] dark:border-[var(--color-accent-800)]",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
    md: "px-2.5 py-1 text-xs font-semibold",
    lg: "px-3 py-1 text-sm font-medium",
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
