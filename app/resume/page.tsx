'use client';

import { ResumeNavbar } from '@/components/sections/ResumeNavbar';
import { ResumeCard } from '@/components/ui/ResumeCard';
import { motion } from 'framer-motion';
import { Footer } from '@/components/sections/Footer';

export default function ResumePage() {
    return (
        <main className="min-h-screen relative z-10">

            {/* Resume Navbar */}
            <ResumeNavbar />

            {/* New Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 md:pt-48 pb-32 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 leading-[1.1] sm:leading-[1.1]">
                        I combine <span className="font-bold text-white">Software Engineering</span> with <span className="font-bold text-white">Cyber Security</span>,
                        building <span className="font-bold text-white">secure</span> applications that
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white"> scale with confidence.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text/60 max-w-2xl mx-auto leading-relaxed font-light">
                        From graphic design roots to full-stack security-focused engineering.
                    </p>

                    <div className="flex flex-col items-center gap-2">
                        {/* Clickable Scroll Arrow */}
                        <motion.button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-white hover:text-accent transition-colors"
                            aria-label="Scroll to content"
                        >
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-8 space-y-32 mb-20">

                {/* About Me / The Way I Work */}
                <section id="about" className="scroll-mt-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-12"
                    >
                        The Way <span className="text-accent italic">I Work.</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ResumeCard title="Security First" delay={0.1}>
                            <p>
                                I don't just build features; I ensure they are secure. My background in Cyber Security means I think about vulnerabilities before writing the first line of code.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="Creative Eye" delay={0.2}>
                            <p>
                                With years of experience using Adobe Creative Suite, I bridge the gap between engineering and design, creating interfaces that are both beautiful and functional.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="Problem Solver" delay={0.3}>
                            <p>
                                Whether it's a complex University Management System or leading a startup, I break down big problems into manageable, scalable solutions.
                            </p>
                        </ResumeCard>
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" className="scroll-mt-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-12"
                    >
                        Work <span className="text-accent italic">Experience.</span>
                    </motion.h2>

                    <div className="space-y-6">
                        <ResumeCard title="CEO & Founder" subtitle="DEKO Startup • 2021 - Present">
                            <p className="mb-4">
                                Founded and led a startup focused on delivering innovative digital solutions.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text/70">
                                <li>Directed product strategy and business development.</li>
                                <li>Managed a cross-functional team of developers and designers.</li>
                                <li>Oversaw the end-to-end lifecycle of client projects.</li>
                            </ul>
                        </ResumeCard>

                        <ResumeCard title="Software Engineer" subtitle="Freelance & Contract • 2021 - Present">
                            <p className="mb-4">
                                Specializing in Full Stack Development and Web Applications.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text/70">
                                <li>Developed a comprehensive University Management System with role-based dashboards.</li>
                                <li>Built high-performance landing pages and e-commerce sites for beauty and construction clients.</li>
                            </ul>
                        </ResumeCard>

                        <ResumeCard title="Graphic Designer" subtitle="Freelance • 2019 - 2021">
                            <p>
                                Extensive experience with Adobe Creative Cloud (After Effects, Premiere Pro, Illustrator).
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text/70">
                                <li>Created brand identities, logos, and marketing materials.</li>
                                <li>Produced motion graphics and video edits for digital campaigns.</li>
                            </ul>
                        </ResumeCard>
                    </div>
                </section>

                {/* Roles / Skills */}
                <section id="roles" className="scroll-mt-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-12"
                    >
                        My <span className="text-accent italic">Roles.</span>
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Cyber Security', 'Full Stack Dev', 'App Development', 'Network Security', 'Pentesting', 'UI/UX Design', 'Motion Graphics', 'Startup Founder'].map((role, i) => (
                            <ResumeCard key={role} delay={i * 0.05} className="text-center py-8 flex items-center justify-center">
                                <span className="font-bold text-lg">{role}</span>
                            </ResumeCard>
                        ))}
                    </div>
                </section>

                {/* Background */}
                <section id="background" className="scroll-mt-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-12"
                    >
                        Background <span className="text-accent italic">& Context.</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ResumeCard title="From Design to Code">
                            <p>
                                My journey started with visual creativity in Graphic Design. Using tools like Adobe After Effects gave me a taste for detail, which I eventually translated into code. I realized that building the engine behind the visuals was just as creative.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="The Security Focus">
                            <p>
                                As I dove deeper into software engineering, I understood that functionality without security is a liability. My education at LPU and my work in Cyber Security ensures that the systems I build are robust, safe, and reliable.
                            </p>
                        </ResumeCard>
                    </div>
                </section>

                {/* Education */}
                <section id="education" className="scroll-mt-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-12"
                    >
                        Education <span className="text-accent italic">& Growth.</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 gap-6">
                        <ResumeCard title="Lovely Professional University" subtitle="Punjab, India • 2021 - 2025">
                            <p>
                                Focusing on Computer Science, Software Engineering, and Cyber Security.
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-text/70">
                                <li>Deep dive into Network Security and Application Security.</li>
                                <li>Full Stack Web and Mobile App Development.</li>
                            </ul>
                        </ResumeCard>
                    </div>
                </section>

            </div>

            {/* Footer added to the Resume Page */}
            <div id="contact">
                <Footer />
            </div>
        </main>
    );
}
