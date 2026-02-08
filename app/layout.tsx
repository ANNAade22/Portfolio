import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ClickSpark from '@/components/effects/ClickSpark';
import { Navbar } from '@/components/sections/Navbar';
import { SilkBackground } from '@/components/effects/SilkBackground';
import config from '@/portfolio-plan.json';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const groote = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-groote',
});

const sparkConfig = config.globalLayers.ClickSpark;

import { getPath } from '@/lib/basePath';

// ... imports

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Interactive portfolio showcasing projects and skills',
  icons: {
    icon: getPath('/favcon.jpeg'),
    shortcut: getPath('/favcon.jpeg'),
    apple: getPath('/favcon.jpeg'),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${groote.variable}`}>
        <SilkBackground />
        <Navbar />
        <ClickSpark
          sparkColor={sparkConfig.sparkColor}
          sparkSize={sparkConfig.sparkSize}
          sparkRadius={sparkConfig.sparkRadius}
          sparkCount={sparkConfig.sparkCount}
          duration={sparkConfig.duration}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}

