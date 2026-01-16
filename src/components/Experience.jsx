import React from 'react';
import ElectricBorder from './ElectricBorder';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

const Experience = () => {
  return (
    <section id="experiencia" className="about-section">
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0, backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Experiencia</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section">
            <div className="timeline">
              {/* Item 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2023 - Presente</div>
                <div className="experience-item">
                  <h3>Desarrollador Frontend</h3>
                  <p style={{ color: '#b0b0b0', fontStyle: 'italic', marginBottom: '1rem' }}>Empresa XYZ</p>
                  <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Desarrollo de interfaces modernas con React.</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Implementación de diseños responsivos y animaciones.</li>
                    <li>• Colaboración con equipos de backend para integración de APIs.</li>
                  </ul>
                </div>
              </div>
              
              {/* Puedes agregar más items copiando el bloque .timeline-item */}
            </div>
          </div>
        </div>
        </div>
      </ElectricBorder>
    </section>
  );
};
export default Experience;