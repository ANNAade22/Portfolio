'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        company: '',
        message: '',
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:anasadbulkadirhussein@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
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
                        <div className="rounded-2xl border border-white/10 bg-panel/40 backdrop-blur-xl p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8">Say hello</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                            className="peer w-full bg-transparent border-b border-white/20 py-3 px-1 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                        <label
                                            className={`absolute left-1 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider
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
                                            className="peer w-full bg-transparent border-b border-white/20 py-3 px-1 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Subject"
                                        />
                                        <label
                                            className={`absolute left-1 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider
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
                                            className="peer w-full bg-transparent border-b border-white/20 py-3 px-1 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Company"
                                        />
                                        <label
                                            className={`absolute left-1 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider
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
                                            className="peer w-full bg-transparent border-b border-white/20 py-3 px-1 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Email address"
                                        />
                                        <label
                                            className={`absolute left-1 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider
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
                                        className="peer w-full bg-transparent border-b border-white/20 py-3 px-1 text-white placeholder-transparent focus:border-accent focus:outline-none transition-colors resize-none"
                                        placeholder="Start typing here"
                                    />
                                    <label
                                        className={`absolute left-1 transition-all duration-200 text-text/50 text-sm uppercase tracking-wider
                      ${focusedField === 'message' || formData.message ? '-top-5' : 'top-3 text-base normal-case tracking-normal'}
                      peer-focus:-top-5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider`}
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-2 px-8 py-4 bg-white text-background rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Submit
                                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                                        <FaArrowRight />
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
