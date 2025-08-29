import ProjectCard from './ProjectCard';

export default function ShopifySection() {
  const projects = [
    {
      icon: '🌺',
      title: 'Best Perfumes Miami',
      status: 'PRODUCTION',
      description: 'Full-stack Shopify development including admin panel management and custom storefront enhancements. Integrated QuickBooks for seamless inventory management and automated financial tracking across multiple sales channels.',
      tech: ['Liquid', 'CSS', 'JavaScript', 'Shopify Admin API', 'QuickBooks API'],
      links: [
        { icon: '🌐', label: 'Live Store', url: 'https://bestperfumesmiami.com' },
        { icon: '📊', label: 'Case Study', url: '#' }
      ]
    },
    {
      icon: '✨',
      title: 'Neosperfumes',
      status: 'PRODUCTION',
      description: 'Complete storefront transformation through advanced Liquid customization and UX/UI design principles. Delivered an exceptional customer experience with optimized product discovery, streamlined checkout, and enhanced mobile responsiveness.',
      tech: ['Liquid', 'SCSS', 'JavaScript', 'Shopify Plus', 'UX/UI Design'],
      links: [
        { icon: '🌐', label: 'Live Store', url: 'https://neosperfumes.com' },
        { icon: '🎨', label: 'Design Process', url: '#' }
      ]
    }
  ];

  return (
    <section className="content-section" id="shopify">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}