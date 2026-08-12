import React from 'react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/common/CTASection';
import { academyData } from '../data/academy';
import { Target, Eye, Sparkles } from 'lucide-react';

export default function About() {
  const { eyebrow, heading, description, image } = academyData.aboutHero;
  const { story, philosophy, mission, vision, coreValues, approach } = academyData.aboutPage;
  const cta = academyData.ctaSection.about;

  return (
    <main className="min-h-screen bg-[#101214] text-[#F7F4F0]">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        image={image}
      />

      {/* 2. Story & Philosophy Section */}
      <section className="py-14 md:py-20 bg-[#151719] relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Our Story */}
            <div className="space-y-6 p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C99683] bg-[#C99683]/10 px-4 py-1.5 rounded-full border border-[#C99683]/30 inline-block">
                {story.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4F0] leading-tight">
                {story.heading}
              </h2>
              <p className="text-base text-[#A39E98] leading-relaxed font-light">
                {story.content}
              </p>
            </div>

            {/* Our Philosophy */}
            <div className="space-y-6 p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C99683] bg-[#C99683]/10 px-4 py-1.5 rounded-full border border-[#C99683]/30 inline-block">
                {philosophy.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4F0] leading-tight">
                {philosophy.heading}
              </h2>
              <p className="text-base text-[#A39E98] leading-relaxed font-light">
                {philosophy.content}
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-12 md:py-16 bg-[#101214]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-4 shadow-xl">
              <div className="p-3.5 rounded-2xl bg-[#C99683]/15 text-[#C99683] w-fit border border-[#C99683]/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4F0]">{mission.title}</h3>
              <p className="text-base text-[#A39E98] leading-relaxed font-light">{mission.description}</p>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-4 shadow-xl">
              <div className="p-3.5 rounded-2xl bg-[#C99683]/15 text-[#C99683] w-fit border border-[#C99683]/30">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4F0]">{vision.title}</h3>
              <p className="text-base text-[#A39E98] leading-relaxed font-light">{vision.description}</p>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-14 md:py-20 bg-[#151719] relative overflow-hidden">
        <Container>
          <SectionTitle
            label="OUR VALUES"
            title="What Guides Our Academy"
            subtitle="The fundamental principles that shape our curriculum, studio atmosphere, and faculty mentorship."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.number}
                className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-300 group hover:-translate-y-1 relative shadow-lg"
              >
                <div className="text-3xl font-serif font-bold text-[#C99683]/40 group-hover:text-[#C99683] transition-colors mb-4">
                  {value.number}
                </div>
                <h4 className="font-serif text-xl font-bold text-[#F7F4F0] mb-2 group-hover:text-[#C99683] transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-[#A39E98] leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Our Approach Section */}
      <section className="py-14 md:py-20 bg-[#101214] relative overflow-hidden">
        <Container>
          <SectionTitle
            label={approach.eyebrow}
            title={approach.heading}
            subtitle="Our structured path ensures every dancer builds strong foundations while exploring creative freedom."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.steps.map((step, idx) => (
              <div
                key={step.number}
                className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#C99683] bg-[#C99683]/10 px-3 py-1 rounded-full border border-[#C99683]/30">
                  Step {idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4F0]">{step.title}</h3>
                <p className="text-sm text-[#A39E98] leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Final CTA */}
      <CTASection
        heading={cta.heading}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />
    </main>
  );
}
