"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Maximize2,
    MapPin,
    Calendar,
    ArrowRight,
    Filter,
    Layers
} from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "The Urban Penthouse",
        location: "Gurugram, Sector 42",
        category: "Living Room",
        year: "2023",
        image: "/v4/luxury_living_1.png",
        area: "4,500 sq.ft"
    },
    {
        id: 2,
        title: "Monochrome Minimal",
        location: "Bengaluru, Indiranagar",
        category: "Kitchen",
        year: "2024",
        image: "/v4/luxury_kitchen_2.png",
        area: "3,200 sq.ft"
    },
    {
        id: 3,
        title: "The Heritage Villa",
        location: "Delhi, Vasant Vihar",
        category: "Full Home",
        year: "2023",
        image: "/v4/luxury_living_2.png",
        area: "6,800 sq.ft"
    },
    {
        id: 4,
        title: "Crystalline Modern",
        location: "Mumbai, Juhu",
        category: "Bedroom",
        year: "2024",
        image: "/v4/design-session-3.png",
        area: "2,800 sq.ft"
    },
    {
        id: 5,
        title: "Serene Sanctuary",
        location: "Hyderabad, Jubilee Hills",
        category: "Living Room",
        year: "2023",
        image: "/v4/design-session-1.png",
        area: "5,200 sq.ft"
    },
    {
        id: 6,
        title: "Marble Haven",
        location: "Chennai, Adyar",
        category: "Bathroom",
        year: "2024",
        image: "/v4/design-session-2.png",
        area: "2,400 sq.ft"
    }
];

const categories = ["All Projects", "Full Home", "Living Room", "Kitchen", "Bedroom", "Bathroom"];

const ProjectsContent = () => {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const filteredProjects = projects.filter(project =>
        activeFilter === "All Projects" || project.category === activeFilter
    );

    return (
        <div className="bg-white">
            {/* Project Filters */}
            <section className="py-12 border-b border-stone-100 sticky top-20 z-40 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${activeFilter === cat
                                        ? "text-[#eb595f]"
                                        : "text-[#2d2412]/40 hover:text-[#2d2412]"
                                    }`}
                            >
                                {cat}
                                {activeFilter === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eb595f]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 shadow-xl border border-stone-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                        <div className="flex items-center gap-4 text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
                                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                                {project.year}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Layers className="w-3 h-3" /> {project.area}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/60 flex items-center gap-2 mb-6 text-sm">
                                            <MapPin className="w-3 h-3" /> {project.location}
                                        </p>
                                        <button className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] group/btn">
                                            Explore Project
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                                        </button>
                                    </div>

                                    {/* Category Label */}
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#2d2412] shadow-sm">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Visible Info (for mobile/no hover) */}
                                <div className="md:hidden lg:block">
                                    <h4 className="text-xl font-serif font-bold text-[#2d2412] mb-1">{project.title}</h4>
                                    <p className="text-stone-400 text-xs uppercase tracking-widest flex items-center gap-2">
                                        <MapPin className="w-3 h-3" /> {project.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Achievement Band */}
            <section className="py-24 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Completed Projects", value: "1,200+" },
                        { label: "City Presence", value: "24+" },
                        { label: "Design Awards", value: "15+" },
                        { label: "Happy Families", value: "5,000+" }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-3xl md:text-5xl font-serif font-black text-[#eb595f]">{stat.value}</p>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-white border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412] mb-8">Want Your Home to Feature Here?</h2>
                    <p className="text-stone-500 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                        Join the community of homeowners who elevated their lifestyle with EVOLX Studio.
                    </p>
                    <button className="px-12 py-5 bg-[#eb595f] text-white font-bold rounded-full shadow-[0_20px_40px_-10px_rgba(235,89,95,0.4)] hover:bg-[#2d2412] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
                        Start Your Project
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProjectsContent;
