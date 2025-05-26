import React, { useState } from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GrLink } from "react-icons/gr";

const About = () => {
  const [show, setShow] = useState(false);
  const projects = [
    {
      name: "VerVent Device Support and Repair",
      image: "https://picsum.photos/id/236/200/200",
      alt: "VerVent",
      link: "https://vervent-1.vercel.app/",
    },

    {
      name: "Daniel's Table (Restaurant Website)",
      image: "https://picsum.photos/id/235/200/200",
      alt: "Daniel's Table (Restaurant Website)",
      link: "https://daniel-s-table.vercel.app/",
    },
    {
      name: "Discovaa Website (StartUp)",
      image: "https://picsum.photos/id/238/200/200",
      alt: "Discovaa Website (StartUp)",
      link: "https://discovaa.vercel.app/",
    },
    {
      name: "Personal Portfolio Website",
      image: "https://picsum.photos/id/237/200/200",
      alt: "Personal Portfolio Website",
      link: "https://portfolio-two-steel-93.vercel.app/",
    },
    {
      name: "DanMart Ecommerce Website",
      image: "https://picsum.photos/id/240/200/200",
      alt: "General Ecommerce Website",
      link: "https://dan-mart-ecommerce.vercel.app/",
    },
    {
      name: "Ip Address Tracker App",
      image: "https://picsum.photos/id/239/200/200",
      alt: "Blog Website for a Fashion Brand",
      link: "https://emmydan1.github.io/ip-address-tracker/",
    },
    {
      name: "Fitness Admin App",
      image: "https://picsum.photos/200/200",
      alt: "Fitness Admin App",
      link: "https://fitness-admin-dashboard.vercel.app/",
    },

    {
      name: "Browser Extensions",
      image: "https://picsum.photos/id/236/200/200",
      alt: "Browser Extensions",
      link: "https://browser-extensions-six.vercel.app/",
    },
  ];

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
    <section className="bg-gray-100" id="about">
      <div className="md:grid md:grid-cols-2 md:gap-6 md:px-12 px-2 py-20 ">
        <div className="md:col-span-1">
          <div className="mb-12">
            <div className="px-12 sm:px-0">
              <p className="lg:text-xl md:text-xl sm:text-lg text-base text-black mb-4">
                With over{" "}
                <span className="text-orange-500 font-bold">3 years</span> of
                experience as a web designer and developer, I specialize in
                creating user-friendly, scalable, and high-quality digital
                products as a frontend developer.
              </p>
              <p className="lg:text-xl md:text-xl sm:text-lg text-base text-black mb-4">
                My expertise spans a wide range of technologies, including
                HTML5, CSS3, JavaScript, React.js, and other modern frameworks
                and tools. I am confident, naturally curious, and consistently
                focused on improving my workflow to deliver projects on time.
              </p>
            </div>

            <div className="space-y-5 px-12 sm:px-0">
              <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base font-bold mt-6 mb-2">
                What I Offer
              </h3>
              <ul className="list-none">
                <li className="lg:text-lg md:text-base text-sm text-black font-medium">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  Affordable prices
                </li>
                <li className="lg:text-lg md:text-base text-sm text-black font-medium">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  High quality product
                </li>
                <li className="lg:text-lg md:text-base text-sm text-black font-medium">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  On time project delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-12 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-md overflow-hidden shadow-md relative"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-20 object-cover"
                  />
                  <div className="p-4">
                    <p>{project.name}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div>
            <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base text-gray-800 font-bold mt-6 mb-2">
              Some Of My Projects
            </h3>
            <ul className="list-none">
              {projects.map((project, i) => (
                <li
                  key={i}
                  className="lg:text-lg md:text-base text-sm font-medium text-black"
                >
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
