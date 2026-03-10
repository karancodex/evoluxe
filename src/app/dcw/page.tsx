import DCWContent from "@/components/DCWContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "DCW — Premium Sofas & Upholstery Since 1978",
    description: "DCW specializes in crafting custom sofas and expert upholstery solutions with unmatched craftsmanship and durability trusted for over four decades.",
};

export default function DCWPage() {
    return <DCWContent />;
}
