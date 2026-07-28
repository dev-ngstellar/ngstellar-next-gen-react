import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, Flame, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FOOD_ITEMS, FOOD_CATEGORIES } from '../../data/mockData';

export const Menu = () => {
  const { activeCategory, setActiveCategory, setSelectedDishId, setCurrentView, addToCart, wishlist, toggleWishlist } = useApp();
  
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [filterChefSpecial, setFilterChefSpecial] = useState(false);

  const filteredDishes = FOOD_ITEMS.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    const matchesVeg = filterVegOnly ? item.isVeg : true;
    const matchesChef = filterChefSpecial ? item.isChefSpecial : true;
    return matchesCat && matchesSearch && matchesVeg && matchesChef;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Artisanal Selection</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100">
          The Gourmetium Menu
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
          Explore our complete collection of handcrafted entrées, wood-fired pizzas, prime cuts, and signature desserts.
        </p>
      </div>

      {/* Controls Bar: Search, Category Tabs, Filter Chips, View Toggle */}
      <div className="space-y-6">
        
        {/* Search & Layout Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Quick Filter Toggles & View Mode */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => setFilterVegOnly(prev => !prev)}
              className={`px-3 py-2 text-xs font-bold rounded-xl border transition-colors ${
                filterVegOnly
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-800'
              }`}
            >
              🌱 Vegetarian Only
            </button>

            <button
              onClick={() => setFilterChefSpecial(prev => !prev)}
              className={`px-3 py-2 text-xs font-bold rounded-xl border transition-colors ${
                filterChefSpecial
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                  : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-800'
              }`}
            >
              ★ Chef Specials
            </button>

            <div className="flex items-center p-1 bg-stone-200/60 dark:bg-stone-800 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-sm' : 'text-stone-400'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-sm' : 'text-stone-400'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          {FOOD_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-bold rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/50 dark:border-stone-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

      </div>

      {/* Dishes Display */}
      {filteredDishes.length === 0 ? (
        <div className="text-center py-20 text-stone-400">
          <Utensils className="w-12 h-12 mx-auto mb-3 stroke-[1.5]" />
          <h3 className="font-serif text-lg font-bold text-stone-700 dark:text-stone-300">No Dishes Found</h3>
          <p className="text-xs text-stone-500">Try adjusting your filters or search terms.</p>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => {
            const isLiked = wishlist.includes(dish.id);
            return (
              <div
                key={dish.id}
                onClick={() => { setSelectedDishId(dish.id); setCurrentView('food-detail'); }}
                className="group rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(dish.id); }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 backdrop-blur-md transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span>{dish.calories} • {dish.prepTime}</span>
                      <span className="flex items-center gap-1 font-semibold text-stone-800 dark:text-stone-200">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {dish.rating}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-500 transition-colors">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-amber-600 dark:text-amber-400">
                    ${dish.price.toFixed(2)}
                  </span>

                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(dish); }}
                    className="px-5 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
                  >
                    + Add to Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* LIST VIEW */
        <div className="space-y-4">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => { setSelectedDishId(dish.id); setCurrentView('food-detail'); }}
              className="p-4 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all cursor-pointer group"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full sm:w-40 h-32 rounded-2xl object-cover"
              />
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] font-bold text-amber-500 uppercase">{dish.category}</span>
                  <span className="text-xs text-stone-400">• {dish.calories}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-500 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 max-w-xl">
                  {dish.description}
                </p>
              </div>

              <div className="flex sm:flex-col items-center justify-between w-full sm:w-auto gap-4">
                <span className="font-serif text-2xl font-bold text-amber-600 dark:text-amber-400">
                  ${dish.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); addToCart(dish); }}
                  className="px-6 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
