import Image from "next/image";
import React from "react";
import projectImg from "../../public/assets/project1-ss.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <p className="pb-4 pt-2 ">
          This is one of many projects I made throughout my journey, you can
          check out my{" "}
          <a
            href={"https://www.github.com/moesecc"}
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>{" "}
          to see my other projects varying from frontend to backend
        </p>
        {/* grid md:grid-cols-2 gap-8 */}
        <div className="flex justify-center items-center m-auto my-5">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
