import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Star, Flame, ChevronRight, Heart, Utensils } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FOOD_ITEMS, FOOD_CATEGORIES } from '../../data/mockData';

export const Home = () => {
  const { setCurrentView, setSelectedDishId, addToCart, wishlist, toggleWishlist, setActiveCategory } = useApp();

  const featuredItems = FOOD_ITEMS.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 overflow-hidden">
        {/* Background Ambient Glow & Glass Elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            
            {/* Today's Special Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-wider uppercase shadow-sm"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Michelin-Inspired Artisanal Dining</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-stone-900 dark:text-stone-100"
            >
              Crafted With <span className="italic font-normal text-amber-500">Passion</span>.<br />
              Delivered With <span className="underline decoration-amber-500/40 underline-offset-8">Love</span>.
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed"
            >
              Experience fine culinary mastery from Michelin-experienced chefs, delivered hot in climate-controlled luxury packaging within 30 minutes.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => setCurrentView('menu')}
                className="px-8 py-4 rounded-full bg-amber-500 text-stone-950 font-bold text-base hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/25 flex items-center gap-3 group"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentView('menu')}
                className="px-8 py-4 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold text-base hover:bg-stone-200 dark:hover:bg-stone-700 transition-all border border-stone-200 dark:border-stone-700"
              >
                Explore Menu
              </button>
            </motion.div>

            {/* Value Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200/60 dark:border-stone-800/80"
            >
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">4.9★</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">12k+ Gourmet Reviews</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">30 Min</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">Express Delivery</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">100%</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">Fresh Artisanal Ingredients</p>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Image Showcase with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Central Dish Banner */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-stone-800/40 group"
            >
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000"
                alt="Truffle Pizza Hero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400">Chef Recommendation</span>
                <h3 className="font-serif text-xl font-bold">Truffle & Wild Mushroom Pizza</h3>
                <p className="text-xs text-stone-300 font-sans">$28.50 • Sourdough Crust</p>
              </div>
            </motion.div>

            {/* Floating Card 1: 30 Min Express */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 glass-panel p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/40 dark:border-stone-700/50 max-w-[200px]"
            >
              <div className="p-2.5 rounded-xl bg-amber-500 text-stone-950">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-stone-100">30 Min Delivery</p>
                <p className="text-[10px] text-stone-500 dark:text-stone-400">Guaranteed Hot & Fresh</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Rating */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 glass-panel p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/40 dark:border-stone-700/50"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500 text-white">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-stone-100">4.9 Star Rating</p>
                <p className="text-[10px] text-stone-500 dark:text-stone-400">From 10,000+ Diners</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Explore By Taste</span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 mt-1">Popular Categories</h2>
          </div>
          <button
            onClick={() => setCurrentView('menu')}
            className="text-xs font-bold text-stone-600 dark:text-stone-400 hover:text-amber-500 flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {FOOD_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setCurrentView('menu'); }}
              className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 text-center hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-500 transition-colors">{cat.name}</h4>
              <span className="text-[10px] text-stone-400 mt-0.5 block">{cat.count} Dishes</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED MENU ITEMS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Handcrafted Delicacies</span>
          <h2 className="font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">Featured Culinary Creations</h2>
          <p className="text-xs text-stone-500 dark:text-stone-400">Selected daily by our Executive Chef using organic, sustainably-sourced seasonal ingredients.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((dish) => {
            const isLiked = wishlist.includes(dish.id);
            return (
              <div
                key={dish.id}
                onClick={() => { setSelectedDishId(dish.id); setCurrentView('food-detail'); }}
                className="group relative rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {dish.isChefSpecial && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] font-extrabold shadow-md">
                          Chef Special
                        </span>
                      )}
                      {dish.isVeg && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-md">
                          Veg
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(dish.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 backdrop-blur-md transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span>{dish.calories}</span>
                      <span className="flex items-center gap-1 font-semibold text-stone-800 dark:text-stone-200">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {dish.rating} ({dish.reviewsCount})
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-500 transition-colors line-clamp-1">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Footer Pricing & Add */}
                <div className="p-5 pt-0 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block">Price</span>
                    <span className="font-serif text-xl font-bold text-amber-600 dark:text-amber-400">
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(dish);
                    }}
                    className="px-4 py-2.5 rounded-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold text-xs hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-stone-950 transition-colors shadow-sm"
                  >
                    + Quick Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US (LUXURY CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Unmatched Excellence</span>
          <h2 className="font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">Why Gourmetium Stands Apart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Michelin-Trained Chefs</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Every dish is conceptualized and prepared by master culinary artists trained in Europe and Asia’s top establishments.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Temperature-Controlled Delivery</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Custom thermal containers ensure cold courses remain chilled and hot dishes arrive at precise serving heat.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">100% Organic Sourcing</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              We partner directly with local biodynamic farms and sustainable fisheries for absolute freshness.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 p-10 md:p-16 text-stone-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-stone-950/10 text-stone-950 text-[10px] font-bold tracking-widest uppercase">
              Exclusive Dining Experience
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold leading-tight">
              Ready To Indulge In Extraordinary Taste?
            </h2>
            <p className="text-sm opacity-90 font-medium">
              Join our VIP Dining Club to unlock complimentary appetizer pairing & private chef invitations.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('menu')}
            className="px-8 py-4 rounded-full bg-stone-950 text-amber-400 font-bold text-base hover:bg-stone-900 transition-colors shadow-xl shrink-0"
          >
            Explore Full Menu Now
          </button>
        </div>
      </section>

    </div>
  );
};
