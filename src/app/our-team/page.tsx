import TeamContent from '@/components/TeamContent';

export const metadata = {
    title: 'Our Team | Evoluxe Studio',
    description: 'Meet the visionaries, architects, and master-craftsmen behind Evoluxe Studio. The hands and minds creating luxury living across India.',
};

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <TeamContent />
        </main>
    );
}
