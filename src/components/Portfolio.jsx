import React from 'react';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

const Portfolio = () => {
  const projects = [
    {
      title: 'Sitio Web Personal',
      description: 'Portafolio profesional desarrollado con React',
      // Agrega más datos
    }
  ];

  return (
    <section id="portafolio" className="about-section">
      <div className="profile-container">
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Portafolio</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section">
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;