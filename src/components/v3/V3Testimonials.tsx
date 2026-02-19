"use client";

import { motion } from "framer-motion";

const TestimonialCard = ({ quote, author, city, index }: { quote: string, author: string, city: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-12 rounded-[50px] shadow-xl border border-amethyst-lightest relative group"
    >
        <div className="absolute top-10 right-12 text-6xl text-amethyst-light/20 font-serif">"</div>
        <div className="space-y-8">
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="text-amethyst-primary text-xl">★</span>
                ))}
            </div>
            <p className="text-lg font-serif text-amethyst-dark leading-relaxed italic">
                {quote}
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-amethyst-lightest">
                <div className="w-14 h-14 rounded-full bg-amethyst-lightest overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${author}`} alt={author} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h5 className="font-bold text-amethyst-dark text-sm uppercase tracking-widest">{author}</h5>
                    <p className="text-amethyst-primary text-[10px] uppercase tracking-widest font-black">{city}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const V3Testimonials = () => {
    const testimonials = [
        { quote: "Evoluxe transformed our 3BHK in Gachibowli with zero stress. The transparency in pricing was the best part.", author: "Rahul Sharma", city: "Hyderabad" },
        { quote: "As an NRI, I was worried about managing the work from Dubai. Their portal kept me updated daily.", author: "Priya Nair", city: "Dubai / Bangalore" },
        { quote: "The modular kitchen finish is divine. It's been 6 months and it still looks and feels brand new.", author: "Amit Verma", city: "Mumbai" }
    ];

    return (
        <section className="py-32 bg-amethyst-lightest overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="space-y-6">
                        <span className="text-amethyst-primary text-[11px] uppercase tracking-[1em] font-black italic">Client Stories</span>
                        <h2 className="text-4xl md:text-7xl font-serif text-amethyst-dark leading-tight">
                            Loved by <span className="italic font-light">homeowners</span>,<br />
                            Trusted by <span className="font-bold underline decoration-amethyst-primary/20 underline-offset-8">families</span>.
                        </h2>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-lg border border-amethyst-lightest">
                        <span className="text-4xl font-serif text-amethyst-dark">4.9/5</span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <span key={i} className="text-amethyst-primary text-sm">★</span>
                            ))}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-amethyst-dark/40 font-black">Average Google Rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default V3Testimonials;
