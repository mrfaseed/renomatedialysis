'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredProducts = [
    {
        id: 1,
        title: 'Citric Acid Powder 500 gm & 1 Kg',
        description: 'High-purity citric acid formulation for efficient descaling. Excellent removal of calcium and magnesium deposits.',
        image: '/products/Citric_Acid_Powder.png'
    },
    {
        id: 2,
        title: 'CITROMATE (Cleaning Fluid)',
        description: 'Specialized cleaning fluid for hemodialysis machines. Precisely formulated to remove organic and inorganic deposits.',
        image: '/products/CITROMATE.png'
    },
    {
        id: 3,
        title: 'DIAMATE (Dialyzer Reprocessing)',
        description: 'Cold sterilant for dialyzer reprocessing. Includes cleaning, testing, and sterilization steps. Ensures safe reuse.',
        image: '/products/DIAMATE.png'
    },
    {
        id: 4,
        title: 'Formaldehyde Solution I.P',
        description: 'Broad-spectrum disinfectant. Effective against bacteria, fungi, and spores. Compliant with Pharmacopoeia standards.',
        image: '/products/Formaldehyde_Solution_IP.png'
    },
    {
        id: 5,
        title: 'Acidic Solution (Bicarbonate)',
        description: 'Hemodialysis Concentrated Acidic Solution. Proportioning ratio 1:34:1.83. Formulated for standard treatments.',
        image: '/products/cane.png'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function ProductsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-[#1e3a8a]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            OUR PRODUCTS
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                            Here are some of our <span className="text-[#0ea5e9] font-bold">Finest</span> and <span className="text-[#0ea5e9] font-bold">Top Selling</span> products.
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] mt-6 rounded-full"></div>
                    </motion.div>

                    {/* View More Button - Animated & Right Aligned */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="/products" className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                            <span className="font-bold text-[#1e3a8a] tracking-wide group-hover:text-[#2563eb] transition-colors">VIEW ALL PRODUCTS</span>
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {featuredProducts.slice(0, 4).map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(30,58,138,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Image Container */}
                            <div className="relative h-64 p-8 flex items-center justify-center bg-[#f8fafc] group-hover:bg-blue-50/10 transition-colors duration-500">
                                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain mix-blend-multiply filter drop-shadow-md group-hover:drop-shadow-2xl group-hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col p-8 relative z-10">
                                <h3 className="text-[1.25rem] font-bold text-[#1e293b] mb-4 leading-snug group-hover:text-[#2563eb] transition-colors font-outfit">
                                    {product.title}
                                </h3>
                                <p className="text-[0.95rem] text-slate-500 leading-relaxed font-medium">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
