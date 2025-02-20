
export default function Header() {
  return (<>
    <navigate className=' w-full bg-gray-600/70 py-2 px-4 fixed top-6 z-10'>
          <ul className='text-xl flex justify-center space-x-20 mx-8 '>
            <li className='hover:text-[#abb7aa]'>
              INICIO
            </li>
            <li className='hover:text-[#abb7aa]'>
              PROYECTOS
            </li>
            <li className='hover:text-[#abb7aa]'>
              SKILLS
            </li>
            <li className='hover:text-[#abb7aa]'>
              CONTACTO
            </li>
          </ul>
        </navigate>
        </>
  )
}
