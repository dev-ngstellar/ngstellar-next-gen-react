import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { BLOG_POSTS, BlogPost } from '../data/lawFirmData';
import { Search, Calendar, Clock, User, Tag, ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export const Insights: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Legal Updates', 'Case Studies', 'Industry News'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="w-full bg-[var(--color-bg)]">
      <PageBanner
        title="Legal Insights & Executive Briefings"
        subtitle="Authoritative commentary, case analysis, and regulatory forecasts curated by senior legal partners."
        breadcrumbs={[{ label: 'Insights & Blog' }]}
      />

      {/* Featured Article Banner */}
      <section className="py-16 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[var(--color-card)] border border-[var(--color-card-border)] overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 relative h-80 lg:h-full min-h-[350px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4A34B] text-slate-950 font-bold text-xs rounded-full uppercase tracking-wider">
                Featured Analysis
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
              <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
                <span className="text-[#D4A34B] font-semibold">{featuredPost.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-[var(--color-heading)] leading-snug">
                {featuredPost.title}
              </h2>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4A34B]/20 text-[#D4A34B] font-serif font-bold flex items-center justify-center border border-[#D4A34B]/40">
                    AV
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--color-heading)]">{featuredPost.author}</p>
                    <p className="text-[11px] text-[var(--color-muted)]">{featuredPost.authorRole}</p>
                  </div>
                </div>

                <a
                  href="#"
                  className="px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A34B] hover:text-slate-950 transition-colors"
                >
                  Read Briefing
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Blog Area with Sidebar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Articles List */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Category Filter Pills */}
              <div className="flex items-center flex-wrap gap-2 pb-4 border-b border-[var(--color-border)]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#D4A34B] text-slate-950 font-bold shadow-sm'
                        : 'bg-[var(--color-surface)] text-[var(--color-heading)] border border-[var(--color-border)] hover:border-[#D4A34B]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filteredPosts.length === 0 ? (
                <div className="py-12 text-center text-[var(--color-muted)]">
                  No legal articles found matching your query.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post: BlogPost) => (
                    <article
                      key={post.id}
                      className="group rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 text-[#D4A34B] text-[10px] font-semibold rounded-full uppercase tracking-wider border border-[#D4A34B]/30 backdrop-blur-md">
                            {post.category}
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="flex items-center gap-3 text-[11px] text-[var(--color-muted)]">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="font-serif text-xl font-bold text-[var(--color-heading)] group-hover:text-[#D4A34B] transition-colors leading-snug">
                            {post.title}
                          </h3>

                          <p className="text-xs text-[var(--color-muted)] line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-transparent flex items-center justify-between text-xs">
                        <span className="font-semibold text-[var(--color-heading)]">{post.author}</span>
                        <a href="#" className="text-[#D4A34B] font-semibold flex items-center gap-1 hover:underline">
                          Read <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Search Widget */}
              <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] space-y-3">
                <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Search Insights</h4>
                <div className="relative">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-[var(--color-muted)]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search legal topics..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                  />
                </div>
              </div>

              {/* Newsletter Subscription Widget */}
              <div className="p-6 rounded-2xl bg-[var(--color-primary-dark)] text-white space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A34B]/10 rounded-full blur-2xl pointer-events-none" />
                <Mail className="w-8 h-8 text-[#D4A34B]" />
                <h4 className="font-serif font-bold text-xl">The Legal Executive Briefing</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join 12,000+ corporate directors receiving bi-weekly legal compliance and regulatory analysis.
                </p>
                <form onSubmit={handleNewsletter} className="space-y-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="executive@corporation.com"
                    className="w-full px-4 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A34B]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#D4A34B] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#c58b32] transition-colors"
                  >
                    Subscribe Now
                  </button>
                  {subscribed && (
                    <p className="text-xs text-[#D4A34B] text-center pt-1 font-medium">
                      ✓ Subscribed to executive dispatch.
                    </p>
                  )}
                </form>
              </div>

              {/* Recent Briefings */}
              <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] space-y-4">
                <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Recent Dispatches</h4>
                <div className="space-y-4">
                  {BLOG_POSTS.slice(0, 3).map((b) => (
                    <div key={b.id} className="border-b border-[var(--color-border)]/60 pb-3 space-y-1">
                      <span className="text-[10px] font-semibold text-[#D4A34B] uppercase">{b.category}</span>
                      <h5 className="font-serif text-sm font-bold text-[var(--color-heading)] hover:text-[#D4A34B] transition-colors cursor-pointer">
                        {b.title}
                      </h5>
                      <p className="text-[11px] text-[var(--color-muted)]">{b.date}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
