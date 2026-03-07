"use client";

import React from 'react';
import MasterCalculator from '@/components/calculators/MasterCalculator';

const WardrobeCalculatorPage = () => {
    return (
        <main className="pt-32 min-h-screen bg-[#faf9f6]">
            <MasterCalculator type="wardrobe" />
        </main>
    );
};

export default WardrobeCalculatorPage;
