import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, fadeUp } from '../../animations/variants';

export default function SectionWrapper({
  children,
  id,
  className = '',
  style = {},
  stagger = 0.1,
  delay = 0,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-10% 0px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({ children, variant, className = '', style = {} }) {
  return (
    <motion.div variants={variant || fadeUp} className={className} style={style}>
      {children}
    </motion.div>
  );
}
