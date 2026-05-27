import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket, FaHandshake, FaDraftingCompass } from 'react-icons/fa';
import BorderBeam from '../components/BorderBeam';
import StarBorder from '../components/StarBorder';

import Typewriter from '../components/Typewriter';
import Marquee from '../components/Marquee';

export default function Careers() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Careers - Join Our Team | NG Stellar</title>
        <meta
          name="description"
          content="Build your future with NG Stellar. Explore current job openings and career opportunities."
        />
        <meta
          name="keywords"
          content="Careers, Job Openings, Hiring, Tech Jobs, Software Engineer, Join Our Team, Employment"
        />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden flex items-center justify-center pt-20 pb-10 md:py-24">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
         </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 py-10 text-center"
        >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Careers
            </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight h-auto flex flex-col justify-center gap-2">
            <span>We’re Always Looking For</span>
            <span className="block mt-2 md:mt-4">
               <Typewriter 
                 words={['Passionate', 'Curious', 'Driven']} 
                 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400"
                 wait={2000}
               />
            </span>
            <span className="block mt-2 md:mt-3">People Who Love Building Meaningful Digital Solutions.</span>
          </h1>
          
          <div className="mt-12">
            <Link to="/contact" className="order-1 md:order-none inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-secondary-500/40 hover:scale-105 active:scale-95">
                Get Started
              </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. WORK PHILOSOPHY / ABOUT WORK */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Work on  <span
                    className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent drop-shadow-md font-extrabold"
                    style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
                    }}
                  >
                   real projects 
                  </span> that matter.
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                At our company, you’ll work on real projects across <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >multiple industries</span>, collaborate with a <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >supportive team</span>, and grow your skills in a practical, hands-on environment.
              </p>
              <p>
                We value creativity, responsibility, and commitment—and we <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >respect timelines</span> as much as ideas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               {[
                 "Real Projects", "Multiple Industries", "Supportive Team", "Hands-on Learning"
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                     <span className="text-slate-300 font-medium">{item}</span>
                  </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                 <img 
                   src="/aboutus-image2.webp" 
                   alt="Team Collaboration" 
                   className="w-full h-130 object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 sm:block hidden"
                 />
                 <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-white font-bold text-xl">Grow With Us</p>
                    <p className="text-slate-300 text-sm">Every day is a learning opportunity.</p>
                 </div>
             </div>
             {/* Decorative blob behind */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </section>

      {/* 3. WHO WILL FEEL AT HOME HERE */}
      <section className="py-20 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
         
         <div className="text-center mb-16 px-4">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Culture
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">Who Will Feel at Home Here?</h3>
         </div>

         {/* Marquee Rows */}
         <div className="space-y-8">
            {/* Row 1 - Left */}
            <Marquee speed={0.2} direction="left" className="flex overflow-hidden relative w-full after:absolute after:inset-y-0 after:left-0 after:w-32 after:bg-gradient-to-r after:from-slate-950 after:to-transparent after:z-10 before:absolute before:inset-y-0 before:right-0 before:w-32 before:bg-gradient-to-l before:from-slate-950 before:to-transparent before:z-10">
                  {[...Array(2)].map((_, i) => (
                     <div key={i} className="flex gap-4 sm:gap-4 pr-4 sm:pr-4">
                        {["Freshers", "Designers", "Developers", "Marketers", "Strategists", "Creators", "Thinkers"].map((role, idx) => (
                           <div key={idx} className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-base sm:text-xl font-light text-slate-300">
                              {role}
                           </div>
                        ))}
                     </div>
                  ))}
            </Marquee>

            {/* Row 2 - Right */}
            <Marquee speed={0.2} direction="right" className="flex overflow-hidden relative w-full after:absolute after:inset-y-0 after:left-0 after:w-32 after:bg-gradient-to-r after:from-slate-950 after:to-transparent after:z-10 before:absolute before:inset-y-0 before:right-0 before:w-32 before:bg-gradient-to-l before:from-slate-950 before:to-transparent before:z-10">
                  {[...Array(2)].map((_, i) => (
                     <div key={i} className="flex gap-4 sm:gap-8 pr-4 sm:pr-8">
                        {["People First", "Product Driven", "Design Obsessed", "Quality Focused", "Operations", "Administration", "Ownership"].map((role, idx) => (
                           <div key={idx} className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm text-base sm:text-xl font-light text-indigo-200">
                              {role}
                           </div>
                        ))}
                     </div>
                  ))}
            </Marquee>
         </div>
      </section>

      {/* 4. WHAT YOU CAN EXPECT */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What You Can Expect ?</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Meaningful Projects", desc: "Challenging work that makes a real impact.", icon: <FaRocket /> },
                { title: "Collaborative Culture", desc: "A respectful environment where every voice matters.", icon: <FaUsers /> },
                { title: "Learning & Growth", desc: "Opportunities to upskill and take on new challenges.", icon: <FaLightbulb /> },
                { title: "Clear Communication", desc: "Honest feedback and clear expectations always.", icon: <FaHandshake /> },
                { title: "Quality Over Shortcuts", desc: "We take pride in building things the right way.", icon: <FaCheckCircle /> },
                { title: "Ownership", desc: "Take responsibility and lead your own path.", icon: <FaDraftingCompass /> }
              ].map((card, idx) => (
                <motion.article 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-700/50 bg-gradient-to-b from-[#0b1024] via-[#050819] to-[#050716] p-6 shadow-[0_30px_80px_rgba(5,8,30,0.9)] cursor-pointer"
                >
                   {/* Animated gradient glow background */}
                   <motion.div
                     className="pointer-events-none absolute inset-0 rounded-[28px] opacity-40"
                     style={{
                       background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.3), transparent 60%), radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.25), transparent 70%)'
                     }}
                     animate={{
                       opacity: [0.3, 0.5, 0.3],
                     }}
                     transition={{
                       duration: 3,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                   />
     
                   {/* Hover glow effect */}
                   <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
     
                   {/* Icon container */}
                   <div className="relative z-10 flex items-center justify-center h-32">
                     <motion.div
                       animate={{
                         scale: [1, 1.1, 1],
                       }}
                       transition={{
                         duration: 4,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       className="text-indigo-400 text-6xl" 
                     >
                       {card.icon}
                     </motion.div>
                   </div>
     
                   {/* Content box at bottom */}
                   <div className="relative z-10 mt-4 rounded-2xl bg-slate-900/60 border border-slate-700/30 px-4 py-4 backdrop-blur-sm group-hover:bg-slate-900/70 transition-colors duration-300">
                     <h3 className="text-white font-semibold text-sm mb-2">
                       {card.title}
                     </h3>
                     <p className="text-xs leading-relaxed text-slate-300">
                       {card.desc}
                     </p>
                   </div>
                </motion.article>
              ))}
           </div>
        </div>
      </section>

      {/* 5. VALUES & MINDSET STATEMENT */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary-900/20 via-slate-900 to-secondary-900/20 border-y border-white/5">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
           <StarBorder as="div" className="w-full text-center p-10 md:p-16 bg-slate-900/40 backdrop-blur-md" color="#335fa8" speed="4s">
               <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-200 leading-tight mb-8">
                 "If you believe in creating value, meeting commitments, and delivering work you’re proud of—we’d love to hear from you."
               </blockquote>
               
               <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full mb-8"></div>
   
               <div className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                 <p className="mb-3">We don’t look for perfection.</p>
                 <p className="text-white font-medium">We look for people who are willing to <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >learn </span> , take <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >responsibility </span>, and <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >grow </span>with the team.</p>
               </div>
           </StarBorder>
        </motion.div>
      </section>

      {/* 6. CALL TO ACTION - APPLY */}
      <section id="apply" className="py-24 relative overflow-hidden">
        
         {/* Background Glow */}
              
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Start?</h2>
            
            <div className="relative rounded-3xl overflow-hidden p-[1px] shadow-2xl">
                  <BorderBeam />
                  <div className="relative z-10 h-full w-full rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-10 md:p-14 bg-white/5">
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-40"
                  style={{
                    background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.3), transparent 60%), radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.25), transparent 70%)'
                  }}
                  animate={{
                    opacity: [0.7, 0.1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                     <p className="text-xl text-slate-300 mb-2">Send us your resume or portfolio.</p>
                     <p className="text-lg text-slate-400 mb-10">Tell us why you’d like to work with us.</p>
                     
                     <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="mailto:careers@ngstellar.com" className="cursor-pointer order-1 md:order-none inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-secondary-500/40 hover:scale-105 active:scale-95">
                Send Resume
              </a>
                        <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/5 transition-all">
                           Contact Us
                        </a>
                     </div>
                     
                     <p className="mt-10 text-indigo-300 font-semibold tracking-wide text-lg">
                        Let’s build great things together.
                     </p>
                  </div>
            </div>
         </div>
      </section>

    </div>
  );
}
