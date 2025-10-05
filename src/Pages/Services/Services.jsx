import { Code2, Palette, Smartphone } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Creating clean, modern, and visually appealing designs that enhance user experience and engagement.",
    },
    {
      icon: Code2,
      title: "Front-End Development",
      description: "Building responsive, scalable web applications with React.js and modern frameworks for optimal performance.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect and functions flawlessly across all devices and screen sizes.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-background"></div>
      
      <div className="container">
        <div className="section-header">
          <h2>What I <span className="text-primary">Offer</span></h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Professional services to bring your ideas to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="service-card"
              >
                <div className="service-icon-container">
                  <div className="service-icon-glow"></div>
                  <div className="service-icon">
                    <Icon className="icon" />
                  </div>
                </div>

                <h3 className="service-title">
                  {service.title}
                </h3>
                
                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-hover-indicator"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;