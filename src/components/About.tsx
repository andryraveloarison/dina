import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <p className="section-num reveal">01 — À propos</p>
            <h2 className="section-title reveal reveal-delay-1">
                Donner de<br /><em>l'importance</em><br />à chaque personne
            </h2>
            <div className="about-grid">
                <div className="reveal reveal-delay-2">
                    <blockquote className="about-quote">
                        "L'on est plus sociable et d'un meilleur commerce par le cœur que par l'esprit."
                    </blockquote>
                    <div className="about-pills" style={{ marginTop: '2rem' }}>
                        <span className="pill">Sociable</span>
                        <span className="pill">Responsable</span>
                        <span className="pill">Leader</span>
                    </div>
                </div>
                <div className="about-text reveal reveal-delay-3">
                    <p>
                        Diplômée en Gestion — Management et Administration d'Entreprise de l'Université Catholique de Madagascar (Master II, Vice-major de promotion), je me suis spécialisée dans les ressources humaines avec une passion profonde pour le recrutement et le développement des talents.
                    </p>
                    <p>
                        Mon parcours m'a menée du terrain associatif — chef d'équipe des Éclaireuses, responsable RH d'un groupe artistique — jusqu'aux environnements corporate exigeants, en passant par plusieurs années d'expérience chez Vivetic Group et aujourd'hui FTHM Consulting.
                    </p>
                    <p>
                        Je crois fermement que chaque individu mérite une attention singulière, et c'est ce fil conducteur qui guide chacune de mes missions de recrutement et d'accompagnement.
                    </p>
                    <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'var(--gold2)', letterSpacing: '0.08em' }}>
                        Lot II F 3RL, Antsahameva Andraisoro, Madagascar &nbsp;·&nbsp; 034 39 616 81
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
