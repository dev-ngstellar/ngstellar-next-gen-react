import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Courses = () => {
  const courses = [
    { category: 'Engineering', title: 'JEE Advanced Masterclass', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80', duration: '2 Years', level: 'Intermediate', rating: '4.9', students: '12k', price: '₹45,000' },
    { category: 'Medical', title: 'NEET Target Batch 2026', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', duration: '1 Year', level: 'Advanced', rating: '4.8', students: '15k', price: '₹55,000' },
    { category: 'Technology', title: 'Full Stack Data Science', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', duration: '6 Months', level: 'Beginner', rating: '4.9', students: '8k', price: '₹25,000' },
    { category: 'Civil Services', title: 'UPSC Foundation Program', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80', duration: '18 Months', level: 'Intermediate', rating: '4.7', students: '5k', price: '₹60,000' },
    { category: 'Design', title: 'UI/UX Design Bootcamp', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80', duration: '3 Months', level: 'Beginner', rating: '4.9', students: '10k', price: '₹15,000' },
    { category: 'Finance', title: 'Chartered Accountancy Prep', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', duration: '3 Years', level: 'Advanced', rating: '4.8', students: '9k', price: '₹75,000' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] pt-24">
      {/* Hero & Search */}
      <section className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">Explore Our <span className="gradient-text">Programs</span></h1>
              <p className="text-lg text-[var(--color-text-muted)]">Find the perfect course tailored to your career goals and ace your upcoming exams with expert guidance.</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative group w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)]/20 transition-all shadow-sm"
                />
              </div>
              <Button variant="secondary" icon={Filter}>Filters</Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto pb-4 pt-8 gap-3 scrollbar-hide">
            {['All Courses', 'Engineering', 'Medical', 'Civil Services', 'Technology', 'Design', 'Finance'].map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${
                  i === 0 
                    ? 'bg-[var(--color-primary-600)] text-white shadow-lg shadow-[var(--color-primary-500)]/30' 
                    : 'bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary-400)] hover:text-[var(--color-text)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--color-bg)] rounded-3xl overflow-hidden shadow-[var(--card-shadow)] border border-[var(--color-border)] group hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{course.category}</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-primary-600)] transition-colors">{course.title}</h4>
                  
                  <div className="grid grid-cols-2 gap-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <Clock className="w-4 h-4 text-[var(--color-primary-500)]" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <BookOpen className="w-4 h-4 text-[var(--color-primary-500)]" /> {course.level}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <Users className="w-4 h-4 text-[var(--color-primary-500)]" /> {course.students}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
                      <Star className="w-4 h-4 fill-current" /> {course.rating}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                    <div className="text-2xl font-black text-[var(--color-text)]">{course.price}</div>
                    <Button variant="glow" size="sm">Enroll Now</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">Load More Courses</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
