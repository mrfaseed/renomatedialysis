import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.brandHeader}>
                            {/* Leaving simple text branding as per user's last "paste" but keeping the structure clean if they want the logo back easily, 
                                but based on "take out the logo from the box" and the paste not having it, let's keep it simple but functional */}
                            <div>
                                <p style={{ color: '#94a3b8', fontSize: '0.8rem', letterSpacing: '2px', margin: 0 }}>SRI RAMAKRISHNA'S</p>
                                <h2 className={styles.brandName}>Renomate</h2>
                                <div className={styles.brandBadge}>DIALYSIS SOLUTIONS</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.columnTitle}>Company</h3>
                        <ul className={styles.links}>
                            <li><a href="/about" className={styles.link}>About Us</a></li>
                            <li><a href="/leadership" className={styles.link}>Leadership</a></li>
                            <li><a href="/careers" className={styles.link}>Careers</a></li>
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
                        <div className={styles.contactItem} style={{ display: 'flex', gap: '10px' }}>
                            <span>📍</span>
                            <span>#2, H3-H3 Road, Virudhunagar</span>
                        </div>
                        <div className={styles.contactItem} style={{ display: 'flex', gap: '10px' }}>
                            <span>✉️</span>
                            <span>ramakrishnanrenomate@gmail.com</span>
                        </div>
                        <div className={styles.contactItem} style={{ display: 'flex', gap: '10px' }}>
                            <span>📞</span>
                            <span>+91 8643849098</span>
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
