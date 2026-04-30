import React from 'react';
import './OtherFormations.css';

const OtherFormations: React.FC = () => {
    const formations = [
        {
            title: 'Efficacité organisationnelle',
            date: 'Février 2024',
            location: 'Agile Conseils Antananarivo',
            description: 'Communication non violente, gestion de temps, gestion de stress, ...'
        },
        {
            title: 'Techniques de recrutement',
            date: 'Février 2024',
            location: 'Agile Conseils Antananarivo',
            description: 'Connaître et apprendre toutes les techniques efficaces de recrutement à l\'heure d\'aujourd\'hui.'
        },
        {
            title: 'Affirmation de soi et assertivité',
            date: 'Février 2024',
            location: 'Agile Conseils Antananarivo',
            description: 'Une formation centrée sur le développement personnel dans le milieu professionnel.'
        },
        {
            title: 'Lifeskills',
            date: 'Février 2022',
            location: 'Ministère de la Jeunesse Antananarivo',
            description: 'Une formation axée sur le développement et l\'accomplissement personnel.'
        },
        {
            title: 'Plaidoirie',
            date: '2021',
            location: 'Mpanazava Eto Madagasikara Madagascar',
            description: 'Savoir comment vaincre le stress lors des discours en public, comment exposer de manière claire, concise et précise un sujet sensible.'
        },
        {
            title: '"GPN" Girl Powered Nutrition',
            date: '2019',
            location: 'Association Mondiale des Guides et des Eclaireuses Madagascar',
            description: 'Une formation suivie d\'un concours "meilleur projet" organisé par l\'association MEM Analamanga Atsinanana : élu "meilleur projet"'
        }
    ];

    return (
        <section className="other-formations" id="other-formations">
            <p className="section-num reveal">05 — Formations</p>
            <h2 className="section-title reveal reveal-delay-1">
                Formations<br /><em>diverses</em>
            </h2>

            <div className="other-formations-list">
                {formations.map((item, index) => (
                    <div key={index} className="other-form-item reveal">
                        <div className="other-form-date">{item.date}</div>
                        <div className="other-form-content">
                            <h3 className="other-form-title">{item.title}</h3>
                            <p className="other-form-location">{item.location}</p>
                            <p className="other-form-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OtherFormations;
