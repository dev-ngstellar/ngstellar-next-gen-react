import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime = null;
    const startValue = 0;
    const endValue = Number(value) || 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * (endValue - startValue) + startValue);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <motion.span ref={ref}>
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}
