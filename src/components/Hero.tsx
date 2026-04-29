import React, { useState } from 'react';
import Preloader from './Preloader';

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    return (
        <span className="typewriter-text">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="type-char"
                    style={{ animationDelay: `${delay + index * 0.05}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
};

const Hero: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Preloader onLoadingComplete={() => setIsLoading(false)} />
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
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
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
