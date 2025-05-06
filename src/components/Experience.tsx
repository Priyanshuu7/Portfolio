"use client";

import {motion} from "framer-motion";
import {fadeInVariants, slideUpVariants, slideInVariants} from "@/lib/animations";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export function Experience() {
    return (
        <motion.section
            id="experience"
            className="py-24 bg-black/50"
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true,
            margin: "-100px"
        }}
            variants={fadeInVariants}>
            <div className="container max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div className="text-center mb-16" variants={slideUpVariants}>
                    <h2 className="text-3xl font-bold mb-4">Industry Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey in software development
                    </p>
                </motion.div>

                <div className="space-y-10">
                    <motion.div className="relative" variants={slideInVariants} custom={0}>
                        <div
                            className="absolute left-0 w-px h-full bg-border dark:bg-border/50 hidden md:block"/>
                        <Card className="md:ml-10 relative bg-background">
                            <div
                                className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-2 border-primary bg-background hidden md:block"></div>
                            <CardHeader>
                                <div
                                    className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                                    <div>
                                        <CardTitle>Full Stack Developer Intern</CardTitle>
                                        <br />
                                        <CardDescription>Clinicspots — Mumbai, India (Remote)</CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="w-fit">
                                        June 2024 – Aug 2024
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                                    <li>Developed PPC landing websites for multiple hospitals to support targeted advertising campaigns and drive patient
                                    conversions. </li>
                                    <li>Implemented performance optimization techniques to reduce page load time, resulting in faster user interactions
                                    and improved Core Web Vitals.</li>
                                    <li>Developed and implemented a lead generation form, resulting in increased customer engagement and higher lead
                                    conversion rates.</li>
                                    {/* <li>Implemented robust payment workflows using Stripe API.</li>
                                    <li>Designed efficient database schemas in Supabase, achieving query performance
                                        gains of 28%.</li>
                                    <li>Led frontend architecture decisions and mentored interns on software
                                        development best practices and agile methodologies.</li> */}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div className="mt-12" variants={slideUpVariants} custom={1}>
                        <h3 className="text-2xl font-bold mb-6">Education</h3>
                        <Card className="bg-background">
                            <CardHeader>
                                <div
                                    className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                                    <div>
                                        <CardTitle>Jaypee University of Engineering and Technology, Guna</CardTitle>
                                        <br />
                                        <CardDescription> <strong>B.Tech. in Computer Science </strong></CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="w-fit">
                                        Aug 2022 – Jul 2026
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    <strong>Relevant Coursework:</strong>
                                    Data Structures & Algorithms, Databases, Operating Systems, Software
                                    Engineering, Computer Networks.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* <motion.div className="mt-12" variants={slideUpVariants} custom={2}>
                        <h3 className="text-2xl font-bold mb-6">Additional Experience</h3>
                        <Card className="bg-background">
                            <CardHeader>
                                <div
                                    className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                                    <div>
                                        <CardTitle>Open Source Contributor</CardTitle>
                                        <CardDescription>GitHub</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Contributed to open-source course platform, improving frontend and backend code
                                    quality, documentation, and overall user experience.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div> */}
                </div>
            </div>
        </motion.section>
    );
}
