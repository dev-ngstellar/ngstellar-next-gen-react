import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ 
  children, 
  variant = 'default',
  className,
  icon: Icon
}) => {
  const baseStyles = "inline-flex items-center font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-colors";
  
  const variants = {
    default: "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]",
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] dark:bg-[var(--color-primary-900)]/30 dark:text-[var(--color-primary-400)] border border-[var(--color-primary-200)] dark:border-[var(--color-primary-800)]",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
    danger: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800",
    outline: "bg-transparent text-[var(--color-text)] border border-[var(--color-border)]",
    glow: "bg-[var(--color-primary-500)]/10 text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)] border border-[var(--color-primary-500)]/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  };

  return (
    <span className={cn(baseStyles, variants[variant], "text-[10px] px-2.5 py-0.5 gap-1", className)}>
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
};

export default Badge;
