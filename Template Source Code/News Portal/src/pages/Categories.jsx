import React, { useState } from 'react';
import { ChevronRight, Filter } from 'lucide-react';
import NewsCard from '../components/ui/NewsCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('Technology');
  const tabs = ['Technology', 'Business', 'Politics', 'Health', 'Sports', 'Entertainment', 'Science'];

  const articles = Array(8).fill({
    title: 'The Future of Clean Energy: Innovations That Will Power The Next Century',
    excerpt: 'As climate change accelerates, scientists and engineers are pushing the boundaries of solar, wind, and fusion technologies to secure a sustainable future.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
    category: activeTab,
    author: 'Dr. Alan Grant',
    date: 'Oct 12, 2026',
    readTime: 6,
    slug: 'clean-energy-future'
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      {/* Header */}
      <div className="mb-12 border-b border-[var(--color-border)] pb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-black text-[var(--color-text)] mb-4">Browse Topics</h1>
        <p className="text-xl text-[var(--color-text-muted)] max-w-2xl">Dive deep into our curated collections of articles spanning across global issues, technological advancements, and lifestyle trends.</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-3 scrollbar-hide border-b border-[var(--color-border)]">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === tab 
                ? 'bg-[var(--color-primary-900)] text-white dark:bg-[var(--color-primary-200)] dark:text-black shadow-md' 
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-200)] hover:text-[var(--color-text)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-10">
          
          {/* Featured Article for Category */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold mb-6 border-l-4 border-[var(--color-accent-500)] pl-4">Featured in {activeTab}</h2>
            <NewsCard article={{...articles[0], title: `Groundbreaking ${activeTab} Discoveries of the Decade`}} variant="featured" className="h-[400px] rounded-3xl" />
          </div>

          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-[var(--color-primary-500)]">
            <h2 className="font-serif font-bold text-xl uppercase tracking-wider">Latest Updates</h2>
            <Button variant="ghost" size="sm" icon={Filter} iconPosition="left">Filter</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.slice(1).map((article, idx) => (
              <NewsCard key={idx} article={article} variant="default" />
            ))}
          </div>
          
          <div className="flex justify-center mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="flex gap-2">
              <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center opacity-50 cursor-not-allowed">1</Button>
              <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">2</Button>
              <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">3</Button>
              <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">...</Button>
              <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center"><ChevronRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-10">
          <div className="bg-[var(--color-bg-secondary)] p-6 rounded-2xl border border-[var(--color-border)]">
            <h3 className="font-serif font-bold text-lg mb-4 uppercase tracking-wider">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Artificial Intelligence', 'Climate Change', 'Startups', 'Space X', 'Elections', 'Mental Health'].map(tag => (
                <Badge key={tag} variant="default" className="cursor-pointer hover:bg-[var(--color-surface-200)]">{tag}</Badge>
              ))}
            </div>
          </div>
          
          {/* Ad Placeholder */}
          <div className="bg-[var(--color-surface-100)] dark:bg-[var(--color-surface-800)] h-[600px] rounded-2xl flex flex-col items-center justify-center border border-dashed border-[var(--color-surface-300)] dark:border-[var(--color-surface-600)] sticky top-24">
            <span className="text-[var(--color-surface-400)] text-xs font-bold uppercase tracking-widest mb-2">Advertisement</span>
            <span className="text-[var(--color-surface-500)] font-medium">300 x 600</span>
          </div>
        </aside>
      </div>

    </div>
  );
};

export default Categories;
