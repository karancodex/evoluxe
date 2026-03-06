"use client";
import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { getPageContent } from '@/data/nav-data';

export default function PaintingPage() {
    const slug = 'painting';
    const content = getPageContent(slug);
    if (!content) return null;
    return <ServiceTemplate {...(content as any)} slug={slug} />;
}
