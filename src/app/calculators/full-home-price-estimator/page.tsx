"use client";

import React from 'react';
import MasterCalculator from '@/components/calculators/MasterCalculator';

const FullHomeEstimatorPage = () => {
    return (
        <main className="pt-32 min-h-screen bg-[#faf9f6]">
            <MasterCalculator type="full-home" />
        </main>
    );
};

export default FullHomeEstimatorPage;
