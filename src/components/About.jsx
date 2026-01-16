import React from 'react';
import BlurText from './BlurText';
import ElectricBorder from './ElectricBorder';
import './Sobre_mi.css';

function About() {
  return (
    // Usamos la estructura que coincide con Sobre_mi.css
    <section id="inicio" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0, backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
          <div className="profile-info">
            <BlurText
              text="Carlos Alberto Guevara Otavo"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold mb-4 justify-center"
            />
            <div className="title">Desarrollador en Formación</div>
            <div className="divider"></div>
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
      </ElectricBorder>
    </section>
  );
}

export default About;