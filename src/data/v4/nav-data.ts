
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
        name: 'Magazine',
        label: 'Magazine',
        hasDropdown: true,
        columns: [
            {
                title: 'Ideas & Inspiration',
                items: [
                    'Room Ideas',
                    'Decor & Inspiration',
                    'Ceiling Design',
                    'Furniture Ideas',
                    'Home Decor',
                    'Lighting Ideas',
                    'Wall Design Ideas',
                    'Expert Advice',
                    'Interior Advice',
                    'Vastu Tips'
                ]
            },
            {
                title: 'Guides',
                items: [
                    'Home Organisation',
                    'Materials Guide',
                    'Home Renovation Ideas'
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
                title: 'Metro Cities',
                items: ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']
            },
            {
                title: 'Other Cities',
                items: ['Jaipur', 'Lucknow', 'Indore', 'Chandigarh', 'Coimbatore', 'Mysore', 'Nagpur', 'Surat']
            }
        ]
    },
    { name: 'Projects', label: 'Projects', hasDropdown: false },
    { name: 'Store Locator', label: 'Store Locator', hasDropdown: false },
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
    { name: 'Own a franchise', label: 'Own a franchise', hasDropdown: false },
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
