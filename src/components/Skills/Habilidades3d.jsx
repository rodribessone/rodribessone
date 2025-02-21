import React, { useEffect } from "react";

const Habilidades3D = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.min.js";
    script.async = true;
    script.onload = () => {
      if (window.TagCanvas) {
        window.TagCanvas.Start("habilidadesCanvas", "habilidadesTags", {
          textColour: "#ffffff",
          outlineColour: "transparent",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          wheelZoom: false,
          textHeight: 15,
          imageScale: 0.3,
          initial: [0.1, 0.2],
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Lista de habilidades oculta (usada para el TagCanvas) */}
      <div id="habilidadesTags" className="hidden">
        <ul>
          {[
            { src: "/icons/html-icon.png", name: "HTML" },
            { src: "/icons/css-icon.png", name: "CSS" },
            { src: "/icons/js-icon.png", name: "JavaScript" },
            { src: "/icons/react-icon.png", name: "React" },
            { src: "/icons/tailwind-css-icon.png", name: "Tailwind" },
            { src: "/icons/mongodb-icon.png", name: "MongoDB" },
            { src: "/icons/node-js-icon.png", name: "Node.js" },
          ].map((skill, index) => (
            <li key={index}>
              <a href="#" className="flex flex-col items-center">
                <img src={skill.src} alt={skill.name} className="w-10 h-10 mb-1" />
                <span className="text-sm text-white">{skill.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Canvas donde se renderiza la esfera */}
      <canvas id="habilidadesCanvas" width={350} height={350} className="max-w-full sm:w-[400px] sm:h-[400px]"></canvas>
    </div>
  );
};

export default Habilidades3D;
