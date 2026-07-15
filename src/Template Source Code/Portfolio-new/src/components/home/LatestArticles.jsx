import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import { Link } from 'react-router-dom';

export default function LatestArticles() {
  const articles = [
    {
      title: "The Future of Web Animation with Framer Motion",
      category: "Development",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Designing for the Luxury Tech Sector",
      category: "UI/UX Design",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
      title: "Optimizing React Applications for 2027",
      category: "Performance",
      date: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader title="Insights & Articles" subtitle="Blog" align="left" />
          <button className="text-primary hover:text-accent font-medium flex items-center gap-2 group pb-4 md:pb-8 transition-colors">
            View All Articles
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden glass aspect-video mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-muted mb-3">
                <span className="text-accent">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
