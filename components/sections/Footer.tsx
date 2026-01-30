'use client';

import { motion } from 'framer-motion';
import config from '@/portfolio-plan.json';

export function Footer() {
  const { footer, hero } = config.sections;

  const handleAction = () => {
    if (footer.button.action.startsWith('mailto:')) {
      window.location.href = footer.button.action;
    } else if (footer.button.action.startsWith('http')) {
      window.open(footer.button.action, '_blank');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getEmailFromAction = (action: string) => {
    if (action.startsWith('mailto:')) {
      return action.replace('mailto:', '');
    }
    return action;
  };

  interface FooterLink {
    label: string;
    action: () => void;
    isEmail?: boolean;
  }

  const footerSections: { title: string; links: FooterLink[] }[] = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', action: () => scrollToTop() },
        { label: 'Projects', action: () => scrollToSection('projects') },
        { label: 'About', action: () => scrollToSection('about') },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          label: getEmailFromAction(footer.button.action),
          action: handleAction,
          isEmail: true,
        },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-text/10 bg-transparent">
      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              {footer.cta}
            </p>
            <motion.button
              onClick={handleAction}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 mt-6"
              style={{
                backgroundColor: 'transparent',
                color: footer.button.color,
                borderColor: footer.button.color,
              }}
            >
              {footer.button.text}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-text/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-text mb-4 font-groote">
                {hero.profileCard.name.split(' ')[0]}
              </h3>
              <p className="text-text/60 text-sm leading-relaxed">
                {hero.profileCard.title}
              </p>
              <p className="text-text/50 text-sm">
                {hero.heading}
              </p>
            </motion.div>

            {/* Navigation & Contact */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-sm font-semibold text-text/90 uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={link.action}
                        className="text-text/60 hover:text-text transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        {link.isEmail && (
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        <span>{link.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-text/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text/50">
              <p>
                © {new Date().getFullYear()} {hero.profileCard.name.split(' ')[0]}. All rights reserved.
              </p>

            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

