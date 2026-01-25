import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import '../styles/Projects.css';

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Get unique categories
  const categories = ['All', ...new Set(portfolioData.featuredProjects.map(p => p.category))];
  
  // Filter projects by category
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioData.featuredProjects 
    : portfolioData.featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <div className="projects-header-badge">Portfolio</div>
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Explore a collection of my recent work and projects showcasing my expertise 
            in web development, system design, and digital solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter-section">
        <div className="filter-container">
          <h3 className="filter-title">Filter by Category</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Card Header */}
                  <div className="project-header">
                    <div className="project-category-badge">
                      {project.category}
                    </div>
                    <div className="project-id">{String(project.id).padStart(2, '0')}</div>
                  </div>

                  {/* Card Body */}
                  <div className="project-body">
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                    
                    <p className="project-description">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="project-highlights">
                      <h4 className="highlights-title">Key Features</h4>
                      <ul className="highlights-list">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="highlight-item">
                            <span className="highlight-icon">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="project-technologies">
                      <h4 className="tech-title">Technologies</h4>
                      <div className="tech-tags">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="project-footer">
                    <div className="project-role">
                      <span className="role-label">Role:</span>
                      <span className="role-value">{project.role}</span>
                    </div>
                    
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <span>View Project</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  {hoveredProject === project.id && (
                    <div className="project-overlay"></div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats Section */}
      <section className="projects-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{portfolioData.featuredProjects.length}</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{new Set(portfolioData.featuredProjects.map(p => p.category)).size}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{new Set(portfolioData.featuredProjects.flatMap(p => p.technologies)).size}</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="cta-container">
          <h2 className="cta-title">Have a Project in Mind?</h2>
          <p className="cta-subtitle">
            Let's work together to bring your ideas to life. Get in touch to discuss your project requirements.
          </p>
          <a href="#contact" className="cta-button">
            Start a Project
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
