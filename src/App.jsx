import './App.css'
import Inicio from './components/Inicio/Inicio'
import Proyectos from './components/Proyectos/Proyectos'
import Skills from './components/Skills/Skills'
import Contacto from './components/Contacto/Contacto'
import { Lumiflex } from "uvcanvas"

function App() {

  return (
    <>
      <div className='w-full flex flex-col relative'>
       < Lumiflex className='fixed'/> 
      {/*Nav, acomodar que quede en el medio y poner los links para inicio proyecto y contacto */}
      <Inicio />
      <Proyectos />
      <Skills />
      <Contacto />
      </div>
    </>
  )
}

export default App
