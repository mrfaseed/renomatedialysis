'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Banknote, Clock, FlaskConical, ArrowRight, FileText, PackageSearch } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "Indian Pharma Grade",
        icon: <Building2 className="w-8 h-8" />,
    },
    {
        id: 2,
        title: "Quality Assurance",
        icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
        id: 3,
        title: "Low Cost",
        icon: <Banknote className="w-8 h-8" />,
    },
    {
        id: 4,
        title: "Years of Experience",
        icon: <Clock className="w-8 h-8" />,
    },
    {
        id: 5,
        title: "Qualified Chemist",
        icon: <FlaskConical className="w-8 h-8" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BusinessPartners() {
    return (
        <section className="font-sans">
            {/* 1. Top Bar - Partner Statement */}
            <div className="bg-[#facc15] py-6 relative overflow-hidden">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-xl md:text-2xl font-black tracking-widest text-slate-900 uppercase">
                        We Don't Just Sell, We Build Long-Term Business Partners
                    </h2>
                </div>
            </div>

            {/* 2. Features Row - Icons */}
            <div className="bg-white py-16 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className={`flex flex-col items-center justify-center text-center p-4 group ${index === features.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                            >
                                <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110 shadow-sm border border-slate-100">
                                    {feature.icon}
                                </div>
                                <h3 className="text-sm md:text-base font-bold text-slate-700 uppercase tracking-wide group-hover:text-blue-900 transition-colors">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 3. Bottom CTA - Gradient */}
            <div className="relative py-24 bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
                {/* Animated Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        className="text-3xl md:text-4xl font-black text-white mb-12 uppercase tracking-tight drop-shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Don't See What You Are Looking For? No Worry.
                    </motion.h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {/* Button 1: See Products */}
                        <Link href="/products" className="group relative bg-white text-blue-600 px-8 py-4 rounded-lg font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                            <PackageSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>See Products</span>
                            <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/10 transition-colors"></div>
                        </Link>

                        {/* Button 2: Get a Quote */}
                        <Link href="/contact" className="group relative px-8 py-4 rounded-lg font-bold uppercase tracking-wider border-2 border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
                            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Get A Quote</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
