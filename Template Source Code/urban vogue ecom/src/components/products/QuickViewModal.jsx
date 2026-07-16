import React, { useState, useEffect } from 'react';
import { X, Heart, Star, ShoppingBag, Check } from 'lucide-react';
import { useShop } from '../../hooks/useShop';

const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isSaved = isInWishlist(product.id);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Set initial color and size if available
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || null);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color.");
      return;
    }
    const success = addToCart(product, selectedSize, selectedColor, quantity);
    if (success) {
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
        setQuickViewProduct(null); // Close modal on success
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-300 animate-[fade-in_0.3s_ease-out]"
        onClick={() => setQuickViewProduct(null)}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-10 shadow-2xl animate-[slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-black hover:opacity-55 transition-opacity"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 aspect-[4/5] md:h-full bg-gray-50 overflow-hidden relative">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Product Customization & Details */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto md:max-h-[85vh]">
          <div className="space-y-6">
            
            {/* Header info */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-light mb-1">
                {product.category}
              </p>
              <h2 className="font-serif text-xl sm:text-2xl text-black tracking-wide leading-tight">
                {product.name}
              </h2>
              
              <div className="flex items-center space-x-4 mt-3">
                <p className="text-lg font-medium tracking-wider">
                  ${product.price.toFixed(2)}
                </p>
                <div className="w-[1px] h-3 bg-gray-200"></div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                  <span className="text-xs text-black font-light mt-0.5">
                    {product.rating} Rating
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-gray-100"></div>

            {/* Description */}
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-2.5">
                Select Color: <span className="text-black font-medium">{selectedColor?.name}</span>
              </span>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                      selectedColor?.name === color.name 
                        ? 'border-black scale-110 shadow-xs' 
                        : 'border-gray-200 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor?.name === color.name && (
                      <Check className={`w-3 h-3 ${color.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-2.5">
                Select Size: <span className="text-black font-medium">{selectedSize}</span>
              </span>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border text-[11px] tracking-wider py-2 px-3 min-w-[42px] transition-colors duration-200 ${
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

            {/* Quantity */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-2.5">
                Quantity
              </span>
              <div className="flex items-center border border-gray-200 w-28">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 hover:bg-gray-50 transition-colors text-xs font-light"
                >
                  —
                </button>
                <span className="flex-1 text-center text-xs font-light">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 hover:bg-gray-50 transition-colors text-xs font-light"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3.5 mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleAddToCart}
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
            
            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3.5 border transition-all ${
                isSaved 
                  ? 'border-red-500 bg-red-50/50 text-red-500' 
                  : 'border-gray-200 hover:border-black text-black'
              }`}
              aria-label="Add to wishlist"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuickViewModal;
