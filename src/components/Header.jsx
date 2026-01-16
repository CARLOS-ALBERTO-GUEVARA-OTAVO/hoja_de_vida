import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';
import LightPillar from './LightPillar';
import './Header.css';

const Header = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={2.5}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>,
      document.body
      )}

      <header className="header">
        <div className="logo">DEV <span>Carlos Alberto Guevara Otavo</span></div>
        <nav className="nav-links">
          <Link to="inicio" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Inicio</Link>
          <Link to="sobre-mi" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Sobre mí</Link>
          <Link to="educacion" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Educación</Link>
          <Link to="experiencia" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Experiencia</Link>
          <Link to="habilidades" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Habilidades</Link>
          <Link to="portafolio" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Portafolio</Link>
          <Link to="contacto" smooth={true} duration={500} className="nav-link" spy={true} activeClass="active" offset={-70}>Contacto</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;