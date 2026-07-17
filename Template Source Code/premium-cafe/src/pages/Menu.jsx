import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Star, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Coffee', 'Tea', 'Desserts', 'Breakfast', 'Cold Drinks'];

const menuItems = [
  { id: 1, name: 'Espresso Romano', price: '$4.50', category: 'Coffee', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop', desc: 'A shot of espresso served with a slice of lemon on the side.', badge: 'Popular' },
  { id: 2, name: 'Caramel Macchiato', price: '$5.50', category: 'Coffee', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop', desc: 'Rich espresso, vanilla syrup, and steamed milk topped with caramel.', badge: 'Chef Recommendation' },
  { id: 3, name: 'Iced Matcha Latte', price: '$6.00', category: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=600&auto=format&fit=crop', desc: 'Premium matcha green tea blended with milk and ice.' },
  { id: 4, name: 'Artisan Croissant', price: '$4.50', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop', desc: 'Flaky, buttery pastry baked fresh every morning.' },
  { id: 5, name: 'Cold Brew Coffee', price: '$4.75', category: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1461023058943-07cb126df8eb?q=80&w=600&auto=format&fit=crop', desc: 'Slow-steeped for 20 hours for a smooth, bold flavor.', badge: 'Seasonal Special' },
  { id: 6, name: 'Earl Grey Tea', price: '$3.50', category: 'Tea', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop', desc: 'Classic black tea flavored with oil of bergamot.' },
  { id: 7, name: 'Tiramisu', price: '$7.50', category: 'Desserts', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=600&auto=format&fit=crop', desc: 'Classic Italian dessert made with ladyfingers, coffee, and mascarpone.', badge: 'Chef Recommendation' },
  { id: 8, name: 'Avocado Toast', price: '$9.00', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=600&auto=format&fit=crop', desc: 'Sourdough toast topped with mashed avocado, chili flakes, and a poached egg.' },
];

export default function Menu() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Menu</h1>
          <p className="text-accent/80 text-lg max-w-xl mx-auto">Explore our carefully curated selection of handcrafted beverages and artisan treats.</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-40 bg-background/90 backdrop-blur-md py-4 border-b border-border">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-card text-text-muted hover:bg-primary/10 border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-72">
            <input 
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-secondary transition-colors"
            />
            <Search className="absolute left-3 top-2.5 text-text-muted" size={18} />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredMenu.map(item => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Badges */}
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      {item.badge === 'Chef Recommendation' ? (
                         <div className="bg-primary text-secondary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                           <Award size={14} /> {item.badge}
                         </div>
                      ) : (
                        <div className="bg-secondary text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                           <Star size={14} /> {item.badge}
                         </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-primary">{item.name}</h3>
                    <span className="text-secondary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-text-muted text-sm mb-6 flex-grow">{item.desc}</p>
                  
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full py-3 flex items-center justify-center gap-2 border border-primary/20 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors font-medium group-hover:border-primary"
                  >
                    <Plus size={18} /> Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredMenu.length === 0 && (
            <div className="col-span-full py-20 text-center text-text-muted">
              <Search size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-xl font-serif">No menu items found for "{searchQuery}"</p>
            </div>
          )}
        </motion.div>

      </section>
    </div>
  );
}
