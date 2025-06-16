import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import typescript from "../assets/typescript.png";

const Skills = () => {
  const skillsets = [
    { name: "HTML5", image: html },
    { name: "CSS3", image: css },
    { name: "Bootstrap", image: bootstrap },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "TailwindCSS", image: tailwindcss },
    { name: "Figma", image: figma },
    { name: "GitHub", image: github },
    { name: "TypeScript", image: typescript },
  ];
  return (
    <div className="md:px-12 px-2 py-12 skill-bg" id="skills">
      <h2 className="text-3xl text-white text-center font-bold dark:text-black">
        My Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsets.map((skill) => (
          <div
            key={skill.name}
            className="bg-gradient-to-br from-gray-300 to-gray-100 rounded-md p-4 text-center hover:bg-orange-300 transition-all duration-300 ease-in-out 
            animate-float"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 mx-auto object-cover animate-pulse-slow"
            />
            <p className="text-center text-orange-900 font-bold mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
