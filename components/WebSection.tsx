import ProjectCard from './ProjectCard';

export default function WebSection() {
  const projects = [
    {
      icon: '🎫',
      title: 'Tick-It',
      status: 'COMPLETE',
      description: 'A modern ticketing and event management platform built collaboratively. Features real-time seat selection, payment integration, QR code generation, and comprehensive event analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe API'],
      links: [
        { icon: '💻', label: 'Source Code', url: 'https://github.com/AbeGue02/tick-it' },
        { icon: '🌐', label: 'Live Site', url: '#' }
      ]
    },
    {
      icon: '🍴',
      title: 'Fork Yeah!',
      status: 'COMPLETE',
      description: 'A restaurant discovery and review platform with social features. Includes personalized recommendations, interactive maps, real-time reservations, and photo-sharing capabilities for food enthusiasts.',
      tech: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Google Maps API'],
      links: [
        { icon: '💻', label: 'Source Code', url: 'https://github.com/AbeGue02/fork_yeah' },
        { icon: '🌐', label: 'Live Site', url: '#' }
      ]
    },
    {
      icon: '💾',
      title: 'Portfolio98',
      status: 'COMPLETE',
      description: 'A nostalgic Windows 98-themed portfolio website featuring authentic UI elements, interactive desktop environment, and functional applications. A creative showcase of web development skills with retro aesthetics.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React', '98.css'],
      links: [
        { icon: '💻', label: 'Source Code', url: 'https://github.com/AbeGue02/portfolio98' },
        { icon: '🌐', label: 'Live Site', url: '#' }
      ]
    }
  ];

  return (
    <section className="content-section" id="web">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}