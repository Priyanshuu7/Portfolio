"use client";

import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/animations";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeInVariants}
    >
      <div className="w-full flex justify-center">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Designed & Built by Priyanshu</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
