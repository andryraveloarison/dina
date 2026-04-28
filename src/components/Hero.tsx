import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg"></div>
            <div className="hero-noise"></div>
            <div className="hero-initials">FB</div>
            <div className="hero-tag">HR Consultant · Madagascar</div>

            <div className="hero-content">
                <h1 className="hero-name">
                    Faneva<br />
                    <em>Dina</em><br />
                    Fitiavana
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
        </section>
    );
};

export default Hero;
