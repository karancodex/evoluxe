import StoriesContent from '@/components/StoriesContent';

export const metadata = {
    title: 'Customer Stories | Evoluxe Studio',
    description: 'Real Homes. Real People. See how our clients transformed their living spaces with EVOLX Studio.',
};

export default function StoriesPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <StoriesContent />
        </main>
    );
}
