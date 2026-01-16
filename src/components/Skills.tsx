"use client";

import { motion } from "framer-motion";
import { fadeInVariants, slideUpVariants } from "@/lib/animations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Icon } from "@iconify/react";

/* =======================
   Skills Data
======================= */
const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Go (Golang)", icon: "skill-icons:golang" },
      { name: "TypeScript", icon: "skill-icons:typescript" },
      { name: "JavaScript", icon: "skill-icons:javascript" },
      { name: "Python", icon: "skill-icons:python-dark" },
      { name: "C++", icon: "skill-icons:cpp" },
      { name: "Java", icon: "skill-icons:java-dark" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React.js", icon: "skill-icons:react-dark" },
      { name: "Next.js", icon: "skill-icons:nextjs-dark" },
      { name: "Node.js", icon: "skill-icons:nodejs-dark" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Supabase", icon: "skill-icons:supabase-dark" },
      { name: "PostgreSQL", icon: "skill-icons:postgresql-dark" },
      { name: "Redis", icon: "skill-icons:redis-dark" },
      { name: "Prisma", icon: "skill-icons:prisma" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "skill-icons:aws-dark" },
      { name: "Docker", icon: "skill-icons:docker" },
      { name: "Linux", icon: "skill-icons:linux-dark" },
      { name: "Shell Scripting", icon: "skill-icons:bash-dark" },
      { name: "GitLab CI/CD", icon: "skill-icons:gitlab-dark" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Cursor IDE", icon: "simple-icons:cursor" },
      { name: "Vim", icon: "skill-icons:vim-dark" },
      { name: "Git", icon: "skill-icons:git" },
      { name: "Vercel", icon: "skill-icons:vercel-dark" },
    ],
  },
];

/* =======================
   Skills Component
======================= */
export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-left mb-16">
          <h2 className="text-5xl mb-4">Technical Skills</h2>
        </AnimatedSection>

        <motion.div variants={slideUpVariants}>
          {SKILLS.map((section) => (
            <div
              key={section.category}
              className="flex items-start gap-6 mb-8"
            >
              <h4 className="text-xl min-w-[160px]">
                {section.category}
              </h4>

              <div className="flex flex-wrap gap-3">
                {section.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  >
                    <Icon icon={skill.icon} className="w-5 h-5" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
