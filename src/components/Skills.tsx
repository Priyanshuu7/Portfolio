"use client";

import { motion } from "framer-motion";
import { fadeInVariants, slideUpVariants } from "@/lib/animations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const categories = [
  {
    name: "Languages",
    skills: ["C", "C++", "TypeScript", "JavaScript"]
  },
  {
    name: "Frameworks",
    skills: ["React.js", "Next.js", "Express.js", "Node.js", "Vercel"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    name: "Tools & Technologies",
    skills: ["Docker", "Git", "GitHub", "Prisma", "Linux", "Vim", "Canva", "AWS", "Kafka", "Netlify", "Render", "Vercel"]
  }
];

export function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-24 bg-black/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={slideUpVariants}
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={slideUpVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-background/50 backdrop-blur-sm rounded-xl border p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <Separator className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    className="animate-float"
                    style={{
                      animationDelay: `${skillIndex * 0.2}s`,
                      backgroundColor: getSkillColor(skillIndex),
                      color: 'white'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function getSkillColor(index: number): string {
  const colors = [
    "#4f46e5", // indigo
    "#0ea5e9", // sky
    "#8b5cf6", // violet
    "#ec4899", // pink
    "#f97316", // orange
    "#84cc16", // lime
    "#14b8a6", // teal
    "#06b6d4", // cyan
  ];

  return colors[index % colors.length];
}
