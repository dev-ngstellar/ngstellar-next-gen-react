import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layout, Globe, Lock, Code, Database, Smartphone, CheckCircle2 } from 'lucide-react';

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const FeatureShowcase = ({ title, description, features, reverse, imageMockup }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center py-20`}>
    <div className="flex-1 space-y-8">
      <Reveal>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">{title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-xl text-text-secondary font-light leading-relaxed">{description}</p>
      </Reveal>
      <div className="space-y-4 pt-4">
        {features.map((feat, i) => (
          <Reveal key={i} delay={0.2 + (i * 0.1)}>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary mb-1">{feat.title}</h4>
                <p className="text-text-secondary">{feat.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
    
    <div className="flex-1 w-full relative">
      <Reveal delay={0.3}>
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl glass-card border border-border/40 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden bg-surface/40 backdrop-blur-3xl flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none z-0"></div>
           {imageMockup}
        </div>
      </Reveal>
    </div>
  </div>
);

const Features = () => {
  const gridFeatures = [
    { icon: <Shield />, title: 'Enterprise Security', desc: 'Bank-grade encryption, SSO, and advanced role-based access control built in from day one.' },
    { icon: <Zap />, title: 'Lightning Fast', desc: 'Optimized asset delivery and edge-caching ensures sub-second load times globally.' },
    { icon: <Globe />, title: 'Global CDN', desc: 'Deploy across 100+ edge locations worldwide automatically without configuring servers.' },
    { icon: <Database />, title: 'Real-time Sync', desc: 'State synchronizes across all connected clients instantly with zero configuration.' },
    { icon: <Code />, title: 'Developer First', desc: 'Extensive API documentation, SDKs, and webhooks to integrate with your existing stack.' },
    { icon: <Smartphone />, title: 'Mobile Optimized', desc: 'Responsive components that look and feel like native applications on any device.' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Powerful tools.<br/>
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary animate-gradient-x bg-[length:200%_auto]">Zero friction.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
              Everything you need to build, scale, and manage your premium SaaS product in one unified platform.
            </p>
          </Reveal>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {gridFeatures.map((feat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card p-10 h-full group hover:-translate-y-2 transition-transform duration-500 cursor-pointer flex flex-col relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary tracking-tight">{feat.title}</h3>
                <p className="text-text-secondary leading-relaxed font-light">{feat.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-12 md:space-y-0">
          <FeatureShowcase 
            title="Design that scales with your ambition."
            description="Stop wrestling with clunky UI frameworks. Nexus provides a meticulously crafted, highly customizable design system that looks premium out of the box."
            features={[
              { title: 'Global Theme Engine', desc: 'Change the entire look and feel by modifying just a few CSS variables.' },
              { title: 'Glassmorphism Utilities', desc: 'Pre-built frosted glass effects that automatically adapt to light and dark modes.' },
              { title: 'Advanced Typography', desc: 'Perfectly balanced vertical rhythm and font scaling.' }
            ]}
            imageMockup={
              <div className="w-full h-full flex flex-col gap-4 p-8 relative z-10">
                <div className="w-full h-12 bg-surface/50 rounded-xl border border-border/30 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full bg-primary/40 mr-4"></div>
                  <div className="h-4 w-32 bg-text-primary/20 rounded"></div>
                </div>
                <div className="flex-1 bg-surface/50 rounded-xl border border-border/30 p-6 flex flex-col gap-4">
                  <div className="h-6 w-48 bg-text-primary/30 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-border/20 rounded-lg"></div>
                    <div className="h-24 bg-border/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            }
          />

          <FeatureShowcase 
            reverse
            title="Performance that converts."
            description="Milliseconds matter. Our architecture is designed from the ground up to ensure your application loads instantly, keeping your users engaged."
            features={[
              { title: 'Vite Powered', desc: 'Lightning-fast HMR and highly optimized production builds.' },
              { title: 'Code Splitting', desc: 'Automatic chunking ensures users only download the code they need.' },
              { title: 'Hardware Accelerated', desc: 'Animations use GPU-accelerated CSS transforms for buttery smooth 60fps.' }
            ]}
            imageMockup={
              <div className="w-full h-full flex items-center justify-center relative z-10">
                 {/* Simulated Performance Gauge */}
                 <div className="relative w-64 h-64 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-border/30" strokeWidth="8" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-green-500 shadow-xl" strokeWidth="8" strokeDasharray="283" strokeDashoffset="14" strokeLinecap="round" />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-5xl font-extrabold text-green-500">98</div>
                      <div className="text-sm font-semibold uppercase tracking-widest text-text-secondary mt-1">Score</div>
                    </div>
                 </div>
              </div>
            }
          />
        </div>

      </div>
    </div>
  );
};

export default Features;
