"use client";

import {motion} from "framer-motion";
import {fadeInVariants, slideUpVariants, slideInVariants} from "@/lib/animations";
import {Badge} from "@/components/ui/badge";

export function Experience() {
    return (
        <motion.section
            id="experience"
            className="pb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true,
            margin: "-100px"
        }}
            variants={fadeInVariants}>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div className="text-left mb-16" variants={slideUpVariants}>
                    <h2 className="text-5xl font-poiret-one font-bold mb-4">Industry Experience</h2>
                </motion.div>

                <div className="space-y-16">
                    <motion.div className="relative" variants={slideInVariants} custom={0}>
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="md:w-1/3">
                                <Badge variant="secondary" className="mb-2">
                                    June 2024 – Aug 2024
                                </Badge>
                                <h3 className="text-2xl font-bold mb-2">Full Stack Developer Intern</h3>
                                <p className="text-muted-foreground">Clinicspots — Mumbai, India (Remote)</p>
                            </div>
                            <div className="md:w-2/3">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="font-poiret-one font-extrabold">Developed PPC landing websites for multiple hospitals to support targeted advertising campaigns and drive patient conversions by 25% through targeted advertising campaigns.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="font-poiret-one font-extrabold">Implemented performance optimization techniques to reduce page load time by 30%, resulting in faster user interactions and improved Core Web Vitals scores.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="font-poiret-one font-extrabold">Developed and implemented a lead generation form that boosted customer engagement by 40% and increased lead conversion rates by 15%.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="font-poiret-one font-extrabold">Assisted in integrating SEO best practices and responsive design to improve website visibility and provide a better experience across devices.</span>
                                    </li>
                                    <li className="flex items-start gap-3 mt-6">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="italic text-white">
                                            Technologies Used - React.Js, Tailwind, Javascript, Google PageSpeed Insights.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="mt-16" variants={slideUpVariants} custom={1}>
                        <h3 className="text-3xl font-poiret-one font-bold mb-8">Education</h3>
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="md:w-1/3">
                                <Badge variant="secondary" className="mb-2">
                                    Aug 2022 – Jul 2026
                                </Badge>
                                <h4 className="text-xl font-bold mb-2">Jaypee University of Engineering and Technology, Guna</h4>
                                <p className="text-muted-foreground">B.Tech. in Computer Science</p>
                            </div>
                            <div className="md:w-2/3">
                                <p >
                                    <strong className="font-poiret-one font-bold text-xl">Relevant Coursework:</strong> <span className="text-muted-foreground"> Data Structures & Algorithms, Databases, Operating Systems, Software Engineering, Computer Networks.</span> 
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
