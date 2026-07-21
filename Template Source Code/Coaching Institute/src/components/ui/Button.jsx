import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const variants = {
    primary: "bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)] shadow-lg shadow-[var(--color-primary-500)]/30 hover:shadow-[var(--color-primary-500)]/50",
    secondary: "bg-[var(--color-secondary-800)] text-white hover:bg-[var(--color-secondary-900)] shadow-lg shadow-[var(--color-secondary-900)]/20",
    outline: "border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] dark:hover:bg-[var(--color-primary-900)]/30",
    glow: "bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-accent-500)] text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
      {/* Ripple/Glow effect overlay */}
      <div className="absolute inset-0 h-full w-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
    </motion.button>
  );
};

export default Button;
