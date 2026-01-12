import HLSPlayer from '../../components/HLSPlayer';
import ChemistryBackground from '../../components/ChemistryBackground';
import styles from './gallery.module.css';

export const metadata = {
    title: 'Gallery - Renomate Dialysis',
    description: 'View our product demonstrations and gallery.',
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
                        src="/hls/index.m3u8"
                        poster="/image7.png" /* Using logo or any image as poster for now, user can change */
                    />
                </div>
            </div>
        </div>
    );
}
