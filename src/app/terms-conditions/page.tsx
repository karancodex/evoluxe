import LegalContentV2 from '@/components/LegalContent_v2';

export const metadata = {
    title: 'Terms & Conditions | Evoluxe Studio',
    description: 'Understand the terms of engagement with EVOLX Studio for your interior design and project execution journey.',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <LegalContentV2 title="Terms & Conditions" />
        </main>
    );
}
