import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Calendar, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Study Tips', 'Exam Prep', 'Career', 'News'];

  const posts = [
    { title: 'The Ultimate Guide to Time Management During Exams', category: 'Study Tips', date: 'Oct 12, 2026', read: '5 min read', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80', desc: 'Learn how to effectively manage your study time and avoid burnout during peak exam season.' },
    { title: 'Understanding the New JEE Main Exam Pattern', category: 'Exam Prep', date: 'Oct 10, 2026', read: '8 min read', img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80', desc: 'A comprehensive breakdown of the recent changes introduced by NTA for the upcoming engineering entrance.' },
    { title: 'Life After Medical School: Choosing Your Specialization', category: 'Career', date: 'Oct 05, 2026', read: '10 min read', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80', desc: 'Expert advice on navigating post-graduate options and choosing a medical specialization that suits you.' },
    { title: 'Top 10 High-Paying Tech Skills to Learn in 2027', category: 'Career', date: 'Sep 28, 2026', read: '6 min read', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', desc: 'Stay ahead of the curve. Discover which technology skills are seeing massive demand from top recruiters.' },
    { title: 'Elevate Academy Announces 100% Scholarship Test', category: 'News', date: 'Sep 25, 2026', read: '3 min read', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', desc: 'Register now for our national level scholarship test and get a chance to study completely free.' },
    { title: 'How to Build an Unbeatable UPSC Strategy', category: 'Exam Prep', date: 'Sep 20, 2026', read: '12 min read', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', desc: 'IAS officers share their exact preparation blueprints and daily routines that led to their success.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] pt-24">
      
      {/* Blog Header & Search */}
      <section className="py-16 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">Elevate <span className="gradient-text">Insights</span></h1>
            <p className="text-lg text-[var(--color-text-muted)]">Your ultimate resource for exam strategies, study hacks, and career guidance.</p>
          </div>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
            <input 
              type="text" 
              placeholder="Search articles, topics, or keywords..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all shadow-sm text-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Feed */}
          <div className="lg:w-2/3">
            {/* Category Filter */}
            <div className="flex overflow-x-auto pb-4 mb-8 gap-3 scrollbar-hide border-b border-[var(--color-border)]">
              {categories.map((cat, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                    activeCategory === cat 
                      ? 'bg-[var(--color-primary-600)] text-white' 
                      : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <motion.article 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-[var(--color-border)]">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[var(--color-text-muted)] mb-3">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.read}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary-600)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] line-clamp-3 mb-4 flex-grow">
                    {post.desc}
                  </p>
                  <div className="mt-auto text-[var(--color-primary-600)] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            
            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-[var(--color-primary-900)] to-[var(--color-secondary-900)] p-8 rounded-3xl border border-[var(--color-primary-800)] text-center text-white shadow-xl shadow-[var(--color-primary-900)]/20">
              <h3 className="text-2xl font-bold mb-3">Never Miss an Update</h3>
              <p className="text-[var(--color-primary-100)] text-sm mb-6">Get the latest exam strategies and news delivered directly to your inbox.</p>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white mb-4 text-sm"
              />
              <Button variant="glow" className="w-full">Subscribe Now</Button>
            </div>

            {/* Trending Posts */}
            <div className="bg-[var(--color-bg-secondary)] p-8 rounded-3xl border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                Trending Now
              </h3>
              <div className="space-y-6">
                {[1,2,3].map(i => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="text-4xl font-black text-[var(--color-border)] group-hover:text-[var(--color-primary-200)] dark:group-hover:text-[var(--color-primary-900)] transition-colors">
                      0{i}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary-600)] transition-colors mb-1">
                        How to secure AIR 1 in JEE Mains: 6 Month Strategy
                      </h4>
                      <div className="text-xs text-[var(--color-text-muted)]">5 min read</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
