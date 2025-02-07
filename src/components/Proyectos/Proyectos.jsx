import React, { useEffect, useRef } from 'react';
import proyectos from '../../data/Proyectos.json';

export default function Proyectos() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    // Clonar los proyectos al final del contenedor
    const cloneProjects = () => {
      const children = [...container.children];
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    };

    cloneProjects(); // Llama la función al inicio

    const scrollStep = 1; // Velocidad del scroll
    let scrollInterval;

    const startScroll = () => {
        scrollInterval = setInterval(() => {
          container.scrollTop -= scrollStep; // Desplaza hacia abajo
          if (container.scrollTop <= 0) {
            container.scrollTop = container.scrollHeight; // Reinicia al final
          }
        }, 20); // Ajusta el tiempo para controlar la suavidad
      };
  
      startScroll();

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="sticky top-0 h-[100vh] flex bg-black p-10">
      <div className="w-1/2 m-auto">
        <h1 className="text-6xl font-bold w-1/3 text-[#899388]">
          Proyectos destacados
        </h1>
        <p className="text-xl w-1/3 m-4 text-white">
          Mi enfoque de diseño prioriza las necesidades y preferencias de los
          usuarios. Me concentro en crear productos que mejoren la experiencia
          del usuario, asegurándome de que sean funcionales y agradables de
          usar.
        </p>
      </div>
      <div className="w-1/2 relative overflow-hidden">
        <div
          ref={scrollRef}
          className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center overflow-hidden"
        >
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className={`rounded bg-[#899388]/80 m-2 shadow-inner shadow-black p-4

                `}
            >
              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="w-4/5 h-2/5 m-auto rounded shadow-2xl shadow-black"
              />
              <h1 className="text-xl font-bold p-4 text-[#abb7aa]">{proyecto.title}</h1>
              <p className="m-2">
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#abb7aa] hover:underline"
                >
                  Ver Proyecto
                </a>{' '}
                |{' '}
                <a
                  href={proyecto.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver Código
                </a>
              </p>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {proyecto.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center rounded-full border-2 px-2 gap-1"
                  >
                    <img
                      src={`/icons/${lang.icon}`}
                      alt={lang.name}
                      className="w-6"
                    />
                    <span className="text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}