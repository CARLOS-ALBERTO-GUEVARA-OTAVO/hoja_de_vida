import React from 'react';
import imagenPerfil from '../../public/imagen_hoja_de_vida.png';

function About() {
  return (
    <div className="about-container">
      <header className="header">
        <div className="logo">CAC <span>Cesar Adrian Camargo</span></div>
        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#conocimientos">Conocimientos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
      
      <main className="main-content">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img src={imagenPerfil} alt="Foto de perfil" className="profile-pic" />
            <div className="image-overlay"></div>
          </div>
          
          <div className="profile-info">
            <h1>Cesar Adrian Camargo Rodriguez</h1>
            <p className="title">Desarrollador Web Full Stack</p>
            
            <div className="divider"></div>
            
            <div className="info-section">
              <p><i className="bi bi-geo-alt"></i> Ibagué, Tolima - Colombia</p>
              <p><i className="bi bi-envelope"></i> adriancamargo69@gmail.com</p>
              <p><i className="bi bi-phone"></i> +57 310 857 1293</p>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/tu-usuario" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/tu-usuario" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/tu-numero" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="mailto:adriancamargo69@gmail.com" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;