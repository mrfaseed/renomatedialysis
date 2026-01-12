'use client';

import { motion } from 'framer-motion';
import { Atom, FlaskRound, TestTube2, Dna, Microscope, FlaskConical, Zap, Pill } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [
    Atom,
    FlaskRound,
    TestTube2,
    Dna,
    Microscope,
    FlaskConical,
    Zap,
    Pill
];

export default function ChemistryBackground() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Generate random elements only on client to avoid hydration mismatch
        // Reduced count from 15 to 6 for better spacing
        const newElements = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            // Try to distribute them a bit better by using the index
            initialX: (Math.random() * 20) + (i * 15), // Distribute across width roughly
            initialY: Math.random() * 80 + 10, // Keep away from extreme top/bottom
            size: Math.random() * 30 + 30, // Slightly larger: 30px to 60px
            duration: Math.random() * 20 + 20, // Slower: 20s to 40s
            delay: Math.random() * 5,
            rotate: Math.random() * 360,
        }));
        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute text-slate-300 dark:text-slate-600"
                    style={{
                        left: `${el.initialX}%`,
                        top: `${el.initialY}%`,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3], // Lower opacity
                        scale: [1, 1.1, 1], // Subtle scale
                        y: [0, -30, 0], // Subtle float up/down
                        x: [0, 20, -20, 0], // Subtle drift
                        rotate: [0, 90, 180], // Slower rotation
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: el.delay,
                    }}
                >
                    <el.Icon size={el.size} strokeWidth={1.5} />
                </motion.div>
            ))}

            {/* Add a subtle gradient overlay to blend deeper */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
    );
}
