import Image from "next/image";
import React from "react";
import projectImg2 from "../../public/assets/project2-ss.png";
import projectImg4 from "../../public/assets/Screenshot 2024-11-06 224717.png";
import projectImg5 from "../../public/assets/Screenshot 2024-11-17 213647.png";
import projectImg6 from "../../public/assets/Screenshot 2025-01-31 142839.png";
import projectImg7 from "../../public/assets/Screenshot 2025-02-10 131643.png";
import projectImg8 from "../../public/assets/Screenshot 2025-02-23 172032.png";
import projectImg9 from "../../public/assets/Screenshot 2025-06-07 200918.png";

import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  href,
  imgSrc,
  title,
  stack,
}: {
  href: string;
  imgSrc: any;
  title: string;
  stack: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] rounded-xl group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] hover:scale-105 ease-in duration-200"
  >
    <Image
      src={imgSrc}
      alt={title}
      className="rounded-xl group-hover:opacity-10"
    />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex-col items-center">
      <h3 className="text-sm md:text-xl text-white tracking-wider">{title}</h3>
      <p className="pb-2 pt-2 text-white text-md md:text-base">{stack}</p>
      <FaExternalLinkAlt className="text-white mt-1 m-auto" />
    </div>
  </Link>
);

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <p className="pb-4 pt-2">
          Here is a selection of projects from my portfolio that demonstrate a
          breadth of frontend and backend work across various frameworks. Please
          feel free to explore my{" "}
          <a
            href="https://www.github.com/moesecc"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#147b86]"
          >
            GitHub
          </a>{" "}
          for additional examples of my work.
        </p>

        {/* Real Life Projects */}
        <h3 className="text-lg font-semibold text-[#0c4f57] mt-12 mb-4">
          Real Life Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            href="https://senior-frontend-eta.vercel.app"
            imgSrc={projectImg9}
            title="Dakesh - A Bartering platform"
            stack="Next Js, Node Js, Express js, MongoDB, Tailwind CSS"
          />
          <ProjectCard
            href="https://kayzone.agency/"
            imgSrc={projectImg5}
            title="KAYZONE Agency"
            stack="Next Js and Tailwind CSS"
          />
          <ProjectCard
            href="https://leedbuilders-lb.com/"
            imgSrc={projectImg7}
            title="LEED Builders"
            stack="Next Js and Tailwind CSS"
          />
        </div>

        {/* Personal Practice Projects */}
        <h3 className="text-lg font-semibold text-[#0c4f57] mt-12 mb-4">
          Personal Practice Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            href="https://weatherappmoesecc.netlify.app"
            imgSrc={projectImg2}
            title="Weather App"
            stack="React Js, CSS, JavaScript"
          />
          <ProjectCard
            href="https://doneperfumes.vercel.app/"
            imgSrc={projectImg4}
            title="D.one Perfumes"
            stack="Next Js and Tailwind CSS"
          />
        </div>

        {/* Shopify Projects */}
        <h3 className="text-lg font-semibold text-[#0c4f57] mt-12 mb-4">
          Shopify Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            href="https://proled.life/"
            imgSrc={projectImg8}
            title="ProLed"
            stack="Shopify"
          />
          <ProjectCard
            href="https://mycahva.com/"
            imgSrc={projectImg6}
            title="Cahva Creamer"
            stack="Shopify"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
