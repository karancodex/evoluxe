"use client";

import React, { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/v4/Navbar';
import Footer from '@/components/v4/Footer';
import CityContent from '@/components/v4/CityContent';
import { topNavLinks, slugify } from '@/data/v4/nav-data';

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
            <Navbar />
            <div className="pt-20"> {/* Adjust for fixed navbar height */}
                <CityContent cityName={currentCity} slug={slug} />
            </div>
            <Footer />
        </main>
    );
};

export default CityPage;
