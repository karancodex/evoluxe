"use client";

import React from 'react';
import OfferingLanding from '@/components/services/OfferingLanding';

const KitchenRenovationsPage = () => {
    return (
        <main className="pt-20">
            <OfferingLanding
                title="Luxury Kitchen Renovations,"
                heroSubtitle="Inspiring Culinary Mastery."
                heroImage="/v4/luxury_kitchen_1.png"
                accentColor="#0a9396"
                introTitle="Culinary Artistry Redefined"
                introDesc="A kitchen is more than just a workspace; it's the heart of your home. At evoluxstudio, we renovate and create state-of-the-art kitchens that combine ergonomic efficiency with stunning aesthetics."
                offerCards={[
                    { title: "Modular Cabinets", image: "/v4/luxury_kitchen_2.png", desc: "Italian-inspired modular cabinet systems with soft-close mechanisms." },
                    { title: "Smart Storage", image: "/v4/3d_kitchen_iso.png", desc: "Intelligent pull-outs and corner solutions to maximize kitchen space." },
                    { title: "Countertops & Walls", image: "/v4/luxury_kitchen_3.png", desc: "Durable quartz surfaces and backsplash designs for ultimate luxury." }
                ]}
                features={[
                    { title: "High-Grade Materials", image: "/v4/luxury_kitchen_1.png", desc: "Moisture-resistant and heat-proof materials for lifelong kitchen durability." },
                    { title: "Ergonomic Layouts", image: "/v4/3d_kitchen_iso.png", desc: "Optimizing the 'work triangle' for maximum cooking efficiency." },
                    { title: "Premium Hardware", image: "/v4/luxury_kitchen_2.png", desc: "Sourced from the best globally for seamless operation and longevity." },
                    { title: "Anti-Stain Quartz", image: "/v4/luxury_kitchen_3.png", desc: "Scratch and stain-resistant surfaces for a hygienic cooking space." },
                    { title: "Lighting Design", image: "/v4/luxury_living_1.png", desc: "Under-cabinet and ambient lighting for a professionally lit kitchen." },
                    { title: "Chimney & Hob", image: "/v4/luxury_office_2.png", desc: "Seamless integration of high-performance kitchen appliances." }
                ]}
                steps={[
                    { title: "Concept", icon: "🍳", desc: "Defining your cooking style and functional needs." },
                    { title: "Visuals", icon: "🖥️", desc: "Visualizing your renovated kitchen with realistic 3D models." },
                    { title: "Ready-to-Cook", icon: "🍱", desc: "Complete renovation delivered within 45 days." }
                ]}
                journeyHighlights={[
                    {
                        phase: "Kitchen Design",
                        days: "Day 1 - 10",
                        items: ["Plumbing & Electrical Review", "Appliance Selection Guide", "Finish & Material Coordination", "3D Rendering & Sign-off"]
                    },
                    {
                        phase: "Renovation Phase",
                        days: "Day 11 - 45",
                        items: ["Old Kitchen Removal & Civil Work", "Tile & Countertop Installation", "Modular Component Setup", "Fitting & Testing All Hardware"]
                    }
                ]}
                testimonials={[
                    { name: "Megha Rao", role: "Home Chef", content: "My kitchen renovation from evoluxstudio was life-changing. Everything is so organized and beautiful.", avatar: "/v4/about/team-2.png" },
                    { name: "Rohit S.", role: "Blogger", content: "Their attention to the workflow in a kitchen is incredible. My kitchen feels professional yet cozy.", avatar: "/v4/about/team-3.png" }
                ]}
                videoStories={[
                    { title: "Chef's Paradise", image: "/v4/luxury_kitchen_1.png", location: "Pune", clientName: "Megha's Gourmet Kitchen" },
                    { title: "Contemporary Island", image: "/v4/luxury_kitchen_2.png", location: "Mumbai", clientName: "The South Mumbai Loft" },
                    { title: "Modern Pantry", image: "/v4/luxury_kitchen_3.png", location: "Pune", clientName: "Rohit's Food Studio" }
                ]}
                promiseContent={{
                    title: "The Culinary Promise",
                    desc: "A kitchen that's as efficient as it is beautiful. We deliver results that inspire you to cook every day.",
                    illustration: "/v4/3d_kitchen_iso.png",
                    features: ["45-Day Delivery", "Italian Fittings", "Heat & Water Proof", "10-Year Warranty"]
                }}
                faqs={[
                    { q: "How long does a kitchen renovation take?", a: "We deliver full kitchen renovations within 45 days of design sign-off." },
                    { q: "What is the warranty on modular kitchens?", a: "We provide a 10-year warranty on all our modular kitchen units and hardware." },
                    { q: "What materials do you use for wet areas?", a: "We use 100% waterproof BWP plywood to ensure long-lasting durability in wet kitchen areas." }
                ]}
            />
        </main>
    );
};

export default KitchenRenovationsPage;
