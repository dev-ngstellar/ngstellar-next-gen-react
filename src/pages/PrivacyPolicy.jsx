import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Helmet>
                <title>Privacy Policy - NG Stellar</title>
                <meta
                    name="description"
                    content="Read our Privacy Policy to understand how we handle your data."
                />
                <meta
                    name="keywords"
                    content="Privacy Policy, Data Protection, GDPR, User Rights, Data Security, Terms of Service"
                />
            </Helmet>
            {/* Header Banner - Matching TermsAndConditions Style */}
            <div className="relative w-full pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-12 md:pb-16 overflow-hidden bg-[#020617]">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-secondary-950 opacity-90"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-secondary-900/20 to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary-900/20 to-transparent blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-20 z-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300">Policy</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base font-medium">
                        Published and effective on: <span className="text-slate-200">December 17, 2025</span>
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto px-6 mt-8 md:mt-12 relative z-1 pb-12 md:pb-16"
            >
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-12 text-slate-300 shadow-2xl">

                    <p className="leading-relaxed mb-8 text-lg">
                        NGStellar Solutions Private Limited (“NGStellar”, “we”, “us”, or “our”) respects your privacy. This policy explains how we collect, use, and protect your information when you use our website ngstellar.com or services.
                    </p>

                    <div className="space-y-10">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">1</span>
                                Information We Collect
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500">
                                <li><strong className="text-white">Personal Info:</strong> Name, email, phone, company details, payment info.</li>
                                <li><strong className="text-white">Non-Personal Info:</strong> IP address, browser type, pages visited, cookies, and analytics.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">2</span>
                                How We Use Your Information
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                {["Provide and manage services", "Respond to inquiries and support requests", "Process payments and billing", "Send updates or promotions (with consent)", "Improve website and services", "Comply with legal obligations"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">3</span>
                                Sharing Your Information
                            </h2>
                            <p className="mb-3">We do not sell your data. We may share information with:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500">
                                <li>Service providers assisting us</li>
                                <li>Legal authorities if required</li>
                                <li>Third parties in case of business transfer</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">4</span>
                                Cookies & Tracking
                            </h2>
                            <p>We use cookies to enhance experience, analyze traffic, and remember preferences. You can manage cookies in your browser settings.</p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">5</span>
                                Security
                            </h2>
                            <p>We take reasonable measures to protect your data but cannot guarantee absolute security.</p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">6</span>
                                Your Rights
                            </h2>
                            <p>You may access, update, or request deletion of your personal data. Contact us at <a href="mailto:contact@ngstellar.com" className="text-secondary-400 hover:text-fuchsia-300 underline">contact@ngstellar.com</a>.</p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">7</span>
                                Children
                            </h2>
                            <p>Services are not for children under 18.</p>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">8</span>
                                Changes
                            </h2>
                            <p>Updates to this policy will be posted with a revised “Last Updated” date. Continued use constitutes acceptance.</p>
                        </section>

                        {/* Section 9 */}
                        <section className="bg-gradient-to-br from-primary-900/30 to-secondary-900/30 border border-white/10 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                9. Contact Us
                            </h2>
                            <div className="space-y-2 text-white">
                                <p className="font-semibold">NGStellar Solutions Private Limited</p>
                                <p>151/18, D R Avenue 1, Netaji Nagar, Moolapalayam<br />Erode, Tamil Nadu 638002, India</p>
                                <p className="flex items-center gap-2 mt-4"><span className="text-secondary-400">📞</span> +91 97109 09727</p>
                                <p className="flex items-center gap-2"><span className="text-secondary-400">📧</span> contact@ngstellar.com</p>
                                <p className="flex items-center gap-2"><span className="text-secondary-400">🌐</span> ngstellar.com</p>
                            </div>
                        </section>

                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;