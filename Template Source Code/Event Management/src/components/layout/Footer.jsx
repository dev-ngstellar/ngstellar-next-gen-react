import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPinterest,
  FaPhone, FaEnvelope, FaLocationDot, FaHeart,
} from 'react-icons/fa6';
import siteConfig from '../../config/siteConfig';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '#' },
    { label: 'Our Team', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Press & Media', path: '#' },
    { label: 'Blog', path: '#' },
  ],
  Services: [
    { label: 'Wedding Planning', path: '#' },
    { label: 'Corporate Events', path: '#' },
    { label: 'Concerts & Festivals', path: '#' },
    { label: 'Trade Shows', path: '#' },
    { label: 'Private Celebrations', path: '#' },
  ],
  Resources: [
    { label: 'Event Gallery', path: '/gallery' },
    { label: 'Packages & Pricing', path: '/packages' },
    { label: 'Upcoming Events', path: '/events' },
    { label: 'Testimonials', path: '#' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter/X' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaPinterest, href: '#', label: 'Pinterest' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(5,5,8,1)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
              >
                <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>EP</span>
              </div>
              <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                EventPro
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Creating unforgettable event experiences from intimate celebrations to large-scale productions. Your vision, our expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {[
                { icon: FaPhone, text: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: FaEnvelope, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: FaLocationDot, text: siteConfig.address, href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-3 text-white/50 hover:text-white transition-colors text-sm group">
                  <Icon className="mt-0.5 shrink-0 group-hover:text-primary" style={{ color: 'var(--color-primary)' }} />
                  <span>{text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{ scale: 1.1, borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-white/45 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                      style={{ transition: 'color 0.2s, transform 0.2s' }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold mb-1">Stay Updated</h4>
              <p className="text-white/40 text-sm">Get the latest events and offers directly to your inbox.</p>
            </div>
            <form className="flex gap-2 w-full max-w-md" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input-field flex-1 text-sm"
              />
              <button type="submit" className="btn-primary text-sm py-3 px-5 whitespace-nowrap">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} EventPro Template. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            Built with <FaHeart className="text-red-500 text-xs animate-pulse" /> for event professionals worldwide
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-white/25 text-xs hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
