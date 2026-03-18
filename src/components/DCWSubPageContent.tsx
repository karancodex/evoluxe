"use client";

import React, { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle, Star, Phone, Mail } from "lucide-react";

// Types
type SpecializationCard = {
    title: string;
    desc: string;
    image: string;
};

type ServiceType = {
    title: string;
    items: string[];
    images: string[];
    description: string;
    processSteps?: { title: string; desc: string }[];
    materials?: string[];
    hideShowcase?: boolean;
    stats?: { label: string; value: string }[];
    timeline?: { year: string; title: string; desc: string }[];
    specializationCards?: SpecializationCard[];
};

// Data Store (We can move this to a shared file later if needed)
const dcwData: Record<string, ServiceType> = {
    "sofas": {
        title: "New Sofa Collection",
        description: "Explore our premium selection of handcrafted sofas. Each piece is designed with luxury, durability, and comfort in mind, custom-built to elevate your living spaces.",
        items: [], // Using specializationCards for this page
        specializationCards: [
            {
                title: "Luxury Sofas",
                desc: "Handcrafted with premium global fabrics and artisan precision, our luxury sofas represent the pinnacle of bespoke comfort.",
                image: "/v4/luxury_living_1.png"
            },
            {
                title: "Sectional Sofas",
                desc: "Modular designs that adapt to your grand living spaces, offering maximum seating with uncompromising style.",
                image: "/v4/dcw_sectional.png"
            },
            {
                title: "L-Shape Sofas",
                desc: "The perfect corner solution for modern homes, blending architectural aesthetics with practical spatial utility.",
                image: "/v4/luxury_living_2.png"
            },
            {
                title: "Modern Minimal Sofas",
                desc: "Sleek lines and understated elegance for the contemporary interior, focused on pure form and quality materials.",
                image: "/v4/luxury_living_3.png"
            },
            {
                title: "Office Sofas",
                desc: "Ergonomic yet professional seating solutions designed for corporate lounges, executive cabins, and reception areas.",
                image: "/v4/dcw_office.png"
            }
        ],
        images: [
            "/v4/dcw_sectional.png",
            "/v4/luxury_living_1.png",
            "/v4/dcw_office.png"
        ]
    },
    "upholstery": {
        title: "Premium Upholstery Services",
        description: "Breathe new life into your cherished furniture pieces with our world-class upholstery services. We offer master craftsmanship, extensive fabric choices, and restoration techniques passed down since 1978.",
        items: [], // Using specializationCards for more detail
        specializationCards: [
            {
                title: "Sofa Re-upholstery",
                desc: "Complete refurbishment of your sofas with precision stitching and premium fabric alignment.",
                image: "/v4/dcw_upholstery.png"
            },
            {
                title: "Chair & Ottoman Restoration",
                desc: "Expert restoration of occasional chairs, ottomans, and dining chairs with vintage or modern styles.",
                image: "/v4/luxury_living_2.png"
            },
            {
                title: "Foam & Cushion Upgrade",
                desc: "Replace sagging cushions with high-resilience 40D foam for maximum support and a brand-new feel.",
                image: "/v4/dcw_materials.png"
            },
            {
                title: "Antique Restoration",
                desc: "Delicate and masterful restoration of heritage furniture, preserving the soul while renewing the surface.",
                image: "/v4/luxury_living_3.png"
            }
        ],
        processSteps: [
            { title: "Damage Evaluation", desc: "We inspect the internal frame and padding to identify structural needs before starting." },
            { title: "Complete Stripping", desc: "Old fabric and worn-out foam are carefully removed to prepare the piece for a fresh start." },
            { title: "Structural Re-padding", desc: "Application of high-density foams and webbing systems ensuring long-term durability." },
            { title: "Precision Finishing", desc: "Hand-tailored upholstery with perfect seam alignment and high-strength stitching." }
        ],
        materials: [
            "Italian Velvets & Silks",
            "Turkish Suede & Cotton",
            "High-Density 40D Premium Foam",
            "Double-Lock Thread Stitching",
            "Durable Sinuous Springs"
        ],
        images: [
            "/v4/dcw_upholstery.png",
            "/v4/luxury_living_2.png",
            "/v4/luxury_living_3.png"
        ]
    },
    "portfolio": {
        title: "Our Portfolio",
        description: "A showcase of our finest work, from bespoke luxury sofas to meticulous furniture restorations. Excellence in every stitch.",
        items: [
            "New Sofa Designs",
            "Before / After Upholstery",
            "Commercial Upholstery",
            "Custom Furniture",
        ],
        images: [
            "/v4/dcw_hero.png",
            "/v4/luxury_living_1.png",
            "/v4/luxury_kitchen_1.png",
            "/v4/luxury_office_1.png",
            "/v4/luxury_living_2.png"
        ]
    },
    "process": {
        title: "Our Process & Materials",
        description: "Discover the journey from vision to reality. We combine a proven 4th-generation process with materials of exceptional quality.",
        items: [], // Not used for this page
        images: [
            "/v4/dcw_materials.png",
            "/v4/design-session-1.png",
            "/v4/how-it-works-1.png"
        ],
        processSteps: [
            { title: "Consultation", desc: "We discuss your vision, measurement requirements, and functional needs to create a base for the project." },
            { title: "Design & Material Selection", desc: "Choose from our curated collection of global fabrics, leathers, and foams guided by our specialists." },
            { title: "Craftsmanship", desc: "Our master artisans bring the design to life using traditional techniques and modern precision." },
            { title: "Delivery", desc: "White-glove delivery and installation ensure your new pieces are perfectly placed in your home." }
        ],
        materials: [
            "High-density foam (32-40 density)",
            "Premium upholstery fabrics",
            "Leatherette and suede",
            "Durable stitching",
            "Long-lasting cushion support"
        ],
        hideShowcase: true
    },
    "about": {
        title: "About DCW",
        description: "A legacy of comfort. Handcrafting premium sofas and restoring cherished furniture since 1978.",
        items: [
            "Quality Craftsmanship",
            "Trusted for 45+ Years",
            "Premium Materials",
            "Customer-Centric Design"
        ],
        images: ["/v4/dcw_hero.png"],
        stats: [
            { label: "Years Experience", value: "45+" },
            { label: "Sofas Crafted", value: "1000+" },
            { label: "Upholstery Projects", value: "2000+" },
            { label: "Happy Clients", value: "100s" }
        ],
        timeline: [
            { year: "1978", title: "The Beginning", desc: "DCW was founded with a passion for traditional upholstery and bespoke furniture making." },
            { year: "1995", title: "Factory Expansion", desc: "We moved to a larger facility to meet the growing demand for custom sofa manufacturing." },
            { year: "2010", title: "Modern Designs", desc: "Integrated contemporary minimal designs into our collection, catering to modern living spaces." },
            { year: "Today", title: "Leading Specialists", desc: "A 4th-generation family business continuing the legacy of excellence in sofa manufacturing." }
        ],
        hideShowcase: true
    },
    "contact": {
        title: "Contact & Get Quote",
        description: "Ready to start your project? Reach out to our specialists today for an instant quote.",
        items: [],
        images: ["/v4/luxury_living_1.png"],
        hideShowcase: true
    }
};


export default function DCWSubPageContent() {
    const params = useParams();
    const slug = params?.slug as string;

    const content = useMemo(() => dcwData[slug], [slug]);

    if (!content) return notFound();

    return (
        <div className="bg-white text-[#2d2412] min-h-screen pt-24 pb-12 selection:bg-[#eb595f] selection:text-white">

            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-[#fcf8ff] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={content.images[0] || "/v4/dcw_hero_full.png"}
                        alt={content.title}
                        fill
                        className="object-cover object-center brightness-[0.8]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block bg-white/90 w-fit px-3 py-1 rounded-full">
                            Crafting Comfort Since 1978
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight font-serif">
                            {content.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light">
                            {content.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PROCESS SECTION (IF EXISTS) */}
            {content.processSteps && (
                <section className="py-24 bg-white border-b border-stone-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                                <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">The Journey</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">
                                Our 4-Step Process
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {content.processSteps.map((step, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="text-6xl font-serif font-black text-stone-100 group-hover:text-[#eb595f]/10 transition-colors duration-500 mb-[-2rem] ml-[-1rem] z-0">
                                        0{idx + 1}
                                    </div>
                                    <div className="relative z-10 p-6 bg-white rounded-2xl">
                                        <h4 className="text-xl font-bold text-[#2d2412] mb-3">{step.title}</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* MATERIALS SECTION (IF EXISTS) */}
            {content.materials && (
                <section className="py-24 bg-[#2d2412] text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/10 rounded-full mb-6 border border-[#eb595f]/20">
                                    <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Unparalleled Quality</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Materials & <br /><span className="text-[#eb595f] italic">Excellence</span>.</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {content.materials.map((mat, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#eb595f]" />
                                            <span className="text-sm text-stone-300 font-light tracking-wide">{mat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden">
                                <Image src="/v4/dcw_materials.png" alt="Materials" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* SPECIALIZATIONS (IF ITEMS OR CARDS EXIST) */}
            {(content.items.length > 0 || (content.specializationCards && content.specializationCards.length > 0)) && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                                <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">What we offer</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">
                                Our Specializations
                            </h2>
                        </div>

                        {content.specializationCards ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {content.specializationCards.map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100"
                                    >
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <h3 className="text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors">
                                                {card.title}
                                            </h3>
                                            <p className="text-stone-500 text-sm leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-4xl mx-auto space-y-6">
                                {content.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group relative bg-[#fcf8ff] p-8 md:p-10 rounded-[2.5rem] border border-[#faf9f6] hover:shadow-2xl hover:border-[#eb595f]/20 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
                                    >
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm shrink-0 group-hover:scale-110 group-hover:bg-[#eb595f] group-hover:text-white transition-all duration-500">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <h3 className="text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors">{item}</h3>
                                            <p className="text-[#2d2412]/60 text-base font-light italic">
                                                Custom built or professionally restored using premium materials exactly to your required specifications.
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ABOUT PAGE SPECIFIC: STATS & TIMELINE */}
            {slug === 'about' && (
                <>
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {content.stats?.map((stat, idx) => (
                                    <div key={idx} className="text-center p-8 bg-[#fcf8ff] rounded-[2.5rem]">
                                        <div className="text-4xl md:text-5xl font-serif font-black text-[#eb595f] mb-2">{stat.value}</div>
                                        <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 bg-[#2d2412] text-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Journey</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold">The DCW Legacy</h2>
                            </div>
                            <div className="space-y-12">
                                {content.timeline?.map((item, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                        <div className="text-4xl font-serif font-black text-[#eb595f] w-32 shrink-0">{item.year}</div>
                                        <div className="flex-1 bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* CONTACT PAGE SPECIFIC: FORM & INFO */}
            {slug === 'contact' && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="space-y-12">
                                <div className="bg-[#2d2412] text-white p-12 rounded-[3rem] shadow-xl">
                                    <h2 className="text-4xl font-serif font-bold mb-8 italic text-[#eb595f]">Get in Touch</h2>
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#eb595f]"><Phone className="w-6 h-6" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Call or WhatsApp</p>
                                                <p className="text-xl font-bold">+91 7744 80 6644</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#eb595f]"><MessageCircle className="w-6 h-6" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Email Support</p>
                                                <p className="text-xl font-bold text-[#eb595f]">dcw@evolxstudio.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#fcf8ff] p-8 rounded-3xl border border-stone-100 text-center">
                                        <p className="text-3xl font-serif font-bold text-[#eb595f]">24h</p>
                                        <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Fast Quote</p>
                                    </div>
                                    <div className="bg-[#fcf8ff] p-8 rounded-3xl border border-stone-100 text-center">
                                        <p className="text-3xl font-serif font-bold text-[#eb595f]">FREE</p>
                                        <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Consultation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-12 rounded-[3rem] border border-stone-100 shadow-2xl">
                                <h3 className="text-3xl font-serif font-bold text-[#2d2412] mb-8">Request a Quote</h3>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Phone Number</label>
                                        <input type="tel" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="+91 XXXXX XXXXX" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Service Required</label>
                                        <select className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all appearance-none cursor-pointer">
                                            <option>New Sofa Manufacturing</option>
                                            <option>Sofa Upholstery</option>
                                            <option>Chair Upholstery</option>
                                            <option>Furniture Restoration</option>
                                        </select>
                                    </div>
                                    <button className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-xl shadow-lg hover:bg-[#2d2412] transition-all flex items-center justify-center gap-3">
                                        Submit Request <ArrowRight className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* BRAND PROMISE SECTION (FOR RELEVANT PAGES) */}
            {(slug === 'process' || slug === 'about') && (
                <section className="py-24 bg-[#fcf8ff]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-[#eb595f]/10 rounded-2xl flex items-center justify-center text-[#eb595f] mb-6 group-hover:bg-[#eb595f] group-hover:text-white transition-colors duration-500">
                                    <Star className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#2d2412] mb-4">Unmatched Quality</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">We source only the finest global textiles and high-density foams to ensure every piece is a masterpiece of comfort and durability.</p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-[#eb595f]/10 rounded-2xl flex items-center justify-center text-[#eb595f] mb-6 group-hover:bg-[#eb595f] group-hover:text-white transition-colors duration-500">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#2d2412] mb-4">Timely Delivery</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">Our process is optimized for efficiency without compromising on detail, ensuring your custom furniture arrives exactly when promised.</p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-[#eb595f]/10 rounded-2xl flex items-center justify-center text-[#eb595f] mb-6 group-hover:bg-[#eb595f] group-hover:text-white transition-colors duration-500">
                                    <MessageCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#2d2412] mb-4">Lifetime Support</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">Since 1978, we stand by our work. Our legacy is built on the trust and long-term satisfaction of our valued clients.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* GALLERY / PORTFOLIO */}
            {content.images.length > 1 && !content.hideShowcase && (
                <section className="py-24 bg-[#fcf8ff]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                                    <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Showcase</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412] tracking-tight">
                                    Featured <span className="text-[#eb595f] italic font-medium">Work</span>.
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {content.images.slice(1).map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-stone-100"
                                >
                                    <Image src={img} alt="Portfolio item" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <div className="text-white">
                                            <span className="text-[10px] uppercase tracking-widest font-bold mb-2 block text-[#eb595f]">Premium Quality</span>
                                            <h4 className="text-2xl font-serif font-bold">Custom Execution</h4>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </div>
    );
}
