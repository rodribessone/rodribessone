import React from 'react'
import Header from "../Header/Header"

export default function Inicio() {
  return (
    <section className='h-[100vh] flex flex-col relative'>
      <Header />
      <img src="/images/RodriInicio.png" alt='persona' className='w-2/5 bottom-0 inset-x-1/4 absolute'></img>
      <div className='my-auto sticky top-20'>
          <div className='flex justify-between mx-8'>
            <h1 className='text-9xl font-bold text-[#899388]'>RODRIGO</h1>
              <div className=''>
                <p className='text-xl'>Desarrollador Full-Stack.</p>
                <p className='text-xl'>Amante de la programación y el desarrollo web.</p>
              </div>
          </div>
          <h1 className='text-9xl font-bold text-[#899388] text-end mx-8'>BESSONE</h1>
      </div>
    </section>
  )
}
