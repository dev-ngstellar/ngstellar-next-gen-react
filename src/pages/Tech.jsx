import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { FaCode, FaServer, FaShoppingCart, FaShieldAlt, FaCloud, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Tech() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30">
      <Helmet>
        <title>Technology Solutions - NG Stellar</title>
        <meta
          name="description"
          content="Cutting-edge technology services including software development, cloud solutions, and AI."
        />
        <meta
          name="keywords"
          content="Technology Solutions, Artificial Intelligence, Cloud Computing, Software Architecture, Modern Tech Stack, Digital Engineering"
        />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-16 md:pb-20 overflow-hidden">
         {/* Background Elements - Tech/Grid Theme */}
         <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[100px] animate-pulse"></div>
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
             
             {/* Floating Code Elements */}
             <motion.div 
               animate={{ y: [0, -20, 0] }} 
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 right-[10%] text-slate-800 text-6xl opacity-20 font-mono hidden lg:block"
             >
                {`{ }`}
             </motion.div>
             <motion.div 
               animate={{ y: [0, 20, 0] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-1/4 left-[10%] text-slate-800 text-6xl opacity-20 font-mono hidden lg:block"
             >
                {`</>`}
             </motion.div>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="space-y-8 flex flex-col items-center"
             >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                  Tech Services
                </span>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight tracking-tight drop-shadow-lg max-w-5xl mx-auto">
                   Robust Architecture. <br/>
                   Seamless Functionality. <br/>
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
                      style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #7db941 100%)'
                      }}
                    >
                      Future-Ready Code.
                    </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                   We combines engineering excellence with creative flair to build digital platforms that drive business results. We don't just build websites; we build engines for growth.
                </p>

               <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link to='/contact' className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:brightness-110 hover:shadow-2xl hover:shadow-secondary-500/40 hover:scale-105 active:scale-95">
                     Discuss Your Project
                  </Link>
                  <Link to="/templates" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md">
                     View Templates
                  </Link>
               </div>
             </motion.div>
         </div>
      </section>


      {/* 2. OVERVIEW SECTION - "The Engine Room" */}
      <section className="py-24 bg-white relative border-y border-white/5">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                   <h2 className="text-3xl md:text-4xl font-black font-bold font-sans text-slate-900 mb-6">
                      Your Website is Your <br/>
                       <span
              className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
              }}
            > 24/7 Headquarters</span>
                   </h2>
                   <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      In the digital age, speed, security, and scalability aren't optional—they're fundamental. A beautiful design means nothing if it doesn't load instantly or breaks under pressure.
                   </p>
                   <div className="flex gap-4">
                       <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <FaCheckCircle className="text-secondary-600" /> Fast
                       </div>
                       <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <FaCheckCircle className="text-secondary-600" /> Secure
                       </div>
                       <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <FaCheckCircle className="text-secondary-600" /> Scalable
                       </div>
                   </div>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative group"
                >
                   <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                   <div className="relative p-8 bg-slate-950 rounded-xl border border-slate-200/20 font-mono text-sm text-slate-400 overflow-hidden shadow-2xl">
                       <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       </div>
                       <p className="text-green-400">$ initializing_core_systems...</p>
                       <p className="mt-2"><span className="text-blue-400">const</span> <span className="text-yellow-400">growthEngine</span> = <span className="text-purple-400">new</span> Engine();</p>
                       <p className="mt-2">growthEngine.<span className="text-blue-300">optimize</span>({'{'} <br/>
                       &nbsp;&nbsp;performance: <span className="text-orange-400">'max'</span>,<br/>
                       &nbsp;&nbsp;security: <span className="text-orange-400">'strict'</span>,<br/>
                       &nbsp;&nbsp;uptime: <span className="text-orange-400">'99.9%'</span><br/>
                       {'}'});</p>
                       <p className="mt-2 text-slate-500 animate-pulse">_</p>
                   </div>
                </motion.div>
            </div>
         </div>
      </section>


      {/* 3. KEY OFFERINGS - BENTO GRID */}
      <section className="py-20 bg-slate-950">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Key Offerings</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">Technical excellence tailored to your specific business logic.</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4">
                
                {/* 1. Custom Website Development (Large - Spans 2 cols, 2 rows on desktop) */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="md:col-span-2 md:row-span-2 bg-slate-900/50 rounded-3xl p-6 border border-white/5 hover:border-primary-500/30 transition-all group relative overflow-hidden flex flex-col justify-between"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                       <FaLaptopCode className="text-9xl" />
                    </div>
                    <div className="relative z-10">
                       <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-3xl text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                          <FaCode />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-3">Custom Website Development</h3>
                       <p className="text-slate-400 leading-relaxed mb-6">
                          Bespoke websites built from the ground up using modern technologies (React, Node, PHP, Python) tailored to your specific business logic.
                       </p>
                    </div>
                    <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 font-mono text-xs text-slate-400 group-hover:border-primary-500/20 transition-colors">
                       import {'{'} Future {'}'} from 'stellar-tech';
                    </div>
                </motion.div>

                {/* 2. E-Commerce Development (Wide - Spans 2 cols) */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="md:col-span-2 lg:col-span-2 bg-slate-900/50 rounded-3xl p-6 border border-white/5 hover:border-primary-500/30 transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center"
                >
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex-shrink-0 flex items-center justify-center text-3xl text-purple-400 group-hover:scale-110 transition-transform">
                       <FaShoppingCart />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">E-Commerce Development</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">
                          Building secure, high-converting online stores with seamless payment gateway integrations and inventory management.
                       </p>
                    </div>
                </motion.div>

                {/* 3. Web Application Development (Tall - Spans 1 col, 2 rows) */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="md:col-span-1 md:row-span-2 bg-slate-900/50 rounded-3xl p-6 border border-white/5 hover:border-primary-500/30 transition-all group flex flex-col"
                >
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-3xl text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                       <FaCloud />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Web App Development</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                       Creating complex, cloud-based applications and portals for internal business processes or customer-facing services.
                    </p>
                    <div className="mt-auto flex gap-2">
                       <span className="px-3 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">SaaS</span>
                       <span className="px-3 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">Portals</span>
                    </div>
                </motion.div>

                {/* 4. CMS Solutions (Spans 2 rows on LG to fill gap) */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="md:col-span-1 lg:row-span-2 bg-slate-900/50 rounded-3xl p-6 border border-white/5 hover:border-primary-500/30 transition-all group flex flex-col justify-between"
                >
                    <div className="">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-2xl text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                           <FaServer />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">CMS Solutions</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                           Expert implementation of WordPress or Shopify with full content control.
                        </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                         <span className="text-[10px] text-slate-500 uppercase tracking-wider">Headless</span>
                         <span className="text-[10px] text-slate-500 uppercase tracking-wider">Traditional</span>
                    </div>
                </motion.div>

                {/* 5. Maintenance & Security (Spans 2 cols on LG to fill bottom layer) */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="md:col-span-2 lg:col-span-2 bg-slate-900/50 rounded-3xl p-6 border border-white/5 hover:border-primary-500/30 transition-all group flex flex-col md:flex-row gap-6 items-center"
                >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex-shrink-0 flex items-center justify-center text-2xl text-green-400 group-hover:scale-110 transition-transform">
                       <FaShieldAlt />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Security & Support</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                           Ongoing updates, backups, and cyber threat protection for your assets.
                        </p>
                    </div>
                </motion.div>

            </div>
         </div>
      </section>


      {/* 4. FINAL CTA */}
      {/* <section className="py-20 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans">
               Ready to update your <br/>
               <span className="text-primary-400">digital infrastructure?</span>
            </h2>
              <button className="order-1 md:order-none inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-secondary-500/40 hover:scale-105 active:scale-95">
                Start Your Project
              </button>
         </div>
      </section> */}

    </div>
  );
}

// Icon helper component for checkmarks if needed
function FaCheckCircle({ className }) {
    return (
        <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    )
}
