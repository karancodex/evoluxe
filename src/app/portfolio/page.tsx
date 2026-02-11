"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "The Golden Ivory Penthouse",
        location: "Monaco",
        concept: "Architectural Clarity",
        image: "/assets/portfolio_monaco.png",
    },
    {
        title: "Emerald Residence",
        location: "Zurich",
        concept: "Organic Luxury",
        image: "/assets/portfolio_zurich.png",
    },
    {
        title: "Maison de Verre",
        location: "Paris",
        concept: "Glass & Light",
        image: "/assets/portfolio_paris.png",
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-black">
            <section className="h-[90vh] flex items-center justify-center text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/portfolio_hero.png" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                </div>
                <div className="relative z-10">
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
                        className="text-6xl md:text-8xl font-serif text-gold-soft uppercase tracking-tighter"
                    >
                        Curated <br />
                        <span className="italic uppercase">Spaces.</span>
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
                <section key={index} className="h-screen relative group overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-32">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-gold text-[12px] font-serif italic font-bold">0{index + 1}</span>
                                <div className="w-12 h-[1px] bg-gold/50" />
                                <span className="text-white/60 text-[10px] uppercase tracking-[0.4em]">{project.location}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight leading-tight max-w-2xl">
                                {project.title}
                            </h2>
                            <div className="flex flex-col md:flex-row md:items-center gap-10">
                                <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">{project.concept}</p>
                                <button className="self-start px-10 py-3 border border-gold/30 text-gold text-[9px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-500">
                                    Explore Case Study
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
