const Skills = () => {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 85 },
    // Agrega más habilidades
  ];

  return (
    <section id="habilidades" className="section">
      <h2 className="section-title">Habilidades</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <h4>{skill.name}</h4>
          <div className="skill-bar">
            <div 
              className="skill-progress" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};