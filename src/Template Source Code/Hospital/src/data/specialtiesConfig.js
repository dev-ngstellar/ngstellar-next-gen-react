import { 
  FaHeartbeat, FaBrain, FaStethoscope, FaTooth, FaBaby, FaEye, FaFlask, 
  FaProcedures, FaAmbulance, FaAward, FaUserMd, FaMicroscope, FaShieldAlt,
  FaFileMedical, FaRegHospital, FaXRay, FaDna, FaSyringe
} from 'react-icons/fa';

export const specialtiesConfig = {
  multispeciality: {
    id: 'multispeciality',
    name: 'Stellar Multispeciality Hospital',
    type: 'Multispeciality Hospital',
    colors: {
      primary: '#0F4C81',       // Deep Classic Blue
      primaryLight: '#1d6fae',
      primaryDark: '#0b375d',
      secondary: '#00B4D8',     // Vibrant Sky Cyan
      secondaryLight: '#33c3e0',
      secondaryDark: '#0090ad',
      accent: '#10B981',        // Emerald Green
      accentLight: '#34d399',
      accentDark: '#059669',
      light: '#F8FAFC',
      dark: '#0F172A'
    },
    hero: {
      title: 'Advanced Healthcare for a Healthier Tomorrow',
      subtitle: 'Leader in Multispeciality Care',
      description: 'Providing world-class medical care with experienced doctors, cutting-edge surgical technology, and compassionate treatment across 15+ specialized departments.',
      img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'Specialists', val: '25+', color: 'from-blue-500 to-indigo-600' },
        { label: 'Departments', val: '15+', color: 'from-cyan-400 to-teal-500' },
        { label: 'Patients Served', val: '50,000+', color: 'from-emerald-400 to-green-600' },
        { label: 'Emergency', val: '24/7', color: 'from-rose-500 to-pink-600' }
      ]
    },
    emergencyNumber: '+91 9876543210',
    email: 'contact@stellarhospital.com',
    address: 'Stellar Medical Towers, Sector 62, Golf Course Road, Gurgaon, India',
    hours: {
      weekdays: '8:00 AM - 8:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      emergency: '24/7 Available'
    },
    trustBadges: [
      { text: 'NABH Accredited', icon: 'FaAward' },
      { text: 'Experienced Specialists', icon: 'FaUserMd' },
      { text: '24/7 Trauma Care', icon: 'FaAmbulance' },
      { text: 'All Insurances Accepted', icon: 'FaShieldAlt' },
      { text: 'Advanced Robotic Tech', icon: 'FaMicroscope' }
    ],
    services: [
      { id: 'cardiology', title: 'Cardiology', desc: 'Comprehensive heart care, interventional cardiology, and bypass surgery from leading cardiologists.', icon: 'FaHeartbeat' },
      { id: 'neurology', title: 'Neurology & Neurosurgery', desc: 'Expert treatment for stroke, epilepsy, spinal disorders, and complex neuro-surgeries.', icon: 'FaBrain' },
      { id: 'orthopedics', title: 'Orthopedics & Joint Replacements', desc: 'Advanced joint replacement surgeries, arthroscopy, and trauma fracture rehabilitation.', icon: 'FaProcedures' },
      { id: 'pediatrics', title: 'Pediatrics & Neonatology', desc: 'Specialized intensive care (NICU) and compassionate pediatric medical services.', icon: 'FaBaby' },
      { id: 'gynecology', title: 'Gynecology & Obstetrics', desc: 'Comprehensive maternity packages, painless deliveries, and advanced laparoscopic surgeries.', icon: 'FaStethoscope' },
      { id: 'dermatology', title: 'Dermatology & Cosmetology', desc: 'Advanced laser treatments, medical dermatology, skin rejuvenation, and aesthetics.', icon: 'FaSyringe' },
      { id: 'ophthalmology', title: 'Ophthalmology', desc: 'Laser vision correction, micro-incision cataract surgeries, and retina care services.', icon: 'FaEye' },
      { id: 'general-med', title: 'General Medicine', desc: 'Comprehensive health checks, diabetic care, lifestyle disease management, and internal medicine.', icon: 'FaFileMedical' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
      description: 'At Stellar Hospital, we combine world-class medical talents with standard infrastructures to offer comprehensive healthcare with human empathy.',
      features: [
        { title: 'Expert Doctors', desc: 'Board-certified clinical specialists with decades of experience.' },
        { title: 'Modern Technology', desc: 'Equipped with 3T MRI, 128-Slice CT, and Robotic surgical units.' },
        { title: 'Personalized Care', desc: 'Patient-centric recovery plans custom tailored for every individual.' },
        { title: 'Affordable Treatment', desc: 'Transparent billing packages and multi-insurance tie-ups.' },
        { title: 'Emergency Support', desc: 'Dedicated triage team, fully equipped critical care ambulances.' },
        { title: 'High Success Rate', desc: 'Standard clinical outcome tracking and patient satisfaction.' }
      ]
    },
    doctors: [
      { name: 'Dr. Ramesh K. Sharma', spec: 'Senior Cardiologist', exp: '18 Years', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dr. Sarah H. Jenkins', spec: 'Senior Neurologist', exp: '14 Years', img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dr. Vikram Malhotra', spec: 'Orthopedics Specialist', exp: '16 Years', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dr. Ananya Ray', spec: 'Pediatric Specialist', exp: '11 Years', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '50,000+', label: 'Patients Served' },
      { val: '25+', label: 'Expert Doctors' },
      { val: '15+', label: 'Specialized Departments' },
      { val: '10+', label: 'Years of Excellence' }
    ],
    facilities: [
      { title: 'Advanced MRI Scan', desc: 'Silent 3 Tesla MRI scan ensuring high patient comfort and imaging precision.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80' },
      { title: 'Ultra-Fast CT Scan', desc: '128-Slice rapid CT scan with ultra-low radiation dosage features.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80' },
      { title: '24/7 Digital Lab', desc: 'Fully automated diagnostic lab offering fast, precise biochemistry results.', img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=500&q=80' },
      { title: 'In-House Pharmacy', desc: 'Fully stacked round-the-clock pharmacy with emergency medications.', img: 'https://images.unsplash.com/photo-1607619056574-7b8d304b3b86?auto=format&fit=crop&w=500&q=80' },
      { title: 'Advanced ICUs', desc: 'Intensive Care Units with dedicated bedside monitoring and ventilators.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80' },
      { title: 'Trauma & Emergency', desc: 'Level 1 trauma and emergency care equipped with critical action staff.', img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Rajesh G. Verma', role: 'Heart Surgery Patient', rating: 5, text: 'The surgical team and the ICU care at Stellar Hospital were outstanding. They gave me a new lease on life with absolute warmth.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
      { name: 'Emily Henderson', role: 'Maternity Care', rating: 5, text: 'Fantastic experience during the birth of my daughter. The doctors were very comforting, and the nursing team was incredibly patient.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
      { name: 'Arjun Mehta', role: 'Orthopedic Patient', rating: 5, text: 'After my knee replacement, I started walking within two days. The advanced rehabilitation physiotherapy team did wonders.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'Preventing Cardiac Arrest: Life-saving Habits You Should Start Today', author: 'Dr. Ramesh Sharma', date: 'June 05, 2026', cat: 'Cardiology', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' },
      { title: 'Understanding Migraines: Trigger Mapping, Prevention, and Advanced Care', author: 'Dr. Sarah Jenkins', date: 'May 28, 2026', cat: 'Neurology', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80' },
      { title: 'The Ultimate Guide to Healthy Bones: Calcium, Exercise, and Posture Tips', author: 'Dr. Vikram Malhotra', date: 'May 15, 2026', cat: 'Orthopedics', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'How do I book an appointment with a specialist?', a: 'You can book appointments directly via our online form, click "Book Appointment" on our header, or call our 24/7 helpline.' },
      { q: 'What insurance providers are accepted?', a: 'We accept all major health insurance providers and corporate TPA networks. Please bring your health card at the time of admission for cashless claims processing.' },
      { q: 'Is there an emergency critical care transport?', a: 'Yes, we have a fleet of high-tech cardiac care ambulances equipped with ventilator support, defibrillators, and critical paramedics available 24/7.' }
    ]
  },
  dental: {
    id: 'dental',
    name: 'Aesthetic Dental Care Center',
    type: 'Dental Clinic',
    colors: {
      primary: '#0D9488',       // Teal
      primaryLight: '#0f766e',
      primaryDark: '#115e59',
      secondary: '#06B6D4',     // Cyan
      secondaryLight: '#22d3ee',
      secondaryDark: '#0891b2',
      accent: '#E11D48',        // Rose
      accentLight: '#fb7185',
      accentDark: '#be123c',
      light: '#F0FDFA',
      dark: '#111827'
    },
    hero: {
      title: 'Crafting Beautiful, Healthy Smiles Every Day',
      subtitle: 'Premium Dental Cosmetics & Surgery',
      description: 'Experience anxiety-free, state-of-the-art dental treatments. From root canals to digital smile design implants, our specialists ensure gentle, luxury care.',
      img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'Smile Restorations', val: '10,000+', color: 'from-teal-500 to-emerald-600' },
        { label: 'Modern Operatories', val: '6+', color: 'from-cyan-400 to-sky-500' },
        { label: 'Satisfaction Rate', val: '99.4%', color: 'from-rose-500 to-pink-600' },
        { label: 'Sedation Dentistry', val: 'Available', color: 'from-amber-400 to-orange-500' }
      ]
    },
    emergencyNumber: '+91 9876543211',
    email: 'info@aestheticdentalcare.com',
    address: 'Dental Suite 10, Medical Arcade, Golf Links, Gurgaon, India',
    hours: {
      weekdays: '9:00 AM - 7:00 PM',
      saturday: '9:00 AM - 3:00 PM',
      emergency: 'On-Call Emergency'
    },
    trustBadges: [
      { text: 'ADA Certified Clinic', icon: 'FaAward' },
      { text: 'Digital Smile Designers', icon: 'FaUserMd' },
      { text: 'Emergency Pain Clinic', icon: 'FaAmbulance' },
      { text: 'Zero-Interest EMI Options', icon: 'FaShieldAlt' },
      { text: 'Intraoral 3D Scanning', icon: 'FaMicroscope' }
    ],
    services: [
      { id: 'smile-designing', title: 'Digital Smile Design', desc: 'Custom aesthetic porcelain veneers and digital modeling for dynamic smile transformations.', icon: 'FaTooth' },
      { id: 'implants', title: 'Single-Day Dental Implants', desc: 'German-grade titanium dental implants for natural-looking teeth restorations in 24 hours.', icon: 'FaProcedures' },
      { id: 'invisalign', title: 'Invisalign® Clear Aligners', desc: 'Comfortable, virtually invisible orthodontic aligners custom printed for teens and adults.', icon: 'FaStethoscope' },
      { id: 'root-canal', title: 'Microscopic Root Canal', desc: 'Precision single-sitting root canal treatments assisted by high-resolution clinical microscopes.', icon: 'FaHeartbeat' },
      { id: 'pediatric-dental', title: 'Pediatric Dentistry', desc: 'Warm, fun dental environments and cavity prevention treatments for infants and growing kids.', icon: 'FaBaby' },
      { id: 'laser-dentistry', title: 'Pain-Free Laser Dentistry', desc: 'Bleeding-free gum correction and decay removal using advanced Erbium dental lasers.', icon: 'FaSyringe' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      description: 'We prioritize client comfort, modern pain-free methodologies, and unmatched cosmetic design precision to make dental visits a luxury experience.',
      features: [
        { title: 'Gentle Care Specialists', desc: 'Certified in dental anxiety management and sedation procedures.' },
        { title: 'Zero Radiation Imaging', desc: 'Equipped with digital intraoral sensors and ultra-low dose CBCT.' },
        { title: 'High Sterilization Standards', desc: 'Class B autoclave sterilization protocols backed by chemical monitors.' },
        { title: 'In-House Aesthetic Lab', desc: 'Custom ceramic crowns fabricated on-site for immediate match.' }
      ]
    },
    doctors: [
      { name: 'Dr. Nidhi Singhania', spec: 'Cosmetic Dentist & Smile Stylist', exp: '12 Years', img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dr. Kevin Mathews', spec: 'Senior Implantologist', exp: '15 Years', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '10,000+', label: 'Smiles Redesigned' },
      { val: '8+', label: 'Dental Specialists' },
      { val: '6+', label: 'Advanced Operatories' },
      { val: '15+', label: 'Awards Won' }
    ],
    facilities: [
      { title: '3D Intraoral Scanning', desc: 'Say goodbye to sticky impressions; we use high-speed 3D dental scanners.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80' },
      { title: 'CAD/CAM Dental Mill', desc: 'In-house ceramic crown milling machine producing precision prosthetics.', img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=500&q=80' },
      { title: 'Advanced Dental Lasers', desc: 'Soft tissue lasers for pain-free gum reshaping and disinfection.', img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9827?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Priya Chawla', role: 'Veneers Patient', rating: 5, text: 'My smile transformation was incredible. Dr. Nidhi custom designed the porcelain veneers, and the result is extremely natural!', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
      { name: 'Rohan Deshmukh', role: 'Dental Implant', rating: 5, text: 'I was terrified of implants, but the pain-free laser technology and mild sedation made the surgery extremely smooth.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'Veneers vs Aligners: Which Smile Enhancement is Right for You?', author: 'Dr. Nidhi Singhania', date: 'June 01, 2026', cat: 'Cosmetic', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' },
      { title: 'The Truth About Dental Implants: Lifespan, Procedure, and Maintenance', author: 'Dr. Kevin Mathews', date: 'May 20, 2026', cat: 'Implants', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'Is cosmetic smile designing painful?', a: 'Not at all. We use precision local anesthetics and soft-tissue lasers which minimize swelling, ensuring a quick and virtually painless recovery.' },
      { q: 'How long do dental implants last?', a: 'With proper dental hygiene and biannual check-ups, premium titanium and zirconia implants can last a lifetime.' }
    ]
  },
  ivf: {
    id: 'ivf',
    name: 'Genesis IVF & Fertility Center',
    type: 'IVF Center',
    colors: {
      primary: '#DB2777',       // Pink
      primaryLight: '#ec4899',
      primaryDark: '#be185d',
      secondary: '#F472B6',     // Light Pink
      secondaryLight: '#fbcfe8',
      secondaryDark: '#db2777',
      accent: '#6366F1',        // Indigo
      accentLight: '#818cf8',
      accentDark: '#4f46e5',
      light: '#FFF5F7',
      dark: '#1F2937'
    },
    hero: {
      title: 'Embracing Hope, Nurturing Miracles of Life',
      subtitle: 'Premier IVF & Reproductive Center',
      description: 'Ranked leading fertility clinic with a record-high IVF success rate. Guided by expert embryologists, genetic testing, and warm, compassionate care.',
      img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'IVF Success Rate', val: '78%', color: 'from-pink-500 to-rose-600' },
        { label: 'Healthy Babies Born', val: '12,000+', color: 'from-purple-500 to-indigo-600' },
        { label: 'Fertility Experts', val: '12+', color: 'from-sky-400 to-blue-500' },
        { label: 'Embryoscope Tech', val: 'Included', color: 'from-amber-400 to-yellow-500' }
      ]
    },
    emergencyNumber: '+91 9876543212',
    email: 'hope@genesisivf.com',
    address: 'Genesis Center, DLF Phase 5, Gurgaon, India',
    hours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      emergency: '24/7 Inpatient Support'
    },
    trustBadges: [
      { text: 'ISO 9001 Certified Lab', icon: 'FaAward' },
      { text: 'ICMR Registered IVF Center', icon: 'FaShieldAlt' },
      { text: 'Top Embryologists', icon: 'FaUserMd' },
      { text: 'Comprehensive Genetic Screening', icon: 'FaDna' }
    ],
    services: [
      { id: 'ivf-cycle', title: 'In Vitro Fertilization (IVF)', desc: 'Customized IVF cycles using advanced hormonal mapping and high-precision egg collection.', icon: 'FaBaby' },
      { id: 'icsi', title: 'ICSI Treatment', desc: 'Intracytoplasmic Sperm Injection for male factor infertility, conducted by senior specialists.', icon: 'FaSyringe' },
      { id: 'pgt', title: 'Genetic Screening (PGT-A/M)', desc: 'Pre-implantation Genetic Testing of embryos to avoid chromosomal diseases.', icon: 'FaDna' },
      { id: 'egg-freezing', title: 'Oocyte (Egg) Cryopreservation', desc: 'Premium vitrification freezing technology for preserving fertility and career planning.', icon: 'FaFlask' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=800&q=80',
      description: 'We understand that fertility is a deeply personal journey. We provide advanced reproductive science alongside compassionate emotional support.',
      features: [
        { title: 'Unmatched Embryo Science', desc: 'Incubators with real-time time-lapse cameras for embryo monitoring.' },
        { title: 'Genetic Lab Integration', desc: 'Screening for single-gene disorders and structural rearrangements.' },
        { title: 'Empathetic Counseling', desc: 'Dedicated patient welfare counselors helping you manage stress.' }
      ]
    },
    doctors: [
      { name: 'Dr. Sunita Deshpande', spec: 'Senior Fertility Specialist & OBGYN', exp: '20 Years', img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dr. Amit V. Khurana', spec: 'Chief Embryologist', exp: '14 Years', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '12,000+', label: 'Families Completed' },
      { val: '78%', label: 'Average Success Rate' },
      { val: '12+', label: 'Fertility Doctors' },
      { val: '20+', label: 'Years of Excellence' }
    ],
    facilities: [
      { title: 'Class 10,000 Cleanroom IVF Lab', desc: 'Ultrapure air filtration system protecting developing embryos from VOCs.', img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=500&q=80' },
      { title: 'Time-Lapse Embryoscope', desc: 'Allows embryologists to monitor embryo divisions without opening incubators.', img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9827?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Kiran and Sunil Roy', role: 'Parents of Twins', rating: 5, text: 'After 8 years of disappointment elsewhere, Dr. Sunita changed our world. The care was transparent and scientifically superior.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'Understanding IVF Success Rates: What Do the Percentages Actually Mean?', author: 'Dr. Sunita Deshpande', date: 'June 03, 2026', cat: 'Fertility', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'What is PGT genetic testing during IVF?', a: 'Pre-implantation Genetic Testing is a procedure where embryologists analyze cells from a blastocyst to check for genetic disorders before implantation, reducing miscarriage rates.' }
    ]
  },
  skin: {
    id: 'skin',
    name: 'DermaGlow Clinical Skin Clinic',
    type: 'Skin Clinic',
    colors: {
      primary: '#78350F',       // Gold/Amber
      primaryLight: '#b45309',
      primaryDark: '#451a03',
      secondary: '#D97706',     // Amber
      secondaryLight: '#fbbf24',
      secondaryDark: '#b45309',
      accent: '#EC4899',        // Rose
      accentLight: '#f472b6',
      accentDark: '#db2777',
      light: '#FFFBEB',
      dark: '#1E1B4B'
    },
    hero: {
      title: 'Flawless Science for Luminous, Healthy Skin',
      subtitle: 'Premium Dermatology & Medical Aesthetics',
      description: 'Restore your natural glow. We combine clinical dermatology diagnostics with premium aesthetic lasers to resolve acne, aging, and pigmentation concerns.',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'Aesthetic Procedures', val: '15,000+', color: 'from-amber-500 to-yellow-600' },
        { label: 'Laser Technologies', val: '10+', color: 'from-pink-500 to-rose-600' },
        { label: 'Patient Satisfaction', val: '99.1%', color: 'from-indigo-500 to-purple-600' },
        { label: 'FDA Approved Tech', val: '100%', color: 'from-emerald-500 to-green-600' }
      ]
    },
    emergencyNumber: '+91 9876543213',
    email: 'care@dermaglowskin.com',
    address: 'First Floor, Galleria Towers, Sector 28, Gurgaon, India',
    hours: {
      weekdays: '10:00 AM - 8:00 PM',
      saturday: '10:00 AM - 6:00 PM',
      emergency: 'Prior Booking Recommended'
    },
    trustBadges: [
      { text: 'Dermatologist Association Approved', icon: 'FaAward' },
      { text: 'US-FDA Approved Lasers', icon: 'FaShieldAlt' },
      { text: 'Certified Cosmetic Injectors', icon: 'FaUserMd' },
      { text: 'Advanced Skin Analysis systems', icon: 'FaMicroscope' }
    ],
    services: [
      { id: 'acne-scar', title: 'Acne Scar Subcision & Lasers', desc: 'Combining fractional CO2 lasers and micro-needling RF for rapid collagen remodeling and smooth skin.', icon: 'FaSyringe' },
      { id: 'anti-aging', title: 'Anti-Aging Botox & Fillers', desc: 'Custom, subtle injections by medical experts to restore volume and soften expression wrinkles.', icon: 'FaStethoscope' },
      { id: 'medical-facial', title: 'Medi-Facials & Peels', desc: 'Dermatologist-formulated skin treatments for targeted correction of pigmentation and dullness.', icon: 'FaFlask' },
      { id: 'pigment-laser', title: 'Tattoo & Pigment Laser', desc: 'Ultra-fast Q-Switched Nd:YAG lasers designed for pigment breakdown and tattoo removal.', icon: 'FaHeartbeat' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
      description: 'Your skin is unique. We don\'t believe in one-size-fits-all. Every treatment plan is custom made following high-magnification skin diagnostic scans.',
      features: [
        { title: 'Board-Certified Dermatologists', desc: 'All treatments are managed by medical doctors, not technicians.' },
        { title: 'No Down-time Aesthetics', desc: 'Advanced lasers that stimulate skin deep healing without outer skin peeling.' },
        { title: 'Post-Procedure Care Packages', desc: 'Complimentary soothing balms and custom sunscreen recommendations.' }
      ]
    },
    doctors: [
      { name: 'Dr. Meera Vasudevan', spec: 'Consultant Dermatologist & Trichologist', exp: '11 Years', img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '15,000+', label: 'Glowing Clients' },
      { val: '10+', label: 'US-FDA Approved Lasers' },
      { val: '11+', label: 'Years of Practice' },
      { val: '100%', label: 'Clinical Care' }
    ],
    facilities: [
      { title: 'VISIA Digital Skin Scanner', desc: 'Multi-spectral imaging scanner checking wrinkles, UV spots, and texture.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Sonal Sen', role: 'Acne Scar Program', rating: 5, text: 'Dr. Meera designed a 4-session laser program. The depth of my scars has reduced by 80%, restoring my confidence completely.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'The Science of Retinol: How to Introduce It to Your Night Skincare Routine', author: 'Dr. Meera Vasudevan', date: 'June 02, 2026', cat: 'Skincare', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'Is Botox painful and how long does it last?', a: 'We use ultra-fine imported needles and numbing creams. It feels like a quick pinprick. Results show in 3-7 days and last between 4 to 6 months.' }
    ]
  },
  eye: {
    id: 'eye',
    name: 'VisiClear Eye Hospital',
    type: 'Eye Hospital',
    colors: {
      primary: '#1E3A8A',       // Blue
      primaryLight: '#3b82f6',
      primaryDark: '#172554',
      secondary: '#10B981',     // Green
      secondaryLight: '#34d399',
      secondaryDark: '#047857',
      accent: '#F59E0B',        // Amber
      accentLight: '#fbbf24',
      accentDark: '#d97706',
      light: '#F0FDF4',
      dark: '#0F172A'
    },
    hero: {
      title: 'Restoring Vision, Illuminating Lives',
      subtitle: 'Premier Eye Care & Lasik Surgery',
      description: 'Ditch your glasses. Get blade-free Femto-LASIK, robotic cataract surgeries, and advanced glaucoma diagnostics from premium eye surgeons.',
      img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9827?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'LASIK Procedures', val: '20,000+', color: 'from-blue-600 to-indigo-600' },
        { label: 'Cataract Surgeries', val: '15,000+', color: 'from-emerald-500 to-green-600' },
        { label: 'Blade-Free Technology', val: '100%', color: 'from-amber-400 to-orange-500' },
        { label: 'Vision Recovery Time', val: '< 24 Hours', color: 'from-rose-500 to-pink-600' }
      ]
    },
    emergencyNumber: '+91 9876543214',
    email: 'vision@visicleareye.com',
    address: 'VisiClear Building, Sector 54, Suncity, Gurgaon, India',
    hours: {
      weekdays: '8:30 AM - 6:30 PM',
      saturday: '8:30 AM - 4:00 PM',
      emergency: '24/7 Eye Trauma'
    },
    trustBadges: [
      { text: 'NABH Accredited Eye Care', icon: 'FaAward' },
      { text: 'Contoura Vision Authorized', icon: 'FaShieldAlt' },
      { text: 'Experienced Ophthalmologists', icon: 'FaUserMd' },
      { text: 'Refractive Suite Technology', icon: 'FaMicroscope' }
    ],
    services: [
      { id: 'lasik', title: 'Blade-free Contoura LASIK', desc: 'Advanced refractive error correction using high-speed customized excimer lasers.', icon: 'FaEye' },
      { id: 'cataract', title: 'Robotic Femto-Cataract Surgery', desc: 'No-stitch micro-incision cataract surgery using premium multi-focal lens implants.', icon: 'FaProcedures' },
      { id: 'glaucoma', title: 'Glaucoma Management', desc: 'Early detection of ocular pressure, nerve fibers scans, and laser trabeculoplasty.', icon: 'FaStethoscope' },
      { id: 'pediatric-eye', title: 'Pediatric Ophthalmology', desc: 'Squint correction, lazy eye therapies, and visual screening for school children.', icon: 'FaBaby' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      description: 'We host a world-class optical suite equipped with Contoura vision, aiming to correct refractive power with personalized corneal topography maps.',
      features: [
        { title: 'Top Surgeons', desc: 'Surgical directors with fellowships from premium eye institutions.' },
        { title: 'Advanced Diagnostics', desc: 'Topography scanners and OCT scan checking retina layers.' },
        { title: 'Fast Healing LASIK', desc: 'Quick 10-minute procedures, visual recovery within a day.' }
      ]
    },
    doctors: [
      { name: 'Dr. Vivek Saxena', spec: 'Refractive & Cataract Surgeon', exp: '15 Years', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '35,000+', label: 'Patients Treated' },
      { val: '10+', label: 'Optometry Operatories' },
      { val: '15+', label: 'Years of Eye Care' },
      { val: '99.8%', label: 'Success Rate' }
    ],
    facilities: [
      { title: 'Contoura Vision Suite', desc: 'Customized refractive mapping correcting irregular corneal structures.', img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9827?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Sameer Jha', role: 'Contoura LASIK Patient', rating: 5, text: 'No glasses anymore! The Contoura procedure was completed within 10 minutes, and my vision became 6/6 by next morning.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'Screen Time and Dry Eyes: 5 Digital Eye Strain Prevention Hacks', author: 'Dr. Vivek Saxena', date: 'June 04, 2026', cat: 'Eye Care', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'What is the recovery time for Contoura LASIK?', a: 'Most patients return to light desk work and driving within 24 to 48 hours. Rubbing eyes and swimming should be avoided for 3 weeks.' }
    ]
  },
  diagnostic: {
    id: 'diagnostic',
    name: 'Precision Diagnostics Lab',
    type: 'Diagnostic Center',
    colors: {
      primary: '#1E293B',       // Slate
      primaryLight: '#475569',
      primaryDark: '#0f172a',
      secondary: '#4F46E5',     // Indigo
      secondaryLight: '#6366f1',
      secondaryDark: '#3730a3',
      accent: '#06B6D4',        // Cyan
      accentLight: '#22d3ee',
      accentDark: '#0891b2',
      light: '#F8FAFC',
      dark: '#030712'
    },
    hero: {
      title: 'Accurate Reports, Fast Results, Absolute Trust',
      subtitle: 'Premium Pathology & Advanced Radiology',
      description: 'Equipped with digital high-throughput laboratory analyzers and high-field imaging scanners. Offering home blood collection services.',
      img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'Diagnostic Tests Offered', val: '2,000+', color: 'from-slate-700 to-slate-900' },
        { label: 'Lab Processing Speed', val: 'Fully Auto', color: 'from-indigo-500 to-purple-600' },
        { label: 'Home Collection', val: '60 Min', color: 'from-cyan-500 to-teal-500' },
        { label: 'NABL Accredited', val: '100%', color: 'from-emerald-500 to-green-600' }
      ]
    },
    emergencyNumber: '+91 9876543215',
    email: 'book@precisionlabs.com',
    address: 'Precision Complex, MG Road, Sector 15, Gurgaon, India',
    hours: {
      weekdays: '7:00 AM - 9:00 PM',
      saturday: '7:00 AM - 6:00 PM',
      emergency: '24/7 Lab Operations'
    },
    trustBadges: [
      { text: 'NABL Accredited Lab', icon: 'FaAward' },
      { text: 'CAP Compliant Standards', icon: 'FaShieldAlt' },
      { text: 'Smart Barcoded Samples', icon: 'FaFlask' },
      { text: 'Automated Diagnostic Assays', icon: 'FaMicroscope' }
    ],
    services: [
      { id: 'pathology', title: 'Automated Pathology Assays', desc: 'Biochemistry, hematology, and immunology panels processed on Roche automated tracks.', icon: 'FaFlask' },
      { id: 'radiology', title: 'High-field Radiology', desc: 'Advanced 3T MRI, 128 Slice Low-Dose CT, and high-resolution digital X-rays.', icon: 'FaXRay' },
      { id: 'ultrasound', title: '3D/4D Color Doppler Ultrasound', desc: 'Precise pregnancy scans, organ screenings, and peripheral arterial studies.', icon: 'FaProcedures' },
      { id: 'cardiac-diag', title: 'Non-Invasive Cardiology Diags', desc: 'Digital ECGs, stress tests (TMT), and echocardiogram analyses.', icon: 'FaHeartbeat' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Accuracy is everything when it comes to diagnostics. Our lab utilizes dual checking pathways by senior pathologists to verify every abnormal report.',
      features: [
        { title: 'Roche Automated Systems', desc: 'Eliminates manual pipetting error, ensuring consistent chemical reading.' },
        { title: 'Free Home Collection', desc: 'Phlebotomists reach your home within an hour of booking, using cold-chain bags.' },
        { title: 'WhatsApp PDF Reports', desc: 'Get password-protected diagnostic PDF reports immediately as they are certified.' }
      ]
    },
    doctors: [
      { name: 'Dr. Alok Nath Sen', spec: 'Chief Consultant Pathologist', exp: '16 Years', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '1,00,000+', label: 'Tests Conducted' },
      { val: '2,000+', label: 'Test Types' },
      { val: '24/7', label: 'Lab Operations' },
      { val: '4.8/5', label: 'Google Rating' }
    ],
    facilities: [
      { title: 'Roche Cobas Lab Automation', desc: 'Zero manual contact sample analytical workflow.', img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Devendra K. Patil', role: 'Home Sample Booking Client', rating: 5, text: 'Phlebotomist arrived at 7 AM sharp, barcode labels were stuck on samples in front of me, and I got my thyroid report by 1 PM.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'How to Read Your Complete Blood Count (CBC) Report: A Patient’s Manual', author: 'Dr. Alok Nath Sen', date: 'May 30, 2026', cat: 'Pathology', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'How do I request home blood collection?', a: 'Simply book online via our form, select "Home Collection" service, or WhatsApp our team. A certified phlebotomist will contact you.' }
    ]
  },
  'medical-center': {
    id: 'medical-center',
    name: 'Stellar Integrated Medical Center',
    type: 'Medical Center',
    colors: {
      primary: '#0891B2',       // Cyan-600
      primaryLight: '#06b6d4',
      primaryDark: '#0e7490',
      secondary: '#4F46E5',     // Indigo
      secondaryLight: '#6366f1',
      secondaryDark: '#3730a3',
      accent: '#10B981',        // Emerald
      accentLight: '#34d399',
      accentDark: '#059669',
      light: '#ECFEFF',
      dark: '#0F172A'
    },
    hero: {
      title: 'Your Family’s Trustworthy Healthcare Home',
      subtitle: 'Integrated Primary Care & Urgent Care',
      description: 'Experience unified healthcare where GP consultation, specialist reviews, day-care procedures, diagnostics, and pharmacy are all under one premium roof.',
      img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
      floatingCards: [
        { label: 'GP & Specialist Consults', val: '15+', color: 'from-cyan-500 to-indigo-600' },
        { label: 'Walk-ins Welcomed', val: 'Yes', color: 'from-emerald-400 to-green-600' },
        { label: 'Lab & Pharmacy', val: 'In-House', color: 'from-amber-400 to-orange-500' },
        { label: 'Urgent Care Hours', val: '8 AM - 10 PM', color: 'from-rose-500 to-pink-600' }
      ]
    },
    emergencyNumber: '+91 9876543216',
    email: 'help@stellarmedcenter.com',
    address: 'Integrated Hub, Sector 14, Gurgaon, India',
    hours: {
      weekdays: '8:00 AM - 10:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      emergency: '8 AM - 10 PM Urgent Care'
    },
    trustBadges: [
      { text: 'Integrated Primary Care Accreditation', icon: 'FaAward' },
      { text: 'Walk-in Clinic Access', icon: 'FaAmbulance' },
      { text: 'Family Healthcare plans', icon: 'FaShieldAlt' },
      { text: 'Electronic Medical Records', icon: 'FaFileMedical' }
    ],
    services: [
      { id: 'gp', title: 'General & Family Medicine', desc: 'Daily general practitioner consultations, vaccine schedules, and chronic disease reviews.', icon: 'FaStethoscope' },
      { id: 'specialist-opd', title: 'Specialist OPD Consultations', desc: 'Visiting consultants for cardiology, gynecology, orthopedics, and pediatrics.', icon: 'FaUserMd' },
      { id: 'day-care', title: 'Day-Care Medical Procedures', desc: 'Minor surgical dressings, IV therapies, nebulization, and suture removals.', icon: 'FaProcedures' },
      { id: 'preventive', title: 'Preventive Health Screening', desc: 'Annual executive health check-ups customized by age and health factors.', icon: 'FaFlask' }
    ],
    whyChooseUs: {
      img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
      description: 'We eliminate the need to run to multiple buildings. Consult your doctor, get your blood tests drawn, and pick up your medicines in a single visit.',
      features: [
        { title: 'Electronic Health History', desc: 'Your medical files are logged digitally, accessible to any specialist you consult here.' },
        { title: 'Same-day Appointments', desc: 'Walk in or book online for immediate consultations, avoiding hospital queues.' },
        { title: 'Integrated Diagnostics', desc: 'Get lab and X-ray processing done instantly within the center.' }
      ]
    },
    doctors: [
      { name: 'Dr. Vivek H. Sen', spec: 'Lead General Practitioner', exp: '14 Years', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' }
    ],
    stats: [
      { val: '25,000+', label: 'Families Registered' },
      { val: '15+', label: 'Clinical Consultants' },
      { val: '200+', label: 'Daily Consultations' },
      { val: '10+', label: 'Years of Trust' }
    ],
    facilities: [
      { title: 'Integrated Diagnostics & Lab', desc: 'Digital lab and pathology assays processing sample lists quickly.', img: 'https://images.unsplash.com/photo-1579154769743-0a7e463a39f6?auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { name: 'Meenakshi Iyer', role: 'Registered Family Care Client', rating: 5, text: 'Having GP consultation and pharmacy in one place makes my elderly mother\'s routine checkups completely stress-free.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' }
    ],
    blogs: [
      { title: 'The Importance of Preventive Health Checkups: Catching Illness Early', author: 'Dr. Vivek H. Sen', date: 'June 01, 2026', cat: 'Preventive Care', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80' }
    ],
    faqs: [
      { q: 'Do you accept walk-ins without appointments?', a: 'Yes, our medical center accommodates walk-ins for urgent care needs like minor injuries, fever, and diagnostics, though pre-booking is advised to minimize wait times.' }
    ]
  }
};
