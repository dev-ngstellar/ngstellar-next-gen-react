import { motion } from 'framer-motion';

const projectImages = [
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    title: 'E-Commerce Platform',
    category: 'Web Development'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    title: 'Analytics Dashboard',
    category: 'UI/UX Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
    title: 'Brand Identity',
    category: 'Branding'
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80',
    title: 'Marketing Campaign',
    category: 'Digital Marketing'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
    title: 'Mobile App',
    category: 'App Development'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    title: 'Corporate Website',
    category: 'Web Design'
  },
];

function Gallery() {
  return (
    <motion.section
      id="projects"
      className="mt-20 rounded-[32px] bg-gradient-to-b from-[#0b1129] to-[#050718] px-5 py-12 text-slate-100 shadow-[0_40px_120px_rgba(15,23,42,0.9)] border border-white/5"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Our Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >The 
             <span
              className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-extrabold"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
              }}
            > Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-slate-300 text-base"
          >
            Showcasing our creative excellence across web development, branding, and digital marketing.
            Each project represents our commitment to quality and innovation.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 min-[360px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-violet-500/90 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 relative">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-violet-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/10 pointer-events-none transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          {/* <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/40 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-fuchsia-400/60 hover:scale-105 active:scale-95">
            <span>View All Projects</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button> */}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Gallery;
