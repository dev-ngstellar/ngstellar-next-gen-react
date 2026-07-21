import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props 
}, ref) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)] focus:ring-[var(--color-primary-500)] shadow-sm hover:shadow-md",
    secondary: "bg-[var(--color-surface-800)] dark:bg-[var(--color-surface-200)] text-white dark:text-black hover:bg-[var(--color-surface-950)] dark:hover:bg-white focus:ring-[var(--color-surface-500)]",
    outline: "border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-hover)] focus:ring-[var(--color-surface-500)]",
    ghost: "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] focus:ring-[var(--color-surface-500)]",
    danger: "bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] focus:ring-[var(--color-accent-500)] shadow-sm hover:shadow-md",
    editorial: "font-serif bg-transparent border-b-2 border-[var(--color-primary-500)] text-[var(--color-text)] rounded-none px-0 py-1 hover:text-[var(--color-primary-600)]"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-5 py-2.5 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-xl",
    icon: "p-2.5 rounded-lg"
  };

  const isEditorial = variant === 'editorial';

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        !isEditorial && variants[variant],
        isEditorial && variants.editorial,
        !isEditorial && sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Ripple/Glow effect overlay - skipping for editorial variant */}
      {!isEditorial && (
        <span className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-inherit"></span>
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className={cn("shrink-0", size === 'sm' ? 'w-4 h-4' : 'w-5 h-5')} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className={cn("shrink-0 transition-transform group-hover:translate-x-1", size === 'sm' ? 'w-4 h-4' : 'w-5 h-5')} />}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
