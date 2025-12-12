import React from 'react';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

const Education = () => {
  return (
    <section id="educacion" className="about-section">
      <div className="profile-container">
        {/* Usamos profile-info para que el texto se alinee y tome los estilos */}
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Educación</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section">
            <div className="education-item">
              <h3>Tecnólogo en Análisis y Desarrollo de Software</h3>
              <p>SENA | 2022 - 2024</p>
              <p>Formación en desarrollo web full stack y metodologías ágiles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;