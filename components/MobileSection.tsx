import ProjectCard from './ProjectCard';

export default function MobileSection() {
  const projects = [
    {
      icon: '🌸',
      title: 'Bloom Habit Tracker',
      status: 'COMPLETE',
      description: 'A beautiful and intuitive habit tracking app that helps users build positive daily routines. Features streak tracking, progress visualization, and customizable habit categories with an elegant user interface.',
      tech: ['React Native', 'TypeScript', 'Expo', 'AsyncStorage'],
      links: [
        { icon: '💻', label: 'Source Code', url: 'https://github.com/AbeGue02/bloom-habit-tracker' },
        { icon: '📱', label: 'View Demo', url: '#' }
      ]
    },
    {
      icon: '📋',
      title: 'ScrumDinger',
      status: 'COMPLETE',
      description: 'A meeting management app designed for Scrum teams. Includes timer functionality, speaker rotation tracking, meeting history, and detailed transcripts. Built following Apple\'s SwiftUI best practices.',
      tech: ['SwiftUI', 'Swift', 'iOS', 'Core Data'],
      links: [
        { icon: '💻', label: 'Source Code', url: 'https://github.com/AbeGue02/scrumdinger' },
        { icon: '📱', label: 'View Demo', url: '#' }
      ]
    }
  ];

  return (
    <section className="content-section active" id="mobile">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}