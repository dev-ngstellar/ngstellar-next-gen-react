import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  showIcon = false, 
  className = '',
  icon = <FaArrowRight /> 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 active:scale-95 focus:outline-none select-none z-10 text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-md shadow-primary/20",
    secondary: "bg-white text-primary border border-primary/20 hover:bg-light hover:border-primary/40 shadow-sm",
    accent: "bg-accent text-white hover:bg-accent-light shadow-md shadow-accent/20",
    glass: "glass-card text-primary border border-white/50 hover:bg-white/40 shadow-sm",
    dark: "bg-dark text-white hover:bg-dark-light shadow-md shadow-dark/20",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center gap-2">
        {children}
        {showIcon && <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default Button;
