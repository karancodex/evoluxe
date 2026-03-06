"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import CityContent from '@/components/CityContent';
import { topNavLinks, slugify } from '@/data/nav-data';

const CityPage = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const cities = useMemo(() => {
        const cityLink = topNavLinks.find(link => link.name === 'Cities');
        if (!cityLink || !cityLink.columns) return [];
        return cityLink.columns.flatMap(col => col.items);
    }, []);

    const currentCity = useMemo(() => {
        return cities.find(city => slugify(city) === slug);
    }, [slug, cities]);

    if (!currentCity) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="pt-20"> {/* Adjust for fixed navbar height */}
                <CityContent cityName={currentCity} slug={slug} />
            </div>
        </main>
    );
};

export default CityPage;
