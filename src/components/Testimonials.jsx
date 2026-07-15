import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CTO at TechFlow',
        image: 'https://i.pravatar.cc/150?img=5',
        quote: 'Partnering with this IT consulting team has completely transformed the way we operate. They identified our pain points quickly and implemented solutions that streamlined our processes, enhanced security, and boosted productivity across the board.'
    },
    {
        name: 'Michael Ross',
        role: 'Director of Operations',
        image: 'https://i.pravatar.cc/150?img=11',
        quote: 'This team has been an incredible asset to our company. From understanding our technical hurdles to delivering smart, effective solutions — they’ve helped us strengthen our workflow, tighten security, and work more efficiently than ever.'
    },
    {
        name: 'David Miller',
        role: 'CEO at InnovateCorp',
        image: 'https://i.pravatar.cc/150?img=3',
        quote: 'Choosing this IT consulting team was one of our best decisions. They took the time to understand our business and provided tailored solutions that improved our systems, optimized performance, and increased our overall operational efficiency.'
    },
    {
        name: 'Emily Watson',
        role: 'IT Manager',
        image: 'https://i.pravatar.cc/150?img=9',
        quote: 'The expertise and support we received from this IT consulting team made a real difference. They quickly grasped our requirements and delivered upgrades that improved our workflow, enhanced our security, and elevated our daily operations.'
    },
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="my-24 rounded-3xl bg-gradient-to-b from-slate-900 to-black p-8 md:p-16 relative overflow-hidden"
        >
        {/* Snow Animation Background — pure CSS, no JS timelines */}
        <style>{`
          @keyframes snow-fall {
            0% { transform: translateY(-20px) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 0.6; }
            100% { transform: translateY(calc(100vh + 20px)) translateX(20px); opacity: 0; }
          }
          .snow-particle { animation: snow-fall linear infinite; position: absolute; background: white; border-radius: 50%; }
        `}</style>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="snow-particle"
              style={{
                left: `${(i * 5.1 + 2) % 100}%`,
                top: '-4px',
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                animationDuration: `${12 + (i % 8) * 2}s`,
                animationDelay: `${(i * 0.6) % 10}s`,
                opacity: 0.15 + (i % 4) * 0.04,
              }}
            />
          ))}
        </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl z-0"></div>

            <div className="relative max-w-4xl mx-auto z-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Client <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
                            style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
                            }}
                        >Testimonials</span>
                    </h2>
                </div>

                {/* Testimonial Content */}
                <div className="text-center min-h-[400px] flex flex-col items-center justify-center relative">

                    {/* Arch Animation */}
                    <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[320px] h-[160px] pointer-events-none opacity-70">
                        <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none">
                            {/* Dotted Arch Track */}
                            <path d="M 10 160 A 150 150 0 0 1 310 160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

                            {/* Traveling Light */}
                            <circle r="4" fill="#335fa8" className="drop-shadow-[0_0_10px_rgba(51,95,168,1)]">
                                <animateMotion
                                    dur="4s"
                                    repeatCount="indefinite"
                                    path="M 10 160 A 150 150 0 0 1 310 160"
                                />
                            </circle>
                        </svg>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8 relative z-10"
                        >
                            {/* Profile Image */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="flex justify-center"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-lg opacity-50"></div>
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        loading="lazy"
                                        className="relative w-20 h-20 rounded-full border-4 border-white/20 object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Quote */}
                            <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto px-4">
                                "{testimonials[currentIndex].quote}"
                            </blockquote>

                            {/* Navigation Pills */}
                            <div className="flex justify-center gap-3 flex-wrap">
                                {testimonials.map((testimonial, index) => (
                                    <button
                                        key={testimonial.name}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentIndex === index
                                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-primary-500/30'
                                            : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-white'
                                            }`}
                                    >
                                        <span className="font-semibold">{testimonial.name}</span>
                                        <span className="ml-2 opacity-75 text-xs">{testimonial.role}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}

export default Testimonials;
