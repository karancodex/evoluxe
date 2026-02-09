"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Luxury Residential Interiors",
        description: "Bespoke living environments tailored to your unique lifestyle. We handle every detail from spatial planning to the final styling.",
        image: "/assets/hero.png",
    },
    {
        title: "Villas & Penthouses",
        description: "Grand architectural statements. We design multi-level residences with a focus on flow, views, and indoor-outdoor living.",
        image: "/assets/hero.png", // reusing for now
    },
    {
        title: "Boutique Hospitality",
        description: "Premium commercial spaces that offer guests a truly immersive luxury experience. From lobby to suite.",
        image: "/assets/hero.png",
    },
    {
        title: "Custom Furniture & Curation",
        description: "Sourcing and designing one-of-a-kind pieces that cannot be found elsewhere. Exclusive material selection.",
        image: "/assets/marble.png",
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 bg-black">
            <section className="container mx-auto px-6 mb-32">
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-8"
                    >
                        Privileged Services
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-serif text-gold-soft mb-12 leading-none uppercase"
                    >
                        Spatial <br />
                        <span className="italic">Excellence.</span>
                    </motion.h1>
                </div>
            </section>

            {services.map((service, index) => (
                <section key={index} className="border-t border-white/10 py-32 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className={`flex flex-col md:flex-row items-center gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="relative aspect-video"
                                >
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-0 border border-gold/10 m-4" />
                                </motion.div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 md:px-0">
                                <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6 block">0{index + 1}</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">{service.title}</h2>
                                <p className="text-white/40 leading-loose text-lg mb-12 max-w-lg">
                                    {service.description}
                                </p>
                                <button className="text-gold border-b border-gold/30 pb-2 text-[10px] uppercase tracking-[0.3em] hover:text-white hover:border-white transition-all">
                                    Inquire for Details
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="py-40 bg-charcoal text-center">
                <h2 className="text-gold-soft text-3xl font-serif mb-8 italic">Interested in a turnkey solution?</h2>
                <button className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold transition-colors">
                    View Execution Process
                </button>
            </section>
        </div>
    );
}
