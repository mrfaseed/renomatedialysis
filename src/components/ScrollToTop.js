'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Visibility Check
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Progress Calculation
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Circle params
    const radius = 20;
    const stroke = 3;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <button
            className={`${styles.scrollToTopBtn} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg
                height={radius * 2.5}
                width={radius * 2.5}
                className={styles.progressRing}
            >
                {/* Background Ring */}
                <circle
                    stroke="rgba(37, 99, 235, 0.1)"
                    strokeWidth={stroke}
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius * 1.25}
                    cy={radius * 1.25}
                />
                {/* Progress Ring */}
                <circle
                    stroke="#2563eb"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius * 1.25}
                    cy={radius * 1.25}
                    className={styles.progressCircle}
                />
            </svg>
            <ArrowUp className={styles.icon} />
        </button>
    );
}
