import React from 'react';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

const Experience = () => {
  return (
    <section id="experiencia" className="about-section">
      <div className="profile-container">
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Experiencia</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section">
            <div className="experience-item">
              <h3>Desarrollador Frontend</h3>
              <p>Empresa XYZ | 2023 - Presente</p>
              <ul>
                <li>Desarrollo de interfaces con React</li>
                <li>Implementación de diseños responsivos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;