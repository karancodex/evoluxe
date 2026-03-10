import CareersContent from '@/components/CareersContent';

export const metadata = {
    title: 'Careers | Evoluxe Studio',
    description: 'Join the EVOLX family. We are looking for visionaries, architects, and master-craftsmen to help us redefine luxury living across India.',
};

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <CareersContent />
        </main>
    );
}
