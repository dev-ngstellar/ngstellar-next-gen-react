import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { FaPaintBrush, FaSearch, FaRegLightbulb, FaDraftingCompass, FaRocket, FaCheckCircle, FaArrowRight, FaLayerGroup, FaBook, FaSyncAlt, FaBriefcase, FaChessKnight, FaPuzzlePiece, FaChartLine, FaInfinity, FaBullseye, FaChartPie, FaGem } from 'react-icons/fa';

export default function BrandingService() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-pink-500/30">
      <Helmet>
        <title>Branding Services - NG Stellar</title>
        <meta
          name="description"
          content="Elevate your brand identity with NG Stellar's creative branding and design services."
        />
        <meta
          name="keywords"
          content="Branding Services, Brand Identity, Logo Design, Visual Strategy, Corporate Branding, UI/UX Design"
        />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
         {/* Background Elements */}
         <div className="absolute inset-0 z-0">
             <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse animation-delay-2000"></div>
             <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Mobile Layout (Visible only on small screens) */}
             <div className="lg:hidden flex flex-col items-center text-center space-y-8">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="space-y-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                      Branding services
                    </span>
                    
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
                       Defining Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400">Identity.</span> <br/>
                       Telling Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">Story.</span> <br/>
                       Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400">Legacy.</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-md">
                       Your brand is more than a logo. It’s how people remember you.
                    </p>

                    <div className="flex justify-center gap-4">
                       <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/40 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-fuchsia-400/60 hover:scale-105 active:scale-95">
                          Start Your Brand Journey
                       </Link>
                    </div>
                </motion.div>

                {/* Mobile Image (Optional, kept smaller or hidden if desired, adapting existing 3D element) */}

             </div>

             {/* Desktop Layout (Visible only on large screens) */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="hidden lg:block space-y-8"
             >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  Branding services
                </span>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
                   Defining Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400">Identity.</span> <br/>
                   Telling Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">Story.</span> <br/>
                   Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400">Legacy.</span>
                </h1>

                <p className="max-w-xl text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-md mt-5 mb-10">
                   Your brand is more than a logo. It’s how people remember you.
                </p>

                <div className="flex flex-wrap gap-4">
                   <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/40 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-fuchsia-400/60 hover:scale-105 active:scale-95">
                      Start Your Brand Journey
                   </Link>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative hidden lg:block"
             >
                 {/* Hero Visual Placeholder */}
                  <div className="relative mx-auto  lg:mr-0 w-full max-w-md lg:max-w-xl">
              {/* Main Image */}
              <div className="relative rounded-2xl bottom-10 bg-white/5 backdrop-blur-sm border border-white/10 p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 z-10">
                <img
                  src="/branding_001.webp"
                  alt="Business Workflow"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* Floating Element - Only visible on md+ */}
              <div className="absolute -bottom-20 -left-10 w-2/3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-500 hidden md:block z-20">
                 <img
                  src="/branding_002.webp"
                  alt="Business Analytics"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Decorative Glow behind images */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl -z-10 rounded-full pointer-events-none"></div>
            </div>
             </motion.div>
         </div>
      </section>

      {/* 2. BRAND PHILOSOPHY / OVERVIEW */}
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Decorative Background Pattern */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-30"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Quote Side */}
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="w-full lg:w-1/2 relative"
               >
                  <div className="absolute -top-12 -left-8 text-9xl text-indigo-100 font-serif leading-none select-none">“</div>
                  <h2 className="text-4xl md:text-6xl font-bold font-sans leading-tight text-slate-900 relative z-10">
                    A strong brand is your most <br/> 
                    <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">valuable asset.</span>
                  </h2>
               </motion.div>

               {/* Text Side */}
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="w-full lg:w-1/2"
               >
                  <motion.div 
                     whileHover={{ rotate: [0, -2, 2, 0] }}
                     transition={{ duration: 1 }}
                     className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                     
<span className="inline-flex text-violet-500 items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  Our approach
                </span>                     <p className="text-slate-600 text-sm leading-relaxed">
                        Your brand is more than just a logo; it is the soul of your business and the feeling you leave behind after every interaction. In a crowded marketplace, a strong brand is your most valuable asset. We help you articulate who you are, what you stand for, and why you matter—creating a cohesive identity that resonates with your audience and builds lasting trust.
                     </p>
                  </motion.div>
               </motion.div>

            </div>
         </div>
      </section>


      {/* 3. BRANDING FRAMEWORK (PROCESS) */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Branding Framework</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
              {/* Connector Line (Desktop) */}
              <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 hidden md:block z-0"></div>

              {[
                { step: "01", title: "Discover", subtitle: "Research", icon: <FaSearch /> },
                { step: "02", title: "Define", subtitle: "Positioning", icon: <FaRegLightbulb /> },
                { step: "03", title: "Design", subtitle: "Visual Identity", icon: <FaDraftingCompass /> },
                { step: "04", title: "Document", subtitle: "Guidelines", icon: <FaBook /> },
                { step: "05", title: "Deploy", subtitle: "Rollout", icon: <FaRocket /> },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                   <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-xl text-pink-400 shadow-xl mb-6 group-hover:scale-110 group-hover:border-pink-500/50 transition-all duration-300">
                      {item.icon}
                   </div>
                   <span className="text-xs font-mono text-slate-500 mb-2">[{item.step}]</span>
                   <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                   <span className="text-sm text-slate-400">{item.subtitle}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </section>


      {/* 4. KEY OFFERINGS */}
      <section className="py-24 bg-slate-900/30">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Key Offerings</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   title: "Brand Strategy & Positioning", 
                   desc: "Market research, audience insights, value proposition, and brand voice definition.",
                   icon: <FaRegLightbulb className="text-indigo-400"/>
                 },
                 { 
                   title: "Visual Identity Systems", 
                   desc: "Crafting the visual language—logo design, color palettes, typography, and iconography.",
                   icon: <FaPaintBrush className="text-pink-400"/>
                 },
                 { 
                   title: "Brand Guidelines", 
                   desc: "Comprehensive brand bible ensuring consistency across all channels.",
                   icon: <FaBook className="text-fuchsia-400"/>
                 },
                 { 
                   title: "Rebranding & Refresh", 
                   desc: "Strategic evolution for modernizing or pivoting brands for growth.",
                   icon: <FaSyncAlt className="text-cyan-400"/>
                 },
                 { 
                   title: "Corporate Collateral", 
                   desc: "Stationery, brochures, pitch decks, and packaging design.",
                   icon: <FaBriefcase className="text-amber-400"/>
                 },
               ].map((card, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-pink-500/30 transition-all group overflow-hidden relative cursor-default"
                 >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
                        <div className="text-8xl">{card.icon}</div>
                    </div>
                    
                    <div className="text-3xl mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                        {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                       {card.desc}
                    </p>
                 </motion.div>
               ))}
               
               {/* Decorative 'More' Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 className="p-8 rounded-3xl border border-dashed border-white/10 flex flex-col justify-center items-center text-center text-slate-500 hover:text-slate-300 hover:border-white/30 transition-all cursor-pointer"
               >
                  <span className="text-lg">Need something custom?</span>
                  <a href="/contact" className="text-pink-400 font-bold mt-2 hover:underline">Let's talk</a>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 6. REBRANDING USE-CASE */}
      <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="py-24 bg-gradient-to-br from-indigo-900/20 to-pink-900/20"
      >
         <div className="max-w-5xl mx-auto px-6">
            <div className='text-center mb-16'>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Rebranding Use-Case</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:divide-x divide-white/10">
                <div className="space-y-8 md:pr-12 md:text-right">
                   <h3 className="text-2xl font-bold text-pink-400">When To Rebrand</h3>
                   <ul className="space-y-6">
                      <li className="flex items-center justify-end gap-4">
                         <span className="text-lg text-slate-300">Business growth & expansion</span>
                         <FaCheckCircle className="text-pink-400"/>
                      </li>
                      <li className="flex items-center justify-end gap-4">
                         <span className="text-lg text-slate-300">Market evolution</span>
                         <FaCheckCircle className="text-pink-400"/>
                      </li>
                      <li className="flex items-center justify-end gap-4">
                         <span className="text-lg text-slate-300">Outdated visual identity</span>
                         <FaCheckCircle className="text-pink-400"/>
                      </li>
                   </ul>
                </div>

                <div className="space-y-8 md:pl-12">
                   <h3 className="text-2xl font-bold text-indigo-400">What You Gain</h3>
                   <ul className="space-y-6">
                      <li className="flex items-center gap-4">
                         <FaCheckCircle className="text-indigo-500"/>
                         <span className="text-lg text-white">Clear strategic positioning</span>
                      </li>
                      <li className="flex items-center gap-4">
                         <FaCheckCircle className="text-indigo-500"/>
                         <span className="text-lg text-white">Consistent brand voice</span>
                      </li>
                      <li className="flex items-center gap-4">
                         <FaCheckCircle className="text-indigo-500"/>
                         <span className="text-lg text-white">Modern, premium perception</span>
                      </li>
                   </ul>
                </div>
            </div>
         </div>
      </motion.section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
             >
                 <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400">Choose Us?</span></h2>
             </motion.div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { text: "Strategy-led branding, not just visuals", icon: <FaBullseye />, color: "text-cyan-400" },
                    { text: "Consistency across all touchpoints", icon: <FaLayerGroup />, color: "text-pink-400" },
                    { text: "Business-focused, outcome-driven", icon: <FaChartPie />, color: "text-amber-400" },
                    { text: "Long-term brand thinking", icon: <FaGem />, color: "text-violet-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="bg-slate-800 border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center gap-6 hover:border-pink-500/30  transition-all group"
                    >
                       <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/10 to-pink-500/10 flex items-center justify-center text-3xl ${item.color} group-hover:scale-110 transition-transform`}>
                           {item.icon}
                       </div>
                       <span className="text-lg text-slate-300 font-medium leading-snug">{item.text}</span>
                    </motion.div>
                ))}
             </div>
          </div>
      </section>

    </div>
  );
}
