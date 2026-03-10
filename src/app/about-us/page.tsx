import AboutContent from '@/components/AboutContent';

export const metadata = {
    title: 'About Us | Evoluxe Studio',
    description: 'Discover the legacy of EVOLX Studio. From our humble beginnings in 1978 to becoming a leader in luxury modular interiors.',
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <AboutContent />
        </main>
    );
}
