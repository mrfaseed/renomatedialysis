'use client';

// import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import styles from './WhoWeAreSection.module.css';
import ChemistryBackground from './ChemistryBackground';

export default function WhoWeAreSection() {
    // Lottie animation removed


    return (
        <section className={styles.container} id="who-we-are">
            <ChemistryBackground />

            {/* 2D Effects Layer */}
            <div className={styles.gridBackground}></div>
            <div className={`${styles.floatingCircle} ${styles.circle1}`}></div>
            <div className={`${styles.floatingCircle} ${styles.circle2}`}></div>

            {/* Decorative SVG Swish */}
            <svg className={styles.swishLine} viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M0,200 Q250,50 500,200 T1000,200"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>

            <div className={styles.contentWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.label}>Who We Are</span>
                    <h2 className={styles.title}>
                        Supporting Life Through <br /><span className={styles.titleItalic}>Renal</span> Care.
                    </h2>
                </motion.div>

                <motion.div
                    className={styles.textLayout}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <p className={styles.paragraph}>
                        At <strong>Renomate</strong>, we don't just manufacture dialysis fluids; we craft the lifeline that thousands of patients depend on every single day. Born from a vision to elevate medical standards in India, we blend precise chemical engineering with an unwavering commitment to patient safety.
                    </p>
                    <p className={styles.paragraph}>
                        Our state-of-the-art facility operates on a simple premise: <strong>Quality is non-negotiable.</strong> From the purity of our raw materials to the integrity of our final packaging, every step is a testament to our dedication to renal care excellence. We are not just a supplier; we are a partner in the journey towards better health.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
