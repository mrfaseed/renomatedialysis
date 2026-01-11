'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Wind, Users } from 'lucide-react';
import styles from './OurIndustry.module.css';

const industryFeatures = [
    {
        id: 1,
        title: "Standards",
        description: "The Company is having all required infrastructure to manufacture the products as per requirement and complies to EU GMP norms.",
        icon: <ShieldCheck className={styles.icon} />,
    },
    {
        id: 2,
        title: "Size of the plant",
        description: "The Company has a built up area of about 4,500 sq. feet for the production and storage of its products spread over 500 square meters of Area.",
        icon: <Factory className={styles.icon} />,
    },
    {
        id: 3,
        title: "Production Environment",
        description: "The infrastructure includes dedicated HVAC Systems with environment control at individual production steps and auxiliary areas.",
        icon: <Wind className={styles.icon} />,
    },
    {
        id: 4,
        title: "Management",
        description: "Complete water management system with loop, separate storage and supply management system for each categories of drugs.",
        icon: <Users className={styles.icon} />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function OurIndustry() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Our <span className={styles.industry}>Industry</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.subtitle}
                    >
                        We have the unique & finest products across the industry
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {/* Left Column: Features List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={styles.featuresList}
                    >
                        {industryFeatures.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className={styles.featureItem}
                            >
                                <div className={styles.iconWrapper}>
                                    <div className={styles.iconCircle}>
                                        {feature.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={styles.featureTitle}>
                                        {feature.title}
                                    </h3>
                                    <p className={styles.featureDescription}>
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Column: Images Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className={styles.imageColumn}
                    >
                        {/* Decorative Background */}
                        <div className={styles.decorativeBg}></div>

                        <div className={styles.imageGrid}>
                            {/* Main Large Image */}
                            <div className={styles.mainImageWrapper}>
                                <img
                                    src="/assets/Gemini_Generated_Image_6vi3z56vi3z56vi3.png"
                                    alt="Industry High Tech"
                                    className={styles.image}
                                />
                            </div>

                            {/* Secondary Images */}
                            <div className={styles.secondaryImageWrapper1}>
                                <img
                                    src="/assets/img.png"
                                    alt="Facility Detail"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.secondaryImageWrapper2}>
                                <img
                                    src="/assets/img3.png"
                                    alt="Equipment"
                                    className={styles.image}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
