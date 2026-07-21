import React from 'react';
import { Search, Calendar, Tag, ChevronDown, ChevronRight } from 'lucide-react';
import NewsCard from '../components/ui/NewsCard';
import Button from '../components/ui/Button';

const BlogArchive = () => {
  const archivePosts = Array(12).fill({
    title: 'The Silent Crisis in Global Logistics and Shipping',
    excerpt: 'An investigation into how minor disruptions in the Suez Canal ripple through the global economy within days.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80',
    category: 'Business',
    author: 'Michael Chang',
    date: 'Sep 28, 2026',
    readTime: 7,
    slug: 'global-logistics'
  });

  return (
    <div className="bg-[var(--color-bg)]">
      
      {/* Archive Search Header */}
      <div className="bg-[var(--color-primary-950)] text-white py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-black mb-8">The Archive</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search thousands of articles, authors, and topics..." 
              className="w-full pl-16 pr-6 py-5 text-lg rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-[var(--color-primary-950)] font-bold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                <Calendar className="w-4 h-4" /> Filter by Date
              </h3>
              <div className="space-y-3">
                <select className="w-full p-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] appearance-none">
                  <option>All Years</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] appearance-none">
                  <option>All Months</option>
                  <option>October</option>
                  <option>September</option>
                  <option>August</option>
                </select>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                <Tag className="w-4 h-4" /> Categories
              </h3>
              <ul className="space-y-2">
                {['Technology', 'Business', 'Politics', 'Science', 'Health'].map(cat => (
                  <li key={cat}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-[var(--color-border)] text-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)] cursor-pointer" />
                      <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button variant="outline" fullWidth>Clear All Filters</Button>
          </aside>

          {/* Results List */}
          <div className="lg:col-span-3">
            <div className="mb-6 pb-4 border-b border-[var(--color-border)] flex items-center justify-between text-sm">
              <span className="text-[var(--color-text-muted)] font-medium">Showing <strong>245</strong> results for "All Articles"</span>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-text-muted)]">Sort by:</span>
                <select className="bg-transparent border-none font-bold text-[var(--color-text)] outline-none cursor-pointer">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-8 mb-12">
              {archivePosts.map((post, idx) => (
                <NewsCard key={idx} article={post} variant="horizontal" />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center border-t border-[var(--color-border)] pt-8">
              <div className="flex gap-2">
                <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center bg-[var(--color-primary-600)] text-white border-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)]">1</Button>
                <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">2</Button>
                <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">3</Button>
                <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">...</Button>
                <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">24</Button>
                <Button variant="outline" className="w-auto px-4 flex items-center gap-2">Next <ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogArchive;
