
export interface NavItem {
    name: string;
    label: string;
    hasDropdown: boolean;
    isMega?: boolean;
    columns?: {
        title: string;
        items: string[];
    }[];
}

export const topNavLinks: NavItem[] = [
    {
        name: 'Services',
        label: 'Services',
        hasDropdown: true,
        columns: [
            {
                title: 'Our Offerings',
                items: [
                    'Modular Kitchen',
                    'Modular Wardrobes',
                    'Customized Furniture',
                    'Electrical Work',
                    'Plumbing',
                    'False Ceiling',
                    'Civil Work',
                    'Painting',
                    'Floorings & Wall Design'
                ]
            }
        ]
    },
    {
        name: 'Design Ideas',
        label: 'Design Ideas',
        hasDropdown: true,
        isMega: true,
        columns: [
            {
                title: 'Room Designs',
                items: [
                    'Modular Kitchen Designs',
                    'Wardrobe Designs',
                    'Bathroom Designs',
                    'Master Bedroom Designs',
                    'Living Room Designs',
                    'Pooja Room Designs',
                    'TV Unit Designs',
                    'False Ceiling Designs',
                    'Kids Bedroom Designs',
                    'Balcony Designs'
                ]
            },
            {
                title: 'Decor & More',
                items: [
                    'Dining Room Designs',
                    'Foyer Designs',
                    'Homes By EVOLX Studio',
                    'Home Office Designs',
                    'Guest Bedroom Designs',
                    'Window Designs',
                    'Flooring Designs',
                    'Wall Decor Designs',
                    'Wall Paint Designs',
                    'Home Wallpaper Designs'
                ]
            },
            {
                title: 'Specialty & Elements',
                items: [
                    'Tile Designs',
                    'Study Room Designs',
                    'Kitchen Sinks',
                    'Space Saving Designs',
                    'Door Designs',
                    'Staircase Designs',
                    'Crockery Units',
                    'Home Bar Designs'
                ]
            }
        ]
    },
    {
        name: 'Cities',
        label: 'Cities',
        hasDropdown: true,
        columns: [
            {
                title: 'Pune',
                items: ['Pune']
            },
            {
                title: 'Mumbai',
                items: ['Mumbai (Coming Soon)']
            }
        ]
    },
    { name: 'Projects', label: 'Projects', hasDropdown: false },
    {
        name: 'More',
        label: 'More',
        hasDropdown: true,
        columns: [
            {
                title: 'Company',
                items: ['About Us', 'Our Team', 'Careers', 'Press & Media', 'Contact Us', 'Privacy Policy']
            },
            {
                title: 'Resources',
                items: ['Blog', 'Customer Stories', 'Help Center', 'Terms & Conditions']
            }
        ]
    },
];

export const bottomNavLinks: NavItem[] = [
    { name: 'How it works', label: 'How it works', hasDropdown: false },
    {
        name: 'Offerings',
        label: 'Offerings',
        hasDropdown: true,
        columns: [
            { title: 'Services', items: ['Full Home Design', 'Modular Interiors', 'Kitchen Renovations', 'Commercial Spaces'] }
        ]
    },
    {
        name: 'Price Calculators',
        label: 'Price Calculators',
        hasDropdown: true,
        columns: [
            { title: 'Calculators', items: ['Kitchen Price Calculator', 'Wardrobe Price Calculator', 'Full Home Price Estimator'] }
        ]
    },
    { name: 'The Modular Journey', label: 'The Modular Journey', hasDropdown: false },
];


export const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start of text
        .replace(/-+$/, '');      // Trim - from end of text
};

export const getPageContent = (slug: string) => {
    // Find the item name from slug
    let title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Try to find exact match in items to restore proper casing if possible
    const allItems = [...topNavLinks, ...bottomNavLinks].flatMap(link =>
        link.columns
            ? [link.name, ...link.columns.flatMap(col => col.items)]
            : [link.name]
    );

    const match = allItems.find(item => slugify(item) === slug);
    if (match) title = match;

    // Specialized content for calculators
    let subtitle = `Explore the best ${title} for your home`;
    let description = `Discover our exclusive collection of ${title}. At EVOLX Studio, we bring you premium designs that blend functionality with aesthetics. Whether you are looking for modern, contemporary, or traditional styles, our curated selection of ${title} serves every taste.`;

    const serviceData: Record<string, any> = {
        'modular-kitchen': {
            layoutType: 'isometric',
            accentColor: '#eb595f',
            subtitle: "Luxury Kitchens: Where Culinary Arts meet Architectural Precision.",
            description: "Experience the pinnacle of culinary luxury. Our modular kitchens are engineered for efficiency and designed for elegance, featuring high-end finishes and state-of-the-art storage solutions.",
            heroImage: '/v4/3d_kitchen_iso.png',
            galleryImages: ['/v4/luxury_kitchen_1.png', '/v4/luxury_kitchen_2.png', '/v4/luxury_kitchen_3.png'],
            features: [
                { title: 'Italian Hardware', desc: 'Soft-close systems from Blum and Hettich for effortless movement.', icon: '⚙️' },
                { title: 'Quartz Countertops', desc: 'Durable, heat-resistant, and non-porous surfaces for lasting beauty.', icon: '💎' },
                { title: 'Modular Cabinets', desc: 'Precision-engineered units that maximize every inch of your space.', icon: '📦' }
            ],
            materials: [
                { title: 'Italian Quartz', image: '/v4/luxury_kitchen_2.png', desc: 'Highest grade scratch-resistant surfaces.' },
                { title: 'Marine Plywood', image: '/v4/luxury_kitchen_3.png', desc: 'Waterproof core for lifetime durability.' }
            ],
            styles: [
                { title: 'Ultra Modern', image: '/v4/luxury_kitchen_1.png', desc: 'Handle-less designs with high-gloss lacquer finishes.' },
                { title: 'Neo-Classical', image: '/v4/luxury_kitchen_2.png', desc: 'Timeless aesthetics with subtle molding and textured finishes.' }
            ],
            faqs: [
                { q: "What is the typical delivery time?", a: "Our premium modular kitchens are typically delivered and installed within 45 days." },
                { q: "Do you offer warranty?", a: "Yes, we offer a lifetime warranty on all Blum and Hettich hardware." }
            ]
        },
        'modular-wardrobes': {
            layoutType: 'editorial',
            accentColor: '#2d2412',
            subtitle: "Exquisite Wardrobes: A Sanctuary for Your Sartorial Collection.",
            description: "Organize your life with our bespoke modular wardrobes. From walk-in closets to sleek sliding systems, we create storage solutions that reflect your personal style.",
            heroImage: '/v4/3d_wardrobe_iso.png',
            galleryImages: ['/v4/service_wardrobe.png', '/v4/luxury_bedroom_1.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Customized Internals', desc: 'Adjustable shelving and specialized drawers for every accessory.', icon: '👔' },
                { title: 'Premium Glass Doors', desc: 'Elegant tinted or fluted glass options for a modern boutique feel.', icon: '🪞' },
                { title: 'In-built Lighting', desc: 'Integrated LED strips with motion sensors for visibility and ambiance.', icon: '💡' }
            ],
            materials: [
                { title: 'Tinted Glass', image: '/v4/service_wardrobe.png', desc: 'Sophisticated transparency with integrated LED highlights.' },
                { title: 'Leather Laminates', desc: 'Textured finishes that evoke the touch of premium upholstery.', image: '/v4/luxury_bedroom_1.png' }
            ],
            styles: [
                { title: 'Walk-in Closet', image: '/v4/service_wardrobe.png', desc: 'The ultimate luxury experience for your fashion collection.' },
                { title: 'Sliding Systems', image: '/v4/luxury_bedroom_1.png', desc: 'Space-saving elegance with Japanese-inspired smooth mechanisms.' }
            ],
            faqs: [
                { q: "Can wardobes be customized for sloped ceilings?", a: "Absolutely. Our modular systems are highly flexible and can be customized to fit any niche." },
                { q: "What finishes are available?", a: "We offer high-gloss lacquer, back-painted glass, and natural veneers." }
            ]
        },
        'customized-furniture': {
            layoutType: 'artistic',
            accentColor: '#a88a4d',
            subtitle: "Tailor-made Pieces that Define Your Unique Lifestyle.",
            description: "Why settle for standard when you can have bespoke? Our artisans craft unique furniture pieces that fit perfectly into your home's architecture.",
            heroImage: '/v4/luxury_living_2.png',
            galleryImages: ['/v4/luxury_office_1.png', '/v4/service_crockery.png', '/v4/luxury_living_3.png'],
            features: [
                { title: 'Artisanal Craftsmanship', desc: 'Hand-finished details by master craftsmen with decades of experience.', icon: '🎨' },
                { title: 'Exclusive Materials', desc: 'Sourced premium veneers, solid woods, and high-performance fabrics.', icon: '🪵' },
                { title: 'Proportional Design', desc: 'Scaled specifically to your room dimensions for a perfect spatial fit.', icon: '📏' }
            ],
            materials: [
                { title: 'Exotic Veneers', image: '/v4/luxury_living_2.png', desc: 'Natural wood grains sourced from sustainable forests globally.' },
                { title: 'Premium Upholstery', image: '/v4/luxury_living_3.png', desc: 'High-Martindale fabrics that combine soft touch with extreme durability.' }
            ],
            styles: [
                { title: 'Contemporary Chic', image: '/v4/luxury_living_2.png', desc: 'Minimalist lines with bold material contrasts.' },
                { title: 'Vintage Revival', image: '/v4/luxury_living_3.png', desc: 'Modern comfort meets timeless classical silhouettes.' }
            ],
            faqs: [
                { q: "Do you create bespoke sofa designs?", a: "Yes, we design and manufacture bespoke sofas, beds, and dining sets." },
                { q: "Can I choose my own fabric?", a: "Certainly. You can choose from our curated library or provide your own." }
            ]
        },
        'electrical-work': {
            layoutType: 'isometric',
            accentColor: '#3b82f6',
            subtitle: "Smart & Safe: Advanced Electrical Systems for the Modern Home.",
            description: "The heartbeat of your home deserves precision. We provide end-to-end electrical solutions, from concealed wiring to smart home automation.",
            heroImage: '/v4/3d_electrical_iso.png',
            galleryImages: ['/v4/design-session-1.png', '/v4/luxury_office_2.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Smart Integration', desc: 'Full automation support for lighting, climate, and security systems.', icon: '📱' },
                { title: 'Premium Switchgear', desc: 'Design-forward switches and sockets that complement your interiors.', icon: '🔌' },
                { title: 'Safety Certified', desc: 'Fire-resistant cabling and multi-layered protection systems.', icon: '🛡️' }
            ],
            materials: [
                { title: 'Smart Touch Panels', image: '/v4/luxury_office_2.png', desc: 'Elegant glass interfaces for complete home control.' },
                { title: 'FR-LSH Cabling', image: '/v4/design-session-1.png', desc: 'Fire retardant, low smoke wires for maximum safety.' }
            ],
            styles: [
                { title: 'Fully Automated', image: '/v4/luxury_office_2.png', desc: 'Voice and app-controlled ecosystem for a hands-free lifestyle.' },
                { title: 'Minimalist Tech', image: '/v4/design-session-1.png', desc: 'Hidden technology that functions seamlessly without visual clutter.' }
            ],
            faqs: [
                { q: "Do you provide home automation?", a: "Yes, we specialize in complete smart home ecosystems." },
                { q: "Are works certified?", a: "All installations follow strict safety standards and are handled by certified professionals." }
            ]
        },
        'plumbing': {
            layoutType: 'editorial',
            accentColor: '#06b6d4',
            subtitle: "Seamless Flow: High-Performance Plumbing & Sanitary Engineering.",
            description: "Reliable engineering meets luxury fixtures. Our plumbing services ensure a leak-free home with superior water pressure.",
            heroImage: '/v4/luxury_bathroom_1.png',
            galleryImages: ['/v4/luxury_bathroom_2.png', '/v4/luxury_bathroom_3.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'PPR-C Piping', desc: 'Corrosion-resistant and noise-dampening piping for silent operations.', icon: '💧' },
                { title: 'Precision Installation', desc: 'Surgical accuracy in fixture placement and hidden cistern assembly.', icon: '🔧' },
                { title: 'Water Management', desc: 'Advanced pressure pumps and grey-water recycling solutions.', icon: '🌊' }
            ],
            materials: [
                { title: 'PPR-C Systems', image: '/v4/luxury_bathroom_1.png', desc: 'German-standard piping for lifelong leak protection.' },
                { title: 'Luxury Brassware', image: '/v4/luxury_bathroom_2.png', desc: 'Precision-engineered faucets with PVD finishes.' }
            ],
            styles: [
                { title: 'Spa-Inspired', image: '/v4/luxury_bathroom_1.png', desc: 'Wellness-focused bathrooms with rain showers and concealed tech.' },
                { title: 'Industrial Chic', image: '/v4/luxury_bathroom_2.png', desc: 'Bold exposed fixtures with high-performance engineering.' }
            ],
            faqs: [
                { q: "What kind of piping do you use?", a: "We primarily use high-grade PPR-C and CPVC piping." },
                { q: "Do you handle luxury fixtures?", a: "Yes, we install brands like Kohler, Gessi, and Hansgrohe." }
            ]
        },
        'false-ceiling': {
            layoutType: 'artistic',
            accentColor: '#8b5cf6',
            subtitle: "Sculpted Spaces: Architectural Lighting & False Ceiling Artistry.",
            description: "Transform your fifth wall into a masterpiece. Our false ceiling designs integrate indirect lighting and acoustic treatments.",
            heroImage: '/v4/luxury_living_1.png',
            galleryImages: ['/v4/luxury_office_2.png', '/v4/luxury_living_2.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Cove Lighting', desc: 'Soft, ambient illumination that eliminates harsh shadows and glares.', icon: '💡' },
                { title: 'Acoustic Panels', desc: 'Integrated sound-dampening materials for a quieter environment.', icon: '🔇' },
                { title: 'Design Complexity', desc: 'Multi-level gypsum or wooden designs tailored to your style.', icon: '📐' }
            ],
            materials: [
                { title: 'Saint-Gobain Gypsum', image: '/v4/luxury_living_1.png', desc: 'Extra-strength ceiling boards with superior finish.' },
                { title: 'Acoustic Pelmets', image: '/v4/luxury_office_2.png', desc: 'Hidden curtain tracks with integrated sound buffers.' }
            ],
            styles: [
                { title: 'Floating Layered', image: '/v4/luxury_living_1.png', desc: 'Architectural depth created with multi-level suspensions.' },
                { title: 'Seamless Minimal', image: '/v4/luxury_living_2.png', desc: 'Invisible edges and integrated magnetic track lighting.' }
            ],
            faqs: [
                { q: "What materials do you use?", a: "We use moisture-resistant gypsum boards and solid wood." },
                { q: "Can false ceilings reduce noise?", a: "Yes, we can integrate acoustic buffers." }
            ]
        },
        'civil-work': {
            layoutType: 'editorial',
            accentColor: '#64748b',
            subtitle: "The Foundation of Luxury: Structural Integrity & Expert Solutions.",
            description: "From structural modifications to flawless finishing, our civil engineering team ensures your home's foundation is as strong as its aesthetic.",
            heroImage: '/v4/luxury_office_3.png',
            galleryImages: ['/v4/luxury_office_1.png', '/v4/luxury_bathroom_1.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Structural Expertise', desc: 'Certified engineering for wall removals and spatial redesigns.', icon: '🏗️' },
                { title: 'Precision Masonry', desc: 'Laser-leveled walls and surfaces for a true-to-plan finish.', icon: '🧱' },
                { title: 'Waterproofing', desc: 'Multi-stage polymer-based protection for all wet areas.', icon: '☔' }
            ],
            materials: [
                { title: 'Polymer Waterproofing', image: '/v4/luxury_bathroom_1.png', desc: '5-layer protection against moisture ingress.' },
                { title: 'High-Strength Concrete', image: '/v4/luxury_office_3.png', desc: 'Quality-tested structural mixes for internal modifications.' }
            ],
            styles: [
                { title: 'Open-Plan Layout', image: '/v4/luxury_office_3.png', desc: 'Strategic wall removals to create vast, interconnected spaces.' },
                { title: 'Acoustic Isolation', image: '/v4/luxury_office_1.png', desc: 'Heavy-duty civil interventions for sound-proofed home theaters.' }
            ],
            faqs: [
                { q: "Do you perform structural changes?", a: "Yes, we handle internal modifications with engineering protocols." },
                { q: "Is waterproofing included?", a: "Absolutely. We provide industrial-grade waterproofing." }
            ]
        },
        'painting': {
            layoutType: 'artistic',
            accentColor: '#ec4899',
            subtitle: "Chromatic Perfection: High-End Finishes & Wall Coatings.",
            description: "Color your world with precision. We use premium non-toxic paints and specialized application techniques to achieve mirror-like finishes.",
            heroImage: '/v4/painting.png',
            galleryImages: ['/v4/luxury_living_1.png', '/v4/luxury_office_2.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Texture Artistry', desc: 'Specialized finishes including stucco, velvet, and metallic effects.', icon: '🖌️' },
                { title: 'Eco-Friendly Paints', desc: 'Low-VOC, odorless paints for a healthier indoor environment.', icon: '🌿' },
                { title: 'Precision Taping', desc: 'Razor-sharp edges and flawlessly smooth surface preparation.', icon: '📏' }
            ],
            materials: [
                { title: 'Stucco Lustro', image: '/v4/painting.png', desc: 'Italian marble-dust finishes with mirror-like shine.' },
                { title: 'Silicone Polymers', image: '/v4/luxury_living_1.png', desc: 'Washable, anti-fungal coatings for eternal freshness.' }
            ],
            styles: [
                { title: 'Editorial Textures', image: '/v4/painting.png', desc: 'Statement walls with concrete, rust, or velvet effects.' },
                { title: 'High-Gloss Lacquer', image: '/v4/luxury_office_2.png', desc: 'Automotive-grade finishes for furniture and accent panels.' }
            ],
            faqs: [
                { q: "What paint brands do you use?", a: "We use premium ranges from Asian Paints (Royale) and Jotun." },
                { q: "How do you ensure a smooth finish?", a: "Our 5-step preparation includes mechanical sanding." }
            ]
        },
        'floorings-wall-design': {
            layoutType: 'editorial',
            accentColor: '#78350f',
            subtitle: "Surface Elegance: Exotic Floorings & Statement Wall Treatments.",
            description: "Every step should be on luxury. From Italian marble to bespoke wall paneling, we curate surfaces that define your space.",
            heroImage: '/v4/luxury_office_2.png',
            galleryImages: ['/v4/luxury_kitchen_1.png', '/v4/luxury_office_3.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Italian Marble', desc: 'Sourced and mirror-polished to perfection for timeless opulence.', icon: '🏛️' },
                { title: 'Hardwood & Vinyl', desc: 'Premium moisture-resistant options for warmth and durability.', icon: '🪵' },
                { title: 'Stone Veneers', desc: 'Ultrathin natural stone panels for breathtaking feature walls.', icon: '🪨' }
            ],
            materials: [
                { title: 'Statuario Marble', image: '/v4/luxury_office_2.png', desc: 'The gold standard of luxury flooring from Carrara.' },
                { title: 'Charcoal Paneling', image: '/v4/luxury_kitchen_1.png', desc: 'Modern high-definition wall treatments for bold interiors.' }
            ],
            styles: [
                { title: 'Classical Grandeur', image: '/v4/luxury_office_2.png', desc: 'Intricate marble inlays and traditional wainscoting.' },
                { title: 'Industrial Loft', image: '/v4/luxury_office_3.png', desc: 'Micro-concrete flooring and exposed brick or stone walls.' }
            ],
            faqs: [
                { q: "Do you handle marble polishing?", a: "Yes, we provide end-to-end marble solutions." },
                { q: "What wall paneling options exist?", a: "We offer charcoal, PVC louvers, and natural stone veneers." }
            ]
        },
    };

    if (serviceData[slug]) {
        return {
            title,
            subtitle: serviceData[slug].subtitle,
            description: serviceData[slug].description,
            heroImage: serviceData[slug].heroImage,
            galleryImages: serviceData[slug].galleryImages,
            features: serviceData[slug].features,
            faqs: serviceData[slug].faqs,
            layoutType: serviceData[slug].layoutType,
            accentColor: serviceData[slug].accentColor,
            materials: serviceData[slug].materials,
            styles: serviceData[slug].styles
        };
    }

    if (slug.includes('calculator') || slug.includes('estimator')) {
        subtitle = `Get an instant, transparent cost estimate for your interior project.`;
        description = `Plan your budget with confidence using our advanced pricing tools. Our ${title} takes into account your specific requirements, layout, and material preferences to provide a realistic cost breakdown for your dream home.`;
    }

    if (slug === 'the-modular-journey') {
        subtitle = "From Concept to Creation: A seamless 45-day path to your dream home.";
        description = "Our modular journey is designed for those who value precision, quality, and time. Experience a stress-free transformation with our end-to-end expertise.";
    }

    if (slug === 'own-a-franchise') {
        subtitle = "Empower the next era of luxury home design in your city.";
        description = "Join India's most innovative interior design brand. With our proven business model and end-to-end support, building a profitable design business has never been easier.";
    }

    if (slug === 'projects') {
        subtitle = "A Gallery of Timeless Design & Architectural Excellence.";
        description = "Explore our portfolio of curated luxury homes. From urban penthouses to heritage villas, witness how we translate aspirations into architectural reality across India.";
    }

    if (slug === 'store-locator') {
        subtitle = "Experience Luxury in Person at Our Bespoke Studios.";
        description = "Find an EVOLX Studio near you. Step into our state-of-the-art experience centers to touch textures, feel finishes, and start your design journey with our experts.";
    }

    if (slug === 'about-us') {
        subtitle = "A Legacy of Innovation and Design Excellence.";
        description = "Discover the story of EVOLX Studio. From our humble beginnings to becoming a leader in luxury modular interiors, learn about our values and our mission.";
    }

    if (slug === 'our-team') {
        subtitle = "Meet the Visionaries and Artisans Behind the Name.";
        description = "Our collective of specialized architects, designers, and engineers work in harmony to bring your dream spaces to life with surgical precision.";
    }

    if (slug === 'contact-us') {
        subtitle = "Start Your Design Evolution Today.";
        description = "Ready to transform your home? Reach out to our design concierge team for a personalized consultation or visit one of our flagship experience centers.";
    }

    if (slug === 'press-media') {
        subtitle = "The Latest Headlines from the Frontlines of Design.";
        description = "Stay updated with our corporate announcements, media features, and technological breakthroughs as we redefine the interior design landscape.";
    }

    if (slug === 'privacy-policy') {
        subtitle = "Your Data Integrity is Our Design Priority.";
        description = "We are committed to the highest standards of data protection. Read our comprehensive policy on how we handle and protect your personal information.";
    }

    if (slug === 'blog') {
        subtitle = "Insights, Trends, and Design Intelligence.";
        description = "The EVOLX Journal is your source for curated interior advice, latest architecture trends, and expert tips on high-end modular living.";
    }

    if (slug === 'customer-stories') {
        subtitle = "Real Homes. Real People. Remarkable Transformations.";
        description = "Witness the journey of homeowners who chose EVOLX Studio. Explore detailed case studies of how we turned bare shells into bespoke sanctuaries.";
    }

    if (slug === 'help-center') {
        subtitle = "We're Here to Support Your Design Journey.";
        description = "Find answers to frequently asked questions, track your project status, or raise a support ticket for post-installation services.";
    }

    if (slug === 'terms-conditions') {
        subtitle = "A Foundation of Mutual Trust and Transparency.";
        description = "Understand our project delivery timelines, payment milestones, and warranty commitments that ensure a smooth and professional experience.";
    }

    return {
        title,
        subtitle,
        description,
        heroImage: '/v4/interior-living-3d.jpg', // Default placeholder
        galleryImages: [
            '/v4/interior-living-3d.jpg',
            '/v4/interior-living-3d.jpg',
            '/v4/interior-living-3d.jpg',
            '/v4/interior-living-3d.jpg'
        ],
        features: [
            { title: 'Premium Quality', desc: 'Crafted with the finest materials.' },
            { title: 'Expert Design', desc: 'Curated by top interior designers.' },
            { title: 'Customizable', desc: 'Tailored to fit your specific needs.' }
        ]
    };
};
