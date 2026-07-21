import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Share2, Bookmark, MessageSquare, ArrowLeft } from 'lucide-react';

const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const ArticleDetails = () => {
  return (
    <article className="min-h-screen bg-[var(--color-bg)]">
      
      {/* Top Breadcrumb & Share Bar - Sticky */}
      <div className="sticky top-[72px] z-40 bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--color-border)] py-3 hidden md:block">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-600)] flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
            <span className="text-sm font-semibold uppercase tracking-wider">Share:</span>
            <button className="hover:text-[#1DA1F2] transition-colors"><Twitter className="w-4 h-4" /></button>
            <button className="hover:text-[#4267B2] transition-colors"><Facebook className="w-4 h-4" /></button>
            <button className="hover:text-[#0077b5] transition-colors"><Linkedin className="w-4 h-4" /></button>
            <div className="w-px h-4 bg-[var(--color-border)] mx-2"></div>
            <button className="hover:text-[var(--color-primary-600)] transition-colors"><Bookmark className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-[1000px] mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="mb-6 flex justify-center">
          <Badge variant="primary" size="lg">Technology</Badge>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text)] text-center leading-[1.1] mb-8 text-balance">
          The AI Revolution: How Artificial Intelligence is Reshaping the Modern Workforce
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[var(--color-text-muted)] font-medium mb-12">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Author" className="w-12 h-12 rounded-full border-2 border-[var(--color-bg-secondary)]" />
            <div className="text-left">
              <div className="text-[var(--color-text)] font-bold">Sarah Jenkins</div>
              <div className="text-xs uppercase tracking-wider">Senior Tech Editor</div>
            </div>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--color-border)]"></div>
          <div>Oct 12, 2026</div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--color-border)]"></div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min read</div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16">
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80" alt="AI Server Room" className="w-full h-[400px] md:h-[600px] object-cover" />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md text-white/80 p-4 text-sm font-medium border-t border-white/10">
            Advanced neural network processing clusters powering next-generation AI models. (Photo: NovaPress/Getty Images)
          </figcaption>
        </figure>
      </div>

      {/* Article Content */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 pb-24">
        <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-a:text-[var(--color-primary-600)] max-w-none">
          <p className="lead text-xl md:text-2xl text-[var(--color-text-muted)] font-serif leading-relaxed mb-10">
            From algorithmic trading to automated customer service, generative artificial intelligence is no longer a futuristic concept—it is the present reality dictating the pace of global business. But as corporations rush to integrate LLMs into their workflows, a critical question emerges: What happens to the human workforce?
          </p>

          <p>
            The integration of artificial intelligence into the modern workplace is accelerating at a pace that has caught even seasoned industry analysts off guard. Unlike previous technological revolutions that primarily automated physical labor, the current wave of AI is aimed squarely at cognitive tasks.
          </p>

          <h2 className="text-3xl mt-12 mb-6">The Shift in Cognitive Labor</h2>
          <p>
            Software developers, content creators, legal analysts, and financial advisors are finding themselves sharing their digital workspace with intelligent agents capable of drafting code, writing reports, and synthesizing vast amounts of data in seconds.
          </p>

          {/* Pull Quote */}
          <blockquote className="my-12 pl-6 md:pl-10 border-l-4 border-[var(--color-accent-500)] bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-r-2xl italic font-serif text-2xl text-[var(--color-text)] leading-snug">
            "We are not witnessing the replacement of the human worker, but rather the augmentation of human capability. The professionals who will thrive are those who learn to conduct the AI orchestra."
            <footer className="text-base font-sans font-bold text-[var(--color-text-muted)] mt-4 not-italic">— Dr. Emily Chen, Director of AI Research at Stanford</footer>
          </blockquote>

          <p>
            According to a recent study by the Global Economic Forum, while AI is projected to displace 85 million jobs by 2030, it is simultaneously expected to create 97 million new roles. These new positions will require a hybrid skill set: domain expertise combined with "prompt engineering" and algorithmic oversight.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Redefining Education and Training</h2>
          <p>
            The immediate challenge for organizations is upskilling their existing workforce. Traditional corporate training programs are being overhauled to focus on AI literacy. Employees are being taught not just how to use new tools, but how to evaluate AI outputs for accuracy, bias, and security risks.
          </p>

          <div className="bg-[var(--color-surface-100)] dark:bg-[var(--color-surface-800)] p-6 rounded-2xl my-10 border border-[var(--color-border)]">
            <h4 className="font-bold text-lg mb-4">Key Statistics: AI Adoption 2026</h4>
            <ul className="space-y-2 m-0 p-0 list-none">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-primary-500)]"></div> 72% of Fortune 500 companies use generative AI daily.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-primary-500)]"></div> Productivity in software engineering has increased by 40%.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-primary-500)]"></div> 55% of executives report significant cost reductions in operations.</li>
            </ul>
          </div>

          <p>
            Ultimately, the businesses that succeed in this new era will be those that view AI as a collaborative partner rather than merely a cost-cutting tool. The future belongs to the augmented workforce.
          </p>
        </div>

        {/* Tags & Actions */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            <Badge>Artificial Intelligence</Badge>
            <Badge>Future of Work</Badge>
            <Badge>Technology Trends</Badge>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" icon={MessageSquare}>Leave a Comment (12)</Button>
          </div>
        </div>
        
        {/* Author Bio Box */}
        <div className="mt-16 bg-[var(--color-bg-secondary)] p-8 rounded-3xl border border-[var(--color-border)] flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Author" className="w-24 h-24 rounded-full border-4 border-[var(--color-bg)] shadow-lg" />
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[var(--color-text)] mb-2">Sarah Jenkins</h3>
            <p className="text-[var(--color-text-muted)] mb-4">Senior Tech Editor covering artificial intelligence, enterprise software, and the future of work. Former Silicon Valley software engineer.</p>
            <Button variant="editorial" size="sm">View all articles by Sarah <ArrowRight className="w-4 h-4 ml-1 inline" /></Button>
          </div>
        </div>

      </div>

      {/* Newsletter Block */}
      <section className="bg-[var(--color-primary-950)] text-white py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Enjoyed this article?</h2>
          <p className="text-[var(--color-surface-400)] text-lg mb-8">Subscribe to our newsletter for weekly deep dives into technology and business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Your email address" className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white w-full" />
            <Button variant="primary" size="lg">Subscribe</Button>
          </div>
        </div>
      </section>

    </article>
  );
};

export default ArticleDetails;
