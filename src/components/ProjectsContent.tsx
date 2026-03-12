"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    ArrowRight,
    Layers,
    Home,
    Search,
    ChevronDown,
    Star,
    ShieldCheck,
    Clock,
    LayoutGrid,
    Info,
    Sparkles,
    Send
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useConsultation } from "./providers/ConsultationProvider";

// --- Types ---
interface Project {
    id: number;
    title: string;
    location: string;
    city: string;
    bhk: string;
    type: string;
    area: string;
    image: string;
    priceRange: string;
    year: string;
    featured?: boolean;
}

// --- Mock Data ---
const projectData: Project[] = [
    {
        id: 1,
        title: "Sea-Facing 3BHK Penthouse",
        location: "Worli, Mumbai",
        city: "Mumbai",
        bhk: "3BHK",
        type: "Full Home",
        area: "2,800 sq.ft",
        image: "/v4/gen/luxury_project_1.png",
        priceRange: "₹45L - ₹65L",
        year: "2024",
        featured: true
    },
    {
        id: 2,
        title: "Minimalist Italian Kitchen",
        location: "Kothrud, Pune",
        city: "Pune",
        bhk: "N/A",
        type: "Modular Kitchen",
        area: "350 sq.ft",
        image: "/v4/gen/luxury_project_2.png",
        priceRange: "₹8L - ₹12L",
        year: "2023"
    },
    {
        id: 3,
        title: "Modern 4BHK Villa Interior",
        location: "Baner, Pune",
        city: "Pune",
        bhk: "4BHK",
        type: "Full Home",
        area: "4,200 sq.ft",
        image: "/v4/gen/luxury_project_3.png",
        priceRange: "₹60L - ₹85L",
        year: "2024",
        featured: true
    },
    {
        id: 4,
        title: "Contemporary 2BHK Apartment",
        location: "Powai, Mumbai",
        city: "Mumbai",
        bhk: "2BHK",
        type: "Full Home",
        area: "1,200 sq.ft",
        image: "/v4/gen/luxury_project_5.png",
        priceRange: "₹18L - ₹25L",
        year: "2023"
    },
    {
        id: 5,
        title: "Luxury Master Suite & Walk-in",
        location: "Juhu, Mumbai",
        city: "Mumbai",
        bhk: "1BHK (Partial)",
        type: "Bedroom Design",
        area: "650 sq.ft",
        image: "/v4/gen/luxury_project_4.png",
        priceRange: "₹12L - ₹18L",
        year: "2024"
    },
    {
        id: 6,
        title: "Smart Urban Studio",
        location: "Hinjewadi, Pune",
        city: "Pune",
        bhk: "1BHK",
        type: "Full Home",
        area: "750 sq.ft",
        image: "/v4/gen/luxury_project_6.png",
        priceRange: "₹10L - ₹15L",
        year: "2023"
    },
    {
        id: 7,
        title: "Bespoke Office Workspace",
        location: "Bandra, Mumbai",
        city: "Mumbai",
        bhk: "Commercial",
        type: "Office Interior",
        area: "1,500 sq.ft",
        image: "/v4/luxury_office_1.png",
        priceRange: "₹25L - ₹40L",
        year: "2024"
    },
    {
        id: 8,
        title: "Traditional meets Modern",
        location: "Aundh, Pune",
        city: "Pune",
        bhk: "3BHK",
        type: "Full Home",
        area: "1,850 sq.ft",
        image: "/v4/luxury_living_1.png",
        priceRange: "₹28L - ₹35L",
        year: "2023"
    },
    {
        id: 9,
        title: "Designer Bathroom Project",
        location: "Kalyani Nagar, Pune",
        city: "Pune",
        bhk: "N/A",
        type: "Bathroom",
        area: "120 sq.ft",
        image: "/v4/luxury_bathroom_1.png",
        priceRange: "₹4L - ₹6L",
        year: "2024"
    }
];

const cities = ["All Cities", "Pune", "Mumbai"];
const projectTypes = ["All Types", "Full Home", "Modular Kitchen", "Bedroom Design", "Office Interior"];
const bhkOptions = ["All BHK", "1BHK", "2BHK", "3BHK", "4BHK", "Commercial"];

const ProjectsContent = () => {
    const { openConsultation } = useConsultation();
    const [filterCity, setFilterCity] = useState("All Cities");
    const [filterType, setFilterType] = useState("All Types");
    const [filterBHK, setFilterBHK] = useState("All BHK");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        return projectData.filter(project => {
            const matchesCity = filterCity === "All Cities" || project.city === filterCity;
            const matchesType = filterType === "All Types" || project.type === filterType;
            const matchesBHK = filterBHK === "All BHK" || project.bhk === filterBHK;
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.location.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCity && matchesType && matchesBHK && matchesSearch;
        });
    }, [filterCity, filterType, filterBHK, searchQuery]);

    return (
        <div className="bg-[#fafafa] min-h-screen selection:bg-[#eb595f]/10">
            {/* --- Hero Section & Breadcrumbs --- */}
            <section className="bg-white pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-12">
                        <Link href="/" className="hover:text-[#eb595f] transition-colors">Home</Link>
                        <span className="mx-2 opacity-30">/</span>
                        <span className="text-[#eb595f]">Projects</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                        <div className="max-w-3xl space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412] leading-[0.9] tracking-tight"
                            >
                                Portfolio of <br />
                                <span className="text-[#eb595f] italic">Grandeur.</span>
                            </motion.h1>
                            <p className="text-stone-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                                Curated residential masterpieces across India's most prestigious locations. Discover how we've redefined modern luxury living.
                            </p>
                        </div>

                        {/* Interactive Stats Panel */}
                        <div className="flex flex-wrap gap-8 items-center bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-sm shrink-0">
                            <div className="space-y-1">
                                <h3 className="text-3xl font-serif font-bold text-[#eb595f]">1,200+</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Homes Delivered</p>
                            </div>
                            <div className="w-px h-10 bg-stone-200 hidden sm:block" />
                            <div className="space-y-1">
                                <h3 className="text-3xl font-serif font-bold text-[#2d2412]">45 Days</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Move-in Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Filter Bar (Sticky) --- */}
            <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-y border-stone-100 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* Search */}
                        <div className="relative w-full lg:w-[400px]">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" />
                            <input
                                type="text"
                                placeholder="Locality or Project..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-sm focus:outline-none focus:border-[#eb595f] focus:bg-white transition-all shadow-sm"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                            {[
                                { val: filterCity, set: setFilterCity, opts: cities },
                                { val: filterType, set: setFilterType, opts: projectTypes },
                                { val: filterBHK, set: setFilterBHK, opts: bhkOptions }
                            ].map((f, i) => (
                                <div key={i} className="relative">
                                    <select
                                        className="appearance-none bg-white border border-stone-100 px-6 py-3.5 pr-12 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#2d2412] cursor-pointer focus:outline-none focus:border-[#eb595f] min-w-[150px] shadow-sm hover:shadow-md transition-shadow"
                                        value={f.val}
                                        onChange={(e) => f.set(e.target.value)}
                                    >
                                        {f.opts.map(o => <option key={o} value={o}>{o}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-300 pointer-events-none" />
                                </div>
                            ))}

                            <button
                                onClick={() => {
                                    setFilterCity("All Cities");
                                    setFilterType("All Types");
                                    setFilterBHK("All BHK");
                                    setSearchQuery("");
                                }}
                                className="px-4 py-2 text-[10px] font-black text-[#eb595f] uppercase tracking-widest hover:bg-[#eb595f]/5 rounded-xl transition-all"
                            >
                                Reset All
                            </button>
                        </div>

                        <div className="ml-auto hidden xl:block text-[10px] font-black uppercase tracking-widest text-stone-300">
                            Found <b>{filteredProjects.length}</b> Masterpieces
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Projects Grid --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <React.Fragment key={project.id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                                    className="group flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-stone-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        {project.featured && (
                                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#2d2412]">Award Winning</span>
                                            </div>
                                        )}

                                        <div className="absolute bottom-8 right-8 overflow-hidden rounded-2xl">
                                            <div className="bg-white/95 backdrop-blur-md px-4 py-2 flex items-center gap-2">
                                                <span className="text-[10px] font-black tracking-widest text-stone-900">{project.year} Selection</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="p-10 flex flex-col flex-1 space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-stone-400">
                                                <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                                    <LayoutGrid className="w-3.5 h-3.5 text-[#eb595f]" /> {project.bhk}
                                                </span>
                                                <div className="w-1 h-1 bg-stone-200 rounded-full" />
                                                <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                                    <Layers className="w-3.5 h-3.5" /> {project.area}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-serif font-bold text-[#2d2412] leading-tight">
                                                {project.title}
                                            </h3>

                                            <p className="text-stone-400 font-light flex items-center gap-2 text-sm">
                                                <MapPin className="w-4 h-4 text-[#eb595f]" /> {project.location}
                                            </p>
                                        </div>

                                        <div className="pt-8 border-t border-stone-100 flex items-center justify-between mt-auto">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-300">Investment</p>
                                                <p className="text-xl font-serif font-bold text-[#2d2412]">{project.priceRange}</p>
                                            </div>
                                            <button
                                                onClick={openConsultation}
                                                className="w-14 h-14 rounded-2xl bg-stone-50 text-[#2d2412] flex items-center justify-center hover:bg-[#eb595f] hover:text-white transition-all transform active:scale-90 shadow-sm"
                                            >
                                                <ArrowRight className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Unifying In-Grid Banner */}
                                {(index === 2 || index === 5) && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="col-span-1 md:col-span-2 lg:col-span-3 h-[500px] md:h-auto md:aspect-video lg:aspect-auto lg:h-[450px] bg-[#2d2412] rounded-[3.5rem] overflow-hidden relative group"
                                    >
                                        <div className="absolute inset-0">
                                            <Image src="/v4/interior-living-3d.jpg" fill alt="CTA" className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2412] via-[#2d2412]/80 to-transparent" />
                                        </div>
                                        <div className="relative z-10 h-full p-12 md:p-24 flex flex-col justify-center items-start space-y-10 max-w-4xl">
                                            <div className="space-y-4">
                                                <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/10 rounded-full border border-[#eb595f]/20">
                                                    <Sparkles className="w-3 h-3 text-[#eb595f]" />
                                                    <span className="text-[10px] font-black uppercase text-[#eb595f] tracking-widest">Get Inspired</span>
                                                </motion.div>
                                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                                                    Want your home to look like <br /> a <span className="text-[#eb595f] italic">Masterpiece?</span>
                                                </h2>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-6">
                                                <button
                                                    onClick={openConsultation}
                                                    className="px-12 py-5 bg-[#eb595f] text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white hover:text-[#2d2412] transition-all shadow-2xl flex items-center justify-center gap-4"
                                                >
                                                    <Send className="w-5 h-5" /> Initialize Design Now
                                                </button>
                                                <Link
                                                    href="/calculators"
                                                    className="px-12 py-5 border-2 border-white/20 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-4"
                                                >
                                                    Cost Calculator <ArrowRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* --- Final Immersive CTA --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto rounded-[4rem] bg-[#eb595f] p-12 md:p-24 text-center space-y-12 relative overflow-hidden group shadow-[0_60px_100px_-20px_rgba(235,89,95,0.4)]">
                    <div className="absolute top-0 left-0 p-32 opacity-10 blur-3xl bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 p-32 opacity-10 blur-3xl bg-black rounded-full translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-8xl font-serif font-bold text-white leading-[0.9]">
                            Create Your <br /> <span className="italic">Legacy.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                            Every home tells a story. Let's make yours unforgettable with precision engineering and artistic flair.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap justify-center gap-6">
                        <button
                            onClick={openConsultation}
                            className="px-14 py-6 bg-[#2d2412] text-white font-black uppercase text-xs tracking-widest rounded-[2rem] hover:bg-white hover:text-[#2d2412] transition-all shadow-2xl"
                        >
                            Book Free Site Visit
                        </button>
                        <button
                            onClick={openConsultation}
                            className="px-14 py-6 bg-white/20 backdrop-blur-md text-white border-2 border-white/20 font-black uppercase text-xs tracking-widest rounded-[2rem] hover:bg-white hover:text-[#2d2412] transition-all"
                        >
                            View Experience Studio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsContent;
