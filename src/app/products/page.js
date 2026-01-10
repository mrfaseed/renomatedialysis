'use client';

import styles from './products.module.css';

const products = [
    {
        id: 1,
        title: 'Citric Acid Powder 500 gm & 1 Kg',
        description: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts.',
        image: '/products/Citric_Acid_Powder.png'
    },
    {
        id: 2,
        title: 'CITROMATE (Cleaning Fluid for Hemodialysis Machine)',
        description: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts.',
        image: '/products/CITROMATE.png'
    },
    {
        id: 3,
        title: 'DIAMATE (Reprocessing Cleaning Fluid for Dialyzer)',
        description: 'Dialyzers are not just reused, they are reprocessed. The reprocessing procedure involves cleaning, testing, filling your dialyzer with a sterilant (Diamate® Cold Sterilant), inspecting, labeling, storing and rinsing your dialyzer before it is reused for your next treatment.',
        image: '/products/DIAMATE.png'
    },
    {
        id: 4,
        title: 'Formaldehyde Solution I.P (34-37% W/V)',
        description: 'Formaldehyde can be useful as a disinfectant as it kills most bacteria and fungi (including their spores). It is used to produced killed vaccines. Formaldehyde are used in Hemodialysis Unit.',
        image: '/products/Formaldehyde_Solution_IP.png'
    },
    {
        id: 5,
        title: 'Hemodialysis Concentrated Acidic Solution – B.P. For Bicarbonate Dialysis',
        description: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:34:1.83 proportioning)',
        image: '/products/cane.png'
    },
    {
        id: 6,
        title: 'Hemodialysis Concentrated Acidic Solution – B.P. For Bicarbonate Dialysis',
        description: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:32.75:1.25 proportioning)',
        image: '/products/cane.png'
    },
    {
        id: 7,
        title: 'Hemodialysis Concentrated Acidic Solution – B.P. For Bicarbonate Dialysis',
        description: 'HEMODIALYSIS CONCENTRATED ACIDIC SOLUTION – BP For BICARBONATE DIALYSIS (1:34:1.83 proportioning)',
        image: '/products/cane.png'
    },
    {
        id: 8,
        title: 'Hemodialysis Concentrated Acidic Solution – B.P. For Bicarbonate Dialysis',
        description: 'HEMODIALYSIS CONCENTRATED ACIDIC SOLUTION – BP For BICARBONATE DIALYSIS (1:34:1.83 proportioning)',
        image: '/products/cane.png'
    },
    {
        id: 9,
        title: 'Hemodialysis Concentrated Acidic Solution – B.P. For Bicarbonate Dialysis',
        description: 'HEMODIALYSIS CONCENTRATED ACIDIC SOLUTION – BP For BICARBONATE DIALYSIS (1:34:1.83 proportioning)',
        image: '/products/cane.png'
    },
    {
        id: 10,
        title: 'Hydrogen Peroxide Solution',
        description: 'Hydrogen peroxide in dialysis water from this tank was detectable at a concentration of 30 mg/l. All four affected patients had been exposed to dialysiswater from this source. Water supplying in the water treatment plant was held in a separate tank that had not been treated with hydrogen peroxide',
        image: '/products/Hydrogen_Peroxide_Solution.png'
    },
    {
        id: 11,
        title: 'Sodium Bicarbonate IP',
        description: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonateanion (HCO3–). Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder.',
        image: '/products/Sodium_Bicarbonate_IP.png'
    },
    {
        id: 12,
        title: 'Sodium Bicarbonate IP and Sodium Chloride IP',
        description: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonateanion (HCO3–).',
        image: '/products/Sodium_Bicarbonate_IP_and_Sodium_Chloride_IP.png'
    },
    {
        id: 13,
        title: 'Sodium Hypochlorite – Bleach (5-6%)',
        description: 'All dialysis units must have written policies and procedures that deal with disinfection of the dialysis fluid path way of the Hemodialysis machine. These procedures are targeted to control bacterial contamination and have nothing to do with preventing blood borne infections.',
        image: '/products/SodiumHypochloriteBleach.png'
    }
];

export default function ProductsPage() {
    return (
        <div className={styles.pageBackground}>
            {/* Decorative Blur Orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-400/10 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-sky-300/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">

                {/* Header Section */}
                <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-px w-8 bg-blue-500"></span>
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Medical Grade Excellence</span>
                        <span className="h-px w-8 bg-blue-500"></span>
                    </div>
                    <h1 className={`${styles.headerTitle} text-5xl md:text-6xl font-extrabold tracking-tight`}>
                        Our Product Catalog
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Discover our premium range of dialysis consumables and sterilization fluids, ensuring the highest standards of safety and efficacy for patient care.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={styles.fadeInUp}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className={styles.productCard}>
                                <div className={styles.badge}>
                                    Premium
                                </div>

                                <div className={styles.imageContainer}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={styles.productImage}
                                    />
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.productTitle}>
                                        {product.title}
                                    </h3>
                                    <p className={styles.productDescription}>
                                        {product.description}
                                    </p>

                                    <button className={styles.actionButton}>
                                        <span>View Specifications</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <p className="text-slate-500 mb-6">Need bulk quantities or custom details?</p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Contact Sales Team
                    </a>
                </div>
            </div>
        </div>
    );
}
