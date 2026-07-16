import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, CreditCard, Landmark, QrCode } from 'lucide-react';
import { useShop } from '../hooks/useShop';

const Checkout = () => {
  const { cart, getSubtotal, getCartCount, clearCart } = useShop();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'upi', 'netbanking'
  const [cardData, setCardData] = useState({ number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [errors, setErrors] = useState({});
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Calculations
  const subtotal = getSubtotal();
  const shipping = subtotal > 200 || subtotal === 0 ? 0.00 : 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Simple validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal Code is required';

    if (paymentMethod === 'card') {
      if (!cardData.number.trim()) newErrors.cardNumber = 'Card number required';
      if (!cardData.expiry.trim()) newErrors.cardExpiry = 'Expiry required';
      if (!cardData.cvv.trim()) newErrors.cardCvv = 'CVV required';
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim()) newErrors.upiId = 'UPI ID is required';
    } else if (paymentMethod === 'netbanking') {
      if (!selectedBank) newErrors.bank = 'Please select a bank';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
    if (errors[`card${name.charAt(0).toUpperCase() + name.slice(1)}`]) {
      setErrors(prev => ({ ...prev, [`card${name.charAt(0).toUpperCase() + name.slice(1)}`]: '' }));
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your bag is empty.");
      return;
    }

    if (validateForm()) {
      // Simulate API call
      const generatedId = `UV-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderId(generatedId);
      setIsOrdered(true);
      clearCart();
    } else {
      // Scroll to error
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (isOrdered) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-8 animate-page-enter">
        <CheckCircle2 className="w-20 h-20 text-black mx-auto stroke-[0.75] animate-[bounce_1s_infinite]" />
        
        <div className="space-y-3">
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block">
            Order Complete
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-black">
            Thank You For Your Order
          </h1>
          <p className="text-xs text-gray-500 font-light max-w-md mx-auto leading-relaxed">
            Your order has been logged and is currently being curated at our warehouse. A confirmation email with tracking details has been sent to <span className="font-normal text-black">{formData.email}</span>.
          </p>
        </div>

        {/* Order Details Panel */}
        <div className="bg-neutral-50 p-6 border border-gray-100 max-w-md mx-auto space-y-4 text-left text-xs tracking-wider uppercase font-light text-gray-500">
          <div className="flex justify-between">
            <span>Order Number</span>
            <span className="text-black font-semibold font-mono">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Delivery</span>
            <span className="text-black font-medium">June 15 - June 18, 2026</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Method</span>
            <span className="text-black font-medium">Premium Insured Air Courier</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3 text-black font-semibold">
            <span>Total Paid</span>
            <span className="font-serif text-sm">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            to="/products"
            className="bg-black text-white text-xs tracking-widest uppercase py-4 px-10 hover:bg-neutral-850 transition-colors font-light inline-flex items-center gap-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[1.25]" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-page-enter">
      
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-8 mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide">
          Secure Checkout
        </h1>
        <p className="text-xs text-gray-400 font-light mt-1.5 uppercase tracking-widest">
          Complete your billing and payment configurations to place your order
        </p>
      </div>

      {cart.length === 0 ? (
        /* Empty State */
        <div className="py-24 text-center space-y-6 max-w-md mx-auto">
          <h2 className="font-serif text-xl tracking-wider">No items to checkout.</h2>
          <p className="text-xs text-gray-500 font-light tracking-wide">
            Your shopping bag is currently empty. Please add items to checkout.
          </p>
          <Link
            to="/products"
            className="bg-black text-white text-xs tracking-widest uppercase py-3.5 px-8 hover:bg-neutral-850 transition-colors font-light inline-block"
          >
            Go to Catalogue
          </Link>
        </div>
      ) : (
        /* Checkout Form & Summary Grid */
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Inputs (Col span 7) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Billing Section */}
            <div className="space-y-6">
              <h2 className="font-serif text-xl tracking-wider pb-2 border-b border-gray-100">
                Billing Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.firstName && <span className="text-[10px] text-red-500 tracking-wide">{errors.firstName}</span>}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.lastName && <span className="text-[10px] text-red-500 tracking-wide">{errors.lastName}</span>}
                </div>

                {/* Email */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 tracking-wide">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 tracking-wide">{errors.phone}</span>}
                </div>

                {/* Address */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.address ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.address && <span className="text-[10px] text-red-500 tracking-wide">{errors.address}</span>}
                </div>

                {/* City */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.city ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.city && <span className="text-[10px] text-red-500 tracking-wide">{errors.city}</span>}
                </div>

                {/* State */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">State / Region *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.state ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.state && <span className="text-[10px] text-red-500 tracking-wide">{errors.state}</span>}
                </div>

                {/* Postal Code */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase font-light text-gray-500">Postal / Zip Code *</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                      errors.postalCode ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.postalCode && <span className="text-[10px] text-red-500 tracking-wide">{errors.postalCode}</span>}
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-6">
              <h2 className="font-serif text-xl tracking-wider pb-2 border-b border-gray-100">
                Payment Section
              </h2>

              {/* Methods Toggles */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`border py-3 px-4 text-[10px] tracking-widest uppercase font-light flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-black bg-black text-white font-normal' 
                      : 'border-gray-200 hover:border-black text-black'
                  }`}
                >
                  <CreditCard className="w-4 h-4 stroke-[1.25]" />
                  <span>Credit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`border py-3 px-4 text-[10px] tracking-widest uppercase font-light flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'upi' 
                      ? 'border-black bg-black text-white font-normal' 
                      : 'border-gray-200 hover:border-black text-black'
                  }`}
                >
                  <QrCode className="w-4 h-4 stroke-[1.25]" />
                  <span>UPI Payment</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`border py-3 px-4 text-[10px] tracking-widest uppercase font-light flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'netbanking' 
                      ? 'border-black bg-black text-white font-normal' 
                      : 'border-gray-200 hover:border-black text-black'
                  }`}
                >
                  <Landmark className="w-4 h-4 stroke-[1.25]" />
                  <span>Net Banking</span>
                </button>
              </div>

              {/* Method Forms */}
              <div className="p-6 bg-neutral-55 border border-gray-200 space-y-4">
                {paymentMethod === 'card' && (
                  <div className="space-y-4 animate-[fade-in_0.3s_ease-out]">
                    <div className="space-y-2">
                      <label className="text-[9px] tracking-widest uppercase font-light text-gray-400">Card Number *</label>
                      <input
                        type="text"
                        name="number"
                        placeholder="0000 0000 0000 0000"
                        value={cardData.number}
                        onChange={handleCardChange}
                        className={`w-full bg-white border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                          errors.cardNumber ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.cardNumber && <span className="text-[10px] text-red-500 tracking-wide">{errors.cardNumber}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] tracking-widest uppercase font-light text-gray-400">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          value={cardData.expiry}
                          onChange={handleCardChange}
                          className={`w-full bg-white border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                            errors.cardExpiry ? 'border-red-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.cardExpiry && <span className="text-[10px] text-red-500 tracking-wide">{errors.cardExpiry}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] tracking-widest uppercase font-light text-gray-400">Security CVV *</label>
                        <input
                          type="password"
                          name="cvv"
                          placeholder="***"
                          maxLength="3"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          className={`w-full bg-white border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                            errors.cardCvv ? 'border-red-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.cardCvv && <span className="text-[10px] text-red-500 tracking-wide">{errors.cardCvv}</span>}
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="space-y-3 animate-[fade-in_0.3s_ease-out]">
                    <label className="text-[9px] tracking-widest uppercase font-light text-gray-400">UPI Address (VPA) *</label>
                    <input
                      type="text"
                      placeholder="username@bank"
                      value={upiId}
                      onChange={(e) => {
                        setUpiId(e.target.value);
                        if (errors.upiId) setErrors(prev => ({ ...prev, upiId: '' }));
                      }}
                      className={`w-full bg-white border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors ${
                        errors.upiId ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.upiId && <span className="text-[10px] text-red-500 tracking-wide">{errors.upiId}</span>}
                    <p className="text-[10px] text-gray-400 font-light">Enter your virtual payment address to pay instantly via your phone.</p>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="space-y-3 animate-[fade-in_0.3s_ease-out]">
                    <label className="text-[9px] tracking-widest uppercase font-light text-gray-400">Select Bank *</label>
                    <select
                      value={selectedBank}
                      onChange={(e) => {
                        setSelectedBank(e.target.value);
                        if (errors.bank) setErrors(prev => ({ ...prev, bank: '' }));
                      }}
                      className={`w-full bg-white border py-3 px-4 text-xs font-light focus:outline-none focus:border-black transition-colors cursor-pointer ${
                        errors.bank ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Choose your bank...</option>
                      <option value="chase">Chase Manhattan Bank</option>
                      <option value="bofa">Bank of America</option>
                      <option value="wells">Wells Fargo</option>
                      <option value="citi">Citigroup</option>
                      <option value="hsbc">HSBC Luxury Premier</option>
                    </select>
                    {errors.bank && <span className="text-[10px] text-red-500 tracking-wide">{errors.bank}</span>}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary (Col span 5) */}
          <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 border border-gray-100 space-y-8 sticky top-28">
            <h2 className="font-serif text-lg tracking-wider pb-3 border-b border-gray-200">
              Order Summary
            </h2>

            {/* Simple Items List */}
            <div className="space-y-4 max-h-48 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-14 bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-serif text-black font-medium block truncate max-w-[200px]">{item.name}</span>
                      <span className="text-[9px] text-gray-400 uppercase tracking-widest block mt-0.5">
                        Qty: {item.quantity} | Size: {item.size}
                      </span>
                    </div>
                  </div>
                  <span className="font-light tracking-wide">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="h-[1px] bg-gray-200"></div>

            {/* Cost Details */}
            <div className="space-y-3.5 text-xs tracking-widest uppercase font-light text-gray-500">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-black font-serif">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-black font-serif">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes (8%)</span>
                <span className="text-black font-serif">${tax.toFixed(2)}</span>
              </div>
              
              <div className="h-[1px] bg-gray-200 my-1"></div>

              <div className="flex justify-between text-black font-semibold text-sm">
                <span>Total Amount</span>
                <span className="font-serif text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-black text-white text-center text-xs tracking-widest uppercase py-4 font-light hover:bg-neutral-850 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 stroke-[1.25]" />
                <span>Place Order</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-[9px] text-gray-400 tracking-wider uppercase font-light">
                <span>🔒 256-bit encryption</span>
                <span>•</span>
                <span>✓ Buyer Protection</span>
              </div>
            </div>

          </div>

        </form>
      )}

    </div>
  );
};

export default Checkout;
