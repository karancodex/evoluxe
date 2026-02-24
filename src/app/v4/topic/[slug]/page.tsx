"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/v4/Navbar';
import Footer from '@/components/v4/Footer';
import { getPageContent, topNavLinks, slugify } from '@/data/v4/nav-data';
import Image from 'next/image';
import MasterCalculator from '@/components/v4/calculators/MasterCalculator';
import DesignIdeasContent from '@/components/v4/DesignIdeasContent';
import ModularJourneyContent from '@/components/v4/ModularJourneyContent';
import FranchiseContent from '@/components/v4/FranchiseContent';
import ProjectsContent from '@/components/v4/ProjectsContent';
import StoreLocatorContent from '@/components/v4/StoreLocatorContent';
import AboutContent from '@/components/v4/AboutContent';
import OurTeamContent from '@/components/v4/OurTeamContent';
import ContactUsContent from '@/components/v4/ContactUsContent';
import PressMediaContent from '@/components/v4/PressMediaContent';
import PrivacyPolicyContent from '@/components/v4/PrivacyPolicyContent';
import BlogContent from '@/components/v4/BlogContent';
import CustomerStoriesContent from '@/components/v4/CustomerStoriesContent';
import HelpCenterContent from '@/components/v4/HelpCenterContent';
import TermsConditionsContent from '@/components/v4/TermsConditionsContent';

const TopicPage = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const designIdeasSlugs = useMemo(() => {
        const designIdeas = topNavLinks.find(link => link.name === 'Design Ideas');
        if (!designIdeas || !designIdeas.columns) return [];
        const items = designIdeas.columns.flatMap(col => col.items.map(item => slugify(item)));
        const titles = designIdeas.columns.filter(col => col.title).map(col => slugify(col.title));
        return [...items, ...titles];
    }, []);

    const isDesignIdea = useMemo(() => {
        return designIdeasSlugs.includes(slug);
    }, [slug, designIdeasSlugs]);

    const isCalculator = useMemo(() => {
        return [
            'kitchen-price-calculator',
            'wardrobe-price-calculator',
            'full-home-price-estimator'
        ].includes(slug);
    }, [slug]);

    const calculatorType = useMemo(() => {
        if (slug.includes('kitchen')) return 'kitchen';
        if (slug.includes('wardrobe')) return 'wardrobe';
        return 'full-home';
    }, [slug]);

    const content = useMemo(() => {
        return getPageContent(slug);
    }, [slug]);

    if (!content) {
        return notFound();
    }

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    if (isDesignIdea) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-24 md:pt-32"> {/* Spacing for fixed navbar */}
                    <DesignIdeasContent
                        title={content.title}
                        description={content.description}
                        slug={slug}
                    />
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={content.heroImage}
                        alt={content.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white mt-10">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight"
                    >
                        {content.title}
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto text-stone-100 drop-shadow-md"
                    >
                        {content.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Main Content Area */}
            {slug === 'the-modular-journey' ? (
                <ModularJourneyContent />
            ) : slug === 'own-a-franchise' ? (
                <FranchiseContent />
            ) : slug === 'projects' ? (
                <ProjectsContent />
            ) : slug === 'store-locator' ? (
                <StoreLocatorContent />
            ) : slug === 'about-us' ? (
                <AboutContent />
            ) : slug === 'our-team' ? (
                <OurTeamContent />
            ) : slug === 'contact-us' ? (
                <ContactUsContent />
            ) : slug === 'press-media' ? (
                <PressMediaContent />
            ) : slug === 'privacy-policy' ? (
                <PrivacyPolicyContent />
            ) : slug === 'blog' ? (
                <BlogContent />
            ) : slug === 'customer-stories' ? (
                <CustomerStoriesContent />
            ) : slug === 'help-center' ? (
                <HelpCenterContent />
            ) : slug === 'terms-conditions' ? (
                <TermsConditionsContent />
            ) : isCalculator ? (
                <section className="py-24 px-6 md:px-12 bg-stone-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <MasterCalculator type={calculatorType as any} />
                    </motion.div>
                </section>
            ) : (
                <>
                    {/* Introduction / Description */}
                    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                className="space-y-8"
                            >
                                <div>
                                    <span className="text-[#eb595f] font-bold text-sm tracking-[0.2em] uppercase mb-2 block">Premium Design</span>
                                    <h2 className="text-2xl md:text-5xl font-serif text-[#2d2412] leading-tight">
                                        Elevate your space with <br className="hidden sm:block" />
                                        <span className="italic text-stone-400">{content.title}</span>
                                    </h2>
                                </div>

                                <p className="text-stone-600 leading-relaxed text-lg font-light">
                                    {content.description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="px-8 py-3.5 bg-[#eb595f] text-white font-medium uppercase tracking-wider hover:bg-[#2d2412] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        Book Free Consultation
                                    </button>
                                    <button className="px-8 py-3.5 border border-[#eb595f] text-[#eb595f] font-medium uppercase tracking-wider hover:bg-[#eb595f] hover:text-white transition-all duration-300">
                                        View Gallery
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[300px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src={content.galleryImages[0] || content.heroImage}
                                    alt="Interior Design"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="py-24 bg-[#f9f5fa]">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 space-y-4">
                                <span className="text-[#eb595f] text-xs font-bold tracking-[0.2em] uppercase">Inspiration</span>
                                <h2 className="text-2xl md:text-5xl font-serif text-[#2d2412]">Curated Designs</h2>
                                <div className="w-20 h-0.5 bg-[#eb595f] mx-auto mt-6"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {content.galleryImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group relative aspect-[4/5] overflow-hidden rounded-sm shadow-md cursor-pointer"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Design ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <h4 className="text-white text-xl font-serif mb-2">Modern {content.title}</h4>
                                            <span className="text-stone-200 text-sm uppercase tracking-wider flex items-center gap-2">
                                                View Details <span>→</span>
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Features */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#4d3b1a]">Why Choose EVOLX Studio?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {content.features?.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 border border-stone-100 hover:border-[#e5d5b0]/30 hover:shadow-[0_10px_40px_-10px_rgba(197,160,89,0.1)] transition-all bg-white text-center group"
                            >
                                <div className="w-16 h-16 bg-[#faf9f6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c5a059] transition-colors duration-300">
                                    <span className="text-2xl text-[#c5a059] group-hover:text-white transition-colors">✦</span>
                                </div>
                                <h3 className="text-xl font-serif text-[#4d3b1a] mb-4 font-bold">{feature.title}</h3>
                                <p className="text-stone-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="py-28 bg-[#eb595f] relative overflow-hidden text-center px-6">
                <div className="absolute inset-0 bg-[url('/v4/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-serif mb-8 text-white leading-tight">Ready to transform your home?</h2>
                    <p className="text-white mb-12 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Book a consultation with our expert designers and bringing your dream {content.title.toLowerCase()} to life.
                    </p>
                    <button className="px-12 py-5 bg-white text-[#eb595f] font-bold text-sm uppercase tracking-[0.15em] hover:bg-[#2d2412] hover:text-white transition-colors shadow-2xl hover:scale-105 duration-300">
                        Get Started Now
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TopicPage;
