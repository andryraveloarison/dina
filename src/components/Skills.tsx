import React from 'react';

const Skills: React.FC = () => {
    const skillsData = [
        {
            num: '01',
            title: 'Ressources Humaines',
            tags: ['Recrutement', 'Talent Acquisition', 'Onboarding', 'Entretiens', 'Suivi RH', 'Offres de prestation'],
            delay: '',
        },
        {
            num: '02',
            title: 'Langues',
            tags: ['Français (DELF 86/100)', 'Malgache', 'Anglais'],
            delay: 'reveal-delay-1',
        },
        {
            num: '03',
            title: 'Logiciels',
            tags: ['MS Office', 'MS Project', 'SPSS', 'Sphinx', 'KoboToolbox', 'Canva', 'Vista Create'],
            delay: 'reveal-delay-2',
        },
        {
            num: '04',
            title: 'Management',
            tags: ['Leadership', 'Gestion d\'équipe', 'Communication non-violente', 'Gestion du temps', 'Gestion du stress'],
            delay: '',
        },
        {
            num: '05',
            title: 'Analyse & Data',
            tags: ['Analyse des données', 'Traitement statistique', 'Collecte de données', 'Reporting'],
            delay: 'reveal-delay-1',
        },
        {
            num: '06',
            title: 'Soft Skills',
            tags: ['Assertivité', 'Empathie', 'Prise de parole publique', 'Plaidoirie', 'Organisation'],
            delay: 'reveal-delay-2',
        },
    ];

    return (
        <section className="skills" id="skills">
            <p className="section-num reveal">03 — Compétences</p>
            <h2 className="section-title reveal reveal-delay-1">
                Expertise &<br /><em>Outils</em>
            </h2>

            <div className="skills-grid" style={{ marginTop: '5rem' }}>
                {skillsData.map((skill, index) => (
                    <div key={index} className={`skill-card reveal ${skill.delay}`}>
                        <p className="skill-card-num">{skill.num}</p>
                        <h3 className="skill-card-title">{skill.title}</h3>
                        <div className="skill-tags">
                            {skill.tags.map((tag, i) => (
                                <span key={i} className="skill-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
