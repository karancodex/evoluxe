"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rawLogos = [
    { name: "Crompton", src: "/v4/brand/Crompton.webp" },
    { name: "Partner 1", src: "/v4/brand/D Partners logo184x83-06.webp" },
    { name: "Partner 2", src: "/v4/brand/D Partners logo184x83-07.webp" },
    { name: "Partner 3", src: "/v4/brand/D Partners logo184x83-11.webp" },
    { name: "Heritage", src: "/v4/brand/Heritage.webp" },
    { name: "Merino", src: "/v4/brand/Merino.webp" },
    { name: "Fevicol", src: "/v4/brand/fev02.jpg" },
];

// Duplicate logos enough times to create a seamless loop
const logos = [...rawLogos, ...rawLogos, ...rawLogos, ...rawLogos];

const Partners = () => {
    return (
        <section className="pt-6 pb-12 md:pt-10 md:pb-16 bg-white border-t border-[#faf9f6] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Standardized Header Style */}
                <div className="text-center mb-12 md:mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Supply Chain</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Collaborating with <br className="hidden md:block" />
                        <span className="text-[#eb595f] italic font-medium opacity-90">Industry Leaders.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        We partner with the world's most trusted brands to ensure uncompromising quality in every corner of your home.
                    </motion.p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden flex">
                <motion.div
                    className="flex items-center gap-16 md:gap-24 flex-nowrap min-w-full px-8"
                    animate={{ x: "-50%" }}
                    initial={{ x: "0%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed here (slower is more premium)
                    }}
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="relative w-32 h-20 md:w-36 md:h-20 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={144}
                                height={80}
                                className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            </div>
        </section>
    );
};

export default Partners;
