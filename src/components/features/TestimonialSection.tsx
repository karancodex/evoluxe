"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
    {
        name: "Aurelia V.",
        location: "Monaco",
        text: "EVOLX Studio didn't just design my home; they captured the rhythm of my soul in every piece of marble and beam of light.",
        image: "/assets/bedroom_luxury.png"
    },
    {
        name: "Maximilian R.",
        location: "Zurich",
        text: "The architectural intelligence displayed in the spatial planning transformed our vision into a ritual of pure elegance.",
        image: "/assets/dining_luxury.png"
    }
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);

    return (
        <section className="bg-white text-charcoal section-padding overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-[16/9] overflow-hidden border border-charcoal/5 shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1.5 }}
                            src={testimonials[index].image}
                            className="w-full h-full object-cover grayscale-[0.2]"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20 opacity-60" />
                </div>

                <div>
                    <span className="text-gold text-[10px] uppercase tracking-[1em] mb-12 block">Client Reflections</span>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-charcoal text-3xl md:text-5xl font-serif italic mb-10 leading-relaxed max-w-xl">
                                "{testimonials[index].text}"
                            </h3>
                            <div className="flex items-center gap-6">
                                <div className="w-8 h-[1px] bg-gold" />
                                <div className="flex flex-col">
                                    <span className="text-gold text-[12px] uppercase tracking-widest font-bold">{testimonials[index].name}</span>
                                    <span className="text-charcoal/30 text-[9px] uppercase tracking-widest">{testimonials[index].location}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-16 flex gap-12">
                        <button
                            onClick={() => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                            className="text-charcoal/40 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.5em] flex items-center gap-4 group"
                        >
                            <div className="w-6 h-[1px] bg-charcoal/10 group-hover:bg-gold transition-colors" />
                            Prev
                        </button>
                        <button
                            onClick={() => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                            className="text-charcoal/40 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.5em] flex items-center gap-4 group"
                        >
                            Next
                            <div className="w-6 h-[1px] bg-charcoal/10 group-hover:bg-gold transition-colors" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
