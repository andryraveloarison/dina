import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
    const experiences = [
        {
            date: 'Sept. 2024 — Présent',
            company: 'FTHM Consulting · Antsahavola, Antananarivo',
            role: 'HR Consultant',
            desc: [
                'Réalisation de missions de recrutement pour des clients multi-secteurs',
                'Analyse des besoins et conception des outils de recrutement adéquats',
                'Participation aux réunions de démarrage et restitution avec les clients',
                'Rédaction des livrables et élaboration des outils de suivi RH',
                'Rédaction des offres techniques et financières (secteur privé et public)',
                'Veille au respect des normes internationales de qualité',
            ],
        },
        {
            date: 'Mai — Sept. 2024',
            company: 'Vivetic Group · Andohatapenaka',
            role: 'Chargée de Recrutement',
            desc: [
                'Préparation des recrutements hebdomadaires (annonces réseaux sociaux)',
                'Analyse des besoins des départements demandeurs',
                'Conduite des entretiens de présélection téléphoniques et en présentiel',
                'Accueil et intégration des nouveaux salariés',
                'Compte rendu des réunions hebdomadaires',
            ],
        },
        {
            date: 'Jan. — Mai 2024',
            company: 'Vivetic Group · Andohatapenaka',
            role: 'Assistante Recrutement — CDD',
            desc: [
                'Triage des CVs et gestion des candidatures',
                'Conduite des entretiens',
                'Suivi des contrats et dossiers candidats',
            ],
        },
        {
            date: 'Août — Nov. 2022',
            company: 'Vivetic Group · Stages',
            role: 'Chargée de Recrutement & RH Administrative',
            desc: [
                'Acquisition de talents : détection de candidats, contact et évaluation des motivations',
                'Édition de lettres administratives (attestations, contrats de travail, …)',
                'Classement des dossiers du personnel pour un suivi efficace',
            ],
        },
        {
            date: 'Depuis Jan. 2022',
            company: 'Groupe Artistique TaMMA · Associatif',
            role: 'Chargée des Ressources Humaines',
            desc: [
                'Développement de la cohésion et de la motivation des membres',
                'Instauration d\'une ambiance conviviale favorisant la collaboration',
            ],
        },
        {
            date: '2017 — 2021',
            company: 'Mpanazava Eto Madagasikara · Associatif',
            role: 'Chef d\'équipe des Éclaireuses',
            desc: [
                'Leadership d\'équipe : développement des compétences techniques et de la créativité',
                'Rôle de mentor et de coordinatrice pour les membres',
            ],
        },
    ];

    return (
        <section className="experience" id="experience">
            <p className="section-num reveal">02 — Expérience</p>
            <h2 className="section-title reveal reveal-delay-1">
                Parcours<br /><em>professionnel</em>
            </h2>

            <div className="exp-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="exp-item reveal">
                        <div className="exp-date">{exp.date}</div>
                        <div>
                            <p className="exp-company">{exp.company}</p>
                            <h3 className="exp-role">{exp.role}</h3>
                            <ul className="exp-desc">
                                {exp.desc.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
