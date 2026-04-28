import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-bg-text">Contact</div>
            <p className="section-num reveal" style={{ position: 'relative', zIndex: 2 }}>06 — Contact</p>
            <h2 className="section-title reveal reveal-delay-1" style={{ position: 'relative', zIndex: 2, marginBottom: '4rem' }}>
                Travaillons<br /><em>ensemble</em>
            </h2>
            <div className="contact-grid">
                <div className="reveal">
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Email</p>
                    <a href="mailto:dinafitiavana14@gmail.com" className="contact-email">
                        dinafitiavana14@gmail.com
                    </a>
                    <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--muted)', lineHeight: '1.8' }}>
                        Disponible pour des missions de conseil RH, recrutement<br />
                        et accompagnement en gestion des ressources humaines.<br />
                        <span style={{ color: 'var(--gold2)' }}>📞 034 39 616 81</span>
                    </p>
                </div>
                <div className="contact-links reveal reveal-delay-2">
                    <a href="https://www.linkedin.com/in/dina-fitiavana-9b807a24a/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <span>LinkedIn</span>
                        <span className="contact-link-arrow">↗</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dina-fitiavana-9b807a24a/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <span>@Dina Fitiavana</span>
                        <span className="contact-link-arrow">↗</span>
                    </a>
                    <a href="mailto:dinafitiavana14@gmail.com" className="contact-link">
                        <span>Email direct</span>
                        <span className="contact-link-arrow">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
