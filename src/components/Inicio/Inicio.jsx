export default function Inicio() {
  return (
    <section className='h-screen flex flex-col relative'>
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/RodriInicio.png')" }}
      ></div>
      <div className='my-auto sticky top-28 px-6 md:px-12'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
          <h1 className='text-5xl md:text-9xl font-bold text-[#899388]'>RODRIGO</h1>
          <div className='text-center md:text-left mt-4 md:mt-0'>
            <p className='text-lg md:text-xl text-[#777777]'>Desarrollador Full-Stack.</p>
            <p className='text-lg md:text-xl text-[#777777]'>Amante de la programación y el desarrollo web.</p>
          </div>
        </div>
        <h1 className='text-5xl md:text-9xl font-bold text-[#899388] text-end md:mx-12'>BESSONE</h1>
      </div>
    </section>
  )
}
