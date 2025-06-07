"use client";

import {motion} from "framer-motion";
import {fadeInVariants, slideUpVariants} from "@/lib/animations";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";

const projects = [
    {
        title: "Labelify",
        description: "Developed a full-stack decentralized application (dApp) for task creation and fulfillment, " +
        "integrating Solana blockchain for secure and transparent payment handling.",

        technologies: [
            "Nextjs", "Nodejs", "Prisma", "Web3", "AWS" ,"PostgreSQL"
        ],
        link: "https://labelify-wine.vercel.app/",
        github: "https://github.com/Priyanshuu7/Labelify"
    },
    {
        title: "Shedulux",
        description: "Built Schedulux, a full-stack scheduling app that lets users create custom booking links, sync calendars in real time " +
        "via Nylas API, auto-generate meeting links, and manage availability — secured with Auth.js/Supabase, styled with Tailwind CSS, " +
        "and powered by Next.js Server Actions and Prisma ORM.",


        technologies: [
            "Nextjs", "Prisma", "Auth.js", "Supabase" ,"Nylas-Api"
        ],
        link: "#",
        github: "https://github.com/Priyanshuu7/Schedulux"
    },
    {
        title: "Chainchat",
        description: "A social media platform tailored for athletes. Connect with fellow athletes and share your journey.",


        technologies: [
            "Nextjs", "Prisma", "Clerk" ,"PostgreSQL"
        ],
        link: "#",
        github: "#"
    },
];

export function Projects() {
    return (
        <motion.section
            id="projects"
            className="py-"
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true
        }}
            variants={fadeInVariants}>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div className="text-center mb-16" variants={slideUpVariants}>
                    <h2 className="text-3xl font-bold mb-4">Technical Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work and open source contributions
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={slideUpVariants}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={slideUpVariants}
                            whileHover={{
                            scale: 1.02
                        }}
                            transition={{
                            type: "spring",
                            stiffness: 300
                        }}>
                            <Card
                                className="h-full flex flex-col bg-background hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project
                                            .technologies
                                            .map(tech => (
                                                <Badge key={tech} variant="secondary">{tech}</Badge>
                                            ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between border-t pt-4">
                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1">
                                            <Github className="h-4 w-4"/>
                                            <span>GitHub</span>
                                        </a>
                                    </Button>
                                    <Button size="sm" asChild>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1">
                                            <span>Visit</span>
                                            <ExternalLink className="h-4 w-4"/>
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
