'use client';

import { BlurText } from '@/components/ui/BlurText';
import { SomaliStar } from '@/components/ui/SomaliStar';
import config from '@/portfolio-plan.json';

export function Hero() {
  const { hero } = config.sections;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20 pb-10">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <SomaliStar />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 space-y-8">
        {/* Profile Image - Centered and Circular */}
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-panel/50 overflow-hidden shadow-2xl relative z-10">
            <img
              src={hero.profileCard.avatarUrl || '/Anas.png'}
              alt={hero.profileCard.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          {/* Subtle glow behind avatar */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl transform group-hover:scale-125 transition-transform duration-500 -z-10" />
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
      </div>
    </section>
  );
}

