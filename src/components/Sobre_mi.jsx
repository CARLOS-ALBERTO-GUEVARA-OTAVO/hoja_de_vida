import React from 'react';
import ElectricBorder from './ElectricBorder';
import './Sobre_mi.css';

const Sobre_mi = () => {
  return (
    <section id="sobre-mi" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0, backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
        <div className="profile-info">
          <h1>Sobre mí</h1>
          <div className="divider"></div>
          <div className="info-section">
            <p>Más información sobre mi trayectoria...</p>
          </div>
        </div>
        </div>
      </ElectricBorder>
    </section>
  );
};

export default Sobre_mi;