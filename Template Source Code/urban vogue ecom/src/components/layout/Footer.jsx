import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
      <div className="global-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-xl tracking-[0.2em]">URBAN VOGUE</h2>
            <p className="text-xs text-gray-500 font-light leading-relaxed tracking-wide">
              Urban Vogue defines contemporary luxury. Tailored for the modern aesthetic, our garments are crafted from the world's finest organic materials, designed to endure.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-black hover:opacity-50 transition-opacity" aria-label="Instagram">
                <Instagram className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-black hover:opacity-50 transition-opacity" aria-label="Facebook">
                <Facebook className="w-4 h-4 stroke-[1.5]" />
              </a>
              {/* Pinterest SVG */}
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="text-black hover:opacity-50 transition-opacity" aria-label="Pinterest">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 0 5.393 0 12.015c0 5.076 3.158 9.41 7.61 11.162-.102-.947-.19-2.399.04-3.432.207-.935 1.337-5.656 1.337-5.656s-.34-.683-.34-1.693c0-1.586.919-2.771 2.062-2.771 1.07 0 1.587.805 1.587 1.769 0 1.077-.686 2.687-1.04 4.18-.295 1.25.623 2.27 1.854 2.27 2.22 0 3.928-2.343 3.928-5.723 0-2.993-2.15-5.086-5.222-5.086-3.558 0-5.647 2.668-5.647 5.426 0 1.074.413 2.226.93 2.85.102.124.117.233.085.362-.095.392-.303 1.224-.344 1.4-.055.228-.182.277-.42.165-1.57-.73-2.55-3.023-2.55-4.865 0-3.965 2.88-7.606 8.3-7.606 4.36 0 7.747 3.106 7.747 7.257 0 4.33-2.73 7.817-6.52 7.817-1.274 0-2.47-.662-2.88-1.44l-.784 2.986c-.283 1.09-.676 2.214-1.006 2.755 1.12.346 2.3.535 3.52.535 6.622 0 12.018-5.396 12.018-12.018C24.017 5.392 18.622 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Collections Link Column */}
          <div className="space-y-6 md:pl-8">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">COLLECTIONS</h3>
            <ul className="space-y-3.5 text-xs font-light text-gray-500 uppercase tracking-widest">
              <li><Link to="/products" className="hover:text-black transition-colors">Shop All</Link></li>
              <li><Link to="/products?category=Women" className="hover:text-black transition-colors">Women's Apparel</Link></li>
              <li><Link to="/products?category=Men" className="hover:text-black transition-colors">Men's Apparel</Link></li>
              <li><Link to="/products?category=Shoes" className="hover:text-black transition-colors">Footwear Collection</Link></li>
              <li><Link to="/products?category=Accessories" className="hover:text-black transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Concierge Link Column */}
          <div className="space-y-6 md:pl-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">CONCIERGE</h3>
            <ul className="space-y-3.5 text-xs font-light text-gray-500 uppercase tracking-widest">
              <li><Link to="/products" className="hover:text-black transition-colors">Complimentary Shipping</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Garment Size Guide</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Track Your Order</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">FAQs & Support</Link></li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">THE BRAND</h3>
            <ul className="space-y-3.5 text-xs font-light text-gray-500 uppercase tracking-widest">
              <li><Link to="/products" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Sustainable Future</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Careers at Vogue</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Editorial Journal</Link></li>
              <li><Link to="/products" className="hover:text-black transition-colors">Flagship Stores</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-400 tracking-wider font-light uppercase text-center md:text-left">
            © {new Date().getFullYear()} Urban Vogue. All rights reserved. Designed for elite fashion.
          </p>
          
          {/* Payment Badges */}
          <div className="flex items-center space-x-6 text-[10px] text-gray-400 tracking-widest font-light uppercase">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
            <span>UNION PAY</span>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[10px] text-black tracking-widest font-light uppercase hover:opacity-60 transition-opacity"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[1.25]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
