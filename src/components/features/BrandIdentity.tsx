"use client";

import { motion } from "framer-motion";

const traits = ["Sophisticated", "Visionary", "Minimal", "Cultured", "Elegant", "Futuristic"];
const colors = [
    { name: "Gold", hex: "#c5a059", desc: "Craft" },
    { name: "Charcoal", hex: "#121212", desc: "Heritage" },
    { name: "Ivory", hex: "#faf9f6", desc: "Culture" },
];

const audiences = [
    {
        title: "Primary Audience",
        image: "/assets/villa_audience.png",
        items: ["High-income Homeowners", "Villa Estate Owners", "Luxury Apartments"]
    },
    {
        title: "Commercial Sector",
        image: "/assets/hotel_commercial.png",
        items: ["Boutique Hotels", "Hospitality Spaces", "Premium Commercial"]
    },
    {
        title: "Industry Partners",
        image: "/assets/studio_partner.png",
        items: ["Real-estate Developers", "Architects", "Project Consultants"]
    }
];

export default function BrandIdentity() {
    return (
        <section className="bg-ivory text-charcoal section-padding border-y border-charcoal/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Left: Personality Traits (Fixed readability with darker text) */}
                <div className="lg:col-span-5">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-12 block">
                        Brand Personality
                    </span>
                    <div className="flex flex-wrap gap-x-12 gap-y-8">
                        {traits.map((trait, i) => (
                            <motion.div
                                key={trait}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col"
                            >
                                <span className="text-3xl md:text-5xl font-serif italic text-charcoal/30 hover:text-gold transition-colors cursor-default hover:opacity-100">
                                    {trait}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-sm">
                        <p className="text-charcoal leading-relaxed font-body">
                            Our personality is defined by a rigorous pursuit of <span className="text-gold italic font-bold">architectural clarity</span> and emotional resonance.
                        </p>
                    </div>
                </div>

                {/* Right: Color Palette */}
                <div className="lg:col-span-7 flex flex-col items-end">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-12 block">
                        The Palette
                    </span>
                    <div className="grid grid-cols-3 gap-8 w-full">
                        {colors.map((color, i) => (
                            <motion.div
                                key={color.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="space-y-6"
                            >
                                <div
                                    className="aspect-[3/4] shadow-2xl border border-charcoal/5"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="text-right">
                                    <span className="block text-[10px] uppercase tracking-widest text-gold font-bold mb-1">{color.name}</span>
                                    <span className="block text-[8px] uppercase tracking-widest text-charcoal/60">{color.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Target Audience with Colorful Images */}
            <div className="mt-32 pt-20 border-t border-charcoal/10 grid grid-cols-1 md:grid-cols-3 gap-16">
                {audiences.map((audience, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="space-y-8"
                    >
                        <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                            <img src={audience.image} alt={audience.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>
                        <div>
                            <span className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-6 font-bold">{audience.title}</span>
                            <ul className="space-y-3 text-sm tracking-widest text-charcoal/80 uppercase font-sans font-medium">
                                {audience.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
