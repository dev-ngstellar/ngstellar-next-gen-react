// =========================================
// ALL SITE DATA - GymForge Template
// =========================================

export const siteConfig = {
  name: 'GymForge',
  tagline: 'Forge Your Legacy',
  phone: '+1 (555) 000-0000',
  email: 'info@gymforge.com',
  address: '123 Fitness Avenue, New York, NY 10001',
  hours: {
    weekdays: '5:00 AM – 11:00 PM',
    saturday: '6:00 AM – 10:00 PM',
    sunday: '7:00 AM – 8:00 PM',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Membership', path: '/membership' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const heroStats = [
  { value: '500+', label: 'Members' },
  { value: '10+', label: 'Expert Trainers' },
  { value: '24/7', label: 'Gym Access' },
];

export const marqueeItems = [
  'Strength Training',
  'CrossFit',
  'Fat Loss',
  'Bodybuilding',
  'Cardio',
  'Powerlifting',
  'Personal Training',
  'Functional Fitness',
  'HIIT',
  'Olympic Lifting',
  'Yoga',
  'Nutrition Coaching',
];

export const features = [
  {
    icon: 'Award',
    title: 'Certified Trainers',
    description: 'Our team of NASM & ACE certified trainers craft personalized programs tailored to your exact goals.',
  },
  {
    icon: 'Dumbbell',
    title: 'Modern Equipment',
    description: 'State-of-the-art machines, free weights, and recovery tools sourced from top global brands.',
  },
  {
    icon: 'Salad',
    title: 'Nutrition Plans',
    description: 'Custom meal plans and macro tracking designed by certified nutritionists for maximum results.',
  },
  {
    icon: 'Users',
    title: 'Personal Coaching',
    description: 'One-on-one coaching sessions that keep you accountable and accelerate your transformation.',
  },
  {
    icon: 'Clock',
    title: 'Flexible Timings',
    description: 'Open 24/7 with group classes from 6 AM to 10 PM — fit training around your schedule.',
  },
  {
    icon: 'Heart',
    title: 'Community Support',
    description: 'Join a vibrant community of motivated members who push each other to achieve greatness.',
  },
];

export const programs = [
  {
    id: 1,
    title: 'Weight Loss',
    slug: 'weight-loss',
    category: 'Cardio & Conditioning',
    duration: '8 Weeks',
    level: 'Beginner',
    sessions: '4x / Week',
    description: 'A science-backed fat-burning program combining HIIT, strength circuits, and nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    color: '#ff5a1f',
  },
  {
    id: 2,
    title: 'Muscle Gain',
    slug: 'muscle-gain',
    category: 'Hypertrophy',
    duration: '12 Weeks',
    level: 'Intermediate',
    sessions: '5x / Week',
    description: 'Progressive overload hypertrophy training designed to maximize muscle growth and strength.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'CrossFit',
    slug: 'crossfit',
    category: 'Functional',
    duration: 'Ongoing',
    level: 'All Levels',
    sessions: '5x / Week',
    description: 'High-intensity functional movements combining gymnastics, weightlifting, and metabolic conditioning.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Functional Fitness',
    slug: 'functional-fitness',
    category: 'Movement',
    duration: '6 Weeks',
    level: 'All Levels',
    sessions: '3x / Week',
    description: 'Train movement patterns that improve everyday life performance, mobility, and injury prevention.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
    color: '#22c55e',
  },
  {
    id: 5,
    title: 'Strength Training',
    slug: 'strength-training',
    category: 'Powerlifting',
    duration: '16 Weeks',
    level: 'Advanced',
    sessions: '4x / Week',
    description: 'Periodized strength programming based on squat, bench, deadlift with weekly progression targets.',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&q=80',
    color: '#ef4444',
  },
  {
    id: 6,
    title: 'Personal Coaching',
    slug: 'personal-coaching',
    category: '1-on-1',
    duration: 'Custom',
    level: 'Any Level',
    sessions: 'Custom',
    description: 'Fully customized coaching with dedicated trainer support, weekly check-ins, and real-time adjustments.',
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80',
    color: '#8b5cf6',
  },
];

export const trainers = [
  {
    id: 1,
    name: 'Marcus Thompson',
    role: 'Head Strength Coach',
    experience: '12 Years',
    specializations: ['Powerlifting', 'Hypertrophy', 'Athlete Performance'],
    certifications: ['NSCA-CSCS', 'USAW', 'Precision Nutrition'],
    bio: 'Former collegiate athlete turned elite strength coach. Marcus has trained over 300 athletes and competitive powerlifters.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 2,
    name: 'Aria Chen',
    role: 'CrossFit & Conditioning',
    experience: '8 Years',
    specializations: ['CrossFit', 'HIIT', 'Olympic Lifting'],
    certifications: ['CrossFit L3', 'USAW', 'CPR/AED'],
    bio: 'CrossFit Games competitor and coach. Aria\'s high-energy sessions push limits while keeping technique flawless.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 3,
    name: 'James Rodriguez',
    role: 'Body Transformation Coach',
    experience: '10 Years',
    specializations: ['Fat Loss', 'Bodybuilding', 'Nutrition'],
    certifications: ['NASM-CPT', 'Precision Nutrition L2', 'ISSN'],
    bio: 'Competitive bodybuilder and transformation specialist. James has helped 500+ clients achieve their dream physique.',
    image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&q=80',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 4,
    name: 'Zoe Williams',
    role: 'Yoga & Wellness',
    experience: '6 Years',
    specializations: ['Yoga', 'Mobility', 'Mindfulness'],
    certifications: ['RYT-500', 'FRC Mobility', 'ACE-CPT'],
    bio: 'Zoe blends yoga philosophy with modern movement science to create recovery-focused programs that complement hard training.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 5,
    name: 'Ethan Park',
    role: 'Athletic Performance',
    experience: '9 Years',
    specializations: ['Speed & Agility', 'Sports Specific', 'Functional'],
    certifications: ['NSCA-CSCS', 'USAW', 'NASM-PES'],
    bio: 'Former professional sprinter turned performance coach. Ethan works with athletes across all sports to maximize output.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 6,
    name: 'Sofia Martinez',
    role: 'Nutrition & Wellness',
    experience: '7 Years',
    specializations: ['Nutrition', 'Lifestyle Coaching', 'Weight Management'],
    certifications: ['RD', 'Precision Nutrition L2', 'ACE Health Coach'],
    bio: 'Registered Dietitian and certified coach. Sofia takes a holistic approach combining nutrition and lifestyle for lasting results.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
];

export const membershipPlans = [
  {
    id: 1,
    name: 'Basic',
    icon: 'Zap',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for beginners starting their fitness journey.',
    highlighted: false,
    features: [
      { text: 'Gym Floor Access', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Basic Equipment', included: true },
      { text: 'Group Classes (2/week)', included: true },
      { text: 'Personal Training', included: false },
      { text: 'Nutrition Coaching', included: false },
      { text: 'Recovery Suite', included: false },
      { text: 'Priority Booking', included: false },
    ],
  },
  {
    id: 2,
    name: 'Premium',
    icon: 'Star',
    monthlyPrice: 69,
    yearlyPrice: 690,
    description: 'Most popular — full access with guided coaching.',
    highlighted: true,
    features: [
      { text: 'Gym Floor Access (24/7)', included: true },
      { text: 'Locker Room + Towels', included: true },
      { text: 'All Equipment', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Personal Training (4/month)', included: true },
      { text: 'Nutrition Coaching', included: true },
      { text: 'Recovery Suite', included: false },
      { text: 'Priority Booking', included: false },
    ],
  },
  {
    id: 3,
    name: 'Elite',
    icon: 'Crown',
    monthlyPrice: 129,
    yearlyPrice: 1290,
    description: 'The ultimate VIP experience — no limits.',
    highlighted: false,
    features: [
      { text: 'Gym Floor Access (24/7)', included: true },
      { text: 'Locker Room + Towels + Spa', included: true },
      { text: 'All Equipment + VIP Zone', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Personal Training (Unlimited)', included: true },
      { text: 'Nutrition + Meal Planning', included: true },
      { text: 'Recovery Suite (Sauna, Ice)', included: true },
      { text: 'Priority Booking + Guest Pass', included: true },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Carter',
    role: 'Lost 45 lbs in 5 months',
    quote: 'GymForge completely changed my life. The trainers here are world-class and the community is incredibly motivating. I\'ve never felt stronger or more confident.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Gained 15 lbs of muscle',
    quote: 'As a woman who was intimidated by weight rooms, GymForge welcomed me with open arms. Marcus helped me hit a 200 lb deadlift in 3 months!',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b1d9c5b7?w=150&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jordan Blake',
    role: 'CrossFit competitor',
    quote: 'The CrossFit programming here is elite. Aria\'s coaching style is intense but technical. My performance went through the roof in just 8 weeks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'Keisha Williams',
    role: 'Wellness transformation',
    quote: 'I came in exhausted and burned out. Zoe\'s yoga classes and Sofia\'s nutrition guidance gave me energy I haven\'t felt in years. This gym is therapy.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ryan Torres',
    role: 'Powerlifter — 500 lb squat',
    quote: 'The strength training equipment here is unmatched. Marcus programmed my training and I hit competition PRs across all three lifts within 16 weeks.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
  },
];

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'Weight floor', category: 'Equipment' },
  { id: 2, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Cardio training', category: 'Training' },
  { id: 3, src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', alt: 'Bench press', category: 'Strength' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80', alt: 'Group class', category: 'Classes' },
  { id: 5, src: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80', alt: 'Personal training', category: 'Training' },
  { id: 6, src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80', alt: 'Trainer session', category: 'Trainers' },
  { id: 7, src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80', alt: 'Dumbbell rack', category: 'Equipment' },
  { id: 8, src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80', alt: 'Running track', category: 'Cardio' },
  { id: 9, src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80', alt: 'Yoga studio', category: 'Wellness' },
  { id: 10, src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80', alt: 'Athlete training', category: 'Training' },
  { id: 11, src: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80', alt: 'Coaching session', category: 'Trainers' },
  { id: 12, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80', alt: 'Community workout', category: 'Community' },
];

export const transformationStats = [
  { value: 1000, suffix: '+', label: 'Transformations' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 10, suffix: '+', label: 'Expert Trainers' },
];

export const aboutTimeline = [
  { year: '2012', title: 'Founded', description: 'GymForge opened its doors with a vision to redefine fitness culture.' },
  { year: '2015', title: 'Expansion', description: 'Doubled our floor space and launched our signature coaching programs.' },
  { year: '2018', title: 'Award Winning', description: 'Named Best Gym in NYC by Fitness Magazine for 3 consecutive years.' },
  { year: '2021', title: 'Digital Coaching', description: 'Launched online training platform serving members worldwide.' },
  { year: '2024', title: 'Premium Rebrand', description: 'Invested $2M in cutting-edge equipment and luxury recovery suites.' },
];

export const aboutStats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '500+', label: 'Members Strong' },
  { value: '10+', label: 'Certified Trainers' },
  { value: '20+', label: 'Programs Offered' },
];

export const programFAQs = [
  { q: 'Which program is right for me?', a: 'We offer a free consultation with one of our coaches who will assess your goals, fitness level, and schedule to recommend the perfect program.' },
  { q: 'Can I switch programs midway?', a: 'Absolutely. We understand that goals evolve. Members can switch programs after completing at least 2 weeks of their current plan.' },
  { q: 'Are programs suitable for beginners?', a: 'Yes! Every program has a beginner track. Our coaches scale workouts to meet you exactly where you are.' },
  { q: 'What equipment do I need?', a: 'All programs are designed to be completed using equipment available in our facility. No additional gear required.' },
];

export const membershipFAQs = [
  { q: 'Is there a joining fee?', a: 'No joining fee when you sign up for any plan during our current promotion. Month-to-month contracts available.' },
  { q: 'Can I freeze my membership?', a: 'Yes, members can freeze their membership for up to 3 months per year at no additional charge.' },
  { q: 'Is there a student discount?', a: 'Yes! Students with valid ID get 20% off any plan. Contact us to apply the discount.' },
  { q: 'Do you offer corporate memberships?', a: 'Yes, we offer customized corporate wellness packages. Contact our team for group pricing.' },
];
