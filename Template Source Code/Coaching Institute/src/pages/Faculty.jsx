import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, UserCheck } from 'lucide-react';

const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const Faculty = () => {
  const mentors = [
    { name: 'Dr. Anand Kumar', role: 'Head of Mathematics', exp: '15+ Years Exp.', qual: 'Ph.D. IIT Delhi', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80', bio: 'Expert in complex calculus and algebra with over 5,000 successful IIT selections under his guidance.' },
    { name: 'Prof. Sarah Jenkins', role: 'Chief Medical Educator', exp: '12+ Years Exp.', qual: 'MBBS, MD AIIMS', img: 'https://images.unsplash.com/photo-1594824432258-0ce89506720e?auto=format&fit=crop&w=600&q=80', bio: 'Renowned biology educator focusing on conceptual clarity and memory retention for NEET aspirants.' },
    { name: 'Dr. Vikram Singh', role: 'Physics Specialist', exp: '20+ Years Exp.', qual: 'M.Sc., Ph.D.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', bio: 'Pioneer of the "Visualize Physics" teaching method. Author of 5 best-selling competitive physics books.' },
    { name: 'Priya Sharma', role: 'Civil Services Mentor', exp: '10+ Years Exp.', qual: 'UPSC Interview Panelist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', bio: 'Guidance expert for IAS/IPS aspirants. Specializes in current affairs and answer writing techniques.' },
    { name: 'David Chen', role: 'Lead Tech Educator', exp: '8+ Years Exp.', qual: 'Ex-Google Engineer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', bio: 'Brings Silicon Valley experience to the classroom. Master of Data Structures, Algorithms, and System Design.' },
    { name: 'Anita Desai', role: 'Design Head', exp: '14+ Years Exp.', qual: 'NID Alumnus', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80', bio: 'Award-winning UX designer helping students build world-class portfolios and crack top design school exams.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] pt-24">
      {/* Hero Section */}
      <section className="bg-[var(--color-primary-950)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)] to-[var(--color-secondary-900)] opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md mb-6 border border-white/20">
              <UserCheck className="w-10 h-10 text-[var(--color-accent-400)]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Meet Our <span className="text-[var(--color-accent-400)]">Mentors</span></h1>
            <p className="text-xl text-[var(--color-primary-100)] max-w-2xl mx-auto leading-relaxed">
              Behind every successful student is an extraordinary teacher. Learn directly from industry veterans, authors, and ex-toppers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--color-border)]">
            <div className="text-center px-4">
              <div className="text-4xl font-black text-[var(--color-primary-600)] mb-2">150+</div>
              <div className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-wider">Expert Faculty</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-[var(--color-primary-600)] mb-2">10+</div>
              <div className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-wider">Avg. Years Exp.</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-[var(--color-primary-600)] mb-2">45</div>
              <div className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-wider">Ph.D. Holders</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-[var(--color-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-wider">Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mentors.map((mentor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--color-bg)] rounded-3xl p-8 border border-[var(--color-border)] shadow-[var(--card-shadow)] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img src={mentor.img} alt={mentor.name} className="relative w-full h-full object-cover rounded-full border-4 border-[var(--color-bg-secondary)]" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary-600)] transition-colors">{mentor.name}</h3>
                  <p className="text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)] font-semibold">{mentor.role}</p>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--color-bg-secondary)] rounded-full text-[var(--color-text-muted)]">
                    <Award className="w-4 h-4 text-[var(--color-accent-500)]" /> {mentor.exp}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--color-bg-secondary)] rounded-full text-[var(--color-text-muted)]">
                    <BookOpen className="w-4 h-4 text-[var(--color-accent-500)]" /> {mentor.qual}
                  </span>
                </div>
                
                <p className="text-[var(--color-text-muted)] text-center leading-relaxed mb-8">"{mentor.bio}"</p>
                
                <div className="flex items-center justify-center gap-4 border-t border-[var(--color-border)] pt-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-primary-500)] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[#1DA1F2] hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
