"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    id?: number;
    q: string;
    a: string;
}

interface FAQProps {
    items?: FAQItem[];
    title?: string;
    subtitle?: string;
}

const defaultFaqs = [
    {
        id: 1,
        q: "How can I get started with EVOLX Studio?",
        a: "Simply book a free consultation through our website. Our designers will reach out to understand your requirements and schedule a site visit or virtual meeting."
    },
    {
        id: 2,
        q: "What is the typical project timeline?",
        a: "Standard projects are completed within 45 days. Custom luxury projects may take 60-90 days depending on complexity, material availability, and scope of work."
    },
    {
        id: 3,
        q: "How does the design process work?",
        a: "It starts with a detailed consultation, followed by 2D layouts and 3D visualizations. Once you approve the designs and materials, we move to execution and finally, handover."
    },
    {
        id: 4,
        q: "Can I visit an experience center?",
        a: "Yes! We have state-of-the-art experience centers in major cities. We recommend booking an appointment for a personalized guided tour by our experts."
    },
    {
        id: 5,
        q: "What services are included end-to-end?",
        a: "We handle everything from civil work, false ceilings, and electricals to modular furniture, painting, decor, and lighting. A true turnkey solution."
    },
    {
        id: 6,
        q: "Are the designs customizable?",
        a: "Absolutely. We believe your home should reflect your personality. Every design is 100% personalized to your specific taste, budget, and lifestyle needs."
    },
];

const FAQ = ({ items, title = "Frequently Asked Questions", subtitle = "Discover the transparency and process behind our luxury interior design services." }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const displayFaqs = items || defaultFaqs;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Standardized Header Style */}
                <div className="text-center mb-16 md:mb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Clarifying Every Detail</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Frequently Asked <br className="hidden md:block" />
                        <span className="text-[#eb595f] italic font-normal">Questions.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Contact Support */}
                    <div className="lg:col-span-4 text-center lg:text-left">
                        <p className="text-stone-500 text-lg leading-relaxed mb-8">
                            Can't find the answer you're looking for?
                        </p>
                        <button className="text-[#eb595f] font-bold underline decoration-[#eb595f]/30 underline-offset-4 hover:decoration-[#eb595f] transition-all">
                            Contact Support
                        </button>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {displayFaqs.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`border-b border-stone-100 transition-colors duration-300 ${isOpen ? "pb-6" : "pb-4"}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-start justify-between py-6 text-left group"
                                        >
                                            <span className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${isOpen ? "text-[#eb595f]" : "text-[#2d2412] group-hover:text-[#eb595f]"}`}>
                                                {item.q}
                                            </span>
                                            <span className="ml-6 mt-1 flex-shrink-0 text-stone-300 group-hover:text-[#eb595f] transition-colors">
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </motion.div>
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-stone-500 text-lg leading-relaxed max-w-3xl pr-8 font-normal">
                                                        {item.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
