import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Sarah Jenkins', role: 'Food Critic', text: 'The most authentic espresso I have had outside of Italy. The ambiance is just as remarkable as the coffee.', rating: 5 },
  { name: 'David Chen', role: 'Local Guide', text: 'Stellar Cafe lives up to its name. Their cold brew is incredibly smooth, and the artisan croissants are a must-try.', rating: 5 },
  { name: 'Emma Watson', role: 'Coffee Enthusiast', text: 'A beautifully designed space with coffee that matches the aesthetic. The staff is knowledgeable and passionate.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-accent/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">What our guests say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-10 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 text-secondary/20" size={60} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-text-main text-lg mb-8 relative z-10">"{review.text}"</p>
              <div>
                <p className="font-serif font-bold text-primary text-lg">{review.name}</p>
                <p className="text-sm text-text-muted">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
