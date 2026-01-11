'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Wind, Users } from 'lucide-react';

const industryFeatures = [
    {
        id: 1,
        title: "Standards",
        description: "The Company is having all required infrastructure to manufacture the products as per requirement and complies to EU GMP norms.",
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
        id: 2,
        title: "Size of the plant",
        description: "The Company has a built up area of about 4,500 sq. feet for the production and storage of its products spread over 500 square meters of Area.",
        icon: <Factory className="w-6 h-6 text-white" />,
    },
    {
        id: 3,
        title: "Production Environment",
        description: "The infrastructure includes dedicated HVAC Systems with environment control at individual production steps and auxiliary areas.",
        icon: <Wind className="w-6 h-6 text-white" />,
    },
    {
        id: 4,
        title: "Management",
        description: "Complete water management system with loop, separate storage and supply management system for each categories of drugs.",
        icon: <Users className="w-6 h-6 text-white" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function OurIndustry() {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
                    >
                        Our Industry
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        We have the unique & finest products across the industry
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Features List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {industryFeatures.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className="flex gap-4 group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Column: Images Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>

                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            {/* Main Large Image */}
                            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl h-64 md:h-80">
                                <img
                                    src="/assets/Gemini_Generated_Image_6vi3z56vi3z56vi3.png"
                                    alt="Industry High Tech"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Secondary Images */}
                            <div className="rounded-2xl overflow-hidden shadow-lg h-40 md:h-48 transform translate-y-4">
                                <img
                                    src="/assets/img.png"
                                    alt="Facility Detail"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-40 md:h-48 transform -translate-y-4 bg-white">
                                <img
                                    src="/assets/img3.png"
                                    alt="Equipment"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
