import React from "react";
import { useState, useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaAward } from "react-icons/fa6";
import user from "../assets/Profilephoto4use.png";

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
      className="min-h-screen w-full bg-[#0e1024] text-white overflow-hidden relative py-10"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-900/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-900/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-900/20 blur-3xl" />
      </motion.div>

      <div className="flex flex-col lg:flex-row h-full items-center container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xs mx-auto lg:hidden "
        >
          <motion.img
            src={user}
            alt="Daniel Emmanuel"
            className="w-full h-auto object-cover rounded-lg shadow-xl border-2 border-white/10"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col lg:ml-16 mt-4 md:mt-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="md:text-start pl-3 ">
            <motion.span
              className="inline-block border-2 bg-white/10 text-white border-white/20 px-4 py-1 rounded-full mb-6 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              Hello!
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              I'm <span className="text-blue-400">Daniel Emmanuel</span>,
              <motion.span
                className="block my-4 text-3xl md:text-4xl lg:text-5xl font-medium text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {text}
                <motion.span
                  className="inline-block w-1 h-8 bg-blue-400 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: fullText.length * 0.1,
                  }}
                />
              </motion.span>
            </h1>
          </motion.div>
          <motion.div
            className="mb-12 max-w-lg relative mt-6 md:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ImQuotesLeft
              className="absolute -left-2 -top-4 text-white/40"
              size={20}
            />
            <p className="text-lg text-center md:text-xl text-gray-300 leading-relaxed md:text-start">
              I build fast, responsive websites using React, TypeScript, and
              TailwindCSS. I'm dedicated to writing clean code, creating smooth
              interactions, and delivering a better experience for real users.
            </p>
            <ImQuotesRight
              className="float-right   mr-4 text-white/40"
              size={20}
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:flex-row md:items-start gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <FaAward size={40} className="text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">3+ Years</h3>
                <p className="text-lg text-gray-300">Experience</p>
              </div>
            </motion.div>

            <div className="flex gap-4 flex-wrap">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="tooltip bg-white/10 p-3 rounded-lg border border-white/10 backdrop-blur-sm"
                  data-tip={tech.name}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block w-full max-w-[300px] ml-80"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <motion.img
              src={user}
              alt="Daniel Emmanuel"
              className="w-full h-auto object-cover shadow-2xl"
            />
            <motion.div
              className="absolute inset-0 bg-blue-400/10 pointer-events-none"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
