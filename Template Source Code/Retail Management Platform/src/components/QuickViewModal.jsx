import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Star, ShoppingCart, Heart, ShieldCheck, Truck, RefreshCw, Check } from 'lucide-react';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist, setActiveCustomerTab, setActiveMode, setSelectedProduct } = useStore();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const handleFullDetails = () => {
    setSelectedProduct(quickViewProduct);
    setActiveMode('customer');
    setActiveCustomerTab('product-details');
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-slate-50 dark:bg-slate-950 p-6 flex items-center justify-center">
            <img 
              src={quickViewProduct.image} 
              alt={quickViewProduct.name} 
              className="max-h-80 w-full object-contain rounded-2xl"
            />
            {quickViewProduct.isOrganic && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-md">
                100% Organic
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                  {quickViewProduct.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{quickViewProduct.brand}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 mr-1" />
                  <span className="text-sm font-bold">{quickViewProduct.rating}</span>
                </div>
                <span className="text-xs text-slate-400">({quickViewProduct.reviewsCount} reviews)</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock ({quickViewProduct.stock})
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                  ${quickViewProduct.price.toFixed(2)}
                </span>
                {quickViewProduct.originalPrice > quickViewProduct.price && (
                  <span className="text-sm text-slate-400 line-through">
                    ${quickViewProduct.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-slate-500">/ {quickViewProduct.unit}</span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {quickViewProduct.description}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
                  >
                    -
                  </button>

                  <span className="px-4 py-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                    {quantity}
                  </span>

                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(quickViewProduct, quantity);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" /> Add To Cart (${(quickViewProduct.price * quantity).toFixed(2)})
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-xl border transition-colors ${
                    wishlist.includes(quickViewProduct.id)
                      ? 'border-red-200 bg-red-50 text-red-500 dark:border-red-900/50 dark:bg-red-950/30'
                      : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${wishlist.includes(quickViewProduct.id) ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleFullDetails}
                className="w-full text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                View Full Nutrition, Storage & Expiry Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
