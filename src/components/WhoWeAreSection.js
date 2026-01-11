'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../app/who-we-are/who-we-are.module.css';

export default function WhoWeAreSection() {
    return (
        <section className={styles.container} id="who-we-are">
            {/* 1. Hero */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.heroTitle}>
                            The People Behind <br />
                            <span>Renomate Quality</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We are a team of engineers, scientists, and care providers united by a single purpose: to redefine the standards of dialysis care globally.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 2. Scrolling Values Tape */}
            <div className={styles.valuesTape}>
                <div className={styles.tapeContent}>
                    <span className={styles.tapeItem}>Integrity</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Innovation</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Compassion</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Excellence</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Safety</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Integrity</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Innovation</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Compassion</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Excellence</span>
                    <span className={styles.tapeItem}>•</span>
                    <span className={styles.tapeItem}>Safety</span>
                    <span className={styles.tapeItem}>•</span>
                </div>
            </div>

            {/* 3. Our Story Section */}
            <div className={styles.storySection}>
                <motion.div
                    className={styles.storyImageContainer}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/about-hero.png" // Reusing available asset
                        alt="Our Factory Lab"
                        width={800}
                        height={600}
                        className={styles.storyImage}
                    />
                </motion.div>
                <motion.div
                    className={styles.storyContent}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2>Built on 20 Years of Trust</h2>
                    <p>
                        Renomate began with a simple observation: dialysis care was becoming prohibitively expensive without a proportional increase in safety quality. Our founders believed that world-class medical fluids shouldn't be a luxury.
                    </p>
                    <p>
                        Starting from a small lab in 2004, we have grown into one of India's most respected manufacturers of hemodialysis concentrates. Today, our 4,500 sq.ft facility operates with surgical precision, adhering to global BP/IP standards.
                    </p>
                    <p>
                        Every drop of fluid we produce carries the weight of a patient's life, and we treat it with the sanctity it deserves.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
