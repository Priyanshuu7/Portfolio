"use client";

import { useEffect, useRef, useState } from "react";
import { fadeAnimations } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animation?: keyof typeof fadeAnimations;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  threshold = 0.1,
  animation = "slideUp",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`${className}`}
      style={{
        opacity: isMounted ? (isVisible ? 1 : 0) : 1, // Show content before mounting
        transition: 'opacity 0.5s ease-in-out',
        ...(isVisible && {
          animation: `${fadeAnimations[animation]} forwards`,
          animationDelay: `${delay}s`,
        }),
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  animation = "fadeIn",
}: AnimatedSectionProps) {
  return (
    <AnimatedSection
      className={className}
      delay={delay}
      animation={animation}
    >
      {children}
    </AnimatedSection>
  );
}
