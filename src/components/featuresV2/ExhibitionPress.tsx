"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const press = [
    {
        outlet: "Architectural Digest",
        title: "The Modern Soul of IVORY",
        year: "2025",
        image: "/assets/portfolio_paris.png",
        quote: "Evoluxe isn't just building rooms; they are curating emotional legacies through spatial precision."
    },
    {
        outlet: "Vogue Living",
        title: "Bespoke Sanctuaries in Zurich",
        year: "2024",
        image: "/assets/portfolio_zurich.png",
        quote: "A rare blend of high-fashion aesthetics and architectural grounding that redefines luxury."
    },
    {
        outlet: "Wallpaper*",
        title: "Redefining High-Art Living",
        year: "2024",
        image: "/assets/hotel_commercial.png",
        quote: "Minimalism meets monumentalism. A vision that bridges the gap between art and dwelling."
    },
    {
        outlet: "Elle Decor",
        title: "The Craft of Evoluxe",
        year: "2023",
        image: "/assets/craft_details.png",
        quote: "Hand-charred timbers and rare marbles collide in a symphony of tactile perfection."
    }
];

export default function ExhibitionPress() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#050505] text-white py-40 overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 mb-24 flex items-center justify-between">
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-gold text-[10px] uppercase tracking-[1.2em] font-bold block mb-4"
                    >
                        Accolades
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-white/90">The Editorial <span className="text-gold">Archive.</span></h2>
                </div>
                <div className="hidden lg:block w-32 h-px bg-white/10" />
            </div>

            <div className="flex flex-col lg:flex-row h-full border-y border-white/5">
                {/* Side Selector */}
                <div className="w-full lg:w-1/3 border-r border-white/5 flex flex-col group/menu">
                    {press.map((item, i) => (
                        <button
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            className={`relative flex flex-col justify-center px-10 py-16 border-b border-white/5 transition-all duration-700 overflow-hidden ${activeIndex === i ? 'bg-white/[0.03]' : 'bg-transparent'}`}
                        >
                            <div className="relative z-10">
                                <span className={`text-[10px] uppercase tracking-[0.5em] mb-4 block transition-all duration-500 ${activeIndex === i ? 'text-gold translate-x-4' : 'text-white/20'}`}>
                                    {item.outlet}
                                </span>
                                <h3 className={`text-2xl md:text-3xl font-serif transition-all duration-700 ${activeIndex === i ? 'text-white translate-x-6' : 'text-white/40'}`}>
                                    {item.title}
                                </h3>
                            </div>
                            {/* Animated Background Indicator */}
                            {activeIndex === i && (
                                <motion.div
                                    layoutId="press-indicator"
                                    className="absolute inset-y-0 left-0 w-1 bg-gold shadow-[0_0_20px_rgba(197,160,89,0.5)]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Main Dynamic Stage */}
                <div className="w-full lg:w-2/3 relative h-[500px] lg:h-auto overflow-hidden bg-black">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.2, x: 50 }}
                            animate={{ opacity: 0.6, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.1, x: -50 }}
                            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                            className="absolute inset-0 z-0"
                        >
                            <img
                                src={press[activeIndex].image}
                                className="w-full h-full object-cover"
                                alt="Press Feature"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-12 lg:p-32">
                        <div className="max-w-xl text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <div className="flex justify-center mb-10">
                                        <div className="w-12 h-px bg-gold/50" />
                                        <span className="mx-6 text-gold italic font-serif text-2xl">“</span>
                                        <div className="w-12 h-px bg-gold/50" />
                                    </div>
                                    <h4 className="text-2xl md:text-4xl font-serif leading-relaxed italic text-white/90 mb-12">
                                        {press[activeIndex].quote}
                                    </h4>
                                    <div className="flex flex-col items-center">
                                        <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-2">Featured Publication</span>
                                        <span className="text-white/40 text-[9px] uppercase tracking-widest">{press[activeIndex].year} Edition</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Subtle Parallax Decorative Text */}
                    <div className="absolute bottom-12 right-12 z-20 pointer-events-none opacity-10">
                        <span className="text-9xl font-serif text-white italic whitespace-nowrap overflow-hidden">
                            EDITORIAL
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-20 container mx-auto px-6 text-center">
                <p className="text-white/20 text-[10px] uppercase tracking-[1em] animate-pulse">
                    The Global Synthesis of Luxury.
                </p>
            </div>
        </section>
    );
}
