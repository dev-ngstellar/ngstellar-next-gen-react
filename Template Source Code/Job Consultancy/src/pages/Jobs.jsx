import React, { useState } from 'react';
import { Search, MapPin, Filter, Briefcase, SlidersHorizontal, ArrowRight } from 'lucide-react';
import JobCard from '../components/ui/JobCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const jobsList = [
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
      tags: ["React", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Lead Product Designer",
      company: "Framer",
      location: "New York, NY (Hybrid)",
      salary: "$140k - $180k",
      type: "Full-Time",
      experience: "4+ Years",
      postedAt: "1 day ago",
      featured: true,
      tags: ["Figma", "UI/UX", "Design Systems"]
    },
    {
      id: 3,
      title: "Staff DevOps & Cloud Architect",
      company: "Vercel",
      location: "Remote",
      salary: "$170k - $220k",
      type: "Full-Time",
      experience: "6+ Years",
      postedAt: "3 days ago",
      featured: true,
      tags: ["AWS", "Kubernetes", "Docker"]
    },
    {
      id: 4,
      title: "Data Science & Machine Learning Lead",
      company: "OpenAI",
      location: "San Francisco, CA",
      salary: "$190k - $250k",
      type: "Full-Time",
      experience: "5+ Years",
      postedAt: "4 hours ago",
      featured: false,
      tags: ["Python", "PyTorch", "LLMs"]
    },
    {
      id: 5,
      title: "VP of Engineering & Technology",
      company: "Remote.com",
      location: "Remote",
      salary: "$220k - $300k",
      type: "Full-Time",
      experience: "8+ Years",
      postedAt: "5 days ago",
      featured: false,
      tags: ["Leadership", "Scale", "Architecture"]
    },
    {
      id: 6,
      title: "Senior Technical Recruiter",
      company: "Linear",
      location: "Austin, TX (Hybrid)",
      salary: "$110k - $140k",
      type: "Full-Time",
      experience: "3+ Years",
      postedAt: "1 week ago",
      featured: false,
      tags: ["Sourcing", "Engineering", "HR"]
    }
  ];

  const categories = ["All", "Software Engineering", "Product & Design", "DevOps & Cloud", "Data & AI", "Executive"];
  const jobTypes = ["All", "Full-Time", "Contract", "Hybrid", "Remote"];

  return (
    <div className="space-y-12 pb-20 pt-8">
      {/* Header Banner */}
      <section className="container-custom">
        <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden text-center">
          <Badge variant="glow" className="mb-4">Explore 2,500+ Open Positions</Badge>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Find Your Next Leadership Role</h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-8">
            Curated opportunities with top venture-backed startups and Fortune 500 enterprises.
          </p>

          {/* Search Inputs */}
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-2 rounded-2xl">
            <div className="flex items-center gap-3 flex-1 px-4 py-2 w-full">
              <Search className="w-5 h-5 text-blue-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Job title, skill, or keyword..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
              />
            </div>
            <div className="flex items-center gap-3 flex-1 px-4 py-2 w-full border-t md:border-t-0 md:border-l border-[var(--color-border)]">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Location or 'Remote'..." 
                className="w-full bg-transparent focus:outline-none text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
              />
            </div>
            <Button variant="primary" className="w-full md:w-auto px-8 py-3">Search</Button>
          </div>
        </div>
      </section>

      {/* Main Grid + Filters */}
      <section className="container-custom grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Sidebar */}
        <div className="glass-card p-6 rounded-3xl h-fit space-y-8">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
            <div className="font-serif font-bold text-lg flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-blue-400" /> Filters
            </div>
            <button className="text-xs text-blue-400 font-semibold hover:underline">Reset</button>
          </div>

          {/* Category Filter */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">Category</div>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                      : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">Job Type</div>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    selectedType === type 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                      : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--color-text-muted)]">Showing {jobsList.length} Verified Positions</span>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              Sort by: <span className="font-bold text-[var(--color-text)] cursor-pointer">Most Recent ↓</span>
            </div>
          </div>

          <div className="space-y-4">
            {jobsList.map((job) => (
              <JobCard key={job.id} job={job} variant="featured" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
