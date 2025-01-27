import React from "react";
import { useState, useEffect } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaAward } from "react-icons/fa6";
import user from "../assets/Profilephoto4use.png";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

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

  return (
    <section
      className="  h-full py-10    

 text-white"
    >
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full max-w-xs mx-auto lg:hidden">
          <img
            src={user}
            alt="Abass"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col mt-4 md:translate-x-48 md:mt-8 lg:translate-x-0 lg:mt-0">
          <div className="md:text-start pl-3">
            <span className="inline-block border-2 bg-black text-white border-white px-3 py-1 rounded-full mb-4 ml-10">
              Hello!
            </span>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-black ml-10 font-inter">
              I’m{" "}
              <span className="text-black font-inter">Daniel Emmanuel,</span>
              <span className="block my-4">{text}</span>
            </h1>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="px-12">
              {/* Profile Brief */}
              <div className="mb-12 text-center">
                <ImQuotesLeft className="me-2 text-white" fontSize={25} />
                <h3 className="my-2 font-inter text-black text-start lg:text-md md:text-lg sm:text-base text-sm inline-block font-bold">
                  Crafting responsive, user-focused interfaces with React.js,
                  HTML5, CSS3, TailwindCSS and JavaScript. Dedicated to
                  delivering seamless and engaging web experiences.
                </h3>

                <ImQuotesRight
                  className="ms-2 float-right text-white"
                  fontSize={25}
                />
              </div>

              <div className="my-8">
                <div className="text-center flex items-center space-x-5">
                  <FaAward fontSize={50} className="text-black inline-block" />
                  <div>
                    <h3 className="md:text-2xl lg:text-3xl text-lg font-bold text-black">
                      3 Years
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl font-medium text-black">
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden w-full max-w-xs mx-auto -translate-x-32  lg:block">
          <img
            src={user}
            alt="Abass"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
