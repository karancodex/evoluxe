"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Luxury Residential Interiors",
        description: "Bespoke living environments tailored to your unique lifestyle. We handle every detail from spatial planning to the final styling.",
        image: "/assets/residential_luxury.png",
    },
    {
        title: "Villas & Penthouses",
        description: "Grand architectural statements. We design multi-level residences with a focus on flow, views, and indoor-outdoor living.",
        image: "/assets/villa_exterior.png",
    },
    {
        title: "Boutique Hospitality",
        description: "Premium commercial spaces that offer guests a truly immersive luxury experience. From lobby to suite.",
        image: "/assets/hotel_commercial.png",
    },
    {
        title: "Custom Furniture & Curation",
        description: "Sourcing and designing one-of-a-kind pieces that cannot be found elsewhere. Exclusive material selection.",
        image: "/assets/craft_details.png",
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-[#f8f7f4]">
            <section className="relative h-[80vh] flex items-center overflow-hidden mb-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/services_hero.png"
                        className="w-full h-full object-cover opacity-20"
                        alt="Services Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f7f4] via-transparent to-[#f8f7f4]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl pt-20">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-8 font-bold"
                        >
                            Privileged Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-7xl md:text-9xl font-serif text-[#1a1a1a] mb-12 leading-none uppercase tracking-tighter"
                        >
                            Spatial <br />
                            <span className="italic">Excellence.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-[#4a4a4a] text-[10px] uppercase tracking-[0.4em] font-bold max-w-sm"
                        >
                            Curating bespoke environments for the world's most discerning individuals.
                        </motion.p>
                    </div>
                </div>
            </section>

            {services.map((service, index) => (
                <section key={index} className="border-t border-black/5 py-32 overflow-hidden bg-white">
                    <div className="container mx-auto px-6">
                        <div className={`flex flex-col md:flex-row items-center gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.2 }}
                                    className="relative aspect-[4/3] group overflow-hidden shadow-2xl"
                                >
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                                </motion.div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 md:px-0">
                                <span className="text-gold text-[12px] font-serif italic mb-6 block font-bold">Step 0{index + 1}</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-8 tracking-tight">{service.title}</h2>
                                <p className="text-[#4a4a4a] leading-loose text-lg mb-12 max-w-lg font-light">
                                    {service.description}
                                </p>
                                <button className="text-gold border-b border-gold/30 pb-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-black hover:border-black transition-all">
                                    Inquire for Details
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="py-40 bg-[#1a1a1a] text-center">
                <h2 className="text-gold-soft text-4xl font-serif mb-12 italic max-w-2xl mx-auto">Elevate your living experience to a work of art.</h2>
                <button className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold transition-colors">
                    Request an Appointment
                </button>
            </section>
        </div>
    );
}
