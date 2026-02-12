"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    { id: 1, title: "Monaco Penthouse", category: "Interior Architecture", image: "/assets/hero.png" },
    { id: 2, title: "Zurich Estate", category: "Spatial Design", image: "/assets/hero.png" },
    { id: 3, title: "Parisian Atelier", category: "Bespoke Styling", image: "/assets/hero.png" },
    { id: 4, title: "Dubai Sky Lounge", category: "Hospitality Concept", image: "/assets/hero.png" },
];

export default function ProjectPortfolio() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative bg-[#000000] py-80 overflow-hidden">
            <div className="container mx-auto px-8 md:px-20 mb-60 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-gold text-[12px] uppercase tracking-[1.5em] block mb-16 opacity-60">
                        Selected Works
                    </span>
                    <h2 className="text-white text-8xl md:text-[14rem] font-serif uppercase leading-[0.8] tracking-tightest mb-12">
                        The <span className="italic text-gold-soft">Gallery</span> <br />
                        Walk.
                    </h2>
                    <div className="w-1 h-32 bg-gradient-to-b from-gold/50 to-transparent mt-12" />
                </motion.div>
            </div>

            <div className="flex flex-col gap-[40vh] relative z-10">
                {projects.map((project, index) => (
                    <GalleryItem key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Background Decorative Frame */}
            <div className="absolute inset-x-20 inset-y-80 border border-white/[0.03] pointer-events-none" />
        </section>
    );
}

function GalleryItem({ project, index }: { project: any, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.5, 1, 0.5, 0]);
    const z = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, -300]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, perspective: "2000px" }}
            className="relative h-screen flex items-center justify-center px-12 md:px-32"
        >
            <motion.div
                style={{ translateZ: z }}
                className="relative w-full max-w-[1600px] aspect-[21/9] md:aspect-[16/7] group"
            >
                {/* Gallery Lighting Effect */}
                <div className="absolute -inset-20 bg-gold/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Frame Structure */}
                <div className="absolute inset-0 border border-white/5 z-20 pointer-events-none group-hover:border-gold/40 transition-all duration-1000" />
                <div className="absolute inset-[-1px] border border-white/10 z-20 pointer-events-none" />

                {/* Immersive Image */}
                <div className="absolute inset-0 overflow-hidden bg-charcoal">
                    <motion.img
                        initial={{ scale: 1.3 }}
                        whileInView={{ scale: 1.1 }}
                        transition={{ duration: 4, ease: "easeOut" }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-2000"
                    />
                </div>

                {/* Content Reveal Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-between p-12 md:p-24 overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-gold text-[12px] uppercase tracking-[0.5em] block"
                            >
                                0{index + 1}
                            </motion.span>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] mb-2">Spatial Discipline</span>
                            <span className="text-gold-soft text-[11px] uppercase tracking-[0.4em] font-medium">{project.category}</span>
                        </div>
                    </div>

                    <div className="max-w-4xl">
                        <h3 className="text-white text-6xl md:text-[9rem] font-serif uppercase tracking-tightest leading-[0.8] mb-16 drop-shadow-2xl">
                            {project.title.split(' ')[0]} <br />
                            <span className="italic pl-20 md:pl-40 text-gold-soft">{project.title.split(' ').slice(1).join(' ')}</span>
                        </h3>

                        <div className="flex items-center gap-16 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                            <button className="px-16 py-6 bg-gold text-black text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-white transition-all duration-700 shadow-[0_10px_40px_rgba(197,160,89,0.3)]">
                                Walk Inside
                            </button>
                            <div className="flex gap-12 border-l border-white/10 pl-12 items-center">
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors cursor-pointer">Blueprints</span>
                                <div className="w-1 h-1 rounded-full bg-gold/50" />
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors cursor-pointer">Inquiry</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dynamic Shadow Mask */}
                <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-transparent transition-colors duration-1000" />
            </motion.div>

            {/* Vertical Corridor Lines */}
            <div className="absolute left-10 md:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="absolute right-10 md:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </motion.div>
    );
}
