import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO at NovaTech",
      text: "The level of detail and polish in the final product exceeded all our expectations. A true master of frontend engineering and design.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Founder, Lumiere",
      text: "Working together was a breeze. They understood our vision perfectly and translated it into a beautiful, high-performing digital experience.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager, Stripe",
      text: "Unparalleled expertise in React and Framer Motion. Brought our static designs to life with animations that feel incredibly premium and natural.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 relative bg-surface/10 border-y border-border/50 overflow-hidden">
      <div className="container">
        <SectionHeader title="Client Feedback" subtitle="Testimonials" />
        
        <div className="max-w-4xl mx-auto relative mt-12">
          {/* Decorative quotes */}
          <div className="absolute -top-10 -left-10 text-accent/20 rotate-180">
            <Quote size={120} />
          </div>
          
          <div className="glass-panel p-10 md:p-16 relative z-10 min-h-[350px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-heading leading-relaxed mb-10 text-primary">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30 p-1">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
