import { GraduationCap, Code2, FileCode, Wind, Box, Binary } from 'lucide-react';
import './About.css';

const AboutMe = () => {
  const skills = [
    { name: "React.js", icon: Code2 },
    { name: "JavaScript", icon: FileCode },
    { name: "HTML/CSS", icon: Code2 },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Bootstrap", icon: Box },
    { name: "C++ (DSA)", icon: Binary },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-background"></div>
      
      <div className="container">
        <div className="section-header">
          <h2>About <span className="text-primary">Me</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-content">
          {/* Left Column - Bio & Education */}
          <div className="about-left">
            {/* Who I Am Section */}
            <div className="about-card">
              <h3 className="about-card-title">Who I Am</h3>
              <div className="about-card-content">
                <p>
                  I am a front-end developer and a creative problem-solver, dedicated to crafting seamless 
                  and dynamic web experiences. My passion lies in bringing ideas to life in the browser 
                  using modern tools like React.js, JavaScript, and Tailwind CSS.
                </p>
                <p>
                  I focus on building fast, responsive, and user-friendly websites. I am eager to join an 
                  innovative team where I can contribute to meaningful projects and grow as a professional developer.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="about-card">
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap className="icon" />
                </div>
                <h3 className="about-card-title">Education</h3>
              </div>
              <div className="education-content">
                <h4 className="education-degree">Bachelor of Computer Applications (BCA)</h4>
                <p className="education-college">Presidency College, Bangalore</p>
                <p className="education-graduation">Expected Graduation: 2026</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="about-right">
            {/* Technical Skills */}
            <div className="about-card">
              <h3 className="about-card-title">Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">
                        <Icon className="icon" />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Months Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;