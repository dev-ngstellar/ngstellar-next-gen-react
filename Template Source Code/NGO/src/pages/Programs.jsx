import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Education for All",
    desc: "Providing quality education and building schools in remote areas to ensure every child has a chance to learn.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    progress: 65,
    goal: "$100,000",
    raised: "$65,000",
    impact: "50+ Schools Built"
  },
  {
    title: "Healthcare Access",
    desc: "Deploying mobile medical units and establishing permanent clinics in underserved rural communities.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Health",
    progress: 82,
    goal: "$250,000",
    raised: "$205,000",
    impact: "100K+ Patients Treated"
  },
  {
    title: "Women Empowerment",
    desc: "Skill development and micro-financing to help women start businesses and achieve financial independence.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Community",
    progress: 45,
    goal: "$50,000",
    raised: "$22,500",
    impact: "5,000+ Women Trained"
  },
  {
    title: "Clean Water Initiative",
    desc: "Installing sustainable water wells and purification systems in communities suffering from water scarcity.",
    image: "https://images.unsplash.com/photo-1527011045974-42b70f0312bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Environment",
    progress: 90,
    goal: "$120,000",
    raised: "$108,000",
    impact: "200+ Wells Installed"
  },
  {
    title: "Disaster Relief",
    desc: "Providing immediate aid, food, and temporary shelter to families affected by natural disasters.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Emergency",
    progress: 30,
    goal: "$500,000",
    raised: "$150,000",
    impact: "20K+ Families Aided"
  },
  {
    title: "Nutrition for Children",
    desc: "Ensuring zero hunger by providing balanced, nutritious meals to school-going children.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nutrition",
    progress: 75,
    goal: "$80,000",
    raised: "$60,000",
    impact: "2M+ Meals Served"
  }
];

export default function Programs() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Programs & <span className="text-primary">Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Discover the initiatives we are running globally. Every donation directly funds these programs, creating measurable change on the ground.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm group flex flex-col h-full"
            >
              <div className="h-56 relative overflow-hidden shrink-0">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-sm font-bold rounded-full">
                  {program.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{program.desc}</p>
                
                <div className="mb-6 bg-foreground/5 p-4 rounded-2xl">
                  <p className="font-semibold text-sm mb-1 text-center">{program.impact}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>{program.raised} <span className="text-foreground/50 font-normal">raised</span></span>
                    <span className="text-primary">{program.progress}%</span>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full relative" style={{ width: `${program.progress}%` }}>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                  <div className="text-right text-xs text-foreground/50 mt-2">Goal: {program.goal}</div>
                </div>
                
                <Link to="/donate" className="w-full py-4 rounded-xl bg-primary text-white hover:bg-primary-hover font-medium flex items-center justify-center gap-2 transition-colors mt-auto">
                  <Heart size={18} /> Support Initiative
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* General CTA */}
      <section className="container mx-auto px-4 md:px-8 pb-12">
        <div className="glass rounded-[3rem] p-12 md:p-16 text-center border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Can't decide which program to support?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
            Make a general donation to the Lumora Foundation Action Fund. We will allocate your resources to the area of greatest need, ensuring your impact is maximized where it matters most today.
          </p>
          <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-all">
            Donate to Action Fund <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
