import React from 'react';
import { Tag, Sparkles, Gift, Copy, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOCK_PROMOS } from '../../data/mockData';

export const Offers = () => {
  const { setAppliedCoupon, setIsCartOpen, setCurrentView } = useApp();
  const [copiedId, setCopiedId] = React.useState(null);

  const handleCopy = (promo) => {
    setAppliedCoupon(promo.code);
    setCopiedId(promo.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Exclusive Privileges</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100">
          Offers, Combos & Vouchers
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
          Claim seasonal tasting bundles, VIP membership perks, and instant discount vouchers.
        </p>
      </div>

      {/* Promos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_PROMOS.map((promo) => {
          const isCopied = copiedId === promo.id;
          return (
            <div
              key={promo.id}
              className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-xl space-y-6 flex flex-col justify-between hover:border-amber-500/50 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-500">
                  <Tag className="w-5 h-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">{promo.expiry}</span>
                </div>

                <h3 className="font-serif text-3xl font-extrabold text-stone-900 dark:text-stone-100">
                  {promo.discount}
                </h3>

                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  {promo.description}
                </p>

                <span className="inline-block text-[10px] font-bold text-stone-400">Min Spend: {promo.minSpend}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="p-3 rounded-2xl bg-stone-100 dark:bg-stone-800 font-mono text-sm font-bold text-center text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700">
                  {promo.code}
                </div>

                <button
                  onClick={() => handleCopy(promo)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isCopied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-md shadow-amber-500/20'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Code Applied to Cart!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Apply Voucher Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Festival Combo Box */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 p-8 sm:p-12 text-white border border-stone-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-extrabold uppercase tracking-widest">
            Limited Tasting Bundle
          </span>
          <h2 className="font-serif text-3xl font-bold">The Royal Tasting Experience</h2>
          <p className="text-xs text-stone-400 leading-relaxed">
            Includes Truffle Pizza, Wagyu A5 Burger, Lobster Fettuccine & 2 Old Fashioned Cocktails at an exclusive 25% combo bundle price.
          </p>
        </div>

        <button
          onClick={() => { setIsCartOpen(true); }}
          className="px-8 py-4 rounded-full bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-xl shrink-0"
        >
          Claim Bundle ($95.00)
        </button>
      </div>

    </div>
  );
};
