'use client';

import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section className={`section section-alt ${styles.aboutSection} relative`}>
            <MoleculeBackground />
            <div className={`container ${styles.content}`}>
                <h2 className={styles.title}>Who <span className={styles.highlight}>We </span>Are</h2>
                <p className="section-description">
                    Renomate is a leading manufacturer of dialysis consumables and equipment.
                    With over 20 years of expertise, we are dedicated to improving patient outcomes through
                    innovation and rigorous quality standards.
                </p>
            </div>
        </section>
    );
}

function MoleculeBackground() {
    return (
        <div className={styles.backgroundContainer}>
            {/* Molecule 1: Triatomic (Main) - Top Left */}
            <motion.div
                className={styles.moleculeWrapper}
                style={{ top: '10%', left: '10%' }}
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <MoleculeSVG type="triatomic" color="#14b8a6" scale={1.2} />
            </motion.div>

            {/* Molecule 2: Diatomic - Right Center */}
            <motion.div
                className={styles.moleculeWrapper}
                style={{ top: '40%', right: '15%' }}
                animate={{
                    y: [0, 40, 0],
                    rotate: [0, -15, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            >
                <MoleculeSVG type="diatomic" color="#38bdf8" scale={1.0} />
            </motion.div>

            {/* Molecule 3: Complex - Bottom Left */}
            <motion.div
                className={styles.moleculeWrapper}
                style={{ bottom: '20%', left: '20%' }}
                animate={{
                    y: [0, -25, 0],
                    rotate: [0, 45, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                <MoleculeSVG type="complex" color="#93c5fd" scale={1.4} />
            </motion.div>

            {/* Molecule 4: Small Floater - Top Right */}
            <motion.div
                className={styles.moleculeWrapper}
                style={{ top: '15%', right: '25%' }}
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            >
                <MoleculeSVG type="diatomic" color="#cbd5e1" scale={0.8} />
            </motion.div>
        </div>
    );
}

function MoleculeSVG({ type, color, scale = 1 }) {
    // SVG paths for ball-and-stick models
    const fillStyle = { fill: color, fillOpacity: 0.5 };
    const strokeStyle = { stroke: color, strokeOpacity: 0.6, strokeWidth: 3 };

    let content;

    if (type === 'triatomic') {
        content = (
            <>
                <line x1="50" y1="50" x2="25" y2="80" {...strokeStyle} />
                <line x1="50" y1="50" x2="75" y2="80" {...strokeStyle} />
                <circle cx="50" cy="50" r="15" {...fillStyle} />
                <circle cx="25" cy="80" r="10" {...fillStyle} />
                <circle cx="75" cy="80" r="10" {...fillStyle} />
            </>
        );
    } else if (type === 'diatomic') {
        content = (
            <>
                <line x1="30" y1="50" x2="70" y2="50" {...strokeStyle} />
                <circle cx="30" cy="50" r="12" {...fillStyle} />
                <circle cx="70" cy="50" r="12" {...fillStyle} />
            </>
        );
    } else {
        content = (
            <>
                <line x1="50" y1="50" x2="50" y2="20" {...strokeStyle} />
                <line x1="50" y1="50" x2="50" y2="80" {...strokeStyle} />
                <line x1="50" y1="50" x2="20" y2="50" {...strokeStyle} />
                <line x1="50" y1="50" x2="80" y2="50" {...strokeStyle} />

                <circle cx="50" cy="50" r="12" {...fillStyle} />
                <circle cx="50" cy="20" r="8" {...fillStyle} />
                <circle cx="50" cy="80" r="8" {...fillStyle} />
                <circle cx="20" cy="50" r="8" {...fillStyle} />
                <circle cx="80" cy="50" r="8" {...fillStyle} />
            </>
        );
    }

    return (
        <svg
            width={100 * scale}
            height={100 * scale}
            viewBox="0 0 100 100"
            style={{ overflow: 'visible' }}
        >
            {content}
        </svg>
    );
}
