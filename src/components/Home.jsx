import React from 'react';
import BlurText from './BlurText';
import ElectricBorder from './ElectricBorder';
import './Sobre_mi.css';

const Home = () => {
  return (
    <section className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0 }}>
          <div className="profile-info">
            <BlurText
              text="Carlos Alberto Guevara Otavo"
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
              
              {/* Botón de llamada a la acción */}
              <a href="/ruta-a-tu-cv.pdf" download="CV_Carlos_Guevara.pdf" className="btn-tech">
                <i className="fas fa-download" style={{ marginRight: '10px' }}></i> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </ElectricBorder>
    </section>
  );
};

export default Home;
