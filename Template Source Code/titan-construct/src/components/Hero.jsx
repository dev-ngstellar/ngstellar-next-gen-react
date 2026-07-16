import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, TrendingUp, Compass, Globe } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollClick = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '80px'
      }}
    >
      {/* Background soft corporate gradients */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-b from-[#F59E0B]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-12 w-[30%] h-[40%] bg-gradient-to-t from-slate-100 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div 
        className="max-w-[1440px] mx-auto w-full px-6 lg:px-[100px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
      >
        
        {/* LEFT SIDE CONTENT: 50% */}
        <div className="lg:col-span-6 flex flex-col justify-center" style={{ width: '100%' }}>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start"
            style={{ marginBottom: '24px' }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] font-bold uppercase text-[10px] tracking-[0.2em] select-none">
              <Compass size={11} className="text-[#F59E0B] animate-spin-slow" />
              Future Infrastructure
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="font-black uppercase tracking-tight text-[#0F172A] font-syne"
            style={{ 
              fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)',
              lineHeight: '1.05',
              maxWidth: '700px',
              marginBottom: '32px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Engineering <br />
            Tomorrow's <span className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">Skylines</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-[#64748B] font-light font-sans"
            style={{ 
              marginTop: '32px',
              marginBottom: '48px', 
              maxWidth: '600px',
              fontSize: '1.25rem',
              lineHeight: '1.8'
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Building world-class cities, smart infrastructure and landmark developments engineered for generations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap"
            style={{ 
              marginTop: '24px',
              gap: '20px'
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); handleScrollClick(); }}
              className="btn btn-primary !bg-[#F59E0B] !text-[#0F172A] !border-[#F59E0B] font-bold hover:!bg-transparent hover:!text-[#F59E0B]"
            >
              Explore Projects
            </a>
            <a 
              href="#investors" 
              className="btn btn-secondary !border-[#E2E8F0] !text-[#0F172A] hover:!border-[#F59E0B] hover:!text-[#F59E0B] font-bold"
            >
              Investor Relations
            </a>
          </motion.div>

          {/* Statistics below Buttons */}
          <motion.div 
            className="flex flex-wrap items-center border-t border-[#E2E8F0]"
            style={{ 
              marginTop: '60px',
              gap: '40px',
              paddingTop: '32px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0F172A] font-syne">500+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mt-1">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0F172A] font-syne">25+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mt-1">Years</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0F172A] font-syne">50M+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mt-1">Sq Ft Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0F172A] font-syne">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mt-1">Countries</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE VISUAL: 50% */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          
          {/* Main Photo Card */}
          <motion.div 
            className="relative w-full max-w-[500px] h-[550px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(15,23,42,0.15)] border border-[#E2E8F0]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{
              transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 6}px)`
            }}
          >
            <img 
              src="/dubai_skyscraper_hero.png" 
              alt="Dubai futuristic architectural construction site"
              className="w-full h-full object-cover transition-transform duration-[15s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating glass card 1 */}
          <motion.div 
            className="absolute top-10 -left-6 md:-left-10 bg-white px-5 py-3.5 rounded-2xl shadow-[0_15px_30px_rgba(15,23,42,0.08)] border border-[#E2E8F0] flex items-center gap-3.5"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ zIndex: 12 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
              <TrendingUp size={20} />
            </div>
            <div>
              <h5 className="text-[9px] uppercase tracking-widest text-[#64748B] font-extrabold">Project Completion</h5>
              <p className="text-sm font-bold text-[#0F172A]">87% Active</p>
            </div>
          </motion.div>

          {/* Floating glass card 2 */}
          <motion.div 
            className="absolute bottom-14 -right-4 md:-right-8 bg-white px-5 py-3.5 rounded-2xl shadow-[0_15px_30px_rgba(15,23,42,0.08)] border border-[#E2E8F0] flex items-center gap-3.5"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            style={{ zIndex: 12 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
              <Building2 size={20} />
            </div>
            <div>
              <h5 className="text-[9px] uppercase tracking-widest text-[#64748B] font-extrabold">Current Projects</h5>
              <p className="text-sm font-bold text-[#0F172A]">12 Mega Projects</p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer select-none text-center"
        onClick={handleScrollClick}
        animate={{
          y: [0, 6, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-[9px] tracking-[0.25em] font-bold text-[#64748B] uppercase">
          SCROLL TO EXPLORE
        </span>
        <span className="text-base font-bold text-[#F59E0B] leading-none">↓</span>
      </motion.div>
    </div>
  );
}
