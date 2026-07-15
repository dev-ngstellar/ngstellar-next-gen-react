import React, { useState } from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import SectionHeader from '../components/common/SectionHeader';
import BlogCard from '../components/cards/BlogCard';
import { FaSearch } from 'react-icons/fa';

const Blog = () => {
  const { activeConfig } = useSpecialty();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = activeConfig.blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    blog.cat.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light text-left">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader 
          subtitle="News & Articles"
          title={`Clinical Knowledge Hub & Wellness Blog`}
          description="Read latest research updates, healthy living guides, and medical updates from our clinicians."
        />

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text" 
            placeholder="Search articles by title, tags or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white shadow-sm"
          />
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBlogs.map((b, idx) => (
              <BlogCard 
                key={idx}
                title={b.title}
                img={b.img}
                date={b.date}
                author={b.author}
                cat={b.cat}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-150 rounded-2xl max-w-xl mx-auto">
            <span className="text-3xl mb-2 block">🔍</span>
            <h3 className="font-bold text-gray-700 text-lg">No Articles Found</h3>
            <p className="text-xs text-gray-400 mt-1">Try modifying your query or keyword search terms.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;
