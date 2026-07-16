import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { Target, Lightbulb, Compass } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-20 md:py-32 relative bg-surface/10 border-y border-border/50">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <SectionHeader title="The Journey" subtitle="My Story" align="left" />
            
            <div className="prose prose-lg prose-invert max-w-none text-muted">
              <p>
                My journey into digital design and engineering started over a decade ago when I built my first website using raw HTML and CSS. Since then, I've been fascinated by the intersection of aesthetics and logic.
              </p>
              <p>
                Over the years, I've had the privilege of working with ambitious startups, established enterprise companies, and creative agencies. This diverse experience has taught me that the best digital products are born from a deep understanding of both user needs and business objectives.
              </p>
              <p>
                Today, I focus exclusively on creating ultra-premium web experiences. I believe that in a crowded digital landscape, superior design and flawless performance are the ultimate competitive advantages.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            <ValueCard 
              icon={<Target size={24} />} 
              title="Mission" 
              description="To elevate the standard of the web by building products that are as beautiful as they are functional." 
              delay={0}
            />
            <ValueCard 
              icon={<Lightbulb size={24} />} 
              title="Vision" 
              description="A digital world where every interaction feels deliberate, polished, and perfectly executed." 
              delay={0.1}
            />
            <ValueCard 
              icon={<Compass size={24} />} 
              title="Values" 
              description="Uncompromising quality, continuous learning, and a relentless focus on the user experience." 
              delay={0.2}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, description, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-8 flex gap-6 items-start group hover:border-accent/30 transition-colors"
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
