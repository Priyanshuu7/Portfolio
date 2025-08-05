"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`transition-all duration-300 ${
                scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Add your logo or nav title here if needed */}
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://github.com/Priyanshuu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://linkedin.com/in/priyanshurajak"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="mailto:rajakpriyanshu581@gmail.com" aria-label="Email">
                                <Mail className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
