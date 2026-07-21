import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Target, 
  Zap, 
  ShieldCheck, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Star,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Link } from 'react-router-dom';

const Employers = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Talent Matching",
      description: "Our proprietary algorithm screens top 1% candidates matched precisely to your stack, culture, and seniority requirements."
    },
    {
      icon: Zap,
      title: "Fast-Track Hiring Cycles",
      description: "Reduce time-to-hire by 65%. Get pre-screened, interview-ready candidates delivered within 48 hours."
    },
    {
      icon: ShieldCheck,
      title: "Vetted & Verified Talent",
      description: "Every candidate undergoes rigorous technical assessments and background checks before entering your pipeline."
    },
    {
      icon: Globe,
      title: "Global Employer Branding",
      description: "Showcase your company culture, benefits, and tech stack to over 500,000 active technology professionals."
    }
  ];

  const hiringModels = [
    {
      title: "Direct Placement / Full-Time",
      description: "Permanent executive & technical hiring with a 90-day replacement guarantee.",
      badge: "Most Popular",
      features: ["Dedicated Talent Consultant", "Pre-screened Shortlists", "90-Day Satisfaction Guarantee", "Technical Code Reviews"]
    },
    {
      title: "Contract & Fractional Talent",
      description: "On-demand senior engineers, interim executives, and specialized project leads.",
      badge: "Flexible",
      features: ["Immediate Availability", "Flexible Weekly Billing", "Seamless Onboarding", "Global Payroll & Compliance"]
    },
    {
      title: "Executive Search",
      description: "Confidential C-suite and VP leadership recruitment for high-growth ventures.",
      badge: "Enterprise",
      features: ["Dedicated Retained Search", "Industry Benchmarking", "Confidential Sourcing", "Executive Onboarding Support"]
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="glow" className="mb-6 px-4 py-1.5 text-sm inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" /> Enterprise Recruitment Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">
              Hire World-Class Talent <br />
              <span className="text-gradient">Without the Friction</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto font-normal">
              TalentBridge partners with forward-thinking companies to source, vet, and hire top-tier technology and leadership talent globally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
                Schedule Hiring Consultation
              </Button>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Pricing Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="container-custom">
        <div className="glass-card p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">48 Hrs</div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Avg. First Shortlist</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">96%</div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Candidate Acceptance Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">1,500+</div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Client Companies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">90 Days</div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Replacement Guarantee</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Why Top Companies Partner With TalentBridge</h2>
          <p className="text-[var(--color-text-muted)]">Everything you need to scale your engineering, product, and leadership teams with confidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card p-8 rounded-3xl hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flexible Hiring Models */}
      <section className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">Tailored Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Engagement Models Built for Scale</h2>
          <p className="text-[var(--color-text-muted)]">Choose the hiring model that fits your growth trajectory and budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hiringModels.map((model, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl flex flex-col justify-between hover-lift relative overflow-hidden border border-white/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={idx === 0 ? "glow" : "secondary"}>{model.badge}</Badge>
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3">{model.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-6">{model.description}</p>

                <ul className="space-y-3 mb-8">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant={idx === 0 ? "primary" : "outline"} className="w-full">
                Get Started with {model.title.split(' ')[0]}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-500/30 p-10 md:p-16 text-center text-white">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Build Your Dream Team?</h2>
            <p className="text-lg text-blue-200 mb-8">
              Get matched with pre-vetted candidates within 48 hours. No upfront fees until you hire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8">
                Post Requisition Now
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10">
                  Talk to Executive Consultant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
