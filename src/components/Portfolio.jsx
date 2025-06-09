const Portfolio = () => {
  const projects = [
    {
      title: 'Sitio Web Personal',
      description: 'Portafolio profesional desarrollado con React',
      // Agrega más datos
    }
  ];

  return (
    <section id="portafolio" className="section">
      <h2 className="section-title">Portafolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;