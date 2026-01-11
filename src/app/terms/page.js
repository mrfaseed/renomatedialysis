import React from 'react';
import styles from './terms.module.css';

export const metadata = {
    title: 'Terms of Service | Sri Ramakrishna\'s Renomate',
    description: 'Terms and Conditions for Sri Ramakrishna\'s Renomate using our services.',
};

export default function TermsOfService() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Terms & Conditions
                    </h1>
                    <p className={styles.lastUpdated}>Last Updated: 11 January 2026</p>
                </div>

                {/* Content */}
                <div className={styles.proseWrapper}>

                    <section>
                        <h3 className={styles.sectionTitle}>1. Introduction</h3>
                        <p>
                            By accessing and using this website, you agree to these Terms and Conditions.
                            If you do not agree, please do not use the website.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>2. Website Purpose</h3>
                        <div className={styles.infoBox}>
                            <p>This website is provided for <strong>informational and business purposes only</strong>.</p>
                            <p>It is intended for healthcare professionals, distributors, and business partners.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>3. No Medical Advice</h3>
                        <div className={styles.warningBox}>
                            <p className={styles.warningTitle}>Important Disclaimer:</p>
                            <p className={styles.warningText}>
                                The content on this website does <strong>not</strong> constitute medical advice, diagnosis, or treatment.
                                Product use must always follow official documentation, regulatory approvals, and professional medical judgment.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>4. Eligibility</h3>
                        <p>
                            This website is not intended for patients or the general public.
                            By using this website, you confirm that you are accessing it in a professional or business capacity.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>5. Intellectual Property</h3>
                        <p>
                            All content, including text, images, logos, and designs, is the property of <strong>Sri Ramakrishna's Renomate</strong> and may not be copied, reproduced, or distributed without prior written permission.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>6. Limitation of Liability</h3>
                        <p>
                            We make reasonable efforts to ensure the accuracy of information on this website; however, we make no guarantees regarding completeness or accuracy.
                        </p>
                        <p>
                            We shall not be liable for any direct or indirect damages arising from the use of this website.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>7. External Links</h3>
                        <p>
                            This website may contain links to third-party websites. We are not responsible for the content or practices of those websites.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>8. Changes to These Terms</h3>
                        <p>
                            We may update these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>9. Governing Law</h3>
                        <p>
                            These Terms and Conditions shall be governed by and interpreted in accordance with the laws of <strong>India</strong>.
                        </p>
                    </section>

                    <section className={styles.contactSection}>
                        <h3 className={styles.contactTitle}>10. Contact Information</h3>
                        <div className={styles.contactGrid}>
                            <p>For questions regarding these Terms, contact:</p>
                            <div>
                                <span className={styles.contactLabel}>Email</span>
                                <a href="mailto:ramakrishnanrenomate@gmail.com" className={styles.contactLink}>ramakrishnanrenomate@gmail.com</a>
                            </div>
                            <div>
                                <span className={styles.contactLabel}>Company</span>
                                <p className={styles.companyName}>Sri Ramakrishna's Renomate</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
