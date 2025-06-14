import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Sobre_mi from './components/sobre_mi';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Download from './components/Download';
import './App.css';
import './components/About.css';
import './components/Sobre_mi.css';
import './components/Education.css';
import './components/Experience.css';
import './components/Skills.css';
import './components/Portfolio.css';
import './components/Contact.css';
import './components/Download.css';
import './components/Header.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="inicio" className="hero-section">
          <About />
        </section>
        <div id="cv-content">
          <Sobre_mi />
          <Education />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
        <Download />
      </main>
      <footer>
        <p>© 2025 Carlos Alberto Guevara Otavo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;