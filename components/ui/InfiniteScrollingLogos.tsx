'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface LogoItem {
    id: string | number;
    content: React.ReactNode;
    name?: string;
}

interface InfiniteScrollingLogosProps {
    items: LogoItem[];
    title?: string;
    speed?: number; // duration in seconds
}

const InfiniteScrollingLogos = ({ items, title, speed = 20 }: InfiniteScrollingLogosProps) => {
    return (
        <div className="w-full py-10">
            {title && (
                <h2 className="text-center text-xl text-white/70 mb-8 font-light tracking-wide">
                    {title}
                </h2>
            )}
            <div className="flex relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                <motion.div
                    transition={{
                        duration: speed,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    initial={{ x: 0 }}
                    animate={{ x: '-50%' }}
                    className="flex flex-none gap-16 pr-16"
                >
                    {[...new Array(2)].fill(0).map((_, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                            {items.map((item) => (
                                <div key={`${groupIndex}-${item.id}`} className="flex items-center justify-center flex-none h-14 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    {item.content}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteScrollingLogos;
