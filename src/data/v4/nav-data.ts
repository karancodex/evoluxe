
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
                items: ['Blog', 'Customer Stories', 'Refer a Friend', 'Help Center', 'Terms & Conditions']
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
