import React from 'react';
import ElectricBorder from './ElectricBorder';
import './Sobre_mi.css';

const Contact = () => {
  return (
    <section id="contacto" className="about-section">
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0, backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
          <div className="profile-info" style={{ textAlign: 'center' }}>
            <h1 className="section-title">Contacto</h1>
            <div className="divider" style={{ margin: '2rem auto' }}></div>
            <form className="contact-form" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Nombre" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)', background: 'transparent', color: '#fff' }} />
              <input type="email" placeholder="Email" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)', background: 'transparent', color: '#fff' }} />
              <textarea placeholder="Mensaje" rows="5" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)', background: 'transparent', color: '#fff' }}></textarea>
              <button type="submit" style={{ padding: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #00F0FF, #0055FF)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </ElectricBorder>
    </section>
  );
};

export default Contact;
