"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';
import { ArrowRight } from 'lucide-react';
import Hls from 'hls.js';

const IS_MOBILE = typeof window !== 'undefined' && window.innerWidth < 768;

export default function HeroSection() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Parallax values (Reduced/Disabled on mobile for performance)
    const titleY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -100]);
    const descY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, isMobile ? 1 : 0.95]);

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

            {/* Dynamic Background Glow - Moving Aura (Hidden on Mobile) */}
            {!isMobile && (
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
            )}

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

            {/* Floating Chemical Elements - MOLECULAR OVERLAY */}
            <MolecularOverlay isMobile={isMobile} />

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
                            Advanced Medical Device and Hemodialysis Manufacturers
                        </motion.h4>

                        <motion.h1 variants={itemVariants} className={styles.title}>
                            <motion.span
                                variants={itemVariants}
                                className={styles.textHighlight}
                            >
                                <span className={styles.playfair}>  Premium Quality</span>
                            </motion.span>
                            <motion.span
                                variants={itemVariants}
                                className={styles.textWhite}
                                style={{ display: 'block' }}
                            >
                                GLOBAL STANDARD
                            </motion.span>
                            <motion.span
                                variants={itemVariants}
                                className={styles.textSub}
                            >
                                DIALYSIS SOLUTION
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className={styles.description} style={{ y: descY }}>

                        </motion.p>

                        <motion.div variants={itemVariants} className={styles.actionGroup}>
                            <Link href="/products" className={styles.readMoreBtn}>
                                Discover Innovations
                                <span className={styles.btnIcon}>
                                    <ArrowRight size={16} />
                                </span>
                            </Link>
                            <Link href="/contact" className={styles.secondaryBtn}>
                                Partner With Us
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

    // Primary Source: Firebase Storage
    const remoteHlsSource = "https://storage.googleapis.com/renomatedialysis.firebasestorage.app/mainhls/index.m3u8";

    // Fallback Source: Local file
    const localHlsSource = "/mainhls/index.m3u8";

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls;

        const loadStream = (source, isRetry = false) => {
            if (Hls.isSupported()) {
                if (hls) hls.destroy();

                const isMobile = window.innerWidth < 768;

                hls = new Hls({
                    autoStartLoad: true,
                    startPosition: -1,
                    debug: false,
                    // Optimization: Cap resolution on mobile to save bandwidth/decoder
                    capLevelToPlayerSize: isMobile,
                    // Optimization: Reduce buffer on mobile to reduce lag/startup
                    maxBufferLength: isMobile ? 10 : 30,
                    maxMaxBufferLength: isMobile ? 15 : 60,
                });

                hls.loadSource(source);
                hls.attachMedia(video);

                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    video.play().catch(e => console.log("Auto-play prevented", e));
                });

                hls.on(Hls.Events.ERROR, function (event, data) {
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                if (!isRetry) {
                                    console.warn("Remote HLS failed, falling back to local...");
                                    loadStream(localHlsSource, true);
                                } else {
                                    hls.startLoad();
                                }
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                hls.recoverMediaError();
                                break;
                            default:
                                if (!isRetry) {
                                    console.warn("Fatal HLS error, switching to local.");
                                    loadStream(localHlsSource, true);
                                } else {
                                    hls.destroy();
                                }
                                break;
                        }
                    }
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Native HLS support (Safari)
                video.src = source;
                video.addEventListener('loadedmetadata', () => {
                    video.play().catch(e => console.log("Auto-play prevented (Safari)", e));
                });

                video.addEventListener('error', (e) => {
                    if (!isRetry) {
                        console.warn("Native HLS failed, switching to local.");
                        video.src = localHlsSource;
                        video.play();
                    }
                });
            }
        };

        // Attempt to load remote first
        loadStream(remoteHlsSource);

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
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
                onPlaying={() => setIsVideoLoaded(true)}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
            />
            <div className={styles.videoOverlay} />
        </div>
    );
}

function MolecularOverlay({ isMobile }) {
    // Generates floating chemical structures (Hexagons)
    const [molecules, setMolecules] = useState([]);

    useEffect(() => {
        // Drastically reduce count on mobile (12 -> 4)
        const count = isMobile ? 4 : 12;
        const newMolecules = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 90 + 5,
            y: Math.random() * 90 + 5,
            size: Math.random() * 40 + 20,
            duration: Math.random() * 20 + 20,
            delay: Math.random() * 5,
            rotate: Math.random() * 360
        }));
        setMolecules(newMolecules);
    }, [isMobile]);

    return (
        <div className={styles.molecularContainer}>
            {molecules.map((m) => (
                <motion.div
                    key={m.id}
                    className={styles.molecule}
                    style={{
                        left: `${m.x}%`,
                        top: `${m.y}%`,
                        width: m.size,
                        height: m.size,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [m.rotate, m.rotate + 45, m.rotate],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: m.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: m.delay
                    }}
                >
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z" />
                        <circle cx="50" cy="50" r="15" opacity="0.5" />
                        <path d="M50 5 L50 25 M90 27.5 L73 37 M90 72.5 L73 63 M50 95 L50 75 M10 72.5 L27 63 M10 27.5 L27 37" opacity="0.5" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}

