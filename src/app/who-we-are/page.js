'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './who-we-are.module.css';

export default function WhoWeArePage() {
    return (
        <main className={styles.container}>
            {/* 1. Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
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
            </section>

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
            <section className={styles.storySection}>
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
            </section>

            {/* 4. Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    <motion.div
                        className={styles.statItem}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3>20<span>+</span></h3>
                        <p>Years Experience</p>
                    </motion.div>
                    <motion.div
                        className={styles.statItem}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>5k<span>+</span></h3>
                        <p>Patients Served Daily</p>
                    </motion.div>
                    <motion.div
                        className={styles.statItem}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3>100<span>%</span></h3>
                        <p>Safety Record</p>
                    </motion.div>
                    <motion.div
                        className={styles.statItem}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3>4.5k<span>sq.ft</span></h3>
                        <p>Modern Facility</p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Team Section */}
            <section className={styles.teamSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Meet Our Leadership</h2>
                    <p className={styles.sectionDesc}>The visionaries driving Renomate towards a healthier future.</p>
                </div>

                <div className={styles.teamGrid}>
                    {[
                        { name: "Mr. Rajeev Patel", role: "Managing Director", img: "/assets/avatar-placeholder.png" },
                        { name: "Dr. Anita Sharma", role: "Head of Research", img: "/assets/avatar-placeholder.png" },
                        { name: "Mr. Vikram Singh", role: "Operations Head", img: "/assets/avatar-placeholder.png" }
                    ].map((member, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.teamCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <div className={styles.memberImageWrapper}>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                                    {/* Placeholder for missing images */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                {/* <Image src={member.img} alt={member.name} layout="fill" className={styles.memberImage} /> */}
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                                <p className={styles.memberBio}>Dedicated to ensuring top-tier manufacturing standards.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
