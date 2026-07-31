import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Tag, Sparkles, Copy, Check, Gift, Percent, Zap } from 'lucide-react';

export default function Offers() {
  const { setAppliedCoupon, addToast, setActiveCustomerTab } = useStore();
  const [copiedCode, setCopiedCode] = useState('');

  const coupons = [
    { code: 'STELLAR10', discount: '10% OFF', minSpend: '$30', title: 'Welcome Member Reward', desc: 'Get 10% instant discount on your first online order.' },
    { code: 'ORGANIC20', discount: '20% OFF', minSpend: '$50', title: 'Organic Harvest Festival', desc: 'Save 20% on all certified organic produce & dairy.' },
    { code: 'EXPRESSFREE', discount: 'FREE DELIVERY', minSpend: '$40', title: 'Express Delivery Pass', desc: 'Zero delivery fee on 30-minute priority fulfillment.' }
  ];

  const handleApplyCoupon = (coupon) => {
    setAppliedCoupon({ code: coupon.code, discount: coupon.code === 'ORGANIC20' ? 0.20 : 0.10 });
    setCopiedCode(coupon.code);
    addToast('success', 'Coupon Applied!', `Promo code ${coupon.code} applied to your cart.`);
    setTimeout(() => setCopiedCode(''), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white shadow-2xl space-y-3">
        <span className="px-3 py-1 rounded-full bg-white/20 font-extrabold text-xs">Limited Time Promotions</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold">Exclusive Grocery Deals & Promo Codes</h1>
        <p className="text-xs sm:text-sm text-amber-100 max-w-xl">Claim member discount coupons and bundle savings directly at checkout.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coupons.map((c) => (
          <div key={c.code} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-dashed border-emerald-500/40 shadow-soft-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-extrabold text-xs">
                  {c.discount}
                </span>
                <span className="text-xs text-slate-400 font-medium">Min spend: {c.minSpend}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{c.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{c.desc}</p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between font-mono text-sm font-bold text-slate-900 dark:text-slate-100">
              <span>{c.code}</span>
              <button
                onClick={() => handleApplyCoupon(c)}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1 transition-all"
              >
                {copiedCode === c.code ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCode === c.code ? 'Applied' : 'Apply Code'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
