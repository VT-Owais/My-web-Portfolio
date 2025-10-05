import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="background-glow top-glow"></div>
        <div className="background-glow bottom-glow"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Left Content */}
          <div className="hero-left-content">
            {/* Availability Badge */}
            <div className="availability-badge">
              <span className="badge-text">Available for Opportunities</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="hero-title">
              Hi, I'm <span className="title-highlight">Mohammed Owais</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="hero-subtitle">
              Front-End Developer
            </h2>
            
            {/* Description */}
            <p className="hero-description">
              Turning ideas into seamless web experiences. Passionate about crafting responsive, 
              user-friendly applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-primary"
              >
                View Portfolio
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Hire Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a 
                href="https://github.com/VT-Owais" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="social-icon" />
              </a>
              <a 
                href="https://linkedin.com/in/mohammed-owais-farhan-v-t-76012721a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="social-icon" />
              </a>
              <a 
                href="mailto:vtowais786@gmail.com"
                className="social-link"
              >
                <Mail className="social-icon" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hero-right-content">
            <div className="profile-image-container">
              {/* Background Glow */}
              <div className="image-glow"></div>
              
              {/* Main Profile Image Container */}
              <div className="profile-image-wrapper">
                <img 
                  src="../src/assets/Images/Mine-image.jpeg" 
                  alt="Mohammed Owais Farhan V T" 
                  className="profile-image"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="floating-element element-1">
                <span className="element-icon">⚛️</span>
              </div>
              <div className="floating-element element-2">
                <span className="element-icon">💻</span>
              </div>
              <div className="floating-element element-3">
                <span className="element-icon">🎨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ArrowDown className="scroll-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;