import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Nazer App's",
      period: "Jan 2025 – Mar 2025",
      responsibilities: [
        "Built a responsive landing page with HTML, CSS, and JavaScript",
        "Developed Food AI Chef Recipe Web App in React.js with API integration",
        "Worked across full development lifecycle from concept to deployment",
        "Collaborated with team members on feature implementation and code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-background"></div>
      
      <div className="container">
        <div className="section-header">
          <h2>Work <span className="text-primary">Experience</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-timeline">
              {/* Timeline Line */}
              <div className="timeline-line"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  {/* Icon */}
                  <div className="experience-icon">
                    <Briefcase className="icon" />
                  </div>

                  {/* Content */}
                  <div className="experience-details">
                    <div className="experience-title-section">
                      <div>
                        <h3 className="experience-title">{exp.title}</h3>
                        <p className="experience-company">{exp.company}</p>
                      </div>
                      <div className="experience-period">
                        <Calendar className="calendar-icon" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="responsibility-item">
                          <div className="responsibility-dot"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;