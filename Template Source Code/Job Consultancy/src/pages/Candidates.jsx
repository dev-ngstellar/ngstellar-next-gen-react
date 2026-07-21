import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Upload, 
  Sparkles, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle,
  ArrowRight,
  Compass
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Link } from 'react-router-dom';

const Candidates = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "Confidential Representation",
      description: "Your profile is shared only with vetted hiring managers after your explicit permission. Maintain 100% privacy."
    },
    {
      icon: TrendingUp,
      title: "Executive Compensation Guidance",
      description: "Get real-time market rate benchmarking, stock option evaluation, and expert salary negotiation support."
    },
    {
      icon: Compass,
      title: "Direct Access to Leadership",
      description: "Bypass ATS screening algorithms. Get your background presented directly to CTOs, VPs, and hiring Founders."
    },
    {
      icon: ShieldCheck,
      title: "Career Placement Guarantee",
      description: "Work 1-on-1 with a dedicated talent partner who supports your long-term career growth trajectory."
    }
  ];

  return (
    <div className="space-y-24 pb-20 pt-8">
      {/* Hero Header */}
      <section className="container-custom text-center max-w-4xl mx-auto">
        <Badge variant="glow" className="mb-6 px-4 py-1.5 text-sm inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-400" /> For High-Impact Professionals
        </Badge>
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">
          Accelerate Your Career with <br />
          <span className="text-gradient">Exclusive Tech & Leadership Opportunities</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
          We connect senior engineers, product leaders, and executives with high-growth companies building the future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" icon={Upload} iconPosition="left">
            Submit Confidential Resume
          </Button>
          <Link to="/jobs">
            <Button variant="outline" size="lg">Browse Open Positions</Button>
          </Link>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Why Top Talent Chooses TalentBridge</h2>
          <p className="text-[var(--color-text-muted)]">We are not a traditional agency. We are your long-term career advisors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => {
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
    </div>
  );
};

export default Candidates;
