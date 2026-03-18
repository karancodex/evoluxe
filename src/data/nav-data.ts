
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
                items: ['Mumbai']
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
                items: ['About Us', 'Our Team', 'Contact Us', 'Privacy Policy']
            },
            {
                title: 'Resources',
                items: ['Blog', 'Customer Stories', 'Help Center', 'Terms & Conditions']
            }
        ]
    },
    {
        name: 'DCW',
        label: 'DCW',
        hasDropdown: true,
        columns: [
            {
                title: 'Sofa & Upholstery',
                items: [
                    'DCW Home',
                    'Sofas',
                    'Upholstery Services',
                    'Our Work',
                    'Process & Materials',
                    'Contact / Get Quote'
                ]
            }
        ]
    },
];

export const bottomNavLinks: NavItem[] = [
    { name: 'How it work', label: 'How it works', hasDropdown: false },
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

export const getLink = (item: string) => {
    const slug = slugify(item);

    // 1. Check Top Nav Links
    for (const link of topNavLinks) {
        if (link.name === item) {
            if (link.name === 'Design Ideas') return `/design-ideas`;
            if (link.name === 'Services') return `/services`;
            if (link.name === 'Cities') return `/city`;
            if (link.name === 'Projects') return `/projects`;
            return `/${slugify(link.name)}`;
        }

        if (link.columns) {
            for (const col of link.columns) {
                if (col.items.includes(item)) {
                    if (link.name === 'DCW') {
                        if (item === 'DCW Home') return '/dcw';
                        if (item === 'Sofas') return '/dcw/sofas';
                        if (item === 'Upholstery Services') return '/dcw/upholstery';
                        if (item === 'Our Work') return '/dcw/portfolio';
                        if (item === 'Process & Materials') return '/dcw/process';
                        if (item === 'About DCW') return '/dcw/about';
                        if (item === 'Contact / Get Quote') return '/contact-us';
                        return `/dcw/${slug}`;
                    }
                    if (link.name === 'Design Ideas') return `/design-ideas/${slug}`;
                    if (link.name === 'Cities') return `/city/${slug}`;
                    if (link.name === 'More') return `/${slug}`;
                    return `/services/${slug}`;
                }
            }
        }
    }

    // 2. Check Bottom Nav Links
    for (const link of bottomNavLinks) {
        if (link.name === item) {
            if (link.name === 'Offerings') return `/Offerings`;
            if (link.name === 'Price Calculators') return `/calculators`;
            return `/${slugify(link.name)}`;
        }

        if (link.columns) {
            for (const col of link.columns) {
                if (col.items.includes(item)) {
                    if (link.name === 'Offerings') return `/Offerings/${slug}`;
                    if (link.name === 'Price Calculators') return `/calculators/${slug}`;
                    return `/services/${slug}`;
                }
            }
        }
    }

    // Default
    return `/services/${slug}`;
};

export const cityData: Record<string, any> = {
    'pune': {
        heroImage: '/v4/city/pune_hero.png',
        experienceCenterImage: '/v4/luxury_living_1.png',
        tagline: "Pune's Most Innovative Interior Design Studio",
        description: "From the traditional wadas to ultra-modern high-rises in Hinjewadi and Baner, we bring a unique blend of heritage and contemporary design to Pune homes.",
        locations: [
            { name: 'Kothrud Experience Center', address: 'Plot No. 12, Paud Road, Kothrud, Pune 411038' },
            { name: 'Wakad Design Studio', address: 'Near Phoenix Mall, Wakad, Pune 411057' }
        ],
        stats: [
            { label: 'Homes Delivered', value: '1,200+' },
            { label: 'Design Experts', value: '45+' },
            { label: 'Service Areas', value: '25+' }
        ],
        services: [
            { title: 'Modular Kitchens', desc: 'Ergonomic designs for the modern Puneri kitchen.', img: '/v4/luxury_kitchen_1.png' },
            { title: 'Bespoke Wardrobes', desc: 'Space-saving solutions for compact urban living.', img: '/v4/service_wardrobe.png' },
            { title: 'Full Home Interiors', desc: 'End-to-end transformation of your shell flat.', img: '/v4/full-home-design.png' }
        ]
    },
    'mumbai': {
        heroImage: '/v4/city/mumbai_hero.png',
        experienceCenterImage: '/v4/luxury_living_2.png',
        tagline: "Luxury Interiors for the Mumbai High-Life",
        description: "Defining luxury in the city of dreams. We specialize in maximizing space in Mumbai apartments while delivering a global aesthetic that matches the city's ambition.",
        locations: [
            { name: 'Lower Parel Flagship', address: 'The Mill, Senapati Bapat Marg, Lower Parel, Mumbai 400013' },
            { name: 'Juhu Design Studio', address: 'Juhu Tara Road, Opp Hotel Sea Princess, Juhu, Mumbai 400049' }
        ],
        stats: [
            { label: 'Luxury Penthouses', value: '450+' },
            { label: 'Design Experience', value: '20+ Yrs' },
            { label: 'Happy Families', value: '800+' }
        ],
        services: [
            { title: 'Compact Luxury', desc: 'Smart spatial planning for premium Mumbai apartments.', img: '/v4/luxury_living_3.png' },
            { title: 'Modular Excellence', desc: 'Italian-finish kitchens and wardrobe systems.', img: '/v4/luxury_kitchen_2.png' },
            { title: 'Sea-Facing Penthouses', desc: 'Specialized designs for high-rise coastal homes.', img: '/v4/luxury_office_3.png' }
        ]
    }
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
                { title: 'Italian Hardware', desc: 'Soft-close systems from Blum and Hettich for effortless movement.', icon: 'Settings' },
                { title: 'Quartz Countertops', desc: 'Durable, heat-resistant, and non-porous surfaces for lasting beauty.', icon: 'Gem' },
                { title: 'Modular Cabinets', desc: 'Precision-engineered units that maximize every inch of your space.', icon: 'Package' }
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
            accentColor: '#eb595f',
            subtitle: "Exquisite Wardrobes: A Sanctuary for Your Sartorial Collection.",
            description: "Organize your life with our bespoke modular wardrobes. From walk-in closets to sleek sliding systems, we create storage solutions that reflect your personal style.",
            heroImage: '/v4/3d_wardrobe_iso.png',
            galleryImages: ['/v4/service_wardrobe.png', '/v4/luxury_bedroom_1.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Customized Internals', desc: 'Adjustable shelving and specialized drawers for every accessory.', icon: 'Shirt' },
                { title: 'Premium Glass Doors', desc: 'Elegant tinted or fluted glass options for a modern boutique feel.', icon: 'Box' },
                { title: 'In-built Lighting', desc: 'Integrated LED strips with motion sensors for visibility and ambiance.', icon: 'Lightbulb' }
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
            accentColor: '#eb595f',
            subtitle: "Bespoke Pieces: Tailor-made designs that define your unique lifestyle.",
            description: "Why settle for standard when you can have bespoke? Our artisans craft unique furniture pieces that fit perfectly into your home's architecture.",
            heroImage: '/v4/luxury_living_2.png',
            galleryImages: ['/v4/luxury_office_1.png', '/v4/service_crockery.png', '/v4/luxury_living_3.png'],
            features: [
                { title: 'Artisanal Craftsmanship', desc: 'Hand-finished details by master craftsmen with decades of experience.', icon: 'Palette' },
                { title: 'Exclusive Materials', desc: 'Sourced premium veneers, solid woods, and high-performance fabrics.', icon: 'Box' },
                { title: 'Proportional Design', desc: 'Scaled specifically to your room dimensions for a perfect spatial fit.', icon: 'Ruler' }
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
            accentColor: '#eb595f',
            subtitle: "Smart & Safe: Advanced Electrical Systems for the Modern Home.",
            description: "The heartbeat of your home deserves precision. We provide end-to-end electrical solutions, from concealed wiring to smart home automation.",
            heroImage: '/v4/3d_electrical_iso.png',
            galleryImages: ['/v4/design-session-1.png', '/v4/luxury_office_2.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Smart Integration', desc: 'Full automation support for lighting, climate, and security systems.', icon: 'Smartphone' },
                { title: 'Premium Switchgear', desc: 'Design-forward switches and sockets that complement your interiors.', icon: 'Plug' },
                { title: 'Safety Certified', desc: 'Fire-resistant cabling and multi-layered protection systems.', icon: 'ShieldCheck' }
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
            accentColor: '#eb595f',
            subtitle: "Seamless Flow: High-Performance Plumbing & Sanitary Engineering.",
            description: "Reliable engineering meets luxury fixtures. Our plumbing services ensure a leak-free home with superior water pressure.",
            heroImage: '/v4/luxury_bathroom_1.png',
            galleryImages: ['/v4/luxury_bathroom_2.png', '/v4/luxury_bathroom_3.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'PPR-C Piping', desc: 'Corrosion-resistant and noise-dampening piping for silent operations.', icon: 'Droplets' },
                { title: 'Precision Installation', desc: 'Surgical accuracy in fixture placement and hidden cistern assembly.', icon: 'Wrench' },
                { title: 'Water Management', desc: 'Advanced pressure pumps and grey-water recycling solutions.', icon: 'Waves' }
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
            accentColor: '#eb595f',
            subtitle: "Sculpted Spaces: Architectural Lighting & False Ceiling Artistry.",
            description: "Transform your fifth wall into a masterpiece. Our false ceiling designs integrate indirect lighting and acoustic treatments.",
            heroImage: '/v4/luxury_living_1.png',
            galleryImages: ['/v4/luxury_office_2.png', '/v4/luxury_living_2.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Cove Lighting', desc: 'Soft, ambient illumination that eliminates harsh shadows and glares.', icon: 'Lightbulb' },
                { title: 'Acoustic Panels', desc: 'Integrated sound-dampening materials for a quieter environment.', icon: 'VolumeX' },
                { title: 'Design Complexity', desc: 'Multi-level gypsum or wooden designs tailored to your style.', icon: 'Layout' }
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
            accentColor: '#eb595f',
            subtitle: "The Foundation of Luxury: Structural Integrity & Expert Solutions.",
            description: "From structural modifications to flawless finishing, our civil engineering team ensures your home's foundation is as strong as its aesthetic.",
            heroImage: '/v4/luxury_office_3.png',
            galleryImages: ['/v4/luxury_office_1.png', '/v4/luxury_bathroom_1.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Structural Expertise', desc: 'Certified engineering for wall removals and spatial redesigns.', icon: 'Hammer' },
                { title: 'Precision Masonry', desc: 'Laser-leveled walls and surfaces for a true-to-plan finish.', icon: 'Square' },
                { title: 'Waterproofing', desc: 'Multi-stage polymer-based protection for all wet areas.', icon: 'CloudRain' }
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
            accentColor: '#eb595f',
            subtitle: "Chromatic Perfection: High-End Finishes & Wall Coatings.",
            description: "Color your world with precision. We use premium non-toxic paints and specialized application techniques to achieve mirror-like finishes.",
            heroImage: '/v4/painting.png',
            galleryImages: ['/v4/luxury_living_1.png', '/v4/luxury_office_2.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Texture Artistry', desc: 'Specialized finishes including stucco, velvet, and metallic effects.', icon: 'Brush' },
                { title: 'Eco-Friendly Paints', desc: 'Low-VOC, odorless paints for a healthier indoor environment.', icon: 'Leaf' },
                { title: 'Precision Taping', desc: 'Razor-sharp edges and flawlessly smooth surface preparation.', icon: 'Ruler' }
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
            accentColor: '#eb595f',
            subtitle: "Surface Elegance: Exotic Floorings & Statement Wall Treatments.",
            description: "Every step should be on luxury. From Italian marble to bespoke wall paneling, we curate surfaces that define your space.",
            heroImage: '/v4/luxury_office_2.png',
            galleryImages: ['/v4/luxury_kitchen_1.png', '/v4/luxury_office_3.png', '/v4/interior-living-3d.jpg'],
            features: [
                { title: 'Italian Marble', desc: 'Sourced and mirror-polished to perfection for timeless opulence.', icon: 'Building' },
                { title: 'Hardwood & Vinyl', desc: 'Premium moisture-resistant options for warmth and durability.', icon: 'Box' },
                { title: 'Stone Veneers', desc: 'Ultrathin natural stone panels for breathtaking feature walls.', icon: 'Mountain' }
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
        'modular-kitchen-designs': {
            layoutType: 'isometric',
            accentColor: '#eb595f',
            subtitle: "Masterful Kitchen Designs for Modern Living.",
            description: "Discover our award-winning modular kitchen designs that combine ergonomic efficiency with high-end luxury. Tailored for the modern Indian home.",
            heroImage: '/v4/luxury_kitchen_1.png',
            galleryImages: ['/v4/luxury_kitchen_2.png', '/v4/luxury_kitchen_3.png', '/v4/3d_kitchen_iso.png'],
        },
        'wardrobe-designs': {
            layoutType: 'editorial',
            accentColor: '#2d2412',
            subtitle: "Bespoke Wardrobes for Organized Luxury.",
            description: "Explore our collection of modular wardrobes, ranging from walk-in closets to sleek sliding systems, designed to maximize storage and style.",
            heroImage: '/v4/service_wardrobe.png',
            galleryImages: ['/v4/3d_wardrobe_iso.png', '/v4/luxury_bedroom_1.png'],
        },
        'bathroom-designs': {
            layoutType: 'artistic',
            accentColor: '#06b6d4',
            subtitle: "Spa-like Retreats in the Comfort of Your Home.",
            description: "Transform your bathrooms into personal spas with our luxury designs featuring premium fixtures, elegant tiles, and smart spatial planning.",
            heroImage: '/v4/luxury_bathroom_1.png',
            galleryImages: ['/v4/luxury_bathroom_2.png', '/v4/luxury_bathroom_3.png'],
        },
        'master-bedroom-designs': {
            layoutType: 'editorial',
            accentColor: '#a88a4d',
            subtitle: "Sanctuaries of Rest and Refinement.",
            description: "Our master bedroom designs focus on comfort and luxury, creating a perfect balance of aesthetics and tranquility for your private haven.",
            heroImage: '/v4/luxury_bedroom_1.png',
            galleryImages: ['/v4/luxury_living_1.png', '/v4/interior-living-3d.jpg'],
        },
        'living-room-designs': {
            layoutType: 'artistic',
            accentColor: '#78350f',
            subtitle: "The Heart of the Home: Grand Living Spaces.",
            description: "Create a lasting impression with living room designs that reflect your personality and style, featuring bespoke furniture and premium finishes.",
            heroImage: '/v4/luxury_living_1.png',
            galleryImages: ['/v4/luxury_living_2.png', '/v4/luxury_living_3.png'],
        },
        'pooja-room-designs': {
            layoutType: 'editorial',
            accentColor: '#d97706',
            subtitle: "Divine Spaces for Spiritual Serenity.",
            description: "Bespoke Pooja room designs that blend tradition with modern aesthetics, featuring marble work, intricate carvings, and soft lighting.",
            heroImage: '/v4/gen/pooja_room.png',
            galleryImages: ['/v4/gen/foyer.png'],
        },
        'tv-unit-designs': {
            layoutType: 'isometric',
            accentColor: '#3b82f6',
            subtitle: "Modern Entertainment Hubs for Your Living Space.",
            description: "Transform your wall into a statement piece with our contemporary TV unit designs featuring marble panels and integrated lighting.",
            heroImage: '/v4/gen/tv_unit.png',
            galleryImages: ['/v4/gen/false_ceiling.png'],
        },
        'kids-bedroom-designs': {
            layoutType: 'artistic',
            accentColor: '#ec4899',
            subtitle: "Whimsical and Smart Designs for the Little Ones.",
            description: "Inspirational kids' bedroom designs that spark creativity while providing practical storage and study solutions.",
            heroImage: '/v4/gen/kids_bedroom.png',
            galleryImages: ['/v4/gen/study_room.png'],
        },
        'balcony-designs': {
            layoutType: 'editorial',
            accentColor: '#10b981',
            subtitle: "Private Oases in the Urban Jungle.",
            description: "Maximizing small outdoor spaces with lush vertical gardens, cozy seating, and ambient lighting for the perfect escape.",
            heroImage: '/v4/gen/balcony.png',
            galleryImages: ['/v4/gen/window_designs.png'],
        },
        'false-ceiling-designs': {
            layoutType: 'artistic',
            accentColor: '#8b5cf6',
            subtitle: "Architectural Artistry Above Your Head.",
            description: "Elevate your interiors with multi-level false ceiling designs that integrate sophisticated lighting and acoustic treatments.",
            heroImage: '/v4/gen/false_ceiling.png',
            galleryImages: ['/v4/luxury_living_1.png'],
        },
        'dining-room-designs': {
            layoutType: 'editorial',
            accentColor: '#b91c1c',
            subtitle: "Elegant Spaces for Unforgettable Gatherings.",
            description: "Design grand dining areas that elevate every meal, featuring statement tables, luxury chairs, and artisanal lighting.",
            heroImage: '/v4/gen/dining_room.png',
            galleryImages: ['/v4/gen/kitchen_sink.png'],
        },
        'foyer-designs': {
            layoutType: 'artistic',
            accentColor: '#92400e',
            subtitle: "A Grand Welcome to Your Dream Home.",
            description: "The first impression matters. Our foyer designs combine elegance and warmth to welcome guests with style.",
            heroImage: '/v4/gen/foyer.png',
            galleryImages: ['/v4/gen/door_design.png'],
        },
        'home-office-designs': {
            layoutType: 'editorial',
            accentColor: '#1e40af',
            subtitle: "Productive Sanctuaries for Modern Worklife.",
            description: "Bespoke home office designs that blend ergonomics with high-end luxury, ensuring a focused and professional workspace.",
            heroImage: '/v4/gen/home_office.png',
            galleryImages: ['/v4/gen/study_room.png', '/v4/luxury_office_1.png'],
        },
        'guest-bedroom-designs': {
            layoutType: 'editorial',
            accentColor: '#4b5563',
            subtitle: "Hospitality Reimagined: Refinement for Your Guests.",
            description: "Offer your guests the luxury of a premium hotel with our guest bedroom designs that focus on comfort and understated elegance.",
            heroImage: '/v4/gen/guest_bedroom.png',
            galleryImages: ['/v4/luxury_bedroom_1.png'],
        },
        'window-designs': {
            layoutType: 'artistic',
            accentColor: '#2563eb',
            subtitle: "Framing the World with Architectural Elegance.",
            description: "Luxury window designs that maximize natural light and views while adding to the architectural beauty of your home.",
            heroImage: '/v4/gen/window_designs.png',
            galleryImages: ['/v4/gen/balcony.png'],
        },
        'flooring-designs': {
            layoutType: 'editorial',
            accentColor: '#7c2d12',
            subtitle: "Foundations of Luxury: Exotic Surface Solutions.",
            description: "From Italian marble to premium hardwood, discover flooring designs that set the tone for your entire home.",
            heroImage: '/v4/luxury_office_2.png',
            galleryImages: ['/v4/gen/tiles.png'],
        },
        'tile-designs': {
            layoutType: 'artistic',
            accentColor: '#4f46e5',
            subtitle: "Intricate Patterns and Hand-picked Textures.",
            description: "Explore our collection of designer tiles, from large-format slabs to intricate mosaics for statement walls and floors.",
            heroImage: '/v4/gen/tiles.png',
            galleryImages: ['/v4/luxury_bathroom_2.png'],
        },
        'study-room-designs': {
            layoutType: 'editorial',
            accentColor: '#065f46',
            subtitle: "Quiet Spaces for Deep Focus and Learning.",
            description: "Dedicated study room designs that prioritize organization, lighting, and comfort for a superior learning experience.",
            heroImage: '/v4/gen/study_room.png',
            galleryImages: ['/v4/gen/home_office.png'],
        },
        'kitchen-sinks': {
            layoutType: 'isometric',
            accentColor: '#374151',
            subtitle: "Functional Art: Premium Kitchen Fixtures.",
            description: "High-end kitchen sinks and faucets that combine precision engineering with stunning aesthetics for the modern kitchen.",
            heroImage: '/v4/gen/kitchen_sink.png',
            galleryImages: ['/v4/luxury_kitchen_2.png'],
        },
        'space-saving-designs': {
            layoutType: 'editorial',
            accentColor: '#dc2626',
            subtitle: "Clever Engineering for Modern Urban Living.",
            description: "Maximize your square footage with our innovative space-saving designs, including Murphy beds and smart wall units.",
            heroImage: '/v4/gen/space_saving.png',
            galleryImages: ['/v4/3d_wardrobe_iso.png'],
        },
        'door-designs': {
            layoutType: 'artistic',
            accentColor: '#451a03',
            subtitle: "Grand Entrances: Statement Doors for Your Home.",
            description: "Massive solid wood pivot doors and high-security designer entrances that make a bold statement from the very start.",
            heroImage: '/v4/gen/door_design.png',
            galleryImages: ['/v4/gen/foyer.png'],
        },
        'crockery-units': {
            layoutType: 'editorial',
            accentColor: '#92400e',
            subtitle: "Showcase Your Finest with Elegant Cabinetry.",
            description: "Luxury crockery units and display cabinets designed to showcase your collection while adding class to your dining area.",
            heroImage: '/v4/service_crockery.png',
            galleryImages: ['/v4/gen/dining_room.png'],
        },
        'wall-decor-designs': {
            layoutType: 'artistic',
            accentColor: '#ec4899',
            subtitle: "Bespoke Wall Treatments and Artistic Paneling.",
            description: "Transform your walls into canvases with our curated decor designs, from stone veneers to luxury charcoal paneling.",
            heroImage: '/v4/luxury_living_3.png',
            galleryImages: ['/v4/painting.png'],
        },
        'wall-paint-designs': {
            layoutType: 'editorial',
            accentColor: '#db2777',
            subtitle: "Lustrous Finishes and Chromatic Perfection.",
            description: "Experience the finish of high-gloss lacquer and Italian stucco with our premium wall paint solutions.",
            heroImage: '/v4/painting.png',
            galleryImages: ['/v4/luxury_living_1.png'],
        },
        'home-wallpaper-designs': {
            layoutType: 'artistic',
            accentColor: '#4338ca',
            subtitle: "Textured Elegance and Patterned Sophistication.",
            description: "Luxury wallpapers from global brands that add depth and character to every room in your house.",
            heroImage: '/v4/luxury_living_1.png',
            galleryImages: ['/v4/luxury_living_2.png'],
        },
        'homes-by-evolx-studio': {
            layoutType: 'editorial',
            accentColor: '#000000',
            subtitle: "A Portfolio of Architectural Masterpieces.",
            description: "Explore complete home transformations by EVOLX Studio, where we bring vision to life across India.",
            heroImage: '/v4/full-home-design.png',
            galleryImages: ['/v4/luxury_living_1.png', '/v4/luxury_kitchen_1.png'],
        },
        'staircase-designs': {
            layoutType: 'artistic',
            accentColor: '#4b5563',
            subtitle: "Architectural Ascensions: Sculptural Staircases.",
            description: "Floating stairs, glass railings, and marble steps—our staircase designs are the literal backbone of luxury architecture.",
            heroImage: '/v4/luxury_office_3.png',
            galleryImages: ['/v4/gen/door_design.png'],
        },
        'home-bar-designs': {
            layoutType: 'editorial',
            accentColor: '#111827',
            subtitle: "Sophisticated Spaces for Social Refinement.",
            description: "Create an atmosphere of exclusive lounge living with our luxury home bar designs, featuring illuminated displays and premium stone counters.",
            heroImage: '/v4/luxury_living_2.png',
            galleryImages: ['/v4/luxury_office_3.png'],
        },
        'room-designs': {
            layoutType: 'editorial',
            accentColor: '#78350f',
            subtitle: "Architectural Excellence for Every Room.",
            description: "From kitchens to bedrooms, explore our comprehensive collection of room designs that redefine luxury living.",
            heroImage: '/v4/interior-living-3d.jpg',
            galleryImages: ['/v4/luxury_kitchen_1.png', '/v4/luxury_bedroom_1.png'],
        },
        'decor-more': {
            layoutType: 'artistic',
            accentColor: '#a88a4d',
            subtitle: "The Finishing Touches of a Luxury Home.",
            description: "Discover the elements that turn a house into a home. Our decor solutions focus on detail, texture, and sophisticated style.",
            heroImage: '/v4/luxury_living_3.png',
            galleryImages: ['/v4/painting.png', '/v4/gen/tiles.png'],
        },
        'specialty-elements': {
            layoutType: 'isometric',
            accentColor: '#64748b',
            subtitle: "Unique Architectural Elements and Specialty Spaces.",
            description: "Explore our niche design solutions, from grand staircases to clever space-saving engineering.",
            heroImage: '/v4/luxury_office_3.png',
            galleryImages: ['/v4/gen/door_design.png', '/v4/gen/space_saving.png'],
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

    if (slug === 'how-it-work') {
        subtitle = "A Streamlined, Transparent, and Luxury-First Design Journey.";
        description = "Understand our end-to-end design and execution process. From the first consultation to the final handover, we ensure your home evolution is a structural masterpiece.";
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
