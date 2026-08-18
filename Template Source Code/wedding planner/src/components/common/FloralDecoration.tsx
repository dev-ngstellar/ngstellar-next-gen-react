import React from 'react';

interface FloralDecorationProps {
  position?: 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const FloralDecoration: React.FC<FloralDecorationProps> = () => {
  return null;
};

export const OrganicLineDecoration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={`absolute pointer-events-none z-0 text-accent/20 ${className}`}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100,50 Q250,150 200,300 T450,550"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      <path
        d="M50,200 C150,100 350,400 550,250"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="200" cy="300" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="450" cy="550" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
};
