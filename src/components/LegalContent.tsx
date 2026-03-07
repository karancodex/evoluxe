"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LegalContent = ({ title, lastUpdated = "February 21, 2026" }: { title: string, lastUpdated?: string }) => {
    return (
        <div className="bg-[#fcfcfc] min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#4d3b1a] mb-6">{title}</h1>
                    <div className="w-24 h-1.5 bg-[#c5a059] mx-auto mb-6 rounded-full" />
                    <p className="text-stone-400 text-sm font-medium uppercase tracking-[0.2em]">Last Updated: {lastUpdated}</p>
                </motion.div>

                <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-stone-200/50 border border-stone-100 prose prose-stone prose-lg max-w-none">
                    <p className="text-stone-500 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-[#c5a059] first-letter:mr-3 first-letter:float-left">
                        Welcome to EVOLX Studio. Your trust is our most valuable asset. This document outlines our standard practices and the legally binding terms governing your relationship with our services, products, and experiences.
                    </p>

                    <h2 className="text-[#4d3b1a] font-serif font-bold mt-12 mb-6">1. Information We Collect</h2>
                    <p className="text-stone-500 font-light">
                        We collect information to provide better services to all our users. This includes details you provide like your name, email, and property details when engaging with our design experts or using our price calculators.
                    </p>

                    <h2 className="text-[#4d3b1a] font-serif font-bold mt-12 mb-6">2. Use of Information</h2>
                    <p className="text-stone-500 font-light">
                        Your data helps us personalize your design journey. We use it to coordinate consultation sessions, provide accurate project estimates, and keep you updated on the latest trends and project milestones.
                    </p>

                    <h2 className="text-[#4d3b1a] font-serif font-bold mt-12 mb-6">3. Quality Commitment</h2>
                    <p className="text-stone-500 font-light">
                        All our services are backed by our signature quality checks and 10-year warranty on modular products. We adhere strictly to the timelines agreed upon in the project charter.
                    </p>

                    <div className="mt-16 p-8 bg-[#faf9f6]/40 rounded-3xl border border-[#e5d5b0]/20">
                        <h4 className="text-[#c5a059] font-bold mb-2 uppercase tracking-widest text-sm">Need Clarification?</h4>
                        <p className="text-stone-600 text-sm italic">If you have any questions about our {title.toLowerCase()}, please reach out to our compliance team at legal@evolxstudio.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalContent;
