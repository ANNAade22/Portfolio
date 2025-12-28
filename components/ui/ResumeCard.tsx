'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ResumeCardProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function ResumeCard({ title, subtitle, children, className = '', delay = 0 }: ResumeCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)" }}
            className={`relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 hover:border-accent/30 transition-colors group ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {(title || subtitle) && (
                <div className="mb-6 relative z-10">
                    {title && (
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-accent transition-colors">
                            {title}
                        </h3>
                    )}
                    {subtitle && (
                        <p className="text-sm font-medium text-text/60 uppercase tracking-widest">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            <div className="relative z-10 text-text/80 leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}
