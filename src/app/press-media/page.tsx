import PressContent from '@/components/PressContent';

export const metadata = {
    title: 'Press & Media | Evoluxe Studio',
    description: 'Latest news, awards, and media features from EVOLX Design Studio. See how we are redefining furniture technology in India.',
};

export default function PressPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <PressContent />
        </main>
    );
}
