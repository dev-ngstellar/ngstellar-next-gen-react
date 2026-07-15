import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Star } from 'lucide-react';
import { useShop } from '../../hooks/useShop';

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  
  const saved = isInWishlist(product.id);
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <div className="group relative flex flex-col justify-between h-full bg-white transition-all duration-300">
      
      {/* Image Wrap */}
      <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden mb-4">
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-xs hover:scale-105 transition-transform"
          aria-label="Add to wishlist"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              saved 
                ? 'fill-black stroke-black text-black' 
                : 'stroke-black text-black'
            }`} 
          />
        </button>

        {/* Product Navigation Link */}
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          {/* Dual Image Hover Transition */}
          <img
            src={primaryImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-0 absolute inset-0"
          />
          <img
            src={secondaryImage}
            alt={`${product.name} alternate`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute inset-0"
          />
        </Link>

        {/* Quick View Button (Slide up on hover) */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-full bg-white text-black text-[10px] tracking-widest font-light uppercase py-3 border border-black/10 hover:bg-black hover:text-white transition-colors duration-300 shadow-sm flex items-center justify-center gap-2"
          >
            <Eye className="w-3.5 h-3.5 stroke-[1.25]" />
            Quick View
          </button>
        </div>
      </div>

      {/* Details Wrap */}
      <div className="flex-1 flex flex-col justify-between px-1">
        <div>
          {/* Category */}
          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-light mb-1">
            {product.category}
          </p>
          
          {/* Title */}
          <h3 className="font-serif text-[13px] text-black tracking-wide leading-relaxed hover:underline mb-1">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>
        </div>

        {/* Rating and Price */}
        <div className="flex justify-between items-baseline mt-2 pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-black text-black" />
            <span className="text-[10px] tracking-wider text-black font-light mt-0.5">
              {product.rating.toFixed(1)}
            </span>
          </div>
          <p className="text-[13px] font-medium tracking-wider text-black">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
