import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Our <span className="text-primary italic">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Redefining luxury beauty since 2010. We believe in enhancing your natural elegance with our master craftsmanship and premium products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" alt="Salon Interior" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif">A Sanctuary of <span className="text-primary italic">Elegance</span></h2>
            <p className="text-text-muted leading-relaxed">
              Luxe Glow was founded with a single mission: to create a sanctuary where clients can escape the hustle of everyday life and indulge in unparalleled beauty services. 
            </p>
            <p className="text-text-muted leading-relaxed">
              Our team of internationally trained stylists and therapists brings years of experience, ensuring that every treatment is tailored to your unique needs. We use only the finest, cruelty-free products that nourish both body and soul.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <h4 className="text-4xl font-serif text-primary mb-2">15+</h4>
                <p className="text-sm text-text-muted">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-primary mb-2">10k+</h4>
                <p className="text-sm text-text-muted">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-primary mb-2">50+</h4>
                <p className="text-sm text-text-muted">Awards Won</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
