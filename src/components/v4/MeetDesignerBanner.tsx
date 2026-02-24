"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl border border-[#e5d5b0]/20"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#eb595f] transition-colors text-xl">
                    ✕
                </button>
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-[#2d2412] mb-2">Get Your Free Estimate</h3>
                    <p className="text-[#2d2412]/60 text-sm">Start your journey to a dream home today.</p>
                </div>

                <form className="space-y-4">
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-100 focus:border-[#eb595f] focus:ring-1 focus:ring-[#eb595f] outline-none transition-all placeholder:text-gray-400" placeholder="Name" />
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-100 focus:border-[#eb595f] focus:ring-1 focus:ring-[#eb595f] outline-none transition-all placeholder:text-gray-400" placeholder="Phone Number" />
                    <button type="submit" className="w-full py-3.5 bg-[#eb595f] text-white font-bold rounded-lg hover:bg-[#2d2412] transition-all uppercase tracking-wide shadow-lg mt-2">
                        Get Started
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

const MeetDesignerBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative h-[450px] md:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/v4/interior-living-3d.jpg"
                alt="Dream Home Interior"
                fill
                className="object-cover"
                priority
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight drop-shadow-xl"
                >
                    Your dream home is <br className="hidden sm:block" /> just a click away
                </motion.h2>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={() => setIsModalOpen(true)}
                    className="px-12 py-5 bg-[#eb595f] text-white font-bold text-base md:text-lg rounded-full hover:bg-[#2d2412] transition-all transform hover:-translate-y-1 hover:shadow-2xl uppercase tracking-widest border border-white/20 backdrop-blur-sm"
                >
                    Get Started
                </motion.button>
            </div>

            <AnimatePresence>
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </section>
    );
};

export default MeetDesignerBanner;
