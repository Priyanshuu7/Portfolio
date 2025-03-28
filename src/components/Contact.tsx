"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/GradientBackground";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0">
        <GradientBackground className="h-full" gradientTimeout={15000}>
          <div className="hidden" />
        </GradientBackground>
      </div>
      <FloatingBlobs />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a chat!
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col items-center justify-center space-y-6 mt-8"
          animation="slideUp"
          delay={0.2}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="mailto:rajakpriyanshu581@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span>rajakpriyanshu581@gmail.com</span>
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="https://github.com/Priyanshuu7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="https://linkedin.com/in/priyanshurajak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>

          <div className="mt-12 bg-background/60 backdrop-blur-md rounded-lg p-6 border max-w-lg w-full">
            <p className="text-center">
              Currently available for <span className="font-semibold">freelance projects</span> and <span className="font-semibold">internship opportunities</span>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
