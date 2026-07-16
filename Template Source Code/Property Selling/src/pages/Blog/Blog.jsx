import React, { useState, useMemo } from 'react';
import { blogs } from '../../data/blogs';
import { FiCalendar, FiUser, FiArrowRight, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../config/themes';

export const Blog = () => {
  const { currentTheme } = useTheme();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    return ['All', ...new Set(blogs.map(b => b.category))];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') return blogs;
    return blogs.filter(b => b.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Title */}
      <div className="space-y-3 max-w-xl">
        <span className="text-xs uppercase font-bold text-theme-primary tracking-widest px-3 py-1.5 bg-theme-primary/10 rounded-full">
          Market Insights
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">Latest Property News</h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Keep up with the latest trends in global architecture, real estate regulations, and yield statistics.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-theme-primary text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blogs list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
          >
            {/* Visual */}
            <div className="aspect-video overflow-hidden bg-slate-100 relative">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              <span className="absolute top-4 left-4 bg-slate-950/80 text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border border-white/10">
                {blog.category}
              </span>
            </div>

            {/* Content preview */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center space-x-1.5">
                    <FiCalendar />
                    <span>{blog.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <FiUser />
                    <span>By {blog.author}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-theme-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center space-x-1.5 text-xs font-bold text-theme-primary uppercase tracking-wider mt-auto group-hover:underline">
                <span>Read Full Article</span>
                <FiArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Details Modal Popup */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col">
            
            {/* Image banner */}
            <div className="aspect-video relative overflow-hidden bg-slate-100">
              <img src={selectedBlog.image} alt="" className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/70 text-white rounded-full hover:bg-slate-950 transition-colors border border-white/10 cursor-pointer"
              >
                <FiX className="text-lg" />
              </button>
              <span className="absolute bottom-4 left-4 bg-theme-primary text-white text-xs font-bold uppercase px-3.5 py-2 rounded-xl">
                {selectedBlog.category}
              </span>
            </div>

            {/* Scrollable details */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-center space-x-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                <span className="flex items-center space-x-1">
                  <FiCalendar />
                  <span>{selectedBlog.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FiUser />
                  <span>Author: {selectedBlog.author}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">{selectedBlog.title}</h2>
              
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                {selectedBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
