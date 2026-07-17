import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const menuItems = [
  { name: 'Caramel Macchiato', price: '$5.50', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop', desc: 'Rich espresso, vanilla syrup, and steamed milk topped with caramel.' },
  { name: 'Iced Matcha Latte', price: '$6.00', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=600&auto=format&fit=crop', desc: 'Premium matcha green tea blended with milk and ice.' },
  { name: 'Artisan Croissant', price: '$4.50', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop', desc: 'Flaky, buttery pastry baked fresh every morning.' },
  { name: 'Cold Brew Coffee', price: '$4.75', image: 'https://images.unsplash.com/photo-1461023058943-07cb126df8eb?q=80&w=600&auto=format&fit=crop', desc: 'Slow-steeped for 20 hours for a smooth, bold flavor.' },
];

export default function PopularMenu() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Discover</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Popular Menu</h2>
          </div>
          <button className="text-primary font-medium border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
            View Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full cursor-pointer hover:text-red-500 hover:bg-white transition-colors">
                  <Heart size={20} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary">{item.name}</h3>
                  <span className="text-secondary font-bold">{item.price}</span>
                </div>
                <p className="text-text-muted text-sm line-clamp-2 mb-6">{item.desc}</p>
                <button 
                  onClick={() => addToCart({
                    id: `pop-${idx}`, // Generate simple ID for popular items since they didn't have one initially
                    name: item.name,
                    price: item.price,
                    image: item.image
                  })}
                  className="w-full py-3 flex items-center justify-center gap-2 border border-border rounded-lg text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  <Plus size={18} /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
