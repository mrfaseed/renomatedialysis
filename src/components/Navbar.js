'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent body scrolling when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logoContainer}>
                <Image
                    src="/image.png"
                    alt="Renomate Logo"
                    width={400}
                    height={120}
                    quality={100}
                    className={styles.logoImage}
                    priority
                />
            </Link>

            {/* Desktop Menu */}
            <ul className={styles.navLinks}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
                <li><Link href="/products" className={styles.navLink}>Products</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>

            {/* Mobile Menu Button with CLEANER structure */}
            <button
                className={`${styles.mobileMenuBtn} ${isOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className={styles.hamburgerIcon}>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </div>
            </button>

            {/* Mobile Fullscreen Menu */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavList}>
                    <li><Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About Us</Link></li>
                    <li><Link href="/products" className={styles.mobileNavLink} onClick={toggleMenu}>Products</Link></li>
                    <li><Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
