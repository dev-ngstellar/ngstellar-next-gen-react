import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-primary/70 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl text-accent"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-6">
            <Coffee size={14} className="text-secondary" />
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">Freshly Brewed Since 2015</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-card">
            Crafted Coffee.<br/>
            Made With <span className="text-secondary italic">Passion.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-accent/80 font-light mb-10 max-w-lg leading-relaxed">
            Serving handcrafted coffee, artisan pastries, and unforgettable experiences every single day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-primary font-medium hover:bg-white transition-all duration-300 rounded-sm">
              View Menu
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 rounded-sm">
              Reserve Table
            </Link>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 hidden md:flex justify-center relative"
        >
           {/* Placeholder for the premium coffee cup image */}
           <div className="relative w-72 h-96 rounded-t-full rounded-b-full overflow-hidden border-4 border-secondary/20 p-2">
             <div className="w-full h-full rounded-t-full rounded-b-full overflow-hidden bg-card/10 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop" 
                  alt="Premium Coffee" 
                  className="w-full h-full object-cover opacity-90"
                />
             </div>
           </div>

           {/* Floating Cards */}
           <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-12 top-20 glass px-4 py-3 rounded-lg shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                 <span className="text-secondary font-bold">100%</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-card">Organic</p>
                <p className="text-[10px] text-accent/70">Fresh Beans</p>
              </div>
           </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
