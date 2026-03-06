"use client";

import React from 'react';
import Hero from '@/components/Hero';
import ServicesSlider from '@/components/ServicesSlider';
import StatsSection from '@/components/StatsSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import EstimateSection from '@/components/EstimateSection';
import BrandPromise from '@/components/BrandPromise';
import DesignSession from '@/components/DesignSession';
import InspirationGallery from '@/components/InspirationGallery';
import EvolxStudioIntro from '@/components/EvoLuxeIntro';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import MeetDesignerBanner from '@/components/MeetDesignerBanner';

export default function V4HomePage() {
    return (
        <main
            className="min-h-screen font-sans selection:bg-[#e5d5b0] selection:text-[#4d3b1a] bg-white text-[#4d3b1a]"
            style={{
                '--foreground': '#4d3b1a',
                '--background': '#ffffff'
            } as any}
        >
            <Hero />
            <ServicesSlider />
            <StatsSection />
            <WhatWeOffer />
            <EstimateSection />
            <BrandPromise />
            <DesignSession />
            <InspirationGallery />
            <Testimonials />
            <Partners />
            <FAQ />
            <MeetDesignerBanner />
        </main>
    );
}
