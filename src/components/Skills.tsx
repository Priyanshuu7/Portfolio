"use client";

import { motion } from "framer-motion";
import { fadeInVariants, slideUpVariants } from "@/lib/animations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Icon } from "@iconify/react";

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeInVariants}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-left mb-16">
          <h2 className="text-5xl mb-4">Technical Skills</h2>
        </AnimatedSection>

        <motion.div variants={slideUpVariants}>
          <motion.div variants={slideUpVariants}>
            {/* Languages Section */}
            <div className="flex items-center gap-6 mb-8">
              <h4 className="text-xl">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:typescript" className="w-5 h-5" />
                  <span className="text-sm">TypeScript</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:javascript" className="w-5 h-5" />
                  <span className="text-sm">JavaScript</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:python-dark" className="w-5 h-5" />
                  <span className="text-sm">Python</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:java-dark" className="w-5 h-5" />
                  <span className="text-sm">Java</span>
                </div>
              </div>
            </div>

            {/* Frameworks Section */}
            <div className="flex items-center gap-6 mb-8">
              <h4 className="text-xl">Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:react-dark" className="w-5 h-5" />
                  <span className="text-sm">React.js</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:nextjs-dark" className="w-5 h-5" />
                  <span className="text-sm">Next.js</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:nodejs-dark" className="w-5 h-5" />
                  <span className="text-sm">Node.js</span>
                </div>
              </div>
            </div>

            {/* Databases Section */}
            <div className="flex items-center gap-6 mb-8">
              <h4 className="text-xl">Databases</h4>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:mongodb" className="w-5 h-5" />
                  <span className="text-sm">MongoDB</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:supabase-dark" className="w-5 h-5" />
                  <span className="text-sm">Supabase</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:postgresql-dark" className="w-5 h-5" />
                  <span className="text-sm">PostgreSQL</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:mysql-dark" className="w-5 h-5" />
                  <span className="text-sm">MySQL</span>
                </div>
              </div>
            </div>

            {/* Misc Section */}
            <div className="flex items-center gap-6 mb-8">
              <h4 className="text-xl">Misc</h4>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:vercel-dark" className="w-5 h-5" />
                  <span className="text-sm">Vercel</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:linux-dark" className="w-5 h-5" />
                  <span className="text-sm">Linux</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:prisma" className="w-5 h-5" />
                  <span className="text-sm">Prisma</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:git" className="w-5 h-5" />
                  <span className="text-sm">Git</span>
                </div>
                <div
                  className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Icon icon="skill-icons:vim-dark" className="w-5 h-5" />
                  <span className="text-sm">Vim</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
