import React from 'react';
import './Formation.css';

const Formation: React.FC = () => {
    const formations = [
        {
            year: '2018 - 2023',
            degree: 'Formation en Gestion - Management et Administration d\'Entreprise',
            school: 'Université Catholique de Madagascar',
            note: 'Une formation polyvalente en gestion orientée management et administration d\'entreprise. \n Master II : Mention Bien. Vice major de promotion.',
        },
        {
            year: '2021 - 2022',
            degree: 'Formation en Langues Françaises',
            school: 'Alliance Française Andavamamba',
            note: 'Une formation suivie d\'une certification reconnue sur le plan national et international.',
        },
        {
            year: '2015 - 2018',
            degree: 'Collège Saint Michel Amparibe',
            school: 'Lycée Privé Saint Antoine',
            note: 'Enseignement général : BACC Littéraire Série A2 - Mention Bien',
        },
    ];

    return (
        <section className="formation" id="formation">
            <p className="section-num reveal">04 — Formation</p>
            <h2 className="section-title reveal reveal-delay-1">
                Cursus<br /><em>académique</em>
            </h2>

            <div className="formation-list">
                {formations.map((item, index) => (
                    <div key={index} className="form-item reveal">
                        <div className="form-year">{item.year}</div>
                        <div>
                            <h3 className="form-degree">{item.degree}</h3>
                            <p className="form-school">{item.school}</p>
                            {item.note && <p className="form-note">{item.note}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Formation;
