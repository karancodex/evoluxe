"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getPageContent } from '@/data/nav-data';
import DesignIdeasContent from '@/components/DesignIdeasContent';

const DesignIdeaPage = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const content = useMemo(() => getPageContent(slug), [slug]);

    if (!content) return notFound();

    return (
        <main className="min-h-screen bg-white">
            <div className="pt-24 md:pt-32">
                <DesignIdeasContent
                    title={content.title}
                    description={content.description}
                    slug={slug}
                    galleryImages={content.galleryImages}
                />
            </div>
        </main>
    );
};

export default DesignIdeaPage;
