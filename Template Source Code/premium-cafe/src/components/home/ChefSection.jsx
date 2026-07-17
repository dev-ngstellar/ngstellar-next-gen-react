import React from 'react';
import { motion } from 'framer-motion';

export default function ChefSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 order-2 md:order-1"
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Master Barista</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Julian Rossi</h2>
          
          <blockquote className="text-2xl font-serif italic text-text-muted mb-8 border-l-4 border-secondary pl-6 py-2">
            "Coffee is a language in itself. My goal is to speak it fluently, translating the bean's journey from farm to cup in every single pour."
          </blockquote>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <p className="text-text-main font-medium">World Barista Champion (2023)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <p className="text-text-main font-medium">15+ Years Roasting Experience</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <p className="text-text-main font-medium">Certified Q Grader</p>
            </div>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 order-1 md:order-2 w-full relative"
        >
           <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop" 
                alt="Master Barista Julian Rossi" 
                className="w-full h-full object-cover"
              />
           </div>
        </motion.div>
        
      </div>
    </section>
  );
}
