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
    name: "Dan-X(Saas Admin-Dashboard)",
    image: "https://picsum.photos/id/234/200/200",
    alt: "Dan-X(Saas Admin-Dashboard)",
    link: "https://dan-x-dashboard.vercel.app/",
    description:
      "A SaaS admin dashboard with user management, analytics, and settings.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Context API",
      "React Router",
    ],
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
    name: "VerVent Device Support and Repair",
    image: "https://picsum.photos/id/236/200/200",
    alt: "VerVent",
    link: "https://vervent-1.vercel.app/",
    description:
      "A responsive website for showcasing phone and device repair services with clear pricing and service categories.",
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
    name: "CrossGate",
    image: "https://picsum.photos/id/237/200/200",
    alt: "CrossGate",
    link: "https://cross-gate.vercel.app/",
    description:
      "Trade bridge platform (React/TypeScript) linking Nordic exporters with African markets.",
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
    name: "Ip Address Tracker App",
    image: "https://picsum.photos/id/239/200/200",
    alt: "Blog Website for a Fashion Brand",
    link: "https://emmydan1.github.io/ip-address-tracker/",
    description:
      "A tool that tracks IP address locations using an external API and displays them on an interactive map.",
  },
];
