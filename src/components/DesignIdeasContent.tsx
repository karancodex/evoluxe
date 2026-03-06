"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ChevronRight, Filter, Info, Phone, Mail, User } from 'lucide-react';

interface DesignCardProps {
    title: string;
    rating: number;
    reviews: number;
    image: string;
}

const DesignCard = ({ title, rating, reviews, image }: DesignCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100 group"
    >
        <div className="relative h-64 w-full overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="p-5 space-y-3">
            <h3 className="font-serif text-[15px] font-bold text-[#2d2412] line-clamp-2 min-h-[40px]">
                {title}
            </h3>
            <div className="flex items-center gap-1">
                <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s <= Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-stone-300'}`} />
                    ))}
                </div>
                <span className="text-xs text-stone-500 font-medium">{rating} Stars | {reviews}+ Reviews</span>
            </div>
            <div className="flex gap-2 pt-2">
                <button className="flex-1 px-3 py-2.5 bg-[#eb595f] text-white text-[11px] font-bold uppercase tracking-wider rounded-md hover:bg-[#2d2412] transition-colors whitespace-nowrap">
                    Get Free Quote
                </button>
                <button className="flex-1 px-3 py-2.5 border border-stone-200 text-[#2d2412] text-[11px] font-bold uppercase tracking-wider rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap">
                    View Details
                </button>
            </div>
        </div>
    </motion.div>
);

interface DesignIdeasContentProps {
    title: string;
    description?: string;
    slug: string;
}

const DesignIdeasContent = ({ title, description, slug }: DesignIdeasContentProps) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', pin: '' });

    // Mock data for designs
    const mockDesigns = [
        { title: `Modern ${title} with Minimalist Aesthetics`, rating: 4.8, reviews: 124, image: '/v4/interior-living-3d.jpg' },
        { title: `Contemporary ${title} with Natural Wood Finishes`, rating: 4.9, reviews: 89, image: '/v4/interior-living-3d.jpg' },
        { title: `Luxury ${title} Featuring Premium Textures`, rating: 4.7, reviews: 210, image: '/v4/interior-living-3d.jpg' },
        { title: `Space-Saving ${title} for Urban Homes`, rating: 4.6, reviews: 156, image: '/v4/interior-living-3d.jpg' },
        { title: `Traditional ${title} with a Modern Twist`, rating: 4.8, reviews: 78, image: '/v4/interior-living-3d.jpg' },
        { title: `Elegant ${title} with Strategic Lighting`, rating: 4.9, reviews: 112, image: '/v4/interior-living-3d.jpg' },
        { title: `Compact ${title} Design for Small Apartments`, rating: 4.5, reviews: 94, image: '/v4/interior-living-3d.jpg' },
        { title: `Grand ${title} for Spacious Residences`, rating: 5.0, reviews: 45, image: '/v4/interior-living-3d.jpg' },
        { title: `Ergonomic ${title} focused on Comfort`, rating: 4.7, reviews: 134, image: '/v4/interior-living-3d.jpg' },
    ];

    const filters = ['All', 'Modern', 'Contemporary', 'Luxury', 'Minimalist', 'Space-Saving', 'L-Shaped', 'U-Shaped'];

    return (
        <div className="bg-[#fcfcfc] min-h-screen pb-20">
            {/* Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 py-6 md:py-8">
                <nav className="flex items-center text-[11px] md:text-[13px] text-stone-500 font-medium overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
                    <span className="hover:text-[#eb595f] cursor-pointer">Home</span>
                    <ChevronRight className="w-3.5 h-3.5 mx-1.5 md:mx-2" />
                    <span className="hover:text-[#eb595f] cursor-pointer">Interior Design</span>
                    <ChevronRight className="w-3.5 h-3.5 mx-1.5 md:mx-2" />
                    <span className="text-[#2d2412]">{title}</span>
                </nav>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left & Center: Content */}
                    <div className="flex-1 min-w-0 space-y-10">
                        {/* Header */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">
                                {title} Ideas
                            </h1>
                            <p className="text-stone-600 max-w-3xl leading-relaxed">
                                {description || `Discover stunning ${title.toLowerCase()} ideas for your home. Browse our curated collection of premium designs tailored to your unique style and space requirements.`}
                            </p>
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            <div className="p-2 border border-stone-200 rounded-md bg-white">
                                <Filter className="w-4 h-4 text-[#eb595f] fill-[#eb595f]/10" />
                            </div>
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    className={`px-6 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${filter === 'All' ? 'bg-[#eb595f] text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-[#eb595f]'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {mockDesigns.map((design, idx) => (
                                <DesignCard key={idx} {...design} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Sidebar Form */}
                    <div className="w-full lg:w-[360px] shrink-0">
                        <div className="sticky top-28 bg-white rounded-2xl p-8 border border-stone-100 shadow-xl shadow-stone-200/40 max-h-[calc(120vh-8rem)] overflow-y-auto scrollbar-hide">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-serif font-bold text-[#2d2412] mb-2">Talk to our Designers</h2>
                                <p className="text-stone-500 text-sm">Design your dream {title.toLowerCase()} today</p>
                            </div>

                            <form className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 fill-current" />
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#eb595f]/20 focus:border-[#eb595f] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 fill-current" />
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#eb595f]/20 focus:border-[#eb595f] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 fill-current" />
                                        <input
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#eb595f]/20 focus:border-[#eb595f] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-1">Pincode</label>
                                    <input
                                        type="text"
                                        placeholder="560001"
                                        className="w-full px-4 py-3.5 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#eb595f]/20 focus:border-[#eb595f] outline-none transition-all text-[14px]"
                                    />
                                </div>

                                <button className="w-full py-4 bg-[#eb595f] text-white font-bold rounded-xl shadow-lg shadow-[#eb595f]/20 hover:bg-[#2d2412] transition-all duration-300 transform hover:-translate-y-0.5 mt-4">
                                    Get Free Consultation
                                </button>

                                <p className="text-[11px] text-stone-400 text-center leading-relaxed px-4">
                                    By clicking this button, you agree to our Terms & Conditions and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Form Section - Visual focus as requested */}
            <div className="mt-20 md:mt-32 max-w-[1500px] mx-auto px-0 sm:px-6 h-[450px] md:h-[600px] overflow-hidden relative group md:rounded-[2rem]">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt="Start journey"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eb595f]/90 via-[#eb595f]/50 to-transparent flex items-center p-8 md:p-20">
                    <div className="max-w-xl text-white space-y-8">
                        <div>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
                                Your dream <span className="italic text-[#fcebeb]">{title.toLowerCase()}</span> is <br className="hidden sm:block" /> just a click away
                            </h2>
                            <p className="text-stone-300 text-lg font-light leading-relaxed">
                                Join 50,000+ happy homeowners who transformed their spaces with EVOLX Studio. Get expert advice and personalized designs today.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-1 rounded-full flex max-w-sm sm:max-w-md border border-white/20">
                            <input
                                type="text"
                                placeholder="Pincode"
                                className="bg-transparent border-none focus:ring-0 text-white placeholder:text-stone-300 px-4 sm:px-6 flex-1 text-xs sm:text-sm min-w-0"
                            />
                            <button className="bg-[#eb595f] hover:bg-white hover:text-[#eb595f] text-white px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="max-w-[1100px] mx-auto px-6 mt-32 space-y-12">
                <div className="prose prose-stone prose-lg max-w-none">
                    <h2 className="text-3xl font-serif text-[#4d3b1a] mb-8">The Ultimate Guide to {title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-600 font-light leading-[1.8]">
                        <div className="space-y-6">
                            <h4 className="font-bold text-[#4d3b1a] text-xl">1. Functional Excellence</h4>
                            <p>
                                When thinking about {title.toLowerCase()}, priority should always be given to how the space functions. At EVOLX Studio, we combine ergonomics with aesthetics to ensure that every corner of your {title.toLowerCase()} serves a purpose while looking breathtakingly beautiful.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-bold text-[#4d3b1a] text-xl">2. Material Selection</h4>
                            <p>
                                We use only premium materials that are built to last. From high-grade plywood to imported finishes, your {title.toLowerCase()} is crafted with the same attention to detail that goes into a masterpiece. Our quality assurance ensures zero compromises.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-bold text-[#4d3b1a] text-xl">3. Lighting & Ambience</h4>
                            <p>
                                Lighting can make or break a design. Our designers specialize in creating layered lighting schemes for {title.toLowerCase()} that allow you to shift from productive focus to relaxed comfort with just a flick of a switch.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-bold text-[#4d3b1a] text-xl">4. Personalization</h4>
                            <p>
                                No two homes are the same, and your {title.toLowerCase()} shouldn't be either. We take the time to understand your lifestyle, your hobbies, and your preferences to create a space that is truly an extension of your personality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Frequently Asked Questions mock */}
                <div className="bg-stone-50 rounded-3xl p-12 border border-stone-100">
                    <h3 className="text-2xl font-serif text-[#4d3b1a] mb-8 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                                <h4 className="font-bold text-[#2d2412] mb-2 flex justify-between items-center">
                                    What is the average cost of {title.toLowerCase()}?
                                    <ChevronRight className="w-4 h-4 text-[#eb595f]" />
                                </h4>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    The cost varies based on the materials, size, and complexity of the design. Typically, a premium {title.toLowerCase()} starts from a budget-friendly range and can go up depending on your luxury requirements.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignIdeasContent;
