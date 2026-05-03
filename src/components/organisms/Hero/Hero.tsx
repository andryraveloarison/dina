import React, { useState, useRef, useEffect } from 'react';
import Preloader from '../../molecules/Preloader/Preloader';
import { TypewriterText } from '../../atoms/TypewriterText/TypewriterText';
import './Hero.css';

interface HeroProps {
    onLoadingComplete: () => void;
}

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

        const preImgTop = (window as any).__preloaderImgTop as number | undefined;
        if (preImgTop === undefined) return;
        delete (window as any).__preloaderImgTop;

        const vw = window.innerWidth;
        const finalWidth = vw <= 507 ? '90%' : vw <= 814 ? '60%' : '320px';

        // Attendre que le layout soit stable (2 frames)
        requestAnimationFrame(() => {
            requestAnimationFrame(async () => {
                void wrap.offsetHeight; // force reflow

                const heroRect = wrap.getBoundingClientRect();
                const delta = preImgTop - heroRect.top;

                // 1. Repositionner l'image à la position du preloader (encore invisible)
                wrap.style.transform = `translateY(${delta}px)`;
                wrap.style.width = '320px';
                wrap.style.height = '440px';
                wrap.style.borderRadius = '4px';

                // 2. Forcer le browser à peindre ce translateY avant de rendre visible
                void wrap.offsetHeight;

                // 3. Maintenant rendre visible — l'image apparaît déjà à la bonne position
                wrap.style.opacity = '1';

                await new Promise(r => setTimeout(r, 800));

                // 4. Activer la transition CSS puis animer vers la position finale
                wrap.classList.add('hero-photo-wrap--animating');

                // Un frame pour que la transition CSS soit active
                requestAnimationFrame(() => {
                    wrap.style.transform = 'translateY(0px)';
                    wrap.style.width = finalWidth;
                    wrap.style.height = '440px';
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