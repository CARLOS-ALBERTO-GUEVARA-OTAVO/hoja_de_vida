import React from 'react';
import { Link } from 'react-scroll';
import Lanyard from './Lanyard';

const Header = () => {
  return (
    <header className="header">
      {/* Carnet colgando desde el header */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      <div className="logo" style={{ position: 'relative', zIndex: 10 }}>DEV <span>Carlos Alberto Guevara Otavo</span></div>
      <nav className="nav-links" style={{ position: 'relative', zIndex: 10 }}>
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