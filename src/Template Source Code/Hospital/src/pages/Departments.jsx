import React from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/cards/ServiceCard';

const Departments = () => {
  const { activeConfig } = useSpecialty();

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader 
          subtitle="Medical Divisions"
          title={`Departments at ${activeConfig.name}`}
          description="We host a comprehensive array of clinical divisions, staffed by board-certified senior doctors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {activeConfig.services.map((serv) => (
            <ServiceCard 
              key={serv.id}
              title={serv.title}
              desc={serv.desc}
              iconName={serv.icon}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Departments;
