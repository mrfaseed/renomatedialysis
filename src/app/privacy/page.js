import React from 'react';

export const metadata = {
    title: 'Privacy Policy | Sri Ramakrishna\'s Renomate',
    description: 'Privacy Policy for Sri Ramakrishna\'s Renomate. Learn how we handle your data.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-12 border-b border-slate-200 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-outfit">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 font-medium">Last Updated: 11 January 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-slate max-w-none prose-lg text-slate-700 space-y-12">

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h3>
                        <p>
                            This Privacy Policy explains how we handle personal information submitted through our website.
                            This website is intended for <strong>business and professional use only</strong>.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h3>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <p className="mb-4">We <strong>do not automatically collect</strong> any personal data.</p>
                            <p className="mb-2">The <strong>only information we collect</strong> is what you <strong>voluntarily submit</strong> through our contact form, which may include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Message content</li>
                            </ul>
                            <p className="mt-4 text-sm text-slate-500 italic">No other data is collected.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use the Information</h3>
                        <p>The information you provide is used <strong>solely</strong> to:</p>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                            <li>Respond to your inquiry</li>
                            <li>Communicate regarding business, partnership, or product-related matters</li>
                        </ul>
                        <p>We do <strong>not</strong> use this information for marketing without your consent.</p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">4. No Sensitive or Patient Data</h3>
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <p className="font-semibold text-amber-800 mb-2">This website does NOT collect:</p>
                            <ul className="list-disc pl-5 text-amber-700">
                                <li>Patient data</li>
                                <li>Medical records</li>
                                <li>Health information</li>
                                <li>Payment information</li>
                            </ul>
                            <p className="mt-4 font-bold text-amber-900">Please do not submit sensitive or confidential medical data through the contact form.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">5. Data Sharing</h3>
                        <p>We do <strong>not sell, rent, or trade</strong> personal information.</p>
                        <p className="mt-2">Your data is not shared with third parties except:</p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Where required by law or regulatory authorities</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">6. Data Retention</h3>
                        <p>Contact form data is retained <strong>only as long as necessary</strong> to respond to the inquiry or meet legal and regulatory obligations.</p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">7. Data Security</h3>
                        <p>We apply reasonable technical and organizational measures to protect submitted information from unauthorized access, disclosure, or misuse.</p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">8. Your Rights</h3>
                        <p>Depending on applicable laws, you may have the right to:</p>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                            <li>Request access to your data</li>
                            <li>Request correction or deletion</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>To exercise these rights, contact us using the details below.</p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">9. Cookies and Tracking</h3>
                        <p>This website does <strong>not</strong> use tracking cookies or analytics tools.</p>
                    </section>

                    <section className="bg-slate-900 text-slate-100 p-8 rounded-2xl mt-12">
                        <h3 className="text-2xl font-bold text-white mb-6">10. Contact Information</h3>
                        <div className="space-y-4">
                            <p>For privacy-related questions, contact:</p>
                            <div>
                                <span className="block text-slate-400 text-sm uppercase tracking-wider font-semibold">Email</span>
                                <a href="mailto:ramakrishnanrenomate@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">ramakrishnanrenomate@gmail.com</a>
                            </div>
                            <div>
                                <span className="block text-slate-400 text-sm uppercase tracking-wider font-semibold">Company</span>
                                <p className="text-white font-medium">Sri Ramakrishna's Renomate</p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-8 text-sm text-slate-500">
                        <h3 className="text-lg font-bold text-slate-700 mb-2">11. Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>
                    </section>

                </div>
            </div>
        </div>
    );
}
