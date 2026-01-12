'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Factory,
    Microscope,
    ShieldCheck,
    Users,
    Eye,
    Target,
    HeartPulse,
    FileCheck,
    FlaskConical,
    Leaf,
    CheckCircle2,
    Award
} from 'lucide-react';
import styles from './About.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AboutPage() {
    return (
        <main className={styles.mainContainer}>
            {/* Hero Section - About Us */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}></div>
                <div className={styles.contentWrapper}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className={styles.heroContent}
                    >
                        <div className={styles.heroTextContent}>
                            <motion.span variants={fadeInUp} className={styles.badge}>About Us</motion.span>
                            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
                                Sri Ramakrishna’s <br /><span className={styles.highlight}>Renomate</span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className={styles.heroText}>
                                Sri Ramakrishna’s Renomate is a professionally managed medical device manufacturing organization specializing in the development, manufacturing, and supply of <strong>Haemodialysis Solutions</strong> and related products. The company is committed to supporting renal care by delivering products that meet the highest standards of quality, safety, and regulatory compliance.
                            </motion.p>
                            <motion.div variants={fadeInUp} className={styles.heroStats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>11k+</span>
                                    <span className={styles.statLabel}>Sq. Ft. Facility</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>GMP</span>
                                    <span className={styles.statLabel}>Certified</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>MDR</span>
                                    <span className={styles.statLabel}>2017 Compliant</span>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={fadeInUp}
                            className={styles.heroImageWrapper}
                        >
                            <Image
                                src="/assets/mission-illustration.png"
                                alt="Renomate Mission"
                                width={600}
                                height={600}
                                className={styles.heroImage}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Manufacturing Excellence */}
            <section className={styles.section}>
                <div className={styles.contentWrapper}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className={styles.gridTwoCol}
                    >
                        <div className={styles.textColumn}>
                            <div className={styles.iconBox}>
                                <Factory size={32} />
                            </div>
                            <h2 className={styles.sectionTitle}>Manufacturing Excellence & <span className={styles.highlightqu}>Quality</span>  Systens</h2>
                            <p className={styles.sectionText}>
                                Our manufacturing facility is strategically located at <strong>No. 2, H3, H3 Road, Virudhunagar, Tamil Nadu</strong>, with an operational area of approximately 11,000 square feet. The facility has been meticulously designed and constructed in accordance with <strong className={styles.textHighlight}>Good Manufacturing Practices (GMP)</strong> and complies with the structural and operational requirements of the Central Drugs Standard Control Organization (CDSCO) and the Medical Device Rules (MDR), 2017.
                            </p>
                            <p className={styles.sectionText}>
                                Our operations are governed by a comprehensive Quality Management System (QMS) to ensure consistency, traceability, and continual improvement across all processes. Quality is not just a regulatory requirement—it is a core organizational value.
                            </p>
                        </div>
                        <div className={styles.cardsColumn}>
                            <motion.div variants={fadeInUp} className={styles.glassCard}>
                                <Microscope className={styles.cardIcon} size={28} />
                                <h3>In-house Laboratory</h3>
                                <p>Our Quality Control and Testing Laboratory is fully equipped for raw material testing, in-process control, and finished product analysis.</p>
                                <ul className={styles.checkList}>
                                    <li><CheckCircle2 size={16} /> Atomic Absorption Spectroscopy (AAS)</li>
                                    <li><CheckCircle2 size={16} /> Wet Chemistry Laboratory</li>
                                    <li><CheckCircle2 size={16} /> Microbiology Laboratory</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Raw Materials */}
            <section className={`${styles.section} ${styles.altBg}`}>
                <div className={styles.contentWrapper}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className={styles.sectionHeader}
                    >
                        <Leaf className={styles.headerIcon} size={40} />
                        <h2 className={styles.sectionTitle}>Raw Materials & Supplier ,<span className={styles.sectionTitle1}> Quality </span>Assurance</h2>
                        <p className={styles.sectionSubtitle}>
                            At Sri Ramakrishna’s Renomate, the quality of raw materials is fundamental to the safety and performance of our haemodialysis solutions.
                        </p>
                    </motion.div>

                    <div className={styles.gridThreeCol}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={styles.featureCard}
                        >
                            <div className={styles.featureIconBox}><FlaskConical size={24} /></div>
                            <h3>Premium Sourcing</h3>
                            <p>Indian Pharma Grade raw materials from approved vendors and food-grade cane-based ingredients for high purity.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={styles.featureCard}
                        >
                            <div className={styles.featureIconBox}><ShieldCheck size={24} /></div>
                            <h3>Stringent Testing</h3>
                            <p>Incoming materials undergo strict quality checks. Each batch is tested for identity, purity, and quality per specifications.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={styles.featureCard}
                        >
                            <div className={styles.featureIconBox}><FileCheck size={24} /></div>
                            <h3>Traceability</h3>
                            <p>Complete traceability and documentation are maintained in line with QMS and MDR 2017 requirements.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Regulatory Compliance */}
            <section className={styles.complianceSection}>
                <div className={styles.contentWrapper}>
                    <div className={styles.complianceContent}>
                        <Award size={48} className={styles.whiteIcon} />
                        <h2>Regulatory Compliance</h2>
                        <p>We strictly adhere to applicable national regulatory standards and guidelines, ensuring our systems support regulatory inspections and continuous compliance.</p>
                        <div className={styles.complianceGrid}>
                            <span className={styles.complianceTag}>MDR 2017</span>
                            <span className={styles.complianceTag}>CDSCO Requirements</span>
                            <span className={styles.complianceTag}>GMP Certified</span>
                            <span className={styles.complianceTag}>QMS Principles</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className={styles.section}>
                <div className={styles.contentWrapper}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className={styles.sectionHeader}
                    >
                        <Users className={styles.headerIcon} size={40} />
                        <h2 className={styles.sectionTitle}>Technical & Quality Leadership</h2>
                    </motion.div>

                    <div className={styles.teamGrid}>
                        <TeamMember
                            name="Mr. M. Palanivelu"
                            degree="M.Pharm"
                            role="Technical Head"
                            description="Responsible for manufacturing operations, process validation, quality systems, and regulatory compliance."
                            delay={0.1}
                        />
                        <TeamMember
                            name="Mr. S. Gurusamy"
                            degree="M.Sc (Chemistry)"
                            role="Quality Control"
                            description="Oversees analytical testing, laboratory operations, and compliance with quality standards."
                            delay={0.2}
                        />
                        <TeamMember
                            name="Ms. K. Saraswathy"
                            degree="B.Sc (Chemistry)"
                            role="Quality Control"
                            description="Supports routine analysis, documentation, and quality assurance activities."
                            delay={0.3}
                        />
                        <TeamMember
                            name="Mr. B. Prakash"
                            degree="B.Tech"
                            role="Medical Device Designer"
                            description="Responsible for design inputs, technical documentation, product development support."
                            delay={0.4}
                        />
                    </div>

                    <div className={styles.grandGovernance}>
                        <div className={styles.governanceContent}>
                            <h3>Management & Governance</h3>
                            <p className={styles.foundedBy}>Sri Ramakrishna’s Renomate is led by its partner firm:</p>
                            <ul className={styles.foundersList}>
                                <li>Mr. B. Suresh</li>
                                <li>Ms. R. Meenal</li>
                            </ul>
                            <p>
                                The leadership team is committed to ethical business practices, regulatory transparency, and long-term sustainability. Their vision emphasizes patient safety, customer satisfaction, and excellence in manufacturing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className={styles.visionMissionSection}>
                <div className={styles.contentWrapper}>
                    <div className={styles.splitLayout}>
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`${styles.splitCard} ${styles.blueCard}`}
                        >
                            <Eye size={40} className={styles.cardIconLarge} />
                            <h2 className={styles.missionList}>Our Vision</h2>
                            <p>To be a recognized and trusted manufacturer of haemodialysis solutions, delivering reliable, safe, and high-quality medical devices that contribute to improved renal care and patient well-being.</p>
                        </motion.div>
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`${styles.splitCard} ${styles.lightCard}`}
                        >
                            <Target size={40} className={styles.cardIconLarge} />
                            <h2 className={styles.sectionTitle}>Our Mission</h2>
                            <ul className={styles.missionList}>
                                <li>Manufacture solutions meeting highest quality/safety standards.</li>
                                <li>Operate in full compliance with CDSCO, MDR 2017, GMP, and QMS.</li>
                                <li>Continuously enhance quality through innovation and optimization.</li>
                                <li>Build long-term partnerships through trust and reliability.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className={styles.commitmentSection}>
                <div className={styles.contentWrapper}>
                    <div className={styles.commitmentCard}>
                        <HeartPulse size={48} className={styles.heartIcon} />
                        <h2>Commitment to Patients & Healthcare</h2>
                        <p>
                            We understand the critical role haemodialysis solutions play in patient care. Therefore, every aspect of our manufacturing process—from raw material selection to final product release—is driven by a commitment to patient safety, clinical effectiveness, and regulatory excellence.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

function TeamMember({ name, degree, role, description, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className={styles.teamCard}
        >
            <div className={styles.teamHeader}>
                <div>
                    <h3 className={styles.teamName}>{name}</h3>
                    <span className={styles.teamDegree}>{degree}</span>
                </div>
            </div>
            <div className={styles.teamRole}>{role}</div>
            <p className={styles.teamDesc}>{description}</p>
        </motion.div>
    );
}
