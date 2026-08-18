import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'clip-reveal';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.15,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const getAnimationStyles = (): React.CSSProperties => {
    const transitionStyle = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, clip-path ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return {
            opacity: 0,
            transform: 'translate3d(0, 40px, 0)',
            transition: transitionStyle,
          };
        case 'slide-left':
          return {
            opacity: 0,
            transform: 'translate3d(-40px, 0, 0)',
            transition: transitionStyle,
          };
        case 'slide-right':
          return {
            opacity: 0,
            transform: 'translate3d(40px, 0, 0)',
            transition: transitionStyle,
          };
        case 'zoom-in':
          return {
            opacity: 0,
            transform: 'scale(0.94) translate3d(0, 20px, 0)',
            transition: transitionStyle,
          };
        case 'clip-reveal':
          return {
            opacity: 0,
            clipPath: 'inset(10% 0 10% 0)',
            transform: 'scale(1.05)',
            transition: transitionStyle,
          };
        case 'fade-in':
        default:
          return {
            opacity: 0,
            transition: transitionStyle,
          };
      }
    }

    return {
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1)',
      clipPath: 'inset(0 0 0 0)',
      transition: transitionStyle,
    };
  };

  return (
    <div ref={elementRef} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};
