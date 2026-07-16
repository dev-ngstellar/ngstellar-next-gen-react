import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../config/themes';
import { FiTarget, FiEye, FiCompass, FiShield, FiBriefcase, FiAward } from 'react-icons/fi';
export const About = () => {
  const { currentTheme } = useTheme();

  const coreValues = [
    {
      icon: <FiCompass className="text-3xl" />,
      title: 'Integrity First',
      description: 'We act as independent consultants, ensuring client goals align with verified data and clear legal titles.'
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Supreme Transparency',
      description: 'Zero hidden clauses, clear transaction metrics, and direct vendor access guarantee trust.'
    },
    {
      icon: <FiBriefcase className="text-3xl" />,
      title: 'Institutional Grade',
      description: 'We handle property evaluations with extreme precision, projecting actual yields and ROI indices.'
    }
  ];

  return (
    <div className="py-12 space-y-24">
      {/* Banner / Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase font-bold tracking-widest text-theme-primary px-3 py-1.5 bg-theme-primary/10 rounded-full"
        >
          Company Profile
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black text-slate-900"
        >
          Reshaping Global Real Estate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
        >
          We provide a premium, unified digital portal template configured for agencies, luxury property dealers, and developers. Built on transparent models to simplify property acquisition.
        </motion.p>
      </section>

      {/* Grid: Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-theme-primary/10 text-theme-primary">
              <FiTarget className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              To empower commercial developers, home buyers, and farmland investors with clear title clearances, structural parameters, and data-backed analytics to make investment decisions hassle-free.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-sm space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 text-white">
              <FiEye className="text-2xl" style={{ color: currentTheme.primary }} />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              To become the global gold standard for multi-model property templates. Offering robust codebases that adapt to any local market regulatory criteria and support artificial intelligence integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Pillars</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-xs">
              Every listing, consultation, and portfolio advice follows our institutional metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="text-theme-primary">{val.icon}</div>
                <h4 className="text-lg font-bold text-slate-800">{val.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics and Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold text-theme-primary">Track Record</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Delivering Verified Properties For Over A Decade
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our dynamic templates and listings cater to single agents and international conglomerates alike. We ensure data flows seamlessly from the backend database to beautiful user portfolios.
            </p>
            
            {/* Embedded Counter block */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="text-3xl font-extrabold text-theme-primary">
                  1000+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Listed Assets</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="text-3xl font-extrabold text-theme-primary">
                  95%
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-video lg:aspect-square relative shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Premium office interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
