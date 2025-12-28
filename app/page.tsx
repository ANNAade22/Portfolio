import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}

