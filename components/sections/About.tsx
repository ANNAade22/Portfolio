'use client';

import { motion } from 'framer-motion';
import config from '@/portfolio-plan.json';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiExpress,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator
} from 'react-icons/si';
import InfiniteScrollingLogos from '@/components/ui/InfiniteScrollingLogos';

const ICON_SIZE = 56;

// Icon wrapper component for consistent styling
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="text-text/90 hover:text-text transition-colors duration-200 inline-flex items-center justify-center">
    {children}
  </span>
);

// Map skills to icons and links
const skillIconMap: Record<string, { node: React.ReactNode; href?: string }> = {
  'Next.js': {
    node: <IconWrapper><SiNextdotjs size={ICON_SIZE} /></IconWrapper>,
    href: 'https://nextjs.org'
  },
  'React': {
    node: <IconWrapper><SiReact size={ICON_SIZE} /></IconWrapper>,
    href: 'https://react.dev'
  },
  'TypeScript': {
    node: <IconWrapper><SiTypescript size={ICON_SIZE} /></IconWrapper>,
    href: 'https://www.typescriptlang.org'
  },
  'Node.js': {
    node: <IconWrapper><SiNodedotjs size={ICON_SIZE} /></IconWrapper>,
    href: 'https://nodejs.org'
  },
  'Tailwind CSS': {
    node: <IconWrapper><SiTailwindcss size={ICON_SIZE} /></IconWrapper>,
    href: 'https://tailwindcss.com'
  },
  'PostgreSQL': {
    node: <IconWrapper><SiPostgresql size={ICON_SIZE} /></IconWrapper>,
    href: 'https://www.postgresql.org'
  },
  'Firebase': {
    node: <IconWrapper><SiFirebase size={ICON_SIZE} /></IconWrapper>,
    href: 'https://firebase.google.com'
  },
  'Figma handoff': {
    node: <IconWrapper><SiFigma size={ICON_SIZE} /></IconWrapper>,
    href: 'https://www.figma.com'
  },
  'Adobe After Effects': {
    node: <IconWrapper><SiAdobeaftereffects size={ICON_SIZE} /></IconWrapper>,
    href: 'https://www.adobe.com/products/aftereffects.html'
  },
  'Adobe Premiere Pro': {
    node: <IconWrapper><SiAdobepremierepro size={ICON_SIZE} /></IconWrapper>,
    href: 'https://www.adobe.com/products/premiere.html'
  },
  'Adobe Illustrator': {
    node: <IconWrapper><SiAdobeillustrator size={ICON_SIZE} /></IconWrapper>,
    href: 'https://www.adobe.com/products/illustrator.html'
  },
};

const getSkillLogo = (skill: string) => {
  // Check if we have an icon for this skill
  if (skillIconMap[skill]) {
    return {
      ...skillIconMap[skill],
      title: skill,
      ariaLabel: skill,
    };
  }

  // For Express/Fastify, use Express icon
  if (skill === 'Express/Fastify') {
    return {
      node: <IconWrapper><SiExpress size={ICON_SIZE} /></IconWrapper>,
      title: skill,
      ariaLabel: skill,
      href: 'https://expressjs.com',
    };
  }

  // For skills without icons, create a text-based logo
  return {
    node: (
      <span className="text-text/80 hover:text-text font-medium whitespace-nowrap transition-colors duration-200">
        {skill}
      </span>
    ),
    title: skill,
    ariaLabel: skill,
  };
};

export function About() {
  const { about } = config.sections;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const techLogos = about.skills.map(skill => getSkillLogo(skill));

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              About Me
            </h2>
            <p className="text-xl text-text/80 leading-relaxed">
              {about.summary}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-text mb-8">Skills & Tools</h3>
            <div className="w-full relative">
              <InfiniteScrollingLogos
                speed={30}
                items={techLogos.map((logo, index) => ({
                  id: index,
                  content: (logo as any).href ? (
                    <a
                      href={(logo as any).href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded"
                      aria-label={(logo as any).ariaLabel || (logo as any).title}
                    >
                      {(logo as any).node}
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center">
                      {(logo as any).node}
                    </div>
                  )
                }))}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

