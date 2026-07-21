import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { HiLightningBolt, HiStar, HiTrendingUp, HiBriefcase, HiCubeTransparent } from 'react-icons/hi';

const plans = [
    {
        name: 'STARTER',
        price: '₹2,500 – ₹7,000',
        description: 'Perfect for individuals, freelancers, startups, and local businesses looking to establish their online presence.',
        bestFor: ['Freelancers', 'Portfolios', 'Startups'],
        icon: HiLightningBolt,
        accent: 'from-blue-400 to-blue-600',
        textAccent: 'text-blue-400',
        glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-500/30',
        badge: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
        button: 'bg-blue-600 hover:bg-blue-500',
        features: [
            'Up to 3 Pages',
            'Responsive Design',
            'Contact Form',
            'Basic SEO',
            'Social Links',
            'Fast Loading'
        ],
        cta: 'Get Started'
    },
    {
        name: 'STANDARD',
        price: '₹7,500 – ₹12,000',
        description: 'Ideal for growing businesses needing a stronger online identity.',
        bestFor: ['Local Business', 'Cafes', 'Agencies'],
        icon: HiStar,
        accent: 'from-emerald-400 to-emerald-600',
        textAccent: 'text-emerald-400',
        glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-emerald-500/30',
        badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
        button: 'bg-emerald-600 hover:bg-emerald-500',
        features: [
            'Up to 5 Pages',
            'Image Gallery',
            'Service Pages',
            'Contact Form',
            'Google Maps',
            'SEO Ready',
            'Animations'
        ],
        cta: 'Choose Standard'
    },
    {
        name: 'GROWTH',
        price: '₹15,000 – ₹19,000',
        description: 'Powerful business website with dynamic content management.',
        bestFor: ['Gyms', 'Restaurants', 'Retail'],
        icon: HiTrendingUp,
        accent: 'from-purple-400 to-purple-600',
        textAccent: 'text-purple-400',
        glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] border-purple-500/40 hover:border-purple-400/60',
        badge: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
        button: 'bg-purple-600 hover:bg-purple-500 text-white',
        features: [
            'Blog System',
            'Admin Panel',
            'Dashboard',
            'Dynamic Content',
            'User Management',
            'SEO',
            'Analytics Ready'
        ],
        cta: 'Grow My Business',
        popular: true
    },
    {
        name: 'PROFESSIONAL',
        price: '₹20,000 – ₹27,000',
        description: 'Advanced business platform built for established companies.',
        bestFor: ['Companies', 'E-commerce', 'Tech'],
        icon: HiBriefcase,
        accent: 'from-orange-400 to-orange-600',
        textAccent: 'text-orange-400',
        glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:border-orange-500/30',
        badge: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
        button: 'bg-orange-600 hover:bg-orange-500',
        features: [
            'Unlimited Pages',
            'Advanced CMS',
            'Multiple Admin Roles',
            'API Integration',
            'Analytics Dashboard',
            'Security',
            'Premium Animations'
        ],
        cta: 'Go Professional'
    },
    {
        name: 'CUSTOM',
        price: '₹30,000 – ₹50,000+',
        description: 'Completely tailored solution designed specifically for your business requirements.',
        bestFor: ['Enterprise', 'SaaS', 'Custom Apps'],
        icon: HiCubeTransparent,
        accent: 'from-amber-300 to-amber-500',
        textAccent: 'text-amber-400',
        glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:border-amber-500/30',
        badge: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
        button: 'bg-amber-500 hover:bg-amber-400 text-black',
        features: [
            'Custom UI/UX',
            'ERP / CRM',
            'SaaS Platform',
            'Booking Systems',
            'E-commerce',
            'AI Integrations',
            'Custom APIs',
            'Enterprise Ready'
        ],
        cta: 'View Custom Solutions'
    }
];

const WebsitePlans = () => {
    return (
        <section className="relative py-24 w-full overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#080808] -z-20"></div>
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10 mix-blend-overlay"></div>

            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Our Website Packages</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
                    >
                        Choose The Perfect Plan <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">For Your Business</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-gray-400"
                    >
                        Whether you&apos;re starting a new business or scaling an established brand, we have the perfect website package for every stage of your growth.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-6 items-stretch">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`group relative flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[400px] bg-[#111] border border-white/10 rounded-[20px] overflow-hidden transition-all duration-300 ${plan.glow} ${plan.popular ? 'lg:-mt-2 lg:mb-2 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                )}

                                <div className="p-6 flex flex-col flex-1 relative z-10">

                                    {/* Header: Badge & Popular Tag */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-2.5 py-1 text-[10px] font-bold rounded-md border tracking-wide uppercase ${plan.badge}`}>
                                            {plan.name}
                                        </div>
                                        {plan.popular && (
                                            <div className="flex items-center gap-1 text-[10px] font-bold text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2 py-1 rounded-md uppercase tracking-wider">
                                                <HiStar className="w-3 h-3" /> Most Popular
                                            </div>
                                        )}
                                        {!plan.popular && (
                                            <Icon className={`w-5 h-5 ${plan.textAccent} opacity-80`} />
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div className="mb-2 flex items-baseline gap-1.5">
                                        <motion.div className={`text-2xl sm:text-[28px] font-extrabold tracking-tight group-hover:scale-[1.02] origin-left transition-transform duration-300 ${plan.textAccent}`}>
                                            {plan.price.split(' – ')[0]}
                                        </motion.div>
                                        {plan.price.split(' – ')[1] && (
                                            <div className="text-sm font-medium text-gray-500">
                                                - {plan.price.split(' – ')[1]}
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-[16px] text-gray-400 leading-snug mb-5 min-h-[40px]">
                                        {plan.description}
                                    </p>

                                    {/* Best For Chips */}
                                    <div className="mb-5">
                                        <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Ideal For</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {plan.bestFor.map((item, i) => (
                                                <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-white/10 mb-5"></div>

                                    {/* Features - 2 Column Grid */}
                                    <ul className="grid grid-cols-2 gap-x-3 gap-y-3.5 mb-6 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                <FaCheck className={`mt-[4px] flex-shrink-0 text-[10px] ${plan.textAccent}`} />
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button Pinned to Bottom */}
                                    <Link
                                        to="/templates"
                                        state={{ category: plan.name.toLowerCase() }}
                                        className={`mt-auto w-full py-3 rounded-xl flex items-center justify-center text-sm font-semibold text-white transition-all duration-300 relative overflow-hidden group/btn ${plan.button}`}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                                            {plan.cta}
                                        </span>
                                    </Link>
                                </div>

                                {/* Inner Card Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.accent} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 z-0 pointer-events-none`}></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-[#111] border border-white/10 rounded-[24px] p-8 md:p-10 relative overflow-hidden max-w-4xl mx-auto shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-30 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Still Not Sure?</h3>
                            <p className="text-sm text-gray-400">Need help choosing the right package for your specific needs?</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

                            <Link to="/contact" className="px-6 py-3 text-sm rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] whitespace-nowrap inline-flex items-center justify-center">
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WebsitePlans;
