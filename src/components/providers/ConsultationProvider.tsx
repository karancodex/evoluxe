"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import ConsultationModal from "../ConsultationModal";

interface ConsultationContextType {
    openConsultation: () => void;
    closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openConsultation = () => setIsOpen(true);
    const closeConsultation = () => setIsOpen(false);

    return (
        <ConsultationContext.Provider value={{ openConsultation, closeConsultation }}>
            {children}
            <ConsultationModal isOpen={isOpen} onClose={closeConsultation} />
        </ConsultationContext.Provider>
    );
};

export const useConsultation = () => {
    const context = useContext(ConsultationContext);
    if (context === undefined) {
        throw new Error("useConsultation must be used within a ConsultationProvider");
    }
    return context;
};
