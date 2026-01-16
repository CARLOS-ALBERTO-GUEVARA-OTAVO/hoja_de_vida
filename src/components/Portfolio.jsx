import React from 'react';
import ElectricBorder from './ElectricBorder';
import ChromaGrid from './ChromaGrid';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

// IMPORTANTE: Asegúrate de que los nombres de los archivos coincidan con los que tienes en src/assets
// Si tus imágenes tienen otros nombres, cámbialos aquí.
import project1 from '../assets/proyecto_web.png';
import project2 from '../assets/proyecto1.png';
import project3 from '../assets/proyecto2.png';
import project4 from '../assets/proyecto3.png';

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "E-Commerce App",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
      icons: ["fab fa-react", "fab fa-node-js", "fas fa-database", "fab fa-stripe"],
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "#"
    },
    {
      image: project2,
      title: "Task Manager",
      description: "Aplicación de gestión de tareas en tiempo real con autenticación de usuarios y sincronización en la nube.",
      icons: ["fab fa-vuejs", "fas fa-fire", "fab fa-sass"],
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "#"
    },
    {
      image: project3,
      title: "Portfolio V1",
      description: "Primera versión de mi portafolio personal, enfocado en diseño minimalista y animaciones CSS puras.",
      icons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "#"
    },
    {
      image: project4,
      title: "Chat Application",
      description: "Chat en tiempo real utilizando WebSockets, permitiendo salas privadas y compartición de archivos.",
      icons: ["fab fa-react", "fab fa-node", "fas fa-plug"],
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "#"
    }
  ];

  return (
    <section id="portafolio" className="about-section">
      <ElectricBorder color="#00F0FF" style={{ maxWidth: '1200px', margin: '0 auto' }} borderRadius={20}>
        <div className="profile-container" style={{ margin: 0, backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Portafolio</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section" style={{ height: '600px', position: 'relative' }}>
             <ChromaGrid 
                items={projects}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                columns={2} 
                rows={2}
              />
          </div>
        </div>
        </div>
      </ElectricBorder>
    </section>
  );
};
export default Portfolio;