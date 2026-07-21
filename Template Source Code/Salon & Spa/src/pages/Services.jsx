import { motion } from "framer-motion"
import { Clock, Plus, Phone } from "lucide-react"
import Button from "../components/ui/Button"

const services = [
  {
    category: "Hair",
    items: [
      { name: "Signature Haircut", price: "$85", duration: "60 mins", description: "Personalized consultation, wash, cut, and signature blow-dry styling." },
      { name: "Balayage & Color", price: "$195+", duration: "120 mins", description: "Custom hand-painted highlights tailored to your face shape and base color." },
      { name: "Keratin Treatment", price: "$250", duration: "180 mins", description: "Frizz-reducing smoothing treatment for silky, manageable hair." }
    ]
  },
  {
    category: "Skin & Spa",
    items: [
      { name: "Luxe Glow Facial", price: "$120", duration: "75 mins", description: "Deep cleansing, exfoliation, extraction, and custom mask for radiant skin." },
      { name: "Swedish Massage", price: "$110", duration: "60 mins", description: "Relaxing full-body massage using light to medium pressure." },
      { name: "Aromatherapy", price: "$135", duration: "90 mins", description: "Therapeutic massage using custom essential oil blends." }
    ]
  },
  {
    category: "Bridal & Event",
    items: [
      { name: "Bridal Makeup Trial", price: "$150", duration: "90 mins", description: "Consultation and trial run for your big day." },
      { name: "Event Styling", price: "$95", duration: "60 mins", description: "Elegant updos, waves, or sleek styling for any special occasion." }
    ]
  }
]

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Curated <span className="text-primary italic">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Indulge in our comprehensive range of luxury treatments designed to enhance your natural beauty and provide ultimate relaxation.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {services.map((section, idx) => (
            <motion.section 
              key={section.category}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif border-b border-border pb-4 mb-8 text-text">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {section.items.map((item, i) => (
                  <div key={i} className="group p-6 rounded-2xl border border-transparent hover:border-border hover:bg-surface transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-text group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="font-serif text-lg text-primary">{item.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted mb-4 font-medium">
                      <Clock size={14} />
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">{item.description}</p>
                    <Button variant="ghost" className="px-0 h-auto hover:bg-transparent hover:text-primary gap-2">
                      <Plus size={16} /> Book this
                    </Button>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mt-32 text-center p-12 bg-surface rounded-3xl border border-border"
        >
          <h3 className="text-2xl font-serif mb-4">Not sure what you need?</h3>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">Call us for a free consultation. Our experts will guide you to the perfect treatment.</p>
          <Button variant="outline" className="gap-2">
            <Phone size={18} /> Call (310) 555-0123
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
