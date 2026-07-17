import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useShop } from '../hooks/useShop';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getSubtotal, getCartCount, clearCart } = useShop();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = getSubtotal();
  // Free shipping on orders over $200, otherwise $15 flat
  const shipping = subtotal > 200 || subtotal === 0 ? 0.00 : 15.00;
  // 8% tax calculation
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="global-container py-12 animate-page-enter">
      
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-8 mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide">
          Your Shopping Bag
        </h1>
        <p className="text-xs text-gray-400 font-light mt-1.5 uppercase tracking-widest">
          Review your selection of premium garments ({getCartCount()} items)
        </p>
      </div>

      {cart.length === 0 ? (
        /* Empty State */
        <div className="py-24 text-center space-y-6 max-w-md mx-auto">
          <ShoppingBag className="w-16 h-16 stroke-[0.75] text-gray-300 mx-auto" />
          <h2 className="font-serif text-xl tracking-wider">Your shopping bag is empty.</h2>
          <p className="text-xs text-gray-500 font-light leading-relaxed tracking-wide">
            Explore the Summer Collection 2026. Discover classic cuts, structured tailoring, and premium materials designed to endure.
          </p>
          <div className="pt-4">
            <Link
              to="/products"
              className="bg-black text-white text-xs tracking-widest uppercase py-4 px-10 hover:bg-neutral-850 transition-colors font-light inline-block"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (
        /* Cart Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Items List (Col span 8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Headers (Desktop only) */}
            <div className="hidden md:grid grid-cols-12 text-[10px] tracking-[0.2em] font-semibold text-gray-400 uppercase pb-4 border-b border-gray-100">
              <div className="col-span-6">Product Details</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* List */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.cartItemId}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pb-6 border-b border-gray-100"
                >
                  
                  {/* Image & Title Info */}
                  <div className="col-span-1 md:col-span-6 flex space-x-4">
                    <div className="w-20 h-26 bg-gray-50 flex-shrink-0 overflow-hidden border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center space-y-1.5">
                      <h3 className="font-serif text-sm tracking-wide text-black hover:underline">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                        Size: <span className="text-black font-normal">{item.size}</span> | Color: <span className="text-black font-normal">{item.color}</span>
                      </p>
                      <p className="text-[11px] font-serif text-gray-400">
                        Category: {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-1 md:col-span-2 flex md:justify-center items-center justify-between text-xs sm:text-sm">
                    <span className="md:hidden text-[9px] tracking-widest text-gray-400 uppercase font-light">Price:</span>
                    <span className="font-light">${item.price.toFixed(2)}</span>
                  </div>

                  {/* Qty Manager */}
                  <div className="col-span-1 md:col-span-2 flex md:justify-center items-center justify-between">
                    <span className="md:hidden text-[9px] tracking-widest text-gray-400 uppercase font-light">Qty:</span>
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1.5 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-3 h-3 stroke-[1.25]" />
                      </button>
                      <span className="px-3.5 text-xs font-light">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1.5 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-3 h-3 stroke-[1.25]" />
                      </button>
                    </div>
                  </div>

                  {/* Total & Remove */}
                  <div className="col-span-1 md:col-span-2 flex md:justify-end items-center justify-between text-xs sm:text-sm font-medium">
                    <span className="md:hidden text-[9px] tracking-widest text-gray-400 uppercase font-light">Total:</span>
                    <div className="flex items-center space-x-4">
                      <span className="tracking-wider">${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.25]" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
              <Link
                to="/products"
                className="flex items-center space-x-2 text-xs tracking-widest uppercase font-light text-black hover:opacity-60 transition-opacity"
              >
                <ArrowLeft className="w-3.5 h-3.5 stroke-[1.25]" />
                <span>Continue Shopping</span>
              </Link>
              
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to clear your bag?")) {
                    clearCart();
                  }
                }}
                className="text-xs tracking-widest uppercase font-light text-gray-400 hover:text-black transition-colors"
              >
                Clear Shopping Bag
              </button>
            </div>

          </div>

          {/* RIGHT: Order Summary (Col span 4) */}
          <div className="lg:col-span-4 bg-neutral-50 p-6 sm:p-8 border border-gray-100 space-y-6">
            <h2 className="font-serif text-lg tracking-wider pb-3 border-b border-gray-200">
              Order Summary
            </h2>

            <div className="space-y-4 text-xs tracking-widest uppercase font-light text-gray-500">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-black font-serif text-sm">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-black font-serif text-sm">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="text-black font-serif text-sm">${tax.toFixed(2)}</span>
              </div>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <div className="flex justify-between text-black font-semibold text-sm">
                <span>Total</span>
                <span className="font-serif text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Extra Info */}
            <p className="text-[10px] text-gray-400 font-light leading-relaxed tracking-wide">
              {shipping === 0 
                ? 'Your order qualifies for complimentary premium worldwide shipping.' 
                : 'Spend $51.00 more to qualify for complimentary premium shipping.'}
            </p>

            <Link
              to="/checkout"
              className="w-full bg-black text-white text-center text-xs tracking-widest uppercase py-4 font-light hover:bg-neutral-850 transition-all duration-300 block"
            >
              Proceed to Checkout
            </Link>

            <div className="text-center pt-2">
              <p className="text-[9px] text-gray-400 tracking-wider font-light uppercase">
                Secure Checkout Powered by Vogue Encryption
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;
