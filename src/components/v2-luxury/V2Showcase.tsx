"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const museumProjects = [
    {
        title: "The Alabaster Residence",
        meta: "ZURICH // 2024",
        desc: "A singular exercise in monochromatic depth and natural light-orchestration.",
        image: "/assets/portfolio_zurich.png",
        id: "01"
    },
    {
        title: "Ivory Gallery Suite",
        meta: "PARIS // 2024",
        desc: "Transforming a historic Hausmannian volume into a minimalist sanctuary.",
        image: "/assets/portfolio_paris.png",
        id: "02"
    },
    {
        title: "The Silver Atelier",
        meta: "MILAN // 2023",
        desc: "A creative forge where raw industrialism meets high-gloss luxury.",
        image: "/assets/v2_atelier.png",
        id: "03"
    }
];

export default function V2Showcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="bg-[#fafaf9]">
            {museumProjects.map((project, i) => (
                <ProjectSection
                    key={i}
                    project={project}
                    index={i}
                    total={museumProjects.length}
                />
            ))}
        </section>
    );
}

function ProjectSection({ project, index, total }: { project: any, index: number, total: number }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1.1, 1]);

    return (
        <div ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Background Image Wrapper */}
            <motion.div
                style={{ scale }}
                className="absolute inset-x-6 top-6 bottom-6 md:inset-x-20 md:top-20 md:bottom-20 z-0 shadow-2xl overflow-hidden"
            >
                <img
                    src={project.image}
                    className="w-full h-full object-cover opacity-100"
                    alt={project.title}
                    loading="eager"
                />
            </motion.div>

            {/* Content Layer */}
            <div className="container mx-auto px-12 md:px-32 relative z-10 flex flex-col md:flex-row items-end justify-between h-full pb-32 md:pb-40">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl text-white bg-black/20 backdrop-blur-md p-10 rounded-2xl border border-white/10"
                >
                    <span className="text-gold text-[10px] uppercase tracking-[1em] block mb-8 font-black">Archive Project {project.id}</span>
                    <h2 className="text-white mb-12">
                        {project.title.split(' ').slice(0, -1).join(' ')} <br />
                        <span className="italic text-gold-soft">{project.title.split(' ').pop()}</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-serif italic max-w-sm mb-12">
                        "{project.desc}"
                    </p>
                    <div className="flex items-center gap-12">
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">{project.meta}</span>
                        <button className="group flex items-center gap-4">
                            <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Explore Details</span>
                            <div className="w-8 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </button>
                    </div>
                </motion.div>

                {/* Vertical Progress for Section */}
                <div className="hidden lg:flex flex-col items-center gap-6 text-white/20">
                    <span className="text-[10px] font-serif italic">0{index + 1}</span>
                    <div className="w-px h-24 bg-white/10 relative overflow-hidden">
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute inset-0 bg-gold origin-top"
                        />
                    </div>
                    <span className="text-[10px] font-serif italic">0{total}</span>
                </div>
            </div>

            {/* Side Branding */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block pointer-events-none opacity-[0.05]">
                <h3 className="vertical-text text-8xl font-serif uppercase tracking-widest text-[#1a1a1a]">
                    MUSEUM EXPERIENCE
                </h3>
            </div>
        </div>
    );
}
