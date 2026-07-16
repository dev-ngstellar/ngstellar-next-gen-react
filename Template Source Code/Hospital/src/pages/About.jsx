import React from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motionVariants';
import SectionHeader from '../components/common/SectionHeader';
import { FaHeart, FaEye, FaAward, FaBuilding } from 'react-icons/fa';

const About = () => {
  const { activeConfig } = useSpecialty();

  const values = [
    { title: 'Patient Centricity', desc: 'Putting clinical comfort and safety of patients at the forefront of all recovery procedures.', icon: <FaHeart /> },
    { title: 'Innovation', desc: 'Deploying high-throughput automated lab analyzers and state-of-the-art robotic surgical units.', icon: <FaEye /> },
    { title: 'Integrity', desc: 'Maintaining absolute transparency in billing schedules, packages, and cashless claim networks.', icon: <FaAward /> },
    { title: 'Excellence', desc: 'Conducting double audit checks for diagnostic reports and regular clinical peer reviews.', icon: <FaBuilding /> },
  ];

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light text-left">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Page title header */}
        <SectionHeader 
          subtitle="Learn About Us"
          title={`Overview of ${activeConfig.name}`}
          description="A leading integrated healthcare facility offering state-of-the-art diagnostics and therapies."
        />

        {/* Overview & Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-dark tracking-tight">
              A Legacy of Clinical Quality & Human Empathy
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Founded over a decade ago, {activeConfig.name} has evolved into a premier clinical destination. We focus on patient-centric protocols and evidence-based treatments to ensure rapid recovery outcomes.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Our clinic operates with fully digitalized Electronic Health Record (EHR) logs, enabling multidisciplinary case reviews and seamless coordination between general practitioners and visiting consultants.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            animate="show"
            className="rounded-2xl overflow-hidden aspect-video relative shadow-md"
          >
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" 
              alt="Clinical Infrastructure Overview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white flex flex-col gap-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg"><FaHeart /></div>
            <h3 className="font-extrabold text-xl md:text-2xl text-dark">Our Mission</h3>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              To deliver premium quality, compassionate, and accessible healthcare by merging advanced medical science with patient care values, ensuring healthy communities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white flex flex-col gap-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-lg"><FaEye /></div>
            <h3 className="font-extrabold text-xl md:text-2xl text-dark">Our Vision</h3>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              To be recognized globally as a benchmark clinical facility, pioneering zero-error diagnostics, minimally invasive therapies, and integrated primary family care.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <SectionHeader 
            title="Our Core Values"
            description="The key principles that drive our administrative choices, surgical routines, and clinical research."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-base">{val.icon}</div>
                <h4 className="font-bold text-dark text-lg leading-tight">{val.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-3xl border border-gray-150">
          <div className="space-y-4">
            <h3 className="font-extrabold text-2xl text-dark">Accreditation & Quality Awards</h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              We operate under standard quality monitoring. Our laboratory tracks double biochemistry controls daily, and our operation protocols align with standard surgical guidelines.
            </p>
            <ul className="text-xs md:text-sm text-gray-500 space-y-2 font-medium">
              <li>✔ NABH Accredited Campus</li>
              <li>✔ NABL Certified Laboratory Tracks</li>
              <li>✔ ISO 9001:2015 Safety Certification</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden aspect-video max-w-sm mx-auto shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=400&q=80" 
              alt="Accredited Certificate Frame"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
