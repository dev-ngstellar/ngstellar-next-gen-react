import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-32 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472204-518621373516?q=80&w=2000&auto=format&fit=crop" 
          alt="Coffee Beans Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto text-accent">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Book Your Coffee Experience</h2>
        <p className="text-lg md:text-xl text-accent/80 font-light mb-10">
          Whether you're looking for a quiet place to work, or a warm environment to meet friends, we have a table waiting for you.
        </p>
        <Link to="/contact" className="inline-block bg-secondary text-primary font-bold text-lg px-12 py-5 rounded-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          Reserve a Table
        </Link>
      </div>
    </section>
  );
}
