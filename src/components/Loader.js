'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Premium delay to show off the loader
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
        }, 2500); // 2.5 seconds total load time

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className={styles.loaderContainer}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {/* Apple Style Spinner */}
                    <div className={styles.spinner}>
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className={styles.spinnerBlade}></div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
