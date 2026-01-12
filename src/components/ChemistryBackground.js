'use client';

import { motion } from 'framer-motion';
import { Atom, FlaskRound, TestTube2, Dna, Microscope, FlaskConical, Zap, Pill, Activity, Heart, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [
    Atom,
    FlaskRound,
    TestTube2,
    Dna,
    Microscope,
    FlaskConical,
    Zap,
    Pill,
    Activity,
    Heart,
    ShieldCheck
];

export default function ChemistryBackground() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const newElements = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            initialX: (Math.random() * 80) + 10,
            initialY: (Math.random() * 80) + 10,
            size: Math.random() * 20 + 30,
            duration: Math.random() * 15 + 15,
            delay: Math.random() * 5,
            floatY: Math.random() * 40 + 20,
            driftX: Math.random() * 40 - 20,
        }));
        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute text-blue-500/20 dark:text-cyan-400/10"
                    style={{
                        left: `${el.initialX}%`,
                        top: `${el.initialY}%`,
                        filter: 'blur(1px)',
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0, 0.4, 0.2],
                        scale: [0.8, 1.2, 0.8],
                        y: [0, -el.floatY, 0],
                        x: [0, el.driftX, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: el.delay,
                    }}
                >
                    <el.Icon size={el.size} strokeWidth={1} />
                </motion.div>
            ))}

            {/* Subtle Gradient Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5" />

            {/* Particle Mesh Glow */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />
        </div>
    );
}
