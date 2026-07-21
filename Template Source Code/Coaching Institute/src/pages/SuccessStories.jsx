import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ArrowRight, PlayCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const SuccessStories = () => {
  const stories = [
    { name: 'Rohan Sharma', exam: 'JEE Advanced', rank: 'AIR 12', before: 'Struggling with Physics concepts and time management.', after: 'Mastered problem-solving speed through Elevate Mock Tests.', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80' },
    { name: 'Anjali Verma', exam: 'NEET', rank: 'AIR 45', before: 'Overwhelmed by the vast biology syllabus.', after: 'Structured learning and mentor guidance helped secure a top rank.', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80' },
    { name: 'Karthik N.', exam: 'UPSC CSE', rank: 'AIR 88', before: 'Lacked a structured approach to answer writing.', after: 'Elevate Mains Test Series transformed answer presentation skills.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] pt-24">
      {/* Hero */}
      <section className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-xl mb-6 shadow-yellow-500/20">
              <Trophy className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-text)] mb-6">Real Stories. <span className="gradient-text">Real Impact.</span></h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Behind every rank is a story of grit, determination, and the right guidance. Discover how Elevate Academy helps students achieve the impossible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-text)]">Hall of Fame 2025</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--color-bg)] rounded-3xl p-8 border border-[var(--color-border)] shadow-[var(--card-shadow)] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--color-primary-100)] dark:border-[var(--color-primary-900)]">
                    <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)]">{story.name}</h3>
                    <div className="text-[var(--color-primary-600)] font-semibold">{story.exam}</div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 mt-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 text-xs font-bold border border-yellow-200 dark:border-yellow-800">
                      <Star className="w-3 h-3 fill-current" /> {story.rank}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[var(--color-bg-secondary)] p-4 rounded-xl border border-[var(--color-border)]">
                    <div className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">The Challenge</div>
                    <p className="text-sm text-[var(--color-text)]">"{story.before}"</p>
                  </div>
                  <div className="bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)]/20 p-4 rounded-xl border border-[var(--color-primary-100)] dark:border-[var(--color-primary-800)]/30">
                    <div className="text-xs font-bold text-[var(--color-primary-600)] uppercase tracking-wider mb-1">The Breakthrough</div>
                    <p className="text-sm text-[var(--color-text)]">"{story.after}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Student Interviews</h2>
              <p className="text-[var(--color-text-muted)] max-w-lg">Watch exclusive interviews with our top performers sharing their preparation strategies.</p>
            </div>
            <Button variant="outline">View All Videos <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'How I cracked JEE Advanced in my first attempt', author: 'Rohan Sharma', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' },
              { title: 'Balancing school boards with NEET preparation', author: 'Anjali Verma', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' }
            ].map((video, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src={video.img} alt={video.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-white fill-white/80" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-white/70 text-sm">Featuring {video.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
