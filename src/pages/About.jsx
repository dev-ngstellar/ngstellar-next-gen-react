"use client";
import { FaSmile, FaDollarSign, FaAward, FaClock, FaGem, FaUsers, FaHandshake, FaCalendarCheck, FaChartLine, FaCheckCircle, FaHandHoldingUsd, FaComments, FaRocket } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FeaturesGallery from "../components/FeaturesGallery";
import { Helmet } from "react-helmet-async";

export default function About() {
  const countersRef = useRef([]);
  // COUNTER ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            let start = 0;
            const duration = 40; // speed

            const counter = setInterval(() => {
              start += Math.ceil(target / 100);
              if (start >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(counter);
              } else {
                el.textContent = start.toLocaleString();
              }
            }, duration);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []);


  return (
    <>
      <Helmet>
        <title>About Us - NG Stellar</title>
        <meta
          name="description"
          content="Learn about NG Stellar's mission to drive business transformation through innovative technology solutions."
        />
        <meta
          name="keywords"
          content="About NG Stellar, Web Development Agency, Company Mission, Digital Innovation, Tech Team, Business History"
        />
      </Helmet>
      {/* HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-30 md:py-24 overflow-hidden"
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 z-0"
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight text-white tracking-tight drop-shadow-lg">
                Great Digital Experiences Are Created When  <span
                    className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md font-extrabold"
                    style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
                    }}
                  >
                    Creativity Meets Discipline
                  </span>.
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-md mt-5 mb-10">
                We are a web development and digital solutions company built on a simple belief.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="order-1 md:order-none inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/40 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-fuchsia-400/60 hover:scale-105 active:scale-95">
                Get Started
              </Link>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative mx-auto  lg:mr-0 w-full max-w-md lg:max-w-xl">
              {/* Main Image */}
              <div className="relative rounded-2xl left-10 top-2 w-[90%] bottom-10 bg-white/5 backdrop-blur-sm border border-white/10 p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 z-10">
                <img
                  src="/branding_03.webp"
                  alt="Business Workflow"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* Floating Element - Only visible on md+ */}
              <div className="absolute -bottom-10 md:-bottom-20  md:-left-10 w-2/3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-500 block z-20">
                 <img
                  src="/about-us-banner-1.jpg"
                  alt="Business Analytics"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Decorative Glow behind images */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl -z-10 rounded-full pointer-events-none"></div>
            </div>

          </div>
        </div>
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 bg-white border-y border-white/5 overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <span className="inline-flex text-violet-500 items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  Our Journey
                </span> 

            <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
              A Decade of <br />
  <span
              className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
              }}
            > Digital Innovation</span>            </h2>

            <div className="space-y-6 text-lg text-slate-800 leading-relaxed">
              <p>
                For over <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >10 years</span>, we’ve partnered with businesses across multiple industries, helping them
                design, build, and scale digital products that actually work.
              </p>
              <p>
                From <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >early stage-startups</span> to <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >established enterprises</span>, 
                our journey has been defined by consistent delivery, long-term relationships, and measurable success.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-8">
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">10+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wide">Years Exp.</span>
                 </div>
                 <div className="w-px h-12 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">500+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wide">Projects</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative">
             <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl shadow-2xl border border-white/10">
                <div className="bg-slate-950 rounded-xl p-8 md:p-10 space-y-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                   
                   <h3 className="text-xl font-bold text-white mb-5">Why Partner With Us?</h3>
                   <ul className="space-y-4">
                      {[
                        "Proven Track Record",
                        "Scalable Architecture", 
                        "User-Centric Design",
                        "ROI-Focused Strategy"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-300">
                           <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7db941]/20 flex items-center justify-center animate-pulse">
                              <FaCheckCircle className="text-[#7db941] text-xs" />
                           </div>
                           {item}
                        </li>
                      ))}
                   </ul>

                   <div className="pt-6 mt-2 border-t border-white/10">
                      <div className="flex items-center gap-4">
                         <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                               <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-white">
                                  Logo{i}
                               </div>
                            ))}
                         </div>
                         <div className="text-sm text-slate-400">
                            Trusted by <span className="text-white font-semibold">200+ clients</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Decorative underlying card */}
             <div className="absolute top-4 left-4 w-full h-full bg-indigo-600/10 rounded-2xl -z-10 border border-indigo-500/10"></div>
          </div>
        </div>
      </motion.section>
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative bg-slate-950 text-white py-20 px-4 md:px-8 overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
          {/* Left – Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              ABOUT US
            </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                Building Digital Solutions<br />
                With   <span
              className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
              }}
            > Purpose & Precision</span>    </h2>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
               We don't match competitors; we exceed expectations. By combining creative vision with technical excellence, we deliver digital products that stand the test of time.
            </p>
          </motion.div>

          {/* Right – Floating Pillars */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-16 xl:pl-32 gap-6 relative"
          >
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] -z-10"></div>

              {[
                { title: "Execution Driven", desc: "Deadline-focused delivery", icon: <FaClock />, color: "from-blue-500 to-cyan-500" },
                { title: "Value Over Cost", desc: "True ROI & Quality", icon: <FaGem />, color: "from-purple-500 to-pink-500" },
                { title: "Client-Centered", desc: "Your vision leads", icon: <FaUsers />, color: "from-amber-500 to-orange-500" },
                { title: "Accountable", desc: "Transparent & On-time", icon: <FaHandshake />, color: "from-emerald-500 to-green-500" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative group flex items-center gap-4 p-4 pr-8 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800/80 transition-all duration-300 hover:translate-x-2 cursor-pointer shadow-xl ${i % 2 === 0 ? 'md:ml-0' : 'md:ml-12'}`}
                  style={{ width: 'fit-content' }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                     <h4 className="font-bold text-base text-white">{item.title}</h4>
                     <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300 -z-10`}></div>
                </div>
              ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="py-24 bg-[#0B1120] relative overflow-hidden"
      >
         {/* Background Glows */}
         <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Our Promise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Clients Choose Us
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg">
              We don't just deliver projects; we build partnerships. Here is why businesses trust us to drive their digital growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { 
                title: "10+ Years Experience", 
                desc: "Hands-on industry experience delivering robust solutions.", 
                icon: <FaCalendarCheck />,
                color: "indigo",
                gradient: "from-indigo-500/20 to-purple-500/20",
                text: "text-indigo-400",
                shadow: "shadow-indigo-500/10",
                hoverText: "group-hover:text-indigo-300",
                borderHover: "hover:border-indigo-500/30"
              },
              { 
                title: "Proven Success", 
                desc: "A track record of success across diverse industries and models.", 
                icon: <FaChartLine />,
                color: "emerald",
                gradient: "from-emerald-500/20 to-teal-500/20",
                text: "text-emerald-400",
                shadow: "shadow-emerald-500/10",
                hoverText: "group-hover:text-emerald-300",
                borderHover: "hover:border-emerald-500/30"
              },
              { 
                title: "Quality & Focus", 
                desc: "Unwavering focus on timelines, quality, and project clarity.", 
                icon: <FaCheckCircle />,
                color: "amber",
                gradient: "from-amber-500/20 to-orange-500/20",
                text: "text-amber-400",
                shadow: "shadow-amber-500/10",
                hoverText: "group-hover:text-amber-300",
                borderHover: "hover:border-amber-500/30"
              },
              { 
                title: "Honest Pricing", 
                desc: "Transparent pricing structures ensuring maximum value for investment.", 
                icon: <FaHandHoldingUsd />,
                color: "rose",
                gradient: "from-rose-500/20 to-pink-500/20",
                text: "text-rose-400",
                shadow: "shadow-rose-500/10",
                hoverText: "group-hover:text-rose-300",
                borderHover: "hover:border-rose-500/30"
              },
              { 
                title: "Collaborative", 
                desc: "A true partnership approach with customer-first thinking.", 
                icon: <FaComments />,
                color: "cyan",
                gradient: "from-cyan-500/20 to-sky-500/20",
                text: "text-cyan-400",
                shadow: "shadow-cyan-500/10",
                hoverText: "group-hover:text-cyan-300",
                borderHover: "hover:border-cyan-500/30"
              },
              { 
                title: "Built to Scale", 
                desc: "Solutions architected to grow with your business, not just launch.", 
                icon: <FaRocket />,
                color: "violet",
                gradient: "from-violet-500/20 to-fuchsia-500/20",
                text: "text-violet-400",
                shadow: "shadow-violet-500/10",
                hoverText: "group-hover:text-violet-300",
                borderHover: "hover:border-violet-500/30"
              },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-white/5 ${feature.borderHover} hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                   <div className={`text-6xl md:text-8xl ${feature.text}`}>{feature.icon}</div>
                </div>
                
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center ${feature.text} text-xl md:text-2xl mb-4 md:mb-6 shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className={`text-lg md:text-xl font-bold text-white mb-2 md:mb-3 ${feature.hoverText} transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          {/* <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mt-20 relative rounded-3xl overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-90"></div>
             <div className="relative p-10 md:p-16 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  We don’t just build websites. <br className="hidden md:block"/>
                  We build digital foundations.
                </h3>
                <p className="text-indigo-100 text-lg mb-8 max-w-3xl mx-auto">
                   Start strong, grow confidently, and sustain long-term success. <br/>
                   <span className="font-semibold text-white">Your vision. Our expertise. Delivered right.</span>
                </p>
                
                <div className="flex justify-center">
                  <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-xl hover:bg-indigo-50 transition-all hover:-translate-y-1">
                     <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                    </span>
                    We are just a call away
                  </a>
                </div>
             </div>
          </motion.div> */}

        </div>
      </motion.section>
      {/* <FeaturesGallery /> */}
    </>
  );
}
