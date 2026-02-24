"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    Phone,
    Clock,
    Navigation,
    Search,
    ChevronRight,
    Star,
    Coffee,
    Wifi,
    ExternalLink,
    Compass,
    Building2
} from "lucide-react";
import Image from "next/image";

const stores = [
    {
        id: 1,
        name: "Gurugram Flagship Studio",
        address: "DLF Phase 5, Golf Course Road, Gurugram, HR 122002",
        city: "Gurugram",
        phone: "+91 9999 000 111",
        email: "gurugram@evolx.studio",
        hours: "10:00 AM - 08:00 PM",
        rating: 4.9,
        reviews: 245,
        amenities: ["Valet Parking", "Cafe Luxe", "Virtual Reality Zone"],
        image: "/v4/luxury_living_1.png"
    },
    {
        id: 2,
        name: "South Delhi Design Center",
        address: "M-Block Market, Greater Kailash II, New Delhi 110048",
        city: "Delhi",
        phone: "+91 9999 000 222",
        email: "delhi@evolx.studio",
        hours: "10:30 AM - 08:30 PM",
        rating: 4.8,
        reviews: 182,
        amenities: ["Material Library", "Design Lounge", "Consultation Pods"],
        image: "/v4/design-session-1.png"
    },
    {
        id: 3,
        name: "Indiranagar Experience Studio",
        address: "100 Feet Road, Indiranagar, Bengaluru, KA 560038",
        city: "Bengaluru",
        phone: "+91 9999 000 333",
        email: "bengaluru@evolx.studio",
        hours: "10:00 AM - 09:00 PM",
        rating: 4.9,
        reviews: 310,
        amenities: ["Lighting Gallery", "Tech-Integrated Showroom", "Kids Play Area"],
        image: "/v4/luxury_kitchen_2.png"
    },
    {
        id: 4,
        name: "Jubilee Hills Concept Center",
        address: "Road No. 36, Jubilee Hills, Hyderabad, TS 500033",
        city: "Hyderabad",
        phone: "+91 9999 000 444",
        email: "hyderabad@evolx.studio",
        hours: "10:00 AM - 08:00 PM",
        rating: 4.7,
        reviews: 128,
        amenities: ["Outdoor Expo", "Sustainability Corner", "Architect Pods"],
        image: "/v4/luxury_living_2.png"
    }
];

const cities = ["All Cities", "Gurugram", "Delhi", "Bengaluru", "Hyderabad"];

const StoreLocatorContent = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCity, setActiveCity] = useState("All Cities");

    const filteredStores = stores.filter(store =>
        (activeCity === "All Cities" || store.city === activeCity) &&
        (store.name.toLowerCase().includes(searchQuery.toLowerCase()) || store.address.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="bg-white">
            {/* Split Layout Header */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[#2d2412] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/v4/interior-living-3d.jpg"
                        alt="Experience Center"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d2412] via-[#2d2412]/80 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">National Presence</span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Bespoke Studios <br /> Nearest <span className="text-[#eb595f] italic">to You</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-lg">
                            Experience the future of interior architecture in person at our world-class design centers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Search & Filter */}
            <section className="sticky top-20 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[#eb595f] transition-colors w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Find a studio by area or name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-stone-50/50 border-2 border-transparent rounded-2xl focus:border-[#eb595f] focus:bg-white outline-none transition-all placeholder:text-stone-300 font-medium text-sm"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {cities.map((city) => (
                                <button
                                    key={city}
                                    onClick={() => setActiveCity(city)}
                                    className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCity === city
                                            ? "bg-[#eb595f] text-white shadow-xl shadow-[#eb595f]/20 scale-105"
                                            : "text-stone-400 hover:text-[#2d2412] hover:bg-stone-50"
                                        }`}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stores Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* List of Stores */}
                    <div className="lg:col-span-12 space-y-12">
                        <AnimatePresence mode="popLayout">
                            {filteredStores.map((store, idx) => (
                                <motion.div
                                    key={store.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-white rounded-[3rem] overflow-hidden border border-stone-100/60 hover:border-[#eb595f]/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(45,36,18,0.08)]"
                                >
                                    <div className="flex flex-col lg:flex-row min-h-[400px]">
                                        {/* Visual Side */}
                                        <div className="lg:w-[40%] relative overflow-hidden h-[300px] lg:h-auto">
                                            <Image
                                                src={store.image}
                                                alt={store.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-[2.5s]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
                                                        Open Now
                                                    </div>
                                                    <div className="flex items-center gap-1 text-white">
                                                        <Star className="w-3 h-3 fill-[#eb595f] text-[#eb595f]" />
                                                        <span className="text-sm font-bold">{store.rating}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                                                    {store.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Details Side */}
                                        <div className="flex-1 p-8 md:p-14 flex flex-col justify-between bg-white relative">
                                            {/* Decorative Background Icon */}
                                            <Compass className="absolute top-10 right-10 w-24 h-24 text-stone-50 -z-0 pointer-events-none group-hover:rotate-45 transition-transform duration-1000" />

                                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                                                <div className="space-y-8">
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#eb595f] mb-4">Location</p>
                                                        <div className="flex items-start gap-4 text-[#2d2412]">
                                                            <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                                            <p className="text-base font-light leading-relaxed">{store.address}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#eb595f] mb-4">Connect</p>
                                                        <div className="flex flex-col gap-4">
                                                            <div className="flex items-center gap-4 text-[#2d2412]">
                                                                <Phone className="w-5 h-5 shrink-0" />
                                                                <p className="text-base font-light">{store.phone}</p>
                                                            </div>
                                                            <div className="flex items-center gap-4 text-[#2d2412]/60 hover:text-[#eb595f] cursor-pointer transition-colors">
                                                                <ExternalLink className="w-5 h-5 shrink-0" />
                                                                <p className="text-sm border-b border-current">Book Virtual Tour</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-8">
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#eb595f] mb-4">Hours & Amenities</p>
                                                        <div className="flex items-center gap-4 text-[#2d2412] mb-6">
                                                            <Clock className="w-5 h-5 shrink-0" />
                                                            <p className="text-base font-light">{store.hours}</p>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {store.amenities.map((amenity, i) => (
                                                                <span key={i} className="px-4 py-2 bg-stone-50 rounded-xl text-[9px] font-bold uppercase tracking-widest text-stone-500 border border-stone-100 group-hover:bg-[#fcebeb]/50 group-hover:border-[#eb595f]/10 transition-colors">
                                                                    {amenity}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
                                                <button className="flex-1 py-5 bg-[#2d2412] text-white font-bold rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-[#eb595f] transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1">
                                                    <Navigation className="w-4 h-4" /> Get Directions
                                                </button>
                                                <button className="flex-1 py-5 bg-stone-50 text-[#2d2412] font-bold rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-stone-100 transition-all flex items-center justify-center gap-3">
                                                    View Gallery
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Virtual Concierge Banner */}
            <section className="py-24 max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#eb595f] rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/v4/luxe_banner_bg.png')] bg-cover opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-[3s]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#eb595f] via-[#eb595f]/70 to-transparent" />

                    <div className="relative z-10 max-w-xl text-white">
                        <div className="w-16 h-1 bg-white/30 rounded-full mb-8" />
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Can't visit? <br /> Discover our <span className="italic opacity-80">Virtual Concierge</span>
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl font-light mb-12">
                            Our designers will walk you through the experience center virtually.
                            Interactive 4K tours available daily.
                        </p>
                        <button className="px-12 py-5 bg-white text-[#eb595f] font-bold rounded-full shadow-2xl hover:bg-[#2d2412] hover:text-white transition-all transform hover:-translate-y-1 uppercase tracking-[0.2em] text-xs">
                            Session Inquiry
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StoreLocatorContent;
