import { Link } from 'react-router-dom';
import { memo } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import OptimizedImage from './OptimizedImage.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-16 pb-12 bg-slate-950 border-t border-white/10 text-slate-300 font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <OptimizedImage
                src="/NG Stellar.png"
                alt="NG Stellar"
                className="h-10 w-auto"
                width="160"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider">
              Transformation & Sustainability Advisory
            </div>

            <p className="text-base font-extrabold text-white leading-snug">
              Transform the Business. Sustain the Impact.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Helping businesses navigate change, solve complex challenges, unlock opportunities and build sustainable long-term value.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, href: 'https://www.linkedin.com/company/ng-stellar-solutions-private-limited' },
                { icon: <BsTwitterX className="w-3.5 h-3.5" />, href: '#' },
                { icon: <FaInstagram className="w-3.5 h-3.5" />, href: 'https://www.instagram.com/ng_stellar_solutions/' },
                { icon: <FaFacebookF className="w-3.5 h-3.5" />, href: 'https://www.facebook.com/people/NG-Stellar-Solutions-Private-Limited/61585290988154/' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Business Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Business Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Business Transformation', href: '/transformation/business' },
                { label: 'Sustainability', href: '/sustainability' },
                { label: 'Technology', href: '/transformation/technology' },
                { label: 'Growth', href: '/capabilities/digital-growth' },
                { label: 'Strategy', href: '/capabilities/strategy-research' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '/' },
                { label: 'Transformation', href: '/transformation' },
                { label: 'Sustainability', href: '/sustainability' },
                { label: 'Our Approach', href: '/approach' },
                { label: 'Ecosystem', href: '/ecosystem' },
                { label: 'Transformation Stories', href: '/transformation-stories' },
                { label: 'Insights', href: '/insights' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
                { label: 'Request a Health Check', href: '/contact/health-check' },
                { label: 'Partner With Us', href: '/contact/partner' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-primary-300 transition-colors leading-relaxed block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Our Principle (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Principle
            </h4>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 space-y-1 text-xs">
              <p className="font-bold text-slate-200">Understand deeply.</p>
              <p className="font-bold text-primary-300">Transform practically.</p>
              <p className="font-bold text-secondary-300">Sustain the impact.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© NG Stellar. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacypolicy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/termsandconditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
