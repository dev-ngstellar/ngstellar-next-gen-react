import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { whyJoinPrograms, classJourneySteps } from '../../data/programs';
import { Award, Heart, Activity, Star } from 'lucide-react';

export default function WhyJoinAndJourney() {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <Award className="w-6 h-6 text-[#C99683]" />;
      case 1: return <Heart className="w-6 h-6 text-[#C99683]" />;
      case 2: return <Activity className="w-6 h-6 text-[#C99683]" />;
      case 3: return <Star className="w-6 h-6 text-[#C99683]" />;
      default: return <Award className="w-6 h-6 text-[#C99683]" />;
    }
  };

  return (
    <>
      {/* WHY JOIN THESE PROGRAMS */}
      <section className="py-14 md:py-20 bg-[#151719] relative border-t border-[#282523]">
        <Container>
          <SectionTitle
            label="WHY CHOOSE US"
            title="Why Join Our Dance Programs"
            subtitle="Unlock your potential with structured curriculum, inspiring mentorship, and a supportive dance community."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinPrograms.map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-300 group hover:-translate-y-1 relative shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-[#151719] w-fit border border-[#282523] mb-6 group-hover:border-[#C99683]/40 transition-colors">
                    {getIcon(index)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#F7F4F0] mb-3 group-hover:text-[#C99683] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A39E98] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 w-8 h-0.5 bg-[#282523] group-hover:w-full group-hover:bg-[#C99683] transition-all duration-500" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CLASS JOURNEY */}
      <section className="py-14 md:py-20 bg-[#101214] relative border-t border-[#282523]">
        <Container>
          <SectionTitle
            label="YOUR PATH TO SUCCESS"
            title="Class Journey"
            subtitle="A clear four-step pathway from your first session to stage performance excellence."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {classJourneySteps.map((step, index) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-300 relative group flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  <span className="text-4xl font-serif font-bold text-[#C99683]/40 group-hover:text-[#C99683] transition-colors">
                    {step.step}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A39E98] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#282523] flex items-center justify-between text-xs text-[#A39E98] uppercase tracking-wider">
                  <span>Phase {index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#C99683]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
