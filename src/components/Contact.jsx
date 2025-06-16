
import React from "react";
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsTwitterX,
} from "react-icons/bs";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 bg-[#0e1024] text-white"
      id="contact"
    >
      <h2 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold  mb-12">
        Let's Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between px-12 py-2 bg-gray-100 text-black mb-8 w-3/5 rounded-md shadow-md">
        <div className="space-y-2">
          <div>
            <a href="tel:+2349131276935" className="cursor-pointer space-x-2">
              <BsPhone className="inline-block text-orange-900" /> +234
              9131276935
            </a>
          </div>
          <div>
            <a
              href="mailto:emmydan68@gmail.com"
              className="cursor-pointer space-x-2"
            >
              <BsEnvelope className="inline-block text-orange-900" />{" "}
              emmydan68@gmail.com
            </a>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/_freezyofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="text-black text-2xl hover:text-orange-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-emmy-d1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-black text-2xl hover:text-orange-700" />
          </a>
          <a
            href="https://www.github.com/Emmydan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-black text-2xl hover:text-orange-700" />
          </a>
        </div>
      </div>
      <form className="w-3/5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="name"
              className="block md:text-lg text-base font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="w-full md:w-2/3">
            <label
              htmlFor="email"
              className="block md:text-lg text-base font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <label
          htmlFor="message"
          className="block md:text-lg text-base font-semibold my-2"
        >
          Message
        </label>
        <textarea
          placeholder="What's on your mind?"
          id="message"
          name="message"
          className="block w-full py-2 h-44 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
        <button
          type="submit"
          className="mt-12 w-full bg-orange-800 py-2 px-4 text-white font-bold rounded-md hover:bg-orange-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
