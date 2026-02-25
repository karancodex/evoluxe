"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["View All", "Office", "Living", "Kitchen", "Bathroom"];

// Duplicating and varying images to simulate a rich masonry grid
const rawImages = [
    { id: 1, cat: "Living", src: "/v4/luxury_living_1.png", title: "Modern Serenity" },
    { id: 2, cat: "Kitchen", src: "/v4/luxury_kitchen_2.png", title: "Marble Haven" },
    { id: 3, cat: "Living", src: "/v4/luxury_living_2.png", title: "Urban Penthouse" },
    { id: 4, cat: "Bathroom", src: "/v4/design-session-2.png", title: "Spa Retreat" },
    { id: 5, cat: "Office", src: "/v4/service_wardrobe.png", title: "Executive Suite" },
    { id: 6, cat: "Living", src: "/v4/luxe_banner_bg.png", title: "Lounge Area" },
    { id: 7, cat: "Kitchen", src: "/v4/brand_promise_trust.png", title: "Culinary Art" },
    { id: 8, cat: "Living", src: "/v4/design-session-1.png", title: "Cozy Corner" },
    { id: 9, cat: "Bathroom", src: "/v4/design-session-3.png", title: "Marble Vanity" },
    { id: 10, cat: "Office", src: "/v4/design-session-4.png", title: "Workspace" },
    { id: 11, cat: "Living", src: "/v4/luxury_living_1.png", title: "Sunlit Room" },
    { id: 12, cat: "Kitchen", src: "/v4/luxury_kitchen_2.png", title: "Chef's Dream" },
];

const InspirationGallery = () => {
    const [activeCat, setActiveCat] = useState("View All");

    const filteredImages = activeCat === "View All"
        ? rawImages
        : rawImages.filter(img => img.cat === activeCat);

    return (
        <section className="relative py-16 bg-white min-h-screen">
            <div className="max-w-[1800px] mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-8 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#2d2412] leading-tight">Inspiration for <br className="sm:hidden" /> interior designs</h2>
                </div>
                {/* Bottom Floating Navigation (Simulated from image) */}
                {/* Navigation - Centered below header */}
                <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-4 px-4 scrollbar-hide">
                    <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-2 py-1.5 flex items-center gap-1 border border-black/5 whitespace-nowrap mx-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCat === cat
                                    ? "bg-[#eb595f] text-white shadow-md"
                                    : "bg-transparent text-neutral-600 hover:bg-neutral-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-2 mb-24">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img, index) => (
                            <motion.div
                                key={`${img.id}-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer mb-4"
                            >
                                {/* Aspect Ratio Hack: We let the image define height, but for placeholders we add distinct classes if images fail to load. 
                                    Since we are using next/image with 'width' and 'height' or 'fill', for masonry 'w-full h-auto' is best with intrinsic image size.
                                    Here we simply use w-full and let the natural height dictate flow. */}
                                <div className="relative w-full">
                                    <Image
                                        src={img.src}
                                        alt={img.title}
                                        width={500}
                                        height={600} // Approximate Aspect Ratio will be maintained by CSS 'w-full h-auto'
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>



            </div>
        </section>
    );
};

export default InspirationGallery;
