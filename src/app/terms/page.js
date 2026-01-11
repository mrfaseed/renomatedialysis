import React from 'react';

export const metadata = {
    title: 'Terms of Service | Sri Ramakrishna\'s Renomate',
    description: 'Terms and Conditions for Sri Ramakrishna\'s Renomate using our services.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-12 border-b border-slate-200 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-outfit">
                        Terms & Conditions
                    </h1>
                    <p className="text-slate-500 font-medium">Last Updated: 11 January 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-slate max-w-none prose-lg text-slate-700 space-y-12">

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h3>
                        <p>
                            By accessing and using this website, you agree to these Terms and Conditions.
                            If you do not agree, please do not use the website.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Website Purpose</h3>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
                            <p className="mb-2">This website is provided for <strong>informational and business purposes only</strong>.</p>
                            <p>It is intended for healthcare professionals, distributors, and business partners.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">3. No Medical Advice</h3>
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <p className="font-semibold text-amber-800 mb-2">Important Disclaimer:</p>
                            <p className="text-amber-900">
                                The content on this website does <strong>not</strong> constitute medical advice, diagnosis, or treatment.
                                Product use must always follow official documentation, regulatory approvals, and professional medical judgment.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">4. Eligibility</h3>
                        <p>
                            This website is not intended for patients or the general public.
                            By using this website, you confirm that you are accessing it in a professional or business capacity.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">5. Intellectual Property</h3>
                        <p>
                            All content, including text, images, logos, and designs, is the property of <strong>Sri Ramakrishna's Renomate</strong> and may not be copied, reproduced, or distributed without prior written permission.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h3>
                        <p>
                            We make reasonable efforts to ensure the accuracy of information on this website; however, we make no guarantees regarding completeness or accuracy.
                        </p>
                        <p className="mt-2">
                            We shall not be liable for any direct or indirect damages arising from the use of this website.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">7. External Links</h3>
                        <p>
                            This website may contain links to third-party websites. We are not responsible for the content or practices of those websites.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">8. Changes to These Terms</h3>
                        <p>
                            We may update these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">9. Governing Law</h3>
                        <p>
                            These Terms and Conditions shall be governed by and interpreted in accordance with the laws of <strong>India</strong>.
                        </p>
                    </section>

                    <section className="bg-slate-900 text-slate-100 p-8 rounded-2xl mt-12">
                        <h3 className="text-2xl font-bold text-white mb-6">10. Contact Information</h3>
                        <div className="space-y-4">
                            <p>For questions regarding these Terms, contact:</p>
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

                </div>
            </div>
        </div>
    );
}
