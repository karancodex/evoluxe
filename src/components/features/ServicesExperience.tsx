"use client";

import { motion } from "framer-motion";

const services = [
    { title: "Residential", category: "Spatial Sanctuary", image: "/assets/hero.png" },
    { title: "Commercial", category: "Executive Elegance", image: "/assets/hero.png" },
    { title: "Partnerships", category: "Collaborative Craft", image: "/assets/hero.png" },
    { title: "Bespoke Styling", category: "The Final Note", image: "/assets/hero.png" },
];

export default function ServicesExperience() {
    return (
        <section className="bg-black text-white section-padding">
            <div className="flex flex-col items-center mb-20 text-center">
                <span className="text-gold text-[10px] uppercase tracking-[0.6em] mb-4">Martyn's Projects Style</span>
                <h2 className="text-white-soft uppercase tracking-widest text-4xl md:text-5xl">
                    The Portfolio
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="group relative aspect-[16/10] overflow-hidden bg-charcoal cursor-pointer"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 opacity-100 group-hover:bg-black/20 transition-all">
                            <span className="text-gold text-[9px] uppercase tracking-[0.4em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                {service.category}
                            </span>
                            <h3 className="text-white text-3xl md:text-4xl uppercase tracking-[0.2em] font-light">
                                {service.title}
                            </h3>
                            <div className="mt-6 w-0 h-[1px] bg-gold group-hover:w-20 transition-all duration-700" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <button className="text-gold text-[10px] uppercase tracking-[0.5em] border-b border-gold/30 pb-2 hover:text-white hover:border-white transition-all">
                    View All Projects
                </button>
            </div>
        </section>
    );
}
