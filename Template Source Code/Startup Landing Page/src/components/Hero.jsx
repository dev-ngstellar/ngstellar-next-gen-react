import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, TrendingUp, Users, Activity } from 'lucide-react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse position
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms
  const moveX1 = useTransform(springX, [-1000, 1000], [-15, 15]);
  const moveY1 = useTransform(springY, [-1000, 1000], [-15, 15]);

  const moveX2 = useTransform(springX, [-1000, 1000], [10, -10]);
  const moveY2 = useTransform(springY, [-1000, 1000], [10, -10]);

  const moveX3 = useTransform(springX, [-1000, 1000], [-8, 8]);
  const moveY3 = useTransform(springY, [-1000, 1000], [8, -8]);

  useEffect(() => {
    // Only track mouse on desktop for performance
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center of screen
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      // Use requestAnimationFrame for buttery smooth 60fps tracking
      requestAnimationFrame(() => {
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-32 pb-20">

      {/* Interactive Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-primary z-0 hidden md:block"
        style={{
          x: useTransform(springX, x => x - 200),
          y: useTransform(springY, y => y - 200),
          left: '50%',
          top: '50%',
        }}
      />

      {/* Static ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/10 blur-[100px] rounded-[100%] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-10 backdrop-blur-md shadow-[0_0_15px_rgba(94,106,210,0.15)]"
        >
          <Sparkles size={16} className="animate-pulse" /> Introducing Nexus 2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl text-text-primary"
        >
          Design that <br className="hidden md:block" />
          <span className="text-primary bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary animate-gradient-x bg-[length:200%_auto]">
            converts instantly.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 font-light"
        >
          A meticulously crafted React template for startups that refuse to blend in. Build your premium brand today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24 w-full sm:w-auto"
        >
          <button className="relative group px-8 py-4 rounded-xl bg-primary text-primary font-medium flex items-center justify-center gap-2 text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(94,106,210,0.4)] w-full sm:w-auto">
            <span className="relative z-10 flex  items-center gap-2">Start Building <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
          </button>

          <button className="px-8 py-4 rounded-xl glass font-medium hover:bg-surface/40 transition-all text-lg border border-border/50 hover:border-border hover:shadow-lg w-full sm:w-auto">
            View Components
          </button>
        </motion.div>

        {/* Central Parallax Mockup & Floating Cards */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] flex justify-center items-center">

          {/* Main Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.2 }}
            style={{ x: moveX1, y: moveY1 }}
            className="absolute z-10 w-[95%] md:w-full max-w-4xl h-[450px] md:h-[600px] rounded-2xl glass-card border border-border/40 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden bg-surface/40 backdrop-blur-3xl flex"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none z-0"></div>

            {/* Sidebar */}
            <div className="hidden md:flex w-64 h-full bg-surface/60 border-r border-border/50 flex-col py-6 px-4 z-10 relative">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center"><Rocket size={16} className="text-primary" /></div>
                <div className="font-semibold text-text-primary tracking-wide">Nexus App</div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-10 rounded-xl flex items-center px-3 gap-3 ${i === 1 ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-surface/50'}`}>
                    <div className={`w-5 h-5 rounded-md ${i === 1 ? 'bg-primary' : 'bg-border/60'}`}></div>
                    <div className="h-4 w-24 bg-border/40 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col z-10 relative overflow-hidden">
              {/* Topbar */}
              <div className="w-full h-16 border-b border-border/40 flex items-center justify-between px-8 bg-surface/30">
                <div className="h-5 w-32 bg-border/40 rounded-md"></div>
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-border/30"></div>
                  <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-8 flex-1 flex flex-col gap-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-28 bg-surface/50 rounded-2xl border border-border/30 p-5 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-border/40"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-16 bg-text-secondary/30 rounded"></div>
                        <div className="h-5 w-24 bg-text-primary/60 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Main Chart */}
                <div className="flex-1 bg-surface/50 rounded-2xl border border-border/30 p-6 flex flex-col relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-32 bg-text-primary/40 rounded"></div>
                    <div className="h-6 w-20 bg-primary/20 rounded-full"></div>
                  </div>
                  {/* Simulated chart bars */}
                  <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 mt-auto">
                    {[40, 70, 45, 90, 65, 85, 110, 75, 95].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 1: Active Users (Top Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
            style={{ x: moveX2, y: moveY2 }}
            className="absolute right-0 md:-right-16 top-10 md:top-20 z-20 glass-card p-5 rounded-2xl flex items-center gap-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/20 bg-surface/70 backdrop-blur-2xl animate-[float_6s_ease-in-out_infinite]"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Active Users</p>
              <p className="text-2xl font-bold text-text-primary tracking-tight">18.4K</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Revenue (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
            style={{ x: moveX3, y: moveY3 }}
            className="absolute right-10 md:-right-6 bottom-16 md:bottom-24 z-20 glass-card p-5 rounded-2xl flex items-center gap-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/20 bg-surface/70 backdrop-blur-2xl animate-[float_7s_ease-in-out_infinite_reverse]"
          >
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Revenue</p>
              <p className="text-2xl font-bold text-text-primary tracking-tight">$124,500</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Conversion (Far Right / Middle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
            style={{ x: moveX2, y: moveY3 }}
            className="absolute -right-5 md:-right-24 top-1/2 -translate-y-1/2 z-20 glass-card p-4 rounded-xl flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/20 bg-surface/70 backdrop-blur-2xl animate-[float_5s_ease-in-out_infinite_1s]"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mb-0.5">Conversion</p>
              <p className="text-lg font-bold text-text-primary tracking-tight">+89.4%</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
