"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/v4/Navbar';
import Footer from '@/components/v4/Footer';
import { getPageContent } from '@/data/v4/nav-data';
import MagazineContent from '@/components/v4/MagazineContent';

const MagazineTopicPage = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const content = useMemo(() => {
        return getPageContent(slug);
    }, [slug]);

    if (!content) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20 md:pt-24 lg:pt-32"> {/* Dynamic spacing for fixed navbar */}
                <MagazineContent
                    title={content.title}
                    description={content.description}
                    slug={slug}
                />
            </div>
            <Footer />
        </main>
    );
};

export default MagazineTopicPage;
