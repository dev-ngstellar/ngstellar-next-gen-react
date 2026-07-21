import React from 'react';
import { Mail, ArrowRight, PenTool } from 'lucide-react';

const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Authors = () => {
  const editorialTeam = [
    {
      name: 'Sarah Jenkins',
      role: 'Editor in Chief',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Former Silicon Valley engineer turned journalist. Sarah oversees our entire editorial strategy and writes deep dives into artificial intelligence.',
      articles: 142,
      expertise: ['AI', 'Enterprise Software', 'Future of Work']
    },
    {
      name: 'David Wright',
      role: 'Senior Financial Correspondent',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning financial journalist with 15 years experience covering Wall Street, global markets, and macroeconomic trends.',
      articles: 89,
      expertise: ['Global Markets', 'Banking', 'Cryptocurrency']
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Science Editor',
      image: 'https://images.unsplash.com/photo-1594824476967-47c22ce04169?auto=format&fit=crop&w=400&q=80',
      bio: 'Ph.D. in Astrophysics. Emily translates complex scientific discoveries into compelling stories for the general public.',
      articles: 65,
      expertise: ['Space Exploration', 'Climate Science', 'Physics']
    },
    {
      name: 'Marcus Johnson',
      role: 'Political Analyst',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Based in Washington D.C., Marcus covers international relations, domestic policy, and the intersection of technology and government.',
      articles: 112,
      expertise: ['Domestic Policy', 'International Relations', 'Tech Regulation']
    },
    {
      name: 'Elena Rodriguez',
      role: 'Lifestyle & Culture Writer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Elena explores how modern life is changing, focusing on urban living, architecture, and contemporary arts.',
      articles: 45,
      expertise: ['Urban Design', 'Arts', 'Modern Living']
    },
    {
      name: 'Alex Rivera',
      role: 'Consumer Tech Reviewer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'If it has a screen or a battery, Alex has tested it. Expert in consumer hardware, gadgets, and personal computing.',
      articles: 210,
      expertise: ['Hardware', 'Mobile', 'Gaming']
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center justify-center p-3 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)] rounded-full text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)] mb-6">
          <PenTool className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-black text-[var(--color-text)] mb-6 leading-tight">Our Editorial Team</h1>
        <p className="text-xl text-[var(--color-text-muted)]">Meet the award-winning journalists, experts, and analysts behind NovaPress. Committed to truth, depth, and clarity.</p>
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {editorialTeam.map((author, idx) => (
          <div key={idx} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-3xl p-8 hover:shadow-[var(--card-shadow)] hover:border-[var(--color-primary-300)] transition-all group">
            <div className="flex items-center gap-6 mb-6">
              <img src={author.image} alt={author.name} className="w-20 h-20 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-text)] leading-tight">{author.name}</h3>
                <p className="text-[var(--color-primary-600)] font-medium text-sm mt-1">{author.role}</p>
              </div>
            </div>
            
            <p className="text-[var(--color-text-muted)] text-sm mb-6 leading-relaxed line-clamp-3">
              {author.bio}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {author.expertise.map(exp => (
                <Badge key={exp} size="sm">{exp}</Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)] mt-auto">
              <div className="text-sm font-bold text-[var(--color-text)]">
                {author.articles} <span className="font-normal text-[var(--color-text-muted)]">Articles</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="text-[var(--color-text-muted)] hover:text-[#1DA1F2] transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-[var(--color-text-muted)] hover:text-[#0077b5] transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Join the Team CTA */}
      <div className="mt-24 bg-gradient-to-br from-[var(--color-primary-900)] to-[var(--color-primary-950)] rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Want to write for NovaPress?</h2>
          <p className="text-[var(--color-primary-200)] text-lg mb-8">We are always looking for talented freelance writers and domain experts to contribute to our publication.</p>
          <Button variant="primary" size="lg" className="bg-white text-[var(--color-primary-950)] hover:bg-gray-100">View Pitch Guidelines</Button>
        </div>
      </div>

    </div>
  );
};

export default Authors;
