'use client';

import CardSwap, { Card as SwapCard } from '@/components/ui/CardSwap';
import { CardStack } from '@/components/ui/card-stack';
import config from '@/portfolio-plan.json';
import { useState, useEffect } from 'react';
import { getPath } from '@/lib/basePath';

export function Projects() {
  const { projects } = config.sections;
  const cards = projects.cardSwap.cards;
  const [dimensions, setDimensions] = useState({
    width: 850,
    height: 500,
    cardDistance: 220,
    verticalDistance: 0
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      // Responsive configuration for CardSwap
      if (w < 768) {
        // Mobile values: tightly packed to fit < 380px screens
        setDimensions({ width: 280, height: 380, cardDistance: 20, verticalDistance: 20 });
      } else if (w < 1024) {
        // Tablet / Small Laptop
        setDimensions({
          width: 450,
          height: 300,
          cardDistance: 60,
          verticalDistance: projects.cardSwap.verticalDistance
        });
      } else if (w < 1280) {
        // Laptop / iPad Landscape (1024px)
        setDimensions({
          width: 600,
          height: 400,
          cardDistance: 100,
          verticalDistance: projects.cardSwap.verticalDistance
        });
      } else {
        // Desktop / Large Screens
        setDimensions({
          width: 750,
          height: 450,
          cardDistance: 180,
          verticalDistance: projects.cardSwap.verticalDistance
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-8">

        {/* Header Section */}
        <div className="text-center z-10 relative">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] whitespace-nowrap">
            {projects.title}
          </h2>
        </div>

        {/* Desktop & Mobile: Universal CardSwap */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <CardSwap
            width={dimensions.width}
            height={dimensions.height}
            cardDistance={dimensions.cardDistance}
            verticalDistance={dimensions.verticalDistance}
            delay={projects.cardSwap.delay}
            pauseOnHover={projects.cardSwap.pauseOnHover}
          >
            {cards.map((card) => (
              <SwapCard
                key={card.title}
                className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl group flex flex-col"
              >
                {/* Image Section - Top 65% */}
                <div className="relative h-[65%] w-full overflow-hidden bg-black/20">
                  {card.imageUrl && (
                    <img
                      src={getPath(card.imageUrl)}
                      alt={`${card.title} preview`}
                      className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'top center',
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b111b] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Section - Bottom 35% */}
                <div className="relative h-[35%] w-full flex flex-col justify-between p-6 bg-transparent">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {card.tech.slice(0, 3).map((tech) => (
                        <span
                          key={`${card.title}-${tech}`}
                          className="text-[10px] uppercase font-semibold text-accent tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={card.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwapCard>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
