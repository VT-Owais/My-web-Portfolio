import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-copyright">
              © {currentYear} Mohammed Owais Farhan V T. All rights reserved.
            </p>
          </div>

          <div className="footer-social">
            <a 
              href="https://github.com/VT-Owais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github className="social-icon" />
            </a>
            <a 
              href="https://linkedin.com/in/mohammed-owais-farhan-v-t-76012721a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="social-icon" />
            </a>
            <a 
              href="mailto:vtowais786@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;