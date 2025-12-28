
'use client';

import { useRef } from 'react';
import { getPath } from '@/lib/basePath';
import { BlurText } from '@/components/ui/BlurText';
import { SomaliStar } from '@/components/ui/SomaliStar';
import config from '@/portfolio-plan.json';
import { ProfileCard } from '@/components/ui/ProfileCard';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const { hero } = config.sections;
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={targetRef} className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <SomaliStar />
      </div>

      <motion.div style={{ opacity, scale, y }} className="max-w-4xl w-full flex flex-col items-center gap-12 z-10">

        {/* Profile Card / Avatar */}
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-panel/50 overflow-hidden shadow-2xl relative z-10">
            <img
              src={hero.profileCard.avatarUrl ? getPath(hero.profileCard.avatarUrl) : getPath('/Anas.png')}
              alt={hero.profileCard.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Main Heading */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            I&apos;m <span className="text-accent">{hero.profileCard.name.split(' ')[0]}</span>.
            <span className="block mt-2 text-2xl md:text-4xl text-text/90 font-light">
              {hero.heading}
            </span>
          </h1>

          <div className="h-px w-24 bg-accent/30 mx-auto my-6" />

          <BlurText
            text={hero.blurText.text}
            delay={hero.blurText.delay}
            animateBy={hero.blurText.animateBy as 'words' | 'chars'}
            direction={hero.blurText.direction as 'top' | 'bottom'}
            className="text-lg md:text-xl text-text/60 font-light"
          />
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProjects}
          className="mt-12 animate-bounce p-3 rounded-full hover:bg-white/5 transition-colors group"
          aria-label="Scroll to projects"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text/50 group-hover:text-accent transition-colors"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}

