import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden"
        >
          {/* Animated Background inside CTA */}
          <div className="absolute inset-0 bg-primary/95 z-0"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent opacity-60 z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading mb-8">Let's build something amazing together.</h2>
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Available for freelance opportunities. If you're looking for a developer to bring your digital vision to life, I'd love to hear from you.
            </p>
            
            <Link to="/contact">
              <MagneticButton className="bg-white text-primary px-10 py-5 rounded-full text-lg hover:bg-white/90 transition-colors shadow-2xl shadow-accent/20">
                Get in Touch
                <ArrowRight size={20} className="ml-2 inline" />
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
