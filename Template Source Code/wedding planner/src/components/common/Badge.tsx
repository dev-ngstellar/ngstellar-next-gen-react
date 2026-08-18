import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'secondary' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-primary text-surface',
    accent: 'bg-accent/15 text-accent border border-accent/30',
    secondary: 'bg-secondary text-text',
    outline: 'border border-mutedText/30 text-mutedText',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[11px] font-medium uppercase tracking-widest rounded-none ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
