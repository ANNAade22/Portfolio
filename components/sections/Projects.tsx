'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '@/portfolio-plan.json';
import { getPath } from '@/lib/basePath';

export function Projects() {
  const { projects } = config.sections;
  const cards = projects.cardSwap.cards;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, cards.length]);

  const activeCard = cards[activeIndex];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              {projects.title}
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            {projects.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Featured Project Card - Left Side */}
          <div
            className="lg:col-span-8 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative group"
              >
                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Image Container */}
                  <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
                    <motion.img
                      src={getPath(activeCard.imageUrl)}
                      alt={activeCard.title}
                      className="w-full h-full object-cover object-top"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b111b] via-[#0b111b]/50 to-transparent" />

                    {/* Project Number Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <span className="text-7xl md:text-8xl font-bold text-white/10">
                        0{activeIndex + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8 lg:p-10">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activeCard.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {activeCard.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {activeCard.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.a
                      href={activeCard.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:gap-4 group/btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeCard.linkText}
                      <svg
                        className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Navigation - Right Side */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {cards.map((card, index) => (
              <motion.button
                key={card.title}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-[140px] lg:w-full rounded-2xl overflow-hidden border transition-all duration-500 group/thumb ${activeIndex === index
                    ? 'border-accent shadow-lg shadow-accent/20 ring-2 ring-accent/30'
                    : 'border-white/10 hover:border-white/30'
                  }`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Thumbnail Image */}
                <div className="relative h-20 lg:h-24 overflow-hidden bg-panel">
                  <img
                    src={getPath(card.imageUrl)}
                    alt={card.title}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ${activeIndex === index ? 'scale-105' : 'scale-100 group-hover/thumb:scale-105'
                      }`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${activeIndex === index
                      ? 'bg-accent/20'
                      : 'bg-black/40 group-hover/thumb:bg-black/20'
                    }`} />

                  {/* Active Indicator */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>

                {/* Thumbnail Content */}
                <div className="p-3 bg-panel/80 backdrop-blur-sm">
                  <h4 className={`text-xs lg:text-sm font-semibold truncate transition-colors ${activeIndex === index ? 'text-accent' : 'text-white/80'
                    }`}>
                    {card.title}
                  </h4>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative h-2 rounded-full transition-all duration-500 ${activeIndex === index
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
            >
              {activeIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-accent"
                  layoutId="activeDot"
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 max-w-xs mx-auto">
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              key={activeIndex}
              initial={{ width: '0%' }}
              animate={{ width: isPaused ? undefined : '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
