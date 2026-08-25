import { Link } from 'react-router-dom';
import { memo } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-16 pb-8" style={{ background: 'linear-gradient(90deg, #1e325f 0%, #487225 100%)' }}>
      {/* Background decoration circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* 1. Logo */}
        <div className="mb-6">
          <Link to="/">
            <OptimizedImage src="/NG Stellar.png" alt="NG Stellar Solutions" className="h-12 w-auto" width="180" height="48" loading="lazy" decoding="async" />
          </Link>
        </div>

        {/* 2. Description */}
        <p className="max-w-xl text-white text-sm leading-relaxed mb-8">
          We leverage cutting-edge technologies to ensure your digital footprint stands out in the crowded online landscape. Connecting brands with the future.
        </p>

        {/* 3. Social Media Icons */}
        <div className="flex gap-4 mb-12">
          {[
            { icon: <FaFacebookF className="text-white" />, href: "https://www.facebook.com/ngstellarofficial/", label: "Facebook" },
            { icon: <FaLinkedinIn className="text-white" />, href: "https://www.linkedin.com/company/ng-stellar-solutions-private-limited", label: "LinkedIn" },
            { icon: <FaInstagram className="text-white" />, href: "https://www.instagram.com/ngstellar.official/?fbclid=IwY2xjawTyIBZwZG9mBGV4dG4DYWVtAjExAGJyaWQRMWdReURBdDhNbzV6cmtIZmhzcnRjBmFwcF9pZAEwAAEeFeKeCAUkaG_20-_bWIGOsthp4J11nsdVRJqB3ruf8H9KuuUdnpNOs69YRqQ_aem_t5xwgtGFHaYcGj3i__YS3A", label: "Instagram" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* 4. Navigation Links Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          {[
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/capability" },
            { name: "Industries", path: "/industry" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
            { name: "Terms and Conditions", path: "/termsandconditions" },
            { name: "Privacy Policy", path: "/privacypolicy" }
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className="text-slate-400 text-white hover:text-white text-sm font-medium transition-colors duration-300 relative group"
            >
              {link.name}<br />

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 5. Copyright */}
        <div className="text-slate-600 text-xs text-white">
          <p>Copyright {currentYear} NG Stellar Solutions. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default memo(Footer);
