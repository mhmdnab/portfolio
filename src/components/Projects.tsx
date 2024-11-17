import Image from "next/image";
import React from "react";
import projectImg from "../../public/assets/project1-ss.png";
import projectImg2 from "../../public/assets/project2-ss.png";
import projectImg3 from "../../public/assets/projectImage3.png";
import projectImg4 from "../../public/assets/Screenshot 2024-11-06 224717.png";
import projectImg5 from "../../public/assets/Screenshot 2024-11-17 213647.png";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <p className="pb-4 pt-2 ">
          Here is a selection of projects from my portfolio that demonstrate a
          breadth of frontend and backend work across various frameworks. Please
          feel free to explore my{" "}
          <a
            href={"https://www.github.com/moesecc"}
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-[#147b86]"
          >
            GitHub
          </a>{" "}
          for additional examples of my work.
        </p>
        {/**/}
        <div className=" justify-center items-center m-auto py-28  grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] rounded-xl border-2 border-[#055b64] group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] cursor-pointer hover:scale-105 ease-out duration-200">
            <Image
              src={projectImg}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-sm md:text-md text-white tracking-wider text-center">
                Full Stack E-commerce website
              </h3>
              <p className="pb-4 pt-2 text-white text-center text-md md:text-base">
                Mongo DB, Express Js, React Js and Node Js
              </p>
            </div>
          </div>
          <Link
            href={"https://weatherappmoesecc.netlify.app"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] rounded-xl border-2 border-[#055b64] group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] hover:scale-105 ease-in duration-200"
          >
            <Image
              src={projectImg2}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex-col items-center">
              <h3 className="text-sm md:text-md text-white tracking-wider">
                Weather App using an API
              </h3>
              <p className="pb-2 pt-2 text-white text-md md:text-base">
                React Js and CSS
              </p>
              <FaExternalLinkAlt className="text-white mt-1 m-auto" />
            </div>
          </Link>
          <Link
            href={"https://ahmadnaboulsi.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] rounded-xl border-2 border-[#055b64] group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] hover:scale-105 ease-in duration-200"
          >
            <Image
              src={projectImg3}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex-col items-center">
              <h3 className="text-sm md:text-md text-white tracking-wider">
                Ahmad Naboulsi's Portfolio that displays his work
              </h3>
              <p className="pb-2 pt-2 text-white text-md md:text-base">
                Next and Tailwind CSS
              </p>
              <FaExternalLinkAlt className="text-white mt-1 m-auto" />
            </div>
          </Link>
          <Link
            href={"https://doneperfumes.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] rounded-xl border-2 border-[#055b64] group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] hover:scale-105 ease-in duration-200"
          >
            <Image
              src={projectImg4}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex-col items-center">
              <h3 className="text-sm md:text-md text-white tracking-wider">
                Done Perfumes' Website displaying their products
              </h3>
              <p className="pb-2 pt-2 text-white text-md md:text-base">
                Next and Tailwind CSS
              </p>
              <FaExternalLinkAlt className="text-white mt-1 m-auto" />
            </div>
          </Link>
          <Link
            href={"https://doneperfumes.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-[#0ea2b3] rounded-xl border-2 border-[#055b64] group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] hover:scale-105 ease-in duration-200"
          >
            <Image
              src={projectImg5}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex-col items-center">
              <h3 className="text-sm md:text-md text-white tracking-wider">
                KAYZONE, a marketing agency
              </h3>
              <p className="pb-2 pt-2 text-white text-md md:text-base">
                SaaS website using Next and Tailwind CSS
              </p>
              {/* <FaExternalLinkAlt className="text-white mt-1 m-auto" /> */}
            </div>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Projects;
