import React from "react";
import { useState, useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaAward } from "react-icons/fa6";
import user from "/PortFoto.png";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { icon: <SiReact className="text-blue-400" size={24} />, name: "React" },
    {
      icon: <SiTypescript className="text-blue-500" size={24} />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400" size={24} />,
      name: "Tailwind",
    },
    {
      icon: <SiJavascript className="text-yellow-300" size={24} />,
      name: "JavaScript",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden relative py-10"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-900/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-900/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row h-full items-center container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col w-full lg:w-auto lg:ml-16 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center lg:text-left">
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white/90 border border-white/10 px-6 py-2 rounded-full mb-6 backdrop-blur-md font-medium text-sm tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
            >
              Hello! 👋
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Daniel Emmanuel
              </span>
              ,
              <br className="hidden md:block" />
              <motion.span
                className="block mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {text}
                <motion.span
                  className="inline-block w-0.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400 ml-1 align-middle"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: fullText.length * 0.1,
                  }}
                />
              </motion.span>
            </h1>
          </div>
          <motion.div
            className="mb-10 max-w-2xl mx-auto lg:mx-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg text-center lg:text-left text-gray-300 leading-relaxed font-light px-4 lg:px-0">
              I build fast, responsive websites using React, TypeScript, and
              TailwindCSS. I'm dedicated to writing clean code, creating smooth
              interactions, and delivering a better experience for real users.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center lg:items-start gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex justify-center lg:justify-start w-full">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group w-fit"
              >
                <div className="relative">
                  <FaAward
                    size={40}
                    className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">4+ Years</h3>
                  <p className="text-lg text-gray-300 font-light">Experience</p>
                </div>
              </motion.div>
            </div>

            <div className="w-full">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="group relative bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 flex flex-col items-center"
                  >
                    {tech.icon}
                    <div className="mt-2 text-xs text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xs mx-auto lg:max-w-[320px] mb-10 lg:mb-0 lg:ml-80"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="relative group">
            <img
              src={user}
              alt="Daniel Emmanuel"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
