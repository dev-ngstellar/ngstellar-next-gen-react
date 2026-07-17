import React from 'react';
import { motion } from 'framer-motion';

export default function SignatureDrink() {
  return (
    <section className="bg-primary text-accent overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        
        {/* Image Half */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1200&auto=format&fit=crop" 
            alt="Signature Drink" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content Half */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Signature Drink</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">The Stellar Reserve</h2>
            <p className="text-accent/80 text-lg mb-10 leading-relaxed max-w-lg">
              A meticulously crafted espresso blend, slowly extracted and poured over Madagascar vanilla bean infused milk, topped with a delicate gold-leaf honeycomb.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Ingredients</p>
                <p className="text-white">Espresso, Vanilla, Honeycomb</p>
              </div>
              <div>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Calories</p>
                <p className="text-white">120 kcal</p>
              </div>
              <div>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Prep Time</p>
                <p className="text-white">5 Minutes</p>
              </div>
              <div>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Price</p>
                <p className="text-white">$8.50</p>
              </div>
            </div>

            <button className="bg-secondary text-primary font-bold py-4 px-10 rounded-sm hover:bg-white transition-colors duration-300">
              Order Now
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
