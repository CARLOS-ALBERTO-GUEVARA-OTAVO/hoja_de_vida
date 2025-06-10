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
import './App.css'; // O './styles-complete.css' si usas ese archivo

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="inicio" className="hero-section">
          {/* Puedes agregar un hero banner aquí */}
        </section>
        <About />
        <Sobre_mi />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Download />
      </main>
      <footer>
        {/* Pie de página */}
      </footer>
    </div>
  );
}

export default App;