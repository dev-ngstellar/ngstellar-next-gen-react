import { motion } from 'framer-motion';

const services = [
  {
    title: 'Branding Services',
    description: 'Creating a powerful brand identity that reflects your values and attracts your ideal audience.',
    image: '/Branding-container.webp',
    icon: '🎨'
  },
  {
    title: 'Consulting Services',
    description: 'Strategic guidance designed to improve efficiency, boost performance, and drive results.',
    image: '/Consulting-container.webp',
    icon: '💼'
  },
  {
    title: 'Tech Services',
    description: 'Providing help desks for users, resolving technical issues with hardware and software and managing software upgrades.',
    image: '/Technical-container.webp',
    icon: '⚙️'
  },
];

const principles = [
  {
    title: '💡 Solve Customer Pain',
    description: 'We focus on understanding customer challenges and solving their most critical problems through continuous learning and improvement.',
    borderColor: 'border-violet-500'
  },
  {
    title: '🎯 Ambition Shapes Reality',
    description: 'We set bold goals, believe in our potential, and treat setbacks as opportunities to learn and achieve more.',
    borderColor: 'border-fuchsia-500'
  },
  {
    title: '⚡ Fast, Yet Detailed',
    description: 'We build fast and learn fast — without ever compromising on the details that matter most.',
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
              Professional Services
            </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Quality <span
              className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
              }}
            > Services</span>
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
            className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
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
        className="relative mt-16 rounded-3xl p-[1.5px] overflow-hidden shadow-[0_40px_120px_rgba(10,16,40,0.9)] z-0"
      >
        {/* Animated Border Beam */}
        <motion.div
          className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_94%,#7db941_96.5%,#335fa8_100%)] z-[-1]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main Content Container */}
        <div className="relative h-full w-full rounded-[22px] bg-gradient-to-b from-slate-900 to-black p-8 md:p-12">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12">
            {/* Left Side - Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 overflow-hidden">
                <img src="/setting_8333974.png" alt="Operating Principles" className="w-full h-full object-contain p-1.5" />
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
