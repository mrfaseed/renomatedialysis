"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const { scrollY } = useScroll();

    // Parallax values
    const titleY = useTransform(scrollY, [0, 500], [0, -100]);
    const descY = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

    // Variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
            }
        }
    };

    return (
        <section className={styles.hero}>
            <VideoBackground />

            {/* Dynamic Background Glow - Moving Aura */}
            <motion.div
                className={styles.bgAura}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Tech Bottom Divider - Seamless Sine Wave */}
            <div className={styles.bottomDividerWrapper}>
                {/* SVG 1 */}
                <svg
                    className={styles.techDividerSvg}
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    shapeRendering="geometricPrecision"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                    </defs>

                    {/* Main Technical Stroke */}
                    <path
                        d="M0,60 C200,20 400,20 600,60 C800,100 1000,100 1200,60 V120 H1200 V150 H0 V120 Z"
                        fill="none"
                        stroke="url(#waveGradient)"
                        strokeWidth="8"
                        className={styles.dividerOutline}
                    />

                    {/* White Fill - Ensuring a solid bottom closure */}
                    <path
                        d="M0,65 C200,25 400,25 600,65 C800,105 1000,105 1200,65 V150 H0 Z"
                        fill="#ffffff"
                        className={styles.dividerFill}
                    />
                </svg>

                {/* SVG 2 (Duplicate for Loop) */}
                <svg
                    className={styles.techDividerSvg}
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    shapeRendering="geometricPrecision"
                >
                    {/* Main Technical Stroke */}
                    <path
                        d="M0,60 C200,20 400,20 600,60 C800,100 1000,100 1200,60 V120 H1200 V150 H0 V120 Z"
                        fill="none"
                        stroke="url(#waveGradient)"
                        strokeWidth="8"
                        className={styles.dividerOutline}
                    />

                    {/* White Fill */}
                    <path
                        d="M0,65 C200,25 400,25 600,65 C800,105 1000,105 1200,65 V150 H0 Z"
                        fill="#ffffff"
                        className={styles.dividerFill}
                    />
                </svg>
            </div>

            {/* Floating Abstract Elements */}
            <div className={`${styles.abstractCapsule} ${styles.capsule1}`} />
            <div className={`${styles.abstractCapsule} ${styles.capsule2}`} />
            <div className={`${styles.abstractDot} ${styles.dot1}`} />

            <div className={styles.container}>
                {/* Main Content with Parallax & Motion */}
                <motion.div
                    className={styles.contentWrapper}
                    style={{ y: titleY, opacity, scale }}
                >
                    <motion.div
                        className={styles.textContent}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h4 variants={itemVariants} className={styles.welcomeText}>
                            To Provide
                        </motion.h4>

                        <motion.h1 variants={itemVariants} className={styles.title}>
                            <motion.span
                                variants={itemVariants}
                                className={styles.textGold}
                                whileHover={{ scale: 1.02, textShadow: "0 0 20px rgba(250, 204, 21, 0.4)" }}
                            >
                                High Quality,
                            </motion.span>
                            <motion.span
                                variants={itemVariants}
                                className={styles.textWhite}
                            >
                                LOW COST
                            </motion.span>
                            <br className={styles.breakMobile} />
                            <motion.span
                                variants={itemVariants}
                                className={styles.textBlue}
                                whileHover={{ filter: "drop-shadow(0 0 25px rgba(59, 130, 246, 0.8))" }}
                            >
                                DIALYSIS TREATMENT
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className={styles.description} style={{ y: descY }}>
                            Setting the global benchmark for haemodialysis fluids. We combine advanced chemical engineering with rigorous safety standards to support life-saving treatments.
                        </motion.p>

                        <motion.div variants={itemVariants} className={styles.actionGroup}>
                            <Link href="/products" className={styles.readMoreBtn}>
                                View Our Solutions
                                <span className={styles.btnIcon}>
                                    <ArrowRight size={16} />
                                </span>
                            </Link>
                            <Link href="/contact" className={styles.secondaryBtn}>
                                Talk to Sales
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialSidebar() {
    return (
        <div className={styles.socialSidebar}>
            <span className={styles.followUsText}>Follow Us</span>
            <div className={styles.socialLine} />
            <div className={styles.socialIcons}>
                <Link href="#" className={styles.socialIcon}>F</Link>
                <Link href="#" className={styles.socialIcon}>I</Link>
                <Link href="#" className={styles.socialIcon}>T</Link>
            </div>
        </div>
    );
}

function VideoBackground() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = React.useRef(null);

    useEffect(() => {
        // Check if video is already ready (for cached hits)
        if (videoRef.current && videoRef.current.readyState >= 3) {
            setIsVideoLoaded(true);
        }
    }, []);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className={styles.videoWrapper}>
            {/* Placeholder/Loading State */}
            <div
                className={styles.videoPlaceholder}
                style={{ opacity: isVideoLoaded ? 0 : 1 }}
            >
                <div className={styles.spinner} />
            </div>

            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
                onLoadedData={handleVideoLoad}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
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


function ChemicalBoxParticles() {
    // Small bubbling particles confined to the box
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const bubbleCount = 15;
        const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100 + 100, // Start below
            size: Math.random() * 6 + 2,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className={styles.chemicalBoxParticles}>
            {bubbles.map((b) => (
                <motion.div
                    key={b.id}
                    className={styles.chemicalBubble}
                    style={{
                        left: `${b.x}%`,
                        width: b.size,
                        height: b.size,
                    }}
                    animate={{
                        y: [-20, -150], // Move up
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: b.delay
                    }}
                />
            ))}
        </div>
    );
}
