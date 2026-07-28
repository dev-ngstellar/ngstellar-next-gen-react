import React, { useState } from 'react';
import { Star, Clock, Flame, ShieldCheck, Heart, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FOOD_ITEMS } from '../../data/mockData';

export const FoodDetails = () => {
  const { selectedDishId, setCurrentView, addToCart, wishlist, toggleWishlist } = useApp();

  const dish = FOOD_ITEMS.find(item => item.id === selectedDishId) || FOOD_ITEMS[0];
  const [selectedImg, setSelectedImg] = useState(dish.image);
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState({});

  const handleCustomizationChange = (groupName, option) => {
    setCustomizations(prev => ({ ...prev, [groupName]: option }));
  };

  const handleAdd = () => {
    addToCart(dish, customizations, quantity);
  };

  const isLiked = wishlist.includes(dish.id);
  const relatedDishes = FOOD_ITEMS.filter(item => item.category === dish.category && item.id !== dish.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Back Button */}
      <button
        onClick={() => setCurrentView('menu')}
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-amber-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Menu</span>
      </button>

      {/* Main Grid: Gallery + Customization Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-2xl border border-stone-200/60 dark:border-stone-800">
            <img
              src={selectedImg}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => toggleWishlist(dish.id)}
              className="absolute top-4 right-4 p-3 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 backdrop-blur-md transition-colors"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          {dish.gallery && dish.gallery.length > 1 && (
            <div className="flex gap-4">
              {dish.gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImg(imgUrl)}
                  className={`w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImg === imgUrl ? 'border-amber-500 scale-105 shadow-md' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Dish Info & Customization */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold uppercase">
                {dish.category}
              </span>
              {dish.isChefSpecial && (
                <span className="px-3 py-1 rounded-full bg-stone-900 text-amber-400 text-[10px] font-extrabold">
                  Chef Signature
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
              {dish.name}
            </h1>

            <div className="flex items-center gap-4 mt-3 text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1 font-bold text-stone-900 dark:text-stone-100">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {dish.rating} ({dish.reviewsCount} reviews)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-500" />
                {dish.prepTime}
              </span>
              <span>•</span>
              <span>{dish.calories}</span>
            </div>
          </div>

          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {dish.description}
          </p>

          {/* Pricing */}
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/50 dark:border-stone-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase font-bold">Standard Price</span>
              <span className="font-serif text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                ${(dish.discountPrice || dish.price).toFixed(2)}
              </span>
            </div>

            {/* Quantity Controller */}
            <div className="flex items-center gap-3 bg-white dark:bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="text-stone-600 dark:text-stone-300 font-bold hover:text-amber-500 px-2 text-sm"
              >
                -
              </button>
              <span className="font-bold text-stone-900 dark:text-white text-sm w-4 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="text-stone-600 dark:text-stone-300 font-bold hover:text-amber-500 px-2 text-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* Customization Options */}
          {dish.customizations && dish.customizations.length > 0 && (
            <div className="space-y-4 pt-2">
              <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">Personalize Your Dish</h4>
              {dish.customizations.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <span className="text-xs font-semibold text-stone-600 dark:text-stone-400">{group.name}</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.options.map((opt, oIdx) => {
                      const isSelected = customizations[group.name] === opt;
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleCustomizationChange(group.name, opt)}
                          className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-colors ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                              : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add to Cart CTA */}
          <button
            onClick={handleAdd}
            className="w-full py-4 rounded-2xl bg-amber-500 text-stone-950 font-extrabold text-sm hover:bg-amber-400 transition-colors shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2"
          >
            <span>Add To Order (${((dish.discountPrice || dish.price) * quantity).toFixed(2)})</span>
          </button>

          {/* Ingredients & Nutrition Tabs */}
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/30 border border-stone-200/50 dark:border-stone-800 space-y-3">
            <h4 className="font-serif text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">Artisanal Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients?.map((ing, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-[11px] font-medium text-stone-700 dark:text-stone-300">
                  {ing}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Related Items Section */}
      {relatedDishes.length > 0 && (
        <div className="space-y-6 border-t border-stone-200/60 dark:border-stone-800 pt-12">
          <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">You Might Also Relish</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedDishes.map((rDish) => (
              <div
                key={rDish.id}
                onClick={() => setSelectedImg(rDish.image)}
                className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-4 cursor-pointer hover:border-amber-500/50 transition-colors"
              >
                <img src={rDish.image} alt={rDish.name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h5 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{rDish.name}</h5>
                  <span className="text-xs font-bold text-amber-500">${rDish.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
