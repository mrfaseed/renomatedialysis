import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.brandHeader}>
                            <img
                                src="/favicon/cropped-ramakrishna-logo-192x192.png"
                                alt="Renomate Logo"
                                className={styles.logo}
                            />
                            <div className={styles.brandInfo}>
                                <span className={styles.brandPrefix}>SRI RAMAKRISHNA'S</span>
                                <h2 className={styles.brandName}>RENOMATE</h2>
                                <div className={styles.brandBadge}>DIALYSIS SOLUTIONS</div>
                            </div>
                        </div>
                        <p className={styles.tagline}>
                            Pioneering certainties in renal care specializing in state-of-the-art hemodialysis fluid manufacturing.
                        </p>
                    </div>

                    <div>
                        <h3 className={styles.columnTitle}>Company</h3>
                        <ul className={styles.links}>
                            <li><a href="/about" className={styles.link}>About Us</a></li>
                            <li><a href="/products" className={styles.link}>Products</a></li>
                            <li><a href="/contact" className={styles.link}>Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.columnTitle}>Solutions</h3>
                        <ul className={styles.links}>
                            <li><a href="/products/machines" className={styles.link}>Dialysis Machines</a></li>
                            <li><a href="/products/consumables" className={styles.link}>Consumables</a></li>
                            <li><a href="/products/water-treatment" className={styles.link}>Water Treatment</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.columnTitle}>Get in Touch</h3>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>📍</div>
                            <div>
                                <strong>Location</strong><br />
                                #2, H3-H3 Road, Virudhunagar
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>✉️</div>
                            <div>
                                <strong>Email</strong><br />
                                ramakrishnanrenomate@gmail.com
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>📞</div>
                            <div>
                                <strong>Call Us</strong><br />
                                +91 8643849098
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <span>© {new Date().getFullYear()} Sri Ramakrishna's Renomate. All rights reserved.</span>
                    <div className={styles.legalLinks}>
                        <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
                        <a href="/terms" className={styles.legalLink}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
