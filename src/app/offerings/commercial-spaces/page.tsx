"use client";

import React from 'react';
import OfferingLanding from '@/components/services/OfferingLanding';

const CommercialSpacesPage = () => {
    return (
        <main className="pt-20">
            <OfferingLanding
                title="Premium Commercial Spaces,"
                heroSubtitle="Business Environments Redefined."
                heroImage="/v4/luxury_office_1.png"
                accentColor="#eb595f"
                introTitle="Professional Excellence Inspired Success"
                introDesc="From high-end offices to luxury retail showrooms, we design environments that reflect your brand identity and enhance professional productivity."
                offerCards={[
                    { title: "Boutique Offices", image: "/v4/luxury_office_2.png", desc: "Collaborative, ergonomic, and brand-aligned office interiors for modern teams." },
                    { title: "Showrooms & Retail", image: "/v4/luxury_office_3.png", desc: "Immersive retail environments designed to elevate the customer experience." },
                    { title: "Meeting & Boardrooms", image: "/v4/luxury_office_1.png", desc: "High-tech meeting spaces with sophisticated acoustic and visual integration." }
                ]}
                features={[
                    { title: "Brand Alignment", image: "/v4/luxury_office_1.png", desc: "Translating your corporate identity into architectural design elements." },
                    { title: "Ergonomic Workspaces", image: "/v4/luxury_office_2.png", desc: "Promoting physical health and productivity with top-tier furniture selections." },
                    { title: "Smart Lighting", image: "/v4/luxury_living_1.png", desc: "Intelligent lighting systems to enhance focus and set the right ambiance." },
                    { title: "Acoustic Separation", image: "/v4/luxury_office_3.png", desc: "Advanced sound insulation for quiet work and private meetings." },
                    { title: "Modern Tech Integration", image: "/v4/3d_electrical_iso.png", desc: "Seamless power and data connectivity across all workspaces." },
                    { title: "Flexible Floorplans", image: "/v4/luxury_office_2.png", desc: "Versatile layouts that adapt to your growing business needs." }
                ]}
                steps={[
                    { title: "Strategy", icon: "Building", desc: "Defining your brand persona and team requirements." },
                    { title: "Design Concepts", icon: "PenTool", desc: "Visualizing your commercial space with creative 3D concepts." },
                    { title: "On-Time Completion", icon: "Clock", desc: "Meeting strict project deadlines for business continuity." }
                ]}
                journeyHighlights={[
                    {
                        phase: "Strategy & Design",
                        days: "Day 1 - 15",
                        items: ["Workplace Audit & Flow", "Corporate Brand Coordination", "Technology & Connectivity Needs", "Regulatory Compliance Check"]
                    },
                    {
                        phase: "Implementation Phase",
                        days: "Day 16 - 60",
                        items: ["High-precision Civil Works", "Infrastructure & IT Engineering", "Specialized Furniture Fabrication", "Complete Branding & Finishing"]
                    }
                ]}
                testimonials={[
                    { name: "Siddharth K.", role: "Founder, Tech Startup", content: "Our office design by evoluxstudio is a huge hit with the team. It reflects our spirit perfectly.", avatar: "/v4/about/team-1.png" },
                    { name: "Priya V.", role: "Store Manager", content: "The showroom they designed has significantly increased our footfall. It looks world-class.", avatar: "/v4/about/team-2.png" }
                ]}
                videoStories={[
                    { title: "Modern Tech Hub", image: "/v4/luxury_office_1.png", location: "Pune", clientName: "NexGen HQ" },
                    { title: "Luxury Fashion Showroom", image: "/v4/luxury_office_2.png", location: "Pune", clientName: "Aura Boutique" },
                    { title: "Executive Boardroom", image: "/v4/luxury_office_3.png", location: "Mumbai", clientName: "Global Capital Corp" }
                ]}
                promiseContent={{
                    title: "The Commercial Promise",
                    desc: "On-time delivery, premium aesthetics, and professional expertise. We build spaces where businesses thrive.",
                    illustration: "/v4/luxury_office_1.png",
                    features: ["On-Time Delivery", "Brand Specific", "High-Performance Materials", "Corporate Warranty"]
                }}
                faqs={[
                    { q: "What is the typical timeline for commercial interiors?", a: "Depending on the scale, most office projects are completed within 45 to 60 days." },
                    { q: "Do you handle IT and electrical planning?", a: "Yes, we provide end-to-end services including electrical, data, and IT infrastructure planning." },
                    { q: "Can you design for retail spaces?", a: "Absolutely. We specialize in retail environments that optimize customer flow and product display." }
                ]}
            />
        </main>
    );
};

export default CommercialSpacesPage;
