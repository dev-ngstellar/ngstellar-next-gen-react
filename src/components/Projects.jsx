import { motion } from 'framer-motion';

const projectImages = [
  'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
  'https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg',
  'https://images.pexels.com/photos/1181372/pexels-photo-1181372.jpeg',
  'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg',
  'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg',
  'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="mt-16 bg-white px-5 py-10 text-slate-900"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          Our Projects
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500">
          A glimpse into the campaigns, products, and experiences we&apos;ve delivered
          for our clients.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projectImages.map((src, index) => (
            <motion.div
              key={src}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.05 + index * 0.04, duration: 0.35 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={src}
                alt="Client project"
                className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;


