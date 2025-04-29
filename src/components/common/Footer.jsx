import'../../assets/style/common/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>MySite</h3>
                    <p>c 2025 MySite. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: (010) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow</h3>
                    <div className="social-links">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;