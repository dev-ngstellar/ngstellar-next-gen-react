import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/mockData';
import { Star, Clock, BookOpen, User, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const selected = coursesData.find((c) => c.id === id);
    if (selected) {
      setCourse(selected);
    }
  }, [id]);

  if (!course) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-xl font-bold text-slate-800">Program record not resolved in registry.</h2>
        <Link to="/courses" className="text-violet-600 hover:underline text-xs mt-2 inline-block">Return to Programs</Link>
      </div>
    );
  }

  const handleEnrollClick = () => {
    // Send course name prefilled state to admissions form
    navigate('/admissions', { state: { courseName: course.title } });
  };

  return (
    <div className="animate-page-enter pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Back Link */}
        <Link 
          to="/courses"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-violet-650 uppercase tracking-widest mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block Details (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="px-2.5 py-1 bg-violet-50 border border-violet-100 text-violet-600 text-[10px] tracking-wider uppercase font-bold rounded-lg shadow-sm">
                {course.category}
              </span>
              
              <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
                {course.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-xs text-slate-500 font-light">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-slate-800">{course.rating}</span>
                  <span>({course.reviewsCount} reviews)</span>
                </span>
                
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4 text-violet-600" />
                  Lead: {course.instructor}
                </span>
              </div>
            </div>

            {/* Banner image */}
            <div className="h-96 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description details */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-bold text-slate-900 pl-1.5 border-l-2 border-violet-600">
                Program Overview
              </h3>
              <p className="text-slate-550 text-xs sm:text-sm font-light leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Syllabus Syllabus Structure */}
            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-lg font-bold text-slate-900 pl-1.5 border-l-2 border-violet-600">
                Classroom Activity Roadmap
              </h3>
              
              <div className="border border-slate-100 bg-white rounded-2xl shadow-sm overflow-hidden text-xs">
                {course.syllabus.map((syl, idx) => (
                  <div key={idx} className="p-4 flex gap-3 border-b border-slate-100 last:border-0 font-light text-slate-550">
                    <CheckCircle2 className="w-4.5 h-4.5 text-violet-650 shrink-0 mt-0.5" />
                    <span>{syl}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Checkout Card (4 Columns) */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col gap-6 sticky top-28">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Program Tuition</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-slate-900 font-heading">${course.price}</span>
                <span className="text-xs text-slate-400 font-light">/ Term</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 text-xs text-slate-500 font-light border-y border-slate-150 py-4.5">
              <div className="flex justify-between">
                <span>Age Target Group:</span>
                <span className="font-bold text-slate-800">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration Period:</span>
                <span className="font-bold text-slate-800">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Staff Lead Teacher:</span>
                <span className="font-bold text-slate-800">{course.instructor}</span>
              </div>
            </div>

            <button
              onClick={handleEnrollClick}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors shadow shadow-violet-600/10 text-center"
            >
              Enroll Child Today
            </button>

            <div className="flex gap-2.5 items-start text-[10px] text-slate-400 leading-relaxed font-light">
              <ShieldCheck className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Full parent protection check applied. Tuition billing coordinates managed under secure academy guidelines.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetails;
