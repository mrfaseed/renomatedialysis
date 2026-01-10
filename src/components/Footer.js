import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h3 className={styles.title}>Renomate Dialysis Solutions</h3>
                <p className={styles.tagline}>
                    Innovating dialysis care for a better tomorrow.
                </p>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Renomate. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
