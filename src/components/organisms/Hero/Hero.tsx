import React, { useState, useEffect } from 'react';
import Preloader from '../../molecules/Preloader/Preloader';
import { TypewriterText } from '../../atoms/TypewriterText/TypewriterText';
import './Hero.css';

interface HeroProps {
    onLoadingComplete: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        onLoadingComplete();
    };

    useEffect(() => {
        const photo = document.querySelector('.hero-photo-wrap');
        if (photo) {
            const rect = photo.getBoundingClientRect();

            const vh = window.innerHeight;

            const middle = 0.5 * vh
            const result = vh - rect.top
            const oke = result + rect.top - middle - 220
            const padding = rect.top - oke
            const test = padding + oke
            console.log("initial: " + rect.top + "padding: " + padding, "oke : " + oke + "test: " + test)

            //document.documentElement.style.setProperty('--hero-photo-top', `${-padding}px`);
        }


    }, [isLoading]);

    return (
        <>
            <Preloader onLoadingComplete={handleLoadingComplete} />
            <section className="hero" id="home">
                <div className="hero-bg"></div>
                <div className="hero-noise"></div>

                {!isLoading && (
                    <>
                        <div className="hero-initials">DF</div>
                        <div className="hero-tag">HR Consultant · Madagascar</div>
                        <div className="hero-content">
                            <h1 className="hero-name">
                                <em><TypewriterText text="Dina" delay={1.2} /></em><br />
                                <TypewriterText text="Fitiavana" delay={1.7} />
                            </h1>
                            <p className="hero-subtitle">
                                Une réelle passion pour les relations humaines et une curiosité incessante sur la manière de donner de l'importance à chaque personne.
                            </p>
                            <div className="hero-meta">
                                <div className="hero-meta-item">
                                    <p className="hero-meta-label">Poste actuel</p>
                                    <p className="hero-meta-value">HR Consultant</p>
                                </div>
                                <div className="hero-meta-item">
                                    <p className="hero-meta-label">Entreprise</p>
                                    <p className="hero-meta-value">FTHM Consulting</p>
                                </div>
                                <div className="hero-meta-item">
                                    <p className="hero-meta-label">Localisation</p>
                                    <p className="hero-meta-value">Antananarivo, Madagascar</p>
                                </div>
                            </div>
                        </div>

                        <div className="hero-photo-wrap">
                            <img
                                src="/photo1.jpeg"
                                alt="Dina Fitiavana"
                                className="hero-photo"
                            />
                        </div>

                        <div className="hero-scroll">
                            <span>Défiler</span>
                            <div className="hero-scroll-line"></div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Hero;
