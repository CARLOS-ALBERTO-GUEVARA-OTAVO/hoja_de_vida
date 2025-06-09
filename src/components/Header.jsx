import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CAC <span>Cesar Adrian Camargo</span></div>
      <nav className="nav-links">
        <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
        <Link to="sobre-mi" smooth={true} duration={500}>Sobre mí</Link>
        <Link to="educacion" smooth={true} duration={500}>Educación</Link>
        <Link to="experiencia" smooth={true} duration={500}>Experiencia</Link>
        <Link to="habilidades" smooth={true} duration={500}>Habilidades</Link>
        <Link to="portafolio" smooth={true} duration={500}>Portafolio</Link>
        <Link to="contacto" smooth={true} duration={500}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;