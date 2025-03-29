"use client";

import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import {fadeInVariants} from "@/lib/animations";

export function Footer() {
    return (
        <motion.footer
            className="bg-black/50 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true
        }}
            variants={fadeInVariants}>
            <div className="container max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                        <Link href="/" className="text-xl font-bold">
                            Priyanshu Rajak
                        </Link>
                        <p className="mt-2 text-muted-foreground">
                            Full Stack Developer specializing in React, Next.js, and modern web
                            technologies.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-2">Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#experience"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#projects"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#skills"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/Priyanshuu7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com/in/priyanshurajak"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:priyanshu581@gmail.com"
                                        className="text-muted-foreground hover:text-foreground transition-colors">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Separator className="my-8"/>

                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <p className="text-sm text-muted-foreground">
                        Designed & Built with ❤️ by Priyanshu.
                    </p>
                    {/* <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            <a href="https://priyanshu.tech" className="hover:underline">
              priyanshu.tech
            </a>
          </p> */}
                </div>
            </div>
        </motion.footer>
    );
}
