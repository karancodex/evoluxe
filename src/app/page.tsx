"use client";

import React from 'react';
import Hero from '@/components/Hero';
import ServicesSlider from '@/components/ServicesSlider';
import StatsSection from '@/components/StatsSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import DesignSession from '@/components/DesignSession';
import InspirationGallery from '@/components/InspirationGallery';
import EvolxStudioIntro from '@/components/EvoLuxeIntro';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import MeetDesignerBanner from '@/components/MeetDesignerBanner';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function V4HomePage() {
    return (
        <main
            className="min-h-screen selection:bg-[#eb595f] selection:text-white bg-white text-[#2d2412]"
        >
            <Hero />
            <ServicesSlider />
            <StatsSection />
            <WhatWeOffer />
            <DesignSession />
            <InspirationGallery />
            <Testimonials />
            <Partners />
            <FAQ />
            <MeetDesignerBanner />
            <WhatsAppFloat />
        </main>
    );
}
