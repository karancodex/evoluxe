"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        id: 1,
        q: "How can I get started with Evoluxe?",
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

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#fbf7fd]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-4">
                        <span className="text-[#9d5db5] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Common Queries</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2b0d3e] mb-6 leading-tight">
                            Frequently Asked <br /> Questions
                        </h2>
                        <p className="text-[#2b0d3e]/60 text-lg leading-relaxed mb-8">
                            Everything you need to know about transforming your home with Evoluxe. Can't find the answer you're looking for?
                        </p>
                        <button className="text-[#2b0d3e] font-semibold underline decoration-[#2b0d3e]/30 underline-offset-4 hover:decoration-[#2b0d3e] transition-all">
                            Contact Support
                        </button>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={item.id}
                                        className={`border-b border-[#2b0d3e]/10 transition-colors duration-300 ${isOpen ? "pb-6" : "pb-4"}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-start justify-between py-4 text-left group"
                                        >
                                            <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${isOpen ? "text-[#7a3f91]" : "text-[#2b0d3e] group-hover:text-[#7a3f91]"}`}>
                                                {item.q}
                                            </span>
                                            <span className="ml-6 mt-1 flex-shrink-0 text-[#2b0d3e]/40 group-hover:text-[#7a3f91] transition-colors">
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
                                                    <p className="text-[#2b0d3e]/70 text-lg leading-relaxed max-w-3xl pr-8">
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
