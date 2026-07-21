import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)] hover:shadow-lg hover:shadow-[var(--color-primary-500)]/20 border border-transparent focus:ring-[var(--color-primary-500)]",
    secondary: "bg-[var(--color-bg-secondary)] text-[var(--color-text)] hover:bg-[var(--color-surface-200)] dark:hover:bg-[var(--color-surface-700)] border border-transparent focus:ring-[var(--color-surface-400)]",
    outline: "bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]",
    ghost: "bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] border border-transparent focus:ring-[var(--color-surface-400)]",
    gradient: "bg-gradient-to-r from-[var(--color-primary-600)] to-blue-400 text-white hover:shadow-lg hover:shadow-blue-500/25 border border-transparent focus:ring-[var(--color-primary-500)]",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-8 py-3.5 rounded-2xl gap-2.5",
    icon: "p-2.5 rounded-xl",
  };

  return (
    <button 
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={cn("shrink-0", size === 'sm' ? "w-3 h-3" : size === 'lg' ? "w-5 h-5" : "w-4 h-4")} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={cn("shrink-0", size === 'sm' ? "w-3 h-3" : size === 'lg' ? "w-5 h-5" : "w-4 h-4")} />}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
