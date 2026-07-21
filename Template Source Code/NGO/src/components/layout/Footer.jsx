import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, Globe, Send, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Lumora <span className="font-normal opacity-80">Foundation</span>
              </span>
            </Link>
            <p className="opacity-70 leading-relaxed max-w-sm">
              Together we create brighter futures. Dedicated to empowering communities, providing education, and ensuring basic healthcare for everyone.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon Icon={MessageCircle} />
              <SocialIcon Icon={Share2} />
              <SocialIcon Icon={Globe} />
              <SocialIcon Icon={Send} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/programs">Our Programs</FooterLink>
              <FooterLink to="/volunteer">Volunteer</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/donate">Donate Now</FooterLink>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="flex flex-col gap-4">
              <FooterLink to="/programs">Education for All</FooterLink>
              <FooterLink to="/programs">Healthcare Access</FooterLink>
              <FooterLink to="/programs">Clean Water Initiative</FooterLink>
              <FooterLink to="/programs">Women Empowerment</FooterLink>
              <FooterLink to="/programs">Disaster Relief</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Join Our Newsletter</h4>
            <p className="opacity-70 mb-4">
              Stay updated with our latest impact stories and news.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="bg-primary hover:bg-primary-hover text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Lumora Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1">
      <Icon size={18} />
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2 group">
        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        {children}
      </Link>
    </li>
  );
}
