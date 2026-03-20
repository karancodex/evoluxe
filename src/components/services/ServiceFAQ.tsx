"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    q: string;
    a: string;
}

interface ServiceFAQProps {
    faqs?: FAQItem[];
    title: string;
    accentColor?: string;
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs, title, accentColor = "#eb595f" }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Left Column: Header */}
                    <div className="lg:col-span-12 xl:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                            style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}20` }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                            <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>Clarifying Every Detail</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2d2412] mb-8 tracking-tight leading-[1.1]">
                            The <span className="italic font-medium" style={{ color: accentColor }}>Inside</span> Facts.
                        </h2>

                        <p className="text-[#2d2412]/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
                            Everything you need to know about our {title} process, materials, and delivery guarantees.
                        </p>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`border-b border-stone-100 transition-all duration-300 ${isOpen ? "pb-8" : "pb-4"}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-start justify-between py-6 text-left group"
                                        >
                                            <span
                                                className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${isOpen ? "" : "text-[#2d2412]"}`}
                                                style={{ color: isOpen ? accentColor : undefined }}
                                            >
                                                {faq.q}
                                            </span>
                                            <span
                                                className={`ml-6 mt-1 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-45" : "text-stone-300"}`}
                                                style={{ color: isOpen ? accentColor : undefined }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
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
                                                        {faq.a}
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
