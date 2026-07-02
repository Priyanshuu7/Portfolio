"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative isolate min-h-screen w-full overflow-hidden">
            {/* Background Effect */}
            <BackgroundBeams />

            {/* Foreground Content */}
            <motion.div
                className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl w-full flex flex-col justify-start items-start text-left pt-28 pb-24 px-8 sm:px-16">
                    <motion.div variants={itemVariants}>
                        <AnimatedSection animation="slideUp" delay={0.2}>
                            <br />
                            <div className="flex items-center gap-4 mb-4">
                                <p className="text-xl sm:text-6xl text-foreground/90 leading-relaxed honk-text max-w-7xl">
                                    I build interactive, database-powered web apps that perform smoothly on any browser or device.
                                </p>
                            </div>
                        </AnimatedSection>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <AnimatedSection
                            className="flex flex-wrap justify-start gap-4 mt-12"
                            animation="slideUp"
                            delay={0.4}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-8 tracking-wide shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
                            >
                                <Link href="/Resume.pdf" target="_blank">View Resume</Link>
                            </Button>
                        </AnimatedSection>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
