export default function ProjectCard({ project }: any) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">
          <span>{project.icon}</span> {project.title}
        </h3>
        <span className="project-status">{project.status}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((tech: string) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link: any) => (
          <a key={link.label} href={link.url} className="project-link">
            <span>{link.icon}</span> {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}