"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useConsultation } from "./providers/ConsultationProvider";

const MeetDesignerBanner = () => {
    const { openConsultation } = useConsultation();

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
                    className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-white mb-8 md:mb-12 leading-[1.1] drop-shadow-2xl px-2"
                >
                    Your <span className="italic font-medium text-[#c5a059]">dream home</span> is <br className="hidden sm:block" /> just a click away
                </motion.h2>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={openConsultation}
                    className="px-8 sm:px-12 py-4 sm:py-5 bg-[#eb595f] text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-[#2d2412] transition-all transform hover:-translate-y-1 hover:shadow-2xl uppercase tracking-widest border border-white/20 backdrop-blur-sm"
                >
                    Get Started
                </motion.button>
            </div>
        </section>
    );
};

export default MeetDesignerBanner;
