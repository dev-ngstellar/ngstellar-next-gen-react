import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Coffee, MapPin, Wifi, ShoppingBag, Clock } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Organic Beans', desc: 'Sourced from the finest organic farms globally.' },
  { icon: Coffee, title: 'Freshly Roasted', desc: 'Roasted daily in-house for maximum flavor.' },
  { icon: MapPin, title: 'Premium Locations', desc: 'Aesthetic interiors for your comfort.' },
  { icon: Wifi, title: 'Free Hi-Speed WiFi', desc: 'Perfect for working or studying.' },
  { icon: ShoppingBag, title: 'Quick Takeaway', desc: 'Fast packaging for those on the go.' },
  { icon: Clock, title: 'Fast Service', desc: 'No long waits, just great coffee quickly.' },
];

export default function FeatureSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-accent/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Everything you need for a perfect coffee time</h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-primary">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
