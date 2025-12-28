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
                        I bring <span className="font-bold text-white">curiosity</span>, <span className="font-bold text-white">collaboration</span>,
                        and a <span className="font-bold text-white">human-centered</span> mindset
                        to drive <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">meaningful change.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text/60 max-w-2xl mx-auto leading-relaxed font-light">
                        Change that fuels product growth and improves human lives.
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
                                className="rotate-180"
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
                        <ResumeCard title="Behavior" delay={0.1}>
                            <p>
                                I stay curious, outcome-focused, and pragmatic. I build trust with peers and stakeholders by working collaboratively toward shared goals.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="Strengths" delay={0.2}>
                            <p>
                                I balance hands-on design with strategic vision. My strength lies in turning user insights into experiences that create real business value.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="Mindset" delay={0.3}>
                            <p>
                                I help others succeed by fostering inclusion and focusing on outcomes. With a human-centered mindset, I create experiences that make a difference.
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
                        <ResumeCard title="Senior Product Designer" subtitle="Company Name • 2022 - Present">
                            <p className="mb-4">
                                Leading the design system initiative and overseeing the UX for the core product suite.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text/70">
                                <li>Spearheaded a complete redesign of the dashboard, increasing user engagement by 40%.</li>
                                <li>Mentored junior designers and established a weekly design critique session.</li>
                                <li>Collaborated closely with engineering to ensure pixel-perfect implementation.</li>
                            </ul>
                        </ResumeCard>

                        <ResumeCard title="Product Designer" subtitle="Previous Corp • 2020 - 2022">
                            <p className="mb-4">
                                Focused on mobile app experiences and scaling the consumer-facing platform.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text/70">
                                <li>Designed and launched the iOS and Android apps from scratch.</li>
                                <li>Conducted user research that led to a pivot in the onboarding flow.</li>
                            </ul>
                        </ResumeCard>

                        <ResumeCard title="UX/UI Designer" subtitle="StartUp Inc • 2018 - 2020">
                            <p>
                                Worked in a fast-paced environment wearing multiple hats from research to frontend code.
                            </p>
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
                        {['Product Strategy', 'UI/UX Design', 'Design Systems', 'User Research', 'Prototyping', 'Frontend Dev', 'Motion Design', 'Testing'].map((role, i) => (
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
                        <ResumeCard title="Engineering Roots">
                            <p>
                                I started my journey writing code, giving me a deep understanding of technical constraints and possibilities. This allows me to communicate effectively with developers and ship feasible designs.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="Design Evolution">
                            <p>
                                Over time, I realized my true passion lay in the "why" and "how" of user interaction. I pivoted to design to solve problems at their core, ensuring technology serves human needs.
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
                        <ResumeCard title="Bachelor of Computer Science" subtitle="University of Technology • 2016 - 2020">
                            <p>
                                Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.
                            </p>
                        </ResumeCard>
                        <ResumeCard title="Professional Certifications" subtitle="Various Institutions • 2021">
                            <ul className="list-disc list-inside mt-2 space-y-1 text-text/70">
                                <li>Google UX Design Certificate</li>
                                <li>Advanced React Patterns Workshop</li>
                                <li>Accessibility in Modern Web Applications</li>
                            </ul>
                        </ResumeCard>
                    </div>
                </section>

            </div>

            {/* Download Button Section Removed - Footer will take over */}

            {/* Footer added to the Resume Page */}
            <div id="contact">
                <Footer />
            </div>
        </main>
    );
}
