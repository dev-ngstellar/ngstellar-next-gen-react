import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, BookOpen, ArrowRight, Play, Star, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary-400)]/20 to-[var(--color-accent-400)]/20 blur-[100px] rounded-full mix-blend-multiply opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--color-primary-600)]/20 to-transparent blur-[120px] rounded-full mix-blend-multiply opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)]/30 border border-[var(--color-primary-100)] dark:border-[var(--color-primary-800)]/50 text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)] font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] animate-pulse"></span>
                Admissions Open for 2026-2027
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[var(--color-text)]">
                Shape Your Future With <br/>
                <span className="gradient-text">Industry Leading</span> Education.
              </h1>
              
              <p className="text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
                Elevate Academy transforms ambitious students into global leaders. Join India's most trusted coaching institute with a proven track record of 98% placement success.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="glow" size="lg" icon={ArrowRight}>
                  Explore Courses
                </Button>
                <Button variant="outline" size="lg" icon={Play}>
                  Book Free Demo
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-[var(--color-border)]">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-10 h-10 rounded-full border-2 border-[var(--color-bg)]" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-[var(--color-text-muted)] font-medium">Trusted by 25,000+ Students</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="Students learning" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/50 flex items-center justify-center text-[var(--color-primary-600)]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text)]">98%</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Placement Success</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-panel rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-100)] dark:bg-[var(--color-accent-900)]/50 flex items-center justify-center text-[var(--color-accent-600)]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text)]">150+</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Expert Faculty</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Logo Marquee */}
      <section className="py-10 border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Our Alumni Work At Top Global Companies</p>
        </div>
        <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap opacity-60 dark:opacity-40">
          {['Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'IBM', 'Intel', 'Microsoft', 'Google', 'Amazon', 'Meta'].map((company, index) => (
            <span key={index} className="text-2xl font-black text-slate-400 uppercase tracking-widest">{company}</span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[var(--color-primary-600)] tracking-widest uppercase mb-3">Why Choose Elevate</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6">Experience Premium Learning.</h3>
            <p className="text-[var(--color-text-muted)] text-lg">We don't just teach; we mentor. Our holistic approach ensures you are prepared for both competitive exams and real-world challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Experienced Faculty', desc: 'Learn from industry veterans, ex-IITians, and top-tier professionals with decades of teaching experience.' },
              { icon: Play, title: 'Live Interactive Classes', desc: 'Engage in real-time with mentors. Participate in live polls, Q&A sessions, and collaborative learning.' },
              { icon: Trophy, title: 'Placement Support', desc: 'Dedicated career guidance cell, resume building workshops, and mock interviews with HR experts.' },
              { icon: BookOpen, title: 'Premium Study Material', desc: 'Access highly curated, up-to-date digital and printed study materials prepared by subject matter experts.' },
              { icon: CheckCircle, title: '1-on-1 Doubt Sessions', desc: 'Never get stuck. Schedule personalized doubt-clearing sessions tailored to your pace and understanding.' },
              { icon: GraduationCap, title: 'Career Guidance', desc: 'End-to-end roadmap mapping, psychometric tests, and counseling to choose the right career path.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="glass-panel p-8 rounded-2xl group transition-all duration-300 hover:border-[var(--color-primary-300)] dark:hover:border-[var(--color-primary-700)]"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)]" />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text)] mb-3">{feature.title}</h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[var(--color-primary-600)] tracking-widest uppercase mb-3">Popular Programs</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6">Transform Your Career.</h3>
              <p className="text-[var(--color-text-muted)] text-lg">Explore our most sought-after programs designed to crack top exams and master high-paying skills.</p>
            </div>
            <Button variant="outline">View All Courses <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: 'Engineering', title: 'JEE Advanced Masterclass', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80', duration: '2 Years', level: 'Intermediate', rating: '4.9', students: '12k' },
              { category: 'Medical', title: 'NEET Target Batch 2026', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', duration: '1 Year', level: 'Advanced', rating: '4.8', students: '15k' },
              { category: 'Technology', title: 'Full Stack Data Science', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', duration: '6 Months', level: 'Beginner', rating: '4.9', students: '8k' }
            ].map((course, idx) => (
              <div key={idx} className="bg-[var(--color-bg)] rounded-3xl overflow-hidden shadow-[var(--card-shadow)] border border-[var(--color-border)] group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[var(--color-text)] text-xs font-bold px-3 py-1 rounded-full">{course.category}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-3">
                    <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-text)] mb-6 group-hover:text-[var(--color-primary-600)] transition-colors">{course.title}</h4>
                  <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-6">
                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                      <Star className="w-5 h-5 fill-current" /> {course.rating}
                    </div>
                    <Button variant="primary" size="sm">Enroll Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary-950)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-900)] to-[var(--color-accent-900)] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their careers with Elevate Academy. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="glow" size="lg">Get Started Today</Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md" size="lg">Speak to a Counselor</Button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
