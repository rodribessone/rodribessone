import React from 'react'
import Habilidades3D from './Habilidades3d'

export default function Skills() {
  return (
    <section className='sticky top-0 h-[100vh] flex bg-[#899388]'>
      <div className='flex flex-col w-full'>
        <h1 className='text-6xl font-bold text-center my-auto p-4'>Sobre Mi</h1>
        <div className='flex my-auto'>
          <div className='w-1/2 flex justify-center m-auto'>
            <Habilidades3D />
          </div>
          <div className='w-1/2 p-10 text-xl my-auto'>
          Hola! Soy Rodrigo Bessone, desarrollador web autodidacta con pasión por la programación.
          <br/>
          He crecido diseñando aplicaciones funcionales como un e-commerce, una página para ventas de comida rápida y un juego de fantasía básico. Utilizo tecnologías como React, Tailwind CSS, JavaScript, HTML y CSS; además, manejo el backend con Node.js y MongoDB.
          <br/>
          Siempre busco aprender más y perfeccionar mis habilidades para crear soluciones innovadoras y efectivas.
          </div>
        </div>
      </div>
    </section>
  )
}
