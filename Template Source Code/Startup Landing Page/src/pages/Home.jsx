import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Box, Target, Layout, Rocket, Check, ChevronDown } from 'lucide-react';
import Hero from '../components/Hero';

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Marquee = () => {
  const logos = ['Stripe', 'Google', 'Notion', 'Linear', 'Framer', 'Spotify', 'Vercel', 'Arc'];
  return (
    <div className="py-12 border-y border-border/50 bg-surface/30 backdrop-blur-sm overflow-hidden">
      <p className="text-center text-sm font-medium text-text-secondary mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
      <div className="marquee-container relative">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <div className="marquee-content gap-16 pr-16 items-center">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="text-2xl font-bold text-text-secondary/40 hover:text-text-primary transition-colors cursor-pointer shrink-0">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    { icon: <Zap size={24} />, title: 'Lightning Fast', desc: 'Built on Vite and React for unparalleled performance and speed.' },
    { icon: <Shield size={24} />, title: 'Enterprise Security', desc: 'Bank-grade security protocols implemented by default.' },
    { icon: <Layout size={24} />, title: 'Premium UI', desc: 'Handcrafted glassmorphic design system.' },
    { icon: <Globe size={24} />, title: 'Global CDN', desc: 'Deployed across 100+ edge networks worldwide.' },
    { icon: <Box size={24} />, title: 'Modular Blocks', desc: 'Drag and drop pre-built premium components.' },
    { icon: <Target size={24} />, title: 'High Conversion', desc: 'Optimized specifically for SaaS sales funnels.' },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need to <span className="text-gradient">scale</span></h2>
            <p className="text-xl text-text-secondary">Stop building from scratch. Use our pre-built components to launch your next big idea in days, not months.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card p-10 h-full group hover:-translate-y-2 transition-transform duration-500 cursor-pointer flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary tracking-tight">{feat.title}</h3>
                <p className="text-text-secondary leading-relaxed font-light">{feat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
            <p className="text-xl text-text-secondary">Start for free, upgrade when you need more power.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <Reveal delay={0.1}>
            <div className="glass-card p-10 flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-3">Starter</h3>
              <p className="text-text-secondary mb-8 font-light">Perfect for side projects.</p>
              <div className="text-5xl font-extrabold mb-10 tracking-tight">$0<span className="text-xl text-text-secondary font-medium">/mo</span></div>
              <ul className="space-y-5 mb-10 flex-1">
                {['1 Project', 'Basic Analytics', 'Community Support'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-text-secondary"><Check size={20} className="text-primary" /> {feat}</li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-border hover:bg-surface/50 hover:border-text-secondary/30 transition-all font-medium text-lg">Get Started</button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-card p-1 relative border-primary/40 shadow-[0_30px_60px_-15px_rgba(94,106,210,0.3)] scale-105 z-10 flex flex-col h-full">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-widest shadow-lg shadow-primary/30 uppercase">Most Popular</div>
              <div className="bg-surface/80 backdrop-blur-2xl p-10 rounded-[22px] h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-3 text-text-primary">Pro</h3>
                <p className="text-text-secondary mb-8 font-light">For growing startups.</p>
                <div className="text-5xl font-extrabold mb-10 tracking-tight text-text-primary">$49<span className="text-xl text-text-secondary font-medium">/mo</span></div>
                <ul className="space-y-5 mb-10 flex-1">
                  {['Unlimited Projects', 'Advanced Analytics', 'Priority 24/7 Support', 'Custom Domains'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-4 text-text-primary font-medium"><Check size={20} className="text-primary" /> {feat}</li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-primary text-primary btn-glow font-bold text-lg hover:scale-[1.02] transition-transform">Start Free Trial</button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass-card p-10 flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-3">Enterprise</h3>
              <p className="text-text-secondary mb-8 font-light">For large scale teams.</p>
              <div className="text-5xl font-extrabold mb-10 tracking-tight">$199<span className="text-xl text-text-secondary font-medium">/mo</span></div>
              <ul className="space-y-5 mb-10 flex-1">
                {['Custom SLA', 'Dedicated Success Manager', 'SSO Authentication', 'On-premise option'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-text-secondary"><Check size={20} className="text-primary" /> {feat}</li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-border hover:bg-surface/50 hover:border-text-secondary/30 transition-all font-medium text-lg">Contact Sales</button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Is there a free trial?', a: 'Yes, we offer a 14-day free trial on all paid plans. No credit card required.' },
    { q: 'Can I cancel my subscription?', a: 'Absolutely. You can cancel your subscription at any time from your billing dashboard.' },
    { q: 'Do you offer custom integrations?', a: 'Yes, our Enterprise plan includes custom integration support with your existing tools.' },
  ];

  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
        </Reveal>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card p-1 overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <div className="p-8 bg-surface/50 backdrop-blur-sm rounded-[22px]">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-xl tracking-tight">{faq.q}</h3>
                    <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3, ease: 'circOut' }}><ChevronDown className="text-text-secondary shrink-0" size={24} /></motion.div>
                  </div>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                        <p className="pt-6 text-text-secondary text-lg font-light leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="pt-24 pb-0">
      <Hero />

      <Marquee />
      <Features />
      <Pricing />
      <FAQ />

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to transform your brand?</h2>
          <p className="text-xl text-text-secondary mb-12">Join 10,000+ startups building with Nexus.</p>
          <button className="px-10 py-5 rounded-2xl bg-primary text-primary font-bold text-lg btn-glow hover:scale-105 transition-transform">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
