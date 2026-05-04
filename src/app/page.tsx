"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const ServicesSlider = dynamic(() => import('@/components/ServicesSlider'));
const StatsSection = dynamic(() => import('@/components/StatsSection'));
const WhatWeOffer = dynamic(() => import('@/components/WhatWeOffer'));
const DesignSession = dynamic(() => import('@/components/DesignSession'));
const InspirationGallery = dynamic(() => import('@/components/InspirationGallery'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Partners = dynamic(() => import('@/components/Partners'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const MeetDesignerBanner = dynamic(() => import('@/components/MeetDesignerBanner'));
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'));

export default function V4HomePage() {
    return (
        <main className="min-h-screen selection:bg-[#eb595f] selection:text-white bg-white text-[#2d2412]">
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
