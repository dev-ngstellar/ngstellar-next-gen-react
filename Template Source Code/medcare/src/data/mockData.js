// Professional Healthcare Mock Data for MedCare

export const servicesData = [
  {
    id: "cardio",
    name: "Cardiology",
    iconName: "Heart",
    shortDescription: "Advanced cardiovascular diagnostic tests, heart therapies, and critical bypass surgical solutions.",
    description: "Our Cardiology Department is staffed with world-renowned specialists utilizing state-of-the-art non-invasive diagnostics, catheterization labs, and robotic-assisted surgeries to manage complex cardiovascular conditions.",
    benefits: [
      "24/7 Primary Angioplasty services",
      "Advanced electrophysiology mapping",
      "Non-invasive stress testing & 3D Echo",
      "Bespoke cardiac rehabilitation programs"
    ],
    image: "https://images.unsplash.com/photo-1628178144541-2334833c84e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "neuro",
    name: "Neurology",
    iconName: "Brain",
    shortDescription: "Specialized diagnostics and surgical interventions for complex brain and spinal cord conditions.",
    description: "We offer comprehensive therapeutic management for strokes, epilepsy, Parkinson's disease, and multiple sclerosis. Our neurosurgery unit excels in micro-neurosurgical procedures and spinal reconstructions.",
    benefits: [
      "Dedicated Acute Stroke unit",
      "Intramural video-EEG monitoring",
      "Minimally invasive spinal surgeries",
      "Therapeutic neurology rehabilitation panels"
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ortho",
    name: "Orthopedics",
    iconName: "Activity",
    shortDescription: "Comprehensive joint replacement, sports injury therapies, and skeletal trauma reconstructive surgeries.",
    description: "From microscopic arthroscopies to complex total hip and knee replacements, our orthopedic surgeons help patients regain mobile freedom using advanced materials and computer-assisted alignment.",
    benefits: [
      "Total Hip & Knee Arthroplasties",
      "Minimally invasive arthroscopic repairs",
      "Pediatric orthopedic corrective surgeries",
      "Fully integrated physiotherapy gyms"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pedia",
    name: "Pediatrics",
    iconName: "Baby",
    shortDescription: "Compassionate, gentle healthcare services for infants, young children, and adolescents.",
    description: "Our child-friendly pediatric ward offers comprehensive immunizations, developmental assessments, emergency care, and specialty services, ensuring a warm, supportive atmosphere for families.",
    benefits: [
      "Dedicated Pediatric Intensive Care Unit (PICU)",
      "24/7 Emergency pediatric doctors",
      "Developmental delay diagnostic panels",
      "Newborn screening and custom diet guidance"
    ],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dental",
    name: "Dental Care",
    iconName: "Smile",
    shortDescription: "Professional cosmetic dentistry, root canal treatments, implants, and general preventive hygiene.",
    description: "We provide complete dental health diagnostics, from simple teeth cleaning and whitening to advanced ceramic crowns, dental implants, and orthognathic corrective jaw surgeries.",
    benefits: [
      "Premium titanium dental implant placement",
      "Painless root canal treatment (RCT) procedures",
      "Digital panoramic dental X-rays",
      "Cosmetic teeth aligning (Clear Aligners)"
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gen-med",
    name: "General Medicine",
    iconName: "Stethoscope",
    shortDescription: "Complete preventive health checkups, chronic pain management, and primary outpatient consultations.",
    description: "Our general practitioners handle everyday health consultations, chronic disease management (diabetes, hypertension), preventive vaccinations, and corporate medical health packages.",
    benefits: [
      "Comprehensive annual health screenings",
      "Chronic lifestyle disease management",
      "Adult vaccination & travel medicine desks",
      "Direct laboratory and pharmacy sync"
    ],
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=600&q=80"
  }
];

export const doctorsData = [
  {
    id: 1,
    name: "Dr. Elena Rostova",
    specialization: "Cardiology",
    experience: "15 Years",
    availability: "Mon, Wed, Fri (09:00 - 13:00)",
    email: "elena.rostova@medcare.com",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Fellow of the American College of Cardiology. Specialized in non-invasive diagnosis and cardiac failures."
  },
  {
    id: 2,
    name: "Dr. Marcus Vance",
    specialization: "Neurology",
    experience: "18 Years",
    availability: "Tue, Thu (10:00 - 15:00)",
    email: "marcus.vance@medcare.com",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Board-certified Neurosurgeon specializing in stroke interventions, spinal reconstructions, and cerebral tumor excisions."
  },
  {
    id: 3,
    name: "Dr. Sarah Jenkins",
    specialization: "Orthopedics",
    experience: "12 Years",
    availability: "Wed, Fri (11:00 - 16:00)",
    email: "sarah.jenkins@medcare.com",
    photo: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Expert in sports medicine, micro-arthroscopic joint repairs, and complex ligament reconstruction."
  },
  {
    id: 4,
    name: "Dr. Ryan Patel",
    specialization: "Pediatrics",
    experience: "14 Years",
    availability: "Mon, Tue, Thu (08:30 - 12:30)",
    email: "ryan.patel@medcare.com",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Passionate pediatrician focused on early childhood developmental milestones and pediatric critical care medicine."
  },
  {
    id: 5,
    name: "Dr. Maya Lin",
    specialization: "Dental Care",
    experience: "10 Years",
    availability: "Mon, Wed (09:30 - 16:00)",
    email: "maya.lin@medcare.com",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Prosthodontist specializing in modern titanium implant placements, crown fabrications, and cosmetic smile designs."
  },
  {
    id: 6,
    name: "Dr. Jameson Blake",
    specialization: "General Medicine",
    experience: "16 Years",
    availability: "Mon to Fri (09:00 - 17:00)",
    email: "jameson.blake@medcare.com",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Primary care physician managing chronic endocrine conditions (diabetes, thyroid panel) and preventive diagnostic checks."
  },
  {
    id: 7,
    name: "Dr. Allison Cooper",
    specialization: "Cardiology",
    experience: "11 Years",
    availability: "Tue, Thu (13:00 - 17:00)",
    email: "allison.cooper@medcare.com",
    photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Interventional cardiologist expert in radial access angiograms, pacemaker placements, and coronary stenting."
  },
  {
    id: 8,
    name: "Dr. David Chen",
    specialization: "Neurology",
    experience: "13 Years",
    availability: "Wed, Fri (09:00 - 13:00)",
    email: "david.chen@medcare.com",
    photo: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Dedicated neurologist expert in managing complex epilepsy cases, chronic migraines, and cognitive Alzheimer's assessments."
  },
  {
    id: 9,
    name: "Dr. Chloe Patel",
    specialization: "Pediatrics",
    experience: "9 Years",
    availability: "Tue, Thu, Fri (10:00 - 14:00)",
    email: "chloe.patel@medcare.com",
    photo: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Providing comprehensive pediatric vaccinations, neonatal care, and organic pediatric allergy management."
  },
  {
    id: 10,
    name: "Dr. Arthur Pendelton",
    specialization: "Orthopedics",
    experience: "22 Years",
    availability: "Mon, Tue (08:00 - 12:00)",
    email: "arthur.pendelton@medcare.com",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Senior orthopedic surgeon specialized in computer-guided total knee replacement, pediatric bone abnormalities, and spine alignment."
  },
  {
    id: 11,
    name: "Dr. Sophie Moreau",
    specialization: "Dental Care",
    experience: "8 Years",
    availability: "Thu, Fri (13:00 - 18:00)",
    email: "sophie.moreau@medcare.com",
    photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Orthodontist focusing on corrective ceramic braces, clear aligner systems, and pediatric dental hygiene education."
  },
  {
    id: 12,
    name: "Dr. Franklin Pierce",
    specialization: "General Medicine",
    experience: "20 Years",
    availability: "Sat, Sun (09:00 - 13:00)",
    email: "franklin.pierce@medcare.com",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Providing primary consultation, diagnostic oversight, preventive counseling, and coordinate emergency triages."
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Jonathan Vance",
    role: "Cardiology Patient",
    text: "The speed with which MedCare's emergency unit handled my father's cardiac check-in saved his life. Dr. Elena Rostova explained the entire angioplasty timeline with immense care and reassurance.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Mother of 3-year-old",
    text: "Dr. Ryan Patel is the most patient pediatrician we have ever met. The clinic was warm and pediatric-friendly, putting my anxious toddler completely at ease during his vaccines.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "Marcus Aurelius",
    role: "Orthopedic Patient",
    text: "After tearing my ACL in a local match, I worried my running days were over. Dr. Sarah Jenkins performed a flawless arthroscopic surgery, and the physiotherapy panel here has me jogging again in 3 months.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "Eleanor Vance",
    role: "Dental Patient",
    text: "I was extremely self-conscious about my broken tooth. Dr. Maya Lin designed a ceramic crown that looks and feels completely natural. The dental hygiene team is absolute top-tier.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 5,
    name: "Dr. Ryan Blake",
    role: "General Checkup Patient",
    text: "As a health professional myself, I appreciate clean diagnostic protocols. The checkup panel at MedCare is structured, quick, and provides fully comprehensive reports. The labs are truly state-of-the-art.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 6,
    name: "Chloe Chen",
    role: "Neurology Outpatient",
    text: "Managing chronic migraines was exhausting until I consulted Dr. David Chen. His diagnostic approach was structured, adjusting my diet and therapy to give me my quality of life back.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const statisticsData = [
  { id: "patients", label: "Recovered Outpatients", value: "25,000+" },
  { id: "doctors", label: "Specialists & Surgeons", value: "150+" },
  { id: "beds", label: "Advanced Care Beds", value: "400+" },
  { id: "uptime", label: "Emergency Response Uptime", value: "99.9%" }
];

export const insurancePartners = [
  { name: "BlueCross BlueShield", logoText: "BlueCross" },
  { name: "Aetna Health", logoText: "aetna" },
  { name: "UnitedHealthcare", logoText: "UnitedHealth" },
  { name: "Cigna International", logoText: "Cigna" },
  { name: "Kaiser Permanente", logoText: "Kaiser" }
];
