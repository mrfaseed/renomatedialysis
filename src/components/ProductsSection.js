'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, FileCheck, Activity, FlaskConical, Beaker, Hexagon, Component, Microscope, ChevronDown, CheckCircle2, AlertCircle, Package, Settings, HelpCircle, Clock } from 'lucide-react';
import styles from '../app/products/products.module.css';

const products = [
    {
        id: 1,
        title: 'Citric Acid Powder',
        subtitle: 'Effective Descaling Agent for Dialysis & Medical Water Systems',
        tag: 'Powder',
        description: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts.',
        overview: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts. Along with that, this citromate is well examined on different terms of quality for supplying its flawless range from our side. Customers can purchase this citromate from us with various specifications at industry existing rates to the clients.',
        fullDescription: 'Citric Acid Powder is used to clean and remove scale from dialysis machines and water systems. It helps remove hard water deposits and mineral buildup, keeping the equipment clean and working properly.',
        image: '/products/1.png',
        detailImage: '/products/1.png',
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
        packSizes: ['500 gm', '1 Kg'],
        safety: [
            'Store in a dry place',
            'Avoid contact with eyes and skin',
            'Keep away from children',
            'Use gloves while handling'
        ],
        benefit: 'Regular use helps keep dialysis equipment clean, safe, and long-lasting.',
        relatedProducts: [12, 11]
    },
    {
        id: 2,
        title: 'CITROMATE',
        sku: 'W019',
        tag: 'Solution',
        description: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts.',
        fullDescription: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts. Along with that, this citromate is well examined on different terms of quality for supplying its flawless range from our side. Customers can purchase this citromate from us with various specifications at industry existing rates to the clients.',
        overview: 'This has an excellent removal of calcium & magnesium deposits. The offered citromate is precisely processed by advanced technology & finest material of market under the supervision of experts. Along with that, this citromate is well examined on different terms of quality for supplying its flawless range from our side. Customers can purchase this citromate from us with various specifications at industry existing rates to the clients.',
        customSections: [
            {
                title: 'Citromate – For Thermochemical Disinfection',
                items: [
                    'pH Value: 1.7 to 2.0',
                    'Dissolves blood residue',
                    'Biodegradable & non-toxic',
                    'Removal of calcium sediments',
                    'Causes serious eye damage (Handle with Care)'
                ]
            },
            {
                title: 'The synergistic effect of its components',
                items: [
                    'Makes CITROMATE a potent disinfectant solution.',
                    'CITROMATE at 60° has a broad spectrum of microbiocidal',
                    'activity and works bactericidal, virus inactivating',
                    '(HBV, HCV,HIV) and fungicidal.'
                ]
            }
        ],
        expiry: 'One year from the date of manufacture',
        image: '/products/2.png',
        detailImage: '/products/2.png',
        specs: ['SKU: W019', 'pH: 1.7 - 2.0', 'Expiry: 1 Year', 'Microbiocidal >60°C'],
        whyUsed: [
            'Dissolves blood residue and calcium sediments',
            'Biodegradable and non-toxic formulation',
            'Potent disinfectant at 60°C (Bactericidal, Virucidal, Fungicidal)',
            'Effective against HBV, HCV, and HIV',
            'Synergistic effect for high disinfection potency'
        ],
        whereUsed: [
            'Hemodialysis machines (Thermochemical disinfection)',
            'Dialysis fluid pathways',
            'Internal circulation systems'
        ],
        howToUse: [
            'Use CITROMATE as per the dialysis machine manufacturer’s cleaning instructions.',
            'Ensure temperature reaches 60°C for full microbiocidal activity.',
            'Rinse thoroughly with clean water before use.'
        ],
        packSizes: ['5 Liter'],
        benefit: 'Regular use of CITROMATE ensures machine hygiene, effective decalcification, and broad-spectrum disinfection.',
        safety: [
            'Causes serious eye damage - Handle with extreme care',
            'Not for Medical use - Machine Disinfectant Only',
            'Use protective gloves and eyewear while handling',
            'Keep away from children'
        ],
        relatedProducts: [5, 8, 3]
    },
    {
        id: 3,
        title: 'DIAMATE',
        subtitle: 'Cold Sterilant',
        sku: 'W021',
        tag: 'Solution',
        description: 'Dialyzers are not just reused, they are reprocessed. The reprocessing procedure involves cleaning, testing, filling your dialyzer with a sterilant (Diamate® Cold Sterilant), inspecting, labeling, storing and rinsing your dialyzer before it is reused for your next treatment.',
        overview: 'DIAMATE is a specialized cold sterilant solution designed for dialyzer reprocessing. It helps sterilize and disinfect dialyzers safely, removing bacteria and other contaminants while maintaining dialyzer performance.',
        fullDescription: 'Dialyzers are not just reused, they are reprocessed. The reprocessing procedure involves cleaning, testing, filling your dialyzer with a sterilant (Diamate® Cold Sterilant), inspecting, labeling, storing and rinsing your dialyzer before it is reused for your next treatment.',
        image: '/products/3.png',
        detailImage: '/products/3.png',
        specs: ['SKU: W021', 'Type: Peracetic Acid based', 'Usage: Reprocessing', 'Sterilization: High-level', 'Safe Reuse'],
        customSections: [
            {
                title: 'Composition',
                items: [
                    'Peracetic acid 4.5%',
                    'Hydrogen Proxide 24.0%'
                ]
            },
            {
                title: 'Quality Advantage',
                items: [
                    'The most excellent disinfectant with peracetic acid as main ingredient',
                    'The only agent with both cleaning and disinfection at the same time',
                    'Decomposition into water and oxygen after use (environmentally friendly)',
                    'Used for dialyzer reuse'
                ]
            }
        ],
        benefit: 'Regular use of DIAMATE ensures optimal dialysis machine performance, effective removal of mineral deposits, and reliable system cleanliness.',
        storage: ['Store upright out of direct sun light'],
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
            'On contact with eyes or skin wash immediately',
            'If you feel unwell seek medical advice',
            'Wear suitable gloves and safety eye glasses',
            'Do not swallow'
        ],
        relatedProducts: [5, 6, 8]
    },
    {
        id: 4,
        title: 'Formaldehyde Solution',
        tag: 'Solution',
        description: 'Formaldehyde can be useful as a disinfectant as it kills most bacteria and fungi (including their spores). It is used to produced killed vaccines. Formaldehyde are used in Hemodialysis Unit.',
        overview: 'Formaldehyde can be useful as a disinfectant as it kills most bacteria and fungi (including their spores). It is used to produced killed vaccines. Formaldehyde are used in Hemodialysis Unit.',
        fullDescription: 'Formaldehyde Solution I.P is a strong disinfectant widely used in medical and laboratory settings to sterilize and disinfect equipment, surfaces, and instruments. It effectively eliminates bacteria, viruses, and fungi, ensuring a safe and hygienic environment.',
        image: '/products/4.png',
        detailImage: '/products/4.png',
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
        customSections: [
            {
                title: 'Composition',
                items: [
                    'Formaldehyde Solution I.P (34-37% W/V)'
                ]
            }
        ],
        packSizes: ['5 Liter Container'],
        benefit: 'Regular use of Formaldehyde Solution ensures effective disinfection, controls microbial contamination, and maintains dialysis machine hygiene.',
        safety: [
            'Highly toxic and corrosive – handle with care',
            'Avoid direct contact with skin and eyes',
            'Use in a well-ventilated area',
            'Keep out of reach of children'
        ],
        relatedProducts: [10, 13, 6]
    },
    {
        id: 5,
        title: 'Acid Concentrate – Bicarbonate Dialysis (1:34:1.83 proportioning)',
        sku: 'W018-1-1',
        tag: 'Solution',
        description: 'Hemodialysis Concentrated Acidic Solution for bicarbonate dialysis treatments. 1:34:1.83 proportioning ratio.',
        overview: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:34:1.83 proportioning)',
        fullDescription: 'This acid concentrate solution is used in bicarbonate dialysis to help prepare dialysis fluid. It ensures proper acid-base balance and safe dialysis treatment for patients.',
        image: '/products/5.png',
        detailImage: '/products/5.png',
        specs: ['Ratio: 1:34:1.83', 'Grade: BP Standard', 'Form: Liquid', 'Electrolyte Balanced'],
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
            'Mix with bicarbonate solution as per the 1:34:1.83 ratio',
            'Follow dialysis machine manufacturer guidelines for safe usage',
            'Use protective gloves while handling'
        ],
        customSections: [
            {
                title: 'Contents (gm/Ltr) - Each Liter Contains',
                items: [
                    'Sodium Chloride I.P. - 210.00gm',
                    'Potassium Chloride I.P. - 5.20gm',
                    'Calcium Chloride I.P. - 8gm',
                    'Magnesium Chloride I.P. - 2.7gm',
                    'Acetic Acid I.P. - 9.0gm',
                    'Purified Water to 1Ltr'
                ]
            },
            {
                title: 'Electrolyte Composition',
                items: [
                    'Na* 103mEq | K* 2.0mEq',
                    'Ca** 3.0mEq | Mg** 0.75mEq',
                    'Cl 108mEq | Acetic Acid 4.0mEq'
                ]
            },
            {
                title: 'Instructions',
                items: [
                    'To Be Dispensed Only By Or On The Prescription Of A Registered Medical Practitioner.',
                    'To Be Used With Solution (B) To Be Used With Haemo Dialysis Machine Only',
                    'Store At A Sufficiently Elevated Temperature (Above 4 Degree C) To Prevent Formation Of Crystals',
                    'Make Sure Container Is Sealed Properly. Additives May Be Incompatible With Dialysis Fluid. If Complete Information Is Not Available Consult A Pharmacist. Mix Through After Introduction Of Additives. Solutions Containing Additives Should Not Be Stored, Discard Any Unused Portion',
                    'Keep All Medicines Out Of Reach Of Children\'s'
                ]
            }
        ],
        weight: '20Ltr',
        packSizes: ['5 Liters', '20 Liters'],
        dilution: ['DILUTION RATIO 1:34', 'One part of solution with 34 parts of appropriate quality of water'],
        benefit: 'Regular use of Hemodialysis Concentrated Acidic Solution – BP ensures accurate electrolyte balance, precise 1:34:1.83 proportioning, and consistent bicarbonate dialysis performance',
        safety: [
            'This Solution (A) Should Not Be Used Alone. Should Be Used Along With Freshly Prepared Bicarbonate Solution (B)',
            'Not To Be Used If Container Is Found Leaking Or Solution Is Not Clear',
            'Solution Containing Visible Solid Particles Should Not Be Used',
            'Not To Be Injected',
            'Not To Be Taken Orally',
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ],
        relatedProducts: [3, 10, 2]
    },
    {
        id: 6,
        title: 'Acid Concentrate – Bicarbonate Dialysis (1:32.75:1.25 proportioning)',
        sku: 'W018-1-1-3',
        tag: 'Solution',
        description: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:32.75:1.25 proportioning)',
        overview: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:32.75:1.25 proportioning)',
        fullDescription: 'This acid concentrate solution is used in bicarbonate dialysis to prepare the dialysis fluid. It helps maintain the proper acid-base balance, ensuring safe and effective dialysis treatment for patients.',
        image: '/products/6.png',
        detailImage: '/products/6.png',
        specs: ['Ratio: 1:32.75:1.25', 'Grade: BP Standard', 'Selection: Patient Specific', 'High Pure'],
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
            'Mix with bicarbonate solution as per the 1:32.75:1.25 ratio',
            'Follow the dialysis machine manufacturer’s instructions',
            'Use protective gloves while handling'
        ],
        customSections: [
            {
                title: 'Contents (gm/Ltr) - Each Liter Contains',
                items: [
                    'Sodium Chloride I.P. - 210.00gm',
                    'Potassium Chloride I.P. - 5.20gm',
                    'Calcium Chloride I.P. - 8gm',
                    'Magnesium Chloride I.P. - 2.7gm',
                    'Acetic Acid I.P. - 9.0gm',
                    'Purified Water to 1Ltr'
                ]
            },
            {
                title: 'Electrolyte Composition',
                items: [
                    'Na* 103mEq | K* 2.0mEq',
                    'Ca** 3.0mEq | Mg** 0.75mEq',
                    'Cl 108mEq | Acetic Acid 4.0mEq'
                ]
            },
            {
                title: 'Instructions',
                items: [
                    'To Be Dispensed Only By Or On The Prescription Of A Registered Medical Practitioner.',
                    'To Be Used With Solution (B) To Be Used With Haemo Dialysis Machine Only',
                    'Store At A Sufficiently Elevated Temperature (Above 4 Degree C) To Prevent Formation Of Crystals',
                    'Make Sure Container Is Sealed Properly. Additives May Be Incompatible With Dialysis Fluid. If Complete Information Is Not Available Consult A Pharmacist. Mix Through After Introduction Of Additives. Solutions Containing Additives Should Not Be Stored, Discard Any Unused Portion',
                    'Keep All Medicines Out Of Reach Of Children\'s'
                ]
            }
        ],
        packSizes: ['5 Liters', '20 Liters'],
        weight: '20 Liter',
        dilution: ['1:32.75:1.25 Dilution Proportioning', 'For Bicarbonate Haemodialysis Concentrate'],
        benefit: 'Regular use of Hemodialysis Concentrated Acidic Solution – BP supports precise proportioning (1:32.75:1.25), maintains solution stability, and ensures reliable bicarbonate dialysis delivery.',
        safety: [
            'This Solution (A) Should Not Be Used Alone. Should Be Used Along With Freshly Prepared Bicarbonate Solution (B)',
            'Not To Be Used If Container Is Found Leaking Or Solution Is Not Clear',
            'Solution Containing Visible Solid Particles Should Not Be Used',
            'Not To Be Injected',
            'Not To Be Taken Orally',
            'Handle with care – it is an acidic solution',
            'Avoid contact with skin and eyes',
            'Store in a cool, dry place',
            'Keep out of reach of children'
        ],
        relatedProducts: [7, 2, 3]
    },
    {
        id: 7,
        title: 'Acid Concentrate – Acidic Solution (DEXTROSE) – Bicarbonate',
        sku: 'W018-1-1-2-1',
        tag: 'Solution',
        description: 'Hemodialysis Concentrated Acidic Solution with Dextrose for bicarbonate dialysis treatments.',
        detailDescription: 'HEMODIALYSIS CONCENTRATED ACIDIC SOLUTION – BP For BICARBONATE DIALYSIS (1:34:1.83 proportioning)',
        overview: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:34:1.83 proportioning)',
        weight: '20 liter',
        benefit: 'Regular use of Hemodialysis Concentrated Acidic Solution – BP ensures accurate electrolyte balance, precise 1:34:1.83 proportioning, and consistent bicarbonate dialysis performance.',
        customSections: [
            {
                title: 'Contents(gm/Lr)',
                items: [
                    '1. Sodium Chloride I.P. - 185.00gm',
                    '2. Potassium Chloride I.P. - 5.5gm',
                    '3. Calcium Chloride I.P. - 8gm',
                    '4. Magnesium Chloride I.P. - 2.75gm',
                    '5. Acetic Acid I.P. - 9.0gm',
                    '5. Dextrose Monohydrate I.P. - 38gm',
                    '6. Purified Water to 1Ltr'
                ]
            },
            {
                title: 'Electrolyte Composition',
                items: [
                    'Na* 85.95mEq | K* 2.0mEq',
                    'Ca** 3.0mEq | Mg** 0.75mEq',
                    'Cl 91.08mEq | Acetic Acid 4.0mEq',
                    'Dextrose = 5m.mol'
                ]
            },
            {
                title: 'Instructions',
                items: [
                    'To Be Dispensed Only By Or On The Prescription Of A Registered Medical Practitioner.',
                    'To Be Used With Solution (B) To Be Used With Haemo Dialysis Machine Only',
                    'Store At A Sufficiently Elevated Temperature (Above 4 Degree C) To Prevent Formation Of Crystals',
                    'Make Sure Container Is Sealed Properly. Additives May Be Incompatible With Dialysis Fluid. If Complete Information Is Not Available Consult A Pharmacist. Mix Through After Introduction Of Additives. Solutions Containing Additives Should Not Be Stored, Discard Any Unused Portion',
                    'Keep All Medicines Out Of Reach Of Children\'s'
                ]
            }
        ],
        fullDescription: 'This acid concentrate with dextrose is used in bicarbonate dialysis to prepare dialysis fluid. It helps maintain the proper acid-base balance and energy supply during dialysis, ensuring safe and effective treatment.',
        image: '/products/7.png',
        detailImage: '/products/7.png',
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
        dilution: ['DILUTION RATIO 1:35:83', 'One part of solution with 35.83 parts of appropriate quality of water'],
        safety: [
            'This Solution (A) Should Not Be Used Alone. Should Be Used Along With Freshly Prepared Bicarbonate Solution (B).',
            'Not To Be Used If Container Is Found Leaking Or Solution Is Not Clear.',
            'Solution Containing Visible Solid Particles Should Not Be Used',
            'Not To Be Injected.',
            'Not To Be Taken Orally.'
        ],
        relatedProducts: [2, 5, 4]
    },
    {
        id: 8,
        title: 'Specialty Acid – Acidic Solution (Free Potassium) – Bicarbonate',
        sku: 'W018-1-1-2',
        tag: 'Solution',
        description: 'Potassium-free Acidic Solution for cases where free potassium is not required.',
        detailDescription: 'HEMODIALYSIS CONCENTRATED ACIDIC SOLUTION – BP For BICARBONATE DIALYSIS (1:34:1.83 proportioning)',
        overview: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:34:1.83 proportioning)',
        fullDescription: 'This specialty acid concentrate is designed for bicarbonate dialysis where free potassium is not required. It helps maintain the proper acid-base balance in dialysis fluid, ensuring safe and effective treatment for patients.',
        image: '/products/8.png',
        detailImage: '/products/8.png',
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
        customSections: [
            {
                title: 'contents (gm/Ltr) - Each Liter Contains',
                items: [
                    '1. Sodium Chloride I.P. - 187.00gm',
                    '2. Potassium Chloride I.P. - Nil',
                    '3. Calcium Chloride I.P. - 8gm',
                    '4. Magnesium Chloride I.P. - 2.75gm',
                    '5. Acetic Acid I.P. - 9.0gm',
                    '6. Purified Water to 1Ltr'
                ]
            },
            {
                title: 'Electrolyte Composition',
                items: [
                    'Na* 86.88mEq | K* Nil',
                    'Ca** 3.0mEq | Mg** 0.75mEq',
                    'Cl 90.58mEq | Acitic Acid 4.0mEq'
                ]
            },
            {
                title: 'Instructions',
                items: [
                    'To Be Dispensed Only By Or On The Prescription Of A Registered Medical Practitioner.',
                    'To Be Used With Solution (B) To Be Used With Haemo Dialysis Machine Only',
                    'Store At A Sufficiently Elevated Temperature (Above 4 Degree C) To Prevent Formation Of Crystals',
                    'Make Sure Container Is Sealed Properly. Additives May Be Incompatible With Dialysis Fluid. If Complete Information Is Not Available Consult A Pharmacist. Mix Through After Introduction Of Additives. Solutions Containing Additives Should Not Be Stored, Discard Any Unused Portion',
                    'Keep All Medicines Out Of Reach Of Children\'s'
                ]
            }
        ],
        weight: '20 Liter',
        dilution: ['DILUTION RATIO 1:35:83', 'One part of solution with 35.83 parts of appropriate quality of water'],
        benefit: 'Regular use of Hemodialysis Concentrated Acidic Solution – BP ensures precise 1:34:1.83 proportioning, accurate electrolyte balance, and consistent bicarbonate dialysis performance.',
        safety: [
            'This Solution (A) Should Not Be Used Alone. Should Be Used Along With Freshly Prepared Bicarbonate Solution (B).',
            'Not To Be Used If Container Is Found Leaking Or Solution Is Not Clear.',
            'Solution Containing Visible Solid Particles Should Not Be Used',
            'Not To Be Injected.',
            'Not To Be Taken Orally.'
        ],
        relatedProducts: [3, 9, 5]
    },
    {
        id: 9,
        title: 'Specialty Acid – Acidic Solution (Low Potassium) – Bicarbonate',
        sku: 'W018-1-1-1',
        tag: 'Solution',
        description: 'Low Potassium Acidic Solution for patients requiring controlled potassium removal.',
        detailDescription: 'HEMODIALYSIS CONCENTRATED ACIDIC SOLUTION – BP For BICARBONATE DIALYSIS (1:34:1.83 proportioning)',
        overview: 'Hemodialysis Concentrated Acidic Solution – Bp For Bicarbonate Dialysis (1:34:1.83 proportioning)',
        fullDescription: 'This specialty acid concentrate is used in bicarbonate dialysis for patients who require low potassium in their dialysis fluid. It ensures the proper acid-base balance while providing safe and effective dialysis treatment.',
        image: '/products/9.png',
        detailImage: '/products/9.png',
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
        packSizes: ['20 Liters'],
        customSections: [
            {
                title: 'contents (gm/Ltr) - Each Liter Contains',
                items: [
                    '1. Sodium Chloride I.P. - 186.00gm',
                    '2. Potassium Chloride I.P. - 2.75gm',
                    '3. Calcium Chloride I.P. - 6.8gm',
                    '4. Magnesium Chloride I.P. - 3.6gm',
                    '5. Acetic Acid I.P. - 9.0gm',
                    '6. Purified Water to 1 Liter'
                ]
            },
            {
                title: 'Electrolyte Composition',
                items: [
                    'Na* 86.41mEq | K* 1.0mEq',
                    'Ca** 2.51mEq | Mg** 0.96mEq',
                    'Cl 91.0mEq | Acitic Acid 4.0mEq'
                ]
            },
            {
                title: 'Instructions',
                items: [
                    'To Be Dispensed Only By Or On The Prescription Of A Registered Medical Practitioner.',
                    'To Be Used With Solution (B) To Be Used With Haemo Dialysis Machine Only',
                    'Store At A Sufficiently Elevated Temperature (Above 4 Degree C) To Prevent Formation Of Crystals',
                    'Make Sure Container Is Sealed Properly. Additives May Be Incompatible With Dialysis Fluid. If Complete Information Is Not Available Consult A Pharmacist. Mix Through After Introduction Of Additives. Solutions Containing Additives Should Not Be Stored, Discard Any Unused Portion',
                    'Keep All Medicines Out Of Reach Of Children\'s'
                ]
            }
        ],
        weight: '20 Liter',
        dilution: ['DILUTION RATIO 1:35:83', 'One part of solution with 35.83 parts of appropriate quality of water'],
        safety: [
            'This Solution (A) Should Not Be Used Alone. Should Be Used Along With Freshly Prepared Bicarbonate Solution (B).',
            'Not To Be Used If Container Is Found Leaking Or Solution Is Not Clear.',
            'Solution Containing Visible Solid Particles Should Not Be Used',
            'Not To Be Injected.',
            'Not To Be Taken Orally.'
        ],
        relatedProducts: [7, 4, 5]
    },
    {
        id: 10,
        title: 'Hydrogen Peroxide Solution',
        tag: 'Disinfectant',
        description: 'It is a clear, colourless, and odourless liquid. It decomposes in contact with oxidisation organic matter and with certain metal and also if allowed to become alkaline',
        fullDescription: 'Hydrogen peroxide in dialysis water from this tank was detectable at a concentration of 30 mg/l. All four affected patients had been exposed to dialysiswater from this source. Water supplying in the water treatment plant was held in a separate tank that had not been treated with hydrogen peroxide',
        overview: 'Hydrogen peroxide in dialysis water from this tank was detectable at a concentration of 30 mg/l. All four affected patients had been exposed to dialysiswater from this source. Water supplying in the water treatment plant was held in a separate tank that had not been treated with hydrogen peroxide',

        productDetails: [
            { label: 'Product Name', value: 'Hydrogen Peroxide Solution' },
            { label: 'Category', value: 'Disinfectant' },
            { label: 'Description', value: 'It is a clear, colourless, and odourless liquid. It decomposes in contact with oxidisation organic matter and with certain metal and also if allowed to become alkaline' },
            { label: 'Composition', value: 'Hydrogen Peroxide I.P 18.20% W/VPurified Water Q.S' }
        ],
        image: '/products/10.png',
        detailImage: '/products/10.png',
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
        packSizes: ['5 Liter Container'],
        safety: [
            'Handle with care – avoid skin and eye contact',
            'Use protective gloves while handling',
            'Store in a cool, dry place',
            'Keep away from children'
        ],
        benefit: 'Regular use of Hydrogen Peroxide Solution supports effective system disinfection, controls microbial growth, and helps maintain hygienic dialysis water treatment operations.',
        relatedProducts: [5, 4, 9]
    },
    {
        id: 11,
        title: 'Bicarb Powder – Sodium Bicarbonate IP',
        sku: 'W018-1',
        tag: 'Powder',
        description: 'Pharmaceutical grade Sodium Bicarbonate (NaHCO3) for preparation of dialysis fluid.',
        fullDescription: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonate anion (HCO3–). Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder. It has a slightly salty, alkaline taste resembling that of washing soda (sodium carbonate). The natural mineral form is nahcolite',
        overview: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonate anion (HCO3–). Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder. It has a slightly salty, alkaline taste resembling that of washing soda (sodium carbonate). The natural mineral form is nahcolite',
        image: '/products/11.png',
        detailImage: '/products/11.png',
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
        weight: '835gms',
        dilution: ['1:32.75:1.25 Dilution Proportioning', 'For Bicarbonate Haemodialysis Concentrate'],
        customSections: [
            {
                title: 'Composition',
                items: [
                    'Sodium Bicarbonate I.P. - 650 gms',
                    'Na+ - 37 mEq/L',
                    'HCO3- - 37 mEq/L'
                ]
            }
        ],
        expiry: 'One year from the date of manufacture',
        safety: [
            'This solution be prepared fresh for every bicarb dialysis',
            'Store at a temperature above 4° C',
            'Discard unused and contaminated solution'
        ],
        relatedProducts: [12, 1]
    },
    {
        id: 12,
        title: 'Bicarb Mix – Sodium Bicarbonate IP & Sodium Chloride IP',
        subtitle: 'Dual-Electrolyte Formulation for Precise Dialysis Fluid Preparation',
        tag: 'Powder',
        sku: 'W018',
        description: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonateanion (HCO3–).',
        detailDescription: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonateanion (HCO3–).',
        overview: 'Sodium bicarbonate (IUPAC name: sodium hydrogen carbonate), commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonateanion (HCO3–). Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder. It has a slightly salty, alkaline taste resembling that of washing soda (sodium carbonate). The natural mineral form is nahcolite.',
        fullDescription: 'Bicarb Mix is a combined formulation of Sodium Bicarbonate and Sodium Chloride used in dialysis fluid preparation. It ensures precise electrolyte balance, supporting safe and effective hemodialysis.',
        image: '/products/12.png',
        detailImage: '/products/12.png',
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
        weight: '835gms',
        customSections: [
            {
                title: 'Composition',
                items: [
                    'Sodium Chloride - 235gms',
                    'Sodium Bicarbonate - 600gms',
                    'Na++ - 54mEq',
                    'HCO3− - 35mEq',
                    'Cl− - 19mEq'
                ]
            },
            {
                title: 'Preparation Procedure',
                items: [
                    'Add Sodium Chloride IP to the water slowly with simultaneously stirring.',
                    'After Sodium Chloride IP is completely dissolved add Sodium Bicarb IP Powder in small portion with simultaneously stirring.',
                    'After the entire Sodium Bicarb IP Powder is added stir until completely dissolved. The total process time will take 15 Minutes.',
                    'Filter and transfer to fresh can. Use for bicarb dialysis immediately.'
                ]
            }
        ],
        expiry: 'One year from the date of manufacture',
        dilution: ['1:34:1.83 Dilution Proportioning', 'For Bicarbonate Haemodialysis Concentrate'],
        safety: [
            'This solution be prepared fresh for every bicarb dialysis',
            'Store at a temperature above 4° C',
            'Discard unused and contaminated solution'
        ],
        benefit: 'Regular use of Sodium Bicarbonate IP and Sodium Chloride IP supports accurate electrolyte balance, stable bicarbonate dialysis preparation, and consistent dialysis performance.',
        relatedProducts: [1, 11]
    },
    {
        id: 13,
        title: 'Sodium Hypochlorite – Bleach (5–6%)',
        subtitle: 'High-Level Disinfectant for Medical Hygiene & Water Systems',
        tag: 'Solution',
        description: 'Powerful disinfectant for dialysis equipment, surfaces, and water systems. 5–6% concentration.',
        detailDescription: 'All dialysis units must have written policies and procedures that deal with disinfection of the dialysis fluid path way of the Hemodialysis machine. These procedures are targeted to control bacterial contamination and have nothing to do with preventing blood borne infections.',
        overview: 'All dialysis units must have written policies and procedures that deal with disinfection of the dialysis fluid path way of the Hemodialysis machine. These procedures are targeted to control bacterial contamination and have nothing to do with preventing blood borne infections. The procedures generally consist of using sodium hypochlorite (bleach) on a regular basis (according to the manufacturer\'s instructions) and a sterilant overnight at certain intervals (e.g., every 100 hours of use). Studies have shown that HIV is inactivated rapidly after being exposed to commonly used chemical germicides at concentrations that are much lower than used in practice. The much hardier HBV is also known to be inactivated by common household bleach. Suggested concentrations of sodium hypochlorite prepared daily range from 500 parts per million (ppm) (1:100 dilution of household bleach) to 5000 ppm (1:10 dilution).',
        fullDescription: 'Sodium Hypochlorite is a powerful disinfectant used to clean and sanitize dialysis equipment, surfaces, and water systems. It effectively removes bacteria, viruses, and other contaminants, ensuring a safe and hygienic environment.',
        image: '/products/13.png',
        detailImage: '/products/13.png',
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
        customSections: [
            {
                title: 'Composition',
                items: [
                    'Sodium Hypochlorite – Bleach (5-6%)'
                ]
            }
        ],
        packSizes: ['20 Liter Container'],
        safety: [
            'Handle with care – it is corrosive',
            'Avoid contact with skin and eyes',
            'Use protective gloves and eyewear while handling',
            'Store in a cool, dry place, away from children'
        ],
        benefit: 'Regular use of Sodium Hypochlorite – Bleach (5–6%) ensures effective disinfection, controls microbial contamination, and maintains hygiene in dialysis and water treatment systems.',
        relatedProducts: [5, 9, 4]
    },

];

export default function ProductsPage() {
    const router = useRouter();
    const [activeProductId, setActiveProductId] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
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

    // Category mapping
    const categories = [
        { name: 'All Products', tag: null },
        { name: 'Dialysis Solutions', tag: 'Solution' },
        { name: 'Powders & Compounds', tag: 'Powder' },
        { name: 'Cleaning & Disinfection', tag: 'Disinfectant' }
    ];

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(product => {
            const category = categories.find(cat => cat.name === selectedCategory);
            return product.tag === category?.tag;
        });

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
                                    <span className={styles.headerSubtitle}>Clinical Excellence</span>
                                </h1>
                                <p className={styles.headerDescription}>
                                    From high-purity cleaning fluids to precise hemodialysis concentrates.
                                    Engineered for patient safety and operational efficiency in renal care facilities.
                                </p>
                            </header>

                            {/* Category Filter */}
                            <div className={styles.categoryFilterContainer}>
                                {categories.map((category) => {
                                    const count = category.tag === null
                                        ? products.length
                                        : products.filter(p => p.tag === category.tag).length;

                                    return (
                                        <button
                                            key={category.name}
                                            className={`${styles.categoryPill} ${selectedCategory === category.name ? styles.categoryPillActive : ''
                                                }`}
                                            onClick={() => setSelectedCategory(category.name)}
                                        >
                                            {category.name} ({count})
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Product Count Text */}
                            <div className={styles.productCountText}>
                                Showing {filteredProducts.length} products in {selectedCategory}
                            </div>

                            {/* Product Selection Grid */}
                            <div className={styles.productOverviewGrid}>
                                {filteredProducts.map((product) => (
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
                                        <p className={styles.detailDescriptionMain}>{selectedProduct.detailDescription || selectedProduct.fullDescription || selectedProduct.description}</p>
                                        {(selectedProduct.sku || selectedProduct.tag) && (
                                            <p style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                                {selectedProduct.sku && <><span style={{ color: '#64748b' }}>SKU: </span><span style={{ color: '#334155' }}>{selectedProduct.sku}</span> <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>|</span></>} Category: <span style={{ color: '#334155' }}>{selectedProduct.tag}</span>
                                            </p>
                                        )}
                                    </div>

                                    {selectedProduct.id === 4 && selectedProduct.customSections && selectedProduct.packSizes ? (
                                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                            <div className={styles.packSizeBox} style={{ flex: '1', minWidth: '250px' }}>
                                                <span className={styles.packSizeLabel}>{selectedProduct.customSections[0].title}</span>
                                                <div className={styles.packSizeList}>
                                                    {selectedProduct.customSections[0].items.map((item, idx) => (
                                                        <span key={idx} className={styles.packSizeItem}>• {item}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className={styles.packSizeBox} style={{ flex: '1', minWidth: '250px' }}>
                                                <span className={styles.packSizeLabel}>Available Pack Sizes</span>
                                                <div className={styles.packSizeList}>
                                                    {selectedProduct.packSizes.map(size => (
                                                        <span key={size} className={styles.packSizeItem}>• {size}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedProduct.weight ? (
                                        <div className={styles.packSizeBox}>
                                            <span className={styles.packSizeLabel}>{selectedProduct.id === 12 || selectedProduct.id === 11 ? 'Net Weight' : 'Weight'}</span>
                                            <div className={styles.packSizeList}>
                                                <span className={styles.packSizeItem}>• {selectedProduct.weight}</span>
                                            </div>
                                        </div>
                                    ) : selectedProduct.id === 3 && selectedProduct.customSections ? (
                                        <div className={styles.packSizeBox}>
                                            <span className={styles.packSizeLabel}>{selectedProduct.customSections[0].title}</span>
                                            <div className={styles.packSizeList}>
                                                {selectedProduct.customSections[0].items.map((item, idx) => (
                                                    <span key={idx} className={styles.packSizeItem}>• {item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : selectedProduct.packSizes && (
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
                                            <div className={styles.benefitBox} style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                                                <CheckCircle2 size={24} className={styles.benefitIcon} />
                                                <p>{selectedProduct.benefit}</p>
                                            </div>
                                        )}

                                        {selectedProduct.productDetails && (
                                            <div style={{ marginTop: '2rem' }}>
                                                <h3 className={styles.sectionTitle}>Product Details</h3>
                                                <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', textAlign: 'left' }}>
                                                        <tbody>
                                                            {selectedProduct.productDetails.map((row, index) => (
                                                                <tr key={index} style={{
                                                                    borderBottom: index !== selectedProduct.productDetails.length - 1 ? '1px solid #f1f5f9' : 'none',
                                                                    background: index === 0 ? '#f1f5f9' : 'transparent'
                                                                }}>
                                                                    <td style={{ padding: '0.75rem 1rem', color: index === 0 ? '#0f172a' : '#64748b', fontWeight: index === 0 ? '700' : '400', width: '50px' }}>{index + 1}</td>
                                                                    <td style={{ padding: '0.75rem 1rem', color: index === 0 ? '#0f172a' : '#334155', fontWeight: index === 0 ? '700' : '500', width: '200px' }}>{row.label}</td>
                                                                    <td style={{ padding: '0.75rem 1rem', color: index === 0 ? '#0f172a' : '#475569', fontWeight: index === 0 ? '700' : '400' }}>{row.value}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}



                                        {selectedProduct.customSections && selectedProduct.customSections
                                            .filter((section, sectionIdx) => (selectedProduct.id !== 3 && selectedProduct.id !== 4) || sectionIdx !== 0)
                                            .map((section, sectionIdx) => (
                                                <motion.div
                                                    key={sectionIdx}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.15), 0 8px 10px -6px rgba(14, 165, 233, 0.1)' }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ marginTop: '1.5rem', background: 'linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #bae6fd', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                                                >
                                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0369a1', marginBottom: '1rem' }}>
                                                        {section.title}
                                                    </h4>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                                        {section.items.map((item, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                whileHover={{ x: 5, color: '#0284c7' }}
                                                                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', color: '#334155', cursor: 'default' }}
                                                            >
                                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0ea5e9', boxShadow: '0 0 0 3px #e0f2fe', flexShrink: 0 }} />
                                                                {item}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            ))}




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
                                            width="500"
                                            height="500"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = selectedProduct.image;
                                            }}
                                        />
                                    </div>



                                    <div className={styles.infoCardDanger}>
                                        <h3 className={styles.cardTitleDanger}>
                                            <AlertCircle className={styles.cardIconDanger} /> Caution
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

                                    {/* Storage Section */}
                                    {selectedProduct.storage && (
                                        <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#fcfcfc', borderRadius: '0.75rem', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '50%' }}>
                                                <Package size={20} color="#475569" />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', fontWeight: '700', marginBottom: '0.2rem' }}>
                                                    Storage
                                                </h4>
                                                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                                    {selectedProduct.storage.map((item, i) => (
                                                        <li key={i} style={{ color: '#334155', fontWeight: '500', fontSize: '0.95rem' }}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {/* Dilution Section */}
                                    {selectedProduct.dilution && (
                                        <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#fcfcfc', borderRadius: '0.75rem', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '50%' }}>
                                                <Beaker size={20} color="#475569" />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', fontWeight: '700', marginBottom: '0.2rem' }}>
                                                    Dilution
                                                </h4>
                                                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                                    {selectedProduct.dilution.map((item, i) => (
                                                        <li key={i} style={{ color: '#334155', fontWeight: '500', fontSize: '0.95rem' }}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {/* Expiry Date Section */}
                                    {selectedProduct.expiry && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(71, 85, 105, 0.1)' }}
                                            style={{
                                                marginTop: '1.5rem',
                                                padding: '1.25rem',
                                                background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
                                                borderRadius: '1rem',
                                                border: '1px solid #cbd5e1',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            <div style={{
                                                background: '#fff',
                                                padding: '0.6rem',
                                                borderRadius: '50%',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Clock size={24} color="#334155" />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', fontWeight: '700', marginBottom: '0.1rem' }}>
                                                    Expiry Date
                                                </h4>
                                                <p style={{ fontWeight: 700, color: '#1e293b', fontSize: '1.05rem', margin: 0 }}>
                                                    {selectedProduct.expiry}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                </div>
                            </div>



                            {selectedProduct.relatedProducts && (
                                <div className={styles.relatedProductsSection} style={{ marginTop: '5rem', marginBottom: '4rem' }}>
                                    <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Related products</h3>
                                    <div className={styles.productOverviewGrid} style={{ marginBottom: 0 }}>
                                        {selectedProduct.relatedProducts.map(relatedId => {
                                            const relatedProduct = products.find(p => p.id === relatedId);
                                            if (!relatedProduct) return null;
                                            return (
                                                <div
                                                    key={relatedProduct.id}
                                                    className={styles.overviewCard}
                                                    onClick={() => handleViewDetails(relatedProduct)}
                                                >
                                                    <div className={styles.overviewImageContainer}>
                                                        <img src={relatedProduct.image} alt={relatedProduct.title} className={styles.overviewImage} />
                                                    </div>
                                                    <div className={styles.overviewInfo}>
                                                        <span className={styles.overviewTag}>{relatedProduct.tag}</span>
                                                        <h4 className={styles.overviewTitle}>{relatedProduct.title}</h4>
                                                        <button
                                                            className={styles.viewSpecsBtn}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleViewDetails(relatedProduct);
                                                            }}
                                                        >
                                                            View Details <ArrowRight size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className={styles.inquireSection}>
                                <h3 className={styles.inquireTitle}>Need More Information?</h3>
                                <p className={styles.inquireText}>Contact our team for technical details, usage guidance, or bulk orders.</p>
                                <button className={styles.inquireBtn} onClick={() => router.push('/contact')}>
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
        </div >
    );
}

