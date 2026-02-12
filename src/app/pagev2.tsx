"use client";

import Hero from "@/components/featuresV2/Hero3D";
import GenesisSection from "@/components/featuresV2/GenesisSection";
import PhilosophySection from "@/components/featuresV2/PhilosophySection";
import ServicesExperience from "@/components/featuresV2/ServicesExperience";
import MaterialityCraft from "@/components/featuresV2/MaterialityCraft";
import MaterialsCraftsmanship from "@/components/featuresV2/MaterialsCraftsmanship";
import BrandIdentity from "@/components/featuresV2/BrandIdentity";
import ProjectPortfolio from "@/components/featuresV2/ProjectPortfolio";
import DesignProcess from "@/components/featuresV2/DesignProcess";
import ExhibitionPress from "@/components/featuresV2/ExhibitionPress";
import TestimonialSection from "@/components/featuresV2/TestimonialSection";
import DigitalAtelier from "@/components/featuresV2/DigitalAtelier";
import ConsultationSection from "@/components/featuresV2/ConsultationSection";

export default function HomeV2() {
    return (
        <main className="bg-black">
            <Hero />
            <GenesisSection />
            <PhilosophySection />
            <ServicesExperience />
            <MaterialityCraft />
            <MaterialsCraftsmanship />
            <BrandIdentity />
            <ProjectPortfolio />
            <DesignProcess />
            <ExhibitionPress />
            <TestimonialSection />
            <DigitalAtelier />
            <ConsultationSection />
        </main>
    );
}
