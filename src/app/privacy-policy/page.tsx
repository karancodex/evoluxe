import LegalContentV2 from '@/components/LegalContent_v2';

export const metadata = {
    title: 'Privacy Policy | Evoluxe Studio',
    description: 'Your trust is our priority. Learn how Evoluxe Studio handles and protects your project data and personal information.',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <LegalContentV2 title="Privacy Policy" />
        </main>
    );
}
