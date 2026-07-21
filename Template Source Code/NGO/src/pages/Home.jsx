import { motion } from 'framer-motion';
import { Heart, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-background overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply opacity-70 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[120px] mix-blend-multiply opacity-70"></div>
          <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-multiply opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary w-fit text-sm font-medium">
              <Heart size={16} fill="currentColor" /> Empowering Communities Globally
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Together We Can <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Create Lasting Change</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
              Join Lumora Foundation in our mission to bring education, healthcare, and clean water to underserved communities worldwide. Your support can rewrite a child's future.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/donate" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary-hover hover:scale-105 transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
                Donate Now <ArrowRight size={18} />
              </Link>
              <Link to="/volunteer" className="px-8 py-4 rounded-full glass font-medium hover:bg-foreground/5 transition-all">
                Become a Volunteer
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-12 border-t border-border mt-4">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">15K+</h4>
                <p className="text-sm text-foreground/60">Lives Changed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-secondary mb-1">120+</h4>
                <p className="text-sm text-foreground/60">Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-accent mb-1">40+</h4>
                <p className="text-sm text-foreground/60">Partners</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Children smiling" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-12 glass p-6 rounded-2xl w-72 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h5 className="font-bold">Recent Success</h5>
                  <p className="text-sm text-foreground/60">School built in Kenya</p>
                </div>
              </div>
              <div className="w-full bg-foreground/10 rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full w-[85%]"></div>
              </div>
              <p className="text-xs text-right mt-2 text-foreground/60">85% Funded</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "250+", label: "Communities Supported", icon: Users, color: "text-primary", bg: "bg-primary/10" },
            { number: "15,000+", label: "Children Educated", icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10" },
            { number: "1.2M", label: "Meals Served", icon: Heart, color: "text-accent", bg: "bg-accent/10" },
            { number: "85+", label: "Medical Camps", icon: CheckCircle, color: "text-primary", bg: "bg-primary/10" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl text-center flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-2`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="text-foreground/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-foreground/5 py-24 rounded-[3rem] mx-4 md:mx-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Programs</h2>
              <p className="text-lg text-foreground/70">
                Our initiatives are designed to address the most critical needs in vulnerable communities, creating sustainable solutions for long-term growth.
              </p>
            </div>
            <Link to="/programs" className="px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center gap-2 font-medium">
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education for All",
                desc: "Providing quality education and building schools in remote areas to ensure every child has a chance to learn.",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Education",
                progress: 65
              },
              {
                title: "Clean Water Initiative",
                desc: "Installing sustainable water wells and purification systems in communities suffering from water scarcity.",
                image: "https://images.unsplash.com/photo-1527011045974-42b70f0312bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Health",
                progress: 82
              },
              {
                title: "Women Empowerment",
                desc: "Skill development and micro-financing to help women start businesses and achieve financial independence.",
                image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Community",
                progress: 45
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-sm font-bold rounded-full">
                    {program.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                  <p className="text-foreground/70 mb-6 line-clamp-3">{program.desc}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Funded</span>
                      <span className="text-primary">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${program.progress}%` }}></div>
                    </div>
                  </div>
                  
                  <Link to="/donate" className="w-full py-3 rounded-xl bg-foreground/5 hover:bg-primary hover:text-white font-medium flex items-center justify-center transition-colors">
                    Support Program
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-foreground text-background py-24 px-8 md:px-16 flex flex-col items-center text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Become the reason someone smiles today.</h2>
            <p className="text-xl text-white/70 mb-10">
              Join our global community of volunteers and use your time and skills to make a tangible difference in the world.
            </p>
            <Link to="/volunteer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white text-lg font-bold hover:bg-primary-hover hover:scale-105 transition-all shadow-xl shadow-primary/30">
              Join as a Volunteer <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
