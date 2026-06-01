import { projectsData, miniProjectsData } from '../data/portfolioData';
import '../styles/Projects.css';

function Projects() {
  let featuredProjects = projectsData.filter((p) => p.featured);
  if (!featuredProjects || featuredProjects.length === 0) {
    featuredProjects = projectsData.length ? [projectsData[0]] : [];
  }
  const mainProjects = projectsData.filter((p) => !p.featured);

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-header">
        <div className="project-icon">{project.image}</div>
        <div className="project-duration">{project.duration}</div>
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-role">📋 {project.role}</p>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        <h4>Technologies:</h4>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-btn repo-btn">
          🔗 View Repo
        </a>
      </div>
    </div>
  );

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-intro">
          <div>
            <h1>My Projects</h1>
            <p className="projects-subtitle">A curated selection of recent work with a featured highlight and easy access to main and mini projects.</p>
          </div>
          <span className="projects-pill">Featured Work</span>
        </div>

        <div className="featured-list">
          {featuredProjects.map((fp) => (
            <div key={fp.id} className="featured-project-card">
              <div className="project-header">
                <div className="project-icon">{fp.image}</div>
                <div className="project-duration">{fp.duration}</div>
              </div>
              <h2 className="project-title">{fp.title}</h2>
              <p className="project-role">📋 {fp.role}</p>
              <p className="project-description">{fp.description}</p>
              <div className="project-tech">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {fp.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={fp.repoUrl} target="_blank" rel="noopener noreferrer" className="project-btn repo-btn">
                  🔗 Visit
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-section">
          <h2 className="section-heading">📌 Main Projects</h2>
          <div className="projects-grid">
            {mainProjects.map((project) => renderProjectCard(project))}
          </div>
        </div>

        <div className="mini-projects-section">
          <h2 className="section-heading">🎯 Mini Projects</h2>
          <div className="projects-grid">
            {miniProjectsData.map((project) => renderProjectCard(project))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
