"use client";

import React from 'react';
import OfferingLanding from '@/components/services/OfferingLanding';

const FullHomeDesignPage = () => {
    return (
        <main className="pt-20">
            <OfferingLanding
                title="Luxury Home Design,"
                heroSubtitle="Crafted for Excellence."
                heroImage="/v4/luxury_living_1.png"
                accentColor="#eb595f"
                introTitle="Transforming Your Vision into Reality"
                introDesc="At evoluxstudio, we believe every home has a story. Our end-to-end interior design services transform your vision into a living masterpiece, blending architectural precision with artistic flair."
                offerCards={[
                    { title: "Living Room Designs", image: "/v4/luxury_living_2.png", desc: "Curated living spaces that balance comfort, elegance, and social interaction." },
                    { title: "Master Bedroom Suites", image: "/v4/luxury_bedroom_1.png", desc: "Private sanctuaries designed for tranquility, rest, and personal expression." },
                    { title: "Dining & Foyer", image: "/v4/luxury_living_3.png", desc: "Grand entries and inviting dining areas that make every meal an experience." }
                ]}
                features={[
                    { title: "Premium Finishes", image: "/v4/painting.png", desc: "Experience the touch of luxury with our curated selection of high-end materials and finishes." },
                    { title: "Space Optimization", image: "/v4/service_wardrobe.png", desc: "Intelligent design solutions that maximize every square foot of your home." },
                    { title: "Smart Home Tech", image: "/v4/3d_electrical_iso.png", desc: "Seamless integration of automation for a modern, connected living experience." },
                    { title: "Customized Furniture", image: "/v4/service_crockery.png", desc: "Bespoke pieces handcrafted to fit your space and style perfectly." },
                    { title: "Acoustic Excellence", image: "/v4/luxury_living_1.png", desc: "Advanced sound-dampening solutions for a peaceful indoor environment." },
                    { title: "Sustainable Design", image: "/v4/luxury_bathroom_1.png", desc: "Eco-friendly materials and energy-efficient layouts for a greener future." }
                ]}
                steps={[
                    { title: "Consultation", icon: "Handshake", desc: "Understanding your lifestyle and design preferences." },
                    { title: "Design & 3D", icon: "Palette", desc: "Visualizing your dream home with immersive 3D renders." },
                    { title: "Execution", icon: "Hammer", desc: "Precision-led installation with a 45-day move-in guarantee." }
                ]}
                journeyHighlights={[
                    {
                        phase: "Design Phase",
                        days: "Day 1 - 20",
                        items: ["Site verification & Measurement", "Conceptual 2D Layouts", "3D Visualization & VR Walkthrough", "Material & Finish Selection"]
                    },
                    {
                        phase: "Execution & Delivery",
                        days: "Day 21 - 45",
                        items: ["Civil & Structural Modifications", "Electrical & Plumbing Engineering", "Custom Modular Manufacturing", "On-site Assembly & Final Styling"]
                    }
                ]}
                testimonials={[
                    { name: "Anish Sharma", role: "Homeowner, Pune", content: "evoluxstudio turned our bare shell apartment into a luxury sanctuary. The attention to detail is simply unmatched.", avatar: "/v4/about/team-1.png" },
                    { name: "Riya Kapoor", role: "Architect", content: "As a professional, I appreciate their technical precision. Their ability to deliver high-end design within 45 days is incredible.", avatar: "/v4/about/team-2.png" }
                ]}
                videoStories={[
                    { title: "The Modern Penthouse", image: "/v4/luxury_living_1.png", location: "Pune, Maharashtra", clientName: "The Sharma Residence" },
                    { title: "Contemporary Villa", image: "/v4/luxury_living_2.png", location: "Mumbai", clientName: "Kapoor's Urban Villa" },
                    { title: "Urban Living Space", image: "/v4/luxury_living_3.png", location: "Pune, Maharashtra", clientName: "Mehta's Smart Home" }
                ]}
                promiseContent={{
                    title: "Our Promise to You",
                    desc: "We don't just design houses; we build legacies. Our commitment to quality and transparency ensures a stress-free journey from start to finish.",
                    illustration: "/v4/luxury_living_1.png",
                    features: ["45-Day Delivery", "10-Year Warranty", "Transparent Pricing", "No Hidden Costs"]
                }}
                faqs={[
                    { q: "How long does a full home design take?", a: "Our standard delivery timeline is 45 days after the final design sign-off." },
                    { q: "Do you offer post-installation service?", a: "Yes, we provide a 10-year warranty and lifetime maintenance support for our clients." },
                    { q: "What is included in Full Home Design?", a: "It covers everything from civil work, plumbing, and electrical to modular furniture, decor, and styling." }
                ]}
            />
        </main>
    );
};

export default FullHomeDesignPage;
