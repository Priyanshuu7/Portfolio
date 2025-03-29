"use client";

import {useEffect, useState} from "react";
import {backgroundGradientColors} from "@/lib/animations";

export function GradientBackground({
    children,
    className = "",
    gradientTimeout = 10000
} : {
    children: React.ReactNode;
    className?: string;
    gradientTimeout?: number;
}) {
    const [gradientIndex,
        setGradientIndex] = useState(0);
    const [isMounted,
        setIsMounted] = useState(false);

    useEffect(() => {
        // Set mounted state immediately to avoid flash
        setIsMounted(true);

        const interval = setInterval(() => {
            setGradientIndex((prev) => prev === backgroundGradientColors.length - 1
                ? 0
                : prev + 1);
        }, gradientTimeout);

        return () => clearInterval(interval);
    }, [gradientTimeout]);

    // Return a consistent initial state during SSR and first render
    const content = (
        <div className={`relative overflow-hidden bg-black ${className}`}>
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`absolute inset-0 opacity-30 bg-gradient-to-tr transition-all duration-1000 ease-in-out ${isMounted
                    ? backgroundGradientColors[gradientIndex]
                    : backgroundGradientColors[0]}`}
                    aria-hidden="true"/>
            </div>
            <div className="bg-grid absolute inset-0 opacity-10" aria-hidden="true"/>
            <div
                className="bg-radial-gradient absolute inset-0 opacity-80"
                aria-hidden="true"/> {children}
        </div>
    );

    return content;
}
