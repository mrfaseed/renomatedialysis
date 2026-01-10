'use client';

import { ArrowRight, ShieldCheck, FileCheck, Activity, FlaskConical, Beaker, Hexagon, Component, Microscope } from 'lucide-react';
import styles from './products.module.css';

const products = [
    {
        id: 1,
        title: 'Citric Acid Powder 500 gm & 1 Kg',
        description: 'High-purity citric acid formulation for efficient descaling. Excellent removal of calcium and magnesium deposits from hemodialysis fluid pathways. Processed under strict GMP supervision.',
        image: '/products/Citric_Acid_Powder.png'
    },
    {
        id: 2,
        title: 'CITROMATE (Cleaning Fluid)',
        description: 'Specialized cleaning fluid for hemodialysis machines. Precisely formulated to remove organic and inorganic deposits, ensuring optimal machine hygiene and performance.',
        image: '/products/CITROMATE.png'
    },
    {
        id: 3,
        title: 'DIAMATE (Dialyzer Reprocessing Fluid)',
        description: 'Cold sterilant for dialyzer reprocessing. Includes cleaning, testing, and sterilization steps. Ensures safe reuse of dialyzers with validated efficacy against bacteria and spores.',
        image: '/products/DIAMATE.png'
    },
    {
        id: 4,
        title: 'Formaldehyde Solution I.P (34-37% W/V)',
        description: 'Broad-spectrum disinfectant. Effective against bacteria, fungi, and spores. Compliant with Indian Pharmacopoeia standards for use in hemodialysis unit disinfection.',
        image: '/products/Formaldehyde_Solution_IP.png'
    },
    {
        id: 5,
        title: 'Acidic Solution – Bicarbonate Dialysis (1:34)',
        description: 'Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:34:1.83. Formulated for standard bicarbonate dialysis treatments.',
        image: '/products/cane.png'
    },
    {
        id: 6,
        title: 'Acidic Solution – Bicarbonate Dialysis (1:32.75)',
        description: 'Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:32.75:1.25. Precise electrolyte composition for specific patient requirements.',
        image: '/products/cane.png'
    },
    {
        id: 7,
        title: 'Acidic Solution (DEXTROSE) – Bicarbonate',
        description: 'Hemodialysis Concentrated Acidic Solution with Dextrose – BP. Proportioning ratio 1:34:1.83. Supports glycemic management during dialysis.',
        image: '/products/cane.png'
    },
    {
        id: 8,
        title: 'Acidic Solution (Free Potassium) – Bicarbonate',
        description: 'Potassium-free Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:34:1.83. Indicated for patients with hyperkalemia.',
        image: '/products/cane.png'
    },
    {
        id: 9,
        title: 'Acidic Solution (Low Potassium) – Bicarbonate',
        description: 'Low Potassium Hemodialysis Concentrated Acidic Solution – BP. Proportioning ratio 1:34:1.83. Designed for controlled potassium removal.',
        image: '/products/cane.png'
    },
    {
        id: 10,
        title: 'Hydrogen Peroxide Solution',
        description: 'Chemical disinfectant for water treatment systems. Effective for biofilm removal and tank disinfection in dialysis water treatment plants.',
        image: '/products/Hydrogen_Peroxide_Solution.png'
    },
    {
        id: 11,
        title: 'Sodium Bicarbonate IP',
        description: 'Pharmaceutical grade Sodium Bicarbonate (NaHCO3). High purity crystalline powder for preparation of dialysis fluid. Compliant with IP standards.',
        image: '/products/Sodium_Bicarbonate_IP.png'
    },
    {
        id: 12,
        title: 'Sodium Bicarbonate IP & Sodium Chloride IP',
        description: 'Combined formulation of Sodium Bicarbonate and Sodium Chloride. Pharmaceutical grade salts for precise electrolyte balance in dialysis fluids.',
        image: '/products/Sodium_Bicarbonate_IP_and_Sodium_Chloride_IP.png'
    },
    {
        id: 13,
        title: 'Sodium Hypochlorite – Bleach (5-6%)',
        description: 'Disinfectant for bacterial control in hemodialysis fluid pathways. Effective surface and fluid path cleaner. 5-6% concentration for robust efficacy.',
        image: '/products/SodiumHypochloriteBleach.png'
    }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100 relative">

            {/* Background Chemistry Elements - Floating Black Technical Drawings */}
            <div className={styles.chemBackground}>
                {/* Top Left - Hexagon Structure */}
                <div className={`${styles.floatingIcon} ${styles.animDelay1}`} style={{ top: '10%', left: '5%' }}>
                    <Hexagon strokeWidth={1} size={120} />
                </div>

                {/* Top Right - Flask */}
                <div className={`${styles.floatingIcon} ${styles.animDelay2}`} style={{ top: '15%', right: '8%' }}>
                    <FlaskConical strokeWidth={1} size={100} />
                </div>

                {/* Middle Left - Beaker */}
                <div className={`${styles.floatingIcon} ${styles.animDelay3}`} style={{ top: '45%', left: '8%' }}>
                    <Beaker strokeWidth={1} size={90} />
                </div>

                {/* Middle Right - Molecule/Component */}
                <div className={`${styles.floatingIcon} ${styles.animDelay4}`} style={{ top: '50%', right: '12%' }}>
                    <Component strokeWidth={1} size={110} />
                </div>

                {/* Bottom Left - Microscope */}
                <div className={`${styles.floatingIcon} ${styles.animDelay5}`} style={{ bottom: '15%', left: '15%' }}>
                    <Microscope strokeWidth={1} size={95} />
                </div>

                {/* Bottom Right - Small Hexagon */}
                <div className={`${styles.floatingIcon} ${styles.animDelay1}`} style={{ bottom: '10%', right: '5%' }}>
                    <Hexagon strokeWidth={1} size={80} />
                </div>
            </div>

            <main className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-24">

                {/* Header Section - Clinical/Editorial */}
                <header className="max-w-4xl mb-24">
                    <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-slate-400"></span>
                        Medical Consumables Catalog
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.05]">
                        Advanced Dialysis Solutions for <br className="hidden md:block" />
                        <span className="text-slate-400">Clinical Excellence.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                        From high-purity cleaning fluids to precise hemodialysis concentrates.
                        Engineered for patient safety and operational efficiency in renal care facilities.
                    </p>
                </header>

                {/* Product Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <article key={product.id} className="group flex flex-col h-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl border border-slate-100/50">
                            {/* Image Container - Square, Neutral */}
                            <div className="relative aspect-square mb-6 bg-slate-50/50 border border-slate-100 rounded-t-xl overflow-hidden flex items-center justify-center p-8 transition-colors duration-300 group-hover:border-slate-300">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform ease-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col min-h-[160px] p-6 pt-0">
                                <div className="mb-auto">
                                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 pr-4 group-hover:text-blue-800 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="pt-6 mt-4 border-t border-slate-50">
                                    <span className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-800 transition-colors cursor-pointer group/cta">
                                        View Technical Specifications
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Authority / Trust Section */}
                <section className="mt-40 border-t border-slate-200 pt-24 bg-white/60 backdrop-blur-sm rounded-3xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-50/50 rounded-full border border-blue-100 text-blue-900 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-900">Certified Quality</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                                Manufactured in compliance with ISO 13485 and GMP standards. Ensuring consistent safety, sterility, and efficacy for every batch produced.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-50/50 rounded-full border border-blue-100 text-blue-900 mb-6">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-900">Regulatory Compliance</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                                Fully compliant with national and international medical device regulations. Comprehensive documentation and Certificates of Analysis (CoA) available on request.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-50/50 rounded-full border border-blue-100 text-blue-900 mb-6">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-900">Clinical Reliability</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                                Trusted by leading dialysis centers. Our formulations are meticulously designed to maximize dialyzer performance and ensure patient safety during treatment.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
