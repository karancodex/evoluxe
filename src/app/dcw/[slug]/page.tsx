import DCWSubPageContent from "@/components/DCWSubPageContent";
import { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const title = params.slug === 'sofas'
        ? "DCW Sofas — Premium Luxury Sofa Collection"
        : `DCW ${params.slug} — Crafting Comfort Since 1978`;

    return {
        title,
        description: "Explore our premium selection of handcrafted sofas including luxury sofas, sectional sofas, modern minimal sofas, and office seating.",
    };
}

export default function DCWSubPage() {
    return <DCWSubPageContent />;
}
