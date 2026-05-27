import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { FaShareAlt } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Helmet>
                <title>Terms & Conditions - NG Stellar</title>
                <meta
                    name="description"
                    content="Review the terms and conditions for using NG Stellar's services."
                />
                <meta
                    name="keywords"
                    content="Terms and Conditions, User Agreement, Legal Terms, Service Agreement, Liability, Business Policies"
                />
            </Helmet>
            {/* Header Banner */}
            <div className="relative w-full py-24 md:py-32 overflow-hidden bg-[#020617]">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-secondary-950 opacity-90"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-secondary-900/20 to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary-900/20 to-transparent blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-20 z-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                        Terms and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300">Conditions</span>
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
                className="max-w-6xl mx-auto px-6 mt-20 relative z-1 pb-12 md:pb-16"
            >
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-12 text-slate-300 shadow-2xl">
                    
                    <p className="leading-relaxed mb-8 text-lg">
                        Please read these Terms and Conditions (“Terms”) carefully before accessing or using our website and services.
                    </p>

                    <div className="space-y-10">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">1</span>
                                Definitions
                            </h2>
                            <p className="mb-4">Capitalized terms used in these Terms shall have the meanings set out below, whether used in singular or plural form:</p>
                            <ul className="list-disc pl-6 space-y-3 marker:text-primary-500">
                                <li><strong className="text-white">Company</strong> refers to NGStellar Solutions Private Limited, 151/18, D R Avenue 1, Netaji Nagar, Moolapalayam, Erode, Tamil Nadu 638002, India. <br/> 📞 +91-9710909727 | 📧 email@ngstellar.com</li>
                                <li><strong className="text-white">Website</strong> refers to ngstellarsolutions.org.</li>
                                <li><strong className="text-white">Service(s)</strong> refers to website development, mobile application development, digital marketing, branding services, technology solutions, and consulting services offered by the Company.</li>
                                <li><strong className="text-white">You / Client / User</strong> means any individual or legal entity accessing or using the Website or Services.</li>
                                <li><strong className="text-white">Agreement</strong> means these Terms and Conditions together with any proposal, statement of work, or written contract entered into between You and the Company.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">2</span>
                                Acceptance of Terms
                            </h2>
                            <p className="leading-relaxed mb-3">By accessing the Website or engaging our Services, You confirm that You have read, understood, and agree to be bound by these Terms. If You do not agree, You must not use the Website or Services.</p>
                            <p className="leading-relaxed">You represent that You are at least 18 years of age and legally capable of entering into a binding agreement.</p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">3</span>
                                Scope of Services
                            </h2>
                            <p className="mb-4">NGStellar provides professional services including, but not limited to:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                {["Website design and development", "Mobile application development", "Digital marketing and performance marketing", "Branding and creative services", "Technology solutions", "Business and technology consulting"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div> {item}
                                    </li>
                                ))}
                            </ul>
                            <p>The scope, timelines, deliverables, and pricing for Services shall be defined in a written proposal, agreement, or statement of work. Work outside the agreed scope may require additional fees and revised timelines.</p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">4</span>
                                Client Responsibilities
                            </h2>
                            <p className="mb-3">The Client agrees to:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500 mb-3">
                                <li>Provide accurate, complete, and timely information and approvals</li>
                                <li>Ensure all supplied materials do not infringe third-party rights</li>
                                <li>Cooperate reasonably to enable timely project execution</li>
                            </ul>
                            <p>Delays caused by the Client may impact delivery timelines and costs.</p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">5</span>
                                Fees and Payments
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500">
                                <li>Fees and payment schedules will be specified in the applicable agreement or proposal.</li>
                                <li>All payments must be made within the agreed timelines.</li>
                                <li>Late payments may result in suspension of Services.</li>
                                <li>Unless stated otherwise, all fees are non-refundable.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">6</span>
                                Intellectual Property
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500">
                                <li>Intellectual property rights in materials provided by the Client remain the Client’s property.</li>
                                <li>Ownership of final deliverables transfers to the Client only upon full payment, unless otherwise agreed in writing.</li>
                                <li>NGStellar reserves the right to display completed work in its portfolio and marketing materials unless restricted by a written agreement.</li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">7</span>
                                Third-Party Services
                            </h2>
                            <p>NGStellar may use or recommend third-party tools, platforms, or services. The Company is not responsible for third-party services, including their availability, changes, or policies. Any associated costs shall be borne by the Client unless agreed otherwise.</p>
                        </section>

                        {/* Section 8 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">8</span>
                                Confidentiality
                            </h2>
                            <p>Both parties agree to maintain the confidentiality of all non-public business, technical, and commercial information exchanged during the engagement, unless disclosure is required by law.</p>
                        </section>

                         {/* Section 9 */}
                         <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">9</span>
                                Disclaimer
                            </h2>
                            <p className="mb-3">All Services are provided on an “AS IS” and “AS AVAILABLE” basis. NGStellar does not guarantee specific business results, rankings, revenue, or performance outcomes.</p>
                            <p>While reasonable professional efforts are made, no warranties—express or implied—are provided regarding uninterrupted service, accuracy, or fitness for a particular purpose.</p>
                        </section>

                        {/* Section 10 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">10</span>
                                Limitation of Liability
                            </h2>
                            <p className="mb-2">To the maximum extent permitted by law:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500">
                                <li>NGStellar shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities.</li>
                                <li>NGStellar’s total liability shall not exceed the amount paid by the Client for the specific Service giving rise to the claim.</li>
                            </ul>
                        </section>

                        {/* Section 11 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">11</span>
                                Termination
                            </h2>
                            <p className="mb-2">Either party may terminate Services in accordance with the applicable agreement. Upon termination:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary-500">
                                <li>All completed work must be paid for in full</li>
                                <li>Access to the Services may be suspended immediately</li>
                            </ul>
                        </section>

                        {/* Section 12 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">12</span>
                                Governing Law
                            </h2>
                            <p>These Terms shall be governed by and interpreted in accordance with the laws of Tamil Nadu, India, without regard to conflict of law principles.</p>
                        </section>

                        {/* Section 13 */}
                        <section>
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 text-sm">13</span>
                                Changes to Terms
                            </h2>
                            <p>NGStellar reserves the right to update these Terms at any time. Continued use of the Website or Services after changes take effect constitutes acceptance of the revised Terms.</p>
                        </section>

                        {/* Section 14 */}
                        <section className="bg-gradient-to-br from-primary-900/30 to-secondary-900/30 border border-white/10 rounded-xl p-6">
                             <h2 className="text-2xl font-bold text-white mb-4">
                                14. Contact Information
                            </h2>
                            <p className="mb-4 text-slate-300">For any questions regarding these Terms and Conditions, please contact:</p>
                            <div className="space-y-2 text-white">
                                <p className="font-semibold">NGStellar Solutions Private Limited</p>
                                <p>151/18, D R Avenue 1, Netaji Nagar, Moolapalayam<br/>Erode, Tamil Nadu 638002, India</p>
                                <p className="flex items-center gap-2 mt-4"><span className="text-secondary-400">📞</span> +91 97109 09727</p>
                                <p className="flex items-center gap-2"><span className="text-secondary-400">📧</span> email@ngstellar.com</p>
                                <p className="flex items-center gap-2"><span className="text-secondary-400">🌐</span> ngstellarsolutions.org</p>
                            </div>
                        </section>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TermsAndConditions;
