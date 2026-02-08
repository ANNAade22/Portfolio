'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function WorkCTA() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-10 md:p-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 rounded-3xl blur-xl opacity-50" />

                    {/* Content */}
                    <div className="relative z-10">
                        <motion.span
                            className="inline-block text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4"
                            initial={{ opacity: 0, letterSpacing: '0.5em' }}
                            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Portfolio
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
                                My Work
                            </span>
                        </h2>

                        <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-8">
                            Explore projects built with precision, security, and creativity.
                        </p>

                        <Link href="/work">
                            <motion.span
                                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:gap-4 cursor-pointer group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View All Projects
                                <svg
                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
