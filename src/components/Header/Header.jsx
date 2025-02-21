import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        // Si se hace scroll hacia abajo (y ya pasamos cierto umbral)
        setShow(false);
      } else {
        // Si se hace scroll hacia arriba
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
        w-full bg-[#000000] py-2 px-4 fixed z-10 transition-transform duration-300
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <ul className="text-xl flex justify-center space-x-20 mx-8">
        <li className="text-[#899388] transform transition-transform duration-300 hover:scale-110 cursor-pointer">
        <a href="#inicio" className="text-[#899388]">INICIO</a>
        </li>
        <li className="text-[#899388] transform transition-transform duration-300 hover:scale-110 cursor-pointer">
        <a href="#proyectos" className="text-[#899388]">PROYECTOS</a>
        </li>
        <li className="text-[#899388] transform transition-transform duration-300 hover:scale-110 cursor-pointer">
        <a href="#skills" className="text-[#899388]">SKILLS</a>
        </li>
        <li className="text-[#899388] transform transition-transform duration-300 hover:scale-110 cursor-pointer">
        <a href="#contacto" className="text-[#899388]">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}
