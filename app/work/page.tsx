'use client';

import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/sections/Footer';

export default function WorkPage() {
    return (
        <main className="relative z-10">
            <Projects />
            <Footer />
        </main>
    );
}
