"use client";

import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { GradientBackground } from "@/components/GradientBackground";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  // Animation variants for the container
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

  // Animation variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <GradientBackground className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 relative">
        <FloatingBlobs />

        <div className="container max-w-5xl mx-auto pt-32 pb-24 relative z-10">
          <motion.div variants={itemVariants}>
            <AnimatedText
              className="text-center mb-6"
              animation="fadeIn"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                  Priyanshu Rajak
                </span>
              </h1>
            </AnimatedText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnimatedSection
              className="text-center mb-12"
              animation="slideUp"
              delay={0.2}
            >
              <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto mt-6">
                Full Stack Developer with expertise in React, Next.js, and more
              </p>
            </AnimatedSection>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnimatedSection
              className="flex flex-wrap justify-center gap-4 mt-8"
              animation="slideUp"
              delay={0.4}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/Priyanshurajak_resume.pdf" target="_blank">View Resume</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="#projects">See Projects</Link>
              </Button>
            </AnimatedSection>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnimatedSection
              className="mt-24 flex flex-col items-center"
              animation="slideUp"
              delay={0.6}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-foreground/70">React, Next.js, TypeScript</p>
                </motion.div>
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-foreground/70">Node.js, Express, MongoDB</p>
                </motion.div>
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold mb-2">Tools</h3>
                  <p className="text-sm text-foreground/70">Docker, Git, AWS, Vercel</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </GradientBackground>
    </motion.div>
  );
}
