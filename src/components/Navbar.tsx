import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'nav-visible' : ''}>
            <div className="nav-links">
                <a href="#about">À propos</a>
                <a href="#experience">Expérience</a>
                <a href="#skills">Compétences</a>
                <a href="#formation">Formation</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
