import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { doctorsData } from '../data/mockData';
import { Search, Calendar, Award, Clock, ArrowRight } from 'lucide-react';

const Doctors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const specializations = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dental Care', 'General Medicine'];

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialization === 'All' || doc.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialty;
  });

  const handleBookRedirect = (doctorName) => {
    // Navigate to appointment page and pass preselected doctor name via state
    navigate('/booking', { state: { doctorName } });
  };

  return (
    <div className="animate-page-enter">
      
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-sky-400 font-semibold mb-2 block">Our Panel</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Consult Our Medical Specialists
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Schedule slots with our resident surgeons and clinical practitioners. Filter by specialty department or search doctors by name.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar sticky panel */}
      <section className="bg-slate-50 border-b border-slate-100 py-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Categories Tab Scrollable */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all whitespace-nowrap focus:outline-none ${
                  selectedSpecialization === spec
                    ? 'bg-sky-500 text-white shadow shadow-sky-500/10'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search doctor or specialty..."
              className="w-full border border-slate-200 focus:border-sky-500 bg-white py-2.5 pl-10 pr-4 focus:outline-none text-xs font-light rounded transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* Doctor Cards Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="font-heading text-lg font-bold text-slate-800">No Specialists Found</h3>
            <p className="text-slate-400 text-xs font-light mt-1">Try modifying your search term or selection tabs.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden border-b border-slate-100 bg-slate-50">
                    <img 
                      src={doc.photo} 
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=350&q=80";
                      }}
                    />
                    <div className="absolute bottom-3 left-3 bg-emerald-500 text-white text-[9px] tracking-wider uppercase font-semibold py-0.5 px-2 rounded">
                      Available Today
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <span className="text-[10px] text-sky-500 font-bold uppercase tracking-wider block mb-1">
                      {doc.specialization}
                    </span>
                    <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                      {doc.name}
                    </h3>
                    
                    <div className="flex flex-col gap-1.5 text-xs text-slate-500 font-light mt-4">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-slate-400 shrink-0" />
                        Experience: {doc.experience}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        Availability: {doc.availability.split(' (')[0]}
                      </span>
                    </div>

                    <p className="text-slate-400 text-[11px] font-light leading-relaxed mt-4 border-t border-slate-50 pt-3 italic">
                      "{doc.bio}"
                    </p>
                  </div>
                </div>

                <div className="p-5 border-t border-slate-100 bg-slate-50/50">
                  <button
                    onClick={() => handleBookRedirect(doc.name)}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow shadow-sky-500/10"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Doctors;
