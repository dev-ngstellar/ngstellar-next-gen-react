import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Eleanor & James",
    role: "Wedding Clients",
    text: "The way the light was captured on our special day was nothing short of magical. Every frame looks like a painting, a true masterpiece.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1973&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sophia Laurent",
    role: "Vogue Editor",
    text: "An unparalleled editorial eye. The compositions are breathtakingly elegant and the attention to detail is consistently world-class.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Alexander Wright",
    role: "Creative Director",
    text: "Working together was a masterclass in visual storytelling. The final images exceeded our highest expectations and elevated our entire campaign.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-[var(--surface)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--background)] rounded-l-[100px] hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-[var(--accent)] uppercase tracking-[0.3em] text-sm mb-6">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Words from those <br />who experienced <br /><span className="italic text-gray-400">the vision.</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-12 font-light">
              We pride ourselves on creating not just photographs, but timeless legacies. Here is what our esteemed clients have to say about their experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card p-10 md:p-14 relative overflow-hidden backdrop-blur-2xl">
              <Quote className="absolute top-10 right-10 text-[var(--accent)] opacity-20 w-24 h-24" />
              
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="flex flex-col h-[350px] md:h-[300px] justify-between">
                      <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 relative z-10 text-gray-200 pr-8">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-6 mt-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent)] p-1"
                        />
                        <div>
                          <h4 className="text-lg font-serif text-white">{testimonial.name}</h4>
                          <p className="text-sm text-[var(--muted)] uppercase tracking-wider">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
