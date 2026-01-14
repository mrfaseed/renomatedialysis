import HLSPlayer from '../../components/HLSPlayer';
import ChemistryBackground from '../../components/ChemistryBackground';
import Image from 'next/image';
import styles from './gallery.module.css';

export const metadata = {
    title: 'Gallery - Renomate Dialysis',
    description: 'View Our product demonstrations and gallery.',
};

export default function GalleryPage() {
    return (
        <div className={styles.pageContainer}>
            <ChemistryBackground />
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Product <span className={styles.highlight}>Gallery</span>
                    </h1>
                    <p className={styles.description}>
                        Experience our advanced dialysis solutions in action. Watch the demonstration below to see our commitment to quality and innovation.
                    </p>
                </div>

                {/* Video Player Section */}
                <div className={styles.playerContainer}>
                    <HLSPlayer
                        src="https://storage.googleapis.com/renomatedialysis.firebasestorage.app/mainhls/index.m3u8"
                        fallbackSrc="/hls/index.m3u8"
                        poster="/image7.png" /* Using logo or any image as poster for now, user can change */
                    />
                </div>

                {/* More About Us - Bento Grid Section */}
                <div className={styles.moreAboutSection}>
                    <h2 className={styles.sectionTitle}>
                        More <span className={styles.highlight}>About Us</span>
                    </h2>

                    <div className={styles.bentoGrid}>
                        {/* 1. Wide Item (Top, 2 cols) */}
                        <div className={`${styles.bentoItem} ${styles.itemWide}`}>
                            <Image
                                src="/gallery-images/5U1A3644.JPG"
                                alt="Advanced Processing"
                                fill
                                className={styles.bentoImage}
                            />
                            <div className={styles.bentoOverlay}>
                                <span>Advanced Processing</span>
                            </div>
                        </div>

                        {/* 2. Standard Item */}
                        <div className={styles.bentoItem}>
                            <Image
                                src="/gallery-images/5U1A3618.JPG"
                                alt="Laboratory Testing"
                                fill
                                className={styles.bentoImage}
                            />
                        </div>

                        {/* 3. Standard Item */}
                        <div className={styles.bentoItem}>
                            <Image
                                src="/gallery-images/5U1A3607.JPG"
                                alt="Quality Control"
                                fill
                                className={styles.bentoImage}
                            />
                        </div>

                        {/* 4. Large Item (Middle, 2x2) */}
                        <div className={`${styles.bentoItem} ${styles.itemLarge}`}>
                            <Image
                                src="/gallery-images/5U1A3640.JPG"
                                alt="Production Line"
                                fill
                                className={styles.bentoImage}
                            />
                            <div className={styles.bentoOverlay}>
                                <span>Production Excellence</span>
                            </div>
                        </div>

                        {/* 5. Tall Item (Right, 1x2) */}
                        <div className={`${styles.bentoItem} ${styles.itemTall}`}>
                            <Image
                                src="/gallery-images/5U1A3599.JPG"
                                alt="Storage & Logistics"
                                fill
                                className={styles.bentoImage}
                            />
                            <div className={styles.bentoOverlay}>
                                <span>Global Standards</span>
                            </div>
                        </div>

                        {/* 6. Standard Item */}
                        <div className={styles.bentoItem}>
                            <Image
                                src="/gallery-images/5U1A3586.JPG" /* Reuse a good one */
                                alt="Facility View"
                                fill
                                className={styles.bentoImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
