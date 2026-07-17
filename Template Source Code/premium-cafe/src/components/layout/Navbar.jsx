import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="sticky top-0 z-40 w-full glass bg-background/80 backdrop-blur-md border-b border-border py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="font-serif text-2xl font-bold tracking-wider text-primary">STELLAR CAFE</Link>
      
      <div className="flex items-center space-x-6 md:space-x-10">
        <div className="hidden md:flex space-x-6 font-sans text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link to="/menu" className="hover:text-secondary transition-colors">Menu</Link>
          <Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </div>
        
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 text-primary hover:text-secondary transition-colors"
        >
          <ShoppingBag size={22} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
