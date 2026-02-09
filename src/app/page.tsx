"use client";

import Hero from "@/components/features/Hero3D";
import BrandStory from "@/components/features/BrandStory";
import ServicesExperience from "@/components/features/ServicesExperience";
import BrandIdentity from "@/components/features/BrandIdentity";
import TestimonialSection from "@/components/features/TestimonialSection";
import ConsultationSection from "@/components/features/ConsultationSection";

export default function Home() {
    return (
        <main className="bg-black">
            <Hero />
            <BrandStory />
            <ServicesExperience />
            <BrandIdentity />
            <TestimonialSection />
            <ConsultationSection />
        </main>
    );
}
