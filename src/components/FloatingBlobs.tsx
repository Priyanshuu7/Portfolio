"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";

interface BlobProps {
    size : number;
    position : {
        x: number;
        y: number
    };
    color : string;
    speed : number;
    delay : number;
}

export function FloatingBlobs() {
    const [blobs,
        setBlobs] = useState < BlobProps[] > ([]);
    const [isMounted,
        setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Generate random blobs on mount
        const newBlobs : BlobProps[] = Array
            .from({length: 10})
            .map((_, i) => ({
                size: Math.random() * 120 + 50,
                position: {
                    x: Math.random() * 100,
                    y: Math.random() * 100
                },
                color: getRandomColor(),
                speed: Math.random() * 20 + 10,
                delay: Math.random() * 5
            }));

        setBlobs(newBlobs);
    }, []);

    const getRandomColor = () => {
        const colors = [
            "bg-blue-500/10",
            "bg-purple-500/10",
            "bg-pink-500/10",
            "bg-yellow-500/10",
            "bg-green-500/10",
            "bg-indigo-500/10"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    if (!isMounted) 
        return null;
    
    return (
        <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{
            opacity: 0
        }}
            animate={{
            opacity: 1
        }}
            transition={{
            duration: 1,
            delay: 0.5
        }}>
            {blobs.map((blob, index) => (<motion.div
                key={index}
                className={`absolute rounded-full blur-3xl ${blob.color}`}
                initial={{
                opacity: 0,
                scale: 0.5
            }}
                animate={{
                opacity: 0.4,
                scale: 1
            }}
                transition={{
                duration: 1,
                delay: 0.5 + (index * 0.1),
                ease: "easeOut"
            }}
                style={{
                width: `${blob.size}px`,
                height: `${blob.size}px`,
                left: `${blob.position.x}%`,
                top: `${blob.position.y}%`,
                transform: "translate(-50%, -50%)",
                animation: `float ${blob.speed}s ease-in-out infinite`,
                animationDelay: `${blob.delay}s`
            }}
                aria-hidden="true"/>))}
        </motion.div>
    );
}
