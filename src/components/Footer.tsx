
const Footer: React.FC = () => {
    return (
        <footer className="footer" id="contact">
            <p className="section-title footName">Faneva Dina Fitiavana</p>
            <p className="footTag">HR Consultant · Madagascar</p>
            <span>© {new Date().getFullYear()}</span>
            <div className="footHr"></div>
        </footer>
    );
};

export default Footer;
