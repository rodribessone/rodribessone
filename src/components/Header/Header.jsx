import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [show, setShow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        w-full bg-black py-2 px-4 fixed z-10 transition-transform duration-300
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Menú horizontal para pantallas md y superiores */}
        <div className="hidden md:flex space-x-10">
          <a href="#inicio" className="text-[#899388] hover:text-white transition-colors">
            INICIO
          </a>
          <a href="#proyectos" className="text-[#899388] hover:text-white transition-colors">
            PROYECTOS
          </a>
          <a href="#skills" className="text-[#899388] hover:text-white transition-colors">
            SKILLS
          </a>
          <a href="#contacto" className="text-[#899388] hover:text-white transition-colors">
            CONTACTO
          </a>
        </div>
        {/* Botón de menú para móviles (se muestra en pantallas pequeñas) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#899388] focus:outline-none"
          >
            {mobileMenuOpen ? (
              // Ícono de "X" para cerrar el menú
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícono hamburguesa
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Menú vertical para móviles */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a
                href="#inicio"
                className="block py-2 text-[#899388] hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="block py-2 text-[#899388] hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROYECTOS
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 text-[#899388] hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block py-2 text-[#899388] hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
