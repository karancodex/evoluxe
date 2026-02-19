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
        <section className="py-20 bg-white border-t border-[#f2eaf7] overflow-hidden">
            <div className="max-w-[1800px] mx-auto text-center mb-12 px-6">
                <span className="text-[#9d5db5] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Excellence in Every Detail</span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#2b0d3e]">Collaborating with Industry Leaders</h2>
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
