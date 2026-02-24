"use client";

import React from 'react';
import Navbar from '@/components/v4/Navbar';
import Hero from '@/components/v4/Hero';
import ServicesSlider from '@/components/v4/ServicesSlider';
import StatsSection from '@/components/v4/StatsSection';
import BrandPromise from '@/components/v4/BrandPromise';
import DesignSession from '@/components/v4/DesignSession';
import InspirationGallery from '@/components/v4/InspirationGallery';
import EvolxStudioIntro from '@/components/v4/EvoLuxeIntro';
import Testimonials from '@/components/v4/Testimonials';
import Partners from '@/components/v4/Partners';
import FAQ from '@/components/v4/FAQ';
import MeetDesignerBanner from '@/components/v4/MeetDesignerBanner';
import Footer from '@/components/v4/Footer';

export default function Home() {
    return (
        <main
            className="min-h-screen font-sans selection:bg-[#e5d5b0] selection:text-[#4d3b1a] bg-white text-[#4d3b1a]"
            style={{
                '--foreground': '#4d3b1a',
                '--background': '#ffffff'
            } as any}
        >
            <Navbar />
            <Hero />
            <ServicesSlider />
            <StatsSection />
            <BrandPromise />
            <DesignSession />
            <InspirationGallery />
            <Testimonials />
            <Partners />
            <FAQ />
            <MeetDesignerBanner />
            <Footer />
        </main>
    );
}

