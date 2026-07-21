import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, ChevronRight, Bookmark, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/ui/NewsCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

// Mock Data
const breakingNews = [
  { id: 1, title: 'Global Markets Rally as Tech Giants Post Record Earnings', category: 'Finance', date: '2 hours ago' },
  { id: 2, title: 'New Breakthrough in Quantum Computing Announced Today', category: 'Technology', date: '3 hours ago' },
  { id: 3, title: 'Climate Summit Reaches Historic Agreement on Emissions', category: 'Environment', date: '5 hours ago' }
];

const mainStory = {
  title: 'The AI Revolution: How Artificial Intelligence is Reshaping the Modern Workforce',
  excerpt: 'A comprehensive deep dive into the impact of generative AI on creative industries, software development, and everyday business operations across the globe.',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  category: 'Technology',
  author: 'Sarah Jenkins',
  date: 'Oct 12, 2026',
  readTime: 8,
  slug: 'ai-revolution'
};

const topStories = [
  { title: 'SpaceX Successfully Lands Starship on Mars', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80', category: 'Science', author: 'Dr. Emily Chen', date: 'Oct 11', readTime: 6, slug: 'spacex-mars' },
  { title: 'The Rise of Sustainable Aviation Fuel', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80', category: 'Environment', author: 'Mark Robertson', date: 'Oct 10', readTime: 5, slug: 'sustainable-aviation' },
  { title: 'Next-Gen VR Headsets: Are We Ready for the Metaverse?', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80', category: 'Technology', author: 'Alex Rivera', date: 'Oct 09', readTime: 7, slug: 'vr-headsets' }
];

const latestArticles = [
  {
    title: 'The Quantum Leap: Next-Gen Computing Hits Commercial Scale',
    excerpt: 'Tech leaders announce the first commercially viable quantum processor capable of complex molecular simulation.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
    category: 'Technology',
    author: 'Alex Rivera',
    date: 'Oct 08, 2026',
    readTime: 5,
    slug: 'quantum-leap'
  },
  {
    title: 'Central Banks Explore Digital Currencies as Cash Usage Drops',
    excerpt: 'Global financial institutions roll out pilot programs for Central Bank Digital Currencies (CBDCs) across Asia and Europe.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    category: 'Business',
    author: 'David Wright',
    date: 'Oct 07, 2026',
    readTime: 4,
    slug: 'digital-currencies'
  },
  {
    title: 'Renewable Energy Surpasses Fossil Fuels in European Grid',
    excerpt: 'Solar and wind infrastructure generated a milestone 52% of total electricity production this past quarter.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
    category: 'Environment',
    author: 'Mark Robertson',
    date: 'Oct 06, 2026',
    readTime: 6,
    slug: 'renewable-milestone'
  },
  {
    title: 'Deep Space Telescope Detects Atmospheric Signs on Exoplanet',
    excerpt: 'Astrophysicists observe water vapor and methane signatures in the habitable zone of TRAPPIST-1e.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    category: 'Science',
    author: 'Dr. Emily Chen',
    date: 'Oct 05, 2026',
    readTime: 7,
    slug: 'exoplanet-discovery'
  },
  {
    title: 'The Future of Autonomous Transportation in Urban Centers',
    excerpt: 'Major metropolises begin testing fully electric driverless bus corridors to reduce traffic congestion.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80',
    category: 'Technology',
    author: 'Sarah Jenkins',
    date: 'Oct 04, 2026',
    readTime: 5,
    slug: 'autonomous-transport'
  },
  {
    title: 'Global Health Summit Unveils New Pandemic Defense Network',
    excerpt: 'International agencies launch real-time genomic sequencing networks to detect viral outbreaks early.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    category: 'Health',
    author: 'Elena Rodriguez',
    date: 'Oct 03, 2026',
    readTime: 4,
    slug: 'health-summit'
  }
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Breaking News Ticker */}
      <div className="bg-[var(--color-primary-950)] text-white py-2 overflow-hidden flex items-center">
        <div className="px-4 font-bold text-sm bg-[var(--color-accent-600)] py-1 uppercase tracking-widest shrink-0 z-10 flex items-center gap-2 relative">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          Breaking
        </div>
        <div className="flex-1 flex overflow-hidden ml-4">
          <div className="flex space-x-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {breakingNews.map(news => (
              <span key={news.id} className="text-sm font-medium hover:text-[var(--color-primary-200)] cursor-pointer transition-colors">
                <span className="opacity-50 mr-2">{news.date}</span>
                {news.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Top Section: Main Hero + Top Stories sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <NewsCard article={mainStory} variant="featured" className="h-full min-h-[400px] lg:min-h-[500px] rounded-3xl" />
          </div>
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-[var(--color-primary-500)]">
              <h2 className="font-serif font-bold text-xl uppercase tracking-wider">Top Stories</h2>
              <TrendingUp className="w-5 h-5 text-[var(--color-primary-500)]" />
            </div>
            <div className="flex flex-col gap-6 flex-grow">
              {topStories.map((story, idx) => (
                <NewsCard key={idx} article={story} variant="compact" />
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-[var(--color-primary-500)]">
            <h2 className="font-serif font-bold text-2xl uppercase tracking-wider">Latest Articles</h2>
            <Link to="/archive" className="text-sm font-bold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {latestArticles.map((article, idx) => (
              <NewsCard key={idx} article={article} variant="default" />
            ))}
          </div>
        </section>

        {/* Video Highlights */}
        <section className="bg-[var(--color-surface-950)] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-900)]/40 to-transparent"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <Badge variant="accent" className="w-fit mb-4">NovaPress Original</Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">Documentaries & Analysis</h2>
              <p className="text-[var(--color-surface-400)] text-lg mb-8">Go beyond the headlines with our award-winning video journalism. Deep dives, exclusive interviews, and field reports.</p>
              <Button variant="primary" size="lg" icon={Play} className="w-fit">Watch Now</Button>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Inside the Silicon Valley Chip War', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', time: '12:45' },
                { title: 'The Future of Urban Farming', img: 'https://images.unsplash.com/photo-1530836369250-ef71a3f5e902?auto=format&fit=crop&w=600&q=80', time: '08:20' }
              ].map((vid, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10">
                  <img src={vid.img} alt={vid.title} className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white/80 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono">{vid.time}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="font-serif text-lg font-bold">{vid.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editor's Choice */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-[var(--color-primary-500)]">
              <h2 className="font-serif font-bold text-2xl uppercase tracking-wider">Editor's Choice</h2>
            </div>
            <div className="flex flex-col gap-6">
              {latestArticles.slice(0,4).map((article, idx) => (
                <NewsCard key={idx} article={article} variant="horizontal" />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Sidebar Widget */}
            <div className="bg-[var(--color-primary-50)] dark:bg-[var(--color-surface-900)] p-8 rounded-3xl border border-[var(--color-primary-100)] dark:border-[var(--color-surface-800)] text-center">
              <Mail className="w-10 h-10 mx-auto text-[var(--color-primary-500)] mb-4" />
              <h3 className="font-serif text-2xl font-bold text-[var(--color-text)] mb-3">The Morning Briefing</h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-6">Start your day with the most important stories, curated by our senior editors.</p>
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:ring-2 focus:ring-[var(--color-primary-500)] mb-3 outline-none" />
              <Button variant="primary" fullWidth>Subscribe Free</Button>
            </div>
            
            {/* Ad Placeholder */}
            <div className="bg-[var(--color-surface-100)] dark:bg-[var(--color-surface-800)] h-[250px] rounded-3xl flex flex-col items-center justify-center border border-dashed border-[var(--color-surface-300)] dark:border-[var(--color-surface-600)]">
              <span className="text-[var(--color-surface-400)] text-xs font-bold uppercase tracking-widest mb-2">Advertisement</span>
              <span className="text-[var(--color-surface-500)] font-medium">300 x 250</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
