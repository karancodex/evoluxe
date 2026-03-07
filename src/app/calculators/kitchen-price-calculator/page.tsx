"use client";

import React from 'react';
import MasterCalculator from '@/components/calculators/MasterCalculator';

const KitchenCalculatorPage = () => {
    return (
        <main className="pt-32 min-h-screen bg-[#faf9f6]">
            <MasterCalculator type="kitchen" />
        </main>
    );
};

export default KitchenCalculatorPage;
