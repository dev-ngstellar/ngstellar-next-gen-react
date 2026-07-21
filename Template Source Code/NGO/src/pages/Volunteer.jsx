import { motion } from 'framer-motion';
import { BookOpen, Users, Star, Clock, ArrowRight, HeartHandshake } from 'lucide-react';
import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for applying to be a volunteer! We will get back to you shortly.');
  };

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-secondary/5 -z-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-secondary/10 text-secondary rounded-3xl mx-auto flex items-center justify-center mb-8 rotate-12"
          >
            <HeartHandshake size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Become a <span className="text-secondary">Volunteer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70"
          >
            Your time and skills can change lives. Join our global network of passionate individuals working together to create sustainable change.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Training", desc: "Receive comprehensive training and certifications." },
            { icon: Users, title: "Community", desc: "Join a global network of like-minded changemakers." },
            { icon: Star, title: "Recognition", desc: "Earn certificates and recognition for your impact." },
            { icon: Clock, title: "Flexible Schedule", desc: "Contribute at your own pace and availability." }
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Opportunities & Form */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="glass rounded-[3rem] p-8 md:p-12 lg:p-16 border border-border grid lg:grid-cols-2 gap-16 relative overflow-hidden">
          {/* Form Background Blur */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-foreground/5 -z-10"></div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Opportunities</h2>
            <p className="text-foreground/70 mb-10">
              We are currently looking for passionate volunteers in the following areas. No prior experience is required for most roles—just a willingness to learn and help.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                { role: "Education Mentor", type: "Remote / On-site", urgent: true },
                { role: "Medical Camp Assistant", type: "On-site", urgent: true },
                { role: "Event Coordinator", type: "Hybrid", urgent: false },
                { role: "Fundraising Ambassador", type: "Remote", urgent: false },
                { role: "Environmental Clean-up Crew", type: "On-site", urgent: false }
              ].map((opp, idx) => (
                <div key={idx} className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between group hover:border-secondary transition-colors">
                  <div>
                    <h4 className="font-bold text-lg">{opp.role}</h4>
                    <p className="text-sm text-foreground/60">{opp.type}</p>
                  </div>
                  {opp.urgent && (
                    <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">Urgent</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-background rounded-3xl p-8 md:p-10 shadow-xl shadow-foreground/5 border border-border relative z-10">
              <h3 className="text-2xl font-bold mb-8">Volunteer Application</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="bg-foreground/5 border border-transparent focus:border-secondary focus:bg-transparent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-foreground/5 border border-transparent focus:border-secondary focus:bg-transparent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-foreground/5 border border-transparent focus:border-secondary focus:bg-transparent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Availability</label>
                    <select required name="availability" value={formData.availability} onChange={handleChange} className="bg-foreground/5 border border-transparent focus:border-secondary focus:bg-transparent rounded-xl px-4 py-3 outline-none transition-colors">
                      <option value="">Select availability</option>
                      <option value="weekends">Weekends Only</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="flexible">Flexible / Anytime</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Key Skills or Interests</label>
                  <input required type="text" name="skills" value={formData.skills} onChange={handleChange} className="bg-foreground/5 border border-transparent focus:border-secondary focus:bg-transparent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="e.g. Teaching, Nursing, Photography..." />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Why do you want to volunteer?</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="bg-foreground/5 border border-transparent focus:border-secondary focus:bg-transparent rounded-xl px-4 py-3 outline-none transition-colors resize-none" placeholder="Tell us a little bit about your motivation..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-secondary/90 hover:scale-[1.02] transition-all shadow-lg shadow-secondary/30 flex items-center justify-center gap-2">
                  Submit Application <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
