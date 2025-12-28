'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { getPath } from '@/lib/basePath';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
}

export function ProfileCard({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  enableTilt = true,
  enableMobileTilt = false,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || (isMobile && !enableMobileTilt)) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-80 rounded-2xl p-6 backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Card background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-panel to-panel/80 rounded-2xl border border-accent/20" />

      <div className="relative z-10 space-y-4">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto rounded-full bg-accent/20 border-2 border-accent overflow-hidden">
          {avatarUrl && avatarUrl !== '/path/to/avatar.jpg' ? (
            <img src={getPath(avatarUrl)} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-accent">
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-text">{name}</h3>
          <p className="text-text/70">{title}</p>
          <p className="text-accent text-sm">{handle}</p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-text/60">{status}</span>
          </div>
        </div>

        {/* Contact Button */}
        <button className="w-full py-2 px-4 rounded-lg bg-accent hover:bg-accent/80 text-white font-medium transition-colors">
          {contactText}
        </button>
      </div>
    </motion.div>
  );
}

