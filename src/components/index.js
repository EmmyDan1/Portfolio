import { image } from "framer-motion/client";

export { default as Home } from "./Home";
export { default as Navbar } from "./Navbar";
export { default as Experience } from "./Experience";
export { default as Skills } from "./Skills";
export { default as Footer } from "./Footer";
export { default as About } from "./About";
export { default as Contact } from "./Contact";

export const projects = [
  {
    name: "CrossGate",
    image: "https://picsum.photos/id/237/200/200",
    alt: "CrossGate",
    link: "https://cross-gate.vercel.app/",
    description:
      "Trade bridge platform (React/TypeScript) linking Nordic exporters with African markets.",
  },
  {
    name: "VerVent Device Support and Repair",
    image: "https://picsum.photos/id/236/200/200",
    alt: "VerVent",
    link: "https://vervent-1.vercel.app/",
    description:
      "A responsive website for showcasing phone and device repair services with clear pricing and service categories.",
  },

  {
    name: "Dancademy (Online Learning Platform)",
    image: "https://picsum.photos/id/241/200/200",
    alt: "Dancademy (Online Learning Platform)",
    link: "https://dancademy.vercel.app/",
    description:
      "A sleek online learning platform for browsing, enrolling in, and tracking courses using a clean UI.",
  },
  {
    name: "Abstract – Design Collaboration Platform",
    image: "https://picsum.photos/id/236/200/200",
    alt: "Abstract Design Collaboration Platform",
    link: "https://abstract-five-eosin.vercel.app/",
    description:
      "A modern web app inspired by Abstract for version control, real-time design collaboration, and project management. Built with React, Tailwind CSS, and Framer Motion.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Daniel's Table (Restaurant Website)",
    image: "https://picsum.photos/id/235/200/200",
    alt: "Daniel's Table (Restaurant Website)",
    link: "https://daniel-s-table.vercel.app/",
    description:
      "A clean, modern restaurant site with menu navigation and cart functionality for placing food orders.",
  },
  {
    name: "Discovaa Website (StartUp)",
    image: "https://picsum.photos/id/238/200/200",
    alt: "Discovaa Website (StartUp)",
    link: "https://discovaa.vercel.app/",
    description:
      "A full startup website with multiple sections, showcasing discovery features, event highlights, and company information — all built with a responsive and scalable design.",
  },
  {
    name: "Personal Portfolio Website",
    image: "https://picsum.photos/id/237/200/200",
    alt: "Personal Portfolio Website",
    link: "https://portfolio-two-steel-93.vercel.app/",
    description:
      "My personal portfolio showcasing frontend skills, featured projects, and professional experience.",
  },
  {
    name: "DanMart Ecommerce Website",
    image: "https://picsum.photos/id/240/200/200",
    alt: "General Ecommerce Website",
    link: "https://dan-mart-ecommerce.vercel.app/",
    description:
      "An ecommerce storefront with product listings, add-to-cart functionality, and responsive layout.",
  },
  {
    name: "Ip Address Tracker App",
    image: "https://picsum.photos/id/239/200/200",
    alt: "Blog Website for a Fashion Brand",
    link: "https://emmydan1.github.io/ip-address-tracker/",
    description:
      "A tool that tracks IP address locations using an external API and displays them on an interactive map.",
  },
  {
    name: "Fitness Admin App",
    image: "https://picsum.photos/200/200",
    alt: "Fitness Admin App",
    link: "https://fitness-admin-dashboard.vercel.app/",
    description:
      "An admin dashboard UI for managing users, plans, and analytics in a fitness-based web app.",
  },

  {
    name: "Browser Extensions",
    image: "https://picsum.photos/id/236/200/200",
    alt: "Browser Extensions",
    link: "https://browser-extensions-six.vercel.app/",
    description:
      "A landing page for browser extensions with clean UI, feature highlights, and call-to-action sections.",
  },
];
