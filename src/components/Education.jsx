import React from 'react';
import ElectricBorder from './ElectricBorder';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

const Education = () => {
  return (
    <section id="educacion" className="about-section">
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0, backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Educación</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2024</div>
                <div className="education-item">
                  <h3>Tecnólogo en Análisis y Desarrollo de Software</h3>
                  <p style={{ color: '#b0b0b0', marginBottom: '0.5rem' }}>SENA</p>
                  <p>Formación integral en desarrollo web full stack, bases de datos y metodologías ágiles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ElectricBorder>
    </section>
  );
};

export default Education;