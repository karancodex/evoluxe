"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getPageContent, topNavLinks, slugify } from '@/data/nav-data';
import Image from 'next/image';
import MasterCalculator from '@/components/calculators/MasterCalculator';
import DesignIdeasContent from '@/components/DesignIdeasContent';
import ModularJourneyContent from '@/components/ModularJourneyContent';
import FranchiseContent from '@/components/FranchiseContent';
import ProjectsContent from '@/components/ProjectsContent';
import StoreLocatorContent from '@/components/StoreLocatorContent';
import AboutContent from '@/components/AboutContent';
import OurTeamContent from '@/components/OurTeamContent';
import ContactUsContent from '@/components/ContactUsContent';
import PressMediaContent from '@/components/PressMediaContent';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import BlogContent from '@/components/BlogContent';
import CustomerStoriesContent from '@/components/CustomerStoriesContent';
import HelpCenterContent from '@/components/HelpCenterContent';
import TermsConditionsContent from '@/components/TermsConditionsContent';
import FAQ from '@/components/FAQ';
import BrandPromise from '@/components/BrandPromise';
import Link from 'next/link';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import HowItWorksContent from '@/components/HowItWorksContent';

// --- Main Page Component ---

const TopicPage = () => {
    const params = useParams();
    const slug = params?.slug as string;



    const isCalculator = useMemo(() => [
        'kitchen-price-calculator',
        'wardrobe-price-calculator',
        'full-home-price-estimator'
    ].includes(slug), [slug]);

    const calculatorType = useMemo(() => {
        if (slug.includes('kitchen')) return 'kitchen';
        if (slug.includes('wardrobe')) return 'wardrobe';
        return 'full-home';
    }, [slug]);

    const content = useMemo(() => getPageContent(slug), [slug]);

    if (!content) return notFound();



    if (isCalculator) {
        return (
            <main className="min-h-screen bg-stone-50 pt-32">
                <section className="py-24 px-6 md:px-12">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <MasterCalculator type={calculatorType as any} />
                    </motion.div>
                </section>
            </main>
        );
    }

    // Special cases for company pages (already handled by company/[slug] but kept here for safety)
    const specialComponents: Record<string, React.ReactNode> = {
        'the-modular-journey': <ModularJourneyContent />,
        'own-a-franchise': <FranchiseContent />,
        'projects': <ProjectsContent />,
        'store-locator': <StoreLocatorContent />,
        'about-us': <AboutContent />,
        'our-team': <OurTeamContent />,
        'contact-us': <ContactUsContent />,
        'press-media': <PressMediaContent />,
        'privacy-policy': <PrivacyPolicyContent />,
        'blog': <BlogContent />,
        'customer-stories': <CustomerStoriesContent />,
        'help-center': <HelpCenterContent />,
        'terms-conditions': <TermsConditionsContent />,
        'how-it-works': <HowItWorksContent />,
    };

    if (specialComponents[slug]) {
        return (
            <main className="min-h-screen bg-white pt-24">
                {specialComponents[slug]}
            </main>
        );
    }

    // Default to the new ServiceTemplate for services
    return (
        <ServiceTemplate
            slug={slug}
            title={content.title}
            subtitle={content.subtitle}
            description={content.description}
            heroImage={content.heroImage}
            layoutType={(content as any).layoutType || 'editorial'}
            accentColor={(content as any).accentColor}
            features={content.features}
            galleryImages={content.galleryImages}
            materials={(content as any).materials}
            styles={(content as any).styles}
            faqs={content.faqs}
        />
    );
};

export default TopicPage;

