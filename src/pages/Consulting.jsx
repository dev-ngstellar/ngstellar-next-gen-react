import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from 'react-router-dom';
import { FaChartLine, FaSearch, FaClipboardCheck, FaRoad, FaUserCog, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function Consulting() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-teal-500/30">
      <Helmet>
        <title>Consulting Services - NG Stellar</title>
        <meta
          name="description"
          content="Expert consulting services to guide your business strategy and operational excellence."
        />
        <meta
          name="keywords"
          content="IT Consulting, Business Strategy, Digital Transformation, Tech Consulting, Growth Strategy, Operational Excellence"
        />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
         {/* Background Elements */}
         <div className="absolute inset-0 z-0">
             <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse animation-delay-2000"></div>
             <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="space-y-8 flex flex-col items-center"
             >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  Consulting services
                </span>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight tracking-tight drop-shadow-lg max-w-4xl mx-auto">
                   Strategic Insight. <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">Data-Driven Growth.</span> <br/>
                   Expert Guidance.
                </h1>

                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                   We provide the strategic architecture for your digital growth, ensuring every dollar you spend yields a return on investment.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                   <Link to='/contact' className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-fuchsia-500/40 transition-all hover:brightness-110 hover:shadow-2xl hover:shadow-fuchsia-400/60 hover:scale-105 active:scale-95">
                      Get Expert Guidance
                   </Link>
                </div>
             </motion.div>
         </div>
      </section>


      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 bg-white relative overflow-hidden text-slate-900">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-30"></div>
         </div>

         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg mb-6">
                     Bridging The Gap Between <span
              className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #a78bfa 0%, #e879f9 50%, #22d3ee 100%)'
              }}
            > Where You Are</span> And Where You Want To Be.
                  </h2>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-lg text-slate-600 leading-relaxed space-y-6"
               >
                  <p className='text-slate-1000 text-xl leading-relaxed'>
                     The digital landscape is complex, and navigating it requires a clear map. Our consulting services bridge the gap between where you are and where you want to be.
                  </p>
                  <p className="font-medium text-slate-800 border-l-4 border-fuchsia-500 pl-4">
                     We don't just hand you a plan; we provide the strategic architecture for your digital growth, ensuring every dollar you spend yields a return on investment.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>


      {/* 3. KEY OFFERINGS */}
      <section className="py-24 bg-slate-950 relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  Consulting services
                </span>
               <h2 className="text-3xl md:text-5xl font-bold font-sans text-white">Key Offerings</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  {
                    title: "Digital Transformation Strategy",
                    desc: "Helping traditional businesses digitize their operations, customer interactions, and workflows for the modern era.",
                    icon: <FaChartLine />,
                    color: "text-cyan-400",
                    bgGlow: "group-hover:bg-cyan-500/20",
                    border: "hover:border-cyan-500/30"
                  },
                  {
                    title: "Market Research & Competitor Analysis",
                    desc: "We analyze the strengths and weaknesses of your competitors to identify gaps in the market that you can exploit.",
                    icon: <FaSearch />,
                    color: "text-amber-400",
                    bgGlow: "group-hover:bg-amber-500/20",
                    border: "hover:border-amber-500/30"
                  },
                  {
                    title: "Marketing Audits",
                    desc: "A thorough health check of your current marketing efforts, website performance, and social media presence to identify bottlenecks.",
                    icon: <FaClipboardCheck />,
                    color: "text-rose-400",
                    bgGlow: "group-hover:bg-rose-500/20",
                    border: "hover:border-rose-500/30"
                  },
                  {
                    title: "Content & SEO Strategy",
                    desc: "We don't just write content; we plan it. We develop roadmaps for organic growth, ensuring your business is found by the right people.",
                    icon: <FaRoad />,
                    color: "text-emerald-400",
                    bgGlow: "group-hover:bg-emerald-500/20",
                    border: "hover:border-emerald-500/30"
                  },
                  {
                    title: "Customer Experience (CX) Consulting",
                    desc: "Analyzing user journeys to reduce friction and increase conversion rates.",
                    icon: <FaUserCog />,
                    color: "text-violet-400",
                    bgGlow: "group-hover:bg-violet-500/20",
                    border: "hover:border-violet-500/30"
                  }
               ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5 ${item.border} group relative overflow-hidden`}
                  >
                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-125 duration-500">
                        <div className={`text-9xl ${item.color} opacity-30`}>{item.icon}</div>
                     </div>

                     <div className={`w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center text-3xl ${item.color} mb-8 ${item.bgGlow} group-hover:scale-110 transition-all`}>
                        {item.icon}
                     </div>
                     
                     <h3 className="text-xl font-bold text-white mb-4 font-sans">{item.title}</h3>
                     <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
               
               {/* CTA Card for consulting */}
               <div onClick={() => navigate('/contact')} className="p-8 rounded-3xl bg-violet-900/10 border border-dashed border-violet-500/30 flex flex-col justify-center items-center text-center space-y-4 hover:bg-violet-900/20 transition-colors cursor-pointer">
                   <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 animate-pulse">
                      <FaArrowRight size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white">Need a custom strategy?</h3>
                   <span className="text-violet-400 font-medium hover:underline">Book a specific consultation</span>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
