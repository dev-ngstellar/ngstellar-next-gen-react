import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Truck } from 'lucide-react';

export default function Cart() {
  const {
    cart,
    updateCartQty,
    removeFromCart,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    taxAmount,
    cartTotal,
    appliedCoupon,
    setAppliedCoupon,
    deliverySlot,
    setDeliverySlot,
    setActiveCustomerTab
  } = useStore();

  const freeDeliveryProgress = Math.min(100, (cartSubtotal / 50) * 100);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Your Basket is Empty</h2>
        <p className="text-xs text-slate-500">Explore fresh farm produce, organic fruits, and gourmet essentials.</p>
        <button
          onClick={() => setActiveCustomerTab('shop')}
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-2"
        >
          Start Shopping <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Your Grocery Basket</h1>

      {/* Free Delivery Bar */}
      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-emerald-800 dark:text-emerald-300">
          <span>
            {cartSubtotal >= 50 ? '🎉 You qualify for FREE Express Delivery!' : `Add $${(50 - cartSubtotal).toFixed(2)} more for FREE Express Delivery`}
          </span>
          <span>{freeDeliveryProgress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-emerald-200 dark:bg-emerald-900 overflow-hidden">
          <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${freeDeliveryProgress}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map(({ product, qty }) => (
            <div 
              key={product.id}
              className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">{product.category}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{product.name}</h3>
                  <p className="text-xs text-slate-400">${product.price.toFixed(2)} / {product.unit}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <button onClick={() => updateCartQty(product.id, -1)} className="px-3 py-1.5 font-bold hover:bg-slate-200 dark:hover:bg-slate-700">-</button>
                  <span className="px-3 py-1.5 text-xs font-bold">{qty}</span>
                  <button onClick={() => updateCartQty(product.id, 1)} className="px-3 py-1.5 font-bold hover:bg-slate-200 dark:hover:bg-slate-700">+</button>
                </div>

                <span className="text-base font-extrabold text-slate-900 dark:text-slate-100 w-16 text-right">
                  ${(product.price * qty).toFixed(2)}
                </span>

                <button onClick={() => removeFromCart(product.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 border-b pb-3">Order Summary</h3>

          {/* Delivery Slot Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Select Fulfillment Slot</label>
            <select
              value={deliverySlot}
              onChange={(e) => setDeliverySlot(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 outline-none"
            >
              <option value="Express 30 Mins ($2.99)">⚡ Express 30 Mins ($2.99)</option>
              <option value="Today 2-4 PM (Free)">Today 2-4 PM (Free)</option>
              <option value="Tomorrow 10 AM (Free)">Tomorrow 10 AM (Free)</option>
            </select>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Basket Subtotal</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">${cartSubtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                <span>Promo Coupon ({appliedCoupon.code})</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Delivery Fee</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
            </div>

            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Est. Taxes (8%)</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">${taxAmount.toFixed(2)}</span>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline">
              <span className="text-sm font-extrabold text-slate-900 dark:text-slate-100">Total</span>
              <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => setActiveCustomerTab('checkout')}
            className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
          >
            Proceed To Checkout <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
