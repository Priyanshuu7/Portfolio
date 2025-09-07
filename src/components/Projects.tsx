"use client";

import {motion} from "framer-motion";
import {fadeInVariants, slideUpVariants} from "@/lib/animations";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";

const projects = [
    {
        title: "Labelify",
        description: "Developed a full-stack decentralized application (dApp) for task creation and fu" +
                "lfillment, integrating Solana blockchain for secure and transparent payment hand" +
                "ling.",
        technologies: [
            "Nextjs",
            "Nodejs",
            "Prisma",
            "Web3",
            "AWS",
            "PostgreSQL"
        ],
        link: "https://labelify-wine.vercel.app/",
        github: "https://github.com/Priyanshuu7/Labelify"
    }, {
        title: "Shedulux",
        description: "Built Schedulux, a full-stack scheduling app that lets users create custom booki" +
                "ng links, sync calendars in real time via Nylas API, auto-generate meeting links" +
                ", and manage availability — secured with Auth.js/Supabase, styled with Tailwind " +
                "CSS, and powered by Next.js Server Actions and Prisma ORM.",
        technologies: [
            "Nextjs", "Prisma", "Auth.js", "Supabase", "Nylas-Api"
        ],
        link: "#",
        github: "https://github.com/Priyanshuu7/Schedulux"
    }, {
        title: "Chainchat",
        description: "A social media platform tailored for athletes. Connect with fellow athletes and " +
                "share your journey.",
        technologies: [
            "Nextjs", "Prisma", "Clerk", "PostgreSQL"
        ],
        link: "#",
        github: "#"
    }
];

export function Projects() {
    return (
        <motion.section
            id="projects"
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true
        }}
            variants={fadeInVariants}>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div className="text-left mb-16" variants={slideUpVariants}>
                    <h2 className="text-5xl font-poiret-one font-bold mb-4">Technical Projects</h2>
                </motion.div>

                <motion.div className="space-y-16" variants={slideUpVariants}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={slideUpVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col md:flex-row md:items-start gap-8"
    >
      <div className="md:w-1/3">
        <h3 className="text-3xl font-poiret-one font-bold mb-3">{project.title}</h3>
        <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline underline-offset-4 transition-all font-poiret-one "
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
                                        </a>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline underline-offset-4 transition-all font-poiret-one  font-bold"
          >
            <span>Deployment</span>
            <ExternalLink />
          </a>
        </div>
      </div>

      <div className="md:w-2/3">
        <p className="font-poiret-one font-semibold mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.section>
    );
}
