"use client";

import React from 'react';
import OfferingLanding from '@/components/services/OfferingLanding';

const ModularInteriorsPage = () => {
    return (
        <main className="pt-20">
            <OfferingLanding
                title="Smart Modular Interiors,"
                heroSubtitle="Redefining Elegance."
                heroImage="/v4/3d_wardrobe_iso.png"
                accentColor="#eb595f"
                introTitle="Engineering Your Perfect Space"
                introDesc="Maximize your living space with our premium modular solutions. From sophisticated wardrobes to intelligent TV units, we bring precision-engineered furniture that fits your lifestyle perfectly."
                offerCards={[
                    { title: "Modular Wardrobes", image: "/v4/service_wardrobe.png", desc: "Sleek sliding and openable wardrobe systems with customized internal organizers." },
                    { title: "Entertainment Units", image: "/v4/luxury_living_2.png", desc: "Minimally designed TV units that blend storage with high-end aesthetics." },
                    { title: "Crockery & Bars", image: "/v4/service_crockery.png", desc: "Exquisite display units and home bars crafted for the modern entertainer." }
                ]}
                features={[
                    { title: "Precision Engineering", image: "/v4/3d_wardrobe_iso.png", desc: "Every unit is factory-finished with surgical precision for a flawless fit." },
                    { title: "Custom Organizers", image: "/v4/service_wardrobe.png", desc: "Hassle-free organization with specialized trays for every accessory." },
                    { title: "Premium Hardware", image: "/v4/3d_kitchen_iso.png", desc: "Sourced from the world's best brands for lifelong durability and smooth operation." },
                    { title: "Anti-Bacterial Finishes", image: "/v4/painting.png", desc: "Advanced coating technology for a hygienic and safe home environment." },
                    { title: "Easy Installation", image: "/v4/journey-step-6.png", desc: "Quick and clean assembly process with minimal on-site disruption." },
                    { title: "Versatile Styles", image: "/v4/luxury_bedroom_1.png", desc: "From ultra-modern to neo-classical, choose a style that matches your home." }
                ]}
                steps={[
                    { title: "Consultation", icon: "Ruler", desc: "Detailed measurement and requirement analysis." },
                    { title: "Customization", icon: "Wrench", desc: "Tailoring modular units to your specific space and needs." },
                    { title: "Fast-Track Move-in", icon: "Rocket", desc: "Ready for use within 45 days of design approval." }
                ]}
                journeyHighlights={[
                    {
                        phase: "System Design",
                        days: "Day 1 - 15",
                        items: ["Ergonomic Layout Planning", "Material & Hardware Selection", "Color Palette Coordination", "Storage Optimization Check"]
                    },
                    {
                        phase: "Production & Setup",
                        days: "Day 16 - 45",
                        items: ["Automated Factory Production", "Quality Assurance Testing", "Site-ready Modular Delivery", "Expert Professional Installation"]
                    }
                ]}
                testimonials={[
                    { name: "Vikram Mehta", role: "IT Professional", content: "The modular wardrobes from evoluxstudio transformed our storage. The sliding mechanism is incredibly smooth.", avatar: "/v4/about/team-3.png" },
                    { name: "Sonia G.", role: "Graphic Designer", content: "I love the minimalist TV unit they designed. It's functional, beautiful, and fits the space perfectly.", avatar: "/v4/about/team-1.png" }
                ]}
                videoStories={[
                    { title: "Smart Storage Solution", image: "/v4/service_wardrobe.png", location: "Pune", clientName: "Vikram's Smart Home" },
                    { title: "Minimalist Media Center", image: "/v4/luxury_living_1.png", location: "Pune", clientName: "Sonia's Boutique Studio" },
                    { title: "Luxury Closet", image: "/v4/luxury_bedroom_1.png", location: "Mumbai", clientName: "The Oberoi Suite" }
                ]}
                promiseContent={{
                    title: "The Modular Promise",
                    desc: "Precision, quality, and speed. We deliver modular excellence that exceeds expectations every time.",
                    illustration: "/v4/3d_wardrobe_iso.png",
                    features: ["45-Day Delivery", "German Hardware", "Factory Finish", "Lifetime Warranty"]
                }}
                faqs={[
                    { q: "What materials do you use for wardrobes?", a: "We use high-grade marine plywood and HDMR boards with premium laminates or acrylic finishes." },
                    { q: "Can I customize the internals?", a: "Absolutely. Every drawer, shelf, and accessory tray can be customized to your needs." },
                    { q: "What is the warranty on modular units?", a: "We offer a 10-year warranty on all modular furniture and lifetime service support." }
                ]}
            />
        </main>
    );
};

export default ModularInteriorsPage;
