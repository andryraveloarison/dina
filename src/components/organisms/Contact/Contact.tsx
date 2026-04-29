import React from 'react';
import './Contact.css';


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
                    <p className='contact-email-label'>Email</p>
                    <a href="mailto:dinafitiavana14@gmail.com" className="contact-email">
                        dinafitiavana14@gmail.com
                    </a>
                    <p className='contact-desc'>
                        Disponible pour des missions de conseil RH, recrutement<br />
                        et accompagnement en gestion des ressources humaines.<br />
                        <p className='contact-phone'>
                            <span style={{ color: 'var(--gold2)' }}>📞 </span>
                            <span style={{ color: 'var(--gold2)', marginTop: '2px' }}>034 39 616 81</span>
                        </p>
                    </p>
                </div>
                <div className="contact-links reveal reveal-delay-2">
                    <a href="https://www.linkedin.com/in/dina-fitiavana-9b807a24a/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <span>LinkedIn</span>
                        <span className="contact-link-arrow">↗</span>
                    </a>
                    <a href="https://wa.me/0343961681" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <span>WhatsApp</span>
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
