import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  ShoppingBag, 
  Carrot, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  Heart, 
  Eye, 
  QrCode, 
  Plus, 
  TrendingUp, 
  ChefHat, 
  CheckCircle2, 
  Apple, 
  Milk, 
  Wheat, 
  Drumstick, 
  Fish, 
  Coffee, 
  Snowflake, 
  Cookie, 
  Leaf 
} from 'lucide-react';
import { MOCK_CATEGORIES } from '../../data/mockData';

export default function Home() {
  const {
    products,
    selectedBranch,
    addToCart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct,
    setBarcodeProduct,
    setActiveCustomerTab,
    setSelectedProduct,
    recipes,
    addAllRecipeIngredientsToCart
  } = useStore();

  // Flash Sale Countdown State
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = products.filter(p => p.isFlashSale);
  const trendingProducts = products.slice(0, 6);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Carrot': return <Carrot className="w-6 h-6 text-orange-500" />;
      case 'Apple': return <Apple className="w-6 h-6 text-red-500" />;
      case 'Milk': return <Milk className="w-6 h-6 text-blue-500" />;
      case 'Wheat': return <Wheat className="w-6 h-6 text-amber-500" />;
      case 'Drumstick': return <Drumstick className="w-6 h-6 text-red-600" />;
      case 'Fish': return <Fish className="w-6 h-6 text-cyan-500" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-amber-800" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6 text-sky-400" />;
      case 'Cookie': return <Cookie className="w-6 h-6 text-amber-600" />;
      default: return <Leaf className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pt-8 pb-12 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold text-xs shadow-sm">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Operating Hub: {selectedBranch.name}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15]">
                Fresh Groceries. <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                  Delivered Smarter.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Experience cold-chain hyper-local delivery from certified organic growers and premier retail store networks in under 30 minutes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveCustomerTab('shop')}
                  className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 flex items-center gap-3 transition-all hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5" /> Start Shopping
                </button>

                <button
                  onClick={() => setActiveCustomerTab('categories')}
                  className="px-8 py-4 rounded-2xl border-2 border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-800 dark:text-slate-200 font-bold text-base bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all"
                >
                  Browse Categories
                </button>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                {[
                  { title: "Today's Deals", desc: 'Up to 40% OFF' },
                  { title: 'Free Delivery', desc: 'On orders $50+' },
                  { title: 'Fresh Every Day', desc: '100% Quality' },
                  { title: 'Premium Quality', desc: 'Farm Checked' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-xs border border-slate-200/50 dark:border-slate-700/50">
                    <p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{item.title}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Fresh Organic Produce" 
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-[10px] font-extrabold uppercase tracking-wider">
                      Featured Harvest
                    </span>
                    <h3 className="text-xl font-bold">Hydroponic & Organic Produce</h3>
                    <p className="text-xs text-slate-300">Sourced daily from certified local partners.</p>
                  </div>
                </div>
              </div>

              {/* Floating Promo Cards */}
              <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">30-Min Express</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Live GPS tracking</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                  ★ 4.9
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Verified Quality</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Over 50,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Popular Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore handpicked fresh groceries across primary departments
            </p>
          </div>
          <button 
            onClick={() => setActiveCustomerTab('categories')}
            className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {MOCK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCustomerTab('shop')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-soft-sm hover:shadow-soft-md transition-all text-center group flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getCategoryIcon(cat.icon)}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {cat.name}
              </h3>
              <span className="text-[11px] font-semibold text-slate-400 mt-0.5">
                {cat.itemCount}+ Items
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Flash Sale Banner & Countdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="space-y-1 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                ⚡ Flash Sale Today
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Exclusive Daily Produce Discounts</h2>
              <p className="text-xs text-slate-300">Limited quantity items directly from harvest stock</p>
            </div>

            {/* Countdown Box */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Ends In:</span>
              <div className="flex items-center gap-2 font-mono text-lg font-extrabold">
                <span className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-amber-400">{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span>:</span>
                <span className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-amber-400">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span>:</span>
                <span className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </div>

          {/* Flash Sale Products Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col justify-between group">
                <div className="relative mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-36 object-cover rounded-xl" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-red-500 text-white font-extrabold text-[10px]">
                    -{product.discountPercentage}%
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{product.category}</span>
                  <h4 className="text-sm font-bold truncate">{product.name}</h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">${product.price.toFixed(2)}</span>
                    <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product, 1)}
                  className="mt-3 w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Quick Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Trending Produce & Essentials
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Top selling items ordered across retail locations today
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trendingProducts.map((product) => (
            <div 
              key={product.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Image & Quick Action Overlay */}
                <div className="relative mb-3 overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-950">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>

                  {/* Quick View & Barcode Hover Action */}
                  <div className="absolute inset-x-0 bottom-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-md text-xs font-bold flex items-center gap-1 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                    <button
                      onClick={() => setBarcodeProduct(product)}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-md text-xs font-bold flex items-center gap-1 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                    >
                      <QrCode className="w-3.5 h-3.5" /> Barcode
                    </button>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-1 mt-0.5">{product.name}</h3>

                <div className="flex items-center gap-1 my-1 text-amber-500 text-[11px] font-bold">
                  <Star className="w-3 h-3 fill-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal text-[10px]">({product.reviewsCount})</span>
                </div>

                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-base font-extrabold text-slate-900 dark:text-slate-100">${product.price.toFixed(2)}</span>
                  <span className="text-[10px] text-slate-400">/ {product.unit}</span>
                </div>
              </div>

              <button
                onClick={() => addToCart(product, 1)}
                className="mt-3 w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recipe Showcase ("1-Click Add All Ingredients to Cart") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold">
                <ChefHat className="w-4 h-4" /> Recipe To Cart Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Cook Chef Recipes in 1 Click</h2>
              <p className="text-xs text-slate-400">Select any recipe and instantly add all exact ingredients to your shopping basket.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={recipe.image} alt={recipe.title} className="w-full h-44 object-cover" />
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
                      <span>⏱ {recipe.time}</span>
                      <span>🔥 {recipe.calories}</span>
                      <span>Level: {recipe.difficulty}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{recipe.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{recipe.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => addAllRecipeIngredientsToCart(recipe)}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add All Ingredients To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">Why Choose StellarRetail</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Built with enterprise quality standards for modern grocery shoppers and multi-branch retail operations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: '100% Fresh Quality Guarantee', desc: 'Direct farm sourcing with daily temperature monitoring.' },
            { title: '30-Minute Hyperlocal Delivery', desc: 'Micro-fulfillment hubs strategically placed across cities.' },
            { title: 'Transparent Wholesale Pricing', desc: 'No hidden markup, direct value pass-through.' },
            { title: 'Encrypted & Secure Payments', desc: 'PCI-DSS compliant checkout with Wallet integration.' },
            { title: 'Wide Organic Selection', desc: 'Over 5,000+ SKU certified non-GMO items available.' },
            { title: 'Verified Local Suppliers', desc: 'Support local farmers and artisanal food producers.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
