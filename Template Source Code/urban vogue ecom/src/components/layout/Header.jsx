import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useShop } from '../../hooks/useShop';

const Header = () => {
  const {
    cart,
    wishlist,
    removeFromCart,
    updateQuantity,
    getSubtotal,
    getCartCount,
    searchQuery,
    setSearchQuery,
    toggleWishlist
  } = useShop();

  const navigate = useNavigate();
  const location = useLocation();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // Handle scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsAccountOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate(`/products?search=${encodeURIComponent(searchInput)}`);
  };

  const navLinks = [
    { label: 'Collection', path: '/' },
    { label: 'Shop All', path: '/products' },
    { label: 'Women', path: '/products?category=Women' },
    { label: 'Men', path: '/products?category=Men' },
    { label: 'Shoes', path: '/products?category=Shoes' },
    { label: 'Accessories', path: '/products?category=Accessories' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-white py-6 border-b border-gray-100'
        }`}
      >
        <div className="global-container flex items-center justify-between">
          
          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-1.5 -ml-1.5 text-black hover:opacity-60 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 stroke-[1.25]" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-initial text-center lg:text-left">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.15em] hover:opacity-75 transition-opacity">
              URBAN VOGUE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-xs uppercase tracking-[0.2em] font-light text-black/80 hover:text-black hover:font-normal transition-all duration-300 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-1 sm:space-x-3.5">
            {/* Desktop Search bar */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center border-b border-black/10 py-1 focus-within:border-black transition-colors duration-300 mr-2">
              <input
                type="text"
                placeholder="SEARCH COLLECTION..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-transparent text-[10px] tracking-widest font-light text-black placeholder-black/45 focus:outline-none w-28 lg:w-40 uppercase"
              />
              <button type="submit" aria-label="Search">
                <Search className="w-3.5 h-3.5 stroke-[1.5] text-black/60 hover:text-black transition-colors" />
              </button>
            </form>

            {/* Mobile Search Button */}
            <button
              onClick={() => {
                const search = prompt("Search Urban Vogue:");
                if (search !== null) {
                  setSearchInput(search);
                  setSearchQuery(search);
                  navigate(`/products?search=${encodeURIComponent(search)}`);
                }
              }}
              className="md:hidden p-2 text-black hover:opacity-60 transition-opacity"
              aria-label="Search products"
            >
              <Search className="w-5 h-5 stroke-[1.25]" />
            </button>

            {/* Account Icon */}
            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-2 text-black hover:opacity-60 transition-opacity"
                aria-label="Account"
              >
                <User className="w-5 h-5 stroke-[1.25]" />
              </button>
              
              {/* Account Dropdown */}
              {isAccountOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsAccountOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 shadow-xl z-50 p-5 animate-[slide-up_0.3s_cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="font-serif text-base font-normal mb-1">Welcome, Sophia</h3>
                    <p className="text-[10px] text-gray-400 tracking-wider uppercase mb-4">Sophisticated Member</p>
                    <div className="h-[1px] bg-gray-100 my-3"></div>
                    <ul className="space-y-2.5 text-xs tracking-wider uppercase font-light">
                      <li>
                        <Link to="/products" className="block text-gray-600 hover:text-black transition-colors">My Profile</Link>
                      </li>
                      <li>
                        <Link to="/products" className="block text-gray-600 hover:text-black transition-colors">Orders & Returns</Link>
                      </li>
                      <li>
                        <Link to="/products" className="block text-gray-600 hover:text-black transition-colors">Vogue Rewards</Link>
                      </li>
                    </ul>
                    <div className="h-[1px] bg-gray-100 my-4"></div>
                    <button 
                      onClick={() => {
                        alert("Logged out of Urban Vogue.");
                        setIsAccountOpen(false);
                      }}
                      className="w-full text-center text-xs tracking-widest uppercase font-light text-white bg-black py-2.5 hover:bg-neutral-850 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-black hover:opacity-60 transition-opacity relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.25]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[8px] font-medium w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-black hover:opacity-60 transition-opacity relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.25]" />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[8px] font-medium w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- CART DRAWER OVERLAY --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-50 animate-[slide-in_0.4s_cubic-bezier(0.16,1,0.3,1)]">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-baseline space-x-2">
                <h2 className="font-serif text-lg tracking-wider">YOUR BAG</h2>
                <span className="text-xs text-gray-400 font-light">({getCartCount()} ITEMS)</span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:opacity-50 transition-opacity text-black"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-4 px-4">
                  <ShoppingBag className="w-12 h-12 stroke-[0.75] text-gray-300" />
                  <p className="font-serif text-lg tracking-wider">Your shopping bag is empty.</p>
                  <p className="text-xs text-gray-400 font-light tracking-wide max-w-xs">
                    Explore the Summer Collection 2026 and discover premium garments tailored to perfection.
                  </p>
                  <Link 
                    to="/products" 
                    onClick={() => setIsCartOpen(false)}
                    className="border border-black text-xs tracking-widest uppercase py-3 px-8 hover:bg-black hover:text-white transition-all duration-300 mt-2 inline-block font-light"
                  >
                    Shop New Arrivals
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartItemId} className="flex space-x-4 border-b border-gray-50 pb-5">
                    {/* Image */}
                    <div className="w-20 h-28 bg-gray-50 flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-sm text-black hover:underline tracking-wide">
                            <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                              {item.name}
                            </Link>
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-gray-400 hover:text-black p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5 stroke-[1.25]" />
                          </button>
                        </div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                          Size: <span className="text-black font-normal">{item.size}</span> | Color: <span className="text-black font-normal">{item.color}</span>
                        </p>
                        <p className="text-[11px] font-serif text-gray-500 mt-1">
                          Category: {item.category}
                        </p>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex justify-between items-center mt-2">
                        {/* Qty Selector */}
                        <div className="flex items-center border border-gray-200">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-55 transition-colors"
                          >
                            <Minus className="w-3 h-3 stroke-[1.5]" />
                          </button>
                          <span className="px-3 text-xs font-light">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-55 transition-colors"
                          >
                            <Plus className="w-3 h-3 stroke-[1.5]" />
                          </button>
                        </div>
                        {/* Price */}
                        <span className="text-sm font-medium tracking-wider">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <div className="flex justify-between text-sm tracking-wide">
                  <span className="font-light text-gray-500">SUBTOTAL</span>
                  <span className="font-medium font-serif">${getSubtotal().toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-gray-400 font-light tracking-wide">
                  Shipping, taxes, and promotional discounts calculated at checkout.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="border border-black text-center text-xs tracking-widest uppercase py-3 font-light hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Bag
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-black text-white text-center text-xs tracking-widest uppercase py-3 font-light hover:bg-neutral-850 transition-all duration-300"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- WISHLIST DRAWER OVERLAY --- */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500"
            onClick={() => setIsWishlistOpen(false)}
          ></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-50 animate-[slide-in_0.4s_cubic-bezier(0.16,1,0.3,1)]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-baseline space-x-2">
                <h2 className="font-serif text-lg tracking-wider">WISHLIST</h2>
                <span className="text-xs text-gray-400 font-light">({wishlist.length} ITEMS)</span>
              </div>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="p-1 hover:opacity-50 transition-opacity text-black"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-4 px-4">
                  <Heart className="w-12 h-12 stroke-[0.75] text-gray-300" />
                  <p className="font-serif text-lg tracking-wider">Your wishlist is empty.</p>
                  <p className="text-xs text-gray-400 font-light tracking-wide max-w-xs">
                    Save pieces you love to build your dream collection.
                  </p>
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigate('/products');
                    }}
                    className="border border-black text-xs tracking-widest uppercase py-3 px-8 hover:bg-black hover:text-white transition-all duration-300 mt-2 font-light"
                  >
                    Browse Collections
                  </button>
                </div>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="flex space-x-4 border-b border-gray-50 pb-5">
                    <div className="w-20 h-28 bg-gray-50 flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-sm text-black hover:underline tracking-wide">
                            <Link to={`/product/${item.id}`} onClick={() => setIsWishlistOpen(false)}>
                              {item.name}
                            </Link>
                          </h3>
                          <button 
                            onClick={() => toggleWishlist(item)}
                            className="text-red-500 hover:text-black p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5 stroke-[1.25]" />
                          </button>
                        </div>
                        <p className="text-xs font-serif text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                          Category: {item.category}
                        </p>
                      </div>
                      <div className="mt-2">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={() => setIsWishlistOpen(false)}
                          className="bg-black text-white text-[10px] tracking-widest uppercase py-2 px-4 inline-block font-light text-center w-full hover:bg-neutral-850 transition-colors"
                        >
                          View Details & Buy
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- MOBILE NAV MENU DRAWER --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-500"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative w-[300px] max-w-[85vw] bg-white h-full shadow-2xl flex flex-col z-50 animate-[slide-in-left_0.4s_cubic-bezier(0.16,1,0.3,1)] p-6">
            <div className="flex justify-between items-center mb-10">
              <span className="font-serif text-xl tracking-wider">URBAN VOGUE</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:opacity-50 transition-opacity text-black"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm uppercase tracking-[0.25em] font-light text-black hover:font-normal transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-[1px] bg-gray-100 my-6"></div>

            {/* Extra Mobile items */}
            <div className="space-y-4 text-xs font-light tracking-wide text-gray-500 uppercase">
              <p>📍 Worldwide Luxury Shipping</p>
              <p>📞 Concierge: 1-800-VOGUE</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for sliding drawer entries */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Header;
