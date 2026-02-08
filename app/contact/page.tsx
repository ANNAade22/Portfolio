'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope, FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        company: '',
        message: '',
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', company: '', message: '' });
            } else {
                const data = await response.json();
                setSubmitStatus('error');
                setErrorMessage(data.error || 'Failed to send message');
            }
        } catch {
            setSubmitStatus('error');
            setErrorMessage('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const socialLinks = [
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: 'https://twitter.com/Adbulkadir46043',
            color: '#1DA1F2',
            label: '@Adbulkadir46043'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/ANNAade22',
            color: '#ffffff',
            label: 'ANNAade22'
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            url: 'https://wa.me/252616955570',
            color: '#25D366',
            label: '+252 61 695 5570'
        },
    ];

    return (
        <main className="min-h-screen relative z-10 flex items-center justify-center px-4 py-24">
            <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column - Heading & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
                                Let's <span className="font-bold">collaborate</span>
                            </h1>

                            <a
                                href="mailto:anasadbulkadirhussein@gmail.com"
                                className="inline-flex items-center gap-2 text-text/60 hover:text-accent transition-colors text-lg group"
                            >
                                <FaEnvelope />
                                <span className="group-hover:scale-110 transition-transform">anasadbulkadirhussein@gmail.com</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h3 className="text-sm uppercase tracking-wider text-text/50 font-semibold">Find me</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.05 * index }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="group relative px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                                        style={{
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="text-xl transition-colors duration-300"
                                                style={{ color: social.color }}
                                            >
                                                <social.icon />
                                            </span>
                                            <span className="text-sm text-text/70 group-hover:text-white transition-colors">
                                                {social.label}
                                            </span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Additional WhatsApp Number */}
                        <motion.a
                            href="https://wa.me/918639726319"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <span className="text-xl text-[#25D366]">
                                <FaWhatsapp />
                            </span>
                            <span className="text-sm text-text/70 group-hover:text-white transition-colors">
                                +91 86397 26319
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative"
                    >
                        <motion.div
                            className="rounded-2xl border border-white/10 bg-panel/40 backdrop-blur-xl p-8 shadow-2xl"
                            animate={isSubmitting ? {
                                x: [0, -5, 5, -5, 5, 0],
                                transition: { duration: 0.5 }
                            } : {}}
                        >
                            <h2 className="text-2xl font-bold text-white mb-8">Say hello</h2>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                animate={submitStatus === 'success' ? {
                                    scale: [1, 0.98, 1],
                                    transition: { duration: 0.4 }
                                } : {}}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="peer w-full bg-white/5 border border-white/20 py-3 px-4 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors rounded-lg"
                                            placeholder="Your name"
                                        />
                                        <label
                                            className={`absolute left-4 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider pointer-events-none
                        ${focusedField === 'name' || formData.name ? '-top-5' : 'top-3 text-base normal-case tracking-normal'}
                        peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider`}
                                        >
                                            Name
                                        </label>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="peer w-full bg-white/5 border border-white/20 py-3 px-4 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors rounded-lg"
                                            placeholder="Subject"
                                        />
                                        <label
                                            className={`absolute left-4 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider pointer-events-none
                        ${focusedField === 'subject' || formData.subject ? '-top-5' : 'top-3 text-base normal-case tracking-normal'}
                        peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider`}
                                        >
                                            Subject
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Company Field */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('company')}
                                            onBlur={() => setFocusedField(null)}
                                            className="peer w-full bg-white/5 border border-white/20 py-3 px-4 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors rounded-lg"
                                            placeholder="Company"
                                        />
                                        <label
                                            className={`absolute left-4 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider pointer-events-none
                        ${focusedField === 'company' || formData.company ? '-top-5' : 'top-3 text-base normal-case tracking-normal'}
                        peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider`}
                                        >
                                            Company
                                        </label>
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="peer w-full bg-white/5 border border-white/20 py-3 px-4 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors rounded-lg"
                                            placeholder="Email address"
                                        />
                                        <label
                                            className={`absolute left-4 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider pointer-events-none
                        ${focusedField === 'email' || formData.email ? '-top-5' : 'top-3 text-base normal-case tracking-normal'}
                        peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider`}
                                        >
                                            Email
                                        </label>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        rows={4}
                                        className="peer w-full bg-white/5 border border-white/20 py-3 px-4 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors resize-none rounded-lg"
                                        placeholder="Start typing here"
                                    />
                                    <label
                                        className={`absolute left-4 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider pointer-events-none
                      ${focusedField === 'message' || formData.message ? '-top-5' : 'top-3 text-base normal-case tracking-normal'}
                      peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider`}
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* Submit Button & Status */}
                                <div className="space-y-4">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        animate={
                                            isSubmitting
                                                ? {
                                                    scale: [1, 1.02, 1],
                                                    boxShadow: [
                                                        '0 10px 30px rgba(255, 255, 255, 0.1)',
                                                        '0 10px 40px rgba(255, 255, 255, 0.2)',
                                                        '0 10px 30px rgba(255, 255, 255, 0.1)',
                                                    ],
                                                    transition: {
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }
                                                }
                                                : submitStatus === 'success'
                                                    ? {
                                                        scale: [1, 1.05, 1],
                                                        backgroundColor: ['#ffffff', '#10b981', '#10b981'],
                                                        transition: { duration: 0.6 }
                                                    }
                                                    : {}
                                        }
                                        className={`group w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : submitStatus === 'success'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-white text-background hover:bg-accent hover:text-white'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.svg
                                                    className="h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                >
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </motion.svg>
                                                Sending...
                                            </>
                                        ) : submitStatus === 'success' ? (
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                className="flex items-center gap-2"
                                            >
                                                <FaCheck className="text-xl" />
                                                Sent!
                                            </motion.div>
                                        ) : (
                                            <>
                                                Submit
                                                <span className="group-hover:translate-x-1 transition-transform inline-block">
                                                    <FaArrowRight />
                                                </span>
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Success Message */}
                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15
                                            }}
                                            className="relative flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-lg border border-green-400/20 overflow-hidden"
                                        >
                                            {/* Glow effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"
                                                animate={{
                                                    x: ['-100%', '100%'],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: 1,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 10,
                                                    delay: 0.1
                                                }}
                                            >
                                                <FaCheck />
                                            </motion.div>
                                            <span className="relative z-10">Message sent successfully! I&apos;ll get back to you soon.</span>
                                        </motion.div>
                                    )}

                                    {/* Error Message */}
                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg"
                                        >
                                            <FaTimes />
                                            <span>{errorMessage}</span>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.form>

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
