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
        const newElements = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            size: Math.random() * 30 + 20, // 20px to 50px
            duration: Math.random() * 20 + 10, // 10s to 30s
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
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                        y: [0, -100, 0], // Move up and down
                        x: [0, 50, -50, 0], // Meander horizontally
                        rotate: [0, 180, 360],
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
