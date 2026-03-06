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
        <section className="py-24 bg-[#fbf7fd]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#eb595f] font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 block">Clarifying Every Detail</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#2d2412] leading-tight mb-4">{title}</h2>
                        <p className="text-[#2d2412]/60 text-base sm:text-lg max-w-xl mx-auto font-light">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Contact Support */}
                    <div className="lg:col-span-4 text-center lg:text-left">
                        <p className="text-[#2d2412]/60 text-lg leading-relaxed mb-8">
                            Can't find the answer you're looking for?
                        </p>
                        <button className="text-[#eb595f] font-semibold underline decoration-[#eb595f]/30 underline-offset-4 hover:decoration-[#eb595f] transition-all">
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
                                        className={`border-b border-[#4d3b1a]/10 transition-colors duration-300 ${isOpen ? "pb-6" : "pb-4"}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-start justify-between py-4 text-left group"
                                        >
                                            <span className={`font-serif text-lg md:text-2xl transition-colors duration-300 ${isOpen ? "text-[#eb595f]" : "text-[#2d2412] group-hover:text-[#eb595f]"}`}>
                                                {item.q}
                                            </span>
                                            <span className="ml-6 mt-1 flex-shrink-0 text-[#2d2412]/40 group-hover:text-[#eb595f] transition-colors">
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
                                                    <p className="text-[#2d2412]/70 text-lg leading-relaxed max-w-3xl pr-8">
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
