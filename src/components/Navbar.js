'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <nav className={styles.navbar}>
            {/* Logo Section */}
            <Link href="/" className={styles.logoContainer}>
                <Image
                    src="/image.png"
                    alt="Renomate"
                    width={180}
                    height={60}
                    quality={100}
                    className={styles.logoImage}
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <ul className={styles.navLinks}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/about" className={styles.navLink}>About</Link></li>
                <li><Link href="/products" className={styles.navLink}>Products</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                <li><Link href="/appointment" className={styles.ctaButton}>Book Appointment</Link></li>
            </ul>

            {/* Mobile Menu Button - Sleek & Simple */}
            <button
                className={styles.mobileMenuBtn}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={26} color="#334155" /> : <Menu size={26} color="#334155" />}
            </button>

            {/* Mobile Fullscreen Menu */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavList}>
                    <li><Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About</Link></li>
                    <li><Link href="/products" className={styles.mobileNavLink} onClick={toggleMenu}>Products</Link></li>
                    <li><Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
                    <li><Link href="/appointment" className={styles.mobileNavLink} onClick={toggleMenu}>Book Appointment</Link></li>
                </ul>
            </div>
        </nav>
    );
}
