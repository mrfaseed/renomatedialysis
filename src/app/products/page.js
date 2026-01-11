'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, FileCheck, Activity, FlaskConical, Beaker, Hexagon, Component, Microscope, ChevronDown, CheckCircle2, AlertCircle, Package, Settings, HelpCircle } from 'lucide-react';
import styles from './products.module.css';

const products = [
    {
        id: 1,
        title: 'Citric Acid Powder',
        subtitle: 'Effective Descaling Agent for Dialysis & Medical Water Systems',
        tag: 'Descaling Agent',
        description: 'Citric Acid Powder is a high-quality descaling agent used to clean dialysis machines and medical water systems. It effectively removes hard water scale and mineral buildup, helping equipment remain clean, safe, and efficient for long-term use.',
        overview: 'Citric Acid Powder is specially formulated to remove limescale and mineral deposits from dialysis machines, RO water systems, and associated pipelines. Regular use helps maintain proper functioning, improves efficiency, and extends the life of medical equipment.',
        fullDescription: 'Citric Acid Powder is used to clean and remove scale from dialysis machines and water systems. It helps remove hard water deposits and mineral buildup, keeping the equipment clean and working properly.',
        image: '/products/Citric_Acid_Powder.png',
        detailImage: '/products/Citric_v3.png',
        specs: ['Purity: >99%', 'Form: Crystalline Powder', 'Packaging: 500g / 1kg', 'GMP Certified'],
        whyUsed: [
            'Removes limescale and mineral deposits',
            'Keeps dialysis machines and RO systems clean',
            'Helps machines work smoothly and efficiently',
            'Safe to use when used as instructed',
            'Environment-friendly and easy to handle'
        ],
        whereUsed: [
            'Dialysis machines',
            'Dialysis RO water systems',
            'Pipes, tanks, and water lines',
            'Medical water circulation systems'
        ],
        howToUse: [
            'Mix the required amount of citric acid powder with water.',
            'Run or apply the solution through the system to remove scale.',
            'After cleaning, rinse thoroughly with clean water.'
        ],
        packSizes: ['500 g', '1 kg'],
        safety: [
            'Store in a dry place',
            'Avoid contact with eyes and skin',
            'Keep away from children',
            'Use gloves while handling'
        ],
        benefit: 'Regular use helps keep dialysis equipment clean, safe, and long-lasting.'
    },
    {
        id: 2,
        title: 'CITROMATE',
        tag: 'Cleaning Solution',
        description: 'Specialized cleaning fluid for hemodialysis machines. Precisely formulated to remove organic and inorganic deposits.',
        fullDescription: 'CITROMATE is a specialized cleaning fluid designed for hemodialysis machines. It helps remove organic and inorganic deposits, keeping the machine clean, safe, and working efficiently.',
        image: '/products/CITROMATE.png',
        detailImage: '/products/Citromate_canister_v1.png',
        specs: ['Application: Machine Cleaning', 'pH: Multi-stage stable', 'Efficiency: High', 'Residue-free'],
        whyUsed: [
            'Effectively cleans dialysis machines',
            'Removes organic residues and mineral deposits',
            'Helps maintain proper hygiene standards',
            'Improves machine performance',
            'Suitable for regular cleaning use'
        ],
        whereUsed: [
            'Hemodialysis machines',
            'Dialysis fluid pathways',
            'Internal circulation systems of dialysis equipment'
        ],
        howToUse: [
            'Use CITROMATE as per the dialysis machine manufacturer’s cleaning instructions.',
            'Run the solution through the system and rinse thoroughly with clean water before use.'
        ],
        packSizes: ['500 g', '1 kg'],
        benefit: 'Regular use of CITROMATE helps ensure clean and hygienic machines, smooth operation, and longer equipment life.',
        safety: [
            'Use protective gloves while handling',
            'Avoid contact with eyes and skin',
            'Store in a cool, dry place',
            'Keep away from children'
        ]
    },
    {
        id: 3,
        title: 'DIAMATE',
        tag: 'Cold Sterilant',
        description: 'Cold sterilant for dialyzer reprocessing. Includes cleaning, testing, and sterilization steps.',
        fullDescription: 'DIAMATE is a specialized cold sterilant solution designed for dialyzer reprocessing. It helps sterilize and disinfect dialyzers safely, removing bacteria and other contaminants while maintaining dialyzer performance.',
        image: '/products/DIAMATE.png',
        detailImage: '/products/Diamate_canister_v2_match_acid.png',
        specs: ['Type: Peracetic Acid based', 'Usage: Reprocessing', 'Sterilization: High-level', 'Safe Reuse'],
        whyUsed: [
            'Provides safe and effective cold sterilization',
            'Kills bacteria and disinfects dialyzers thoroughly',
            'Maintains dialyzer performance and longevity',
            'Easy to use and handle'
        ],
        whereUsed: [
            'Dialyzer reprocessing in hemodialysis clinics',
            'Dialysis fluid pathways and tubing',
            'Medical water circulation systems'
        ],
        howToUse: [
            'Use DIAMATE as per the dialyzer manufacturer’s instructions.',
            'Ensure proper contact time and rinse thoroughly with clean water before reuse.'
        ],
        packSizes: ['500 ml', '1 Liter'],
        safety: [
            'Use protective gloves and follow standard precautions',
            'Avoid contact with eyes and skin',
            'Store in a cool, dry place',
            'Keep away from children'
        ]
    },
    {
        id: 4,
        title: 'Formaldehyde Solution',
        tag: 'Strong Disinfectant',
        description: 'Powerful disinfectant for medical and laboratory use. I.P Grade (34-37% W/V).',
        fullDescription: 'Formaldehyde Solution I.P is a strong disinfectant widely used in medical and laboratory settings to sterilize and disinfect equipment, surfaces, and instruments. It effectively eliminates bacteria, viruses, and fungi, ensuring a safe and hygienic environment.',
        image: '/products/Formaldehyde_Solution_IP.png',
        detailImage: '/products/Formaldehyde_v5_blue_full.png',
        specs: ['Grade: I.P', 'Concentration: 34-37% W/V', 'Efficacy: Broad-spectrum', 'Usage: External only'],
        whyUsed: [
            'Strong and effective disinfectant',
            'Kills bacteria, viruses, and fungi',
            'Maintains high hygiene standards in medical environments',
            'Suitable for sterilization of equipment and instruments'
        ],
        whereUsed: [
            'Disinfecting dialysis and medical equipment',
            'Sterilizing lab instruments and surfaces',
            'Maintaining hygiene in clinics and hospitals'
        ],
        howToUse: [
            'Use as per standard medical or manufacturer instructions.',
            'Ensure proper ventilation and wear protective gloves and eyewear.',
            'Rinse equipment thoroughly if required before reuse.'
        ],
        packSizes: ['500 ml', '1 Liter'],
        safety: [
            'Highly toxic and corrosive – handle with care',
            'Avoid direct contact with skin and eyes',
            'Use in a well-ventilated area',
            'Keep out of reach of children'
        ]
    },
    {
        id: 5,
        title: 'Acid Concentrate – Bicarbonate Dialysis (1:34)',
        tag: 'Acid Concentrate',
        description: 'Hemodialysis Concentrated Acidic Solution for bicarbonate dialysis treatments. 1:34 proportioning ratio.',
        fullDescription: 'This acid concentrate solution is used in bicarbonate dialysis to help prepare dialysis fluid. It ensures proper acid-base balance and safe dialysis treatment for patients.',
        image: '/products/cane.png',
        detailImage: '/products/Acid_Concentrate_1_34_v1.png',
        specs: ['Ratio: 1:34', 'Grade: BP Standard', 'Form: Liquid', 'Electrolyte Balanced'],
        whyUsed: [
            'Maintains correct acid-base balance in dialysis fluid',
            'Ensures safe and effective hemodialysis',
            'Compatible with standard dialysis machines',
            'Easy to mix and handle'
        ],
        whereUsed: [
            'Bicarbonate dialysis preparation',
            'Dialysis fluid mixing in hemodialysis clinics',
            'Ensuring safe patient treatment during dialysis'
        ],
        howToUse: [
            'Mix with bicarbonate solution as per the 1:34 ratio',
            'Follow dialysis machine manufacturer guidelines for safe usage',
            'Use protective gloves while handling'
        ],
        packSizes: ['5 Liters', '20 Liters'],
        safety: [
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ]
    },
    {
        id: 6,
        title: 'Acid Concentrate – Bicarbonate Dialysis (1:32.75)',
        tag: 'Acid Concentrate',
        description: 'Hemodialysis Concentrated Acidic Solution for bicarbonate dialysis. 1:32.75 proportioning ratio.',
        fullDescription: 'This acid concentrate solution is used in bicarbonate dialysis to prepare the dialysis fluid. It helps maintain the proper acid-base balance, ensuring safe and effective dialysis treatment for patients.',
        image: '/products/cane.png',
        detailImage: '/products/Acid_Concentrate_1_32_75_v1.png',
        specs: ['Ratio: 1:32.75', 'Grade: BP Standard', 'Selection: Patient Specific', 'High Pure'],
        whyUsed: [
            'Maintains correct acid-base balance in dialysis fluid',
            'Ensures safe and efficient hemodialysis',
            'Compatible with standard dialysis machines',
            'Easy to mix and handle'
        ],
        whereUsed: [
            'Bicarbonate dialysis preparation',
            'Mixing dialysis fluid in hemodialysis machines',
            'Ensuring safe patient treatment'
        ],
        howToUse: [
            'Mix with bicarbonate solution as per the 1:32.75 ratio',
            'Follow the dialysis machine manufacturer’s instructions',
            'Use protective gloves while handling'
        ],
        packSizes: ['5 Liters', '20 Liters'],
        safety: [
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ]
    },
    {
        id: 7,
        title: 'Acid Concentrate – Acidic Solution (DEXTROSE) – Bicarbonate',
        tag: 'Acid Concentrate',
        description: 'Hemodialysis Concentrated Acidic Solution with Dextrose for bicarbonate dialysis treatments.',
        fullDescription: 'This acid concentrate with dextrose is used in bicarbonate dialysis to prepare dialysis fluid. It helps maintain the proper acid-base balance and energy supply during dialysis, ensuring safe and effective treatment.',
        image: '/products/cane.png',
        detailImage: '/products/Acid_Concentrate_Dextrose_v1.png',
        specs: ['Content: Dextrose Added', 'Ratio: 1:34', 'Clinical: Glycemic Support', 'Pure Grade'],
        whyUsed: [
            'Maintains correct acid-base balance in dialysis fluid',
            'Provides energy support through dextrose',
            'Ensures safe and efficient dialysis',
            'Easy to mix and handle'
        ],
        whereUsed: [
            'Preparing bicarbonate dialysis fluid',
            'Dialysis fluid mixing in hemodialysis machines',
            'Supporting safe patient treatment during dialysis'
        ],
        howToUse: [
            'Mix with bicarbonate solution as per dialysis machine instructions',
            'Follow manufacturer’s guidelines for safe use',
            'Use protective gloves while handling'
        ],
        packSizes: ['5 Liters', '20 Liters'],
        safety: [
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ]
    },
    {
        id: 8,
        title: 'Specialty Acid – Acidic Solution (Free Potassium) – Bicarbonate',
        tag: 'Specialty Acid',
        description: 'Potassium-free Acidic Solution for cases where free potassium is not required.',
        fullDescription: 'This specialty acid concentrate is designed for bicarbonate dialysis where free potassium is not required. It helps maintain the proper acid-base balance in dialysis fluid, ensuring safe and effective treatment for patients.',
        image: '/products/cane.png',
        detailImage: '/products/Acid_Concentrate_Free_Potassium_v1.png',
        specs: ['Potassium: 0 mEq/L', 'Ratio: 1:34', 'Case: Hyperkalemia', 'Precise Mix'],
        whyUsed: [
            'Maintains correct acid-base balance',
            'Suitable for dialysis patients needing low/no potassium',
            'Ensures safe and efficient hemodialysis',
            'Easy to mix and handle'
        ],
        whereUsed: [
            'Preparing bicarbonate dialysis fluid without potassium',
            'Dialysis fluid mixing in hemodialysis machines',
            'Safe treatment of patients with potassium restrictions'
        ],
        howToUse: [
            'Mix with bicarbonate solution as per dialysis machine instructions',
            'Follow the manufacturer’s guidelines for safe use',
            'Use protective gloves while handling'
        ],
        packSizes: ['5 Liters', '20 Liters'],
        safety: [
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ]
    },
    {
        id: 9,
        title: 'Specialty Acid – Acidic Solution (Low Potassium) – Bicarbonate',
        tag: 'Specialty Acid',
        description: 'Low Potassium Acidic Solution for patients requiring controlled potassium removal.',
        fullDescription: 'This specialty acid concentrate is used in bicarbonate dialysis for patients who require low potassium in their dialysis fluid. It ensures the proper acid-base balance while providing safe and effective dialysis treatment.',
        image: '/products/cane.png',
        detailImage: '/products/Acid_Concentrate_Low_Potassium_v1.png',
        specs: ['Potassium: Low Conc.', 'Ratio: 1:34', 'Usage: Controlled Removal', 'Standard Mix'],
        whyUsed: [
            'Maintains correct acid-base balance',
            'Suitable for patients needing low potassium dialysis fluid',
            'Ensures safe and efficient hemodialysis',
            'Easy to mix and handle'
        ],
        whereUsed: [
            'Preparing bicarbonate dialysis fluid with low potassium',
            'Dialysis fluid mixing in hemodialysis machines',
            'Safe treatment of patients with potassium restrictions'
        ],
        howToUse: [
            'Mix with bicarbonate solution as per dialysis machine instructions',
            'Follow manufacturer’s guidelines for safe use',
            'Use protective gloves while handling'
        ],
        packSizes: ['5 Liters', '20 Liters'],
        safety: [
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ]
    },
    {
        id: 10,
        title: 'Hydrogen Peroxide Solution',
        tag: 'Water Treatment',
        description: 'Disinfectant for dialysis water systems. Effectively removes bacteria and organic impurities.',
        fullDescription: 'Hydrogen Peroxide Solution is used in dialysis water treatment to disinfect and purify water, removing bacteria and organic contaminants. It helps ensure safe, clean, and high-quality water for hemodialysis.',
        image: '/products/Hydrogen_Peroxide_Solution.png',
        detailImage: '/products/Hydrogen_Peroxide_v1.png',
        specs: ['Type: H2O2 Solution', 'Usage: Biofilm Removal', 'Application: Water Plants', 'High Purity'],
        whyUsed: [
            'Effectively disinfects dialysis water',
            'Removes bacteria and organic impurities',
            'Ensures safe and hygienic water for dialysis',
            'Supports smooth dialysis machine operation'
        ],
        whereUsed: [
            'Water purification in dialysis clinics',
            'RO system maintenance and cleaning',
            'Maintaining safe dialysis fluid preparation'
        ],
        howToUse: [
            'Add or circulate the solution as per water treatment guidelines',
            'Follow standard concentration and contact time',
            'Rinse thoroughly if required before use'
        ],
        packSizes: ['500 ml', '1 Liter', '5 Liters'],
        safety: [
            'Handle with care – avoid skin and eye contact',
            'Use protective gloves while handling',
            'Store in a cool, dry place',
            'Keep away from children'
        ]
    },
    {
        id: 11,
        title: 'Bicarb Powder – Sodium Bicarbonate IP',
        tag: 'Bicarb Powder',
        description: 'Pharmaceutical grade Sodium Bicarbonate (NaHCO3) for preparation of dialysis fluid.',
        fullDescription: 'Sodium Bicarbonate (Bicarb Powder) is used in bicarbonate dialysis to prepare the dialysis fluid. It helps maintain the acid-base balance in the fluid, ensuring safe and effective treatment for patients.',
        image: '/products/Sodium_Bicarbonate_IP.png',
        detailImage: '/products/Sodium_Bicarbonate_IP_v1.png',
        specs: ['Grade: Pharmaceutical IP', 'Form: Crystalline', 'Purity: High', 'Usage: Fluid Preparation'],
        whyUsed: [
            'Maintains correct acid-base balance in dialysis fluid',
            'Ensures safe and smooth hemodialysis',
            'Compatible with standard dialysis machines',
            'Easy to mix and handle'
        ],
        whereUsed: [
            'Preparing bicarbonate dialysis fluid',
            'Dialysis fluid mixing in hemodialysis machines',
            'Safe treatment of patients during dialysis'
        ],
        howToUse: [
            'Dissolve the required quantity of sodium bicarbonate in water as per dialysis guidelines',
            'Follow dialysis machine manufacturer instructions',
            'Use protective gloves while handling'
        ],
        packSizes: ['500 g', '1 kg', '5 kg'],
        safety: [
            'Store in a cool, dry place',
            'Avoid contact with eyes',
            'Keep away from children'
        ]
    },
    {
        id: 12,
        title: 'Bicarb Mix – Sodium Bicarbonate IP & Sodium Chloride IP',
        subtitle: 'Dual-Electrolyte Formulation for Precise Dialysis Fluid Preparation',
        tag: 'Bicarb Mix',
        description: 'Pharmaceutical grade combined formulation of Sodium Bicarbonate and Sodium Chloride.',
        overview: 'Bicarb Mix is a specialized combination of high-purity Sodium Bicarbonate and Sodium Chloride, designed to simplify the preparation of bicarbonate dialysis fluid. This pre-mixed formulation ensures precise electrolyte ratios, reducing preparation time and minimizing the risk of mixing errors in clinical settings.',
        fullDescription: 'Bicarb Mix is a combined formulation of Sodium Bicarbonate and Sodium Chloride used in dialysis fluid preparation. It ensures precise electrolyte balance, supporting safe and effective hemodialysis.',
        image: '/products/Sodium_Bicarbonate_IP_and_Sodium_Chloride_IP.png',
        detailImage: '/products/Bicarb_Mix_Detail_v1.png',
        specs: ['Grade: IP Standards', 'Components: Salt + Bicarb', 'Mixing: Precise', 'Dialysis Core'],
        whyUsed: [
            'Maintains correct electrolyte balance in dialysis fluid',
            'Ensures safe and efficient dialysis treatment',
            'Pharmaceutical grade salts for high quality and purity',
            'Easy to mix and handle',
            'Reduces risk of mixing errors'
        ],
        whereUsed: [
            'Preparing bicarbonate dialysis fluid',
            'Dialysis fluid mixing in hemodialysis machines',
            'Supporting patient safety and treatment efficiency'
        ],
        howToUse: [
            'Dissolve the required quantity in water as per dialysis guidelines',
            'Follow dialysis machine manufacturer instructions',
            'Use protective gloves while handling'
        ],
        packSizes: ['500 g', '1 kg', '5 kg'],
        safety: [
            'Store in a cool, dry place',
            'Avoid contact with eyes',
            'Keep away from children'
        ],
        benefit: 'Ensures precise electrolyte balance for safer patient outcomes.'
    },
    {
        id: 13,
        title: 'Sodium Hypochlorite – Bleach (5–6%)',
        subtitle: 'High-Level Disinfectant for Medical Hygiene & Water Systems',
        tag: 'Disinfectant',
        description: 'Powerful disinfectant for dialysis equipment, surfaces, and water systems. 5–6% concentration.',
        overview: 'Sodium Hypochlorite (Bleach) at 5–6% concentration is a critical disinfectant used to maintain the highest levels of hygiene in dialysis facilities. It is highly effective against a broad spectrum of pathogens, making it ideal for the sanitation of equipment surfaces and the disinfection of water treatment systems to prevent microbial growth.',
        fullDescription: 'Sodium Hypochlorite is a powerful disinfectant used to clean and sanitize dialysis equipment, surfaces, and water systems. It effectively removes bacteria, viruses, and other contaminants, ensuring a safe and hygienic environment.',
        image: '/products/SodiumHypochloriteBleach.png',
        detailImage: '/products/Sodium_Hypochlorite_Bleach_Detail.jpg',
        specs: ['Conc: 5–6%', 'Role: Bacterial Control', 'Usage: Surface/Fluid path', 'Robust Efficacy'],
        whyUsed: [
            'Strong and effective disinfectant',
            'Kills bacteria, viruses, and fungi',
            'Maintains high hygiene standards in dialysis and medical facilities',
            'Easy to use and handle',
            'Cost-effective sanitation solution'
        ],
        whereUsed: [
            'Disinfecting dialysis machines and equipment',
            'Sanitizing water treatment systems',
            'Cleaning surfaces in dialysis clinics and hospitals'
        ],
        howToUse: [
            'Dilute as per recommended concentration guidelines',
            'Apply on surfaces or circulate through systems as needed',
            'Follow safety precautions and rinse thoroughly if required'
        ],
        packSizes: ['500 ml', '1 Liter', '5 Liters'],
        safety: [
            'Handle with care – it is corrosive',
            'Avoid contact with skin and eyes',
            'Use protective gloves and eyewear while handling',
            'Store in a cool, dry place, away from children'
        ],
        benefit: 'Ensures a sterile and safe clinical environment for renal care.'
    },
    {
        id: 14,
        title: 'RENOCLEAN – Cold Sterilant',
        subtitle: 'Eco-Friendly High-Level Disinfectant for Dialyzer Reprocessing',
        tag: 'Cold Sterilant',
        description: 'Specialized cold sterilant for dialyzer reprocessing. Effective pathogen elimination.',
        overview: 'RENOCLEAN is an advanced peracetic acid-based cold sterilant specifically formulated for the safe reprocessing of dialyzers. It offers high-level disinfection, rapidly eliminating bacteria, viruses, and fungi while being eco-friendly and biodegradable. Its stable formulation ensures consistent performance for every use.',
        fullDescription: 'RENOCLEAN is a specialized cold sterilant solution designed for dialyzer reprocessing. It helps sterilize and disinfect dialyzers effectively, removing bacteria and other contaminants while maintaining dialyzer performance and patient safety.',
        image: '/products/cane.png',
        detailImage: '/products/RENOCLEAN_Detail.jpg',
        specs: ['Base: Peracetic Acid', 'Nature: Eco-friendly', 'Efficacy: Pathogen killer', 'Stability: High'],
        whyUsed: [
            'Provides effective cold sterilization',
            'Kills bacteria and disinfects dialyzers thoroughly',
            'Maintains dialyzer performance and longevity',
            'Eco-friendly and biodegradable',
            'Stable shelf life'
        ],
        whereUsed: [
            'Dialyzer reprocessing in hemodialysis clinics',
            'Dialysis fluid pathways and tubing',
            'Ensuring safe and hygienic dialysis treatment'
        ],
        howToUse: [
            'Use as per the dialyzer manufacturer’s instructions',
            'Ensure proper contact time for sterilization',
            'Rinse dialyzers thoroughly with clean water before reuse'
        ],
        packSizes: ['500 ml', '1 Liter'],
        safety: [
            'Use protective gloves while handling',
            'Avoid contact with eyes and skin',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ],
        benefit: 'Safe and sustainable sterilization for high-quality renal care.'
    }
];

export default function ProductsPage() {
    const [activeProductId, setActiveProductId] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productRefs = useRef({});
    const detailViewRef = useRef(null);

    useEffect(() => {
        if (selectedProduct) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            document.title = `${selectedProduct.title} | Renomate`;
        } else {
            document.title = 'Our Products | Renomate';
        }
    }, [selectedProduct]);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleBack = () => {
        const idToScrollTo = selectedProduct?.id;
        setSelectedProduct(null);
        setTimeout(() => {
            if (idToScrollTo && productRefs.current[idToScrollTo]) {
                productRefs.current[idToScrollTo].scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        }, 50);
    };

    const scrollToProduct = (id) => {
        const element = productRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.chemBackground}>
                <div className={`${styles.floatingIcon} ${styles.animDelay1}`}></div>
                <div className={`${styles.floatingIcon} ${styles.animDelay2}`}></div>
                <div className={`${styles.floatingIcon} ${styles.animDelay3}`}></div>
                <div className={`${styles.floatingIcon} ${styles.animDelay4}`}></div>
                <div className={`${styles.floatingIcon} ${styles.animDelay5}`}></div>
                <div className={`${styles.floatingIcon} ${styles.animDelay6}`}></div>
            </div>

            <main className={styles.mainContent}>


                <AnimatePresence mode="wait">
                    {!selectedProduct ? (
                        <motion.div
                            key="grid-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <header className={styles.headerSection}>
                                <h1 className={styles.headerTitle}>
                                    Advanced Dialysis Solutions for <br className={styles.breakLine} />
                                    <span className={styles.headerSubtitle}>Clinical Excellence.</span>
                                </h1>
                                <p className={styles.headerDescription}>
                                    From high-purity cleaning fluids to precise hemodialysis concentrates.
                                    Engineered for patient safety and operational efficiency in renal care facilities.
                                </p>
                            </header>

                            {/* Product Selection Grid */}
                            <div className={styles.productOverviewGrid}>
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className={styles.overviewCard}
                                        onClick={() => handleViewDetails(product)}
                                    >
                                        <div className={styles.overviewImageContainer}>
                                            <img src={product.image} alt={product.title} className={styles.overviewImage} />
                                        </div>
                                        <div className={styles.overviewInfo}>
                                            <span className={styles.overviewTag}>{product.tag}</span>
                                            <h4 className={styles.overviewTitle}>{product.title}</h4>
                                            <p className={styles.overviewDescription}>{product.description}</p>
                                            <button
                                                className={styles.viewSpecsBtn}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleViewDetails(product);
                                                }}
                                            >
                                                View Details <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail-view"
                            initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.fullProductView}
                            ref={detailViewRef}
                        >
                            <button className={styles.backButton} onClick={handleBack}>
                                <ArrowLeft size={20} /> Back to All Products
                            </button>

                            <div className={styles.productDetailGrid}>
                                {/* Left Column */}
                                <div className={styles.detailLeftColumn}>
                                    <div>
                                        <h1 className={styles.detailTitleLarge}>{selectedProduct.title}</h1>
                                        <h2 className={styles.detailSubtitle}>{selectedProduct.subtitle || selectedProduct.tag}</h2>
                                        <p className={styles.detailDescriptionMain}>{selectedProduct.description}</p>
                                    </div>

                                    {selectedProduct.packSizes && (
                                        <div className={styles.packSizeBox}>
                                            <span className={styles.packSizeLabel}>Available Pack Sizes</span>
                                            <div className={styles.packSizeList}>
                                                {selectedProduct.packSizes.map(size => (
                                                    <span key={size} className={styles.packSizeItem}>• {size}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className={styles.sectionBlock}>
                                        <h3 className={styles.sectionTitle}>Product Overview</h3>
                                        <p className={styles.sectionText}>{selectedProduct.overview || selectedProduct.fullDescription}</p>

                                        {selectedProduct.benefit && (
                                            <div className={styles.benefitBox}>
                                                <CheckCircle2 size={24} className={styles.benefitIcon} />
                                                <p>{selectedProduct.benefit}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className={styles.sectionBlock}>
                                        <h3 className={styles.sectionTitle}>
                                            <FlaskConical className={styles.sectionIcon} /> How to Use
                                        </h3>
                                        <ol className={styles.howToUseList}>
                                            {selectedProduct.howToUse && selectedProduct.howToUse.map((step, i) => (
                                                <li key={i}>
                                                    <span className={styles.stepNumber}>{i + 1}.</span>
                                                    <span className={styles.stepText}>{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className={styles.detailRightColumn}>
                                    <div className={styles.heroImageWrapper}>
                                        <div className={styles.heroGlow} />
                                        <img
                                            src={selectedProduct.detailImage || selectedProduct.image}
                                            alt={selectedProduct.title}
                                            className={styles.heroImage}
                                            width="450"
                                            height="450"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = selectedProduct.image;
                                            }}
                                        />
                                    </div>

                                    <div className={styles.infoCardLight}>
                                        <h3 className={styles.cardTitle}>
                                            <Activity className={styles.cardIcon} /> Where It Can Be Used
                                        </h3>
                                        <ul className={styles.whereUsedList}>
                                            {selectedProduct.whereUsed && selectedProduct.whereUsed.map((item, i) => (
                                                <li key={i}>
                                                    <div className={styles.listIconWrapper}><Settings size={16} /></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.infoCardDanger}>
                                        <h3 className={styles.cardTitleDanger}>
                                            <AlertCircle className={styles.cardIconDanger} /> Safety Instructions
                                        </h3>
                                        <ul className={styles.safetyListNew}>
                                            {selectedProduct.safety && selectedProduct.safety.map((item, i) => (
                                                <li key={i}>
                                                    <CheckCircle2 size={16} className={styles.safetyCheck} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.inquireSection}>
                                <h3 className={styles.inquireTitle}>Need More Information?</h3>
                                <p className={styles.inquireText}>Contact our team for technical details, usage guidance, or bulk orders.</p>
                                <button className={styles.inquireBtn}>
                                    Inquire Now <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <section className={styles.trustSection}>
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIconWrapper}>
                                <ShieldCheck size={24} />
                            </div>
                            <h4 className={styles.trustTitle}>Certified Quality</h4>
                            <p className={styles.trustDescription}>
                                Manufactured in compliance with ISO 13485 and GMP standards. Ensuring consistent safety, sterility, and efficacy for every batch produced.
                            </p>
                        </div>

                        <div className={styles.trustItem}>
                            <div className={styles.trustIconWrapper}>
                                <FileCheck size={24} />
                            </div>
                            <h4 className={styles.trustTitle}>Regulatory Compliance</h4>
                            <p className={styles.trustDescription}>
                                Fully compliant with national and international medical device regulations. Comprehensive documentation and Certificates of Analysis (CoA) available on request.
                            </p>
                        </div>

                        <div className={styles.trustItem}>
                            <div className={styles.trustIconWrapper}>
                                <Activity size={24} />
                            </div>
                            <h4 className={styles.trustTitle}>Clinical Reliability</h4>
                            <p className={styles.trustDescription}>
                                Trusted by leading dialysis centers. Our formulations are meticulously designed to maximize dialyzer performance and ensure patient safety during treatment.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

