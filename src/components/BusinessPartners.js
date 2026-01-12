'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Banknote, Clock, FlaskConical, PackageSearch, FileText } from 'lucide-react';
import styles from './BusinessPartners.module.css';
import ChemistryBackground from './ChemistryBackground';

const features = [
    {
        id: 1,
        title: "Indian Pharma Grade",
        icon: <Building2 className={styles.featureIcon} />,
    },
    {
        id: 2,
        title: "Quality Assurance",
        icon: <ShieldCheck className={styles.featureIcon} />,
    },
    {
        id: 3,
        title: "Low Cost",
        icon: <Banknote className={styles.featureIcon} />,
    },
    {
        id: 4,
        title: "Years of Experience",
        icon: <Clock className={styles.featureIcon} />,
    },
    {
        id: 5,
        title: "Qualified Chemist",
        icon: <FlaskConical className={styles.featureIcon} />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BusinessPartners() {
    return (
        <section className={styles.section}>
            <ChemistryBackground />
            <div className={styles.backgroundGrid}></div>

            <div className={styles.container}>
                {/* 1. Header with Playfair Highlight */}
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        We Don't Just Sell, We <span className={styles.highlight}>Build</span> Long-Term Business Partners
                    </motion.h2>
                </div>

                {/* 2. Features Grid */}
                <motion.div
                    className={styles.featuresGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            className={`${styles.featureItem} ${index === features.length - 1 ? styles.featureItemLast : ''}`}
                        >
                            <div className={styles.iconContainer}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>
                                {feature.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 3. CTA Box */}
                <div className={styles.ctaBox}>
                    <div className={`${styles.orb} ${styles.orb1}`}></div>
                    <div className={`${styles.orb} ${styles.orb2}`}></div>

                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Don't See What You Are Looking For? <span className={styles.highlightno}>No </span>Worry.
                        </h2>

                        <div className={styles.ctaButtons}>
                            <Link href="/products" className={`${styles.btn} ${styles.btnPrimary}`}>
                                <PackageSearch className={styles.btnIcon} />
                                <span>See Products</span>
                            </Link>

                            <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                                <FileText className={styles.btnIcon} />
                                <span>Get A Quote</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
