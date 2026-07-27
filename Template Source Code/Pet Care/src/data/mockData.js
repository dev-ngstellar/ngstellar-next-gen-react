export const SERVICES_DATA = [
  {
    id: 'vet-care',
    title: 'Veterinary Care',
    shortDesc: 'Comprehensive diagnostics, surgical procedures, and emergency medicine by certified specialists.',
    fullDesc: 'Our veterinary medical center offers state-of-the-art diagnostic technology, gentle preventative treatments, and advanced surgical procedures. We focus on low-stress exams to ensure your pet feels secure and loved.',
    icon: 'Stethoscope',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'State-of-the-art digital radiography & ultrasound',
      'Certified veterinary surgeons & anesthetists',
      'Gentle low-stress exam procedures',
      'Comprehensive in-house laboratory diagnostics'
    ],
    process: [
      { step: '01', title: 'Comprehensive Exam', desc: 'Thorough physical examination checking vital signs and wellness indicators.' },
      { step: '02', title: 'Diagnostic Screening', desc: 'Advanced bloodwork and imaging if detailed investigation is required.' },
      { step: '03', title: 'Tailored Treatment Plan', desc: 'Custom medical protocol developed collaboratively with pet owners.' }
    ]
  },
  {
    id: 'pet-grooming',
    title: 'Pet Grooming',
    shortDesc: 'Luxury spa baths, breed-specific styling, claw pedicures, and soothing fur treatments.',
    fullDesc: 'Pamper your furry companion with our premium grooming lounge. From coat conditioning treatments to precision styling, we make every pet look and feel like royalty.',
    icon: 'Scissors',
    badge: 'Luxury',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Organic hydro-surge bubble baths',
      'Hand blow-dry with coat fluffing',
      'Gentle ear cleansing & nail filing',
      'Hypoallergenic fur condition treatments'
    ],
    process: [
      { step: '01', title: 'Warm Hydro-Bath', desc: 'Deep cleaning with pH-balanced natural botanical shampoos.' },
      { step: '02', title: 'Precision Styling', desc: 'Breed standard or custom requested coat sculpting by master groomers.' },
      { step: '03', title: 'Finishing Touches', desc: 'Nail trim, ear care, and soothing scented mist.' }
    ]
  },
  {
    id: 'pet-boarding',
    title: 'Pet Boarding',
    shortDesc: '5-star climate-controlled suites, daily play parks, and 24/7 attentive supervision.',
    fullDesc: 'A resort-style home away from home. Our luxury suites feature comfortable orthopedic bedding, web-cam access for owners, and individual playtime sessions.',
    icon: 'Hotel',
    badge: '5-Star Resort',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Climate-controlled luxury suites with orthopedic beds',
      'Live HD webcam access for pet parents',
      'Multiple daily off-leash park play sessions',
      'On-site veterinary staff available 24/7'
    ],
    process: [
      { step: '01', title: 'Suite Check-In', desc: 'Personalized room setup with familiar bedding and feeding instructions.' },
      { step: '02', title: 'Daily Play & Pampering', desc: 'Scheduled exercise, social games, and cozy relaxation breaks.' },
      { step: '03', title: 'Pawsome Departure', desc: 'Paws-up report card and departure bath option.' }
    ]
  },
  {
    id: 'dog-walking',
    title: 'Dog Walking & Fitness',
    shortDesc: 'Energetic private walks, outdoor adventure sessions, and GPS track reports.',
    fullDesc: 'Keep your dog active, healthy, and energized with customized walking programs tailored to their age, stamina, and play preferences.',
    icon: 'Footprints',
    badge: 'Active',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'GPS live route tracking & photo updates',
      'One-on-one dedicated professional walker',
      'Fresh hydration and paw cleanup post-walk',
      'Customized pace according to dog fitness level'
    ],
    process: [
      { step: '01', title: 'Pick-Up & Harness Check', desc: 'Safety gear inspection and initial greeting.' },
      { step: '02', title: 'Scenic Trail Walk', desc: 'Stimulating neighborhood or park route with positive reinforcement.' },
      { step: '03', title: 'Post-Walk Refresh', desc: 'Water refill, paw wipe-down, and photo report sent to owner.' }
    ]
  },
  {
    id: 'vaccination',
    title: 'Vaccination & Preventative',
    shortDesc: 'Core vaccines, parasite protection, and customized wellness immunization schedules.',
    fullDesc: 'Protect your beloved pets from dangerous diseases with safe, gentle, and timely vaccination programs supervised by experienced doctors.',
    icon: 'ShieldCheck',
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Tailored core & non-core immunization schedules',
      'Titer testing to avoid unnecessary re-vaccination',
      'Comprehensive flea, tick & heartworm prevention',
      'Digital vaccine passport & automated reminders'
    ],
    process: [
      { step: '01', title: 'Health Assessment', desc: 'Pre-vaccine physical examination ensuring pet readiness.' },
      { step: '02', title: 'Gentle Administration', desc: 'Pain-free micro-needle injection with calm distraction technique.' },
      { step: '03', title: 'Digital Certificate', desc: 'Instant update to your digital pet health record.' }
    ]
  },
  {
    id: 'pet-spa',
    title: 'Pet Spa & Therapy',
    shortDesc: 'Aromatherapy hydro-baths, blueberry facial cleanses, and paw massage therapy.',
    fullDesc: 'Rejuvenate your companion with our signature therapeutic spa treatments designed to soothe sore muscles, moisturize coat skin, and reduce anxiety.',
    icon: 'Sparkles',
    badge: 'Wellness',
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Soothing essential oil aromatherapy sessions',
      'Blueberry tear-stain facial treatments',
      'Deep massage therapy for joint mobility',
      'Paw-pad balm moisturizing treatment'
    ],
    process: [
      { step: '01', title: 'Aromatherapy Soak', desc: 'Warm calming herbal bath tailored for sensitive skin.' },
      { step: '02', title: 'Gentle Body Massage', desc: 'Muscle-soothing massage targeting pressure points.' },
      { step: '03', title: 'Skin & Paw Polish', desc: 'Moisturizing serum application for paw pads and snout.' }
    ]
  },
  {
    id: 'dental-care',
    title: 'Dental Care & Surgery',
    shortDesc: 'Ultrasonic scaling, teeth polishing, digital dental X-rays, and oral surgery.',
    fullDesc: 'Oral health directly impacts overall longevity. Our dental team provides thorough cleanings under safe monitoring to eliminate plaque and prevent periodontal disease.',
    icon: 'Smile',
    badge: 'Doctor Recommended',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'High-precision ultrasonic plaque scaling',
      'Full-mouth digital intra-oral X-rays',
      'Fluoride polish treatment for enamel protection',
      'Pain-free oral surgical extractions when necessary'
    ],
    process: [
      { step: '01', title: 'Oral Inspection', desc: 'Visual grading of dental tartar and gum inflammation.' },
      { step: '02', title: 'Ultrasonic Scaling', desc: 'Plaque removal above and below the gumline.' },
      { step: '03', title: 'Enamel Polishing', desc: 'Smoothing teeth surfaces to slow future plaque buildup.' }
    ]
  },
  {
    id: 'emergency-care',
    title: '24/7 Emergency Care',
    shortDesc: 'Immediate trauma response, ICU critical care, and round-the-clock emergency triage.',
    fullDesc: 'When seconds count, our emergency team is ready 24 hours a day, 365 days a year with advanced life support, oxygen therapy, and emergency surgery capabilities.',
    icon: 'HeartPulse',
    badge: '24/7 Ready',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Immediate walk-in priority triage',
      'Fully equipped Intensive Care Unit (ICU)',
      'In-house blood bank & continuous oxygen monitoring',
      'Dedicated emergency veterinary trauma team'
    ],
    process: [
      { step: '01', title: 'Immediate Triage', desc: 'Instant stabilization and vital sign assessment upon arrival.' },
      { step: '02', title: 'Emergency Diagnostics', desc: 'Rapid blood panels and point-of-care ultrasound.' },
      { step: '03', title: 'Critical Monitoring', desc: 'Continuous 24/7 ICU oversight until recovery.' }
    ]
  },
  {
    id: 'nutrition-consultation',
    title: 'Nutrition Consultation',
    shortDesc: 'Customized dietary planning, weight management programs, and allergy management.',
    fullDesc: 'Unlock your pet’s optimal energy and vitality through customized science-based nutritional plans crafted by veterinary clinical nutrition specialists.',
    icon: 'Apple',
    badge: 'Custom Plan',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Custom caloric target calculations',
      'Food sensitivity & elimination diet trials',
      'Targeted supplement integration',
      'Monthly weigh-ins and progress tracking'
    ],
    process: [
      { step: '01', title: 'Dietary History Audit', desc: 'Review of current food brands, treats, and lifestyle.' },
      { step: '02', title: 'Body Condition Scoring', desc: 'Accurate muscle and fat composition evaluation.' },
      { step: '03', title: 'Custom Meal Blueprint', desc: 'Step-by-step nutrition guide with brand recommendations.' }
    ]
  }
];

export const VETS_DATA = [
  {
    id: 'dr-sarah',
    name: 'Dr. Sarah Jenkins, DVM',
    role: 'Chief Veterinary Officer',
    specialization: 'Internal Medicine & Cardiology',
    experience: '14+ Years Experience',
    bio: 'Graduate of Cornell University College of Veterinary Medicine with a passion for compassionate pet care.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    social: { linkedin: '#', twitter: '#', email: 'sarah@ngstellarpet.com' }
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Vance, DVM',
    role: 'Head of Surgery',
    specialization: 'Orthopedic & Soft Tissue Surgery',
    experience: '11+ Years Experience',
    bio: 'Specialist in minimally invasive laparoscopy and advanced knee reconstruction for active dogs.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    social: { linkedin: '#', twitter: '#', email: 'marcus@ngstellarpet.com' }
  },
  {
    id: 'dr-elena',
    name: 'Dr. Elena Rostova, DVM',
    role: 'Pet Wellness Specialist',
    specialization: 'Dermatology & Allergy Care',
    experience: '8+ Years Experience',
    bio: 'Focuses on holistic skin therapies, chronic allergy relief, and senior pet mobility preservation.',
    image: 'https://images.unsplash.com/photo-1594824813566-88855ce78347?auto=format&fit=crop&w=800&q=80',
    social: { linkedin: '#', twitter: '#', email: 'elena@ngstellarpet.com' }
  },
  {
    id: 'dr-david',
    name: 'Dr. David Chen, DVM',
    role: 'Emergency Triage Lead',
    specialization: 'Critical Care & Emergency Medicine',
    experience: '10+ Years Experience',
    bio: 'Dedicated ER practitioner trained in rapid trauma intervention and intensive care management.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    social: { linkedin: '#', twitter: '#', email: 'david@ngstellarpet.com' }
  }
];

export const PRICING_PACKAGES = [
  {
    name: 'Basic Care',
    monthlyPrice: 39,
    annualPrice: 390,
    description: 'Essential routine preventative care for healthy adult pets.',
    popular: false,
    features: [
      'Annual Physical Wellness Exam',
      'Core Vaccines (Rabies, DHPP / FVRCP)',
      'Basic Blood & Fecal Screening',
      '10% Off Grooming Sessions',
      'Digital Health Record Portal'
    ]
  },
  {
    name: 'Premium Care',
    monthlyPrice: 79,
    annualPrice: 790,
    description: 'Our most comprehensive plan for active, pampered pets.',
    popular: true,
    features: [
      '2 Comprehensive Annual Exams',
      'All Core & Non-Core Vaccines',
      'Full Comprehensive Blood Panel',
      'Dental Cleaning & Polishing',
      '20% Off Boarding & Spa',
      'Unlimited Tele-Vet Consultation Chat',
      'Priority Emergency Triage'
    ]
  },
  {
    name: 'Senior Pet Plan',
    monthlyPrice: 99,
    annualPrice: 990,
    description: 'Specialized diagnostic monitoring and joint therapy for golden seniors.',
    popular: false,
    features: [
      'Quarterly Senior Wellness Exams',
      'Bi-Annual Digital Radiography & Ultrasound',
      'Joint Mobility & Laser Therapy Session',
      'Comprehensive Cardiac Screening',
      'Prescription Diet Discount (15%)',
      'Direct Doctor Cell Phone Access'
    ]
  }
];

export const GALLERY_DATA = [
  { id: 1, title: 'Golden Retriever Spa Bath', category: 'Pet Spa', type: 'image', src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Post Grooming Poodle Style', category: 'Before & After', type: 'image', src: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Curious Bengal Cat Checkup', category: 'Cats', type: 'image', src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Rescued Bunny Health Exam', category: 'Rabbits', type: 'image', src: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Happy Park Playtime', category: 'Happy Moments', type: 'image', src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Vibrant Macaw Feather Check', category: 'Birds', type: 'image', src: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Husky Teeth Cleaning Procedure', category: 'Dogs', type: 'image', src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Fluffy Pomeranian Makeover', category: 'Before & After', type: 'image', src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Hydration Aromatherapy Spa', category: 'Pet Spa', type: 'image', src: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80' }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Eleanor Vance',
    pet: 'Owner of Milo (Golden Retriever)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'The level of care and sophistication at this clinic is unmatched. Dr. Sarah handled Milo’s surgery with such precision and empathy that recovery was effortless.'
  },
  {
    id: 2,
    name: 'Jonathan Sterling',
    pet: 'Owner of Oliver & Luna (Cats)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'From the glassmorphism aesthetic of their hospital facility to their transparent digital health portal, everything feels like Apple-level quality for pets!'
  },
  {
    id: 3,
    name: 'Sophia Patel',
    pet: 'Owner of Winston (Frenchie)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    quote: 'The grooming spa transformed Winston! The before & after comparison was astounding. Highly recommend their annual wellness subscription.'
  }
];

export const FAQS_DATA = [
  {
    question: 'How do I book an emergency appointment outside normal hours?',
    answer: 'Our 24/7 Emergency Center is always staffed. You can call our emergency direct line at (800) 999-PETS or use the floating red emergency button on our website for instant priority triage.'
  },
  {
    question: 'What vaccinations does my pet need before staying in pet boarding?',
    answer: 'For dogs, we require Rabies, DHPP, and Bordetella vaccines within the past 12 months. For cats, Rabies and FVRCP are required to maintain a disease-free resort environment.'
  },
  {
    question: 'Can I monitor my pet while they are in boarding or spa treatment?',
    answer: 'Yes! All luxury suite guests receive private HD webcam login access, allowing pet parents to view live streams from any desktop or mobile device.'
  },
  {
    question: 'Are payment installment plans available for major surgeries?',
    answer: 'Absolutely. We offer customized wellness packages as well as flexible 0% APR financing options through CareCredit and Scratchpay.'
  },
  {
    question: 'What makes your grooming spa hypoallergenic?',
    answer: 'We exclusively use sulfate-free, natural organic botanical shampoos free of artificial dyes or harsh fragrances, designed specifically for sensitive pet skin.'
  }
];
