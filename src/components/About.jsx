import React from 'react';
import imagenPerfil from '../assets/desarrollador.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TextReveal from '@/components/magicui/text-reveal';


function About() {
  return (
    <div className="p-4 md:p-8"> {/* Usando clases de Tailwind para el padding */}
      
      
      <main id="sobre-mi">
        <div className="flex flex-col md:flex-row items-center gap-8"> {/* Contenedor flexible con Tailwind */}
          <div className="relative">
            <img src={imagenPerfil} alt="Foto de perfil" className="w-48 h-48 rounded-full object-cover shadow-lg" />
            <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-gray-800">
              <TextReveal text="Carlos Alberto Guevara Otavo" />
            </div>
            <p className="text-xl text-gray-600 mt-2">Desarrollador Web Full Stack</p>
            
            <div className="my-4 border-b border-gray-300"></div>
            
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2"><i className="bi bi-geo-alt"></i> Ibagué, Tolima - Colombia</p>
              <p className="flex items-center gap-2"><i className="bi bi-envelope"></i> Carlosgo1822@gmail.com</p>
              <p className="flex items-center gap-2"><i className="bi bi-phone"></i> +57 313 810 2150</p>
            </div>
            
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="https://github.com/caguevara" aria-label="GitHub" className="text-gray-700 hover:text-black">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/carlos-guevara-dev" aria-label="LinkedIn" className="text-gray-700 hover:text-blue-700">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/573138102150" aria-label="WhatsApp" className="text-gray-700 hover:text-green-500">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="mailto:Carlosgo1822@gmail.com" aria-label="Email" className="text-gray-700 hover:text-red-500">
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