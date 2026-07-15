import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, AtSign, Share2, Rss, Globe, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { navLinks, siteConfig } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Weight Loss', path: '/programs' },
      { label: 'Muscle Gain', path: '/programs' },
      { label: 'CrossFit', path: '/programs' },
      { label: 'Strength Training', path: '/programs' },
      { label: 'Personal Coaching', path: '/programs' },
    ],
  },
  {
    title: 'Quick Links',
    links: navLinks,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'rgba(0,0,0,0.6)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'var(--primary)' }} />

      <div className="container-custom py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl text-white tracking-wider">GymForge</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Forge your strongest version. Premium gym experience with world-class trainers and cutting-edge equipment.
            </p>
            <div className="flex gap-3">
              {[AtSign, Share2, Rss, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center transition-all duration-300 hover:border-primary"
                  style={{ '--hover-border': 'var(--primary)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = ''}
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={fadeUp}>
              <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label || link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm transition-all duration-200 group"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <ArrowRight
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                        style={{ color: 'var(--primary)' }}
                      />
                      <span className="group-hover:text-white transition-colors duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                <a href={`tel:${siteConfig.phone}`} className="text-sm hover:text-white transition-colors duration-200" style={{ color: 'var(--text-muted)' }}>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white transition-colors duration-200" style={{ color: 'var(--text-muted)' }}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-white uppercase tracking-widest mb-3">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-200"
                  style={{ '--tw-ring-color': 'var(--primary)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button className="btn-primary py-2 px-4 text-xs">
                  <span>Go</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="divider-gradient mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2024 GymForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs hover:text-white transition-colors duration-200" style={{ color: 'var(--text-muted)' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
