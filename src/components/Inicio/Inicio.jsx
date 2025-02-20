
export default function Inicio() {
  return (
    <section className='h-[100vh] flex flex-col relative'>
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/RodriInicio.png')" }}
      ></div>
      <div className='my-auto sticky top-28'>
          <div className='flex justify-between mx-6'>
            <h1 className='text-9xl font-bold text-[#899388]'>RODRIGO</h1>
              <div className=''>
                <p className='text-xl text-[#777777]'>Desarrollador Full-Stack.</p>
                <p className='text-xl text-[#777777]'>Amante de la programación y el desarrollo web.</p>
              </div>
          </div>
          <h1 className='text-9xl font-bold text-[#899388] text-end mx-12'>BESSONE</h1>
      </div>
    </section>
  )
}

