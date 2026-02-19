"use client";

import { motion } from "framer-motion";

const ServiceCard = ({ title, desc, technical, index }: { title: string, desc: string, technical: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative h-[500px] bg-charcoal rounded-3xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Placeholder for Service Image */}
        <div className="absolute inset-x-0 top-0 h-2/3 bg-white/5 group-hover:bg-white/10 transition-colors" />

        <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <span className="text-gold text-[8px] uppercase tracking-[0.6em] mb-4">Service 0{index + 1}</span>
            <h3 className="text-3xl font-serif text-ivory mb-4 group-hover:italic transition-all">{title}</h3>
            <p className="text-ivory/60 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                {desc}
            </p>
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all delay-100">
                <span className="text-gold/40 text-[8px] uppercase tracking-widest">Technical Edge</span>
                <p className="text-ivory text-xs tracking-wide">{technical}</p>
            </div>
        </div>
    </motion.div>
);

const V3Services = () => {
    const services = [
        {
            title: "Precision Kitchens",
            desc: "Designed for the rhythm of Indian cooking. High-suction systems and heat-resistant modules.",
            technical: "BWP-Grade Plywood, Hafele/Blum Hardware, Specialized Oil-Resistant Surfaces."
        },
        {
            title: "Space Engineering",
            desc: "Floor-to-ceiling wardrobe optimization with integrated smart lighting and moisture control.",
            technical: "High-density polymers, Internal Sensor Lighting, Silent Soft-Close Systems."
        },
        {
            title: "Bespoke Domains",
            desc: "Full home transitions where every foyer and Pooja room tells a cohesive visual story.",
            technical: "Vastu-Integrated Layouts, Architectural Cove Lighting, Custom Textures."
        }
    ];

    return (
        <section id="services" className="py-32 bg-brand-black section-padding">
            <div className="flex flex-col items-center text-center mb-24">
                <span className="text-gold text-[10px] uppercase tracking-[1em] mb-6 block font-bold">Engineering the Dream</span>
                <h2 className="text-4xl md:text-6xl font-serif text-ivory mb-8">
                    The Pulse of <span className="italic">Excellence</span>
                </h2>
                <p className="max-w-2xl text-ivory/40 text-sm uppercase tracking-[0.2em] leading-relaxed">
                    We combine the science of Indian living with the art of European craftsmanship.
                    Every module is a masterclass in durability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <ServiceCard key={i} {...service} index={i} />
                ))}
            </div>
        </section>
    );
};

export default V3Services;
