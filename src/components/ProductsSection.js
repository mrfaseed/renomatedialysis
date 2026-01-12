'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ProductsSection.module.css';

const featuredProducts = [
    {
        id: 1,
        title: 'Citric Acid Powder 500 gm & 1 Kg',
        description: 'High-purity citric acid formulation for efficient descaling. Excellent removal of calcium and magnesium deposits.',
        image: '/products/Citric_Acid_Powder.png'
    },
    {
        id: 2,
        title: 'CITROMATE (Cleaning Fluid)',
        description: 'Specialized cleaning fluid for hemodialysis machines. Precisely formulated to remove organic and inorganic deposits.',
        image: '/products/CITROMATE.png'
    },
    {
        id: 3,
        title: 'DIAMATE (Dialyzer Reprocessing)',
        description: 'Cold sterilant for dialyzer reprocessing. Includes cleaning, testing, and sterilization steps. Ensures safe reuse.',
        image: '/products/DIAMATE.png'
    },
    {
        id: 4,
        title: 'Formaldehyde Solution I.P',
        description: 'Broad-spectrum disinfectant. Effective against bacteria, fungi, and spores. Compliant with Pharmacopoeia standards.',
        image: '/products/Formaldehyde_Solution_IP.png'
    },
    {
        id: 5,
        title: 'Acidic Solution (Bicarbonate)',
        description: 'Hemodialysis Concentrated Acidic Solution. Proportioning ratio 1:34:1.83. Formulated for standard treatments.',
        image: '/products/cane.png'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function ProductsSection() {
    return (
        <section className={styles.section}>
            {/* Background Decoration */}
            <div className={styles.bgDecoration}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <div className={styles.container}>

                {/* Section Header */}
                <div className={styles.header}>
                    <motion.div
                        className={styles.titleBlock}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.title}>
                            Our <span className={styles.highlight1}>Products</span>
                        </h2>
                        <p className={styles.description}>
                            Here are some of our <span className={styles.highlight}>Finest</span> and <span className={styles.highlight}>Top Selling</span> products.
                        </p>
                        <div className={styles.divider}></div>
                    </motion.div>

                </div>

                {/* Products Grid */}
                <motion.div
                    className={styles.productsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {featuredProducts.slice(0, 4).map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            className={styles.card}
                        >
                            {/* Card Glow Effect */}
                            <div className={styles.cardGlow} />

                            {/* Image Container */}
                            <div className={styles.imageContainer}>
                                <div className={styles.imageBgPattern} />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={styles.productImage}
                                />
                            </div>

                            {/* Content */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    {product.title}
                                </h3>
                                <p className={styles.cardDescription}>
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button - Centered at Bottom */}
                <motion.div
                    className={styles.viewAllContainer}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link href="/products" className={styles.viewAllBtn}>
                        <span className={styles.btnText}>View <span className={styles.highlightbtn}>All </span>Products</span>
                        <div className={styles.btnIconCircle}>
                            <ArrowRight className={styles.icon} />
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

