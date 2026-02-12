"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "Intention",
        detail: "Conceptualizing the spiritual core.",
        duration: "02-04 Weeks"
    },
    {
        title: "Excavation",
        detail: "Stripping the volume to its truth.",
        duration: "06-08 Weeks"
    },
    {
        title: "Illumination",
        detail: "Orchestrating light and shadow.",
        duration: "04-06 Weeks"
    },
    {
        title: "Manifesto",
        detail: "The final material synthesis.",
        duration: "12-24 Weeks"
    }
];

export default function V2Process() {
    return (
        <section className="py-60 bg-[#fafaf9] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold text-[10px] uppercase tracking-[1em] block mb-8 font-black"
                        >
                            The Methodology
                        </motion.span>
                        <h2 className="">
                            Architectural <br />
                            <span className="italic text-gold-soft">Precision.</span>
                        </h2>
                    </div>
                    <p className="text-[#1a1a1a]/40 text-lg font-serif italic max-w-sm leading-relaxed text-right pb-4 border-b border-gold/20">
                        "Every millimetre is a calculated decision in the pursuit of spatial absolute."
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1.2 }}
                            className="group grid grid-cols-1 md:grid-cols-12 items-center py-16 border-t border-[#1a1a1a]/5 hover:bg-white transition-all duration-700 px-8"
                        >
                            <div className="md:col-span-1">
                                <span className="text-gold text-[10px] font-serif font-black">0{i + 1}</span>
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-[#1a1a1a] text-4xl font-serif tracking-tight group-hover:italic transition-all duration-700">{step.title}</h3>
                            </div>
                            <div className="md:col-span-4">
                                <p className="text-[#1a1a1a]/40 text-[10px] uppercase tracking-widest font-bold">{step.detail}</p>
                            </div>
                            <div className="md:col-span-3 text-right">
                                <span className="text-[#1a1a1a] text-lg font-serif italic opacity-20 group-hover:opacity-100 transition-opacity">{step.duration}</span>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-[#1a1a1a]/5" />
                </div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative aspect-[16/6] bg-white border border-gold/20 overflow-hidden flex items-center justify-center p-20 shadow-xl"
                    >
                        <img src="/assets/v2_sketch.png" className="absolute inset-0 w-full h-full object-cover opacity-100" alt="Process Sketch" />
                        <span className="relative z-10 text-[#1a1a1a] text-[10px] uppercase tracking-[1em] font-black italic">The Blueprint of Silence</span>
                    </motion.div>
                    <div className="space-y-12">
                        <p className="text-[#1a1a1a] text-xl font-serif leading-relaxed italic">
                            "Our process is not a linear advancement, but a cyclical refinement. We iterate until the architecture disappears and only the experience remains."
                        </p>
                        <button className="text-[10px] uppercase tracking-[0.5em] font-black text-gold border-b border-gold/40 pb-2">Download Studio Manifesto</button>
                    </div>
                </div>

            </div>
        </section>
    );
}
