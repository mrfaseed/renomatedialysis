import Link from 'next/link';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
    return (
        <section className={styles.ctaSection}>
            {/* Background Animation Layer */}
            <div className={styles.backgroundAnimation}>
                <div className={`${styles.floatingShape} ${styles.shape1}`}></div>
                <div className={`${styles.floatingShape} ${styles.shape2}`}></div>
                <div className={`${styles.floatingShape} ${styles.shape3}`}></div>
                <div className={`${styles.floatingShape} ${styles.shape4}`}></div>
            </div>

            {/* Content Layer */}
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Ready to <span className={styles.highlight}>Elevate </span>Your Facility?</h2>
                <p className={styles.description}>
                    Partner with Renomate Dialysis for premium solutions that prioritize patient care and operational excellence. Let's build the future of healthcare together.
                </p>
                <Link href="/contact" className={styles.ctaButton}>
                    Get a Quote Today
                </Link>
            </div>
        </section>
    );
}
