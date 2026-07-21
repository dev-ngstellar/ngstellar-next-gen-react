import { motion } from "framer-motion"
import { ArrowRight, Star, Award, CheckCircle } from "lucide-react"
import Button from "../components/ui/Button"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1: Luxury Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Salon" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent dark:from-background dark:via-background/80" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-serif leading-tight text-text mb-6"
            >
              Beauty That <br />
              <span className="text-primary italic">Speaks Before</span> <br />
              You Do.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-xl"
            >
              Book your transformation with our expert stylists and beauty specialists.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="group">
                Book Appointment
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">Explore Services</Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:flex absolute right-12 top-1/3 glass-effect p-6 rounded-2xl flex-col gap-2 max-w-[200px]"
        >
          <div className="flex gap-1 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="font-medium text-lg">4.9 Rating</p>
          <p className="text-sm text-text-muted">1200+ Happy Clients</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden lg:flex absolute left-12 bottom-24 glass-effect p-5 rounded-2xl items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Award size={24} />
          </div>
          <div>
            <p className="font-serif font-medium">Luxury Salon Award</p>
            <p className="text-sm text-primary">2026</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Brand Trust */}
      <section className="py-16 bg-surface border-y border-border overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-sm text-text-muted uppercase tracking-widest font-medium">Trusted by Premium Beauty Brands</p>
        </div>
        <div className="flex w-[200%] md:w-full animate-marquee md:animate-none md:justify-center items-center gap-16 md:gap-24 opacity-60">
          {['L\'Oréal', 'Kérastase', 'Olaplex', 'Dyson', 'Wella'].map((brand, idx) => (
            <div key={idx} className="text-2xl font-serif text-text font-bold uppercase tracking-wider grayscale hover:grayscale-0 transition-all duration-300">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Signature Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-4xl md:text-5xl font-serif mb-6"
            >
              Our Signature <span className="text-primary italic">Services</span>
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-text-muted"
            >
              Experience a range of tailored beauty treatments designed to rejuvenate your body and elevate your style.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: 'Hair Styling', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600' },
              { title: 'Facial Therapy', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' },
              { title: 'Nail Studio', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=600' }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden h-[400px] mb-6">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 glass-effect p-4 rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center">
                    <span className="font-medium text-white">Read More</span>
                    <ArrowRight className="text-white" size={18} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-center group-hover:text-primary transition-colors">{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Button variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Choose Us */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800" alt="Why choose us" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <div className="flex-1 space-y-8">
            <div>
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Elevate Your <span className="text-primary italic">Experience</span>
              </motion.h2>
              <motion.p 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="text-text-muted text-lg"
              >
                We believe beauty is an experience, not just a service. From the moment you step in, you are enveloped in luxury.
              </motion.p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                'Certified Experts', 'Premium Products', 
                'Luxury Interiors', 'Private Rooms', 
                'Online Booking', 'Affordable Luxury'
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeIn} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="font-medium text-text">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Button className="mt-4">Learn About Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Booking CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface border border-border p-12 md:p-20 rounded-[3rem] shadow-glass max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready for a <span className="text-primary italic">New Look?</span></h2>
            <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto">
              Join thousands of happy clients who trust us with their beauty transformations.
            </p>
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">Book Your Appointment</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
