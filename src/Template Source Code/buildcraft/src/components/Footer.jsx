import React, { useState } from 'react';
import { Construction, Send, Linkedin, Instagram, Youtube, Award } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer>
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="logo">
              <Construction className="logo-icon" size={28} />
              BUILD<span>CRAFT</span>
            </a>
            <p>
              Builders of world-class towers, infrastructure, and vertical communities. Inspired by mega-scale Dubai design benchmarks.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Linkedin size={18} /></a>
              <a href="#" className="social-link"><Instagram size={18} /></a>
              <a href="#" className="social-link"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h3>Portals</h3>
            <ul className="footer-links">
              <li><a href="#home">Home Base</a></li>
              <li><a href="#projects">Active Builds</a></li>
              <li><a href="#live-hub">Control Room</a></li>
              <li><a href="#simulator">Landmark Builder</a></li>
              <li><a href="#vision">Quality Manifesto</a></li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div className="footer-col">
            <h3>Compliance</h3>
            <ul className="footer-links">
              <li><a href="#">Investment Charter</a></li>
              <li><a href="#">NDAs & Arbitration</a></li>
              <li><a href="#">DIAC Guidelines</a></li>
              <li><a href="#">High-Rise Safety</a></li>
              <li><a href="#">ESG Global Commitments</a></li>
            </ul>
          </div>

          {/* Newsletter / HQ */}
          <div className="footer-col">
            <h3>Corporate Offices</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              <strong>HQ Dubai:</strong> Sheikh Zayed Rd, Burj Area<br />
              <strong>Riyadh Office:</strong> KAFD Tower, Level 45<br />
              <strong>London Lounge:</strong> Mayfair, Park Lane
            </p>

            <h3 style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Executive Circular</h3>
            {subscribed ? (
              <div style={{ color: 'var(--primary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} />
                Subscribed to board circulars.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="executive@entity.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} BuildCraft Joint-Stock Co. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#">Privacy Agreement</a>
            <a href="#">Terms of Architecture</a>
            <a href="#">Licensing & Escrow</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
