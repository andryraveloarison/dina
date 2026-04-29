import React from 'react';
import './Interests.css';

const Interests: React.FC = () => {
    const interests = [
        'Sport', 'Voyage', 'Chant', 'Lecture', 'Leadership', 'Développement personnel',
        'Sport', 'Voyage', 'Chant', 'Lecture', 'Leadership', 'Développement personnel'
    ];

    return (
        <section className="interests" id="interests">
            <p className="section-num reveal">05 — Centres d'intérêt</p>
            <h2 className="section-title reveal reveal-delay-1">
                Ce qui<br /><em>m'inspire</em>
            </h2>
            <div className="interests-marquee-wrap">
                <div className="interests-marquee">
                    {interests.map((interest, index) => (
                        <span key={index} className="interest-item">
                            <span className="interest-dot"></span>
                            {interest}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
