"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-amethyst-light/20 last:border-0 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <div className="flex gap-8 items-center">
                    <span className="text-amethyst-primary font-serif italic text-xl opacity-40">0{index + 1}</span>
                    <h4 className={`text-xl md:text-2xl font-serif text-amethyst-dark transition-all ${isOpen ? "italic text-amethyst-primary" : "group-hover:pl-4"}`}>
                        {question}
                    </h4>
                </div>
                <div className={`w-10 h-10 rounded-full border border-amethyst-light/30 flex items-center justify-center transition-all ${isOpen ? "bg-amethyst-primary border-amethyst-primary rotate-45" : "group-hover:bg-amethyst-lightest"}`}>
                    <span className={`text-xl transition-colors ${isOpen ? "text-white" : "text-amethyst-primary"}`}>+</span>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className="pb-10 pl-16 max-w-2xl">
                            <p className="text-amethyst-dark/60 text-lg font-light leading-relaxed font-serif italic">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const V3FAQ = () => {
    const faqs = [
        { question: "What counts as 'Transparent Pricing'?", answer: "At EVOLX Studio, we provide a line-by-line Bill of Quantities (BOQ). We don't use 'package rates' that hide margins. You pay for exactly what goes into your home." },
        { question: "How do you guarantee 45-day delivery?", answer: "Because we own our production cycle and factory queue. Parallel execution of site civil work and factory manufacturing ensures we hit our timelines." },
        { question: "Do you offer Vastu-compliant designs?", answer: "Absolutely. Our lead architects are trained in modern Vastu Shastra principles to ensure positive flow and energy in your home." },
        { question: "What materials do you use for wet areas?", answer: "We use BWP (Boiling Water Proof) multi-grade plywood with 710 certification as standard for all kitchens and bathrooms. No compromises." }
    ];

    return (
        <section id="faq" className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-24">
                <div className="space-y-8">
                    <span className="text-amethyst-primary text-[11px] uppercase tracking-[1em] font-black italic">Curiosity Hub</span>
                    <h2 className="text-4xl md:text-7xl font-serif text-amethyst-dark leading-[1.1]">
                        Everything you <br />
                        <span className="italic font-light">need to know</span>.
                    </h2>
                    <p className="text-amethyst-dark/40 text-[10px] uppercase tracking-[0.2em] font-black leading-loose max-w-xs">
                        Can't find your answer? Our concierge is available for a 1:1 call.
                    </p>
                    <button className="px-10 py-4 bg-amethyst-dark text-white text-[10px] uppercase tracking-widest font-black rounded-xl hover:bg-amethyst-primary transition-all shadow-xl">
                        Contact Support
                    </button>
                </div>

                <div className="lg:col-span-2 bg-amethyst-lightest p-8 md:p-16 rounded-[60px] border border-amethyst-light/20 shadow-2xl shadow-amethyst-dark/5">
                    <div className="divide-y divide-amethyst-light/20">
                        {faqs.map((f, i) => (
                            <FAQItem key={i} {...f} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default V3FAQ;
