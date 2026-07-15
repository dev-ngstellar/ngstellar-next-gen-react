import React, { useState, useEffect } from 'react';
import { coursesData } from '../data/mockData';
import { Star, Clock, BookOpen, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCourses(coursesData);
  }, []);

  const categories = ['All', 'Preschool', 'Kindergarten', 'Creative Arts', 'STEM Activities', 'Reading Programs', 'Music & Dance'];

  // Filtering Logic
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-page-enter">
      
      {/* Banner Header */}
      <div className="relative pt-36 pb-20 bg-slate-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-violet-400 font-semibold mb-2 block">Our Playgroups</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Preschool & Kindergarten Programs
          </h1>
          <p className="text-slate-450 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Choose the perfect developmental playgroup for your child's age, sensory objectives, and social growth.
          </p>
        </div>
      </div>

      {/* Course Catalog Search and Filters */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Search & Category Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-slate-200/50 pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-150'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search playgroups..."
              className="w-full border border-slate-200 focus:border-violet-500 bg-white py-3 pl-10 pr-4 focus:outline-none text-xs font-light rounded-xl transition-colors shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-violet-600 text-white text-[9px] tracking-wider uppercase font-bold rounded-lg shadow">
                    {course.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-xs font-bold text-slate-800">{course.rating}</span>
                    <span className="text-[10px] text-slate-400 font-light">({course.reviewsCount} reviews)</span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-violet-650 transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-550 text-xs font-light leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Group Range</span>
                  <span className="text-xs font-bold text-slate-700">{course.level}</span>
                </div>
                <Link 
                  to={`/course/${course.id}`}
                  className="text-[10px] font-bold text-violet-650 hover:text-amber-500 uppercase tracking-wider flex items-center gap-0.5"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default Courses;
