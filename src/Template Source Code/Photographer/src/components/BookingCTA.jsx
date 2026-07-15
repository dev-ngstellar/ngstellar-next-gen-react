import React from 'react';
import { motion } from 'framer-motion';

const BookingCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] to-[var(--background)]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto glass-card p-12 md:p-20 backdrop-blur-3xl border border-white/5"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Ready to create <br />
            <span className="italic text-[var(--accent)]">unforgettable memories?</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto font-light">
            We accept a limited number of commissions each year to ensure the highest level of dedication and artistry for every client.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block px-12 py-5 bg-white text-black hover:bg-[var(--accent)] hover:text-white transition-all duration-500 rounded-full font-medium tracking-widest uppercase text-sm shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            Book Your Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
