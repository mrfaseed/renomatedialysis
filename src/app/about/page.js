'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, Database, Target, ChevronRight, Globe, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';


export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const opacity = 1;
    const scale = 1;

    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            id: Date.now(),
            x,
            y,
            size
        };

        setRipples((prev) => [...prev, newRipple]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
        }, 600);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 15, stiffness: 100 },
        },
    };

    const visualVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        },
    };

    return (
        <main className={styles.aboutContainer}>
            {/* 3D Background - Replaces static decoration */}
            <div className={styles.heroBackground}>
            </div>

            {/* Hero Section */}
            <section className={styles.heroContent}>
                <motion.div
                    style={{ opacity, scale }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={styles.heroText}
                >
                    <motion.div variants={itemVariants} className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <ChevronRight size={14} />
                        <span>About Our Vision</span>
                    </motion.div>

                    <motion.h1 className={styles.heroTitle} variants={itemVariants}>
                        Transforming <br />
                        <span>Dialysis Quality</span> <br />
                        Worldwide
                    </motion.h1>

                    <motion.div className={styles.heroHighlight} variants={itemVariants}>
                        <span><Zap size={14} strokeWidth={3} /> Innovation</span>
                        <span><Target size={14} strokeWidth={3} /> Design</span>
                        <span><Award size={14} strokeWidth={3} /> Clinical Excellence</span>
                    </motion.div>

                    <motion.p className={styles.heroDescription} variants={itemVariants}>
                        Renomate is not just a manufacturer; we are architects of better health.
                        With two decades of clinical mastery, we craft dialysis solutions that
                        bridge the gap between advanced technology and compassionate care.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.heroIllustration}
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        y: [0, -15, 0]
                    }}
                    transition={{
                        opacity: { duration: 1.2, delay: 0.5 },
                        scale: { duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                        rotate: { duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                        y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }
                    }}
                >
                    <Image
                        src="/about-hero.png"
                        alt="Renomate Excellence"
                        width={900}
                        height={500}
                        className={styles.illustrationImage}
                        priority
                    />
                </motion.div>
            </section>

            {/* Features Grid */}
            <motion.section
                className={styles.featuresGrid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {[
                    {
                        title: "Mission Rooted in Care",
                        desc: "Elevating the standard of renal therapy through relentless innovation and accessible precision engineering.",
                        icon: <Target size={24} />,
                        image: "/assets/mission-illustration.png",
                        class: styles.missionIcon
                    },
                    {
                        title: "Advanced Ecosystem",
                        desc: "A sprawling 4,500 sq.ft innovation hub in Ahmedabad, India, where future of dialysis is forged daily.",
                        icon: <Zap size={24} />,
                        image: "/assets/machine.png",
                        class: styles.infraIcon
                    },
                    {
                        title: "Certified Integrity",
                        desc: "BP, IP, JP, and US FDA compliant processes ensure every consumable meets life-saving quality benchmarks.",
                        icon: <Award size={24} />,
                        image: "/assets/kidney.png",
                        class: styles.complianceIcon
                    },
                    {
                        title: "Human-Centric Tech",
                        desc: "Products designed with both the patient and the clinician in mind, simplifying complex dialysis workflows.",
                        icon: <Heart size={24} />,
                        image: "/assets/doctor.png",
                        class: styles.valuesIcon
                    },
                    {
                        title: "Global Footprint",
                        desc: "Serving healthcare providers across multiple continents with reliable supply chains and localized expertise.",
                        icon: <Globe size={24} />,
                        image: "/assets/global.png",
                        class: styles.globalIcon
                    },
                    {
                        title: "24/7 Clinical Support",
                        desc: "Our team of clinical specialists is available round-the-clock to ensure uninterrupted life-saving therapy.",
                        icon: <ShieldCheck size={24} />,
                        image: "/assets/support.png",
                        class: styles.supportIcon
                    }
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.glassCard}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                    >
                        <div className={styles.cardGlow} />
                        <div className={styles.cardParticles} />
                        <div className={styles.glassCardContent}>
                            <div className={`${styles.glassIconWrapper} ${feature.class}`}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                            <div className={styles.cardLightTrail} />
                        </div>
                    </motion.div>
                ))}
            </motion.section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className={styles.ctaTitle}>
                        {"Ready to elevate your".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.02, duration: 0.5 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <br />
                        {"dialysis outcomes?".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.02, duration: 0.5 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h2>
                    <Link href="/contact">
                        <motion.button
                            className={styles.ctaButton}
                            onMouseDown={createRipple}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Partner With Us
                            <AnimatePresence>
                                {ripples.map((ripple) => (
                                    <span
                                        key={ripple.id}
                                        className={styles.ripple}
                                        style={{
                                            left: ripple.x,
                                            top: ripple.y,
                                            width: ripple.size,
                                            height: ripple.size,
                                        }}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
