import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Button from '../../Components/ui/Button';
import './Contact.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      if (!window.emailjs) {
        // Load EmailJS script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init('4i4OKDaYahAq4LSa-');
          sendEmail();
        };
        document.head.appendChild(script);
      } else {
        await sendEmail();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
      setIsLoading(false);
    }
  };

  const sendEmail = async () => {
    try {
      await window.emailjs.send(
        'service_2p3csz6',
        'template_f7z0ql8',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'vtowais786@gmail.com',
          reply_to: formData.email
        }
      );

      alert('🎉 Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('❌ Failed to send message. Please try again or email me directly at vtowais786@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>
      
      <div className="container">
        <div className="section-header">
          <h2>Get In <span className="text-primary">Touch</span></h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-description">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="contact-methods">
              <a 
                href="mailto:vtowais786@gmail.com"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Mail className="icon" />
                </div>
                <div className="contact-method-details">
                  <div className="contact-method-label">Email</div>
                  <div className="contact-method-value">vtowais786@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/mohammed-owais-farhan-v-t-76012721a"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Linkedin className="icon" />
                </div>
                <div className="contact-method-details">
                  <div className="contact-method-label">LinkedIn</div>
                  <div className="contact-method-value">Connect with me</div>
                </div>
              </a>

              <a 
                href="https://github.com/VT-Owais"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Github className="icon" />
                </div>
                <div className="contact-method-details">
                  <div className="contact-method-label">GitHub</div>
                  <div className="contact-method-value">View my code</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="btn-icon" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;