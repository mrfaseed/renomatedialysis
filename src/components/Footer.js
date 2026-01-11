import { MapPin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

// Chemical Icons Set
const Icons = {
    Hexagon: () => (
        <svg viewBox="0 0 100 100" className={styles.moleculeSvg}>
            <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" fill="none" stroke="url(#glowGrad)" strokeWidth="1.5" className={styles.hexPath} />
            <circle cx="50" cy="50" r="4" fill="#3b82f6" className={styles.coreNode} />
            <path d="M50 50 L85 35 M50 50 L15 75" stroke="url(#glowGrad)" strokeWidth="0.5" opacity="0.6" />
        </svg>
    ),
    Flask: () => (
        <svg viewBox="0 0 100 100" className={styles.moleculeSvg}>
            <path d="M35 30 L35 15 L65 15 L65 30 L80 85 Q85 95 75 95 L25 95 Q15 95 20 85 Z" fill="none" stroke="url(#glowGrad)" strokeWidth="2" />
            <path d="M25 75 L75 75" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
            <circle cx="40" cy="60" r="2" fill="#60a5fa" className={styles.bubble} />
            <circle cx="60" cy="80" r="3" fill="#60a5fa" className={styles.bubble} />
        </svg>
    ),
    TestTube: () => (
        <svg viewBox="0 0 100 100" className={styles.moleculeSvg} style={{ transform: 'rotate(45deg)' }}>
            <rect x="40" y="10" width="20" height="70" rx="10" fill="none" stroke="url(#glowGrad)" strokeWidth="2" />
            <path d="M40 30 L60 30" stroke="url(#glowGrad)" strokeWidth="1" opacity="0.5" />
            <path d="M40 50 L60 50" stroke="url(#glowGrad)" strokeWidth="1" opacity="0.5" />
            <circle cx="50" cy="70" r="3" fill="#60a5fa" className={styles.bubble} />
        </svg>
    ),
    Atom: () => (
        <svg viewBox="0 0 100 100" className={styles.moleculeSvg}>
            <circle cx="50" cy="50" r="5" fill="#3b82f6" className={styles.coreNode} />
            <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="url(#glowGrad)" strokeWidth="1" transform="rotate(0 50 50)" opacity="0.6" />
            <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="url(#glowGrad)" strokeWidth="1" transform="rotate(60 50 50)" opacity="0.6" />
            <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="url(#glowGrad)" strokeWidth="1" transform="rotate(120 50 50)" opacity="0.6" />
        </svg>
    ),
    Dna: () => (
        <svg viewBox="0 0 100 100" className={styles.moleculeSvg}>
            <path d="M30 10 Q70 25 30 40 Q70 55 30 70 Q70 85 30 100" fill="none" stroke="url(#glowGrad)" strokeWidth="2" opacity="0.5" />
            <path d="M70 10 Q30 25 70 40 Q30 55 70 70 Q30 85 70 100" fill="none" stroke="url(#glowGrad)" strokeWidth="2" opacity="0.5" />
            <line x1="30" y1="25" x2="70" y2="25" stroke="url(#glowGrad)" strokeWidth="1" strokeLinecap="round" />
            <line x1="30" y1="55" x2="70" y2="55" stroke="url(#glowGrad)" strokeWidth="1" strokeLinecap="round" />
            <line x1="30" y1="85" x2="70" y2="85" stroke="url(#glowGrad)" strokeWidth="1" strokeLinecap="round" />
        </svg>
    )
};

const iconTypes = Object.keys(Icons);

const ChemicalElement = ({ index }) => {
    const IconComponent = Icons[iconTypes[index % iconTypes.length]];
    return <IconComponent />;
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* Animated Background Layer */}
            <div className={styles.chemicalBackground}>
                {/* Shared Gradient Definition */}
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <defs>
                        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>

                {[...Array(10)].map((_, i) => (
                    <div key={i} className={styles.moleculeWrapper}>
                        <ChemicalElement index={i} />
                    </div>
                ))}
                <div className={styles.fluidOverlay} />
                <div className={styles.gridOverlay} />
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandCol}>
                        <div className={styles.brandHeader}>
                            <img
                                src="/1-2.png"
                                alt="Renomate Logo"
                                className={styles.logo}
                            />
                            <div className={styles.brandInfo}>
                                <span className={styles.brandPrefix}>SRI RAMAKRISHNA'S</span>
                                <h2 className={styles.brandName}>RENOMATE</h2>
                                <div className={styles.brandBadge}>MEDICAL DEVICE & HEMODIALYSIS FLUID MANUFACTURES</div>
                            </div>
                        </div>
                        <p className={styles.tagline}>
                            Pioneering certainties in renal care specializing in state-of-the-art hemodialysis fluid manufacturing.
                        </p>
                    </div>



                    <div>
                        <h3 className={styles.columnTitle}>Solutions</h3>
                        <ul className={styles.links}>
                            <li><a href="/about" className={styles.link}>About us</a></li>
                            <li><a href="/products" className={styles.link}>Products</a></li>
                            <li><a href="/contact" className={styles.link}>Contact us</a></li>
                        </ul>
                    </div>

                    <div className={styles.contactColumn}>
                        <h3 className={styles.columnTitle}>Get in Touch</h3>
                        <div className={styles.contactGrid}>
                            <div className={styles.contactCard}>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div className={styles.contactInfo}>
                                    <span className={styles.contactLabel}>Location</span>
                                    <p className={styles.contactValue}>No.2,H3,H3 Road,Virudhunagar</p>
                                </div>
                            </div>
                            <div className={styles.contactCard}>
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div className={styles.contactInfo}>
                                    <span className={styles.contactLabel}>Email</span>
                                    <p className={styles.contactValue}>ramakrishnanrenomate@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.contactCard}>
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div className={styles.contactInfo}>
                                    <span className={styles.contactLabel}>Call Us</span>
                                    <p className={styles.contactValue}>+91 8643849098</p>
                                    <p className={styles.contactValue}>+91 8056390983</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <span>© {currentYear} SRI RAMAKRISHNA'S RENOMATE MEDICAL DEVICE & HEMODIALYSIS FLUID MANUFACTURES .  All rights reserved.</span>
                    <div className={styles.legalLinks}>
                        <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
                        <a href="/terms" className={styles.legalLink}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}