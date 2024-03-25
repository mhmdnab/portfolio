import Image from "next/image";
import React from "react";
import projectImg from "../../public/assets/project1-ss.png";
import projectImg2 from "../../public/assets/Screenshot 2024-03-06 113940.png";
import Link from "next/link";

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
            className="underline"
          >
            GitHub
          </a>{" "}
          for additional examples of my work.
        </p>
        {/**/}
        <div className=" justify-center items-center m-auto my-5  grid md:grid-cols-2 gap-8 ">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] ">
            <Image
              src={projectImg}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-lg md:text-2xl text-white tracking-wider text-center">
                Full Stack E-commerce page
              </h3>
              <p className="pb-4 pt-2 text-white text-center text-md md:text-base">
                Mongo DB, Express, React and Node
              </p>
            </div>
          </div>
          <Link
            href={"https://weatherappmoesecc.netlify.app"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#147b86] to-[#055b64] "
          >
            <Image
              src={projectImg2}
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-lg md:text-2xl text-white tracking-wider text-center">
                Weather App using an API
              </h3>
              <p className="pb-4 pt-2 text-white text-center text-md md:text-base">
                React, CSS, and JavaScript
              </p>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
