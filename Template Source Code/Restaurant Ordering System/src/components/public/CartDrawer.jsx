import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateCartQty, 
    cartSubtotal, 
    discountAmount, 
    tax, 
    deliveryFee, 
    cartTotal,
    appliedCoupon,
    setAppliedCoupon,
    placeOrder,
    setCurrentView
  } = useApp();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.toUpperCase() === 'GOURMET20') {
      setAppliedCoupon('GOURMET20');
      setCouponError('');
    } else {
      setCouponError('Invalid promo code. Try GOURMET20');
    }
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    placeOrder({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      paymentMethod: 'Apple Pay (Paid)'
    });
    setIsCheckingOut(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm z-50"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white dark:bg-stone-900 shadow-2xl z-50 flex flex-col border-l border-stone-200 dark:border-stone-800"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white">Your Order</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">{cart.length} item(s) selected</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-stone-400">
                  <ShoppingBag className="w-16 h-16 stroke-[1.5] mb-4 text-stone-300 dark:text-stone-700" />
                  <h4 className="font-serif text-lg font-bold text-stone-800 dark:text-stone-200">Your Cart is Empty</h4>
                  <p className="text-xs text-stone-500 max-w-xs mt-1 mb-6">Explore our artisanal menu and discover exquisite culinary delights.</p>
                  <button
                    onClick={() => { setIsCartOpen(false); setCurrentView('menu'); }}
                    className="px-6 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  {!isCheckingOut ? (
                    <>
                      {/* Cart Items List */}
                      <div className="space-y-4">
                        {cart.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-800"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 rounded-xl object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-sm text-stone-900 dark:text-stone-100 truncate">{item.name}</h5>
                              <p className="text-xs text-amber-600 dark:text-amber-400 font-bold">
                                ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                              </p>
                              {item.customizations && Object.entries(item.customizations).length > 0 && (
                                <p className="text-[10px] text-stone-400 truncate">
                                  {Object.values(item.customizations).join(', ')}
                                </p>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 bg-white dark:bg-stone-900 px-2 py-1 rounded-lg border border-stone-200 dark:border-stone-700">
                              <button
                                onClick={() => updateCartQty(idx, -1)}
                                className="w-6 h-6 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300 hover:text-amber-500"
                              >
                                -
                              </button>
                              <span className="text-xs font-bold text-stone-900 dark:text-white w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateCartQty(idx, 1)}
                                className="w-6 h-6 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300 hover:text-amber-500"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(idx)}
                              className="p-1.5 text-stone-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Promo Code Form */}
                      <form onSubmit={handleApplyCoupon} className="space-y-2">
                        <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-amber-500" /> Apply Promo Code
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="e.g. GOURMET20"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            className="flex-1 px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2 text-xs font-bold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-xl hover:opacity-90 transition-opacity"
                          >
                            Apply
                          </button>
                        </div>
                        {appliedCoupon && (
                          <p className="text-xs text-emerald-500 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Coupon GOURMET20 (20% OFF) Applied!
                          </p>
                        )}
                        {couponError && <p className="text-xs text-red-500">{couponError}</p>}
                      </form>

                      {/* Price Calculation Summary */}
                      <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/50 dark:border-stone-800 space-y-2.5 text-xs">
                        <div className="flex justify-between text-stone-600 dark:text-stone-400">
                          <span>Subtotal</span>
                          <span className="font-semibold text-stone-900 dark:text-white">${cartSubtotal.toFixed(2)}</span>
                        </div>
                        {discountAmount > 0 && (
                          <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                            <span>Promo Discount (20%)</span>
                            <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-stone-600 dark:text-stone-400">
                          <span>Est. Tax (9%)</span>
                          <span className="font-semibold text-stone-900 dark:text-white">${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-stone-600 dark:text-stone-400">
                          <span>Luxury Delivery Fee</span>
                          <span className="font-semibold text-stone-900 dark:text-white">${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="pt-2 border-t border-stone-200 dark:border-stone-700 flex justify-between text-sm font-bold text-stone-900 dark:text-white">
                          <span>Total Amount</span>
                          <span className="text-amber-600 dark:text-amber-400 font-serif text-lg">${cartTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Checkout Information Form */
                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 flex items-start gap-2">
                        <ShieldCheck className="w-5 h-5 shrink-0" />
                        <div>
                          <p className="font-bold">Encrypted Express Checkout</p>
                          <p className="mt-0.5 opacity-90">Instant confirmation & real-time kitchen tracking enabled.</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Eleanor Vance"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Phone Number</label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 019-2834"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Delivery Address</label>
                          <textarea
                            rows={2}
                            required
                            placeholder="742 Evergreen Terrace, Apt 4B"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 resize-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Payment Method</label>
                          <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-xs font-semibold text-stone-900 dark:text-white flex items-center justify-between">
                            <span> Apple Pay / One-Touch Card</span>
                            <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Pre-Approved</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(false)}
                        className="text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-semibold"
                      >
                        ← Back to Cart Items
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>

            {/* Footer Action */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
                {!isCheckingOut ? (
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleCheckoutSubmit}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Place Order (${cartTotal.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
