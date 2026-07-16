import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ children, className, onClick, type = 'button' }) {
  const ref = useRef(null);
  
  // Spring config for a smooth magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Limit the pull distance (multiplier)
  const x = useTransform(mouseX, (value) => value * 0.2);
  const y = useTransform(mouseY, (value) => value * 0.2);

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-colors ${className}`}
    >
      {/* Inner glow effect for premium feel */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <span className="relative z-10 font-medium">
        {children}
      </span>
    </motion.button>
  );
}
