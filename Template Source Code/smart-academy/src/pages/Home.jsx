import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Star, BookOpen, Clock, Users, ArrowRight, 
  Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Award, ShieldAlert,
  Smile, Palette, BrainCircuit, Dribbble, BookOpenCheck, Music
} from 'lucide-react';
import { coursesData, testimonialsData } from '../data/mockData';

const Home = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const kidsFeatures = [
    {
      title: "Interactive Learning",
      desc: "Play-based curriculums keeping young children engaged, building initial coordination skills.",
      icon: <Smile className="w-8 h-8 text-violet-600" />,
      color: "bg-violet-50 border-violet-100"
    },
    {
      title: "Creative Arts",
      desc: "Finger painting, paper mask crafting, clay modeling and classroom art galas.",
      icon: <Palette className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-50 border-amber-100"
    },
    {
      title: "STEM Activities",
      desc: "Safe laboratory bubble-volcanos, building lego bridges, and coding toy bugs.",
      icon: <BrainCircuit className="w-8 h-8 text-green-500" />,
      color: "bg-green-50 border-green-100"
    },
    {
      title: "Sports & Games",
      desc: "Active playground exercises, dancing circles, and motor skills agility tests.",
      icon: <Dribbble className="w-8 h-8 text-pink-500" />,
      color: "bg-pink-50 border-pink-100"
    },
    {
      title: "Reading Programs",
      desc: "Storybook theater, rhyming phonics words, sight-card blending challenges.",
      icon: <BookOpenCheck className="w-8 h-8 text-violet-600" />,
      color: "bg-violet-50 border-violet-100"
    },
    {
      title: "Music & Dance",
      desc: "Playing tambourines, xylophones, rhythm beats, and choral recitals.",
      icon: <Music className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-50 border-amber-100"
    }
  ];

  return (
    <div className="animate-page-enter">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] bg-violet-600 text-white flex items-center pt-32 pb-20 overflow-hidden">
        {/* Playful background blobs & assets */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_45%)]" />
        
        {/* Floating Cartoon Clouds */}
        <div className="absolute top-16 left-10 w-24 h-12 bg-white/20 rounded-full blur-[1px] animate-float-cloud hidden md:block" />
        <div className="absolute top-28 right-24 w-32 h-16 bg-white/10 rounded-full blur-[1px] animate-float-cloud hidden md:block" style={{ animationDelay: '2s' }} />

        {/* Floating Cartoon Star */}
        <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-amber-400 opacity-60 rounded-full blur-[1px] animate-float-star hidden lg:block" />
        
        {/* Floating Cartoon Balloon */}
        <div className="absolute bottom-16 left-8 w-14 h-20 bg-pink-500/30 rounded-t-full rounded-b-2xl blur-[1px] animate-float-balloon hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Left copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-750 border border-violet-500 text-[10px] tracking-widest text-amber-400 font-bold uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              <span>Learn &bull; Play &bull; Grow</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Where Learning <br />Becomes an <span className="text-amber-400">Adventure</span>
            </h1>

            <p className="text-violet-100 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Helping young minds grow through creativity, fun and quality education. Curriculums designed for preschool, kindergarten, and primary kids.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/courses"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-amber-500/20"
              >
                Explore Programs
              </Link>
              <Link
                to="/admissions"
                className="px-6 py-3.5 bg-violet-700 hover:bg-violet-850 text-white font-semibold text-xs tracking-wider uppercase rounded-xl border border-violet-550 transition-all"
              >
                Enroll Today
              </Link>
            </div>
          </div>

          {/* Right graphics panel (Kids classroom activities) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
                alt="Kids playing and learning"
                className="w-full h-72 object-cover rounded-xl shadow-md border-2 border-white/20"
              />
              
              {/* Driving School Bus Small Graphic overlay */}
              <div className="absolute -bottom-8 -left-8 bg-amber-400 text-slate-900 px-4 py-2.5 rounded-lg shadow-lg flex gap-2.5 items-center max-w-[190px] border border-amber-350 animate-shake-bus">
                <span className="text-2xl">🚌</span>
                <div className="flex flex-col">
                  <span className="text-[9px] text-amber-950 font-bold uppercase tracking-wider">Shuttle Status</span>
                  <span className="text-[10px] font-bold">Bus Leaving Stg 1</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Statistics Bar */}
      <section className="bg-slate-900 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          <div className="flex flex-col gap-1">
            <span className="font-heading text-3xl font-extrabold text-violet-400">1200+</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Enrolled Kids</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-3xl font-extrabold text-violet-400">80+</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Staff Teachers</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-3xl font-extrabold text-violet-400">50+</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Activities Scheduled</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-3xl font-extrabold text-violet-400">99%</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Success Rate</span>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Grid breakdown of activities) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-violet-650 font-bold block mb-2">Activities</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Interactive Kids Learning Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kidsFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className={`p-6 border rounded-2xl flex gap-4 items-start shadow-sm transition-all duration-300 hover:scale-103 ${feat.color}`}
              >
                <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">{feat.title}</h4>
                  <p className="text-slate-550 text-xs font-light leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Programs List Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-violet-650 font-bold block mb-2">Our Groups</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                Explore Classroom Play Programs
              </h2>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1 text-xs font-bold text-violet-650 hover:text-amber-500 uppercase tracking-widest transition-colors"
            >
              Browse All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesData.slice(0, 3).map((course) => (
              <div 
                key={course.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-violet-600 text-white text-[9px] tracking-wider uppercase font-bold rounded-lg shadow">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-bold text-slate-800">{course.rating}</span>
                      <span className="text-[10px] text-slate-400 font-light">({course.reviewsCount} reviews)</span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 mb-3 group-hover:text-violet-650 transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-slate-550 text-xs font-light leading-relaxed line-clamp-2">
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
                    to={`/courses`}
                    className="text-[10px] font-bold text-violet-650 hover:text-amber-500 uppercase tracking-wider flex items-center gap-0.5"
                  >
                    View Curriculum
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Teachers Teaser Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
              alt="Teachers interacting with children"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover border-4 border-slate-100"
            />
            <div className="absolute bottom-6 left-6 p-4 bg-slate-900 text-white rounded-xl shadow-lg flex gap-3 items-center max-w-[240px]">
              <div className="w-10 h-10 rounded bg-violet-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] text-slate-450 block">School Status</span>
                <span className="text-xs font-bold font-heading">Certified Child Safety Ok</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs tracking-[0.25em] uppercase text-violet-650 font-bold">Staff Team</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Meet Our Loving Teachers
            </h2>
            <p className="text-slate-550 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Our teachers are certified early childhood educators with a passion for creative arts, storytelling, lego physics, and rhythm.
            </p>
            <div className="pt-4">
              <Link
                to="/faculty"
                className="px-6 py-3 bg-violet-600 hover:bg-violet-750 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow"
              >
                Meet the Staff
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Parent Reviews (Testimonials) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs tracking-[0.25em] uppercase text-violet-650 font-bold">Parent Reviews</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight">
              Student Success Stories
            </h2>
            <p className="text-slate-550 text-xs font-light leading-relaxed mb-4">
              Read how our play-based learning helps toddlers develop motor skills, coordination, speech improvements, and STEM logic.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handlePrevTestimonial}
                className="w-10 h-10 border border-slate-200 hover:border-violet-600 hover:text-violet-600 rounded-full flex items-center justify-center transition-colors text-slate-650 focus:outline-none bg-white shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-10 h-10 border border-slate-200 hover:border-violet-600 hover:text-violet-600 rounded-full flex items-center justify-center transition-colors text-slate-650 focus:outline-none bg-white shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 border border-slate-150 rounded-2xl bg-white flex flex-col gap-6 shadow-sm">
              <p className="text-slate-700 italic text-sm md:text-base font-light leading-relaxed">
                "{testimonialsData[activeTestimonialIdx].text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-200/60 pt-6 mt-4">
                <img 
                  src={testimonialsData[activeTestimonialIdx].avatar}
                  alt={testimonialsData[activeTestimonialIdx].name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    {testimonialsData[activeTestimonialIdx].name}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    {testimonialsData[activeTestimonialIdx].role} &middot; <span className="text-violet-650 font-semibold">{testimonialsData[activeTestimonialIdx].company}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Call To Action (Admissions open banner) */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs tracking-[0.25em] uppercase text-violet-400 font-semibold">Admissions Triage</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold max-w-xl">
            Join the Smart Academy Family Today
          </h2>
          <p className="text-slate-450 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Inquire about our playgroup schedules, sibling discount structures, or tour the campus classroom modules.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-violet-600 hover:bg-violet-750 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-colors shadow shadow-violet-600/10"
            >
              Enroll Today
            </Link>
            <Link
              to="/courses"
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-350 hover:text-white font-semibold text-xs tracking-wider uppercase rounded-xl border border-slate-700 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
