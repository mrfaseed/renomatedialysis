import React from 'react';
import styles from './privacy.module.css';

export const metadata = {
    title: 'Privacy Policy | Sri Ramakrishna\'s Renomate',
    description: 'Privacy Policy for Sri Ramakrishna\'s Renomate. Learn how we handle your data.',
};

export default function PrivacyPolicy() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Privacy Policy
                    </h1>
                    <p className={styles.lastUpdated}>Last Updated: 11 January 2026</p>
                </div>

                {/* Content */}
                <div className={styles.proseWrapper}>

                    <section>
                        <h3 className={styles.sectionTitle}>1. Introduction</h3>
                        <p>
                            This Privacy Policy explains how we handle personal information submitted through our website.
                            This website is intended for <strong>business and professional use only</strong>.
                        </p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>2. Information We Collect</h3>
                        <div className={styles.infoBox}>
                            <p className="mb-4">We <strong>do not automatically collect</strong> any personal data.</p>
                            <p className="mb-2">The <strong>only information we collect</strong> is what you <strong>voluntarily submit</strong> through our contact form, which may include:</p>
                            <ul className={styles.list}>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Message content</li>
                            </ul>
                            <p className={styles.infoSmall}>No other data is collected.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>3. How We Use the Information</h3>
                        <p>The information you provide is used <strong>solely</strong> to:</p>
                        <ul className={styles.list}>
                            <li>Respond to your inquiry</li>
                            <li>Communicate regarding business, partnership, or product-related matters</li>
                        </ul>
                        <p>We do <strong>not</strong> use this information for marketing without your consent.</p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>4. No Sensitive or Patient Data</h3>
                        <div className={styles.warningBox}>
                            <p className={styles.warningTitle}>This website does NOT collect:</p>
                            <ul className={styles.warningList}>
                                <li>Patient data</li>
                                <li>Medical records</li>
                                <li>Health information</li>
                                <li>Payment information</li>
                            </ul>
                            <p className={styles.warningFooter}>Please do not submit sensitive or confidential medical data through the contact form.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>5. Data Sharing</h3>
                        <p>We do <strong>not sell, rent, or trade</strong> personal information.</p>
                        <p className="mt-2">Your data is not shared with third parties except:</p>
                        <ul className={styles.list}>
                            <li>Where required by law or regulatory authorities</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>6. Data Retention</h3>
                        <p>Contact form data is retained <strong>only as long as necessary</strong> to respond to the inquiry or meet legal and regulatory obligations.</p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>7. Data Security</h3>
                        <p>We apply reasonable technical and organizational measures to protect submitted information from unauthorized access, disclosure, or misuse.</p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>8. Your Rights</h3>
                        <p>Depending on applicable laws, you may have the right to:</p>
                        <ul className={styles.list}>
                            <li>Request access to your data</li>
                            <li>Request correction or deletion</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>To exercise these rights, contact us using the details below.</p>
                    </section>

                    <section>
                        <h3 className={styles.sectionTitle}>9. Cookies and Tracking</h3>
                        <p>This website does <strong>not</strong> use tracking cookies or analytics tools.</p>
                    </section>

                    <section className={styles.contactSection}>
                        <h3 className={styles.contactTitle}>10. Contact Information</h3>
                        <div className={styles.contactGrid}>
                            <p>For privacy-related questions, contact:</p>
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

                    <section className={styles.footerSection}>
                        <h3 className={styles.footerSectionTitle}>11. Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>
                    </section>

                </div>
            </div>
        </div>
    );
}
