import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, React, Figma, Cpu } from 'lucide-react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-circle top-left"></div>
        <div className="gradient-circle bottom-right"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Left Content - Text */}
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <div className="availability-badge">
              <span>Available for Opportunities</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="text-primary">Mohammed Owais</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Front-End Developer
            </h2>
            
            <p className="hero-description">
              Turning ideas into seamless web experiences. Passionate about crafting responsive, 
              user-friendly applications with modern technologies.
            </p>

            <div className="hero-buttons">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                variant="default"
                className="hero-btn primary"
              >
                View Portfolio
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="hero-btn outline"
              >
                Hire Me
              </Button>
            </div>

            <div className="hero-social">
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

          {/* Right Content - Profile Image with Floating Icons */}
          <div className={`hero-image ${isVisible ? 'slide-in' : ''}`}>
            <div className="image-container">
              <div className="image-glow"></div>
              
              {/* Floating Icons */}
              <div className="floating-icon icon-1">
                <Code className="floating-icon-svg" />
              </div>
              <div className="floating-icon icon-2">
                <React className="floating-icon-svg" />
              </div>
              <div className="floating-icon icon-3">
                <Figma className="floating-icon-svg" />
              </div>
              <div className="floating-icon icon-4">
                <Cpu className="floating-icon-svg" />
              </div>
              
              <div className="profile-image">
                <div className="image-placeholder">
                  <img src="../src/assets/Images/Mine-image.jpeg" alt="Mohammed Owais" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ArrowDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;