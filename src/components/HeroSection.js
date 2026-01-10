import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Left: Typography & Story */}
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Precision.<br />
                        Purity.<br />
                        Performance.
                    </h1>
                    <p className={styles.description}>
                        Setting the global benchmark for haemodialysis fluids.
                        We combine advanced chemical engineering with rigorous safety standards to support life-saving treatments.
                    </p>

                    {/* The "Text Button" concept */}
                    <div className={styles.actionGroup}>
                        <Link href="/products" className={styles.textBtn}>
                            <div className={styles.iconCircle}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <span>View Our Solutions</span>
                        </Link>

                        <Link href="/contact" className={styles.textBtn}>
                            <div className={styles.iconCircle}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <span>Talk to Sales</span>
                        </Link>
                    </div>
                </div>

                {/* Right: Abstract Visual Data (No Images) */}
                <div className={styles.visualContent}>
                    <div className={styles.orbitContainer}>
                        <div className={`${styles.orbitRing} ${styles.ring1}`}></div>
                        <div className={`${styles.orbitRing} ${styles.ring2}`}></div>
                        <div className={`${styles.orbitRing} ${styles.ring3}`}></div>
                    </div>

                    {/* Floating Data Points */}
                    <div className={`${styles.floatCard} ${styles.card1}`}>
                        <span className={styles.cardTitle}>Daily Production</span>
                        <span className={styles.cardValue}>50k+</span>
                        <div className={styles.cardDetail}>Liters / Day</div>
                    </div>

                    <div className={`${styles.floatCard} ${styles.card2}`}>
                        <span className={styles.cardTitle}>Quality Standard</span>
                        <span className={styles.cardValue}>ISO</span>
                        <div className={styles.cardDetail}>13485:2016 Certified</div>
                    </div>

                    <div className={`${styles.floatCard} ${styles.card3}`}>
                        <span className={styles.cardValue}>Rn</span>
                        <div className={styles.cardDetail} style={{ opacity: 0.5 }}>B2B Partner</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
