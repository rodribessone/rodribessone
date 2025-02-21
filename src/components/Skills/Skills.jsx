import React from 'react';
import Habilidades3D from './Habilidades3d';

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#899388] to-gray-800 p-6 md:p-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-8 md:mb-10">
          Sobre Mí
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Sección de Habilidades 3D */}
          <div className="md:w-1/2 flex justify-center">
            <Habilidades3D />
          </div>
          {/* Sección de Texto */}
          <div className="md:w-1/2 text-lg md:text-xl text-white leading-relaxed text-center md:text-left">
            <p>
              Hola! Soy <span className="font-bold">Rodrigo Bessone</span>, un desarrollador web autodidacta con pasión por la programación.
            </p>
            <p className="mt-4">
              He desarrollado aplicaciones como un <span className="font-semibold">e-commerce</span>, una web para <span className="font-semibold">ventas de comida rápida</span> y un <span className="font-semibold">juego de fantasía</span>. Uso tecnologías como <span className="text-[#f7df1e]">JavaScript</span>, <span className="text-[#61dafb]">React</span>, <span className="text-[#38b2ac]">Tailwind CSS</span>, <span className="text-[#3eaf7c]">Node.js</span> y <span className="text-[#47a248]">MongoDB</span>.
            </p>
            <p className="mt-4">
              Siempre busco aprender más y mejorar mis habilidades para crear soluciones innovadoras y efectivas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
