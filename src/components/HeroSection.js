"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <VideoBackground />
            <OverlayBlinds />
            <BloodParticleSystem />

            <div className={styles.container}>
                {/* Left: Typography & Story */}
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className={styles.title}>
                        <span className={styles.titleSmall}>To Provide</span>
                        <span className={styles.titleHighlight}>High Quality,</span>
                        <span className={styles.titleMain}>Low Cost <span className="text-red-500">DIALYSIS</span> Treatment</span>
                    </h1>
                    <p className={styles.description}>
                        Setting the global benchmark for haemodialysis fluids.
                        We combine advanced chemical engineering with rigorous safety standards to support life-saving treatments.
                    </p>

                    <div className={styles.actionGroup}>
                        <Link href="/products" className={styles.primaryBtn}>
                            View Our Solutions
                        </Link>
                        <Link href="/contact" className={styles.secondaryBtn}>
                            Talk to Sales
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Chemical/Medical Icons */}
                <div className={styles.floatingIcons}>
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className={styles.iconFlask}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31" /><path d="M14 2v7.31" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /></svg>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                        className={styles.iconDna}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="M17 12a5.73 5.73 0 0 0-2.5 5.5" /><path d="M7 12a5.73 5.73 0 0 1 2.5-5.5" /></svg>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        className={styles.iconDroplet}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}

function VideoBackground() {
    return (
        <div className={styles.videoWrapper}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
            >
                <source src="/assets/0110.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay} />
        </div>
    );
}

function OverlayBlinds() {
    // Creates a "blind" effect with striped gradients
    return (
        <div className={styles.blindOverlay} />
    );
}

function BloodParticleSystem() {
    // Generates floating particles: Red (Blood) and Blue/White (Dialysis Fluid)
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleCount = 25;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 12 + 4,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
            type: Math.random() > 0.6 ? 'fluid' : 'blood' // Mix of blood and fluid
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className={styles.particleContainer}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className={`${styles.particle} ${p.type === 'fluid' ? styles.particleFluid : styles.particleBlood}`}
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -120, 0],
                        x: [0, p.type === 'fluid' ? 30 : 15, 0],
                        opacity: p.type === 'fluid' ? [0.1, 0.4, 0.1] : [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                />
            ))}
        </div>
    );
}
