import { Hero } from '@/components/sections/Hero';
import { WorkCTA } from '@/components/sections/WorkCTA';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <WorkCTA />
      <About />
      <Footer />
    </main>
  );
}

