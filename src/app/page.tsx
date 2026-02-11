"use client";

import Hero from "@/components/features/Hero3D";
import GenesisSection from "@/components/features/GenesisSection";
import ServicesExperience from "@/components/features/ServicesExperience";
import MaterialityCraft from "@/components/features/MaterialityCraft";
import BrandIdentity from "@/components/features/BrandIdentity";
import ExhibitionPress from "@/components/features/ExhibitionPress";
import TestimonialSection from "@/components/features/TestimonialSection";
import DigitalAtelier from "@/components/features/DigitalAtelier";
import ConsultationSection from "@/components/features/ConsultationSection";

export default function Home() {
    return (
        <main className="bg-white">
            <Hero />
            <GenesisSection />
            <ServicesExperience />
            <MaterialityCraft />
            <BrandIdentity />
            <ExhibitionPress />
            <TestimonialSection />
            <DigitalAtelier />
            <ConsultationSection />
        </main>
    );
}
