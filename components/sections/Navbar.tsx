'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Resume', href: '/resume' },
        { label: 'The Right Fit', href: '#compatibility' },
        { label: 'Playbook', href: '#playbook' },
        { label: 'Contact', href: '#contact' },
        { label: 'Work', href: '#projects' },
    ];

    const finalNavItems = [
        { label: 'Home', href: '/' },
        { label: 'Resume', href: '/resume' },
        { label: 'Contact', href: '/contact' },
        { label: 'My work', href: '#projects' },
    ];

    const pathname = usePathname();
    const [isVisible, setIsVisible] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        // Always show on non-resume pages
        if (pathname !== '/resume') {
            setIsVisible(true);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show on scroll up
            if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            }
            // Hide on scroll down
            else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // If on resume page and invisible, hide it. Otherwise show.
    // We use a transform class to animate it out/in.
    const navClassName = `fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none transition-transform duration-300 ${pathname === '/resume' && !isVisible ? '-translate-y-full' : 'translate-y-0'
        }`;

    // Note: We removed the immediate "return null" for /resume to allow this dynamic behavior
    // but we might want to start hidden if we want "let the other navbar disappear" to be the default state?
    // User said "when i go for resume page let the other navbar disappear". 
    // BUT "when i try scroll up... it should show".
    // So maybe initial state on /resume could be false? 
    // Let's stick to the scroll logic: if you arrive at /resume (top of page), scrollY is 0.
    // If we want it HIDDEN by default on load, we can check that. 
    // But usually you want navigation available at the top. 
    // However, the prompt says "when i go for resume page let the other navbar disappear" (previous prompt).
    // Let's assume starting visible at top is okay, but it hides on scroll. 
    // OR, if they really want it hidden initially, we can set isVisible(false) if pathname changes to /resume.

    // Let's try starting visible at top (standard UX) unless user insists "disappear" meant "gone immediately".
    // Actually, "when i go for resume page let the other navbar disappear" -> implies default is hidden.
    // So let's initialize isVisible false if /resume?
    // But "scroll up" shows it. At top (0), you can't scroll up. 
    // So if it's hidden at top, you can NEVER show it unless you scroll down then up. 
    // That seems weird. 
    // I will interpret "disappear" as "auto-hide behavior" or "initially hidden but show on scroll up".
    // I'll stick to standard "show on up, hide on down".

    if (pathname === '/resume' && isVisible === false) {
        // To animate we need to render the element but with transform.
        // If we return null, no animation.
    }

    return (
        <nav className={navClassName}>
            <div className="bg-panel/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 pointer-events-auto flex items-center gap-6">
                {finalNavItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="text-sm font-medium text-text/80 hover:text-white transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
