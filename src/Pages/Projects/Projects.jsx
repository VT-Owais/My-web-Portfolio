import { ExternalLink, Github } from 'lucide-react';
import Button from '../../Components/ui/Button';
import Footer from '../../Components/Footer/Footer';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Wisestep Shoes Store",
      category: "E-Commerce Front-End",
      description: "A fully responsive e-commerce web application featuring dynamic cart management, product filtering, and smooth navigation with React Router.",
      tags: ["React.js", "JavaScript", "CSS", "React Router"],
      features: [
        "Add/Remove items from cart",
        "Dynamic total price calculation",
        "Responsive design",
        "Product filtering and search"
      ],
      projectLink: "#",
      codeLink: "https://github.com/VT-Owais/WiseStep"
    },
    {
      title: "AI Chef Recipe Generator",
      category: "Web Application",
      description: "An intelligent recipe recommendation system that integrates with food APIs to provide personalized recipe suggestions based on available ingredients.",
      tags: ["React.js", "API Integration", "Tailwind CSS"],
      features: [
        "Real-time recipe search",
        "API integration",
        "Clean and intuitive UI",
        "Ingredient-based filtering"
      ],
      projectLink: "#",
      codeLink: "https://github.com/VT-Owais/AI-Chef"
    }
  ];

  const miniProjects = [
    {
      title: "Do-it (To-do List)",
      description: "A modern task management application with add, edit, delete, and filter functionality.",
      tags: ["React.js", "CSS", "Local Storage"],
      projectLink: "#",
      codeLink: "https://github.com/VT-Owais/Do-it-To-do-list-"
    },
    {
      title: "Snake Game",
      description: "Classic snake game with score tracking, increasing difficulty, and responsive controls.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      projectLink: "#",
      codeLink: "https://github.com/VT-Owais/Snake-Game"
    },
    {
      title: "Stone Paper Scissors",
      description: "Interactive game with computer opponent, score tracking, and animated results.",
      tags: ["JavaScript", "HTML", "CSS"],
      projectLink: "#",
      codeLink: "https://github.com/VT-Owais/stone-paper-scissors-js-game"
    },
    {
      title: "Calculator",
      description: "Fully functional calculator with basic arithmetic operations and responsive design.",
      tags: ["JavaScript", "HTML", "CSS"],
      projectLink: "#",
      codeLink: "https://github.com/VT-Owais/Calculator-js"
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              My <span className="text-primary">Projects</span>
            </h1>
            <div className="hero-underline"></div>
            <p className="hero-description">
              Here are some of my recent projects showcasing my skills in modern web development
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="text-primary">Projects</span></h2>
            <div className="section-underline"></div>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
              >
                <div className="project-header">
                  <div className="project-badge">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <div className="feature-dot"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <Button 
                    variant="default"
                    size="sm"
                    className="project-btn primary"
                    onClick={() => window.open(project.projectLink, '_blank')}
                  >
                    <ExternalLink className="btn-icon" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="project-btn secondary"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="btn-icon" />
                    View Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider with Larger Font */}
      <div className="projects-divider">
        <div className="divider-line"></div>
        <div className="divider-text">Mini Projects</div>
        <div className="divider-line"></div>
      </div>

      {/* Mini Projects Section - Right after featured projects */}
      <section className="mini-projects-section">
        <div className="container">
          <div className="mini-projects-grid">
            {miniProjects.map((project, index) => (
              <div 
                key={index} 
                className="mini-project-card"
              >
                <div className="mini-project-header">
                  <h3 className="mini-project-title">{project.title}</h3>
                </div>

                <p className="mini-project-description">{project.description}</p>

                <div className="mini-project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="mini-project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mini-project-actions">
                  <Button 
                    variant="default"
                    size="sm"
                    className="mini-project-btn primary"
                    onClick={() => window.open(project.projectLink, '_blank')}
                  >
                    <ExternalLink className="btn-icon" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="mini-project-btn secondary"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="btn-icon" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;