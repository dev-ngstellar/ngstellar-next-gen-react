import React, { useState } from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import DoctorCard from '../components/cards/DoctorCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

const Doctors = () => {
  const { activeConfig } = useSpecialty();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('All');

  // Collect unique specializations
  const specializations = ['All', ...new Set(activeConfig.doctors.map(d => d.spec))];

  const filteredDoctors = activeConfig.doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.spec.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpec = selectedSpec === 'All' || doc.spec === selectedSpec;
    return matchesSearch && matchesSpec;
  });

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light text-left">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader 
          subtitle="Clinical Board"
          title={`Meet Our Professional Specialists`}
          description="Consult our board-certified clinical specialists, general practitioners, and diagnostic heads."
        />

        {/* Filters Controls Panel */}
        <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Search bar */}
          <div className="relative w-full md:w-[350px]">
            <input 
              type="text" 
              placeholder="Search doctor by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-light"
            />
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto">
            <span className="text-xs font-bold text-gray-400 uppercase mr-2 flex items-center gap-1.5 flex-shrink-0">
              <FaFilter /> Filter:
            </span>
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpec(spec)}
                className={`px-4 py-2 rounded-full font-semibold text-xs transition-all cursor-pointer ${
                  selectedSpec === spec 
                    ? 'bg-primary text-white shadow-md shadow-primary/15' 
                    : 'bg-light text-gray-500 hover:bg-gray-100'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <AnimatePresence mode="popLayout">
          {filteredDoctors.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  key={doc.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <DoctorCard 
                    name={doc.name}
                    spec={doc.spec}
                    exp={doc.exp}
                    img={doc.img}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white border border-gray-150 rounded-2xl"
            >
              <span className="text-3xl mb-3 block">🔍</span>
              <h3 className="font-bold text-gray-700 text-lg">No Doctors Found</h3>
              <p className="text-xs text-gray-400 mt-1">Try modifying your query or selecting another filter category.</p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Doctors;
