import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import {
    ArrowRight,
    CheckCircle2,
    XCircle,
    Plus,
    Minus,
    TrendingUp,
    Target,
    Megaphone,
    Search,
    MapPin,
    FileText,
    Palette,
    RotateCcw,
    BarChart3,
    Building2,
    Rocket,
    ShoppingBag,
    Home as HomeIcon,
    Stethoscope,
    GraduationCap,
    Utensils,
    Briefcase,
    Award,
    Layers,
    Zap,
    MessageSquare,
    Check,
    Share2,
    HeartHandshake,
    MousePointerClick,
    SearchX,
    MapPinOff,
    Unplug
} from 'lucide-react';

const whatsappNumber = '918870659648';
const openWhatsApp = (customMsg = "Hi NG Stellar, I would like to get a digital marketing plan for my business.") => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
};

const painPointsWithIcons = [
    { text: 'An inactive or poorly optimised social media presence', icon: Share2, label: 'Social Presence' },
    { text: 'Low engagement', icon: HeartHandshake, label: 'Audience Reach' },
    { text: 'Inconsistent content', icon: FileText, label: 'Content Strategy' },
    { text: 'Ads that generate clicks but not enquiries', icon: MousePointerClick, label: 'Ad Conversion' },
    { text: 'Poor Google visibility', icon: SearchX, label: 'Search Rank' },
    { text: 'An incomplete Google Business Profile', icon: MapPinOff, label: 'Local Search' },
    { text: 'No clear lead-generation strategy', icon: Target, label: 'Lead Funnel' },
    { text: 'Multiple marketing channels working separately', icon: Unplug, label: 'Channel Synergy' }
];

const smmBullets = [
    'Social media account creation',
    'Profile setup and optimisation',
    'Facebook & Instagram page optimisation',
    'Social media strategy',
    'Content planning',
    'Content calendar creation',
    'Post and carousel content',
    'Creative design',
    'Reels and short-form video content',
    'Captions and hashtag strategy',
    'Content publishing & scheduling',
    'Community engagement',
    'Comment & message management',
    'Audience growth strategy',
    'Monthly performance reporting'
];

const metaAdsBullets = [
    'Meta Ads account setup',
    'Campaign strategy',
    'Audience research',
    'Customer persona development',
    'Campaign creation',
    'Lead generation campaigns',
    'WhatsApp campaigns',
    'Website traffic campaigns',
    'Conversion campaigns',
    'Retargeting campaigns',
    'Creative testing',
    'Ad copywriting',
    'Multiple audience testing',
    'Campaign optimisation',
    'Budget management',
    'Performance tracking',
    'Conversion tracking',
    'A/B testing',
    'Retargeting strategies'
];

const googleAdsBullets = [
    'Google Search Ads',
    'PPC campaign management',
    'Keyword research',
    'Search intent analysis',
    'Competitor research',
    'Ad copywriting',
    'Campaign structure',
    'Location targeting',
    'Audience targeting',
    'Negative keyword management',
    'Conversion tracking',
    'Landing page recommendations',
    'Remarketing',
    'Campaign optimisation',
    'Budget monitoring',
    'Performance analysis',
    'Monthly reporting'
];

const gbpBullets = [
    'Google Business Profile setup',
    'Profile optimisation',
    'Business information optimisation',
    'Category optimisation',
    'Service optimisation',
    'Local keyword optimisation',
    'Business description optimisation',
    'Google Posts',
    'Photo and content updates',
    'Review strategy',
    'Customer engagement',
    'Local visibility optimisation',
    'Performance monitoring'
];

const seoBullets = [
    'SEO audit',
    'Keyword research',
    'Competitor analysis',
    'On-page SEO',
    'Technical SEO recommendations',
    'Meta title & description optimisation',
    'Content optimisation',
    'Local SEO',
    'Google Business Profile optimisation',
    'Internal linking',
    'Off-page SEO',
    'Link-building strategy',
    'SEO content strategy',
    'Performance monitoring'
];

const contentBullets = [
    'Social media content',
    'Blog content',
    'Website content',
    'SEO content',
    'Ad copy',
    'Landing page copy',
    'Promotional content',
    'Educational content',
    'Video content concepts',
    'Reel scripts',
    'Content calendars'
];

const creativeBullets = [
    'Social media creatives',
    'Ad creatives',
    'Promotional banners',
    'Carousel designs',
    'Reel concepts',
    'Video editing',
    'Brand-consistent visual content',
    'Campaign creative variations',
    'Landing page visuals'
];

const analyticsBullets = [
    'Google Analytics',
    'Google Tag Manager',
    'Meta Pixel',
    'Conversion tracking',
    'Lead tracking',
    'Website event tracking',
    'Call tracking',
    'WhatsApp click tracking',
    'Campaign performance analysis',
    'Landing page optimisation',
    'Conversion rate optimisation'
];

const approachSteps = [
    { step: '01', title: 'Understand', desc: 'We learn about your business, customers, competitors, offers and goals.' },
    { step: '02', title: 'Strategise', desc: 'We identify the right channels, audience, messaging and campaign objectives.' },
    { step: '03', title: 'Build', desc: 'We create your digital marketing foundation—from profiles and content to campaigns and tracking.' },
    { step: '04', title: 'Launch', desc: 'Your campaigns and content go live with the right targeting and messaging.' },
    { step: '05', title: 'Optimise', desc: 'We analyse performance and continuously identify opportunities to improve.' },
    { step: '06', title: 'Grow', desc: 'The goal is to build a stronger digital presence and create a more consistent flow of qualified opportunities.' }
];

const whyChooseUs = [
    {
        title: 'Strategy Before Execution',
        desc: 'We don\'t believe in running campaigns simply because "everyone is doing it." Your marketing strategy should begin with your business objective and customer journey.',
        icon: Zap
    },
    {
        title: 'One Partner for Multiple Digital Needs',
        desc: 'Social media, paid advertising, Google, SEO, content, websites and conversion optimisation can work together instead of operating in isolation.',
        icon: Layers
    },
    {
        title: 'Data-Informed Decisions',
        desc: 'We use campaign and performance data to identify what is working and where improvements can be made.',
        icon: BarChart3
    },
    {
        title: 'Business-Focused Marketing',
        desc: 'Likes and followers can be useful indicators, but your marketing should ultimately support meaningful business objectives such as leads, enquiries, bookings, calls and sales.',
        icon: Target
    },
    {
        title: 'Continuous Optimisation',
        desc: 'Digital marketing isn\'t "set it and forget it." We monitor performance and make strategic adjustments based on results.',
        icon: TrendingUp
    }
];

const targetAudiences = [
    { icon: Building2, title: 'Small & Medium Businesses', desc: 'Build visibility and generate consistent enquiries.' },
    { icon: Rocket, title: 'Startups', desc: 'Create a strong digital foundation and reach your first customers.' },
    { icon: ShoppingBag, title: 'E-commerce Businesses', desc: 'Promote products and build online sales opportunities.' },
    { icon: HomeIcon, title: 'Real Estate Businesses', desc: 'Generate enquiries from potential buyers, sellers and investors.' },
    { icon: Stethoscope, title: 'Clinics & Healthcare Businesses', desc: 'Build online visibility and generate relevant enquiries while following applicable advertising requirements.' },
    { icon: GraduationCap, title: 'Educational Institutions', desc: 'Reach students, parents and prospective learners.' },
    { icon: Utensils, title: 'Restaurants & Local Businesses', desc: 'Improve local visibility and attract nearby customers.' },
    { icon: Briefcase, title: 'Professional Services', desc: 'Build authority and generate qualified leads.' },
    { icon: Award, title: 'Established Brands', desc: 'Strengthen digital presence and scale existing marketing campaigns.' }
];

const faqs = [
    {
        question: 'Do you manage Facebook and Instagram accounts?',
        answer: 'Yes. Our social media management can include account creation, profile optimisation, content planning, creative development, publishing, community engagement and performance reporting.'
    },
    {
        question: 'Do you run Facebook and Instagram Ads?',
        answer: 'Yes. We provide Meta advertising services including campaign setup, audience research, creative testing, lead generation, retargeting, optimisation and performance monitoring.'
    },
    {
        question: 'Do you manage Google Ads?',
        answer: 'Yes. Our PPC services can include keyword research, campaign setup, Search Ads, targeting, ad copy, negative keywords, conversion tracking and ongoing optimisation.'
    },
    {
        question: 'Can you manage our Google Business Profile?',
        answer: 'Yes. We can optimise and manage your Google Business Profile to strengthen your local online presence.'
    },
    {
        question: 'Do you provide SEO?',
        answer: 'Yes. SEO services can include keyword research, on-page SEO, technical recommendations, local SEO, content optimisation, Google Business Profile optimisation and off-page strategy.'
    },
    {
        question: 'Do you create social media content?',
        answer: 'Yes. We can provide content strategy, calendars, social media creatives, captions, reels concepts, video content and other campaign assets depending on your requirements.'
    },
    {
        question: 'Can you manage everything for our business?',
        answer: 'Our services can be customised according to your requirements. You can choose individual services or combine multiple digital marketing channels into a comprehensive strategy.'
    }
];

export default function Landingpage() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="landing-page-root min-h-screen bg-[#070b14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans overflow-x-hidden">
            <SEO
                title="Digital Marketing Services | NG Stellar"
                description="NG Stellar provides end-to-end digital marketing services designed to build your online presence, reach the right audience, and generate qualified enquiries."
            />

            {/* TOP LANDING PAGE BRAND & CONTACT HEADER BAR */}
            <header className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3.5 px-4 sm:px-8 relative z-20">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/ng_logo_white.webp"
                            alt="NG Stellar Solutions"
                            className="h-8 sm:h-9 w-auto object-contain"
                        />
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                            Digital Growth Agency
                        </span>
                    </div>

                    <button
                        onClick={() => openWhatsApp("Hi NG Stellar, I would like to consult about digital marketing for my business.")}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp Advisory</span>
                    </button>
                </div>
            </header>

            {/* 1. HERO SECTION */}
            <section className="relative pt-6 pb-12 md:pt-8 md:pb-20 bg-[#070b14] overflow-hidden border-b border-slate-800/60">
                {/* Background Ambient Top Design Mesh Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-emerald-500/15 via-teal-500/10 to-transparent blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Left Column: Text & CTA */}
                        <div className="lg:col-span-7 text-left space-y-6">
                            
                            {/* Top Design Badge Above Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-500/10"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>NG STELLAR DIGITAL GROWTH ENGINE</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl sm:text-5xl lg:text-5xl font-black text-white leading-[1.12] tracking-tight"
                            >
                                Digital Marketing Services That Help Your Business{' '}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                    Get Seen, Get Leads & Grow
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg sm:text-xl font-bold text-teal-200/90 leading-snug"
                            >
                                Stop Posting Without a Plan. Start Marketing With a Strategy.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-4 font-normal"
                            >
                                <p>
                                    Your business deserves more than random social media posts and ads that burn through your budget.
                                </p>
                                <p>
                                    NG Stellar provides end-to-end digital marketing services designed to build your online presence, reach the right audience, generate qualified enquiries, and turn digital traffic into business growth.
                                </p>
                                <p className="text-slate-200 font-medium pt-1">
                                    From social media management and Meta Ads to Google Ads, SEO and Google Business Profile optimisation, we bring your digital marketing under one strategic plan.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-2 flex flex-col items-start gap-4"
                            >
                                <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                                    Ready to grow your business online?
                                </p>
                                <button
                                    onClick={() => openWhatsApp("Hi NG Stellar, I would like to get a digital marketing plan for my business.")}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/20 hover:brightness-110 hover:scale-[1.02] transition-all cursor-pointer group"
                                >
                                    <MessageSquare className="w-5 h-5 fill-slate-950" />
                                    <span>GET YOUR DIGITAL MARKETING PLAN</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Column: Hero Visual Image */}
                        <div className="lg:col-span-5 relative flex items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-900/60 p-2"
                            >
                                <img
                                    src="/assets/digital-marketing-hero.webp"
                                    alt="Digital Marketing Analytics Strategy"
                                    className="w-full h-auto max-h-[560px] rounded-xl object-cover shadow-inner"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. CUSTOMER PROBLEM SECTION */}
            <section className="py-20 bg-slate-950 relative border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Left & Right Side Split Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Left Column: Title & Text */}
                        <div className="lg:col-span-6 space-y-6 text-left">
                            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                                Your Customers Are Already Online.{' '}
                                <span className="text-emerald-400 block sm:inline">Can They Find You?</span>
                            </h2>

                            <div className="text-base sm:text-lg text-slate-300 space-y-3 font-normal">
                                <p className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                    People are searching on Google.
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                    They are checking Instagram.
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                    They are comparing businesses on Facebook.
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2" />
                                    They are watching videos, reading reviews, and clicking ads before deciding who to contact.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Online Business Visibility Image */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-2">
                                <img
                                    src="/assets/online-business-visibility.webp"
                                    alt="Customers Searching and Comparing Businesses Online"
                                    loading="lazy"
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Pain points modern diagnostic list (Non-box design) */}
                    <div className="mt-16 text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
                            <XCircle className="w-4 h-4 text-rose-400" />
                            <span>Digital Growth Audit</span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-10">
                            But if your business has:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {painPointsWithIcons.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800 hover:border-rose-500/50 transition-all duration-300 shadow-lg hover:shadow-rose-500/10"
                                    >
                                        {/* Left Accent Glow Bar */}
                                        <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-rose-500 to-amber-500 shrink-0 group-hover:scale-y-110 transition-transform" />

                                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-rose-400 shrink-0 group-hover:border-rose-500/40 group-hover:text-rose-300 transition-colors">
                                            <IconComp className="w-5 h-5" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-semibold text-rose-400/90 uppercase tracking-wider block mb-0.5">
                                                {item.label}
                                            </span>
                                            <p className="text-slate-200 text-sm sm:text-base font-semibold leading-snug">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* High-Impact Solution Showcase Card with White Rocket Growth Image */}
                        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-emerald-500/40 p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                                <div className="lg:col-span-7 space-y-4">
                                    <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
                                        Opportunity Alert
                                    </span>
                                    <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                                        …you may be losing potential customers every day.
                                    </h4>
                                    <p className="text-emerald-400 text-lg sm:text-xl font-bold">
                                        That's where NG Stellar comes in.
                                    </p>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        We unify your social media, paid ads, SEO, and local visibility into a seamless, high-converting digital growth engine.
                                    </p>
                                    <div className="pt-2">
                                        <button
                                            onClick={() => openWhatsApp("Hi NG Stellar, I am ready to get a digital marketing plan for my business.")}
                                            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:scale-[1.02] transition-all cursor-pointer"
                                        >
                                            <MessageSquare className="w-5 h-5 fill-slate-950" />
                                            <span>GET YOUR DIGITAL MARKETING PLAN</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="lg:col-span-5">
                                    <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-white p-1.5">
                                        <img
                                            src="/assets/digital-marketing-growth.webp"
                                            alt="NG Stellar Growth Engine Strategy"
                                            loading="lazy"
                                            className="w-full h-auto rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 3. ONE PARTNER & SERVICES SECTION */}
            <section className="py-24 bg-[#070b14] relative border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                            One Digital Marketing Partner.{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300 block sm:inline">
                                Multiple Growth Channels.
                            </span>
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                            Instead of managing different freelancers or agencies for different tasks, get a complete digital marketing solution under one roof.
                        </p>
                    </div>

                    {/* SERVICE 1: Social Media Marketing */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <Megaphone className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Social Media Marketing
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Build a professional and consistent presence across the platforms where your customers spend their time.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">Our social media services include:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {smmBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-semibold text-slate-200 mb-8">
                            Your social media should do more than look active. It should support your business goals.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I am interested in Social Media Marketing services.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>GET YOUR DIGITAL MARKETING PLAN</span>
                        </button>
                    </div>

                    {/* SERVICE 2: Meta Ads */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Meta Ads That Go Beyond "Boost Post"
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Reach potential customers with strategically planned Facebook and Instagram advertising campaigns.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">We can help with:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {metaAdsBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-8 space-y-2">
                            <p className="font-bold text-slate-100">Don't just pay for impressions. Build campaigns designed around your actual business objective.</p>
                            <p>Whether your goal is leads, WhatsApp enquiries, calls, website conversions, bookings, or sales, we create campaigns around the desired action.</p>
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I would like to talk to your Meta Ads digital marketing team.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>TALK TO OUR DIGITAL MARKETING TEAM</span>
                        </button>
                    </div>

                    {/* SERVICE 3: Google Ads & PPC */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <Search className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Google Ads & PPC Management
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            When someone is actively searching for what you offer, being visible at the right moment matters. NG Stellar helps businesses use Google Ads and PPC campaigns to reach people with high purchase intent.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">Our Google Ads services include:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {googleAdsBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-bold text-slate-100 mb-8">
                            Get in front of customers when they're searching.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want to get a Google Ads strategy.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>GET A GOOGLE ADS STRATEGY</span>
                        </button>
                    </div>

                    {/* SERVICE 4: Google Business Profile */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Google Business Profile Management
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Your Google Business Profile can be one of your most valuable local marketing assets.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">We help businesses improve their Google presence with:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {gbpBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-bold text-slate-100 mb-8">
                            Help local customers discover your business when they search.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want to improve my Google Business Profile presence.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>IMPROVE MY GOOGLE PRESENCE</span>
                        </button>
                    </div>

                    {/* SERVICE 5: SEO */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                SEO That Builds Long-Term Visibility
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Paid advertising can bring immediate traffic. SEO can help build sustainable organic visibility over time.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">Our SEO services can include:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {seoBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-bold text-slate-100 mb-8">
                            Build visibility today. Build organic growth for tomorrow.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want an SEO and Digital Marketing Plan.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>GET MY DIGITAL MARKETING PLAN</span>
                        </button>
                    </div>

                    {/* SERVICE 6: Content Marketing */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Content Marketing
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Great marketing needs great content. We create content designed to educate, engage, build trust and move potential customers toward action.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">Our content services include:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {contentBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-bold text-slate-100 mb-8">
                            Every piece of content should have a purpose—not just fill your feed.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want to talk about Content Marketing services.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>TALK TO OUR DIGITAL MARKETING TEAM</span>
                        </button>
                    </div>

                    {/* SERVICE 7: Creative & Brand Content */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <Palette className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Creative & Brand Content
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Your advertising can only perform as well as the message and creative behind it.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">We can help with:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {creativeBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-bold text-slate-100 mb-8">
                            Create content that gets attention and communicates your value quickly.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want Creative & Brand Content services.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>GET YOUR DIGITAL MARKETING PLAN</span>
                        </button>
                    </div>

                    {/* SERVICE 8: Retargeting & Remarketing */}
                    <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <RotateCcw className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Retargeting & Remarketing
                            </h3>
                        </div>

                        <div className="text-base text-slate-300 leading-relaxed mb-8 space-y-3">
                            <p>Not everyone becomes a customer the first time they see your business.</p>
                            <p>Some people visit your website.</p>
                            <p>Some watch your videos.</p>
                            <p>Some interact with your social media.</p>
                            <p>Some click your advertisement and leave.</p>
                            <p className="pt-2 font-semibold text-slate-100">
                                Instead of letting those potential customers disappear, retargeting can help bring qualified visitors back into your marketing journey.
                            </p>
                            <p className="text-sm text-slate-400">
                                We can develop remarketing strategies across relevant advertising platforms based on your campaign objectives.
                            </p>
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want to discuss Retargeting & Remarketing strategies.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>TALK TO NG STELLAR</span>
                        </button>
                    </div>

                    {/* SERVICE 9: Tracking, Analytics & Conversion Optimisation */}
                    <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <BarChart3 className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Tracking, Analytics & Conversion Optimisation
                            </h3>
                        </div>
                        <p className="text-base text-slate-300 leading-relaxed mb-6">
                            Getting traffic is only part of the equation. What happens after someone clicks? We help businesses understand what is working by setting up and monitoring relevant tracking and performance metrics.
                            <br />
                            <strong className="text-slate-100 font-semibold block mt-2">This can include:</strong>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                            {analyticsBullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-bold text-slate-100 mb-8">
                            We don't want you to simply know how many people clicked. We want you to understand what those clicks are doing for your business.
                        </div>

                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want Tracking & Conversion Optimisation setup.")}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-slate-950" />
                            <span>GET MY DIGITAL MARKETING PLAN</span>
                        </button>
                    </div>

                </div>
            </section>

            {/* 4. OUR DIGITAL MARKETING APPROACH */}
            <section className="py-24 bg-slate-950 relative border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                            Our Digital Marketing Approach
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {approachSteps.map((step) => (
                            <div
                                key={step.step}
                                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-3xl font-mono font-black text-emerald-400 mb-3">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 5. WHY CHOOSE NG STELLAR */}
            <section className="py-24 bg-[#070b14] relative border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                            Why Choose NG Stellar?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((feature, index) => {
                            const IconComp = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. WHO CAN BENEFIT */}
            <section className="py-24 bg-slate-950 relative border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Who Can Benefit From Our Digital Marketing Services?
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-slate-400">
                            Our digital marketing solutions can be customised for:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {targetAudiences.map((aud, index) => {
                            const AudIcon = aud.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <AudIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white mb-1">
                                            {aud.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                            {aud.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. WHAT MAKES OUR APPROACH DIFFERENT */}
            <section className="py-24 bg-[#070b14] relative border-b border-slate-800/60">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                            What Makes Our Approach Different?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                        {/* Negative items */}
                        <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/40 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-300 text-base font-medium">
                                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Random Posting</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 text-base font-medium">
                                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Unplanned Advertising</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 text-base font-medium">
                                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Vanity Metrics Only</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 text-base font-medium">
                                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>One-Size-Fits-All Campaigns</span>
                                </div>
                            </div>
                        </div>

                        {/* Positive items */}
                        <div className="p-8 rounded-3xl bg-emerald-950/30 border border-emerald-500/40 shadow-2xl flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
                                    Instead:
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-100 text-base font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Strategy</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-100 text-base font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Targeted Marketing</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-100 text-base font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Consistent Content</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-100 text-base font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Performance Tracking</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-100 text-base font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Campaign Optimisation</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-100 text-base font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>Conversion-Focused Thinking</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 8. YOUR BUSINESS DOESN'T NEED MORE MARKETING NOISE */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 relative border-b border-slate-800/60 overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                        Your Business Doesn't Need More Marketing Noise.{' '}
                        <span className="text-emerald-400 block mt-2">It needs a clear digital growth strategy.</span>
                    </h2>

                    <div className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto space-y-4">
                        <p>
                            If your current marketing isn't generating the visibility, enquiries or growth you expect, it may be time to rethink the strategy—not simply increase the budget.
                        </p>
                        <p className="font-semibold text-slate-200">
                            NG Stellar can help you build a digital marketing system where your social media, advertising, Google presence, website and content work together.
                        </p>
                    </div>

                    <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 max-w-3xl mx-auto shadow-2xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            Ready to Grow Your Business Online?
                        </h3>
                        <p className="text-sm text-slate-300 mb-3">
                            Tell us about your business and we'll help you identify the right digital marketing opportunities for your goals.
                        </p>
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-8">
                            Get a customised digital marketing strategy for your business.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => openWhatsApp("Hi NG Stellar, I want to get my Digital Marketing Plan.")}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-sm hover:brightness-110 hover:scale-[1.02] transition-all cursor-pointer"
                            >
                                <MessageSquare className="w-4 h-4 fill-slate-950" />
                                <span>GET MY DIGITAL MARKETING PLAN</span>
                            </button>
                            <button
                                onClick={() => openWhatsApp("Hi NG Stellar, I want to talk about digital growth for my business.")}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/80 text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer"
                            >
                                <MessageSquare className="w-4 h-4 text-emerald-400" />
                                <span>TALK TO NG STELLAR</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FREQUENTLY ASKED QUESTIONS */}
            <section className="py-24 bg-[#070b14] relative border-b border-slate-800/60">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl bg-slate-900 border border-slate-800/90 overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white hover:text-emerald-300 transition-colors cursor-pointer"
                                    >
                                        <span className="text-base sm:text-lg">{faq.question}</span>
                                        <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                                            {isOpen ? (
                                                <Minus className="w-4 h-4 text-emerald-400" />
                                            ) : (
                                                <Plus className="w-4 h-4 text-slate-400" />
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4 font-normal"
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 10. FINAL BRAND SECTION */}
            <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Let's Build Your Digital Growth Strategy
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
                        Your competitors are already competing for your customers online. <br />
                        Make sure your business is visible where your customers are looking.
                    </p>

                    <div className="mt-10 pt-8 border-t border-slate-800/80 space-y-2">
                        <div className="text-2xl font-black text-white tracking-tight">NG Stellar</div>
                        <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
                            Strategy. Creativity. Technology. Growth.
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={() => openWhatsApp("Hi NG Stellar, I want to get started today with your digital marketing services!")}
                            className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-base shadow-2xl shadow-emerald-500/25 hover:brightness-110 hover:scale-105 transition-all cursor-pointer"
                        >
                            <MessageSquare className="w-5 h-5 fill-slate-950" />
                            <span>GET STARTED TODAY</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
