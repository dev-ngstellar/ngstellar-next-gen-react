import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Star, ShoppingCart, Heart, ShieldCheck, Truck, QrCode, Calendar, Tag, Check, ArrowLeft, RefreshCw } from 'lucide-react';

export default function ProductDetails() {
  const {
    selectedProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    setBarcodeProduct,
    setActiveCustomerTab,
    products
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [subscriptionType, setSubscriptionType] = useState('one-time'); // 'one-time' | 'weekly' | 'monthly'

  if (!selectedProduct) return null;

  const relatedProducts = products.filter(p => p.id !== selectedProduct.id && p.category === selectedProduct.category).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Back navigation */}
      <button 
        onClick={() => setActiveCustomerTab('shop')}
        className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Shop Catalog
      </button>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Image Gallery & Barcode Card */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm flex items-center justify-center relative">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="max-h-96 w-full object-contain rounded-2xl"
            />
            {selectedProduct.isOrganic && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-xs shadow-md">
                100% Certified Organic
              </span>
            )}
            <button
              onClick={() => setBarcodeProduct(selectedProduct)}
              className="absolute top-4 right-4 p-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-md text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all"
            >
              <QrCode className="w-4 h-4 text-emerald-600" /> Print Label
            </button>
          </div>

          {/* Batch & Expiry Card */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Batch ID</p>
              <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5">{selectedProduct.batchNumber}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Expiry Date</p>
              <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5">{selectedProduct.expiryDate}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Origin</p>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{selectedProduct.origin}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Product Specification & Buy Box */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold">
                {selectedProduct.category}
              </span>
              <span className="text-xs text-slate-400 font-bold">• {selectedProduct.brand}</span>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{selectedProduct.name}</h1>

            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-500 mr-1" />
                <span>{selectedProduct.rating}</span>
                <span className="text-slate-400 font-normal text-xs ml-1">({selectedProduct.reviewsCount} verified reviews)</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" /> In Stock ({selectedProduct.stock} units)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">${selectedProduct.price.toFixed(2)}</span>
            {selectedProduct.originalPrice > selectedProduct.price && (
              <span className="text-base text-slate-400 line-through">${selectedProduct.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-xs text-slate-500">/ {selectedProduct.unit}</span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{selectedProduct.description}</p>

          {/* Subscription Plans */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Purchase Option</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'one-time', title: 'One-Time', desc: 'Standard Price' },
                { id: 'weekly', title: 'Weekly Auto', desc: 'Save 10%' },
                { id: 'monthly', title: 'Monthly Auto', desc: 'Save 15%' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSubscriptionType(opt.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    subscriptionType === opt.id
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 font-bold'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{opt.title}</p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
              >
                -
              </button>
              <span className="px-4 py-3 text-sm font-extrabold text-slate-900 dark:text-slate-100">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(selectedProduct, quantity)}
              className="flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingCart className="w-5 h-5" /> Add To Basket (${(selectedProduct.price * quantity).toFixed(2)})
            </button>

            <button
              onClick={() => toggleWishlist(selectedProduct.id)}
              className={`p-4 rounded-2xl border transition-colors ${
                wishlist.includes(selectedProduct.id)
                  ? 'border-red-200 bg-red-50 text-red-500 dark:border-red-900 dark:bg-red-950/30'
                  : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${wishlist.includes(selectedProduct.id) ? 'fill-red-500' : ''}`} />
            </button>
          </div>

          {/* Nutrition Table */}
          {selectedProduct.nutrition && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">Nutrition Breakdown</h3>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                {Object.entries(selectedProduct.nutrition).map(([key, val]) => (
                  <div key={key} className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                    <p className="text-[10px] text-slate-400 capitalize">{key}</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
