import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Utensils, LayoutDashboard, ChefHat, Truck, ArrowRight, X, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FOOD_ITEMS } from '../../data/mockData';

export const CommandPalette = () => {
  const { isCommandOpen, setIsCommandOpen, searchQuery, setSearchQuery, setCurrentView, setSelectedDishId, addToCart } = useApp();

  if (!isCommandOpen) return null;

  const filteredDishes = FOOD_ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigationCommands = [
    { label: 'Explore Full Menu', view: 'menu', category: 'Pages' },
    { label: 'View Today\'s Special Offers', view: 'offers', category: 'Pages' },
    { label: 'Track Active Order', view: 'order-tracking', category: 'Pages' },
    { label: 'Table Reservations & Contact', view: 'contact', category: 'Pages' },
    { label: 'Open Customer Portal', view: 'customer-dashboard', category: 'Portals' },
    { label: 'Open Admin SaaS Portal', view: 'admin-dashboard', category: 'Portals' },
    { label: 'Open Kitchen KDS Display', view: 'kitchen-dashboard', category: 'Portals' },
    { label: 'Open Driver Delivery App', view: 'delivery-dashboard', category: 'Portals' },
  ];

  const handleSelectView = (view) => {
    setCurrentView(view);
    setIsCommandOpen(false);
  };

  const handleSelectDish = (dishId) => {
    setSelectedDishId(dishId);
    setCurrentView('food-detail');
    setIsCommandOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCommandOpen(false)}
          className="fixed inset-0 bg-stone-950/60 backdrop-blur-md"
        />

        {/* Command Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden z-50"
        >
          {/* Search Input Bar */}
          <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center gap-3">
            <Search className="w-5 h-5 text-stone-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search culinary dishes, operations, or jump to page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm font-medium text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
            />
            <button
              onClick={() => setIsCommandOpen(false)}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Command Content List */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {/* Quick Navigation Commands */}
            <div>
              <div className="text-[10px] font-bold tracking-wider text-stone-400 uppercase px-2 mb-2">Quick Navigation</div>
              <div className="grid grid-cols-2 gap-2">
                {navigationCommands.map((cmd, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectView(cmd.view)}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 hover:bg-amber-500/10 hover:border-amber-500/30 border border-stone-200/50 dark:border-stone-800 text-xs font-semibold text-stone-800 dark:text-stone-200 transition-all text-left group"
                  >
                    <span>{cmd.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-amber-500 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* Dish Results */}
            {filteredDishes.length > 0 && (
              <div>
                <div className="text-[10px] font-bold tracking-wider text-stone-400 uppercase px-2 mb-2">Artisanal Dishes ({filteredDishes.length})</div>
                <div className="space-y-2">
                  {filteredDishes.map((dish) => (
                    <div
                      key={dish.id}
                      onClick={() => handleSelectDish(dish.id)}
                      className="flex items-center justify-between p-2.5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/50 dark:border-stone-800 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <h6 className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-500 transition-colors">{dish.name}</h6>
                          <p className="text-[10px] text-stone-400">{dish.calories} • {dish.prepTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-xs font-bold text-amber-600 dark:text-amber-400">${dish.price.toFixed(2)}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(dish);
                            setIsCommandOpen(false);
                          }}
                          className="px-2.5 py-1 text-[10px] font-bold bg-amber-500 text-stone-950 rounded-lg hover:bg-amber-400 transition-colors"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
