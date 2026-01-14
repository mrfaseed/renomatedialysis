'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './OurIndustry.module.css';

const industryFeatures = [
    {
        id: 1,
        title: "Standards",
        description: "The Company is having all required infrastructure to manufacture the products as per requirement and complies to EU GMP norms.",
    },
    {
        id: 2,
        title: "Size of the plant",
        description: "The Company has a built up area of about 4,500 sq. feet for the production and storage of its products spread over 500 square meters of Area.",
    },
    {
        id: 3,
        title: "Production Environment",
        description: "The infrastructure includes dedicated HVAC Systems with environment control at individual production steps and auxiliary areas.",
    },
    {
        id: 4,
        title: "Management",
        description: "Complete water management system with loop, separate storage and supply management system for each categories of drugs.",
    },
];

export default function OurIndustry() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>

                    {/* Left Content Area */}
                    <div className={styles.leftContent}>
                        <div className={styles.badge}>Our Facility</div>
                        <h2 className={styles.title}>
                            Our <span className={styles.highlight}>Industry</span>
                        </h2>
                        <p className={styles.subtitle}>
                            We have the unique & finest products across the industry
                        </p>

                        <div className={styles.featureList}>
                            {industryFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className={styles.iconWrapper}>
                                        <Check className={styles.checkIcon} />
                                    </div>
                                    <div className={styles.featureText}>
                                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                                        <p className={styles.featureDesc}>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Single Large Image */}
                    <motion.div
                        className={styles.rightContent}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src="/assets/img3.png"
                                alt="Pharmaceutical Facility"
                                className={styles.facilityImage}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

