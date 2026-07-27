import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope, 
  Scissors, 
  Hotel, 
  Footprints, 
  HeartPulse, 
  Apple, 
  Smile, 
  CheckCircle,
  Clock,
  Award,
  Star,
  ChevronDown
} from 'lucide-react';
import { 
  SERVICES_DATA, 
  VETS_DATA, 
  PRICING_PACKAGES, 
  GALLERY_DATA, 
  TESTIMONIALS_DATA, 
  FAQS_DATA 
} from '../data/mockData';
import { BeforeAfterSlider } from '../components/home/BeforeAfterSlider';

export const Home = ({ onOpenAppointment }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedLightboxImg, setSelectedLightboxImg] = useState(null);

  // Icon mapping helper
  const renderIcon = (iconName) => {
    const props = { className: "w-6 h-6 text-[var(--primary)]" };
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      case 'Hotel': return <Hotel {...props} />;
      case 'Footprints': return <Footprints {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-red-500" />;
      case 'Apple': return <Apple {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-sm text-xs font-semibold text-[var(--heading)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[var(--primary)]">AAHA Accredited Hospital</span>
                <span className="text-[var(--muted-text)]">• 24/7 Emergency Ready</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--heading)] tracking-tight font-sans leading-[1.15]">
                Because Every Pet Deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-emerald-500 to-[var(--accent)]">Extraordinary Care</span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--muted-text)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience luxury veterinary medicine, state-of-the-art diagnostics, organic hydro-spa grooming, and 5-star climate-controlled boarding suites designed for your companion's total wellness.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold text-base shadow-xl shadow-[var(--primary)]/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href="#services-section"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--heading)] hover:bg-[var(--background)] font-semibold text-base transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[var(--border)] max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--primary)] shrink-0" />
                  <span className="text-xs font-semibold text-[var(--heading)]">Certified Vets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[var(--primary)] shrink-0" />
                  <span className="text-xs font-semibold text-[var(--heading)]">24/7 ER Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[var(--primary)] shrink-0" />
                  <span className="text-xs font-semibold text-[var(--heading)]">Top Rated 4.9/5</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Showcase with Floating Glass Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] group">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy Dog and Owner" 
                  className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Certified Doctors */}
              <div className="absolute top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-panel shadow-xl border border-[var(--glass-border)] animate-bounce duration-1000">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[var(--heading)]">Certified Vets</span>
                  <span className="text-[10px] text-[var(--muted-text)] font-semibold">15+ Specialist Doctors</span>
                </div>
              </div>

              {/* Floating Badge 2: Happy Pets Counter */}
              <div className="absolute -bottom-6 -right-4 flex items-center gap-3.5 p-4 rounded-2xl glass-panel shadow-xl border border-[var(--glass-border)]">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                  <Star className="w-6 h-6 fill-current text-amber-400" />
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-[var(--heading)]">15,000+</span>
                  <span className="text-xs text-[var(--muted-text)] font-semibold">Happy Pets Treated</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STATISTICS */}
      <section className="py-12 bg-[var(--surface)] border-y border-[var(--border)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)]">15,000+</span>
              <p className="text-xs sm:text-sm font-semibold text-[var(--heading)] uppercase tracking-wider">Happy Pets</p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)]">18+</span>
              <p className="text-xs sm:text-sm font-semibold text-[var(--heading)] uppercase tracking-wider">Years Experience</p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)]">25+</span>
              <p className="text-xs sm:text-sm font-semibold text-[var(--heading)] uppercase tracking-wider">Certified Doctors</p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)]">100%</span>
              <p className="text-xs sm:text-sm font-semibold text-[var(--heading)] uppercase tracking-wider">Emergency Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section id="services-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">World-Class Care</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
            Comprehensive Pet Care Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted-text)]">
            From routine diagnostics to emergency trauma surgery and luxury pampering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--background)] text-[var(--muted-text)] border border-[var(--border)]">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between">
                <button
                  onClick={onOpenAppointment}
                  className="text-xs font-bold text-[var(--primary)] hover:underline flex items-center gap-1"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-[var(--surface)] border-y border-[var(--border)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Uncompromising Standards</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
              Why Discerning Pet Parents Choose AuraPet
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-[var(--background)] border border-[var(--border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">01</div>
              <h3 className="text-lg font-bold text-[var(--heading)]">Experienced Veterinarians</h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed">Board-certified specialists with decades of clinical and surgical expertise.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--background)] border border-[var(--border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">02</div>
              <h3 className="text-lg font-bold text-[var(--heading)]">Modern Digital Equipment</h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed">Low-radiation digital radiography, high-resolution ultrasound, and on-site lab.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--background)] border border-[var(--border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">03</div>
              <h3 className="text-lg font-bold text-[var(--heading)]">Stress-Free Environment</h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed">Separate cat & dog exam wings with quiet acoustic insulation and pheromone diffusers.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--background)] border border-[var(--border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">04</div>
              <h3 className="text-lg font-bold text-[var(--heading)]">24/7 Emergency Support</h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed">Round-the-clock emergency triage team always ready for critical care.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--background)] border border-[var(--border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">05</div>
              <h3 className="text-lg font-bold text-[var(--heading)]">Transparent Pricing</h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed">Clear estimate breakdowns prior to any treatment procedure with zero hidden fees.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--background)] border border-[var(--border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">06</div>
              <h3 className="text-lg font-bold text-[var(--heading)]">Personalized Treatment Plans</h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed">Customized healthcare roadmaps tailored to your pet's age, breed, and lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET OUR SPECIALISTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Medical Excellence</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
            Meet Our Veterinary Specialists
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted-text)]">
            Dedicated doctors committed to compassionate and evidence-based animal medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VETS_DATA.map((vet) => (
            <div key={vet.id} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={vet.image} 
                  alt={vet.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {vet.experience}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-[var(--heading)]">{vet.name}</h3>
                <p className="text-xs font-semibold text-[var(--primary)]">{vet.specialization}</p>
                <p className="text-xs text-[var(--muted-text)] line-clamp-2 leading-relaxed">{vet.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BEFORE & AFTER GROOMING SLIDER */}
      <BeforeAfterSlider />

      {/* 7. WELLNESS PACKAGES (PRICING) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Flexible Plans</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
            Pet Wellness Membership Plans
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted-text)]">
            Save up to 30% annually on routine healthcare and emergency treatment coverage.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] mt-6 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-[var(--primary)] text-white shadow-md' : 'text-[var(--muted-text)]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'annual' ? 'bg-[var(--primary)] text-white shadow-md' : 'text-[var(--muted-text)]'
              }`}
            >
              Annual Billing (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-[var(--surface)] border rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.popular 
                  ? 'border-[var(--primary)] shadow-2xl ring-2 ring-[var(--primary)]/20' 
                  : 'border-[var(--border)] shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-[10px] uppercase tracking-widest font-extrabold px-4 py-1 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[var(--heading)]">{pkg.name}</h3>
                <p className="text-xs text-[var(--muted-text)] mt-1">{pkg.description}</p>

                <div className="my-6">
                  <span className="text-4xl font-extrabold text-[var(--heading)]">
                    ${billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.annualPrice}
                  </span>
                  <span className="text-xs text-[var(--muted-text)]">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-[var(--border)]">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-[var(--body-text)]">
                      <CheckCircle className="w-4 h-4 text-[var(--primary)] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenAppointment}
                className={`w-full mt-8 py-3 rounded-full text-xs font-bold transition-all ${
                  pkg.popular 
                    ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-lg' 
                    : 'bg-[var(--background)] text-[var(--heading)] border border-[var(--border)] hover:bg-[var(--border)]'
                }`}
              >
                Enroll in {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. HAPPY MOMENTS GALLERY PREVIEW */}
      <section className="py-20 bg-[var(--surface)] border-y border-[var(--border)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Gallery Preview</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
              Happy Moments at AuraPet
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {GALLERY_DATA.slice(0, 6).map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedLightboxImg(item)}
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group border border-[var(--border)] shadow-sm"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">{item.category}</span>
                  <h4 className="text-sm font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedLightboxImg && (
        <div 
          onClick={() => setSelectedLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-3xl w-full bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--border)]">
            <img src={selectedLightboxImg.src} alt={selectedLightboxImg.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">{selectedLightboxImg.category}</span>
              <h3 className="text-xl font-bold text-[var(--heading)] mt-1">{selectedLightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* 9. TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Pet Parent Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
            Trusted by Thousands of Happy Owners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[var(--body-text)] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--heading)]">{t.name}</h4>
                  <p className="text-[10px] text-[var(--muted-text)]">{t.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="py-20 bg-[var(--surface)] border-y border-[var(--border)] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-[var(--heading)]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[var(--muted-text)] transition-transform ${isOpen ? 'rotate-180 text-[var(--primary)]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed border-t border-[var(--border)]/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-10 sm:p-16 text-white text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Book Your Pet's Visit Today
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Give your companion the gift of extraordinary veterinary healthcare, luxury grooming, and comfort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 shadow-xl transition-all"
              >
                Schedule Appointment
              </button>
              <a
                href="tel:18009997387"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <HeartPulse className="w-4 h-4 animate-pulse text-red-400" />
                <span>24/7 ER: (800) 999-PETS</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
