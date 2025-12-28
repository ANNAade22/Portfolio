'use client';

import CardSwap, { Card as SwapCard } from '@/components/ui/CardSwap';
import { CardStack } from '@/components/ui/card-stack';
import config from '@/portfolio-plan.json';
import { useState, useEffect } from 'react';

export function Projects() {
  const { projects } = config.sections;
  const cards = projects.cardSwap.cards;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Transform cards for CardStack format
  const stackCards = cards.map((card: any, index: number) => ({
    id: index,
    name: card.title,
    designation: '',
    content: (
      <div className="w-full h-full flex items-center justify-center">
        {card.imageUrl && (
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
      </div>
    ),
  }));

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      <div className="max-w-full w-full space-y-8">

        {/* Header Section */}
        <div className="text-center z-10 relative">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] whitespace-nowrap">
            {projects.title}
          </h2>
        </div>

        {/* Mobile: CardStack */}
        {isMobile ? (
          <div className="flex items-center justify-center w-full py-12">
            <CardStack items={stackCards} offset={15} scaleFactor={0.08} />
          </div>
        ) : (
          /* Desktop: Horizontal CardSwap */
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <CardSwap
              width={850}
              height={500}
              cardDistance={projects.cardSwap.cardDistance}
              verticalDistance={projects.cardSwap.verticalDistance}
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
                        src={card.imageUrl}
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
                      <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
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
        )}
      </div>
    </section>
  );
}
