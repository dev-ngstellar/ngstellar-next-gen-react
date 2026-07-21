import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Share2, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Story of <span className="text-primary">Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70"
          >
            Since our founding, we have been driven by a single, powerful belief: that every person deserves the opportunity to thrive, regardless of where they were born.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower vulnerable communities through sustainable development programs focused on education, healthcare, and economic opportunity.", color: "text-primary" },
            { icon: Eye, title: "Our Vision", desc: "A world where every individual has access to the basic human rights and resources needed to lead a healthy, productive life.", color: "text-secondary" },
            { icon: Heart, title: "Our Values", desc: "Integrity, compassion, transparency, and accountability in everything we do, ensuring that every donation creates maximum impact.", color: "text-accent" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-3xl text-center group hover:bg-card-hover transition-colors"
            >
              <div className={`w-20 h-20 mx-auto rounded-full bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Journey</h2>
        
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 flex flex-col gap-12">
          {[
            { year: "2015", title: "Foundation Started", desc: "Lumora Foundation was born with a small team and a big dream." },
            { year: "2017", title: "1000 Families Supported", desc: "Reached our first major milestone in providing clean water." },
            { year: "2019", title: "Education Projects Launched", desc: "Started building our first 10 schools in underserved regions." },
            { year: "2022", title: "Healthcare Expansion", desc: "Deployed mobile medical camps across 5 countries." },
            { year: "2025", title: "Global Partnerships", desc: "Partnered with UN bodies for sustainable environmental goals." }
          ].map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Desktop Empty Space */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Node */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
              
              {/* Content Card */}
              <div className="w-full pl-8 md:pl-0 md:w-5/12">
                <div className="glass p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="text-primary font-bold text-xl mb-2 block">{event.year}</span>
                  <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                  <p className="text-foreground/70">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-foreground/5 py-24 rounded-[3rem] mx-4 md:mx-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership</h2>
            <p className="text-lg text-foreground/70">
              Meet the dedicated professionals leading our global efforts and ensuring every program delivers maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "David Chen", role: "Director of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Aisha Patel", role: "Head of Programs", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl overflow-hidden shadow-sm group"
              >
                <div className="h-80 relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                      <Share2 size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                      <Globe size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center border-t border-border">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
