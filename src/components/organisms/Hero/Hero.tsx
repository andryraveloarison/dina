import React, { useState, useRef, useEffect } from 'react';
import Preloader from '../../molecules/Preloader/Preloader';
import { TypewriterText } from '../../atoms/TypewriterText/TypewriterText';
import './Hero.css';

interface HeroProps {
    onLoadingComplete: () => void;
}

// Typage explicite de window pour éviter @typescript-eslint/no-explicit-any
interface PreloaderWindow extends Window {
    __preloaderImgTop?: number;
}

declare const window: PreloaderWindow;

const Hero: React.FC<HeroProps> = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const photoRef = useRef<HTMLDivElement>(null);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        onLoadingComplete();
    };

    useEffect(() => {
        if (isLoading) return;
        if (window.innerWidth > 1037) return;

        const wrap = photoRef.current;
        if (!wrap) return;

        const preImgTop = window.__preloaderImgTop;
        if (preImgTop === undefined) return;

        delete window.__preloaderImgTop;

        const vw = window.innerWidth;
        const finalWidth = vw <= 507 ? '90%' : vw <= 814 ? '60%' : '320px';

        // Taille de départ hardcodée = exactement les valeurs CSS de .pre-img-track
        const START_W = '320px';

        requestAnimationFrame(() => {
            requestAnimationFrame(async () => {
                void wrap.offsetHeight;

                const heroRect = wrap.getBoundingClientRect();
                const delta = preImgTop - heroRect.top;

                // 1. Repositionner silencieusement à la position du preloader
                wrap.style.transform = `translateY(${delta}px)`;
                wrap.style.width = START_W;
                wrap.style.borderRadius = '4px';

                void wrap.offsetHeight;

                // 2. Rendre visible (le preloader est encore par-dessus, z-index: 20)
                wrap.style.opacity = '1';

                // 3. Démarrer immédiatement l'animation sous le preloader
                await new Promise(r => setTimeout(r, 50));

                wrap.classList.add('hero-photo-wrap--animating');

                requestAnimationFrame(() => {
                    wrap.style.transform = 'translateY(0px)';
                    wrap.style.width = finalWidth;
                    wrap.style.borderRadius = '20px';
                });
            });
        });

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

                        <div
                            className="hero-photo-wrap hero-photo-wrap--mobile-init"
                            ref={photoRef}
                        >
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