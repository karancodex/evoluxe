import HelpContent from '@/components/HelpContent';

export const metadata = {
    title: 'Help Center | Evoluxe Studio',
    description: 'How can we help you? Find answers to FAQs, warranty details, and project tracking information at the Evoluxe Help Center.',
};

export default function HelpPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <HelpContent />
        </main>
    );
}
