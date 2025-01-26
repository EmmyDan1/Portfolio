import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  const navData = [
    { name: "Home", path: "" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Testimonial", path: "#testimonial" },
    { name: "Contact", path: "#contact" },
  ];

  const handlePrint = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=1xJvqhfe_D6EXF1HmnymGzZqn-GzcLGQx";
    const printWindow = window.open(pdfUrl, "_blank");

    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <>
      {/* Navbar */}
      <header
        style={{ position: "sticky", top: 0, zIndex: 100 }}
        className="shadow-lg bg-orange-600/80"
      >
        <nav className="bg-white py-2 font-Inter flex items-center md:px-12 px-4">
          <div className="">
            <h3 className="text-black text-base sm:text-lg md:text-xl uppercase  cursor-pointer">
              <a href="/" className="font-bold font-robo">
                Daniel
              </a>
            </h3>
          </div>

          <ul className="hidden md:flex justify-between capitalize mx-auto">
            {navData.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="text-black block px-4 py-2 text-sm md:text-base lg:text-lg tracking-wide font-medium 
hover:bg-gray-100 hover:text-black 
hover:border-b-2 hover:border-gray-800 
transition-all duration-300
"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3 ms-auto">
            <a
              onClick={handlePrint}
              target="_blank"
              className="hidden md:block bg-white text-black rounded-full py-1 px-6 
             border border-gray-800 hover:bg-black hover:text-white 
             hover:outline-none hover:ring-2 hover:ring-gray-800 
             transition-all duration-300 font-medium"
            >
              Download <span className="sm:hidden md:inline-block">CV</span>
              <FaCloudDownloadAlt
                fontSize={28}
                className="sm:inline-block md:hidden text-orange-200 ps-2"
              />
            </a>

            <button
              className="md:hidden bg-gray-100 rounded-md p-2 hover:outline outline-black border-black"
              onClick={() => setCollapse(!collapse)}
            >
              {collapse ? (
                <IoClose fontSize={28} color="black" />
              ) : (
                <CgDetailsMore fontSize={28} color="black" />
              )}
            </button>
          </div>
        </nav>
        {collapse && (
          <div className="md:hidden bg-gray-300 pb-4 space-y-1">
            <ul className="flex flex-col capitalize">
              {navData.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
                    className="text-white block px-4 py-2 text-lg tracking-wide font-medium  hover:text-white 
             hover:outline-none     hover:rounded-none transition-all duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              onClick={handlePrint}
              target="_blank"
              className="md:hidden inline-block m-4 bg-black text-white rounded-full hover:outline hover:font-bold px-3 md:px-6 py-2 hover:bg-white hover:text-black outline-black cursor-pointer font-medium"
            >
              Download CV
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
