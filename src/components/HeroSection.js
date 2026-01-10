import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Advanced Dialysis Solutions <br /> For Modern Healthcare
                </h1>
                <p className={styles.description}>
                    Providing state-of-the-art renal care technology to hospitals and clinics worldwide.
                    Experience reliability, precision, and care.
                </p>
                <div className={styles.buttonGroup}>
                    <Link href="/products" className={styles.primaryBtn}>Explore Products</Link>
                    <Link href="/contact" className={styles.outlineBtn}>Contact Sales</Link>
                </div>
            </div>
        </section>
    );
}
