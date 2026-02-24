"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/v4/Navbar';
import Footer from '@/components/v4/Footer';
import AboutContent from '@/components/v4/AboutContent';
import ContactContent from '@/components/v4/ContactContent';
import LegalContent from '@/components/v4/LegalContent';
import MagazineContent from '@/components/v4/MagazineContent';
import { getPageContent, slugify } from '@/data/v4/nav-data';

const CompanyPage = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const content = useMemo(() => {
        return getPageContent(slug);
    }, [slug]);

    if (!content) {
        return notFound();
    }

    const renderContent = () => {
        switch (slug) {
            case 'about-us':
                return <AboutContent />;
            case 'contact-us':
                return <ContactContent />;
            case 'privacy-policy':
                return <LegalContent title="Privacy Policy" />;
            case 'terms-conditions':
                return <LegalContent title="Terms & Conditions" />;
            case 'blog':
            case 'customer-stories':
            case 'careers':
            case 'press-media':
            case 'our-team':
            case 'refer-a-friend':
            case 'help-center':
                // Reuse the attractive Magazine/Grid layout for these informational pages
                return (
                    <MagazineContent
                        title={content.title}
                        description={content.description}
                        slug={slug}
                    />
                );
            default:
                return (
                    <div className="py-32 px-6 text-center">
                        <h1 className="text-4xl font-serif font-bold text-[#4d3b1a] mb-4">{content.title}</h1>
                        <p className="text-stone-500 max-w-2xl mx-auto">{content.description}</p>
                    </div>
                );
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-24 md:pt-32">
                {renderContent()}
            </div>
            <Footer />
        </main>
    );
};

export default CompanyPage;
