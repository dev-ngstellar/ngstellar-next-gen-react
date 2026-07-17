import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Images Collage */}
        <div className="flex-1 relative w-full h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ceab33?q=80&w=800&auto=format&fit=crop" 
              alt="Pouring Coffee" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-2/3 h-3/5 rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-background"
          >
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" 
              alt="Cafe Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            A tradition of excellent coffee.
          </h2>
          <p className="text-text-muted text-lg mb-6 leading-relaxed">
            Since 2015, we've been dedicated to bringing you the finest coffee from around the world. We believe that great coffee is more than just a drink; it's an experience.
          </p>
          <p className="text-text-muted mb-10 leading-relaxed">
            Our mission is simple: source the highest quality beans, roast them with precision, and brew every cup with care. We create a space where community thrives and conversations flow as smoothly as our espresso.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-serif font-bold text-secondary mb-1">12+</p>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wide">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-secondary mb-1">25K+</p>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wide">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-secondary mb-1">120+</p>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wide">Coffee Recipes</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-secondary mb-1">18</p>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wide">Pro Baristas</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
