import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { mockProducts } from '../data/products';
import { useShop } from '../hooks/useShop';
import ProductCard from '../components/products/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  // Find active product
  const product = useMemo(() => {
    return mockProducts.find(p => p.id === id) || mockProducts[0];
  }, [id]);

  const isSaved = isInWishlist(product.id);

  // States
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center', transform: 'scale(1)' });
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details' or 'reviews'

  // Reset page state when product changes
  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || null);
      setQuantity(1);
      setIsAdded(false);
      window.scrollTo(0, 0);
    }
  }, [product]);

  // Related Products (4 products from same category, excluding active one)
  const relatedProducts = useMemo(() => {
    return mockProducts
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // Zoom Effect Logic
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center',
      transform: 'scale(1)'
    });
  };

  const handleAddToBag = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color.");
      return;
    }
    const success = addToCart(product, selectedSize, selectedColor, quantity);
    if (success) {
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color.");
      return;
    }
    const success = addToCart(product, selectedSize, selectedColor, quantity);
    if (success) {
      navigate('/checkout');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-page-enter">
      
      {/* Breadcrumbs */}
      <nav className="text-[10px] uppercase tracking-[0.2em] font-light mb-10 text-gray-400">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <span className="mx-2.5">/</span>
        <Link to="/products" className="hover:text-black transition-colors">Products</Link>
        <span className="mx-2.5">/</span>
        <Link to={`/products?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
        <span className="mx-2.5">/</span>
        <span className="text-black font-normal">{product.name}</span>
      </nav>

      {/* Main Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Gallery & Zoom Effect */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          
          {/* Thumbnails list */}
          <div className="flex flex-row md:flex-col gap-3 flex-shrink-0 md:w-20 overflow-x-auto md:overflow-x-visible">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-16 h-20 md:w-full aspect-[3/4] bg-gray-50 flex-shrink-0 overflow-hidden border transition-all duration-300 ${
                  activeImageIndex === idx ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Zoom Lens Frame */}
          <div 
            className="flex-1 aspect-[3/4] bg-gray-55 overflow-hidden cursor-zoom-in relative select-none border border-gray-100"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-75 ease-out absolute inset-0"
              style={zoomStyle}
            />
            {/* Small Zoom Cue Tag */}
            <span className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-xs text-[8px] tracking-widest uppercase py-1.5 px-3 text-black/80 font-light pointer-events-none">
              Hover To Zoom
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN: Customization Details */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-start">
          <div>
            {/* Category tag */}
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-2">
              {product.category}
            </span>
            
            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl text-black tracking-wide leading-tight">
              {product.name}
            </h1>
            
            {/* Rating Stars & Price */}
            <div className="flex items-center space-x-5 mt-4">
              <span className="text-xl font-medium tracking-wider font-serif">
                ${product.price.toFixed(2)}
              </span>
              <div className="w-[1px] h-3 bg-gray-200"></div>
              <div className="flex items-center space-x-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-black text-black' : 'text-gray-200'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-black font-light mt-0.5">
                  {product.rating} ({product.reviews.length} Reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-gray-100"></div>

          {/* Editorial Description */}
          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
            {product.description}
          </p>

          {/* Color Selector */}
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-3">
              Color: <span className="text-black font-medium">{selectedColor?.name}</span>
            </span>
            <div className="flex items-center space-x-3.5">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                    selectedColor?.name === color.name 
                      ? 'border-black scale-110 shadow-xs' 
                      : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor?.name === color.name && (
                    <Check className={`w-3.5 h-3.5 ${color.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-3">
              Size: <span className="text-black font-medium">{selectedSize}</span>
            </span>
            <div className="flex flex-wrap gap-2.5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border text-xs tracking-wider py-2.5 px-4 min-w-[46px] transition-all duration-200 font-light ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-black text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-3">
              Quantity
            </span>
            <div className="flex items-center border border-gray-200 w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-50 transition-colors text-xs font-light"
              >
                —
              </button>
              <span className="flex-1 text-center text-xs font-light">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-50 transition-colors text-xs font-light"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex gap-4">
              {/* Add to Cart */}
              <button
                onClick={handleAddToBag}
                disabled={isAdded}
                className={`flex-1 text-xs tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2.5 transition-all duration-300 font-light ${
                  isAdded 
                    ? 'bg-green-600 text-white' 
                    : 'bg-black text-white hover:bg-neutral-850'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added To Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 stroke-[1.25]" />
                    Add To Bag
                  </>
                )}
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 border transition-all ${
                  isSaved 
                    ? 'border-red-500 bg-red-50/50 text-red-500' 
                    : 'border-gray-200 hover:border-black text-black'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Buy Now */}
            <button
              onClick={handleBuyNow}
              className="w-full bg-white text-black border border-black text-xs tracking-widest uppercase py-4 px-6 hover:bg-black hover:text-white transition-all duration-300 font-light text-center block"
            >
              Buy It Now
            </button>
          </div>

          {/* Shipping Info details */}
          <div className="flex items-start space-x-3 text-[11px] text-gray-500 font-light tracking-wide bg-gray-50/80 p-4 border border-gray-100 mt-2">
            <AlertCircle className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-black uppercase">Complimentary Worldwide Delivery</p>
              <p>Free standard courier delivery on all orders over $200. Orders ship in our signature branded cotton storage bags and editorial box.</p>
            </div>
          </div>

        </div>

      </div>

      {/* --- SPECIFICATIONS / REVIEWS TABS --- */}
      <section className="mt-24 border-t border-gray-150 pt-16">
        {/* Tab Controls */}
        <div className="flex justify-center space-x-12 border-b border-gray-100 pb-4 mb-10 uppercase tracking-widest text-xs font-light">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-2 transition-all relative ${
              activeTab === 'details' ? 'text-black font-semibold' : 'text-gray-400 hover:text-black'
            }`}
          >
            Product Details
            {activeTab === 'details' && <span className="absolute bottom-[-17px] left-0 right-0 h-[1.5px] bg-black"></span>}
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-2 transition-all relative`}
          >
            Client Reviews ({product.reviews.length})
            {activeTab === 'reviews' && <span className="absolute bottom-[-17px] left-0 right-0 h-[1.5px] bg-black"></span>}
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto min-h-[160px]">
          {activeTab === 'details' ? (
            <ul className="space-y-4 text-xs sm:text-sm text-gray-500 font-light tracking-wide list-disc list-inside">
              {product.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-black font-medium">{detail.split(':')[0]}</span>
                  {detail.split(':')[1] ? `:${detail.split(':')[1]}` : ''}
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-8">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-50 pb-6 space-y-3.5">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs font-medium tracking-wider text-black block uppercase">
                        {review.author}
                      </span>
                      <span className="text-[10px] text-gray-400 font-light block mt-0.5">
                        {review.date}
                      </span>
                    </div>
                    {/* Stars */}
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${
                            i < review.rating ? 'fill-black text-black' : 'text-gray-250'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- RELATED PRODUCTS GRID --- */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 border-t border-gray-150 pt-16">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block mb-3">
              Complete the Aesthetic
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-black">
              Related Products
            </h2>
            <div className="w-12 h-[1px] bg-black/20 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetails;
