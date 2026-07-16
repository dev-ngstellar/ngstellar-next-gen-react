import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Code2, Sparkles } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive, aesthetically pleasing, and highly functional user interfaces that convert visitors into loyal customers.",
      icon: <Layout size={32} />,
    },
    {
      title: "Frontend Development",
      description: "Building blazing-fast, responsive web applications using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <Code2 size={32} />,
    },
    {
      title: "Mobile App Design",
      description: "Designing seamless mobile experiences with a focus on native feel, smooth gestures, and pixel-perfect layouts.",
      icon: <Smartphone size={32} />,
    },
    {
      title: "Interaction Design",
      description: "Bringing interfaces to life with subtle micro-interactions and complex WebGL/Framer Motion animations.",
      icon: <Sparkles size={32} />,
    }
  ];

  return (
    <section className="py-20 md:py-32 relative bg-surface/10 border-y border-border/50">
      <div className="container">
        <SectionHeader title="Premium Services" subtitle="What I Do" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-3xl border border-white/5 bg-surface/40 p-10 shadow-2xl transition-all hover:scale-[1.02] hover:-translate-y-1 hover:shadow-accent/20 cursor-default group"
      >
        {/* Hover Glow Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />
        
        <div className="relative z-10">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
            {service.icon}
          </div>
          <h3 className="mb-4 text-2xl font-heading font-bold">{service.title}</h3>
          <p className="text-muted leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
