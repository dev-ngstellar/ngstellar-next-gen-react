import React from 'react';
import { teamData } from '../../data/team';
import TeamCard from '../../components/cards/TeamCard';
import SectionHeader from '../../components/common/SectionHeader';
import { getImg } from '../../utils/images';

const Team = () => {
  return (
    <div className="w-full pt-24">
      {/* Banner */}
      <section className="relative py-20 bg-white text-text-primary text-center border-b border-border">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: `url(${getImg('general.careersCulture')})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
            Our Professionals
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight text-text-primary">
            Our Engineering & Management Team
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
            Meet the licensed engineers, certified project managers, and environmental experts coordinating our building portfolios.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Corporate Officers"
            title="Executive Leadership"
            description="Our senior management manages strategic procurement contracts and long-term joint partnerships."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.leadership.map((member, idx) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socials={member.socials}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering & Managers Split */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Operational Experts"
            title="Structural Engineers & Project Leads"
            description="The key architects and supervisors maintaining quality audits on concrete pours and high-rise framing."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6 border-b border-border pb-3 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-primary rounded-sm" />
                Engineering Department
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamData.engineering.map((member, idx) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    image={member.image}
                    socials={member.socials}
                    index={idx}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6 border-b border-border pb-3 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-primary rounded-sm" />
                Project Managers & HSE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamData.managers.map((member, idx) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    image={member.image}
                    socials={member.socials}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Diagram */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Organizational Flow"
            title="Management Structure"
            description="Our project-oriented reporting layout guarantees swift quality audits and safety alerts."
          />

          {/* Org Tree Map Layout */}
          <div className="max-w-4xl mx-auto border border-border bg-slate-50/50 rounded-2xl p-6 sm:p-10 flex flex-col gap-6 text-xs sm:text-sm text-text-primary font-semibold">
            {/* Level 1: CEO */}
            <div className="flex justify-center">
              <div className="px-6 py-3 rounded-lg bg-primary text-white border border-primary/20 shadow-md">
                CEO & executive board
              </div>
            </div>
            
            {/* Connector Line */}
            <div className="w-0.5 h-6 bg-primary/30 mx-auto" />

            {/* Level 2: COO */}
            <div className="flex justify-center">
              <div className="px-6 py-3 rounded-lg border border-border bg-white shadow-sm">
                Chief Operations Officer (COO)
              </div>
            </div>

            {/* Connector Line */}
            <div className="w-0.5 h-6 bg-primary/30 mx-auto" />

            {/* Level 3: Department Leads */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-border bg-white shadow-sm flex flex-col gap-2">
                <span className="text-primary font-extrabold uppercase tracking-wider text-[10px]">Division A</span>
                <span>Structural Engineering</span>
              </div>
              <div className="p-4 rounded-lg border border-border bg-white shadow-sm flex flex-col gap-2">
                <span className="text-primary font-extrabold uppercase tracking-wider text-[10px]">Division B</span>
                <span>Field Operations & PM</span>
              </div>
              <div className="p-4 rounded-lg border border-border bg-white shadow-sm flex flex-col gap-2">
                <span className="text-primary font-extrabold uppercase tracking-wider text-[10px]">Division C</span>
                <span>HSE Safety & Quality Control</span>
              </div>
            </div>

            {/* Connector Line */}
            <div className="w-0.5 h-6 bg-primary/30 mx-auto" />

            {/* Level 4: Execution */}
            <div className="flex justify-center">
              <div className="px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary text-xs">
                Site Superintendents, Field Labor & Material Inspectors
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
