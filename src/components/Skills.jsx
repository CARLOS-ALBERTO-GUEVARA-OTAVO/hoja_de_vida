import React from 'react';
import './Sobre_mi.css'; // Importamos los estilos de la tarjeta

const Skills = () => {
  // Lista de habilidades con nombre, ícono (Font Awesome) y nivel
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5', level: 90 },
    { name: 'CSS', icon: 'fab fa-css3-alt', level: 85 },
    { name: 'JavaScript', icon: 'fab fa-js', level: 85 },
    { name: 'PHP', icon: 'fab fa-php', level: 70 },
    { name: 'MySQL', icon: 'fas fa-database', level: 75 },
    { name: 'Python', icon: 'fab fa-python', level: 80 },
    { name: 'Laravel', icon: 'fab fa-laravel', level: 65 },
    { name: 'React', icon: 'fab fa-react', level: 80 },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 75 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 70 },
  ];

  return (
    <section id="habilidades" className="about-section">
      <div className="profile-container">
        <div className="profile-info" style={{ textAlign: 'center' }}>
          <h1>Habilidades</h1>
          <div className="divider" style={{ margin: '2rem auto' }}></div>
          <div className="info-section">
            {/* El div skills-grid necesita sus propios estilos para mostrarse como una cuadrícula */}
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="skill-icon">
                    <i className={skill.icon} />
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-level">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;