"use client";

import { motion } from "framer-motion";

const steps = [
    { step: "01", title: "Discovery Consultation", desc: "Understanding your lifestyle, aspirations, and the soul of the space." },
    { step: "02", title: "Concept & Moodboard", desc: "Developing a unique design language with material and color palettes." },
    { step: "03", title: "Spatial Planning", desc: "Optimizing flow and functionality through architectural precision." },
    { step: "04", title: "Material Curation", desc: "Hand-selecting the finest stones, woods, and fabrics from around the world." },
    { step: "05", title: "3D Visualization", desc: "Immersive photorealistic walkthroughs of your future sanctuary." },
    { step: "06", title: "Execution & Supervision", desc: "Partnering with master artisans for flawless project delivery." },
    { step: "07", title: "Styling & Handover", desc: "The final layer of soul. Curating art, objects, and bespoke elements." }
];

export default function ProcessPage() {
    return (
        <div className="pt-32 bg-black overflow-hidden">
            <section className="container mx-auto px-6 mb-32 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-8"
                >
                    The Journey
                </motion.span>
                <h1 className="text-6xl md:text-8xl font-serif text-gold-soft mb-12 uppercase">
                    From Vision <br />
                    <span className="italic">to Reality.</span>
                </h1>
            </section>

            <section className="pb-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-2">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.2, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.8 }}
                                className="group border-t border-white/5 py-12 flex flex-col md:flex-row items-baseline gap-12 hover:bg-white/5 transition-colors px-6"
                            >
                                <span className="text-gold font-serif text-4xl italic">{item.step}</span>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-4xl font-serif text-gold-soft mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-white/40 text-sm max-w-xl leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="hidden md:block w-24 h-[1px] bg-gold/20 group-hover:w-48 transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="h-screen bg-charcoal flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10 grayscale">
                    <img src="/assets/hero.png" className="w-full h-full object-cover" />
                </div>
                <div className="text-center relative z-10 px-6">
                    <h2 className="text-gold-soft text-5xl md:text-7xl font-serif mb-12">The Turnkey Masterpiece.</h2>
                    <p className="text-white/60 mb-12 max-w-2xl mx-auto">
                        Our process is designed to be as seamless as the spaces we create. We manage the complexity, you enjoy the evolution.
                    </p>
                    <button className="px-12 py-5 border border-gold text-gold text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all">
                        Request Full Process PDF
                    </button>
                </div>
            </section>
        </div>
    );
}
