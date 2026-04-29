import React from 'react';
import './Formation.css';

const Formation: React.FC = () => {
    const formations = [
        {
            year: '2023',
            degree: 'Master II en Gestion — MAE (Management et Administration d\'Entreprise)',
            school: 'Université Catholique de Madagascar',
            note: 'Vice-major de promotion',
        },
        {
            year: '2021',
            degree: 'Licence en Gestion — MAE',
            school: 'Université Catholique de Madagascar',
            note: '',
        },
        {
            year: '2018',
            degree: 'Baccalauréat série A2',
            school: 'Lycée Privé Saint Antoine',
            note: '',
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
