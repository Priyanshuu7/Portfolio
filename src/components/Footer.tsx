"use client";

import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import {fadeInVariants} from "@/lib/animations";
import {Github, Linkedin, Mail, Heart} from "lucide-react";

export function Footer() {
    return (
        <motion.footer
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true
        }}
            variants={fadeInVariants}>
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">    
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Priyanshu Rajak. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Designed & Built with</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>by Priyanshu</span>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
