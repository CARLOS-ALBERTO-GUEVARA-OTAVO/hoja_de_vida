import React from 'react';

const Sobre_mi = () => {
  return (
    <section id="sobre-mi" className="section">
      <h2 className="section-title">Sobre mí</h2>
      <div className="about-container">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            
          
          </div>
          <div className="profile-info">
            <h1>Carlos Alberto Guevara Otavo</h1> {/* Nombre opcional, ajústalo */}
            <div className="title">Desarrollador en Formación</div>
            <div className="divider" />
            <div className="info-section">
              <p>
                <i className="fas fa-heart" /> Apasionado por el desarrollo web y en formación como Tecnólogo en Análisis y Desarrollo de Software en el SENA. Me motiva aprender constantemente y aplicar lo aprendido en soluciones prácticas.
              </p>
              <p>
                <i className="fas fa-code" /> Conocimientos en HTML, CSS, JavaScript, PHP, MySQL, y experiencia con React, Bootstrap y Laravel en proyectos formativos. Disfruto del diseño frontend y la lógica backend.
              </p>
              <p>
                <i className="fas fa-shield-alt" /> Interesado en ciberseguridad; me informo constantemente ya que considero la seguridad digital esencial en el desarrollo actual.
              </p>
              <p>
                <i className="fas fa-rocket" /> Busco crecer como desarrollador, integrarme a proyectos reales y construir un camino profesional con dedicación, curiosidad y responsabilidad.
              </p>
            </div>
            <div className="social-links">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre_mi;