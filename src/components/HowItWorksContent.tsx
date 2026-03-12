"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    MessageSquare,
    Palette,
    Layers,
    Truck,
    Key,
    CheckCircle2,
    Clock,
    ShieldCheck,
    ArrowRight
} from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Personal Consultation",
        subtitle: "Meet your Design Soulmate",
        desc: "Begin with a detailed meeting where we listen to your aspirations, lifestyle needs, and budgetary preferences. Our lead architects guide you through the initial spatial planning.",
        image: "/home_it_works_1.png", // We'll map these to the actual paths
        features: ["In-person meeting", "Spatial Audit", "Budget Planning"]
    },
    {
        id: "02",
        title: "Design Visualization",
        subtitle: "Experience your future home",
        desc: "Our creative studio transforms your brief into stunning 3D visualizations. We iterate on themes, layouts, and lighting until the design resonates perfectly with your vision.",
        image: "/home_it_works_2.png",
        features: ["Photorealistic 3D", "Mood Boards", "Furniture curation"]
    },
    {
        id: "03",
        title: "Material Selection",
        subtitle: "The Touch & Feel Experience",
        desc: "Step into our experience center to choose from thousands of premium finishes. From Italian marble to German hardware, we finalize every detail with transparent pricing.",
        image: "/home_it_works_3.png",
        features: ["Experience Center Visit", "Transparent Quotes", "Hardware testing"]
    },
    {
        id: "04",
        title: "Execution & Installation",
        subtitle: "Precision engineering at work",
        desc: "Our specialized teams take over the site. With laser-precision site management and strict quality checks, we ensure your designs are translated into structural reality.",
        image: "/home_it_works_4.png",
        features: ["Project Manager", "Site Reports", "Safety first"]
    },
    {
        id: "05",
        title: "Happy Handover",
        subtitle: "Your masterpiece is ready",
        desc: "The final walkthrough ensures every detail is perfect. We hand over the keys along with a comprehensive care-kit and a 10-year structural warranty for peace of mind.",
        image: "/home_it_works_5.png",
        features: ["Quality Audit", "Handover Kit", "10-Year Warranty"]
    }
];

const HowItWorksContent = () => {
    // These paths should be the actual generated image paths
    const imagePaths = [
        "/v4/how-it-works-1.png",
        "/v4/how-it-works-2.png",
        "/v4/how-it-works-3.png",
        "/v4/how-it-works-4.png",
        "/v4/how-it-works-5.png"
    ];

    return (
        <div className="bg-white overflow-hidden pb-20">
            {/* --- Hero Header --- */}
            <section className="pt-20 pb-12 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-8 border border-[#eb595f]/10"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                    <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">The Evolution</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412] mb-6 leading-[1.1]"
                >
                    The Design <span className="text-[#eb595f] italic font-medium">Evolution</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12"
                >
                    A streamlined, transparent, and luxury-first approach to building your dream home in Pune.
                </motion.p>

                {/* Horizontal Step Icons Indicator */}
                <div className="max-w-4xl mx-auto flex items-center justify-between px-6 mb-16 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-[#eb595f]/10 -z-10" />
                    {[
                        { icon: <MessageSquare className="w-5 h-5" />, label: "Talk" },
                        { icon: <Palette className="w-5 h-5" />, label: "Design" },
                        { icon: <Layers className="w-5 h-5" />, label: "Source" },
                        { icon: <Truck className="w-5 h-5" />, label: "Install" },
                        { icon: <Key className="w-5 h-5" />, label: "Reveal" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-white px-4">
                            <div className="w-12 h-12 rounded-full bg-white border border-[#eb595f]/20 flex items-center justify-center text-[#eb595f] shadow-sm mb-2 group-hover:bg-[#eb595f] transition-all">
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d2412]/40">{item.label}</span>
                        </div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-[#eb595f] text-white font-bold rounded-full shadow-xl shadow-[#eb595f]/20 uppercase tracking-widest text-xs"
                >
                    Book Your Design Session
                </motion.button>
            </section>

            {/* --- The Journey Steps (Alternating Layout) --- */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2"
                            >
                                <div className="relative aspect-[4/3] group">
                                    <div className="absolute inset-0 bg-[#eb595f]/5 rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                                    <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-[#2d2412]/5 shadow-2xl">
                                        <Image
                                            src={imagePaths[index]}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -top-6 -left-6 md:-left-12 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-50 z-10">

                                        <span className="text-xl md:text-2xl font-serif font-bold text-[#2d2412] relative z-10">
                                            Step <span className="text-[#eb595f]">{parseInt(step.id)}</span>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2 space-y-8"
                            >
                                <div className="space-y-4">
                                    <span className="text-[#eb595f] font-bold tracking-[0.2em] uppercase text-xs">{step.subtitle}</span>
                                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412] leading-tight group">
                                        {step.title.split(' ').map((word, i) => (
                                            <span key={i} className="inline-block mr-2 group-hover:text-[#eb595f] transition-colors">{word}</span>
                                        ))}
                                    </h2>
                                    <div className="w-20 h-1 bg-[#eb595f] rounded-full" />
                                </div>
                                <p className="text-[#2d2412]/60 text-lg md:text-xl font-light leading-relaxed">
                                    {step.desc}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {step.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-[#2d2412]/80">
                                            <CheckCircle2 className="w-5 h-5 text-[#eb595f] shrink-0" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="flex items-center gap-3 group text-[#eb595f] font-bold uppercase tracking-widest text-[10px] mt-4">
                                    Discover More About This Step
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Divider Banner --- */}
            <section className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto bg-[#2d2412] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Palette className="w-32 h-32 text-[#eb595f]" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <h3 className="text-2xl md:text-4xl font-serif text-[#fcebeb] italic leading-tight">
                            "You are every step. Your vision is the soul of our architecture, and our mission is to make it immortal."
                        </h3>
                        <div className="w-12 h-px bg-[#eb595f] mx-auto" />
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">The EVOLX Manifesto</p>
                    </div>
                </motion.div>
            </section>

            {/* --- Comparison / Value Table (Image-inspired) --- */}
            <section className="py-20 bg-[#faf9f6]/50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412] mb-4">Why the EVOLX <span className="text-[#eb595f] italic">Experience?</span></h2>
                        <p className="text-[#2d2412]/60">Setting the gold standard in modular delivery.</p>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-stone-100">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#eb595f] text-white">
                                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold">Feature</th>
                                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold">Standard Market</th>
                                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold">EVOLX Studio</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    { f: "Pricing", std: "Variable / Hidden", ev: "Transparent & Detailed" },
                                    { f: "Delivery", std: "90 - 120 Days", ev: "Guaranteed 45 Days" },
                                    { f: "Design", std: "Generic Templates", ev: "Bespoke & Photorealistic" },
                                    { f: "Warranty", std: "Limited 1-2 Years", ev: "10-Year Structural" }
                                ].map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-stone-50 transition-colors">
                                        <td className="px-8 py-6 font-serif text-lg text-[#2d2412] font-bold">{row.f}</td>
                                        <td className="px-8 py-6 text-[#2d2412]/40 text-sm font-medium italic">{row.std}</td>
                                        <td className="px-8 py-6 text-[#eb595f] font-bold text-sm bg-[#eb595f]/5">{row.ev}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#eb595f] font-bold tracking-[0.2em] uppercase text-xs mb-4 block underline decoration-1 underline-offset-8">Clarifying the Journey</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">Your Questions, <span className="italic">Answered.</span></h2>
                </div>
                <div className="space-y-4">
                    {[
                        { q: "What is the 45-day delivery promise?", a: "Once the design is locked and technical measurement is done, our factory begins production. We guarantee site-ready installation within 45 days, or we pay you rent." },
                        { q: "Can I choose my own materials outside your list?", a: "Yes, we have a vast selection of premium partners, but we can source bespoke materials through our luxury procurement wing for specialized requirements." },
                        { q: "Is the project manager available 24/7?", a: "You'll have a dedicated Project Concierge available during business hours, with an automated 24/7 site progress tracking app for peace of mind." }
                    ].map((faq, idx) => (
                        <div key={idx} className="group border-b border-stone-100 py-6">
                            <h4 className="text-lg md:text-xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-all cursor-pointer">
                                {idx + 1}. {faq.q}
                            </h4>
                            <p className="mt-4 text-[#2d2412]/60 text-sm leading-relaxed max-w-3xl overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Final CTA Form (Image-inspired) --- */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-stone-100">
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <Image
                            src="/v4/interior-living-3d.jpg"
                            alt="Dream Living"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2d2412]/40 flex items-center justify-center p-12 text-center text-white backdrop-blur-[2px]">
                            <div className="space-y-4">
                                <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight">Your <span className="italic font-medium text-[#eb595f]">dream home</span> is just a click away</h3>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-[#2d2412] p-12 md:p-20 text-white">
                        <div className="max-w-md mx-auto space-y-8">
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-2">Get Your Free Estimate</h3>
                                <p className="text-white/60 text-sm italic">Start your journey to a structural masterpiece today.</p>
                            </div>
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);
                                    const data = Object.fromEntries(formData.entries());
                                    try {
                                        const response = await fetch("https://formsubmit.co/ajax/evolxinteriordesign@gmail.com", {
                                            method: "POST",
                                            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                                            body: JSON.stringify(data)
                                        });
                                        if (response.ok) {
                                            alert("Inquiry sent successfully!");
                                            form.reset();
                                        }
                                    } catch (err) {
                                        alert("Failed to send inquiry.");
                                    }
                                }}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-[#eb595f] font-bold">Your Name</label>
                                    <input required name="Your Name" type="text" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-lg font-light focus:border-[#eb595f] outline-none transition-colors" placeholder="Karan Deshmukh" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-[#eb595f] font-bold">Contact Number</label>
                                    <input required name="Contact Number" type="tel" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-lg font-light focus:border-[#eb595f] outline-none transition-colors" placeholder="+91 99999 99999" />
                                </div>
                                <button type="submit" className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-[#eb595f]/20 hover:bg-white hover:text-[#eb595f] transition-all">
                                    Start the Evolution
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksContent;
