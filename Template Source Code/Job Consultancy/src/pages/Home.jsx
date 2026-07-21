import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Star, TrendingUp, Users, CheckCircle, ChevronRight, Play, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import JobCard from '../components/ui/JobCard';

const Home = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      company: "Stripe",
      location: "San Francisco, CA (Remote)",
      salary: "$150k - $200k",
      type: "Full-Time",
      experience: "5+ Years",
      postedAt: "2 days ago",
      featured: true,
      tags: ["React", "Node.js"]
    },
    {
      id: 2,
      title: "Product Design Lead",
      company: "Figma",
      location: "New York, NY (Hybrid)",
      salary: "$140k - $180k",
      type: "Full-Time",
      experience: "7+ Years",
      postedAt: "1 day ago",
      featured: true,
      tags: ["UI/UX", "Management"]
    }
  ];

  const latestJobs = [
    { id: 3, title: "Data Scientist", company: "OpenAI", location: "Remote", salary: "$160k - $210k", type: "Full-Time", postedAt: "3 hrs ago" },
    { id: 4, title: "Marketing Manager", company: "Notion", location: "London, UK", salary: "£70k - £90k", type: "Hybrid", postedAt: "5 hrs ago" },
    { id: 5, title: "DevOps Engineer", company: "Vercel", location: "Remote", salary: "$130k - $170k", type: "Full-Time", postedAt: "8 hrs ago" },
    { id: 6, title: "Frontend Developer", company: "Linear", location: "Remote", salary: "$110k - $150k", type: "Contract", postedAt: "12 hrs ago" },
    { id: 7, title: "Technical Writer", company: "Stripe", location: "San Francisco, CA", salary: "$90k - $120k", type: "Full-Time", postedAt: "1 day ago" },
    { id: 8, title: "HR Business Partner", company: "Deel", location: "Remote", salary: "$100k - $130k", type: "Full-Time", postedAt: "2 days ago" },
  ];

  const categories = [
    { name: "Technology", count: "1,240 Jobs", icon: "💻" },
    { name: "Healthcare", count: "842 Jobs", icon: "🏥" },
    { name: "Finance", count: "650 Jobs", icon: "📈" },
    { name: "Design", count: "420 Jobs", icon: "🎨" },
    { name: "Marketing", count: "380 Jobs", icon: "📢" },
    { name: "Engineering", count: "915 Jobs", icon: "⚙️" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="glow" className="mb-6 px-4 py-1.5 text-sm">✨ Over 25,000+ Premium Jobs Available</Badge>
            <h1 className="text-5xl md:text-7xl font-black font-serif tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
              Helping Companies Find <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-500)] to-purple-500">Exceptional Talent.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12">
              Connect with top-tier companies and scale your career. The world's most innovative teams hire on TalentBridge.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="max-w-4xl mx-auto glass-card p-2 md:p-3 rounded-2xl flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
              <input type="text" placeholder="Job title, keywords, or company" className="w-full pl-12 pr-4 py-4 md:py-3 bg-transparent border-none focus:ring-0 text-[var(--color-text)] outline-none" />
            </div>
            <div className="hidden md:block w-px bg-[var(--color-border)] my-2"></div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
              <input type="text" placeholder="City, state, or Remote" className="w-full pl-12 pr-4 py-4 md:py-3 bg-transparent border-none focus:ring-0 text-[var(--color-text)] outline-none" />
            </div>
            <Button variant="primary" size="lg" className="w-full md:w-auto px-10 rounded-xl">Search Jobs</Button>
          </motion.div>

          {/* Trust Logos */}
          <div className="mt-20 pt-10 border-t border-[var(--color-border)]">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos */}
              <div className="text-xl font-black font-sans">STRIPE</div>
              <div className="text-xl font-black font-serif">Notion</div>
              <div className="text-xl font-bold font-mono">VERCEL</div>
              <div className="text-xl font-black italic">Figma</div>
              <div className="text-xl font-black font-sans">LINEAR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black font-serif mb-4">Featured Opportunities</h2>
              <p className="text-[var(--color-text-muted)] max-w-2xl">Hand-picked premium roles from top tech companies offering exceptional compensation and culture.</p>
            </div>
            <Button variant="outline" icon={ArrowRight} iconPosition="right">View All Featured</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} variant="featured" />
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold font-serif">Latest Roles</h3>
            <div className="flex gap-2">
              <Badge variant="primary" className="cursor-pointer">All</Badge>
              <Badge variant="default" className="cursor-pointer hover:bg-[var(--color-surface-200)]">Remote</Badge>
              <Badge variant="default" className="cursor-pointer hover:bg-[var(--color-surface-200)]">Design</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestJobs.map(job => (
              <JobCard key={job.id} job={job} variant="default" />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">Load More Jobs</Button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-serif mb-4">Explore by Category</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">Find the perfect role across various industries and domains.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl text-center hover-lift group cursor-pointer border border-[var(--color-border)]">
                <div className="w-16 h-16 mx-auto bg-[var(--color-bg-secondary)] rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary-500)] transition-colors">{cat.name}</h4>
                <p className="text-xs text-[var(--color-text-muted)]">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[var(--color-surface-950)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-950)]/90 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="glow" className="mb-6 border-white/20 text-[var(--color-primary-300)]">Why Choose Us</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-serif mb-6 leading-tight">Scale your team with the top 1% of global talent.</h2>
              <p className="text-[var(--color-surface-300)] text-lg mb-8 leading-relaxed">
                Our rigorous vetting process ensures you only meet candidates who have the exact skills, experience, and cultural fit to drive your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">Start Hiring Today</Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" icon={Play}>Watch Video</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Hiring Success', value: '98%', icon: TrendingUp },
                { label: 'Jobs Posted', value: '25k+', icon: Briefcase },
                { label: 'Active Candidates', value: '50k+', icon: Users },
                { label: 'Verified Companies', value: '1,500+', icon: CheckCircle },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                    <Icon className="w-8 h-8 text-[var(--color-primary-400)] mb-4" />
                    <div className="text-4xl font-black mb-2">{stat.value}</div>
                    <div className="text-[var(--color-surface-400)] font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
