import React from 'react';

const Formation: React.FC = () => {
    const formations = [
        {
            year: '2018 — 2023',
            degree: 'Master II — Gestion, Management & Administration d\'Entreprise',
            school: 'Université Catholique de Madagascar · Antananarivo',
            note: 'Mention Bien · Vice-major de promotion',
        },
        {
            year: '2021 — 2022',
            degree: 'Formation en Langues Françaises',
            school: 'Alliance Française Andavamamba · Antananarivo',
            note: 'Certification nationale et internationale · DELF 86/100',
        },
        {
            year: '2015 — 2018',
            degree: 'BACC Littéraire — Série A2',
            school: 'Collège Saint Michel Amparibe · Antananarivo',
            note: 'Mention Bien',
        },
        {
            year: 'Fév. 2024',
            degree: 'Formations Professionnelles',
            school: 'Agile Conseils · Antananarivo',
            note: 'Efficacité organisationnelle · Techniques de recrutement · Affirmation de soi & assertivité',
        },
    ];

    return (
        <section className="formation" id="formation">
            <p className="section-num reveal">04 — Formation</p>
            <h2 className="section-title reveal reveal-delay-1">
                Parcours<br /><em>académique</em>
            </h2>

            <div className="formation-list">
                {formations.map((item, index) => (
                    <div key={index} className="form-item reveal" style={index === formations.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.06)' } : {}}>
                        <div className="form-year">{item.year}</div>
                        <div>
                            <h3 className="form-degree">{item.degree}</h3>
                            <p className="form-school">{item.school}</p>
                            <p className="form-note">{item.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Formation;
