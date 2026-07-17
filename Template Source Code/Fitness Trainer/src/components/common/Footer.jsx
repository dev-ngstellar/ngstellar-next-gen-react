import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Share2, Video, Globe, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { navLinks, siteConfig } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const programs = ['Weight Loss', 'Strength Training', 'Body Transformation', 'Online Coaching', 'Nutrition Coaching'];
const socialLinks = [
  { icon: Share2,       href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Video,        href: siteConfig.social.youtube,   label: 'YouTube' },
  { icon: Globe,        href: siteConfig.social.twitter,   label: 'Twitter' },
  { icon: ExternalLink, href: siteConfig.social.linkedin,  label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--secondary-alt)', borderTop: '1px solid var(--border)' }}>
      {/* Main Footer */}
      <div className="container-custom py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
              >
                <Dumbbell className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl" style={{ color: 'var(--text)' }}>
                Elite<span style={{ color: 'var(--primary)' }}>Fit</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Premium personal training and fitness coaching. Transform your body and life with science-backed programs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-all duration-200 flex items-center gap-2 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-3"
                      style={{ background: 'var(--primary)' }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={fadeUp}>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Programs
            </h4>
            <ul className="flex flex-col gap-3">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link
                    to="/contact"
                    className="text-sm transition-all duration-200 flex items-center gap-2 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-3"
                      style={{ background: 'var(--primary)' }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{prog}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp}>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Newsletter
            </h4>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Get weekly fitness tips, nutrition advice, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 glass rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 min-w-0"
                style={{
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
              <button
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
            {/* Contact Info */}
            <div className="mt-6 flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
              <span>{siteConfig.email}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Bottom Bar */}
      <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
          © {new Date().getFullYear()} EliteFit. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
          Crafted with ♥ for the{' '}
          <span style={{ color: 'var(--primary)' }}>NG Stellar Marketplace</span>
        </p>
      </div>
    </footer>
  );
}
