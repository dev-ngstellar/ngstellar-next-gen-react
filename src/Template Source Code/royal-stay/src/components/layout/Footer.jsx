import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-8 border-t border-[#c5a880]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group self-start">
            <Crown className="w-6 h-6 text-[#c5a880] group-hover:text-white transition-colors duration-300" />
            <span className="font-serif text-2xl tracking-[0.05em] text-white">
              ROYAL STAY
            </span>
          </Link>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Experience the pinnacle of luxury, refined comfort, and world-class hospitality in our heritage palaces and seaside villas.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-[#c5a880] tracking-wide uppercase font-medium">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm font-light text-white/60">
            <li>
              <Link to="/" className="hover:text-[#c5a880] transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-[#c5a880] transition-colors duration-300">Rooms & Suites</Link>
            </li>
            <li>
              <a href="/#amenities" className="hover:text-[#c5a880] transition-colors duration-300">Amenities & Services</a>
            </li>
            <li>
              <a href="/#gallery" className="hover:text-[#c5a880] transition-colors duration-300">Photo Gallery</a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c5a880] transition-colors duration-300">Contact & Support</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-[#c5a880] tracking-wide uppercase font-medium">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-[#c5a880] shrink-0" />
              <span>102 Ocean Ridge Boulevard, Cliffside Heights, NY 10007</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-[#c5a880]" />
              <span>+1 (800) 769-2578</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-[#c5a880]" />
              <span>reservations@royalstay.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-[#c5a880] tracking-wide uppercase font-medium">Newsletter</h4>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Subscribe to receive exclusive offers, private sales, and luxury travel guides.
          </p>
          
          {subscribed ? (
            <div className="bg-[#c5a880]/10 text-[#c5a880] border border-[#c5a880]/20 p-3 text-xs tracking-wider text-center uppercase">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border border-white/10 hover:border-[#c5a880]/50 transition-all duration-300">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white placeholder-white/40 text-xs px-4 py-3 w-full focus:outline-none font-light"
              />
              <button
                type="submit"
                className="bg-[#c5a880] hover:bg-[#8e6e43] text-white px-4 flex items-center justify-center transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40">
        <div>
          © {new Date().getFullYear()} Royal Stay Luxury Hotels. All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
