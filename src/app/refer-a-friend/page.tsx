import ReferContent from '@/components/ReferContent';

export const metadata = {
    title: 'Refer a Friend | Evoluxe Studio',
    description: 'Share the Evolution. Refer a friend or family member to EVOLX Studio and earn exclusive rewards when they build their dream home with us.',
};

export default function ReferPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <ReferContent />
        </main>
    );
}
