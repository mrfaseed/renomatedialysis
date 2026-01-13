'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Factory, Wind, Users, ArrowRight } from 'lucide-react';
import ChemistryBackground from './ChemistryBackground';

const industryFeatures = [
    {
        id: 1,
        title: "Standards",
        description: "The Company is having all required infrastructure to manufacture the products as per requirement and complies to EU GMP norms.",
        icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
        id: 2,
        title: "Size of the plant",
        description: "The Company has a built up area of about 4,500 sq. feet for the production and storage of its products spread over 500 square meters of Area.",
        icon: <Factory className="w-5 h-5 text-blue-600" />,
    },
    {
        id: 3,
        title: "Production Environment",
        description: "The infrastructure includes dedicated HVAC Systems with environment control at individual production steps and auxiliary areas.",
        icon: <Wind className="w-5 h-5 text-blue-600" />,
    },
    {
        id: 4,
        title: "Management",
        description: "Complete water management system with loop, separate storage and supply management system for each categories of drugs.",
        icon: <Users className="w-5 h-5 text-blue-600" />,
    },
];

const sliderImages = [
    '/assets/Gemini_Generated_Image_6vi3z56vi3z56vi3.png',
    '/assets/img3.png',
    '/assets/img.png'
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function OurIndustry() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Preload images to prevent flashing on first load
        sliderImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-24 bg-white overflow-hidden font-sans">
            <ChemistryBackground />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-7 tracking-wide">
                                Our Facility
                            </span>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-[1.15] mb-6">
                                Our <span className="text-blue-600">Industry</span>
                            </h2>

                            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
                                We have the unique & finest products across the industry
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="space-y-5"
                        >
                            {industryFeatures.map((feature) => (
                                <motion.div
                                    key={feature.id}
                                    variants={itemVariants}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 mt-1 bg-blue-50 rounded-full p-1">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 text-[1.05rem] font-bold leading-relaxed mb-1">
                                            {feature.title}
                                        </p>
                                        <div className="text-slate-600 text-base leading-relaxed">
                                            {feature.description}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10"
                        >
                            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                                Learn More About Us
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Image Slideshow */}
                    <div className="relative h-[500px] w-full max-w-[600px] mx-auto lg:mx-0">
                        {/* Image Container with large border radius */}
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full w-full bg-slate-100 isolate">
                            <AnimatePresence>
                                <motion.img
                                    key={currentImageIndex}
                                    src={sliderImages[currentImageIndex]}
                                    alt="Our Industry Facility"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Inner glow/shadow for depth */}
                            <div className="absolute inset-0 ring-1 ring-black/5 rounded-[3rem] pointer-events-none z-10"></div>
                        </div>

                        {/* Decorative blur/glow behind */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-100 rounded-[3rem] blur-3xl opacity-40 transform translate-x-4 translate-y-4"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
