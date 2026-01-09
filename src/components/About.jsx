import React from 'react';
import BlurText from './BlurText';
import './Sobre_mi.css';

function About() {
  return (
    // Usamos la estructura que coincide con Sobre_mi.css
    <section id="sobre-mi" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="profile-container">
        {/* Eliminamos el wrapper de la imagen antigua para que el texto ocupe el espacio o se centre */}
        <div className="profile-info">
          {/* 2. Creamos un contenedor para el efecto y lo llamamos */}
          <BlurText
            text="Carlos Guevara"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold mb-4 justify-center"
          />
          <p className="title">Desarrollador en Formación</p>
          <div className="divider"></div>
          <div className="info-section">
            <p>
              Apasionado por el desarrollo web y en formación como Tecnólogo en Análisis y Desarrollo de Software en el SENA. Me motiva aprender constantemente y aplicar lo aprendido en soluciones prácticas.
            </p>
            <p>
              Conocimientos en HTML, CSS, JavaScript, PHP, MySQL, y experiencia con React, Bootstrap y Laravel en proyectos formativos. Disfruto del diseño frontend y la lógica backend.
            </p>
            <p>
              Interesado en ciberseguridad; me informo constantemente ya que considero la seguridad digital esencial en el desarrollo actual.
            </p>
            <p>
              Busco crecer como desarrollador, integrarme a proyectos reales y construir un camino profesional con dedicación, curiosidad y responsabilidad.
            </p>
          </div>
          {/* Puedes agregar los enlaces sociales aquí si lo deseas, usando la clase .social-links */}
        </div>
      </div>
    </section>
  );
}

export default About;