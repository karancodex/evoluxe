"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "The Golden Ivory Penthouse",
        location: "Monaco",
        concept: "Architectural Clarity",
        image: "/assets/hero.png",
    },
    {
        title: "Emerald Residence",
        location: "Zurich",
        concept: "Organic Luxury",
        image: "/assets/hero.png",
    },
    {
        title: "Maison de Verre",
        location: "Paris",
        concept: "Glass & Light",
        image: "/assets/hero.png",
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-black">
            <section className="h-screen flex items-center justify-center text-center px-6">
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-12"
                    >
                        The Collection
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-7xl md:text-9xl font-serif text-gold-soft uppercase tracking-tighter"
                    >
                        Curated <br />
                        <span className="italic">Spaces.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-white/40 text-[10px] uppercase tracking-[0.4em] mt-12"
                    >
                        Scroll to explore the portfolio
                    </motion.p>
                </div>
            </section>

            {projects.map((project, index) => (
                <section key={index} className="h-screen relative group overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans">0{index + 1}</span>
                                <div className="w-12 h-[1px] bg-gold/50" />
                                <span className="text-white text-[10px] uppercase tracking-[0.3em] font-sans">{project.location}</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif text-gold-soft mb-8 uppercase leading-none">
                                {project.title}
                            </h2>
                            <div className="flex items-center gap-12">
                                <p className="text-white/60 text-sm tracking-widest uppercase">{project.concept}</p>
                                <button className="px-10 py-3 border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                                    View Project Details
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            <section className="py-40 bg-black text-center border-t border-white/5">
                <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] mb-8">More projects upon private request.</p>
                <button className="text-gold text-lg font-serif italic border-b border-gold/20 hover:border-gold transition-all">
                    Request private Lookbook
                </button>
            </section>
        </div>
    );
}
