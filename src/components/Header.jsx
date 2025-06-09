import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DEV <span>Carlos Alberto Guevara Otavo</span></div>
      <nav className="nav-links">
        <Link to="inicio" smooth={true} duration={200}>Inicio</Link>
        <Link to="sobre-mi" smooth={true} duration={200}>Sobre mí</Link>
        <Link to="educacion" smooth={true} duration={200}>Educación</Link>
        <Link to="experiencia" smooth={true} duration={200}>Experiencia</Link>
        <Link to="habilidades" smooth={true} duration={200}>Habilidades</Link>
        <Link to="portafolio" smooth={true} duration={200}>Portafolio</Link>
        <Link to="contacto" smooth={true} duration={200}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;