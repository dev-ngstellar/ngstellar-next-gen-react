// ============================================================
// TESTIMONIALS DATA
// ============================================================

export const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    role: 'Hiring Manager, Google',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: "This portfolio template is absolutely stunning. The developer portfolio we built for our team member got him a senior engineering role within 2 weeks of going live.",
    profession: 'programmer',
  },
  {
    id: 2,
    name: 'Marcus L.',
    role: 'Design Director, Apple',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: "The UI/UX designer template is hands-down the most polished portfolio template I've seen. The case study section alone is worth it.",
    profession: 'ui-ux-designer',
  },
  {
    id: 3,
    name: 'Elena R.',
    role: 'Professor, MIT',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: "As an academic, I needed something professional yet warm. The Modern Minimal theme with the professor template is exactly what I was looking for.",
    profession: 'professor',
  },
  {
    id: 4,
    name: 'David C.',
    role: 'Founder, Y Combinator W25',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: "Built my entrepreneur portfolio in under an hour. Investors have commented on how professional it looks. Best $29 I've ever spent.",
    profession: 'entrepreneur',
  },
  {
    id: 5,
    name: 'Priya M.',
    role: 'Freelance Designer',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80',
    rating: 5,
    text: "My freelance inquiries tripled after launching with this template. The theme switcher is a game-changer for showing clients different aesthetics.",
    profession: 'freelancer',
  },
  {
    id: 6,
    name: 'James T.',
    role: 'Partner, McKinsey & Co.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    rating: 5,
    text: "The Business Gold theme for my consulting portfolio exudes exactly the prestige and authority that my clients expect. Exceptional quality.",
    profession: 'business-consultant',
  },
  {
    id: 7,
    name: 'Luna S.',
    role: 'Photography Student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 5,
    text: "The photographer template with Luxury Black theme makes my photos look like they belong in a gallery. My booking rate increased by 40%.",
    profession: 'photographer',
  },
  {
    id: 8,
    name: 'Alex W.',
    role: 'CS Graduate, Stanford',
    avatar: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=200&q=80',
    rating: 5,
    text: "As a CS student, I needed to stand out. This template helped me land 5 FAANG interviews. The GitHub stats section especially impressed recruiters.",
    profession: 'student',
  },
];

export const getTestimonialsByProfession = (professionId) =>
  testimonials.filter((t) => t.profession === professionId);

export const getAllTestimonials = () => testimonials;
