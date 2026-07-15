import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import MagneticButton from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container">
        <SectionHeader title="Designing the future, one pixel at a time." subtitle="About Me" align="left" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted font-light leading-relaxed">
              With over a decade of experience bridging the gap between design and engineering, I specialize in building digital products that look beautiful and function flawlessly.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-muted/80 leading-relaxed">
              My approach involves a deep understanding of user psychology combined with cutting-edge technical expertise. I don't just write code; I craft experiences that resonate with users and drive business success. Whether it's a sleek landing page or a complex web application, I bring a meticulous attention to detail to every project.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6">
              <Link to="/about">
                <MagneticButton className="border border-border text-primary px-8 py-4 rounded-full text-lg hover:bg-surface transition-colors">
                  Read Full Story
                  <ArrowRight size={20} className="ml-2 inline" />
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Stats / Visuals */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <StatCard icon={<Code size={24} />} number="10+" label="Years Experience" delay={0} />
            <StatCard icon={<Palette size={24} />} number="150+" label="Projects Completed" delay={0.1} />
            <StatCard icon={<Zap size={24} />} number="99%" label="Client Satisfaction" delay={0.2} />
            <div className="glass-panel p-8 flex flex-col justify-center items-center text-center group hover:border-accent/50 transition-colors duration-500">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-500">
                <ArrowRight size={32} />
              </div>
              <p className="font-medium text-lg">View All Stats</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, number, label, delay }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }
      }}
      className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[12rem] h-auto group hover:border-accent/50 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 transform origin-top-right">
        {icon}
      </div>
      <div className="text-accent mb-4">
        {icon}
      </div>
      <div>
        <h3 className="text-4xl font-heading font-bold mb-2">{number}</h3>
        <p className="text-muted text-sm uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );
}
