import React from 'react';
import imagenPerfil from '../assets/desarrollador.jpeg';
import './Sobre_mi.css'; // Usamos el CSS que tiene el estilo de tarjeta
import ASCIIText from './ASCIIText'; // 1. Importamos el nuevo componente

function About() {
  return (
    // Usamos la estructura que coincide con Sobre_mi.css
    <section id="sobre-mi" className="about-section">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img src={imagenPerfil} alt="Foto de perfil de Carlos Guevara" className="profile-pic" />
          <div className="image-overlay"></div>
        </div>
        <div className="profile-info">
          {/* 2. Creamos un contenedor para el efecto y lo llamamos */}
          <div style={{ position: 'relative', height: '100px', marginBottom: '0.75rem' }}>
            <ASCIIText 
              text="Carlos Guevara"
              textFontSize={150}
              asciiFontSize={4}       /* Reducimos aún más para mayor definición */
              textColor="var(--darker)" /* Mantenemos el color de alto contraste */
            />
          </div>
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