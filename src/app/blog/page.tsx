import BlogContent from '@/components/BlogContent';

export const metadata = {
    title: 'Blog | Evoluxe Studio',
    description: 'The EVOLX Journal: Your source for curated design trends, material intelligence, and expert tips on luxury modular living.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <BlogContent />
        </main>
    );
}
