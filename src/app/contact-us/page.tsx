import ContactContent from '@/components/ContactContent';

export const metadata = {
    title: 'Contact Us | Evoluxe Studio',
    description: 'Start your home evolution today. Reach out to our design concierge or visit our flaghsip experience centers in Pune and Mumbai.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <ContactContent />
        </main>
    );
}
