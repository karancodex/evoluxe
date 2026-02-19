"use client";

import { motion } from "framer-motion";

const TimelineStep = ({ num, title, desc, index }: { num: string, title: string, desc: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col gap-6"
    >
        <div className="flex items-center gap-6">
            <span className="text-gold font-serif italic text-2xl">{num}</span>
            <div className="flex-1 h-[1px] bg-white/10" />
        </div>
        <h4 className="text-ivory font-serif text-xl italic">{title}</h4>
        <p className="text-ivory/40 text-[10px] uppercase tracking-widest leading-loose max-w-xs">{desc}</p>
    </motion.div>
);

const V3Timeline = () => {
    const steps = [
        { num: "01", title: "Discovery & Vastu", desc: "Free 3D session at our studio or virtually. We map your lifestyle and Vastu preferences." },
        { num: "02", title: "Technical Survey", desc: "Laser-guided site measurements to ensure millimeter precision for all modular units." },
        { num: "03", title: "Dual Development", desc: "Factory production begins while our civil team handles electrical and ceiling work on-site." },
        { num: "04", title: "Concierge Handover", desc: "Final 146+ quality checks and a professional photoshoot of your new evolved sanctuary." }
    ];

    return (
        <section id="process" className="py-32 bg-brand-black">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-gold text-[10px] uppercase tracking-[1em] mb-6 block font-bold">The Service Journey</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-ivory leading-tight">
                            From Vision to <span className="italic">Verification</span>.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gold text-3xl font-serif">45 Days</span>
                        <span className="text-ivory/30 text-[8px] uppercase tracking-widest leading-none">Standard Project Duration</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
                    {steps.map((step, i) => (
                        <TimelineStep key={i} {...step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default V3Timeline;
