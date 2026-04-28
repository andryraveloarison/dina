import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <span className="nav-name">Dina Fitiavana</span>
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
