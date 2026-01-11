'use client';

import { ArrowRight, ShieldCheck, FileCheck, Activity, FlaskConical, Beaker, Hexagon, Component, Microscope } from 'lucide-react';
import styles from './products.module.css';

const products = [
    {
        id: 1,
        title: 'Citric Acid Powder 500 gm & 1 Kg',
        description: 'High-purity citric acid formulation for efficient descaling. Excellent removal of calcium and magnesium deposits from hemodialysis fluid pathways. Processed under strict GMP supervision.',
        image: '/products/Citric_Acid_Powder.png'
    },
    {
        id: 2,
        title: 'CITROMATE (Cleaning Fluid)',
        description: 'Specialized cleaning fluid for hemodialysis machines. Precisely formulated to remove organic and inorganic deposits, ensuring optimal machine hygiene and performance.',
        image: '/products/CITROMATE.png'
    },
    {
        id: 3,
        title: 'DIAMATE (Dialyzer Reprocessing Fluid)',
        description: 'Cold sterilant for dialyzer reprocessing. Includes cleaning, testing, and sterilization steps. Ensures safe reuse of dialyzers with validated efficacy against bacteria and spores.',
        image: '/products/DIAMATE.png'
    },
    {
        id: 4,
        title: 'Formaldehyde Solution I.P (34-37% W/V)',
        description: 'Broad-spectrum disinfectant. Effective against bacteria, fungi, and spores. Compliant with Indian Pharmacopoeia standards for use in hemodialysis unit disinfection.',
        image: '/products/Formaldehyde_Solution_IP.png'
    },
    {
        id: 5,
        title: 'Acidic Solution – Bicarbonate Dialysis (1:34)',
        description: 'Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:34:1.83. Formulated for standard bicarbonate dialysis treatments.',
        image: '/products/cane.png'
    },
    {
        id: 6,
        title: 'Acidic Solution – Bicarbonate Dialysis (1:32.75)',
        description: 'Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:32.75:1.25. Precise electrolyte composition for specific patient requirements.',
        image: '/products/cane.png'
    },
    {
        id: 7,
        title: 'Acidic Solution (DEXTROSE) – Bicarbonate',
        description: 'Hemodialysis Concentrated Acidic Solution with Dextrose – BP. Proportioning ratio 1:34:1.83. Supports glycemic management during dialysis.',
        image: '/products/cane.png'
    },
    {
        id: 8,
        title: 'Acidic Solution (Free Potassium) – Bicarbonate',
        description: 'Potassium-free Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:34:1.83. Indicated for patients with hyperkalemia.',
        image: '/products/cane.png'
    },
    {
        id: 9,
        title: 'Acidic Solution (Low Potassium) – Bicarbonate',
        description: 'Low Potassium Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:34:1.83. Designed for controlled potassium removal.',
        image: '/products/cane.png'
    },
    {
        id: 10,
        title: 'Hydrogen Peroxide Solution',
        description: 'Chemical disinfectant for water treatment systems. Effective for biofilm removal and tank disinfection in dialysis water treatment plants.',
        image: '/products/Hydrogen_Peroxide_Solution.png'
    },
    {
        id: 11,
        title: 'Sodium Bicarbonate IP',
        description: 'Pharmaceutical grade Sodium Bicarbonate (NaHCO3). High purity crystalline powder for preparation of dialysis fluid. Compliant with IP standards.',
        image: '/products/Sodium_Bicarbonate_IP.png'
    },
    {
        id: 12,
        title: 'Sodium Bicarbonate IP & Sodium Chloride IP',
        description: 'Combined formulation of Sodium Bicarbonate and Sodium Chloride. Pharmaceutical grade salts for precise electrolyte balance in dialysis fluids.',
        image: '/products/Sodium_Bicarbonate_IP_and_Sodium_Chloride_IP.png'
    },
    {
        id: 13,
        title: 'Sodium Hypochlorite – Bleach (5-6%)',
        description: 'Disinfectant for bacterial control in hemodialysis fluid pathways. Effective surface and fluid path cleaner. 5-6% concentration for robust efficacy.',
        image: '/products/SodiumHypochloriteBleach.png'
    },
    {
        id: 14,
        title: 'RENOCLEAN - Cold Sterilant',
        description: 'Peracetic acid based cold sterilant for dialyzer reprocessing. Eco-friendly decomposition. High efficacy against a wide range of pathogens.',
        image: '/products/cane.png'
    }
];

export default function ProductsPage() {
    return (
        <div className={styles.pageWrapper}>

            {/* Background Chemistry Elements - Floating Black Technical Drawings */}
            <div className={styles.chemBackground}>
                {/* Top Left - Hexagon Structure */}
                <div className={`${styles.floatingIcon} ${styles.animDelay1}`} style={{ top: '10%', left: '5%' }}>
                    <Hexagon strokeWidth={1} size={120} />
                </div>

                {/* Top Right - Flask */}
                <div className={`${styles.floatingIcon} ${styles.animDelay2}`} style={{ top: '15%', right: '8%' }}>
                    <FlaskConical strokeWidth={1} size={100} />
                </div>

                {/* Middle Left - Beaker */}
                <div className={`${styles.floatingIcon} ${styles.animDelay3}`} style={{ top: '45%', left: '8%' }}>
                    <Beaker strokeWidth={1} size={90} />
                </div>

                {/* Middle Right - Molecule/Component */}
                <div className={`${styles.floatingIcon} ${styles.animDelay4}`} style={{ top: '50%', right: '12%' }}>
                    <Component strokeWidth={1} size={110} />
                </div>

                {/* Bottom Left - Microscope */}
                <div className={`${styles.floatingIcon} ${styles.animDelay5}`} style={{ bottom: '15%', left: '15%' }}>
                    <Microscope strokeWidth={1} size={95} />
                </div>

                {/* Bottom Right - Small Hexagon */}
                <div className={`${styles.floatingIcon} ${styles.animDelay1}`} style={{ bottom: '10%', right: '5%' }}>
                    <Hexagon strokeWidth={1} size={80} />
                </div>
            </div>

            <main className={styles.mainContent}>

                {/* Header Section - Clinical/Editorial */}
                <header className={styles.headerSection}>
                    <h1 className={styles.headerTitle}>
                        Advanced Dialysis Solutions for <br className={styles.breakLine} />
                        <span className={styles.headerSubtitle}>Clinical Excellence.</span>
                    </h1>
                    <p className={styles.headerDescription}>
                        From high-purity cleaning fluids to precise hemodialysis concentrates.
                        Engineered for patient safety and operational efficiency in renal care facilities.
                    </p>
                </header>

                {/* Product Catalog Grid */}
                <div className={styles.productGrid}>
                    {products.map((product) => (
                        <article key={product.id} className={styles.productCard}>
                            {/* Image Container - Square, Neutral */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={styles.productImage}
                                />
                            </div>

                            {/* Content */}
                            <div className={styles.cardContent}>
                                <div style={{ marginBottom: 'auto' }}>
                                    <h3 className={styles.cardTitle}>
                                        {product.title}
                                    </h3>
                                    <p className={styles.cardDescription}>
                                        {product.description}
                                    </p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <span className={styles.cardCta}>
                                        View Technical Specifications
                                        <ArrowRight className={styles.ctaIcon} />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Authority / Trust Section */}
                <section className={styles.trustSection}>
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIconWrapper}>
                                <ShieldCheck size={24} />
                            </div>
                            <h4 className={styles.trustTitle}>Certified Quality</h4>
                            <p className={styles.trustDescription}>
                                Manufactured in compliance with ISO 13485 and GMP standards. Ensuring consistent safety, sterility, and efficacy for every batch produced.
                            </p>
                        </div>

                        <div className={styles.trustItem}>
                            <div className={styles.trustIconWrapper}>
                                <FileCheck size={24} />
                            </div>
                            <h4 className={styles.trustTitle}>Regulatory Compliance</h4>
                            <p className={styles.trustDescription}>
                                Fully compliant with national and international medical device regulations. Comprehensive documentation and Certificates of Analysis (CoA) available on request.
                            </p>
                        </div>

                        <div className={styles.trustItem}>
                            <div className={styles.trustIconWrapper}>
                                <Activity size={24} />
                            </div>
                            <h4 className={styles.trustTitle}>Clinical Reliability</h4>
                            <p className={styles.trustDescription}>
                                Trusted by leading dialysis centers. Our formulations are meticulously designed to maximize dialyzer performance and ensure patient safety during treatment.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
