'use client';

import React, { useEffect, useState } from 'react';

export function ResumeNavbar() {
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { label: 'About me', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Roles', href: '#roles' },
        { label: 'Background', href: '#background' },
        { label: 'Education', href: '#education' },
    ];

    const [isMainNavbarVisible, setIsMainNavbarVisible] = useState(true);
    const lastScrollY = React.useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const sections = navItems.map(item => item.href.substring(1));
            let current = '';

            // Update active section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);

            // Logic to track Main Navbar visibility (must match Navbar.tsx logic)
            // Show on scroll up, hide on scroll down
            if (currentScrollY < lastScrollY.current) {
                // Scrolling UP -> Main Navbar shows -> Resume Navbar moves down
                setIsMainNavbarVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                // Scrolling DOWN -> Main Navbar hides -> Resume Navbar moves up
                setIsMainNavbarVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed left-0 right-0 z-40 flex justify-center py-4 transition-all duration-300 ${isMainNavbarVisible ? 'top-16' : 'top-0'
                }`}
        >
            <div className="bg-panel/90 backdrop-blur-md border border-white/5 rounded-full px-1 py-1 flex items-center shadow-lg overflow-x-auto max-w-[95vw] scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`px-2 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeSection === item.href.substring(1)
                            ? 'bg-white/10 text-white'
                            : 'text-text/60 hover:text-text hover:bg-white/5'
                            }`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
