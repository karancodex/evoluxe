"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    ArrowRight,
    Filter,
    Layers,
    Home,
    Search,
    ChevronDown,
    Star,
    ShieldCheck,
    Clock,
    LayoutGrid,
    Info
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="bg-[#fafafa] font-serif">
            {/* --- Hero Section & Breadcrumbs --- */}
            <section className="bg-white pt-12 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-8 uppercase tracking-widest font-sans font-bold">
                        <Link href="/" className="hover:text-[#eb595f] transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-stone-900">Projects</span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#2d2412] mb-6 leading-[1.1]">
                            Our <span className="text-[#eb595f] italic">Inspirational</span> <br />
                            Residential Masterpieces
                        </h1>
                        <p className="text-stone-500 text-lg md:text-xl font-sans font-light mb-10 leading-relaxed">
                            Discover how we've transformed ordinary spaces into extraordinary homes across India's most premium locations.
                        </p>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-stone-50 rounded-3xl p-8 border border-stone-100 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm">
                                <Home className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#2d2412]">1,200+</h3>
                                <p className="text-xs uppercase tracking-widest text-stone-400 font-sans font-bold">Homes Delivered</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-y md:border-y-0 md:border-x border-stone-200 py-4 md:py-0 md:px-8">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#2d2412]">45 Days</h3>
                                <p className="text-xs uppercase tracking-widest text-stone-400 font-sans font-bold">Move-in Guarantee</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 md:pl-8">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#2d2412]">10 Years</h3>
                                <p className="text-xs uppercase tracking-widest text-stone-400 font-sans font-bold">Material Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Filter Bar (Sticky) --- */}
            <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-y border-stone-100 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* Search */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                            <input
                                type="text"
                                placeholder="Search by locality or project name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-100 rounded-full font-sans text-sm focus:outline-none focus:border-[#eb595f] transition-all"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                            <div className="relative group">
                                <select
                                    className="appearance-none bg-stone-50 border border-stone-100 px-6 py-3 pr-12 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-[#2d2412] cursor-pointer focus:outline-none focus:border-[#eb595f] min-w-[160px]"
                                    value={filterCity}
                                    onChange={(e) => setFilterCity(e.target.value)}
                                >
                                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>

                            <div className="relative group">
                                <select
                                    className="appearance-none bg-stone-50 border border-stone-100 px-6 py-3 pr-12 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-[#2d2412] cursor-pointer focus:outline-none focus:border-[#eb595f] min-w-[160px]"
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                >
                                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>

                            <div className="relative group">
                                <select
                                    className="appearance-none bg-stone-50 border border-stone-100 px-6 py-3 pr-12 rounded-full font-sans text-xs font-bold uppercase tracking-widest text-[#2d2412] cursor-pointer focus:outline-none focus:border-[#eb595f] min-w-[160px]"
                                    value={filterBHK}
                                    onChange={(e) => setFilterBHK(e.target.value)}
                                >
                                    {bhkOptions.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>

                            <button
                                onClick={() => {
                                    setFilterCity("All Cities");
                                    setFilterType("All Types");
                                    setFilterBHK("All BHK");
                                    setSearchQuery("");
                                }}
                                className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] hover:text-[#eb595f] transition-all ml-2"
                            >
                                Reset All
                            </button>
                        </div>

                        <div className="ml-auto hidden xl:block">
                            <p className="text-stone-400 font-sans text-xs">Showing <b>{filteredProjects.length}</b> projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Projects Grid --- */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <React.Fragment key={project.id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                    className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        />
                                        {project.featured && (
                                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#eb595f] text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2 shadow-lg">
                                                <Star className="w-3 h-3 fill-white" /> Featured
                                            </div>
                                        )}
                                        {/* Year Tag */}
                                        <div className="absolute bottom-6 right-6 px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-stone-900 rounded-lg shadow-sm font-sans">
                                            Handover {project.year}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-4 font-sans">
                                            <span className="flex items-center gap-1.5 text-[#eb595f]">
                                                <LayoutGrid className="w-3.5 h-3.5" /> {project.bhk} {project.type}
                                            </span>
                                            <span className="w-1 h-1 bg-stone-300 rounded-full" />
                                            <span className="flex items-center gap-1.5">
                                                <Layers className="w-3.5 h-3.5" /> {project.area}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#2d2412] mb-2 leading-tight group-hover:text-[#eb595f] transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-stone-500 flex items-center gap-2 text-sm font-sans mb-8">
                                            <MapPin className="w-3.5 h-3.5 text-[#eb595f]" /> {project.location}
                                        </p>

                                        <div className="mt-auto pt-8 border-t border-stone-50 flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-sans font-bold mb-1">Budget Range</p>
                                                <p className="text-lg font-bold text-[#2d2412]">{project.priceRange}</p>
                                            </div>
                                            <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#eb595f] group-hover:border-[#eb595f] group-hover:text-white transition-all duration-300 shadow-sm active:scale-90">
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Inline Calculator CTA (Show after 3rd or 6th project) */}
                                {(index === 2 || index === 5) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#eb595f] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-20 overflow-hidden relative"
                                    >
                                        <div className="relative z-10 flex-1">
                                            <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.34em] mb-4 block">Take the first step</span>
                                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                                Estimate the price of your <br />
                                                <span className="italic font-normal opacity-90 underline decoration-white/30 underline-offset-8">Dream Home Interiors</span>
                                            </h2>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <Link href="/calculators" className="px-10 py-5 bg-white text-[#eb595f] font-bold rounded-full shadow-2xl hover:bg-[#2d2412] hover:text-white transition-all transform hover:-translate-y-1 text-xs uppercase tracking-widest text-center">
                                                    Check Cost Now
                                                </Link>
                                                <Link href="/contact-us" className="px-10 py-5 bg-[#2d2412] text-white font-bold rounded-full shadow-2xl hover:bg-white hover:text-[#eb595f] transition-all transform hover:-translate-y-1 text-xs uppercase tracking-widest text-center">
                                                    Book Free Consult
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="relative z-10 w-full md:w-[400px] aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                                            <Image src="/v4/gen/luxury_project_2.png" alt="Calculator CTA" fill className="object-cover" />
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
                                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-[100px]" />
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-40 text-center">
                        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-8 text-stone-400">
                            <Info className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#2d2412] mb-4">No matching projects found</h2>
                        <p className="text-stone-500 font-sans max-w-md mx-auto mb-8">
                            We haven't listed projects matching your specific combination of filters yet. Try adjusting your search criteria.
                        </p>
                        <button
                            onClick={() => {
                                setFilterCity("All Cities");
                                setFilterType("All Types");
                                setFilterBHK("All BHK");
                                setSearchQuery("");
                            }}
                            className="text-[#eb595f] font-bold uppercase tracking-widest text-xs border-b-2 border-[#eb595f]/20 hover:border-[#eb595f] transition-all pb-1"
                        >
                            View All Projects
                        </button>
                    </div>
                )}
            </section>

            {/* --- FAQ Section --- */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#eb595f] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Common Queries</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2d2412]">Your Questions, <span className="italic font-normal">Answered</span></h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How long does a full home interior project take?",
                                a: "Typically, we deliver a 2BHK or 3BHK home within 45 days once the design is finalized. However, complex architectural modifications might extend this by 15-20 days."
                            },
                            {
                                q: "Do the project prices include all materials and labor?",
                                a: "Yes, our quotes are end-to-end. They include planning, sourcing high-grade materials (like Marine Plywood and Italian Hardware), labor, and even deep cleaning before handover."
                            },
                            {
                                q: "Can I customize a design I saw in your portfolio?",
                                a: "Absolutely! Every project we do is bespoke. You can take inspiration from any existing project, and we will tailor it to your specific floor plan, lifestyle needs, and budget."
                            },
                            {
                                q: "What is your involvement during the construction phase?",
                                a: "We provide complete turnkey services. Our site supervisors and project managers oversee every detail, ensuring the finish matches the 3D design to 100% accuracy."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="group p-8 bg-stone-50 rounded-[2rem] border border-stone-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-[#2d2412] mb-4 flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-[#eb595f]/10 text-[#eb595f] text-xs flex items-center justify-center shrink-0">0{i + 1}</span>
                                    {faq.q}
                                </h3>
                                <p className="text-stone-500 font-sans leading-relaxed text-sm md:text-base pl-12">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="py-24 bg-stone-900 overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="grid grid-cols-6 h-full">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-r border-white h-full" />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 md:p-24 border border-white/10 text-center flex flex-col items-center">
                        <div className="w-20 h-20 bg-[#eb595f] rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl rotate-12">
                            <Star className="w-10 h-10 fill-white" />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                            Ready to <span className="italic text-[#eb595f]">Evolve</span> <br />
                            Your Space?
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-sans font-light max-w-2xl mb-12">
                            Join over 1,200 families who chose EVOLX Studio for their premium home interiors. Get your free personalized design quote today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-12 py-5 bg-[#eb595f] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest">
                                Book Free Consultation
                            </button>
                            <button className="px-12 py-5 bg-white text-stone-900 font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest">
                                Visit Our Studio
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsContent;
