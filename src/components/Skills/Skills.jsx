
import React from 'react';
import Habilidades3D from './Habilidades3d';

export default function Skills() {
  return (
    <section className="sticky top-0 h-[100vh] min-h-screen bg-gradient-to-br from-[#899388] to-gray-800 flex flex-col justify-center p-10">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-center text-white mb-10">Sobre Mi</h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <Habilidades3D />
          </div>
          <div className="md:w-1/2 text-xl text-white leading-relaxed">
            <p>
              Hola! Soy Rodrigo Bessone, desarrollador web autodidacta con pasión por la programación.
            </p>
            <p className="mt-4">
              He crecido diseñando aplicaciones funcionales como un e-commerce, una página para ventas de comida rápida y un juego de fantasía básico. Utilizo tecnologías como React, Tailwind CSS, JavaScript, HTML y CSS; además, manejo el backend con Node.js y MongoDB.
            </p>
            <p className="mt-4">
              Siempre busco aprender más y perfeccionar mis habilidades para crear soluciones innovadoras y efectivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
