"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, HeartPulse, Building2, Clock, Users, Plus, Microscope, Activity, ArrowRight } from 'lucide-react';

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', overflow: 'hidden', fontFamily: 'var(--font-sans)' }}>
            <MedicalParticles />
            <HeroSection />
            <div style={{ position: 'relative', zIndex: 2, background: 'white' }}>
                <ContactInfoSection />
                <FormSection />
                <MapSection />
            </div>
        </div>
    );
}

function MedicalParticles() {
    // Generate random particles
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        type: i % 3 // 0: circle, 1: plus, 2: ring
    }));

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        color: 'rgba(37, 99, 235, 0.03)', // Very subtle blue
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0],
                        rotate: [0, 360],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                >
                    {p.type === 0 && <div style={{ width: p.size, height: p.size, borderRadius: '50%', background: 'currentColor' }} />}
                    {p.type === 1 && <Plus size={p.size} />}
                    {p.type === 2 && <div style={{ width: p.size, height: p.size, borderRadius: '50%', border: '2px solid currentColor' }} />}
                </motion.div>
            ))}
        </div>
    );
}

function HeroSection() {
    return (
        <section style={{
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '2rem'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'fixed', // Fixed for parallax effect
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/contact-bg-new.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Parallax effect
                zIndex: 0,
                filter: 'blur(0px)' // Image is already soft, but we can blur if needed
            }} />

            {/* White Gradient Overlay for Text Readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,1) 90%)',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'white',
                        color: 'var(--primary)',
                        borderRadius: '99px',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        marginBottom: '2rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(37, 99, 235, 0.1)'
                    }}>
                        <Activity size={16} />
                        Professional Dialysis Solutions
                    </span>
                </motion.div>

                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                    fontWeight: '700',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    color: '#0f172a',
                    letterSpacing: '-0.02em'
                }}>
                    <SplitText text="Connect With" />
                    <br />
                    <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
                        <SplitText text="Excellence" delay={0.5} />
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        fontSize: '1.25rem',
                        color: '#475569',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontWeight: '400'
                    }}
                >
                    Experience world-class support for your dialysis facility.
                    We combine advanced technology with human-centric hospitality.
                </motion.p>
            </div>
        </section>
    );
}

function ContactInfoSection() {
    const list = {
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        hidden: { opacity: 0 }
    };

    return (
        <section style={{ padding: '0 2rem 6rem', marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={list}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    <InfoCard
                        icon={<Phone />}
                        title="24/7 Support"
                        line1="+1 (555) 123-4567"
                        line2="Global Helpline"
                    />
                    <InfoCard
                        icon={<Mail />}
                        title="Email Us"
                        line1="support@renomate.com"
                        line2="Fast Response Team"
                    />
                    <InfoCard
                        icon={<MapPin />}
                        title="Headquarters"
                        line1="Healthcare City"
                        line2="California, USA"
                    />
                </motion.div>
            </div>
        </section>
    );
}

function InfoCard({ icon, title, line1, line2 }) {
    const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
    };

    return (
        <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            style={{
                padding: '3rem 2rem',
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                transition: 'box-shadow 0.3s ease',
                cursor: 'default',
                border: '1px solid rgba(241, 245, 249, 1)'
            }}
        >
            <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: '1px solid rgba(37, 99, 235, 0.1)'
            }}>
                {React.cloneElement(icon, { size: 30, strokeWidth: 1.5 })}
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem', color: '#0f172a', fontFamily: 'var(--font-serif)' }}>{title}</h3>
            <p style={{ color: '#334155', fontWeight: '600', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{line1}</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{line2}</p>
        </motion.div>
    );
}

function FormSection() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus('success');
        setTimeout(() => {
            setStatus('idle');
            setFormState({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    return (
        <section style={{ padding: '4rem 2rem 8rem' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundColor: '#ffffff',
                        padding: '0',
                        borderRadius: '2.5rem',
                        boxShadow: '0 50px 100px -20px rgba(37, 99, 235, 0.1)',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 40%) 1fr',
                        border: '1px solid rgba(37, 99, 235, 0.05)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Left Panel */}
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)',
                        padding: '4rem 3rem',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderRight: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>Let's Build a Healthy Future</h2>
                            <p style={{ opacity: 0.9, lineHeight: 1.6, fontSize: '1.1rem' }}>
                                Reach out to our expert team for any inquiries about our products or services.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
                            <BenefitIcon icon={<Microscope />} text="Advanced R&D Solutions" />
                            <BenefitIcon icon={<Building2 />} text="Global Facility Network" />
                            <BenefitIcon icon={<Users />} text="Patient-Centric Approach" />
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div style={{ padding: '4rem' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <FormInput label="Full Name" name="name" value={formState.name} onChange={handleChange} placeholder="Dr. Sarah Smith" />
                            <FormInput label="Work Email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="sarah@hospital.com" />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your requirements..."
                                    style={{
                                        width: '100%',
                                        padding: '1rem 0',
                                        border: 'none',
                                        borderBottom: '2px solid #e2e8f0',
                                        backgroundColor: 'transparent',
                                        fontSize: '1.1rem',
                                        fontFamily: 'inherit',
                                        resize: 'none',
                                        outline: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => { e.target.style.borderBottomColor = 'var(--primary)'; }}
                                    onBlur={(e) => { e.target.style.borderBottomColor = '#e2e8f0'; }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status !== 'idle'}
                                whileHover={'hover'}
                                whileTap={'tap'}
                                variants={{
                                    hover: { scale: 1.02 },
                                    tap: { scale: 0.98 }
                                }}
                                style={{
                                    marginTop: '2rem',
                                    padding: '1.25rem',
                                    backgroundColor: status === 'success' ? '#10b981' : 'var(--primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '1rem',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    transition: 'background-color 0.3s',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'idle' && (
                                        <motion.span
                                            key="idle"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                        >
                                            Send Message <ArrowRight size={20} />
                                        </motion.span>
                                    )}
                                    {status === 'sending' && (
                                        <motion.span
                                            key="sending"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                        >
                                            Sending...
                                        </motion.span>
                                    )}
                                    {status === 'success' && (
                                        <motion.span
                                            key="success"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                        >
                                            Message Sent <Send size={20} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function BenefitIcon({ icon, text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.9 }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}>
                {React.cloneElement(icon, { size: 20 })}
            </div>
            <span style={{ fontWeight: '500' }}>{text}</span>
        </div>
    );
}

function FormInput({ label, name, type = 'text', value, onChange, placeholder }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    padding: '1rem 0',
                    border: 'none',
                    borderBottom: '2px solid #e2e8f0',
                    backgroundColor: 'transparent',
                    fontSize: '1.1rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                }}
                onFocus={(e) => { e.target.style.borderBottomColor = 'var(--primary)'; }}
                onBlur={(e) => { e.target.style.borderBottomColor = '#e2e8f0'; }}
            />
        </div>
    );
}

function MapSection() {
    return (
        <section style={{ height: '450px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ textAlign: 'center' }}>
                <MapPin size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Google Maps Integration</p>
                <p>123 Wellness Blvd, Healthcare City</p>
            </div>
        </section>
    );
}

function SplitText({ text, delay = 0 }) {
    const letters = text.split("");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        })
    };
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        }
    };

    return (
        <motion.span style={{ display: "inline-block", overflow: "hidden" }} variants={container} initial="hidden" animate="visible">
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}
