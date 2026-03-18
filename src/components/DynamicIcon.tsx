"use client";

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
    name: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
    // Basic mapping for common names to Lucide icon components
    const iconName = name.charAt(0).toUpperCase() + name.slice(1);
    const IconComponent = (LucideIcons as any)[iconName];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
};

export default DynamicIcon;
