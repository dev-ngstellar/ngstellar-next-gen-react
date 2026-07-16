import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight, MessageCircle, Globe, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-accent"></span>
              <span className="uppercase tracking-widest text-sm font-medium text-accent">Hello, I am</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading leading-[1.1] mb-6">
              Creative<br />
              <span className="text-muted italic font-light">Developer</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base sm:text-xl text-muted mb-10 max-w-lg leading-relaxed">
              I engineer premium digital experiences that blend aesthetic design with flawless performance. Currently building next-generation web applications.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
              <MagneticButton className="bg-primary text-background px-8 py-4 rounded-full text-lg hover:bg-primary/90">
                Start a Project
                <ArrowRight size={20} className="ml-2 inline" />
              </MagneticButton>
              
              <div className="flex items-center gap-4">
                <SocialIcon Icon={Globe} />
                <SocialIcon Icon={MessageCircle} />
                <SocialIcon Icon={Mail} />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visuals / Floating Cards */}
          <div className="relative h-[500px] lg:h-[700px] hidden md:block">
            {/* Main Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[550px] rounded-3xl overflow-hidden glass-panel relative p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-surface to-background/50 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                    alt="Abstract Art" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  {/* Decorative Elements Inside Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass border-white/20">
                    <div className="text-sm text-muted mb-1">Available for work</div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                      </span>
                      <span className="font-medium">Accepting new clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <FloatingBadge 
              title="React.js" 
              delay={0}
              className="top-20 left-10 lg:left-0"
            />
            <FloatingBadge 
              title="TailwindCSS" 
              delay={1.5}
              className="top-1/3 right-10 lg:-right-4"
            />
            <FloatingBadge 
              title="Framer Motion" 
              delay={3}
              className="bottom-32 left-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300">
      <Icon size={20} />
    </a>
  );
}

function FloatingBadge({ title, delay, className }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-20 glass px-6 py-3 rounded-full font-medium text-sm shadow-xl ${className}`}
    >
      {title}
    </motion.div>
  );
}
