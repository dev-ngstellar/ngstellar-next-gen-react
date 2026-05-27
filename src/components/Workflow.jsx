import { useState } from 'react';
import { motion } from 'framer-motion';
import BorderBeam from './BorderBeam';

const cards = [
  {
    title: 'Web Design & Development',
    text: 'Creating stunning, responsive websites that engage and convert your visitors.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" className="text-indigo-400" />
        <path d="M3 9h18M9 3v18" strokeWidth="1.5" className="text-indigo-300" />
        <circle cx="15" cy="15" r="2" fill="currentColor" className="text-indigo-500" />
      </svg>
    )
  },
  {
    title: 'Mobile App Development',
    text: 'Building intuitive and user-friendly mobile apps for iOS and Android platforms.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="1.5" className="text-indigo-400" />
        <path d="M11 18h2" strokeWidth="1.5" strokeLinecap="round" className="text-indigo-500" />
        <path d="M7 5h10M7 18h10" strokeWidth="1.5" className="text-indigo-300/60" />
      </svg>
    )
  },
  {
    title: 'Ecommerce Website Design',
    text: 'Designing seamless ecommerce platforms that enhance the shopping experience.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="9" cy="21" r="1" className="text-indigo-500" strokeWidth="2" />
        <circle cx="20" cy="21" r="1" className="text-indigo-500" strokeWidth="2" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-300" />
      </svg>
    )
  },
  {
    title: 'Custom Software Development',
    text: 'Developing tailored software solutions to streamline your business operations.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400" />
        <path d="M12 4v16" strokeWidth="1.5" strokeLinecap="round" className="text-indigo-300/60" />
      </svg>
    )
  },
  {
    title: 'Digital Marketing',
    text: 'Strategize and implement data-driven marketing campaigns to increase visibility.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400" />
        <circle cx="18" cy="7" r="3" strokeWidth="1.5" className="text-indigo-500" />
      </svg>
    )
  },
  {
    title: 'Design Services',
    text: 'We offer a range of design services including logo design, UI/UX design, animation videos',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400" />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" className="text-indigo-500" />
      </svg>
    )
  },
];

function Workflow() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="relative mt-24 rounded-[32px] p-[1.5px] overflow-hidden shadow-[0_40px_120px_rgba(10,16,40,0.9)] z-0">
      {/* Animated Border Beam */}
      {/* Animated Border Beam */}
      {/* <BorderBeam /> */}
        {/* className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_92.5%,#d946ef_96.5%,#ffaa40_100%)] z-[-1]" */}

      {/* Main Content Container (Masks the center) */}
      <div className="relative h-full w-full rounded-[30px] bg-[#050718] px-4 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl">
        {/* Top label + title */}
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.22em] text-indigo-200/80 uppercase">
            
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Our Services
            </span>            
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What we serve
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300">
            Comprehensive digital solutions tailored to your business needs. From web development to digital marketing, we deliver excellence across all platforms.
          </p>
        </div>

        {/* Cards row */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-[28px] border border-slate-700/50 bg-gradient-to-b from-[#0b1024] via-[#050819] to-[#050716] p-6 shadow-[0_30px_80px_rgba(5,8,30,0.9)] cursor-pointer ${index >= visibleCount ? 'hidden md:block' : ''}`}
            >
              {/* Animated gradient glow background */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[28px] opacity-40"
                style={{
                  background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.3), transparent 60%), radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.25), transparent 70%)'
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon container */}
              <div className="relative z-10 flex items-center justify-center h-32">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-indigo-300"
                >
                  {card.icon}
                </motion.div>
              </div>

              {/* Content box at bottom */}
              <div className="relative z-10 mt-4 rounded-2xl bg-slate-900/60 border border-slate-700/30 px-4 py-4 backdrop-blur-sm group-hover:bg-slate-900/70 transition-colors duration-300">
                <h3 className="text-white font-semibold text-sm mb-2">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  {card.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show More Button (Mobile Only) */}
        {visibleCount < cards.length && (
          <div className="mt-8 text-center md:hidden relative z-50">
            <button
              onClick={showMore}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:brightness-110 active:scale-95 cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}

export default Workflow;
