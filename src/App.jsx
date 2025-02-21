import './App.css'
import Inicio from './components/Inicio/Inicio'
import Proyectos from './components/Proyectos/Proyectos'
import Skills from './components/Skills/Skills'
import Contacto from './components/Contacto/Contacto'
import Header from "./components/Header/Header"

function App() {
  return (
    <div className='w-full flex flex-col relative '>
      <Header />
      {/* Envolver cada sección con un div que tenga el id correspondiente */}
      <div id="inicio">
        <Inicio />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
    </div>
  )
}

export default App
