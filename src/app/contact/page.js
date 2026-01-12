"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, HeartPulse, Building2, Clock, Users, Plus, Microscope, Activity, ArrowRight } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>
            <MedicalParticles />
            <HeroSection />
            <div style={{ position: 'relative', zIndex: 2, background: 'white' }}>

                <FormSection />
                <MapSection />
            </div>
        </div>
    );
}

function MedicalParticles() {
    // Generate random particles
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line
        setParticles(Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 20 + 10,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
            type: i % 3 // 0: circle, 1: plus, 2: ring
        })));
    }, []);

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
        <section className={styles.heroSection}>
            <div className={styles.heroBackground}>
                {/* Abstract Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                }} />
            </div>

            <div className={styles.heroContent}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className={styles.badge}>
                        <Activity size={16} />
                        Professional Dialysis Solutions
                    </span>
                </motion.div>

                <h1 className={styles.heading}>
                    Connect With
                    <span className={styles.headingHighlight}>
                        Excellence
                    </span>
                </h1>

                <motion.p
                    className={styles.leadText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Experience world-class support for your dialysis facility.
                    We combine advanced technology with human-centric hospitality.
                </motion.p>
            </div>
        </section>
    );
}



function FormSection() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok && !data.error) {
                setStatus('success');
                setTimeout(() => {
                    setStatus('idle');
                    setFormState({ name: '', email: '', message: '' });
                }, 3000);
            } else {
                console.error('Failed to send:', data.error);
                setStatus('idle');
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('idle');
            alert('An unexpected error occurred.');
        }
    };

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    return (
        <section className={styles.formSection}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={styles.contactFormCard}
                >
                    {/* Left Panel */}
                    <div className={styles.formLeftPanel}>
                        <div className={styles.formContent}>
                            <h2 style={{ fontSize: '2.8rem', letterSpacing: '-1px', marginBottom: '1.5rem', lineHeight: 1.2 }}>Let&apos;s Build a Healthy Future</h2>
                            <p style={{ opacity: 0.9, lineHeight: 1.6, fontSize: '1.1rem' }}>
                                Reach out to our expert team for any inquiries about our products or services.
                            </p>
                        </div>

                        <div className={styles.formContent} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
                            <BenefitIcon icon={<Microscope />} text="Advanced R&D Solutions" />
                            <BenefitIcon icon={<Building2 />} text="Global Facility Network" />
                            <BenefitIcon icon={<Users />} text="Patient-Centric Approach" />
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div className={styles.formRightPanel}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <FormInput label="Full Name" name="name" value={formState.name} onChange={handleChange} placeholder="John Doe" />
                            <FormInput label="Work Email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="john@mail.com" />

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your requirements..."
                                    className={styles.inputField}
                                    style={{ resize: 'none' }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status !== 'idle'}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={styles.submitBtn}
                                style={{
                                    backgroundColor: status === 'success' ? '#10b981' : 'var(--primary)',
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
        <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.inputField}
            />
        </div>
    );
}


function MapSection() {
    return (
        <section className={styles.mapSection}>
            <div className={styles.mapContainer}>
                <div className={styles.mapWrapper}>
                    <iframe
                        src="https://maps.google.com/maps?q=9.58064,77.959399&t=m&z=15&output=embed&iwloc=near"
                        className={styles.mapFrame}
                        allowFullScreen=""
                        loading="lazy"
                        title="Renomate Location"
                    ></iframe>
                </div>

                <div className={styles.mapOverlayCard}>
                    <div className={styles.mapCardHeader}>
                        <div className={styles.mapCardIcon}>
                            <MapPin size={20} />
                        </div>
                        <h3 className={styles.mapCardTitle}>Visit Our Facility</h3>
                    </div>
                    <p className={styles.mapCardAddress}>
                        Sri RamaKrishna's Renomate<br />
                        Rajapalayam, Tamil Nadu<br />
                        India
                    </p>
                    <a
                        href="https://www.google.com/maps?ll=9.58064,77.959399&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=2697480994158212801"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.directionBtn}
                    >
                        Get Directions <ArrowRight size={16} />
                    </a>
                </div>
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
        <motion.span style={{ display: "inline-block", padding: "0.1em" }} variants={container} initial="hidden" animate="visible">
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}