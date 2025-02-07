import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import CopiarCorreo from './CopiarMail';


export default function Contacto() {

  
  return (
    <div className='relative h-[100vh] flex flex-col bg-black pt-10 px-10 text-white'>
        <h1 className='text-6xl font-bold text-[#899388] text-center'>Contacto</h1>
        <div className='h-full flex'>
            <div className='w-1/2 h-full flex flex-col justify-center'>
                <h2 className='text-center text-4xl text-[#899388]'>MIS REDES</h2>  
                <div className='flex justify-center gap-4 p-4'>
                  <FontAwesomeIcon icon={faSquareGithub} className='text-6xl'/>
                  <FontAwesomeIcon icon={faLinkedin} className='text-6xl'/>
                </div>
                <div className='flex justify-center gap-2'>
                <p className='rounded border-2 border-[#899388] text-center w-3/5 text-xl'>rodrigo-bessone@hotmail.com</p>
                <div className="relative flex items-center justify-center">
                  <a
                    href="mailto:rodrigo-bessone@hotmail.com"
                    className="px-4 py-2 bg-[#899388] text-white rounded flex items-center gap-2 hover:bg-[#abb7aa] focus:outline-none relative"
                    onMouseEnter={(e) =>
                      e.currentTarget.nextSibling.classList.remove("opacity-0")
                    }
                    onMouseLeave={(e) =>
                      e.currentTarget.nextSibling.classList.add("opacity-0")
                    }
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </a>
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-gray-700 rounded opacity-0 transition-opacity duration-200"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Enviar email
                  </div>
                </div>
                <CopiarCorreo />
                </div>
            </div>
            <div className='w-1/2 border-2 border-white'> aca foto </div>
        </div>
        <div className='text-9xl text-center'>RODRIGO BESSONE</div>
        <div className='flex justify-between px-4 mt-8'>
          <p>Copyright © 2024</p>
          <a className='cursor-pointer hover:underline'>Code by Rodri</a>
        </div>
    </div>
  )
}
