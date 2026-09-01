import { Link } from 'react-router-dom';
import { memo } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-16 pb-10" style={{ background: 'linear-gradient(90deg, #1e325f 0%, #203f32 50%, #487225 100%)' }}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Brand Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/15">
          <div className="text-center md:text-left">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block mb-3">
              <OptimizedImage
                src="/NG Stellar.png"
                alt="NG Stellar Solutions"
                className="h-12 w-auto"
                width="180"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-white/90 text-sm font-semibold max-w-md">
              Digital Transformation & Technology Implementation Partner
            </p>
            <p className="text-emerald-300 text-xs font-medium tracking-wide mt-1">
              Evaluate. Digitize. Systemize. Scale.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-3">
            {[
              { icon: <FaFacebookF className="text-white" />, href: "https://www.facebook.com/ngstellarofficial/", label: "Facebook" },
              { icon: <FaLinkedinIn className="text-white" />, href: "https://www.linkedin.com/company/ng-stellar-solutions-private-limited", label: "LinkedIn" },
              { icon: <FaInstagram className="text-white" />, href: "https://www.instagram.com/ngstellar.official/", label: "Instagram" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Structured Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-left border-b border-white/15">
          {/* Col 1: Primary Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-emerald-300">
              Primary Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li><Link to="/digital-transformation" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/process-automation" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Process Automation</Link></li>
              <li><Link to="/software-system-implementation" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Software & System Implementation</Link></li>
              <li><Link to="/custom-software-development" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Custom Software Development</Link></li>
              <li><Link to="/website-development" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/mobile-app-development" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>

          {/* Col 2: Growth & Experience */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-emerald-300">
              Growth & Design
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li><Link to="/digital-marketing" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Digital Marketing & SEO</Link></li>
              <li><Link to="/branding-ui-ux" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Branding & UI/UX Design</Link></li>
              <li><Link to="/templates" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Website Solutions & Templates</Link></li>
              <li><Link to="/capabilities" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">All Capabilities</Link></li>
              <li><Link to="/transformation-health-check" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Transformation Health Check</Link></li>
            </ul>
          </div>

          {/* Col 3: Transformation & Sustainability */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-emerald-300">
              Transformation & Impact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li><Link to="/transformation" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Transformation Advisory</Link></li>
              <li><Link to="/transformation/business" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Business Strategy</Link></li>
              <li><Link to="/transformation/process-operations" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Operations Modernization</Link></li>
              <li><Link to="/sustainability" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Sustainability Framework</Link></li>
              <li><Link to="/approach" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">6-Stage Methodology</Link></li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs & Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-emerald-300">
              Locations & Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li><Link to="/locations/erode" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors font-medium">Erode Hub</Link></li>
              <li><Link to="/locations/coimbatore" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors font-medium">Coimbatore Hub</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors font-semibold text-primary-200">Careers (We’re Hiring)</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/80">
          <p>
            © {currentYear} NG Stellar Solutions (TrueConnect Strategic Services Private Limited). All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/termsandconditions" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link to="/privacypolicy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default memo(Footer);
