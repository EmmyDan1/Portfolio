import React, { useState, useRef } from "react";
import { HiMiniCheckBadge, HiArrowRight } from "react-icons/hi2";
import { GrLink } from "react-icons/gr";
import { projects } from "./index.js";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const projectInfo = (project) => {
    const element = document.createElement("div");
    element.className =
      "px-2 py-4 text-center flex justify-center items-center";
    element.style.zIndex = "999";
    element.innerHTML = `
        <div>
          <h3 class="font-bold mb-2">${project.name}</h3>
          <a
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-orange-100 text-orange-600 px-2 py-2 rounded-xl inline-block text-lg"
          >
            <span class="inline-block text-orange-500">&#128279;</span> Link
          </a>
        </div>
      `;
    return element;
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden py-20 px-8"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#0e1024] to-[#1a1c3a]"
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-900/20 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>

              <p className="text-lg text-gray-300 mb-6">
                With over{" "}
                <span className="text-orange-400 font-bold">3 years</span> of
                experience as a web designer and developer, I specialize in
                creating user-friendly, scalable, and high-quality digital
                products as a frontend developer.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                My expertise spans a wide range of technologies, including
                HTML5, CSS3, JavaScript, React.js, and other modern frameworks
                and tools. I am confident, naturally curious, and consistently
                focused on improving my workflow to deliver projects on time.
              </p>

              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-white mt-6 mb-4">
                  What I Offer
                </h3>
                <ul className="space-y-3">
                  {[
                    "Affordable prices",
                    "High quality product",
                    "On time project delivery",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-300 font-medium flex items-start"
                    >
                      <HiMiniCheckBadge
                        className="text-orange-400 mt-1 mr-2 flex-shrink-0"
                        size={20}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <div className="lg:w-1/2">
            <motion.h2
              className="text-3xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <div className="relative">
              <motion.div
                className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-6">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                      className="flex-shrink-0 w-72"
                      whileHover={{ y: -5 }}
                    >
                      <div
                        className={`bg-gradient-to-br ${project.color} rounded-xl overflow-hidden shadow-xl h-full flex flex-col`}
                      >
                        <div className="h-40 overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {project.name}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {project.description}
                          </p>
                          <div className="mt-auto">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                            >
                              View Project <HiArrowRight className="ml-2" />
                            </a>
                          </div>
                         
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="flex items-center text-gray-400">
                  <span className="text-sm mr-2">Scroll</span>
                  <HiArrowRight size={18} />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                View All Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
