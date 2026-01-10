"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle, MapPin, ChevronRight, ChevronLeft, Armchair } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        seat: '',
        name: '',
        age: '',
        phone: '',
        dialysisType: 'Hemodialysis',
        notes: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-50 to-teal-50 -z-10" />
                <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
                            Book Your Session
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Schedule your dialysis treatment with ease. Choose your preferred time and comfort zone.
                        </p>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="mb-8 max-w-2xl mx-auto">
                        <div className="flex justify-between items-center relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10" />
                            <div
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 rounded-full transition-all duration-500 -z-10"
                                style={{ width: `${((step - 1) / 3) * 100}%` }}
                            />

                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`flex flex-col items-center`}>
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${step >= i
                                                ? 'bg-blue-600 border-blue-200 text-white'
                                                : 'bg-white border-gray-200 text-gray-400'
                                            }`}
                                    >
                                        {i === 1 && <Calendar size={18} />}
                                        {i === 2 && <Armchair size={18} />}
                                        {i === 3 && <User size={18} />}
                                        {i === 4 && <CheckCircle size={18} />}
                                    </div>
                                    <span className={`text-xs mt-2 font-medium ${step >= i ? 'text-blue-600' : 'text-gray-400'}`}>
                                        {i === 1 ? 'Date' : i === 2 ? 'Seat' : i === 3 ? 'Details' : 'Confirm'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Card */}
                    <motion.div
                        layout
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        <div className="p-6 md:p-10 min-h-[500px]">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <StepOneDate
                                        key="step1"
                                        formData={formData}
                                        setFormData={setFormData}
                                        onNext={nextStep}
                                    />
                                )}
                                {step === 2 && (
                                    <StepTwoSeat
                                        key="step2"
                                        formData={formData}
                                        setFormData={setFormData}
                                        onNext={nextStep}
                                        onPrev={prevStep}
                                    />
                                )}
                                {step === 3 && (
                                    <StepThreeDetails
                                        key="step3"
                                        formData={formData}
                                        setFormData={setFormData}
                                        onNext={nextStep}
                                        onPrev={prevStep}
                                    />
                                )}
                                {step === 4 && (
                                    <StepFourConfirm
                                        key="step4"
                                        formData={formData}
                                        onPrev={prevStep}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

// Step Components

function StepOneDate({ formData, setFormData, onNext }) {
    const dates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return d;
    });

    const times = ['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM', '06:00 PM'];

    const handleDateSelect = (dateStr) => {
        setFormData({ ...formData, date: dateStr, time: '' }); // Reset time when date changes
    };

    const isFormValid = formData.date && formData.time;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <h2 className="text-2xl font-bold text-gray-800">Select Date & Time</h2>

            {/* Date Selection */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider">Available Dates</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {dates.map((date) => {
                        const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                        const isSelected = formData.date === dateStr;
                        return (
                            <button
                                key={dateStr}
                                onClick={() => handleDateSelect(dateStr)}
                                className={`p-3 rounded-2xl border text-center transition-all ${isSelected
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                    }`}
                            >
                                <div className="text-xs font-medium opacity-80">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                <div className="text-lg font-bold">{date.getDate()}</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider">Time Slot</label>
                {!formData.date ? (
                    <p className="text-gray-400 italic">Please select a date first</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {times.map((time) => {
                            const isSelected = formData.time === time;
                            return (
                                <button
                                    key={time}
                                    onClick={() => setFormData({ ...formData, time })}
                                    className={`py-3 px-4 rounded-xl border flex items-center justify-center transition-all ${isSelected
                                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                                        }`}
                                >
                                    <Clock size={16} className="mr-2" />
                                    <span className="font-medium">{time}</span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="flex justify-end pt-8">
                <button
                    onClick={onNext}
                    disabled={!isFormValid}
                    className={`px-8 py-3 rounded-full font-bold text-lg flex items-center transition-all ${isFormValid
                            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:px-10'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Next Step <ChevronRight size={20} className="ml-2" />
                </button>
            </div>
        </motion.div>
    );
}

function StepTwoSeat({ formData, setFormData, onNext, onPrev }) {
    // Mock seats visualization
    // 1-8 beds. Some occupied.
    const beds = [
        { id: '1', status: 'occupied', type: 'Window Side' },
        { id: '2', status: 'available', type: 'Normal' },
        { id: '3', status: 'available', type: 'Normal' },
        { id: '4', status: 'available', type: 'Corner' },
        { id: '5', status: 'unavailable', type: 'Maintenance' },
        { id: '6', status: 'available', type: 'Normal' },
        { id: '7', status: 'occupied', type: 'Window Side' },
        { id: '8', status: 'available', type: 'Premium' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Select Your Seat</h2>
                <p className="text-gray-500">Choose a comfortable spot for your treatment</p>
            </div>

            <div className="flex justify-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-white border border-gray-300"></div>
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                    <span>Occupied</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-600"></div>
                    <span>Selected</span>
                </div>
            </div>

            {/* Seat Map */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 max-w-lg mx-auto relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 uppercase tracking-widest">Nurse Station</div>

                <div className="grid grid-cols-2 gap-x-16 gap-y-8 mt-6">
                    {beds.map((bed) => {
                        const isSelected = formData.seat === bed.id;
                        const isAvailable = bed.status === 'available';

                        return (
                            <button
                                key={bed.id}
                                disabled={!isAvailable}
                                onClick={() => isAvailable && setFormData({ ...formData, seat: bed.id })}
                                className={`relative group p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${isSelected
                                        ? 'bg-blue-50 border-blue-600 z-10 scale-105 shadow-md'
                                        : !isAvailable
                                            ? 'bg-gray-100 border-transparent opacity-50 cursor-not-allowed'
                                            : 'bg-white border-transparent hover:border-blue-300 hover:shadow-md'
                                    }`}
                            >
                                <Armchair
                                    size={32}
                                    className={isSelected ? 'text-blue-600' : !isAvailable ? 'text-gray-400' : 'text-gray-600'}
                                />
                                <span className={`text-sm font-medium ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                                    Bed {bed.id}
                                </span>

                                {isSelected && (
                                    <motion.div
                                        layoutId="check"
                                        className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1"
                                    >
                                        <CheckCircle size={12} />
                                    </motion.div>
                                )}

                                {/* Tooltip */}
                                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-20 transition-opacity">
                                    {bed.type} - {bed.status}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between pt-8">
                <button
                    onClick={onPrev}
                    className="px-6 py-3 rounded-full font-medium text-gray-500 hover:bg-gray-100 flex items-center transition-colors"
                >
                    <ChevronLeft size={20} className="mr-2" /> Back
                </button>
                <button
                    onClick={onNext}
                    disabled={!formData.seat}
                    className={`px-8 py-3 rounded-full font-bold text-lg flex items-center transition-all ${formData.seat
                            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Next Step <ChevronRight size={20} className="ml-2" />
                </button>
            </div>
        </motion.div>
    );
}

function StepThreeDetails({ formData, setFormData, onNext, onPrev }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isFormValid = formData.name && formData.age && formData.phone;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Patient Details</h2>
                <p className="text-gray-500">Please fill in your information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 45"
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Dialysis Type</label>
                    <select
                        name="dialysisType"
                        value={formData.dialysisType}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    >
                        <option value="Hemodialysis">Hemodialysis</option>
                        <option value="Peritoneal Dialysis">Peritoneal Dialysis</option>
                        <option value="Consultation">Doctor Consultation</option>
                    </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Notes / Medical History</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any specific requirements or medical history..."
                        rows={3}
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none resize-none"
                    />
                </div>
            </div>

            <div className="flex justify-between pt-8">
                <button
                    onClick={onPrev}
                    className="px-6 py-3 rounded-full font-medium text-gray-500 hover:bg-gray-100 flex items-center transition-colors"
                >
                    <ChevronLeft size={20} className="mr-2" /> Back
                </button>
                <button
                    onClick={onNext}
                    disabled={!isFormValid}
                    className={`px-8 py-3 rounded-full font-bold text-lg flex items-center transition-all ${isFormValid
                            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Review & Book
                </button>
            </div>
        </motion.div>
    );
}

function StepFourConfirm({ formData, onPrev }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleConfirm = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-10 space-y-6 text-center"
            >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={48} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h2>
                <p className="text-gray-600 max-w-md">
                    Thank you, {formData.name}. Your appointment for <span className="font-semibold text-gray-800">{formData.dialysisType}</span> on <span className="font-semibold text-gray-800">{formData.date}</span> at <span className="font-semibold text-gray-800">{formData.time}</span> (Bed {formData.seat}) has been scheduled.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all mt-8"
                >
                    Book Another
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Review Booking</h2>
                <p className="text-gray-500">Please confirm your details</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-100 space-y-4">
                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                    <span className="text-gray-500 font-medium">Patient Name</span>
                    <span className="text-gray-900 font-bold text-lg">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                    <span className="text-gray-500 font-medium">Date & Time</span>
                    <div className="text-right">
                        <div className="text-gray-900 font-bold">{formData.date}</div>
                        <div className="text-blue-600 text-sm">{formData.time}</div>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                    <span className="text-gray-500 font-medium">Selected Seat</span>
                    <span className="text-gray-900 font-bold flex items-center gap-2">
                        <Armchair size={16} className="text-blue-600" />
                        Bed {formData.seat}
                    </span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-3">
                    <span className="text-gray-500 font-medium">Treatment</span>
                    <span className="text-gray-900 font-bold">{formData.dialysisType}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Contact</span>
                    <span className="text-gray-900 font-bold">{formData.phone}</span>
                </div>
            </div>

            <div className="flex justify-between pt-4">
                <button
                    onClick={onPrev}
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-full font-medium text-gray-500 hover:bg-gray-100 flex items-center transition-colors disabled:opacity-50"
                >
                    <ChevronLeft size={20} className="mr-2" /> Edit Details
                </button>
                <button
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    className={`px-10 py-3 rounded-full font-bold text-lg flex items-center justify-center transition-all bg-emerald-600 text-white shadow-lg hover:shadow-emerald-200 ${isSubmitting ? 'opacity-80 cursor-wait' : 'hover:-translate-y-1 hover:bg-emerald-700'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Processing...
                        </>
                    ) : (
                        <>
                            Confirm Booking <CheckCircle size={20} className="ml-2" />
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
}
