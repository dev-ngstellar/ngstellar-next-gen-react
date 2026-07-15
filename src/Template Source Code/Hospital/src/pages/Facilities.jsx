import React from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import SectionHeader from '../components/common/SectionHeader';
import FacilityCard from '../components/cards/FacilityCard';

const Facilities = () => {
  const { activeConfig } = useSpecialty();

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader 
          subtitle="Clinical Infrastructure"
          title={`Hospital Facilities & Technical Systems`}
          description="Explore our diagnostic labs, sterile operation rooms, cardiac recovery ICUs, and digital wards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activeConfig.facilities.map((fac, idx) => (
            <FacilityCard 
              key={idx}
              title={fac.title}
              desc={fac.desc}
              img={fac.img}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Facilities;
