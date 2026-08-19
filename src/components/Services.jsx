import { motion } from 'framer-motion';

const services = [
  {
    title: 'Business Transformation',
    description: 'Helping businesses identify transformation opportunities, redesign strategies, optimize operating models and prepare for sustainable growth.',
    image: '/Branding-container.webp',
    icon: '🏢'
  },
  {
    title: 'Technology & Platforms',
    description: 'Architecting modern web solutions, scalable digital platforms, custom software and AI automation to power execution.',
    image: '/Technical-container.webp',
    icon: '⚙️'
  },
  {
    title: 'Sustainability Advisory',
    description: 'Embedding economic viability, governance accountability, social responsibility and operational resilience into core business.',
    image: '/Consulting-container.webp',
    icon: '🌱'
  },
];

const principles = [
  {
    title: '🔍 Understand First',
    description: 'We take time to deeply understand your situation, challenges, capabilities and goals before recommending solutions.',
    borderColor: 'border-violet-500'
  },
  {
    title: '🛠️ Practical Over Theoretical',
    description: 'We design strategies and systems that can actually be executed within your organization, not complex frameworks that sit on a shelf.',
    borderColor: 'border-fuchsia-500'
  },
  {
    title: '📈 Value and Impact Driven',
    description: 'Every transformation initiative must have a clear purpose and measurable outcome that creates sustainable long-term value.',
    borderColor: 'border-cyan-500'
  },
];

function Services() {
  return (
    <section id="services" className="mt-24 relative">
      {/* Quality Services Section */}
      <div className="text-center space-y-2 mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Advisory & Capabilities
            </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Strategic <span
              className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
              }}
            >Advisory Services</span>
        </h2>
       
      </div>

      {/* Service Cards - Image on Top */}
      <div className="grid gap-6 md:grid-cols-3 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 transform-gpu will-change-transform"
          >
            {/* Image at Top */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Operating Principles Section - Dark Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mt-16 rounded-3xl border border-slate-700/50 shadow-[0_40px_120px_rgba(10,16,40,0.9)] z-0"
      >

        {/* Main Content Container */}
        <div className="relative h-full w-full rounded-[22px] bg-gradient-to-b from-slate-900 to-black p-8 md:p-12">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12">
            {/* Left Side - Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 overflow-hidden">
                <img src="/setting_8333974.webp" alt="Operating Principles" className="w-full h-full object-contain p-1.5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Operating Principles
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operating Principles guide how we operate at Enterprise. They add clarity when we are evaluating and prioritizing between projects.
              </p>
            </div>

            {/* Right Side - Principle Cards */}
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative p-6 rounded-xl bg-slate-800/40 border-l-4 ${principle.borderColor} backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group`}
                >
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                    {principle.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
