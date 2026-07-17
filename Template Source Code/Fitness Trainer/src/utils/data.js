// =====================================================
// SITE DATA — EliteFit Template
// Personal Trainer & Fitness Coach
// =====================================================

export const siteConfig = {
  name: 'EliteFit',
  trainerName: 'Alex Morgan',
  tagline: 'Transform Your Body. Transform Your Life.',
  phone: '+1 (555) 123-4567',
  email: 'hello@elitefit.com',
  address: '24 Performance Plaza, New York, NY 10012',
  hours: {
    weekdays: '6:00 AM – 10:00 PM',
    saturday: '7:00 AM – 8:00 PM',
    sunday: '8:00 AM – 6:00 PM',
  },
  social: {
    instagram: '#',
    youtube: '#',
    twitter: '#',
    linkedin: '#',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// ── Hero floating stat cards ──────────────────────────────────
export const heroStats = [
  { value: '2500+', label: 'Clients Trained', icon: 'Users' },
  { value: '98%',   label: 'Success Rate',    icon: 'TrendingUp' },
  { value: '10+',   label: 'Years Experience',icon: 'Award' },
  { value: 'NASM',  label: 'Certified Trainer',icon: 'ShieldCheck' },
];

// ── Marquee partners ──────────────────────────────────────────
export const marqueePartners = [
  { name: 'Nike Training', icon: '◆' },
  { name: 'Gymshark',      icon: '◆' },
  { name: 'Technogym',     icon: '◆' },
  { name: 'Optimum Nutrition', icon: '◆' },
  { name: 'Rogue Fitness', icon: '◆' },
  { name: 'Under Armour',  icon: '◆' },
  { name: 'Whoop',         icon: '◆' },
  { name: 'Myprotein',     icon: '◆' },
  { name: 'Garmin',        icon: '◆' },
  { name: 'Lululemon',     icon: '◆' },
];

// ── Programs ──────────────────────────────────────────────────
export const programs = [
  {
    id: 1,
    title: 'Weight Loss',
    description: 'A science-backed fat-loss protocol combining HIIT, metabolic conditioning, and precision nutrition for sustainable results.',
    icon: 'Flame',
    duration: '8 Weeks',
    level: 'All Levels',
    color: '#f43f5e',
  },
  {
    id: 2,
    title: 'Strength Training',
    description: 'Periodized powerlifting & hypertrophy programming designed to build raw strength and add serious muscle mass.',
    icon: 'Dumbbell',
    duration: '12 Weeks',
    level: 'Intermediate',
    color: '#6366f1',
  },
  {
    id: 3,
    title: 'Body Transformation',
    description: 'The complete 90-day body recomposition program — lose fat and build muscle simultaneously with precision coaching.',
    icon: 'Zap',
    duration: '12 Weeks',
    level: 'All Levels',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Online Coaching',
    description: 'Fully personalized 1:1 remote coaching with weekly check-ins, custom plans, and real-time form feedback.',
    icon: 'Monitor',
    duration: 'Ongoing',
    level: 'Any Level',
    color: '#10b981',
  },
  {
    id: 5,
    title: 'Nutrition Coaching',
    description: 'Evidence-based macro planning, meal prep strategies, and supplement guidance for your specific body type and goals.',
    icon: 'Salad',
    duration: '4 Weeks',
    level: 'All Levels',
    color: '#0ea5e9',
  },
];

// ── Why Choose Me ─────────────────────────────────────────────
export const whyChooseItems = [
  {
    icon: 'Award',
    title: '10+ Years of Experience',
    description: 'Over a decade training elite clients, athletes, and beginners — I have seen every challenge and know exactly how to overcome it.',
  },
  {
    icon: 'ClipboardList',
    title: '100% Personalized Plans',
    description: 'No cookie-cutter programs. Every training plan and nutrition strategy is custom-built around your exact body, goals, and lifestyle.',
  },
  {
    icon: 'Salad',
    title: 'Integrated Nutrition',
    description: 'Sustainable nutrition coaching built into every program — not an afterthought, but the cornerstone of your transformation.',
  },
  {
    icon: 'MessageCircle',
    title: '24/7 Support Access',
    description: 'I am always in your corner. Direct messaging, weekly check-ins, and real accountability — not just a program, but a partnership.',
  },
  {
    icon: 'ShieldCheck',
    title: 'NASM & ACE Certified',
    description: 'Fully certified with NASM, ACE, Precision Nutrition, and HIIT specializations — your results are backed by real expertise.',
  },
];

// ── Stats / Counters ──────────────────────────────────────────
export const stats = [
  { value: 2500, suffix: '+', label: 'Clients Transformed' },
  { value: 15000, suffix: '+', label: 'Hours of Training' },
  { value: 98, suffix: '%', label: 'Transformation Success' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
];

// ── Testimonials ──────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Lost 32 lbs in 14 weeks',
    quote: 'Alex completely transformed the way I see fitness. The personalized approach and constant support made all the difference. I am the strongest I have ever been.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b1d9c5b7?w=150&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'Gained 18 lbs of lean muscle',
    quote: 'As a busy executive, I needed a program that fit my schedule. Alex delivered results I had no idea were possible in just 3 months. Absolutely elite coaching.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Body transformation — 90 days',
    quote: 'I tried every program out there. Nothing worked until EliteFit. The nutrition coaching alone changed everything. I finally understand how to eat for my goals.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Rodriguez',
    role: 'Online coaching client — 6 months',
    quote: 'The weekly check-ins and real-time feedback are unmatched. Alex is genuinely invested in your success. My life has changed in ways I never expected.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
  },
];

// ── About Timeline ─────────────────────────────────────────────
export const aboutTimeline = [
  {
    year: '2014',
    title: 'Started My Journey',
    description: 'Began my career as a personal trainer with a passion for helping people unlock their true physical potential.',
    icon: 'Play',
  },
  {
    year: '2016',
    title: 'Competed & Won',
    description: 'Won regional physique championships, proving that the methods I teach work at the highest competitive level.',
    icon: 'Trophy',
  },
  {
    year: '2018',
    title: 'Triple Certification',
    description: 'Earned NASM-CPT, ACE, and Precision Nutrition Level 2 certifications to deliver truly science-backed coaching.',
    icon: 'Award',
  },
  {
    year: '2020',
    title: 'Opened Elite Studio',
    description: 'Launched the EliteFit private studio — a premium, invitation-only training environment for serious clients.',
    icon: 'Building',
  },
  {
    year: '2022',
    title: 'Online Coaching Launch',
    description: 'Expanded globally with a complete online coaching platform, reaching clients across 18 countries.',
    icon: 'Globe',
  },
  {
    year: '2024',
    title: '2500 Clients Milestone',
    description: 'Crossed the landmark of 2500 clients successfully transformed — with a 98% client satisfaction rate.',
    icon: 'Users',
  },
];

// ── Certifications ─────────────────────────────────────────────
export const certifications = [
  { title: 'NASM-CPT', body: 'National Academy of Sports Medicine', icon: 'Award', year: '2018' },
  { title: 'ACE Certified', body: 'American Council on Exercise', icon: 'ShieldCheck', year: '2018' },
  { title: 'Precision Nutrition L2', body: 'PN Nutrition Coaching', icon: 'Salad', year: '2019' },
  { title: 'HIIT Specialist', body: 'American Sports & Fitness', icon: 'Zap', year: '2020' },
  { title: 'CrossFit Level 2', body: 'CrossFit HQ', icon: 'Activity', year: '2021' },
  { title: 'Yoga Alliance RYT-200', body: 'Yoga Alliance International', icon: 'Heart', year: '2022' },
];

// ── Skills / Expertise bars ────────────────────────────────────
export const skills = [
  { name: 'Strength & Conditioning', level: 96 },
  { name: 'Nutrition Planning',       level: 90 },
  { name: 'Cardio & HIIT',           level: 88 },
  { name: 'Weight Loss Coaching',    level: 94 },
  { name: 'Mobility & Flexibility',  level: 82 },
  { name: 'Recovery & Wellness',     level: 85 },
];

// ── Studio Gallery ─────────────────────────────────────────────
export const studioGallery = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'Studio weight floor' },
  { id: 2, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Personal training session' },
  { id: 3, src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', alt: 'Strength training' },
  { id: 4, src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80', alt: 'Elite equipment' },
  { id: 5, src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80', alt: 'Cardio zone' },
  { id: 6, src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80', alt: 'Recovery area' },
  { id: 7, src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80', alt: 'Coaching session' },
  { id: 8, src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80', alt: 'Group training' },
];

// ── Contact FAQ ────────────────────────────────────────────────
export const contactFAQs = [
  {
    q: 'How do I get started with personal training?',
    a: 'Simply book a free consultation below. We will discuss your goals, current fitness level, lifestyle, and create a fully customized plan before you commit to anything.',
  },
  {
    q: 'Do you offer online coaching?',
    a: 'Yes! Online coaching is available worldwide. You will receive a custom program, weekly check-ins via video call, direct messaging access, and the same level of attention as in-person clients.',
  },
  {
    q: 'What is the minimum commitment?',
    a: 'Programs start at 4 weeks. However, most clients choose 8–12 week blocks to maximize their results. Month-to-month options are available for ongoing coaching.',
  },
  {
    q: 'Do I need equipment for online training?',
    a: 'Not necessarily. I design programs around whatever equipment you have access to — a full gym, a home setup, or even just bodyweight. We adapt to your situation.',
  },
  {
    q: 'Is nutrition coaching included?',
    a: 'All programs include nutritional guidance. Full precision nutrition plans are available as an add-on or bundled into premium coaching packages.',
  },
  {
    q: 'What makes EliteFit different from other trainers?',
    a: 'I combine 10+ years of practical experience with evidence-based science, genuine personal investment in every client, and a relentless commitment to measurable results — not just motivation.',
  },
];

// ── Transformation before/after ────────────────────────────────
export const transformations = [
  {
    id: 1,
    name: 'Sarah C.',
    duration: '14 Weeks',
    program: 'Weight Loss',
    before: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    result: '-32 lbs',
  },
  {
    id: 2,
    name: 'Marcus W.',
    duration: '12 Weeks',
    program: 'Body Transformation',
    before: 'https://images.unsplash.com/photo-1531951117013-aff7e88d6f37?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    result: '+18 lbs muscle',
  },
];
