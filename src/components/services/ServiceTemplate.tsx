"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { IntroSection } from './IntroSection';
import { FeaturesGrid } from './FeaturesGrid';
import { MaterialShowcase } from './MaterialShowcase';
import { DesignStyles } from './DesignStyles';
import { ProcessHelix } from './ProcessHelix';
import { GalleryGrid } from './GalleryGrid';
import { ServiceFAQ } from './ServiceFAQ';
import { FinalCTA } from './FinalCTA';
import BrandPromise from '@/components/BrandPromise';

export interface ServicePageProps {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    layoutType: 'isometric' | 'editorial' | 'artistic' | 'minimal';
    accentColor?: string;
    features: { title: string; desc: string; icon?: string }[];
    galleryImages: string[];
    materials?: { title: string; image: string; desc: string }[];
    styles?: { title: string; image: string; desc: string }[];
    faqs?: { q: string; a: string }[];
    stats?: { label: string; value: string }[];
}

const ServiceTemplate: React.FC<ServicePageProps> = (props) => {
    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            {/* 1. Hero Section */}
            <HeroSection
                title={props.title}
                subtitle={props.subtitle}
                image={props.heroImage}
                layoutType={props.layoutType}
                accentColor={props.accentColor}
            />

            {/* 2. Intro Section */}
            <IntroSection
                title={props.title}
                description={props.description}
                image={props.galleryImages[0]}
                layoutType={props.layoutType}
                accentColor={props.accentColor}
            />

            {/* 3. Features Grid */}
            <FeaturesGrid
                features={props.features}
                layoutType={props.layoutType}
                title={props.title}
                accentColor={props.accentColor}
            />

            {/* 4. Material Showcase (New Section) */}
            {props.materials && (
                <MaterialShowcase
                    materials={props.materials}
                    layoutType={props.layoutType}
                    accentColor={props.accentColor}
                />
            )}

            {/* 5. Design Styles / Variations (New Section) */}
            {props.styles && (
                <DesignStyles
                    styles={props.styles}
                    title={props.title}
                    accentColor={props.accentColor}
                />
            )}

            {/* 6. Brand Promise / Trust */}
            <BrandPromise />

            {/* 7. Process Helix */}
            <ProcessHelix
                variant={props.layoutType}
                accentColor={props.accentColor}
            />

            {/* 8. Gallery Grid */}
            <GalleryGrid
                images={props.galleryImages}
                accentColor={props.accentColor}
            />

            {/* 9. FAQ Section */}
            {props.faqs && (
                <ServiceFAQ
                    faqs={props.faqs}
                    title={props.title}
                    accentColor={props.accentColor}
                />
            )}

            {/* 10. Final CTA */}
            <FinalCTA accentColor={props.accentColor} />
        </main>
    );
};


export default ServiceTemplate;
