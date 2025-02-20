import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import CopiarCorreo from './CopiarMail';

export default function Contacto() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 pt-10 px-10 text-white">
      <h1 className="text-6xl font-bold text-[#899388] text-center mb-10">
        Contacto
      </h1>
      <div className="flex flex-col md:flex-row flex-grow gap-10">
        {/* Sección de redes y contacto */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl text-center text-[#899388]">MIS REDES</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="text-6xl" />
            </a>
            <a
              href="https://linkedin.com/in/tuPerfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-6xl" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="rounded border-2 border-[#899388] text-center text-xl px-4 py-2">
                rodrigo-bessone@hotmail.com
              </p>
              <div className="relative flex items-center justify-center">
                <a
                  href="mailto:rodrigo-bessone@hotmail.com"
                  className="px-4 py-2 bg-[#899388] text-white rounded flex items-center gap-2 hover:bg-[#abb7aa] focus:outline-none"
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
                  className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-700 rounded opacity-0 transition-opacity duration-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Enviar email
                </div>
                <CopiarCorreo />
              </div>
            </div>
          </div>
        </div>
        {/* Sección alternativa a la foto */}
        <div className="md:w-1/2 flex items-center justify-center">
          {/* Puedes reemplazar este SVG con alguna ilustración que te represente o te guste */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 h-64 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v6m-8-6v6m0 0H8m8 0h2" />
          </svg>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center mt-10 px-4">
        <p className="text-sm">&copy; 2024</p>
        <a className="text-sm cursor-pointer hover:underline">Code by Rodri</a>
      </div>
    </div>
  );
}
