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
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#1e3a8a]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                        OUR PRODUCTS
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Here are some of our <span className="text-[#0ea5e9] font-bold">Finest</span> and <span className="text-[#0ea5e9] font-bold">Top Selling</span> products in the market
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {featuredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            className="group relative flex flex-col h-full bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(30,58,138,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Image Container */}
                            <div className="relative h-56 p-8 flex items-center justify-center bg-slate-50/50 group-hover:bg-blue-50/20 transition-colors duration-500 border-b border-slate-50">
                                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain mix-blend-multiply filter drop-shadow-sm group-hover:drop-shadow-xl group-hover:scale-110 transition-all duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col p-6 pt-8 relative z-10">
                                <h3 className="text-[1.1rem] font-bold text-[#1e293b] mb-3 line-clamp-2 leading-tight group-hover:text-[#2563eb] transition-colors font-outfit">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6 flex-grow">
                                    {product.description}
                                </p>

                                {/* Action Link */}
                                <div className="mt-auto flex items-center justify-between group/btn">
                                    <span className="text-xs font-bold text-[#2563eb] uppercase tracking-widest group-hover:underline decoration-2 underline-offset-4">
                                        View Specs
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="/products" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 ease-out bg-[#2563eb] rounded-full shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95 overflow-hidden">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
                        <span className="relative text-lg tracking-wide mr-2 font-outfit">VIEW ALL PRODUCTS</span>
                        <ArrowRight className="w-6 h-6 relative transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
